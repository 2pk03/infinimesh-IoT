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

- [Wiki](https://github.com/infinimesh/infinimesh/wiki)
- Swagger UI (published via GitHub Pages)

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
