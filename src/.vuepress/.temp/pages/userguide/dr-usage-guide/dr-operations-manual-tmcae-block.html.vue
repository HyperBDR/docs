<template><div><h1 id="i-disaster-recovery-scenario-overview" tabindex="-1"><a class="header-anchor" href="#i-disaster-recovery-scenario-overview"><span>I. Disaster Recovery Scenario Overview</span></a></h1>
<p>This user guide explains the use of HyperBDR to backup various types of hosts from the source platform to TM CAE public cloud by supporting Block storage.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-1.jpeg" alt="hyperbdr-user-guide-to-tm-cae-block-storage-1.jpeg" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-1.jpeg</figcaption></figure>
<h1 id="ii-basic-requirements" tabindex="-1"><a class="header-anchor" href="#ii-basic-requirements"><span>II. Basic requirements</span></a></h1>
<ul>
<li>
<p>The hosts (VMware virtual machines) that need to be protected against disasters.</p>
</li>
<li>
<p>Installation of HyperBDR disaster recovery tool and the login credential.</p>
</li>
<li>
<p>Block storage.</p>
</li>
</ul>
<h1 id="iii-workflow" tabindex="-1"><a class="header-anchor" href="#iii-workflow"><span>III.  Workflow</span></a></h1>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-2.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-2.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-2.png</figcaption></figure>
<h1 id="iv-disaster-recovery-operations" tabindex="-1"><a class="header-anchor" href="#iv-disaster-recovery-operations"><span>IV. Disaster Recovery Operations</span></a></h1>
<h2 id="_1-configure-the-production-platform" tabindex="-1"><a class="header-anchor" href="#_1-configure-the-production-platform"><span>1. Configure the Production Platform</span></a></h2>
<h3 id="_1-1-log-in-to-hyperbdr-disaster-recovery-tool" tabindex="-1"><a class="header-anchor" href="#_1-1-log-in-to-hyperbdr-disaster-recovery-tool"><span>1.1. Log in to HyperBDR Disaster Recovery Tool</span></a></h3>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-3.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-3.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-3.png</figcaption></figure>
<h3 id="_1-2-disaster-recovery-of-vmware-virtual-machines-to-tm-cae" tabindex="-1"><a class="header-anchor" href="#_1-2-disaster-recovery-of-vmware-virtual-machines-to-tm-cae"><span>1.2. Disaster Recovery of VMware Virtual Machines to TM CAE</span></a></h3>
<h4 id="_1-2-1-configuring-the-production-platform-vmware" tabindex="-1"><a class="header-anchor" href="#_1-2-1-configuring-the-production-platform-vmware"><span>1.2.1. Configuring the Production Platform (VMware)</span></a></h4>
<p><strong>[Note]</strong></p>
<ul>
<li>
<p>When the source  ( the host to be protected) is a VMware virtual machine, relevant configurations need to be performed.</p>
</li>
<li>
<p>This scenario can achieve agentless disaster recovery, meaning that there is no need to install an agent in each VMware virtual machine to achieve non-intrusive operations.</p>
</li>
</ul>
<p><strong>[Basic requirements]</strong></p>
<ul>
<li>
<p>A vCenter/ESXi cluster</p>
</li>
<li>
<p>Installation of VMware vSphere Client and login to the vCenter/ESXi cluster.</p>
</li>
<li>
<p>Installation of HyperBDR disaster recovery tool and the login credential.</p>
</li>
<li>
<p>Enable the network policy for the VMware virtual machines on production platform to HyperBDR and the cloud synchronization gateway.</p>
</li>
</ul>
<p>**Step 1: **Click <strong>&quot;Configuration&quot;</strong>, click on <strong>&quot;Production Sit&quot;</strong> in the left menu, click on the <strong>&quot;VMware&quot;</strong> selection box.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-4.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-4.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-4.png</figcaption></figure>
<p><strong>Step 2:</strong> Click on the <strong>&quot;+Add&quot;</strong> button to add the agentless proxy component <strong>&quot;Hamal&quot;</strong>.</p>
<blockquote>
<p>For the initial addition of VMware, you need to install the <strong>&quot;Hamal&quot;</strong> component (refer to step 3).</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-5.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-5.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-5.png</figcaption></figure>
<p>**Step 3: **Install Hamal as per the prompts</p>
<blockquote>
<p>If you have already installed Hamal as outlined in the VMware DR Solution POC Preparation Doc, you can proceed directly to <strong>Step 4</strong>.</p>
</blockquote>
<p>(1) Download the OVA to the VMware end or prepare a CentOS7.x version virtual machine at the source end.</p>
<p>(2) Install the agent by executing the installation command in the background of the host imported through OVA or the prepared CentOS7.x virtual machine.</p>
<p>Note: Please operate according to the current display information on the disaster recovery tool. This action is performed by the user in the VMware vSphere Client environment</p>
<p>(3) After installation, return to the disaster recovery tool and click on the <strong>&quot;Next&quot;</strong> button.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-6.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-6.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-6.png</figcaption></figure>
<blockquote>
<p><em>Please refer to the following document for the procedure to deploy Hamal on the VMware side using the OVA template.</em>
<em>Documentation Link：</em><a href="https://docs.oneprocloud.com/userguide/poc/vmware-pre-settings.html#import-ova-images-and-create-proxy-virtual-machine-in-vmware" target="_blank" rel="noopener noreferrer"><em>https://docs.oneprocloud.com/userguide/poc/vmware-pre-settings.html#import-ova-images-and-create-proxy-virtual-machine-in-vmware</em></a></p>
</blockquote>
<p>**Step 4: **Fill in the relevant information in the pop-up box to complete configurations</p>
<table>
<thead>
<tr>
<th><strong>Auth Url</strong></th>
<th>vCenter/ESXi Url</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Username</strong></td>
<td>vCenter/ESXi Account (Administrator Privileges)</td>
</tr>
<tr>
<td><strong>Password</strong></td>
<td>vCenter/ESXI Password</td>
</tr>
<tr>
<td><strong>SyncNode</strong></td>
<td>IP Information exported after the host installed from OVA in the previous step.</td>
</tr>
</tbody>
</table>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-7.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-7.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-7.png</figcaption></figure>
<p><strong>Complete Configuration</strong></p>
<p>After vCenter/ESXI has been successfully added to the disaster recovery production platform. Repeat the above steps to add multiple vCenters as needed.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-8.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-8.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-8.png</figcaption></figure>
<p>After completing the VMware production platform configuration, you can proceed to [1.2.2. Add disaster recovery host(s)].</p>
<h4 id="_1-2-2-add-disaster-recovery-host-s" tabindex="-1"><a class="header-anchor" href="#_1-2-2-add-disaster-recovery-host-s"><span>1.2.2. Add Disaster Recovery Host(s)</span></a></h4>
<p>After clicking on <strong>&quot;DR,&quot;</strong> select <strong>&quot;Host DR&quot;</strong> from the left menu, then click on <strong>&quot;+Add Host&quot;</strong> on the right side, and choose the <strong>&quot;Agentless&quot;</strong> -&gt; <strong>&quot;VMware&quot;</strong>  option.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-9.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-9.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-9.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-10.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-10.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-10.png</figcaption></figure>
<p>Select one of the VMware source connections and click on the <strong>&quot;Next&quot;</strong> button.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-11.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-11.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-11.png</figcaption></figure>
<p>Select the VMware hosts to be protected against disasters from the list of all VMware hosts in the vCenter/ESXi and click on the <strong>&quot;Submit&quot;</strong> button:</p>
<p>If there are multiple hosts, you can search in the upper right corner and perform batch selection.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-12.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-12.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-12.png</figcaption></figure>
<p>On the disaster recovery page, you can view the list of VMware hosts to be protected against disasters. Select the hosts to be operated on, click on the <strong>&quot;Next&quot;</strong> button, and proceed to the disaster recovery configuration operation:</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-13.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-13.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-13.png</figcaption></figure>
<p>After adding the source end disaster recovery hosts,</p>
<p>you can proceed to [4. Perform disaster recovery operations]</p>
<h3 id="_1-3-disaster-recovery-of-physical-and-various-virtual-hosts-to-tm-cae" tabindex="-1"><a class="header-anchor" href="#_1-3-disaster-recovery-of-physical-and-various-virtual-hosts-to-tm-cae"><span>1.3. Disaster Recovery of Physical and Various Virtual Hosts to TM CAE</span></a></h3>
<h4 id="_1-3-1-install-agent-on-the-source-linux-host" tabindex="-1"><a class="header-anchor" href="#_1-3-1-install-agent-on-the-source-linux-host"><span>1.3.1 Install Agent on the source Linux host</span></a></h4>
<p>View documents for operation.</p>
<p>Document Link: <a href="https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-linux-host" target="_blank" rel="noopener noreferrer">https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-linux-host</a></p>
<h4 id="_1-3-2-install-agent-on-the-source-windows-host" tabindex="-1"><a class="header-anchor" href="#_1-3-2-install-agent-on-the-source-windows-host"><span>1.3.2 Install Agent on the source Windows host</span></a></h4>
<p>View documents for operation.</p>
<p>Document Link: <a href="https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-windows-host" target="_blank" rel="noopener noreferrer">https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-windows-host</a></p>
<hr>
<h2 id="_2-recovery-block-platform" tabindex="-1"><a class="header-anchor" href="#_2-recovery-block-platform"><span>2. Recovery/Block Platform</span></a></h2>
<h3 id="_2-1-storage-configuration" tabindex="-1"><a class="header-anchor" href="#_2-1-storage-configuration"><span>2.1. Storage Configuration</span></a></h3>
<p>(1) Click on <strong>&quot;Configuration&quot;</strong> in the upper menu bar, select <strong>&quot;Block Storage&quot;</strong> under <strong>&quot;Storage&quot;</strong> on the left, and click on <strong>&quot;+Add&quot;</strong> .
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-14.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-14.png" loading="lazy"></p>
<p>(2) Follow the steps below to fill in the information and add TM CAE platform
Choose TM CAE as the “Recovery/Block Platform”.
Follow the steps below to fill in the authentication information for TM CAE when adding the target disaster recovery platform:</p>
<ul>
<li>Access Key ID: TM CAE account&quot;s Access Key ID</li>
<li>Access Key Secret: TM CAE account&quot;s Access Key Secret</li>
<li>Project Name: Optional, you can leave it blank</li>
<li>Project ID: Optional, you can leave it blank</li>
<li>Skip Driver Adaption: Optional</li>
</ul>
<p>After confirming the entered information, click the <strong>&quot;Next&quot;</strong> button.
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-15.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-15.png" loading="lazy"></p>
<p>(3) Select the information for creating the HyperGate instance under the authenticated tenant and click the <strong>&quot;Next&quot;</strong> button.
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-16.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-16.png" loading="lazy"></p>
<p>(4) After the <strong>&quot;Create Cloud Storage Gateway&quot;</strong> is complete, click the <strong>&quot;Complete&quot;</strong> button.
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-17.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-17.png" loading="lazy"></p>
<p>(5) On the <strong>&quot;Block Storage&quot;</strong> - <strong>&quot;Cloud Sync Gateway&quot;</strong> page, check the status, and it should display as <strong>&quot;Available.&quot;</strong>
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-18.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-18.png" loading="lazy"></p>
<p>After configuring the Recovery/Block Platform on TM CAE, you can proceed to [1]. Configure the production platform] or proceed to [3]. Perform disaster recovery operations]</p>
<hr>
<h2 id="_3-perform-disaster-recovery-operations" tabindex="-1"><a class="header-anchor" href="#_3-perform-disaster-recovery-operations"><span>3. Perform Disaster Recovery Operations</span></a></h2>
<p>When the hosts to be protected against disasters have already been added, select the hosts and click on the <strong>&quot;Next&quot;</strong> button to go to the disaster recovery configuration page:</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-19.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-19.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-19.png</figcaption></figure>
<h3 id="_3-1-disaster-recovery-configuration" tabindex="-1"><a class="header-anchor" href="#_3-1-disaster-recovery-configuration"><span>3.1. Disaster Recovery Configuration</span></a></h3>
<p>On the Hops DR page, select the hosts to be protected against disasters, click on the <strong>&quot;Setup DR&quot;</strong> button, select <strong>&quot;Block Storage&quot;</strong> and follow the configuration steps:</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-20.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-20.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-20.png</figcaption></figure>
<p><strong>Disaster recovery configuration step 1:</strong> Specify DR Platform; Select the configuration information of the disaster recovery platform where the disaster recovery host is located, and click the <strong>&quot;Next&quot;</strong> button.</p>
<blockquote>
<p>If the disaster recovery platform information is empty, it means that no disaster recovery platform has been added yet. You need to perform <strong>&quot;Storage Configuration&quot;</strong> before proceeding with the next steps.</p>
</blockquote>
<p>Choose <strong>&quot;Block Storage&quot;</strong> as the storage type, and select the configured cloud platform and cloud synchronization gateway.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-21.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-21.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-21.png</figcaption></figure>
<p><strong>Disaster recovery configuration step 2:</strong> Specify the <strong>&quot;Gateway&quot;</strong>, select the DR host, and add it to the <strong>&quot;Gateway&quot;</strong>, then click the <strong>&quot;Next&quot;</strong> button.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-22.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-22.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-22.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-23.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-23.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-23.png</figcaption></figure>
<p><strong>Disaster recovery configuration step 3:</strong> Specify Volume Type; Choose the volume type used by the disaster recovery host on the target disaster recovery platform. If there are multiple volumes, you can configure them separately for system and data volumes. Once configured, click the <strong>&quot;Next&quot;</strong> button.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-24.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-24.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-24.png</figcaption></figure>
<p>Select the disk for booting. If the first disk in your original system is not designated for booting, you must specify the boot disk here, or it may result in startup failure.</p>
<blockquote>
<p>Note: In block storage mode, due to limitations in the cloud platform API interface, once data synchronization is completed, the option for the boot disk cannot be changed. Before initiating synchronization, please reconfirm the selected disk for booting. If chosen incorrectly, you will need to clear data and initiate synchronization again. Exercise caution to ensure the accurate selection of the boot disk and avoid unnecessary re-synchronization steps.</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-25.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-25.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-25.png</figcaption></figure>
<p>**Disaster recovery configuration step 4: ** Computing Resource Configuration; Select the flavor and OS type for the disaster recovery host on the target disaster recovery platform. Once configured, click on the <strong>&quot;Next&quot;</strong> button.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-26.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-26.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-26.png</figcaption></figure>
<p>**Disaster recovery configuration step 5: **Network Congfiguration; Select the VPC network, Subnet, and whether to specify an IP address at startup, configure a public IP, and security group for the disaster recovery host on the target disaster recovery platform. Once configured, click the <strong>&quot;Next&quot;</strong> button.</p>
<blockquote>
<p>VPC networks and Subnets need to be created in advance under your TM CAE account.</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-27.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-27.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-27.png</figcaption></figure>
<p>**Disaster recovery configuration step 6: **Associat Policy;  Associate the corresponding disaster recovery policy with the standby host (association can be skipped for now). If there is no policy, you can create a new one. After completion, click the <strong>&quot;Submit&quot;</strong> button.</p>
<blockquote>
<p>Before starting the policy configuration, the hosts that have already been configured will automatically enter the <strong>&quot;Start DR&quot;</strong> phase.</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-28.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-28.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-28.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-29.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-29.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-29.png</figcaption></figure>
<blockquote>
<p>After completing the disaster recovery configuration, you can still choose to modify the disaster recovery configuration for the host in the <strong>&quot;Action&quot;</strong> section.</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-30.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-30.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-30.png</figcaption></figure>
<hr>
<h3 id="_3-2-data-synchronization-full-incremental" tabindex="-1"><a class="header-anchor" href="#_3-2-data-synchronization-full-incremental"><span>3.2. Data Synchronization (Full / Incremental)</span></a></h3>
<p>In the <strong>&quot;Start DR&quot;</strong> step, you can select one or more hosts to be protected against disasters, and click on the <strong>&quot;Sync&quot;</strong> button to synchronize data:
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-31.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-31.png" loading="lazy"></p>
<p>Confirm the disaster recovery hosts that need to be synchronized and click on the <strong>&quot;Submit&quot;</strong> button:</p>
<blockquote>
<p>For the first synchronization, full data will be synchronized. For subsequent synchronizations, incremental data will be synchronized. You can also select run full synchronization, which means that all data will be synchronized during this synchronization.</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-32.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-32.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-32.png</figcaption></figure>
<p>Wait for the data synchronization of the disaster recovery hosts to complete.
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-33.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-33.png" loading="lazy"></p>
<hr>
<h3 id="_3-3-dr-drill-dr-takeover" tabindex="-1"><a class="header-anchor" href="#_3-3-dr-drill-dr-takeover"><span>3.3. DR Drill / DR Takeover</span></a></h3>
<p>After the data synchronization (snapshot synchronization) is completed, select the host and click on the <strong>&quot;Drill&quot;</strong> / <strong>&quot;Takeover&quot;</strong>  button accordingly:</p>
<blockquote>
<p>The  <strong>&quot;Drill&quot;</strong> / <strong>&quot;Takeover&quot;</strong>  functions are consistent, these functions indicate starting the disaster recovery host on the disaster recovery platform, and relevant verification and takeover work can be performed after the start.</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-34.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-34.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-34.png</figcaption></figure>
<p>Select the snapshot time point when starting the disaster recovery hosts and click on the <strong>&quot;Submit&quot;</strong> button to start the host instance.</p>
<blockquote>
<p><strong>Note:</strong> This action will start an instance on the TM CAE platform according to the disaster recovery parameters set for this disaster recovery host. This instance is a host recovered to the cloud. The snapshot time point is generated each time data is synchronized and is used for selection during startup. (The number of reserved snapshot time points can be configured as needed.)</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-35.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-35.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-35.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-36.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-36.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-36.png</figcaption></figure>
<hr>
<h3 id="_3-4-view-disaster-recovery-result" tabindex="-1"><a class="header-anchor" href="#_3-4-view-disaster-recovery-result"><span>3.4. View Disaster Recovery Result</span></a></h3>
<p>After the disaster recovery host is started, if the host startup status displays the relevant configuration information of the host on the disaster recovery platform, it means that the disaster recovery drill/disaster recovery takeover was successful. You can log in to TM CAE to view the running status of the disaster recovery host:
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-37.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-37.png" loading="lazy"></p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-38.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-38.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-38.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-39.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-39.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-39.png</figcaption></figure>
<h3 id="_3-5-clean-up-verification-host" tabindex="-1"><a class="header-anchor" href="#_3-5-clean-up-verification-host"><span>3.5. Clean Up Verification Host</span></a></h3>
<p>Select the host that needs to be <strong>&quot;Clean Up Verification Host&quot;</strong>, and in the <strong>&quot;Action&quot;</strong> section, click on the <strong>&quot;Clean Up Verification Host&quot;</strong> option. Wait for the cleaning process to complete.
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-40.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-40.png" loading="lazy"></p>
<hr>
<h2 id="_4-host-group-disaster-recovery" tabindex="-1"><a class="header-anchor" href="#_4-host-group-disaster-recovery"><span>4. Host Group Disaster Recovery</span></a></h2>
<p>Host group disaster recovery is mainly applicable to groups of disaster recovery host resources with similar attributes and requirements. These groups can be based on business units or other dimensions of resource sets. All operational configurations are done at the host group level. This includes setting up host group synchronization strategies, where all disaster recovery host data synchronization commands within the group are issued simultaneously to ensure that all host data in the host group remains consistent at the underlying level.</p>
<blockquote>
<p>When adding a disaster recovery host to host group disaster recovery, it is necessary to ensure that the single host disaster recovery configuration is completed before it can be added to the disaster recovery host group. Otherwise, it cannot be directly added to the host group disaster recovery.</p>
</blockquote>
<h3 id="_4-1-create-host-group" tabindex="-1"><a class="header-anchor" href="#_4-1-create-host-group"><span>4.1 Create Host Group</span></a></h3>
<p>Go to the <strong>&quot;Group DR&quot;</strong> on the left menu bar and then click the <strong>&quot;+Add&quot;</strong> button:</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-41.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-41.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-41.png</figcaption></figure>
<p><strong>Step1: Basic Info</strong></p>
<p>Configure basic information for the Host Group, including <strong>&quot;Name&quot;</strong> and <strong>&quot;Description.&quot;</strong> You can add information in these two sections according to your needs. Then, click the <strong>&quot;Next&quot;</strong> button.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-42.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-42.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-42.png</figcaption></figure>
<p><strong>Step2: Select Hosts</strong></p>
<p>Select the disaster recovery host resources that have completed the disaster recovery configuration on the left side. Click the <strong>&quot;Add Resource&quot;</strong> button to include the corresponding disaster recovery hosts in the resource group. Then, click the <strong>&quot;Next&quot;</strong> button.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-43.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-43.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-43.png</figcaption></figure>
<p><strong>Step3: Associate Policy</strong></p>
<p>Choose the policy used by the resource group. If a synchronization policy has been created in advance, you can select it directly. If not, click the <strong>&quot;Create Policy&quot;</strong> button to create a new disaster recovery policy.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-44.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-44.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-44.png</figcaption></figure>
<p><strong>Step4: Boot Sequence</strong></p>
<p>Adjust the startup sequence of the host resources in the associated resources on the left, and click <strong>&quot;Finish&quot;</strong> after confirmation.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-45.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-45.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-45.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-46.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-46.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-46.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-47.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-47.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-47.png</figcaption></figure>
<h3 id="_4-2-modify-host-group" tabindex="-1"><a class="header-anchor" href="#_4-2-modify-host-group"><span>4.2. Modify Host Group</span></a></h3>
<p>Click the <strong>&quot;Action&quot;</strong> button after selecting the resource group to modify the <strong>Basic Info</strong>, <strong>Select Hosts</strong>, <strong>Associate Policy</strong>, and <strong>Boot Sequence</strong> of the resource group.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-48.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-48.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-48.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-49.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-49.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-49.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-50.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-50.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-50.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-51.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-51.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-51.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-52.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-52.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-52.png</figcaption></figure>
<h3 id="_4-3-delete-host-group" tabindex="-1"><a class="header-anchor" href="#_4-3-delete-host-group"><span>4.3. Delete Host Group</span></a></h3>
<p>Go to [Group DR] and click the on “Delete Host group” button :</p>
<p>Check the resource group, and click the <strong>&quot;Delete Resource Group&quot;</strong> button to perform the operation of deleting the resource group.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-53.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-53.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-53.png</figcaption></figure>
<p>According to the prompt for host group deletion, select the relevant configuration options, enter the character <strong>&quot;Yes&quot;</strong> to confirm deletion, then click the [Submit] button to complete deletion.</p>
<p><strong>Notes:</strong></p>
<p>**1: **This operation only deletes the host group, and the resources in the host group will be retained. The disaster recovery hosts in the host group will still be displayed separately in the host disaster recovery, and the disaster recovery operation can still be performed on a single disaster recovery host, and the data that has been synchronized will not be cleared from the disaster recovery platform.</p>
<p>**2: **This operation not only deletes the host group, but also the resources in the host group. The disaster recovery hosts in the host group will be directly cleared from the disaster recovery platform, and all synchronized data will be cleared.</p>
<p>**3: **(Not recommended) I confirm that I want to force clean up resources, which may cause residual resources (only used when cleaning fails). <em>[Use in special scenarios only such as disaster recovery hosts in the host group lose contact or cleaning fails. This option will directly clear the records without initiating a call request.]</em></p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-54.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-54.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-54.png</figcaption></figure>
<h3 id="_4-4-host-group-–-data-synchronization" tabindex="-1"><a class="header-anchor" href="#_4-4-host-group-–-data-synchronization"><span>4.4. Host Group – Data Synchronization</span></a></h3>
<p>Select the configured host group, click the “Sync” button, and then the “Submit” button to perform data synchronization. You can also automatically perform data synchronization according to the configured Host Group Policy Management.</p>
<blockquote>
<p>For the disaster recovery hosts that are first added to the host group, it is necessary to perform data synchronization even if the data synchronization operation has been performed in the Host Disaster Recovery during the disaster recovery process.
The synchronization policy of the host group will automatically execute data synchronization tasks according to policy settings.</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-55.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-55.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-55.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-56.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-56.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-56.png</figcaption></figure>
<h3 id="_4-5-host-group-dr-drill-takeover" tabindex="-1"><a class="header-anchor" href="#_4-5-host-group-dr-drill-takeover"><span>4.5. Host Group - DR Drill / Takeover</span></a></h3>
<p>Wait for data synchronization to complete (synchronization snapshot completed), check the host group that needs to be disaster recovery drilled/taken over, then click on the <strong>&quot;Drill&quot;</strong> / <strong>&quot;Takeover&quot;</strong> button:</p>
<p>Note: For disaster recovery hosts that are first added to the host group, it is necessary to perform data synchronization operation, otherwise it will not be possible to perform disaster recovery drill/takeover even if the disaster recovery hosts in the host group have already performed data synchronization operation during Host Disaster Recovery.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-57.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-57.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-57.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-58.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-58.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-58.png</figcaption></figure>
<p>In the pop-up box, select the synchronization time point snapshot copy, after confirming that the information is correct, click the “Confirm” button.</p>
<blockquote>
<p>The synchronization time point records the recoverable data time point for each snapshot copy generated after each data synchronization is completed.</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-59.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-59.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-59.png</figcaption></figure>
<p>When the host group status showing disaster recovery drill / takeover is completed, you can log in to the disaster recovery platform for drill and takeover operations.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-60.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-60.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-60.png</figcaption></figure>
<h3 id="_4-6-host-group-clean-up-validation-resources" tabindex="-1"><a class="header-anchor" href="#_4-6-host-group-clean-up-validation-resources"><span>4.6. Host Group - Clean Up Validation Resources</span></a></h3>
<p>Check the resource group that needs to clean up and verify resources, click the <strong>&quot;Action&quot;</strong> button, and select the <strong>&quot;Clean Up Validation Resources&quot;</strong> button.</p>
<blockquote>
<p>This operation means that the disaster recovery hosts in the host group that have already performed disaster recovery drill / takeover and the disaster recovery host instances generated on the disaster recovery platform will be deleted. This action prevents the risk of manual operation of deleting instances on the disaster recovery platform.</p>
</blockquote>
<blockquote>
<p>Note: If the disaster recovery host restored on the disaster recovery platform has taken over the business, <strong>do not</strong> perform this operation, as this operation will directly delete the instances generated on the disaster recovery platform.</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-61.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-61.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-61.png</figcaption></figure>
<p>After confirming that the resources to be cleaned on the disaster recovery platform are accurate, enter the character <strong>&quot;Yes&quot;</strong> in the input box to confirm and click the “Submit” button.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-62.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-62.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-62.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-63.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-63.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-63.png</figcaption></figure>
<h2 id="_5-policy-management" tabindex="-1"><a class="header-anchor" href="#_5-policy-management"><span>5. Policy Management</span></a></h2>
<h3 id="_5-1-create-policy" tabindex="-1"><a class="header-anchor" href="#_5-1-create-policy"><span>5.1. Create Policy</span></a></h3>
<p>Click <strong>&quot;Configuration&quot;</strong> on the top menu bar, select <strong>&quot;Policy Settings&quot;</strong> on the left, and click <strong>&quot;Create Policy&quot;</strong>.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-64.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-64.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-64.png</figcaption></figure>
<p>The Create Policy page allows you to modify various parameters of the policy configuration.</p>
<h4 id="_5-1-1-policy-name、snapshot-retain-count、policy-status" tabindex="-1"><a class="header-anchor" href="#_5-1-1-policy-name、snapshot-retain-count、policy-status"><span>5.1.1 Policy Name、Snapshot Retain Count、Policy Status</span></a></h4>
<table>
<thead>
<tr>
<th><strong>Parameter</strong></th>
<th></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Policy Name</td>
<td></td>
<td>Fill in the synchronization policy name and customize the configuration, which can be shared by other disaster recovery host groups.</td>
</tr>
<tr>
<td>Snapshot Retain Count</td>
<td></td>
<td>The range of snapshot quantities is an integer between 1 and 128; if not set, the default is 128. Once the number of snapshots reaches the set quota, deletion will start from the earliest snapshot, always maintaining the set number of snapshots.</td>
</tr>
<tr>
<td>Policy Status</td>
<td></td>
<td>Control the activation and deactivation of the synchronization policy.</td>
</tr>
</tbody>
</table>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-65.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-65.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-65.png</figcaption></figure>
<h4 id="_5-1-2-synchronization-policy" tabindex="-1"><a class="header-anchor" href="#_5-1-2-synchronization-policy"><span>5.1.2 Synchronization Policy</span></a></h4>
<p>Check **Synchronization Policy : Incremental Synchronization, **You can enable and configure parameters for the incremental synchronization policy.</p>
<p>Check **Synchronization Policy : Full Synchronization, **You can enable and configure parameters for the full synchronization policy.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-66.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-66.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-66.png</figcaption></figure>
<table>
<thead>
<tr>
<th><strong>Parameter</strong></th>
<th></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Cycle</td>
<td></td>
<td>Sync policy execution cycle can be set to <strong>Every N minutes</strong>、<strong>Every N hours</strong>、<strong>Every N days</strong>、<strong>Weekly</strong>、<strong>Monthly</strong> for setting the triggering conditions for periodic sync tasks.</td>
</tr>
<tr>
<td>Minutes</td>
<td></td>
<td>You can configure it when the <strong>Cycle</strong> is set to <strong>Every N minutes</strong>.</td>
</tr>
<tr>
<td>Execute once every N minutes, where N is an integer in the range [5-59].</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>| Hours Amount |  | You can configure it when the <strong>Cycle</strong> is set to <strong>Every N hours</strong>.
Execute once every N hours, where N is an integer in the range [1-23]. |</p>
<p>| Day |  | You can configure it when the <strong>Cycle</strong> is set to <strong>Every N days</strong>.
Execute once every N hours, where N is an integer in the range [1-30]. |</p>
<p>| Date（Weekly） |  | You can configure it when the <strong>Cycle</strong> is set to <strong>Weekly</strong>.
Execute the synchronization policy on one day or days of the week every n week.</p>
<p>Execute once a week, where N can take values in the range [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday], and multiple selections are allowed. |</p>
<p>| Date（Mouthly） |  | You can configure it when the <strong>Cycle</strong> is set to <strong>Mouthly</strong>.
Execute every certain date of the month, where the selectable range is [1-31, end of the month], and multiple selections are allowed.</p>
<p>29: The current option will only be executed in leap years of February and will be skipped in other years of February.</p>
<p>30: The current option will not be executed in February.</p>
<p>31: Only executes in January, March, May, July, August, October and December.</p>
<p>E.O.M: The current option will be executed in the last day of each month. |</p>
<p>| Start Time |  | You can configure it when the <strong>Cycle</strong> is set to <strong>Every N minutes <strong>or</strong> Every N hours</strong>.
Setting the Start Time for Synchronization。 |</p>
<p>| Time（Weekly） |  | You can configure it when the <strong>Cycle</strong> is set to <strong>Weekly</strong>.
Setting the Start Time for Synchronization。 |</p>
<p>| Time（Mouthly） |  | You can configure it when the <strong>Cycle</strong> is set to <strong>Mouthly</strong>.
Setting the Start Time for Synchronization。 |</p>
<h4 id="_5-1-3-speed-limit-policy-待修正" tabindex="-1"><a class="header-anchor" href="#_5-1-3-speed-limit-policy-待修正"><span>5.1.3 Speed Limit Policy（待修正）</span></a></h4>
<p>Support Multi-time period speed limiting(Supports setting different speed limits for different time periods within the same cycle, only supports selecting one cycle mode.)</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-67.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-67.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-67.png</figcaption></figure>
<table>
<thead>
<tr>
<th><strong>Parameter</strong></th>
<th></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Cycle</td>
<td></td>
<td>Speed Limit Policy execution cycle can be set to <strong>Every N days</strong>、<strong>Weekly</strong>、<strong>Monthly</strong> for setting the triggering conditions for speed limit tasks.</td>
</tr>
<tr>
<td>Day</td>
<td></td>
<td>You can configure it when the <strong>Cycle</strong> is set to <strong>Every N days</strong>.</td>
</tr>
<tr>
<td>Execute once every N days, where N is an integer in the range [1-30].</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>| Date（Weekly） |  | You can configure it when the <strong>Cycle</strong> is set to <strong>Weekly</strong>.
Execute the speed limit policy on one day or days of the week every n week.</p>
<p>Execute once a week, where N can take values in the range [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday], and multiple selections are allowed. |</p>
<p>| Date（Monthly） |  | You can configure it when the <strong>Cycle</strong> is set to <strong>Mouthly</strong>.
Execute every certain date of the month, where the selectable range is [1-31, end of the month], and multiple selections are allowed.</p>
<p>29: The current option will only be executed in leap years of February and will be skipped in other years of February.</p>
<p>30: The current option will not be executed in February.</p>
<p>31: Only executes in January, March, May, July, August, October and December.</p>
<p>E.O.M: The current option will be executed in the last day of each month. |</p>
<p>| Speed Limit Time |  | Set the time for speed limit tasks |
| Host Speed Limit |  | The host speed limit value should be an integer ≥1. Unit: Mbps |</p>
<h4 id="_5-1-4-retention-policy" tabindex="-1"><a class="header-anchor" href="#_5-1-4-retention-policy"><span>5.1.4 Retention Policy</span></a></h4>
<p>Check <strong>&quot;Sequence Retention&quot;</strong>, enabling and configuring the snapshot retention policy. (Set snapshot retention based on sequence to retain snapshots at specific time points for a specified duration. For example, retain the first snapshot of each month for 3 weeks. Note: Ensure sufficient quota is available for creating new snapshots during the setup, otherwise data synchronization may fail.)</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-68.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-68.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-68.png</figcaption></figure>
<h3 id="_5-2-modify-policy" tabindex="-1"><a class="header-anchor" href="#_5-2-modify-policy"><span>5.2. Modify Policy</span></a></h3>
<p>Check the created Policy, click on <strong>&quot;Action,&quot;</strong> select <strong>&quot;Modify,&quot;</strong> and you can modify the parameters of the policy.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-69.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-69.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-69.png</figcaption></figure>
<h3 id="_5-3-policy-associated-host" tabindex="-1"><a class="header-anchor" href="#_5-3-policy-associated-host"><span>5.3. Policy Associated Host</span></a></h3>
<p>Select the created policy, click on <strong>&quot;Action,&quot;</strong> choose <strong>&quot;Associate Host,&quot;</strong> check the hosts that are not associated with the strategy, and click <strong>&quot;Submit&quot;</strong> to establish the association.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-70.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-70.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-70.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-71.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-71.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-71.png</figcaption></figure>
<h3 id="_5-4-delete-policy" tabindex="-1"><a class="header-anchor" href="#_5-4-delete-policy"><span>5.4. Delete Policy</span></a></h3>
<p>Select the created policy, click on <strong>&quot;Action,&quot;</strong> choose <strong>&quot;Delete,&quot;</strong> and click <strong>&quot;Submit&quot;</strong> to delete the that is not associated with any hosts.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-72.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-72.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-72.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-73.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-73.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-73.png</figcaption></figure>
<blockquote>
<p>If the policy is already associated with resources (hosts, resource groups), deletion is not supported. Please unbind the associated resources (hosts, resource groups) before deleting them.</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-74.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-74.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-74.png</figcaption></figure>
<h3 id="_5-5-policy-unbind-associated-resources-host-resource-group" tabindex="-1"><a class="header-anchor" href="#_5-5-policy-unbind-associated-resources-host-resource-group"><span>5.5 Policy Unbind Associated Resources (Host, Resource Group)</span></a></h3>
<p>Click on the policy name, select the <strong>&quot;Associate Hosts&quot;</strong> or <strong>&quot;Associate Resource Group&quot;</strong> tab, check the resources to unbind, click the <strong>&quot;Unbind Hosts&quot;</strong> or <strong>&quot;Unbind Resource Group&quot;</strong> button, and confirm to unbind the associated resources.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-75.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-75.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-75.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-76.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-76.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-76.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-77.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-77.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-77.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-block-storage-78.png" alt="hyperbdr-user-guide-to-tm-cae-block-storage-78.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-block-storage-78.png</figcaption></figure>
<h2 id="_7-alarm-management" tabindex="-1"><a class="header-anchor" href="#_7-alarm-management"><span>7. Alarm Management</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Currently, two methods of Email alerts and SMS alerts are supported.</p>
</div>
<h3 id="_7-1-alarm-sending-configuration" tabindex="-1"><a class="header-anchor" href="#_7-1-alarm-sending-configuration"><span>7.1 Alarm Sending Configuration</span></a></h3>
<h4 id="_7-1-1-use-email-alerts" tabindex="-1"><a class="header-anchor" href="#_7-1-1-use-email-alerts"><span>7.1.1 Use Email Alerts</span></a></h4>
<ol>
<li>Log in the Broadview coss console</li>
</ol>
<blockquote>
<p>Login Address：https://&lt;HyperBDR IP&gt;:30443<br>
Default administrator user：admin<br>
Default administrator password：P@ssw0rd</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/alarmconfiguration-1.png" alt="alarmconfiguration-1.png" tabindex="0" loading="lazy"><figcaption>alarmconfiguration-1.png</figcaption></figure>
<ol start="2">
<li>Configure SMTP</li>
</ol>
<figure><img src="@source/userguide/dr-usage-guide/images/alarmconfiguration-2.png" alt="alarmconfiguration-2.png" tabindex="0" loading="lazy"><figcaption>alarmconfiguration-2.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/alarmconfiguration-3.png" alt="alarmconfiguration-3.png" tabindex="0" loading="lazy"><figcaption>alarmconfiguration-3.png</figcaption></figure>
<ol start="3">
<li>Send Test Email</li>
</ol>
<figure><img src="@source/userguide/dr-usage-guide/images/alarmconfiguration-4.png" alt="alarmconfiguration-4.png" tabindex="0" loading="lazy"><figcaption>alarmconfiguration-4.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/alarmconfiguration-5.png" alt="alarmconfiguration-5.png" tabindex="0" loading="lazy"><figcaption>alarmconfiguration-5.png</figcaption></figure>
<h4 id="_7-1-2-use-sms-alerts" tabindex="-1"><a class="header-anchor" href="#_7-1-2-use-sms-alerts"><span>7.1.2 Use SMS Alerts</span></a></h4>
<ol>
<li>Log in the Broadview coss console</li>
</ol>
<blockquote>
<p>Login Address：https://&lt;HyperBDR IP&gt;:30443<br>
Default administrator user：admin<br>
Default administrator password：P@ssw0rd</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/alarmconfiguration-6.png" alt="alarmconfiguration-6.png" tabindex="0" loading="lazy"><figcaption>alarmconfiguration-6.png</figcaption></figure>
<ol start="2">
<li>Configure SMS Service</li>
</ol>
<figure><img src="@source/userguide/dr-usage-guide/images/alarmconfiguration-7.png" alt="alarmconfiguration-7.png" tabindex="0" loading="lazy"><figcaption>alarmconfiguration-7.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/alarmconfiguration-8.png" alt="alarmconfiguration-8.png" tabindex="0" loading="lazy"><figcaption>alarmconfiguration-8.png</figcaption></figure>
<ol start="3">
<li>Send Test SMS</li>
</ol>
<figure><img src="@source/userguide/dr-usage-guide/images/alarmconfiguration-9.png" alt="alarmconfiguration-9.png" tabindex="0" loading="lazy"><figcaption>alarmconfiguration-9.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/alarmconfiguration-10.png" alt="alarmconfiguration-10.png" tabindex="0" loading="lazy"><figcaption>alarmconfiguration-10.png</figcaption></figure>
<h3 id="_7-2-notification-configuration" tabindex="-1"><a class="header-anchor" href="#_7-2-notification-configuration"><span>7.2 Notification Configuration</span></a></h3>
<blockquote>
<p>Logged into the HyperBDR console by default</p>
</blockquote>
<ol>
<li>Add Notufication</li>
</ol>
<figure><img src="@source/userguide/dr-usage-guide/images/alarmconfiguration-11.png" alt="alarmconfiguration-11.png" tabindex="0" loading="lazy"><figcaption>alarmconfiguration-11.png</figcaption></figure>
<ol start="2">
<li>Configure Notufication</li>
</ol>
<figure><img src="@source/userguide/dr-usage-guide/images/alarmconfiguration-12.png" alt="alarmconfiguration-12.png" tabindex="0" loading="lazy"><figcaption>alarmconfiguration-12.png</figcaption></figure>
<h3 id="_7-3-alarm-rule-configuration" tabindex="-1"><a class="header-anchor" href="#_7-3-alarm-rule-configuration"><span>7.3 Alarm Rule Configuration</span></a></h3>
<h4 id="_7-3-1-resource-alert" tabindex="-1"><a class="header-anchor" href="#_7-3-1-resource-alert"><span>7.3.1 Resource Alert</span></a></h4>
<ol>
<li>Create Resource Alert</li>
</ol>
<figure><img src="@source/userguide/dr-usage-guide/images/alarmconfiguration-13.png" alt="alarmconfiguration-13.png" tabindex="0" loading="lazy"><figcaption>alarmconfiguration-13.png</figcaption></figure>
<ol start="2">
<li>Configure Resource Alert</li>
</ol>
<figure><img src="@source/userguide/dr-usage-guide/images/alarmconfiguration-14.png" alt="alarmconfiguration-14.png" tabindex="0" loading="lazy"><figcaption>alarmconfiguration-14.png</figcaption></figure>
<h4 id="_7-3-2-event-alert" tabindex="-1"><a class="header-anchor" href="#_7-3-2-event-alert"><span>7.3.2 Event Alert</span></a></h4>
<ol>
<li>Create Event Alert</li>
</ol>
<figure><img src="@source/userguide/dr-usage-guide/images/alarmconfiguration-15.png" alt="alarmconfiguration-15.png" tabindex="0" loading="lazy"><figcaption>alarmconfiguration-15.png</figcaption></figure>
<ol start="2">
<li>Configure Event Alert</li>
</ol>
<figure><img src="@source/userguide/dr-usage-guide/images/alarmconfiguration-16.png" alt="alarmconfiguration-16.png" tabindex="0" loading="lazy"><figcaption>alarmconfiguration-16.png</figcaption></figure>
</div></template>


