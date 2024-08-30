<template><div><h1 id="同步节点proxy部署与配置" tabindex="-1"><a class="header-anchor" href="#同步节点proxy部署与配置"><span>同步节点Proxy部署与配置</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#配置同步代理ip地址">配置同步代理IP地址</router-link><ul><li><router-link to="#登录同步代理虚拟机">登录同步代理虚拟机</router-link></li><li><router-link to="#配置同步代理虚拟机网络">配置同步代理虚拟机网络</router-link></li><li><router-link to="#重启网络服务">重启网络服务</router-link></li><li><router-link to="#测试网络">测试网络</router-link></li></ul></li><li><router-link to="#配置ntp服务器">配置NTP服务器</router-link><ul><li><router-link to="#下载并上传到proxy">下载并上传到Proxy</router-link></li><li><router-link to="#安装">安装</router-link></li><li><router-link to="#ntp-配置">NTP 配置</router-link></li><li><router-link to="#启动服务">启动服务</router-link></li></ul></li><li><router-link to="#启用proxy的访问策略">启用Proxy的访问策略</router-link></li><li><router-link to="#测试proxy的访问策略">测试Proxy的访问策略</router-link><ul><li><router-link to="#测试vcenter-esxi的连接性">测试vCenter/ESXi的连接性</router-link></li></ul></li><li><router-link to="#测试proxy到对象存储的网络连接">测试Proxy到对象存储的网络连接</router-link><ul><li><router-link to="#互联网">互联网</router-link></li><li><router-link to="#vpn">VPN</router-link></li></ul></li><li><router-link to="#测试从代理服务器到hyperbdr的网络连接">测试从代理服务器到HyperBDR的网络连接</router-link><ul><li><router-link to="#选项-1-公网访问">选项 1: 公网访问</router-link></li><li><router-link to="#选项-2-内部-vpn-访问">选项 2: 内部 VPN 访问</router-link></li></ul></li><li><router-link to="#设置proxy-dns">设置Proxy DNS</router-link><ul><li><router-link to="#配置dns域名">配置DNS域名</router-link></li></ul></li><li><router-link to="#安装同步代理">安装同步代理</router-link><ul><li><router-link to="#登录hyperbdr主控台">登录HyperBDR主控台</router-link></li><li><router-link to="#获取安装命令">获取安装命令</router-link></li><li><router-link to="#登录进入到同步节点">登录进入到同步节点</router-link></li><li><router-link to="#在proxy节点上执行安装命令">在Proxy节点上执行安装命令</router-link></li></ul></li><li><router-link to="#添加和配置云存储网关">添加和配置云存储网关</router-link><ul><li><router-link to="#操作步骤">操作步骤</router-link></li></ul></li></ul></nav>
<h2 id="配置同步代理ip地址" tabindex="-1"><a class="header-anchor" href="#配置同步代理ip地址"><span>配置同步代理IP地址</span></a></h2>
<h3 id="登录同步代理虚拟机" tabindex="-1"><a class="header-anchor" href="#登录同步代理虚拟机"><span>登录同步代理虚拟机</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Proxy ova的默认用户名和密码:</p>
<ul>
<li>用户名: root</li>
<li>密码: Acb@132.Inst</li>
</ul>
</div>
<p>使用vCenter Web Console登录Proxy VM并进行以下配置。
<img src="@source/zh/userguide/poc/images/vcenter-web-console-1.png" alt="vcenter-web-console-1.png" loading="lazy"><br>
<img src="@source/zh/userguide/poc/images/vcenter-web-console-2.png" alt="vcenter-web-console-2.png" loading="lazy"></p>
<h3 id="配置同步代理虚拟机网络" tabindex="-1"><a class="header-anchor" href="#配置同步代理虚拟机网络"><span>配置同步代理虚拟机网络</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Sync Proxy ova 默认配置为 DHCP 模式进行联网。如果您选择的源生产环境网络支持 DHCP，请确认虚拟机的 IP 并继续。如果源生产环境网络不使用 DHCP，则需要手动配置机器的网络。</p>
</div>
<h4 id="确认虚拟机的网络适配器设备名称" tabindex="-1"><a class="header-anchor" href="#确认虚拟机的网络适配器设备名称"><span>确认虚拟机的网络适配器设备名称</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/zh/userguide/poc/images/confirm-vm-network-device-name-1.png" alt="confirm-vm-network-device-name-1.png" tabindex="0" loading="lazy"><figcaption>confirm-vm-network-device-name-1.png</figcaption></figure>
<h4 id="配置-ip-地址和网关" tabindex="-1"><a class="header-anchor" href="#配置-ip-地址和网关"><span>配置 IP 地址和网关</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>使用命令方法配置 Sync Proxy VM 的网络是临时的，意外重启会导致网络配置丢失，建议使用配置文件方法配置网络。</p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ifconfig</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> eth0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 192.168.7.48/20</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> route</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gw</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 192.168.0.1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> eth0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/zh/userguide/poc/images/configure-ip-address-and-gateway-1.png" alt="configure-ip-address-and-gateway-1.png" tabindex="0" loading="lazy"><figcaption>configure-ip-address-and-gateway-1.png</figcaption></figure>
<h4 id="修改网络接口配置文件" tabindex="-1"><a class="header-anchor" href="#修改网络接口配置文件"><span>修改网络接口配置文件</span></a></h4>
<p>确认网络接口配置文件</p>
<blockquote>
<p>文件扩展名通常为[.yaml]</p>
</blockquote>
<figure><img src="@source/zh/userguide/poc/images/configure-ip-address-and-gateway-2.png" alt="configure-ip-address-and-gateway-2.png" tabindex="0" loading="lazy"><figcaption>configure-ip-address-and-gateway-2.png</figcaption></figure>
<p>以下命令会将指定的网络配置内容直接覆盖到指定的配置文件中，请根据实际需要修改网络参数（如IP地址、网关、DNS等）。</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "network:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  version: 2</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  renderer: networkd</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  ethernets:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    eth0:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      addresses:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        - 192.168.7.48/20</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      gateway4: 192.168.0.1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tee</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/netplan/70-netplan-set.yaml</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> netplan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apply</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/userguide/poc/images/configure-ip-address-and-gateway-3.png" alt="configure-ip-address-and-gateway-3.png" tabindex="0" loading="lazy"><figcaption>configure-ip-address-and-gateway-3.png</figcaption></figure>
<h3 id="重启网络服务" tabindex="-1"><a class="header-anchor" href="#重启网络服务"><span>重启网络服务</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo systemctl restart systemd-networkd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="测试网络" tabindex="-1"><a class="header-anchor" href="#测试网络"><span>测试网络</span></a></h3>
<p>尝试ping VMware vCenter IP或ESXi IP，检查是否能够获得正确的响应。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ping &#x3C;vcenter ip or esxi ip></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="配置ntp服务器" tabindex="-1"><a class="header-anchor" href="#配置ntp服务器"><span>配置NTP服务器</span></a></h2>
<h3 id="下载并上传到proxy" tabindex="-1"><a class="header-anchor" href="#下载并上传到proxy"><span>下载并上传到Proxy</span></a></h3>
<p>下载这些软件包并上传到Proxy，在 /root/ntp-packages/ 目录下保存</p>
<ul>
<li><a href="https://vault.centos.org/7.5.1804/os/x86_64/Packages/ntp-4.2.6p5-28.el7.centos.x86_64.rpm" target="_blank" rel="noopener noreferrer">ntp-4.2.6p5-28.el7.centos.x86_64.rpm</a></li>
<li><a href="https://vault.centos.org/7.5.1804/os/x86_64/Packages/autogen-libopts-5.18-5.el7.x86_64.rpm" target="_blank" rel="noopener noreferrer">autogen-libopts-5.18-5.el7.x86_64.rpm</a></li>
<li><a href="https://vault.centos.org/7.5.1804/os/x86_64/Packages/ntpdate-4.2.6p5-28.el7.centos.x86_64.rpm" target="_blank" rel="noopener noreferrer">ntpdate-4.2.6p5-28.el7.centos.x86_64.rpm</a></li>
</ul>
<p>在Proxy终端上，您可以使用以下命令下载这些软件包：</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /root/ntp-packages</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /root/ntp-packages</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -O</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://vault.centos.org/7.5.1804/os/x86_64/Packages/ntp-4.2.6p5-28.el7.centos.x86_64.rpm</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -O</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://vault.centos.org/7.5.1804/os/x86_64/Packages/autogen-libopts-5.18-5.el7.x86_64.rpm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -O</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://vault.centos.org/7.5.1804/os/x86_64/Packages/ntpdate-4.2.6p5-28.el7.centos.x86_64.rpm</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /root/ntp-packages/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">.rpm</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ntp-配置" tabindex="-1"><a class="header-anchor" href="#ntp-配置"><span>NTP 配置</span></a></h3>
<p>要编辑 /etc/ntp.conf 文件，可以使用vi编辑器。</p>
<ul>
<li>在文件中找到以下行:</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#server 0.centos.pool.ntp.org iburst</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#server 1.centos.pool.ntp.org iburst</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#server 2.centos.pool.ntp.org iburst</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#server 3.centos.pool.ntp.org iburst</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>取消注释并在文件中添加以下内容。</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ntp.server.ip.address</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>&lt;ntp.server.ip.address&gt;</strong> 是你的ntp服务器的IP地址</p>
<h3 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务"><span>启动服务</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ntpd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ntpd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="启用proxy的访问策略" tabindex="-1"><a class="header-anchor" href="#启用proxy的访问策略"><span>启用Proxy的访问策略</span></a></h2>
<p>在防火墙中打开网络访问策略，以便将Proxy节点与vCenter和由vCenter管理的所有ESXi主机同步。</p>
<ol>
<li>Proxy节点需要在443端口上对vCenter具有正常的访问权限。</li>
<li>Proxy节点需要在902端口上对由vCenter管理的所有ESXi主机具有正常的访问权限。</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Proxy同步节点访问vCenter API接口进行身份验证，并通过调用灾难恢复生产站VM所在的ESXi主机来检索数据。因此，需要为由vCenter管理的所有ESXi主机开启网络访问策略。</p>
</div>
<h2 id="测试proxy的访问策略" tabindex="-1"><a class="header-anchor" href="#测试proxy的访问策略"><span>测试Proxy的访问策略</span></a></h2>
<p>测试Proxy是否能够连接到vCenter的443端口和由vCenter管理的ESXi的902端口。</p>
<h3 id="测试vcenter-esxi的连接性" tabindex="-1"><a class="header-anchor" href="#测试vcenter-esxi的连接性"><span>测试vCenter/ESXi的连接性</span></a></h3>
<p>注意：如果有多个要保护的vCenter或ESXi，请重复这些步骤。</p>
<p>测试443端口</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -v -p 443 &#x3C;vCenter/ESXi IP/Domain></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>成功响应:
如果输出结果包含 &quot;[debug1: Connection established.]&quot; 信息，则表示网络连接正常。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;vCenter/ESXi IP/Domain> [&#x3C;vCenter/ESXi IP/Domain>] port 443.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试902端口</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -v -p 902 &#x3C;ESXi IP/Domain></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>成功响应:
如果输出结果包含 &quot;[debug1: Connection established.]&quot; 信息，则表示网络连接正常。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;SXi IP/Domain> [&#x3C;vCenter/ESXi IP/Domain>] port 443.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试proxy到对象存储的网络连接" tabindex="-1"><a class="header-anchor" href="#测试proxy到对象存储的网络连接"><span>测试Proxy到对象存储的网络连接</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>确保您已经登录到Proxy虚拟机</p>
</div>
<h3 id="互联网" tabindex="-1"><a class="header-anchor" href="#互联网"><span>互联网</span></a></h3>
<p>确保在进行测试之前，您的Proxy可以访问互联网。</p>
<h4 id="公共dns连接测试" tabindex="-1"><a class="header-anchor" href="#公共dns连接测试"><span>公共DNS连接测试</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ping -c 4 -t 2 8.8.8.8</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>成功响应:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ping -c 4 -t 2 8.8.8.8</span></span>
<span class="line"><span>PING 8.8.8.8 (8.8.8.8): 56 data bytes</span></span>
<span class="line"><span>64 bytes from 8.8.8.8: icmp_seq=0 ttl=111 time=43.362 ms</span></span>
<span class="line"><span>64 bytes from 8.8.8.8: icmp_seq=1 ttl=111 time=49.807 ms</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--- 8.8.8.8 ping statistics ---</span></span>
<span class="line"><span>2 packets transmitted, 2 packets received, 0.0% packet loss</span></span>
<span class="line"><span>round-trip min/avg/max/stddev = 43.362/46.585/49.807/3.222 ms</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="华为对象存储桶连接性" tabindex="-1"><a class="header-anchor" href="#华为对象存储桶连接性"><span>华为对象存储桶连接性</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>curl https://obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>成功响应：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&#x3C;?xml version="1.0" encoding="UTF-8" standalone="yes"?>&#x3C;Error>&#x3C;Code>AccessDenied&#x3C;/Code>&#x3C;Message>Anonymous access is forbidden for this operation&#x3C;/Message>&#x3C;RequestId>0000018C1F508F2F9012234EA17641CE&#x3C;/RequestId>&#x3C;HostId>Z9v+cC1sRnaWw6x0vi8pxxYA0YVnKxbYHUPAFpnxkX8sLV44u5b02Z+ailn2wCnR&#x3C;/HostId>&#x3C;/Error>#</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>注意：此命令主要用于测试华为云对象存储桶的可访问性。目前，测试的OBS域是华为云新加坡地区的。如果您需要在其他地区进行测试，请参考华为云官方文档查找相应的Endpoint域地址。</p>
<p>相关链接: <a href="https://developer.huaweicloud.com/intl/en-us/endpoint?OBS" target="_blank" rel="noopener noreferrer">https://developer.huaweicloud.com/intl/en-us/endpoint?OBS</a></p>
<h3 id="vpn" tabindex="-1"><a class="header-anchor" href="#vpn"><span>VPN</span></a></h3>
<h4 id="检查对象存储服务终端端点" tabindex="-1"><a class="header-anchor" href="#检查对象存储服务终端端点"><span>检查对象存储服务终端端点</span></a></h4>
<p>确保对象存储服务终端端点返回内部 IP 地址。</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>成功响应:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>PING obs.lz01.ap-southeast-3.myhuaweicloud.com (100.125.36.29) 56(84) bytes of data.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>华为云对象存储服务的内部 IP 范围为 100.125.xx。如果没有 ICMP 响应，被视为正常。</p>
</div>
<h4 id="华为对象存储桶连接性测试" tabindex="-1"><a class="header-anchor" href="#华为对象存储桶连接性测试"><span>华为对象存储桶连接性测试</span></a></h4>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>成功响应:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&#x3C;?xml version="1.0" encoding="UTF-8" standalone="yes"?>&#x3C;Error>&#x3C;Code>AccessDenied&#x3C;/Code>&#x3C;Message>Anonymous access is forbidden for this operation&#x3C;/Message>&#x3C;RequestId>0000018C1F508F2F9012234EA17641CE&#x3C;/RequestId>&#x3C;HostId>Z9v+cC1sRnaWw6x0vi8pxxYA0YVnKxbYHUPAFpnxkX8sLV44u5b02Z+ailn2wCnR&#x3C;/HostId>&#x3C;/Error>#</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>该命令主要用于测试华为云对象存储桶的可访问性。目前，测试的OBS域名是为华为云新加坡区域。如果您需要在不同的区域进行测试，请参考华为云官方文档找到相应的终端域名地址。</p>
</div>
<p>参考链接: <a href="https://developer.huaweicloud.com/intl/en-us/endpoint?OBS" target="_blank" rel="noopener noreferrer">https://developer.huaweicloud.com/intl/en-us/endpoint?OBS</a></p>
<h2 id="测试从代理服务器到hyperbdr的网络连接" tabindex="-1"><a class="header-anchor" href="#测试从代理服务器到hyperbdr的网络连接"><span>测试从代理服务器到HyperBDR的网络连接</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>此步骤需要在HyperBDR安装完成后进行测试。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Proxy ova的默认用户名和密码：</p>
<ul>
<li>用户名: root</li>
<li>密码: Acb@132.Inst</li>
</ul>
<p>如果您不知道如何在Windows系统上使用SSH，请参考以下链接：</p>
<p><RouteLink to="/zh/userguide/faq.html">How do I connect to SSH on Windows?</RouteLink></p>
</div>
<h3 id="选项-1-公网访问" tabindex="-1"><a class="header-anchor" href="#选项-1-公网访问"><span>选项 1: 公网访问</span></a></h3>
<p>测试从生产站点到华为云HyperBDR的网络连接</p>
<ul>
<li>
<p>步骤1: 登录到代理节点</p>
</li>
<li>
<p>步骤2: 测试访问 HyperBDR 的端口 10443 和端口 30080</p>
</li>
</ul>
<p>执行命令：</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10443</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Public</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>测试结果：如果输出结果包含 &quot;[debug1: Connection established.]&quot; 信息，则表示网络连接正常。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips 26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Public IP> [&#x3C;HyperBDR Public IP>] port 10443.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令：</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 30080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Public</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>测试结果：如果输出结果包含 &quot;[debug1: Connection established.]&quot; 信息，则表示网络连接正常。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips 26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Public IP> [&#x3C;HyperBDR Public IP>] port 30080.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项-2-内部-vpn-访问" tabindex="-1"><a class="header-anchor" href="#选项-2-内部-vpn-访问"><span>选项 2: 内部 VPN 访问</span></a></h3>
<p>测试从生产站点到华为云 HyperBDR 的网络连通性</p>
<ul>
<li>
<p>步骤1: 登录到 Proxy 节点</p>
</li>
<li>
<p>步骤2: 测试对 HyperBDR 端口 10443 和端口 30080 的访问</p>
</li>
</ul>
<p>执行命令:</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10443</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Internal</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>测试结果：如果输出的结果包括信息 &quot;[debug1: Connection established.]&quot;，则表示网络连接正常。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Internal IP> [&#x3C;HyperBDR Internal IP>] port 10443.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令：</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 30080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Internal</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>测试结果：如果输出结果包含信息 &quot;[debug1: Connection established.]&quot;，则表示网络连接正常。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Internal IP> [&#x3C;HyperBDR Internal IP>] port 30080.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置proxy-dns" tabindex="-1"><a class="header-anchor" href="#设置proxy-dns"><span>设置Proxy DNS</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>该步骤仅在通过 VPN 连接到云平台时使用。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Proxy ova 的默认用户名和密码：</p>
<ul>
<li>用户名: root</li>
<li>密码: Acb@132.Inst</li>
</ul>
<p>如果您不知道如何在 Windows 系统上使用 SSH，请参考以下链接：</p>
<p><RouteLink to="/zh/userguide/faq.html">怎么在windows上使用ssh工具?</RouteLink></p>
</div>
<h3 id="配置dns域名" tabindex="-1"><a class="header-anchor" href="#配置dns域名"><span>配置DNS域名</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>&lt;华为DNS终端节点服务的IP地址&gt; 在创建VPC端点服务后，是DNS终端节点服务的IP地址。</p>
</div>
<figure><img src="@source/zh/userguide/poc/images/option-2-internal-vpn-access-configure-proxy-nodes-to-use-huawei-cloud-intranet-dns-resolution-2.png" alt="option-2-internal-vpn-access-configure-proxy-nodes-to-use-huawei-cloud-intranet-dns-resolution-2.png" tabindex="0" loading="lazy"><figcaption>option-2-internal-vpn-access-configure-proxy-nodes-to-use-huawei-cloud-intranet-dns-resolution-2.png</figcaption></figure>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> >> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/etc/resolv.conf</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">nameserver &#x3C;Huawei DNS Endpoint Service IPaddress></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装同步代理" tabindex="-1"><a class="header-anchor" href="#安装同步代理"><span>安装同步代理</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Proxy应在HyperBDR安装过程完成后安装。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Proxy ova 的默认用户名和密码：</p>
<ul>
<li>用户名: root</li>
<li>密码: Acb@132.Inst</li>
</ul>
<p>如果您不知道如何在 Windows 系统上使用 SSH，请参考以下链接：</p>
<p><RouteLink to="/zh/userguide/faq.html">怎么在windows上使用ssh工具?</RouteLink></p>
</div>
<h3 id="登录hyperbdr主控台" tabindex="-1"><a class="header-anchor" href="#登录hyperbdr主控台"><span>登录HyperBDR主控台</span></a></h3>
<figure><img src="@source/zh/userguide/poc/images/install-proxy-1.png" alt="install-proxy-1.png" tabindex="0" loading="lazy"><figcaption>install-proxy-1.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/install-proxy-2.png" alt="install-proxy-2.png" tabindex="0" loading="lazy"><figcaption>install-proxy-2.png</figcaption></figure>
<h3 id="获取安装命令" tabindex="-1"><a class="header-anchor" href="#获取安装命令"><span>获取安装命令</span></a></h3>
<p>点击顶部菜单栏 <strong>&quot;配置&quot;</strong>，<strong>&quot;生产站点&quot;</strong>，<strong>&quot;VMware&quot;</strong>，然后点击 <strong>&quot;添加&quot;</strong> 按钮。</p>
<figure><img src="@source/zh/userguide/poc/images/install-proxy-3.png" alt="install-proxy-3.png" tabindex="0" loading="lazy"><figcaption>install-proxy-3.png</figcaption></figure>
<p>在弹出的页面中，在 <strong>&quot;步骤2：安装同步节点&quot;</strong> 部分，在 <strong>&quot;2. 执行以下命令进行安装&quot;</strong> 下点击 <strong>&quot;复制命令&quot;</strong> 以获取Proxy节点的安装命令。</p>
<figure><img src="@source/zh/userguide/poc/images/install-proxy-4.png" alt="install-proxy-4.png" tabindex="0" loading="lazy"><figcaption>install-proxy-4.png</figcaption></figure>
<h3 id="登录进入到同步节点" tabindex="-1"><a class="header-anchor" href="#登录进入到同步节点"><span>登录进入到同步节点</span></a></h3>
<figure><img src="@source/zh/userguide/poc/images/install-proxy-5.png" alt="install-proxy-5.png" tabindex="0" loading="lazy"><figcaption>install-proxy-5.png</figcaption></figure>
<h3 id="在proxy节点上执行安装命令" tabindex="-1"><a class="header-anchor" href="#在proxy节点上执行安装命令"><span>在Proxy节点上执行安装命令</span></a></h3>
<p>将复制的安装命令粘贴到命令行中并执行。等待命令成功执行，这表示Proxy同步节点程序正常运行。</p>
<figure><img src="@source/zh/userguide/poc/images/install-proxy-6.png" alt="install-proxy-6.png" tabindex="0" loading="lazy"><figcaption>install-proxy-6.png</figcaption></figure>
<h2 id="添加和配置云存储网关" tabindex="-1"><a class="header-anchor" href="#添加和配置云存储网关"><span>添加和配置云存储网关</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>默认情况下已登录到HyperBDR控制台。</p>
</div>
<figure><img src="@source/zh/userguide/poc/images/add-and-configure-hypergate-1.png" alt="add-and-configure-hypergate-1.png" tabindex="0" loading="lazy"><figcaption>add-and-configure-hypergate-1.png</figcaption></figure>
<h3 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>云存储网关是一台自动创建的云实例，需要与业务VPC所在的区域相同。</p>
</div>
<p><strong>步骤 1.</strong> 点击顶部菜单中的“配置管理”，在左侧选择“存储配置”，然后选择“块存储”，点击“添加”按钮。</p>
<figure><img src="@source/zh/userguide/poc/images/add-and-configure-hypergate-2.png" alt="add-and-configure-hypergate-2.png" tabindex="0" loading="lazy"><figcaption>add-and-configure-hypergate-2.png</figcaption></figure>
<p><strong>步骤 2.</strong> 按照以下信息填写以添加云平台。</p>
<blockquote>
<p>此步骤将在身份验证后自动在华为云认证租户下创建块存储恢复网关（云存储网关）</p>
</blockquote>
<p>选择在“恢复平台”中选择华为云。</p>
<p>在添加目标灾难恢复平台时，请填写如下图所示的华为云认证信息：</p>
<ul>
<li>Access Key ID: 华为云账号 Access Key ID</li>
<li>Access Key Secret: 华为云账号 Access Key Secret</li>
<li>项目: 可选项, 可以留空</li>
<li>项目 ID: 可选项, 可以留空</li>
<li>跳过驱动修复: 可选项</li>
</ul>
<p>确认填写的信息后，点击“下一步”按钮。</p>
<figure><img src="@source/zh/userguide/poc/images/add-and-configure-hypergate-3.png" alt="add-and-configure-hypergate-3.png" tabindex="0" loading="lazy"><figcaption>add-and-configure-hypergate-3.png</figcaption></figure>
<p>选择相关信息，创建认证租户下的云同步网关实例，然后点击“下一步”按钮。</p>
<figure><img src="@source/zh/userguide/poc/images/add-and-configure-hypergate-4.png" alt="add-and-configure-hypergate-4.png" tabindex="0" loading="lazy"><figcaption>add-and-configure-hypergate-4.png</figcaption></figure>
<p>在名称和状态显示正常后，等待“创建”过程完成，然后点击“完成”按钮。</p>
<figure><img src="@source/zh/userguide/poc/images/add-and-configure-hypergate-5.png" alt="add-and-configure-hypergate-5.png" tabindex="0" loading="lazy"><figcaption>add-and-configure-hypergate-5.png</figcaption></figure>
<p>检查&quot;块存储&quot; - &quot;云同步网关&quot;页面，状态应为&quot;可用&quot;。</p>
<figure><img src="@source/zh/userguide/poc/images/add-and-configure-hypergate-6.png" alt="add-and-configure-hypergate-6.png" tabindex="0" loading="lazy"><figcaption>add-and-configure-hypergate-6.png</figcaption></figure>
</div></template>


