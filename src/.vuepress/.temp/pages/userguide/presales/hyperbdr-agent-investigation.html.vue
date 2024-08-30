<template><div><h1 id="host-quick-investigation" tabindex="-1"><a class="header-anchor" href="#host-quick-investigation"><span>Host Quick Investigation</span></a></h1>
<p>Complete the following steps to collect information about the DR hosts in the source production environment and fill it into a CSV (<a href="https://hyperbdr-system-image-do-not-delete.obs.ap-southeast-3.myhuaweicloud.com/Host%28Windows%20or%20Linux%29%20Quick%20Investigation%20information%20template.xlsx" target="_blank" rel="noopener noreferrer">CSV Template Download</a>). Then, upload the CSV file to us using the Google Form <a href="https://docs.google.com/forms/d/1ikUHJxwYqeYmfBuk2Tl7Fy1I9aYIqvlFsSsg21rqfTs/prefill" target="_blank" rel="noopener noreferrer">Google Form</a>.</p>
<h2 id="investigation-steps" tabindex="-1"><a class="header-anchor" href="#investigation-steps"><span>Investigation Steps</span></a></h2>
<h3 id="windows-server-2016" tabindex="-1"><a class="header-anchor" href="#windows-server-2016"><span>Windows Server 2016</span></a></h3>
<p>This document provides a comprehensive guide on retrieving host information from a Windows environment, covering essential details such as the host name, operating system version, CPU specifications, memory details, and disk information. For the purpose of this section, we will use Windows Server 2016 as a reference. Please note that you can adapt the queries to other operating system versions as needed.</p>
<h4 id="get-host-name-operating-system-version-cpu-memory-etc-control-panel" tabindex="-1"><a class="header-anchor" href="#get-host-name-operating-system-version-cpu-memory-etc-control-panel"><span>Get host name, operating system version, cpu, memory, etc. (Control Panel)</span></a></h4>
<p>Open Control Pannel -&gt; System and Security -&gt; System to retrieve relevant information.</p>
<figure><img src="@source/userguide/presales/images/hyperbdr-agent-investigation-copy-1.png" alt="hyperbdr-agent-investigation-copy-1.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-agent-investigation-copy-1.png</figcaption></figure>
<h4 id="get-host-name-operating-system-version-cpu-memory-etc-command-line" tabindex="-1"><a class="header-anchor" href="#get-host-name-operating-system-version-cpu-memory-etc-command-line"><span>Get host name, operating system version, cpu, memory, etc. (command line)</span></a></h4>
<p>Log in to the windows server, press the shortcut key &quot;Win + R&quot; to open the CMD window, and run the following command:</p>
<div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">systeminfo</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>The output is as follows; you can check the Host Name, OS Name, Processor(s), and Total Physical Memory to obtain the corresponding information.</p>
<blockquote>
<p><strong>Host Name:</strong> NGINX-WEB<br>
<strong>OS Name:</strong> Microsoft Windows Server 2016 Datacenter<br>
<strong>Processor(s):</strong> 1 Processor(s) Installed.<br>
<strong>Total Physical Memory:</strong> 4096MB</p>
</blockquote>
<figure><img src="@source/userguide/presales/images/hyperbdr-agent-investigation-copy-2.png" alt="hyperbdr-agent-investigation-copy-2.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-agent-investigation-copy-2.png</figcaption></figure>
<h4 id="retrieve-disk-information" tabindex="-1"><a class="header-anchor" href="#retrieve-disk-information"><span>Retrieve disk information.</span></a></h4>
<p>Open the &quot;Control Panel&quot;, go to &quot;System and Security&quot;, select &quot;Administrative Tools&quot;, click the &quot;Computer Management&quot;, and click on &quot;Disk Management&quot;.</p>
<ol>
<li><strong>Retrieve the number of disks.</strong></li>
</ol>
<p>As shown in the figure below, Disk 0 represents the first disk. If there are multiple storage devices, they will be sequentially labeled as Disk 1, Disk x, and so on, with each one representing an independent storage unit. Just record the total number.</p>
<figure><img src="@source/userguide/presales/images/hyperbdr-agent-investigation-copy-3.png" alt="hyperbdr-agent-investigation-copy-3.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-agent-investigation-copy-3.png</figcaption></figure>
<ol start="2">
<li><strong>Retrieve the actual usage of each disk.</strong></li>
</ol>
<p>As shown in the figure below, at the upper-right position, the allocation and usage information for all disks are displayed. 'C' represents a partition with corresponding capacity and available space. You can calculate the actual usage of the current 'C' partition by subtracting the available space from the total capacity. A single disk may have multiple partitions, so correspondingly check the lower-right position of Disk 0 in the figure to determine the disk to which each partition belongs. This way, you can separately calculate the actual usage of each disk.</p>
<blockquote>
<p>The Disk 0 has a C partition with a total capacity of 39.51GB, available space of 28.14GB, and the current actual usage space on Disk 0 is 11.37GB.<br>
If there are other disks, the same calculation method applies to determine the actual usage space on each respective disk.</p>
</blockquote>
<figure><img src="@source/userguide/presales/images/hyperbdr-agent-investigation-copy-4.png" alt="hyperbdr-agent-investigation-copy-4.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-agent-investigation-copy-4.png</figcaption></figure>
<h3 id="centos-7-linux" tabindex="-1"><a class="header-anchor" href="#centos-7-linux"><span>CentOS 7 (Linux)</span></a></h3>
<p>This document primarily guides on obtaining relevant host information on a Linux machine, including the host name, operating system version, kernel version, CPU, memory, disk, and other details. The steps for collecting Linux host information in this instance will be based on CentOS 7; for other operating system versions, please refer to their respective documentation.</p>
<h4 id="_1-retrieve-host-name" tabindex="-1"><a class="header-anchor" href="#_1-retrieve-host-name"><span>1. Retrieve host name</span></a></h4>
<p>To retrieve the host name on a Linux system, you can use the <strong>hostname</strong> command. Open a terminal and run the following command:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">hostname</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>The output is as follows, and the displayed content is the hostname:</p>
<figure><img src="@source/userguide/presales/images/hyperbdr-agent-investigation-copy-5.png" alt="hyperbdr-agent-investigation-copy-5.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-agent-investigation-copy-5.png</figcaption></figure>
<h4 id="_2-retrieve-the-operating-system-version" tabindex="-1"><a class="header-anchor" href="#_2-retrieve-the-operating-system-version"><span>2. Retrieve the operating system version</span></a></h4>
<p>Run the following command to view the operating system version:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/redhat-release</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>The output content represents information about the operating system version:</p>
<figure><img src="@source/userguide/presales/images/hyperbdr-agent-investigation-copy-6.png" alt="hyperbdr-agent-investigation-copy-6.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-agent-investigation-copy-6.png</figcaption></figure>
<h4 id="_3-retrieve-the-kernel-version" tabindex="-1"><a class="header-anchor" href="#_3-retrieve-the-kernel-version"><span>3. Retrieve the kernel version</span></a></h4>
<p>Run the following command to view the kernel version:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">uname</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -r</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>The output content represents information about the kernel version:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>4.1.12-61.1.28.el6uek.x86_64</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_4-retrieve-cpu-information" tabindex="-1"><a class="header-anchor" href="#_4-retrieve-cpu-information"><span>4. Retrieve CPU information</span></a></h4>
<p>Run the following command to view CPU information:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">lscpu</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>In the output, locate the value of <strong>&quot;CPU(s)&quot;</strong>, which represents the number of CPU cores:</p>
<figure><img src="@source/userguide/presales/images/hyperbdr-agent-investigation-copy-7.png" alt="hyperbdr-agent-investigation-copy-7.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-agent-investigation-copy-7.png</figcaption></figure>
<h4 id="_5-retrieve-memory-information" tabindex="-1"><a class="header-anchor" href="#_5-retrieve-memory-information"><span>5. Retrieve Memory information</span></a></h4>
<p>Run the following command to view memory information:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">free</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -h</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Look for the &quot;Total&quot; column, which displays the total physical memory:</p>
<figure><img src="@source/userguide/presales/images/hyperbdr-agent-investigation-copy-8.png" alt="hyperbdr-agent-investigation-copy-8.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-agent-investigation-copy-8.png</figcaption></figure>
<h4 id="_6-retrieve-disk-information" tabindex="-1"><a class="header-anchor" href="#_6-retrieve-disk-information"><span>6. Retrieve disk information</span></a></h4>
<ol>
<li><strong>Check the number of disks and the total capacity.</strong></li>
</ol>
<p>Run the following command to obtain the number of disks and their total capacity:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">lsblk</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>The output content is as follows: Look for the content in the NAME column, the disks starting with &quot;sd/vd&quot; indicate the number of disks, and the SIZE column represents the total capacity of the disks:</p>
<figure><img src="@source/userguide/presales/images/hyperbdr-agent-investigation-copy-9.png" alt="hyperbdr-agent-investigation-copy-9.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-agent-investigation-copy-9.png</figcaption></figure>
<ol start="2">
<li><strong>Retrieve actual disk usage</strong></li>
</ol>
<p>Run the following command to obtain the actual disk usage:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">df</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -Th</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Check the used space of the disk based on the output.</p>
<blockquote>
<p>Notes: In the &quot;Mounted on&quot; column, &quot;/&quot; represents the root partition. Check the &quot;Used&quot; column for the actual usage of the root partition. If there are other mounted partitions, you also need to obtain their information.</p>
</blockquote>
<figure><img src="@source/userguide/presales/images/hyperbdr-agent-investigation-copy-10.png" alt="hyperbdr-agent-investigation-copy-10.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-agent-investigation-copy-10.png</figcaption></figure>
<p>Based on the above operation steps, obtain the corresponding system information for subsequent disaster recovery testing. When executing any commands, ensure that you have sufficient permissions. Additionally, after collecting the information, fill in the gathered details into the corresponding disaster recovery host research table.</p>
<p><a href="https://hyperbdr-system-image-do-not-delete.obs.ap-southeast-3.myhuaweicloud.com/Host%28Windows%20or%20Linux%29%20Quick%20Investigation%20information%20template.xlsx" target="_blank" rel="noopener noreferrer">CSV Template Download</a>.<br>
<a href="https://docs.google.com/forms/d/1ikUHJxwYqeYmfBuk2Tl7Fy1I9aYIqvlFsSsg21rqfTs/prefill" target="_blank" rel="noopener noreferrer">Upload Investigation Information</a></p>
</div></template>


