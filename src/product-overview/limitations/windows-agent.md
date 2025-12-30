# Windows Agent

## Important Notice

### Windows Agent and Backup Software Compatibility

Windows Agent captures I/O changes using Windows VSS (Volume Shadow Copy Service) and disk filter drivers. However, due to the limitations of Windows VSS, if two software applications call the VSS service at overlapping times, VSS snapshots may fail, making it impossible to meet the planned RPO requirements. Therefore, Windows Agent cannot run simultaneously with other backup software that uses the same mechanism (such as Acronis, Veeam, Veritas, Commvault, etc.).

If similar backup software is already installed on the system, it is recommended to pause or uninstall it before installing Windows Agent to avoid conflicts. In addition, users may consider consulting their current platform provider to confirm whether agentless data backup is supported, which can avoid conflicts between different backup software and ensure normal system backup and recovery.

## Supported Operating Systems

| Operating System         | Supported Versions                |
|--------------------------|-----------------------------------|
| Windows 7 Ultimate       | 64-bit                           |
| Windows 8 Professional   | 64-bit                           |
| Windows 10 Enterprise    | 64-bit                           |
| Windows 11 Enterprise    | 64-bit                           |
| Windows Server 2003      | SP2/R2 (64-bit)                  |
| Windows Server 2008      | 2008, 2008 R2 (64-bit)           |
| Windows Server 2012      | 2012, 2012 R2 (64-bit)           |
| Windows Server 2016      | 2016 (64-bit)                    |
| Windows Server 2019      | 2019 (64-bit)                    |
| Windows Server 2022      | 2022 (64-bit)                    |
| Windows Server 2025      | 2025 (64-bit)                    |

::: warning
Click [Cloud Platform Support Matrix](https://oneprocloud.feishu.cn/sheets/VRqksSPEPhRTPStp3kVcItXNnyh?sheet=Y9fpqO) to view the compatibility list and latest support status.
:::

## Support and Limitations

### Basic Requirements
   - **CPU:** x86-64 processor
      - **CPU Usage Control:** You can configure this through the console source synchronization settings. By default, the CPU usage limit is set to 30%.
      - **Increase Sync Speed:** If your network bandwidth is sufficient, increasing the CPU usage limit can improve synchronization speed in object storage mode.
      - Note: Increasing the CPU usage limit may cause the system to slow down or become unstable if the computer has low performance or is running other CPU-intensive tasks at the same time. Therefore, please evaluate system performance and resource utilization before increasing the CPU usage limit.
   - **Memory Requirements:**
      - To ensure the normal operation of the DiskSyncAgent service, it is recommended to have at least 1GB of available memory.
      - The DiskSyncAgent service typically uses 220-350MB of memory. Insufficient memory may cause the service to run slowly or crash.
   - **Agent Software Space:** To ensure proper installation and operation of the software, it is recommended to reserve at least 200MB of free space.
   - **Network Connection:** To ensure stable and fast connection to the target endpoint, it is recommended to use a network connection of at least 10Mbps.
   - **System Firmware:** BIOS or UEFI firmware is required to ensure compatibility with the software.
      - **Virtualization Support:** DiskSyncAgent supports full virtualization, but has limited support for paravirtualization (such as XenServer), which may require manual repair during the final boot.

### Disk Space Recommendations

Windows Agent uses Windows VSS to create consistent snapshots without interrupting system operations, ensuring data integrity and supporting fast recovery, thereby improving synchronization efficiency and business continuity. Therefore, the following disk space requirements must be met during synchronization.

   - **Recommended Free Space for VSS Snapshots:** It is recommended that volumes used for VSS snapshots retain at least 10% free space. If the volume data is frequently updated, it is recommended to increase the proportion of reserved free space to avoid synchronization failures due to insufficient space.

   - **Minimum Space Requirement for VSS Pre-check**: During the VSS pre-check, the Windows Agent requires each volume to reserve at least **320 MB** of space for VSS. If the volume is a system reserved partition (such as EFI or recovery partition), it is recommended to remove the drive letter of that partition before starting synchronization to avoid VSS check failures.

      - Reference: [Microsoft Documentation - Registry Keys for Backup and Restore](https://learn.microsoft.com/en-us/windows/win32/backup/registry-keys-for-backup-and-restore?utm_source=chatgpt.com)

   - **Impact of High Disk I/O on VSS Snapshots:** During host synchronization, excessive disk I/O may prevent VSS snapshot data from being properly maintained. The Windows system prioritizes access to business data and may discard incremental data from VSS snapshots, resulting in synchronization failure. This problem usually occurs during data backup, large database transactions, table index updates, full disk searches, or excessive temporary table operations.

   - **Recommended Measures to Address Synchronization Failures Caused by High Disk I/O:**

     1. **Reduce Disk I/O:** Adjust business operations, such as pausing backup tasks during synchronization, or optimizing SQL queries to reduce disk I/O.
     2. **Specify Non-Synchronized Disks:** You can designate a disk as a non-synchronized disk, or add a new disk and allocate a volume dedicated to VSS snapshot data. Then, configure the `VSS_SPEC_MAX_?` setting to direct VSS storage to the dedicated volume, which helps mitigate the impact of high I/O, but may not completely solve the problem.

### Support and Limitation Conditions

| Condition | Supported | Not Supported |
|-----------|-----------|---------------|
| User Permissions | Supported: Administrator users, or domain users with local administrator privileges | Not supported: Non-administrator users |
| File System Types | Supported: NTFS, ReFS | Not supported: Other file systems, such as FAT16, FAT32, etc. |
| Partition Types | Supported: Primary/Extended partitions, MBR/GPT, Basic disks, Dynamic disks (Simple and Spanned volumes) | Not supported: Dynamic disks (Mirrored volumes, RAID volumes), Dynamic disks as boot partitions |
| VSS Snapshots | Supported: Volume retains ≥10% free space, VSS service normal, NTFS supports VSS sync | Not supported: Insufficient space, VSS service abnormal, Non-NTFS file system VSS sync |
| Number of Disks | Supported: ≤32 disks | Not supported: More than 32 disks |
| Offline Disk Sync | Not applicable | Not supported: All offline disk sync |
| Shared Disks | Supported: Only one host syncs shared disks, other hosts can be excluded | Not supported: Multiple hosts syncing the same shared disk simultaneously |
| Virtualization | Supported: Full virtualization | Not supported: Paravirtualization (such as XenServer, may require manual repair) |
| iSCSI Disks | Supported | Not applicable |
| Language Support | Chinese, English, Spanish (Español) | This product supports Code Page 437 (English and some Western European languages) and Code Page 936 (Simplified Chinese and common symbols). Currently, only Spanish is specially adapted. Other languages (such as French, German, Russian, Japanese, Korean, etc.) are not supported. |
| Time Sync Service | Required | Not applicable |

### Disk Volume Requirements
   - The number of supported disks cannot exceed 32.
   - Offline synchronization of source disks is not supported. All disks must remain online before synchronization. You can configure disks that do not need to be synchronized through the source configuration file.
   - Disks that do not need to be synchronized (except boot disks) can be excluded through configuration. Refer to the `EXCLUDE_DISKS` configuration item in the configuration file. Excluded disks can be offline. Note: Modifying the `EXCLUDE_DISKS` configuration item must be completed before the first service startup (node registration). After node registration is completed, this configuration item cannot be modified. If modification is needed, please clear the resource and re-register the node.
   - If there are shared disks mounted to multiple hosts on the source side, only one host's shared disk can be selected for synchronization during migration. Shared disks on other hosts can be excluded through the `EXCLUDE_DISK` configuration item.
   - The free space ratio of volumes should not be less than 3%. If system incremental data is large, additional space should be reserved for storing VSS snapshots. Insufficient space may cause snapshot abnormalities, leading to synchronization failures.
   - Simple volumes and partition volumes are supported for synchronization, but volumes with regions, mirrored volumes, or RAID volumes are not supported.
   - Windows dynamic disks cannot be used as system boot partitions.

### File System and Volume Snapshot Requirements
   - NTFS file system supports VSS sync mode, syncing only valid data.
   - Raw devices or other non-NTFS file systems do not support VSS mode and are synced based on actual disk capacity.
   - In VSS mode, the VSS service on the source host must run normally. You can use the `vssadmin` command-line tool provided by Windows to create and delete snapshots.
   - In cloud disk mode, the `MsiscsiService` service must run normally.
   - During the synchronization process on the source host, do not manually delete Windows VSS snapshots, as this will cause sync failures and require restarting full sync.

### Network Requirements
   - In cloud disk mode, the source host needs to be able to access ports 3260/13260 of the target endpoint. It is recommended to use S3Block as the transport protocol, as the original iSCSI protocol has been deprecated.
   - In cloud disk mode, if the source disk contains iSCSI disks, please operate carefully and do not change the original initiator name to avoid affecting the normal operation of the business system.
   - During cloud disk mode sync, the network bandwidth from the source host to the target host should be no less than 5Mbps to ensure the stability of the target disk. Ensure network stability, low latency, and low jitter.
   - Proxy mode is supported and can be set up through the interface during installation and startup phases with the correct proxy server and port.

### System Patch Requirements
   - To ensure normal operation of DiskSyncAgent service, patch KB4474419 must be installed on Windows 2008 32-bit, Windows 2008 64-bit, and Windows 2008 R2 64-bit systems. After installing the patch, please restart the system before starting DiskSyncAgent service. For patch installation methods, please refer to the appendix.

### Security Software Requirements
   - If security software is already installed on the host, it is recommended to completely disable the security software before synchronization (for some software, the exit function may not completely disable the software. If you are unsure whether the security software can be completely disabled, it is recommended to uninstall the related software first).
   - If security software cannot be completely disabled, please pay attention to the security software warning messages when installing and starting the Agent service. If a warning message window pops up, please be sure to set trust for all operations to avoid security software interception or warnings. Do not temporarily disable security software when installing and starting Windows Agent, as this may damage the Agent service. If this problem occurs, the host needs to be restarted to restore the service. For a list of security software that affects Agent data synchronization, please refer to Appendix 2.

## Common Issues

**Windows Agent Synchronization Failure Solutions (153315 / 154000 / 154001, etc.)**

When using Windows Agent, common error codes include 153315, 154000, 154001, etc. These errors are usually related to Windows VSS (Volume Shadow Copy Service) VolSnap events. The following is a detailed analysis of these issues:

1. **VSS Reserved Storage Space Depletion:** When VSS reserved storage space is rapidly depleted, it will cause automatic snapshot cleanup. This problem can appear through multiple event IDs, such as Event ID 23 (VS_DIFF_AREA_CREATE_FAILED_LOW_DISK_SPACE) and Event ID 36 (VS_ABORT_NO_DIFF_AREA_SPACE_USER_IMPOSED), and may also appear with other event IDs.

2. **Differential Data Write Failure:** When the system cannot handle differential data writes, snapshot cleanup will be triggered to ensure normal I/O operations continue. To prevent accidental deletion of snapshots due to high I/O or insufficient storage space, Microsoft recommends moving VSS snapshots to disks with more space, or using independent disks that do not participate in VSS snapshots. This helps ensure snapshot stability and business continuity. This problem is usually related to Event ID 25 (VS_ABORT_SNAPSHOTS_OUT_OF_DIFF_AREA), but may also occur with other event IDs.

::: tip
Starting from version v6.2.0, if VSS exceptions occur (for example, VSS snapshots are deleted due to high I/O load), Windows Agent will not be able to continue reading incremental data. In this case, full synchronization will be automatically executed on the next synchronization trigger to ensure data integrity.
:::

#### References

- [Microsoft documentation on Event ID 23](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/dd364930(v=ws.10)?redirectedfrom=MSDN)
- [Microsoft documentation on Event ID 36](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-r2-and-2008/dd364636(v=ws.10))
- [Microsoft forum on Event ID 25](https://learn.microsoft.com/en-us/archive/msdn-technet-forums/1886c270-fc4c-41b5-b25f-3a8d52a4a8a7)
- [Diff Area Integrity](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-r2-and-2008/dd364947(v=ws.10))
- For more VolSnap-related event IDs, please see:

| Event ID | Source  | Message |
|----------|---------|---------|
| 1  | VolSnap | Cannot create volume %2 shadow copy diff area file on volume %3. |
| 2  | VolSnap | Cannot create volume %2 shadow copy because volume %3 specified as part of the diff area is not an NTFS volume, or an error was encountered while trying to determine the file system type of that volume. |
| 3  | VolSnap | Cannot lock the location of volume %2 shadow copy diff area file on volume %3 to create volume %2 shadow copy. |
| 14 | VolSnap | Volume %2 shadow copy has been aborted due to IO failure on volume %3. |
| 16 | VolSnap | Volume %2 shadow copy has been aborted due to the volume %3 containing the shadow copy diff area file being forcibly dismounted. |
| 23 | VolSnap | Cannot create volume %2 shadow copy due to insufficient disk space on volume %3. Diff area file creation failed. |
| 24 | VolSnap | Cannot expand volume %2 shadow copy diff area due to insufficient disk space on volume %3. Therefore, all volume %2 shadow copies are at risk of being deleted. |
| 25 | VolSnap | Volume %2 shadow copy has been aborted due to the diff area file not growing in time. Please consider reducing the IO load on the system to avoid this problem from occurring again. |
| 33 | VolSnap | Deleted the oldest volume %2 shadow copy to keep shadow copy disk space usage below user-defined limits. |
| 35 | VolSnap | Volume %2 shadow copy has been aborted due to the diff area file not growing. |
| 36 | VolSnap | Volume %2 shadow copy has been aborted due to user-set limits preventing the diff area file from growing. |
| 38 | VolSnap | User-set limits prevented the use of disk space on volume %3 to expand volume %2 shadow copy diff area. Therefore, all volume %2 shadow copies are at risk of being deleted. |
| 40 | VolSnap | Volume %2 shadow copy has been aborted due to volume %3 being dismounted. |
| 41 | VolSnap | When preparing a new shadow copy for volume %2, the shadow copy storage on volume %3 did not have a large enough contiguous block. Please consider deleting unnecessary files on the shadow copy storage volume, or use a different shadow copy storage volume. |
