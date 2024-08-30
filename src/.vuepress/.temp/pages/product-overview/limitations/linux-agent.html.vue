<template><div><h1 id="linux-agent" tabindex="-1"><a class="header-anchor" href="#linux-agent"><span>Linux Agent</span></a></h1>
<h2 id="os-support" tabindex="-1"><a class="header-anchor" href="#os-support"><span>OS Support</span></a></h2>
<p>Click <a href="https://365.kdocs.cn/l/cpoTwyjxNQ1L" target="_blank" rel="noopener noreferrer">Cloud Platform Support Matrix</a> to view the compatibility list and get the latest support status.</p>
<h2 id="filesystem-partition-types" tabindex="-1"><a class="header-anchor" href="#filesystem-partition-types"><span>FileSystem &amp; Partition Types</span></a></h2>
<h3 id="filesystem" tabindex="-1"><a class="header-anchor" href="#filesystem"><span>FileSystem</span></a></h3>
<ul>
<li>EXT2</li>
<li>EXT3</li>
<li>EXT4</li>
<li>XFS</li>
<li>FAT</li>
<li>exFAT</li>
</ul>
<h3 id="partitions" tabindex="-1"><a class="header-anchor" href="#partitions"><span>Partitions</span></a></h3>
<ul>
<li>Primary/ Extended</li>
<li>Logical Volume Manager (LVM)</li>
<li>MBR</li>
<li>GPT</li>
</ul>
<h2 id="kernel-support" tabindex="-1"><a class="header-anchor" href="#kernel-support"><span>Kernel Support</span></a></h2>
<p>Due to the involvement of kernel modules during runtime, the installation and execution of the Linux Agent depend on the version of the kernel modules. Currently, the supported kernel range is from version 2.6.32 to 5.8, and these kernel versions are built from standard community versions.</p>
<h3 id="limitations" tabindex="-1"><a class="header-anchor" href="#limitations"><span>Limitations</span></a></h3>
<ul>
<li>We currently do not support kernel versions with cloud tags. If there is a need for specific kernel versions, please contact us for support.</li>
<li>Regarding limitations, currently, for versions 4.17.0 and above, if the source host undergoes a restart, incremental transmission cannot continue, and HyperBDR will automatically revert to full synchronization.</li>
</ul>
<h2 id="support-and-limitations" tabindex="-1"><a class="header-anchor" href="#support-and-limitations"><span>Support and Limitations</span></a></h2>
<h3 id="basic-requirements" tabindex="-1"><a class="header-anchor" href="#basic-requirements"><span>Basic Requirements:</span></a></h3>
<ul>
<li><strong>CPU:</strong> x86-64-bit processor (i386 or later)</li>
<li><strong>Memory:</strong> Each mounted point consumes approximately 300MB of cache space. For example, if there are 3 mounted points, around 1000MB of memory will be consumed.</li>
<li><strong>Disk Space:</strong>
<ul>
<li><em>Software Space:</em> 100MB of available space for software installation.</li>
<li><em>Cache Space:</em> Each filesystem must have remaining space greater than 10%.</li>
</ul>
</li>
<li><strong>Network Connection:</strong> At least 10 Mbps connection to the target endpoint.</li>
<li><strong>System Firmware:</strong> BIOS or UEFI.</li>
<li><strong>Disk Layout:</strong> MBR or GPT.</li>
<li><strong>Virtualization Support:</strong> Full virtualization is supported, but support for paravirtualization (e.g., XenServer) is limited. Manual repair may be required during final boot.</li>
</ul>
<h3 id="system-boot" tabindex="-1"><a class="header-anchor" href="#system-boot"><span>System Boot:</span></a></h3>
<ul>
<li>Systems bootable with both grub and grub2 methods are synchronized and started.</li>
<li>Host driver repair using LILO boot method is not supported.</li>
<li>If there is a separate /boot partition, it must be defined in /etc/fstab; otherwise, repair during boot driver recovery will fail, resulting in boot failure. If this definition is indeed missing, manual addition is recommended (the partition is not mounted in the fstab table).</li>
<li>The first disk in the host must be the boot disk. Disaster recovery settings specifying the boot disk are currently not supported.</li>
</ul>
<h3 id="disk-and-partition-restrictions" tabindex="-1"><a class="header-anchor" href="#disk-and-partition-restrictions"><span>Disk and Partition Restrictions:</span></a></h3>
<ul>
<li>When a shared disk is mounted for use by multiple hosts on the source side, it is migrated according to the hosts, so the shared disk will be migrated multiple times. After reaching the target side, there will be multiple identical disks, so redundant disks need to be manually cleaned up, leaving only one shared disk shared among multiple hosts.</li>
<li>Multipath remote disks (FC, IP SAN) are currently not supported.</li>
<li>Unmounted partitions and disks (raw disks not mounted to specific directories) are currently not supported.</li>
<li>Encryption of LUKS disks/partitions is currently not supported.</li>
<li>Network-shared mount directories (e.g., NFS/NAS remote network access data) require the use of separate file-level synchronization tools for data synchronization.</li>
<li>When using hosts with iSCSI disks, care must be taken not to modify the original Initiator Name to avoid affecting business systems.</li>
<li>Btrfs file system is currently not supported.</li>
</ul>
<h3 id="application-conflict-check" tabindex="-1"><a class="header-anchor" href="#application-conflict-check"><span>Application Conflict Check:</span></a></h3>
<ul>
<li>Components identical to the Linux Agent must not exist in the system.</li>
</ul>
</div></template>


