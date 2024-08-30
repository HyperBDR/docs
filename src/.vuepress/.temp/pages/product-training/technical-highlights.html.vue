<template><div><h1 id="technical-highlights" tabindex="-1"><a class="header-anchor" href="#technical-highlights"><span>Technical Highlights</span></a></h1>
<h2 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation"><span>Implementation</span></a></h2>
<p>The process of disaster recovery can be simplified into three main steps: syncing data, storing it, and recovering it when needed, like bringing back hosts.</p>
<figure><img src="@source/product-training/images/technical-highlights-implementation.png" alt="Implementation" tabindex="0" loading="lazy"><figcaption>Implementation</figcaption></figure>
<p>HyperBDR tackles these key challenges:</p>
<ul>
<li>Getting Data Back: Since HyperBDR focuses on keeping hosts safe, the main task is figuring out how to grab data from your systems, especially at the basic level.</li>
<li>Storing Data Right: Designed for cloud platforms, HyperBDR ensures data is stored sensibly in cloud services, ready for quick recovery.</li>
<li>Making Everything Work Together: Unlike old-school setups, cloud platforms can be orchestrated easily. Hyper BDR taps into this capability to swiftly restore business systems.</li>
<li>Simplifying Learning: Lastly, it aims for an easy-to-use interface, making it simple for users to understand and operate, thus reducing the learning curve.</li>
</ul>
<h2 id="block-level-full-incremental-replication-technology" tabindex="-1"><a class="header-anchor" href="#block-level-full-incremental-replication-technology"><span>Block-level full incremental replication technology</span></a></h2>
<p>Let's delve into how HyperBDR reads and stores data.</p>
<figure><img src="@source/product-training/images/technical-highlights-block-level-sync.png" alt="Block-level full incremental replication technology" tabindex="0" loading="lazy"><figcaption>Block-level full incremental replication technology</figcaption></figure>
<p>As mentioned earlier, to achieve host-level backup and recovery, HyperBDR employs block-level data synchronization, meaning it can back up data on all disks of the hosts using this method. It's important to note that these disks do not include network disks, such as NFS.</p>
<p>Once the synchronization level is determined, the next step is to address the issue of data synchronization, specifically acquiring full and incremental data.</p>
<p>In HyperBDR, there are primarily three methods for data synchronization:</p>
<ul>
<li>For Agent synchronization, incremental data is obtained mainly through kernel module I/O capture technology.</li>
<li>For VMware, we primarily utilize CBT technology to capture incremental data from users.</li>
<li>For OpenStack platforms using Ceph storage, we leverage the RBD interface to obtain data.</li>
</ul>
<p>In block storage mode, data is directly written to the corresponding location of the cloud platform's block storage.</p>
<p>As mentioned before, during the data synchronization process, HyperBDR directly stores the captured data from the source host in cloud storage. Specifically, in block storage mode, data is directly written to the corresponding location of the cloud platform's block storage through the <strong>Cloud Sync Gateway</strong>. Finally, by calling the cloud platform's block storage snapshot interface, the data after each synchronization is locked.</p>
<p>The advantage of this approach is that during the data synchronization phase, there is no need to establish a one-to-one mapping between the source and target hosts. Only an appropriate number of cloud synchronization gateways and corresponding disks are needed.</p>
<p>A question that is often asked is, how many cloud synchronization gateways do I need during data synchronization?</p>
<p>First, the number of <strong>Cloud Sync Gateways</strong> does not directly correspond to the number of production environment hosts.
Secondly, the number of disks mounted on the cloud synchronization gateway corresponds one-to-one with the total number of disks on the production environment hosts. For example, if there are 10 hosts at the source, each with two disks, then only one <strong>Cloud Sync Gateway</strong> is needed on Huawei Cloud because each cloud host on Huawei Cloud can mount 20 disks.</p>
<p>In object storage mode, data is divided into regions of default 4 MB size. When a change is detected in a particular region, the data in that region is stored in the object storage, while the corresponding metadata information is stored in HyperBDR. Since the access interface for object storage itself uses HTTP, no additional computing resources are required for storage.</p>
<h2 id="boot-in-cloud" tabindex="-1"><a class="header-anchor" href="#boot-in-cloud"><span>Boot-in-Cloud</span></a></h2>
<p>Boot-in-Cloud is a unique technology of HyperBDR, which implements one-click host startup function by comprehensively using the orchestration ability of cloud APIs and driver adaptation ability.</p>
<figure><img src="@source/product-training/images/technical-highlights-boot-in-cloud.png" alt="Boot in Cloud" tabindex="0" loading="lazy"><figcaption>Boot in Cloud</figcaption></figure>
<p>In block storage mode, the startup process includes the following steps:</p>
<p>Firstly, it is necessary to restore the block storage snapshot to a volume and repair the drive of the system's boot disk.
When finally recovering the host, since each cloud platform uses slightly different methods, for example, on Huawei Cloud, startup can be achieved by swapping the system disk and data disk.
The final host startup process is completed according to the specifications, volume types, boot disks, networks, and other information specified by the user in the disaster recovery configuration.</p>
<p>In object storage mode, the startup process is slightly different:</p>
<p>Firstly, the target platform needs to upload two custom types of images, one for the Linux system and one for the Windows system.
During the startup of the object storage host, firstly, a temporary recovery host is started, and the corresponding disks are created and mounted.
Then, the data is restored from the object storage to the block storage, and the drive repair process is carried out.
After completion, the temporary host will automatically restart, and once the restart is completed, the host startup is finished.</p>
<h2 id="boot-in-cloud-in-depth" tabindex="-1"><a class="header-anchor" href="#boot-in-cloud-in-depth"><span>Boot-in-Cloud In-Depth</span></a></h2>
<p>In the Boot-in-Cloud process, Driver Adaptation is a crucial step and a key factor in HyperBDR's success in recovering hosts across different platforms.</p>
<figure><img src="@source/product-training/images/technical-highlights-boot-in-cloud-in-depth.png" alt="Boot in Cloud In-Depth" tabindex="0" loading="lazy"><figcaption>Boot in Cloud In-Depth</figcaption></figure>
<p>Driver Adaptation primarily includes the following:</p>
<ul>
<li>Adaptation of drivers for different platforms: For instance, when transitioning from VMware to KVM platforms, it's necessary to inject virtio-related drivers to ensure the host can boot up properly and the network functions correctly.</li>
<li>Conversion from UEFI to BIOS boot: Since cloud platforms have limited support for UEFI boot, if the source system uses UEFI boot, it needs to be automatically converted to BIOS boot at the cloud end.</li>
<li>Network configuration: As most cloud platforms use DHCP for address allocation, while traditional environments typically use static IP addresses, adjustments to network configurations are needed during startup.</li>
<li>Modification of configuration files: Primarily done to ensure compliance with the target cloud platform's operations. For example, after restoring a VMware host to a cloud platform, certain actions such as disabling vmware-tools may be necessary.</li>
<li>Driver repair involves numerous tasks, which are not listed here. Unlike other disaster recovery software, HyperBDR's driver repair occurs after the fact. Regardless of whether it's in Agent or Agentless mode, no drivers or configurations are installed or injected in advance on the source production environment hosts, aiming to minimize the impact on the source production environment.</li>
</ul>
<h2 id="wizard-style-minimal-operation" tabindex="-1"><a class="header-anchor" href="#wizard-style-minimal-operation"><span>Wizard-style minimal operation</span></a></h2>
<p>Despite the complexity of its underlying logic, HyperBDR simplifies the user experience by abstracting intricate processes into three simple steps: Select Host, Configure Disaster Recovery, and Start Recovery.</p>
<figure><img src="@source/product-training/images/technical-highlights-wizard-ui.png" alt="HyperBDR Wizard" tabindex="0" loading="lazy"><figcaption>HyperBDR Wizard</figcaption></figure>
<p>With these three steps, users can almost entirely complete all operational procedures within HyperBDR's Graphical User Interface (GUI) without the need for frequent logins to the production environment and target cloud platform.</p>
</div></template>


