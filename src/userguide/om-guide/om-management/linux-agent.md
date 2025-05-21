# **Linux Agent Operations Maintenance**

## **Runtime Environment**

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

## **Service Health Status**

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

## **Service Start/Stop/Restart**

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

## **Log Management**

All system log files are stored in the /var/log/egisplus-agent directory. Operations staff can view log files to monitor system status, troubleshoot issues, or provide relevant files to project managers to ensure system stability.

```plain
egisplus-agent/
├── agent-syncer.log              # Log for sync tasks with control center/cloud
├── agent-syncer-panic.log        # Exception/crash log for sync tasks, primary for troubleshooting
├── db.log                        # Log for local state database or metadata operations
├── linux_agent.log               # Core runtime log for the main agent program, records service start, registration, scheduling, etc.
└── linux_agent.log-20250511.gz   # Rotated historical log, gzip compressed
```

## **Configuration File Management**

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