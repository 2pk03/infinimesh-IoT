# Production / SaaS Deployment Notes

This repository now carries the commercial-style setup used for the hosted SaaS. Key changes vs. local/dev:

- Traefik terminates TLS on `:443` with Let's Encrypt (ACME) and forces HTTP→HTTPS.
- Media/http-fs and console traffic use HTTPS; RabbitMQ has persistent volumes.
- Optional auto-updates via Watchtower (off by default, enable with a profile).

## Prerequisites
- Public DNS for `BASE_DOMAIN` with `api`, `console`, `traefik`, `rbmq`, `db`, and `media` pointing at your host.
- Ports `80` and `443` reachable for ACME HTTP-01/TLS-ALPN challenges.
- Update the contact email in `traefik.yml` under `certificatesResolvers.letsencrypt.acme.email`.

## One-time setup
```bash
# From repo root
mkdir -p letsencrypt
touch letsencrypt/acme.json
chmod 600 letsencrypt/acme.json
```
Traefik will populate `acme.json` with issued certificates.

## Bring-up
```bash
# Standard stack with HTTPS
docker compose up -d

# Optional: enable Watchtower auto-updates
docker compose --profile prod up -d watchtower
```

## Notes
- `docker-compose.yaml` now uses HTTPS entrypoints for Traefik routers and points `HTTP_FS` at `https://media.${BASE_DOMAIN}`.
- RabbitMQ data and logs persist to the new `rbmq_data` and `rbmq_log` volumes.
- For internal web→repo TLS (if you enable `SECURE=true`), set `APISERVER_CA_FILE` to a CA your repo endpoint presents. Default remains plaintext inside the compose network.
