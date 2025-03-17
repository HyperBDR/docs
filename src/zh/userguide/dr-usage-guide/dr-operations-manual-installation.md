# HyperBDR 安装

[[toc]]

## 安装方式

HyperBDR 支持单机离线部署。我们将提供离线安装包进行安装部署。有关具体的安装前提条件和资源要求，请参考以下文档。
## 环境要求

::: warning
注意：在准备 HyperBDR 控制台主机资源时，如果 HyperBDR 使用公共网络访问，那么在主机登录模式中选择密钥对登录而不是密码登录，以确保服务器访问的安全性。
:::

| 配置项    | 参数                                                                                                                  |
| :----- | :------------------------------------------------------------------------------------------------------------------ |
| Cpu    | 8 C                                                                                                                 |
| 内存     | 16 GiB                                                                                                              |
| 操作系统   | Ubuntu 20.04 server 64bit                                                                                           |
| 系统盘    | 200GB                                                                                                               |
| 端口开放规则 | [HyperBDR Open Network Policy](https://docs.oneprocloud.com/userguide/faq/faq.html#hyperbdr-required-network-policy) |

::: tip
如果您所在的平台没有 Ubuntu 20.04 Server 64 位镜像，那么您可以下载我们提供的标准镜像，并将其导入平台进行安装。

下载链接: [ubuntu-20.04-server-cloud-init-amd64.qcow2](https://downloads.oneprocloud.com/docs_images/ubuntu-20.04-server-cloud-init-amd64.qcow2)
:::
## 软件安装

[![asciicast](https://asciinema.org/a/686760.svg)](https://asciinema.org/a/686760)

### 安装包信息

#### 安装包

通过浏览器访问 [https://install.oneprocloud.com/get_hyperbdr_latest](https://install.oneprocloud.com/get_hyperbdr_latest) ，以获取下载包链接。

#### 安装包 MD5 校验和文件

通过浏览器访问 [https://install.oneprocloud.com/get_hyperbdr_latest](https://install.oneprocloud.com/get_hyperbdr_latest)  获取下载包链接。然后，在获取链接后添加.md5 后缀以获取 MD5 文件。

::: tip
登录到 HyperBDR 主机后端并执行命令。
:::
### 下载安装包和 MD5 校验和文件

#### 在 Shell 中设置 URL

```sh
# 获取最新的 HyperBDR 软件包 URL。
HYPERBDR_PACKAGE=$(curl -s -k https://install.oneprocloud.com/get_hyperbdr_latest/latest)
echo "HYPERBDR_PACKAGE: ${HYPERBDR_PACKAGE}"

# 获取相应的 MD5 文件 URL。
HYPERBDR_PACKAGE_MD5="${HYPERBDR_PACKAGE}.md5"
echo "HYPERBDR_PACKAGE_MD5: ${HYPERBDR_PACKAGE_MD5}"

# 使用字符串操作提取包名称。
HYPERBDR_PACKAGE_NAME="${HYPERBDR_PACKAGE##*/}"
echo "HYPERBDR_PACKAGE_NAME: ${HYPERBDR_PACKAGE_NAME}"

# 提取 MD5 文件名
HYPERBDR_PACKAGE_MD5_NAME="${HYPERBDR_PACKAGE_NAME}.md5"
echo "HYPERBDR_PACKAGE_MD5_NAME: ${HYPERBDR_PACKAGE_MD5_NAME}"
```
#### 下载安装包文件

```sh
curl -k -O "$HYPERBDR_PACKAGE"
curl -k -O "$HYPERBDR_PACKAGE_MD5"
```
### 安装包一致性检查

- 步骤 1：为下载的安装包生成 MD5 值。

```sh
md5sum "$HYPERBDR_PACKAGE_NAME"
```

- 步骤 2：检查 MD5 校验和文件中记录的 MD5 值。

```sh
cat "$HYPERBDR_PACKAGE_MD5_NAME"
```

- 步骤 3：比较 MD5 值。
 
如果在`步骤 1` 和`步骤 2` 中获得的 MD5 值相同，则表明安装包未损坏。如果 MD5 值不同，您可以尝试重新下载文件进行比较或联系我们寻求帮助。

### 安装HyperBDR软件

> 完成 HyperBDR 安装包的下载后，您可以进行安装。
> 默认情况下，已登录到 HyperBDR 安装主机后端。

::: tip
用于安装的操作系统必须是 Ubuntu 20.04 版本。
:::

#### 解压 HyperBDR 安装包。

- 执行以下命令解压安装包。

```sh
rm -rf /mnt/installer && tar -zxvf "$HYPERBDR_PACKAGE_NAME" -C /mnt/  
```
#### 运行安装脚本

##### 通过公网/互联网访问 HyperBDR 平台。

- 执行命令 

```sh
bash /mnt/installer/install.sh -i <HyperBDR Public IP>
```

::: tip
通过`-i`参数指定的公网 IP 可以理解为您的外部互联网地址。一般来说，在数据中心，它被称为互联网 IP。如果在云上，它通常被称为弹性公网 IP（EIP）。请根据您的实际环境获取它。
指定公网IP之后，那么就代表HyperBDR安装完成后，所有对外的提供的服务都是公网下载地址，包含Agent下载链接、源端和HyperBDR平台的通信地址等
:::
##### 通过内网/VPN访问 HyperBDR 平台。

- 执行命令  

```sh
bash /mnt/installer/install.sh
```
::: warning
默认情况下，安装脚本使用第一个网络接口卡的地址作为平台服务地址。
:::

如果安装成功，您将看到提示的登录信息。

```
[2023-03-30 23:08:36] [INFO] --------------------------------------------------
[2023-03-30 23:08:36] [INFO] Congratulations! The installation of HyperBDR is complete.
[2023-03-30 23:08:36] [INFO]
[2023-03-30 23:08:36] [INFO] DR        : https://192.168.12.81:10443
[2023-03-30 23:08:36] [INFO] Migration : https://192.168.12.81:20443
[2023-03-30 23:08:36] [INFO] Admin     : https://192.168.12.81:30443
[2023-03-30 23:08:36] [INFO]
[2023-03-30 23:08:36] [INFO] The default username and password : admin / P@ssw0rd
[2023-03-30 23:08:36] [INFO]
[2023-03-30 23:08:36] [INFO] If you have any questions or need assistance, please refer
[2023-03-30 23:08:36] [INFO] to the user manual or contact our support team.
[2023-03-30 23:08:36] [INFO]
[2023-03-30 23:08:36] [INFO] Enjoy using our product!
[2023-03-30 23:08:36] [INFO] --------------------------------------------------
```
- 访问 HyperBDR 控制台，访问链接：`https://\<HyperBDR IP\>:10443`
- 访问 HyperMotion 控制台，访问链接：`https://\<HyperBDR IP\>:20443`
- 访问管理门户控制台，访问链接：`https://\<HyperBDR IP\>:30443`
