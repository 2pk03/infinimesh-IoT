# Infinimesh IoT Platform

Infinimesh is an open IoT platform for device registry, auth, shadow sync, MQTT bridge, and REST/gRPC/Connect APIs. It is multi-tenant, graph-based for fine-grained access, and runs anywhere (Kubernetes/Docker) with no vendor lock-in.

Our APIs (REST / gRPC / ConnectRPC) are considered beta and may change. Infinimesh already includes:

- **MQTT 3 & 5 support**
- **State management (digital twin)**
- **Graph-based permission management**
- **TLS 1.2 / 1.3 support**
- **Device-to-Cloud and Cloud-to-Device messages**
- **Enhanced UI**
- **k8s and Docker environments**

## Documentation

The old wiki was removed; see `docs/` in this repo:

- docs/installation.md — prerequisites and Docker Compose quickstart
- docs/device-auth.md — device tokens/certs and MQTT usage
- API schema: `api.swagger.json`

## Build status

[![Go Report Card](https://goreportcard.com/badge/github.com/infinimesh/infinimesh)](https://goreportcard.com/report/github.com/infinimesh/infinimesh)

## Releases

- Current version: `v2.5` (see `CHANGELOG.md`).

## Protobufs

Protos are vendored at `third_party/infinimesh-proto` (mapped via `replace` in `go.mod`). To edit/regenerate:

```bash
cd third_party/infinimesh-proto
buf mod update
buf generate
```

See `third_party/infinimesh-proto/README.md` for tool requirements.

## Client libraries

We vendor the protobuf module and ship generated Go stubs. Generate clients for other languages from `third_party/infinimesh-proto` or fetch prebuilt packages that match these schemas.

## Community

You can reach out to the community via Discord.

![](http://invidget.switchblade.xyz/801798988163448832)

## Quickstart (Docker Compose)

- Prereqs: Docker + Docker Compose. `BASE_DOMAIN` (from `.env`) is the root host used for all services (e.g., `console.${BASE_DOMAIN}`, `api.${BASE_DOMAIN}`). Default is `infinimesh.local`; change it to something that resolves to your machine (e.g., `127.0.0.1.nip.io`) to avoid editing `/etc/hosts`.
- Hostnames: the stack expects `console.${BASE_DOMAIN}`, `api.${BASE_DOMAIN}`, `traefik.${BASE_DOMAIN}`, `db.${BASE_DOMAIN}`, `rbmq.${BASE_DOMAIN}`, and `media.${BASE_DOMAIN}` to resolve to your host. For a quick local run with the default `infinimesh.local`, add them to `/etc/hosts`.
- Start the platform: `docker compose up -d` (images come from GHCR; set `INFINIMESH_VERSION` in `.env` to pin a release).
- Access:
  - Console UI: http://console.${BASE_DOMAIN}
  - API (gRPC/Connect/REST): http://api.${BASE_DOMAIN}
  - Traefik dashboard: http://traefik.${BASE_DOMAIN}
  - ArangoDB UI: http://db.${BASE_DOMAIN}
  - RabbitMQ management: http://rbmq.${BASE_DOMAIN}
- Default credentials (change these for anything beyond local testing):
  - Platform admin: user `root`, password from `INF_DEFAULT_ROOT_PASS` (`infinimesh` by default in `.env`/`docker-compose.yaml`).
  - ArangoDB: user `root`, password `openSesame` (see `docker-compose.yaml`).
  - RabbitMQ: user/password from `.env` (`infinimesh` / `infinimesh` by default).
- MQTT endpoints: 1883 (plain), 8883 (TLS using `hack/server.crt`/`server.key`). Use the tokens issued via the console/CLI to authenticate clients.

### CLI Walkthrough (inf)

Install the CLI from https://github.com/infinimesh/inf (or prebuilt package), then:

```bash
# point the CLI at the local stack (h2c on port 8000)
API=http://api.${BASE_DOMAIN}:8000

# 1) Login as root (default password is INF_DEFAULT_ROOT_PASS from .env)
inf login --api ${API} --username root --password infinimesh --insecure

# 2) Create and switch to a namespace
inf namespaces create demo --title "Demo"
inf namespaces use demo

# 3) Create a device and issue a token for it
inf devices create demo-sensor
inf devices token demo-sensor --name local --scopes shadow:rw > demo-sensor.token

# 4) Set shadow state via CLI (reported example)
inf shadow set demo-sensor --reported '{"online":true,"temp":21.5}'
inf shadow get demo-sensor

# 5) Use the issued token for MQTT
mosquitto_pub -h api.${BASE_DOMAIN} -p 1883 \
  -u demo-sensor -P "$(cat demo-sensor.token)" \
  -t shadow/devices/demo-sensor/desired \
  -m '{"reboot":true}'

Notes:
- The CLI now accepts `--api` as a URL or host; it defaults missing ports to `:8000`, which matches the repo service exposed by Traefik.
- MQTT flags support bearer-style auth (`--device-id/--device-token`) in addition to basic auth or certs; the default topic template is `shadow/devices/%s/desired` where `%s` is replaced by the device ID.
```

Run `inf help` and `inf <command> --help` if your CLI version uses slightly different flags; the flow above is the expected minimal path: login, pick a namespace, create device, get a token, set/query shadow, and bridge over MQTT.


## CLI

### Usage

Start with `inf help` and `inf help login` ;)

### Homebrew

See [macOS](#macos).

### Snap

Just run

```shell
snap install inf
```

and see usage [usage](#usage)

### Linux

#### `.deb` (Debian, Ubuntu, etc.)

1. Go to [CLI Releases](https://github.com/infinimesh/inf/releases)
2. Get `.deb` package for your CPU arch (`arm64` or `x86_64`)
3. `dpkg -i path/to/.deb`

If you're using some other arch, let us know, we'll add it to the build. Meanwhile - try [building from source](#build-from-source)

Then see usage [usage](#usage)

#### `.rpm` (RedHat, CentOS, Fedora, etc.)

1. Go to [CLI Releases](https://github.com/infinimesh/inf/releases)
2. Get `.rpm` package for your CPU arch (`arm64` or `x86_64`)
3. `yum localinstall path/to/.rpm` or `dnf install path/to/.rpm`

If you're using some other arch, let us know, we'll add it to the build. Meanwhile - try [building from source](#build-from-source)

Then see usage [usage](#usage)

#### AUR (Arch Linux, Manjaro, etc.)

If you have `yaourt` or `yay` package must be found automatically by label `inf-bin`

Otherwise,

1. `git clone https://aur.archlinux.org/packages/inf-bin`
2. `cd inf-bin`
3. `makepkg -i`

Then see usage [usage](#usage)

#### Others

If you're using other package manager or have none, you can download prebuilt binary in `.tar.gz` archive for `arm64` or `x86_64`, unpack it and put `inf` binary to `/usr/bin` or your `$PATH/bin`.

If you're using some other arch, let us know, we'll add it to the build. Meanwhile - try [building from source](#build-from-source)

Then see usage [usage](#usage)

### macOS

If you're using [**Homebrew**](https://brew.sh):

```shell
brew tap infinimesh/inf
brew install inf
```

You're good to go!

Then see usage [usage](#usage)

If you don't have [**Homebrew**](https://brew.sh), consider using it ;), otherwise you can get prebuilt binary from [CLI Releases page](https://github.com/infinimesh/inf/releases) as an `.tar.gz` archive.

```shell
# if you have wget then
wget https://github/infinimesh/inf/releases/#version/inf-version-darwin-arch.tar.gz
# if you don't, just download it
tar -xvzf #inf-version-darwin-arch.tar.gz
# move binary to /usr/local/bin or alike
mv #inf-version-darwin-arch/inf /usr/local/bin
```

You're good to go!

Then see usage [usage](#usage)

### Windows

1. Go to [CLI Releases](https://github.com/infinimesh/inf/releases)
2. Get prebuilt binary from [CLI Releases page](https://github.com/infinimesh/inf/releases) as an `.zip` archive.
3. Unpack it
4. Put it somewhere in `$PATH`

Then see usage [usage](#usage)

### Build From Source

See [CLI repo](https://github.com/infinimesh/inf) for source and instructions.
