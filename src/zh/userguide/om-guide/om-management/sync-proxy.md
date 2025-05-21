# **源端同步代理(Sync Proxy)**

## **运行环境说明**

在源端主机安装代理程序，直接通过云平台的 API 接口或虚拟化平台的管理接口（如 VMware vCenter）捕获数据变化，实现无侵入的数据同步，适用于虚拟化环境，简化部署并降低系统资源占用。

Linux Agentless 部署在 Ubuntu 20.04 主机上，推荐配置为 4 核 CPU、8GB 内存、200GB 硬盘，使用 ext4 或 xfs 文件系统（不支持 LVM 分区）。

系统安装在/opt/hamal目录中，主要的文件及目录结构：

```python
/opt/hamal
├── docker-compose-hamal.yaml      # Docker Compose 配置文件，用于部署 Hamal 服务
├── hamal-venv                     # Python 源码包
│   ├── bin                        # Python 的可执行文件
│   ├── etc                        # 配置文件目录
│   ├── hamal3-changelog.txt       # Hamal 版本更新日志
│   ├── include                    # 包含目录（通常是 C 库等）
│   ├── lib                        # Python 库文件
│   ├── project_etc                # 项目专用的配置文件
│   ├── pyvenv.cfg                 # Python 虚拟环境配置文件
│   ├── tools                      # 工具集文件目录
│   └── version                    # 版本文件，标记当前虚拟环境版本
├── uninstall_hamal.sh             # 卸载 Hamal 服务的脚本
└── update_sync_proxy.sh           # 更新同步代理的脚本
```

## **服务健康状态**

Agentless 服务以 Docker 容器方式运行，运维人员可通过以下命令检查服务状态：

```plain&#x20;text
cd /opt/hamal
docker-compose -f docker-compose-hamal.yaml ps
```

执行后将显示服务的运行状态信息，如下所示：

关键是看 `State` 列：

 `Up`：表示服务运行正常

 `Up (healthy)`：表示容器正在运行且健康检查通过。

 `Exit` / `Restarting`：表示服务异常或未能启动

![](./images/timedtaskrelatedconfiguration-agentlessmode_synchronousagentprogramoperationandmaintenance-1.png)

## **服务启动/停止/重启**

运维人员可以使用 `docker-compose` 管理 Agentless 服务的启动、停止和重启操作

* **启动服务：**

  ```plain&#x20;text
  docker-compose -f /opt/hamal/docker-compose-hamal.yaml up -d
  ```

* **停止服务：**

  ```plain&#x20;text
  docker-compose -f /opt/hamal/docker-compose-hamal.yaml down
  ```

* **重启服务：**

  ```plain&#x20;text
  docker-compose -f /opt/hamal/docker-compose-hamal.yaml restart
  ```

## **日志管理**

所有系统日志文件存储在`/var/log/hamal`目录中。运维人员可以通过查看，日志文件，监控系统运行状态，排查故障，或提供相关文件给到对应项目负责人，确保系统稳定性。

```plain&#x20;text
/var/log/hamal
├── hamal-period.log                   # Hamal 定时任务的主日志（约 188KB）
├── hamal-period-subprocess.log        # Hamal 定时任务中子进程的日志（约 10KB）
├── ip_mapping.backup                  # IP 映射的备份文件（当前为空）
├── vm-kylin_v10_Agent-<UUID>.log      # 虚拟机代理相关，可以通过vm开头的日志，来判断是否同步状态
```

## **配置文件管理**

Linux Agent 的主要配置文件位于 /etc/hamal 目录下，文件名为 hamal.conf 。该文件包含了 Agentless 的各项配置信息，包括服务连接、数据库、同步任务、日志、S3 配置等。

以下是该配置文件的各个部分及其作用说明：

```yaml
[DEFAULT]
debug = False                                # 是否启用调试日志
verbose = False                              # 是否启用详细日志
log_rotation_type = size                     # 日志轮转方式：按大小轮转
max_logfile_count = 10                       # 最大日志文件数量
max_logfile_size_mb = 64                     # 单个日志文件最大大小（单位：MB）
hamal_lib_dir = /var/lib/hamal/              # 程序数据目录
hamal_info_path = /var/lib/hamal/hamal_info  # 程序信息文件路径

[period]
interval = 60                                # 执行周期任务的间隔（单位：秒）
task_update_wait_time = 1                    # 任务更新时间等待间隔（单位：秒）
openstack_release_cpu_time = 0               # OpenStack 每 MB 数据释放占用 CPU 时间（单位：毫秒）
vmware_release_cpu_time = 0                  # VMware 每 MB 数据释放占用 CPU 时间（单位：毫秒）

[mass]
mass_endpoint = https://192.168.7.141:10443/hypermotion/v1  # Mass 服务 API 地址
auth_key = 315d65ca-ef28-4e63-ad72-1260a91adf23              # 鉴权使用的密钥
hyper_exporter_id = aaeb0d1fbbb14093837fb5f900b9f8ce         # Hyper Exporter 的唯一 ID
public_key_path = /etc/hamal/public_key                     # 公钥路径
default_request_timeout = 600                               # 请求超时时间（单位：秒）
enable_get_public_ips = False                               # 是否获取公网 IP
get_public_ip_timeout = 5                                   # 获取公网 IP 的超时时间（单位：秒）
enable_heartbeat_msg = True                                 # 是否启用心跳上报

[vmware]
skip_disk_flag = False                                       # 是否跳过磁盘标识检查
disk_flag_size = 48                                          # 标识磁盘的最小容量（单位：MB）
max_read_blocks = 1024                                       # 单次读取的最大块数

[openstack_ceph]
skip_disk_flag = False                                       # 是否跳过磁盘标识检查
disk_flag_size = 48                                          # 标识磁盘的最小容量（单位：MB）

[sync]
save_local_snapshot_metadata = False                         # 是否本地保存快照元数据
upload_metadata_to_oss = False                               # 是否上传元数据到 OSS

[data_sync_v2]
fsync_period_frequency = 3                                   # 元数据周期同步频率（单位：秒）
fsync_timeout = 0                                            # 同步超时时间（单位：秒）
parallel_sync_disks_count = 4                                # 并行同步磁盘数量
pre_disk_readers_count = 2                                   # 预处理磁盘读取线程数
max_parallel_sync_disks_count = 16                           # 最大并行磁盘同步数量
max_pre_disk_readers_count = 16                              # 最大预处理磁盘读取线程数

[fusion_compute]
task_timeout = 3600                                          # 任务超时时间（单位：秒）
create_snap_task_timeout = 3600                              # 创建快照超时时间（单位：秒）
delete_snap_task_timeout = 3600                              # 删除快照超时时间（单位：秒）
local_host_ip = ""                                           # 当前主机 IP（可选）
max_socket_connections_per_host = 8                          # 单主机最大连接数
max_writer_num = 10                                          # 最大写入线程数
```