<template><div><h1 id="通用平台目标端部署与配置" tabindex="-1"><a class="header-anchor" href="#通用平台目标端部署与配置"><span>通用平台目标端部署与配置</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#创建通用存储回切网关-agent">创建通用存储回切网关 - Agent</router-link></li><li><router-link to="#配置通用存储回切网关的ip地址-agent">配置通用存储回切网关的IP地址 - Agent</router-link><ul><li><router-link to="#登录到通用存储回切网关">登录到通用存储回切网关</router-link></li><li><router-link to="#手动配置网络">手动配置网络</router-link></li></ul></li><li><router-link to="#内网vpn访问-测试通用存储回切网关到容灾目标云内网obs网络的连通性-agent">（内网VPN访问）测试通用存储回切网关到容灾目标云内网OBS网络的连通性 - Agent</router-link><ul><li><router-link to="#登录通用存储回切网关">登录通用存储回切网关</router-link></li><li><router-link to="#私有dns连接测试">私有DNS连接测试</router-link></li><li><router-link to="#对象存储连接测试">对象存储连接测试</router-link></li></ul></li></ul></nav>
<h2 id="创建通用存储回切网关-agent" tabindex="-1"><a class="header-anchor" href="#创建通用存储回切网关-agent"><span>创建通用存储回切网关 - Agent</span></a></h2>
<ol>
<li>使用下载的Hyperdoor镜像在源端生产环境创建虚拟机或物理机作为通用存储回切网关。</li>
<li>通用存储回切网关作为回切时的数据接收和最后回切时的恢复主机。</li>
<li>通用存储回切网关最小需要2C4G的计算资源配置；由于此主机为最后回切时的恢复主机，一般情况计算资源配置与回切主机一致即可。</li>
<li>通用存储回切网关的存储配置（硬盘数量与硬盘分配容量）应与回切主机一致。</li>
</ol>
<p><strong>配置示例：</strong></p>
<table>
<thead>
<tr>
<th>配置</th>
<th>回切主机</th>
<th>通用存储回切网关</th>
</tr>
</thead>
<tbody>
<tr>
<td>CPU</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>内存</td>
<td>8GB</td>
<td>8GB</td>
</tr>
<tr>
<td>系统盘分配容量</td>
<td>100GB</td>
<td>100GB</td>
</tr>
<tr>
<td>数据盘1分配容量</td>
<td>200GB</td>
<td>200GB</td>
</tr>
<tr>
<td>数据盘2分配容量</td>
<td>500GB</td>
<td>500GB</td>
</tr>
</tbody>
</table>
<h2 id="配置通用存储回切网关的ip地址-agent" tabindex="-1"><a class="header-anchor" href="#配置通用存储回切网关的ip地址-agent"><span>配置通用存储回切网关的IP地址 - Agent</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>默认已经在源端生产环境创建虚拟机/物理机作为通用存储回切网关。</p>
</div>
<h3 id="登录到通用存储回切网关" tabindex="-1"><a class="header-anchor" href="#登录到通用存储回切网关"><span>登录到通用存储回切网关</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>默认用户名：root<br>
默认密码：Acb@132.Inst</p>
</div>
<figure><img src="@source/zh/userguide/poc/images/configure-the-ip-address-for-the-failback-gateway-host---agent-1.png" alt="configure-the-ip-address-for-the-failback-gateway-host---agent-1.png" tabindex="0" loading="lazy"><figcaption>configure-the-ip-address-for-the-failback-gateway-host---agent-1.png</figcaption></figure>
<h3 id="手动配置网络" tabindex="-1"><a class="header-anchor" href="#手动配置网络"><span>手动配置网络</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Hyperdoor镜像系统默认网络配置为DHCP模式，如果您的网络支持DHCP，确认此虚拟机IP即可，无需进行以下操作；如果您的网络未使用DHCP需要手动配置虚拟机/物理机的网络。</p>
</div>
<h4 id="确认虚拟机网卡设备名称" tabindex="-1"><a class="header-anchor" href="#确认虚拟机网卡设备名称"><span>确认虚拟机网卡设备名称</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/zh/userguide/poc/images/configure-the-ip-address-for-the-failback-gateway-host---agent-2.png" alt="configure-the-ip-address-for-the-failback-gateway-host---agent-2.png" tabindex="0" loading="lazy"><figcaption>configure-the-ip-address-for-the-failback-gateway-host---agent-2.png</figcaption></figure>
<h4 id="清除网络配置信息" tabindex="-1"><a class="header-anchor" href="#清除网络配置信息"><span>清除网络配置信息</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> addr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> flush</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ens32</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> link</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ens32</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> down</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> link</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ens32</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> up</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>配置临时IP</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>配置为示例信息，请根据实际情况替换IP地址/掩码 [192.168.x.x/20] 和网关地址 [192.168.0.1]</p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> addr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 192.168.x.x/20</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ens32</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> route</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> via</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 192.168.0.1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ens32</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="查看网络配置" tabindex="-1"><a class="header-anchor" href="#查看网络配置"><span>查看网络配置</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/zh/userguide/poc/images/configure-the-ip-address-for-the-failback-gateway-host---agent-3.png" alt="configure-the-ip-address-for-the-failback-gateway-host---agent-3.png" tabindex="0" loading="lazy"><figcaption>configure-the-ip-address-for-the-failback-gateway-host---agent-3.png</figcaption></figure>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> route</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/zh/userguide/poc/images/configure-the-ip-address-for-the-failback-gateway-host---agent-4.png" alt="configure-the-ip-address-for-the-failback-gateway-host---agent-4.png" tabindex="0" loading="lazy"><figcaption>configure-the-ip-address-for-the-failback-gateway-host---agent-4.png</figcaption></figure>
<h2 id="内网vpn访问-测试通用存储回切网关到容灾目标云内网obs网络的连通性-agent" tabindex="-1"><a class="header-anchor" href="#内网vpn访问-测试通用存储回切网关到容灾目标云内网obs网络的连通性-agent"><span>（内网VPN访问）测试通用存储回切网关到容灾目标云内网OBS网络的连通性 - Agent</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>以下操作示例使用华为云。请根据您所使用的容灾目标云信息进行测试</p>
</div>
<h3 id="登录通用存储回切网关" tabindex="-1"><a class="header-anchor" href="#登录通用存储回切网关"><span>登录通用存储回切网关</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>默认用户名：root<br>
默认密码：Acb@132.Inst</p>
</div>
<figure><img src="@source/zh/userguide/poc/images/test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-1.png" alt="test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-1.png" tabindex="0" loading="lazy"><figcaption>test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-1.png</figcaption></figure>
<h3 id="私有dns连接测试" tabindex="-1"><a class="header-anchor" href="#私有dns连接测试"><span>私有DNS连接测试</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>请参阅以下文档，查找基于所用对象存储区域的专用NDS（网络域服务）地址。<br>
参考文档： <a href="https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html</a></p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100.125.1.250</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<figure><img src="@source/zh/userguide/poc/images/test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-2.png" alt="test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-2.png" tabindex="0" loading="lazy"><figcaption>test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-2.png</figcaption></figure>
<h3 id="对象存储连接测试" tabindex="-1"><a class="header-anchor" href="#对象存储连接测试"><span>对象存储连接测试</span></a></h3>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Success Response:</p>
<figure><img src="@source/zh/userguide/poc/images/test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-3.png" alt="test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-3.png" tabindex="0" loading="lazy"><figcaption>test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-3.png</figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>该命令主要用于测试华为云对象存储桶所在区域的可访问性。目前，测试的OBS域适用于华为云新加坡地区。如果您需要在不同的地区进行测试，请参阅华为云官方文档，找到相应的Endpoint域名。<br>
文档链接:  <a href="https://developer.huaweicloud.com/intl/en-us/endpoint?OBS" target="_blank" rel="noopener noreferrer">https://developer.huaweicloud.com/intl/en-us/endpoint?OBS</a></p>
</div>
</div></template>


