# VMware Agentless

## Supported vCenter/ESXi/Storage Versions

| Component      | Supported Versions                         |
| -------------- | ------------------------------------------ |
| vCenter Server | 5.1, 5.5, 6.0, 6.5, 6.7, 7.0, 8.0(RC)      |
| ESXi           | 5.0, 5.1, 5.5, 6.0, 6.5, 6.7, 7.0, 8.0(RC) |
| VMFS           | 5.1, 5.2, 5.5, 5.8, 6.0, 6.5               |
| VSAN           | 6.5, 6.6, 7.0                              |

## Supported Guest Operating Systems

See the [Agentless Support Matrix](./product-support-overview.md) for the full compatibility list and latest support status.

## Basic Requirements

- **Sync Proxy Node:** Ubuntu 24.04, at least 4 CPU cores and 8GB RAM
- **Network Requirements:**
  - Access to vCenter management network address and port
  - Access to port 902 of ESXi managed under the vCenter
  - Access to the management network address of HyperMotion/HyperBDR Console

## Support and Limitations

### VMware Storage Support and Limitations

| Condition                    | Supported Versions / Types / Requirements                            | Not Supported / Limitations                                                                               |
| ---------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| VM Hardware Version          | 5, 5.1, 5.5, 6.0, 6.5, 6.7, 7.0, 8.0(RC)                             | Version 4: Only full data synchronization supported                                                       |
| Single Disk Capacity         | ≤2TB for ESXi 5.0/5.1<br>>2TB supported for ESXi 5.5+                | ESXi 5.0/5.1: Disks >2TB not supported                                                                    |
| Virtual Disk Type            | Basic disks (VMDK, not independent mode)                             | Independent-mode disks must be converted to basic disks                                                   |
| Remote RDM Disks             | Not supported                                                        | Direct LUN access in SAN not supported                                                                    |
| USB/PCI Peripherals          | Not supported                                                        | VMs with USB/PCI devices cannot be snapshotted                                                            |
| Shared Disks                 | Supported after changing to non-shared mode (iscsi1:0.sharing=FALSE) | Shared mode not supported; must be set to non-shared                                                      |
| Mounted Partition Free Space | >100MB required per mounted partition (e.g., /var, /boot, C:)        | Insufficient space may cause drill or takeover failure                                                    |
| VMFS Version                 | 5.1, 5.2, 5.5, 5.8, 6.0, 6.5                                         | Other VMFS versions not tested/supported                                                                  |
| VSAN Version                 | 6.5, 6.6, 7.0                                                        | Other VSAN versions not tested/supported                                                                  |
| CBT (Changed Block Tracking) | Supported for VMDK on VMFS/NFS, VM hardware v7+, powered-on VMs      | Not supported for physical RDM, independent disks, encrypted VMs, powered-off/suspended VMs, some storage |
| Number of Snapshots          | ≤ VMware recommended (e.g., 32/64)                                   | Too many snapshots may cause performance issues or backup failures                                        |
| Storage Space for Snapshots  | Sufficient free space required                                       | Insufficient space may cause snapshot/backup failure                                                      |
| Encrypted VMs                | Partially supported (depends on vSphere version and API permissions) | Some backup/restore operations may be restricted                                                          |
| VM Disk Location             | All disks on supported storage (VMFS/NFS)                            | Disks on unsupported storage or distributed across unsupported datastores                                 |

### Guest OS Support and Limitations

- See [Agentless Support Matrix](./product-support-overview.md) for detailed supported OS versions.
- Virtual machines using remote RDM disks (direct LUN access in SAN) are not supported.
- Network-shared mounted directories (e.g., NFS/NAS accessed from within the VM) are not supported for synchronization. Use a file synchronization tool for such data.
- Virtual machines with USB or PCI peripherals will fail to snapshot (e.g., encrypted dongle devices, etc.).
- Virtual machines configured with shared disks must change the shared disk to non-shared mode (set iscsi1:0.sharing to FALSE).
- Mounted partitions must have more than 100MB of available space (e.g., Linux: /var, /boot, or other partitions; Windows: C:).
- Powered-off or suspended VMs cannot be backed up incrementally (CBT requires powered-on state).
- VMs in a crashed or inconsistent state cannot be reliably backed up.
- Application consistency is not guaranteed for all guest OS types; for application-aware backup, ensure VMware Tools is installed and consider using scripts or quiescence options.
- CBT data may become invalid after certain operations (e.g., VM migration, disk expansion, snapshot restore); a new full backup will be required in such cases.
- Backup operations are not recommended during Storage vMotion or hot-add operations, as this may cause data inconsistency.

## Performance and Configuration Recommendations

- The maximum number of synchronized hosts per Sync Proxy is 100.
- Sync Proxy rate configuration depends on the number of concurrent synchronized hosts:
  - (Default) For higher rates, set `vmware_release_cpu_time = 0` to improve synchronization efficiency.
  - For many concurrent hosts, set `vmware_release_cpu_time = number of concurrent hosts`.

## Common Issues and Notices

- If the source Windows host uses UEFI boot mode and the target platform does not support native UEFI boot, a public network is required to participate in UEFI repair via a transition host.
- During backup or snapshot operations, avoid performing Storage vMotion, VM migration, disk expansion, or reconfiguration, as these may cause backup failure or data inconsistency.
- Suspended or crashed VMs cannot be reliably backed up. Always ensure the VM is powered on and in a healthy state before backup.
- CBT will be reset after certain operations, such as disk expansion, snapshot restore, or VM migration. After CBT is reset, a new full backup is required to re-establish the incremental chain.
- If the snapshot chain is broken or deleted outside of the backup software, incremental backups may fail and require a new full backup.
- For application-aware backups (e.g., databases, Active Directory), ensure VMware Tools is installed and consider enabling quiescence or using pre/post-backup scripts for application consistency.
- File system consistency is only guaranteed if VMware Tools is installed and quiescence is enabled. Otherwise, only crash-consistent backups are possible.
- Sufficient network bandwidth and low latency are required between the Sync Proxy and vCenter/ESXi hosts to ensure stable and efficient backup operations.
- Excessive concurrent backup jobs may impact vCenter/ESXi performance. Follow VMware and backup software recommendations for maximum concurrent jobs.
- The backup account must have sufficient vCenter/ESXi API permissions (e.g., Datastore.Browse, VirtualMachine.Snapshot, VirtualMachine.Backup, etc.) to perform backup and restore operations via VMware APIs.
- Ensure the VDDK version used by the backup solution is compatible with the vSphere/ESXi version in your environment.
- Backing up VMs with disks distributed across multiple datastores may have additional requirements or limitations, especially for restore operations.
- Some storage-level encryption or encrypted snapshots may not be supported for backup or restore.
- Major VM hardware changes (e.g., changing SCSI controller type) may require a new full backup.
- When DRS (Distributed Resource Scheduler) is enabled in the cluster, if a virtual machine is migrated via vMotion during backup or synchronization, data read failures or sync interruptions may occur. It is recommended to disable automatic DRS migrations or set the relevant VMs to 'manual' migration mode during backup/synchronization to reduce risk.
- If multiple third-party backup solutions (such as Veeam, Commvault, etc.) perform CBT-based backups on the same VM concurrently within the cluster, CBT state conflicts, snapshot operation failures, or backup failures may occur. It is recommended to ensure that only one backup solution performs CBT-based backup on the same VM at any given time to avoid conflicts.
