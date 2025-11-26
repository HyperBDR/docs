# Oracle Cloud 无代理模式

## 1. 简介与兼容性

本功能采用无代理 (Agentless) 模式，通过 Oracle Cloud Infrastructure (OCI) 的原生 API 接口，实现云主机（实例）的数据备份与迁移。该模式无需在源端主机内安装任何插件，通过外挂快照的方式读取数据，对生产业务影响最小。

### 1.1 支持的平台信息

| 项目       | 说明                                                                                                  |
| -------- | --------------------------------------------------------------------------------------------------- |
| **云平台**  | Oracle Cloud Infrastructure (OCI) 标准公有云                                                             |
| **认证方式** | API Key 认证 (需要 User OCID, Tenancy OCID, Private Key, Fingerprint)                                   |
| **支持区域** | 所有支持 Block Volume 和 Compute 服务的 OCI 全球区域                                                            |
| **存储类型** | 支持 **Boot Volume** (启动卷) 和 **Block Volume** (数据卷) *注：不支持 File Storage (NFS) 和 Object Storage 的直接备份* |

## 2. 操作系统支持

### 2.1 源端主机&#x20;

* 点击[云平台支持矩阵](https://oneprocloud.feishu.cn/sheets/VRqksSPEPhRTPStp3kVcItXNnyh?sheet=Y9fpqO)查看兼容性列表及最新支持状态。

### 2.2  同步代理网关 (Sync Proxy)

同步代理是负责执行数据读取和传输的中转服务器，必须部署在 OCI 云平台内。

* **操作系统要求**：必须使用Linux系统Ubuntu 20.04+。

* **部署位置**：必须与源端主机位于同一个可用区 (Availability Domain)。

## 3. 部署前置要求

在开始任务前，请确保您的 OCI 环境满足以下网络和权限配置。

### 3.1 网络要求

同步代理 (Sync Proxy) 需要同时通过管理网络和数据网络进行通信：

1. **API 访问权限&#x20;**：

   * 同步代理需要访问 OCI 的公共 API 端点（如 Identity, Compute, BlockStorage）。

2. **存储数据通信**：

   * 同步代理需要通过 **iSCSI 协议** 连接 OCI 的后端存储设备。

   * **安全组规则**：请确保同步代理所在子网的 Security List 或 NSG 允许出站访问 TCP 3260 端口（iSCSI 默认端口）。

### 3.2 账号权限要求 (IAM Policy)

您需要提供一个具有 OCI API 操作权限的用户。由于备份过程涉及创建快照和临时卷，该用户需要租户级别 (Tenancy) 的特定权限。

**重要提示**：根据当前的系统逻辑，该用户必须拥有在根区间 (Root Compartment)创建临时资源的权限。



建议在 OCI 控制台配置如下 Policy（将 `GroupName` 替换为实际的用户组名）：

```plain&#x20;text
Allow group GroupName to manage volume-family in tenancy
Allow group GroupName to manage instance-family in tenancy
Allow group GroupName to use virtual-network-family in tenancy
Allow group GroupName to inspect compartments in tenancy
Allow group GroupName to inspect users in tenancy
```
[点击查看配置方式](../../../zh/userguide/poc/oracle-pre-settings.md)
## 4. 使用限制与注意事项

在使用 OCI 无代理模式时，请知晓以下限制，以免任务失败：

### 4.1 地域与可用区限制

* **同可用区原则**：OCI 的块存储是区域性资源。同步代理必须部署在与源端主机相同的 Availability Domain (AD) 内。如果源主机分布在 AD-1 和 AD-2，您需要在两个 AD 分别部署同步代理。

* **不支持跨 AD 直接同步**：无法直接使用 AD-1 的代理去备份 AD-2 的主机，这会导致卷无法挂载。

### 4.2 资源配额限制

* **并发数量**：OCI 限制单台云主机最多挂载 **32 块** 磁盘。扣除系统盘后，单台同步代理最多同时处理 31 个磁盘任务。

### 4.3 任务操作限制

* **临时资源**：同步过程中，您会在 OCI 控制台看到名为 `Sync_Proxy-...` 的卷组备份和临时磁盘，请勿手动删除这些资源，任务结束后系统会自动清理。

## 5.  数据同步原理

了解同步原理有助于您理解资源使用情况。OCI 模式的数据获取流程如下：

1. **创建一致性快照**：系统首先对源端主机的所有磁盘创建一个卷组备份 (Volume Group Backup)，确保数据在时间点上的一致性。

2. **资源还原&#x20;**：系统利用该备份，在同步代理所在的可用区临时克隆出一套临时卷。

3) **挂载读取**：系统将这些临时卷以 iSCSI 方式挂载到同步代理上。

4) **差异计算与传输**：增量同步时，同步代理通过底层扫描技术，识别有效数据块（排除空块），仅将有效数据传输到目标端。

5. **清理释放**：数据传输完成后，系统会自动卸载并删除临时卷。

## 6. 资源成本规划

| 计费项          | 说明                               | 费用预估                                |
| ------------ | -------------------------------- | ----------------------------------- |
| **1. 卷组备份**  | **主要成本**。同步任务创建的快照会作为增量备份的基准点保留。 | OCI 按快照实际占用的存储空间计费（通常低于原盘价格）。       |
| **2. 临时中转卷** | **微量成本**。仅在数据传输期间（例如 1-2 小时）存在。  | 即使是 1TB 的临时卷，存在 1 小时的费用也非常低（几乎可忽略）。 |
| **3. 计算实例**  | 同步代理服务器本身的运行费用。                  | 根据您选择的实例规格计费。                       |
| **4. 流量费**   | 如果将数据导出到 OCI 以外，会产生公网出站流量费。      |                                     |
