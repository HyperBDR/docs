# **Cloud Sync Gateway Operations Maintenance**

## **Runtime Environment**

The Cloud Sync Gateway is a key component that connects the source and target cloud platforms. It is responsible for receiving and processing both full and incremental data from the source, synchronizing it to the cloud platform's storage, and enabling efficient, cost-effective data backup and disaster recovery.

The platform automatically creates a default Cloud Sync Gateway environment, typically using Ubuntu 20.04 with 2 CPU cores, 4GB RAM, and a 50GB disk.

The system is installed in the `/var/lib/sgateway` directory (location is configurable). The main files and directory structure are as follows:

```bash
/var/lib/sgateway/
├── certs                   # Directory for TLS/SSL certificates (including private/public keys)
├── config                  # Directory for configuration files (e.g., s3block_config.ini)
├── confmgmt                # Configuration management directory, possibly for centralized config or version control
├── diskdir                 # Local data directory, used for object storage data or cache
├── dr                      # Disaster Recovery related directory (may be empty or reserved)
├── logs                    # Log directory, stores s3block and watchman logs
├── s3block                 # s3block main executable, provides core data services
├── s3block.db              # s3block local database file, stores task status, metadata, etc.
├── s3block.service         # systemd service file for managing s3block startup and operation
├── s3block_version         # s3block version information file
├── version                 # System or module version identifier file
├── watchman                # watchman main executable, responsible for monitoring and sync triggers
└── watchman.service        # systemd service file for managing watchman startup and operation
```

## **Service Health Status**

After the Cloud Sync Gateway is installed, it is managed and operated via `systemd`. Operations staff can use `systemctl` commands to check service status and perform control operations. The Cloud Sync Gateway requires attention to three services: `s3block.service`, `watchman.service`, and `hyper_exporter.service`.

| **Service**              | **Status Field** | **Service Status**     |
|-------------------------|------------------|-----------------------|
| s3block.service         | `Active`         | `active (running)`    |
| watchman.service        | `Active`         | `active (running)`    |
| hyper_exporter.service  | `Active`         | `active (running)`    |

Check service status with `systemctl status <service-name>`. Any status other than `active` is abnormal and requires further troubleshooting. Example:

```plain
systemctl status s3block.service
```

## **Service Start/Stop/Restart**

Operations staff can use `systemd` to manage `s3block.service` and `watchman.service` with the following commands:

* **Start Service**

  * `s3block.service`
    ```plain
    systemctl start s3block.service
    ```
  * `watchman.service`
    ```plain
    systemctl start watchman.service
    ```

* **Stop Service**

  * `s3block.service`
    ```plain
    systemctl stop s3block.service
    ```
  * `watchman.service`
    ```plain
    systemctl stop watchman.service
    ```

* **Restart Service**

  * `s3block.service`
    ```plain
    systemctl restart s3block.service
    ```
  * `watchman.service`
    ```plain
    systemctl restart watchman.service
    ```

## **Log Management**

All system log files are stored in the `/var/log/sgateway` directory. Operations staff can check log files to monitor system status, troubleshoot issues, or provide relevant files to project managers to ensure system stability.

```plain
/var/log/sgateway/
├── s3block_20250514.log       # s3block log for 2025-05-14
├── s3block_20250515.log       # s3block log for 2025-05-15
├── watchman_20250514.log      # watchman log for 2025-05-14
└── watchman_20250515.log      # watchman log for 2025-05-15
```

## **Configuration File Management**

The main configuration file for the Cloud Sync Gateway is `s3block_config.ini`, located in the `/var/lib/sgateway/config` directory. This file contains key information such as gateway ID, public IP, WebSocket service address, local data directory, log level, S3 storage credentials, endpoint address, and more, supporting data sync and communication between the gateway and central services.

Below are the main sections of the configuration file and their descriptions:

```ini
[system]
gateway_uuid     = 41f2ef9e-50c7-430f-b316-e9e4ec5516d4     # Unique gateway identifier (UUID)
websocket_server = wss://192.168.7.141:10443/duplex/gateway/v1  # WebSocket address for bidirectional communication with the server
filedir          = diskdir                                 # Local data storage directory (relative path)
log_level        = 1                                       # Log level (1 means INFO)
multi_srv        = true                                    # Enable multi-service mode (true means enabled)
public_ip        = 192.168.14.65                           # Public IP address for gateway communication
accessKey        = wCi7qC8RlFydraCugWWa                    # Object storage access key
secretAccessKey  = TH5g4gbJKsK2YEsBLj7GaFpbWTiGYarRQSu1B59t # Object storage secret key
localdisksaved   =                                         # Local disk persistence directory (empty means default)
endpoint         = https://192.168.14.65:13260             # Object storage endpoint (API address)
bucketcreated    = true                                    # Whether the bucket is created (true means created)
```