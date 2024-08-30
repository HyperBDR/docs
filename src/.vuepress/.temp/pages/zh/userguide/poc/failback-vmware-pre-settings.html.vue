<template><div><h1 id="vmware目标端预设置" tabindex="-1"><a class="header-anchor" href="#vmware目标端预设置"><span>VMware目标端预设置</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#下载回切过渡主机镜像文件-iso-并上传至vmware存储">下载回切过渡主机镜像文件（ISO）并上传至VMware存储</router-link><ul><li><router-link to="#下载回切过渡主机镜像文件-iso">下载回切过渡主机镜像文件（ISO）</router-link></li><li><router-link to="#将回切过渡主机镜像文件-iso-上传至vmware存储">将回切过渡主机镜像文件（ISO）上传至VMware存储</router-link></li></ul></li><li><router-link to="#使用回切过渡主机镜像创建vmware虚拟机作为回切过渡主机">使用回切过渡主机镜像创建VMware虚拟机作为回切过渡主机</router-link><ul><li><router-link to="#创建回切过渡主机">创建回切过渡主机</router-link></li><li><router-link to="#新虚拟机配置">新虚拟机配置</router-link></li><li><router-link to="#启动虚拟机">启动虚拟机</router-link></li></ul></li><li><router-link to="#配置回切过渡主机虚拟机的ip地址">配置回切过渡主机虚拟机的IP地址</router-link><ul><li><router-link to="#登录vmware-vsphere-client控制台-1">登录VMware vSphere Client控制台</router-link></li><li><router-link to="#控制台访问回切过渡主机虚拟机">控制台访问回切过渡主机虚拟机</router-link></li><li><router-link to="#登录系统">登录系统</router-link></li><li><router-link to="#manually-configure-the-network">Manually configure the network</router-link></li></ul></li><li><router-link to="#vcenter创建用户及开放权限-主机回切">vCenter创建用户及开放权限 （主机回切）</router-link><ul><li><router-link to="#vmware用户权限-主机回切">VMware用户权限（主机回切）</router-link></li><li><router-link to="#vmware用户所需权限-主机回切">VMware用户所需权限（主机回切）</router-link></li></ul></li><li><router-link to="#vcenter-esxi网络策略开通-主机回切">vCenter/ESXi网络策略开通 (主机回切)</router-link></li><li><router-link to="#内网vpn访问-配置vmware生产端回切恢复主机所在网络使用容灾目标云内网dns解析">（内网VPN访问）配置VMware生产端回切恢复主机所在网络使用容灾目标云内网DNS解析</router-link></li><li><router-link to="#内网vpn访问-测试vmware生产端回切恢复主机所在网络到内网obs网络的连通性">（内网VPN访问）测试VMware生产端回切恢复主机所在网络到内网OBS网络的连通性</router-link><ul><li><router-link to="#准备测试主机并登录">准备测试主机并登录</router-link></li><li><router-link to="#私有dns连接测试">私有DNS连接测试</router-link></li><li><router-link to="#对象存储连接测试">对象存储连接测试</router-link></li></ul></li><li><router-link to="#验证hyperbdr添加的对象存储状态-主机回切">验证HyperBDR添加的对象存储状态（主机回切）</router-link><ul><li><router-link to="#登录hyperbdr">登录HyperBDR</router-link></li><li><router-link to="#检查对象存储状态">检查对象存储状态</router-link></li></ul></li><li><router-link to="#添加源端生产vcenter-esxi主机为对象存储回切网关">添加源端生产vCenter/ESXi主机为对象存储回切网关</router-link><ul><li><router-link to="#登录hyperbdr-1">登录HyperBDR</router-link></li><li><router-link to="#添加回切恢复网关">添加回切恢复网关</router-link></li></ul></li></ul></nav>
<h2 id="下载回切过渡主机镜像文件-iso-并上传至vmware存储" tabindex="-1"><a class="header-anchor" href="#下载回切过渡主机镜像文件-iso-并上传至vmware存储"><span>下载回切过渡主机镜像文件（ISO）并上传至VMware存储</span></a></h2>
<h3 id="下载回切过渡主机镜像文件-iso" tabindex="-1"><a class="header-anchor" href="#下载回切过渡主机镜像文件-iso"><span>下载回切过渡主机镜像文件（ISO）</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>请在文档中的下载地址下载ISO镜像。<br>
文档链接： <a href="https://docs.oneprocloud.com/zh/userguide/poc/failback-hyperbdr-pre-settings.html#%E4%B8%8B%E8%BD%BD%E9%80%9A%E7%94%A8%E5%AD%98%E5%82%A8%E5%9B%9E%E5%88%87%E7%BD%91%E5%85%B3%E6%89%80%E4%BD%BF%E7%94%A8%E7%9A%84hyperdoor%E9%95%9C%E5%83%8F" target="_blank" rel="noopener noreferrer">https://docs.oneprocloud.com/userguide/poc/failback-hyperbdr-pre-settings.html#download-iso-format-image</a></p>
</div>
<h3 id="将回切过渡主机镜像文件-iso-上传至vmware存储" tabindex="-1"><a class="header-anchor" href="#将回切过渡主机镜像文件-iso-上传至vmware存储"><span>将回切过渡主机镜像文件（ISO）上传至VMware存储</span></a></h3>
<h4 id="登录vmware-vsphere-client控制台" tabindex="-1"><a class="header-anchor" href="#登录vmware-vsphere-client控制台"><span>登录VMware vSphere Client控制台</span></a></h4>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-8.png" alt="complete-doc-for-block-storage-failback-8.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-8.png</figcaption></figure>
<h4 id="选择-存储" tabindex="-1"><a class="header-anchor" href="#选择-存储"><span>选择 [存储]</span></a></h4>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-9.png" alt="complete-doc-for-block-storage-failback-9.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-9.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-10.png" alt="complete-doc-for-block-storage-failback-10.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-10.png</figcaption></figure>
<h4 id="左侧选择可用的-存储池-点击-文件-选择镜像的存放路径后点击-上载文件" tabindex="-1"><a class="header-anchor" href="#左侧选择可用的-存储池-点击-文件-选择镜像的存放路径后点击-上载文件"><span>左侧选择可用的[存储池]，点击[文件]，选择镜像的存放路径后点击[上载文件]</span></a></h4>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-11.png" alt="complete-doc-for-block-storage-failback-11.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-11.png</figcaption></figure>
<h4 id="选择下载的回切过渡主机镜像文件-iso-等待上传镜像完成" tabindex="-1"><a class="header-anchor" href="#选择下载的回切过渡主机镜像文件-iso-等待上传镜像完成"><span>选择下载的回切过渡主机镜像文件（iso），等待上传镜像完成</span></a></h4>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-12.png" alt="complete-doc-for-block-storage-failback-12.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-12.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-13.png" alt="complete-doc-for-block-storage-failback-13.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-13.png</figcaption></figure>
<h2 id="使用回切过渡主机镜像创建vmware虚拟机作为回切过渡主机" tabindex="-1"><a class="header-anchor" href="#使用回切过渡主机镜像创建vmware虚拟机作为回切过渡主机"><span>使用回切过渡主机镜像创建VMware虚拟机作为回切过渡主机</span></a></h2>
<h3 id="创建回切过渡主机" tabindex="-1"><a class="header-anchor" href="#创建回切过渡主机"><span>创建回切过渡主机</span></a></h3>
<p>选择你的ESXi或数据中心，右击鼠标，选择[新建虚拟机]</p>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-14.png" alt="complete-doc-for-block-storage-failback-14.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-14.png</figcaption></figure>
<h3 id="新虚拟机配置" tabindex="-1"><a class="header-anchor" href="#新虚拟机配置"><span>新虚拟机配置</span></a></h3>
<p><strong>Step 1: 创建新虚拟机，配置完成后点击[NEXT]</strong></p>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-15.png" alt="complete-doc-for-block-storage-failback-15.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-15.png</figcaption></figure>
<p><strong>Step 2: 填写虚拟机名称，选择可用集群，配置完成后点击[NEXT]</strong></p>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-16.png" alt="complete-doc-for-block-storage-failback-16.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-16.png</figcaption></figure>
<p><strong>Step 3: 选择[计算资源] ，配置完成后点击[NEXT]</strong></p>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-17.png" alt="complete-doc-for-block-storage-failback-17.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-17.png</figcaption></figure>
<p><strong>Step: 选择[存储]，配置完成后点击[NEXT]</strong></p>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-18.png" alt="complete-doc-for-block-storage-failback-18.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-18.png</figcaption></figure>
<p><strong>Step 5: 选择兼容性，默认即可，配置完成后点击[NEXT]</strong></p>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-19.png" alt="complete-doc-for-block-storage-failback-19.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-19.png</figcaption></figure>
<p><strong>Step 6: 选择操作系统，操作系统系列使用[Linux] ，操作系统版本使用 [Other Linux（64-bit）]即可，配置完成后点击[NEXT]</strong></p>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-20.png" alt="complete-doc-for-block-storage-failback-20.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-20.png</figcaption></figure>
<p><strong>Step 7-1: 自定义硬件，配置CPU≥2，内存≥4GB</strong></p>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-21.png" alt="complete-doc-for-block-storage-failback-21.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-21.png</figcaption></figure>
<p><strong>Step 7-2: 自定义硬件，配置选择可用的网络</strong></p>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-22.png" alt="complete-doc-for-block-storage-failback-22.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-22.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-23.png" alt="complete-doc-for-block-storage-failback-23.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-23.png</figcaption></figure>
<p><strong>Step 7-3: 自定义硬件，配置系统盘和数据盘</strong></p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>回切过渡主机虚拟机的系统盘和数据盘需要与回切主机一致。</p>
</div>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-24.png" alt="complete-doc-for-block-storage-failback-24.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-24.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-25.png" alt="complete-doc-for-block-storage-failback-25.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-25.png</figcaption></figure>
<p><strong>Step 7-4: CD/DVD驱动配置，类型选择[数据存储ISO文件]，新窗口选择上传到存储的回切过渡主机镜像文件（ISO），并且勾选[打开电源时连接]选项；</strong></p>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-26.png" alt="complete-doc-for-block-storage-failback-26.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-26.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-27.png" alt="complete-doc-for-block-storage-failback-27.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-27.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-28.png" alt="complete-doc-for-block-storage-failback-28.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-28.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-29.png" alt="complete-doc-for-block-storage-failback-29.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-29.png</figcaption></figure>
<p><strong>Step 7-5: 回切过渡主机虚拟机的磁盘SCSI控制器和VMware源机器的SCSI控制器相同。其他配置默认即可，配置完成后点击[NEXT]</strong></p>
<figure><img src="@source/zh/userguide/poc/images/vmware-scsi-controller-zh-1.png" alt="vmware-scsi-controller-zh-1.png" tabindex="0" loading="lazy"><figcaption>vmware-scsi-controller-zh-1.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/vmware-scsi-controller-zh-2.png" alt="vmware-scsi-controller-zh-2.png" tabindex="0" loading="lazy"><figcaption>vmware-scsi-controller-zh-2.png</figcaption></figure>
<p><strong>Step 8: 确认信息无误后，单击[FINISH]启动创建</strong></p>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-30.png" alt="complete-doc-for-block-storage-failback-30.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-30.png</figcaption></figure>
<h3 id="启动虚拟机" tabindex="-1"><a class="header-anchor" href="#启动虚拟机"><span>启动虚拟机</span></a></h3>
<p>右键点击刚刚创建的虚拟机，选择 [启动] &gt; [打开电源] 。</p>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-31.png" alt="complete-doc-for-block-storage-failback-31.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-31.png</figcaption></figure>
<p>打开虚拟机控制台，查看虚拟机启动状态。</p>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-32.png" alt="complete-doc-for-block-storage-failback-32.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-32.png</figcaption></figure>
<p>虚拟机系统正常启动。</p>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-33.png" alt="complete-doc-for-block-storage-failback-33.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-33.png</figcaption></figure>
<h2 id="配置回切过渡主机虚拟机的ip地址" tabindex="-1"><a class="header-anchor" href="#配置回切过渡主机虚拟机的ip地址"><span>配置回切过渡主机虚拟机的IP地址</span></a></h2>
<h3 id="登录vmware-vsphere-client控制台-1" tabindex="-1"><a class="header-anchor" href="#登录vmware-vsphere-client控制台-1"><span>登录VMware vSphere Client控制台</span></a></h3>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-34.png" alt="complete-doc-for-block-storage-failback-34.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-34.png</figcaption></figure>
<h3 id="控制台访问回切过渡主机虚拟机" tabindex="-1"><a class="header-anchor" href="#控制台访问回切过渡主机虚拟机"><span>控制台访问回切过渡主机虚拟机</span></a></h3>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-35.png" alt="complete-doc-for-block-storage-failback-35.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-35.png</figcaption></figure>
<h3 id="登录系统" tabindex="-1"><a class="header-anchor" href="#登录系统"><span>登录系统</span></a></h3>
<blockquote>
<p>默认用户名: root<br>
默认密码: Acb@132.Inst</p>
</blockquote>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-36.png" alt="complete-doc-for-block-storage-failback-36.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-36.png</figcaption></figure>
<h3 id="manually-configure-the-network" tabindex="-1"><a class="header-anchor" href="#manually-configure-the-network"><span>Manually configure the network</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>The Hyperdoor image is configured with default DHCP mode for networking. If the VMware network you selected supports DHCP, confirm the virtual machine's IP and proceed. If the VMware network does not use DHCP, manual configuration of the virtual machine's network is required</p>
</div>
<h4 id="确认虚拟机的网络适配器设备名称" tabindex="-1"><a class="header-anchor" href="#确认虚拟机的网络适配器设备名称"><span>确认虚拟机的网络适配器设备名称</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-37.png" alt="complete-doc-for-block-storage-failback-37.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-37.png</figcaption></figure>
<h4 id="清除网络配置信息" tabindex="-1"><a class="header-anchor" href="#清除网络配置信息"><span>清除网络配置信息</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> addr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> flush</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> eth0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>配置临时IP</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>配置为示例信息，请根据实际情况替换IP地址/掩码 [192.168.x.x/20] 和网关地址 [192.168.0.1]</p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> addr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 192.168.x.x/20</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ens160</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> route</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> via</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 192.168.0.1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="查看网络配置" tabindex="-1"><a class="header-anchor" href="#查看网络配置"><span>查看网络配置</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-38.png" alt="complete-doc-for-block-storage-failback-38.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-38.png</figcaption></figure>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> route</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-39.png" alt="complete-doc-for-block-storage-failback-39.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-39.png</figcaption></figure>
<h2 id="vcenter创建用户及开放权限-主机回切" tabindex="-1"><a class="header-anchor" href="#vcenter创建用户及开放权限-主机回切"><span>vCenter创建用户及开放权限 （主机回切）</span></a></h2>
<h3 id="vmware用户权限-主机回切" tabindex="-1"><a class="header-anchor" href="#vmware用户权限-主机回切"><span>VMware用户权限（主机回切）</span></a></h3>
<p>准备用于回切的VMware用户身份验证信息，并确保该用户具有必要的权限。</p>
<p>有关配置VMware用户权限的信息，请参阅以下文档。</p>
<p>文档链接： <a href="https://docs.oneprocloud.com/userguide/poc/vmware-pre-settings.html#vcenter-permission-open-settings-steps" target="_blank" rel="noopener noreferrer">https://docs.oneprocloud.com/userguide/poc/vmware-pre-settings.html#vcenter-permission-open-settings-steps</a></p>
<h3 id="vmware用户所需权限-主机回切" tabindex="-1"><a class="header-anchor" href="#vmware用户所需权限-主机回切"><span>VMware用户所需权限（主机回切）</span></a></h3>
<table>
<thead>
<tr>
<th><strong>权限类型</strong></th>
<th><strong>权限</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>数据存储</td>
<td>低级别文件操作</td>
</tr>
<tr>
<td></td>
<td>分配空间</td>
</tr>
<tr>
<td>网络</td>
<td>分配网络</td>
</tr>
<tr>
<td>资源</td>
<td>将虚拟机分配给资源池</td>
</tr>
<tr>
<td>vApp</td>
<td>导入</td>
</tr>
<tr>
<td>虚拟机</td>
<td><strong>交互</strong></td>
</tr>
<tr>
<td></td>
<td>关闭电源</td>
</tr>
<tr>
<td></td>
<td>打开电源</td>
</tr>
<tr>
<td></td>
<td>重置</td>
</tr>
<tr>
<td></td>
<td><strong>客户机操作</strong></td>
</tr>
<tr>
<td></td>
<td>客户机操作查询</td>
</tr>
<tr>
<td></td>
<td>客户机操作程序执行</td>
</tr>
<tr>
<td></td>
<td><strong>更改配置</strong></td>
</tr>
<tr>
<td></td>
<td>更改 CPU 数目</td>
</tr>
<tr>
<td></td>
<td>更改内存</td>
</tr>
<tr>
<td></td>
<td>更改设置</td>
</tr>
<tr>
<td></td>
<td>添加或移除设备</td>
</tr>
<tr>
<td></td>
<td>添加新磁盘</td>
</tr>
<tr>
<td></td>
<td>添加现有磁盘</td>
</tr>
<tr>
<td></td>
<td>移除磁盘</td>
</tr>
<tr>
<td></td>
<td>高级配置</td>
</tr>
<tr>
<td></td>
<td><strong>编辑清单</strong></td>
</tr>
<tr>
<td></td>
<td>从现有项创建</td>
</tr>
<tr>
<td></td>
<td>移除</td>
</tr>
<tr>
<td></td>
<td><strong>置备</strong></td>
</tr>
<tr>
<td></td>
<td>克隆虚拟机</td>
</tr>
</tbody>
</table>
<h2 id="vcenter-esxi网络策略开通-主机回切" tabindex="-1"><a class="header-anchor" href="#vcenter-esxi网络策略开通-主机回切"><span>vCenter/ESXi网络策略开通 (主机回切)</span></a></h2>
<ol>
<li>HyperBDR节点主机需要正常访问vCenter 443端口。</li>
<li>HyperBDR节点主机需要正常访问vCenter管理的所有ESXi 443端口。</li>
<li>VMware业务网络虚拟机（回切恢复虚拟机）需要正常访问对象存储的443端口。</li>
<li>HyperBDR节点主机需要正常访问VMware业务网络虚拟机（回切恢复虚拟机）的10729端口。</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>HyperBDR节点主机需要访问vCenter API接口进行认证，通过调用容灾生产站点vCenter/ESXi接口在VMware业务网络创建回切恢复虚拟机，并进行管理，同时自动创建回切恢复虚拟机通过访问华为云对象存储的443端口来获取数据，进行回切恢复。</p>
</div>
<h2 id="内网vpn访问-配置vmware生产端回切恢复主机所在网络使用容灾目标云内网dns解析" tabindex="-1"><a class="header-anchor" href="#内网vpn访问-配置vmware生产端回切恢复主机所在网络使用容灾目标云内网dns解析"><span>（内网VPN访问）配置VMware生产端回切恢复主机所在网络使用容灾目标云内网DNS解析</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果在对容灾目标云的灾难恢复过程中，已经配置容灾目标云内网OBS VPC Endpoint服务解析地址，则无需重复配置。</p>
</div>
<p>如果你的容灾环境是通过华为云VPN与生产站点内网互联，VPC Endpont服务创建之后，需要在生产站点Agent主机所在网络增加华为云内网OBS VPC Endpoint服务解析地址。</p>
<p>参考文档链接: <a href="https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#option-2-intranet-vpn-access-configure-huawei-cloud-intranet-dns-address-for-the-network-device-where-the-agent-host-reside" target="_blank" rel="noopener noreferrer">https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#option-2-intranet-vpn-access-configure-huawei-cloud-intranet-dns-address-for-the-network-device-where-the-agent-host-reside</a></p>
<h2 id="内网vpn访问-测试vmware生产端回切恢复主机所在网络到内网obs网络的连通性" tabindex="-1"><a class="header-anchor" href="#内网vpn访问-测试vmware生产端回切恢复主机所在网络到内网obs网络的连通性"><span>（内网VPN访问）测试VMware生产端回切恢复主机所在网络到内网OBS网络的连通性</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>使用华为云作为测试示例</p>
</div>
<h3 id="准备测试主机并登录" tabindex="-1"><a class="header-anchor" href="#准备测试主机并登录"><span>准备测试主机并登录</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>测试主机所在网络需要与回切恢复主机所在的网络一致。</p>
</div>
<h3 id="私有dns连接测试" tabindex="-1"><a class="header-anchor" href="#私有dns连接测试"><span>私有DNS连接测试</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>请参阅以下文档，查找基于所用对象存储区域的专用NDS（网络域服务）地址。<br>
参考文档： <a href="https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html</a></p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100.125.1.250</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<figure><img src="@source/zh/userguide/poc/images/docs-of-object-storage-host-failback-5.png" alt="docs-of-object-storage-host-failback-5.png" tabindex="0" loading="lazy"><figcaption>docs-of-object-storage-host-failback-5.png</figcaption></figure>
<h3 id="对象存储连接测试" tabindex="-1"><a class="header-anchor" href="#对象存储连接测试"><span>对象存储连接测试</span></a></h3>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<figure><img src="@source/zh/userguide/poc/images/docs-of-object-storage-host-failback-6.png" alt="docs-of-object-storage-host-failback-6.png" tabindex="0" loading="lazy"><figcaption>docs-of-object-storage-host-failback-6.png</figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>该命令主要用于测试华为云对象存储桶的可访问性。目前，测试的OBS域适用于华为云新加坡地区。如果您需要在不同的地区进行测试，请参阅华为云官方文档，找到相应的Endpoint域名。<br>
文档链接： <a href="https://developer.huaweicloud.com/intl/en-us/endpoint?OBS" target="_blank" rel="noopener noreferrer">https://developer.huaweicloud.com/intl/en-us/endpoint?OBS</a></p>
</div>
<h2 id="验证hyperbdr添加的对象存储状态-主机回切" tabindex="-1"><a class="header-anchor" href="#验证hyperbdr添加的对象存储状态-主机回切"><span>验证HyperBDR添加的对象存储状态（主机回切）</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>默认已完成HyperBDR环境的部署。</p>
</div>
<h3 id="登录hyperbdr" tabindex="-1"><a class="header-anchor" href="#登录hyperbdr"><span>登录HyperBDR</span></a></h3>
<figure><img src="@source/zh/userguide/poc/images/docs-of-object-storage-host-failback-7.png" alt="docs-of-object-storage-host-failback-7.png" tabindex="0" loading="lazy"><figcaption>docs-of-object-storage-host-failback-7.png</figcaption></figure>
<h3 id="检查对象存储状态" tabindex="-1"><a class="header-anchor" href="#检查对象存储状态"><span>检查对象存储状态</span></a></h3>
<p>选择 [<strong>配置管理</strong>] &gt; [<strong>对象存储</strong>] &gt; [<strong>回切</strong>], 可以看到您添加的 [<strong>对象存储</strong>] ，确认 [<strong>对象存储</strong>] 的健康状态为 [<strong>在线</strong>] 即可。</p>
<figure><img src="@source/zh/userguide/poc/images/docs-of-object-storage-host-failback-8.png" alt="docs-of-object-storage-host-failback-8.png" tabindex="0" loading="lazy"><figcaption>docs-of-object-storage-host-failback-8.png</figcaption></figure>
<h2 id="添加源端生产vcenter-esxi主机为对象存储回切网关" tabindex="-1"><a class="header-anchor" href="#添加源端生产vcenter-esxi主机为对象存储回切网关"><span>添加源端生产vCenter/ESXi主机为对象存储回切网关</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>默认已完成HyperBDR环境的部署。</p>
</div>
<h3 id="登录hyperbdr-1" tabindex="-1"><a class="header-anchor" href="#登录hyperbdr-1"><span>登录HyperBDR</span></a></h3>
<figure><img src="@source/zh/userguide/poc/images/docs-of-object-storage-host-failback-7.png" alt="add-the-vcenteresxi-as-an-object-dr-gatewayfailback-1.png" tabindex="0" loading="lazy"><figcaption>add-the-vcenteresxi-as-an-object-dr-gatewayfailback-1.png</figcaption></figure>
<h3 id="添加回切恢复网关" tabindex="-1"><a class="header-anchor" href="#添加回切恢复网关"><span>添加回切恢复网关</span></a></h3>
<p><strong>Step 1.</strong> 上方导航栏中选择 &quot;配置管理&quot;，左侧菜单栏选择&quot;对象存储恢复网关&quot;，在&quot;回切&quot;标签页中点击&quot;添加&quot;。</p>
<figure><img src="@source/zh/userguide/poc/images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-2.png" alt="add-the-vcenteresxi-as-an-object-dr-gatewayfailback-2.png" tabindex="0" loading="lazy"><figcaption>add-the-vcenteresxi-as-an-object-dr-gatewayfailback-2.png</figcaption></figure>
<p><strong>Step 2.</strong> 在&quot;添加回切平台账号&quot;页面填写VMware平台鉴权信息，确认后点击&quot;下一步&quot;。</p>
<figure><img src="@source/zh/userguide/poc/images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-3.png" alt="add-the-vcenteresxi-as-an-object-dr-gatewayfailback-3.png" tabindex="0" loading="lazy"><figcaption>add-the-vcenteresxi-as-an-object-dr-gatewayfailback-3.png</figcaption></figure>
<p><strong>Step 3.</strong> 回切目标平台VMware的配置，确认后点击&quot;下一步&quot;。</p>
<figure><img src="@source/zh/userguide/poc/images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-4.png" alt="add-the-vcenteresxi-as-an-object-dr-gatewayfailback-4.png" tabindex="0" loading="lazy"><figcaption>add-the-vcenteresxi-as-an-object-dr-gatewayfailback-4.png</figcaption></figure>
<p><strong>Step 4.</strong> &quot;驱动修复&quot;选项默认即可。</p>
<figure><img src="@source/zh/userguide/poc/images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-5.png" alt="add-the-vcenteresxi-as-an-object-dr-gatewayfailback-5.png" tabindex="0" loading="lazy"><figcaption>add-the-vcenteresxi-as-an-object-dr-gatewayfailback-5.png</figcaption></figure>
<p><strong>Step 5.</strong> 对象存储恢复网关添加成功。</p>
<figure><img src="@source/zh/userguide/poc/images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-6.png" alt="add-the-vcenteresxi-as-an-object-dr-gatewayfailback-6.png" tabindex="0" loading="lazy"><figcaption>add-the-vcenteresxi-as-an-object-dr-gatewayfailback-6.png</figcaption></figure>
</div></template>


