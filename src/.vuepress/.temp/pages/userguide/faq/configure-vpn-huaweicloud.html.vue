<template><div><h1 id="configure-the-vpn-connection-between-huawei-cloud-and-idc" tabindex="-1"><a class="header-anchor" href="#configure-the-vpn-connection-between-huawei-cloud-and-idc"><span>Configure the VPN connection between Huawei Cloud and IDC</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#_1-create-for-vpn-connection-of-vpc-network-and-subnets">1. Create for VPN connection of VPC network and subnets</router-link></li><li><router-link to="#_2-create-vpn-gateways">2. Create VPN Gateways</router-link></li><li><router-link to="#_3-create-customer-gateway">3. Create Customer Gateway</router-link></li><li><router-link to="#_4-create-active-active-or-active-standby-vpn-connections">4. Create Active-Active or Active/Standby VPN Connections</router-link></li><li><router-link to="#_5-configure-customer-gateway-device-h3c">5. Configure Customer Gateway Device(H3C)</router-link><ul><li><router-link to="#_5-1-add-virtual-interfaces">5.1 Add virtual interfaces</router-link></li></ul></li><li><router-link to="#_6-detect-the-status-of-vpn-connection">6. Detect the status of VPN connection</router-link></li><li><router-link to="#_7-verify-the-network-communication-situation">7. Verify the network communication situation</router-link></li></ul></nav>
<h2 id="_1-create-for-vpn-connection-of-vpc-network-and-subnets" tabindex="-1"><a class="header-anchor" href="#_1-create-for-vpn-connection-of-vpc-network-and-subnets"><span>1. Create for VPN connection of VPC network and subnets</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The VPC network on the cloud side is required not to overlap with the networks that need to be interconnected on the IDC side, including subnet networks.</p>
</div>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-1.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-1.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-1.png</figcaption></figure>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-2.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-2.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-2.png</figcaption></figure>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-3.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-3.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-3.png</figcaption></figure>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-4.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-4.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-4.png</figcaption></figure>
<h2 id="_2-create-vpn-gateways" tabindex="-1"><a class="header-anchor" href="#_2-create-vpn-gateways"><span>2. Create VPN Gateways</span></a></h2>
<p>A VPN gateway is a virtual gateway of a VPN on Huawei Cloud. It establishes secure private connections with a customer gateway in your on-premises network or data center.</p>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-5.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-5.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-5.png</figcaption></figure>
<p>If you want to communicate with all subnets, the Local Subnet here needs to check all subnets.</p>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-6.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-6.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-6.png</figcaption></figure>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-7.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-7.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-7.png</figcaption></figure>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-8.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-8.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-8.png</figcaption></figure>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-9.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-9.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-9.png</figcaption></figure>
<p>Wait for the VPN Gateway to be created and you can proceed to the next step.</p>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-10.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-10.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-10.png</figcaption></figure>
<h2 id="_3-create-customer-gateway" tabindex="-1"><a class="header-anchor" href="#_3-create-customer-gateway"><span>3. Create Customer Gateway</span></a></h2>
<p>A customer gateway is a resource that provides information to Huawei Cloud about your customer gateway device, which can be a physical device or software application in your on-premises data center.</p>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-11.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-11.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-11.png</figcaption></figure>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Example Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Name</td>
<td>Name a customer gateway.</td>
<td>cgw-001</td>
</tr>
<tr>
<td>Identifier</td>
<td>Enter the IP address of the customer gateway.</td>
<td>IP Address，22.xx.xx.22</td>
</tr>
</tbody>
</table>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-12.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-12.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-12.png</figcaption></figure>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-13.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-13.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-13.png</figcaption></figure>
<h2 id="_4-create-active-active-or-active-standby-vpn-connections" tabindex="-1"><a class="header-anchor" href="#_4-create-active-active-or-active-standby-vpn-connections"><span>4. Create Active-Active or Active/Standby VPN Connections</span></a></h2>
<p>A VPN connection is a secure channel between a VPN gateway and a customer gateway. VPN connections use the Internet Key Exchange (IKE) and Internet Protocol Security (IPsec) protocols to encrypt the transmitted data.</p>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-14.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-14.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-14.png</figcaption></figure>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-15.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-15.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-15.png</figcaption></figure>
<p>Policy here, if you want to put the entire VPC on the cloud can communicate, then you can fill in a VPC network 172.16.0.0/16 here, in addition to this place 172.16.0.0/16 configuration, then in the H3C test configuration also need to fill in this network.</p>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-16.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-16.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-16.png</figcaption></figure>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-17.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-17.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-17.png</figcaption></figure>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-18.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-18.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-18.png</figcaption></figure>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-19.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-19.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-19.png</figcaption></figure>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-20.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-20.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-20.png</figcaption></figure>
<h2 id="_5-configure-customer-gateway-device-h3c" tabindex="-1"><a class="header-anchor" href="#_5-configure-customer-gateway-device-h3c"><span>5. Configure Customer Gateway Device(H3C)</span></a></h2>
<p>After a VPN connection is created, you need to configure the customer gateway device and activate the VPN tunnel.</p>
<h3 id="_5-1-add-virtual-interfaces" tabindex="-1"><a class="header-anchor" href="#_5-1-add-virtual-interfaces"><span>5.1 Add virtual interfaces</span></a></h3>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-21.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-21.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-21.png</figcaption></figure>
<p>The IKE security proposal needs to be ensured to be consistent with the IKE protocol configuration on the Huawei Cloud side.</p>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-22.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-22.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-22.png</figcaption></figure>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-23.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-23.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-23.png</figcaption></figure>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-24.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-24.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-24.png</figcaption></figure>
<p>If you want to communicate with all the VPC networks on the cloud, you need to fill in the IP/mask of the subnet of the other end as 172.16.0.0/255.255.0.0. It must be consistent with the Policy configured on the Huawei cloud side, otherwise the connection cannot be established.</p>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-25.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-25.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-25.png</figcaption></figure>
<p>After the configuration is completed, if the data traffic situation of the connected VPN tunnel appears in the security alliance of the H3C platform, it indicates that the connection is normal.</p>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-26.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-26.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-26.png</figcaption></figure>
<p>Add the static route for accessing the cloud network. If this step is not added, even if the VPN connection is normal, the two sides cannot communicate with each other. No other configuration is required on the cloud side, and the route is added by default.</p>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-27.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-27.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-27.png</figcaption></figure>
<h2 id="_6-detect-the-status-of-vpn-connection" tabindex="-1"><a class="header-anchor" href="#_6-detect-the-status-of-vpn-connection"><span>6. Detect the status of VPN connection</span></a></h2>
<p>Back to the Huawei Cloud side. After the configuration is completed, the status also becomes normal.</p>
<figure><img src="@source/userguide/faq/images/configure-the-vpn-connection-between-huawei-cloud-and-idc-28.png" alt="configure-the-vpn-connection-between-huawei-cloud-and-idc-28.png" tabindex="0" loading="lazy"><figcaption>configure-the-vpn-connection-between-huawei-cloud-and-idc-28.png</figcaption></figure>
<h2 id="_7-verify-the-network-communication-situation" tabindex="-1"><a class="header-anchor" href="#_7-verify-the-network-communication-situation"><span>7. Verify the network communication situation</span></a></h2>
<p>It is necessary to create an ECS virtual machine on the Huawei Cloud side. Select the VPC of this virtual machine as HyperBDR-DEMO-DO-NOT-DELETE, and select the subnet as the subnet connected to the cloud.
Then conduct a network access test through the machines at both ends.</p>
</div></template>


