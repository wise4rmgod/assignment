---
sidebar_position: 2
---

# CN Quickstart: Installation and Local Deployment Guide

The CN Quickstart application helps you and your team get started with CN application development. It provides a working foundation that you can extend based on your business needs.

Use this project as a starting point. Once you understand how it works, you can modify the architecture, tools, and design decisions to suit your use case.


## Overview

This guide walks you through:

* Setting up your local development environment
* Installing required dependencies
* Running the CN Quickstart application locally

The steps are designed to give you a fast path to a working setup.

## Prerequisites

Before you start, ensure you have the following tools installed and set up. Each one is required to build, run, and configure the project correctly.

### 1. Code editor

You need a code editor to write and manage the project files.
:::tip[Recommended]
- Download [Visual Studio Code](https://code.visualstudio.com/download)
- It provides good support for Java, environment configuration, and extensions for developer workflows.
:::

You can use another editor if you prefer, but the instructions in this guide assume VS Code.

### 2. Java (JDK 17 or later)

You must have [Java Development Kit (JDK)](https://www.oracle.com/uk/java/technologies/downloads/) installed.

This is required because the backend services are written in Java and need the JDK to compile and run.

Ensure you are using version 17 or newer.

### 3. direnv

You need [direnv](https://direnv.net/docs/installation.html) installed.

This tool automatically loads environment variables when you enter the project directory, so you do not have to set them manually each time you open a terminal.


### 4. DPM (Daml Package Manager)

Install [DPM](https://docs.digitalasset.com/build/3.4/dpm/dpm.html) and ensure it is available in your system path.

For macOS:

```shell
export PATH="$HOME/.dpm/bin:$PATH"
```

To verify:

```shell
dpm --version
```


### 5. Nix

Required for reproducible development environments.

* macOS/Linux: Install [Nix](https://nixos.org/download/) normally
* Windows: Use WSL 2 with administrator privileges

### 6. Docker

You must have [Docker](https://www.docker.com/products/docker-desktop/) installed and running.

This project relies on Docker to run essential services in containers, including:

* Canton (distributed ledger runtime)
* PostgreSQL (database)
* Keycloak (authentication and identity management)

> Make sure Docker is running before you start the project, otherwise the required services will not be available.


## Installation

### Step 1: Clone the repository

Clone the CN Quickstart repository and move into the project directory:

```shell
git clone https://github.com/digital-asset/cn-quickstart.git
cd cn-quickstart
direnv allow
```

### Step 2: Verify project structure

After cloning, your directory should look similar to this:

```shell
CN-QUICKSTART/
├── .circleci/
├── nix/
├── quickstart/
├── sdk/
├── .envrc
├── flake.nix
├── README.md
└── ...
```

This confirms the project was cloned correctly.


### Step 3: Authenticate with Docker

Log in to Docker so the required images can be pulled:

```shell
docker login
```


### Step 4: Navigate to the application directory

```shell
cd quickstart
```


### Step 5: Configure the local environment

Run the setup command:

```shell
make setup
```

You will be prompted to configure the environment:

* **Enable Observability?** → `n`
* **Enable OAuth2?** → `y`
* **Party hint** → Press Enter to use default
* **Enable TEST_MODE?** → `n`

Example output:

```shell
Enable Observability? (Y/n): n
Enable OAUTH2? (Y/n): y
Specify a party hint: [quickstart-USERNAME-1]
Enable TEST_MODE? (Y/n): n
```

This creates or updates the `.env.local` configuration file.


:::tip[Note:]
* You can rerun `make setup` at any time to change these values
* OAuth2 and Observability may not work reliably on machines with less than 8 GB RAM allocated to Docker
:::

## Build

### Step 6: Build the application

```shell
make build
```

Expected output:

```shell
BUILD SUCCESSFUL in 5s
23 actionable tasks: 5 executed, 18 up-to-date
✓ Docker is installed and running
```

This confirms the project built successfully.


### Step 7: Start log collection (optional but recommended)

In a new terminal:

```shell
make capture-logs
```

This command streams logs from the running services. Some warnings (such as `date: illegal option -- d`) may appear depending on your OS. These can usually be ignored if services continue running.

Example output:

```shell
 nginx start
>> nginx
usage: date [-jnRu] [-I[date|hours|minutes|seconds|ns]] [-f input_fmt]
            [ -z output_zone ] [-r filename|seconds] [-v[+|-]val[y|m|w|d|H|M|S]]
            [[[[mm]dd]HH]MM[[cc]yy][.SS] | new_date] [+output_fmt]
 register-app-user-tenant start
>> register-app-user-tenant
date: illegal option -- d
usage: date [-jnRu] [-I[date|hours|minutes|seconds|ns]] [-f input_fmt]
            [ -z output_zone ] [-r filename|seconds] [-v[+|-]val[y|m|w|d|H|M|S]]
            [[[[mm]dd]HH]MM[[cc]yy][.SS] | new_date] [+output_fmt]
 register-app-user-tenant die
date: illegal option -- d
usage: date [-jnRu] [-I[date|hours|minutes|seconds|ns]] [-f input_fmt]
            [ -z output_zone ] [-r filename|seconds] [-v[+|-]val[y|m|w|d|H|M|S]]
            [[[[mm]dd]HH]MM[[cc]yy][.SS] | new_date] [+output_fmt]
 canton-console start
>> canton-console
```

### Step 8: Start the application

In your main terminal:

```shell
make start
```

This starts all required services, including:

* Canton
* PostgreSQL
* Keycloak
* Web UIs

Example output:

```shell
[+] up 18/18
 ✔ Container ans-web-ui-app-provider    Running                                                                                             0.0s
 ✔ Container sv-web-ui                  Running                                                                                             0.0s
 ✔ Container scan-web-ui                Running                                                                                             0.0s
 ✔ Container ans-web-ui-app-user        Running                                                                                             0.0s
 ✔ Container wallet-web-ui-app-user     Healthy                                                                                             3.6s
 ✔ Container wallet-web-ui-app-provider Healthy                                                                                             3.6s
 ✔ Container swagger-ui                 Running                                                                                             0.0s
 ✔ Container wallet-web-ui-sv           Healthy                                                                                             3.6s
 ✔ Container postgres                   Healthy                                                                                             1.0s
 ✔ Container keycloak                   Healthy                                                                                             1.5s
 ✔ Container nginx-keycloak             Running                                                                                             0.0s
 ✔ Container canton                     Healthy                                                                                             2.6s
 ... 6 more 
...
```

Wait until all containers are in a **Running** or **Healthy** state.


### Step 9: Connect to Canton

Open a new terminal and run:

```shell
make canton-console
```

You should see:

```shell
Compiling (synthetic)/ammonite/predef/ArgsPredef.sc
Compiling /app/(console)
   _____            _
  / ____|          | |
 | |     __ _ _ __ | |_ ___  _ __
 | |    / _` | '_ \| __/ _ \| '_ \
 | |___| (_| | | | | || (_) | | | |
  \_____\__,_|_| |_|\__\___/|_| |_|

  Welcome to Canton!
  Type `help` to get started. `exit` to leave.

```

This allows you to interact with the ledger.


### Step 10: Start the Daml shell

In another terminal:

```shell
make shell
```
Example output:

  ```shell
    e0c45c32a19d Downloading 26.2MB
    e0c45c32a19d Downloading 28.25MB
    e0c45c32a19d Downloading 30.29MB
    e0c45c32a19d Downloading 32.75MB
    e0c45c32a19d Downloading 35.21MB
    e0c45c32a19d Downloading 37.26MB
    e0c45c32a19d Downloading 39.3MB
    e0c45c32a19d Verifying Checksum 0B
    e0c45c32a19d Download complete 0B
    e0c45c32a19d Extracting 426kB
    e0c45c32a19d Extracting 25.13MB
    e0c45c32a19d Extracting 39.9MB
    e0c45c32a19d Pull complete 0B
    Image europe-docker.pkg.dev/da-images/public/docker/daml-shell:0.1.12 Pulled 
    Container daml-shell-daml-shell-run-d7699c0d7af8 Creating 
    Container daml-shell-daml-shell-run-d7699c0d7af8 Created 
    Picked up _JAVA_OPTIONS: -XX:-UseCompressedOops -Xms256m -Xmx384m
    Connecting to jdbc:postgresql://postgres:5432/pqs-app-provider...
    Connected to jdbc:postgresql://postgres:5432/pqs-app-provider
    postgres:5432/pqs-app-provider> 
    connected    Session range: 43 → 330    Datastore range: 43 → 330
  ```

This connects you to the application database and environment.


### Step 11: Stop the application

When you are done, shut everything down cleanly.

#### a. Stop Canton console

Press:

```shell
Ctrl + D
```

#### b.  Stop Daml shell

Press:

```shell
Ctrl + D
```

#### c. Stop all services

```shell
make stop && make clean-all
```


:::tip

Run `make clean-all` regularly during development to avoid conflicts in future builds.
:::

## Success Metrics
I measure success by tracking how developers interact with the guide. I use Google Analytics to check metrics like time on page and bounce rate. If people leave quickly, it means something is wrong. If they stay longer, it shows the guide is helpful.

I also use Hotjar to watch session recordings and see how users move through the guide. This helps me spot where they struggle, such as confusing steps or poor formatting. I also look for rage clicks, which show frustration and signal that something needs fixing.

Finally, I track user growth. If we expect 100 users but get 500, it means more developers find the guide useful and are coming back to use it.
