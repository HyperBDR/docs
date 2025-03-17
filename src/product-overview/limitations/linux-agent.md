# Linux Agent

## OS Support

Click [Agent Support Matrix](./product-support-overview.md) to view the compatibility list and get the latest support status.

## FileSystem & Partition Types

### FileSystem

* EXT2
* EXT3
* EXT4
* XFS
* FAT
* exFAT

### Partitions

* Primary/ Extended 
* Logical Volume Manager (LVM)
* MBR
* GPT

## Kernel Support

Due to the involvement of kernel modules during runtime, the installation and execution of the Linux Agent depend on the version of the kernel modules. Currently, the supported kernel range is from version 2.6.32 to 5.8, and these kernel versions are built from standard community versions.

### Limitations

* We currently do not support kernel versions with cloud tags. If there is a need for specific kernel versions, please contact us for support.
* Regarding limitations, currently, for versions 4.17.0 and above, if the source host undergoes a restart, incremental transmission cannot continue, and HyperBDR will automatically revert to full synchronization.

## Support and Limitations

### Basic Requirements:
- **CPU:** x86-64-bit processor (i386 or later)
- **Memory:** Each mounted point consumes approximately 300MB of cache space. For example, if there are 3 mounted points, around 1000MB of memory will be consumed.
- **Disk Space:**
  - *Software Space:* 100MB of available space for software installation.
  - *Cache Space:* Each filesystem must have remaining space greater than 10%.
- **Network Connection:** At least 10 Mbps connection to the target endpoint.
- **System Firmware:** BIOS or UEFI.
- **Disk Layout:** MBR or GPT.
- **Virtualization Support:** Full virtualization is supported, but support for paravirtualization (e.g., XenServer) is limited. Manual repair may be required during final boot.

### System Boot:
- Systems bootable with both grub and grub2 methods are synchronized and started.
- Host driver repair using LILO boot method is not supported.
- If there is a separate /boot partition, it must be defined in /etc/fstab; otherwise, repair during boot driver recovery will fail, resulting in boot failure. If this definition is indeed missing, manual addition is recommended (the partition is not mounted in the fstab table).
- The first disk in the host must be the boot disk. Disaster recovery settings specifying the boot disk are currently not supported.

### Disk and Partition Restrictions:
- When a shared disk is mounted for use by multiple hosts on the source side, it is migrated according to the hosts, so the shared disk will be migrated multiple times. After reaching the target side, there will be multiple identical disks, so redundant disks need to be manually cleaned up, leaving only one shared disk shared among multiple hosts.
- Multipath remote disks (FC, IP SAN) are currently not supported.
- Unmounted partitions and disks (raw disks not mounted to specific directories) are currently not supported.
- Encryption of LUKS disks/partitions is currently not supported.
- Network-shared mount directories (e.g., NFS/NAS remote network access data) require the use of separate file-level synchronization tools for data synchronization.
- When using hosts with iSCSI disks, care must be taken not to modify the original Initiator Name to avoid affecting business systems.
- Btrfs file system is currently not supported.
- OracleASM disks are currently not supported.
- Not support LVM thin logical volumes.

## Best Practice

Before using the Linux Agent, please read this section carefully to avoid synchronization failures or conflicts with source applications due to incompatible scenarios, which may affect the stable operation of the system.

### Application Conflict Check
- Components identical to the Linux Agent must not exist in the system.

::: warning

When using the Linux Agent, make sure to monitor memory usage carefully. If the system is handling long data transfers with tools like `scp` or `rsync` and memory usage stays above 70% for a long time, avoid enabling the Linux Agent. This may cause the system to run out of memory (OOM), leading to service interruptions or even a system reboot.  

To reduce the risk, consider optimizing resource usage or running the Linux Agent during less busy times.

:::

### Kernel Upgrade Notice

::: warning

In real-world projects, we have observed that certain Linux distributions (such as Ubuntu) enable automatic kernel upgrades by default. Since the operation of the Linux Agent relies on specific kernel modules that must strictly match the kernel version at the time of installation, upgrading the kernel may cause synchronization failures even if the modules are reloaded.  

To ensure the long-term stable operation of the Linux Agent, it is recommended to disable automatic kernel upgrades and avoid cross-version upgrades (e.g., upgrading directly from 5.4 to 5.15) as much as possible to reduce compatibility risks. If a kernel upgrade occurs, the Linux Agent and its corresponding kernel modules must be manually updated, followed by a full synchronization to ensure data consistency and proper system operation.

:::
