# General Failback Drill

## The loopback platform supports ISO boot 

### Supports cloning hosts

- On the disaster recovery platform, after waiting for the failback data synchronization to complete, log in to the target platform for failback\.

- Find the "rollback transition host" that receives data, and use the platform's host cloning capability to clone a new host\. 

- Use the Livecd\-HyperDoor\.iso mirroring image to boot up this cloned host using the platform's Livecd\. 

- Log in to this cloned host, execute the minitgt\-fix command, and perform driver repair\. 

- Wait for the driver repair to complete, shut down the host, remove the optical drive, and then boot from the hard disk\.

- Configure the IP Address for this test host\. 

- Just adjust the business configuration and perform verification\.



### Cloning hosts is not supported

- On the disaster recovery platform, after waiting for the failback data synchronization to complete, log in to the target platform for failback\.

- Locate the "rollback transition host" that receives data, and make a copy of all disks corresponding to this host for backup 

- Use the copied system disk, leverage the volume boot capability, start up a host, and mount the remaining data disks to this host

- Use the Livecd\-HyperDoor\.iso mirroring image to boot up this cloned host using the platform's Livecd\. 

- Log in to this cloned host, execute the minitgt\-fix command, and perform driver repair\. 

- Wait for the driver repair to complete, shut down the host, remove the optical drive, and then boot from the hard disk\.

- Configure the IP Address for this test host\. 

- Just adjust the business configuration and perform verification\.



## The backcut platform does not support ISO boot 

- On the disaster recovery platform, after waiting for the failback data synchronization to complete, log in to the target platform for failback\.

- Locate the "rollback transition host" that receives data, and make a copy of all disks corresponding to this host for backup 

- Use the Livecd\-HyperDoor\.iso or Livecd\-HyperDoor\.qcow2 mirroring to create a brand new transitional host, and the system disk of this host must be equal in size to or larger than that of the host to be reverted 

- Then mount all the system disks and data disks that were previously copied out for backup onto this new transitional host\. 

- Use the dd command to copy the newly mounted system disk in its entirety to the system disk of the transition host itself\. After the copy is completed, unmount the mounted system disk\. 

- In this transition host, use lsblk to check the system disk of this host \(assuming it is vda\), and execute the minitgt\-fix /dev/vda command to perform driver repair\. 

- Wait for the driver repair to complete, then restart the transition host\. 

- After the host has finished starting up, configure the IP Address for this host\. 

- Just adjust the business configuration and perform verification\.



---

## Organize and optimize

Based on the above document, I think it can be used as a multi\-step guiding process to allow users to perform operations:

#### Step 1: Upload mirroring 

```Plain Text
The disaster recovery drill requires a boot image. Upload the image to the target platform first.

> Platforms that support ISO boot, such as VMware

Recommended for VMware vSphere environments. It provides complete virtual machine image support.
Download link: https://192.168.8.22:30080/softwares/hyperdoor/Livecd-HyperDoor.iso

> Cloud platforms that support QCOW2, such as OpenStack

Recommended for mainstream cloud platforms. It provides strong compatibility with cloud environments.
Download link: https://192.168.8.22:30080/softwares/hyperdoor/Livecd-HyperDoor.qcow2

> Upload the image to the target platform

Upload the downloaded image to your target cloud platform or VMware environment. The upload process may vary by platform. Refer to the documentation of your platform for details.

Upload notes:
- For cloud platforms: upload the QCOW2 image through the console.
- For VMware: upload the ISO image through vCenter.
- Make sure the image is uploaded to the correct region or data center.
- After the upload is complete, verify the image integrity.

```

#### Step 2: Copy Disk 

First, this page should prompt the following content:

```Plain Text
Do not copy disks while data synchronization is in progress. This may cause data inconsistency. Before copying disks, confirm that:
1. Data synchronization has completed.
2. The protection policy for the host can be disabled.
After both items are confirmed, copy the disks.
```

Then it is to guide users to copy the disk, mainly including:

```Plain Text
> Platforms that support host cloning, such as VMware

Find the transition host that receives the synchronized data. Use the platform's host cloning feature to create a new host for the drill.

> Platforms that support snapshots, such as OpenStack

Find the transition host that receives the synchronized data. Use host snapshots or volume snapshots to create snapshots for all disks of the transition host.
Then create volumes from the snapshots for later use.

> Platforms that do not support the quick disk copy methods above, such as physical servers

Create the same number of disks with the same sizes as the disks on the transition host, and attach them to the transition host.
Log in to the transition host through SSH. Use the dd command to copy each disk to the newly attached drill disk.
After the copy is complete, detach the disks for later use.

```

#### Step 3: Boot the host

```Plain Text
> Platforms that support host cloning and ISO boot, such as VMware

Attach the ISO image uploaded in Step 1 to the host cloned in Step 2.
Start the host and make sure it boots successfully from the ISO.
For easier management, configure the IP address through DHCP or manually.

> Cloud platforms that support QCOW2 images, such as OpenStack

Use the QCOW2 image uploaded in Step 1 to create a new drill host on the platform. The system disk must be the same size as or larger than the system disk of the transition host.
Attach the disks prepared in Step 2 to the new drill host, using the same disk order as the transition host that receives synchronized data.
Start the host and make sure it boots successfully.
For easier management, configure the IP address through DHCP or manually.

```

#### Step 4: Driver Repair

```Plain Text
Log in to the drill host started in Step 3 through the console or SSH.
Run minitgt-fix to repair the drivers.
If you need to convert UEFI to BIOS, refer to the document: xxx.
If you need WinPE repair, refer to the document: xxx.

```

#### Step 5: Verify the host

```Plain Text
> Drill hosts cloned and started through ISO boot, such as VMware

Unmount the ISO image from the CD/DVD drive.
Run reboot to restart the system.
Verify the system after startup.

> Drill hosts created from a QCOW2 image, such as OpenStack

Use dd to overwrite the system disk created from the QCOW2 image with the repaired system disk.
Run reboot to restart the system.
Verify the system after startup.

```

## Final Solution

Use only one page to guide users to download the mirroring, and then direct them to the document platform for processing\.

```Plain Text
The disaster recovery drill requires a boot image. Upload the image to the target platform first.

> Platforms that support ISO boot, such as VMware

Recommended for VMware vSphere environments. It provides complete virtual machine image support.
Download link: https://192.168.8.22:30080/softwares/hyperdoor/Livecd-HyperDoor.iso

> Cloud platforms that support QCOW2, such as OpenStack and Alibaba Cloud

Recommended for mainstream cloud platforms. It provides strong compatibility with cloud environments.
Download link: https://192.168.8.22:30080/softwares/hyperdoor/Livecd-HyperDoor.qcow2

> Upload the image to the target platform

Upload the downloaded image to your target cloud platform or VMware environment. The upload process may vary by platform. Refer to the documentation of your platform for details.


```

## Reference Guide

| Cloud Provider                           | Configuration Guide |
| ------------------------------- | ---- |
| VMware                            | [View guide](./vmware-failback-drill-reference-guide.md)     |
| OpenStack               |[View guide](./openstack-failback-drill-reference-guide.md)      |

## Verify Host

After the host completes startup, verify whether the host's business is normal\. 
