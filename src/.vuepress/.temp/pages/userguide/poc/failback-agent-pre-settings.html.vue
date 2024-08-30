<template><div><h1 id="agent-pre-settings" tabindex="-1"><a class="header-anchor" href="#agent-pre-settings"><span>Agent Pre-Settings</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#intranet-vpn-access-test-the-network-connectivity-between-the-takeover-host-and-the-hyperbdr">(Intranet VPN Access) Test the network connectivity between the Takeover Host and the HyperBDR</router-link><ul><li><router-link to="#verification-test-procedure">Verification test procedure</router-link></li><li><router-link to="#the-takeover-host-is-windows">The Takeover Host is Windows</router-link></li></ul></li><li><router-link to="#install-failback-agent-on-the-takeover-host-and-register-with-hyperbdr">Install Failback Agent on the Takeover Host and register with HyperBDR</router-link><ul><li><router-link to="#linux-takeover-host">Linux Takeover Host</router-link></li><li><router-link to="#windows-takeover-host">Windows Takeover Host</router-link></li></ul></li><li><router-link to="#intranet-vpn-access-test-the-network-connectivity-between-the-takeover-host-and-huawei-cloud-obs">(Intranet VPN Access) Test the network connectivity between the Takeover Host and Huawei Cloud OBS</router-link><ul><li><router-link to="#the-takeover-host-is-linux-1">The Takeover Host is Linux</router-link></li><li><router-link to="#the-takeover-host-is-windows-1">The Takeover Host is Windows</router-link></li></ul></li><li><router-link to="#intranet-vpn-access-tests-the-network-connectivity-between-the-takeover-host-and-the-failback-transition-host">(Intranet VPN Access) Tests the network connectivity between the Takeover Host and the Failback Transition Host</router-link><ul><li><router-link to="#the-takeover-host-is-a-linux">The Takeover Host is a Linux</router-link></li><li><router-link to="#the-takeover-host-is-a-windows">The Takeover Host is a Windows</router-link></li></ul></li></ul></nav>
<h2 id="intranet-vpn-access-test-the-network-connectivity-between-the-takeover-host-and-the-hyperbdr" tabindex="-1"><a class="header-anchor" href="#intranet-vpn-access-test-the-network-connectivity-between-the-takeover-host-and-the-hyperbdr"><span>(Intranet VPN Access) Test the network connectivity between the Takeover Host and the HyperBDR</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The VPN service has been configured on the DR side, and the DR side has connected to the production site through the VPN. You can perform the following tests.</p>
</div>
<h3 id="verification-test-procedure" tabindex="-1"><a class="header-anchor" href="#verification-test-procedure"><span>Verification test procedure</span></a></h3>
<p>Log in to the Takeover Host.</p>
<h4 id="the-takeover-host-is-linux" tabindex="-1"><a class="header-anchor" href="#the-takeover-host-is-linux"><span>The Takeover Host is Linux</span></a></h4>
<p>Ensure that the ssh command is running on the Takeover Host</p>
<h4 id="the-hyperbdr-is-accessed-on-port-10443" tabindex="-1"><a class="header-anchor" href="#the-hyperbdr-is-accessed-on-port-10443"><span>The HyperBDR is accessed on port 10443</span></a></h4>
<p>Test command:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -v -p 10443 &#x3C;HyperBDR Intranet IP></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Test result: If the following input result contains the information [debug1: Connection established.], the network connectivity is OK.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Intranet IP\> [&#x3C;HyperBDR Intranet IP\>] port 10443.</span></span>
<span class="line"><span>debug1: Connection established.</span></span>
<span class="line"><span>#### The HyperBDR is accessed on port 30080</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Test command:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -v -p 30080 &#x3C;HyperBDR Intranet IP></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Test result: If the following input result contains the information [debug1: Connection established.], the network connectivity is OK.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Intranet IP> [&#x3C;HyperBDR Intranet IP>] port 30080.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="the-hyperbdr-is-accessed-on-port-10081" tabindex="-1"><a class="header-anchor" href="#the-hyperbdr-is-accessed-on-port-10081"><span>The HyperBDR is accessed on port 10081</span></a></h4>
<p>Test command:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -v -p 10081 &#x3C;HyperBDR Intranet IP></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Test result: If the following input result contains the information [debug1: Connection established.], the network connectivity is OK.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Intranet IP> [&#x3C;HyperBDR Intranet IP>] port 10081.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="the-takeover-host-is-windows" tabindex="-1"><a class="header-anchor" href="#the-takeover-host-is-windows"><span>The Takeover Host is Windows</span></a></h3>
<p>Ensure that the ssh command exists on the Takeover Host, and open the CMD command line</p>
<h4 id="the-hyperbdr-is-accessed-on-port-10443-1" tabindex="-1"><a class="header-anchor" href="#the-hyperbdr-is-accessed-on-port-10443-1"><span>The HyperBDR is accessed on port 10443</span></a></h4>
<p>Test command:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -v -p 10443 &#x3C;HyperBDR Intranet IP></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Test result: If the following input result contains the information [debug1: Connection established.], the network connectivity is OK.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Intranet IP> [&#x3C;HyperBDR Intranet IP>] port 10443.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="the-hyperbdr-is-accessed-on-port-30080" tabindex="-1"><a class="header-anchor" href="#the-hyperbdr-is-accessed-on-port-30080"><span>The HyperBDR is accessed on port 30080</span></a></h4>
<p>Test command:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -v -p 30080 &#x3C;HyperBDR Intranet IP></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Test result: If the following input result contains the information [debug1: Connection established.], the network connectivity is OK.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Intranet IP> [&#x3C;HyperBDR Intranet IP>] port 30080.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="install-failback-agent-on-the-takeover-host-and-register-with-hyperbdr" tabindex="-1"><a class="header-anchor" href="#install-failback-agent-on-the-takeover-host-and-register-with-hyperbdr"><span>Install Failback Agent on the Takeover Host and register with HyperBDR</span></a></h2>
<h3 id="linux-takeover-host" tabindex="-1"><a class="header-anchor" href="#linux-takeover-host"><span>Linux Takeover Host</span></a></h3>
<h4 id="log-in-to-the-hyperbdr-console" tabindex="-1"><a class="header-anchor" href="#log-in-to-the-hyperbdr-console"><span>Log in to the HyperBDR Console</span></a></h4>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-1.png" alt="complete-doc-for-block-storage-failback-1.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-1.png</figcaption></figure>
<h4 id="copy-the-agent-installation-command" tabindex="-1"><a class="header-anchor" href="#copy-the-agent-installation-command"><span>Copy the Agent installation command</span></a></h4>
<p>Click on the <strong>'DR'</strong> tab above, then select <strong>'Host Failback'</strong> on the left. Click on <strong>'Add Host'</strong>, choose the Agent mode.</p>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-2.png" alt="complete-doc-for-block-storage-failback-2.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-2.png</figcaption></figure>
<p>In the <strong>'Linux'</strong> section, click <strong>'Copy Command'</strong>.</p>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-3.png" alt="complete-doc-for-block-storage-failback-3.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-3.png</figcaption></figure>
<h4 id="run-the-installation-command-on-the-takeover-host" tabindex="-1"><a class="header-anchor" href="#run-the-installation-command-on-the-takeover-host"><span>Run the installation command on the Takeover Host</span></a></h4>
<p>Log in to the Takeover Host, and then run the Agent installation command. Wait for the installation to complete.</p>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-4.png" alt="complete-doc-for-block-storage-failback-4.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-4.png</figcaption></figure>
<h3 id="windows-takeover-host" tabindex="-1"><a class="header-anchor" href="#windows-takeover-host"><span>Windows Takeover Host</span></a></h3>
<h4 id="log-in-to-the-hyperbdr-console-1" tabindex="-1"><a class="header-anchor" href="#log-in-to-the-hyperbdr-console-1"><span>Log in to the HyperBDR Console</span></a></h4>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-5.png" alt="complete-doc-for-block-storage-failback-5.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-5.png</figcaption></figure>
<h4 id="download-the-agent-installation-package-to-the-local-of-the-takeover-host" tabindex="-1"><a class="header-anchor" href="#download-the-agent-installation-package-to-the-local-of-the-takeover-host"><span>Download the Agent installation package to the local of the Takeover Host.</span></a></h4>
<p>Click on the <strong>'DR'</strong> tab above, then select <strong>'Host Failback'</strong> on the left. Click on <strong>'Add Host'</strong>, choose the Agent mode.</p>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-6.png" alt="complete-doc-for-block-storage-failback-6.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-6.png</figcaption></figure>
<p>In the <strong>'Windows'</strong> section, select the installation package corresponding to your version for download.</p>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-7.png" alt="complete-doc-for-block-storage-failback-7.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-7.png</figcaption></figure>
<h4 id="antivirus-software-inspection-and-measures-on-source-windows-host" tabindex="-1"><a class="header-anchor" href="#antivirus-software-inspection-and-measures-on-source-windows-host"><span><strong>Antivirus Software Inspection and Measures on Source Windows Host</strong></span></a></h4>
<p>Refer to the following documentation and perform the operations on the Windows Takeover Host.</p>
<p>Documentation Link：<a href="https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#antivirus-software-inspection-and-measures-on-source-windows-host" target="_blank" rel="noopener noreferrer">https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#antivirus-software-inspection-and-measures-on-source-windows-host</a></p>
<h4 id="install-agent-on-the-windows-takeover-host" tabindex="-1"><a class="header-anchor" href="#install-agent-on-the-windows-takeover-host"><span><strong>Install Agent on the Windows Takeover Host</strong></span></a></h4>
<p>Refer to the following documentation and perform the operations on the Windows Takeover Host.</p>
<p>Documentation Link：<a href="https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-windows-host" target="_blank" rel="noopener noreferrer">https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-windows-host</a></p>
<h2 id="intranet-vpn-access-test-the-network-connectivity-between-the-takeover-host-and-huawei-cloud-obs" tabindex="-1"><a class="header-anchor" href="#intranet-vpn-access-test-the-network-connectivity-between-the-takeover-host-and-huawei-cloud-obs"><span>(Intranet VPN Access) Test the network connectivity between the Takeover Host and Huawei Cloud OBS</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The VPN service has been configured on the Huawei cloud side, and the Huawei cloud side has connected to the production site through the VPN. You can perform the following tests.</p>
</div>
<h3 id="the-takeover-host-is-linux-1" tabindex="-1"><a class="header-anchor" href="#the-takeover-host-is-linux-1"><span>The Takeover Host is Linux</span></a></h3>
<h4 id="log-in-to-the-takeover-host" tabindex="-1"><a class="header-anchor" href="#log-in-to-the-takeover-host"><span>Log in to the Takeover Host .</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Ensure that the ssh command is running on the Takeover Host.</p>
</div>
<h4 id="huawei-cloud-private-dns-connectivity-testing" tabindex="-1"><a class="header-anchor" href="#huawei-cloud-private-dns-connectivity-testing"><span>Huawei Cloud Private DNS Connectivity Testing</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Refer to the following document to find the Private DNS server addresses based on the used object storage region.<br>
Reference documents：<a href="https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html</a></p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100.125.1.250</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<figure><img src="@source/userguide/poc/images/docs-of-object-storage-host-failback-1.png" alt="docs-of-object-storage-host-failback-1.png" tabindex="0" loading="lazy"><figcaption>docs-of-object-storage-host-failback-1.png</figcaption></figure>
<h4 id="huawei-cloud-object-storage-connectivity-testing" tabindex="-1"><a class="header-anchor" href="#huawei-cloud-object-storage-connectivity-testing"><span>Huawei Cloud Object Storage Connectivity  Testing</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<figure><img src="@source/userguide/poc/images/docs-of-object-storage-host-failback-2.png" alt="docs-of-object-storage-host-failback-2.png" tabindex="0" loading="lazy"><figcaption>docs-of-object-storage-host-failback-2.png</figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This command is primarily used to test the accessibility of Huawei Cloud Object Storage buckets. Currently, the tested OBS domain is for the Huawei Cloud Singapore region. If you need to test in a different region, please refer to the official Huawei Cloud documentation to find the corresponding Endpoint domain address.<br>
Reference Link:  <a href="https://developer.huaweicloud.com/intl/en-us/endpoint?OBS" target="_blank" rel="noopener noreferrer">https://developer.huaweicloud.com/intl/en-us/endpoint?OBS</a></p>
</div>
<h3 id="the-takeover-host-is-windows-1" tabindex="-1"><a class="header-anchor" href="#the-takeover-host-is-windows-1"><span>The Takeover Host is Windows</span></a></h3>
<h4 id="log-in-to-the-takeover-host-1" tabindex="-1"><a class="header-anchor" href="#log-in-to-the-takeover-host-1"><span>Log in to the Takeover Host .</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Ensure that the ssh command exists on the Takeover Host, and open the CMD command line.</p>
</div>
<h4 id="huawei-cloud-private-dns-connectivity-testing-1" tabindex="-1"><a class="header-anchor" href="#huawei-cloud-private-dns-connectivity-testing-1"><span>Huawei Cloud Private DNS Connectivity Testing</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Refer to the following document to find the Private DNS server addresses based on the used object storage region.<br>
Reference documents：<a href="https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html</a></p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100.125.1.250</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<figure><img src="@source/userguide/poc/images/docs-of-object-storage-host-failback-3.png" alt="docs-of-object-storage-host-failback-3.png" tabindex="0" loading="lazy"><figcaption>docs-of-object-storage-host-failback-3.png</figcaption></figure>
<h4 id="huawei-cloud-object-storage-connectivity-testing-1" tabindex="-1"><a class="header-anchor" href="#huawei-cloud-object-storage-connectivity-testing-1"><span>Huawei Cloud Object Storage Connectivity  Testing</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<figure><img src="@source/userguide/poc/images/docs-of-object-storage-host-failback-4.png" alt="docs-of-object-storage-host-failback-4.png" tabindex="0" loading="lazy"><figcaption>docs-of-object-storage-host-failback-4.png</figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This command is primarily used to test the accessibility of Huawei Cloud Object Storage buckets. Currently, the tested OBS domain is for the Huawei Cloud Singapore region. If you need to test in a different region, please refer to the official Huawei Cloud documentation to find the corresponding Endpoint domain address.<br>
Reference Link:  <a href="https://developer.huaweicloud.com/intl/en-us/endpoint?OBS" target="_blank" rel="noopener noreferrer">https://developer.huaweicloud.com/intl/en-us/endpoint?OBS</a></p>
</div>
<h2 id="intranet-vpn-access-tests-the-network-connectivity-between-the-takeover-host-and-the-failback-transition-host" tabindex="-1"><a class="header-anchor" href="#intranet-vpn-access-tests-the-network-connectivity-between-the-takeover-host-and-the-failback-transition-host"><span>(Intranet VPN Access) Tests the network connectivity between the Takeover Host and the Failback Transition Host</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If the switchback test environment is connected to the Intranet of the production site through VPN, you can perform this operation to test the network connectivity between the Takeover Host and the Failback Transition Host.</p>
</div>
<h3 id="the-takeover-host-is-a-linux" tabindex="-1"><a class="header-anchor" href="#the-takeover-host-is-a-linux"><span>The Takeover Host is a Linux</span></a></h3>
<h4 id="verification-test-procedure-1" tabindex="-1"><a class="header-anchor" href="#verification-test-procedure-1"><span>Verification test procedure</span></a></h4>
<p>Log in to the Takeover Host.</p>
<h4 id="test-access-to-port-10729-of-the-failback-transition-host" tabindex="-1"><a class="header-anchor" href="#test-access-to-port-10729-of-the-failback-transition-host"><span>Test access to port 10729 of the Failback Transition Host</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Ensure that the ssh command is running on the Takeover Host</p>
</div>
<p>Test command:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10729</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> root@</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Failback</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Transition</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Intranet</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Verification results:
If the password can be accessed normally, the access is normal.</p>
<h3 id="the-takeover-host-is-a-windows" tabindex="-1"><a class="header-anchor" href="#the-takeover-host-is-a-windows"><span>The Takeover Host is a Windows</span></a></h3>
<h4 id="verification-test-procedure-2" tabindex="-1"><a class="header-anchor" href="#verification-test-procedure-2"><span>Verification test procedure</span></a></h4>
<p>Log in to the Takeover Host</p>
<h4 id="test-access-to-port-10729-of-the-failback-transition-host-1" tabindex="-1"><a class="header-anchor" href="#test-access-to-port-10729-of-the-failback-transition-host-1"><span>Test access to port 10729 of the Failback Transition Host</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Ensure that the ssh command exists on the Takeover Host, and open the CMD command line</p>
</div>
<p>Test command:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10729</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> root@</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Failback</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Transition</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Intranet</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Verification results:
If the password can be accessed normally, the access is normal.</p>
</div></template>


