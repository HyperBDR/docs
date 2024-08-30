<template><div><h1 id="vmware-pre-settings" tabindex="-1"><a class="header-anchor" href="#vmware-pre-settings"><span>VMware Pre-Settings</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#vmware-environemnt-preparation">VMware Environemnt Preparation</router-link></li><li><router-link to="#vmware-user-permission-requirements">VMware User Permission Requirements</router-link><ul><li><router-link to="#why-do-we-need-the-permissions">Why do we need the permissions?</router-link></li><li><router-link to="#vmware-user-permission">VMware User Permission</router-link></li><li><router-link to="#vcenter-permission-open-settings-steps">vCenter Permission Open Settings Steps</router-link></li><li><router-link to="#fill-in-hyperbdr-console">Fill in HyperBDR Console</router-link></li></ul></li><li><router-link to="#download-the-ova-images">Download The OVA Images</router-link></li><li><router-link to="#import-ova-images-and-create-sync-proxy-virtual-machine-in-vmware">Import OVA Images and Create Sync Proxy Virtual Machine in VMware</router-link><ul><li><router-link to="#deploy-vof-template">Deploy VOF template</router-link></li><li><router-link to="#modify-the-sync-proxy-vm-flavors">Modify the Sync Proxy VM Flavors</router-link></li><li><router-link to="#power-on-the-sync-proxy-vm">Power On the Sync Proxy VM</router-link></li></ul></li><li><router-link to="#frequently-asked-questions">Frequently Asked Questions</router-link><ul><li><router-link to="#how-many-hosts-can-a-single-sync-proxy-support-for-data-synchronization">How many hosts can a single Sync Proxy support for data synchronization?</router-link></li></ul></li></ul></nav>
<h2 id="vmware-environemnt-preparation" tabindex="-1"><a class="header-anchor" href="#vmware-environemnt-preparation"><span>VMware Environemnt Preparation</span></a></h2>
<ol>
<li>Export host information via vCenter: <RouteLink to="/userguide/presales/hyperbdr-vmware-investigation.html">VMware Quick Investigation</RouteLink></li>
<li>Fill in detail VM host information based on the export inf, which will be used for DR setup .</li>
</ol>
<h2 id="vmware-user-permission-requirements" tabindex="-1"><a class="header-anchor" href="#vmware-user-permission-requirements"><span>VMware User Permission Requirements</span></a></h2>
<h3 id="why-do-we-need-the-permissions" tabindex="-1"><a class="header-anchor" href="#why-do-we-need-the-permissions"><span>Why do we need the permissions?</span></a></h3>
<p>The need for these permissions arises from HyperBDR's utilization of VMware CBT (Change Block Tracking) technology for incremental data synchronization. CBT is a technique employed in VMware to facilitate incremental backup and replication. It effectively tracks the blocks that have undergone changes on a virtual disk, enabling the transmission of only the data associated with these changes during the backup and replication processes.</p>
<h3 id="vmware-user-permission" tabindex="-1"><a class="header-anchor" href="#vmware-user-permission"><span>VMware User Permission</span></a></h3>
<p>Prepare the VMware user authentication information for data synchronization and ensure that the user has the necessary permissions.</p>
<p>Provide VMware user with following permissions:</p>
<table>
<thead>
<tr>
<th>Permission Type</th>
<th>Permissions</th>
</tr>
</thead>
<tbody>
<tr>
<td>Host Profile</td>
<td>View host configuration files</td>
</tr>
<tr>
<td>Global</td>
<td>Enable method</td>
</tr>
<tr>
<td></td>
<td>Disable method</td>
</tr>
<tr>
<td></td>
<td>License management</td>
</tr>
<tr>
<td>Content Library</td>
<td>Download files</td>
</tr>
<tr>
<td></td>
<td>Update configuration settings</td>
</tr>
<tr>
<td></td>
<td>View configuration settings</td>
</tr>
<tr>
<td></td>
<td>Read storage</td>
</tr>
<tr>
<td>Scheduled Tasks</td>
<td>Create tasks</td>
</tr>
<tr>
<td>Data Storage</td>
<td>Low-level file operations</td>
</tr>
<tr>
<td></td>
<td>Update virtual machine metadata</td>
</tr>
<tr>
<td></td>
<td>Update virtual machine files</td>
</tr>
<tr>
<td></td>
<td>Browse data storage</td>
</tr>
<tr>
<td>Virtual Machine</td>
<td>Interaction</td>
</tr>
<tr>
<td></td>
<td>Backup operation on virtual machine</td>
</tr>
<tr>
<td></td>
<td>Defragment all disks</td>
</tr>
<tr>
<td></td>
<td>Restore Fault Tolerance</td>
</tr>
<tr>
<td></td>
<td>Enable Fault Tolerance</td>
</tr>
<tr>
<td></td>
<td>Pause or Unpause</td>
</tr>
<tr>
<td></td>
<td>Perform Guest Operations via VIX API</td>
</tr>
<tr>
<td></td>
<td>Reset</td>
</tr>
<tr>
<td></td>
<td>Guest Operations</td>
</tr>
<tr>
<td></td>
<td>Modify guest operations</td>
</tr>
<tr>
<td></td>
<td>Query guest operations</td>
</tr>
<tr>
<td></td>
<td>Execute guest operation programs</td>
</tr>
<tr>
<td></td>
<td>Snapshot Management</td>
</tr>
<tr>
<td></td>
<td>Create snapshot</td>
</tr>
<tr>
<td></td>
<td>Remove snapshot</td>
</tr>
<tr>
<td></td>
<td>Configuration Changes</td>
</tr>
<tr>
<td></td>
<td>Modify device settings</td>
</tr>
<tr>
<td></td>
<td>Toggle fork parent</td>
</tr>
<tr>
<td></td>
<td>Toggle disk change tracking</td>
</tr>
<tr>
<td></td>
<td>Reload based on path</td>
</tr>
<tr>
<td></td>
<td>Display connection settings</td>
</tr>
<tr>
<td></td>
<td>Modify Settings</td>
</tr>
<tr>
<td></td>
<td>Modify resources</td>
</tr>
<tr>
<td></td>
<td>Query Fault Tolerance compatibility</td>
</tr>
<tr>
<td></td>
<td>Query unowned files</td>
</tr>
<tr>
<td></td>
<td>Retrieve disk lease</td>
</tr>
<tr>
<td></td>
<td>Configure managedBy</td>
</tr>
<tr>
<td></td>
<td>Reset guest information</td>
</tr>
<tr>
<td></td>
<td>Advanced configuration</td>
</tr>
<tr>
<td></td>
<td>Service Configuration</td>
</tr>
<tr>
<td></td>
<td>Modify service configuration</td>
</tr>
<tr>
<td></td>
<td>Query service configuration</td>
</tr>
<tr>
<td></td>
<td>Manage service configuration</td>
</tr>
<tr>
<td></td>
<td>Read service configuration</td>
</tr>
<tr>
<td>Provisioning</td>
<td>Allow virtual machine download</td>
</tr>
<tr>
<td></td>
<td>Allow read-only access to disks</td>
</tr>
<tr>
<td></td>
<td>Allow file access</td>
</tr>
<tr>
<td></td>
<td>Allow disk access</td>
</tr>
<tr>
<td></td>
<td>Customize guest</td>
</tr>
<tr>
<td></td>
<td>Read customization specification</td>
</tr>
</tbody>
</table>
<h3 id="vcenter-permission-open-settings-steps" tabindex="-1"><a class="header-anchor" href="#vcenter-permission-open-settings-steps"><span>vCenter Permission Open Settings Steps</span></a></h3>
<h4 id="step-01-log-in-to-the-vcenter-administrator-console" tabindex="-1"><a class="header-anchor" href="#step-01-log-in-to-the-vcenter-administrator-console"><span>Step 01: Log in to the vCenter Administrator Console</span></a></h4>
<h4 id="step-02-add-access-users" tabindex="-1"><a class="header-anchor" href="#step-02-add-access-users"><span>Step 02: Add Access Users</span></a></h4>
<p>Click on <strong>&quot;Menu&quot;</strong>, <strong>&quot;Administration&quot;</strong></p>
<figure><img src="@source/userguide/poc/images/create-vmware-account-1.png" alt="create-vmware-account-1.png" tabindex="0" loading="lazy"><figcaption>create-vmware-account-1.png</figcaption></figure>
<p>Click on the left-hand menu <strong>&quot;Users and Groups&quot;</strong>, select <strong>&quot;Users&quot;</strong> tab, choose the <strong>&quot;Domain&quot;</strong> associated with the correct login for vCenter, and click the <strong>&quot;Add&quot;</strong> button.</p>
<figure><img src="@source/userguide/poc/images/create-vmware-account-2.png" alt="create-vmware-account-2.png" tabindex="0" loading="lazy"><figcaption>create-vmware-account-2.png</figcaption></figure>
<p>Follow the prompts to enter the Username, Password, Confirm Password, and any other optional information. Then, click the <strong>&quot;Add&quot;</strong> button.</p>
<figure><img src="@source/userguide/poc/images/create-vmware-account-3.png" alt="create-vmware-account-3.png" tabindex="0" loading="lazy"><figcaption>create-vmware-account-3.png</figcaption></figure>
<h4 id="step-03-add-access-control-roles" tabindex="-1"><a class="header-anchor" href="#step-03-add-access-control-roles"><span>Step 03: Add Access Control Roles</span></a></h4>
<p>On the left-hand menu, go to <strong>&quot;Access Control&quot;</strong>, <strong>&quot;Roles&quot;</strong>. Under <strong>&quot;Role Provider&quot;</strong>, select the vCenter address, and click the <strong>&quot;+&quot;</strong> button.</p>
<figure><img src="@source/userguide/poc/images/create-vmware-account-4.png" alt="create-vmware-account-4.png" tabindex="0" loading="lazy"><figcaption>create-vmware-account-4.png</figcaption></figure>
<p>Refer to &quot;<a href="https://docs.oneprocloud.com/userguide/poc/vmware-pre-settings.html#vmware-user-permission" target="_blank" rel="noopener noreferrer">VMware User Permission</a>&quot; and select the appropriate settings. Then, click the &quot;NEXT&quot; button.</p>
<figure><img src="@source/userguide/poc/images/create-vmware-account-5.png" alt="create-vmware-account-5.png" tabindex="0" loading="lazy"><figcaption>create-vmware-account-5.png</figcaption></figure>
<p>Set a new Role name and Description, then click the <strong>&quot;FINISH&quot;</strong> button.</p>
<figure><img src="@source/userguide/poc/images/create-vmware-account-6.png" alt="create-vmware-account-6.png" tabindex="0" loading="lazy"><figcaption>create-vmware-account-6.png</figcaption></figure>
<h4 id="step-04-add-permissions-to-vcenter" tabindex="-1"><a class="header-anchor" href="#step-04-add-permissions-to-vcenter"><span>Step 04: Add Permissions to vCenter</span></a></h4>
<p>In <strong>&quot;Hosts and Clusters&quot;</strong>, find the top-level <strong>&quot;vCenter IP&quot;</strong> on the left-hand menu, select it, and click on the <strong>&quot;Permissions&quot;</strong> menu on the right. Then, click the <strong>&quot;+&quot;</strong> button.</p>
<figure><img src="@source/userguide/poc/images/create-vmware-account-7.png" alt="create-vmware-account-7.png" tabindex="0" loading="lazy"><figcaption>create-vmware-account-7.png</figcaption></figure>
<p>Follow the prompts to choose the domain for user authorization, keeping it consistent with the previous steps. Search for the <strong>&quot;dr&quot;</strong> user to be added. Select the <strong>&quot;DR Role Permissions&quot;</strong> for the role and check the box for &quot;Propagate to Child&quot;. Then, click the &quot;OK&quot; button.</p>
<figure><img src="@source/userguide/poc/images/create-vmware-account-8.png" alt="create-vmware-account-8.png" tabindex="0" loading="lazy"><figcaption>create-vmware-account-8.png</figcaption></figure>
<p>After the addition is complete, provide the vCenter access address, <strong>&quot;dr&quot;</strong> user, and login password to <strong>HyperBDR Console</strong>.</p>
<h3 id="fill-in-hyperbdr-console" tabindex="-1"><a class="header-anchor" href="#fill-in-hyperbdr-console"><span>Fill in HyperBDR Console</span></a></h3>
<p>Then fill in the authentication information of this account to the HyperBDR Console DR Platform later, including:</p>
<ul>
<li>vCenter IP</li>
<li>vCenter usename</li>
<li>vCenter password</li>
</ul>
<h2 id="download-the-ova-images" tabindex="-1"><a class="header-anchor" href="#download-the-ova-images"><span>Download The OVA Images</span></a></h2>
<p>Download the template file for installing <strong>Sync Proxy</strong> node (OVA)</p>
<ul>
<li><a href="https://hyperbdr-system-image-do-not-delete.obs.ap-southeast-3.myhuaweicloud.com/proxy-agent_BaseOS.ova" target="_blank" rel="noopener noreferrer">proxy-agent_BaseOS.ova</a></li>
</ul>
<h2 id="import-ova-images-and-create-sync-proxy-virtual-machine-in-vmware" tabindex="-1"><a class="header-anchor" href="#import-ova-images-and-create-sync-proxy-virtual-machine-in-vmware"><span>Import OVA Images and Create <strong>Sync Proxy</strong> Virtual Machine in VMware</span></a></h2>
<h3 id="deploy-vof-template" tabindex="-1"><a class="header-anchor" href="#deploy-vof-template"><span>Deploy VOF template</span></a></h3>
<p>select the your ESXis or Datacenter Name, Right click, select the <strong>&quot;Deploy OVF Template..&quot;</strong></p>
<figure><img src="@source/userguide/poc/images/vmware-pre-settings-1.png" alt="vmware-pre-settings-1.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-1.png</figcaption></figure>
<h4 id="step01-select-an-ovf-template" tabindex="-1"><a class="header-anchor" href="#step01-select-an-ovf-template"><span>Step01: Select an OVF template</span></a></h4>
<p>Click the <strong>&quot;Local file&quot;</strong> system, and click the <strong>&quot;select file&quot;</strong> button, select the ova template downloaded locally in advance, download OVA template name is <strong>&quot;proxy-agent_BaseOS.ova&quot;</strong>.</p>
<figure><img src="@source/userguide/poc/images/vmware-pre-settings-2.png" alt="vmware-pre-settings-2.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-2.png</figcaption></figure>
<h4 id="step02-select-a-name-and-folder" tabindex="-1"><a class="header-anchor" href="#step02-select-a-name-and-folder"><span>Step02: Select a name and folder</span></a></h4>
<p>You can give this vm a name, like <strong>&quot;proxy-agent_BaseOS&quot;</strong>, then select a location for the virtual machine.</p>
<figure><img src="@source/userguide/poc/images/vmware-pre-settings-3.png" alt="vmware-pre-settings-3.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-3.png</figcaption></figure>
<h4 id="step03-select-a-compute-resource" tabindex="-1"><a class="header-anchor" href="#step03-select-a-compute-resource"><span>Step03: Select a compute resource</span></a></h4>
<p>Select the destination compute resource for the created VM.</p>
<figure><img src="@source/userguide/poc/images/vmware-pre-settings-4.png" alt="vmware-pre-settings-4.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-4.png</figcaption></figure>
<h4 id="step04-review-details" tabindex="-1"><a class="header-anchor" href="#step04-review-details"><span>Step04: Review details</span></a></h4>
<p>Verify the template details.</p>
<figure><img src="@source/userguide/poc/images/vmware-pre-settings-5.png" alt="vmware-pre-settings-5.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-5.png</figcaption></figure>
<h4 id="step05-select-storage" tabindex="-1"><a class="header-anchor" href="#step05-select-storage"><span>Step05: Select storage</span></a></h4>
<p>Select the storage for the configuration and disk files.</p>
<figure><img src="@source/userguide/poc/images/vmware-pre-settings-6.png" alt="vmware-pre-settings-6.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-6.png</figcaption></figure>
<h4 id="step06-select-networks" tabindex="-1"><a class="header-anchor" href="#step06-select-networks"><span>Step06: Select networks</span></a></h4>
<p>Select a destination network for each source network.</p>
<figure><img src="@source/userguide/poc/images/vmware-pre-settings-7.png" alt="vmware-pre-settings-7.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-7.png</figcaption></figure>
<h4 id="step07-ready-to-complete" tabindex="-1"><a class="header-anchor" href="#step07-ready-to-complete"><span>Step07: Ready to complete</span></a></h4>
<p>Confirm the created information then click <strong>&quot;Finish&quot;</strong> to start creation.</p>
<figure><img src="@source/userguide/poc/images/vmware-pre-settings-8.png" alt="vmware-pre-settings-8.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-8.png</figcaption></figure>
<h4 id="review-import-ovf-template-tasks" tabindex="-1"><a class="header-anchor" href="#review-import-ovf-template-tasks"><span>Review import OVF template tasks</span></a></h4>
<ul>
<li><strong>&quot;Import OVF package&quot;</strong> and <strong>&quot;Deploy OVF template&quot;</strong> task is progress.</li>
</ul>
<figure><img src="@source/userguide/poc/images/vmware-pre-settings-9.png" alt="vmware-pre-settings-9.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-9.png</figcaption></figure>
<ul>
<li><strong>&quot;Import OVF package&quot;</strong> and <strong>&quot;Deploy OVF template&quot;</strong> task status completed.</li>
</ul>
<figure><img src="@source/userguide/poc/images/vmware-pre-settings-10.png" alt="vmware-pre-settings-10.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-10.png</figcaption></figure>
<h3 id="modify-the-sync-proxy-vm-flavors" tabindex="-1"><a class="header-anchor" href="#modify-the-sync-proxy-vm-flavors"><span>Modify the Sync Proxy VM Flavors</span></a></h3>
<ul>
<li>Click the VM name, then right click, select the <strong>&quot;Edit Settings...&quot;</strong>.</li>
</ul>
<figure><img src="@source/userguide/poc/images/vmware-pre-settings-11.png" alt="vmware-pre-settings-11.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-11.png</figcaption></figure>
<ul>
<li>Modify the CPU to 4 core, Memory to 8GB, Hard disk 1 size to 100GB.</li>
</ul>
<figure><img src="@source/userguide/poc/images/vmware-pre-settings-12.png" alt="vmware-pre-settings-12.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-12.png</figcaption></figure>
<h3 id="power-on-the-sync-proxy-vm" tabindex="-1"><a class="header-anchor" href="#power-on-the-sync-proxy-vm"><span>Power On the Sync Proxy VM</span></a></h3>
<ul>
<li>Select the VM name, then right click, click the <strong>&quot;Power&quot;</strong>, <strong>&quot;Power On&quot;</strong>.</li>
</ul>
<figure><img src="@source/userguide/poc/images/vmware-pre-settings-13.png" alt="vmware-pre-settings-13.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-13.png</figcaption></figure>
<p>Next step, you can configration the Sync Proxy node IP Address.</p>
<h2 id="frequently-asked-questions" tabindex="-1"><a class="header-anchor" href="#frequently-asked-questions"><span>Frequently Asked Questions</span></a></h2>
<h3 id="how-many-hosts-can-a-single-sync-proxy-support-for-data-synchronization" tabindex="-1"><a class="header-anchor" href="#how-many-hosts-can-a-single-sync-proxy-support-for-data-synchronization"><span>How many hosts can a single Sync Proxy support for data synchronization?</span></a></h3>
<p>The Sync Proxy limits data synchronization based on the number of disks on the source host. According to best practices for the project, to ensure timely synchronization, each 4-core 8GB Sync Proxy can support up to 50 disks simultaneously. You can also increase the Sync Proxy specifications, such as using an 8-core 16GB host, to support the simultaneous synchronization of 100 disks.</p>
<p><a href="https://qa.oneprocloud.com/questions/D1p4/E1r4" target="_blank" rel="noopener noreferrer">How can I increse max mounts disks in sync proxy?</a></p>
</div></template>


