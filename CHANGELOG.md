# Changelog

All notable changes to this project will be documented in this file.

## [v3.0.0] - 2025-11-28

### Added
- Optional ACME/Let's Encrypt TLS termination in Traefik with HTTPS entrypoints across API, console, media, RabbitMQ, and ArangoDB.
- Production-focused compose options: Watchtower auto-updates (profile `prod`) and persistent RabbitMQ data/log volumes.
- SaaS deployment guide (`docs/saas.md`) covering DNS/ACME setup, bring-up, and persistence.
- gRPC-gateway TLS configuration helper tests for custom CA verification in `cmd/web`.

### Changed
- `docker-compose.yaml` now mounts Traefik ACME storage, exposes :443, and switches Traefik routers to HTTPS with certresolver.
- Web gateway supports `APISERVER_CA_FILE` for secure upstream verification and points HTTP_FS to HTTPS media by default.
- Traefik config now redirects HTTP→HTTPS and disables exposed-by-default docker services for safer production defaults.

### Fixed
- Internal web→repo TLS configuration now surfaces CA load errors explicitly instead of silently skipping verification.

## [v2.5.2] - 2025-11-27

### Added
- Vendored protobufs in `third_party/infinimesh-proto` with local regeneration instructions and Connect/grpc/OpenAPI outputs.
- New GitHub workflows: tag-only Docker builds, Swagger Pages publishing, and release publishing from changelog.
- Expanded test coverage for auth middleware, sessions controller, devices token issuance, MQTT bridge helpers, and shadow JSON merge.
- Fake repo helpers to unit test access-controlled controllers without a database.

### Changed
- README updated to reflect the current platform description, local proto usage, and build/test guidance.
- TLS setup in web gateway now supports custom CA and enforces verification.
- Redis session activity uses `SCAN` instead of `KEYS` to avoid blocking and handles empty results.

### Fixed
- OAuth provider handler now returns proper status on marshal errors.
- Root claim handling now uses boolean values so privileged tokens work as intended.
- Swagger Pages workflow now passes `GITHUB_TOKEN` to actions.

[v3.0.0]: https://github.com/2pk03/infinimesh-IoT/releases/tag/v3.0.0
[v2.5.2]: https://github.com/2pk03/infinimesh-IoT/releases/tag/v2.5.2
