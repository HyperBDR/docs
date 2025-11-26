# Oracle Cloud Agentless Mode

## 1. Introduction and Compatibility

This feature uses the Agentless mode to achieve data backup and migration of cloud hosts (instances) through the native API interface of Oracle Cloud Infrastructure (OCI). This mode does not require installing any plugins on the source host, reads data through cheating software snapshots, and has minimal impact on production operations.&#x20;

### 1.1 Supported Platform Information

| Project                      | Instructions                                                                                                                                                                                                           |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Cloud Computing Platform** | Oracle Cloud Infrastructure (OCI) Standard Public Cloud                                                                                                                                                                |
| **Authentication Method**    | API Key 认证 (需要 User OCID, Tenancy OCID, Private Key, Fingerprint)                                                                                                                                                      |
| **Supported Region**         | All OCI global regions that support Block Volume and Compute services                                                                                                                                                  |
| **Storage Type**             | Supports&#x20;**&#x20;Boot Volume&#x20;**&#x20;(Boot Volume) and&#x20;**&#x20;Block Volume&#x20;**&#x20;(Data Volume)&#x20;*&#x20;Note: Direct backup of File Storage (NFS) and Object Storage is not supported&#x20;* |

## 2. Operating System Support

### 2.1 Source Host&#x20;

* Click[Cloud Computing Platform Support Matrix](https://oneprocloud.feishu.cn/sheets/VRqksSPEPhRTPStp3kVcItXNnyh?sheet=Y9fpqO)to view the compatibility list and the latest support status.

### 2.2  Sync Proxy Gateway (Sync Proxy)

The synchronization proxy is a transit server responsible for executing data reading and transmission, and must be deployed within the OCI Cloud Computing Platform.&#x20;

* **Operating System Requirements**: Must use the Linux system Ubuntu 20.04+.

* **Deployment Location**: Must be located in the same Available Zone as the source host.

## 3. Pre-deployment Requirements

Before starting the task, please ensure that your OCI environment meets the following network and permission configurations.

### 3.1 Network Requirements

Sync Proxy needs to communicate via both the management network and the data network:

1. **API Access Permission**:&#x20;

   * The synchronization agent needs to access OCI's public API endpoints (such as Identity, Compute, BlockStorage).&#x20;

2. **Storage Data Communication**:&#x20;

   * The synchronization agent needs to connect to the backend storage device of OCI through&#x20;**&#x20;the iSCSI protocol&#x20;**.&#x20;

   * **Security Group Rules**: Ensure that the Security List or NSG of the subnet where the synchronization agent is located allows outbound access to TCP port 3260 (the default iSCSI port).

### 3.2 Account Permission Requirements (IAM Policy)

You need to provide a user with OCI API operation permissions. Since the backup process involves creating snapshots and temporary volumes, this user requires specific permissions at the tenant level (Tenancy).

**Important Note**: According to the current system logic, this user must have the permission to create temporary resources in the Root Compartment.



It is recommended to configure the following Policy in the OCI Console (replace `GroupName` with the actual user group name):

```plain&#x20;text
Allow group GroupName to manage volume-family in tenancy
Allow group GroupName to manage instance-family in tenancy
Allow group GroupName to use virtual-network-family in tenancy
Allow group GroupName to inspect compartments in tenancy
Allow group GroupName to inspect users in tenancy
```
[Click to view the configuration method](../../userguide/poc/oracle-pre-settings.md)

## 4. Usage Restrictions and Precautions

When using OCI Agentless Mode, please be aware of the following limitations to avoid task failure:&#x20;

### 4.1 Regional and Available Zone Restrictions

* **Same Available Zone Principle**: OCI's Block Storage is a regional resource. The synchronization agent must be deployed within the same Availability Domain (AD) as the source host. If the source hosts are distributed across AD-1 and AD-2, you need to deploy synchronization agents in each of the two ADs respectively.

* **Cross-AD direct synchronization is not supported**: You cannot directly use the agent of AD-1 to back up the host of AD-2, as this will cause the volume to fail to mount.

### 4.2 Resource Quota Limit

* **Concurrency Quantity**: OCI restricts a single cloud host to a maximum of **32&#x20;**&#x64;isks. After deducting the system disk, a single synchronization agent can handle up to 31 disk tasks simultaneously.

### 4.3 Task Operation Restrictions

* **Temporary Resources&#x20;**: During the synchronization process, you will see volume group backups and temporary disks named `  Sync_Proxy -...  ` in the OCI Console. Do not manually delete these resources; the system will automatically clean them up after the task is completed.&#x20;

## 5.  Data Synchronization Principle

Understanding the synchronization principle helps you understand resource usage. The data acquisition process in OCI mode is as follows:&#x20;

1. **Create a consistent snapshot**: The system first creates a Volume Group Backup for all disks of the source host to ensure data consistency at a specific point in time.

2. **Resource Restoration**: The system uses this backup to temporarily clone a set of temporary volumes in the Available Zone where the synchronization agent is located.

3) **Mount and Read**: The system mounts these temporary volumes to the synchronization agent in iSCSI mode.

4) **Difference Calculation and Transmission&#x20;**: During incremental synchronization, the synchronization agent identifies valid data blocks (excluding empty blocks) through underlying scanning technology and only transfers valid data to the target end.&#x20;

5. **Cleanup and Release**: After data transfer is completed, the system will automatically unmount and delete the temporary volume.

## 6. Resource Cost Planning

| Billing Item                     | Instructions                                                                                                    | Cost Estimate                                                                                                             |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **1. Volume Group Backup**       | **Main cost**. Snapshots created by synchronous tasks will be retained as the baseline for incremental backups. | OCI bills based on the actual storage space occupied by the snapshot (usually lower than the price of the original disk). |
| **2. Temporary Transfer Volume** | **Minimal cost**. Only exists during data transfer (e.g., 1-2 hours).                                           | Even a 1TB temporary volume, when existing for 1 hour, incurs very low (almost negligible) costs.                         |
| **3. Calculation Example**       | Synchronize the operating costs of the proxy server itself.                                                     | Charges are based on the instance specification you selected.                                                             |
| **4. Traffic fee**               | Exporting data outside of OCI will incur public network outbound traffic fees.                                  |                                                                                                                           |
