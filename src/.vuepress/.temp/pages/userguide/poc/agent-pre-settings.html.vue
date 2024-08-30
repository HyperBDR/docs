<template><div><h1 id="agent-pre-settings" tabindex="-1"><a class="header-anchor" href="#agent-pre-settings"><span>Agent Pre-Settings</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#configure-the-time-synchronization-service-for-the-source-host">Configure the time synchronization service for the source host</router-link><ul><li><router-link to="#windows">Windows</router-link></li><li><router-link to="#linux">Linux</router-link></li></ul></li><li><router-link to="#verify-that-the-time-on-the-source-host-is-synchronized-with-coordinated-universal-time-utc">Verify that the time on the source host is synchronized with Coordinated Universal Time (UTC)</router-link><ul><li><router-link to="#viewing-the-time-on-windows-system">Viewing the time on Windows system</router-link></li><li><router-link to="#viewing-the-time-on-linux-system">Viewing the time on Linux system</router-link></li><li><router-link to="#viewing-utc-network-time">Viewing UTC Network Time:</router-link></li></ul></li><li><router-link to="#preliminary-investigation">Preliminary Investigation</router-link><ul><li><router-link to="#get-the-windows-operating-system-version">Get the Windows operating system version</router-link></li><li><router-link to="#get-the-linux-operating-system-version">Get the Linux operating system version</router-link></li><li><router-link to="#check-if-the-host-supports-agent-based-disaster-recovery">Check if the host supports Agent-based disaster recovery</router-link></li><li><router-link to="#agent-support-list">Agent Support List</router-link></li></ul></li><li><router-link to="#install-agent-on-the-source-linux-host">Install Agent on the source Linux host</router-link><ul><li><router-link to="#log-in-to-the-hyperbdr-disaster-recovery-platform">Log in to the HyperBDR disaster recovery platform</router-link></li><li><router-link to="#copy-the-agent-installation-command">Copy the Agent installation command</router-link></li><li><router-link to="#execute-the-installation-command-on-the-source-side-host">Execute the installation command on the source-side host</router-link></li></ul></li><li><router-link to="#install-agent-on-the-source-windows-host">Install Agent on the source Windows Host</router-link><ul><li><router-link to="#download-the-installation-package-to-the-host-system">Download the installation package to the host system</router-link></li><li><router-link to="#unzip-the-installation-package-and-proceed-with-the-installation">Unzip the installation package and proceed with the installation</router-link></li><li><router-link to="#start-the-windows-agent-service">Start the Windows Agent service</router-link></li></ul></li><li><router-link to="#verify-the-agent-registration-of-the-source-host">Verify the Agent registration of the source host</router-link><ul><li><router-link to="#log-in-to-the-disaster-recovery-platform">Log in to the disaster recovery platform</router-link></li><li><router-link to="#view-hosts-on-the-disaster-recovery-main-interface">View hosts on the disaster recovery main interface</router-link></li></ul></li><li><router-link to="#option-1-public-network-access-test-the-connectivity-between-the-agent-host-and-huawei-cloud-obs">(Option 1: Public Network Access) Test the Connectivity between the Agent Host and Huawei Cloud OBS</router-link><ul><li><router-link to="#windows-1">Windows</router-link></li><li><router-link to="#linux-1">Linux</router-link></li></ul></li><li><router-link to="#option-2-internal-vpn-access-test-the-connectivity-between-the-agent-host-and-huawei-cloud-obs">(Option 2: Internal VPN Access) Test the Connectivity between the Agent Host and Huawei Cloud OBS</router-link><ul><li><router-link to="#windows-host">Windows Host</router-link></li><li><router-link to="#linux-host">Linux Host</router-link></li></ul></li><li><router-link to="#option-1-public-network-access-test-network-connectivity-from-source-host-to-hyperbdr-console">(Option 1: Public Network Access) Test Network Connectivity from Source Host to HyperBDR Console</router-link><ul><li><router-link to="#windows-host-1">Windows Host</router-link></li><li><router-link to="#linux-host-1">Linux Host</router-link></li></ul></li><li><router-link to="#option-2-internal-vpn-access-test-network-connectivity-from-source-host-to-hyperbdr-console">(Option 2: Internal VPN Access)Test Network Connectivity from Source Host to HyperBDR Console</router-link><ul><li><router-link to="#windows-host-2">Windows Host</router-link></li><li><router-link to="#linux-host-2">Linux Host</router-link></li></ul></li><li><router-link to="#antivirus-software-inspection-and-measures-on-source-windows-host">Antivirus Software Inspection and Measures on Source Windows Host</router-link><ul><li><router-link to="#check-for-the-presence-of-antivirus-software-on-the-host">Check for the presence of antivirus software on the host</router-link></li><li><router-link to="#measures-when-antivirus-software-is-running-on-the-windows-host">Measures when Antivirus Software is Running on the Windows Host</router-link></li></ul></li><li><router-link to="#option-2-intranet-vpn-access-configure-huawei-cloud-intranet-dns-address-for-the-network-device-where-the-agent-host-reside">(Option 2: Intranet VPN access) Configure Huawei Cloud Intranet DNS Address for the Network Device where the Agent Host Reside</router-link><ul><li><router-link to="#configure-firewall-or-network-devices-such-as-switches">Configure Firewall or Network Devices such as Switches</router-link></li></ul></li></ul></nav>
<h2 id="configure-the-time-synchronization-service-for-the-source-host" tabindex="-1"><a class="header-anchor" href="#configure-the-time-synchronization-service-for-the-source-host"><span>Configure the time synchronization service for the source host</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Ensure that the host time is synchronized with the network time.</p>
</div>
<h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Example OS: Windows Server 2012 R2</p>
</div>
<h4 id="configure-using-the-windows-time-tools" tabindex="-1"><a class="header-anchor" href="#configure-using-the-windows-time-tools"><span>Configure using the Windows time tools.</span></a></h4>
<p>Click on the Windows icon on the desktop &gt; Open Control Panel &gt; Select &quot;Date and Time&quot; for configuration.</p>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-1.png" alt="agent-pre-settings-1.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-1.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-2.png" alt="agent-pre-settings-2.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-2.png</figcaption></figure>
<h4 id="configure-the-system-to-automatically-synchronize-time-with-internet-time-synchronization-servers" tabindex="-1"><a class="header-anchor" href="#configure-the-system-to-automatically-synchronize-time-with-internet-time-synchronization-servers"><span>Configure the system to automatically synchronize time with Internet time synchronization servers.</span></a></h4>
<p>In the &quot;Date and Time&quot;, click on &quot;Internet Time&quot;, click on &quot;Change settings...&quot;</p>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-3.png" alt="agent-pre-settings-3.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-3.png</figcaption></figure>
<p>Check the &quot;Synchronize with an Internet time server&quot; option. From the &quot;Server&quot; dropdown menu, choose a time server (e.g., time.windows.com).</p>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-4.png" alt="agent-pre-settings-4.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-4.png</figcaption></figure>
<p>Click &quot;Update now&quot; to test the connection and wait for confirmation. Click &quot;OK&quot; to save the changes.</p>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-5.png" alt="agent-pre-settings-5.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-5.png</figcaption></figure>
<h4 id="configure-automatic-synchronization-with-the-local-time-synchronization-server" tabindex="-1"><a class="header-anchor" href="#configure-automatic-synchronization-with-the-local-time-synchronization-server"><span>Configure automatic synchronization with the local time synchronization server.</span></a></h4>
<p>If your host is in an intranet environment, you need to configure the address to be your local time synchronization server address.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The <strong>&lt;ntp.server.ip.address&gt;</strong> is the IP address of your NTP server.</p>
</div>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-6.png" alt="agent-pre-settings-6.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-6.png</figcaption></figure>
<p>Click &quot;Update now&quot; to test the connection and wait for confirmation. Click &quot;OK&quot; to save the changes.</p>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-7.png" alt="agent-pre-settings-7.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-7.png</figcaption></figure>
<h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Example OS: CentOS Linux release 7.5</p>
</div>
<h4 id="install-ntp" tabindex="-1"><a class="header-anchor" href="#install-ntp"><span>Install NTP</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [root@node ~]# yum install -y ntp</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="start-the-ntp-service" tabindex="-1"><a class="header-anchor" href="#start-the-ntp-service"><span>Start the NTP service</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@node ~]# systemctl start  ntpd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@node ~]# systemctl enable  ntpd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Created</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> symlink</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/systemd/system/multi-user.target.wants/ntpd.service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/lib/systemd/system/ntpd.service.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="view-ntp-service-status" tabindex="-1"><a class="header-anchor" href="#view-ntp-service-status"><span>View NTP service status</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@node ~]# systemctl status ntpd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">●</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ntpd.service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Time</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Service</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">   Loaded:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> loaded</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (/usr/lib/systemd/system/ntpd.service; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vendor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> preset:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> disabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">   Active:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> active</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (running) since Thu 2022-08-04 08:00:47 CST; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">7h</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> left</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Main</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> PID:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 20746</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (ntpd)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    Tasks:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">   Memory:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 768.0K</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">   CGroup:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /system.slice/ntpd.service</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">           └─20746</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/sbin/ntpd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ntp:ntp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -g</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Aug</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 04</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 08:00:47</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ntpd[20746]:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Listen</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> normally</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> on</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 6</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> lo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ::1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> UDP</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 123</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Aug</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 04</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 08:00:47</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ntpd[20746]:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Listen</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> normally</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> on</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 7</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ens33</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> fe80::8a83:7297:7cb8:9934</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> UDP</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 123</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Aug</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 04</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 08:00:47</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ntpd[20746]:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Listening</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> on</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> routing</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> socket</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> on</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> fd</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"> #24 for interface updates</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Aug</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 04</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 08:00:47</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemd[1]:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Started</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Time</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Service.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Aug</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 04</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 08:00:47</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ntpd[20746]:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0.0.0.0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> c016</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 06</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Aug</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 04</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 08:00:47</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ntpd[20746]:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0.0.0.0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> c012</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 02</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> freq_set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kernel</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0.000</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> PPM</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Aug</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 04</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 08:00:47</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ntpd[20746]:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0.0.0.0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> c011</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 01</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> freq_not_set</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Aug</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 04</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 08:00:56</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ntpd[20746]:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0.0.0.0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> c61c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 0c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> clock_step</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -28798.353463</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> s</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Aug</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 04</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 00:00:57</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ntpd[20746]:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0.0.0.0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> c614</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 04</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> freq_mode</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Aug</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 04</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 00:00:58</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ntpd[20746]:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0.0.0.0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> c618</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 08</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> no_sys_peer</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="modify-the-ntp-conf-file" tabindex="-1"><a class="header-anchor" href="#modify-the-ntp-conf-file"><span>Modify the ntp.conf file</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Please make sure to replace <strong>time.example.com</strong> with the actual NTP server address you want to use. This command will directly save the file after modification, so ensure that your configuration changes are error-free before executing.</p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># Comment out lines starting with 'server'.</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># Add new NTP server addresses at the end of the file.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# sudo sed -i -e </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'/^server/ s/^server/#&#x26;/'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> -e </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'$ a server time.example.com iburst'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /etc/ntp.conf</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="restart-the-service" tabindex="-1"><a class="header-anchor" href="#restart-the-service"><span>Restart the service</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@node ~]# systemctl restart ntpd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="check-synchronization-status" tabindex="-1"><a class="header-anchor" href="#check-synchronization-status"><span>Check synchronization status</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@node ~]# ntpq -p</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">     remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">           refid</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      st</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> when</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> poll</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> reach</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   delay</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   offset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  jitter</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==============================================================================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> 203.107.6.88</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    100.107.25.114</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> u</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   64</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   30.975</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  149.499</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   0.393</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="verify-that-the-time-on-the-source-host-is-synchronized-with-coordinated-universal-time-utc" tabindex="-1"><a class="header-anchor" href="#verify-that-the-time-on-the-source-host-is-synchronized-with-coordinated-universal-time-utc"><span>Verify that the time on the source host is synchronized with Coordinated Universal Time (UTC)</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>For security purposes, Object Storage Service verifies the time difference between the client and server. If the time difference is longer than 15 minutes, the Object Storage Service will reject your requests and this error message is reported.</p>
</div>
<h3 id="viewing-the-time-on-windows-system" tabindex="-1"><a class="header-anchor" href="#viewing-the-time-on-windows-system"><span>Viewing the time on Windows system</span></a></h3>
<p>Click on the Windows icon on the desktop &gt; Open Control Panel &gt; Select &quot;Date and Time&quot;</p>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-8.png" alt="agent-pre-settings-8.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-8.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-9.png" alt="agent-pre-settings-9.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-9.png</figcaption></figure>
<p>View the time and time zone:</p>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-10.png" alt="agent-pre-settings-10.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-10.png</figcaption></figure>
<hr>
<h3 id="viewing-the-time-on-linux-system" tabindex="-1"><a class="header-anchor" href="#viewing-the-time-on-linux-system"><span>Viewing the time on Linux system</span></a></h3>
<ol>
<li><strong>Open the terminal:</strong>
<ul>
<li>Use a terminal application, such as Terminal.</li>
</ul>
</li>
<li><strong>Execute the command to view the system time:</strong></li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>date</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/userguide/poc/images/agent-pre-settings-11.png" alt="agent-pre-settings-11.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-11.png</figcaption></figure>
<ol start="3">
<li><strong>Execute the command to view the system time zone:</strong></li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>timedatectl</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/userguide/poc/images/agent-pre-settings-12.png" alt="agent-pre-settings-12.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-12.png</figcaption></figure>
<h3 id="viewing-utc-network-time" tabindex="-1"><a class="header-anchor" href="#viewing-utc-network-time"><span>Viewing UTC Network Time:</span></a></h3>
<ol>
<li><strong>Confirm the time zone and time of the source host.</strong></li>
<li><strong>Network query for standard UTC time and compare it with the source host.</strong></li>
</ol>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-13.png" alt="agent-pre-settings-13.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-13.png</figcaption></figure>
<h2 id="preliminary-investigation" tabindex="-1"><a class="header-anchor" href="#preliminary-investigation"><span>Preliminary Investigation</span></a></h2>
<h3 id="get-the-windows-operating-system-version" tabindex="-1"><a class="header-anchor" href="#get-the-windows-operating-system-version"><span>Get the Windows operating system version</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Example OS：Microsoft Windows Server 2016 Datacenter</p>
</div>
<h4 id="get-the-windows-os-version-through-the-control-panel" tabindex="-1"><a class="header-anchor" href="#get-the-windows-os-version-through-the-control-panel"><span>Get the Windows OS version through the Control Panel</span></a></h4>
<p>Open [Control Panel], go to [System and Security], and then select the system to retrieve relevant information.
<img src="@source/userguide/poc/images/agent-pre-settings-14.png" alt="agent-pre-settings-14.png" loading="lazy"></p>
<h4 id="get-the-windows-os-version-through-the-cmd" tabindex="-1"><a class="header-anchor" href="#get-the-windows-os-version-through-the-cmd"><span>Get the Windows OS version through the CMD</span></a></h4>
<p>Login to the Windows server, use the shortcut Win + R to open the CMD window, and execute the following command:</p>
<div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">systeminfo</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/userguide/poc/images/agent-pre-settings-15.png" alt="agent-pre-settings-15.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-15.png</figcaption></figure>
<p>From the output, you can view the OS name.</p>
<blockquote>
<p><strong>Host Name:</strong> NGINX-WEB<br>
<strong>OS Name:</strong> Microsoft Windows Server 2016 Datacenter</p>
</blockquote>
<h3 id="get-the-linux-operating-system-version" tabindex="-1"><a class="header-anchor" href="#get-the-linux-operating-system-version"><span>Get the Linux operating system version</span></a></h3>
<blockquote>
<p>Example OS：CentOS 7.9</p>
</blockquote>
<p>Run the following command to view the operating system version:</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/redhat-release</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>The output content represents information about the operating system version:</p>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-16.png" alt="agent-pre-settings-16.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-16.png</figcaption></figure>
<h3 id="check-if-the-host-supports-agent-based-disaster-recovery" tabindex="-1"><a class="header-anchor" href="#check-if-the-host-supports-agent-based-disaster-recovery"><span>Check if the host supports Agent-based disaster recovery</span></a></h3>
<p>Check the operating system and version of the source host, compare it with the Agent Support List, and determine whether the disaster recovery host supports Agent-based disaster recovery.</p>
<h3 id="agent-support-list" tabindex="-1"><a class="header-anchor" href="#agent-support-list"><span>Agent Support List</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>【√】: Full support</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Currently, the Linux Agent only supports officially released Ubuntu LTS versions. For other customized versions based on Ubuntu, we do not provide support at the moment.<br>
If your production environment uses a customized Ubuntu version, we need to conduct an internal evaluation on the product side and perform necessary custom builds based on the actual on-site situation. Once the build is completed and passes internal integrity testing, we will provide updates to support your production environment.</p>
</div>
<table>
<thead>
<tr>
<th style="text-align:center"><strong>OS</strong> [Production Source]</th>
<th style="text-align:center"><strong>Version</strong></th>
<th style="text-align:center"><strong>Support Information</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><strong>Windows Server</strong></td>
<td style="text-align:center">2003 SP2/R2 (64-bit)</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center"><strong>Windows Server</strong></td>
<td style="text-align:center">2008(64-bit)</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center"><strong>Windows Server</strong></td>
<td style="text-align:center">2008 R2(64-bit)</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center"><strong>Windows Server</strong></td>
<td style="text-align:center">2012(64-bit)</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center"><strong>Windows Server</strong></td>
<td style="text-align:center">2012 R2(64-bit)</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center"><strong>Windows Server</strong></td>
<td style="text-align:center">2016(64-bit)</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center"><strong>Windows Server</strong></td>
<td style="text-align:center">2019(64-bit)</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center"><strong>Linux</strong></td>
<td style="text-align:center">CentOS 6.5+(64-bit)</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center"><strong>Linux</strong></td>
<td style="text-align:center">CentOS 7.x(64-bit)</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center"><strong>Linux</strong></td>
<td style="text-align:center">CentOS 8.x(64-bit)</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center"><strong>Linux</strong></td>
<td style="text-align:center">Red Hat Enterprise Linux (RHEL) 6.x(64-bit)</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center"><strong>Linux</strong></td>
<td style="text-align:center">Red Hat Enterprise Linux (RHEL) 7.x(64-bit)</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center"><strong>Linux</strong></td>
<td style="text-align:center">Red Hat Enterprise Linux (RHEL) 8.x(64-bit)</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center"><strong>Linux</strong></td>
<td style="text-align:center">SUSE Linux Enterprise Server 11 SP1 (SLES)(64-bit)</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center"><strong>Linux</strong></td>
<td style="text-align:center">SUSE Linux Enterprise Server 11 SP1 (SLES)(64-bit)</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center"><strong>Linux</strong></td>
<td style="text-align:center">SUSE Linux Enterprise Server 11 SP3 (SLES)(64-bit)</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center"><strong>Linux</strong></td>
<td style="text-align:center">SUSE Linux Enterprise Server 11 SP4 (SLES)(64-bit)</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center"><strong>Linux</strong></td>
<td style="text-align:center">Ubuntu Server 12.04(64-bit)</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center"><strong>Linux</strong></td>
<td style="text-align:center">Ubuntu Server 14.04(64-bit)</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center"><strong>Linux</strong></td>
<td style="text-align:center">Ubuntu Server 16.04(64-bit)</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center"><strong>Linux</strong></td>
<td style="text-align:center">Ubuntu Server 18.04(64-bit)</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center"><strong>Linux</strong></td>
<td style="text-align:center">Ubuntu Server 20.04(64-bit)</td>
<td style="text-align:center">√</td>
</tr>
</tbody>
</table>
<h2 id="install-agent-on-the-source-linux-host" tabindex="-1"><a class="header-anchor" href="#install-agent-on-the-source-linux-host"><span>Install Agent on the source Linux host</span></a></h2>
<h3 id="log-in-to-the-hyperbdr-disaster-recovery-platform" tabindex="-1"><a class="header-anchor" href="#log-in-to-the-hyperbdr-disaster-recovery-platform"><span>Log in to the HyperBDR disaster recovery platform</span></a></h3>
<p>Log in to the disaster recovery platform using the username and password for the platform, and perform disaster recovery operations.
<img src="@source/userguide/poc/images/agent-pre-settings-17.png" alt="agent-pre-settings-17.png" loading="lazy"></p>
<h3 id="copy-the-agent-installation-command" tabindex="-1"><a class="header-anchor" href="#copy-the-agent-installation-command"><span>Copy the Agent installation command</span></a></h3>
<p>Click on 'Configuration' at the top, then on the left, click on 'Production Site'. Choose the Agent mode and click to proceed.
<img src="@source/userguide/poc/images/agent-pre-settings-18.png" alt="agent-pre-settings-18.png" loading="lazy"></p>
<p>In the 'Linux' section, click on 'Copy Command'.
<img src="@source/userguide/poc/images/agent-pre-settings-19.png" alt="agent-pre-settings-19.png" loading="lazy"></p>
<h3 id="execute-the-installation-command-on-the-source-side-host" tabindex="-1"><a class="header-anchor" href="#execute-the-installation-command-on-the-source-side-host"><span>Execute the installation command on the source-side host</span></a></h3>
<p>Log in to the source-side host, execute the specified command, and the Agent program will be successfully installed.
<img src="@source/userguide/poc/images/agent-pre-settings-20.png" alt="agent-pre-settings-20.png" loading="lazy"></p>
<h2 id="install-agent-on-the-source-windows-host" tabindex="-1"><a class="header-anchor" href="#install-agent-on-the-source-windows-host"><span>Install Agent on the source Windows Host</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The HyperBDR disaster recovery platform is pre-installed by default. In case of local antivirus software, it is essential to proactively add the Windows Agent software to the antivirus software's whitelist. This ensures the smooth execution of the Agent program. Additionally, it is a prerequisite to have a minimum of 1GB of available memory on the host to guarantee the normal operation of the Windows Agent.</p>
</div>
<p>Open the Performance tab of Task Manager and view the available memory of the system:
<img src="@source/userguide/poc/images/agent-pre-settings-21.png" alt="agent-pre-settings-21.png" loading="lazy"></p>
<h3 id="download-the-installation-package-to-the-host-system" tabindex="-1"><a class="header-anchor" href="#download-the-installation-package-to-the-host-system"><span>Download the installation package to the host system</span></a></h3>
<p>Login to the HyperBDR platform, navigate to <strong>[Configuration]</strong> -&gt; <strong>[Production Site]</strong> -&gt; <strong>[Agent]</strong>, and download the ZIP file：
<img src="@source/userguide/poc/images/agent-pre-settings-22.png" alt="agent-pre-settings-22.png" loading="lazy"></p>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-23.png" alt="agent-pre-settings-23.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-23.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-24.png" alt="agent-pre-settings-24.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-24.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-25.png" alt="agent-pre-settings-25.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-25.png</figcaption></figure>
<h3 id="unzip-the-installation-package-and-proceed-with-the-installation" tabindex="-1"><a class="header-anchor" href="#unzip-the-installation-package-and-proceed-with-the-installation"><span>Unzip the installation package and proceed with the installation</span></a></h3>
<p>Extract the installation package to the current directory.
<img src="@source/userguide/poc/images/agent-pre-settings-26.png" alt="agent-pre-settings-26.png" loading="lazy"></p>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-27.png" alt="agent-pre-settings-27.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-27.png</figcaption></figure>
<p>Open the folder of the extracted directory, right-click on the Install.exe file, and run this program as administrator to install the Windows Agent.
<img src="@source/userguide/poc/images/agent-pre-settings-28.png" alt="agent-pre-settings-28.png" loading="lazy"></p>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-29.png" alt="agent-pre-settings-29.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-29.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-30.png" alt="agent-pre-settings-30.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-30.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-31.png" alt="agent-pre-settings-31.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-31.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-32.png" alt="agent-pre-settings-32.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-32.png</figcaption></figure>
<p>Installation of Windows Agent is complete.<br>
<img src="@source/userguide/poc/images/agent-pre-settings-33.png" alt="agent-pre-settings-33.png" loading="lazy"></p>
<h3 id="start-the-windows-agent-service" tabindex="-1"><a class="header-anchor" href="#start-the-windows-agent-service"><span>Start the Windows Agent service</span></a></h3>
<p>Right-click on the Windows Agent shortcut on the desktop and run it with administrator privileges.</p>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-34.png" alt="agent-pre-settings-34.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-34.png</figcaption></figure>
<p>Start Service</p>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-35.png" alt="agent-pre-settings-35.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-35.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-36.png" alt="agent-pre-settings-36.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-36.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-37.png" alt="agent-pre-settings-37.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-37.png</figcaption></figure>
<p>Service started normally</p>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-38.png" alt="agent-pre-settings-38.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-38.png</figcaption></figure>
<h2 id="verify-the-agent-registration-of-the-source-host" tabindex="-1"><a class="header-anchor" href="#verify-the-agent-registration-of-the-source-host"><span>Verify the Agent registration of the source host</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>After installing the Agent on the source-side Linux host, it will automatically register with the disaster recovery platform.<br>
After installing and launching the Agent on the source-side Windows host, it will automatically register with the disaster recovery platform.</p>
</div>
<h3 id="log-in-to-the-disaster-recovery-platform" tabindex="-1"><a class="header-anchor" href="#log-in-to-the-disaster-recovery-platform"><span>Log in to the disaster recovery platform</span></a></h3>
<p>Log in to the disaster recovery platform using the username and password for the platform, and perform disaster recovery operations.
<img src="@source/userguide/poc/images/agent-pre-settings-39.png" alt="agent-pre-settings-39.png" loading="lazy"></p>
<h3 id="view-hosts-on-the-disaster-recovery-main-interface" tabindex="-1"><a class="header-anchor" href="#view-hosts-on-the-disaster-recovery-main-interface"><span>View hosts on the disaster recovery main interface</span></a></h3>
<p>After logging in to the HyperBDR disaster recovery platform, click on the 'DR' in the top menu bar, then on the left menu bar, select 'Host DR' to check whether the hosts are registered on the platform, ensure Host Status is &quot;Registered&quot;, Availability is &quot;Online&quot;:
<img src="@source/userguide/poc/images/agent-pre-settings-40.png" alt="agent-pre-settings-40.png" loading="lazy"></p>
<h2 id="option-1-public-network-access-test-the-connectivity-between-the-agent-host-and-huawei-cloud-obs" tabindex="-1"><a class="header-anchor" href="#option-1-public-network-access-test-the-connectivity-between-the-agent-host-and-huawei-cloud-obs"><span>(Option 1: Public Network Access) Test the Connectivity between the Agent Host and Huawei Cloud OBS</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Ensure your source hosts can access internet before testing.</p>
</div>
<h3 id="windows-1" tabindex="-1"><a class="header-anchor" href="#windows-1"><span>Windows</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Perform testing operations using the Windows Command Prompt (CMD).</p>
</div>
<h4 id="public-dns-connectivity-testing" tabindex="-1"><a class="header-anchor" href="#public-dns-connectivity-testing"><span>Public DNS Connectivity Testing</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 8.8.8.8</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Success Response:</p>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-41.png" alt="agent-pre-settings-41.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-41.png</figcaption></figure>
<h4 id="huawei-object-storage-connectivity" tabindex="-1"><a class="header-anchor" href="#huawei-object-storage-connectivity"><span>Huawei Object Storage Connectivity</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Success Response:</p>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-42.png" alt="agent-pre-settings-42.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-42.png</figcaption></figure>
<h3 id="linux-1" tabindex="-1"><a class="header-anchor" href="#linux-1"><span>Linux</span></a></h3>
<h4 id="public-dns-connectivity-testing-1" tabindex="-1"><a class="header-anchor" href="#public-dns-connectivity-testing-1"><span>Public DNS Connectivity Testing</span></a></h4>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="huawei-object-storage-connectivity-1" tabindex="-1"><a class="header-anchor" href="#huawei-object-storage-connectivity-1"><span>Huawei Object Storage Connectivity</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>&#x3C;?xml version="1.0" encoding="UTF-8" standalone="yes"?>&#x3C;Error>&#x3C;Code>AccessDenied&#x3C;/Code>&#x3C;Message>Anonymous access is forbidden for this operation&#x3C;/Message>&#x3C;RequestId>0000018C1F508F2F9012234EA17641CE&#x3C;/RequestId>&#x3C;HostId>Z9v+cC1sRnaWw6x0vi8pxxYA0YVnKxbYHUPAFpnxkX8sLV44u5b02Z+ailn2wCnR&#x3C;/HostId>&#x3C;/Error>#</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This command is primarily used to test the accessibility of Huawei Cloud Object Storage buckets. Currently, the tested OBS domain is for the Huawei Cloud Singapore region. If you need to test in a different region, please refer to the official Huawei Cloud documentation to find the corresponding Endpoint domain address.<br>
Reference Link: <a href="https://developer.huaweicloud.com/intl/en-us/endpoint?OBS" target="_blank" rel="noopener noreferrer">https://developer.huaweicloud.com/intl/en-us/endpoint?OBS</a></p>
</div>
<h2 id="option-2-internal-vpn-access-test-the-connectivity-between-the-agent-host-and-huawei-cloud-obs" tabindex="-1"><a class="header-anchor" href="#option-2-internal-vpn-access-test-the-connectivity-between-the-agent-host-and-huawei-cloud-obs"><span>(Option 2: Internal VPN Access) Test the Connectivity between the Agent Host and Huawei Cloud OBS</span></a></h2>
<h3 id="windows-host" tabindex="-1"><a class="header-anchor" href="#windows-host"><span>Windows Host</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Perform testing operations using the Windows Command Prompt (CMD).</p>
</div>
<h4 id="huawei-cloud-private-dns-connectivity-testing" tabindex="-1"><a class="header-anchor" href="#huawei-cloud-private-dns-connectivity-testing"><span>Huawei Cloud Private DNS Connectivity Testing</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Refer to the following document to find the private NDS (Network Domain Service) address based on the used object storage region.<br>
Reference documents：<a href="https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html</a></p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100.125.1.250</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-43.png" alt="agent-pre-settings-43.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-43.png</figcaption></figure>
<h4 id="huawei-object-storage-connectivity-2" tabindex="-1"><a class="header-anchor" href="#huawei-object-storage-connectivity-2"><span>Huawei Object Storage Connectivity</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Success Response:</p>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-44.png" alt="agent-pre-settings-44.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-44.png</figcaption></figure>
<h3 id="linux-host" tabindex="-1"><a class="header-anchor" href="#linux-host"><span>Linux Host</span></a></h3>
<h4 id="check-object-storage-service-endpoint" tabindex="-1"><a class="header-anchor" href="#check-object-storage-service-endpoint"><span>Check Object Storage Service Endpoint</span></a></h4>
<p>Make sure object storage service endpoint address return internal ip address.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ping obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>PING obs.lz01.ap-southeast-3.myhuaweicloud.com (100.125.36.29) 56(84) bytes of data.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Huawei Cloud Object Storage Service internal IP Range: 100.125.xx. If there is no ICMP response, it is considered normal.</p>
</div>
<h4 id="huawei-object-storage-connectivity-3" tabindex="-1"><a class="header-anchor" href="#huawei-object-storage-connectivity-3"><span>Huawei Object Storage Connectivity</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>curl https://obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Success Response:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>&#x3C;?xml version="1.0" encoding="UTF-8" standalone="yes"?>&#x3C;Error>&#x3C;Code>AccessDenied&#x3C;/Code>&#x3C;Message>Anonymous access is forbidden for this operation&#x3C;/Message>&#x3C;RequestId>0000018C1F508F2F9012234EA17641CE&#x3C;/RequestId>&#x3C;HostId>Z9v+cC1sRnaWw6x0vi8pxxYA0YVnKxbYHUPAFpnxkX8sLV44u5b02Z+ailn2wCnR&#x3C;/HostId>&#x3C;/Error>#</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This command is primarily used to test the accessibility of Huawei Cloud Object Storage buckets. Currently, the tested OBS domain is for the Huawei Cloud Singapore region. If you need to test in a different region, please refer to the official Huawei Cloud documentation to find the corresponding Endpoint domain address.<br>
Reference Link: <a href="https://developer.huaweicloud.com/intl/en-us/endpoint?OBS" target="_blank" rel="noopener noreferrer">https://developer.huaweicloud.com/intl/en-us/endpoint?OBS</a></p>
</div>
<h2 id="option-1-public-network-access-test-network-connectivity-from-source-host-to-hyperbdr-console" tabindex="-1"><a class="header-anchor" href="#option-1-public-network-access-test-network-connectivity-from-source-host-to-hyperbdr-console"><span>(Option 1: Public Network Access) Test Network Connectivity from Source Host to HyperBDR Console</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This step needs to be tested after the installation of HyperBDR Console is completed.<br>
Test Access to HyperBDR Console Port 10443 and Port 30080.</p>
</div>
<h3 id="windows-host-1" tabindex="-1"><a class="header-anchor" href="#windows-host-1"><span>Windows Host</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Perform testing operations using the Windows Command Prompt (CMD).</p>
</div>
<p>Test Access to HyperBDR Console Port 10443 and Port 30080</p>
<p>Execute Command：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10443</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Console</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Public</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Test Result: If the input results include the information &quot;[debug1: Connection established.]&quot; it indicates that there are no issues with network connectivity.</p>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-45.png" alt="agent-pre-settings-45.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-45.png</figcaption></figure>
<p>Execute Command：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 30080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Console</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Public</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/userguide/poc/images/agent-pre-settings-46.png" alt="agent-pre-settings-46.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-46.png</figcaption></figure>
<p>Test Result: If the input results include the information &quot;[debug1: Connection established.]&quot; it indicates that there are no issues with network connectivity.</p>
<h3 id="linux-host-1" tabindex="-1"><a class="header-anchor" href="#linux-host-1"><span>Linux Host</span></a></h3>
<p>Test Access to HyperBDR Console Port 10443 and Port 30080</p>
<p>Execute Command：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10443</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Console</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Public</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Test Result: If the input results include the information &quot;[debug1: Connection established.]&quot; it indicates that there are no issues with network connectivity.</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">OpenSSH_7.4p1,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> OpenSSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1.0.2k-fips</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 26</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Jan</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2017</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">debug1:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Reading</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> configuration</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> data</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/ssh/ssh_config</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">debug1:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/ssh/ssh_config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> line</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 58:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Applying</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> options</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> for</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> *</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">debug1:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Connecting</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Public</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P> [&#x3C;HyperBDR </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Public</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">]</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> port</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 10443.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">debug1:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Connection</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Execute Command：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 30080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Console</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Public</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Test Result: If the input results include the information &quot;[debug1: Connection established.]&quot; it indicates that there are no issues with network connectivity.</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">OpenSSH_7.4p1,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> OpenSSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1.0.2k-fips</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 26</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Jan</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2017</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">debug1:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Reading</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> configuration</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> data</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/ssh/ssh_config</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">debug1:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/ssh/ssh_config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> line</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 58:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Applying</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> options</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> for</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> *</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">debug1:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Connecting</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Console</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Public</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P> [&#x3C;HyperBDR </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Console</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Public</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">]</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> port</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 30080.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">debug1:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Connection</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="option-2-internal-vpn-access-test-network-connectivity-from-source-host-to-hyperbdr-console" tabindex="-1"><a class="header-anchor" href="#option-2-internal-vpn-access-test-network-connectivity-from-source-host-to-hyperbdr-console"><span>(Option 2: Internal VPN Access)Test Network Connectivity from Source Host to HyperBDR Console</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This step needs to be tested after the installation of HyperBDR Console is completed.<br>
Test Access to HyperBDR Console Port 10443 and Port 30080</p>
</div>
<h3 id="windows-host-2" tabindex="-1"><a class="header-anchor" href="#windows-host-2"><span>Windows Host</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Perform testing operations using the Windows Command Prompt (CMD).</p>
</div>
<p>Execute Command：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10443</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Console</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Internal</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Test Result: If the input results include the information &quot;[debug1: Connection established.]&quot; it indicates that there are no issues with network connectivity.</p>
<figure><img src="@source/userguide/poc/images/agent-pre-settings-47.png" alt="agent-pre-settings-47.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-47.png</figcaption></figure>
<p>Execute Command：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 30080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Console</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Internal</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/userguide/poc/images/agent-pre-settings-48.png" alt="agent-pre-settings-48.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-48.png</figcaption></figure>
<p>Test Result: If the input results include the information &quot;[debug1: Connection established.]&quot; it indicates that there are no issues with network connectivity.</p>
<h3 id="linux-host-2" tabindex="-1"><a class="header-anchor" href="#linux-host-2"><span>Linux Host</span></a></h3>
<p>Execute Command:</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10443</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Console</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Internal</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Test Result: If the input results include the information &quot;[debug1: Connection established.]&quot; it indicates that there are no issues with network connectivity.</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">OpenSSH_7.4p1,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> OpenSSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1.0.2k-fips</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  26</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Jan</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2017</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">debug1:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Reading</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> configuration</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> data</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/ssh/ssh_config</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">debug1:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/ssh/ssh_config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> line</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 58:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Applying</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> options</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> for</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> *</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">debug1:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Connecting</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Internal</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P> [&#x3C;HyperBDR </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Internal</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">]</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> port</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 10443.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">debug1:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Connection</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Execute Command：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 30080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Console</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Internal</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Test Result: If the input results include the information &quot;[debug1: Connection established.]&quot; it indicates that there are no issues with network connectivity.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span></span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span></span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span></span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Internal IP> [&#x3C;HyperBDR Internal IP>] port 30080.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="antivirus-software-inspection-and-measures-on-source-windows-host" tabindex="-1"><a class="header-anchor" href="#antivirus-software-inspection-and-measures-on-source-windows-host"><span><strong>Antivirus Software Inspection and Measures on Source Windows Host</strong></span></a></h2>
<h3 id="check-for-the-presence-of-antivirus-software-on-the-host" tabindex="-1"><a class="header-anchor" href="#check-for-the-presence-of-antivirus-software-on-the-host"><span>Check for the presence of antivirus software on the host</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If antivirus software is running locally on the Windows host, during the installation and use of the Windows Agent, relevant programs and files may be mistakenly identified as trojans, viruses, or dangerous files, causing the Windows Agent to malfunction.</p>
</div>
<p>Before installing the Windows Agent, check if antivirus software is running on the host and take the following measures to avoid issues with the proper installation and operation of the Windows Agent.</p>
<h4 id="if-the-host-is-running-kaspersky-please-click-here" tabindex="-1"><a class="header-anchor" href="#if-the-host-is-running-kaspersky-please-click-here"><span>If the host is running Kaspersky, please click <a href="https://docs.oneprocloud.com/userguide/faq/faq.html#kaspersky" target="_blank" rel="noopener noreferrer">here</a>.</span></a></h4>
<h4 id="if-the-host-is-running-mcafee-please-click-here" tabindex="-1"><a class="header-anchor" href="#if-the-host-is-running-mcafee-please-click-here"><span>If the host is running McAfee, please click <a href="https://docs.oneprocloud.com/userguide/faq/faq.html#mcafee" target="_blank" rel="noopener noreferrer">here</a>.</span></a></h4>
<p>If the above did not find the antivirus software running on your host, please continue to browse the contents of this document.</p>
<h3 id="measures-when-antivirus-software-is-running-on-the-windows-host" tabindex="-1"><a class="header-anchor" href="#measures-when-antivirus-software-is-running-on-the-windows-host"><span>Measures when Antivirus Software is Running on the Windows Host</span></a></h3>
<h4 id="option-1-add-to-antivirus-software-whitelist" tabindex="-1"><a class="header-anchor" href="#option-1-add-to-antivirus-software-whitelist"><span>Option 1: Add to Antivirus Software Whitelist</span></a></h4>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>As some antivirus software programs may operate in the background, this method may not completely avoid issues caused by antivirus software programs, preventing the Windows Agent from functioning properly.</p>
</div>
<ol>
<li>
<p><strong>Disable the protection feature of the antivirus software.</strong></p>
</li>
<li>
<p><strong>Install the Windows Agent (refer to the documentation: <a href="https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-windows-host" target="_blank" rel="noopener noreferrer">Install the Windows Agent</a>).</strong></p>
</li>
<li>
<p><strong>Add the following directories and files to the whitelist of the antivirus software (default installation path).</strong></p>
</li>
</ol>
<table>
<thead>
<tr>
<th><strong>List</strong></th>
<th><strong>Attributes</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent</td>
<td>Dir</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\hyper_exporter</td>
<td>Dir</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\CollHostInfo.bat</td>
<td>File</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\create_bcd.bat</td>
<td>File</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\DiskSyncAgent.exe</td>
<td>File</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\DiskSyncCtrl.exe</td>
<td>File</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\ExecPro_in.exe</td>
<td>File</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\ExecPro_un.exe</td>
<td>File</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\hyper_exporter.exe</td>
<td>File</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\Opcli.exe</td>
<td>File</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\reg_service.bat</td>
<td>File</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\reset.bat</td>
<td>File</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\uninst.exe</td>
<td>File</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\unreg_service.bat</td>
<td>File</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\WindowsAgentCmd.bat</td>
<td>File</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\hyper_exporter\hp_exporter_service.exe</td>
<td>File</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\hyper_exporter\hyper_exporter.exe</td>
<td>File</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\hyper_exporter\reg_service.bat</td>
<td>File</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\hyper_exporter\unreg_service.bat</td>
<td>File</td>
</tr>
</tbody>
</table>
<ol start="4">
<li><strong>Enable the Antivirus Software's Protection Feature</strong></li>
</ol>
<p>During this process, if the antivirus software prompts actions such as blocking the installation and operation of the Window Agent with pop-ups or isolating files, manual &quot;<strong>allow</strong>&quot; or &quot;<strong>restore</strong>&quot; operations are required.</p>
<ol start="5">
<li><strong>Start the Windows Agent Service (refer to the documentation: <a href="https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#start-the-windows-agent-service" target="_blank" rel="noopener noreferrer">Start Windows Agent Service</a>)</strong></li>
</ol>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>If the program fails to start, uninstall the Windows Agent and repeat steps <strong>[1]</strong> to <strong>[5]</strong> until the Windows Agent starts successfully.</p>
</div>
<ol start="6">
<li><strong>If the issue persists after multiple attempts, please contact us for assistance.</strong></li>
</ol>
<h4 id="option-2-uninstall-antivirus-software" tabindex="-1"><a class="header-anchor" href="#option-2-uninstall-antivirus-software"><span>Option 2: Uninstall Antivirus Software</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Consider this option when option 1 does not resolve the issue.</p>
</div>
<p>To effectively address this issue, completely uninstall the antivirus software before installing the Windows Agent. If possible, uninstall the current antivirus software on the system and restrict its reinstallation during the host disaster recovery process.</p>
<h4 id="option-3-permanently-close-the-antivirus-software-program" tabindex="-1"><a class="header-anchor" href="#option-3-permanently-close-the-antivirus-software-program"><span>Option 3: Permanently Close the Antivirus Software Program</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Consider this option when option 1 does not resolve the issue.</p>
</div>
<p>Exiting the antivirus software program can also allow the normal installation and use of Windows Agent.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>During the installation and use of Windows Agent, it is crucial to ensure that the antivirus software program is not running. If the antivirus software restarts during the use of Windows Agent (either manually or automatically by the system), it may render Windows Agent unusable, leading to HyperBDR disaster recovery failure.</p>
</div>
<h2 id="option-2-intranet-vpn-access-configure-huawei-cloud-intranet-dns-address-for-the-network-device-where-the-agent-host-reside" tabindex="-1"><a class="header-anchor" href="#option-2-intranet-vpn-access-configure-huawei-cloud-intranet-dns-address-for-the-network-device-where-the-agent-host-reside"><span>(Option 2: Intranet VPN access) Configure Huawei Cloud Intranet DNS Address for the Network Device where the Agent Host Reside</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If your disaster recovery environment is interconnected with the production site's intranet through Huawei Cloud VPN, after creating the VPC Endpoint service, you need to add the resolution address of the Huawei Cloud intranet OBS VPC Endpoint service in the network where the production site's Agent host is located.</p>
</div>
<h3 id="configure-firewall-or-network-devices-such-as-switches" tabindex="-1"><a class="header-anchor" href="#configure-firewall-or-network-devices-such-as-switches"><span>Configure Firewall or Network Devices such as Switches</span></a></h3>
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
<p>Select the primary and secondary servers to which the firewall should forward DNS queries. This example shows the configuration of enabling DNS proxy on Ethernet interfaces 1/2 and 1/3. The active DNS server is set to 10.0.0.246 (This IP is configured as the Huawei Cloud internal DNS Server Addresse).</p>
</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Configure the Huawei Cloud internal DNS address based on the region where you use Huawei Cloud resources.<br>
Huawei Cloud internal DNS service address at： <a href="https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html</a></p>
</div>
<figure><img src="@source/userguide/poc/images/configure-a-huawei-cloud-intranet-dns-address-for-the-network-device-1.png" alt="configure-a-huawei-cloud-intranet-dns-address-for-the-network-device-1.png" tabindex="0" loading="lazy"><figcaption>configure-a-huawei-cloud-intranet-dns-address-for-the-network-device-1.png</figcaption></figure>
</div></template>


