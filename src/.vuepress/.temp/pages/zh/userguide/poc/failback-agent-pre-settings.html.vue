<template><div><h1 id="agent主机源端预设置" tabindex="-1"><a class="header-anchor" href="#agent主机源端预设置"><span>Agent主机源端预设置</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#内网vpn访问-测试回切主机与hyperbdr之间的网络连接">（内网VPN访问）测试回切主机与HyperBDR之间的网络连接</router-link><ul><li><router-link to="#验证测试流程">验证测试流程</router-link></li><li><router-link to="#windows回切主机">Windows回切主机</router-link></li></ul></li><li><router-link to="#在回切主机上安装agent并注册到hyperbdr">在回切主机上安装Agent并注册到HyperBDR</router-link><ul><li><router-link to="#linux-回切主机">Linux 回切主机</router-link></li><li><router-link to="#windows-回切主机">Windows 回切主机</router-link></li></ul></li><li><router-link to="#内网vpn访问-测试回切主机与华为云obs之间的网络连接">（内网VPN访问）测试回切主机与华为云OBS之间的网络连接</router-link><ul><li><router-link to="#linux回切主机-1">Linux回切主机</router-link></li><li><router-link to="#windows回切主机-1">Windows回切主机</router-link></li></ul></li><li><router-link to="#内网vpn访问-测试回切主机与回切网关之间的网络连接">（内网VPN访问）测试回切主机与回切网关之间的网络连接</router-link><ul><li><router-link to="#linux回切主机-2">Linux回切主机</router-link></li><li><router-link to="#windows回切主机-2">Windows回切主机</router-link></li></ul></li></ul></nav>
<h2 id="内网vpn访问-测试回切主机与hyperbdr之间的网络连接" tabindex="-1"><a class="header-anchor" href="#内网vpn访问-测试回切主机与hyperbdr之间的网络连接"><span>（内网VPN访问）测试回切主机与HyperBDR之间的网络连接</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>在华为云端配置了VPN服务，并且华为云端通过VPN连接到生产站点。您可以执行以下测试。</p>
</div>
<h3 id="验证测试流程" tabindex="-1"><a class="header-anchor" href="#验证测试流程"><span>验证测试流程</span></a></h3>
<p>登录到回切主机。</p>
<h4 id="linux回切主机" tabindex="-1"><a class="header-anchor" href="#linux回切主机"><span>Linux回切主机</span></a></h4>
<p>确保回切主机上运行ssh命令。</p>
<h4 id="hyperbdr通过端口10443访问" tabindex="-1"><a class="header-anchor" href="#hyperbdr通过端口10443访问"><span>HyperBDR通过端口10443访问</span></a></h4>
<p>测试命令：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -v -p 10443 &#x3C;HyperBDR Intranet IP></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>测试结果：如果以下输出结果包含信息[debug1: Connection established.]，则网络连接正常。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Intranet IP\> [&#x3C;HyperBDR Intranet IP\>] port 10443.</span></span>
<span class="line"><span>debug1: Connection established.</span></span>
<span class="line"><span>#### The HyperBDR is accessed on port 30080</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试命令：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -v -p 30080 &#x3C;HyperBDR Intranet IP></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>测试结果：如果以下输出结果包含信息[debug1: Connection established.]，则网络连接正常。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Intranet IP> [&#x3C;HyperBDR Intranet IP>] port 30080.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hyperbdr通过端口10081访问" tabindex="-1"><a class="header-anchor" href="#hyperbdr通过端口10081访问"><span>HyperBDR通过端口10081访问</span></a></h4>
<p>测试命令：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -v -p 10081 &#x3C;HyperBDR Intranet IP></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>测试结果：如果以下输出结果包含信息[debug1: Connection established.]，则网络连接正常。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Intranet IP> [&#x3C;HyperBDR Intranet IP>] port 10081.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="windows回切主机" tabindex="-1"><a class="header-anchor" href="#windows回切主机"><span>Windows回切主机</span></a></h3>
<p>确保回切主机上存在ssh命令，并打开CMD命令行。</p>
<h4 id="hyperbdr通过端口10443访问-1" tabindex="-1"><a class="header-anchor" href="#hyperbdr通过端口10443访问-1"><span>HyperBDR通过端口10443访问</span></a></h4>
<p>测试命令：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -v -p 10443 &#x3C;HyperBDR Intranet IP></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>测试结果：如果以下输出结果包含信息[debug1: Connection established.]，则网络连接正常。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Intranet IP> [&#x3C;HyperBDR Intranet IP>] port 10443.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hyperbdr通过端口30080访问" tabindex="-1"><a class="header-anchor" href="#hyperbdr通过端口30080访问"><span>HyperBDR通过端口30080访问</span></a></h4>
<p>测试命令：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -v -p 30080 &#x3C;HyperBDR Intranet IP></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>测试结果：如果以下输出结果包含信息[debug1: Connection established.]，则网络连接正常。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Intranet IP> [&#x3C;HyperBDR Intranet IP>] port 30080.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hyperbdr通过端口10081访问-1" tabindex="-1"><a class="header-anchor" href="#hyperbdr通过端口10081访问-1"><span>HyperBDR通过端口10081访问</span></a></h4>
<p>测试命令：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -v -p 10081 &#x3C;HyperBDR Intranet IP></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>测试结果：如果以下输出结果包含信息[debug1: Connection established.]，则网络连接正常。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Intranet IP> [&#x3C;HyperBDR Intranet IP>] port 10081.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在回切主机上安装agent并注册到hyperbdr" tabindex="-1"><a class="header-anchor" href="#在回切主机上安装agent并注册到hyperbdr"><span>在回切主机上安装Agent并注册到HyperBDR</span></a></h2>
<h3 id="linux-回切主机" tabindex="-1"><a class="header-anchor" href="#linux-回切主机"><span>Linux 回切主机</span></a></h3>
<h4 id="登录到hyperbdr控制台" tabindex="-1"><a class="header-anchor" href="#登录到hyperbdr控制台"><span>登录到HyperBDR控制台</span></a></h4>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-1.png" alt="complete-doc-for-block-storage-failback-1.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-1.png</figcaption></figure>
<h4 id="复制agent安装命令" tabindex="-1"><a class="header-anchor" href="#复制agent安装命令"><span>复制Agent安装命令</span></a></h4>
<p>点击上方的 <strong>'资源容灾'</strong> 标签页，然后在左侧选择 <strong>'主机回切'</strong> 。点击 <strong>'添加主机'</strong> ，选择Agent模式。</p>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-2.png" alt="complete-doc-for-block-storage-failback-2.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-2.png</figcaption></figure>
<p>在 <strong>'Linux'</strong> 部分，点击 <strong>'点击复制命令'</strong> 。</p>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-3.png" alt="complete-doc-for-block-storage-failback-3.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-3.png</figcaption></figure>
<h4 id="在回切主机上运行安装命令" tabindex="-1"><a class="header-anchor" href="#在回切主机上运行安装命令"><span>在回切主机上运行安装命令</span></a></h4>
<p>登录到回切主机，然后复制并运行Agent安装命令。等待安装完成。</p>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-4.png" alt="complete-doc-for-block-storage-failback-4.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-4.png</figcaption></figure>
<h3 id="windows-回切主机" tabindex="-1"><a class="header-anchor" href="#windows-回切主机"><span>Windows 回切主机</span></a></h3>
<h4 id="登录到hyperbdr控制台-1" tabindex="-1"><a class="header-anchor" href="#登录到hyperbdr控制台-1"><span>登录到HyperBDR控制台</span></a></h4>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-5.png" alt="complete-doc-for-block-storage-failback-5.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-5.png</figcaption></figure>
<h4 id="将agent安装包下载到回切主机的本地。" tabindex="-1"><a class="header-anchor" href="#将agent安装包下载到回切主机的本地。"><span>将Agent安装包下载到回切主机的本地。</span></a></h4>
<p>点击上方的 <strong>'资源容灾'</strong> 选项卡，然后在左侧选择 <strong>'主机回切'</strong> 。点击 <strong>'添加主机'</strong> ，选择Agent模式。</p>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-6.png" alt="complete-doc-for-block-storage-failback-6.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-6.png</figcaption></figure>
<p>在 <strong>'Windows'</strong> 部分，选择与您的回切主机版本相对应的安装包进行下载。</p>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-7.png" alt="complete-doc-for-block-storage-failback-7.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-7.png</figcaption></figure>
<h4 id="源windows主机上的防毒软件检查与措施" tabindex="-1"><a class="header-anchor" href="#源windows主机上的防毒软件检查与措施"><span>源Windows主机上的防毒软件检查与措施</span></a></h4>
<p>参考以下文档，在源Windows 回切主机上执行操作。</p>
<p>文档链接：<a href="https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#antivirus-software-inspection-and-measures-on-source-windows-host" target="_blank" rel="noopener noreferrer">https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#antivirus-software-inspection-and-measures-on-source-windows-host</a></p>
<h4 id="在windows-回切主机上安装agent" tabindex="-1"><a class="header-anchor" href="#在windows-回切主机上安装agent"><span><strong>在Windows 回切主机上安装Agent</strong></span></a></h4>
<p>参考以下文档，在Windows 回切主机上执行操作。</p>
<p>文档链接：<a href="https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-windows-host" target="_blank" rel="noopener noreferrer">https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-windows-host</a></p>
<h2 id="内网vpn访问-测试回切主机与华为云obs之间的网络连接" tabindex="-1"><a class="header-anchor" href="#内网vpn访问-测试回切主机与华为云obs之间的网络连接"><span>（内网VPN访问）测试回切主机与华为云OBS之间的网络连接</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>已经在华为云端配置了VPN服务，并且华为云端通过VPN连接到生产站点。您可以执行以下测试。</p>
</div>
<h3 id="linux回切主机-1" tabindex="-1"><a class="header-anchor" href="#linux回切主机-1"><span>Linux回切主机</span></a></h3>
<h4 id="登录到回切主机" tabindex="-1"><a class="header-anchor" href="#登录到回切主机"><span>登录到回切主机</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>确保在回切主机上运行ssh命令。</p>
</div>
<h4 id="华为云私有dns连接测试" tabindex="-1"><a class="header-anchor" href="#华为云私有dns连接测试"><span>华为云私有DNS连接测试</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>请参考以下文档，根据使用的对象存储区域查找私有DNS服务器地址。<br>
参考文档链接：<a href="https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html</a></p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100.125.1.250</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>成功响应：</p>
<figure><img src="@source/zh/userguide/poc/images/docs-of-object-storage-host-failback-1.png" alt="docs-of-object-storage-host-failback-1.png" tabindex="0" loading="lazy"><figcaption>docs-of-object-storage-host-failback-1.png</figcaption></figure>
<h4 id="华为云对象存储连接测试" tabindex="-1"><a class="header-anchor" href="#华为云对象存储连接测试"><span>华为云对象存储连接测试</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>成功响应：</p>
<figure><img src="@source/zh/userguide/poc/images/docs-of-object-storage-host-failback-2.png" alt="docs-of-object-storage-host-failback-2.png" tabindex="0" loading="lazy"><figcaption>docs-of-object-storage-host-failback-2.png</figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>此命令主要用于测试对华为云对象存储桶的可访问性。当前示例测试的OBS域是华为云新加坡区域的。如果需要在其他区域进行测试，请参考官方华为云文档以找到相应的终端域地址。<br>
文档链接：<a href="https://developer.huaweicloud.com/intl/en-us/endpoint?OBS" target="_blank" rel="noopener noreferrer">https://developer.huaweicloud.com/intl/en-us/endpoint?OBS</a></p>
</div>
<h3 id="windows回切主机-1" tabindex="-1"><a class="header-anchor" href="#windows回切主机-1"><span>Windows回切主机</span></a></h3>
<h4 id="登录到回切主机-1" tabindex="-1"><a class="header-anchor" href="#登录到回切主机-1"><span>登录到回切主机</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>确保在Failback主机上存在ssh命令，并打开CMD命令行。</p>
</div>
<h4 id="华为云私有dns连接测试-1" tabindex="-1"><a class="header-anchor" href="#华为云私有dns连接测试-1"><span>华为云私有DNS连接测试</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>请参考以下文档，根据使用的对象存储区域查找私有DNS服务器地址。<br>
参考文档：<a href="https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html</a></p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100.125.1.250</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>成功响应：</p>
<figure><img src="@source/zh/userguide/poc/images/docs-of-object-storage-host-failback-3.png" alt="docs-of-object-storage-host-failback-3.png" tabindex="0" loading="lazy"><figcaption>docs-of-object-storage-host-failback-3.png</figcaption></figure>
<h4 id="华为云对象存储连接测试-1" tabindex="-1"><a class="header-anchor" href="#华为云对象存储连接测试-1"><span>华为云对象存储连接测试</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>成功响应：</p>
<figure><img src="@source/zh/userguide/poc/images/docs-of-object-storage-host-failback-4.png" alt="docs-of-object-storage-host-failback-4.png" tabindex="0" loading="lazy"><figcaption>docs-of-object-storage-host-failback-4.png</figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>此命令主要用于测试对华为云对象存储桶的可访问性。当前示例测试的OBS域是华为云新加坡区域的。如果需要在其他区域进行测试，请参考官方华为云文档以找到相应的终端域地址。<br>
文档链接：<a href="https://developer.huaweicloud.com/intl/en-us/endpoint?OBS" target="_blank" rel="noopener noreferrer">https://developer.huaweicloud.com/intl/en-us/endpoint?OBS</a></p>
</div>
<h2 id="内网vpn访问-测试回切主机与回切网关之间的网络连接" tabindex="-1"><a class="header-anchor" href="#内网vpn访问-测试回切主机与回切网关之间的网络连接"><span>（内网VPN访问）测试回切主机与回切网关之间的网络连接</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果回切测试环境通过华为云VPN连接到生产站点的内网，您可以执行此操作以测试回切主机与回切网关主机之间的网络连接。</p>
</div>
<h3 id="linux回切主机-2" tabindex="-1"><a class="header-anchor" href="#linux回切主机-2"><span>Linux回切主机</span></a></h3>
<h4 id="验证测试步骤" tabindex="-1"><a class="header-anchor" href="#验证测试步骤"><span>验证测试步骤</span></a></h4>
<p>登录到回切主机。</p>
<h4 id="测试访问回切网关主机的10729端口" tabindex="-1"><a class="header-anchor" href="#测试访问回切网关主机的10729端口"><span>测试访问回切网关主机的10729端口</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>确保在Failback主机上运行ssh命令。</p>
</div>
<p>测试命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10729</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> root@</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Failback</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Gateway</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Intranet</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>验证结果：
如果可以正常访问密码，则访问正常。</p>
<h3 id="windows回切主机-2" tabindex="-1"><a class="header-anchor" href="#windows回切主机-2"><span>Windows回切主机</span></a></h3>
<h4 id="验证测试步骤-1" tabindex="-1"><a class="header-anchor" href="#验证测试步骤-1"><span>验证测试步骤</span></a></h4>
<p>登录到回切主机。</p>
<h4 id="测试访问回切网关主机的10729端口-1" tabindex="-1"><a class="header-anchor" href="#测试访问回切网关主机的10729端口-1"><span>测试访问回切网关主机的10729端口</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>确保在回切主机上存在ssh命令，并打开CMD命令行窗口。</p>
</div>
<p>测试命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10729</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> root@</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Failback</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Gateway</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Intranet</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>验证结果：
如果可以正常访问密码，则访问正常。</p>
</div></template>


