# Huawei Cloud Stack(HCS) Agentless Mode

## Compatibility

| Module                               | Version                  |
| ------------------------------------ | ------------------------ |
| Huawei Cloud Stack(HCS)              | 8.0.2                    |
| Huawei Cloud Stack(HCS) Storage Type | OceanStor Dorado 8000 V6 |

::: warning
Notes: Currently, Huawei Cloud Stack (HCS) 8.2.x / 8.3.x APIs differ significantly from Stack (HCS) 8.0.2, therefore HCS 8.2.x / 8.3.x are not supported at this time.

Other Dorado storage models have not been adapted yet.
:::

## Supported Guest OS

Click [Agentless Support Matrix](https://oneprocloud.feishu.cn/sheets/VRqksSPEPhRTPStp3kVcItXNnyh?sheet=0MJNYC) to view the compatibility list and the latest support status.

## Support and Limitations

### 1. Network Requirements

To ensure proper data synchronization:

- One or more virtual machines must be deployed in the production environment's HCS to communicate with the Dorado storage control network. These VMs must maintain stable and proper access to both the Dorado API interfaces and the APIG (API Gateway) standard interfaces.

### 2. API Interface Requirements

The following interface permissions are required:

- HCS Interface Permissions

| No. | Interface Description                         |
| --- | --------------------------------------------- |
| 1   | Authentication Interface                      |
| 2   | Query Cloud Server Details                    |
| 3   | Query Cloud Server Details List               |
| 4   | Query Elastic Cloud Server Disk Information   |
| 5   | Query Cloud Server Specification Details List |
| 6   | Query Cloud Disk Type List                    |
| 7   | Create Cloud Disk Snapshot                    |
| 8   | Get Cloud Disk Snapshot                       |
| 9   | Delete Cloud Disk Snapshot                    |
| 10  | Create Cloud Disk                             |
| 11  | Get Cloud Disk                                |
| 12  | Mount Cloud Disk                              |
| 13  | Unmount Cloud Disk                            |
| 14  | Delete Cloud Disk                             |

- Dorado Interface Permissions

| No. | Interface Description                                                   |
| --- | ----------------------------------------------------------------------- |
| 1   | Access Authentication                                                   |
| 2   | Query Bitmap Information of Non-shared Blocks between LUN and Snapshots |
| 3   | Activate Snapshot                                                       |

### 3. Limitations

#### Storage Type Limitations

- Only supports synchronization of host data from flash storage (Dorado), with current support for OceanStor Dorado 8000 V6. Synchronization of host data from distributed storage (Pacific) is not supported.

#### Maximum Snapshot Limitations

- Each disk in HCS supports a maximum of 128 snapshots. If the number of snapshots for a disk reaches this limit, new snapshots cannot be created, which will result in synchronization task failure.

#### Concurrency Limitations

- Each source-side synchronization agent (Sync Proxy) can synchronize up to 23 disks simultaneously. This limitation is due to the HCS platform's restriction of mounting a maximum of 24 VBD type disks per host.
- When the number of disks being synchronized exceeds 23, additional disk tasks will be placed in a waiting queue and will be scheduled for execution sequentially after current synchronization tasks complete.
- The maximum waiting time in the queue is 1 hour. If a task has not started execution after this timeout period, the corresponding synchronization task may fail.
