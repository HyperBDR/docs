<template><div><h1 id="sync-proxy-setup" tabindex="-1"><a class="header-anchor" href="#sync-proxy-setup"><span>Sync Proxy Setup</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#configure-sync-proxy-ip-address">Configure Sync Proxy IP Address</router-link><ul><li><router-link to="#login-sync-proxy-vm">Login Sync Proxy VM</router-link></li><li><router-link to="#configure-sync-proxy-vm-network">Configure Sync Proxy VM network</router-link></li><li><router-link to="#restart-network">Restart Network</router-link></li><li><router-link to="#testing">Testing</router-link></li></ul></li><li><router-link to="#configure-ntp-server">Configure NTP Server</router-link><ul><li><router-link to="#download-and-upload-to-sync-proxy">Download and Upload to Sync Proxy</router-link></li><li><router-link to="#installation">Installation</router-link></li><li><router-link to="#ntp-configuration">NTP Configuration</router-link></li><li><router-link to="#start-service">Start Service</router-link></li></ul></li><li><router-link to="#enable-access-policy-for-sync-proxy">Enable Access Policy for Sync Proxy</router-link></li><li><router-link to="#test-access-policy-for-sync-proxy">Test Access Policy for Sync Proxy</router-link><ul><li><router-link to="#test-vcenter-esxi-connectivity">Test vCenter/ESXi Connectivity</router-link></li></ul></li><li><router-link to="#test-network-connectivity-from-sync-proxy-to-object-storage">Test Network Connectivity from Sync Proxy to Object Storage</router-link><ul><li><router-link to="#internet">Internet</router-link></li><li><router-link to="#vpn">VPN</router-link></li></ul></li><li><router-link to="#test-network-connectivity-from-sync-proxy-to-hyperbdr">Test Network Connectivity from Sync Proxy to HyperBDR</router-link><ul><li><router-link to="#option-1-public-network-access">Option 1: Public Network Access</router-link></li><li><router-link to="#option-2-internal-vpn-access">Option 2: Internal VPN Access</router-link></li></ul></li><li><router-link to="#sync-proxy-dns-settings">Sync Proxy DNS Settings</router-link><ul><li><router-link to="#get-dns-domain-name">Get DNS domain name</router-link></li><li><router-link to="#configure-firewall-or-network-devices-such-as-switches">Configure Firewall or Network Devices such as Switches</router-link></li></ul></li><li><router-link to="#install-sync-proxy">Install Sync Proxy</router-link><ul><li><router-link to="#log-in-to-the-hyperbdr-console">Log in to the HyperBDR console</router-link></li><li><router-link to="#retrieve-the-installation-command">Retrieve the installation command</router-link></li><li><router-link to="#log-in-to-the-proxy-node">Log in to the Proxy Node</router-link></li><li><router-link to="#execute-the-installation-command-on-the-sync-proxy-node">Execute the installation command on the Sync Proxy node</router-link></li></ul></li><li><router-link to="#add-and-configure-cloud-sync-gateway">Add and Configure Cloud Sync Gateway</router-link><ul><li><router-link to="#operational-steps">Operational Steps</router-link></li></ul></li><li><router-link to="#aws-site-sync-proxy-network-configuration">AWS Site Sync Proxy network configuration</router-link><ul><li><router-link to="#prerequisites">Prerequisites</router-link></li><li><router-link to="#create-vpc-endpoints-step">Create VPC Endpoints Step</router-link></li></ul></li><li><router-link to="#test-network-connectivity-of-the-sync-proxy-to-aws-service-endpoints">Test network connectivity of the Sync Proxy to AWS Service Endpoints</router-link><ul><li><router-link to="#test-aws-api-connectivity">Test AWS API Connectivity</router-link></li></ul></li></ul></nav>
<h2 id="configure-sync-proxy-ip-address" tabindex="-1"><a class="header-anchor" href="#configure-sync-proxy-ip-address"><span>Configure Sync Proxy IP Address</span></a></h2>
<h3 id="login-sync-proxy-vm" tabindex="-1"><a class="header-anchor" href="#login-sync-proxy-vm"><span>Login Sync Proxy VM</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Default username and password for Sync Proxy ova:</p>
<ul>
<li>Username: root</li>
<li>Password: Acb@132.Inst</li>
</ul>
</div>
<p>Use vCenter Web Console to login the Sync Proxy VM and to the following configurations.
<img src="@source/userguide/poc/images/vcenter-web-console-1.png" alt="vcenter-web-console-1.png" loading="lazy"><br>
<img src="@source/userguide/poc/images/vcenter-web-console-2.png" alt="vcenter-web-console-2.png" loading="lazy"></p>
<h3 id="configure-sync-proxy-vm-network" tabindex="-1"><a class="header-anchor" href="#configure-sync-proxy-vm-network"><span>Configure Sync Proxy VM network</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The Sync Proxy ova is configured with default DHCP mode for networking. If the source production environment network you selected supports DHCP, confirm the virtual machine's IP and proceed. If the source production environment network does not use DHCP, manual configuration of the machine's network is required.</p>
</div>
<h4 id="confirm-the-virtual-machine-s-network-adapter-device-name" tabindex="-1"><a class="header-anchor" href="#confirm-the-virtual-machine-s-network-adapter-device-name"><span>Confirm the virtual machine's network adapter device name</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/userguide/poc/images/confirm-vm-network-device-name-1.png" alt="confirm-vm-network-device-name-1.png" tabindex="0" loading="lazy"><figcaption>confirm-vm-network-device-name-1.png</figcaption></figure>
<h4 id="configure-a-ip-address-and-gateway" tabindex="-1"><a class="header-anchor" href="#configure-a-ip-address-and-gateway"><span>Configure a IP address and gateway</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Configuring the network of the Sync Proxy VM using the command method is temporary. An unexpected restart will lose the network configuration. It is recommended to configure the network using the configuration file method.</p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ifconfig</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> eth0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 192.168.7.48/20</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> route</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gw</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 192.168.0.1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> eth0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/userguide/poc/images/configure-ip-address-and-gateway-1.png" alt="configure-ip-address-and-gateway-1.png" tabindex="0" loading="lazy"><figcaption>configure-ip-address-and-gateway-1.png</figcaption></figure>
<h4 id="modify-network-interface-configuration-file" tabindex="-1"><a class="header-anchor" href="#modify-network-interface-configuration-file"><span>Modify network interface configuration file</span></a></h4>
<p>Confirm the network interface configuration file</p>
<blockquote>
<p>The file extension is usually [.yaml]</p>
</blockquote>
<figure><img src="@source/userguide/poc/images/configure-ip-address-and-gateway-2.png" alt="configure-ip-address-and-gateway-2.png" tabindex="0" loading="lazy"><figcaption>configure-ip-address-and-gateway-2.png</figcaption></figure>
<p>The following command will directly overwrite the specified network configuration content into the specified configuration file. Please modify the network parameters (such as IP address, gateway, DNS, etc.) according to your actual needs.</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "network:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  version: 2</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  renderer: networkd</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  ethernets:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    eth0:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      addresses:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        - 192.168.7.48/20</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      gateway4: 192.168.0.1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tee</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/netplan/70-netplan-set.yaml</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> netplan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apply</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/userguide/poc/images/configure-ip-address-and-gateway-3.png" alt="configure-ip-address-and-gateway-3.png" tabindex="0" loading="lazy"><figcaption>configure-ip-address-and-gateway-3.png</figcaption></figure>
<h3 id="restart-network" tabindex="-1"><a class="header-anchor" href="#restart-network"><span>Restart Network</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo systemctl restart systemd-networkd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="testing" tabindex="-1"><a class="header-anchor" href="#testing"><span>Testing</span></a></h3>
<p>Try to ping VMware vCenter IP or ESXi IP, check if you can get correct response.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ping &#x3C;vcenter ip or esxi ip></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="configure-ntp-server" tabindex="-1"><a class="header-anchor" href="#configure-ntp-server"><span>Configure NTP Server</span></a></h2>
<h3 id="download-and-upload-to-sync-proxy" tabindex="-1"><a class="header-anchor" href="#download-and-upload-to-sync-proxy"><span>Download and Upload to Sync Proxy</span></a></h3>
<p>Download these packages and upload to Sync Proxy, save in /root/ntp-packages/</p>
<ul>
<li><a href="https://vault.centos.org/7.5.1804/os/x86_64/Packages/ntp-4.2.6p5-28.el7.centos.x86_64.rpm" target="_blank" rel="noopener noreferrer">ntp-4.2.6p5-28.el7.centos.x86_64.rpm</a></li>
<li><a href="https://vault.centos.org/7.5.1804/os/x86_64/Packages/autogen-libopts-5.18-5.el7.x86_64.rpm" target="_blank" rel="noopener noreferrer">autogen-libopts-5.18-5.el7.x86_64.rpm</a></li>
<li><a href="https://vault.centos.org/7.5.1804/os/x86_64/Packages/ntpdate-4.2.6p5-28.el7.centos.x86_64.rpm" target="_blank" rel="noopener noreferrer">ntpdate-4.2.6p5-28.el7.centos.x86_64.rpm</a></li>
</ul>
<p>In Sync Proxy Terminal, you can use these commands to download these packages:</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /root/ntp-packages</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /root/ntp-packages</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -O</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://vault.centos.org/7.5.1804/os/x86_64/Packages/ntp-4.2.6p5-28.el7.centos.x86_64.rpm</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -O</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://vault.centos.org/7.5.1804/os/x86_64/Packages/autogen-libopts-5.18-5.el7.x86_64.rpm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -O</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://vault.centos.org/7.5.1804/os/x86_64/Packages/ntpdate-4.2.6p5-28.el7.centos.x86_64.rpm</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /root/ntp-packages/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">.rpm</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ntp-configuration" tabindex="-1"><a class="header-anchor" href="#ntp-configuration"><span>NTP Configuration</span></a></h3>
<p>To edit the /etc/ntp.conf file, you can use the vi editor.</p>
<ul>
<li>Find the following lines in the file:</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#server 0.centos.pool.ntp.org iburst</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#server 1.centos.pool.ntp.org iburst</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#server 2.centos.pool.ntp.org iburst</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#server 3.centos.pool.ntp.org iburst</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>uncomment and add the following to the file.</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ntp.server.ip.address</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>There <strong>&lt;ntp.server.ip.address&gt;</strong> is your ntp server ip address.</p>
<h3 id="start-service" tabindex="-1"><a class="header-anchor" href="#start-service"><span>Start Service</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ntpd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ntpd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="enable-access-policy-for-sync-proxy" tabindex="-1"><a class="header-anchor" href="#enable-access-policy-for-sync-proxy"><span>Enable Access Policy for Sync Proxy</span></a></h2>
<p>Open the network access policy in your firewall for synchronizing Sync Proxy nodes to vCenter and all ESXi hosts managed by vCenter.</p>
<ol>
<li>Sync Proxy nodes need to have normal access to vCenter on port 443.</li>
<li>Sync Proxy nodes need to have normal access to all ESXi hosts managed by vCenter on port 902.</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Sync Proxy nodes access the vCenter API interface for authentication, and they retrieve data by calling the ESXi host where the disaster recovery production site VM are located. Therefore, it is necessary to open network access policies for all ESXi hosts managed by vCenter.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>In VMware production environment, maybe use domain name to access EXSi. You need to configure domain name mapping or DNS service address for Sync Proxy to resolve the domain name.
Reference Documentation: <a href="https://docs.oneprocloud.com/userguide/faq/faq.html#how-does-sync-proxy-access-exsi-using-a-domain-name" target="_blank" rel="noopener noreferrer">How does Sync Proxy access EXSi using a domain name?</a></p>
</div>
<h2 id="test-access-policy-for-sync-proxy" tabindex="-1"><a class="header-anchor" href="#test-access-policy-for-sync-proxy"><span>Test Access Policy for Sync Proxy</span></a></h2>
<p>Test if Sync Proxy can connect to vCenter 443 port and ESXis 902 port which is management by vCenter.</p>
<h3 id="test-vcenter-esxi-connectivity" tabindex="-1"><a class="header-anchor" href="#test-vcenter-esxi-connectivity"><span>Test vCenter/ESXi Connectivity</span></a></h3>
<p>NOTE: Repeat this steps if you have multiple vCenter or ESXis to be protected.</p>
<p>Test Port 443</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -v -p 443 &#x3C;vCenter/ESXi IP/Domain></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If it displays 'Connection established', it means the link port is normal.</p>
</div>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;vCenter/ESXi IP/Domain> [&#x3C;vCenter/ESXi IP/Domain>] port 443.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Test Port 902</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -v -p 902 &#x3C;ESXi IP/Domain></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If it displays 'Connection established', it means the link port is normal.</p>
</div>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;vCenter/ESXi IP/Domain> [&#x3C;vCenter/ESXi IP/Domain>] port 902.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="test-network-connectivity-from-sync-proxy-to-object-storage" tabindex="-1"><a class="header-anchor" href="#test-network-connectivity-from-sync-proxy-to-object-storage"><span>Test Network Connectivity from Sync Proxy to Object Storage</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Make sure you already login to Sync Proxy VM</p>
</div>
<h3 id="internet" tabindex="-1"><a class="header-anchor" href="#internet"><span>Internet</span></a></h3>
<p>Ensure your Sync Proxy can access internet before testing.</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="huawei-object-storage-bucket-connectivity" tabindex="-1"><a class="header-anchor" href="#huawei-object-storage-bucket-connectivity"><span>Huawei Object Storage Bucket Connectivity</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>curl -I https://obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>HTTP/1.1 405 Method Not Allowed</span></span>
<span class="line"><span>Server: OBS</span></span>
<span class="line"><span>Date: Thu, 29 Feb 2024 08:29:51 GMT</span></span>
<span class="line"><span>Content-Type: application/xml</span></span>
<span class="line"><span>Content-Length: 380</span></span>
<span class="line"><span>Connection: close</span></span>
<span class="line"><span>x-reserved: amazon, aws and amazon web services are trademarks or registered trademarks of Amazon Technologies, Inc</span></span>
<span class="line"><span>x-amz-request-id: 0000018DF3FBF121900FFB988BE0FC8D</span></span>
<span class="line"><span>Allow: HEAD, GET, OPTIONS</span></span>
<span class="line"><span>x-amz-id-2: 32AAAQAAEAABAAAQAAEAABAAAQAAEAABCRjxc+HEW3ehsrcsKS60jUgz7XhG8uyS</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: This command is primarily used to test the accessibility of Huawei Cloud Object Storage buckets. Currently, the tested OBS domain is for the Huawei Cloud Singapore region. If you need to test in a different region, please refer to the official Huawei Cloud documentation to find the corresponding Endpoint domain address.</p>
<p>Reference Link: <a href="https://developer.huaweicloud.com/intl/en-us/endpoint?OBS" target="_blank" rel="noopener noreferrer">https://developer.huaweicloud.com/intl/en-us/endpoint?OBS</a></p>
<h3 id="vpn" tabindex="-1"><a class="header-anchor" href="#vpn"><span>VPN</span></a></h3>
<h4 id="check-object-storage-service-endpoint" tabindex="-1"><a class="header-anchor" href="#check-object-storage-service-endpoint"><span>Check Object Storage Service Endpoint</span></a></h4>
<p>Make sure object storage service endpoint address return internal ip address.</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@data-sync-proxy-2024-0229-145824 ~]# ping obs.ap-southeast-3.myhuaweicloud.com  </span></span>
<span class="line"><span>PING obs.lz01.ap-southeast-3.myhuaweicloud.com (100.125.80.30) 56(84) bytes of data.  </span></span>
<span class="line"><span>64 bytes from ecs-159-138-80-62.compute.hwclouds-dns.com (100.125.80.30): icmp_seq=1 ttl=53 time=1.24 ms  </span></span>
<span class="line"><span>64 bytes from ecs-159-138-80-62.compute.hwclouds-dns.com (100.125.80.30): icmp_seq=2 ttl=53 time=0.971 ms  </span></span>
<span class="line"><span>64 bytes from ecs-159-138-80-62.compute.hwclouds-dns.com (100.125.80.30): icmp_seq=3 ttl=53 time=0.972 ms</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Huawei Cloud Object Storage Service internal IP Range: 100.125.xx. If there is no ICMP response, it is considered normal.</p>
</div>
<h4 id="huawei-object-storage-bucket-connectivity-1" tabindex="-1"><a class="header-anchor" href="#huawei-object-storage-bucket-connectivity-1"><span>Huawei Object Storage Bucket Connectivity</span></a></h4>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -I</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>HTTP/1.1 405 Method Not Allowed</span></span>
<span class="line"><span>Server: OBS</span></span>
<span class="line"><span>Date: Thu, 29 Feb 2024 08:29:51 GMT</span></span>
<span class="line"><span>Content-Type: application/xml</span></span>
<span class="line"><span>Content-Length: 380</span></span>
<span class="line"><span>Connection: close</span></span>
<span class="line"><span>x-reserved: amazon, aws and amazon web services are trademarks or registered trademarks of Amazon Technologies, Inc</span></span>
<span class="line"><span>x-amz-request-id: 0000018DF3FBF121900FFB988BE0FC8D</span></span>
<span class="line"><span>Allow: HEAD, GET, OPTIONS</span></span>
<span class="line"><span>x-amz-id-2: 32AAAQAAEAABAAAQAAEAABAAAQAAEAABCRjxc+HEW3ehsrcsKS60jUgz7XhG8uyS</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This command is primarily used to test the accessibility of Huawei Cloud Object Storage buckets. Currently, the tested OBS domain is for the Huawei Cloud Singapore region. If you need to test in a different region, please refer to the official Huawei Cloud documentation to find the corresponding Endpoint domain address.</p>
</div>
<p>Reference Link: <a href="https://developer.huaweicloud.com/intl/en-us/endpoint?OBS" target="_blank" rel="noopener noreferrer">https://developer.huaweicloud.com/intl/en-us/endpoint?OBS</a></p>
<h2 id="test-network-connectivity-from-sync-proxy-to-hyperbdr" tabindex="-1"><a class="header-anchor" href="#test-network-connectivity-from-sync-proxy-to-hyperbdr"><span>Test Network Connectivity from Sync Proxy to HyperBDR</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This step needs to be tested after the installation of HyperBDR is completed.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Default username and password for Sync Proxy ova:</p>
<ul>
<li>Username: root</li>
<li>Password: Acb@132.Inst</li>
</ul>
<p>If you don't know how to use SSH on a Windows system, please refer to the following link:</p>
<p><RouteLink to="/userguide/faq/faq.html">How do I connect to SSH on Windows?</RouteLink></p>
</div>
<h3 id="option-1-public-network-access" tabindex="-1"><a class="header-anchor" href="#option-1-public-network-access"><span>Option 1: Public Network Access</span></a></h3>
<p>Test the network connectivity from the production site to Huawei Cloud HyperBDR</p>
<ul>
<li>
<p>Step1: Log in to the Sync Proxy Node</p>
</li>
<li>
<p>Step2: Test Access to HyperBDR Port 10443 and Port 30080</p>
</li>
</ul>
<p>Execute Command：</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10443</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Public</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Test Result: If the input results include the information &quot;[debug1: Connection established.]&quot; it indicates that there are no issues with network connectivity.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips 26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Public IP> [&#x3C;HyperBDR Public IP>] port 10443.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Execute Command：</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 30080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Public</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Test Result: If the input results include the information &quot;[debug1: Connection established.]&quot; it indicates that there are no issues with network connectivity.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips 26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Public IP> [&#x3C;HyperBDR Public IP>] port 30080.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="option-2-internal-vpn-access" tabindex="-1"><a class="header-anchor" href="#option-2-internal-vpn-access"><span>Option 2: Internal VPN Access</span></a></h3>
<p>Test the network connectivity from the production site to Huawei Cloud HyperBDR</p>
<ul>
<li>
<p>Step1: Log in to the Sync Proxy Node</p>
</li>
<li>
<p>Step2: Test Access to HyperBDR Port 10443 and Port 30080</p>
</li>
</ul>
<p>Execute Command:</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10443</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Internal</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Test Result: If the input results include the information &quot;[debug1: Connection established.]&quot; it indicates that there are no issues with network connectivity.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Internal IP> [&#x3C;HyperBDR Internal IP>] port 10443.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Execute Command：</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 30080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Internal</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Test Result: If the input results include the information &quot;[debug1: Connection established.]&quot; it indicates that there are no issues with network connectivity.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Internal IP> [&#x3C;HyperBDR Internal IP>] port 30080.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sync-proxy-dns-settings" tabindex="-1"><a class="header-anchor" href="#sync-proxy-dns-settings"><span>Sync Proxy DNS Settings</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This step is only used when connecting to the cloud platform via VPN.<br>
If your disaster recovery environment is interconnected with the production site's intranet through Huawei Cloud VPN, after creating the VPC Endpoint service, you need to add the resolution address of the Huawei Cloud intranet OBS VPC Endpoint service in the network where the production site's Proxy host is located.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Default username and password for Sync Proxy ova:</p>
<ul>
<li>Username: root</li>
<li>Password: Acb@132.Inst</li>
</ul>
<p>If you don't know how to use SSH on a Windows system, please refer to the following link:</p>
<p><RouteLink to="/userguide/faq/faq.html">How do I connect to SSH on Windows?</RouteLink></p>
</div>
<h3 id="get-dns-domain-name" tabindex="-1"><a class="header-anchor" href="#get-dns-domain-name"><span>Get DNS domain name</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>&lt;Huawei DNS Endpoint Service IPaddress&gt; is the IP address of the DNS endpoint service after creating the VPC Endpoint service.</p>
</div>
<figure><img src="@source/userguide/poc/images/option-2-internal-vpn-access-configure-proxy-nodes-to-use-huawei-cloud-intranet-dns-resolution-2.png" alt="option-2-internal-vpn-access-configure-proxy-nodes-to-use-huawei-cloud-intranet-dns-resolution-2.png" tabindex="0" loading="lazy"><figcaption>option-2-internal-vpn-access-configure-proxy-nodes-to-use-huawei-cloud-intranet-dns-resolution-2.png</figcaption></figure>
<h3 id="configure-firewall-or-network-devices-such-as-switches" tabindex="-1"><a class="header-anchor" href="#configure-firewall-or-network-devices-such-as-switches"><span>Configure Firewall or Network Devices such as Switches</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Example: Palo Alto Firewall<br>
The following operations are performed in the firewall web management interface.</p>
</div>
<ol>
<li>
<p>Navigate to [Network] &gt; [DNS Sync Proxy] .</p>
</li>
<li>
<p>Click [Add] to bring up the DNS Sync Proxy dialog box.</p>
</li>
<li>
<p>Select the interface on which DNS Sync Proxy should be enabled. In the following figure, DNS Sync Proxy is enabled on Ethernet 1/2 and 1/3 interfaces.</p>
</li>
<li>
<p>Select the primary and secondary servers to which the firewall should forward DNS queries. This example shows the configuration of enabling DNS Sync Proxy on Ethernet interfaces 1/2 and 1/3. The active DNS server is set to 10.0.0.246 (This IP is configured as the Huawei Cloud internal DNS Server Addresse).</p>
</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Configure the Huawei Cloud internal DNS address based on the region where you use Huawei Cloud resources.<br>
Huawei Cloud internal DNS service address at： <a href="https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html</a></p>
</div>
<figure><img src="@source/userguide/poc/images/configure-a-huawei-cloud-intranet-dns-address-for-the-network-device-1.png" alt="configure-a-huawei-cloud-intranet-dns-address-for-the-network-device-1.png" tabindex="0" loading="lazy"><figcaption>configure-a-huawei-cloud-intranet-dns-address-for-the-network-device-1.png</figcaption></figure>
<h2 id="install-sync-proxy" tabindex="-1"><a class="header-anchor" href="#install-sync-proxy"><span>Install Sync Proxy</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Sync Proxy should be installation after the completion of the HyperBDR installation process.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Default username and password for Sync Proxy ova:</p>
<ul>
<li>Username: root</li>
<li>Password: Acb@132.Inst</li>
</ul>
<p>If you don't know how to use SSH on a Windows system, please refer to the following link:</p>
<p><RouteLink to="/userguide/faq/faq.html">How do I connect to SSH on Windows?</RouteLink></p>
</div>
<h3 id="log-in-to-the-hyperbdr-console" tabindex="-1"><a class="header-anchor" href="#log-in-to-the-hyperbdr-console"><span>Log in to the HyperBDR console</span></a></h3>
<figure><img src="@source/userguide/poc/images/install-proxy-1.png" alt="install-proxy-1.png" tabindex="0" loading="lazy"><figcaption>install-proxy-1.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/install-proxy-2.png" alt="install-proxy-2.png" tabindex="0" loading="lazy"><figcaption>install-proxy-2.png</figcaption></figure>
<h3 id="retrieve-the-installation-command" tabindex="-1"><a class="header-anchor" href="#retrieve-the-installation-command"><span>Retrieve the installation command</span></a></h3>
<p>Click on the top menu bar <strong>&quot;Configuration&quot;</strong>, <strong>&quot;Production Site&quot;</strong>, <strong>&quot;VMware&quot;</strong> then click the <strong>&quot;Add&quot;</strong> button.</p>
<figure><img src="@source/userguide/poc/images/install-proxy-3.png" alt="install-proxy-3.png" tabindex="0" loading="lazy"><figcaption>install-proxy-3.png</figcaption></figure>
<p>In the popped-up page, in the <strong>&quot;Step 2: Installing synchronization nodes&quot;</strong> section, under <strong>&quot;2. Execute the following command to install&quot;</strong> click on <strong>&quot;Copy command&quot;</strong> to obtain the installation command for the Sync Proxy node.</p>
<figure><img src="@source/userguide/poc/images/install-proxy-4.png" alt="install-proxy-4.png" tabindex="0" loading="lazy"><figcaption>install-proxy-4.png</figcaption></figure>
<h3 id="log-in-to-the-proxy-node" tabindex="-1"><a class="header-anchor" href="#log-in-to-the-proxy-node"><span>Log in to the Proxy Node</span></a></h3>
<figure><img src="@source/userguide/poc/images/install-proxy-5.png" alt="install-proxy-5.png" tabindex="0" loading="lazy"><figcaption>install-proxy-5.png</figcaption></figure>
<h3 id="execute-the-installation-command-on-the-sync-proxy-node" tabindex="-1"><a class="header-anchor" href="#execute-the-installation-command-on-the-sync-proxy-node"><span>Execute the installation command on the Sync Proxy node</span></a></h3>
<p>Paste the copied installation command into the command line and execute it. Wait for the command to execute successfully; this indicates that the Sync Proxy synchronization node program is running normally.</p>
<figure><img src="@source/userguide/poc/images/install-proxy-6.png" alt="install-proxy-6.png" tabindex="0" loading="lazy"><figcaption>install-proxy-6.png</figcaption></figure>
<h2 id="add-and-configure-cloud-sync-gateway" tabindex="-1"><a class="header-anchor" href="#add-and-configure-cloud-sync-gateway"><span>Add and Configure Cloud Sync Gateway</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Already logged in to the HyperBDR console by default.<br>
After configuring Cloud Sync Gateway, it will automatically invoke the API of the DR target cloud platform to create a cloud instance as Cloud Sync Gateway.<br>
Cloud Sync Gateway CPU : 2 Core<br>
Cloud Sync Gateway RAM : 2 GB<br>
Cloud Sync Gateway System Disk Size : 40 GB</p>
</div>
<figure><img src="@source/userguide/poc/images/add-and-configure-hypergate-1.png" alt="add-and-configure-hypergate-1.png" tabindex="0" loading="lazy"><figcaption>add-and-configure-hypergate-1.png</figcaption></figure>
<h3 id="operational-steps" tabindex="-1"><a class="header-anchor" href="#operational-steps"><span>Operational Steps</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The following operations use Huawei Cloud as an example. Please choose the corresponding disaster recovery target cloud based on your actual disaster recovery scenario.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The Cloud Sync Gateway is an automatically created cloud instance that needs to be in the same region as the business VPC for DR.</p>
</div>
<p><strong>Step1.</strong> Click on &quot;Configuration Management&quot; in the top menu, choose &quot;Storage Configuration&quot; on the left, select &quot;Block Storage,&quot; and click on the &quot;Add&quot; button.</p>
<figure><img src="@source/userguide/poc/images/add-and-configure-hypergate-2.png" alt="add-and-configure-hypergate-2.png" tabindex="0" loading="lazy"><figcaption>add-and-configure-hypergate-2.png</figcaption></figure>
<p><strong>Step 2.</strong> Fill in the information as follows to add the cloud platform.</p>
<blockquote>
<p>This step will automatically create a block storage recovery Cloud Sync Gateway under the Huawei Cloud authentication tenant after authentication.</p>
</blockquote>
<p>Choose Huawei Cloud in the Recovery Platform.</p>
<p>Fill in the Huawei Cloud authentication information as shown in the image below when adding the target disaster recovery platform:</p>
<ul>
<li>Access Key ID: Huawei Cloud account Access Key ID</li>
<li>Access Key Secret: Huawei Cloud account Access Key Secret</li>
<li>Project: Optional, can be left blank</li>
<li>Project ID: Optional, can be left blank</li>
<li>Skip Driver Adaption: Optional</li>
</ul>
<p>After confirming the filled information, click the &quot;Next&quot; button.</p>
<figure><img src="@source/userguide/poc/images/add-and-configure-hypergate-3.png" alt="add-and-configure-hypergate-3.png" tabindex="0" loading="lazy"><figcaption>add-and-configure-hypergate-3.png</figcaption></figure>
<p>Choose the relevant information to create the Cloud Sync Gateway instance under the authentication tenant and click the &quot;Next&quot; button.</p>
<figure><img src="@source/userguide/poc/images/add-and-configure-hypergate-4.png" alt="add-and-configure-hypergate-4.png" tabindex="0" loading="lazy"><figcaption>add-and-configure-hypergate-4.png</figcaption></figure>
<p>After the name and status are available, wait for the &quot;Createing&quot; process to complete, then click the &quot;Complete&quot; button.</p>
<figure><img src="@source/userguide/poc/images/add-and-configure-hypergate-5.png" alt="add-and-configure-hypergate-5.png" tabindex="0" loading="lazy"><figcaption>add-and-configure-hypergate-5.png</figcaption></figure>
<p>Check the &quot;Block Storage&quot; - &quot;Cloud Sync Gateway&quot; page, and the status should be &quot;Available&quot;.</p>
<figure><img src="@source/userguide/poc/images/add-and-configure-hypergate-6.png" alt="add-and-configure-hypergate-6.png" tabindex="0" loading="lazy"><figcaption>add-and-configure-hypergate-6.png</figcaption></figure>
<h2 id="aws-site-sync-proxy-network-configuration" tabindex="-1"><a class="header-anchor" href="#aws-site-sync-proxy-network-configuration"><span>AWS Site Sync Proxy network configuration</span></a></h2>
<p>Access an Amazon Web Services service using an interface VPC endpoint.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>AWS Reference Documentation：<br>
<a href="https://docs.amazonaws.cn/en_us/vpc/latest/privatelink/create-interface-endpoint.html#create-interface-endpoint-aws" target="_blank" rel="noopener noreferrer">https://docs.amazonaws.cn/en_us/vpc/latest/privatelink/create-interface-endpoint.html#create-interface-endpoint-aws</a></p>
</div>
<h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>AWS Reference Documentation：<br>
<a href="https://docs.amazonaws.cn/en_us/vpc/latest/privatelink/create-interface-endpoint.html#prerequisites-interface-endpoints" target="_blank" rel="noopener noreferrer">https://docs.amazonaws.cn/en_us/vpc/latest/privatelink/create-interface-endpoint.html#prerequisites-interface-endpoints</a></p>
</div>
<p>Create a security group for the endpoint network interface that allows the expected traffic from the resources in your VPC. For example, to ensure that the Amazon CLI can send HTTPS requests to the Amazon Web Services service, the security group must allow inbound HTTPS traffic.</p>
<figure><img src="@source/userguide/poc/images/aws-site-sync-proxy-network-configuration-1.png" alt="aws-site-sync-proxy-network-configuration-1.png" tabindex="0" loading="lazy"><figcaption>aws-site-sync-proxy-network-configuration-1.png</figcaption></figure>
<p>To use private DNS, you must enable DNS hostnames and DNS resolution for your VPC. For more information, see View and update DNS attributes in the Amazon VPC User Guide.</p>
<figure><img src="@source/userguide/poc/images/aws-site-sync-proxy-network-configuration-2.png" alt="aws-site-sync-proxy-network-configuration-2.png" tabindex="0" loading="lazy"><figcaption>aws-site-sync-proxy-network-configuration-2.png</figcaption></figure>
<h3 id="create-vpc-endpoints-step" tabindex="-1"><a class="header-anchor" href="#create-vpc-endpoints-step"><span>Create VPC Endpoints Step</span></a></h3>
<ol>
<li>Open the Amazon VPC console</li>
</ol>
<figure><img src="@source/userguide/poc/images/aws-site-sync-proxy-network-configuration-3.png" alt="aws-site-sync-proxy-network-configuration-3.png" tabindex="0" loading="lazy"><figcaption>aws-site-sync-proxy-network-configuration-3.png</figcaption></figure>
<ol start="2">
<li>In the navigation pane, choose Endpoints.</li>
</ol>
<figure><img src="@source/userguide/poc/images/aws-site-sync-proxy-network-configuration-4.png" alt="aws-site-sync-proxy-network-configuration-4.png" tabindex="0" loading="lazy"><figcaption>aws-site-sync-proxy-network-configuration-4.png</figcaption></figure>
<ol start="3">
<li>Choose Create endpoint.</li>
</ol>
<figure><img src="@source/userguide/poc/images/aws-site-sync-proxy-network-configuration-5.png" alt="aws-site-sync-proxy-network-configuration-5.png" tabindex="0" loading="lazy"><figcaption>aws-site-sync-proxy-network-configuration-5.png</figcaption></figure>
<ol start="4">
<li>To access the AWS API for EC2 and EBS services, create service endpoints for each.</li>
</ol>
<figure><img src="@source/userguide/poc/images/aws-site-sync-proxy-network-configuration-6.png" alt="aws-site-sync-proxy-network-configuration-6.png" tabindex="0" loading="lazy"><figcaption>aws-site-sync-proxy-network-configuration-6.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-site-sync-proxy-network-configuration-7.png" alt="aws-site-sync-proxy-network-configuration-7.png" tabindex="0" loading="lazy"><figcaption>aws-site-sync-proxy-network-configuration-7.png</figcaption></figure>
<ol start="5">
<li>Wait for the status to become available.</li>
</ol>
<figure><img src="@source/userguide/poc/images/aws-site-sync-proxy-network-configuration-8.png" alt="aws-site-sync-proxy-network-configuration-8.png" tabindex="0" loading="lazy"><figcaption>aws-site-sync-proxy-network-configuration-8.png</figcaption></figure>
<h2 id="test-network-connectivity-of-the-sync-proxy-to-aws-service-endpoints" tabindex="-1"><a class="header-anchor" href="#test-network-connectivity-of-the-sync-proxy-to-aws-service-endpoints"><span>Test network connectivity of the Sync Proxy to AWS Service Endpoints</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Find the Service endpoints based on the region you are using.</p>
</div>
<p><strong>AWS International EC2 Service endpoints:</strong><br>
<a href="https://docs.aws.amazon.com/general/latest/gr/ec2-service.html#ec2_region" target="_blank" rel="noopener noreferrer">https://docs.aws.amazon.com/general/latest/gr/ec2-service.html#ec2_region</a><br>
<strong>AWS International EBS Service endpoints:</strong><br>
<a href="https://docs.aws.amazon.com/general/latest/gr/ebs-service.html#ebs_region" target="_blank" rel="noopener noreferrer">https://docs.aws.amazon.com/general/latest/gr/ebs-service.html#ebs_region</a></p>
<p><strong>AWS China Service endpoints:</strong><br>
<a href="https://docs.amazonaws.cn/aws/latest/userguide/endpoints-Beijing.html" target="_blank" rel="noopener noreferrer">https://docs.amazonaws.cn/aws/latest/userguide/endpoints-Beijing.html</a><br>
<a href="https://docs.amazonaws.cn/aws/latest/userguide/endpoints-Ningxia.html" target="_blank" rel="noopener noreferrer">https://docs.amazonaws.cn/aws/latest/userguide/endpoints-Ningxia.html</a></p>
<h3 id="test-aws-api-connectivity" tabindex="-1"><a class="header-anchor" href="#test-aws-api-connectivity"><span>Test AWS API Connectivity</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Log in to Sync Proxy EC2 by default.</p>
</div>
<p>Execute the following command on Sync Proxy:</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">## Please use the Service endpoints in the actual area.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 443</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ec2.cn-north-1.amazonaws.com.cn</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 443</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ebs.cn-north-1.amazonaws.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/userguide/poc/images/test-network-connectivity-of-the-sync-proxy-to-aws-service-endpoints-1.png" alt="test-network-connectivity-of-the-sync-proxy-to-aws-service-endpoints-1.png" tabindex="0" loading="lazy"><figcaption>test-network-connectivity-of-the-sync-proxy-to-aws-service-endpoints-1.png</figcaption></figure>
<p>If it displays 'Connection established', it means the link port is normal.
If your scenario uses VPN or dedicated line instead of EIP, the resolution address will be the intranet of the same subnet.</p>
</div></template>


