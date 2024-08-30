<template><div><h1 id="源端agent主机快速调研" tabindex="-1"><a class="header-anchor" href="#源端agent主机快速调研"><span>源端Agent主机快速调研</span></a></h1>
<p>完成以下步骤，收集源端生产环境中容灾主机的信息并填写到CSV文件中（<a href="https://hyperbdr-system-image-do-not-delete.obs.ap-southeast-3.myhuaweicloud.com/Host%28Windows%20or%20Linux%29%20Quick%20Investigation%20information%20template.xlsx" target="_blank" rel="noopener noreferrer">CSV 模板文件下载</a>）。然后使用 <a href="https://docs.google.com/forms/d/1ikUHJxwYqeYmfBuk2Tl7Fy1I9aYIqvlFsSsg21rqfTs/prefill" target="_blank" rel="noopener noreferrer">Google 表单</a> CSV文件上传给我们。</p>
<h2 id="调研步骤" tabindex="-1"><a class="header-anchor" href="#调研步骤"><span>调研步骤</span></a></h2>
<h3 id="windows-server-2016" tabindex="-1"><a class="header-anchor" href="#windows-server-2016"><span>Windows Server 2016</span></a></h3>
<p>该文档描述了如何在Windows主机上获取主机信息，包括主机名、操作系统版本、CPU、内存和磁盘信息。在本节中，以Windows Server 2016为参考。你可以自行查询其他操作系统版本。</p>
<h4 id="获取主机名、操作系统版本、cpu、内存等-控制面板" tabindex="-1"><a class="header-anchor" href="#获取主机名、操作系统版本、cpu、内存等-控制面板"><span>获取主机名、操作系统版本、CPU、内存等（控制面板）</span></a></h4>
<p>打开控制面板，选择“系统和安全”，然后选择“系统”以获取相关信息。</p>
<figure><img src="@source/zh/userguide/presales/images/hyperbdr-agent-investigation-copy-1.png" alt="hyperbdr-agent-investigation-copy-1.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-agent-investigation-copy-1.png</figcaption></figure>
<h4 id="获取主机名、操作系统版本、cpu、内存等-命令行" tabindex="-1"><a class="header-anchor" href="#获取主机名、操作系统版本、cpu、内存等-命令行"><span>获取主机名、操作系统版本、CPU、内存等（命令行）</span></a></h4>
<p>登录到Windows服务器，按下快捷键“Win + R”打开CMD窗口，运行以下命令：</p>
<div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">systeminfo</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下所示；你可以检查主机名、操作系统版本、CPU和内存信息。</p>
<blockquote>
<p><strong>主机名：</strong> NGINX-WEB</p>
<p><strong>操作系统名称：</strong> Microsoft Windows Server 2016 Datacenter</p>
<p><strong>处理器：</strong> 安装了 1 个处理器。</p>
<p><strong>物理内存总量：</strong> 4096MB</p>
</blockquote>
<figure><img src="@source/zh/userguide/presales/images/hyperbdr-agent-investigation-copy-2.png" alt="hyperbdr-agent-investigation-copy-2.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-agent-investigation-copy-2.png</figcaption></figure>
<h4 id="获取磁盘信息。" tabindex="-1"><a class="header-anchor" href="#获取磁盘信息。"><span>获取磁盘信息。</span></a></h4>
<p>打开“控制面板”，进入“系统和安全”，选择“管理工具”，点击“计算机管理”，然后点击“磁盘管理”。</p>
<ol>
<li><strong>获取磁盘数量。</strong></li>
</ol>
<p>如下图所示，磁盘 0 代表第一个磁盘。如果有多个存储设备，它们将依次标记为 磁盘 1、磁盘 x 等，每个磁盘代表一个独立的存储单元。只需记录总数即可。</p>
<figure><img src="@source/zh/userguide/presales/images/hyperbdr-agent-investigation-copy-3.png" alt="hyperbdr-agent-investigation-copy-3.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-agent-investigation-copy-3.png</figcaption></figure>
<ol start="2">
<li><strong>获取每个磁盘的实际使用情况。</strong></li>
</ol>
<p>如下图所示，右上角显示了所有磁盘的分配和使用信息。'C' 表示具有相应容量和可用空间的分区。你可以通过从总容量中减去可用空间来计算当前 'C' 分区的实际使用情况。单个磁盘可能有多个分区，因此在图中的 磁盘 0 的右下角相应位置进行检查，以确定每个分区所属的磁盘。这样，你可以分别计算每个磁盘的实际使用情况。</p>
<blockquote>
<p>磁盘 0 上有一个 C 分区，总容量为 39.51GB，可用空间为 28.14GB，磁盘 0 上当前的实际使用空间为 11.37GB。
如果有其他磁盘，则同样的计算方法适用于确定每个磁盘上的实际使用空间。</p>
</blockquote>
<figure><img src="@source/zh/userguide/presales/images/hyperbdr-agent-investigation-copy-4.png" alt="hyperbdr-agent-investigation-copy-4.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-agent-investigation-copy-4.png</figcaption></figure>
<h3 id="centos-7-linux" tabindex="-1"><a class="header-anchor" href="#centos-7-linux"><span>CentOS 7（Linux）</span></a></h3>
<p>本文主要介绍如何在Linux机器上获取相关主机信息，包括主机名、操作系统版本、内核版本、CPU、内存、磁盘等详细信息。本示例中收集Linux主机信息的步骤基于CentOS 7；对于其他操作系统版本，请参阅其相应的文档。</p>
<h4 id="_1-获取主机名。" tabindex="-1"><a class="header-anchor" href="#_1-获取主机名。"><span>1. 获取主机名。</span></a></h4>
<p>要在Linux系统上获取主机名，可以使用 <strong>hostname</strong> 命令。打开终端并运行以下命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">hostname</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下所示，其中显示了主机名。</p>
<figure><img src="@source/zh/userguide/presales/images/hyperbdr-agent-investigation-copy-5.png" alt="hyperbdr-agent-investigation-copy-5.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-agent-investigation-copy-5.png</figcaption></figure>
<h4 id="_2-retrieve-the-operating-system-version" tabindex="-1"><a class="header-anchor" href="#_2-retrieve-the-operating-system-version"><span>2. Retrieve the operating system version</span></a></h4>
<p>运行以下命令来查看操作系统的版本。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/redhat-release</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下所示，其中显示了操作系统的版本。</p>
<figure><img src="@source/zh/userguide/presales/images/hyperbdr-agent-investigation-copy-6.png" alt="hyperbdr-agent-investigation-copy-6.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-agent-investigation-copy-6.png</figcaption></figure>
<h4 id="_3-retrieve-the-kernel-version" tabindex="-1"><a class="header-anchor" href="#_3-retrieve-the-kernel-version"><span>3. Retrieve the kernel version</span></a></h4>
<p>运行以下命令来查看内核版本。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">uname</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -r</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>输出结果如下所示，其中显示了内核版本。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>4.1.12-61.1.28.el6uek.x86_64</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_4-获取cpu信息" tabindex="-1"><a class="header-anchor" href="#_4-获取cpu信息"><span>4. 获取CPU信息</span></a></h4>
<p>运行以下命令查看CPU信息。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">lscpu</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>在输出中，找到“CPU(s)”值，它表示CPU核心的数量。</p>
<figure><img src="@source/zh/userguide/presales/images/hyperbdr-agent-investigation-copy-7.png" alt="hyperbdr-agent-investigation-copy-7.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-agent-investigation-copy-7.png</figcaption></figure>
<h4 id="_5-检索内存信息" tabindex="-1"><a class="header-anchor" href="#_5-检索内存信息"><span>5. 检索内存信息</span></a></h4>
<p>运行以下命令查看内存信息。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">free</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -h</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>查找&quot;Total&quot;列，显示总物理内存。</p>
<figure><img src="@source/zh/userguide/presales/images/hyperbdr-agent-investigation-copy-8.png" alt="hyperbdr-agent-investigation-copy-8.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-agent-investigation-copy-8.png</figcaption></figure>
<h4 id="_6-检索磁盘信息" tabindex="-1"><a class="header-anchor" href="#_6-检索磁盘信息"><span>6. 检索磁盘信息</span></a></h4>
<ol>
<li><strong>检查磁盘数量和总容量。</strong></li>
</ol>
<p>运行以下命令获取磁盘数量及其总容量。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">lsblk</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出内容如下：查找NAME列中的内容，“sd/vd”开头的磁盘表示磁盘数量，SIZE列表示磁盘的总容量。</p>
<figure><img src="@source/zh/userguide/presales/images/hyperbdr-agent-investigation-copy-9.png" alt="hyperbdr-agent-investigation-copy-9.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-agent-investigation-copy-9.png</figcaption></figure>
<ol start="2">
<li><strong>获取磁盘实际使用量</strong></li>
</ol>
<p>运行以下命令获取实际磁盘使用情况。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">df</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -Th</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>根据输出检查磁盘的使用空间。</p>
<blockquote>
<p>注意：在“Mounted on”列中，“/”表示根分区。检查“Used”列以获取根分区的实际使用情况。如果有其他挂载的分区，您还需要获取它们的信息。</p>
</blockquote>
<figure><img src="@source/zh/userguide/presales/images/hyperbdr-agent-investigation-copy-10.png" alt="hyperbdr-agent-investigation-copy-10.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-agent-investigation-copy-10.png</figcaption></figure>
<p>根据以上操作步骤，获取相应的系统信息，用于后续的灾难恢复测试。在执行任何命令时，请确保您具有足够的权限。此外，在收集信息后，将收集到的详细信息填写到相应的灾难恢复主机研究表中。</p>
<p><a href="https://hyperbdr-system-image-do-not-delete.obs.ap-southeast-3.myhuaweicloud.com/Host%28Windows%20or%20Linux%29%20Quick%20Investigation%20information%20template.xlsx" target="_blank" rel="noopener noreferrer">CSV模板文件下载</a>.<br>
<a href="https://docs.google.com/forms/d/1ikUHJxwYqeYmfBuk2Tl7Fy1I9aYIqvlFsSsg21rqfTs/prefill" target="_blank" rel="noopener noreferrer">上传调研信息</a></p>
</div></template>


