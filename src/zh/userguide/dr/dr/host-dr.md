# **主机容灾**

资源容灾为HyperBDR容灾的主要流程操作步骤引导页面，所有的容灾操作在此页面完成，包含了正向的主机容灾、主机回切两部分的流程操作。

主机容灾包含选择主机、容灾配置、开始容灾三个主流程步骤，您可以通过三步骤引导来完成所有容灾的主机到容灾演练/接管的闭环操作。

点击顶部"资源容灾"导航栏，点击左侧"主机容灾"导航栏，可以进行主机容灾的主流程操作。

## **操作流程**

| **操作步骤**   | **说明**                                                                   |
| ---------- | ------------------------------------------------------------------------ |
| 准备工作       | 注册 HyperBDR 用户并添加 HyperBDR 产品授权                                               |
|  步骤一 选择主机  | 点击顶部 **"资源容灾"** 导航栏，点击左侧 **"主机容灾"** ，点击 **"选择主机"** 菜单开始进行 **选择主机** 的步骤操作 |
|  步骤二 容灾配置  | 点击顶部 **"资源容灾"** 导航栏，点击左侧 **"主机容灾"** ，点击 **"容灾配置"** 菜单开始进行 **容灾配置** 的步骤操作 |
|  步骤三 开始容灾  | 点击顶部 **"资源容灾"** 导航栏，点击左侧 **"主机容灾"** ，点击 **"开始容灾"** 菜单开始进行 **开始容灾** 的步骤操作 |

## **准备工作**

### **注册HyperBDR用户**

在开始添加容灾主机前，请确保您已在平台中创建了至少一个容灾账号。平台采用多租户架构，支持为不同团队或项目独立配置账号及权限，以便更灵活地进行资源管理与隔离。

[点击查看如何创建一个新的容灾账户](../register/register.md)

如果您已经有账号，请忽略此步骤。

### **为HyperBDR产品添加容灾授权**

在开始使用容灾服务之前，您需要先申请产品授权。请联系您的项目经理，或发送邮件至 support@oneprocloud.com 以获取可用授权。

[点击查看授权License申请指导步骤](../../saas-license/hyperbdr)

如果您已经添加过授权，请忽略此步骤。

### **完成生产站点配置**

此步骤适用于源端采用无代理模式的场景。请根据源端生产平台类型，参考列表中的对应站点配置说明完成配置。

如果源端采用代理模式，或已完成生产站点配置，可忽略此步骤。

| 生产平台 | 配置指导 |
| --- | --- |
| VMware | [点击查看](../configuration/production-site.md#添加vmware平台) |
| OpenStack | [点击查看](../configuration/production-site.md#添加openstack平台) |
| AWS | [点击查看](../configuration/production-site.md#添加aws平台) |
| FusionCompute | [点击查看](../configuration/production-site.md#添加fusioncompute平台) |
| Oracle | [点击查看](../configuration/production-site.md#添加oracle平台) |
| HCS 8.0.2 | [点击查看](../configuration/production-site.md#添加hcs-8-0-2平台) |
| HCS Online | 配置说明待补充 |
| 华为云 | [点击查看](../configuration/production-site.md#添加华为云平台) |

### **完成容灾目标配置**

此步骤适用于已完成自动化对接的容灾目标平台。请根据实际使用的存储类型，完成对应的容灾目标配置后，再继续后续操作。

| 存储类型 |配置说明| 配置指导 |
| --- | --- | --- |
| 块存储 |块存储配置| [点击查看](../configuration/dr-site-configuration.html#块存储模式) |
| 对象存储 |对象存储配置| [点击查看](../configuration/dr-site-configuration.html#对象存储模式) |
| 对象存储 |对象存储容灾目标平台配置| [点击查看](../configuration/dr-site-configuration.html#对象存储模式) |

如果尚未完成上述配置，请先完成对应准备工作，再继续后续步骤。

### **网络策略开通**

当您在进行**选择主机、容灾配置及开始容灾**步骤时，需要提前开通源端生产平台访问HyperBDR容灾控制台及容灾目标的网络，才能保证源端生产平台的正常添加注册以及后续的数据同步，不然无法进行主机的添加。

| **存储类型** | **Agent** | **Agentless** |
| ------------ | --------- | ------------- |
| 对象存储     | [查看详情](../../../product-overview/presales/dr-network-planning-recommendations.md#代理) | [查看详情](../../../product-overview/presales/dr-network-planning-recommendations.md#开放端口列表) |
| 块存储       | [查看详情](../../../product-overview/presales/dr-network-planning-recommendations.md#代理-1) | [查看详情](../../../product-overview/presales/dr-network-planning-recommendations.md#无代理) |

### **规划容灾目标平台的VPC和子网等网络资源**

当您在进行**容灾配置**时，需要提前为待容灾的备份主机指定目标资源，此时需要选择已经规划好的 VPC、子网、安全组等信息，如果没有提前创建规划此部分信息，那么将无法进行后续步骤操作。

您必须保证容灾目标云账号下至少有一个可用的 VPC、子网和安全组。

此步骤适用于容灾目标为自动化块存储模式及对象存储自动化恢复模式，其他通用方式请忽略此步骤。

<!-- @include: ./_host-dr/select-host.md -->
<!-- @include: ./_host-dr/setup-dr.md#setup-dr-intro -->
<!-- @include: ./_host-dr/setup-dr-block-storage.md -->
<!-- @include: ./_host-dr/setup-dr-object-storage.md -->
<!-- @include: ./_host-dr/setup-dr.md#setup-dr-shared -->
<!-- @include: ./_host-dr/start-dr.md -->
