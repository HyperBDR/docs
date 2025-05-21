# **控制台运维**

## **运行环境说明**

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



## **服务健康状态**

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

![](./images/servicecomponentoperationandmaintenance-consoleoperationandmaintenance-1.png)

- 日志占用空间

![](./images/servicecomponentoperationandmaintenance-consoleoperationandmaintenance-2.png)

- 程序占用空间

![](./images/servicecomponentoperationandmaintenance-consoleoperationandmaintenance-3.png)

- 磁盘剩余空间

![](./images/servicecomponentoperationandmaintenance-consoleoperationandmaintenance-4.png)

- 10443服务端口健康状况

![](./images/servicecomponentoperationandmaintenance-consoleoperationandmaintenance-5.png)
## **服务启动/停止/重启**

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

## **日志管理**

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

## **配置文件管理**

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