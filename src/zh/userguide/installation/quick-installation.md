# 快速安装

[[toc]]

## 关于本文档

本文档为快速指南，适用于对用户需求、使用场景及产品限制条件有较清晰了解的技术人员，用于高效完成产品的规划与部署。本指南适用于方案验证阶段及正式交付阶段。

本文档也可用于初次接触产品的培训文档。

如果您已经对产品适用范围有充分的了解，可以直接跳转到[产品安装](#产品安装)。

## 开始之前

### 1. 明确产品适用范围

本产品适用于主机级别的整体迁移与容灾。无论您的生产环境运行于物理机、虚拟机、公有云、私有云或超融合平台，只要具备对操作系统的访问权限，均可使用本产品实现高效迁移与容灾保护。

#### 1.1 生产平台支持

1. 代理方式（Agent）：主要支持常见的 Linux 和 Windows 操作系统。详细支持列表可参考下方链接: [Agent Operation System Support](https://oneprocloud.feishu.cn/sheets/VRqksSPEPhRTPStp3kVcItXNnyh?sheet=Y9fpqO)

2. 无代理方式（Agentless）：主要支持 VMware、OpenStack（Ceph）、AWS、Oracle Cloud、华为 FusionCompute 等平台。详细支持列表可参考下方链接: [Agentless Operation System Support](https://oneprocloud.feishu.cn/sheets/VRqksSPEPhRTPStp3kVcItXNnyh?sheet=0MJNYC)

更详细的支持和限制条件请参考：[兼容性概述](../../product-overview/limitations/product-support-overview.md)

#### 1.2 容灾场景确认RPO和RTO

如果是容灾场景，还需要明确产品的 RPO 和 RTO 是否满足用户需求

- [RPO & RTO 最佳实践](../../product-overview/presales/hyperbdr-rpo-rto-planning-best-practices.md)

### 2. 用户生产环境主机调研

在确定本产品能够满足用户需求后，需要对操作系统、虚拟化平台、云平台等进行必要的调研，进一步确认本产品可以满足项目需求。

- [主机调研](../../product-overview/presales/hyperbdr-agent-investigation.md)
- [VMware 主机调研](../../product-overview/presales/hyperbdr-vmware-investigation.md)

### 3. 目标平台支持

- [公有云支持能力](https://oneprocloud.feishu.cn/sheets/S7LisoSWdhm2G4t0rdycwxEunEd?sheet=o9tX6a)
- [专有云/私有云支持能力](https://oneprocloud.feishu.cn/sheets/S7LisoSWdhm2G4t0rdycwxEunEd?sheet=g5grTH)

### 4. 存储类型选择

目前产品支持两种存储方式：块存储和对象存储。用户可根据实际使用场景选择合适的存储类型。在确定存储类型后，即可进行相应的网络规划和适用场景的配置。

| 适用场景 | 推荐存储类型 | 备注说明                                                                    |
| -------- | ------------ | --------------------------------------------------------------------------- |
| 迁移场景 | 块存储       | RTO 时间较短，适用于停机窗口短、业务中断时间要求低的场景                    |
| 迁移场景 | 通用方式     | 适用于未实现自动化 API 对接的环境，可手动创建待迁移主机和磁盘，适用范围更广 |
| 容灾场景 | 块存储       | RTO 时间通常较短，依赖云平台能力，适用于对业务连续性要求较高的场景          |
| 容灾场景 | 对象存储     | 适用于对容灾成本敏感的客户，可接受适度延长 RTO 以降低整体成本               |

### 5. 网络规划

#### 产品网络矩阵

- [块存储模式网络通讯矩阵](../../product-overview/presales/dr-network-planning-recommendations.md#开放端口列表-1)
- [对象存储模式网络通讯矩阵](../../product-overview/presales/dr-network-planning-recommendations.md#开放端口列表)


#### 网络规划

- [产品网络规划](../../product-overview/presales/dr-network-planning-recommendations.md)

### 6. 镜像上传

::: warning
鉴于各云平台之间存在差异，为确保产品功能的正常使用，请务必在安装产品前，依据所选云平台的要求，提前上传指定镜像。只有在镜像成功上传后，方可进行产品的安装与使用，否则可能导致部分功能无法正常运行。
请根据所使用的目标云平台，选择并上传相应的镜像。
   :::

| 云平台                | 镜像名称                                                                   | 下载地址                                                                                                                                            | MD5                                   | 详细说明                                                                    |
| ------------------ | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ----------------------------------------------------------------------- |
| Huawei Cloud       | Windows_Server_2016<br>Datacenter_64bit<br>English_40G.qcow2 | [点击下载](https://downloads.oneprocloud.com/docs_images/Windows_Server_2016_Datacenter_64bit_English_40G.qcow2) | 519444d4b0343e15f<br>a014c50d906a832 |  [点击查看](../poc/huaweicloud-pre-settings.md#镜像下载-上传)                    |
| Huawei Cloud       | ubuntu-20.04-server-<br>cloud-init-<br>amd64.qcow2                   | [点击下载](https://downloads.oneprocloud.com/docs_images/ubuntu-20.04-server-cloud-init-amd64.qcow2)                                                | --                                    |  [点击查看](../poc/huaweicloud-pre-settings.md#镜像下载-上传)                    |
| Huawei Cloud       | HuaweiCloud<br>UEFI<br>GenericImage.qcow2                        | [点击下载](https://downloads.oneprocloud.com/docs_images/HuaweiCloud_UEFI_GenericImage.qcow2)                                                       | 7814209a573666f2<br>701b35236764723d |  [点击查看](../poc/huaweicloud-pre-settings.md#镜像下载-上传)                    |
| TM CAE             | ubuntu-20.04-server-<br>cloud-init-<br>amd64.qcow2                   | [点击下载](https://downloads.oneprocloud.com/docs_images/ubuntu-20.04-server-cloud-init-amd64.qcow2)                                                | --                                    |  [点击查看](../poc/tmcae-pre-settings.md#image-download-upload)            |
| TM CAE             | Windows_Server_2016<br>Datacenter_64bit<br>English_40G.qcow2 | [点击下载](https://downloads.oneprocloud.com/docs_images/Windows_Server_2016_Datacenter_64bit_English_40G.qcow2) | 519444d4b0343e15f<br>a014c50d906a832 |  [点击查看](../poc/tmcae-pre-settings.md#image-download-upload)            |
| Open Telekom Cloud | ubuntu-20.04-server-<br>cloud-init- <br>amd64.qcow2                   | [点击下载](https://downloads.oneprocloud.com/docs_images/ubuntu-20.04-server-cloud-init-amd64.qcow2)                                                | --                                    |  [点击查看](../poc/opentelekomcloud-pre-settings.md#image-download-upload) |
| Open Telekom Cloud | Windows_Server_2016<br>Datacenter_64bit<br>English_40G.qcow2 | [点击下载](https://downloads.oneprocloud.com/docs_images/Windows_Server_2016_Datacenter_64bit_English_40G.qcow2)                                    | 519444d4b0343e15f<br>a014c50d906a832 |  [点击查看](../poc/opentelekomcloud-pre-settings.md#image-download-upload) |
| Open Telekom Cloud | HuaweiCloud<br>UEFI<br>GenericImage.qcow2                        | [点击下载](https://downloads.oneprocloud.com/docs_images/HuaweiCloud_UEFI_GenericImage.qcow2)                                                       | 7814209a573666f2<br>701b35236764723d |  [点击查看](../poc/opentelekomcloud-pre-settings.md#image-download-upload) |
| Huawei Cloud Stack | ubuntu-20.04-server-<br>cloud-init-<br>amd64.qcow2                   | [点击下载](https://downloads.oneprocloud.com/docs_images/ubuntu-20.04-server-cloud-init-amd64.qcow2)                                                | --                                    |  [点击查看](../poc/hcs-pre-settings.md#image-download-upload)              |
| Huawei Cloud Stack | Windows_Server_2016 <br>Datacenter _64bit<br>English_40G.qcow2 | [点击下载](https://downloads.oneprocloud.com/docs_images/Windows_Server_2016_Datacenter_64bit_English_40G.qcow2)                                    | 519444d4b0343e15f<br>a014c50d906a832 |  [点击查看](../poc/hcs-pre-settings.md#image-download-upload)              |
| Huawei Cloud Stack | HuaweiCloud<br>UEFI<br>GenericImage.qcow2                        | [点击下载](https://downloads.oneprocloud.com/docs_images/HuaweiCloud_UEFI_GenericImage.qcow2)                                                       | 7814209a573666f2<br>701b35236764723d |  [点击查看](../poc/hcs-pre-settings.md#image-download-upload)              |

## 产品安装

迁移（HyperMotion）和容灾（HyperBDR）产品通过统一的离线安装包进行部署。离线包需在可访问公网的环境中下载，安装过程本身不依赖公网，可在隔离环境中完成。

### 1. 准备部署环境主机

::: warning
如果控制台主机可通过公共网络访问，为确保服务器安全，强烈建议：

1. 关闭基于密码的远程登录方式，改用密钥认证方式
2. 严格限制访问来源 IP，仅允许可信地址访问
3. 启用防火墙，仅开放必要端口
   :::

| 配置项   | 参数                      |
| :------- | :------------------------ |
| CPU      | 8 C                       |
| 内存     | 16 GiB                    |
| 操作系统 | Ubuntu 20.04 server 64bit |
| 系统盘   | 500GB                     |

::: tip
如果您所在的平台没有 Ubuntu 20.04 Server 64 位镜像，那么您可以下载我们提供的标准镜像，并将其导入平台进行安装。

下载链接: [ubuntu-20.04-server-cloud-init-amd64.qcow2](https://downloads.oneprocloud.com/docs_images/ubuntu-20.04-server-cloud-init-amd64.qcow2)
:::

::: warning
在对象存储模式下，因 Redis 需存储元数据，8核16GB配置最多支持保护生产环境主机总容量约10TB的数据（128快照，增量小于5%）。当数据量超过10TB且不超过30TB时，建议将内存扩容至32GB；超过30TB且不超过50TB时，建议扩容至64GB；若数据量更大，建议单独部署 Redis 节点以满足内存需求。
:::

### 2. 获取安装包

如果用于控制台安装的主机可以直接访问公网，推荐使用本方式获取安装包。

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

# 开始下载
curl -k -O "$HYPERBDR_PACKAGE"
curl -k -O "$HYPERBDR_PACKAGE_MD5"
```

#### (可选)离线方式获取安装包

::: warning
如果已经通过在线方式获取安装包，请直接跳过该步骤。
:::

如果安装主机无法直接访问互联网，您可以使用其他设备的浏览器访问以下地址获取安装包链接：

- [https://install.oneprocloud.com/get_hyperbdr_latest](https://install.oneprocloud.com/get_hyperbdr_latest)

获取链接后，在链接地址末尾添加 `.md5` 后缀即可获取对应的 MD5 校验文件。然后手动将安装包上传至控制台主机并执行安装。

### 3. 安装包完整性校验(MD5)

如果通过在线方式获取安装包，可直接进行比对；若通过浏览器下载，则需手动进行比对。

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

### 4. 产品安装

::: tip
在执行以下步骤之前，请确保：

1. 安装包已正确上传至目标主机
2. 完成了安装包的完整性校验
3. 目标主机的操作系统为 Ubuntu 20.04 64 位
4. 系统时间已正确同步
   :::

- 执行以下命令解压安装包。

```sh
rm -rf /mnt/installer && tar -zxvf "$HYPERBDR_PACKAGE_NAME" -C /mnt/
```

#### (方式一)内部网络/专线/VPN

::: warning
默认情况下，安装脚本使用第一个网络接口卡的地址作为平台服务地址。
:::

```sh
bash /mnt/installer/install.sh
```

#### (方式二)公网/NAT 网络

```sh
bash /mnt/installer/install.sh -i <Console Service IP>
```

::: tip
通过-i 参数可以指定控制台对外提供服务的 IP 地址，例如：Agent/Agentless 安装包下载地址，客户端与控制端进行访问的地址。

例如：如果通过`-i`指定为公网 IP，例如在云平台使用 EIP 地址，那么控制台所有对外的提供的服务都是公网下载地址，包含 Agent 下载链接、源端和 HyperBDR 平台的通信地址等。

请根据实际情况谨慎选择控制台服务 IP 地址信息。
:::

### 5. 安装完成

如果安装成功，您将看到提示的登录信息。

```
[2023-03-30 23:08:36] [INFO] --------------------------------------------------
[2023-03-30 23:08:36] [INFO] Congratulations! The installation of HyperBDR is complete.
[2023-03-30 23:08:36] [INFO]
[2023-03-30 23:08:36] [INFO] DR        : https://192.168.12.81:10443
[2023-03-30 23:08:36] [INFO] Migration : https://192.168.12.81:20443
[2023-03-30 23:08:36] [INFO]
[2023-03-30 23:08:36] [INFO] The default username and password : admin / P@ssw0rd
[2023-03-30 23:08:36] [INFO]
[2023-03-30 23:08:36] [INFO] If you have any questions or need assistance, please refer
[2023-03-30 23:08:36] [INFO] to the user manual or contact our support team.
[2023-03-30 23:08:36] [INFO]
[2023-03-30 23:08:36] [INFO] Enjoy using our product!
[2023-03-30 23:08:36] [INFO] --------------------------------------------------
```

#### 平台访问入口

| 控制台名称         | 访问链接                             | 说明           |
| ------------------ | ------------------------------------ | -------------- |
| HyperBDR 控制台    | `https://<Console Service IP>:10443` | 容灾管理控制台 |
| HyperMotion 控制台 | `https://<Console Service IP>:20443` | 迁移管理控制台 |

## (演示)产品安装视频

[![asciicast](https://asciinema.org/a/686760.svg)](https://asciinema.org/a/686760)

## 参考链接

- [获取产品支持](https://support.oneprocloud.com)
