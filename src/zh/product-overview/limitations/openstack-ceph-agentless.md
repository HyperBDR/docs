# OpenStack(Ceph) Agentless

## Compatibility

### OpenStack

* Open Source: Juno, Kilo, Liberty, Mitaka, Newton, Ocata, Pike, Queens, Rocky, Stein, Train, Ussri, Victoria, Wallaby
* Commercial: EasyStack v3, v4, v5, v6

### Ceph

* Open Source: Jewel 10.2.11, Kraken 11.2.1, Luminous 12.2.13, Mimic 13.2.10, Nautilus 14.2.22, Octopus 15.2.16
* Commercial: XSKY v4.0.2.0, v5.0.100.1

## Guest OS Support

Click [Cloud Platform Support Matrix](https://oneprocloud.feishu.cn/sheets/WjvRswHPPh4UUgtLlxucQ9R8nwf?from=from_copylink) to view the compatibility list and get the latest support status.

## Support and Limitations

### OpenStack Cloud Platform Interface Requirements:
   - Host list, details, and snapshot interfaces
   - Host specification details interface
   - Host image creation and details interface
   - Volume list and volume details interfaces
   - Volume snapshot list and details interfaces

### Ceph Interface Requirements:
   - Ceph commands: status query, CRUSH MAP query
   - RBD related commands: status, information retrieval, snapshot operations, etc.

### Storage Resource Pool Requirements:
   - It is necessary to provide the correspondence between volume types and Ceph storage pools. For default volume types, when the volume type is empty in the OpenStack platform, the corresponding platform volume type value is DEFAULT_VOLUME_TYPE.
   - For hosts started with images, it is necessary to provide storage pool information corresponding to the host's local volumes. Typically, the corresponding storage pool is vms, and the default value of the platform volume type is CEPH_GLANCE_VMS.

### Sync Proxy Requirements:
   - A CentOS 7 system with a minimum of 2 cores and 4GB of RAM is required as a **Sync Proxy** node.
   - Access to Ceph Monitor (default is 6789) and read corresponding data in OSD (default port is 6800).
   - Access to OpenStack platform API interface.
   - Access to the management network address of **HyperMotion/HyperBDR Console**.

### Sync Proxy Performance:
   - The maximum number of synchronized hosts per **Sync Proxy** is not more than 100.
   - **Sync Proxy** rate configuration is related to the number of concurrent synchronized hosts:
      - (Default Setting) When a higher rate is required, it is recommended to adjust openstack_release_cpu_time = 0 to improve synchronization efficiency.
      - When there are many concurrent synchronized hosts, it is recommended to adjust openstack_release_cpu_time = the number of concurrent synchronized hosts.

### Guest OS Support:
   - Virtual machines using remote mounted disks (directly accessing a storage LUN in SAN) are not supported.
   - Network-shared mounted directories (e.g., accessing data through NFS/NAS in the virtual machine system via remote network) are not supported for synchronization. Use a file synchronization tool for this data.
