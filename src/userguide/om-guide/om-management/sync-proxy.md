# **Sync Proxy Operations Maintenance**

## **Runtime Environment**

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

## **Service Health Status**

Agentless services run as Docker containers. Operations staff can check service status with the following command:

```plain
cd /opt/hamal
docker-compose -f docker-compose-hamal.yaml ps
```

The output will show the running status of the services. Pay attention to the `State` column:

- `Up`: Service is running normally
- `Up (healthy)`: Container is running and health check passed
- `Exit` / `Restarting`: Service is abnormal or failed to start

![](./images/timedtaskrelatedconfiguration-agentlessmode_synchronousagentprogramoperationandmaintenance-1.png)

## **Service Start/Stop/Restart**

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

## **Log Management**

All system log files are stored in the `/var/log/hamal` directory. Operations staff can check log files to monitor system status, troubleshoot issues, or provide relevant files to project managers to ensure system stability.

```plain
/var/log/hamal
├── hamal-period.log                   # Main log for Hamal scheduled tasks (about 188KB)
├── hamal-period-subprocess.log        # Subprocess log for Hamal scheduled tasks (about 10KB)
├── ip_mapping.backup                  # Backup file for IP mapping (currently empty)
├── vm-kylin_v10_Agent-<UUID>.log      # VM agent logs, can be used to determine sync status
```

## **Configuration File Management**

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