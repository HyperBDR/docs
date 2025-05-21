# **Linux Agent运维**

## **运行环境说明**

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

## **服务健康状态**

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

## **服务启动/停止/重启**

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

## **日志管理**

所有系统日志文件存储在 /var/log/egisplus-agent 目录中。运维人员可以通过查看，日志文件，监控系统运行状态，排查故障，或提供相关文件给到对应项目负责人，确保系统稳定性。

```plain&#x20;text
egisplus-agent/
├── agent-syncer.log              # 与控制中心/云端同步任务的运行日志
├── agent-syncer-panic.log        # 同步任务的异常/崩溃日志，问题排查首选
├── db.log                        # 与本地状态数据库或元数据相关的操作日志
├── linux_agent.log               # 主代理程序的核心运行日志，记录服务启动、注册、调度等
└── linux_agent.log-20250511.gz   # 自动轮转的归档历史日志，gzip 压缩格式
```

## **配置文件管理**

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