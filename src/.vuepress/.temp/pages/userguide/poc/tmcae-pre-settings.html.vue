<template><div><h1 id="tm-cae-pre-settings" tabindex="-1"><a class="header-anchor" href="#tm-cae-pre-settings"><span>TM CAE Pre-Settings</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#create-tm-cae-iam-account-for-dr-purpose">Create TM CAE IAM account for DR purpose</router-link><ul><li><router-link to="#create-iam-user">Create IAM User</router-link></li><li><router-link to="#granting-authorization-to-iam-user">Granting Authorization to IAM User</router-link></li><li><router-link to="#managing-iam-user-access-keys">Managing IAM User Access Keys</router-link></li><li><router-link to="#tm-cae-iam-permission-requirements">TM CAE IAM Permission Requirements</router-link></li></ul></li><li><router-link to="#configure-vpc-subnet">Configure VPC &amp; Subnet</router-link></li><li><router-link to="#create-hyperbdr-security-group">Create HyperBDR Security Group</router-link><ul><li><router-link to="#create-security-group-rules">Create Security Group Rules</router-link></li></ul></li><li><router-link to="#create-ecs-for-hyperbdr">Create ECS for HyperBDR</router-link><ul><li><router-link to="#log-in-to-the-tm-cae-console">Log in to the TM CAE Console</router-link></li><li><router-link to="#create-ecs-cloud-instance-based-on-configuration-information">Create ECS Cloud Instance based on Configuration Information</router-link></li></ul></li><li><router-link to="#tm-cae-platform-account-quota-check">TM CAE platform account quota check</router-link><ul><li><router-link to="#source-host-resource-inventory">Source host resource inventory</router-link></li><li><router-link to="#tm-cae-account-resource-quota-check">TM CAE account resource quota check</router-link></li><li><router-link to="#increase-quotas-in-your-tm-cae-account">Increase quotas in your TM CAE account.</router-link></li></ul></li><li><router-link to="#image-download-upload">Image Download &amp; Upload</router-link><ul><li><router-link to="#image-download">Image Download</router-link></li><li><router-link to="#image-info">Image Info</router-link></li><li><router-link to="#upload-image-to-tm-cae-object-storage">Upload Image to TM CAE Object Storage</router-link></li><li><router-link to="#import-image">Import Image</router-link></li></ul></li><li><router-link to="#vpn-setup">VPN Setup</router-link></li><li><router-link to="#create-vpc-endpoint">Create VPC Endpoint</router-link></li><li><router-link to="#create-vpc-peering">Create VPC Peering</router-link><ul><li><router-link to="#disaster-recovery-vpc-connected-via-peering-with-multiple-business-vpc">Disaster recovery VPC connected via peering with multiple business VPC</router-link></li><li><router-link to="#disaster-recovery-vpc-peering-with-multiple-business-vpcs-as-well-as-peering-connections-between-multiple-business-vpc">Disaster recovery VPC peering with multiple business VPCs, as well as peering connections between multiple business VPC</router-link></li></ul></li><li><router-link to="#test-network-access-between-vpcs">Test Network Access between VPCs</router-link><ul><li><router-link to="#test-the-network-connectivity-between-the-disaster-recovery-vpc-and-the-business-vpc">Test the network connectivity between the disaster recovery VPC and the business VPC</router-link></li><li><router-link to="#test-the-network-connectivity-between-business-vpc">Test the network connectivity between business VPC</router-link></li></ul></li><li><router-link to="#test-network-connectivity-from-proxy-to-object-storage">Test Network Connectivity from Proxy to Object Storage</router-link><ul><li><router-link to="#internet">Internet</router-link></li><li><router-link to="#vpn">VPN</router-link></li></ul></li><li><router-link to="#option-2-intranet-vpn-access-configure-tm-cae-intranet-dns-address-for-the-network-device-where-the-agent-host-resid">(Option 2: Intranet VPN access)Configure TM CAE Intranet DNS address for the network device where the Agent host resid</router-link><ul><li><router-link to="#configure-firewall-or-network-devices-such-as-switches">Configure firewall or network devices such as switches</router-link></li></ul></li><li><router-link to="#option-1-public-network-access-test-the-connectivity-between-the-agent-host-and-tm-cae-obs">(Option 1: Public Network Access)Test The Connectivity Between The Agent Host And TM CAE OBS</router-link><ul><li><router-link to="#windows">Windows</router-link></li><li><router-link to="#linux">Linux</router-link></li></ul></li><li><router-link to="#option-2-internal-vpn-access-test-the-connectivity-between-the-agent-host-and-tm-cae-obs">(Option 2: Internal VPN Access)Test The Connectivity Between The Agent Host And TM CAE OBS</router-link><ul><li><router-link to="#windows-host">Windows Host</router-link></li><li><router-link to="#linux-host">Linux Host</router-link></li></ul></li></ul></nav>
<h2 id="create-tm-cae-iam-account-for-dr-purpose" tabindex="-1"><a class="header-anchor" href="#create-tm-cae-iam-account-for-dr-purpose"><span>Create TM CAE IAM account for DR purpose</span></a></h2>
<p>Create a TM CAE IAM account with correspinding permissions, detail requirement please refer to below document. And create Access Key ID &amp; Access Secret Key of IAM account for setup.</p>
<h3 id="create-iam-user" tabindex="-1"><a class="header-anchor" href="#create-iam-user"><span>Create IAM User</span></a></h3>
<h4 id="tm-cae-official-documentation-link" tabindex="-1"><a class="header-anchor" href="#tm-cae-official-documentation-link"><span>TM CAE official documentation link:</span></a></h4>
<ul>
<li><a href="https://support.alphaedge.tmone.com.my/en-us/usermanual/iam/iam_02_0001.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/en-us/usermanual/iam/iam_02_0001.html</a></li>
</ul>
<h3 id="granting-authorization-to-iam-user" tabindex="-1"><a class="header-anchor" href="#granting-authorization-to-iam-user"><span>Granting Authorization to IAM User</span></a></h3>
<h4 id="tm-cae-official-documentation-link-1" tabindex="-1"><a class="header-anchor" href="#tm-cae-official-documentation-link-1"><span>TM CAE official documentation link:</span></a></h4>
<ul>
<li><a href="https://support.alphaedge.tmone.com.my/en-us/usermanual/iam/iam_01_0652.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/en-us/usermanual/iam/iam_01_0652.html</a></li>
</ul>
<h3 id="managing-iam-user-access-keys" tabindex="-1"><a class="header-anchor" href="#managing-iam-user-access-keys"><span>Managing IAM User Access Keys</span></a></h3>
<h4 id="tm-cae-official-documentation-link-2" tabindex="-1"><a class="header-anchor" href="#tm-cae-official-documentation-link-2"><span>TM CAE official documentation link:</span></a></h4>
<ul>
<li><a href="https://support.alphaedge.tmone.com.my/en-us/usermanual/iam/iam_02_0003.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/en-us/usermanual/iam/iam_02_0003.html</a></li>
</ul>
<h3 id="tm-cae-iam-permission-requirements" tabindex="-1"><a class="header-anchor" href="#tm-cae-iam-permission-requirements"><span>TM CAE IAM Permission Requirements</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>TM CAE has different API versions in different regions, and each region has a slightly different definition of resource description permissions. When you create permissions for HyperBDR, So you need to provide full access to ecs, evs, obs, ims, and netwrok services.</p>
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
<p>Create VPC Network and Subnet According to TM CAE Documentation. Explanation: Establish your network based on the following disaster recovery network scenarios.</p>
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
<blockquote>
<p>NOTE: For Source IP range, we recommend use safe range to replace 0.0.0.0/0.
For example, if your external ip address is 110.242.68.66, source can be configurated as 110.242.68.66/32.</p>
</blockquote>
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
<h3 id="log-in-to-the-tm-cae-console" tabindex="-1"><a class="header-anchor" href="#log-in-to-the-tm-cae-console"><span>Log in to the TM CAE Console</span></a></h3>
<h3 id="create-ecs-cloud-instance-based-on-configuration-information" tabindex="-1"><a class="header-anchor" href="#create-ecs-cloud-instance-based-on-configuration-information"><span>Create ECS Cloud Instance based on Configuration Information</span></a></h3>
<blockquote>
<p>TM CAE documentation ：<a href="https://support.alphaedge.tmone.com.my/en-us/usermanual/ecs/en-us_topic_0021831611.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/en-us/usermanual/ecs/en-us_topic_0021831611.html</a><br>
The resource configuration for HyperBDR servers is as follows:</p>
</blockquote>
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
<td style="text-align:left">CentOS 7.9 64bit(40 GiB)(d580586a-1761-4f06-bb11-5f358ee29e40)</td>
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
<td style="text-align:left">Password</td>
</tr>
<tr>
<td style="text-align:left">Username</td>
<td style="text-align:left">root</td>
</tr>
<tr>
<td style="text-align:left">Password</td>
<td style="text-align:left">ec1@OneProCloud#!</td>
</tr>
</tbody>
</table>
<h2 id="tm-cae-platform-account-quota-check" tabindex="-1"><a class="header-anchor" href="#tm-cae-platform-account-quota-check"><span>TM CAE platform account quota check</span></a></h2>
<p>During the disaster recovery process, it is essential to ensure that the cloud account has sufficient resource quotas to support data synchronization and disaster recovery recovery. To prevent potential failure of disaster recovery due to insufficient quotas, it is necessary to perform a resource quota check before initiating the disaster recovery.</p>
<p>If the remaining quota in the TM CAE account is insufficient, it is necessary to clean up unnecessary resources in the account or apply for an expansion of TM CAE resource quotas.</p>
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
<h3 id="tm-cae-account-resource-quota-check" tabindex="-1"><a class="header-anchor" href="#tm-cae-account-resource-quota-check"><span>TM CAE account resource quota check</span></a></h3>
<h4 id="login-tm-cae" tabindex="-1"><a class="header-anchor" href="#login-tm-cae"><span>Login TM CAE</span></a></h4>
<figure><img src="@source/userguide/poc/images/tm-cae-platform-account-quota-check-1.png" alt="tm-cae-platform-account-quota-check-1.png" tabindex="0" loading="lazy"><figcaption>tm-cae-platform-account-quota-check-1.png</figcaption></figure>
<h4 id="view-resource-quotas" tabindex="-1"><a class="header-anchor" href="#view-resource-quotas"><span>View resource quotas</span></a></h4>
<p>Access the CDN Console, click on &quot;My Quotas&quot; in the upper-right corner. The webpage will navigate to the &quot;Quotas&quot; page.</p>
<figure><img src="@source/userguide/poc/images/tm-cae-platform-account-quota-check-2.png" alt="tm-cae-platform-account-quota-check-2.png" tabindex="0" loading="lazy"><figcaption>tm-cae-platform-account-quota-check-2.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/tm-cae-platform-account-quota-check-3.png" alt="tm-cae-platform-account-quota-check-3.png" tabindex="0" loading="lazy"><figcaption>tm-cae-platform-account-quota-check-3.png</figcaption></figure>
<h4 id="count-your-tm-cae-account-resource-quotas-and-calculate-the-remaining-quota" tabindex="-1"><a class="header-anchor" href="#count-your-tm-cae-account-resource-quotas-and-calculate-the-remaining-quota"><span>Count your TM CAE account resource quotas and calculate the remaining quota</span></a></h4>
<figure><img src="@source/userguide/poc/images/tm-cae-platform-account-quota-check-3.png" alt="tm-cae-platform-account-quota-check-3.png" tabindex="0" loading="lazy"><figcaption>tm-cae-platform-account-quota-check-3.png</figcaption></figure>
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
<td>ECS</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Elastic Cloud Server</td>
<td>vCPU</td>
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
<td>Image</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Elastic Volume Service</td>
<td>Disk</td>
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
<td>EIP</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="compare-the-remaining-quota-with-the-resources-of-the-source-hosts" tabindex="-1"><a class="header-anchor" href="#compare-the-remaining-quota-with-the-resources-of-the-source-hosts"><span>Compare the remaining quota with the resources of the source hosts</span></a></h4>
<p>Compare the resource levels of the source hosts, as per your inventory, with the remaining resource quota in your TM CAE account to assess whether it meets the requirements for disaster recovery.</p>
<p><strong>1. If you are using object storage recovery mode for DR, please refer to the following criteria.</strong></p>
<blockquote>
<p><strong>Elastic Cloud Server: ECS</strong> Residual Quota ≥ The total number of source host<br>
<strong>Elastic Cloud Server: vCPU</strong> Residual Quota ≥ The total number of source host CPU<br>
<strong>Elastic Cloud Server: Memory (MB)</strong> Residual Quota ≥ The total number of source host RAM(MB)<br>
<strong>Elastic Volume Service: Disk</strong> Residual Quota ≥ The total number of source host disks<br>
<strong>Elastic Volume Service: Disk capacity(GB)</strong> Residual Quota ≥ The total disk capacity for source host(GB)<br>
<strong>Image Management Service: Image</strong>  Residual Quota ≥ 2<br>
<strong>Virtual Private Cloud: EIP</strong> Residual Quota: Satisfying the required number of public IP for the disaster recovery hosts to be restored to the TM CAE platform is sufficient.</p>
</blockquote>
<p><strong>2. If you are using block storage recovery mode for DR, please refer to the following criteria.</strong></p>
<blockquote>
<p><strong>Elastic Cloud Server: ECS</strong> Residual Quota ≥ The total number of source host + Number of HyperGate instances<br>
<strong>Elastic Cloud Server: vCPU</strong> Residual Quota ≥ The total number of source host CPU + 2 * Number of HyperGate instances<br>
<strong>Elastic Cloud Server: Memory (MB)</strong> Residual Quota ≥ The total number of source host RAM(MB) + 2048(MB) * Number of HyperGate instances<br>
<strong>Elastic Volume Service: Disk</strong> Residual Quota ≥ 2 * Total number of source host disks + Number of HyperGate instances<br>
<strong>Elastic Volume Service: Disk capacity(GB)</strong> Residual Quota ≥ 2 * Total disk capacity for source host(GB) + 40(GB) * Number of HyperGate instances<br>
<strong>Image Management Service: Image</strong>  Residual Quota ≥ 2<br>
<strong>Virtual Private Cloud: EIP</strong> Residual Quota: The quantity should satisfy the sum of the required public IP addresses for the disaster recovery hosts to be restored to the TM CAE platform, including both the number of public IP for the source hosts and the quantity of HyperGate instances.</p>
</blockquote>
<p>If it is discovered that the remaining resource quota in the TM CAE account is insufficient, it is necessary to clean up unnecessary resources in the account or apply to TM CAE for an expansion of resource quotas.</p>
<h3 id="increase-quotas-in-your-tm-cae-account" tabindex="-1"><a class="header-anchor" href="#increase-quotas-in-your-tm-cae-account"><span>Increase quotas in your TM CAE account.</span></a></h3>
<p>If it is discovered that the remaining resource quota in the TM CAE account is insufficient, and there are no resources to clean up in the account, you can click on &quot;Increase Quota&quot; to view the method for expanding the quota.</p>
<figure><img src="@source/userguide/poc/images/tm-cae-platform-account-quota-check-4.png" alt="tm-cae-platform-account-quota-check-4.png" tabindex="0" loading="lazy"><figcaption>tm-cae-platform-account-quota-check-4.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/tm-cae-platform-account-quota-check-5.png" alt="tm-cae-platform-account-quota-check-5.png" tabindex="0" loading="lazy"><figcaption>tm-cae-platform-account-quota-check-5.png</figcaption></figure>
<h2 id="image-download-upload" tabindex="-1"><a class="header-anchor" href="#image-download-upload"><span>Image Download &amp; Upload</span></a></h2>
<h3 id="image-download" tabindex="-1"><a class="header-anchor" href="#image-download"><span>Image Download</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Windows images are primarily used for disaster recovery with UEFI Windows as the source host, while Linux images are used in block storage mode and serve as the base image for cloud sync gateway creation.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Download Windows/Linux images to your local machine through the provided image links.</p>
</div>
<h3 id="image-info" tabindex="-1"><a class="header-anchor" href="#image-info"><span>Image Info</span></a></h3>
<h4 id="linux-image" tabindex="-1"><a class="header-anchor" href="#linux-image"><span>Linux Image</span></a></h4>
<ul>
<li>Version：CentOS 8.4 64bit</li>
<li>Size： 1.22 GB</li>
<li>Download Link：<a href="https://hyperbdr-system-image-do-not-delete.obs.ap-southeast-3.myhuaweicloud.com/CentOS-8-GenericCloud-8.4.2105-20210603.0.x86_64.qcow2" target="_blank" rel="noopener noreferrer">https://hyperbdr-system-image-do-not-delete.obs.ap-southeast-3.myhuaweicloud.com/CentOS-8-GenericCloud-8.4.2105-20210603.0.x86_64.qcow2</a></li>
<li>MD5 Value of the Image: fe9f21a75a80d12159030fff76e1c8a5</li>
</ul>
<h4 id="windows-image" tabindex="-1"><a class="header-anchor" href="#windows-image"><span>Windows Image</span></a></h4>
<ul>
<li>Version：Windows Server 2016 Datacenter 64bit English</li>
<li>Size：12.11 GB</li>
<li>Download Link：<a href="https://hyperbdr-system-image-do-not-delete.obs.ap-southeast-3.myhuaweicloud.com/Windows_Server_2016_Datacenter_64bit_English_40G.qcow2" target="_blank" rel="noopener noreferrer">https://hyperbdr-system-image-do-not-delete.obs.ap-southeast-3.myhuaweicloud.com/Windows_Server_2016_Datacenter_64bit_English_40G.qcow2</a></li>
<li>MD5 Value of the Image: 519444d4b0343e15fa014c50d906a832</li>
</ul>
<h3 id="upload-image-to-tm-cae-object-storage" tabindex="-1"><a class="header-anchor" href="#upload-image-to-tm-cae-object-storage"><span>Upload Image to TM CAE Object Storage</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>TM CAE documentation link:<br>
<a href="https://support.alphaedge.tmone.com.my/en-us/usermanual/ims/en-us_topic_0030713183.html" target="_blank" rel="noopener noreferrer">Upload Windows Image</a><br>
<a href="https://support.alphaedge.tmone.com.my/usermanual/ims/en-us_topic_0030713192.html" target="_blank" rel="noopener noreferrer">Upload Linux Image</a></p>
</div>
<h3 id="import-image" tabindex="-1"><a class="header-anchor" href="#import-image"><span>Import Image</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>TM CAE documentation link:<br>
<a href="https://support.alphaedge.tmone.com.my/en-us/usermanual/ims/en-us_topic_0030713184.html" target="_blank" rel="noopener noreferrer">Register Windows Image</a><br>
<a href="https://support.alphaedge.tmone.com.my/en-us/usermanual/ims/en-us_topic_0030713193.html" target="_blank" rel="noopener noreferrer">Register Linux Image</a></p>
</div>
<h4 id="step1-access-the-ims-console" tabindex="-1"><a class="header-anchor" href="#step1-access-the-ims-console"><span>Step1: Access the IMS console.</span></a></h4>
<ul>
<li>Log in to the management console.</li>
<li>Under Computing, click Image Management Service.The IMS console is displayed.Register an external image file as a private image.</li>
</ul>
<figure><img src="@source/userguide/poc/images/tmcae-image-download--upload-1.png" alt="tmcae-image-download--upload-1.png" tabindex="0" loading="lazy"><figcaption>tmcae-image-download--upload-1.png</figcaption></figure>
<h4 id="step2-register-an-external-image-file-as-a-private-image" tabindex="-1"><a class="header-anchor" href="#step2-register-an-external-image-file-as-a-private-image"><span>Step2: Register an external image file as a private image</span></a></h4>
<ul>
<li>Click Create Image in the upper right corner</li>
</ul>
<figure><img src="@source/userguide/poc/images/tmcae-image-download--upload-2.png" alt="tmcae-image-download--upload-2.png" tabindex="0" loading="lazy"><figcaption>tmcae-image-download--upload-2.png</figcaption></figure>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>1.The name must be one of the following and cannot have additional characters.<br>
2.Due to the diverse versions of Windows on the source hosts, select the generic option for the operating system.<br>
3.Linux image is primarily used for creating an HD. The recommended version for the current release is CentOS 8+</p>
</div>
<p>Supported Windows image names</p>
<blockquote>
<p>Windows Server 2012 R2 Standard 64bit<br>
Windows Server 2012 R2 Datacenter 64bit<br>
Windows Server 2016 Standard 64bit<br>
Windows Server 2016 Standard 64bit English<br>
Windows Server 2016 Datacenter 64bit<br>
Windows Server 2016 Datacenter 64bit English<br>
Windows Server 2019 Datacenter 64bit<br>
Windows Server 2019 Datacenter 64bit English</p>
</blockquote>
<figure><img src="@source/userguide/poc/images/tmcae-image-download--upload-3.png" alt="tmcae-image-download--upload-3.png" tabindex="0" loading="lazy"><figcaption>tmcae-image-download--upload-3.png</figcaption></figure>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>The size of the System disk must be 40G.<br>
Boot Mode Select BIOS.</p>
</div>
<figure><img src="@source/userguide/poc/images/tmcae-image-download--upload-4.png" alt="tmcae-image-download--upload-3.png" tabindex="0" loading="lazy"><figcaption>tmcae-image-download--upload-3.png</figcaption></figure>
<p>Supported Linux image names</p>
<blockquote>
<p>CentOS 8.4 64bit<br>
CentOS 8.3 64bit<br>
CentOS 8.2 64bit<br>
CentOS 8.1 64bit<br>
CentOS 8.5 64bit</p>
</blockquote>
<figure><img src="@source/userguide/poc/images/tmcae-image-download--upload-3.png" alt="tmcae-image-download--upload-3.png" tabindex="0" loading="lazy"><figcaption>tmcae-image-download--upload-3.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/tmcae-image-download--upload-5.png" alt="image-download--upload-5.png" tabindex="0" loading="lazy"><figcaption>image-download--upload-5.png</figcaption></figure>
<h4 id="step3-confirm-and-submit" tabindex="-1"><a class="header-anchor" href="#step3-confirm-and-submit"><span>Step3: Confirm and submit</span></a></h4>
<ul>
<li>
<p>Click Next and confirm the image specifications. Click Submit.</p>
</li>
<li>
<p>Go back to the Private Images page. The image is successfully registered when its status becomes Normal.</p>
</li>
</ul>
<h2 id="vpn-setup" tabindex="-1"><a class="header-anchor" href="#vpn-setup"><span>VPN Setup</span></a></h2>
<blockquote>
<p>Note: If your DR Environment is connected to the Intranet of the production site through TM CAE, you need to purchase the TM CAE VPN service and configure the TM CAE to connect to the On-perms network.</p>
</blockquote>
<blockquote>
<p>Configure VPN. For details, see TM CAE documentation.<br>
Document Link: <a href="https://support.alphaedge.tmone.com.my/en-us/usermanual/vpn/en-us_topic_0133627788.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/en-us/usermanual/vpn/en-us_topic_0133627788.html</a></p>
</blockquote>
<h2 id="create-vpc-endpoint" tabindex="-1"><a class="header-anchor" href="#create-vpc-endpoint"><span>Create VPC Endpoint</span></a></h2>
<blockquote>
<p>If your disaster recovery environment is interconnected with the production site's intranet through VPN, and the production site needs to access HyperBDR and OBS services through VPN during a disaster, then you need to purchase and configure VPC Endpoint services in TM CAE.</p>
</blockquote>
<blockquote>
<p>You need to purchase two VPC Endpoint services, one for OBS and the other for DNS.</p>
</blockquote>
<blockquote>
<p>Official definition: If you want to access OBS services from a local data center via VPN or Cloud Connect using an intranet method, you can achieve this by connecting through terminal endpoints to access terminal endpoint services.<br>
Document Link：<a href="https://support.alphaedge.tmone.com.my/usermanual/vpcep/vpcep_02_0301.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/usermanual/vpcep/vpcep_02_0301.html</a></p>
</blockquote>
<h2 id="create-vpc-peering" tabindex="-1"><a class="header-anchor" href="#create-vpc-peering"><span>Create VPC Peering</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Based on business requirements, choose different VPC peering configurations:</p>
<ul>
<li>If there is no need for mutual access between multiple business VPCs, you only need to configure the peering connection according to the <a href="https://docs.oneprocloud.com/userguide/poc/tmcae-pre-settings.html#disaster-recovery-vpc-connected-via-peering-with-multiple-business-vpc" target="_blank" rel="noopener noreferrer">Disaster recovery VPC connected via peering with multiple business VPC</a> setup.</li>
<li>If there is a requirement for mutual access between multiple business VPCs, then you need to configure according to the <a href="https://docs.oneprocloud.com/userguide/poc/tmcae-pre-settings.html#disaster-recovery-vpc-peering-with-multiple-business-vpcs-as-well-as-peering-connections-between-multiple-business-vpc" target="_blank" rel="noopener noreferrer">Disaster recovery VPC peering with multiple business VPCs, as well as peering connections between multiple business VPC</a> setup.</li>
</ul>
</div>
<h3 id="disaster-recovery-vpc-connected-via-peering-with-multiple-business-vpc" tabindex="-1"><a class="header-anchor" href="#disaster-recovery-vpc-connected-via-peering-with-multiple-business-vpc"><span>Disaster recovery VPC connected via peering with multiple business VPC</span></a></h3>
<p>In TM CAE Disaster Recovery, the disaster recovery host needs to be restored to the planned production business VPC. Therefore, it is necessary to configure cross VPC peer-to-peer connections in TM CAE, configure the disaster recovery VPC with the business VPC, and add peer-to-peer connection routing. Mainly used for disaster recovery, the disaster recovery VPC where HyperBDR is located can access the business VPC through the intranet to recover virtual machines for data recovery.</p>
<blockquote>
<p>Peering One Central VPC with Multiple VPCs Document Link:<br>
<a href="https://support.alphaedge.tmone.com.my/usermanual/vpc/en-us_topic_0046809840.html#en-us_topic_0046809840__section51284316142" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/usermanual/vpc/en-us_topic_0046809840.html#en-us_topic_0046809840__section51284316142</a></p>
</blockquote>
<h3 id="disaster-recovery-vpc-peering-with-multiple-business-vpcs-as-well-as-peering-connections-between-multiple-business-vpc" tabindex="-1"><a class="header-anchor" href="#disaster-recovery-vpc-peering-with-multiple-business-vpcs-as-well-as-peering-connections-between-multiple-business-vpc"><span>Disaster recovery VPC peering with multiple business VPCs, as well as peering connections between multiple business VPC</span></a></h3>
<p>When all disaster recovery hosts of the customer need to be placed in different business VPCs planned by TM CAE and there is a need for cross VPC access in the business, then it is necessary to configure peer-to-peer connections between business VPCs to ensure normal cross VPC business interaction after subsequent business recovery.</p>
<blockquote>
<p>Peering Two or More VPCs Document Link:<br>
<a href="https://support.alphaedge.tmone.com.my/usermanual/vpc/en-us_topic_0046809840.html#en-us_topic_0046809840__section1450741418179" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/usermanual/vpc/en-us_topic_0046809840.html#en-us_topic_0046809840__section1450741418179</a></p>
</blockquote>
<h2 id="test-network-access-between-vpcs" tabindex="-1"><a class="header-anchor" href="#test-network-access-between-vpcs"><span>Test Network Access between VPCs</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p><a href="https://docs.oneprocloud.com/userguide/poc/tmcae-pre-settings.html#create-vpc-peering" target="_blank" rel="noopener noreferrer">Create VPC Peering</a> configuration has been successfully completed, and routing entries have been added correctly.</p>
</div>
<h3 id="test-the-network-connectivity-between-the-disaster-recovery-vpc-and-the-business-vpc" tabindex="-1"><a class="header-anchor" href="#test-the-network-connectivity-between-the-disaster-recovery-vpc-and-the-business-vpc"><span>Test the network connectivity between the disaster recovery VPC and the business VPC</span></a></h3>
<ul>
<li>
<p>Step1: Login to TM CAE and create an ECS test cloud server<br>
Create an ECS test cloud server (CentOS 7.6 operating system) on TM CAE. When configuring the network, choose the business VPC and subnet. Ensure that the security group of this newly created ECS test virtual machine has an inbound access policy allowing port 22.</p>
</li>
<li>
<p>Step2: Network testing access from the disaster recovery VPC to the business VPC</p>
</li>
</ul>
<p>Log in to the TM CAE console, access the HyperBDR ECS cloud server, and use the intranet IP to connect to the ECS host within the business VPC.</p>
<figure><img src="@source/userguide/poc/images/test-the-intranet-network-connectivity-across-vpcs-1.png" alt="test-the-intranet-network-connectivity-across-vpcs-1.png" tabindex="0" loading="lazy"><figcaption>test-the-intranet-network-connectivity-across-vpcs-1.png</figcaption></figure>
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
<h2 id="test-network-connectivity-from-proxy-to-object-storage" tabindex="-1"><a class="header-anchor" href="#test-network-connectivity-from-proxy-to-object-storage"><span>Test Network Connectivity from Proxy to Object Storage</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Make sure you already login to Proxy VM</p>
</div>
<h3 id="internet" tabindex="-1"><a class="header-anchor" href="#internet"><span>Internet</span></a></h3>
<p>Ensure your proxy can access internet before testing.</p>
<h4 id="public-dns-connectivity-testing" tabindex="-1"><a class="header-anchor" href="#public-dns-connectivity-testing"><span>Public DNS Connectivity Testing</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ping -c 4 -t 2 8.8.8.8</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ping -c 4 -t 2 8.8.8.8</span></span>
<span class="line"><span>PING 8.8.8.8 (8.8.8.8): 56 data bytes</span></span>
<span class="line"><span>64 bytes from 8.8.8.8: icmp_seq=0 ttl=111 time=43.362 ms</span></span>
<span class="line"><span>64 bytes from 8.8.8.8: icmp_seq=1 ttl=111 time=49.807 ms</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--- 8.8.8.8 ping statistics ---</span></span>
<span class="line"><span>2 packets transmitted, 2 packets received, 0.0% packet loss</span></span>
<span class="line"><span>round-trip min/avg/max/stddev = 43.362/46.585/49.807/3.222 ms</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tm-cae-object-storage-bucket-connectivity" tabindex="-1"><a class="header-anchor" href="#tm-cae-object-storage-bucket-connectivity"><span>TM CAE Object Storage Bucket Connectivity</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>curl I https://obs.my-kualalumpur-1.alphaedge.tmone.com.my</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>HTTP/1.1 405 Method Not Allowed</span></span>
<span class="line"><span>Server: OBS</span></span>
<span class="line"><span>x-obs-request-id: 0000018DF405888D9011AFB39D67F98A</span></span>
<span class="line"><span>Allow: HEAD, GET, OPTIONS</span></span>
<span class="line"><span>x-obs-id-2: 32AAAQAAEAABAAAQAAEAABAAAQAAEAABCRv4Sw/xc+SxYUK6EjH40JhyPz4MkKIn</span></span>
<span class="line"><span>Content-Type: application/xml</span></span>
<span class="line"><span>Date: Thu, 29 Feb 2024 08:40:19 GMT</span></span>
<span class="line"><span>Content-Length: 380</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Note: This command is primarily used to test the accessibility of TM CAE Object Storage buckets. Currently, the tested OBS domain is for the TM CAE MY-Kuala Lumpur region. If you need to test in a different region, please refer to the official TM CAE documentation to find the corresponding Endpoint domain address.</p>
</div>
<p>Reference Link: <a href="https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html</a></p>
<h3 id="vpn" tabindex="-1"><a class="header-anchor" href="#vpn"><span>VPN</span></a></h3>
<h4 id="check-object-storage-service-endpoint" tabindex="-1"><a class="header-anchor" href="#check-object-storage-service-endpoint"><span>Check Object Storage Service Endpoint</span></a></h4>
<p>Make sure object storage service endpoint address return internal ip address.</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> obs.my-kualalumpur-1.alphaedge.tmone.com.my</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>PING obs.lz01.my-kualalumpur-1.alphaedge.tmone.com.my (100.125.32.15)) 56(84) bytes of data.</span></span>
<span class="line"><span>64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=1 ttl=44 time=0.255 ms</span></span>
<span class="line"><span>64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=2 ttl=44 time=0.294 ms</span></span>
<span class="line"><span>64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=3 ttl=44 time=0.300 ms</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>TM CAE Object Storage Service internal IP Range: 100.125.xx.xx If there is no ICMP response, it is considered normal.</p>
</div>
<h4 id="tm-cae-object-storage-bucket-connectivity-1" tabindex="-1"><a class="header-anchor" href="#tm-cae-object-storage-bucket-connectivity-1"><span>TM CAE Object Storage Bucket Connectivity</span></a></h4>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -I</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://obs.my-kualalumpur-1.alphaedge.tmone.com.my</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>HTTP/1.1 405 Method Not Allowed</span></span>
<span class="line"><span>Server: OBS</span></span>
<span class="line"><span>x-obs-request-id: 0000018DF405888D9011AFB39D67F98A</span></span>
<span class="line"><span>Allow: HEAD, GET, OPTIONS</span></span>
<span class="line"><span>x-obs-id-2: 32AAAQAAEAABAAAQAAEAABAAAQAAEAABCRv4Sw/xc+SxYUK6EjH40JhyPz4MkKIn</span></span>
<span class="line"><span>Content-Type: application/xml</span></span>
<span class="line"><span>Date: Thu, 29 Feb 2024 08:40:19 GMT</span></span>
<span class="line"><span>Content-Length: 380</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Note: This command is primarily used to test the accessibility of TM CAE Object Storage buckets. Currently, the tested OBS domain is for the TM CAE MY-Kuala Lumpur region. If you need to test in a different region, please refer to the official TM CAE documentation to find the corresponding Endpoint domain address.</p>
</div>
<p>Reference Link: <a href="https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html</a></p>
<h2 id="option-2-intranet-vpn-access-configure-tm-cae-intranet-dns-address-for-the-network-device-where-the-agent-host-resid" tabindex="-1"><a class="header-anchor" href="#option-2-intranet-vpn-access-configure-tm-cae-intranet-dns-address-for-the-network-device-where-the-agent-host-resid"><span>(Option 2: Intranet VPN access)Configure TM CAE Intranet DNS address for the network device where the Agent host resid</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If your disaster recovery environment is interconnected with the production site's intranet through TM CAE VPN, after creating the VPC Endpoint service, you need to add the resolution address of the TM CAE intranet OBS VPC Endpoint service in the network where the production site's Agent host is located.</p>
</div>
<h3 id="configure-firewall-or-network-devices-such-as-switches" tabindex="-1"><a class="header-anchor" href="#configure-firewall-or-network-devices-such-as-switches"><span>Configure firewall or network devices such as switches</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Example: Palo Alto Firewall<br>
The following operations are performed in the firewall web management interface.</p>
</div>
<ol>
<li>
<p>Navigate to [Network] &gt; [DNS Proxy] .</p>
</li>
<li>
<p>Click [Add] to bring up the DNS proxy dialog box.</p>
</li>
<li>
<p>Select the interface on which DNS proxy should be enabled. In the following figure, DNS proxy is enabled on Ethernet 1/2 and 1/3 interfaces.</p>
</li>
<li>
<p>Select the primary and secondary servers to which the firewall should forward DNS queries. This example shows the configuration of enabling DNS proxy on Ethernet interfaces 1/2 and 1/3. The active DNS server is set to 10.0.0.246 (This IP is configured as the TM CAE internal DNS Server Addresse).</p>
</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Configure the TM CAE internal DNS address based on the region where you use TM CAE resources.<br>
TM CAE internal DNS service address at： <a href="https://support.alphaedge.tmone.com.my/en-us/usermanual/dns/dns_faq_002.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/en-us/usermanual/dns/dns_faq_002.html</a></p>
</div>
<figure><img src="@source/userguide/poc/images/configure-a-huawei-cloud-intranet-dns-address-for-the-network-device-1.png" alt="configure-a-huawei-cloud-intranet-dns-address-for-the-network-device-1.png" tabindex="0" loading="lazy"><figcaption>configure-a-huawei-cloud-intranet-dns-address-for-the-network-device-1.png</figcaption></figure>
<h2 id="option-1-public-network-access-test-the-connectivity-between-the-agent-host-and-tm-cae-obs" tabindex="-1"><a class="header-anchor" href="#option-1-public-network-access-test-the-connectivity-between-the-agent-host-and-tm-cae-obs"><span>(Option 1: Public Network Access)Test The Connectivity Between The Agent Host And TM CAE OBS</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Ensure your source hosts can access internet before testing.</p>
</div>
<h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Perform testing operations using the Windows Command Prompt (CMD).</p>
</div>
<h4 id="public-dns-connectivity-testing-1" tabindex="-1"><a class="header-anchor" href="#public-dns-connectivity-testing-1"><span>Public DNS Connectivity Testing</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 8.8.8.8</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Success Response:</p>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-41.png" alt="agent-pre-settings-41.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-41.png</figcaption></figure>
<h4 id="tm-cae-object-storage-connectivity" tabindex="-1"><a class="header-anchor" href="#tm-cae-object-storage-connectivity"><span>TM CAE Object Storage Connectivity</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> obs.my-kualalumpur-1.alphaedge.tmone.com.my</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>C:\Users\Administrator>ping obs.my-kualalumpur-1.alphaedge.tmone.com.my</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Pinging obs.lz01.my-kualalumpur-1.alphaedge.tmone.com.my [202.165.20.91] with 32</span></span>
<span class="line"><span> bytes of data:</span></span>
<span class="line"><span>Reply from 202.165.20.91: bytes=32 time=311ms TTL=44</span></span>
<span class="line"><span>Reply from 202.165.20.91: bytes=32 time=310ms TTL=44</span></span>
<span class="line"><span>Reply from 202.165.20.91: bytes=32 time=319ms TTL=44</span></span>
<span class="line"><span>Reply from 202.165.20.91: bytes=32 time=310ms TTL=44</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Ping statistics for 202.165.20.91:</span></span>
<span class="line"><span>    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),</span></span>
<span class="line"><span>Approximate round trip times in milli-seconds:</span></span>
<span class="line"><span>    Minimum = 310ms, Maximum = 319ms, Average = 312ms</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h3>
<h4 id="public-dns-connectivity-testing-2" tabindex="-1"><a class="header-anchor" href="#public-dns-connectivity-testing-2"><span>Public DNS Connectivity Testing</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -c</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 4</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 8.8.8.8</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>ping -c 4 -t 2 8.8.8.8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PING 8.8.8.8 (8.8.8.8): 56 data bytes</span></span>
<span class="line"><span></span></span>
<span class="line"><span>64 bytes from 8.8.8.8: icmp_seq=0 ttl=111 time=43.362 ms</span></span>
<span class="line"><span></span></span>
<span class="line"><span>64 bytes from 8.8.8.8: icmp_seq=1 ttl=111 time=49.807 ms</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>--- 8.8.8.8 ping statistics ---</span></span>
<span class="line"><span>2 packets transmitted, 2 packets received, 0.0% packet loss</span></span>
<span class="line"><span>round-trip min/avg/max/stddev = 43.362/46.585/49.807/3.222 ms</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tm-cae-object-storage-connectivity-1" tabindex="-1"><a class="header-anchor" href="#tm-cae-object-storage-connectivity-1"><span>TM CAE Object Storage Connectivity</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> obs.my-kualalumpur-1.alphaedge.tmone.com.my</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>64 bytes from 202.165.20.91 (202.165.20.91): icmp_seq=1 ttl=44 time=68 ms</span></span>
<span class="line"><span>64 bytes from 202.165.20.91 (202.165.20.91): icmp_seq=3 ttl=44 time=77 ms</span></span>
<span class="line"><span>64 bytes from 202.165.20.91 (202.165.20.91): icmp_seq=4 ttl=44 time=66 ms</span></span>
<span class="line"><span>64 bytes from 202.165.20.91 (202.165.20.91): icmp_seq=5 ttl=44 time=71 ms</span></span>
<span class="line"><span>64 bytes from 202.165.20.91 (202.165.20.91): icmp_seq=6 ttl=44 time=79 ms</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Note: This command is primarily used to test the accessibility of TM CAE Object Storage buckets. Currently, the tested OBS domain is for the TM CAE MY-Kuala Lumpur region. If you need to test in a different region, please refer to the official TM CAE documentation to find the corresponding Endpoint domain address.</p>
</div>
<p>Reference Link: <a href="https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html</a></p>
<h2 id="option-2-internal-vpn-access-test-the-connectivity-between-the-agent-host-and-tm-cae-obs" tabindex="-1"><a class="header-anchor" href="#option-2-internal-vpn-access-test-the-connectivity-between-the-agent-host-and-tm-cae-obs"><span>(Option 2: Internal VPN Access)Test The Connectivity Between The Agent Host And TM CAE OBS</span></a></h2>
<h3 id="windows-host" tabindex="-1"><a class="header-anchor" href="#windows-host"><span>Windows Host</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Perform testing operations using the Windows Command Prompt (CMD).</p>
</div>
<h4 id="tm-cae-private-dns-connectivity-testing" tabindex="-1"><a class="header-anchor" href="#tm-cae-private-dns-connectivity-testing"><span>TM CAE Private DNS Connectivity Testing</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Refer to the following document to find the private NDS (Network Domain Service) address based on the used object storage region.<br>
Reference documents：<a href="https://support.alphaedge.tmone.com.my/en-us/usermanual/dns/dns_faq_002.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/en-us/usermanual/dns/dns_faq_002.html</a></p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100.125.12.250</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>C:\Users\Administrator>ping 100.125.12.250</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Pinging 100.125.12.250 with 32 bytes of data:</span></span>
<span class="line"><span>Reply from 100.125.12.250: bytes=32 time=101ms TTL=84</span></span>
<span class="line"><span>Reply from 100.125.12.250: bytes=32 time=96ms TTL=93</span></span>
<span class="line"><span>Reply from 100.125.12.250: bytes=32 time=91ms TTL=75</span></span>
<span class="line"><span>Reply from 100.125.12.250: bytes=32 time=95ms TTL=77</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Ping statistics for 100.125.12.250:</span></span>
<span class="line"><span>    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),</span></span>
<span class="line"><span>Approximate round trip times in milli-seconds:</span></span>
<span class="line"><span>    Minimum = 91ms, Maximum = 101ms, Average = 95ms</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tm-cae-object-storage-connectivity-2" tabindex="-1"><a class="header-anchor" href="#tm-cae-object-storage-connectivity-2"><span>TM CAE Object Storage Connectivity</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> obs.my-kualalumpur-1.alphaedge.tmone.com.my</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>C:\Users\Administrator>ping obs.my-kualalumpur-1.alphaedge.tmone.com.my</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Pinging obs.lz01.my-kualalumpur-1.alphaedge.tmone.com.my [100.125.32.15] with 32</span></span>
<span class="line"><span> bytes of data:</span></span>
<span class="line"><span>Reply from 100.125.32.15: bytes=32 time=311ms TTL=44</span></span>
<span class="line"><span>Reply from 100.125.32.15: bytes=32 time=310ms TTL=44</span></span>
<span class="line"><span>Reply from 100.125.32.15: bytes=32 time=319ms TTL=44</span></span>
<span class="line"><span>Reply from 100.125.32.15: bytes=32 time=310ms TTL=44</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Ping statistics for 100.125.32.15:</span></span>
<span class="line"><span>    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),</span></span>
<span class="line"><span>Approximate round trip times in milli-seconds:</span></span>
<span class="line"><span>    Minimum = 310ms, Maximum = 319ms, Average = 312ms</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linux-host" tabindex="-1"><a class="header-anchor" href="#linux-host"><span>Linux Host</span></a></h3>
<h4 id="check-object-storage-service-endpoint-1" tabindex="-1"><a class="header-anchor" href="#check-object-storage-service-endpoint-1"><span>Check Object Storage Service Endpoint</span></a></h4>
<p>Make sure object storage service endpoint address return internal ip address.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ping obs.my-kualalumpur-1.alphaedge.tmone.com.my</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=1 ttl=44 time=0.255 ms</span></span>
<span class="line"><span>64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=2 ttl=44 time=0.294 ms</span></span>
<span class="line"><span>64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=3 ttl=44 time=0.300 ms</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>TM CAE Object Storage Service internal IP Range: 100.125.xx.xx If there is no ICMP response, it is considered normal.</p>
</div>
<h4 id="tm-cae-object-storage-connectivity-3" tabindex="-1"><a class="header-anchor" href="#tm-cae-object-storage-connectivity-3"><span>TM CAE Object Storage Connectivity</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>curl -I obs.my-kualalumpur-1.alphaedge.tmone.com.my</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>HTTP/1.1 405 Method Not Allowed</span></span>
<span class="line"><span>Server: OBS</span></span>
<span class="line"><span>Date: Tue, 05 Mar 2024 08:25:12 GMT</span></span>
<span class="line"><span>Content-Type: application/xml</span></span>
<span class="line"><span>Content-Length: 380</span></span>
<span class="line"><span>Connection: close</span></span>
<span class="line"><span>x-reserved: amazon, aws and amazon web services are trademarks or registered trademarks of Amazon Technologies, Inc</span></span>
<span class="line"><span>x-amz-request-id: 0000018E0DB77D90900FFC3569013F9E</span></span>
<span class="line"><span>Allow: HEAD, GET, OPTIONS</span></span>
<span class="line"><span>x-amz-id-2: 32AAAQAAEAABAAAQAAEAABAAAQAAEAABCRFIjeNiGuFNgKb8WqvHNfJse+CDi0GZ</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This command is primarily used to test the accessibility of TM CAE Object Storage buckets. Currently, the tested OBS domain is for the TM CAE MY-Kuala Lumpur region. If you need to test in a different region, please refer to the official TM CAE documentation to find the corresponding Endpoint domain address.<br>
Reference Link: <a href="https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html</a></p>
</div>
</div></template>


