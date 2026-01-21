# Support Overview

HyperMotion & HyperBDR supports various production sources and recovery targets in different recovery scenarios.

The support conditions for HyperMotion and HyperBDR can be analyzed from two aspects:

## Production Host Support

First, whether the production host is supported, divided into agent mode and agentless mode.

- [Agent Operation System Support](https://oneprocloud.feishu.cn/sheets/VRqksSPEPhRTPStp3kVcItXNnyh?sheet=Y9fpqO)
- [Agentless Operation System Support](https://oneprocloud.feishu.cn/sheets/VRqksSPEPhRTPStp3kVcItXNnyh?sheet=0MJNYC)

## Agentless Support for Production Platforms

| Platform Type | Platform Name | Version / Dependency | Remarks |
|---------------|---------------|----------------------|----------|
| Public Cloud | AWS | — | Amazon Web Services |
|  | Huawei Cloud | [Click to view](./huawei-cloud-agentless.md) | Requires cloud region open API capabilities |
|  | Oracle Cloud | [Click to view](./oracle-cloud-agentless.md) | Oracle public cloud platform |
| Private Cloud | OpenStack + Ceph | [Click to view](./openstack-ceph-agentless.md) | OpenStack compute with Ceph storage architecture |
|  | HCS + Dorado | [Click to view](./huawei-hcs-agentless.md) | Huawei hybrid cloud and storage solution |
|  | HCS Online | — | Huawei hybrid cloud online platform for private deployment |
| Virtualization Platform | VMware | [Click to view](./vmware-agentless.md) | Supports mainstream VMware environments |
|  | FusionCompute | [Click to view](./huawei-fusioncompute-agentless.md) | Huawei virtualization platform |


## Cloud Platform Support

Second, whether the target cloud platform supports automation. If the cloud platform is not on the supported list or its API interface is upgraded and cannot be directly supported, a generic migration method can still be used. However, note that the generic method cannot meet disaster recovery requirements.

- [Public Cloud Boot in Cloud Features](https://oneprocloud.feishu.cn/sheets/S7LisoSWdhm2G4t0rdycwxEunEd?sheet=o9tX6a)
- [Private Cloud Boot in Cloud Features](https://oneprocloud.feishu.cn/sheets/S7LisoSWdhm2G4t0rdycwxEunEd?sheet=g5grTH)

## Data Sync Features

Additionally, the specific data sync features can be referenced in the documentation.

- [Source Features](https://oneprocloud.feishu.cn/sheets/S7LisoSWdhm2G4t0rdycwxEunEd?sheet=M57AtF)
