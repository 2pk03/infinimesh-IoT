# Device Authentication & MQTT

Devices can authenticate with tokens (JWT) or TLS client certificates. Tokens are simpler for quick starts; certificates fit stricter deployments.

## Token-based auth

1. Create a device and issue a token:
   ```bash
   inf devices create demo-sensor
   inf devices token demo-sensor --allow-post > demo-sensor.token
   ```

2. Use the token over MQTT (username = device ID, password = token):
   ```bash
   mosquitto_pub -h api.${BASE_DOMAIN} -p 1883 \
     -u demo-sensor -P "$(cat demo-sensor.token)" \
     -t shadow/devices/demo-sensor/desired \
     -m '{"reboot":true}'
   ```

3. Shadow via CLI:
   ```bash
   inf shadow set demo-sensor --reported '{"online":true,"temp":21.5}'
   inf shadow get demo-sensor
   ```

CLI flag equivalents for MQTT: `inf devices mqtt --device-id demo-sensor --device-token "$(cat demo-sensor.token)" --topic shadow/devices/%s/desired`.

To read/write via CLI:
```bash
inf shadow get demo-sensor
inf shadow set demo-sensor --desired '{"threshold":50}'
```

## Certificate-based auth

Generate a key/cert pair (self-signed example):
```bash
openssl genrsa -out device.key 4096
openssl req -new -x509 -sha256 -key device.key -out device.crt -days 365 \
  -subj "/CN=demo-sensor"
```

Upload the public cert when creating the device (UI or CLI `inf devices create` with `--crt device.crt`), then connect:
```bash
mosquitto_pub --cafile /etc/ssl/certs/ca-certificates.crt \
  --cert device.crt --key device.key \
  -t shadow/devices/demo-sensor/reported \
  -m '{"abc":1337}' \
  -h api.${BASE_DOMAIN} -p 8883 --tls-version tlsv1.2
```

Adjust `--cafile` to your OS trust store. Replace topic `%s` with your device ID.

## Topics

- Desired: `shadow/devices/<device>/desired`
- Reported: `shadow/devices/<device>/reported`
- Use QoS 1 where supported.

## Troubleshooting

- 401/permission errors: ensure token includes the device with at least read; reissue with `--allow-post` for writes.
- Connection refused: check broker host/port and that `docker compose ps` shows `mqtt-bridge` healthy.
- TLS failures: verify `--cafile` points to a CA that signed the broker cert (or use provided `hack/server.crt` for local).
