<template><div><h1 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#how-do-i-connect-to-ssh-on-windows">How do I connect to SSH on Windows?</router-link></li><li><router-link to="#connecting-to-linux-with-putty-on-windows">Connecting to Linux with PuTTY on Windows</router-link></li><li><router-link to="#how-hyperbdr-ensure-the-integrity-of-windows-data">How HyperBDR ensure the integrity of Windows Data?</router-link></li><li><router-link to="#configuration-of-antivirus-software-on-windows-agent-source-host">Configuration of Antivirus Software on Windows Agent Source Host</router-link><ul><li><router-link to="#kaspersky">Kaspersky</router-link></li><li><router-link to="#mcafee">McAfee</router-link></li></ul></li><li><router-link to="#how-to-create-a-failback-gateway-hyperdoor-on-a-physical-machine">How to Create a Failback Gateway（HyperDoor） on a Physical Machine</router-link><ul><li><router-link to="#_1-log-in-to-the-ipmi-console">1. Log in to the IPMI console</router-link></li><li><router-link to="#_2-locate-the-virtual-media-or-a-similar-option">2. Locate the &#39;Virtual Media&#39; or a similar option</router-link></li><li><router-link to="#_3-choose-to-mount-the-image">3. Choose to mount the image</router-link></li><li><router-link to="#_4-upload-the-image-file">4. Upload the image file</router-link></li><li><router-link to="#_5-confirm-the-mounting">5. Confirm the mounting</router-link></li><li><router-link to="#_6-restart-the-server">6. Restart the server</router-link></li><li><router-link to="#_7-enter-the-bios-boot-menu-of-the-server">7. Enter the BIOS/Boot Menu of the server</router-link></li><li><router-link to="#_8-choose-virtual-media-as-the-boot-device">8. Choose virtual media as the boot device</router-link></li><li><router-link to="#_9-save-settings-and-exit">9. Save settings and exit</router-link></li><li><router-link to="#_10-failback-gateway-startup">10. Failback Gateway startup</router-link></li></ul></li><li><router-link to="#instructions-for-migration-or-dr-on-a-physical-machine">Instructions for Migration or DR on a physical machine</router-link></li></ul></nav>
<h2 id="how-do-i-connect-to-ssh-on-windows" tabindex="-1"><a class="header-anchor" href="#how-do-i-connect-to-ssh-on-windows"><span>How do I connect to SSH on Windows?</span></a></h2>
<p><strong>Q: How do I connect to SSH on Windows?</strong></p>
<p><strong>A:</strong> Please note that starting from Windows 10, Microsoft has integrated an OpenSSH client, allowing you to use the ssh command directly in the Command Prompt or PowerShell. Follow these steps:</p>
<ol>
<li>
<p><strong>Open Command Prompt or PowerShell:</strong></p>
<ul>
<li>Press <code v-pre>Win + X</code> and select &quot;Windows PowerShell&quot; or &quot;Command Prompt.&quot;</li>
</ul>
</li>
<li>
<p><strong>Run the SSH command:</strong></p>
<ul>
<li>
<p>In the opened window, type the following command to connect to a remote server:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> username@remote_host</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>替换 <code v-pre>username</code> with your remote server username and <code v-pre>remote_host</code> with the server's address.</p>
</li>
<li>
<p>If your remote server uses a non-standard port (not the default 22), use the <code v-pre>-p</code> parameter to specify the port:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> port_number</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> username@remote_host</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Replace <code v-pre>port_number</code> with your server's port.</p>
</li>
<li>
<p>If you need to use a private key for authentication, use the <code v-pre>-i</code> parameter to specify the path to the private key:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> path/to/private/key</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> username@remote_host</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
</li>
</ol>
<p><strong>Examples:</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> john@example.com</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2222</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> jane@192.168.1.100</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> C:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ath</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">o</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">rivate</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\k</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ey.pem</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> user@remote-server</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>These commands will establish an SSH session, allowing you to execute commands or transfer files on the remote server.</p>
<p><strong>Note:</strong> Ensure your network connection is stable, and the remote server allows SSH connections. If you encounter issues, check firewall settings, SSH server configuration, or network connectivity.</p>
<h2 id="connecting-to-linux-with-putty-on-windows" tabindex="-1"><a class="header-anchor" href="#connecting-to-linux-with-putty-on-windows"><span>Connecting to Linux with PuTTY on Windows</span></a></h2>
<p><strong>Q: How can I use PuTTY to connect to a Linux server from Windows?</strong></p>
<p><strong>A:</strong> PuTTY is a popular SSH client for Windows. Follow these steps to connect to a Linux server:</p>
<ol>
<li>
<p><strong>Download and Install PuTTY:</strong></p>
<ul>
<li>Download PuTTY from the official website: <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html" target="_blank" rel="noopener noreferrer">PuTTY Download</a>.</li>
<li>Install PuTTY by following the installation instructions.</li>
</ul>
</li>
<li>
<p><strong>Open PuTTY:</strong></p>
<ul>
<li>Launch PuTTY from the Start menu or desktop shortcut.</li>
</ul>
</li>
<li>
<p><strong>Configure the Connection:</strong></p>
<ul>
<li>In the PuTTY configuration window:
<ul>
<li>Enter the IP address or hostname of your Linux server in the &quot;Host Name (or IP address)&quot; field.</li>
<li>Ensure that the &quot;Port&quot; is set to 22 (the default for SSH).</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Choose Connection Type:</strong></p>
<ul>
<li>On the left panel, navigate to &quot;Connection&quot; &gt; &quot;SSH.&quot;</li>
<li>Make sure &quot;SSH&quot; is selected.</li>
</ul>
</li>
<li>
<p><strong>Optional: Save Session:</strong></p>
<ul>
<li>To save your settings for future use, enter a name in the &quot;Saved Sessions&quot; field and click &quot;Save.&quot;</li>
</ul>
</li>
<li>
<p><strong>Initiate Connection:</strong></p>
<ul>
<li>Click the &quot;Open&quot; button to start the connection.</li>
</ul>
</li>
<li>
<p><strong>Enter Login Credentials:</strong></p>
<ul>
<li>Once the terminal window opens, you will be prompted to enter your Linux username and password.</li>
</ul>
</li>
<li>
<p><strong>Success:</strong></p>
<ul>
<li>If the credentials are correct, you will be connected to your Linux server via SSH.</li>
</ul>
</li>
</ol>
<p><strong>Note:</strong> Ensure that SSH is enabled on your Linux server and that you have the correct login credentials.</p>
<p><strong>Troubleshooting:</strong></p>
<ul>
<li>If you encounter issues, double-check your server's IP address, ensure SSH is running, and confirm your login details.</li>
</ul>
<h2 id="how-hyperbdr-ensure-the-integrity-of-windows-data" tabindex="-1"><a class="header-anchor" href="#how-hyperbdr-ensure-the-integrity-of-windows-data"><span>How HyperBDR ensure the integrity of Windows Data?</span></a></h2>
<p><strong>Q1: How does HyperBDR ensure the integrity of Windows data?</strong></p>
<p>A1: HyperBDR primarily utilizes Windows VSS (Volume Shadow Copy Service) technology to ensure data integrity. In VMware without an agent, it achieves this by invoking VSS through VMware Tools. In Windows Agent mode, it directly calls the VSS interface.</p>
<p><strong>Q2: What is Windows VSS technology?</strong></p>
<p>A2: VSS, or Volume Shadow Copy Service, is a Windows service that enables the creation of point-in-time snapshots of volumes, including those containing databases. These snapshots, or shadow copies, provide a consistent view of the data, even if changes are being made to the database during the snapshot creation process.</p>
<p>VSS ensures database integrity through a process known as &quot;shadow copy creation.&quot; When a VSS snapshot is triggered, the service coordinates with various components, including VSS writers associated with applications such as databases. These writers temporarily freeze write I/O operations to ensure that the data on the disk is in a consistent state at the time of the snapshot.</p>
<p>VSS is compatible with various Database Management Systems (DBMS), including SQL Server. Most major DBMS vendors provide VSS writers that integrate with the VSS framework, allowing for the creation of consistent and reliable database snapshots.</p>
<p><strong>Q3: In VMware without an agent, how does HyperBDR call VSS?</strong></p>
<p>A3: In VMware without an agent, HyperBDR collaborates with VMware Tools to invoke VSS, freezing the file system and application states to ensure data consistency during snapshot creation.</p>
<p><strong>Q4: In Windows Agent mode, how does HyperBDR directly call the VSS interface?</strong></p>
<p>A4: In Windows Agent mode, HyperBDR directly calls the VSS interface provided by the Windows operating system to freeze data and create snapshots, ensuring the backup data is in a transactionally consistent state.</p>
<p><strong>Q5: Does HyperBDR's data integrity assurance apply to specific applications like databases?</strong></p>
<p>A5: Yes, HyperBDR's VSS integration is application-aware and applicable to specific applications, including databases. VSS ensures that application data is in a consistent state during snapshot creation.</p>
<h2 id="configuration-of-antivirus-software-on-windows-agent-source-host" tabindex="-1"><a class="header-anchor" href="#configuration-of-antivirus-software-on-windows-agent-source-host"><span>Configuration of Antivirus Software on Windows Agent Source Host</span></a></h2>
<h3 id="kaspersky" tabindex="-1"><a class="header-anchor" href="#kaspersky"><span>Kaspersky</span></a></h3>
<h4 id="kaspersky-pause-protection" tabindex="-1"><a class="header-anchor" href="#kaspersky-pause-protection"><span>Kaspersky Pause Protection</span></a></h4>
<p>Set the running Kaspersky to Pause Protection status.</p>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-1.png" alt="configuration-of-antivirus-software-1.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-1.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-2.png" alt="configuration-of-antivirus-software-2.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-2.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-3.png" alt="configuration-of-antivirus-software-3.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-3.png</figcaption></figure>
<h4 id="create-a-new-subgroup-named-windows-agent-under-application" tabindex="-1"><a class="header-anchor" href="#create-a-new-subgroup-named-windows-agent-under-application"><span>Create a new subgroup named &quot;windows agent&quot; under [Application]</span></a></h4>
<p>Select [<strong>Security</strong>] - [<strong>Intrusion Prevention</strong>] - [<strong>Manage applications</strong>], and create a new subgroup named &quot;<strong>windows agent</strong>&quot; under [<strong>Application</strong>].</p>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-4.png" alt="configuration-of-antivirus-software-4.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-4.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-5.png" alt="configuration-of-antivirus-software-5.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-5.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-6.png" alt="configuration-of-antivirus-software-6.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-6.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-7.png" alt="configuration-of-antivirus-software-7.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-7.png</figcaption></figure>
<h4 id="configure-intrusion-prevention" tabindex="-1"><a class="header-anchor" href="#configure-intrusion-prevention"><span>Configure [<strong>Intrusion Prevention</strong>]</span></a></h4>
<p>Locate the [<strong>Trust group for applications started before startup of Kaspersky Small Office Security</strong>] item and set it to the recently created trust group &quot;<strong>windows agent</strong>&quot;, save the configuration.</p>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-8.png" alt="configuration-of-antivirus-software-8.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-8.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-9.png" alt="configuration-of-antivirus-software-9.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-9.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-10.png" alt="configuration-of-antivirus-software-10.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-10.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-11.png" alt="configuration-of-antivirus-software-11.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-11.png</figcaption></figure>
<h4 id="exit-kaspersky" tabindex="-1"><a class="header-anchor" href="#exit-kaspersky"><span>Exit Kaspersky</span></a></h4>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-12.png" alt="configuration-of-antivirus-software-12.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-12.png</figcaption></figure>
<h4 id="install-windows-agent" tabindex="-1"><a class="header-anchor" href="#install-windows-agent"><span>Install Windows Agent</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>After installing Windows Agent, do not start Windows Agent temporarily.</p>
</div>
<p>Reference Document: <a href="https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#unzip-the-installation-package-and-proceed-with-the-installation" target="_blank" rel="noopener noreferrer">https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#unzip-the-installation-package-and-proceed-with-the-installation</a></p>
<h4 id="run-the-kaspersky" tabindex="-1"><a class="header-anchor" href="#run-the-kaspersky"><span>Run the Kaspersky</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>When Kaspersky is restarted, it remains in the paused protection state.</p>
</div>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-13.png" alt="configuration-of-antivirus-software-13.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-13.png</figcaption></figure>
<h4 id="add-the-application-of-windows-agent-to-the-trusted-group" tabindex="-1"><a class="header-anchor" href="#add-the-application-of-windows-agent-to-the-trusted-group"><span>Add the application of Windows Agent to the trusted group.</span></a></h4>
<p>Select [<strong>Security</strong>] - [<strong>Intrusion Prevention</strong>] - [<strong>Manage applications</strong>], Right-click on &quot;<strong>windows agent</strong>&quot;, click on [<strong>Add Application to Group</strong>], and add all exe, bat, and sys files under the installation directory of Windows Agent and its subdirectory &quot;<strong>hyper_exporter</strong>&quot;.</p>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-14.png" alt="configuration-of-antivirus-software-14.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-14.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-15.png" alt="configuration-of-antivirus-software-15.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-15.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-16.png" alt="configuration-of-antivirus-software-16.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-16.png</figcaption></figure>
<h4 id="modify-security-settings-1" tabindex="-1"><a class="header-anchor" href="#modify-security-settings-1"><span>Modify Security settings (1)</span></a></h4>
<p>In [<strong>Settings</strong>] - [<strong>Security Settings</strong>] - [<strong>File Anti-Virus</strong>], locate the [<strong>Actions on threat detection</strong>] option, check [<strong>Block</strong>], and save the settings.</p>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-17.png" alt="configuration-of-antivirus-software-17.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-17.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-18.png" alt="configuration-of-antivirus-software-18.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-18.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-19.png" alt="configuration-of-antivirus-software-19.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-19.png</figcaption></figure>
<h4 id="modify-security-settings-2" tabindex="-1"><a class="header-anchor" href="#modify-security-settings-2"><span>Modify Security settings (2)</span></a></h4>
<p>In [<strong>Settings</strong>] - [<strong>Security Settings</strong>] - [<strong>Exclusions and actions on object detected</strong>], click [<strong>Manage Exclusions</strong>] - [<strong>+Add</strong>] add the installation directory of Windows Agent as an exclusion, check [<strong>Protect components</strong>] - [<strong>All components</strong>], Click [<strong>Add</strong>] after confirmation.</p>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-20.png" alt="configuration-of-antivirus-software-20.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-20.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-21.png" alt="configuration-of-antivirus-software-21.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-21.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-22.png" alt="configuration-of-antivirus-software-22.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-22.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-23.png" alt="configuration-of-antivirus-software-23.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-23.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-24.png" alt="configuration-of-antivirus-software-24.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-24.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-25.png" alt="configuration-of-antivirus-software-25.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-25.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-26.png" alt="configuration-of-antivirus-software-26.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-26.png</figcaption></figure>
<p>Confirm that the exclusion status is set to [<strong>Active</strong>].</p>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-27.png" alt="configuration-of-antivirus-software-27.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-27.png</figcaption></figure>
<p>Save the settings</p>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-28.png" alt="configuration-of-antivirus-software-28.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-28.png</figcaption></figure>
<h4 id="run-windows-agent" tabindex="-1"><a class="header-anchor" href="#run-windows-agent"><span>Run Windows Agent</span></a></h4>
<p>Click on the Windows Agent shortcut on the desktop, start the service, and check if the registration is successful after 1-2 minutes. Verify if the service status is normal.</p>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-29.png" alt="configuration-of-antivirus-software-29.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-29.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-30.png" alt="configuration-of-antivirus-software-30.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-30.png</figcaption></figure>
<h4 id="restore-kaspersky-protection-status" tabindex="-1"><a class="header-anchor" href="#restore-kaspersky-protection-status"><span>Restore Kaspersky protection status</span></a></h4>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-31.png" alt="configuration-of-antivirus-software-31.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-31.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-32.png" alt="configuration-of-antivirus-software-32.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-32.png</figcaption></figure>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>If any application is added to [Low Restricted] during the operation, it needs to be manually added back to the trusted group &quot;Windows Agent.&quot;</p>
</div>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-33.png" alt="configuration-of-antivirus-software-33.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-33.png</figcaption></figure>
<h3 id="mcafee" tabindex="-1"><a class="header-anchor" href="#mcafee"><span>McAfee</span></a></h3>
<h4 id="turn-off-real-time-scanning-in-mcafee" tabindex="-1"><a class="header-anchor" href="#turn-off-real-time-scanning-in-mcafee"><span>Turn off Real-Time Scanning in McAfee</span></a></h4>
<p>Access Real-time scan from the left-side menu and click on [<strong>Turn off</strong>]</p>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-34.png" alt="configuration-of-antivirus-software-34.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-34.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-35.png" alt="configuration-of-antivirus-software-35.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-35.png</figcaption></figure>
<p>Check the option &quot;<strong>Never</strong>&quot; under [<strong>When do you want to resume Real-Time Scanning?</strong>] and click the [<strong>Turn off</strong>].</p>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-36.png" alt="configuration-of-antivirus-software-36.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-36.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-37.png" alt="configuration-of-antivirus-software-37.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-37.png</figcaption></figure>
<h4 id="install-windows-agent-and-run-windows-agent" tabindex="-1"><a class="header-anchor" href="#install-windows-agent-and-run-windows-agent"><span>Install Windows Agent and run Windows Agent</span></a></h4>
<p>Reference Document：<a href="https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#unzip-the-installation-package-and-proceed-with-the-installation" target="_blank" rel="noopener noreferrer">https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#unzip-the-installation-package-and-proceed-with-the-installation</a></p>
<h4 id="turn-on-real-time-scanning-in-mcafee-and-add-excluded-files" tabindex="-1"><a class="header-anchor" href="#turn-on-real-time-scanning-in-mcafee-and-add-excluded-files"><span>Turn on Real-Time Scanning in McAfee and add Excluded files</span></a></h4>
<p>click [<strong>Turn on</strong>] Real-Time Scanning</p>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-38.png" alt="configuration-of-antivirus-software-38.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-38.png</figcaption></figure>
<p>click [<strong>Add file</strong>] add all exe, bat, and sys files under the installation directory of Windows Agent and its subdirectory &quot;<strong>yper_exporter</strong>&quot;.</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>The default installation path for Windows Agent: C:\Program Files (x86)\DiskSync-Agent</p>
</div>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-39.png" alt="configuration-of-antivirus-software-39.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-39.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-40.png" alt="configuration-of-antivirus-software-40.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-40.png</figcaption></figure>
<h4 id="check-quarantined-items" tabindex="-1"><a class="header-anchor" href="#check-quarantined-items"><span>Check Quarantined items</span></a></h4>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>If there is an abnormal termination of the Windows Agent service, enter McAfee to check the Quarantined items. Select the files related to Windows Agent and proceed with the restoration.</p>
</div>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-41.png" alt="configuration-of-antivirus-software-41.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-41.png</figcaption></figure>
<figure><img src="@source/zh/userguide/faq/images/configuration-of-antivirus-software-42.png" alt="configuration-of-antivirus-software-42.png" tabindex="0" loading="lazy"><figcaption>configuration-of-antivirus-software-42.png</figcaption></figure>
<h2 id="how-to-create-a-failback-gateway-hyperdoor-on-a-physical-machine" tabindex="-1"><a class="header-anchor" href="#how-to-create-a-failback-gateway-hyperdoor-on-a-physical-machine"><span>How to Create a Failback Gateway（HyperDoor） on a Physical Machine</span></a></h2>
<p>Physical servers can utilize the IPMI console to create a fallback gateway by loading the HyperDoor image.</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>The HyperDoor image has already been downloaded to the local machine by default.</p>
</div>
<h3 id="_1-log-in-to-the-ipmi-console" tabindex="-1"><a class="header-anchor" href="#_1-log-in-to-the-ipmi-console"><span>1. Log in to the IPMI console</span></a></h3>
<p>Open a web browser locally and enter the IPMI address of the physical machine (usually accessed through a browser, for example: https://ipmi_address).
Log in to the IPMI interface using the username and password assigned to the server.</p>
<h3 id="_2-locate-the-virtual-media-or-a-similar-option" tabindex="-1"><a class="header-anchor" href="#_2-locate-the-virtual-media-or-a-similar-option"><span>2. Locate the 'Virtual Media' or a similar option</span></a></h3>
<p>Navigate to the menu on the IPMI console, and find an option similar to 'Virtual Media' or other related options.</p>
<h3 id="_3-choose-to-mount-the-image" tabindex="-1"><a class="header-anchor" href="#_3-choose-to-mount-the-image"><span>3. Choose to mount the image</span></a></h3>
<p>In the Virtual Media menu, there is typically an option for &quot;Mount ISO&quot; or a similar choice. Select this option.</p>
<h3 id="_4-upload-the-image-file" tabindex="-1"><a class="header-anchor" href="#_4-upload-the-image-file"><span>4. Upload the image file</span></a></h3>
<p>Provide the local path of the HyperDoor image file or upload the HyperDoor image file.</p>
<h3 id="_5-confirm-the-mounting" tabindex="-1"><a class="header-anchor" href="#_5-confirm-the-mounting"><span>5. Confirm the mounting</span></a></h3>
<p>Confirm the mounting of the image. The system will use the provided image file to simulate an optical drive, allowing the server to boot from it.</p>
<h3 id="_6-restart-the-server" tabindex="-1"><a class="header-anchor" href="#_6-restart-the-server"><span>6. Restart the server</span></a></h3>
<p>In the IPMI console, find &quot;Power Control&quot; or a similar option, and select restart for the server.</p>
<h3 id="_7-enter-the-bios-boot-menu-of-the-server" tabindex="-1"><a class="header-anchor" href="#_7-enter-the-bios-boot-menu-of-the-server"><span>7. Enter the BIOS/Boot Menu of the server</span></a></h3>
<p>When the server restarts, follow the on-screen prompts to enter BIOS settings or the boot menu. This is typically done by pressing a specific key (such as F2, F10, Del, etc.).</p>
<h3 id="_8-choose-virtual-media-as-the-boot-device" tabindex="-1"><a class="header-anchor" href="#_8-choose-virtual-media-as-the-boot-device"><span>8. Choose virtual media as the boot device</span></a></h3>
<p>In the BIOS or boot menu, select virtual media as the boot device, ensuring that the system will boot from the virtual optical drive.</p>
<h3 id="_9-save-settings-and-exit" tabindex="-1"><a class="header-anchor" href="#_9-save-settings-and-exit"><span>9. Save settings and exit</span></a></h3>
<p>In the BIOS settings, save the changes and exit, allowing the system to boot from the virtual media. The system will load the HyperDoor image file.</p>
<h3 id="_10-failback-gateway-startup" tabindex="-1"><a class="header-anchor" href="#_10-failback-gateway-startup"><span>10. Failback Gateway startup</span></a></h3>
<p>After the system restarts again, it will successfully load the HyperDoor image, becoming a HyperDoor failback gateway.</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Please note that different servers and IPMI implementations may have slight variations, so be sure to refer to the documentation for specific operational guidance.</p>
</div>
<h2 id="instructions-for-migration-or-dr-on-a-physical-machine" tabindex="-1"><a class="header-anchor" href="#instructions-for-migration-or-dr-on-a-physical-machine"><span>Instructions for Migration or DR on a physical machine</span></a></h2>
<p>Due to the diverse models of underlying hardware in physical machines and the potential need for different drivers to accommodate various hardware models, it is essential to proactively query the hardware information of the physical machine, including RAID cards, disks, network cards, etc., when migrating or reverting.</p>
<p>Currently, manual intervention is required for the adaptation and repair of physical machine drivers. This involves the installation of hardware drivers to ensure compatibility and functionality.</p>
</div></template>


