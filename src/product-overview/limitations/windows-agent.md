# Windows Agent

## OS Support

Click [Cloud Platform Support Matrix](https://365.kdocs.cn/l/ctsKIt85ScaM) to view the compatibility list and get the latest support status.

## FileSystem & Partition Types

### FileSystem

* NTFS
* FAT16
* FAT32

### Partitions

* Primary/Extended
* Logical Disk Manager(LDM)
* Basic disk (Partition type: MBR/GPT)

## Support and Limitations

### Basic Requirements
   - **CPU:** x86-64-bit processor
      - **CPU Usage Control:** You can limit the average CPU usage of DiskSyncAgent by configuring the CPU_USAGE_SETTING option. By default, the CPU usage limit is set to 30%.
      - **Increase Sync Speed:** If your network is sufficient, increasing the CPU usage limit can improve synchronization speed in object storage mode.
      - It is important to note that increasing the CPU usage limit may slow down or destabilize the system if the user's computer performance is low or if other CPU-intensive tasks are running simultaneously. Therefore, before increasing the CPU usage limit, it is necessary to evaluate the system's performance and resource utilization.
   - **Memory Requirements:**
      - To ensure the normal operation of the DiskSyncAgent service, it is recommended to have at least 1 GB of available memory.
      - The DiskSyncAgent service typically occupies 220-350 MB of memory. Insufficient system memory may cause the DiskSyncAgent service to run slowly or crash.
   - **Disk Space:** To ensure proper installation and operation of the software, it is recommended to reserve at least 200 MB of free space.
   - **Network Connection:** To ensure stability and speed of the connection to the target endpoint, it is recommended to use a network connection of at least 10 Mbps.
   - **System Firmware:** To ensure compatibility with the software, BIOS or UEFI firmware is required.
   - **Virtualization Support:** DiskSyncAgent supports full virtualization, but support for paravirtualization (e.g., XenServer) is limited. Manual repair may be required during final boot.
   
### Disk Volume Requirements
   - The number of disks must be fewer than 32.
   - Offline synchronization is not supported for source disks. All disks must be online before synchronization. You can configure disks that do not need data synchronization through the source configuration file.
   - Disks that do not need synchronization (except boot disks) can be specified through configuration. Refer to the EXCLUDE_DISKS configuration item in the configuration file. Excluded disks can be offline. Note: Modifying the EXCLUDE_DISKS configuration item must be completed before the first service startup (node registration). Once the host node registration is completed, this configuration item cannot be modified. If you need to modify it, you need to clear the resources and re-register the node.
   - If there are shared disks mounted to multiple hosts on the source side, only one host's shared disk can be selected for synchronization during migration. The shared disks on other hosts can be excluded through the EXCLUDE_DISK configuration item.
   - The free space ratio of the volume should not be less than 3%. If the system incremental data is large, additional free space is required to reserve space for storing VSS snapshots. Insufficient space may cause snapshot abnormalities, leading to synchronization failure.
   - Simple volumes and partition volumes synchronization are supported, but not volumes with areas, mirror volumes, or RAID volumes.
   - Windows dynamic disks cannot be used as system boot partitions.
   - Windows operating system UEFI boot is not supported.
   
### File System and Volume Snapshot Requirements
   - NTFS file system supports VSS synchronization mode, which only synchronizes valid data.
   - Raw devices or other file systems outside of NTFS do not support VSS mode and are synchronized based on the actual disk capacity.
   - In VSS mode, the VSS service on the source host must be running normally. You can use the vssadmin command line provided by Windows to create and delete shadows.
   - In cloud disk mode, the MsiscsiService service must be running normally.
   - During data synchronization on the source host, do not manually delete Windows VSS shadows. Otherwise, synchronization failure may occur, and you will need to restart full synchronization.
   
### Network Requirements
   - In cloud disk mode, the source host needs to be able to access port 3260 of the target endpoint and ensure that iSCSI communication is normal.
   - In cloud disk mode, if the source disk contains iSCSI disks, use caution and do not change the original Initiator Name to avoid affecting the normal operation of the business system.
   - In cloud disk mode synchronization, the network bandwidth from the source host to the target host should not be less than 5 Mbps to ensure the stability of the iSCSI target disk. Bandwidth less than 5 Mbps may cause instability of the iSCSI disk, resulting in synchronization failure. Ensure network stability, low latency, and low jitter.
   - Support proxy mode, set the correct proxy server and port through the interface during installation and startup stages.
   
### System Patch Requirements
   - To ensure the normal operation of the DiskSyncAgent service, you need to install patch KB4474419 on three types of systems: Windows 2008 32-bit, Windows 2008 64-bit, and Windows 2008 R2 64-bit. After installing the patch, restart the system before starting the DiskSyncAgent service. For patch installation methods, please refer to the appendix.
   
### Security Software Requirements
   - If your host has security software installed, it is recommended to completely disable it before synchronization (for some software, the exit function cannot completely disable the software. If you are unsure whether the software can be completely disabled, it is recommended to uninstall the related software first).
   - If you cannot completely disable the software, pay attention to the security software's warning messages during the installation and startup of the Agent service. If a warning message window appears, be sure to set trust for all operations of the software to avoid interception or warning from the security software. Do not temporarily disable security software for the installation and startup of Windows Agent, as this may damage the Agent service. If this happens, you need to restart the host to restore the host service. For the list of security software that affects Agent data synchronization, please refer to Appendix 2.
   
### Time Synchronization Requirements
   - Under conditions where the host can connect to the Internet, it needs to synchronize with the Internet time to maintain consistency. If you cannot connect to the Internet, you need to synchronize with the time server within the intranet.