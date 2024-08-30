<template><div><h1 id="huawei-cloud" tabindex="-1"><a class="header-anchor" href="#huawei-cloud"><span>Huawei Cloud</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#intranet-vpn-access-create-and-configure-the-vpn-service">(Intranet VPN Access) Create and configure the VPN service</router-link><ul><li><router-link to="#configuration-document">Configuration document</router-link></li></ul></li><li><router-link to="#internal-vpn-access-create-vpc-endpoint-service">(Internal VPN Access) - Create VPC Endpoint service</router-link><ul><li><router-link to="#configure-vpc-endpoint">Configure VPC Endpoint</router-link></li></ul></li><li><router-link to="#intranet-vpn-access-create-and-configure-the-vpn-service-agent">(Intranet VPN Access) Create and configure the VPN service - Agent</router-link><ul><li><router-link to="#configuration-document-1">Configuration document</router-link></li></ul></li><li><router-link to="#intranet-vpn-access-create-and-configure-vpn-service-vmware">(Intranet VPN Access) Create and Configure VPN Service - VMware</router-link></li><li><router-link to="#intranet-vpn-access-create-huawei-vpc-endpoint-vmware">(Intranet VPN Access) Create Huawei VPC Endpoint - VMware</router-link></li></ul></nav>
<h2 id="intranet-vpn-access-create-and-configure-the-vpn-service" tabindex="-1"><a class="header-anchor" href="#intranet-vpn-access-create-and-configure-the-vpn-service"><span>(Intranet VPN Access) Create and configure the VPN service</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The VPC network of the Huawei cloud failback host connects to the local vCenter/ESXi VM service network.<br>
If the VPC network where the HyperBDR resides has been connected to the vCenter/ESXi service network through the VPN service when the Dr Is deployed to Huawei cloud, you do not need to connect the network again.</p>
</div>
<h3 id="configuration-document" tabindex="-1"><a class="header-anchor" href="#configuration-document"><span>Configuration document</span></a></h3>
<p>Configure VPN. For details, see Huawei Cloud official documentation.</p>
<p>Document Link：<a href="https://support.huaweicloud.com/intl/en-us/qs-vpn/vpn_03_0001.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/qs-vpn/vpn_03_0001.html</a></p>
<h2 id="internal-vpn-access-create-vpc-endpoint-service" tabindex="-1"><a class="header-anchor" href="#internal-vpn-access-create-vpc-endpoint-service"><span>(Internal VPN Access) - Create VPC Endpoint service</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If your disaster recovery environment is interconnected with the production site's intranet through Huawei Cloud VPN, and the production site needs to access Huawei Cloud HyperBDR and OBS services through VPN during a disaster, then you need to purchase and configure VPC Endpoint services in Huawei Cloud.<br>
You need to purchase two VPC Endpoint services, one for OBS and the other for DNS.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If you have purchased and configured the Endpoint service in the VPC when the disaster recovery system is deployed to Huawei cloud, you do not need to repeat this configuration.</p>
</div>
<h3 id="configure-vpc-endpoint" tabindex="-1"><a class="header-anchor" href="#configure-vpc-endpoint"><span>Configure VPC Endpoint</span></a></h3>
<p>Huawei Cloud official definition: If you want to access OBS services from a local data center via VPN or Cloud Connect using an intranet method, you can achieve this by connecting through terminal endpoints to access terminal endpoint services. Document Link：<a href="https://support.huaweicloud.com/intl/en-us/qs-vpcep/vpcep_02_0301.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/qs-vpcep/vpcep_02_0301.html</a></p>
<h4 id="configure-dns-interface-type-for-terminal-endpoints" tabindex="-1"><a class="header-anchor" href="#configure-dns-interface-type-for-terminal-endpoints"><span>Configure DNS Interface Type for Terminal Endpoints</span></a></h4>
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
<td>Select the subnet for VPN interconnection.</td>
</tr>
</tbody>
</table>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-40.png" alt="complete-doc-for-block-storage-failback-40.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-40.png</figcaption></figure>
<h4 id="selection-of-obs-gateway-type-terminal-endpoint" tabindex="-1"><a class="header-anchor" href="#selection-of-obs-gateway-type-terminal-endpoint"><span>Selection of OBS Gateway-type Terminal Endpoint</span></a></h4>
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
<td>Choose the default &quot;Cloud server,&quot; check com.myhuaweicloud.&lt;region&gt;.obs, and set the type as Gateway</td>
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
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>In the Service Category section, it may not be possible to directly find the corresponding OBS service for the default Cloud service type. In such cases, you will need to use &quot;Find a service by name&quot; to search. You must enter the complete name of the specific OBS service. Please confirm with Huawei Cloud as the target OBS service terminal endpoints on the Huawei side may have distinctions between v1 and v2 versions. Additionally, the names of each region and the association between v1/v2 versions and the resource pool of the object storage bucket need clarification. If you have purchased v1 OBS terminal endpoints but your object storage bucket is in a v2 cluster, it must be aligned accordingly. Confirm with Huawei in advance regarding the specific version of the object storage bucket's cluster and OBS terminal endpoints</p>
<p>Example: v2 version OBS terminal endpoint name: sa-brazil-1.com.myhuaweicloud.v4.obsv2.lz002</p>
</div>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-41.png" alt="complete-doc-for-block-storage-failback-41.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-41.png</figcaption></figure>
<h4 id="configure-vpn-local-end-obs-gateway" tabindex="-1"><a class="header-anchor" href="#configure-vpn-local-end-obs-gateway"><span>Configure VPN local-end OBS gateway</span></a></h4>
<p>Add the internal subnet range of the local (Huawei Cloud) OBS service at the VPN connection point. The subnet address for all internal Huawei Cloud OBS services is 100.125.0.0/16.</p>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-42.png" alt="complete-doc-for-block-storage-failback-42.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-42.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-43.png" alt="complete-doc-for-block-storage-failback-43.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-43.png</figcaption></figure>
<h2 id="intranet-vpn-access-create-and-configure-the-vpn-service-agent" tabindex="-1"><a class="header-anchor" href="#intranet-vpn-access-create-and-configure-the-vpn-service-agent"><span>(Intranet VPN Access) Create and configure the VPN service - Agent</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The VPC network of the Huawei cloud failback host connects to the source production environment network.<br>
Note: If the VPC network where the HyperBDR resides has been connected to the source production environment network through the VPN service when the Dr Is deployed to Huawei cloud, you do not need to connect the network again.</p>
</div>
<h3 id="configuration-document-1" tabindex="-1"><a class="header-anchor" href="#configuration-document-1"><span>Configuration document</span></a></h3>
<p>Configure VPN. For details, see Huawei Cloud official documentation.
Document Link：<a href="https://support.huaweicloud.com/intl/en-us/qs-vpn/vpn_03_0001.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/qs-vpn/vpn_03_0001.html</a></p>
<h2 id="intranet-vpn-access-create-and-configure-vpn-service-vmware" tabindex="-1"><a class="header-anchor" href="#intranet-vpn-access-create-and-configure-vpn-service-vmware"><span>(Intranet VPN Access) Create and Configure VPN Service - VMware</span></a></h2>
<p>Requirement: The VPC network where Huawei Cloud HyperBDR is located needs to be interconnected with the local vCenter/ESXi host management network and the upper-level virtual machine business network.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If during disaster recovery to Huawei Cloud, the VPC network where HyperBDR is located is already connected to the vCenter/ESXi business network via a VPN service, then it is only necessary to establish connectivity between the VPC network where HyperBDR is located and the vCenter/ESXi host management network.</p>
</div>
<p>To configure the VPN service, please refer to the detailed information in the official Huawei Cloud documentation.<br>
Document Link:<a href="https://support.huaweicloud.com/intl/en-us/qs-vpn/vpn_03_0001.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/qs-vpn/vpn_03_0001.html</a></p>
<h2 id="intranet-vpn-access-create-huawei-vpc-endpoint-vmware" tabindex="-1"><a class="header-anchor" href="#intranet-vpn-access-create-huawei-vpc-endpoint-vmware"><span>(Intranet VPN Access) Create Huawei VPC Endpoint - VMware</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If the purchase and configuration of VPC Endpoint services have already been completed during the disaster recovery to Huawei Cloud, there is no need to repeat the configuration.</p>
</div>
<p>Reference Document: <a href="https://docs.oneprocloud.com/userguide/poc/huaweicloud-pre-settings.html#create-huawei-vpc-endpoint" target="_blank" rel="noopener noreferrer">https://docs.oneprocloud.com/userguide/poc/huaweicloud-pre-settings.html#create-huawei-vpc-endpoint</a></p>
</div></template>


