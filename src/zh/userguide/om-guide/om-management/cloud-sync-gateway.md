# **云同步网关运维**

## **运行环境说明**

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

## **服务健康状态**

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

## **服务启动/停止/重启**

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

## **日志管理**

所有系统日志文件存储在/var/log/sgateway 目录中。运维人员可以通过查看，日志文件，监控系统运行状态，排查故障，或提供相关文件给到对应项目负责人，确保系统稳定性。
```Plain
/var/log/sgateway/
├── s3block_20250514.log       # s3block 模块在 2025-05-14 的运行日志
├── s3block_20250515.log       # s3block 模块在 2025-05-15 的运行日志
├── watchman_20250514.log      # watchman 模块在 2025-05-14 的运行日志
└── watchman_20250515.log      # watchman 模块在 2025-05-15 的运行日志
```

## **配置文件管理**

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