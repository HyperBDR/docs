# Service Component Maintenance

## Console Operations Maintenance

### Runtime Environment

The Console is installed on a Linux host (e.g., Ubuntu 20.04). All console services run inside containers, with databases and middleware including MariaDB, Redis, RabbitMQ, and InfluxDB.

The system is installed under `/opt/installer`. The main files and directory structure are:

```bash
/opt/installer
├── HyperBDR_release_v6.4.0_20250430-20250430-1079.tar.gz.version  # Installation package version info
├── Version                                                        # Overall system version info
├── production/                                                   # Core directory for console operation
│   ├── config/                         # Service configuration files (e.g., MariaDB, Redis, Proxy)
│   ├── data/                           # Middleware persistent data (MySQL, Redis, RabbitMQ, InfluxDB)
│   ├── databackup/                     # Backup directory for MySQL, Redis, and configuration files
│   ├── docker-compose-hyperbdr.yml     # HyperBDR container orchestration config
│   ├── docker-compose-hypermotion.yml  # HyperMotion container orchestration config
│   ├── entrypoint.sh                   # System initialization and startup script
│   ├── init/
│   │   └── 01.sql                      # Database initialization SQL script
│   ├── logs/                           # Service logs (for troubleshooting)
│   ├── openssl.cnf                     # OpenSSL configuration (e.g., certificate generation)
│   ├── scripts/                        # Shell scripts for installation, upgrade, uninstall, backup, etc.
│   ├── softwares/                      # Bundled third-party tools (e.g., curl, ossutil, ttyd)
│   ├── ttyd                            # ttyd executable (web terminal service)
│   ├── venvs/                         # Python virtual environments for each service
│   └── version                        # Current deployment version info
```

### Service Health Status

All services run as Docker containers. O\&M staff can check the service status using the `hmctl` command.

Example:

```bash
/opt/installer/production/scripts/hmctl status
```

> **Tip:** Add the scripts directory to your PATH for global access:

```bash
echo 'export PATH=$PATH:/opt/installer/production/scripts' >> ~/.bashrc
source ~/.bashrc
```

* The `State` column indicates service health status:

  * `Up`: Service is running normally
  * `Up (healthy)`: Container is running and health check passed
  * `Exit` / `Restarting`: Service is abnormal or failed to start

![](./image/servicecomponentoperationandmaintenance-consoleoperationandmaintenance-1.png)

* Log disk usage

![](./image/servicecomponentoperationandmaintenance-consoleoperationandmaintenance-2.png)

* Program disk usage

![](./image/servicecomponentoperationandmaintenance-consoleoperationandmaintenance-3.png)

* Remaining disk space

![](./image/servicecomponentoperationandmaintenance-consoleoperationandmaintenance-4.png)

* Health of service port 10443

![](./image/servicecomponentoperationandmaintenance-consoleoperationandmaintenance-5.png)

### Service Start/Stop/Restart

O\&M staff can start, stop, or restart services using the `hmctl` command.

> **Note:** If the command is in your PATH, simply run: `hmctl <command>`

* **Start all services**

  ```bash
  /opt/installer/production/scripts/hmctl start
  ```

* **Start a specific service**

  ```bash
  /opt/installer/production/scripts/hmctl start <service-name>
  ```

* **Stop all services**

  ```bash
  /opt/installer/production/scripts/hmctl stop
  ```

* **Stop a specific service**

  ```bash
  /opt/installer/production/scripts/hmctl stop <service-name>
  ```

* **Restart all services**

  ```bash
  /opt/installer/production/scripts/hmctl restart
  ```

* **Restart a specific service**

  ```bash
  /opt/installer/production/scripts/hmctl restart <service-name>
  ```

* **Reload services**

  > **Note:** Use this command only after updating the base image.

  ```bash
  /opt/installer/production/scripts/hmctl reload
  ```

### Log Management

All system log files are located under `/var/log/installer`. O\&M staff can monitor system status, troubleshoot issues, or provide logs to project managers as needed.

```bash
/var/log/installer/
├── autoinstall-user-data                  # Auto-install user data config
├── block                                  # Disk block data, usually partition info
├── casper-md5check.json                   # MD5 check for installation image
├── curtin-install-cfg.yaml                # Curtin installation tool config
├── curtin-install.log                     # Curtin installation log
├── installer-journal.txt                  # Key installation event logs
├── media-info                             # Installation media information
├── subiquity-client-debug.log -> subiquity-client-debug.log.2396
├── subiquity-client-debug.log.2396
├── subiquity-client-info.log -> subiquity-client-info.log.2396
├── subiquity-client-info.log.2396
├── subiquity-curtin-apt.conf
├── subiquity-curtin-install.conf
├── subiquity-server-debug.log -> subiquity-server-debug.log.2463
├── subiquity-server-debug.log.2463
├── subiquity-server-info.log -> subiquity-server-info.log.2463
└── subiquity-server-info.log.2463
```

### Configuration File Management

All system configuration files are stored in `/opt/installer/production/config`. O\&M staff can edit these files as necessary.

> Due to the large number of configuration files, only an example for the `ant` service is shown below:

```ini
[DEFAULT]
# Debug and logging options
debug = False
verbose = False
ant_api_listen = 0.0.0.0
ant_api_listen_port = 10082
transport_url = rabbit://guest:fs82BgKdU2QTr4Oy@rabbitmq:5672//

# Log rotation (commented out, enable if needed)
# log_rotation_type = size
# max_logfile_count = 10
# max_logfile_size_mb = 64

# API service settings
ant_api_workers = 1
proxy_base_url = http://proxy-api:18768
porter_base_url = http://porter-api:18766
porter_proxys_url = http://porter-api:18766/proxys
storplus_base_url = http://storplus-api:18765
OWL_BASE_URL = "http://owl-api:16700"

[database]
backend = sqlalchemy
connection = mysql://ant:antPass@mysql:3306/ant?charset=utf8
use_db_reconnect = True
max_pool_size = 30
max_overflow = 20
pool_timeout = 30
connection_recycle_time = 300

[period]
interval = 5
timeout = 86400
```


## (Agentless Mode) Sync Proxy Operations Maintenance

### **Runtime Environment**

The agentless proxy is installed on the source host and captures data changes directly through the cloud platform's API or virtualization management interfaces (such as VMware vCenter). This enables non-intrusive data synchronization, making it suitable for virtualized environments, simplifying deployment, and reducing system resource usage.

The Linux agentless proxy is deployed on an Ubuntu 20.04 host. The recommended configuration is 4-core CPU, 8GB RAM, 200GB disk, using ext4 or xfs file systems (LVM partitions are not supported).

The system is installed in the /opt/hamal directory. The main files and directory structure are as follows:

```bash
/opt/hamal
├── docker-compose-hamal.yaml      # Docker Compose configuration for Hamal services
├── hamal-venv                     # Python source package
│   ├── bin                        # Python executables
│   ├── etc                        # Configuration files
│   ├── hamal3-changelog.txt       # Hamal version changelog
│   ├── include                    # Include directory (typically C libraries, etc.)
│   ├── lib                        # Python library files
│   ├── project_etc                # Project-specific configuration files
│   ├── pyvenv.cfg                 # Python virtual environment config
│   ├── tools                      # Tools directory
│   └── version                    # Version file for the current virtual environment
├── uninstall_hamal.sh             # Script to uninstall Hamal services
└── update_sync_proxy.sh           # Script to update the sync proxy
```

### Service Health Status

Agentless services run as Docker containers. Operations staff can check service status with the following command:

```plain
cd /opt/hamal
docker-compose -f docker-compose-hamal.yaml ps
```

The output will show the running status of the services. Pay attention to the `State` column:

- `Up`: Service is running normally
- `Up (healthy)`: Container is running and health check passed
- `Exit` / `Restarting`: Service is abnormal or failed to start

![](./image/timedtaskrelatedconfiguration-agentlessmode_synchronousagentprogramoperationandmaintenance-1.png)

### Service Start/Stop/Restart

Operations staff can use `docker-compose` to manage the start, stop, and restart of agentless services.

* **Start service:**

  ```plain
  docker-compose -f /opt/hamal/docker-compose-hamal.yaml up -d
  ```

* **Stop service:**

  ```plain
  docker-compose -f /opt/hamal/docker-compose-hamal.yaml down
  ```

* **Restart service:**

  ```plain
  docker-compose -f /opt/hamal/docker-compose-hamal.yaml restart
  ```

### Log Management

All system log files are stored in the `/var/log/hamal` directory. Operations staff can check log files to monitor system status, troubleshoot issues, or provide relevant files to project managers to ensure system stability.

```plain
/var/log/hamal
├── hamal-period.log                   # Main log for Hamal scheduled tasks (about 188KB)
├── hamal-period-subprocess.log        # Subprocess log for Hamal scheduled tasks (about 10KB)
├── ip_mapping.backup                  # Backup file for IP mapping (currently empty)
├── vm-kylin_v10_Agent-<UUID>.log      # VM agent logs, can be used to determine sync status
```

### Configuration File Management

The main configuration file for the Linux agentless proxy is located at `/etc/hamal/hamal.conf`. This file contains all configuration information for agentless mode, including service connections, database, sync tasks, logs, S3 settings, and more.

Below are the main sections of the configuration file and their descriptions:

```ini
[DEFAULT]
debug = False                                # Enable debug logs
verbose = False                              # Enable verbose logs
log_rotation_type = size                     # Log rotation by size
max_logfile_count = 10                       # Max number of log files
max_logfile_size_mb = 64                     # Max size per log file (MB)
hamal_lib_dir = /var/lib/hamal/              # Program data directory
hamal_info_path = /var/lib/hamal/hamal_info  # Program info file path

[period]
interval = 60                                # Interval for scheduled tasks (seconds)
task_update_wait_time = 1                    # Wait time for task updates (seconds)
openstack_release_cpu_time = 0               # CPU time per MB for OpenStack (ms)
vmware_release_cpu_time = 0                  # CPU time per MB for VMware (ms)

[mass]
mass_endpoint = https://192.168.7.141:10443/hypermotion/v1  # Mass service API address
auth_key = 315d65ca-ef28-4e63-ad72-1260a91adf23             # Auth key
hyper_exporter_id = aaeb0d1fbbb14093837fb5f900b9f8ce        # Unique ID for Hyper Exporter
public_key_path = /etc/hamal/public_key                     # Public key path
default_request_timeout = 600                               # Request timeout (seconds)
enable_get_public_ips = False                               # Enable public IP retrieval
get_public_ip_timeout = 5                                   # Public IP retrieval timeout (seconds)
enable_heartbeat_msg = True                                 # Enable heartbeat reporting

[vmware]
skip_disk_flag = False                                      # Skip disk flag check
disk_flag_size = 48                                         # Minimum disk size for flag (MB)
max_read_blocks = 1024                                      # Max blocks per read

[openstack_ceph]
skip_disk_flag = False                                      # Skip disk flag check
disk_flag_size = 48                                         # Minimum disk size for flag (MB)

[sync]
save_local_snapshot_metadata = False                        # Save snapshot metadata locally
upload_metadata_to_oss = False                              # Upload metadata to OSS

[data_sync_v2]
fsync_period_frequency = 3                                  # Metadata sync frequency (seconds)
fsync_timeout = 0                                           # Sync timeout (seconds)
parallel_sync_disks_count = 4                               # Number of disks to sync in parallel
pre_disk_readers_count = 2                                  # Preprocessing disk reader threads
max_parallel_sync_disks_count = 16                          # Max parallel disk syncs
max_pre_disk_readers_count = 16                             # Max preprocessing disk readers

[fusion_compute]
task_timeout = 3600                                         # Task timeout (seconds)
create_snap_task_timeout = 3600                             # Snapshot creation timeout (seconds)
delete_snap_task_timeout = 3600                             # Snapshot deletion timeout (seconds)
local_host_ip = ""                                          # Local host IP (optional)
max_socket_connections_per_host = 8                         # Max connections per host
max_writer_num = 10                                         # Max writer threads
```

## Linux Agent Operations Maintenance

### Runtime Environment

By deploying the Agent program on the source server, the system can capture real-time changes in the file system or block devices to achieve continuous data synchronization. This is suitable for physical servers, non-virtualized environments, or scenarios requiring more granular control.

Linux Agent supports deployment on the following Linux operating systems: CentOS 6.5+, CentOS 7.x/8.x, RHEL 6.x/7.x/8.x, SLES 11 SP1/SP3/SP4, and Ubuntu Server 12.04/14.04/16.04/18.04/20.04 (all 64-bit).

The system is installed in the /var/lib/egisplus-agent directory. The main files and directory structure are as follows:

```bash
egisplus-agent/
├── agent-sync.db              # Local sync database, stores agent sync status
├── agent-sync.db-shm          # SQLite shared memory file
├── agent-sync.db-wal          # SQLite write-ahead log file
├── collect_system_info.sh     # Script to collect system information
├── config.ini                 # Main configuration file (service address, authentication, etc.)
├── disk_uuid_map              # Mapping between disk UUID and device path
├── egisplus-agent             # Main executable (agent core)
├── egisplus_version           # Agent version information
├── fstab.bak                  # Backup of `/etc/fstab` (mount point info)
├── hw_serial                  # Host hardware serial number (for unique identification)
├── protect_type               # Protection type definition (e.g., full, incremental)
├── public_key                 # Public key for communication with the server
├── registered                 # Registration flag (usually an empty file means registered)
├── uninstall_agent.sh         # Uninstall script to clean up installation and config
├── upgrade_agent.sh           # Upgrade script for updating agent version
└── version                    # Version file, indicates current running version
```

### Service Health Status

After installing the Linux Agent, use the `egisplus-cli` tool for operation and management. Operations staff can use related commands to check service status and perform control operations.

Command structure:

```plain
egisplus-cli agent <subcommand>

Subcommand      Description
check           Check agent status, health or running status
clean           Clean certain caches or temporary data
cow             Copy-On-Write related operations
devices         Show or manage devices (disks, partitions, etc.)
fs              File system operations (mount, check, etc.)
log             View agent-related logs
read_rate       View or set read rate limits
version         Show `egisplus-cli` tool version
```

Example of checking agent status:

```plain
egisplus-cli agent check
```

The output shows the status check result of the `egisplus-cli` program:

```yaml
Service status
    Agent service is started: Yes.                        ##Agent service is running
    iSCSI service is started: Yes.                        ##iSCSI service is also running, indicating this node may be used for block storage or backup mounting
Agent status
    This agent is registered: Yes.                        ##This agent has been successfully registered to HyperBDR
    This agent is protected : No.                         ##No means data sync has not started yet
    Heartbeat of this agent : 305.                        ##Agent has heartbeat connection with the controller, value indicates normal connection
File system
    block       mount   fs      free    used    path
    /dev/dm-0   /       xfs     185G    4%      /dev/mapper/centos-root    ##Current system mounted disks and usage
    /dev/sda1   /boot   xfs     853M    16%     /dev/sda1                  ##Current system mounted disks and usage
```

### Service Start/Stop/Restart

Operations staff can use `systemd` to manage the `egisplus-agent.service` with the following commands:

* **Start service**

  ```plain
  systemctl start egisplus-agent.service
  ```

* **Stop service**

  ```plain
  systemctl stop egisplus-agent.service
  ```

* **Restart service**

  ```plain
  systemctl restart egisplus-agent.service
  ```

### Log Management

All system log files are stored in the /var/log/egisplus-agent directory. Operations staff can view log files to monitor system status, troubleshoot issues, or provide relevant files to project managers to ensure system stability.

```plain
egisplus-agent/
├── agent-syncer.log              # Log for sync tasks with control center/cloud
├── agent-syncer-panic.log        # Exception/crash log for sync tasks, primary for troubleshooting
├── db.log                        # Log for local state database or metadata operations
├── linux_agent.log               # Core runtime log for the main agent program, records service start, registration, scheduling, etc.
└── linux_agent.log-20250511.gz   # Rotated historical log, gzip compressed
```

### Configuration File Management

The main configuration file for Linux Agent is located in /var/lib/egisplus-agent and named config.ini. This file contains all configuration information for the Linux Agent, including service connections, database, sync tasks, logs, S3 settings, and more.

Below are the main sections of the configuration file and their descriptions:

```ini
[INFO]
Version = 6.1.0
# Application version

[DEFAULT]
ServerAddress = 127.0.0.1:19982       # Service listen address and port
ServerCertFile =                      # Server SSL certificate file path (optional)
ServerKeyFile =                       # Server SSL key file path (optional)
ReadTimeout = 20                      # Request read timeout (seconds)
WriteTimeout = 20                     # Response write timeout (seconds)
StopTimeout = 10                      # Wait timeout before service stops (seconds)
MaxHeaderBytes = 1048576              # Max HTTP request header size (bytes)

[DATABASE]
DatabaseFile = /var/lib/egisplus-agent/agent-sync.db  # SQLite database file path
DBLogFile = /var/log/egisplus-agent/db.log            # Database operation log path

[SYNC]
Deduplicate = true                    # Enable deduplication
Compress = ""                         # Data compression method (empty means disabled)
Encrypt = ""                          # Data encryption method (empty means disabled)
IndexPath = /var/lib/egisplus-agent/index  # Index data storage path
DirectIO = false                      # Enable Direct I/O
WorkersPerBlock = 2                   # Number of processing threads per data block
BuffersPerBlock = 8                   # Number of buffers per data block
SaveIndexInterval = 30                # Index save interval (seconds)
SaveBlobInterval = 10                 # Blob data save interval (seconds)
ConcurrentThreads = 2                 # Number of concurrent sync threads
SyncBufferSize = 8                    # Sync buffer size
EnableRetry = true                    # Enable retry on failure
RetryCount = 10                       # Max retry count
RetryInterval = 30                    # Retry interval (seconds)
CheckDup = true                       # Check for duplicate data

[S3]
AccessKey = ak                        # S3 access key
SecretKey = sk                        # S3 secret key
Region = region                       # S3 region
BucketName = bucket                   # S3 bucket name
StorageClass = standard               # Storage class (e.g., standard, infrequent-access)
URL = https://                        # S3 service address
UseTLS = true                         # Enable TLS connection

[CLIENT]
ClientCertFile = /var/lib/egisplus-agent/client_cert_file  # Client certificate file path
ClientKeyFile = /var/lib/egisplus-agent/client_key_file    # Client key file path
ClientUploadURL = 120               # Client upload URL timeout (seconds)
ClientTimeout = 120                 # Client request timeout (seconds)
SendContentMd5 = true               # Send Content-MD5 header
DisableContentSha256 = true         # Disable Content-SHA256 check

[LOG]
LogPath = /var/log/egisplus-agent   # Log file path
LogFileName = agent-syncer.log      # Log file name
LogLevel = info                     # Log level (e.g., debug, info, warn, error)
LogFileMaxSize = 64                 # Max size per log file (MB)
LogFileMaxBackups = 10              # Number of historical log files to keep
LogMaxAge = 28                      # Max log retention days
LogCompress = true                  # Compress historical logs
LogStdout = false                   # Output logs to console
```


## Windows Agent Operations Maintenance

### Runtime Environment

By deploying the Agent program on the source server, the system can capture real-time changes in the file system or block devices to achieve continuous data synchronization. This is suitable for physical servers, non-virtualized environments, or scenarios requiring more granular control.

Windows Agent supports deployment on the following Windows Server operating systems: 2003 SP2/R2, 2008, 2008 R2, 2012, 2012 R2, 2016, 2019 (all 64-bit).

The system is installed in the `C:\Program Files (x86)\DiskSync-Agent` directory (the actual path depends on your installation choice). The main files and directory structure are as follows:

![](./image/applicationversionnumber-windowsagentoperationandmaintenance-1.png)

### Service Health Status

Operations staff can check the service status using Windows Task Manager to confirm whether the service is running properly.

* Ways to open Task Manager:

  * Method 1:

    ```plain
    Press <Ctrl + Alt + Del> on your keyboard at the same time.
    ```

  * Method 2:

    ```plain
    Press Win + R to open the Run dialog.
    Enter taskmgr and press Enter.
    ```

    ![](./image/applicationversionnumber-windowsagentoperationandmaintenance-2.png)

### Service Start/Stop/Restart

* **Start Service:**

  * Right-click the Windows Agent shortcut on the desktop and run as administrator.

  ![](./image/applicationversionnumber-windowsagentoperationandmaintenance-3.png)

  * Left-click "Start Service".

  ![](./image/applicationversionnumber-windowsagentoperationandmaintenance-4.png)

  * Warning message (can be ignored).

  ![](./image/applicationversionnumber-windowsagentoperationandmaintenance-5.png)

  ![](./image/applicationversionnumber-windowsagentoperationandmaintenance-6.png)

  * Service started successfully.

  ![](./image/applicationversionnumber-windowsagentoperationandmaintenance-7.png)

* **Stop Service:**

  * Click "Stop Service" to stop the service.

  ![](./image/applicationversionnumber-windowsagentoperationandmaintenance-8.png)

### Log Management

All system log files are stored in the `C:\Program Files (x86)\DiskSync-Agent\log` directory (the actual path depends on your installation choice). Operations staff can view log files to monitor system status, troubleshoot issues, or provide relevant files to project managers to ensure system stability.

![](./image/applicationversionnumber-windowsagentoperationandmaintenance-9.png)

### Configuration File Management

The main configuration file for Windows Agent is located in the `C:\Program Files (x86)\DiskSync-Agent\config` directory (the actual path depends on your installation choice), and the file name is `Sysconfig.ini`. This file contains all configuration information for the Windows Agent, including service connections, database, sync tasks, logs, S3 settings, and more.

Below are the main sections of the configuration file and their descriptions:

```ini
[SysParam]
HM_URL =https://192.168.7.141:10443/hypermotion/v1
SYNC_NODE_KEY =da8aae5b-facb-452f-8161-5c866f8fafaa

;log level
LOGFLAG=2
                                        
;Filename of successful host registration
REG_FILE=registered        

;Heartbeat interval (seconds)
HEARTBEAT_INTERVAL=50

;Whether to modify the iscsi initiator name tag, 1: modify; 0: not modify.
MODIFY_INITIATOR=1

;Used for the blobsize in iSCSI mode under non-VSS mode 
COPYSIZE=3

;Proportion of cache files in partition capacity under non-VSS mode. 
SWAPESPACE_PERCENT=10

;Whether to adopt the vss mode: 1. vss mode; 0. normal mode.
VSS_MODEL=1

;The proportion of volume shadow storage on the disk in VSS mode.
VSS_MAX_SIZE_PERCENT=10

;Configuration of volume shadow storage for special volumes in VSS mode, which can be configured for multiple volumes: size (G)
;VSS_SPEC_MAX_C=c:10

;The minimum proportion of free space in the volume.
FREELIMIT_PERCENT=3

apply_scene=dr

; 0: Retry after an error occurs during the synchronization process, with the retry time referring to ERRRETRY_DURATION; 1: Return an error immediately upon a synchronization error. 
ERRORRETURN=0

;Maximum retry duration (in seconds) after a synchronization error. 
ERRRETRY_DURATION=600

;Maximum number of blobs for hook in non-VSS mode. 
HOOKBUFF_BLOCKCOUNT_MAX=256

;Minimum number of blobs for hook in non-VSS mode. 
HOOKBUFF_BLOCKCOUNT_MIN=64

; 1: Write the first sector to the target disk, 0: Do not write the first sector to the target disk. 
WRITE_FIRST_SECTOR=0

;Maximum number of write threads in object storage mode. 
THREAD_COUNT=4

;thread interval(millisecond)
THREAD_INTERVAL=25

;Whether to send the metafile (including the local metafile) to the object storage. 
WRITE_OSS_META=0

;The maximum CPU usage allowed for the process. The actual CPU usage of the process may fluctuate up and down, and online update is supported. 
CPU_USEAGE_SETTING=30

;Specify the disks that do not require synchronization. When there are multiple disks, separate the disk numbers with commas. For example: EXCLUDE_DISKS=1,2. The default is EXCLUDE_DISKS=NULL, which synchronizes all disks.
EXCLUDE_DISKS=NULL

;iscsi service parameters
MaxRequestHoldTime=120
SrbTimeoutDelta=120
LinkDownTime=15
InitialR2T=1
ImmediateData=0
FirstBurstLength=16384
MaxBurstLength=16384
MaxRecvDataSegmentLength=8192

ISCSI_SYNC_STATUS=0
ISCSI_PROTECT_STATUS=0
hyper_exporter_id=c85eb10e1a8f4dd58080d9cbe0d71bf4
LOCAL_LAN=1
use_proxy=0
VSS_CHECK_RESULT=1
```



## Cloud Sync Gateway Operations & Maintenance

### Runtime Environment

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

### Service Health Status

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

### Service Start/Stop/Restart

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

### Log Management

All system log files are stored in the `/var/log/sgateway` directory. Operations staff can check log files to monitor system status, troubleshoot issues, or provide relevant files to project managers to ensure system stability.

```plain
/var/log/sgateway/
├── s3block_20250514.log       # s3block log for 2025-05-14
├── s3block_20250515.log       # s3block log for 2025-05-15
├── watchman_20250514.log      # watchman log for 2025-05-14
└── watchman_20250515.log      # watchman log for 2025-05-15
```

### Configuration File Management

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

## Temporary Transition Host Image Operations & Maintenance

### Runtime Environment

The "Temporary Transition Host Image" is used to quickly create a temporary cloud host image for scenarios such as system migration, disaster recovery, or testing and validation, ensuring smooth business transition. When creating, the configuration should match the failback host.