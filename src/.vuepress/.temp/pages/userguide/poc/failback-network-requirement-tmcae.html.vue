<template><div><h1 id="tm-cae" tabindex="-1"><a class="header-anchor" href="#tm-cae"><span>TM CAE</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#intranet-vpn-access-create-and-configure-the-vpn-service">(Intranet VPN Access) Create and configure the VPN service</router-link><ul><li><router-link to="#configuration-document">Configuration document</router-link></li></ul></li><li><router-link to="#internal-vpn-access-create-vpc-endpoint-service">(Internal VPN Access) - Create VPC Endpoint service</router-link><ul><li><router-link to="#configure-vpc-endpoint">Configure VPC Endpoint</router-link></li></ul></li><li><router-link to="#intranet-vpn-access-create-and-configure-the-vpn-service-agent">(Intranet VPN Access) Create and configure the VPN service - Agent</router-link><ul><li><router-link to="#configuration-document-1">Configuration document</router-link></li></ul></li><li><router-link to="#intranet-vpn-access-create-and-configure-vpn-service-vmware">(Intranet VPN Access) Create and Configure VPN Service - VMware</router-link></li><li><router-link to="#intranet-vpn-access-create-vpc-endpoint-vmware">(Intranet VPN Access) Create VPC Endpoint - VMware</router-link></li><li><router-link to="#intranet-vpn-access-test-the-network-connectivity-between-the-failback-host-and-tm-cae-obs">(Intranet VPN Access) Test the network connectivity between the Failback Host and TM CAE OBS</router-link><ul><li><router-link to="#the-failback-host-is-linux">The Failback Host is Linux</router-link></li><li><router-link to="#the-failback-host-is-windows">The Failback Host is Windows</router-link></li></ul></li><li><router-link to="#intranet-vpn-access-test-the-connectivity-from-the-failback-transition-host-network-to-obs-network-agent">(Intranet VPN Access)Test the connectivity from the Failback Transition Host network to OBS network - Agent</router-link><ul><li><router-link to="#login-failback-transition-host-system">Login Failback Transition Host System</router-link></li><li><router-link to="#tm-cae-private-dns-connection-test">TM CAE Private DNS Connection Test</router-link></li><li><router-link to="#tm-cae-object-storage-connection-test">TM CAE Object Storage Connection Test</router-link></li></ul></li><li><router-link to="#intranet-vpn-access-configure-a-tm-cae-intranet-dns-address-for-the-vmware-network-object-storage-fallback">(Intranet VPN Access)Configure a TM CAE Intranet DNS address for the VMware Network-Object Storage Fallback</router-link></li><li><router-link to="#intranet-vpn-access-test-the-connectivity-from-the-vmware-failback-recovery-host-network-to-tm-cae-obs-network">(Intranet VPN Access)Test the connectivity from the VMware failback recovery host network to TM CAE OBS network</router-link><ul><li><router-link to="#prepare-and-log-in-the-test-host">Prepare and log in the test host</router-link></li><li><router-link to="#tm-cae-private-dns-connection-test-1">TM CAE Private DNS Connection Test</router-link></li><li><router-link to="#tm-cae-object-storage-connection-test-1">TM CAE Object Storage Connection Test</router-link></li></ul></li></ul></nav>
<h2 id="intranet-vpn-access-create-and-configure-the-vpn-service" tabindex="-1"><a class="header-anchor" href="#intranet-vpn-access-create-and-configure-the-vpn-service"><span>(Intranet VPN Access) Create and configure the VPN service</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The VPC network of the TM CAE failback host connects to the local vCenter/ESXi VM service network.<br>
If the VPC network where the HyperBDR resides has been connected to the vCenter/ESXi service network through the VPN service when the Dr Is deployed to TM CAE, you do not need to connect the network again.</p>
</div>
<h3 id="configuration-document" tabindex="-1"><a class="header-anchor" href="#configuration-document"><span>Configuration document</span></a></h3>
<p>Configure VPN. For details, see TM CAE official documentation.</p>
<p>Document Link：<a href="https://support.alphaedge.tmone.com.my/en-us/usermanual/vpn/en-us_topic_0133627788.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/en-us/usermanual/vpn/en-us_topic_0133627788.html</a></p>
<h2 id="internal-vpn-access-create-vpc-endpoint-service" tabindex="-1"><a class="header-anchor" href="#internal-vpn-access-create-vpc-endpoint-service"><span>(Internal VPN Access) - Create VPC Endpoint service</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If your disaster recovery environment is interconnected with the production site's intranet through TM CAE VPN, and the production site needs to access TM CAE HyperBDR and OBS services through VPN during a disaster, then you need to purchase and configure VPC Endpoint services in TM CAE.<br>
You need to purchase two VPC Endpoint services, one for OBS and the other for DNS.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If you have purchased and configured the Endpoint service in the VPC when the disaster recovery system is deployed to TM CAE, you do not need to repeat this configuration.</p>
</div>
<h3 id="configure-vpc-endpoint" tabindex="-1"><a class="header-anchor" href="#configure-vpc-endpoint"><span>Configure VPC Endpoint</span></a></h3>
<p>TM CAE official definition: If you want to access OBS services from a local data center via VPN or Cloud Connect using an intranet method, you can achieve this by connecting through terminal endpoints to access terminal endpoint services.<br>
Document Link：<a href="https://support.alphaedge.tmone.com.my/usermanual/vpcep/vpcep_02_0301.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/usermanual/vpcep/vpcep_02_0301.html</a></p>
<h2 id="intranet-vpn-access-create-and-configure-the-vpn-service-agent" tabindex="-1"><a class="header-anchor" href="#intranet-vpn-access-create-and-configure-the-vpn-service-agent"><span>(Intranet VPN Access) Create and configure the VPN service - Agent</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The VPC network of the TM CAE failback host connects to the source production environment network.<br>
Note: If the VPC network where the HyperBDR resides has been connected to the source production environment network through the VPN service when the Dr Is deployed to TM CAE, you do not need to connect the network again.</p>
</div>
<h3 id="configuration-document-1" tabindex="-1"><a class="header-anchor" href="#configuration-document-1"><span>Configuration document</span></a></h3>
<p>Configure VPN. For details, see TM CAE official documentation.
Document Link：<a href="https://support.alphaedge.tmone.com.my/en-us/usermanual/vpn/en-us_topic_0133627788.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/en-us/usermanual/vpn/en-us_topic_0133627788.html</a></p>
<h2 id="intranet-vpn-access-create-and-configure-vpn-service-vmware" tabindex="-1"><a class="header-anchor" href="#intranet-vpn-access-create-and-configure-vpn-service-vmware"><span>(Intranet VPN Access) Create and Configure VPN Service - VMware</span></a></h2>
<p>Requirement: The VPC network where TM CAE HyperBDR is located needs to be interconnected with the local vCenter/ESXi host management network and the upper-level virtual machine business network.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If during disaster recovery to TM CAE Cloud, the VPC network where HyperBDR is located is already connected to the vCenter/ESXi business network via a VPN service, then it is only necessary to establish connectivity between the VPC network where HyperBDR is located and the vCenter/ESXi host management network.</p>
</div>
<p>To configure the VPN service, please refer to the detailed information in the official TM CAE Cloud documentation.<br>
Document Link: <a href="https://support.alphaedge.tmone.com.my/en-us/usermanual/vpn/en-us_topic_0133627788.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/en-us/usermanual/vpn/en-us_topic_0133627788.html</a></p>
<h2 id="intranet-vpn-access-create-vpc-endpoint-vmware" tabindex="-1"><a class="header-anchor" href="#intranet-vpn-access-create-vpc-endpoint-vmware"><span>(Intranet VPN Access) Create VPC Endpoint - VMware</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If the purchase and configuration of VPC Endpoint services have already been completed during the disaster recovery to TM CAE, there is no need to repeat the configuration.</p>
</div>
<p>TM CAE official definition: If you want to access OBS services from a local data center via VPN or Cloud Connect using an intranet method, you can achieve this by connecting through terminal endpoints to access terminal endpoint services.<br>
Document Link：<a href="https://support.alphaedge.tmone.com.my/usermanual/vpcep/vpcep_02_0301.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/usermanual/vpcep/vpcep_02_0301.html</a></p>
<h2 id="intranet-vpn-access-test-the-network-connectivity-between-the-failback-host-and-tm-cae-obs" tabindex="-1"><a class="header-anchor" href="#intranet-vpn-access-test-the-network-connectivity-between-the-failback-host-and-tm-cae-obs"><span>(Intranet VPN Access) Test the network connectivity between the Failback Host and TM CAE OBS</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The VPN service has been configured on the TM CAE side, and the TM CAE side has connected to the production site through the VPN. You can perform the following tests.</p>
</div>
<h3 id="the-failback-host-is-linux" tabindex="-1"><a class="header-anchor" href="#the-failback-host-is-linux"><span>The Failback Host is Linux</span></a></h3>
<h4 id="log-in-to-the-failback-host" tabindex="-1"><a class="header-anchor" href="#log-in-to-the-failback-host"><span>Log in to the Failback Host .</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Ensure that the ssh command is running on the Failback Host.</p>
</div>
<h4 id="tm-cae-private-dns-connectivity-testing" tabindex="-1"><a class="header-anchor" href="#tm-cae-private-dns-connectivity-testing"><span>TM CAE Private DNS Connectivity Testing</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Refer to the following document to find the Private DNS server addresses based on the used object storage region.<br>
Reference documents：<a href="https://support.alphaedge.tmone.com.my/en-us/usermanual/dns/dns_faq_002.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/en-us/usermanual/dns/dns_faq_002.html</a></p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100.125.12.250</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>64 bytes from 100.125.12.250 (100.125.12.250): icmp_seq=1 ttl=44 time=0.255 ms</span></span>
<span class="line"><span>64 bytes from 100.125.12.250 (100.125.12.250): icmp_seq=2 ttl=44 time=0.294 ms</span></span>
<span class="line"><span>64 bytes from 100.125.12.250 (100.125.12.250): icmp_seq=3 ttl=44 time=0.300 ms</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tm-cae-object-storage-connectivity-testing" tabindex="-1"><a class="header-anchor" href="#tm-cae-object-storage-connectivity-testing"><span>TM CAE Object Storage Connectivity Testing</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> obs.my-kualalumpur-1.alphaedge.tmone.com.my</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=1 ttl=44 time=0.255 ms</span></span>
<span class="line"><span>64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=2 ttl=44 time=0.294 ms</span></span>
<span class="line"><span>64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=3 ttl=44 time=0.300 ms</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This command is primarily used to test the accessibility of TM CAE Object Storage buckets. Currently, the tested OBS domain is for the TM CAE Singapore region. If you need to test in a different region, please refer to the official TM CAE documentation to find the corresponding Endpoint domain address.<br>
Reference Link: <a href="https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html</a></p>
</div>
<h3 id="the-failback-host-is-windows" tabindex="-1"><a class="header-anchor" href="#the-failback-host-is-windows"><span>The Failback Host is Windows</span></a></h3>
<h4 id="log-in-to-the-failback-host-1" tabindex="-1"><a class="header-anchor" href="#log-in-to-the-failback-host-1"><span>Log in to the Failback Host .</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Ensure that the ssh command exists on the Failback Host, and open the CMD command line.</p>
</div>
<h4 id="tm-cae-private-dns-connectivity-testing-1" tabindex="-1"><a class="header-anchor" href="#tm-cae-private-dns-connectivity-testing-1"><span>TM CAE Private DNS Connectivity Testing</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Refer to the following document to find the Private DNS server addresses based on the used object storage region.<br>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tm-cae-object-storage-connectivity-testing-1" tabindex="-1"><a class="header-anchor" href="#tm-cae-object-storage-connectivity-testing-1"><span>TM CAE Object Storage Connectivity  Testing</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> obs.my-kualalumpur-1.alphaedge.tmone.com.my</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This command is primarily used to test the accessibility of TM CAE Object Storage buckets. Currently, the tested OBS domain is for the TM CAE Singapore region. If you need to test in a different region, please refer to the official TM CAE documentation to find the corresponding Endpoint domain address.<br>
Reference Link: <a href="https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html</a></p>
</div>
<h2 id="intranet-vpn-access-test-the-connectivity-from-the-failback-transition-host-network-to-obs-network-agent" tabindex="-1"><a class="header-anchor" href="#intranet-vpn-access-test-the-connectivity-from-the-failback-transition-host-network-to-obs-network-agent"><span>(Intranet VPN Access)Test the connectivity from the Failback Transition Host network to OBS network - Agent</span></a></h2>
<h3 id="login-failback-transition-host-system" tabindex="-1"><a class="header-anchor" href="#login-failback-transition-host-system"><span>Login Failback Transition Host System</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Default User：root<br>
Default Password：Acb@132.Inst</p>
</div>
<figure><img src="@source/userguide/poc/images/test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-1.png" alt="test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-1.png" tabindex="0" loading="lazy"><figcaption>test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-1.png</figcaption></figure>
<h3 id="tm-cae-private-dns-connection-test" tabindex="-1"><a class="header-anchor" href="#tm-cae-private-dns-connection-test"><span>TM CAE Private DNS Connection Test</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Please refer to the following document to find the dedicated Network Domain Service (NDS) address based on the used TM CAE OBS region.<br>
Reference Document:<a href="https://support.alphaedge.tmone.com.my/en-us/usermanual/dns/dns_faq_002.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/en-us/usermanual/dns/dns_faq_002.html</a></p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100.125.12.250</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>64 bytes from 100.125.12.250 (100.125.12.250): icmp_seq=1 ttl=44 time=0.255 ms</span></span>
<span class="line"><span>64 bytes from 100.125.12.250 (100.125.12.250): icmp_seq=2 ttl=44 time=0.294 ms</span></span>
<span class="line"><span>64 bytes from 100.125.12.250 (100.125.12.250): icmp_seq=3 ttl=44 time=0.300 ms</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tm-cae-object-storage-connection-test" tabindex="-1"><a class="header-anchor" href="#tm-cae-object-storage-connection-test"><span>TM CAE Object Storage Connection Test</span></a></h3>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> obs.my-kualalumpur-1.alphaedge.tmone.com.my</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=1 ttl=44 time=0.255 ms</span></span>
<span class="line"><span>64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=2 ttl=44 time=0.294 ms</span></span>
<span class="line"><span>64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=3 ttl=44 time=0.300 ms</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This command is primarily used to test the accessibility of TM CAE Object Storage. Currently, the tested OBS domain is applicable to the TM CAE Singapore region. If you need to perform tests in different regions, please refer to the official TM CAE documentation to find the corresponding Endpoint domain.<br>
Document Link: <a href="https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html</a></p>
</div>
<h2 id="intranet-vpn-access-configure-a-tm-cae-intranet-dns-address-for-the-vmware-network-object-storage-fallback" tabindex="-1"><a class="header-anchor" href="#intranet-vpn-access-configure-a-tm-cae-intranet-dns-address-for-the-vmware-network-object-storage-fallback"><span>(Intranet VPN Access)Configure a TM CAE Intranet DNS address for the VMware Network-Object Storage Fallback</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If the configuration of the TM CAE intranet OBS VPC Endpoint service resolution address has already been completed during the disaster recovery to TM CAE, there is no need to repeat the configuration.</p>
</div>
<p>If your fallback environment is interconnected with the on-premises network through TM CAE VPN, after creating VPC Endpoint services, it is necessary to configure the TM CAE intranet OBS VPC Endpoint service resolution address in the local vCenter/ESXi host management network and the virtual machine business network.<br>
Reference Document: <a href="https://docs.oneprocloud.com/userguide/poc/tmcae-pre-settings.html#option-2-intranet-vpn-access-configure-tm-cae-intranet-dns-address-for-the-network-device-where-the-agent-host-resid" target="_blank" rel="noopener noreferrer">https://docs.oneprocloud.com/userguide/poc/tmcae-pre-settings.html#option-2-intranet-vpn-access-configure-tm-cae-intranet-dns-address-for-the-network-device-where-the-agent-host-resid</a></p>
<h2 id="intranet-vpn-access-test-the-connectivity-from-the-vmware-failback-recovery-host-network-to-tm-cae-obs-network" tabindex="-1"><a class="header-anchor" href="#intranet-vpn-access-test-the-connectivity-from-the-vmware-failback-recovery-host-network-to-tm-cae-obs-network"><span>(Intranet VPN Access)Test the connectivity from the VMware failback recovery host network to TM CAE OBS network</span></a></h2>
<h3 id="prepare-and-log-in-the-test-host" tabindex="-1"><a class="header-anchor" href="#prepare-and-log-in-the-test-host"><span>Prepare and log in the test host</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The network of the test host needs to be consistent with the network of the fallback recovery host.</p>
</div>
<h3 id="tm-cae-private-dns-connection-test-1" tabindex="-1"><a class="header-anchor" href="#tm-cae-private-dns-connection-test-1"><span>TM CAE Private DNS Connection Test</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Please refer to the following document to find the dedicated Network Domain Service (NDS) address based on the used TM CAE OBS region.<br>
Reference Document:<a href="https://support.alphaedge.tmone.com.my/en-us/usermanual/dns/dns_faq_002.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/en-us/usermanual/dns/dns_faq_002.html</a></p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100.125.12.250</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>64 bytes from 100.125.12.250 (100.125.12.250): icmp_seq=1 ttl=44 time=0.255 ms</span></span>
<span class="line"><span>64 bytes from 100.125.12.250 (100.125.12.250): icmp_seq=2 ttl=44 time=0.294 ms</span></span>
<span class="line"><span>64 bytes from 100.125.12.250 (100.125.12.250): icmp_seq=3 ttl=44 time=0.300 ms</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tm-cae-object-storage-connection-test-1" tabindex="-1"><a class="header-anchor" href="#tm-cae-object-storage-connection-test-1"><span>TM CAE Object Storage Connection Test</span></a></h3>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> obs.my-kualalumpur-1.alphaedge.tmone.com.my</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=1 ttl=44 time=0.255 ms</span></span>
<span class="line"><span>64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=2 ttl=44 time=0.294 ms</span></span>
<span class="line"><span>64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=3 ttl=44 time=0.300 ms</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This command is primarily used to test the accessibility of TM CAE Object Storage buckets. Currently, the tested OBS domain is applicable to the TM CAE Singapore region. If you need to perform tests in different regions, please refer to the official TM CAE documentation to find the corresponding Endpoint domain.<br>
Document Link: <a href="https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html" target="_blank" rel="noopener noreferrer">https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html</a></p>
</div>
</div></template>


