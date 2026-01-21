# 兼容性概述

HyperMotion & HyperBDR 支持在不同的恢复场景中使用各种生产源和恢复目标。

HyperMotion 和 HyperBDR 的支持条件可以从两个方面进行分析：

## 生产主机支持

首先，生产主机是否支持，分为代理模式和无代理模式。

- [Agent Operation System Support](https://oneprocloud.feishu.cn/sheets/VRqksSPEPhRTPStp3kVcItXNnyh?sheet=Y9fpqO)
- [Agentless Operation System Support](https://oneprocloud.feishu.cn/sheets/VRqksSPEPhRTPStp3kVcItXNnyh?sheet=0MJNYC)

## 生产平台无代理支持

| 平台类型 | 平台名称 | 版本/依赖说明 | 备注 |
|----------|----------|----------------|--------|
| 公有云 | AWS | — | Amazon Web Services |
|  | 华为公有云 | [点击查看](./huawei-cloud-agentless.md) | 需云区域开放相关 API 接口 |
|  | Oracle Cloud | [点击查看](./oracle-cloud-agentless.md) | Oracle 公有云平台 |
| 私有云 | OpenStack + Ceph | [点击查看](./openstack-ceph-agentless.md) | OpenStack 计算 + Ceph 存储架构 |
|  | HCS + Dorado | [点击查看](./huawei-hcs-agentless.md) | 华为混合云与存储组合 |
|  | HCS Online | — | 华为混合云在线平台，本地私有部署 |
| 虚拟化平台 | VMware | [点击查看](./vmware-agentless.md) | 支持主流 VMware 虚拟化环境 |
|  | FusionCompute | [点击查看](./huawei-fusioncompute-agentless.md) | 华为虚拟化平台 |



## 云平台支持

其次，目标云平台是否支持自动化。如果云平台不在支持列表中或其 API 接口已升级且无法直接支持，仍可以使用通用迁移方法。然而，请注意，通用方法无法满足灾难恢复的要求。

- [公有云自动化支持功能](https://oneprocloud.feishu.cn/sheets/S7LisoSWdhm2G4t0rdycwxEunEd?sheet=1OatFu)
- [私有云自动化支持功能](https://oneprocloud.feishu.cn/sheets/S7LisoSWdhm2G4t0rdycwxEunEd?sheet=2fOzMl)

## 数据同步功能

此外，具体的数据同步功能可以参考文档。

- [源端同步功能](https://oneprocloud.feishu.cn/sheets/S7LisoSWdhm2G4t0rdycwxEunEd?sheet=0hEfBi)
