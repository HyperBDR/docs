# Driver Adaption

## About Driver Adaption

Virtualization platforms differ significantly in hardware abstraction, driver models, and boot mechanisms. To ensure a system can boot successfully on the target platform, relying solely on cloud API orchestration is not sufficient. The system must undergo environment-specific compatibility operations, including driver injection, boot configuration, and network adjustment.
The primary goal of driver adaption is to ensure the system can boot to the login interface and establish normal network connectivity.

---

## Limitations

We employ various efficient and cost-effective automated solutions to improve compatibility across operating systems. However, due to certain structural or configuration differences within operating systems, there are known conditions that may cause driver adaption to fail, preventing the system from starting properly on the target platform. If the source environment meets any of the following conditions, system boot may fail regardless of agent-based or agentless mode.

### Windows Systems

* **Dynamic system volumes are not supported**
  Dynamic volumes are not supported for system disks (all types). Data disks may use dynamic volumes without issue. Please convert system disks to basic partitions (e.g., NTFS) before data sync.

* **ReFS file system is not supported**
  ReFS (Resilient File System) lacks compatibility and transaction log support compared to NTFS. It may cause recovery failures, especially under crash-consistent snapshot mode. NTFS is recommended for system disks.

* **Compatibility issues with legacy Windows versions**
  Certain Windows 2003/2008 (32-bit or 64-bit) versions may fail to boot or auto-load network drivers on some cloud platforms. Please confirm with your cloud provider whether the OS version is fully supported.

#### References

* [Dynamic Disks are Deprecated](https://learn.microsoft.com/en-us/windows/win32/fileio/basic-and-dynamic-disks#dynamic-disks)
* [Do not use ReFS for Security Reasons](https://techcommunity.microsoft.com/discussions/sql_server/what-to-use-refs-or-ntfs/3046795)
* [Features and functionality removed in Windows client](https://learn.microsoft.com/en-us/windows/whats-new/removed-features)

### Linux Systems

* **Abnormal partition structure**
  Overlapping partitions or inaccessible mount points may lead to driver adaption failure. Please ensure a clean and standard partition structure before proceeding.

* **Missing or renamed system identity files**
  If files like `/etc/*-release` or `/etc/issue` are deleted or renamed, the system version cannot be recognized, resulting in failure. Please restore the files before retrying.

* **Insufficient space in critical partitions**
  If `/boot`, `/var`, or root has less than 100 MB of free space, the adaption process may not complete. Free up space before retrying.

* **Disk in read-only mode**
  The adaption process requires write access to the disk. If the disk is read-only, the operation will fail. Please disable read-only restrictions in production before proceeding.