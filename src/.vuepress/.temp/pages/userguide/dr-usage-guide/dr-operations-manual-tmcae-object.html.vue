<template><div><h1 id="dr-operations-manual-object-storage" tabindex="-1"><a class="header-anchor" href="#dr-operations-manual-object-storage"><span>DR Operations Manual Object Storage</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#_1-configure-the-production-platform">1. Configure the Production Platform</router-link><ul><li><router-link to="#_1-1-log-in-to-hyperbdr-disaster-recovery-tool">1.1. Log in to HyperBDR Disaster Recovery Tool</router-link></li><li><router-link to="#_1-2-disaster-recovery-of-vmware-virtual-machines-to-tm-cae">1.2. Disaster Recovery of VMware Virtual Machines to TM CAE</router-link></li><li><router-link to="#_1-3-disaster-recovery-of-physical-and-various-virtual-hosts-to-tm-cae">1.3. Disaster Recovery of Physical and Various Virtual Hosts to TM CAE</router-link></li></ul></li><li><router-link to="#_2-object-storage-settings">2. Object Storage Settings</router-link><ul><li><router-link to="#_2-1-adding-object-storage">2.1. Adding Object Storage</router-link></li></ul></li><li><router-link to="#_3-disaster-recovery-platform-operation">3. Disaster Recovery Platform Operation</router-link><ul><li><router-link to="#_3-1-configure-the-disaster-recovery-platform-tm-cae">3.1. Configure the disaster recovery platform (TM CAE)</router-link></li></ul></li><li><router-link to="#_4-perform-disaster-recovery-operations">4. Perform Disaster Recovery Operations</router-link><ul><li><router-link to="#_4-1-disaster-recovery-configuration">4.1. Disaster Recovery Configuration</router-link></li><li><router-link to="#_4-2-data-synchronization-full-incremental">4.2. Data Synchronization (Full / Incremental)</router-link></li><li><router-link to="#_4-3-dr-drill-dr-takeover">4.3. DR Drill / DR Takeover</router-link></li><li><router-link to="#_4-4-view-disaster-recovery-result">4.4. View Disaster Recovery Result</router-link></li><li><router-link to="#_4-5-clean-up-verification-host">4.5. Clean Up Verification Host</router-link></li></ul></li><li><router-link to="#_5-host-group-disaster-recovery">5. Host Group Disaster Recovery</router-link><ul><li><router-link to="#_5-1-create-host-group">5.1 Create Host Group</router-link></li><li><router-link to="#_5-2-modify-host-group">5.2. Modify Host Group</router-link></li><li><router-link to="#_5-3-delete-host-group">5.3. Delete Host Group</router-link></li><li><router-link to="#_5-4-host-group-–-data-synchronization">5.4. Host Group – Data Synchronization</router-link></li><li><router-link to="#_5-5-host-group-dr-drill-takeover">5.5. Host Group - DR Drill / Takeover</router-link></li><li><router-link to="#_5-6-host-group-clean-up-validation-resources">5.6. Host Group - Clean Up Validation Resources</router-link></li></ul></li><li><router-link to="#_6-policy-management">6. Policy Management</router-link><ul><li><router-link to="#_6-1-create-policy">6.1. Create Policy</router-link></li><li><router-link to="#_6-2-modify-policy">6.2. Modify Policy</router-link></li><li><router-link to="#_6-3-policy-associated-host">6.3. Policy Associated Host</router-link></li><li><router-link to="#_6-4-delete-policy">6.4. Delete Policy</router-link></li><li><router-link to="#_6-5-policy-unbind-associated-resources-host-resource-group">6.5 Policy Unbind Associated Resources (Host, Resource Group)</router-link></li></ul></li><li><router-link to="#_7-alarm-management">7. Alarm Management</router-link><ul><li><router-link to="#_7-1-alarm-sending-configuration">7.1 Alarm Sending Configuration</router-link></li><li><router-link to="#_7-2-notification-configuration">7.2 Notification Configuration</router-link></li><li><router-link to="#_7-3-alarm-rule-configuration">7.3 Alarm Rule Configuration</router-link></li></ul></li></ul></nav>
<h1 id="i-disaster-recovery-scenario-overview" tabindex="-1"><a class="header-anchor" href="#i-disaster-recovery-scenario-overview"><span>I. Disaster Recovery Scenario Overview</span></a></h1>
<p>This user guide explains the use of HyperBDR to backup various types of hosts from the source platform to TM CAE by supporting S3 protocol object storage</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-1.jpeg" alt="hyperbdr-user-guide-to-tm-cae-object-storage-1.jpeg" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-1.jpeg</figcaption></figure>
<h1 id="ii-basic-requirements" tabindex="-1"><a class="header-anchor" href="#ii-basic-requirements"><span>II. Basic requirements</span></a></h1>
<ul>
<li>
<p>The hosts (VMware virtual machines) that need to be protected against disasters.</p>
</li>
<li>
<p>Installation of HyperBDR disaster recovery tool and the login credential.</p>
</li>
<li>
<p>Object storage.</p>
</li>
</ul>
<h1 id="iii-workflow" tabindex="-1"><a class="header-anchor" href="#iii-workflow"><span>III.  Workflow</span></a></h1>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-2.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-2.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-2.png</figcaption></figure>
<h1 id="iv-disaster-recovery-operations" tabindex="-1"><a class="header-anchor" href="#iv-disaster-recovery-operations"><span>IV. Disaster Recovery Operations</span></a></h1>
<h2 id="_1-configure-the-production-platform" tabindex="-1"><a class="header-anchor" href="#_1-configure-the-production-platform"><span>1. Configure the Production Platform</span></a></h2>
<h3 id="_1-1-log-in-to-hyperbdr-disaster-recovery-tool" tabindex="-1"><a class="header-anchor" href="#_1-1-log-in-to-hyperbdr-disaster-recovery-tool"><span>1.1. Log in to HyperBDR Disaster Recovery Tool</span></a></h3>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-3.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-3.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-3.png</figcaption></figure>
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
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-4.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-4.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-4.png</figcaption></figure>
<p><strong>Step 2:</strong> Click on the <strong>&quot;+Add&quot;</strong> button to add the agentless proxy component <strong>&quot;Hamal&quot;</strong>.</p>
<blockquote>
<p>For the initial addition of VMware, you need to install the <strong>&quot;Hamal&quot;</strong> component (refer to step 3).</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-5.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-5.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-5.png</figcaption></figure>
<p><strong>Step 3:</strong> Install Hamal as per the prompts</p>
<blockquote>
<p>If you have already installed Hamal as outlined in the VMware DR Solution POC Preparation Doc, you can proceed directly to <strong>Step 4</strong>.</p>
</blockquote>
<p>(1) Download the OVA to the VMware end or prepare a CentOS7.x version virtual machine at the source end.</p>
<p>(2) Install the agent by executing the installation command in the background of the host imported through OVA or the prepared CentOS7.x virtual machine.</p>
<p>Note: Please operate according to the current display information on the disaster recovery tool. This action is performed by the user in the VMware vSphere Client environment</p>
<p>(3) After installation, return to the disaster recovery tool and click on the <strong>&quot;Next&quot;</strong> button.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-6.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-6.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-6.png</figcaption></figure>
<blockquote>
<p><em>Please refer to the following document for the procedure to deploy Hamal on the VMware side using the OVA template.</em>
<em>Documentation Link：</em><a href="https://docs.oneprocloud.com/userguide/poc/vmware-pre-settings.html#import-ova-images-and-create-proxy-virtual-machine-in-vmware" target="_blank" rel="noopener noreferrer"><em>https://docs.oneprocloud.com/userguide/poc/vmware-pre-settings.html#import-ova-images-and-create-proxy-virtual-machine-in-vmware</em></a></p>
</blockquote>
<p><strong>Step 4:</strong> Fill in the relevant information in the pop-up box to complete configurations</p>
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
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-7.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-7.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-7.png</figcaption></figure>
<p><strong>Complete Configuration</strong></p>
<p>After vCenter/ESXI has been successfully added to the disaster recovery production platform. Repeat the above steps to add multiple vCenters as needed.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-8.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-8.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-8.png</figcaption></figure>
<p>After completing the VMware production platform configuration, you can proceed to [1.2.2. Add disaster recovery host(s)].</p>
<h4 id="_1-2-2-add-disaster-recovery-host-s" tabindex="-1"><a class="header-anchor" href="#_1-2-2-add-disaster-recovery-host-s"><span>1.2.2. Add Disaster Recovery Host(s)</span></a></h4>
<p>After clicking on <strong>&quot;DR,&quot;</strong> select <strong>&quot;Host DR&quot;</strong> from the left menu, then click on <strong>&quot;+Add Host&quot;</strong> on the right side, and choose the <strong>&quot;Agentless&quot;</strong> -&gt; <strong>&quot;VMware&quot;</strong>  option.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-9.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-9.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-9.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-10.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-10.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-10.png</figcaption></figure>
<p>Select one of the VMware source connections and click on the <strong>&quot;Next&quot;</strong> button.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-11.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-11.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-11.png</figcaption></figure>
<p>Select the VMware hosts to be protected against disasters from the list of all VMware hosts in the vCenter/ESXi and click on the <strong>&quot;Submit&quot;</strong> button:</p>
<p>If there are multiple hosts, you can search in the upper right corner and perform batch selection.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-12.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-12.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-12.png</figcaption></figure>
<p>On the disaster recovery page, you can view the list of VMware hosts to be protected against disasters. Select the hosts to be operated on, click on the <strong>&quot;Next&quot;</strong> button, and proceed to the disaster recovery configuration operation:</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-13.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-13.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-13.png</figcaption></figure>
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
<h2 id="_2-object-storage-settings" tabindex="-1"><a class="header-anchor" href="#_2-object-storage-settings"><span>2. Object Storage Settings</span></a></h2>
<h3 id="_2-1-adding-object-storage" tabindex="-1"><a class="header-anchor" href="#_2-1-adding-object-storage"><span>2.1. Adding Object Storage</span></a></h3>
<p><strong>(1) Click on <strong>&quot;Configuration&quot;</strong> in the upper menu bar, select <strong>&quot;Object Storage&quot;</strong> under <strong>&quot;Storage&quot;</strong> on the left, and click on <strong>&quot;+Add&quot;</strong> .</strong>
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-14.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-14.png" loading="lazy"></p>
<p>Object storage that supports the S3 protocol can be added, including public cloud object storage such as TM CAE object storage and custom object storage deployed through Minio.</p>
<p><strong>(2) In the <strong>&quot;Object Storage platform&quot;</strong>, select the TM CAE Object Storage region you are using.</strong>
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-15.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-15.png" loading="lazy"></p>
<p><strong>(3) Fill in the Access Key (AK) and Access Secret Key (SK) for authenticating against the Object Storage. After confirming, click <strong>&quot;Next&quot;</strong>.</strong>
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-16.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-16.png" loading="lazy"></p>
<p><strong>(4) Set the Object Storage bucket name and click <strong>&quot;Submit&quot;</strong>.</strong></p>
<blockquote>
<p>You can either use an existing Object Storage bucket within the region or create a new one with a custom name.</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-17.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-17.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-17.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-18.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-18.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-18.png</figcaption></figure>
<p><strong>(5) Object Storage has been successfully added.</strong>
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-19.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-19.png" loading="lazy"></p>
<hr>
<h2 id="_3-disaster-recovery-platform-operation" tabindex="-1"><a class="header-anchor" href="#_3-disaster-recovery-platform-operation"><span>3. Disaster Recovery Platform Operation</span></a></h2>
<h3 id="_3-1-configure-the-disaster-recovery-platform-tm-cae" tabindex="-1"><a class="header-anchor" href="#_3-1-configure-the-disaster-recovery-platform-tm-cae"><span>3.1. Configure the disaster recovery platform (TM CAE)</span></a></h3>
<p><strong>(1) Click on <strong>&quot;Configuration&quot;</strong> in the top menu, choose <strong>&quot;Object DR Gateway&quot;</strong> on the left, and click the <strong>&quot;Add&quot;</strong> button.</strong></p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-20.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-20.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-20.png</figcaption></figure>
<p><strong>(2) Follow the steps and fill in the information according to create the link for the disaster recovery platform.</strong></p>
<p>After authentication is completed, an image will be automatically uploaded under the TM CAE authentication tenant for disaster recovery drills and recovery purposes.</p>
<p>When adding the target disaster recovery platform, the TM CAE authentication information needs to be filled in as shown below:</p>
<ul>
<li>
<p>Access Key ID: TM CAE account Access Key ID</p>
</li>
<li>
<p>Access Key Secret: TM CAE account Access Key Secret</p>
</li>
<li>
<p>Region ID: TM CAE account Region ID</p>
</li>
<li>
<p>Project ID: TM CAE account Project ID</p>
</li>
</ul>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-21.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-21.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-21.png</figcaption></figure>
<p>After filling in the details, click on the <strong>&quot;Next&quot;</strong> button:</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-22.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-22.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-22.png</figcaption></figure>
<p>After confirming the information, click on the <strong>&quot;Submit&quot;</strong> button and wait for the completion to be completed in the disaster recovery management platform.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-23.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-23.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-23.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-24.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-24.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-24.png</figcaption></figure>
<p>After configuring the disaster recovery platform on TM CAE, you can proceed to [1. Configure the production platform] or proceed to [4. Perform disaster recovery operations]</p>
<hr>
<h2 id="_4-perform-disaster-recovery-operations" tabindex="-1"><a class="header-anchor" href="#_4-perform-disaster-recovery-operations"><span>4. Perform Disaster Recovery Operations</span></a></h2>
<p>When the hosts to be protected against disasters have already been added, select the hosts and click on the <strong>&quot;Next&quot;</strong> button to go to the disaster recovery configuration page:
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-25.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-25.png" loading="lazy"></p>
<h3 id="_4-1-disaster-recovery-configuration" tabindex="-1"><a class="header-anchor" href="#_4-1-disaster-recovery-configuration"><span>4.1. Disaster Recovery Configuration</span></a></h3>
<p>On the Hops DR page, select the hosts to be protected against disasters, click on the <strong>&quot;Setup DR&quot;</strong> button, select <strong>&quot;Object Storage Recovery&quot;</strong> and follow the configuration steps:
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-26.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-26.png" loading="lazy"></p>
<p><strong>DR configuration step 1:</strong> Specify DR Platform; Select the configuration information of the disaster recovery platform where the disaster recovery host is located, and click the <strong>&quot;Next&quot;</strong> button.</p>
<blockquote>
<p>If the disaster recovery platform information is empty, it means that no disaster recovery platform has been added yet. You need to configure the disaster recovery recovery operation before proceeding with the subsequent operations.</p>
</blockquote>
<p>Choose <strong>&quot;Object Storage&quot;</strong> for the select storage type and select the configured object storage and recovery platform.
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-27.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-27.png" loading="lazy"></p>
<p>You can configure the maximum CPU usage, encryption, and compression settings for the source synchronization.
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-28.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-28.png" loading="lazy"></p>
<p><strong>DR configuration step 2:</strong> Computing Resource Configuration; Select the flavor and OS type for the disaster recovery host on the target disaster recovery platform. Once configured, click on the <strong>&quot;Next&quot;</strong> button.
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-29.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-29.png" loading="lazy"></p>
<p><strong>DR configuration step 3:</strong> Specify Volume Type; Choose the volume type used by the disaster recovery host on the target disaster recovery platform. If there are multiple volumes, you can configure them separately for system and data volumes. Once configured, click the <strong>&quot;Next&quot;</strong> button.
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-30.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-30.png" loading="lazy"></p>
<p>Select the disk for booting. If the first disk in your original system is not designated for booting, you must specify the boot disk here, or it may result in startup failure.</p>
<blockquote>
<p>Note: In block storage mode, due to limitations in the cloud platform API interface, once data synchronization is completed, the option for the boot disk cannot be changed. Before initiating synchronization, please reconfirm the selected disk for booting. If chosen incorrectly, you will need to clear data and initiate synchronization again. Exercise caution to ensure the accurate selection of the boot disk and avoid unnecessary re-synchronization steps.</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-31.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-31.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-31.png</figcaption></figure>
<p><strong>DR configuration step 4</strong> Network Congfiguration; Select the VPC network, Subnet, and whether to specify an IP address at startup, configure a public IP, and security group for the disaster recovery host on the target disaster recovery platform. Once configured, click the <strong>&quot;Next&quot;</strong> button.</p>
<blockquote>
<p>VPC networks and Subnets need to be created in advance under your TM CAE account.</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-32.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-32.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-32.png</figcaption></figure>
<p><strong>DR configuration step 5</strong> Associat Policy;  Associate the corresponding disaster recovery policy with the standby host (association can be skipped for now). If there is no policy, you can create a new one. After completion, click the <strong>&quot;Submit&quot;</strong> button.</p>
<blockquote>
<p>Before starting the policy configuration, the hosts that have already been configured will automatically enter the <strong>&quot;Start DR&quot;</strong> phase.</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-33.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-33.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-33.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-34.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-34.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-34.png</figcaption></figure>
<blockquote>
<p>After completing the disaster recovery configuration, you can still choose to modify the disaster recovery configuration for the host in the <strong>&quot;Action&quot;</strong> section.</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-35.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-35.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-35.png</figcaption></figure>
<hr>
<h3 id="_4-2-data-synchronization-full-incremental" tabindex="-1"><a class="header-anchor" href="#_4-2-data-synchronization-full-incremental"><span>4.2. Data Synchronization (Full / Incremental)</span></a></h3>
<p>In the <strong>&quot;Start DR&quot;</strong> step, you can select one or more hosts to be protected against disasters, and click on the <strong>&quot;Sync&quot;</strong> button to synchronize data:</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-36.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-36.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-36.png</figcaption></figure>
<p>Confirm the disaster recovery hosts that need to be synchronized and click on the <strong>&quot;Submit&quot;</strong> button:</p>
<blockquote>
<p>For the first synchronization, full data will be synchronized. For subsequent synchronizations, incremental data will be synchronized. You can also select run full synchronization, which means that all data will be synchronized during this synchronization.</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-37.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-37.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-37.png</figcaption></figure>
<p>Wait for the data synchronization of the disaster recovery hosts to complete.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-38.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-38.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-38.png</figcaption></figure>
<hr>
<h3 id="_4-3-dr-drill-dr-takeover" tabindex="-1"><a class="header-anchor" href="#_4-3-dr-drill-dr-takeover"><span>4.3. DR Drill / DR Takeover</span></a></h3>
<p>After the data synchronization (snapshot synchronization) is completed, select the host and click on the <strong>&quot;Drill&quot;</strong> / <strong>&quot;Takeover&quot;</strong>  button accordingly:</p>
<blockquote>
<p>The  <strong>&quot;Drill&quot;</strong> / <strong>&quot;Takeover&quot;</strong>  functions are consistent, these functions indicate starting the disaster recovery host on the disaster recovery platform, and relevant verification and takeover work can be performed after the start.</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-39.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-39.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-39.png</figcaption></figure>
<p>Select the snapshot time point when starting the disaster recovery hosts and click on the <strong>&quot;Submit&quot;</strong> button to start the host instance.</p>
<blockquote>
<p><strong>Note:</strong> This action will start an instance on the TM CAE platform according to the disaster recovery parameters set for this disaster recovery host. This instance is a host recovered to the cloud. The snapshot time point is generated each time data is synchronized and is used for selection during startup. (The number of reserved snapshot time points can be configured as needed.)</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-40.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-40.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-40.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-41.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-41.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-41.png</figcaption></figure>
<hr>
<h3 id="_4-4-view-disaster-recovery-result" tabindex="-1"><a class="header-anchor" href="#_4-4-view-disaster-recovery-result"><span>4.4. View Disaster Recovery Result</span></a></h3>
<p>After the disaster recovery host is started, if the host startup status displays the relevant configuration information of the host on the disaster recovery platform, it means that the disaster recovery drill/disaster recovery takeover was successful. You can log in to TM CAE or click on <strong>&quot;Remote Login&quot;</strong> to view the running status of the disaster recovery host:</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-42.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-42.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-42.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-43.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-43.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-43.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-44.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-44.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-44.png</figcaption></figure>
<h3 id="_4-5-clean-up-verification-host" tabindex="-1"><a class="header-anchor" href="#_4-5-clean-up-verification-host"><span>4.5. Clean Up Verification Host</span></a></h3>
<p>Select the host that needs to be <strong>&quot;Clean Up Verification Host&quot;</strong>, and in the <strong>&quot;Action&quot;</strong> section, click on the <strong>&quot;Clean Up Verification Host&quot;</strong> option. Wait for the cleaning process to complete.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-45.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-45.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-45.png</figcaption></figure>
<hr>
<h2 id="_5-host-group-disaster-recovery" tabindex="-1"><a class="header-anchor" href="#_5-host-group-disaster-recovery"><span>5. Host Group Disaster Recovery</span></a></h2>
<p>Host group disaster recovery is mainly applicable to groups of disaster recovery host resources with similar attributes and requirements. These groups can be based on business units or other dimensions of resource sets. All operational configurations are done at the host group level. This includes setting up host group synchronization strategies, where all disaster recovery host data synchronization commands within the group are issued simultaneously to ensure that all host data in the host group remains consistent at the underlying level.</p>
<blockquote>
<p>When adding a disaster recovery host to host group disaster recovery, it is necessary to ensure that the single host disaster recovery configuration is completed before it can be added to the disaster recovery host group. Otherwise, it cannot be directly added to the host group disaster recovery.</p>
</blockquote>
<h3 id="_5-1-create-host-group" tabindex="-1"><a class="header-anchor" href="#_5-1-create-host-group"><span>5.1 Create Host Group</span></a></h3>
<p>Go to the <strong>&quot;Group DR&quot;</strong> on the left menu bar and then click the <strong>&quot;+Add&quot;</strong> button:
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-46.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-46.png" loading="lazy"></p>
<p><strong>Step1: Basic Info</strong>
Configure basic information for the Host Group, including <strong>&quot;Name&quot;</strong> and <strong>&quot;Description.&quot;</strong> You can add information in these two sections according to your needs. Then, click the <strong>&quot;Next&quot;</strong> button.
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-47.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-47.png" loading="lazy"></p>
<p><strong>Step2: Select Hosts</strong>
Select the disaster recovery host resources that have completed the disaster recovery configuration on the left side. Click the <strong>&quot;Add Resource&quot;</strong> button to include the corresponding disaster recovery hosts in the resource group. Then, click the <strong>&quot;Next&quot;</strong> button.
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-48.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-48.png" loading="lazy"></p>
<p><strong>Step3: Associate Policy</strong>
Choose the policy used by the resource group. If a synchronization policy has been created in advance, you can select it directly. If not, click the <strong>&quot;Create Policy&quot;</strong> button to create a new disaster recovery policy.
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-49.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-49.png" loading="lazy"></p>
<p><strong>Step4: Boot Sequence</strong>
Adjust the startup sequence of the host resources in the associated resources on the left, and click <strong>&quot;Finish&quot;</strong> after confirmation.
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-50.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-50.png" loading="lazy"></p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-51.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-51.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-51.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-52.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-52.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-52.png</figcaption></figure>
<h3 id="_5-2-modify-host-group" tabindex="-1"><a class="header-anchor" href="#_5-2-modify-host-group"><span>5.2. Modify Host Group</span></a></h3>
<p>Click the <strong>&quot;Action&quot;</strong> button after selecting the resource group to modify the <strong>Basic Info</strong>, <strong>Select Hosts</strong>, <strong>Associate Policy</strong>, and <strong>Boot Sequence</strong> of the resource group.
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-53.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-53.png" loading="lazy"></p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-54.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-54.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-54.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-55.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-55.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-55.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-56.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-56.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-56.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-57.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-57.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-57.png</figcaption></figure>
<h3 id="_5-3-delete-host-group" tabindex="-1"><a class="header-anchor" href="#_5-3-delete-host-group"><span>5.3. Delete Host Group</span></a></h3>
<p>Go to [Group DR] and click the on “Delete Host group” button :
Check the resource group, and click the <strong>&quot;Delete Resource Group&quot;</strong> button to perform the operation of deleting the resource group.
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-58.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-58.png" loading="lazy"></p>
<p>According to the prompt for host group deletion, select the relevant configuration options, enter the character <strong>&quot;Yes&quot;</strong> to confirm deletion, then click the [Submit] button to complete deletion.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p><strong>Notes:</strong><br>
<strong>1:</strong> This operation only deletes the host group, and the resources in the host group will be retained. The disaster recovery hosts in the host group will still be displayed separately in the host disaster recovery, and the disaster recovery operation can still be performed on a single disaster recovery host, and the data that has been synchronized will not be cleared from the disaster recovery platform.<br>
<strong>2:</strong> This operation not only deletes the host group, but also the resources in the host group. The disaster recovery hosts in the host group will be directly cleared from the disaster recovery platform, and all synchronized data will be cleared.<br>
<strong>3:</strong> (Not recommended) I confirm that I want to force clean up resources, which may cause residual resources (only used when cleaning fails). [Use in special scenarios only such as disaster recovery hosts in the host group lose contact or cleaning fails. This option will directly clear the records without initiating a call request.]</p>
</div>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-59.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-59.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-59.png</figcaption></figure>
<h3 id="_5-4-host-group-–-data-synchronization" tabindex="-1"><a class="header-anchor" href="#_5-4-host-group-–-data-synchronization"><span>5.4. Host Group – Data Synchronization</span></a></h3>
<p>Select the configured host group, click the “Sync” button, and then the “Submit” button to perform data synchronization. You can also automatically perform data synchronization according to the configured Host Group Policy Management.</p>
<blockquote>
<p>For the disaster recovery hosts that are first added to the host group, it is necessary to perform data synchronization even if the data synchronization operation has been performed in the Host Disaster Recovery during the disaster recovery process.</p>
</blockquote>
<blockquote>
<p>The synchronization policy of the host group will automatically execute data synchronization tasks according to policy settings.</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-60.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-60.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-60.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-61.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-61.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-61.png</figcaption></figure>
<h3 id="_5-5-host-group-dr-drill-takeover" tabindex="-1"><a class="header-anchor" href="#_5-5-host-group-dr-drill-takeover"><span>5.5. Host Group - DR Drill / Takeover</span></a></h3>
<p>Wait for data synchronization to complete (synchronization snapshot completed), check the host group that needs to be disaster recovery drilled/taken over, then click on the <strong>&quot;Drill&quot;</strong> / <strong>&quot;Takeover&quot;</strong> button.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Note: For disaster recovery hosts that are first added to the host group, it is necessary to perform data synchronization operation, otherwise it will not be possible to perform disaster recovery drill/takeover even if the disaster recovery hosts in the host group have already performed data synchronization operation during Host Disaster Recovery.</p>
</div>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-62.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-62.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-62.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-63.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-63.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-63.png</figcaption></figure>
<p>In the pop-up box, select the synchronization time point snapshot copy, after confirming that the information is correct, click the <strong>&quot;Submit&quot;</strong> button.</p>
<blockquote>
<p>The synchronization time point records the recoverable data time point for each snapshot copy generated after each data synchronization is completed.</p>
</blockquote>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-64.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-64.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-64.png</figcaption></figure>
<p>When the host group status showing disaster recovery drill / takeover is completed, you can log in to the disaster recovery platform for drill and takeover operations.
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-65.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-65.png" loading="lazy"></p>
<h3 id="_5-6-host-group-clean-up-validation-resources" tabindex="-1"><a class="header-anchor" href="#_5-6-host-group-clean-up-validation-resources"><span>5.6. Host Group - Clean Up Validation Resources</span></a></h3>
<p>Check the resource group that needs to clean up and verify resources, click the <strong>&quot;Action&quot;</strong> button, and select the <strong>&quot;Clean Up Validation Resources&quot;</strong> button.</p>
<blockquote>
<p>This operation means that the disaster recovery hosts in the host group that have already performed disaster recovery drill / takeover and the disaster recovery host instances generated on the disaster recovery platform will be deleted. This action prevents the risk of manual operation of deleting instances on the disaster recovery platform.</p>
</blockquote>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>Note: If the disaster recovery host restored on the disaster recovery platform has taken over the business, <strong>do not</strong> perform this operation, as this operation will directly delete the instances generated on the disaster recovery platform.</p>
</div>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-66.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-66.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-66.png</figcaption></figure>
<p>After confirming that the resources to be cleaned on the disaster recovery platform are accurate, enter the character <strong>&quot;Yes&quot;</strong> in the input box to confirm and click the “Submit” button.
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-67.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-67.png" loading="lazy"></p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-68.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-68.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-68.png</figcaption></figure>
<h2 id="_6-policy-management" tabindex="-1"><a class="header-anchor" href="#_6-policy-management"><span>6. Policy Management</span></a></h2>
<h3 id="_6-1-create-policy" tabindex="-1"><a class="header-anchor" href="#_6-1-create-policy"><span>6.1. Create Policy</span></a></h3>
<p>Click <strong>&quot;Configuration&quot;</strong> on the top menu bar, select <strong>&quot;Policy Settings&quot;</strong> on the left, and click <strong>&quot;Create Policy&quot;</strong>.
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-69.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-69.png" loading="lazy"></p>
<p>The Create Policy page allows you to modify various parameters of the policy configuration.</p>
<h4 id="_6-1-1-policy-name、snapshot-retain-count、policy-status" tabindex="-1"><a class="header-anchor" href="#_6-1-1-policy-name、snapshot-retain-count、policy-status"><span>6.1.1 Policy Name、Snapshot Retain Count、Policy Status</span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:center"><strong>Parameter</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Policy Name</td>
<td>Fill in the synchronization policy name and customize the configuration, which can be shared by other disaster recovery host groups.</td>
</tr>
<tr>
<td style="text-align:center">Snapshot Retain Count</td>
<td>The range of snapshot quantities is an integer between 1 and 128; if not set, the default is 128. Once the number of snapshots reaches the set quota, deletion will start from the earliest snapshot, always maintaining the set number of snapshots.</td>
</tr>
<tr>
<td style="text-align:center">Policy Status</td>
<td>Control the activation and deactivation of the synchronization policy.</td>
</tr>
</tbody>
</table>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-70.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-70.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-to-tm-cae-object-storage-70.png</figcaption></figure>
<h4 id="_6-1-2-synchronization-policy" tabindex="-1"><a class="header-anchor" href="#_6-1-2-synchronization-policy"><span>6.1.2 Synchronization Policy</span></a></h4>
<p>Check **Synchronization Policy : Incremental Synchronization, **You can enable and configure parameters for the incremental synchronization policy.
Check **Synchronization Policy : Full Synchronization, **You can enable and configure parameters for the full synchronization policy.
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-to-tm-cae-object-storage-71.png" alt="hyperbdr-user-guide-to-tm-cae-object-storage-71.png" loading="lazy"></p>
<table>
<thead>
<tr>
<th style="text-align:center"><strong>Parameter</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Cycle</td>
<td>Sync policy execution cycle can be set to <strong>Every N minutes</strong>, <strong>Every N hours</strong>, <strong>Every N days</strong>, <strong>Weekly</strong>, <strong>Monthly</strong> for setting the triggering conditions for periodic sync tasks.</td>
</tr>
<tr>
<td style="text-align:center">Minutes</td>
<td>You can configure it when the <strong>Cycle</strong> is set to <strong>Every N minutes</strong>. <br> Execute once every N minutes, where N is an integer in the range [5-59].</td>
</tr>
<tr>
<td style="text-align:center">Hours Amount</td>
<td>You can configure it when the <strong>Cycle</strong> is set to <strong>Every N hours</strong>. <br> Execute once every N hours, where N is an integer in the range [1-23].</td>
</tr>
<tr>
<td style="text-align:center">Day</td>
<td>You can configure it when the <strong>Cycle</strong> is set to <strong>Every N days</strong>. <br> Execute once every N hours, where N is an integer in the range [1-30].</td>
</tr>
<tr>
<td style="text-align:center">Date（Weekly）</td>
<td>You can configure it when the <strong>Cycle</strong> is set to <strong>Weekly</strong>. <br> Execute the synchronization policy on one day or days of the week every n week. <br> Execute once a week, where N can take values in the range [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday], and multiple selections are allowed.</td>
</tr>
<tr>
<td style="text-align:center">Date（Mouthly）</td>
<td>You can configure it when the <strong>Cycle</strong> is set to <strong>Mouthly</strong>. <br> Execute every certain date of the month, where the selectable range is [1-31, end of the month], and multiple selections are allowed. <br> <strong>29</strong>: The current option will only be executed in leap years of February and will be skipped in other years of February. <br> <strong>30</strong>: The current option will not be executed in February. <br> <strong>31</strong>: Only executes in January, March, May, July, August, October and December. <br> <strong>E.O.M</strong>: The current option will be executed in the last day of each month.</td>
</tr>
<tr>
<td style="text-align:center">Start Time</td>
<td>You can configure it when the <strong>Cycle</strong> is set to <strong>Every N minutes <strong>or</strong> Every N hours</strong>. <br> Setting the Start Time for Synchronization.</td>
</tr>
<tr>
<td style="text-align:center">Time（Weekly）</td>
<td>You can configure it when the <strong>Cycle</strong> is set to <strong>Weekly</strong>. <br> Setting the Start Time for Synchronization.</td>
</tr>
<tr>
<td style="text-align:center">Time（Mouthly）</td>
<td>You can configure it when the <strong>Cycle</strong> is set to <strong>Mouthly</strong>. <br> Setting the Start Time for Synchronization.</td>
</tr>
</tbody>
</table>
<h4 id="_6-1-3-speed-limit-policy" tabindex="-1"><a class="header-anchor" href="#_6-1-3-speed-limit-policy"><span>6.1.3 Speed Limit Policy</span></a></h4>
<p>Support Multi-time period speed limiting(Supports setting different speed limits for different time periods within the same cycle, only supports selecting one cycle mode.)</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-69.png" alt="hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-69.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-69.png</figcaption></figure>
<table>
<thead>
<tr>
<th><strong>Parameter</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Cycle</td>
<td>Speed Limit Policy execution cycle can be set to <strong>Every N days</strong>, <strong>Weekly</strong>, <strong>Monthly</strong> for setting the triggering conditions for speed limit tasks.</td>
</tr>
<tr>
<td>Day</td>
<td>You can configure it when the <strong>Cycle</strong> is set to <strong>Every N days</strong>. <br> Execute once every N days, where N is an integer in the range [1-30].</td>
</tr>
<tr>
<td>Date（Weekly）</td>
<td>You can configure it when the <strong>Cycle</strong> is set to <strong>Weekly</strong>. <br> Execute the speed limit policy on one day or days of the week every n week. <br> Execute once a week, where N can take values in the range [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday], and multiple selections are allowed.</td>
</tr>
<tr>
<td>Date（Monthly）</td>
<td>You can configure it when the <strong>Cycle</strong> is set to <strong>Mouthly</strong>. <br> Execute every certain date of the month, where the selectable range is [1-31, end of the month], and multiple selections are allowed. <br> <strong>29</strong>: The current option will only be executed in leap years of February and will be skipped in other years of February. <br> <strong>30</strong>: The current option will not be executed in February. <br> <strong>31</strong>: Only executes in January, March, May, July, August, October and December. <br> <strong>E.O.M</strong>: The current option will be executed in the last day of each month.</td>
</tr>
<tr>
<td>Speed Limit Time</td>
<td>Set the time for speed limit tasks</td>
</tr>
<tr>
<td>Host Speed Limit</td>
<td>The host speed limit value should be an integer ≥1. Unit: Mbps</td>
</tr>
</tbody>
</table>
<h4 id="_6-1-4-retention-policy" tabindex="-1"><a class="header-anchor" href="#_6-1-4-retention-policy"><span>6.1.4 Retention Policy</span></a></h4>
<p>Check <strong>&quot;Sequence Retention&quot;</strong>, enabling and configuring the snapshot retention policy. (Set snapshot retention based on sequence to retain snapshots at specific time points for a specified duration. For example, retain the first snapshot of each month for 3 weeks. Note: Ensure sufficient quota is available for creating new snapshots during the setup, otherwise data synchronization may fail.)</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-70.png" alt="hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-70.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-70.png</figcaption></figure>
<h3 id="_6-2-modify-policy" tabindex="-1"><a class="header-anchor" href="#_6-2-modify-policy"><span>6.2. Modify Policy</span></a></h3>
<p>Check the created Policy, click on <strong>&quot;Action,&quot;</strong> select <strong>&quot;Modify,&quot;</strong> and you can modify the parameters of the policy.
<img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-71.png" alt="hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-71.png" loading="lazy"></p>
<h3 id="_6-3-policy-associated-host" tabindex="-1"><a class="header-anchor" href="#_6-3-policy-associated-host"><span>6.3. Policy Associated Host</span></a></h3>
<p>Select the created policy, click on <strong>&quot;Action,&quot;</strong> choose <strong>&quot;Associate Host,&quot;</strong> check the hosts that are not associated with the strategy, and click <strong>&quot;Submit&quot;</strong> to establish the association.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-72.png" alt="hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-72.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-72.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-73.png" alt="hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-73.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-73.png</figcaption></figure>
<h3 id="_6-4-delete-policy" tabindex="-1"><a class="header-anchor" href="#_6-4-delete-policy"><span>6.4. Delete Policy</span></a></h3>
<p>Select the created policy, click on <strong>&quot;Action,&quot;</strong> choose <strong>&quot;Delete,&quot;</strong> and click <strong>&quot;Submit&quot;</strong> to delete the that is not associated with any hosts.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-74.png" alt="hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-74.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-74.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-75.png" alt="hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-75.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-75.png</figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If the policy is already associated with resources (hosts, resource groups), deletion is not supported. Please unbind the associated resources (hosts, resource groups) before deleting them.</p>
</div>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-76.png" alt="hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-76.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-76.png</figcaption></figure>
<h3 id="_6-5-policy-unbind-associated-resources-host-resource-group" tabindex="-1"><a class="header-anchor" href="#_6-5-policy-unbind-associated-resources-host-resource-group"><span>6.5 Policy Unbind Associated Resources (Host, Resource Group)</span></a></h3>
<p>Click on the policy name, select the <strong>&quot;Associate Hosts&quot;</strong> or <strong>&quot;Associate Resource Group&quot;</strong> tab, check the resources to unbind, click the <strong>&quot;Unbind Hosts&quot;</strong> or <strong>&quot;Unbind Resource Group&quot;</strong> button, and confirm to unbind the associated resources.</p>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-77.png" alt="hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-77.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-77.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-78.png" alt="hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-78.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-78.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-79.png" alt="hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-79.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-79.png</figcaption></figure>
<figure><img src="@source/userguide/dr-usage-guide/images/hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-80.png" alt="hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-80.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-user-guide-vmware-to-huawei-cloud-object-storage-mode-80.png</figcaption></figure>
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


