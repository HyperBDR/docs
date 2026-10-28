# **生产站点配置**

在 HyperBDR 容灾体系中，生产站点（Production Site）指代运行核心业务资产的源端环境。系统支持 **有代理（Agent）** 与 **无代理（Agentless）** 两种数据获取模式，以兼顾通用兼容性与极简免侵入部署：

* **有代理模式（Agent）**：在源端主机操作系统内部安装轻量级 Agent 代理程序。适用于各类复杂异构场景，包括 x86 物理服务器、各类独立私有云虚拟机（KVM、Xen、Hyper-V 等）及公有云主机。
* **无代理模式（Agentless）**：无需在业务主机内部安装任何程序，通过源端平台原生开放的底层 API 接口与快照机制直接读取磁盘块差分数据。目前支持：**VMware、OpenStack + Ceph、AWS EC2、FusionCompute、Oracle Cloud、HCS 8.0.2、HCS Online 及华为云**。

::: tip 操作系统兼容性支持矩阵
* [查看源端 Agentless 操作系统兼容性列表](https://oneprocloud.feishu.cn/sheets/VRqksSPEPhRTPStp3kVcItXNnyh?sheet=0MJNYC)
* [查看源端 Agent 操作系统兼容性列表](https://oneprocloud.feishu.cn/sheets/VRqksSPEPhRTPStp3kVcItXNnyh?sheet=Y9fpqO)
:::

## **容灾**

<!-- @include: ./_production-site/vmware.md -->
<!-- @include: ./_production-site/openstack.md -->
<!-- @include: ./_production-site/aws.md -->
<!-- @include: ./_production-site/fusioncompute.md -->
<!-- @include: ./_production-site/oracle.md -->
<!-- @include: ./_production-site/hcs.md -->
<!-- @include: ./_production-site/hcs-online.md -->
<!-- @include: ./_production-site/huawei-cloud.md -->
<!-- @include: ./_production-site/platform-operations.md -->
<!-- @include: ./_production-site/source-agent.md -->
<!-- @include: ./_production-site/sync-proxy.md -->

## **回切**

配置回切源端生产站点时，其整体配置逻辑与容灾生产站点接入流程完全一致。相关鉴权参数含义及操作方法可直接参考本篇 [**容灾生产站点配置**](#容灾) 对应平台章节。完成回切生产站点接入后，即可在控制台继续执行主机回切作业。

![config-productionsite-failback-vmware](./images/config-productionsite-failback-vmware.png)
