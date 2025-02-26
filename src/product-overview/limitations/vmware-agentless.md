# VMware Agentless

## VMWare Compatibility

* vCenter Server 5.1, 5.5, 6.0, 6.5, 6.7, 7.0, 8.0(RC)
* ESXi 5.0, 5.1, 5.5, 6.0, 6.5, 6.7, 7.0, 8.0(RC)
* VMFS 5.1, 5.2, 5.5, 5.8, 6.0, 6.5
* VSAN 6.5, 6.6, 7.0

## Guest OS Support

Click [Cloud Platform Support Matrix](https://oneprocloud.feishu.cn/sheets/VRqksSPEPhRTPStp3kVcItXNnyh?sheet=Y9fpqO) to view the compatibility list and get the latest support status.

## Support and Limitations

### VMware Storage Support and Limitations
  - Incremental data synchronization is not supported for virtual machines with version 4 (only full data synchronization is supported).
  - Data synchronization for disks larger than 2TB is not supported under ESXi 5.0 and 5.1 versions (single disk capacity < 2032GB).

### Sync Proxy Network Requirements
  - A CentOS 7 system with a minimum of 2 cores and 4GB of RAM is required as a **Sync Proxy** node.
  - Access to the vCenter management network address and port is required.
  - Access to port 902 of ESXi managed under the vCenter is required.
  - Access to the management network address of **HyperMotion/HyperBDR Console** is required.

### Sync Proxy Performance
  - The maximum number of synchronized hosts per **Sync Proxy** is limited to 100.
  - **Sync Proxy** rate configuration is related to the number of concurrent synchronized hosts:
    - (Default Setting) When a higher rate is required, it is recommended to adjust vmware_release_cpu_time = 0 to improve synchronization efficiency.
    - When there are many concurrent synchronized hosts, it is recommended to adjust vmware_release_cpu_time = the number of concurrent synchronized hosts.

### Guest OS Support and Limitations
  - Virtual machines using remote RDM disks (directly accessing a storage LUN in SAN) are not supported.
  - Network-shared mounted directories (e.g., accessing data through NFS/NAS in the virtual machine system via remote network) are not supported for synchronization. Use a file synchronization tool for this data.
  - Independent-mode virtual disks are not supported and must be synchronized as basic disks.
  - Virtual machines mounted with USB or PCI peripherals will fail to snapshot (e.g., encrypted dog devices, etc.).
  - Virtual machines configured with shared disks need to change the shared disk to non-shared mode (modify the parameter iscsi1:0.sharing to mutil-write and change it to FALSE).
