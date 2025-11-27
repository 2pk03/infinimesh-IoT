# Installation & Local Run

This guide replaces the old PDF and matches the current repo layout and defaults.

## Prerequisites

See [prerequisites.md](prerequisites.md) for OS-specific installs. You need:
- Docker + Docker Compose (desktop or engine + compose plugin)
- Git
- OpenSSL (for self-signed certs if you need TLS for MQTT)
- MQTT client for testing (e.g., `mosquitto-clients`)

Platform defaults use `BASE_DOMAIN=infinimesh.local` (see `.env`). Adjust to something that resolves to your machine (e.g., `127.0.0.1.nip.io`) to avoid editing `/etc/hosts`.

## Hostname setup

If not using a wildcard DNS like `127.0.0.1.nip.io`, add entries to `/etc/hosts`:

```
127.0.0.1 api.infinimesh.local
127.0.0.1 console.infinimesh.local
127.0.0.1 traefik.infinimesh.local
127.0.0.1 rbmq.infinimesh.local
127.0.0.1 db.infinimesh.local
127.0.0.1 media.infinimesh.local
127.0.0.1 mqtt.infinimesh.local
```

## Bring up the stack

```bash
git clone https://github.com/2pk03/infinimesh-IoT.git
cd infinimesh-IoT
# optional: set INFINIMESH_VERSION in .env to pin an image tag
docker compose up -d
```

Services and URLs:

- Console UI: http://console.${BASE_DOMAIN}
- API (gRPC/Connect/REST via Traefik): http://api.${BASE_DOMAIN}
- Traefik dashboard: http://traefik.${BASE_DOMAIN}
- ArangoDB: http://db.${BASE_DOMAIN}
- RabbitMQ UI: http://rbmq.${BASE_DOMAIN}

## Default credentials (for local only)

- Platform root user: `root` / `infinimesh` (from `INF_DEFAULT_ROOT_PASS` in `.env`)
- ArangoDB: `root` / `openSesame`
- RabbitMQ: `infinimesh` / `infinimesh`

Change these for anything beyond local testing.

## CLI

- Install from the bundled `inf-cli` module (or the release at https://github.com/2pk03/infimesh-CLI):
  ```bash
  cd inf-cli
  go install ./...
  ```
- Point the CLI at the local API (port defaults to 8000):
  ```bash
  inf login --api http://api.${BASE_DOMAIN}:8000 --username root --password infinimesh --insecure
  inf namespaces create demo
  inf namespaces use demo
  inf devices create demo-sensor
  inf devices token demo-sensor > demo-sensor.token
  ```
- Shadow/MQTT examples are in [device-auth.md](device-auth.md).
