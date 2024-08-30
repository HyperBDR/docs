<template><div><h1 id="hyperbdr部署与配置" tabindex="-1"><a class="header-anchor" href="#hyperbdr部署与配置"><span>HyperBDR部署与配置</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#内网vpn访问-测试hyperbdr到通用存储回切网关的网络连通性">（内网VPN访问）测试HyperBDR到通用存储回切网关的网络连通性</router-link><ul><li><router-link to="#验证测试步骤">验证测试步骤</router-link></li></ul></li><li><router-link to="#测试hyperbdr到vcenter-esxi的管理网络连通性">测试HyperBDR到vCenter/ESXi的管理网络连通性</router-link><ul><li><router-link to="#登录到hyperbdr主机">登录到HyperBDR主机</router-link></li><li><router-link to="#测试访问vcenter地址的端口">测试访问vCenter地址的端口</router-link></li><li><router-link to="#测试访问esxi地址的端口">测试访问ESXi地址的端口</router-link></li></ul></li><li><router-link to="#添加通用存储回切网关到hyperbdr">添加通用存储回切网关到HyperBDR</router-link><ul><li><router-link to="#登录hyperbdr">登录HyperBDR</router-link></li><li><router-link to="#添加通用存储回切网关">添加通用存储回切网关</router-link></li></ul></li><li><router-link to="#验证通用存储回切网关状态">验证通用存储回切网关状态</router-link><ul><li><router-link to="#登录hyperbdr控制台">登录HyperBDR控制台</router-link></li><li><router-link to="#检查通用存储回切网关的状态">检查通用存储回切网关的状态</router-link></li></ul></li><li><router-link to="#申请hyperbdr容灾回切授权">申请HyperBDR容灾回切授权</router-link><ul><li><router-link to="#登录hyperbdr控制台-1">登录HyperBDR控制台</router-link></li><li><router-link to="#激活容灾回切licnese">激活容灾回切Licnese</router-link></li><li><router-link to="#获取license激活码-容灾回切">获取License激活码（容灾回切）</router-link></li></ul></li><li><router-link to="#下载通用存储回切网关所使用的hyperdoor镜像">下载通用存储回切网关所使用的HyperDoor镜像</router-link><ul><li><router-link to="#iso格式镜像下载">ISO格式镜像下载</router-link></li><li><router-link to="#qcow2格式镜像下载">QCOW2格式镜像下载</router-link></li><li><router-link to="#download-vmdk-format-image">Download VMDK Format Image</router-link></li></ul></li><li><router-link to="#添加对象存储-容灾回切">添加对象存储（容灾回切）</router-link><ul><li><router-link to="#配置步骤">配置步骤</router-link></li></ul></li></ul></nav>
<h2 id="内网vpn访问-测试hyperbdr到通用存储回切网关的网络连通性" tabindex="-1"><a class="header-anchor" href="#内网vpn访问-测试hyperbdr到通用存储回切网关的网络连通性"><span>（内网VPN访问）测试HyperBDR到通用存储回切网关的网络连通性</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果你的回切测试环境是通过容灾目标云VPN与生产站点内网互联，可以通过此操作步骤来测试HyperBDR到通用存储回切网关的网络连通性。</p>
</div>
<h3 id="验证测试步骤" tabindex="-1"><a class="header-anchor" href="#验证测试步骤"><span>验证测试步骤</span></a></h3>
<p>登录到HyperBDR主机</p>
<h4 id="测试访问通用存储回切网关10729端口" tabindex="-1"><a class="header-anchor" href="#测试访问通用存储回切网关10729端口"><span>测试访问通用存储回切网关10729端口</span></a></h4>
<p>测试命令：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -p 10729 root@&#x3C;Failback Gateway Host Intranet IP></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>验证结果：</p>
<p>可以正常访问到输入密码，则表示正常访问。</p>
<h2 id="测试hyperbdr到vcenter-esxi的管理网络连通性" tabindex="-1"><a class="header-anchor" href="#测试hyperbdr到vcenter-esxi的管理网络连通性"><span>测试HyperBDR到vCenter/ESXi的管理网络连通性</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果你的回切测试环境是通过容灾目标云的VPN与生产站点内网互联，可以通过此操作步骤来测试HyperBDR到vCenter/ESXi的管理网络连通性的网络连通性。</p>
</div>
<h3 id="登录到hyperbdr主机" tabindex="-1"><a class="header-anchor" href="#登录到hyperbdr主机"><span>登录到HyperBDR主机</span></a></h3>
<h3 id="测试访问vcenter地址的端口" tabindex="-1"><a class="header-anchor" href="#测试访问vcenter地址的端口"><span>测试访问vCenter地址的端口</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>命令中将Vcenter的IP地址替换为实际生产环境中的IP地址</p>
</div>
<p>测试命令：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -v -p 443 &#x3C;vCenter IP Address></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>测试结果：
如果输入结果包括信息“[debug1: Connection established.]”，则表明网络连接没有问题。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to 192.168.10.2 [vCenter IP Address] port 443.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试访问esxi地址的端口" tabindex="-1"><a class="header-anchor" href="#测试访问esxi地址的端口"><span>测试访问ESXi地址的端口</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>命令中将ESXi的IP地址替换为实际生产环境中的IP地址</p>
</div>
<p>测试命令：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -v -p 443 &#x3C;ESXi IP Address></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>测试结果：
如果输入结果包括信息“[debug1: Connection established.]”，则表明网络连接没有问题。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to 192.168.10.2 [ESXi IP Address] port 443.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加通用存储回切网关到hyperbdr" tabindex="-1"><a class="header-anchor" href="#添加通用存储回切网关到hyperbdr"><span>添加通用存储回切网关到HyperBDR</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>默认已完成HyperBDR环境的部署。</p>
</div>
<h3 id="登录hyperbdr" tabindex="-1"><a class="header-anchor" href="#登录hyperbdr"><span>登录HyperBDR</span></a></h3>
<figure><img src="@source/zh/userguide/poc/images/docs-of-object-storage-host-failback-7.png" alt="docs-of-object-storage-host-failback-7.png" tabindex="0" loading="lazy"><figcaption>docs-of-object-storage-host-failback-7.png</figcaption></figure>
<h3 id="添加通用存储回切网关" tabindex="-1"><a class="header-anchor" href="#添加通用存储回切网关"><span>添加通用存储回切网关</span></a></h3>
<p><strong>Step 1.</strong> 上方导航栏中选择 &quot;配置管理&quot;，左侧菜单栏选择&quot;通用方式存储&quot;，在&quot;回切&quot; - &quot;回切网关管理&quot;标签页中点击&quot;添加&quot;。</p>
<figure><img src="@source/zh/userguide/poc/images/configure-hyperbdr-host-failback-2.png" alt="configure-hyperbdr-host-failback-2.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-2.png</figcaption></figure>
<p><strong>Step 2.</strong> 按照表单中的说明创建&quot;通用存储回切网关&quot;。填写通用存储回切网关的信息，确认后单击&quot;下一步&quot;。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>根据您的存储类型来配置&quot;回切恢复模式&quot;，您可以选择&quot;对象存储&quot;或者&quot;云硬盘&quot;。</p>
</div>
<figure><img src="@source/zh/userguide/poc/images/configure-hyperbdr-host-failback-3.png" alt="configure-hyperbdr-host-failback-3.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-3.png</figcaption></figure>
<p><strong>Step 3.</strong> &quot;驱动修复&quot;选项默认即可。</p>
<figure><img src="@source/zh/userguide/poc/images/configure-hyperbdr-host-failback-4.png" alt="configure-hyperbdr-host-failback-4.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-4.png</figcaption></figure>
<p><strong>Step 4.</strong> 通用存储回切网关状态为可用即可。</p>
<figure><img src="@source/zh/userguide/poc/images/configure-hyperbdr-host-failback-5.png" alt="configure-hyperbdr-host-failback-5.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-5.png</figcaption></figure>
<h2 id="验证通用存储回切网关状态" tabindex="-1"><a class="header-anchor" href="#验证通用存储回切网关状态"><span>验证通用存储回切网关状态</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>默认已完成HyperBDR环境的部署。</p>
</div>
<h3 id="登录hyperbdr控制台" tabindex="-1"><a class="header-anchor" href="#登录hyperbdr控制台"><span>登录HyperBDR控制台</span></a></h3>
<figure><img src="@source/zh/userguide/poc/images/docs-of-object-storage-host-failback-7.png" alt="docs-of-object-storage-host-failback-7.png" tabindex="0" loading="lazy"><figcaption>docs-of-object-storage-host-failback-7.png</figcaption></figure>
<h3 id="检查通用存储回切网关的状态" tabindex="-1"><a class="header-anchor" href="#检查通用存储回切网关的状态"><span>检查通用存储回切网关的状态</span></a></h3>
<p>在顶部导航栏上，选择[<strong>配置管理</strong>]，在左侧菜单中选择[<strong>通用方式存储</strong>] &gt; [<strong>回切</strong>]，在回切网关管理中单击要确认的[<strong>通用存储回切网关</strong>]。</p>
<figure><img src="@source/zh/userguide/poc/images/configure-hyperbdr-host-failback-7.png" alt="configure-hyperbdr-host-failback-7.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-7.png</figcaption></figure>
<p>确认此通用存储回切网关的状态为[<strong>可用</strong>]即可。</p>
<figure><img src="@source/zh/userguide/poc/images/configure-hyperbdr-host-failback-8.png" alt="configure-hyperbdr-host-failback-8.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-8.png</figcaption></figure>
<h2 id="申请hyperbdr容灾回切授权" tabindex="-1"><a class="header-anchor" href="#申请hyperbdr容灾回切授权"><span>申请HyperBDR容灾回切授权</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>默认已完成HyperBDR环境的部署。</p>
</div>
<h3 id="登录hyperbdr控制台-1" tabindex="-1"><a class="header-anchor" href="#登录hyperbdr控制台-1"><span>登录HyperBDR控制台</span></a></h3>
<figure><img src="@source/zh/userguide/poc/images/docs-of-object-storage-host-failback-7.png" alt="docs-of-object-storage-host-failback-7.png" tabindex="0" loading="lazy"><figcaption>docs-of-object-storage-host-failback-7.png</figcaption></figure>
<h3 id="激活容灾回切licnese" tabindex="-1"><a class="header-anchor" href="#激活容灾回切licnese"><span>激活容灾回切Licnese</span></a></h3>
<p>选择[设置] &gt; [授权管理] &gt;[容灾回切授权] ，点击 [添加]。</p>
<figure><img src="@source/zh/userguide/poc/images/configure-hyperbdr-host-failback-10.png" alt="configure-hyperbdr-host-failback-10.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-10.png</figcaption></figure>
<h3 id="获取license激活码-容灾回切" tabindex="-1"><a class="header-anchor" href="#获取license激活码-容灾回切"><span>获取License激活码（容灾回切）</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>有两种方法来获取License激活码</p>
</div>
<h4 id="使用二维码激活license" tabindex="-1"><a class="header-anchor" href="#使用二维码激活license"><span>使用二维码激活License</span></a></h4>
<figure><img src="@source/zh/userguide/poc/images/configure-hyperbdr-host-failback-11.png" alt="configure-hyperbdr-host-failback-11.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-11.png</figcaption></figure>
<p>扫描二维码并填写申请表。客服将在审查申请后通过电子邮件向用户发送激活码（附件）。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>请确保申请表上提供的电子邮件地址正确无误，否则将不会收到激活码。</p>
</div>
<figure><img src="@source/zh/userguide/poc/images/configure-hyperbdr-host-failback-12.png" alt="configure-hyperbdr-host-failback-12.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-12.png</figcaption></figure>
<p>将收到的激活码填写后点击 [激活] 即可。</p>
<figure><img src="@source/zh/userguide/poc/images/configure-hyperbdr-host-failback-13.png" alt="configure-hyperbdr-host-failback-13.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-13.png</figcaption></figure>
<h4 id="使用注册码激活license" tabindex="-1"><a class="header-anchor" href="#使用注册码激活license"><span>使用注册码激活License</span></a></h4>
<p>[点击此处] 获取注册码，并复制注册码</p>
<figure><img src="@source/zh/userguide/poc/images/configure-hyperbdr-host-failback-14.png" alt="configure-hyperbdr-host-failback-14.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-14.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/configure-hyperbdr-host-failback-15.png" alt="configure-hyperbdr-host-failback-15.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-15.png</figcaption></figure>
<p>用户可以将注册码发送给销售代表或邮箱enquiry@oneprocloud.com ，将收到的激活码填写后点击 [激活] 即可。</p>
<figure><img src="@source/zh/userguide/poc/images/configure-hyperbdr-host-failback-16.png" alt="configure-hyperbdr-host-failback-16.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-16.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/configure-hyperbdr-host-failback-17.png" alt="configure-hyperbdr-host-failback-17.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-17.png</figcaption></figure>
<h2 id="下载通用存储回切网关所使用的hyperdoor镜像" tabindex="-1"><a class="header-anchor" href="#下载通用存储回切网关所使用的hyperdoor镜像"><span>下载通用存储回切网关所使用的HyperDoor镜像</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Choose the available image file according to the production environment on the source. You will need to use the hyperdoor image to create a virtual machine/physical machine in the source production environment.
根据源生产环境选择可用的镜像文件。您将需要使用HyperDoor镜像在源生产环境中创建虚拟机/物理机。</p>
</div>
<h3 id="iso格式镜像下载" tabindex="-1"><a class="header-anchor" href="#iso格式镜像下载"><span>ISO格式镜像下载</span></a></h3>
<p>镜像下载地址：<a href="https://downloads.oneprocloud.com/Livecd-HyperDoor.iso" target="_blank" rel="noopener noreferrer">https://downloads.oneprocloud.com/Livecd-HyperDoor.iso</a></p>
<h3 id="qcow2格式镜像下载" tabindex="-1"><a class="header-anchor" href="#qcow2格式镜像下载"><span>QCOW2格式镜像下载</span></a></h3>
<p>镜像下载地址：<a href="https://downloads.oneprocloud.com/Livecd-HyperDoor.qcow2" target="_blank" rel="noopener noreferrer">https://downloads.oneprocloud.com/Livecd-HyperDoor.qcow2</a></p>
<h3 id="download-vmdk-format-image" tabindex="-1"><a class="header-anchor" href="#download-vmdk-format-image"><span>Download VMDK Format Image</span></a></h3>
<p>镜像下载地址：<a href="https://downloads.oneprocloud.com/Livecd-HyperDoor.vmdk" target="_blank" rel="noopener noreferrer">https://downloads.oneprocloud.com/Livecd-HyperDoor.vmdk</a></p>
<h2 id="添加对象存储-容灾回切" tabindex="-1"><a class="header-anchor" href="#添加对象存储-容灾回切"><span>添加对象存储（容灾回切）</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>默认已完成HyperBDR环境的部署。<br>
以下操作使用华为云作为示例，在HyperBDR控制台中配置并添加华为云对象存储桶。请根据您实际场景中的容灾目标云进行配置。</p>
</div>
<h3 id="配置步骤" tabindex="-1"><a class="header-anchor" href="#配置步骤"><span>配置步骤</span></a></h3>
<ul>
<li>Step 1. 上侧菜单栏点击 [配置管理]，左侧选择 [存储配置] 中的 [对象存储]，选择 [回切] 标签页，点击 [+添加] 。</li>
</ul>
<figure><img src="@source/zh/userguide/poc/images/add-huawei-cloud-object-storage-failback-1.png" alt="add-huawei-cloud-object-storage-failback-1.png" tabindex="0" loading="lazy"><figcaption>add-huawei-cloud-object-storage-failback-1.png</figcaption></figure>
<ul>
<li>Step 2. 在 [对象存储平台]，选择您所使用的华为云对象存储区域</li>
</ul>
<figure><img src="@source/zh/userguide/poc/images/add-huawei-cloud-object-storage-failback-2.png" alt="add-huawei-cloud-object-storage-failback-2.png" tabindex="0" loading="lazy"><figcaption>add-huawei-cloud-object-storage-failback-2.png</figcaption></figure>
<ul>
<li>Step 3. 填写用于鉴权认证对象存储的AK/SK，确认后点击 下一步</li>
</ul>
<figure><img src="@source/zh/userguide/poc/images/add-huawei-cloud-object-storage-failback-3.png" alt="add-huawei-cloud-object-storage-failback-3.png" tabindex="0" loading="lazy"><figcaption>add-huawei-cloud-object-storage-failback-3.png</figcaption></figure>
<ul>
<li>Step 4. 设置对象存储桶的名称后点击 [确定]。</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>您可以使用区域内已经存在的对象存储桶，或者新建对象存储桶并自定义名称。</p>
</div>
<figure><img src="@source/zh/userguide/poc/images/add-huawei-cloud-object-storage-failback-4.png" alt="add-huawei-cloud-object-storage-failback-4.png" tabindex="0" loading="lazy"><figcaption>add-huawei-cloud-object-storage-failback-4.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/add-huawei-cloud-object-storage-failback-5.png" alt="add-huawei-cloud-object-storage-failback-5.png" tabindex="0" loading="lazy"><figcaption>add-huawei-cloud-object-storage-failback-5.png</figcaption></figure>
<ul>
<li>Step 5. 对象存储（容灾回切）添加完成</li>
</ul>
<figure><img src="@source/zh/userguide/poc/images/add-huawei-cloud-object-storage-failback-6.png" alt="add-huawei-cloud-object-storage-failback-6.png" tabindex="0" loading="lazy"><figcaption>add-huawei-cloud-object-storage-failback-6.png</figcaption></figure>
</div></template>


