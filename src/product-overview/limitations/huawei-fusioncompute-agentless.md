# Huawei FusionCompute Agentless Mode

::: warning
To use the agentless mode in FusionCompute, the guest operating system (Guest OS) must have Tools installed and running; otherwise, agentless mode cannot be enabled.
:::

## Compatibility

| Module                        | Version |
|-------------------------------|---------|
| FusionCompute                  | 6.3.0   |
| FusionCompute VRM Interface    | 8.7.0   |

## Supported Guest OS

Click [Source Features:](https://oneprocloud.feishu.cn/sheets/S7LisoSWdhm2G4t0rdycwxEunEd?sheet=M57AtF) to view the compatibility list and the latest support status.

## Support and Limitations

### **1. Basic Requirements and Limitations**

- **VM Tools and State Requirements**

  Before creating a CBT snapshot for the host, the virtual machine must have VM Tools installed and running. This is a prerequisite to ensure proper CBT snapshot generation.

- **Virtual Machine State Requirements**

  - When the virtual machine is in **hibernation**, only memory snapshots are supported.
  - When the virtual machine is **powered off**, only standard snapshots can be created; CBT snapshots cannot be created.
  - Snapshots are not allowed if the virtual machine is in any state other than **running**, **hibernated**, or **stopped**.

- **Virtual Machine Disk Requirements**

  - Snapshots cannot be created if the virtual machine has disks mounted with the **IDE** bus type.
  - Virtual machines using **shared disks** cannot create snapshots. If a shared disk is in use, no snapshot operations can be performed.
  - **Independent disks** cannot be backed up.

- **Snapshot Quantity Limit**

  A maximum of **32 backup snapshots** can be created per virtual machine. Once this limit is reached, no further snapshots can be created.

- **Architecture Limitations**

  Virtual machines bound to shared disks with the **x86 architecture** do not support memory snapshots or consistency snapshots. When creating a standard snapshot, **shared disks** are not included in the snapshot.

### **2. Backup and Restore Operation Limitations**

- **VM State and Operation Mutually Exclusive**

  During backup operations, the following actions must be avoided on the virtual machine: power on, online disk binding, shutdown, disk expansion, storage migration, full machine migration, etc. These operations are mutually exclusive with backup tasks and must be performed after the backup is completed.

- **Backup Failure Risks**

  The backup may fail if the virtual machine is powered off or undergoes state changes (such as HA restart, restoring VM snapshots, volume expansion, etc.). Also, **CBT snapshots will become invalid**, and a full backup will be required.

- **VM Backup Scenario Limitations**

  - Snapshot functionality is not available during storage migration, disk expansion, etc.
  - Snapshots cannot be taken for **linked clone VMs** or **template VMs**.
  - Snapshots cannot be created when the snapshot count exceeds the maximum allowed limit.

- **Storage and Resource Allocation Requirements**

  During VM backup, snapshot merge operations may be required on the target storage. Therefore, sufficient space must be reserved on the target storage for snapshot merging. eBackup supports backing up a maximum of **8 volumes** at a time on the target storage, which requires space for up to 8 merged snapshots.

- **Storage I/O Performance Impact**

  Backup and restore operations involve reading and writing to storage, which may impact storage I/O performance. It is recommended to schedule backup and restore during **off-peak business hours** to minimize the impact on regular business operations.

- **Cross-Storage Type Backup Restrictions**

  Cross-storage type backup and restore are not supported. For example, backup and restore operations cannot be performed between virtualized storage and FusionStorage storage.

### **3. Resource Control and Performance Impact**

- **Resource Allocation and Connection Limits**

  When preparing backup resources through the **VRM interface**, VRM handles resource allocation and control. Each host supports up to **8 socket connections** for concurrent backup operations.

- **System and Storage Type Compatibility**

  Consistency and memory snapshots are only supported in **EulerOS** environments. Other operating systems do not support this feature.

- **Disk Storage Type Requirements**

  Snapshots are supported only if the virtual machine's disk storage type is one of the following:
  - Distributed block storage
  - eVol storage
  - Virtualized local disks
  - Virtualized SAN storage
  - NAS storage

- **VM Pause Time**

  In the eBackup backup scenario, if a virtual machine is configured with **10 x 200GB virtualized disks**, the usual pause time is between **1 to 3 seconds**. This pause time depends on factors like virtual disk size, disk read/write speed, and CPU performance. On hosts or storage with lower performance, the pause time may exceed 3 seconds.
