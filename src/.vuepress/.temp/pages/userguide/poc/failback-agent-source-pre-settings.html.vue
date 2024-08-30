<template><div><h1 id="general-platform-setup" tabindex="-1"><a class="header-anchor" href="#general-platform-setup"><span>General Platform Setup</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#create-failback-transition-host-agent">Create Failback Transition Host - Agent</router-link></li><li><router-link to="#configure-the-ip-address-for-the-failback-transition-host-agent">Configure the IP address for the Failback Transition Host - Agent</router-link><ul><li><router-link to="#login-the-failback-transition-host-system">Login the Failback Transition Host system</router-link></li><li><router-link to="#manually-configure-the-network">Manually configure the network</router-link></li></ul></li><li><router-link to="#intranet-vpn-access-test-the-connectivity-from-the-failback-transition-host-network-to-huawei-cloud-obs-network-agent">(Intranet VPN Access)Test the connectivity from the Failback Transition Host network to Huawei Cloud OBS network - Agent</router-link><ul><li><router-link to="#login-failback-transition-host-system">Login Failback Transition Host System</router-link></li><li><router-link to="#huawei-cloud-private-dns-connection-test">Huawei Cloud Private DNS Connection Test</router-link></li><li><router-link to="#huawei-cloud-object-storage-connection-test">Huawei Cloud Object Storage Connection Test</router-link></li></ul></li></ul></nav>
<h2 id="create-failback-transition-host-agent" tabindex="-1"><a class="header-anchor" href="#create-failback-transition-host-agent"><span>Create Failback Transition Host - Agent</span></a></h2>
<ol>
<li>Use the failback transition image to create a virtual machine or physical machine in the source production environment as a Failback Transition Host.</li>
<li>The Failback Transition Host serves as the data receiver during rollback and the recovery host during the final rollback.</li>
<li>The Failback Transition Host serves requires a minimum configuration of 2 cores and 4 GB RAM. As this host is the recovery host during the final rollback, the general rule is to have a computing resource configuration consistent with the failback host.</li>
<li>The Failback Transition Host serves storage configuration (disk number and disk capacity) for the Failback Transition Host should match that of the failback host.</li>
</ol>
<p><strong>Example：</strong></p>
<table>
<thead>
<tr>
<th>Host configuration</th>
<th>Tackover Host configuration</th>
<th>Failback Transition Host configuration</th>
</tr>
</thead>
<tbody>
<tr>
<td>CPU</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>RAM</td>
<td>8GB</td>
<td>8GB</td>
</tr>
<tr>
<td>OS disk capacity</td>
<td>100GB</td>
<td>100GB</td>
</tr>
<tr>
<td>data disk1 capacity</td>
<td>200GB</td>
<td>200GB</td>
</tr>
<tr>
<td>data disk2 capacity</td>
<td>500GB</td>
<td>500GB</td>
</tr>
</tbody>
</table>
<h2 id="configure-the-ip-address-for-the-failback-transition-host-agent" tabindex="-1"><a class="header-anchor" href="#configure-the-ip-address-for-the-failback-transition-host-agent"><span>Configure the IP address for the Failback Transition Host - Agent</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The virtual machine/physical machine has already been created as a Failback Transition Host in the source production environment by defaul.</p>
</div>
<h3 id="login-the-failback-transition-host-system" tabindex="-1"><a class="header-anchor" href="#login-the-failback-transition-host-system"><span>Login the Failback Transition Host system</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Default User：root<br>
Default Password：Acb@132.Inst</p>
</div>
<figure><img src="@source/userguide/poc/images/configure-the-ip-address-for-the-failback-gateway-host---agent-1.png" alt="configure-the-ip-address-for-the-failback-gateway-host---agent-1.png" tabindex="0" loading="lazy"><figcaption>configure-the-ip-address-for-the-failback-gateway-host---agent-1.png</figcaption></figure>
<h3 id="manually-configure-the-network" tabindex="-1"><a class="header-anchor" href="#manually-configure-the-network"><span>Manually configure the network</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The Hyperdoor image is configured with default DHCP mode for networking. If the source production environment network you selected supports DHCP, confirm the virtual machine's IP and proceed. If the source production environment network does not use DHCP, manual configuration of the machine's network is required</p>
</div>
<h4 id="confirm-the-virtual-machine-s-network-adapter-device-name" tabindex="-1"><a class="header-anchor" href="#confirm-the-virtual-machine-s-network-adapter-device-name"><span>Confirm the virtual machine's network adapter device name</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/userguide/poc/images/configure-the-ip-address-for-the-failback-gateway-host---agent-2.png" alt="configure-the-ip-address-for-the-failback-gateway-host---agent-2.png" tabindex="0" loading="lazy"><figcaption>configure-the-ip-address-for-the-failback-gateway-host---agent-2.png</figcaption></figure>
<h4 id="clear-network-configuration-information" tabindex="-1"><a class="header-anchor" href="#clear-network-configuration-information"><span>Clear network configuration information</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> addr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> flush</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ens32</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> link</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ens32</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> down</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> link</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ens32</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> up</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Configure a IP address and gateway</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Configure with example information. Please replace the IP address/mask [192.168.x.x/20] and gateway address [192.168.0.1] based on your actual situation.</p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> addr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 192.168.x.x/20</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ens32</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> route</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> via</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 192.168.0.1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ens32</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="view-network-configuration" tabindex="-1"><a class="header-anchor" href="#view-network-configuration"><span>View network configuration</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/userguide/poc/images/configure-the-ip-address-for-the-failback-gateway-host---agent-3.png" alt="configure-the-ip-address-for-the-failback-gateway-host---agent-3.png" tabindex="0" loading="lazy"><figcaption>configure-the-ip-address-for-the-failback-gateway-host---agent-3.png</figcaption></figure>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> route</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/userguide/poc/images/configure-the-ip-address-for-the-failback-gateway-host---agent-4.png" alt="configure-the-ip-address-for-the-failback-gateway-host---agent-4.png" tabindex="0" loading="lazy"><figcaption>configure-the-ip-address-for-the-failback-gateway-host---agent-4.png</figcaption></figure>
<h2 id="intranet-vpn-access-test-the-connectivity-from-the-failback-transition-host-network-to-huawei-cloud-obs-network-agent" tabindex="-1"><a class="header-anchor" href="#intranet-vpn-access-test-the-connectivity-from-the-failback-transition-host-network-to-huawei-cloud-obs-network-agent"><span>(Intranet VPN Access)Test the connectivity from the Failback Transition Host network to Huawei Cloud OBS network - Agent</span></a></h2>
<h3 id="login-failback-transition-host-system" tabindex="-1"><a class="header-anchor" href="#login-failback-transition-host-system"><span>Login Failback Transition Host System</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Default User：root<br>
Default Password：Acb@132.Inst</p>
</div>
<figure><img src="@source/userguide/poc/images/test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-1.png" alt="test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-1.png" tabindex="0" loading="lazy"><figcaption>test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-1.png</figcaption></figure>
<h3 id="huawei-cloud-private-dns-connection-test" tabindex="-1"><a class="header-anchor" href="#huawei-cloud-private-dns-connection-test"><span>Huawei Cloud Private DNS Connection Test</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Please refer to the following document to find the dedicated Network Domain Service (NDS) address based on the used Huawei Cloud OBS region.<br>
Reference Document: <a href="https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html</a></p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100.125.1.250</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<figure><img src="@source/userguide/poc/images/test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-2.png" alt="test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-2.png" tabindex="0" loading="lazy"><figcaption>test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-2.png</figcaption></figure>
<h3 id="huawei-cloud-object-storage-connection-test" tabindex="-1"><a class="header-anchor" href="#huawei-cloud-object-storage-connection-test"><span>Huawei Cloud Object Storage Connection Test</span></a></h3>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Success Response:</p>
<figure><img src="@source/userguide/poc/images/test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-3.png" alt="test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-3.png" tabindex="0" loading="lazy"><figcaption>test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-3.png</figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This command is primarily used to test the accessibility of Huawei Cloud Object Storage. Currently, the tested OBS domain is applicable to the Huawei Cloud Singapore region. If you need to perform tests in different regions, please refer to the official Huawei Cloud documentation to find the corresponding Endpoint domain.<br>
Document Link: <a href="https://developer.huaweicloud.com/intl/en-us/endpoint?OBS" target="_blank" rel="noopener noreferrer">https://developer.huaweicloud.com/intl/en-us/endpoint?OBS</a></p>
</div>
</div></template>


