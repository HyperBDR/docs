# General Failback Drill

The general failback drill is designed for scenarios where the failback target platform lacks standard automated failback capabilities. By copying disk data from the failback transition host and performing driver repair using the HyperDoor boot image, you can create an independent drill host for startup and service verification without impacting ongoing failback data synchronization or business continuity.

## Applicable Scenarios

- The failback target platform does not support platform-level automatic failback, or has not yet been adapted for the target cloud or virtualization platform.
- Before the formal failback, you need to verify whether the operating system can boot normally, disks are recognized, and the network and services are available after failback.
- The target platform supports capabilities such as VM cloning, disk snapshots, volume replication, or disk attachment, allowing an independent drill environment to be created from the failback transition host's data.
- There are differences in virtualization drivers, disk controllers, or boot modes between the source and failback target, requiring driver repair via the Livecd-HyperDoor image.
- You need to avoid directly operating the failback transition host that is synchronizing data or running formal failback tasks, minimizing the drill's impact on the formal failback process.

## Core Principles

- The drill must be based on a disk copy of the failback transition host. Do not directly modify the failback transition host that is synchronizing data.
- Before copying the disk, confirm that failback data synchronization is complete and that the host is allowed to be shut down or enter drill mode.
- The number of disks on the drill host must match the failback host. Disk capacity can be larger than the original, but not smaller.
- The boot mode of the source and drill target must match. For example, if the source uses BIOS boot, the target must also use BIOS; if the source uses UEFI, the target must also use UEFI.
- After driver repair is complete, remove the Livecd-HyperDoor boot image and boot the host from the repaired system disk.
- It is recommended to use independent IP addresses, network policies, and service configurations for the drill environment to avoid conflicts with the production environment.

## Reference Guide

If your failback target platform belongs to one of the following types, refer to the corresponding guide to complete the general failback drill. Different platforms may differ in image upload, disk copy, host creation, disk attachment, and boot mode configuration. Please follow the platform-specific guide.

| Cloud Provider                           | Configuration Guide |
| ------------------------------- | ---- |
| VMware                            | [View guide](./vmware-failback-drill-reference-guide.md)     |
| OpenStack               |[View guide](./openstack-failback-drill-reference-guide.md)      |

## Verify Host

After the host completes startup, verify whether the host's business is normal\. 
