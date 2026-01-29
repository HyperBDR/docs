# Linux Agent

## Supported Operating Systems

| Operating System     | Supported Versions |
| -------------------- | ----------------- |
| CentOS (64-bit)      | 6.x, 7.x, 8.x     |
| Red Hat Enterprise Linux (RHEL) (64-bit) | 6.x, 7.x, 8.x |
| SUSE Linux Enterprise Server (SLES) (64-bit) | 11 (SP1-SP4), 12 (SP1-SP5), 15 (SP1-SP5) |
| Ubuntu Server (64-bit) | 12.04.x, 14.04.x, 16.04.x, 18.04.x, 20.04.x, 22.04.x, 24.04.x |
| Oracle Linux Server (64-bit) | 6.x, 7.x, 8.x |
| Kylin Linux          | v10 SP1 (v2101)   |
| UOS                  | UOS 1050 u2a, UOS 1050 u2e |
| OpenEuler            | 22.03.x, 24.03.x  |

::: warning
- Note: Supported kernel versions: 2.6.32 to 5.8 (standard community releases).
- Kernels with cloud-specific tags are not supported. For special kernel requirements, please contact technical support.

For detailed compatibility, see the [Source OS Support Matrix](https://oneprocloud.feishu.cn/sheets/VRqksSPEPhRTPStp3kVcItXNnyh?sheet=Y9fpqO).
:::

## Support and Limitations

### Basic Requirements
- **CPU:** x86-64 processor (i386 or newer)
- **Memory:** Approximately 300MB of cache per mount point. For example, 3 mount points require about 1GB of memory.
- **Disk Space:**
  - *Software:* At least 100MB of free space for installation.
  - *Cache:* At least 10% free space on each file system.
- **Network:** Minimum 10Mbps bandwidth with connectivity to the target endpoint.
- **Firmware:** BIOS or UEFI.
- **Disk Layout:** MBR or GPT.
- **Virtualization:** Fully virtualized environments are supported. Paravirtualization (such as XenServer) is only partially supported and may require manual intervention during boot.

### Supported and Unsupported Contitions

| Condition            | Supported                          | Not Supported                                 |
| -------------------- | ---------------------------------- | --------------------------------------------- |
| File System Types    | EXT2, EXT3, EXT4, XFS, FAT, exFAT  | Not supported: Btrfs, OracleASM                              |
| Partition Types      | Primary, Extended, LVM, MBR, GPT   | Not supported: LVM thin volumes, LUKS-encrypted partitions   |
| Boot Methods         | grub, grub2                        | Not supported: LILO                                          |
| Boot Disk            | First disk as boot disk            | Not supported: Specifying other disks as boot disk           |
| Shared Disks         | Can be migrated; manual cleanup required | Not supported: Multipath remote disks (FC, IP SAN)      |
| Virtualization Type  | Full virtualization                | Not supported: Paravirtualization (e.g., XenServer; may require manual intervention) |
| Unmounted Partitions/Disks | Not supported                | Not supported: Unmounted partitions and raw disks            |
| iSCSI Disks          | Supported if initiator name is unchanged | Not supported                                 |
| Encrypted Disks      | Not supported                      | Not supported: LUKS-encrypted disks/partitions               |
| Network Mounts       | Not supported                      | Not supported: NFS/NAS network shares (use separate sync tools) |
| Oracle RAC Cluster       | Not supported                      | Not supported |

### Boot Requirements
- Only systems using grub or grub2 are supported.
- LILO boot method is not supported for driver repair.
- If a separate `/boot` partition exists, it must be clearly defined in `/etc/fstab`; otherwise, boot repair will fail. If missing, manually add the `/boot` partition entry.
- The first disk must be the boot disk. Only some cloud platforms support specifying a different system disk.
- The source host must have Secure Boot disabled; otherwise, the migration module cannot be loaded.

### Disk and Partition Limitations
- If a shared disk is mounted by multiple source hosts, it will be migrated multiple times, resulting in duplicate disks on the target. You must manually remove redundant disks and keep only one shared disk.
- Multipath remote disks (FC, IP SAN) are not supported.
- Unmounted partitions and raw disks (not mounted to any directory) are not supported.
- LUKS-encrypted disks/partitions are not supported.
- Network shares (NFS/NAS) require separate file-level sync tools.
- Do not change the original initiator name when using iSCSI disks to avoid business impact.
- Btrfs file system is not supported.
- OracleASM disks are not supported.
- LVM thin volumes are not supported.

## Common Issues

Please review this section before using Linux Agent to avoid sync failures or application conflicts due to unsupported scenarios, which may affect system stability.

### Application Conflict Check
- Do not install any components that are the same as Linux Agent on the system.

::: warning
When using Linux Agent, always monitor memory usage during business operations. If the system is transferring data for a long time using `scp`, `rsync`, or similar tools, and memory usage stays above 70%, use Linux Agent with caution. Low memory may trigger the Out of Memory (OOM) mechanism, causing service interruptions or even a system reboot, which can seriously affect business continuity.

To reduce risk, optimize system resource allocation in advance or schedule Linux Agent to run during off-peak hours.
:::

### Kernel Upgrade Notice

::: warning
Some Linux distributions (such as Ubuntu) enable automatic kernel upgrades by default. Since Linux Agent relies on specific kernel modules that must match the installed kernel version, upgrading the kernel may cause sync failures even after reloading modules.

To ensure long-term stability, disable automatic kernel upgrades and avoid major version jumps (for example, from 5.4 directly to 5.15). If the kernel is upgraded, manually update Linux Agent and its kernel modules, and perform a full sync to ensure data consistency and normal operation.
:::
