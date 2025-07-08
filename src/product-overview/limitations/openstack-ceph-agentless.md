# OpenStack (Ceph) Agentless

## Supported OpenStack/Ceph Versions

| Component | Supported Versions                                                                                      |
| --------- | ------------------------------------------------------------------------------------------------------- |
| OpenStack | Juno, Kilo, Liberty, Mitaka, Newton, Ocata, Pike, Queens, Rocky, Stein, Train, Ussri, Victoria, Wallaby |
| EasyStack | v3, v4, v5, v6                                                                                          |
| Ceph      | Jewel 10.2.11, Kraken 11.2.1, Luminous 12.2.13, Mimic 13.2.10, Nautilus 14.2.22, Octopus 15.2.16        |
| XSKY      | v4.0.2.0, v5.0.100.1                                                                                    |

## Supported Guest Operating Systems

See the [Agentless Support Matrix](./product-support-overview.md) for the full compatibility list and latest support status.

## Basic Requirements

- **Sync Proxy Node:** Ubuntu 20.04, at least 2 CPU cores and 4GB RAM
- **Network Requirements:**
  - Access to Ceph Monitor (default port 6789) and OSD (default port 6800)
  - Access to OpenStack platform API interface
  - Access to the management network address of HyperMotion/HyperBDR Console

## Support and Limitations

### OpenStack Cloud Platform Interface Requirements

- Host list, details, and snapshot interfaces
- Host specification details interface
- Host image creation and details interface
- Volume list and volume details interfaces
- Volume snapshot list and details interfaces

### Ceph Interface Requirements

- Ceph commands: status query, CRUSH MAP query
- RBD related commands: status, information retrieval, snapshot operations, etc.

### Storage Resource Pool Requirements

- The correspondence between volume types and Ceph storage pools must be provided. For default volume types, when the volume type is empty in the OpenStack platform, the corresponding platform volume type value is DEFAULT_VOLUME_TYPE.
- For hosts started from images, storage pool information corresponding to the host's local volumes must be provided. Typically, the corresponding storage pool is vms, and the default value of the platform volume type is CEPH_GLANCE_VMS.

### Storage and Synchronization Limitations

| Condition               | Supported Versions / Types / Requirements                          | Not Supported / Limitations                                                                                       |
| ----------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Storage Type            | Ceph RBD, XSKY and mainstream distributed block storage            | Other storage types are not tested/supported                                                                      |
| Volume Type             | OpenStack standard volume types                                    | Unconfigured volume types or mismatched volume type and storage pool                                              |
| Remote Mounted Disks    | Not supported                                                      | Direct LUN (SAN) access is not supported                                                                          |
| Network Shared Mounts   | Not supported                                                      | NFS/NAS and other network shared directories require file-level sync tools                                        |
| Mounted Partition Space | >100MB required for each mounted partition (e.g., /var, /boot, C:) | Insufficient space may cause backup or recovery failures                                                          |
| Guest OS                | See support matrix                                                 | Some legacy or customized OSs may not be supported                                                                |
| VM Boot Mode            | Volume boot/image boot                                             | Non-standard image boot modes are not supported; VM disks not stored in Ceph images pool or booted by other means |

### Performance and Configuration Recommendations

- Each Sync Proxy node supports up to 100 hosts for synchronization.
- Sync Proxy rate configuration depends on the number of concurrent synchronized hosts:
  - (Default) For higher rates, set `openstack_release_cpu_time = 0` to improve synchronization efficiency.
  - For many concurrent hosts, set `openstack_release_cpu_time` to the number of concurrent hosts.

## Common Issues and Notices

- During backup or snapshot operations, avoid host migration, volume expansion, or reconfiguration, as these may cause synchronization failure or data inconsistency.
- Suspended, crashed, or migrating VMs are not recommended for backup.
- Some operations (such as volume expansion, snapshot restore, or host migration) may break the incremental chain and require a new full backup.
- If the snapshot chain is deleted outside the backup software, incremental backup may fail and require a new full backup.
- Only one backup solution should perform snapshot/incremental backup on the same VM at any given time to avoid conflicts.
- The backup account must have sufficient OpenStack/Ceph API permissions.
- When restoring, the target environment must be compatible with the source (e.g., Ceph version, volume type, storage pool structure).
- Some encrypted storage or encrypted snapshots may not be supported for backup/restore.
