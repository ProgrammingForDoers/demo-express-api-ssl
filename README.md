# About

This is an Express API demo that illustrates the following:
- SSL configuration for HTTPS access


# Getting Started

### Prerequisites

**Windows**

You will need Docker installed
- [Instructions](https://learn.microsoft.com/en-us/windows/wsl/install#install-wsl-command)

You will need WSL installed
- [Instructions](https://docs.docker.com/desktop/install/windows-install)

Run this to avoid errors related to line-endings
`git config --global core.autocrlf input`

**MacOS**

You will need Docker installed
- [Instructions](https://docs.docker.com/desktop/install/mac-install)


### Installation

1. Clone this project
1. Enter the project directory
1. Run: `bin/configure-ssl`
1. Run: `bin/setup`
1. Run: `bin/services up -d`
1. Run: `bin/services logs` to tail logs
1. Navigate to `https://localhost` in your browser


### Development

**Commands**
- **Bring down the stack:** `bin/services down`
- **Bring up the stack:** `bin/services up -d`
- **Restart the stack:** `bin/services down; bin/services`
- **Tail logs:** `bin/services logs`
- **Restart the stack and tail logs:** `bin/services down; bin/services; bin/services logs`

**Note**: For some kinds of code changes, you may need to restart the stack for them to take effect
