<template><div><h1 id="huawei-cloud-pre-settings" tabindex="-1"><a class="header-anchor" href="#huawei-cloud-pre-settings"><span>Huawei Cloud Pre-Settings</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#create-huawei-cloud-iam-account-for-dr-purpose">Create Huawei Cloud IAM account for DR purpose</router-link><ul><li><router-link to="#create-iam-user">Create IAM User</router-link></li><li><router-link to="#granting-authorization-to-iam-user">Granting Authorization to IAM User</router-link></li><li><router-link to="#managing-iam-user-access-keys">Managing IAM User Access Keys</router-link></li><li><router-link to="#huawei-cloud-iam-permission-requirements">Huawei Cloud IAM Permission Requirements</router-link></li></ul></li><li><router-link to="#configure-vpc-subnet">Configure VPC &amp; Subnet</router-link></li><li><router-link to="#create-hyperbdr-security-group">Create HyperBDR Security Group</router-link><ul><li><router-link to="#create-security-group-rules">Create Security Group Rules</router-link></li></ul></li><li><router-link to="#create-ecs-for-hyperbdr">Create ECS for HyperBDR</router-link><ul><li><router-link to="#log-in-to-the-huawei-cloud-console">Log in to the Huawei Cloud Console</router-link></li><li><router-link to="#create-ecs-cloud-instance-based-on-configuration-information">Create ECS Cloud Instance based on Configuration Information</router-link></li></ul></li><li><router-link to="#image-download-upload">Image Download &amp; Upload</router-link><ul><li><router-link to="#image-download">Image Download</router-link></li><li><router-link to="#image-info">Image Info</router-link></li><li><router-link to="#upload-image-to-huawei-cloud-object-storage">Upload Image to Huawei Cloud Object Storage</router-link></li><li><router-link to="#import-image">Import Image</router-link></li></ul></li><li><router-link to="#vpn-setup">VPN Setup</router-link></li><li><router-link to="#create-huawei-vpc-endpoint">Create Huawei VPC Endpoint</router-link><ul><li><router-link to="#configure-dns-interface-type-for-terminal-endpoints">Configure DNS Interface Type for Terminal Endpoints</router-link></li><li><router-link to="#selection-of-obs-gateway-type-terminal-endpoint">Selection of OBS Gateway-type Terminal Endpoint</router-link></li><li><router-link to="#configure-vpn-local-end-obs-gateway">Configure VPN local-end OBS gateway</router-link></li></ul></li><li><router-link to="#create-huawei-vpc-peering">Create Huawei VPC Peering</router-link><ul><li><router-link to="#disaster-recovery-vpc-connected-via-peering-with-multiple-business-vpc">Disaster recovery VPC connected via peering with multiple business VPC</router-link></li><li><router-link to="#disaster-recovery-vpc-peering-with-multiple-business-vpcs-as-well-as-peering-connections-between-multiple-business-vpc">Disaster recovery VPC peering with multiple business VPCs, as well as peering connections between multiple business VPC</router-link></li></ul></li><li><router-link to="#test-network-access-between-vpcs">Test Network Access between VPCs</router-link><ul><li><router-link to="#test-the-network-connectivity-between-the-disaster-recovery-vpc-and-the-business-vpc">Test the network connectivity between the disaster recovery VPC and the business VPC</router-link></li><li><router-link to="#test-the-network-connectivity-between-business-vpc">Test the network connectivity between business VPC</router-link></li></ul></li><li><router-link to="#huawei-cloud-platform-account-quota-check">Huawei Cloud platform account quota check</router-link><ul><li><router-link to="#source-host-resource-inventory">Source host resource inventory</router-link></li><li><router-link to="#huawei-cloud-account-resource-quota-check">Huawei Cloud account resource quota check</router-link></li><li><router-link to="#increase-quotas-in-your-huawei-cloud-account">Increase quotas in your Huawei Cloud account.</router-link></li></ul></li><li><router-link to="#modify-the-ssh-policy-of-the-cloud-sync-gateway-instance-security-group">Modify the ssh policy of the Cloud Sync Gateway instance security group</router-link><ul><li><router-link to="#confirm-the-instance-of-cloud-sync-gateway">Confirm the instance of Cloud Sync Gateway</router-link></li><li><router-link to="#modify-the-cloud-sync-gateway-security-group">Modify the cloud sync gateway security group</router-link></li></ul></li></ul></nav>
<h2 id="create-huawei-cloud-iam-account-for-dr-purpose" tabindex="-1"><a class="header-anchor" href="#create-huawei-cloud-iam-account-for-dr-purpose"><span>Create Huawei Cloud IAM account for DR purpose</span></a></h2>
<p>Create a Huawei Cloud IAM account with correspinding permissions, detail requirement please refer to below document. And create Access Key ID &amp; Access Secret Key of IAM account for setup.</p>
<h3 id="create-iam-user" tabindex="-1"><a class="header-anchor" href="#create-iam-user"><span>Create IAM User</span></a></h3>
<h4 id="huawei-cloud-official-documentation-link" tabindex="-1"><a class="header-anchor" href="#huawei-cloud-official-documentation-link"><span>Huawei Cloud official documentation link:</span></a></h4>
<ul>
<li><a href="https://support.huaweicloud.com/intl/en-us/usermanual-iam/iam_02_0001.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/usermanual-iam/iam_02_0001.html</a></li>
</ul>
<h3 id="granting-authorization-to-iam-user" tabindex="-1"><a class="header-anchor" href="#granting-authorization-to-iam-user"><span>Granting Authorization to IAM User</span></a></h3>
<h4 id="huawei-cloud-official-documentation-link-1" tabindex="-1"><a class="header-anchor" href="#huawei-cloud-official-documentation-link-1"><span>Huawei Cloud official documentation link:</span></a></h4>
<ul>
<li><a href="https://support.huaweicloud.com/intl/en-us/usermanual-iam/iam_01_0652.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/usermanual-iam/iam_01_0652.html</a></li>
</ul>
<h3 id="managing-iam-user-access-keys" tabindex="-1"><a class="header-anchor" href="#managing-iam-user-access-keys"><span>Managing IAM User Access Keys</span></a></h3>
<h4 id="huawei-cloud-official-documentation-link-2" tabindex="-1"><a class="header-anchor" href="#huawei-cloud-official-documentation-link-2"><span>Huawei Cloud official documentation link:</span></a></h4>
<ul>
<li><a href="https://support.huaweicloud.com/intl/en-us/usermanual-iam/iam_02_0003.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/usermanual-iam/iam_02_0003.html</a></li>
</ul>
<h3 id="huawei-cloud-iam-permission-requirements" tabindex="-1"><a class="header-anchor" href="#huawei-cloud-iam-permission-requirements"><span>Huawei Cloud IAM Permission Requirements</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Huawei Cloud has different API versions of v2 and v3 in different regions, and each region has a slightly different definition of resource description permissions. When you create permissions for HyperBDR, So you need to provide full access to ecs, evs, obs, ims, and netwrok services.</p>
</div>
<h4 id="ecs-vpc-evs-ims" tabindex="-1"><a class="header-anchor" href="#ecs-vpc-evs-ims"><span>ecs/vpc/evs/ims</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    "Version": "1.1",</span></span>
<span class="line"><span>    "Statement": [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            "Effect": "Allow",</span></span>
<span class="line"><span>            "Action": [</span></span>
<span class="line"><span>                "ecs:*:*"</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            "Effect": "Allow",</span></span>
<span class="line"><span>            "Action": [</span></span>
<span class="line"><span>                "evs:*:*"</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            "Effect": "Allow",</span></span>
<span class="line"><span>            "Action": [</span></span>
<span class="line"><span>                "vpc:*:*"</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            "Effect": "Allow",</span></span>
<span class="line"><span>            "Action": [</span></span>
<span class="line"><span>                "IMS:*:*"</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="obs" tabindex="-1"><a class="header-anchor" href="#obs"><span>obs</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    "Version": "1.1",</span></span>
<span class="line"><span>    "Statement": [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            "Effect": "Allow",</span></span>
<span class="line"><span>            "Action": [</span></span>
<span class="line"><span>                "OBS:*:*"</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configure-vpc-subnet" tabindex="-1"><a class="header-anchor" href="#configure-vpc-subnet"><span>Configure VPC &amp; Subnet</span></a></h2>
<p>Create VPC Network and Subnet According to Huawei Cloud Documentation. Explanation: Establish your network based on the following disaster recovery network scenarios.</p>
<ol>
<li>Intranet VPN Access:</li>
</ol>
<p>If accessing through an intranet VPN, create a DR VPC network and place HyperBDR ECS instances in this network.</p>
<ol start="2">
<li>Disaster Recovery VPC:</li>
</ol>
<p>Dedicated VPC network and subnet for HyperBDR disaster recovery and backup, interconnected with the on-premises IDC through VPN.</p>
<ol start="3">
<li>Business VPC:</li>
</ol>
<p>Business VPC network and subnet used for disaster takeover and drills.</p>
<h2 id="create-hyperbdr-security-group" tabindex="-1"><a class="header-anchor" href="#create-hyperbdr-security-group"><span>Create HyperBDR Security Group</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>HyperBDR Security Group Name: SG-HyperBDR</p>
</div>
<h3 id="create-security-group-rules" tabindex="-1"><a class="header-anchor" href="#create-security-group-rules"><span>Create Security Group Rules</span></a></h3>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>Note: For the source IP range, we strongly recommend setting the source access for TCP:22 to a secure range instead of 0.0.0.0/0. Setting it to 0.0.0.0/0 means your ECS host is exposed to the internet, allowing anyone to access and potentially attack it, posing a security risk.</p>
<p>For example, if your external IP address is 110.242.68.66, the source IP range can be configured as 110.242.68.66/32.</p>
</div>
<table>
<thead>
<tr>
<th>No.</th>
<th>Action</th>
<th>Type</th>
<th>Protocol &amp; Port</th>
<th>Source</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Allow</td>
<td>IPv4</td>
<td>TCP:22</td>
<td>0.0.0.0/0</td>
<td>Permit default Linux SSH port</td>
</tr>
<tr>
<td>2</td>
<td>Allow</td>
<td>IPv4</td>
<td>TCP:10443</td>
<td>0.0.0.0/0</td>
<td>Permit HyperBDR web console</td>
</tr>
<tr>
<td>3</td>
<td>Allow</td>
<td>IPv4</td>
<td>TCP:30443</td>
<td>0.0.0.0/0</td>
<td>Permit HyperBDR Operation and maintenance management platform web console port</td>
</tr>
<tr>
<td>4</td>
<td>Allow</td>
<td>IPv4</td>
<td>TCP:30080</td>
<td>0.0.0.0/0</td>
<td>Permit HyperBDR https services port</td>
</tr>
</tbody>
</table>
<h2 id="create-ecs-for-hyperbdr" tabindex="-1"><a class="header-anchor" href="#create-ecs-for-hyperbdr"><span>Create ECS for HyperBDR</span></a></h2>
<h3 id="log-in-to-the-huawei-cloud-console" tabindex="-1"><a class="header-anchor" href="#log-in-to-the-huawei-cloud-console"><span>Log in to the Huawei Cloud Console</span></a></h3>
<h3 id="create-ecs-cloud-instance-based-on-configuration-information" tabindex="-1"><a class="header-anchor" href="#create-ecs-cloud-instance-based-on-configuration-information"><span>Create ECS Cloud Instance based on Configuration Information</span></a></h3>
<blockquote>
<p>Huawei Cloud documentation ：<a href="https://support.huaweicloud.com/intl/en-us/qs-ecs/ecs_02_0009.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/qs-ecs/ecs_02_0009.html</a><br>
The resource configuration for HyperBDR servers is as follows:</p>
</blockquote>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>Notes: We strongly recommend that when creating an ECS cloud instance, the login mode is selected as KeyPair login instead of password login to ensure the security of your server access.</p>
</div>
<table>
<thead>
<tr>
<th style="text-align:left">Configuration items</th>
<th style="text-align:left">Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Region</td>
<td style="text-align:left">&lt;Your Region&gt;</td>
</tr>
<tr>
<td style="text-align:left">Billing Mode</td>
<td style="text-align:left">Yearly/Monthly</td>
</tr>
<tr>
<td style="text-align:left">AZ</td>
<td style="text-align:left">AZ1</td>
</tr>
<tr>
<td style="text-align:left">Flavor</td>
<td style="text-align:left">s6.2xlarge.2</td>
</tr>
<tr>
<td style="text-align:left">Image</td>
<td style="text-align:left">Ubuntu 20.04 server 64bit(40GiB)(cecc4bcf-b055-4d35-bd5f-693d4412eaef)</td>
</tr>
<tr>
<td style="text-align:left">System Disk</td>
<td style="text-align:left">High IO 200GB</td>
</tr>
<tr>
<td style="text-align:left">Network</td>
<td style="text-align:left">&lt;VPC-HyperBDR-172.16.0.0&gt;</td>
</tr>
<tr>
<td style="text-align:left">Subnet</td>
<td style="text-align:left">&lt;Subnet-HyperBDR-172.16.0.0&gt; (Automatically assign IP address)</td>
</tr>
<tr>
<td style="text-align:left">Security Group</td>
<td style="text-align:left">SG-HyperBDR</td>
</tr>
<tr>
<td style="text-align:left">EIP</td>
<td style="text-align:left">Auto assign</td>
</tr>
<tr>
<td style="text-align:left">EIP Type</td>
<td style="text-align:left">Dynamic BGP</td>
</tr>
<tr>
<td style="text-align:left">Billed By</td>
<td style="text-align:left">Traffic</td>
</tr>
<tr>
<td style="text-align:left">Bandwidth Size</td>
<td style="text-align:left">100Mbps</td>
</tr>
<tr>
<td style="text-align:left">ECS Name</td>
<td style="text-align:left">HyperBDR-Prod</td>
</tr>
<tr>
<td style="text-align:left">Login Mode</td>
<td style="text-align:left">KeyPair</td>
</tr>
<tr>
<td style="text-align:left">Key Pair</td>
<td style="text-align:left">&lt;Your KeyPair&gt;</td>
</tr>
</tbody>
</table>
<blockquote>
<p>About Key Pair Login Mode, you can see the following link for details:
<a href="https://support.huaweicloud.com/en-us/usermanual-ecs/en-us_topic_0014250631.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/en-us/usermanual-ecs/en-us_topic_0014250631.html</a></p>
</blockquote>
<h2 id="image-download-upload" tabindex="-1"><a class="header-anchor" href="#image-download-upload"><span>Image Download &amp; Upload</span></a></h2>
<h3 id="image-download" tabindex="-1"><a class="header-anchor" href="#image-download"><span>Image Download</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>We need to use three image files to import four images in Huawei Cloud.
Linux BIOS Image is used to create a cloud sync gateway and boot Linux hosts with DR; Windows BIOS Image is used for DR to boot Windows hosts; Linux/Windows UEFI Image is used for DR to boot UEFI hosts.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Download images to your local machine through the provided image links.</p>
</div>
<h3 id="image-info" tabindex="-1"><a class="header-anchor" href="#image-info"><span>Image Info</span></a></h3>
<h4 id="linux-image" tabindex="-1"><a class="header-anchor" href="#linux-image"><span>Linux Image</span></a></h4>
<ul>
<li>File Name：Ubuntu-20.04-server-64bit.qcow2</li>
<li>Version：ubuntu 20.04 server</li>
<li>Size：5.85 GB</li>
<li>Download Link：<a href="https://downloads.oneprocloud.com/docs_images/Ubuntu-20.04-server-64bit.qcow2" target="_blank" rel="noopener noreferrer">https://downloads.oneprocloud.com/docs_images/Ubuntu-20.04-server-64bit.qcow2</a></li>
<li>MD5 Value of the Image: b608febbe32daa6e4ec61b7166c706da</li>
</ul>
<h4 id="windows-image" tabindex="-1"><a class="header-anchor" href="#windows-image"><span>Windows Image</span></a></h4>
<ul>
<li>File Name：Windows_Server_2016_Datacenter_64bit_English_40G.qcow2</li>
<li>Version：Windows Server 2016 Datacenter 64bit English</li>
<li>Size：12.11 GB</li>
<li>Download Link: <a href="https://downloads.oneprocloud.com/docs_images/Windows_Server_2016_Datacenter_64bit_English_40G.qcow2" target="_blank" rel="noopener noreferrer">https://downloads.oneprocloud.com/docs_images/Windows_Server_2016_Datacenter_64bit_English_40G.qcow2</a></li>
<li>MD5 Value of the Image: 519444d4b0343e15fa014c50d906a832</li>
</ul>
<h4 id="uefi-image" tabindex="-1"><a class="header-anchor" href="#uefi-image"><span>UEFI Image</span></a></h4>
<ul>
<li>File Name：HuaweiCloud_UEFI_GenericImage.qcow2</li>
<li>Version：HuaweiCloud_UEFI_GenericImage</li>
<li>Size：554.69 MB</li>
<li>Download Link: <a href="https://downloads.oneprocloud.com/docs_images/HuaweiCloud_UEFI_GenericImage.qcow2" target="_blank" rel="noopener noreferrer">https://downloads.oneprocloud.com/docs_images/HuaweiCloud_UEFI_GenericImage.qcow2</a></li>
<li>MD5 Value of the Image: 7814209a573666f2701b35236764723d</li>
</ul>
<h3 id="upload-image-to-huawei-cloud-object-storage" tabindex="-1"><a class="header-anchor" href="#upload-image-to-huawei-cloud-object-storage"><span>Upload Image to Huawei Cloud Object Storage</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Huawei Cloud official documentation link: <a href="https://support.huaweicloud.com/intl/en-us/usermanual-ims/ims_01_0205.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/usermanual-ims/ims_01_0205.html</a></p>
</div>
<h3 id="import-image" tabindex="-1"><a class="header-anchor" href="#import-image"><span>Import Image</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Huawei Cloud official documentation link:<br>
<a href="https://support.huaweicloud.com/intl/en-us/usermanual-ims/ims_01_0206.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/usermanual-ims/ims_01_0206.html</a><br>
<a href="https://support.huaweicloud.com/intl/en-us/usermanual-ims/ims_01_0211.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/usermanual-ims/ims_01_0211.html</a></p>
</div>
<h4 id="import-bios-image" tabindex="-1"><a class="header-anchor" href="#import-bios-image"><span>Import BIOS Image</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Use <strong>[ubuntu-20.04-server-cloudimg-amd64.qcow2]</strong> and <strong>[Windows_Server_2016_Datacenter_64bit_English_40G.qcow2]</strong> qcow2 files in Huawei Cloud OBS to import the Linux BIOS Image and Windows BIOS Image respectively.</p>
</div>
<h5 id="step1-access-the-ims-console" tabindex="-1"><a class="header-anchor" href="#step1-access-the-ims-console"><span>Step1: Access the IMS console.</span></a></h5>
<ul>
<li>Log in to the management console.</li>
<li>Under Compute, click Image Management Service.The IMS console is displayed.Register an external image file as a private image.
<img src="@source/userguide/poc/images/upload-custom-windowslinux-images-to-huawei-cloud-1.png" alt="upload-custom-windowslinux-images-to-huawei-cloud-1.png" loading="lazy"></li>
</ul>
<h5 id="step2-register-an-external-image-file-as-a-private-image" tabindex="-1"><a class="header-anchor" href="#step2-register-an-external-image-file-as-a-private-image"><span>Step2: Register an external image file as a private image</span></a></h5>
<ul>
<li>Click Create Image in the upper right corner
<img src="@source/userguide/poc/images/upload-custom-windowslinux-images-to-huawei-cloud-2.png" alt="upload-custom-windowslinux-images-to-huawei-cloud-2.png" loading="lazy"></li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>1.The name must be one of the following and cannot have additional characters.<br>
2.Due to the diverse versions of Windows on the source hosts, select the generic option for the operating system.<br>
3.Linux image is primarily used for creating an HD. The recommended version for the current release is Ubuntu 20.04</p>
</div>
<p><strong>Windows BIOS Image</strong></p>
<p>Supported Windows image names</p>
<blockquote>
<p>Windows Server 2016 Standard 64bit<br>
Windows Server 2016 Standard 64bit English<br>
Windows Server 2016 Datacenter 64bit<br>
Windows Server 2016 Datacenter 64bit English<br>
Windows Server 2019 Datacenter 64bit<br>
Windows Server 2019 Datacenter 64bit English</p>
</blockquote>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>The size of the System disk must be 40G.</p>
</div>
<figure><img src="@source/userguide/poc/images/upload-custom-windowslinux-images-to-huawei-cloud-3.png" alt="upload-custom-windowslinux-images-to-huawei-cloud-3.png" tabindex="0" loading="lazy"><figcaption>upload-custom-windowslinux-images-to-huawei-cloud-3.png</figcaption></figure>
<p><strong>Linux BIOS Image</strong></p>
<p>Supported Linux image names</p>
<blockquote>
<p>Ubuntu 20.04 server 64bit</p>
</blockquote>
<figure><img src="@source/userguide/poc/images/upload-custom-windowslinux-images-to-huawei-cloud-7.png" alt="upload-custom-windowslinux-images-to-huawei-cloud-7.png" tabindex="0" loading="lazy"><figcaption>upload-custom-windowslinux-images-to-huawei-cloud-7.png</figcaption></figure>
<h5 id="step3-confirm-and-submit" tabindex="-1"><a class="header-anchor" href="#step3-confirm-and-submit"><span>Step3: Confirm and submit</span></a></h5>
<ul>
<li>
<p>Click Next and confirm the image specifications. Select Statement of Commitment to Image Creation and Huawei Image Disclaimer. Click Submit.</p>
</li>
<li>
<p>Go back to the Private Images page. The image is successfully registered when its status becomes Normal.</p>
</li>
</ul>
<h4 id="import-uefi-image" tabindex="-1"><a class="header-anchor" href="#import-uefi-image"><span>Import UEFI Image</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Use the <strong>[HuaweiCloud_UEFI_GenericImage.qcow2]</strong> qcow2 file in Huawei Cloud OBS to import the Linux UEFI image and Windows UEFI image respectively.</p>
</div>
<h5 id="step1-access-the-ims-console-1" tabindex="-1"><a class="header-anchor" href="#step1-access-the-ims-console-1"><span>Step1: Access the IMS console.</span></a></h5>
<ul>
<li>Log in to the management console.</li>
<li>Under Compute, click Image Management Service.The IMS console is displayed.Register an external image file as a private image.
<img src="@source/userguide/poc/images/upload-custom-windowslinux-images-to-huawei-cloud-1.png" alt="upload-custom-windowslinux-images-to-huawei-cloud-9.png" loading="lazy"></li>
</ul>
<h5 id="step2-register-an-external-image-file-as-a-private-image-1" tabindex="-1"><a class="header-anchor" href="#step2-register-an-external-image-file-as-a-private-image-1"><span>Step2: Register an external image file as a private image</span></a></h5>
<ul>
<li>Click Create Image in the upper right corner
<img src="@source/userguide/poc/images/upload-custom-windowslinux-images-to-huawei-cloud-2.png" alt="upload-custom-windowslinux-images-to-huawei-cloud-2.png" loading="lazy"></li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>1.The name must be one of the following and cannot have additional characters.<br>
2.Due to the diverse versions of Windows on the source hosts, select the generic option for the operating system.<br>
3.Linux image is primarily used for creating an HD. The recommended version for the current release is Ubuntu 20.04</p>
</div>
<p><strong>Windows UEFI Image</strong></p>
<p>Supported Windows image names</p>
<blockquote>
<p>Windows Server 2016 Standard 64bit English UEFI<br>
Windows Server 2019 Datacenter 64bit UEFI<br>
Windows Server 2019 Datacenter 64bit English UEFI</p>
</blockquote>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>The size of the System disk must be 40G.</p>
</div>
<figure><img src="@source/userguide/poc/images/upload-custom-windowslinux-images-to-huawei-cloud-9.png" alt="upload-custom-windowslinux-images-to-huawei-cloud-9.png" tabindex="0" loading="lazy"><figcaption>upload-custom-windowslinux-images-to-huawei-cloud-9.png</figcaption></figure>
<p><strong>Linux UEFI Image</strong></p>
<p>Supported Linux image names</p>
<blockquote>
<p>Ubuntu 20.04 server 64bit UEFI</p>
</blockquote>
<figure><img src="@source/userguide/poc/images/upload-custom-windowslinux-images-to-huawei-cloud-10.png" alt="upload-custom-windowslinux-images-to-huawei-cloud-10.png" tabindex="0" loading="lazy"><figcaption>upload-custom-windowslinux-images-to-huawei-cloud-10.png</figcaption></figure>
<h5 id="step3-confirm-and-submit-1" tabindex="-1"><a class="header-anchor" href="#step3-confirm-and-submit-1"><span>Step3: Confirm and submit</span></a></h5>
<ul>
<li>
<p>Click Next and confirm the image specifications. Select Statement of Commitment to Image Creation and Huawei Image Disclaimer. Click Submit.</p>
</li>
<li>
<p>Go back to the Private Images page. The image is successfully registered when its status becomes Normal.</p>
</li>
</ul>
<h2 id="vpn-setup" tabindex="-1"><a class="header-anchor" href="#vpn-setup"><span>VPN Setup</span></a></h2>
<blockquote>
<p>Note: If your DR Environment is connected to the Intranet of the production site through Huawei Cloud, you need to purchase the Huawei cloud VPN service and configure the Huawei cloud to connect to the On-perms network.</p>
</blockquote>
<blockquote>
<p>Configure VPN. For details, see Huawei Cloud official documentation.<br>
Document Link: <a href="https://support.huaweicloud.com/intl/en-us/qs-vpn/vpn_03_0001.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/qs-vpn/vpn_03_0001.html</a></p>
</blockquote>
<h2 id="create-huawei-vpc-endpoint" tabindex="-1"><a class="header-anchor" href="#create-huawei-vpc-endpoint"><span>Create Huawei VPC Endpoint</span></a></h2>
<blockquote>
<p>If your disaster recovery environment is interconnected with the production site's intranet through Huawei Cloud VPN, and the production site needs to access Huawei Cloud HyperBDR and OBS services through VPN during a disaster, then you need to purchase and configure VPC Endpoint services in Huawei Cloud.</p>
</blockquote>
<blockquote>
<p>You need to purchase two VPC Endpoint services, one for OBS and the other for DNS.</p>
</blockquote>
<blockquote>
<p>Huawei Cloud official definition: If you want to access OBS services from a local data center via VPN or Cloud Connect using an intranet method, you can achieve this by connecting through terminal endpoints to access terminal endpoint services.<br>
Document Link：<a href="https://support.huaweicloud.com/intl/en-us/qs-vpcep/vpcep_02_0301.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/qs-vpcep/vpcep_02_0301.html</a></p>
</blockquote>
<h3 id="configure-dns-interface-type-for-terminal-endpoints" tabindex="-1"><a class="header-anchor" href="#configure-dns-interface-type-for-terminal-endpoints"><span>Configure DNS Interface Type for Terminal Endpoints</span></a></h3>
<table>
<thead>
<tr>
<th>Project</th>
<th>Configuration</th>
</tr>
</thead>
<tbody>
<tr>
<td>Region</td>
<td>Choose the Region to activate</td>
</tr>
<tr>
<td>Billing Mode</td>
<td>Pay-per-use</td>
</tr>
<tr>
<td>Service Category</td>
<td>Choose the default &quot;Cloud server,&quot; check com.myhuaweicloud.&lt;region&gt;.dns, and set the type as Interface.</td>
</tr>
<tr>
<td>VPC</td>
<td>Choose the VPC interconnecting with the local IDC VPN</td>
</tr>
<tr>
<td>Subnet</td>
<td>Select the subnet for VPN interconnection</td>
</tr>
</tbody>
</table>
<figure><img src="@source/userguide/poc/images/option-2-internal-vpn-access---create-vpc-endpoint-service-1.png" alt="option-2-internal-vpn-access---create-vpc-endpoint-service-1.png" tabindex="0" loading="lazy"><figcaption>option-2-internal-vpn-access---create-vpc-endpoint-service-1.png</figcaption></figure>
<h3 id="selection-of-obs-gateway-type-terminal-endpoint" tabindex="-1"><a class="header-anchor" href="#selection-of-obs-gateway-type-terminal-endpoint"><span>Selection of OBS Gateway-type Terminal Endpoint</span></a></h3>
<table>
<thead>
<tr>
<th>Project</th>
<th>Configuration</th>
</tr>
</thead>
<tbody>
<tr>
<td>Region</td>
<td>Choose the Region to activate</td>
</tr>
<tr>
<td>Billing Mode</td>
<td>Pay-per-use</td>
</tr>
<tr>
<td>Service Category</td>
<td>Choose the default &quot;Cloud server,&quot; check com.myhuaweicloud.<region/>.obs, and set the type as Gateway</td>
</tr>
<tr>
<td>VPC</td>
<td>Choose the VPC interconnecting with the local IDC VPN</td>
</tr>
<tr>
<td>Route Table</td>
<td>default</td>
</tr>
<tr>
<td>Policy</td>
<td>default</td>
</tr>
</tbody>
</table>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>Note: In the Service Category section, it may not be possible to directly find the corresponding OBS service for the default Cloud service type. In such cases, you will need to use &quot;Find a service by name&quot; to search. You must enter the complete name of the specific OBS service. Please confirm with Huawei Cloud as the target OBS service terminal endpoints on the Huawei side may have distinctions between v1 and v2 versions. Additionally, the names of each region and the association between v1/v2 versions and the resource pool of the object storage bucket need clarification. If you have purchased v1 OBS terminal endpoints but your object storage bucket is in a v2 cluster, it must be aligned accordingly. Confirm with Huawei in advance regarding the specific version of the object storage bucket's cluster and OBS terminal endpoints</p>
<p>Example: v2 version OBS terminal endpoint name: sa-brazil-1.com.myhuaweicloud.v4.obsv2.lz002</p>
</div>
<figure><img src="@source/userguide/poc/images/option-2-internal-vpn-access---create-vpc-endpoint-service-2.png" alt="option-2-internal-vpn-access---create-vpc-endpoint-service-2.png" tabindex="0" loading="lazy"><figcaption>option-2-internal-vpn-access---create-vpc-endpoint-service-2.png</figcaption></figure>
<h3 id="configure-vpn-local-end-obs-gateway" tabindex="-1"><a class="header-anchor" href="#configure-vpn-local-end-obs-gateway"><span>Configure VPN local-end OBS gateway</span></a></h3>
<p>Add the internal subnet range of the local (Huawei Cloud) OBS service at the VPN connection point. The subnet address for all internal Huawei Cloud OBS services is 100.125.0.0/16.<br>
<img src="@source/userguide/poc/images/option-2-internal-vpn-access---create-vpc-endpoint-service-3.png" alt="option-2-internal-vpn-access---create-vpc-endpoint-service-3.png" loading="lazy"><br>
<img src="@source/userguide/poc/images/option-2-internal-vpn-access---create-vpc-endpoint-service-4.png" alt="option-2-internal-vpn-access---create-vpc-endpoint-service-4.png" loading="lazy"></p>
<h2 id="create-huawei-vpc-peering" tabindex="-1"><a class="header-anchor" href="#create-huawei-vpc-peering"><span>Create Huawei VPC Peering</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Based on business requirements, choose different VPC peering configurations:</p>
<ul>
<li>If there is no need for mutual access between multiple business VPCs, you only need to configure the peering connection according to the <a href="https://docs.oneprocloud.com/userguide/poc/huaweicloud-pre-settings.html#disaster-recovery-vpc-connected-via-peering-with-multiple-business-vpc" target="_blank" rel="noopener noreferrer">Disaster recovery VPC connected via peering with multiple business VPC</a> setup.</li>
<li>If there is a requirement for mutual access between multiple business VPCs, then you need to configure according to the <a href="https://docs.oneprocloud.com/userguide/poc/huaweicloud-pre-settings.html#disaster-recovery-vpc-peering-with-multiple-business-vpcs-as-well-as-peering-connections-between-multiple-business-vpc" target="_blank" rel="noopener noreferrer">Disaster recovery VPC peering with multiple business VPCs, as well as peering connections between multiple business VPC</a> setup.</li>
</ul>
</div>
<h3 id="disaster-recovery-vpc-connected-via-peering-with-multiple-business-vpc" tabindex="-1"><a class="header-anchor" href="#disaster-recovery-vpc-connected-via-peering-with-multiple-business-vpc"><span>Disaster recovery VPC connected via peering with multiple business VPC</span></a></h3>
<p>In Huawei Cloud Disaster Recovery, the disaster recovery host needs to be restored to the planned production business VPC. Therefore, it is necessary to configure cross VPC peer-to-peer connections in Huawei Cloud, configure the disaster recovery VPC with the business VPC, and add peer-to-peer connection routing. Mainly used for disaster recovery, the disaster recovery VPC where HyperBDR is located can access the business VPC through the intranet to recover virtual machines for data recovery.</p>
<blockquote>
<p>Huawei Cloud Document Link:<br>
<a href="https://support.huaweicloud.com/intl/en-us/usermanual-vpc/en-us_topic_0046809840.html#section1" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/usermanual-vpc/en-us_topic_0046809840.html#section1</a></p>
</blockquote>
<figure><img src="@source/userguide/poc/images/configure-cross-vpc-network-access-between-disaster-recovery-vpc-and-business-vpc-1.png" alt="configure-cross-vpc-network-access-between-disaster-recovery-vpc-and-business-vpc-1.png" tabindex="0" loading="lazy"><figcaption>configure-cross-vpc-network-access-between-disaster-recovery-vpc-and-business-vpc-1.png</figcaption></figure>
<h3 id="disaster-recovery-vpc-peering-with-multiple-business-vpcs-as-well-as-peering-connections-between-multiple-business-vpc" tabindex="-1"><a class="header-anchor" href="#disaster-recovery-vpc-peering-with-multiple-business-vpcs-as-well-as-peering-connections-between-multiple-business-vpc"><span>Disaster recovery VPC peering with multiple business VPCs, as well as peering connections between multiple business VPC</span></a></h3>
<p>When all disaster recovery hosts of the customer need to be placed in different business VPCs planned by Huawei Cloud, and there is a need for cross VPC access in the business, then it is necessary to configure peer-to-peer connections between business VPCs to ensure normal cross VPC business interaction after subsequent business recovery.</p>
<blockquote>
<p>Huawei Cloud Document Link:<br>
<a href="https://support.huaweicloud.com/intl/en-us/usermanual-vpc/en-us_topic_0046809840.html#section0" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/usermanual-vpc/en-us_topic_0046809840.html#section0</a></p>
</blockquote>
<h2 id="test-network-access-between-vpcs" tabindex="-1"><a class="header-anchor" href="#test-network-access-between-vpcs"><span>Test Network Access between VPCs</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p><a href="https://docs.oneprocloud.com/userguide/poc/huaweicloud-pre-settings.html#create-huawei-vpc-peering" target="_blank" rel="noopener noreferrer">Create huawei VPC Peering</a> configuration has been successfully completed, and routing entries have been added correctly.</p>
</div>
<h3 id="test-the-network-connectivity-between-the-disaster-recovery-vpc-and-the-business-vpc" tabindex="-1"><a class="header-anchor" href="#test-the-network-connectivity-between-the-disaster-recovery-vpc-and-the-business-vpc"><span>Test the network connectivity between the disaster recovery VPC and the business VPC</span></a></h3>
<ul>
<li>
<p>Step1: Login to Huawei Cloud and create an ECS test cloud server<br>
Create an ECS test cloud server (CentOS 7.6 operating system) on Huawei Cloud. When configuring the network, choose the business VPC and subnet. Ensure that the security group of this newly created ECS test virtual machine has an inbound access policy allowing port 22.</p>
</li>
<li>
<p>Step2: Network testing access from the disaster recovery VPC to the business VPC</p>
</li>
</ul>
<p>Log in to the Huawei Cloud console, access the HyperBDR ECS cloud server, and use the intranet IP to connect to the ECS host within the business VPC.</p>
<figure><img src="@source/userguide/poc/images/test-the-intranet-network-connectivity-across-vpcs-1.png" alt="test-the-intranet-network-connectivity-across-vpcs-1.png" tabindex="0" loading="lazy"><figcaption>test-the-intranet-network-connectivity-across-vpcs-1.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/test-the-intranet-network-connectivity-across-vpcs-2.png" alt="test-the-intranet-network-connectivity-across-vpcs-2.png" tabindex="0" loading="lazy"><figcaption>test-the-intranet-network-connectivity-across-vpcs-2.png</figcaption></figure>
<p>Execute command:</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> root@</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">The</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> intranet</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> IP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> address</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> of</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> EC</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">S> </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">22</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Test results:<br>
If you can successfully access and enter the password, it indicates normal access.</p>
<h3 id="test-the-network-connectivity-between-business-vpc" tabindex="-1"><a class="header-anchor" href="#test-the-network-connectivity-between-business-vpc"><span>Test the network connectivity between business VPC</span></a></h3>
<ul>
<li>
<p>Setp1: Create a new ECS test cloud server with CentOS 7.6 operating system. When configuring the network, choose a different business VPC and subnet. Ensure that the security group of this newly created ECS test virtual machine has an inbound access policy allowing port 22</p>
</li>
<li>
<p>Sep2: Log in to different test cloud servers through the console and perform bidirectional command tests with the following commands</p>
</li>
</ul>
<p>Execute command:</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> root@</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">The</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> intranet</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> IP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> of</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> EC</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">S> </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">22</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Test results:<br>
If you can successfully access and enter the password, it indicates normal access.</p>
<h2 id="huawei-cloud-platform-account-quota-check" tabindex="-1"><a class="header-anchor" href="#huawei-cloud-platform-account-quota-check"><span>Huawei Cloud platform account quota check</span></a></h2>
<p>During the disaster recovery process, it is essential to ensure that the cloud account has sufficient resource quotas to support data synchronization and disaster recovery recovery. To prevent potential failure of disaster recovery due to insufficient quotas, it is necessary to perform a resource quota check before initiating the disaster recovery.</p>
<p>If the remaining quota in the Huawei Cloud account is insufficient, it is necessary to clean up unnecessary resources in the account or apply for an expansion of Huawei Cloud resource quotas.</p>
<h3 id="source-host-resource-inventory" tabindex="-1"><a class="header-anchor" href="#source-host-resource-inventory"><span>Source host resource inventory</span></a></h3>
<p>Need to gather information on the computing and storage resources for the host systems awaiting disaster recovery and input the details into a table.</p>
<table>
<thead>
<tr>
<th>Resources Type</th>
<th>Size</th>
</tr>
</thead>
<tbody>
<tr>
<td>The total number of source host</td>
<td></td>
</tr>
<tr>
<td>The total number of source host CPU</td>
<td></td>
</tr>
<tr>
<td>The total number of source host RAM(MB)</td>
<td></td>
</tr>
<tr>
<td>The total number of source host disks</td>
<td></td>
</tr>
<tr>
<td>The total disk capacity for source host(GB)</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="huawei-cloud-account-resource-quota-check" tabindex="-1"><a class="header-anchor" href="#huawei-cloud-account-resource-quota-check"><span>Huawei Cloud account resource quota check</span></a></h3>
<h4 id="login-huawei-cloud" tabindex="-1"><a class="header-anchor" href="#login-huawei-cloud"><span>Login Huawei Cloud</span></a></h4>
<figure><img src="@source/userguide/poc/images/huawei-cloud-platform-account-quota-check-1.png" alt="huawei-cloud-platform-account-quota-check-1.png" tabindex="0" loading="lazy"><figcaption>huawei-cloud-platform-account-quota-check-1.png</figcaption></figure>
<h4 id="view-resource-quotas" tabindex="-1"><a class="header-anchor" href="#view-resource-quotas"><span>View resource quotas</span></a></h4>
<p>Access the CDN Console, select 'Resources' &gt; 'My Quotas'. The system will navigate to the 'Quotas' page.</p>
<figure><img src="@source/userguide/poc/images/huawei-cloud-platform-account-quota-check-2.png" alt="huawei-cloud-platform-account-quota-check-2.png" tabindex="0" loading="lazy"><figcaption>huawei-cloud-platform-account-quota-check-2.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/huawei-cloud-platform-account-quota-check-3.png" alt="huawei-cloud-platform-account-quota-check-3.png" tabindex="0" loading="lazy"><figcaption>huawei-cloud-platform-account-quota-check-3.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/huawei-cloud-platform-account-quota-check-4.png" alt="huawei-cloud-platform-account-quota-check-4.png" tabindex="0" loading="lazy"><figcaption>huawei-cloud-platform-account-quota-check-4.png</figcaption></figure>
<h4 id="compile-your-huawei-cloud-account-resource-quotas-and-calculate-the-remaining-quota" tabindex="-1"><a class="header-anchor" href="#compile-your-huawei-cloud-account-resource-quotas-and-calculate-the-remaining-quota"><span>Compile your Huawei Cloud account resource quotas and calculate the remaining quota</span></a></h4>
<p>Access the CDN Console, select 'Resources' &gt; 'My Quotas'. The system will navigate to the 'Quotas' page.</p>
<figure><img src="@source/userguide/poc/images/huawei-cloud-platform-account-quota-check-5.png" alt="huawei-cloud-platform-account-quota-check-5.png" tabindex="0" loading="lazy"><figcaption>huawei-cloud-platform-account-quota-check-5.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/huawei-cloud-platform-account-quota-check-6.png" alt="huawei-cloud-platform-account-quota-check-6.png" tabindex="0" loading="lazy"><figcaption>huawei-cloud-platform-account-quota-check-6.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/huawei-cloud-platform-account-quota-check-7.png" alt="huawei-cloud-platform-account-quota-check-7.png" tabindex="0" loading="lazy"><figcaption>huawei-cloud-platform-account-quota-check-7.png</figcaption></figure>
<table>
<thead>
<tr>
<th>Service</th>
<th>Resources Type</th>
<th>Used Quota</th>
<th>Total Quota</th>
<th>Residual Quota</th>
</tr>
</thead>
<tbody>
<tr>
<td>Elastic Cloud Server</td>
<td>ECSs</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Elastic Cloud Server</td>
<td>vCPUs</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Elastic Cloud Server</td>
<td>Memory (MB)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Image Management Service</td>
<td>Images</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Elastic Volume Service</td>
<td>Disks</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Elastic Volume Service</td>
<td>Disk capacity(GB)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Virtual Private Cloud</td>
<td>Elastic IP addresses</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="compare-the-remaining-quota-with-the-resources-of-the-source-hosts" tabindex="-1"><a class="header-anchor" href="#compare-the-remaining-quota-with-the-resources-of-the-source-hosts"><span>Compare the remaining quota with the resources of the source hosts</span></a></h4>
<p>Compare the resource levels of the source hosts, as per your inventory, with the remaining resource quota in your Huawei Cloud account to assess whether it meets the requirements for disaster recovery.</p>
<p><strong>1. If you are using object storage recovery mode for DR, please refer to the following criteria.</strong></p>
<blockquote>
<p><strong>Elastic Cloud Server: ECSs</strong> Residual Quota ≥ The total number of source host<br>
<strong>Elastic Cloud Server: vCPUs</strong> Residual Quota ≥ The total number of source host CPU<br>
<strong>Elastic Cloud Server: Memory (MB)</strong> Residual Quota ≥ The total number of source host RAM(MB)<br>
<strong>Elastic Volume Service: Disk</strong> Residual Quota ≥ The total number of source host disks<br>
<strong>Elastic Volume Service: Disk capacity(GB)</strong> Residual Quota ≥ The total disk capacity for source host(GB)<br>
<strong>Image Management Service: Images</strong>  Residual Quota ≥ 2<br>
<strong>Virtual Private Cloud: Elastic IP addresses</strong> Residual Quota: Satisfying the required number of public IP for the disaster recovery hosts to be restored to the Huawei Cloud platform is sufficient.</p>
</blockquote>
<p><strong>2. If you are using block storage recovery mode for DR, please refer to the following criteria.</strong></p>
<blockquote>
<p><strong>Elastic Cloud Server: ECSs</strong> Residual Quota ≥ The total number of source host + Number of HyperGate instances<br>
<strong>Elastic Cloud Server: vCPUs</strong> Residual Quota ≥ The total number of source host CPU + 2 * Number of HyperGate instances<br>
<strong>Elastic Cloud Server: Memory (MB)</strong> Residual Quota ≥ The total number of source host RAM(MB) + 2048(MB) * Number of HyperGate instances<br>
<strong>Elastic Volume Service: Disk</strong> Residual Quota ≥ 2 * Total number of source host disks + Number of HyperGate instances<br>
<strong>Elastic Volume Service: Disk capacity(GB)</strong> Residual Quota ≥ 2 * Total disk capacity for source host(GB) + 40(GB) * Number of HyperGate instances<br>
<strong>Image Management Service: Images</strong>  Residual Quota ≥ 2<br>
<strong>Virtual Private Cloud: Elastic IP addresses</strong> Residual Quota: The quantity should satisfy the sum of the required public IP addresses for the disaster recovery hosts to be restored to the Huawei Cloud platform, including both the number of public IP for the source hosts and the quantity of HyperGate instances.</p>
</blockquote>
<p>If it is discovered that the remaining resource quota in the Huawei Cloud account is insufficient, it is necessary to clean up unnecessary resources in the account or apply to Huawei Cloud for an expansion of resource quotas.</p>
<h3 id="increase-quotas-in-your-huawei-cloud-account" tabindex="-1"><a class="header-anchor" href="#increase-quotas-in-your-huawei-cloud-account"><span>Increase quotas in your Huawei Cloud account.</span></a></h3>
<p>If it is discovered that the remaining resource quota in the Huawei Cloud account is insufficient, and there are no resources to clean up in the account, you can try submitting a Huawei Cloud ticket to request an expansion of resource quotas.</p>
<p>In the 'Quotas' page, click on 'Increase', and fill out the Huawei Cloud Ticket.</p>
<figure><img src="@source/userguide/poc/images/huawei-cloud-platform-account-quota-check-8.png" alt="huawei-cloud-platform-account-quota-check-8.png" tabindex="0" loading="lazy"><figcaption>huawei-cloud-platform-account-quota-check-8.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/huawei-cloud-platform-account-quota-check-9.png" alt="huawei-cloud-platform-account-quota-check-9.png" tabindex="0" loading="lazy"><figcaption>huawei-cloud-platform-account-quota-check-9.png</figcaption></figure>
<p>After completing the form, check the agreement box and click 'Submit.' Wait and monitor the response from the Huawei Cloud Ticket for information regarding the increase quotas.</p>
<h2 id="modify-the-ssh-policy-of-the-cloud-sync-gateway-instance-security-group" tabindex="-1"><a class="header-anchor" href="#modify-the-ssh-policy-of-the-cloud-sync-gateway-instance-security-group"><span>Modify the ssh policy of the Cloud Sync Gateway instance security group</span></a></h2>
<h3 id="confirm-the-instance-of-cloud-sync-gateway" tabindex="-1"><a class="header-anchor" href="#confirm-the-instance-of-cloud-sync-gateway"><span>Confirm the instance of Cloud Sync Gateway</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Login the HyperBDR console by default.</p>
</div>
<figure><img src="@source/userguide/poc/images/modify-the-policy-of-the-cloud-sync-gateway-1.png" alt="modify-the-policy-of-the-cloud-sync-gateway-1.png" tabindex="0" loading="lazy"><figcaption>modify-the-policy-of-the-cloud-sync-gateway-1.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/modify-the-policy-of-the-cloud-sync-gateway-2.png" alt="modify-the-policy-of-the-cloud-sync-gateway-2.png" tabindex="0" loading="lazy"><figcaption>modify-the-policy-of-the-cloud-sync-gateway-2.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/modify-the-policy-of-the-cloud-sync-gateway-3.png" alt="modify-the-policy-of-the-cloud-sync-gateway-3.png" tabindex="0" loading="lazy"><figcaption>modify-the-policy-of-the-cloud-sync-gateway-3.png</figcaption></figure>
<p>Record the Link Address of the cloud sync gateway.</p>
<h3 id="modify-the-cloud-sync-gateway-security-group" tabindex="-1"><a class="header-anchor" href="#modify-the-cloud-sync-gateway-security-group"><span>Modify the cloud sync gateway security group</span></a></h3>
<p>Log in to Huawei Cloud and use Link Address to find the cloud sync gateway instance.</p>
<figure><img src="@source/userguide/poc/images/modify-the-policy-of-the-cloud-sync-gateway-4.png" alt="modify-the-policy-of-the-cloud-sync-gateway-4.png" tabindex="0" loading="lazy"><figcaption>modify-the-policy-of-the-cloud-sync-gateway-4.png</figcaption></figure>
<p>Modify security group</p>
<figure><img src="@source/userguide/poc/images/modify-the-policy-of-the-cloud-sync-gateway-5.png" alt="modify-the-policy-of-the-cloud-sync-gateway-5.png" tabindex="0" loading="lazy"><figcaption>modify-the-policy-of-the-cloud-sync-gateway-5.png</figcaption></figure>
<p>Modify the Inbound Rules and set the source end of port 22 to the IP address of HyperBDR.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If HyperBDR is deployed in a private network environment without a fixed public IP, you need to use HyperBDR's egress public IP as the source IP.</p>
</div>
<figure><img src="@source/userguide/poc/images/modify-the-policy-of-the-cloud-sync-gateway-6.png" alt="modify-the-policy-of-the-cloud-sync-gateway-6.png" tabindex="0" loading="lazy"><figcaption>modify-the-policy-of-the-cloud-sync-gateway-6.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/modify-the-policy-of-the-cloud-sync-gateway-7.png" alt="modify-the-policy-of-the-cloud-sync-gateway-7.png" tabindex="0" loading="lazy"><figcaption>modify-the-policy-of-the-cloud-sync-gateway-7.png</figcaption></figure>
</div></template>


