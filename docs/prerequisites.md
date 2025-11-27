# Prerequisites

Supported OS for local evaluation: Linux (any distro with Docker), macOS (Intel; Apple Silicon not officially supported in the original guide), Windows.

You should be comfortable with:
- Git and version control basics
- Docker/Compose
- Basic cert handling (OpenSSL)
- Networking/hostnames

## Required tools

- Git
- Docker Engine + Compose plugin (or Docker Desktop)
- OpenSSL CLI
- MQTT client (e.g., `mosquitto`/`mosquitto-clients`)

## Windows quick install (links from the original PDF)

- OpenSSL: https://slproweb.com/products/Win32OpenSSL.html
- Docker Desktop: https://docs.docker.com/desktop/install/windows-install/
- Git: https://github.com/git-for-windows/git/releases
- Mosquitto client:
  - 64-bit: https://mosquitto.org/files/binary/win64/mosquitto-2.0.9-install-windows-x64.exe
  - 32-bit: https://mosquitto.org/files/binary/win32/mosquitto-2.0.9-install-windows-x86.exe

## Linux installs (summary)

Install Git:
- Debian/Ubuntu: `sudo apt update && sudo apt install -y git`
- RHEL/CentOS/Fedora: `sudo dnf update -y && sudo dnf install -y git`

Install Docker Engine + Compose plugin:
- Follow the official guide for your distro: https://docs.docker.com/engine/install/
- RHEL/CentOS example:
  ```bash
  sudo yum install -y yum-utils
  sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
  sudo yum install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
  sudo systemctl start docker
  sudo docker run hello-world
  ```
- Ubuntu example (22.04):
  ```bash
  sudo apt-get update
  sudo apt-get install -y ca-certificates curl gnupg lsb-release
  sudo mkdir -p /etc/apt/keyrings
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
  echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  sudo apt-get update
  sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
  sudo docker run hello-world
  ```

Install MQTT client (Ubuntu example):
```bash
sudo apt install -y mosquitto-clients
```

## macOS (Intel)

- Install Docker Desktop: https://docs.docker.com/desktop/install/mac-install/
- Git: via Xcode command line tools or Homebrew (`brew install git`)
- OpenSSL: `brew install openssl`
- MQTT client: `brew install mosquitto`

Once prerequisites are installed and Docker works (`docker run hello-world`), proceed to [installation.md](installation.md).
