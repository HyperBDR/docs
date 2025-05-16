# 服务组件运维

## 控制台运维

### 运行环境说明

控制台是安装在一台Linux主机内（例如：Ubuntu 20.04），控制台所有服务运行在容器内部，数据库及中间件包括MariaDB, Redis, RabbitMQ和InfluxDB。

系统安装在/opt/installer目录中，主要的文件及目录结构：

```bash
/opt/installer
├── HyperBDR_release_v6.4.0_20250430-20250430-1079.tar.gz.version  # 安装包版本信息
├── Version                                                         # 系统整体版本号
├── production/                                                     # 控制台核心运行目录
│   ├── config/                         # 各服务配置文件（如 mariadb, redis, proxy 等）
│   ├── data/                           # 中间件持久化数据（MySQL, Redis, RabbitMQ, InfluxDB）
│   ├── databackup/                     # MySQL、Redis 和配置文件的备份目录
│   ├── docker-compose-hyperbdr.yml     # HyperBDR 的容器编排配置
│   ├── docker-compose-hypermotion.yml  # HyperMotion 的容器编排配置
│   ├── entrypoint.sh                   # 系统初始化和启动的入口脚本
│   ├── init/
│   │   └── 01.sql                      # 数据库初始化 SQL 脚本
│   ├── logs/                           # 各服务运行日志（便于排查问题）
│   ├── openssl.cnf                     # OpenSSL 配置（如证书生成）
│   ├── scripts/                        # 安装、升级、卸载、备份等 Shell 脚本
│   ├── softwares/                      # 附带的第三方工具包（如 curl、ossutil、ttyd）
│   ├── ttyd                            # ttyd 可执行程序（Web终端服务）
│   ├── venvs/                          # 各服务的 Python 虚拟环境（venv 隔离依赖）
│   └── version                         # 当前部署版本信息
```



### 服务健康状态

所有服务均以 Docker 容器方式运行，运维人员可通过 `hmctl` 命令检查服务状态。

返回结果包括：

```plain&#x20;text
/opt/installer/production/scripts/hmctl status
```

> 注意：可为其增加系统环境变量使其全局调用

```plain&#x20;text
echo 'export PATH=$PATH:/opt/installer/production/scripts' >> ~/.bashrc
source ~/.bashrc
```

* 当前服务健康状况

关键是看 `State` 列：

 `Up`：表示服务运行正常

 `Up (healthy)`：表示容器正在运行且健康检查通过。

 `Exit` / `Restarting`：表示服务异常或未能启动

![](./image/servicecomponentoperationandmaintenance-consoleoperationandmaintenance-1.png)

- 日志占用空间

![](./image/servicecomponentoperationandmaintenance-consoleoperationandmaintenance-2.png)

- 程序占用空间

![](./image/servicecomponentoperationandmaintenance-consoleoperationandmaintenance-3.png)

- 磁盘剩余空间

![](./image/servicecomponentoperationandmaintenance-consoleoperationandmaintenance-4.png)

- 10443服务端口健康状况

![](./image/servicecomponentoperationandmaintenance-consoleoperationandmaintenance-5.png)
### 服务启动/停止/重启

运维人员可通过 `hmctl` 命令对服务进行启动、停止、重启操作。

> 注意：如果已经加入全局变量则直接执行：hmctl  <命令参数>

* **启动服务**

  * 启动全部服务

  ```plain&#x20;text
  /opt/installer/production/scripts/hmctl start
  ```

  * 启动单个服务

  ```plain&#x20;text
  /opt/installer/production/scripts/hmctl start <服务名>
  ```

* **停止服务**

  * 停止全部服务

  ```plain&#x20;text
  /opt/installer/production/scripts/hmctl stop
  ```

  * 停止单个服务

  ```plain&#x20;text
  /opt/installer/production/scripts/hmctl stop <服务名>
  ```

* **重启服务**

  * 重启全部服务

  ```plain&#x20;text
  /opt/installer/production/scripts/hmctl restart
  ```

  * 重启单个服务

  ```plain&#x20;text
  /opt/installer/production/scripts/hmctl restart <服务名>
  ```

* **重新加载服务**

  > **注意：该命令只用于基础镜像有更新的情况下使用**

  ```plain&#x20;text
  /opt/installer/production/scripts/hmctl reload
  ```

### 日志管理

所有系统日志文件存储在 `/var/log/installer` 目录中。运维人员可以通过查看，日志文件，监控系统运行状态，排查故障，或提供相关文件给到对应项目负责人，确保系统稳定性。

```python
/var/log/installer/
├── autoinstall-user-data                  # 自动安装用户数据配置文件
├── block                                  # 存放与磁盘块相关的数据，通常用于分区信息
├── casper-md5check.json                   # 用于验证安装镜像的MD5值，确保镜像文件完整性
├── curtin-install-cfg.yaml                # Curtin安装工具的配置文件，控制安装过程
├── curtin-install.log                     # Curtin安装过程的日志文件，记录安装的详细步骤和错误
├── installer-journal.txt                  # 安装过程中的重要事件日志
├── media-info                             # 安装介质的信息文件，通常包括介质类型等
├── subiquity-client-debug.log -> subiquity-client-debug.log.2396    # Subiquity客户端调试日志的符号链接，指向日志文件 .2396
├── subiquity-client-debug.log.2396        # Subiquity客户端调试日志文件
├── subiquity-client-info.log -> subiquity-client-info.log.2396      # Subiquity客户端详细日志的符号链接，指向日志文件 .2396
├── subiquity-client-info.log.2396         # Subiquity客户端的详细日志文件
├── subiquity-curtin-apt.conf              # Curtin安装过程中APT包管理器的配置文件
├── subiquity-curtin-install.conf          # Curtin安装过程的具体配置文件
├── subiquity-server-debug.log -> subiquity-server-debug.log.2463    # Subiquity服务器端调试日志的符号链接，指向日志文件 .2463
├── subiquity-server-debug.log.2463       # Subiquity服务器端调试日志文件
├── subiquity-server-info.log -> subiquity-server-info.log.2463      # Subiquity服务器端详细日志的符号链接，指向日志文件 .2463
└── subiquity-server-info.log.2463        # Subiquity服务器端的详细日志文件
```

### 配置文件管理

系统的所有配置文件存储在 `/opt/installer/production/config` 目录中。运维人员可根据需求修改配置文件，以调整系统行为和功能设置。

> 由于配置文件繁多此处不一一列举

下列为`ant`服务配置文件实例：

```bash
[DEFAULT]
# 调试和日志
debug = False                             # 是否开启调试模式
verbose = False                           # 是否启用详细日志
ant_api_listen = 0.0.0.0                  # API监听地址
ant_api_listen_port = 10082               # API监听端口
transport_url = rabbit://guest:fs82BgKdU2QTr4Oy@rabbitmq:5672//  # RabbitMQ连接URL

# 日志轮转设置（已注释，按需启用）
# log_rotation_type = size                # 设置日志轮转方式（可选：size, time）
# max_logfile_count = 10                  # 最大日志文件数量
# max_logfile_size_mb = 64                # 最大日志文件大小（MB）

# API服务设置
ant_api_workers = 1                       # 启动的API工作线程数
proxy_base_url = http://proxy-api:18768   # 代理服务的基本URL
porter_base_url = http://porter-api:18766 # Porter服务的基本URL
porter_proxys_url = http://porter-api:18766/proxys  # Porter代理接口URL
storplus_base_url = http://storplus-api:18765  # Storplus服务的基本URL
OWL_BASE_URL = "http://owl-api:16700"     # OWL服务的基本URL

[database]
# 数据库连接配置
backend = sqlalchemy                      # 使用的ORM后端（如：sqlalchemy）
connection = mysql://ant:antPass@mysql:3306/ant?charset=utf8  # MySQL数据库连接字符串
use_db_reconnect = True                   # 是否启用数据库自动重连
max_pool_size = 30                        # 数据库连接池最大连接数
max_overflow = 20                         # 数据库连接池的最大溢出连接数
pool_timeout = 30                         # 获取数据库连接的超时时间（秒）
connection_recycle_time = 300            # 连接重用时间（秒），超过此时间后连接会被关闭并重新创建

[period]
# 定时任务相关配置
interval = 5                              # 定时任务的执行间隔（秒）
timeout = 86400                           # 定时任务的超时时间（秒），默认一天（86400秒）
```



## (Agentless模式)同步代理端程序运维

### **运行环境说明**

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

### 服务健康状态

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

![](./image/timedtaskrelatedconfiguration-agentlessmode_synchronousagentprogramoperationandmaintenance-1.png)

### 服务启动/停止/重启

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

### 日志管理

所有系统日志文件存储在`/var/log/hamal`目录中。运维人员可以通过查看，日志文件，监控系统运行状态，排查故障，或提供相关文件给到对应项目负责人，确保系统稳定性。

```plain&#x20;text
/var/log/hamal
├── hamal-period.log                   # Hamal 定时任务的主日志（约 188KB）
├── hamal-period-subprocess.log        # Hamal 定时任务中子进程的日志（约 10KB）
├── ip_mapping.backup                  # IP 映射的备份文件（当前为空）
├── vm-kylin_v10_Agent-<UUID>.log      # 虚拟机代理相关，可以通过vm开头的日志，来判断是否同步状态
```

### 配置文件管理

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

## Linux Agent运维

### **运行环境说明**

通过在源端服务器上部署 Agent 程序，实时捕获文件系统或块设备的变化，实现对数据的持续同步，适用于物理服务器、非虚拟化环境或需要更精细控制的场景。

Linux Agent 支持部署在以下版本的 Linux 操作系统上：CentOS 6.5+、CentOS 7.x/8.x、RHEL 6.x/7.x/8.x、SLES 11 SP1/SP3/SP4，以及 Ubuntu Server 12.04/14.04/16.04/18.04/20.04（均为 64 位）。

系统安装在/var/lib/egisplus-agent目录中，主要的文件及目录结构：

```python
egisplus-agent/
├── agent-sync.db              # 本地同步数据库，存储代理同步状态
├── agent-sync.db-shm          # SQLite 共享内存文件
├── agent-sync.db-wal          # SQLite 写前日志文件
├── collect_system_info.sh     # 采集系统信息的脚本
├── config.ini                 # 主配置文件（如服务地址、认证信息等）
├── disk_uuid_map              # 磁盘 UUID 与设备路径映射
├── egisplus-agent             # 主执行程序（代理核心）
├── egisplus_version           # Agent 的版本信息
├── fstab.bak                  # `/etc/fstab` 文件备份（挂载点信息）
├── hw_serial                  # 主机硬件序列号（用于唯一标识）
├── protect_type               # 保护类型定义（如全量、增量）
├── public_key                 # 与服务端通信使用的公钥
├── registered                 # 是否注册标记（通常空文件表示已注册）
├── uninstall_agent.sh         # 卸载脚本，清理安装和配置
├── upgrade_agent.sh           # 升级脚本，用于更新 agent 版本
└── version                    # 版本号文件，标识当前运行版本
```

### 服务健康状态

Linux Agent 安装完成后，通过 `egisplus-cli` 工具进行运行和管理。运维人员可使用相关命令检查服务状态与执行控制操作。

 命令结构说明：

```Plain
egisplus-cli agent <子命令>

子命令            说明
check         检查代理状态，可能是健康检查或运行状况检查
clean         清理某些缓存或临时数据
cow           可能是 Copy-On-Write 相关操作
devices       显示或管理设备（磁盘、分区等
fs            文件系统相关操作（如挂载、检测
log           查看代理相关的日志 
read_rate     查看或配置读取速率限制
version       显示 `egisplus-cli` 工具的版本信息
```

下列示例为执行一次代理状态检查：

```Plain
egisplus-cli agent check
```

返回的是 `egisplus-cli` 程序的运行状态检查结果：

```YAML
Service status
    Agent service is started: Yes.                        ##Agent 服务正在运行
    iSCSI service is started: Yes.                        ##iSCSI 服务也已启动，说明该节点可能用于块级存储或备份挂载
Agent status
    This agent is registered: Yes.                        ##表示这个代理已经成功注册到HyperBDR
    This agent is protected : No.                         ##这里的no表示还没有开始同步数据
    Heartbeat of this agent : 305.                        ##表示代理与控制端有心跳连接，数值显示连接正常
File system
    block       mount   fs      free    used    path
    /dev/dm-0   /       xfs     185G    4%      /dev/mapper/centos-root    ##这部分显示了当前系统的挂载磁盘和使用情况
    /dev/sda1   /boot   xfs     853M    16%     /dev/sda1                  ##这部分显示了当前系统的挂载磁盘和使用情况
```

### 服务启动/停止/重启

运维人员可通过`systemd`用以下命令对 `egisplus-agent.service` 进行管理：

* **启动服务**

  ```plain&#x20;text
  systemctl start egisplus-agent.service
  ```

* **停止服务**

  ```plain&#x20;text
  systemctl stop egisplus-agent.service
  ```

* **重启服务**

  ```plain&#x20;text
  systemctl restart egisplus-agent.service
  ```

### 日志管理

所有系统日志文件存储在 /var/log/egisplus-agent 目录中。运维人员可以通过查看，日志文件，监控系统运行状态，排查故障，或提供相关文件给到对应项目负责人，确保系统稳定性。

```plain&#x20;text
egisplus-agent/
├── agent-syncer.log              # 与控制中心/云端同步任务的运行日志
├── agent-syncer-panic.log        # 同步任务的异常/崩溃日志，问题排查首选
├── db.log                        # 与本地状态数据库或元数据相关的操作日志
├── linux_agent.log               # 主代理程序的核心运行日志，记录服务启动、注册、调度等
└── linux_agent.log-20250511.gz   # 自动轮转的归档历史日志，gzip 压缩格式
```

### 配置文件管理

Linux Agent 的主要配置文件位于 /var/lib/egisplus-agent 目录下，文件名为 config.ini。该文件包含了 Linux Agent 的各项配置信息，包括服务连接、数据库、同步任务、日志、S3 配置等。

以下是该配置文件的各个部分及其作用说明：

```bash
[INFO]
Version = 6.1.0
# 应用版本号

[DEFAULT]
ServerAddress = 127.0.0.1:19982       # 服务监听地址与端口
ServerCertFile =                      # 服务端SSL证书文件路径（可选）
ServerKeyFile =                       # 服务端SSL密钥文件路径（可选）
ReadTimeout = 20                      # 请求读取超时时间（秒）
WriteTimeout = 20                     # 响应写入超时时间（秒）
StopTimeout = 10                      # 服务停止前的等待超时（秒）
MaxHeaderBytes = 1048576              # HTTP请求头最大大小（字节）

[DATABASE]
DatabaseFile = /var/lib/egisplus-agent/agent-sync.db  # SQLite 数据库文件路径
DBLogFile = /var/log/egisplus-agent/db.log            # 数据库操作日志路径

[SYNC]
Deduplicate = true                    # 是否开启去重
Compress = ""                         # 数据压缩方式（空表示不开启）
Encrypt = ""                          # 数据加密方式（空表示不开启）
IndexPath = /var/lib/egisplus-agent/index  # 索引数据存储路径
DirectIO = false                      # 是否启用Direct I/O
WorkersPerBlock = 2                  # 每块数据的处理线程数
BuffersPerBlock = 8                  # 每块数据的缓冲区数量
SaveIndexInterval = 30              # 索引保存间隔（秒）
SaveBlobInterval = 10               # Blob数据保存间隔（秒）
ConcurrentThreads = 2               # 同步任务并发线程数
SyncBufferSize = 8                  # 同步缓冲区大小
EnableRetry = true                  # 是否启用失败重试
RetryCount = 10                     # 最大重试次数
RetryInterval = 30                  # 重试间隔（秒）
CheckDup = true                     # 是否检查重复数据

[S3]
AccessKey = ak                      # S3访问密钥
SecretKey = sk                      # S3密钥
Region = region                     # S3区域
BucketName = bucket                # S3桶名称
StorageClass = standard            # 存储类型（如 standard, infrequent-access）
URL = https://                     # S3服务地址
UseTLS = true                      # 是否启用TLS连接

[CLIENT]
ClientCertFile = /var/lib/egisplus-agent/client_cert_file  # 客户端证书文件路径
ClientKeyFile = /var/lib/egisplus-agent/client_key_file    # 客户端密钥文件路径
ClientUploadURL = 120               # 客户端上传URL的超时时间（秒）
ClientTimeout = 120                 # 客户端请求超时时间（秒）
SendContentMd5 = true               # 是否发送Content-MD5头
DisableContentSha256 = true         # 是否禁用Content-SHA256校验

[LOG]
LogPath = /var/log/egisplus-agent   # 日志文件路径
LogFileName = agent-syncer.log      # 日志文件名
LogLevel = info                     # 日志等级（如 debug, info, warn, error）
LogFileMaxSize = 64                 # 单个日志文件最大大小（MB）
LogFileMaxBackups = 10              # 保留的历史日志文件数量
LogMaxAge = 28                      # 日志文件最长保留天数
LogCompress = true                 # 是否压缩历史日志
LogStdout = false                  # 是否输出日志到控制台
```



## Windows Agent运维

### 运行环境说明

通过在源端服务器上部署 Agent 程序，实时捕获文件系统或块设备的变化，实现对数据的持续同步，适用于物理服务器、非虚拟化环境或需要更精细控制的场景。

Windows Agent 支持部署在以下版本的 Windows Server 操作系统上：2003 SP2/R2、2008、2008 R2、2012、2012 R2、2016、2019（均为 64 位）。

系统安装在 C:\Program Files (x86)\DiskSync-Agent 目录中（具体路径以实际选择安装路径为准），主要的文件及目录结构：

![](./image/applicationversionnumber-windowsagentoperationandmaintenance-1.png)

### 服务监控状态

运维人员可以通过 Windows 任务管理器检查服务的运行状态，确认服务是否正常运行。

* 任务管理器服务开启方式：

  * 方法1：

    ```plain&#x20;text
    同时按下键盘上 <Ctrl + Alt + Del>
    ```

  * 方法2

    ```plain&#x20;text
    按下 Win + R 打开运行窗口。
    输入 taskmgr，然后按 回车。
    ```

    ![](./image/applicationversionnumber-windowsagentoperationandmaintenance-2.png)

### 服务启动/停止/重启

* **启动服务：**

  * 右键点击桌面的Windows Agent快捷程序，以管理员权限运行。

  ![](./image/applicationversionnumber-windowsagentoperationandmaintenance-3.png)

  * 左键点击Start Service

  ![](./image/applicationversionnumber-windowsagentoperationandmaintenance-4.png)

  * 警告信息（忽略即可）

  ![](./image/applicationversionnumber-windowsagentoperationandmaintenance-5.png)

  ![](./image/applicationversionnumber-windowsagentoperationandmaintenance-6.png)

  * 服务启动正常

  ![](./image/applicationversionnumber-windowsagentoperationandmaintenance-7.png)

* **停止服务：**

  * 点击Stop Service即可停止服务

  ![](./image/applicationversionnumber-windowsagentoperationandmaintenance-8.png)

### 日志管理

所有系统日志文件存储在`C:\Program Files (x86)\DiskSync-Agent\log`目录中（具体路径以安装选择路径为准\log）。运维人员可以通过查看，日志文件，监控系统运行状态，排查故障，或提供相关文件给到对应项目负责人，确保系统稳定性。

![](./image/applicationversionnumber-windowsagentoperationandmaintenance-9.png)

### 配置文件管理

Windows Agent 的主要配置文件位于 `C:\Program Files (x86)\DiskSync-Agent\config` 目录下（具体路径以实际选择安装路径为准\config），文件名为 `Sysconfig.ini`。该文件包含了 Windows Agent 的各项配置信息，包括服务连接、数据库、同步任务、日志、S3 配置等。

以下是该配置文件的各个部分及其作用说明：

```c++

[SysParam]
HM_URL =https://192.168.7.141:10443/hypermotion/v1
SYNC_NODE_KEY =da8aae5b-facb-452f-8161-5c866f8fafaa

;log level
LOGFLAG=2
                                        
;Filename of successful host registration
REG_FILE=registered        

;Heartbeat interval (seconds)"
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



## 云同步网关运维

### 运行环境说明

云同步网关是连接源端与目标云平台的关键组件，负责接收并处理源端的全量和增量数据，将其同步至云平台的存储中，实现高效、低成本的数据备份与灾难恢复。

平台会自动创建默认云同网关环境，通常为 2 核 CPU、4GB 内存、50GB 硬盘的 Ubuntu 20.04 系统。

系统安装在 `/var/lib/sgateway` 目录中（位置可选），主要的文件及目录结构：

```bash
/var/lib/sgateway/
├── certs                   # 存放 TLS/SSL 证书的目录（含私钥、公钥等）
├── config                  # 存放配置文件的目录（如 s3block_config.ini）
├── confmgmt                # 配置管理目录，可能用于集中配置同步或版本控制
├── diskdir                 # 本地数据目录，用于对象存储数据或缓存
├── dr                      # 灾难恢复（Disaster Recovery）相关目录（当前可能为空或预留）
├── logs                    # 日志目录，记录 s3block 和 watchman 的运行日志
├── s3block                 # s3block 主程序，可执行文件，提供核心数据服务
├── s3block.db              # s3block 的本地数据库文件，存储任务状态、元信息等
├── s3block.service         # systemd 服务定义文件，用于管理 s3block 的启动和运行
├── s3block_version         # s3block 的版本信息文件
├── version                 # 系统或模块的版本号标识文件
├── watchman                # watchman 主程序，可执行文件，负责监控、同步触发等功能
└── watchman.service        # systemd 服务定义文件，用于管理 watchman 的启动和运行
```

### 服务健康状态

云同步网关创建安装完成后，通过 `systemd`工具进行运行和管理。运维人员可使用`systemctl`相关命令检查服务状态与执行控制操作。云同步网关需要关注两个服务分别是：`s3block.service`、`watchman.service`和`hyper_exporter.service`

| **服务项**                 | **关注字段** | **服务状态**           |
| ----------------------- | -------- | ------------------ |
| s3block.service         | `Active` | `active (running)` |
| watchman.service        | `Active` | `active (running)` |
| hyper\_exporter.service | `Active` | `active (running)` |

可以通过systemctl status <服务名称>进行检查服务状态，非active状态以外都为异常，需要进行一步排查问题并解决。下列为查询示例：
```Plain
systemctl status s3block.service
```

### 服务启动/停止/重启

运维人员可通过`systemd`用以下命令对 `s3block.service`和`watchman.service`进行管理：

* **启动服务**

  * `s3block.service`

  ```plain&#x20;text
  systemctl start s3block.service
  ```

  * `watchman.service`

  ```plain&#x20;text
  systemctl start watchman.service
  ```

* **停止服务**

  * `s3block.service`

  ```plain&#x20;text
  systemctl stop s3block.service
  ```

  * `watchman.service`

  ```plain&#x20;text
  systemctl stop watchman.service
  ```

* **重启服务**

  * `s3block.service`

  ```plain&#x20;text
  systemctl restart s3block.service
  ```

  * `watchman.service`

  ```plain&#x20;text
  systemctl restart watchman.service
  ```

### 日志管理

所有系统日志文件存储在/var/log/sgateway 目录中。运维人员可以通过查看，日志文件，监控系统运行状态，排查故障，或提供相关文件给到对应项目负责人，确保系统稳定性。
```Plain
/var/log/sgateway/
├── s3block_20250514.log       # s3block 模块在 2025-05-14 的运行日志
├── s3block_20250515.log       # s3block 模块在 2025-05-15 的运行日志
├── watchman_20250514.log      # watchman 模块在 2025-05-14 的运行日志
└── watchman_20250515.log      # watchman 模块在 2025-05-15 的运行日志
```

### 配置文件管理

云同步网关的主要配置文件为 `s3block_config.ini`，位于 `/var/lib/sgateway/config` 目录下。该文件包含网关标识、公网 IP、WebSocket 服务地址、本地数据目录、日志等级、S3 存储访问凭证、端点地址等关键信息，用于支撑网关与中心服务之间的数据同步与通信。

以下是该配置文件的各个部分及其作用说明：
以下是该配置文件的各个部分及其作用说明：

```bash
[system]
gateway_uuid     = 41f2ef9e-50c7-430f-b316-e9e4ec5516d4     # 网关唯一标识符（UUID）
websocket_server = wss://192.168.7.141:10443/duplex/gateway/v1  # 与服务端建立 WebSocket 双向通信的地址
filedir          = diskdir                                 # 本地数据存储目录路径（相对路径）
log_level        = 1                                       # 日志等级（1 表示 INFO 级别）
multi_srv        = true                                    # 是否启用多服务模式（true 表示启用）
public_ip        = 192.168.14.65                           # 网关对外通信的公网 IP 地址
accessKey        = wCi7qC8RlFydraCugWWa                    # 对象存储服务的访问密钥（Access Key）
secretAccessKey  = TH5g4gbJKsK2YEsBLj7GaFpbWTiGYarRQSu1B59t # 对象存储服务的密钥（Secret Access Key）
localdisksaved   =                                          # 本地磁盘持久化目录（当前为空，可能为默认路径）
endpoint         = https://192.168.14.65:13260             # 对象存储服务的 endpoint（API 请求地址）
bucketcreated    = true                                    # Bucket 是否已创建（true 表示已创建）
```

## 临时过渡主机镜像运维

### 运行环境说明

“临时过渡主机镜像”是用于在系统迁移、故障恢复或测试验证等场景下，快速创建云主机的临时镜像，确保业务平稳过渡。创建时需要保持与回切主机配置一致
