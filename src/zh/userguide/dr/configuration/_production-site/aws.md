### **AWS**

AWS 页面用于配置和管理 AWS 无代理（Agentless）生产平台，包括 IAM 凭证配置、区域选择、同步代理绑定及无代理连接状态监控。

#### **添加 AWS 平台**

在控制台左侧导航栏点击 **“生产站点配置”** > **“AWS”**，点击 **“添加”** 按钮，根据向导完成平台接入。

![config-productionsite-dr-aws](../images/config-productionsite-dr-aws.png)

##### **部署同步代理**

在待保护的 AWS Region 内启动一台 EC2 实例部署源端同步代理（Sync Proxy）：

1. **创建 EC2 实例**：
   * 在 AWS EC2 控制台使用官方原生的 **Ubuntu 24.04 LTS** 镜像启动一台实例（推荐机型如 `t3.xlarge` / `c6i.xlarge` 或满足 **4C / 8G / 50GB** 规格）。
2. **配置网络与安全组**：
   * 确保该实例能够访问 HyperBDR 控制台（端口 10443、30080），并具备访问 AWS 服务端点（443 端口）的权限。
3. **一键安装注册**：
   * 登录该 EC2 实例，在终端粘贴向导界面提供的安装指令并执行。执行完成后该实例将自动作为 Sync Proxy 注册到平台。

> **说明：** 详细规格与网络规划请参见 [源端同步代理](#源端同步代理)。

![config-productionsite-dr-aws-add](../images/config-productionsite-dr-aws-add.png)

##### **创建 AWS 生产平台**

1. **AWS 认证信息配置**

| **参数项** | **示例 / 格式** | **参数说明** |
| :--- | :--- | :--- |
| **Access Key ID** | `AKIAIOSFODNN7EXAMPLE` | 具备必要权限的 AWS IAM 用户访问密钥 ID。 |
| **Secret Access Key** | `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY` | 与 Access Key ID 配对的访问密钥密码。 |
| **区域 (Region)** | `ap-southeast-1` | 待容灾 EC2 机器所在的 AWS 区域（下拉选择或手动输入）。 |
| **源端同步代理** | 下拉选择已注册节点 | 从下拉列表中选择刚部署的源端同步代理 EC2 实例。 |
| **平台名称** | 自定义名称（可选） | 生产平台标识名称，支持自定义或使用系统自动生成规则。 |

2. **网络策略与端点要求**

| **源端** | **目标端** | **端口 / 协议** | **用途说明** |
| :--- | :--- | :--- | :--- |
| Sync Proxy | AWS EC2 / EBS 服务端点 | 443 / TCP (HTTPS) | 与 AWS 控制面交互并通过 EBS Direct APIs 读取快照块数据。<br>+ **公网访问**：需为 Sync Proxy 绑定 EIP，且安全组允许 443 出站；<br>+ **内网专线 / VPC**：可在 VPC 内配置 EC2 和 EBS 的 VPC Endpoint（私网端点），无需公网即可内网高效传输。 |

3. **IAM 权限策略要求**

调用 AWS EBS Direct APIs 进行无代理底层快照差分备份时，需为所用 IAM 账号赋予 EC2、EBS 快照读写及相关资源的最小权限。详细 IAM Policy 配置请参见 [AWS IAM 准备指南](https://docs.oneprocloud.com/userguide/poc/aws-pre-settings.html#aws-iam-preparation)。

确认各项配置无误后，点击 **“确定”** 提交。

![config-productionsite-dr-aws-add-next](../images/config-productionsite-dr-aws-add-next.png)

##### **完成 AWS 添加**

添加完成后返回 AWS 生产平台列表。等待平台状态变为 **“正常”**，并成功识别到目标 Region 内纳入纳管的 EC2 实例总数，即表示接入成功。

> **说明：**
> * 若需保护多个不同 AWS Region 或不同 AWS 账号下的资产，可重复上述步骤独立添加。

![config-productionsite-dr-aws](../images/config-productionsite-dr-aws.png)
#### **更多操作**

在 AWS 生产平台列表中，点击目标平台操作栏的 **“更多操作”** 下拉菜单，可执行 **设置**、**绑定**、**解绑**、**重载虚拟机**、**更新链接** 与 **删除** 操作。详细操作步骤请参见 [生产站点管理](#生产站点管理)。

---
