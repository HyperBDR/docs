<template><div><h1 id="agent主机源端预设置" tabindex="-1"><a class="header-anchor" href="#agent主机源端预设置"><span>Agent主机源端预设置</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#配置待容灾主机时间同步服务">配置待容灾主机时间同步服务</router-link><ul><li><router-link to="#windows">Windows</router-link></li><li><router-link to="#linux">Linux</router-link></li></ul></li><li><router-link to="#验证源主机时间是否与utc同步">验证源主机时间是否与UTC同步</router-link><ul><li><router-link to="#windows系统时间查看">Windows系统时间查看</router-link></li><li><router-link to="#linux系统时间查看">Linux系统时间查看</router-link></li><li><router-link to="#查看utc网络时间">查看UTC网络时间：</router-link></li></ul></li><li><router-link to="#容灾主机初步调研">容灾主机初步调研</router-link><ul><li><router-link to="#windows操作系统版本获取">Windows操作系统版本获取</router-link></li><li><router-link to="#linux操作系统版本获取">Linux操作系统版本获取</router-link></li><li><router-link to="#检查主机是否支持agent容灾">检查主机是否支持Agent容灾</router-link></li><li><router-link to="#agent支持列表">Agent支持列表</router-link></li></ul></li><li><router-link to="#源端linux主机安装agent">源端Linux主机安装Agent</router-link><ul><li><router-link to="#登录到hyperbdr容灾平台">登录到HyperBDR容灾平台</router-link></li><li><router-link to="#复制agent安装命令">复制Agent安装命令</router-link></li><li><router-link to="#在源端主机里执行安装命令">在源端主机里执行安装命令</router-link></li></ul></li><li><router-link to="#源端windows主机执行安装agent">源端Windows主机执行安装Agent</router-link><ul><li><router-link to="#安装包下载到源端主机系统">安装包下载到源端主机系统</router-link></li><li><router-link to="#安装包解压缩并进行安装">安装包解压缩并进行安装</router-link></li><li><router-link to="#启动windows-agent服务">启动Windows Agent服务</router-link></li></ul></li><li><router-link to="#验证源端主机是否注册成功">验证源端主机是否注册成功</router-link><ul><li><router-link to="#登录容灾平台">登录容灾平台</router-link></li><li><router-link to="#在容灾主界面查看主机">在容灾主界面查看主机</router-link></li></ul></li><li><router-link to="#选项一-公网访问-测试agent主机到华为云obs公网网络连通性">(选项一：公网访问)测试Agent主机到华为云OBS公网网络连通性</router-link><ul><li><router-link to="#windows-1">Windows</router-link></li><li><router-link to="#linux-1">Linux</router-link></li></ul></li><li><router-link to="#选项二-内网vpn访问-测试agent主机到华为云obs内网网络连通性">(选项二：内网VPN访问)测试Agent主机到华为云OBS内网网络连通性</router-link><ul><li><router-link to="#windows机器">Windows机器</router-link></li><li><router-link to="#linux主机">Linux主机</router-link></li></ul></li><li><router-link to="#选项一-公网访问-测试源端主机到hyperbdr的网络连通性">(选项一：公网访问)测试源端主机到HyperBDR的网络连通性</router-link><ul><li><router-link to="#windows主机">Windows主机</router-link></li><li><router-link to="#linux-主机">Linux 主机</router-link></li></ul></li><li><router-link to="#选项二-内网vpn访问-测试源端主机到hyperbdr的网络连通性">(选项二：内网VPN访问)测试源端主机到HyperBDR的网络连通性</router-link><ul><li><router-link to="#windows-主机">Windows 主机</router-link></li><li><router-link to="#linux-主机-1">Linux 主机</router-link></li></ul></li><li><router-link to="#源端windows主机防病毒软件检查与措施">源端Windows主机防病毒软件检查与措施</router-link><ul><li><router-link to="#检查主机是否正在运行防毒软件">检查主机是否正在运行防毒软件</router-link></li><li><router-link to="#防病毒软件在windows主机上运行时的应对措施">防病毒软件在Windows主机上运行时的应对措施</router-link></li></ul></li><li><router-link to="#选项二-内网vpn访问-agent主机所在的网络设备配置华为云内网dns地址">(选项二：内网VPN访问)Agent主机所在的网络设备配置华为云内网DNS地址</router-link><ul><li><router-link to="#配置防火墙或交换机等网络设备">配置防火墙或交换机等网络设备</router-link></li></ul></li></ul></nav>
<h2 id="配置待容灾主机时间同步服务" tabindex="-1"><a class="header-anchor" href="#配置待容灾主机时间同步服务"><span>配置待容灾主机时间同步服务</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>确保主机时间与网络时间保持同步</p>
</div>
<h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>示例操作系统: Windows Server 2012 R2</p>
</div>
<h4 id="使用windows系统时间工具进行配置" tabindex="-1"><a class="header-anchor" href="#使用windows系统时间工具进行配置"><span>使用Windows系统时间工具进行配置</span></a></h4>
<p>点击桌面 Windows 图标 &gt; 打开控制面板 &gt; 选择“日期和时间”进行配置。</p>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-1.png" alt="agent-pre-settings-1.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-1.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-2.png" alt="agent-pre-settings-2.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-2.png</figcaption></figure>
<h4 id="设置时间自动同步到internet" tabindex="-1"><a class="header-anchor" href="#设置时间自动同步到internet"><span>设置时间自动同步到Internet</span></a></h4>
<p>在“日期和时间”选项卡中，点击“Internet Time”， 点击“更改设置”。</p>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-3.png" alt="agent-pre-settings-3.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-3.png</figcaption></figure>
<p>勾选“与 Internet 时间服务器同步”选项，在“服务器”下拉菜单中选择一个时间服务器（例如，time.windows.com）。</p>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-4.png" alt="agent-pre-settings-4.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-4.png</figcaption></figure>
<p>点击“立即更新”测试连接，并等待确认。点击“确定”保存更改。</p>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-5.png" alt="agent-pre-settings-5.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-5.png</figcaption></figure>
<h4 id="设置自动同步到本地时间同步服务器" tabindex="-1"><a class="header-anchor" href="#设置自动同步到本地时间同步服务器"><span>设置自动同步到本地时间同步服务器</span></a></h4>
<p>如果你的主机在内网环境，需要将地址配置为您本地的时间同步服务器地址。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>其中&lt;ntp.server.ip.address&gt;是您的ntp服务器ip地址</p>
</div>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-6.png" alt="agent-pre-settings-6.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-6.png</figcaption></figure>
<p>点击“立即更新”按钮，等待与Internet时间服务器同步。</p>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-7.png" alt="agent-pre-settings-7.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-7.png</figcaption></figure>
<h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>示例操作系统: CentOS Linux release 7.5</p>
</div>
<h4 id="安装ntp" tabindex="-1"><a class="header-anchor" href="#安装ntp"><span>安装NTP</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [root@node ~]# yum install -y ntp</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动ntp服务" tabindex="-1"><a class="header-anchor" href="#启动ntp服务"><span>启动NTP服务</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@node ~]# systemctl start  ntpd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@node ~]# systemctl enable  ntpd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Created</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> symlink</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/systemd/system/multi-user.target.wants/ntpd.service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/lib/systemd/system/ntpd.service.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看ntp服务状态" tabindex="-1"><a class="header-anchor" href="#查看ntp服务状态"><span>查看NTP服务状态</span></a></h4>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改ntp-conf文件" tabindex="-1"><a class="header-anchor" href="#修改ntp-conf文件"><span>修改ntp.conf文件</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>请确保将 time.example.com 替换为你想要使用的实际NTP服务器地址。这个命令在修改后会直接保存文件，所以在执行前确保您对配置的修改没有问题。</p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 将以server开头的行注释掉。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 在文件的末尾添加新的NTP服务器地址。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# sudo sed -i -e </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'/^server/ s/^server/#&#x26;/'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> -e </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'$ a server time.example.com iburst'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /etc/ntp.conf</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重启ntp服务" tabindex="-1"><a class="header-anchor" href="#重启ntp服务"><span>重启NTP服务</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@node ~]# systemctl restart ntpd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="检查同步状态" tabindex="-1"><a class="header-anchor" href="#检查同步状态"><span>检查同步状态</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@node ~]# ntpq -p</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">     remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">           refid</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      st</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> when</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> poll</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> reach</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   delay</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   offset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  jitter</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==============================================================================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> 203.107.6.88</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    100.107.25.114</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> u</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   64</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   30.975</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  149.499</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   0.393</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证源主机时间是否与utc同步" tabindex="-1"><a class="header-anchor" href="#验证源主机时间是否与utc同步"><span>验证源主机时间是否与UTC同步</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>出于安全目的，对象存储服务会校验客户端与对象存储服务服务器的时间差，当该时间差大于15分钟时，对象存储服务会拒绝您的请求，从而出现此报错。</p>
</div>
<h3 id="windows系统时间查看" tabindex="-1"><a class="header-anchor" href="#windows系统时间查看"><span>Windows系统时间查看</span></a></h3>
<p>点击桌面 Windows 图标 &gt; 打开控制面板，选择“日期和时间”。</p>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-8.png" alt="agent-pre-settings-8.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-8.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-9.png" alt="agent-pre-settings-9.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-9.png</figcaption></figure>
<p>查看时间与时区</p>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-10.png" alt="agent-pre-settings-10.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-10.png</figcaption></figure>
<hr>
<h3 id="linux系统时间查看" tabindex="-1"><a class="header-anchor" href="#linux系统时间查看"><span>Linux系统时间查看</span></a></h3>
<ol>
<li><strong>打开终端:</strong>
<ul>
<li>使用终端应用，如Terminal。</li>
</ul>
</li>
<li><strong>执行命令查看当前系统时间：</strong></li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>date</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-11.png" alt="agent-pre-settings-11.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-11.png</figcaption></figure>
<ol start="3">
<li><strong>执行命令查看当前系统时区：</strong></li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>timedatectl</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-12.png" alt="agent-pre-settings-12.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-12.png</figcaption></figure>
<h3 id="查看utc网络时间" tabindex="-1"><a class="header-anchor" href="#查看utc网络时间"><span>查看UTC网络时间：</span></a></h3>
<ol>
<li><strong>确认源端主机的时区和时间。</strong></li>
<li><strong>网络查询标准UTC时间并与源端主机比对。</strong></li>
</ol>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-13.png" alt="agent-pre-settings-13.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-13.png</figcaption></figure>
<h2 id="容灾主机初步调研" tabindex="-1"><a class="header-anchor" href="#容灾主机初步调研"><span>容灾主机初步调研</span></a></h2>
<h3 id="windows操作系统版本获取" tabindex="-1"><a class="header-anchor" href="#windows操作系统版本获取"><span>Windows操作系统版本获取</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>示例操作系统：Microsoft Windows Server 2016 Datacenter</p>
</div>
<h4 id="控制面板方式获取" tabindex="-1"><a class="header-anchor" href="#控制面板方式获取"><span>控制面板方式获取</span></a></h4>
<p>打开 【控制面板】→【系统和安全】，系统获取相关信息。
<img src="@source/zh/userguide/poc/images/agent-pre-settings-14.png" alt="agent-pre-settings-14.png" loading="lazy"></p>
<h4 id="命令行方式获取" tabindex="-1"><a class="header-anchor" href="#命令行方式获取"><span>命令行方式获取</span></a></h4>
<p>登录Windows服务器，快捷键 Win + R 打开 CMP 窗口，执行以下命令：</p>
<div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">systeminfo</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-15.png" alt="agent-pre-settings-15.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-15.png</figcaption></figure>
<p>输出内容中，您可以查看OS名称。</p>
<blockquote>
<p><strong>主机名：</strong> NGINX-WEB<br>
<strong>OS名称：</strong> Microsoft Windows Server 2016 Datacenter</p>
</blockquote>
<h3 id="linux操作系统版本获取" tabindex="-1"><a class="header-anchor" href="#linux操作系统版本获取"><span>Linux操作系统版本获取</span></a></h3>
<blockquote>
<p>示例操作系统：CentOS 7.9</p>
</blockquote>
<p>运行以下命令，查看操作系统版本。</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/redhat-release</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>输出内容即为操作系统版本信息。</p>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-16.png" alt="agent-pre-settings-16.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-16.png</figcaption></figure>
<h3 id="检查主机是否支持agent容灾" tabindex="-1"><a class="header-anchor" href="#检查主机是否支持agent容灾"><span>检查主机是否支持Agent容灾</span></a></h3>
<p>检查源主机的操作系统和版本，并与Agent支持列表进行比较，判断灾备主机是否支持Agent容灾。</p>
<h3 id="agent支持列表" tabindex="-1"><a class="header-anchor" href="#agent支持列表"><span>Agent支持列表</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>【√】: 完整支持</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>目前Linux Agent 仅支持官方发布的Ubuntu LTS版本，对于其他基于Ubuntu的定制化版本，我们暂时不提供支持。<br>
如果生产环境中使用了定制化的Ubuntu版本，我们需要产品侧进行内部评估，并根据实际现场情况进行必要的定制化构建，一旦构建完成并通过了内部完整性测试，我们将会提供更新，以支持您的生产环境。</p>
</div>
<table>
<thead>
<tr>
<th style="text-align:center"><strong>操作系统</strong>[生产源端]</th>
<th style="text-align:center"><strong>版本</strong></th>
<th style="text-align:center"><strong>支持信息</strong></th>
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
<h2 id="源端linux主机安装agent" tabindex="-1"><a class="header-anchor" href="#源端linux主机安装agent"><span>源端Linux主机安装Agent</span></a></h2>
<h3 id="登录到hyperbdr容灾平台" tabindex="-1"><a class="header-anchor" href="#登录到hyperbdr容灾平台"><span>登录到HyperBDR容灾平台</span></a></h3>
<p>根据容灾平台的用户名和密码，即可登录容灾平台，进行容灾操作。
<img src="@source/zh/userguide/poc/images/agent-pre-settings-17.png" alt="agent-pre-settings-17.png" loading="lazy"></p>
<h3 id="复制agent安装命令" tabindex="-1"><a class="header-anchor" href="#复制agent安装命令"><span>复制Agent安装命令</span></a></h3>
<p>点击上方的“配置管理”，然后点击左侧“生产站点配置”，选择 Agent模式并点击。
<img src="@source/zh/userguide/poc/images/agent-pre-settings-18.png" alt="agent-pre-settings-18.png" loading="lazy"></p>
<p>在“Linux” 区域，点击“复制命令”
<img src="@source/zh/userguide/poc/images/agent-pre-settings-19.png" alt="agent-pre-settings-19.png" loading="lazy"></p>
<h3 id="在源端主机里执行安装命令" tabindex="-1"><a class="header-anchor" href="#在源端主机里执行安装命令"><span>在源端主机里执行安装命令</span></a></h3>
<p>登录源端主机，执行以下命令，即可成功安装Agent程序
<img src="@source/zh/userguide/poc/images/agent-pre-settings-20.png" alt="agent-pre-settings-20.png" loading="lazy"></p>
<h2 id="源端windows主机执行安装agent" tabindex="-1"><a class="header-anchor" href="#源端windows主机执行安装agent"><span>源端Windows主机执行安装Agent</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>默认HyperBDR容灾平台已安装完成。<br>
如果本地安装了杀毒软件，需要提前将Windows Agent软件添加到杀毒软件白名单中，使Agent程序能够正常运行。
为保证Windows Agent正常运行，主机上至少有1GB的可用内存。</p>
</div>
<p>打开任务管理器的性能标签，查看系统可用内存
<img src="@source/zh/userguide/poc/images/agent-pre-settings-21.png" alt="agent-pre-settings-21.png" loading="lazy"></p>
<h3 id="安装包下载到源端主机系统" tabindex="-1"><a class="header-anchor" href="#安装包下载到源端主机系统"><span>安装包下载到源端主机系统</span></a></h3>
<p>登录HyperBDR平台，进入 <strong>[配置管理]</strong> -&gt; <strong>[生产站点配置]</strong> -&gt; <strong>[Agent]</strong>, 下载ZIP文件：
<img src="@source/zh/userguide/poc/images/agent-pre-settings-22.png" alt="agent-pre-settings-22.png" loading="lazy"></p>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-23.png" alt="agent-pre-settings-23.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-23.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-24.png" alt="agent-pre-settings-24.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-24.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-25.png" alt="agent-pre-settings-25.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-25.png</figcaption></figure>
<h3 id="安装包解压缩并进行安装" tabindex="-1"><a class="header-anchor" href="#安装包解压缩并进行安装"><span>安装包解压缩并进行安装</span></a></h3>
<p>解压缩安装包到当前目录。
<img src="@source/zh/userguide/poc/images/agent-pre-settings-26.png" alt="agent-pre-settings-26.png" loading="lazy"></p>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-27.png" alt="agent-pre-settings-27.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-27.png</figcaption></figure>
<p>打开解压目录文件夹，右键点击Install.exe文件，以管理员权限运行此程序进行Windows Agent的安装。
<img src="@source/zh/userguide/poc/images/agent-pre-settings-28.png" alt="agent-pre-settings-28.png" loading="lazy"></p>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-29.png" alt="agent-pre-settings-29.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-29.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-30.png" alt="agent-pre-settings-30.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-30.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-31.png" alt="agent-pre-settings-31.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-31.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-32.png" alt="agent-pre-settings-32.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-32.png</figcaption></figure>
<p>Windows Agent安装完成。</p>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-33.png" alt="agent-pre-settings-33.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-33.png</figcaption></figure>
<h3 id="启动windows-agent服务" tabindex="-1"><a class="header-anchor" href="#启动windows-agent服务"><span>启动Windows Agent服务</span></a></h3>
<p>右键点击桌面的Windows Agent快捷程序，以管理员权限运行。</p>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-34.png" alt="agent-pre-settings-34.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-34.png</figcaption></figure>
<p>启动服务</p>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-35.png" alt="agent-pre-settings-35.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-35.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-36.png" alt="agent-pre-settings-36.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-36.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-37.png" alt="agent-pre-settings-37.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-37.png</figcaption></figure>
<p>服务启动正常</p>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-38.png" alt="agent-pre-settings-38.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-38.png</figcaption></figure>
<h2 id="验证源端主机是否注册成功" tabindex="-1"><a class="header-anchor" href="#验证源端主机是否注册成功"><span>验证源端主机是否注册成功</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>源端Linux主机安装Agent之后，会自动的注册到容灾平台。<br>
源端Windows主机安装并启动Agent之后，会自动注册到容灾平台。</p>
</div>
<h3 id="登录容灾平台" tabindex="-1"><a class="header-anchor" href="#登录容灾平台"><span>登录容灾平台</span></a></h3>
<p>根据容灾平台的用户名和密码，即可登录容灾平台，进行容灾操作。
<img src="@source/zh/userguide/poc/images/agent-pre-settings-39.png" alt="agent-pre-settings-39.png" loading="lazy"></p>
<h3 id="在容灾主界面查看主机" tabindex="-1"><a class="header-anchor" href="#在容灾主界面查看主机"><span>在容灾主界面查看主机</span></a></h3>
<p>登录HyperBDR容灾平台后，单击顶部菜单栏的“资源容灾”，在左侧菜单栏选择“主机容灾”，查看主机是否已注册，确保主机状态为“已注册”，健康状态为“正常”。
<img src="@source/zh/userguide/poc/images/agent-pre-settings-40.png" alt="agent-pre-settings-40.png" loading="lazy"></p>
<h2 id="选项一-公网访问-测试agent主机到华为云obs公网网络连通性" tabindex="-1"><a class="header-anchor" href="#选项一-公网访问-测试agent主机到华为云obs公网网络连通性"><span>(选项一：公网访问)测试Agent主机到华为云OBS公网网络连通性</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>在测试前确保你的源端主机可以访问互联网。</p>
</div>
<h3 id="windows-1" tabindex="-1"><a class="header-anchor" href="#windows-1"><span>Windows</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>使用Windows命令提示符(CMD)执行测试操作。</p>
</div>
<h4 id="公网dns连通性测试" tabindex="-1"><a class="header-anchor" href="#公网dns连通性测试"><span>公网DNS连通性测试</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 8.8.8.8</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回：</p>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-41.png" alt="agent-pre-settings-41.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-41.png</figcaption></figure>
<h4 id="华为对象存储连通性测试" tabindex="-1"><a class="header-anchor" href="#华为对象存储连通性测试"><span>华为对象存储连通性测试</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回：</p>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-42.png" alt="agent-pre-settings-42.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-42.png</figcaption></figure>
<h3 id="linux-1" tabindex="-1"><a class="header-anchor" href="#linux-1"><span>Linux</span></a></h3>
<h4 id="公网dns连通性测试-1" tabindex="-1"><a class="header-anchor" href="#公网dns连通性测试-1"><span>公网DNS连通性测试</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -c</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 4</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 8.8.8.8</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回：</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="华为对象存储连通性测试-1" tabindex="-1"><a class="header-anchor" href="#华为对象存储连通性测试-1"><span>华为对象存储连通性测试</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>&#x3C;?xml version="1.0" encoding="UTF-8" standalone="yes"?>&#x3C;Error>&#x3C;Code>AccessDenied&#x3C;/Code>&#x3C;Message>Anonymous access is forbidden for this operation&#x3C;/Message>&#x3C;RequestId>0000018C1F508F2F9012234EA17641CE&#x3C;/RequestId>&#x3C;HostId>Z9v+cC1sRnaWw6x0vi8pxxYA0YVnKxbYHUPAFpnxkX8sLV44u5b02Z+ailn2wCnR&#x3C;/HostId>&#x3C;/Error>#</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>该命令主要用于测试华为云对象存储桶的可访问性。目前测试的对象存储服务域为华为云新加坡区域。如果需要在其他地区进行测试，请参考华为云官方文档查找对应的Endpoint域名地址。<br>
参考链接： <a href="https://developer.huaweicloud.com/intl/en-us/endpoint?OBS" target="_blank" rel="noopener noreferrer">https://developer.huaweicloud.com/intl/en-us/endpoint?OBS</a></p>
</div>
<h2 id="选项二-内网vpn访问-测试agent主机到华为云obs内网网络连通性" tabindex="-1"><a class="header-anchor" href="#选项二-内网vpn访问-测试agent主机到华为云obs内网网络连通性"><span>(选项二：内网VPN访问)测试Agent主机到华为云OBS内网网络连通性</span></a></h2>
<h3 id="windows机器" tabindex="-1"><a class="header-anchor" href="#windows机器"><span>Windows机器</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>使用Windows命令提示符(CMD)执行测试操作。</p>
</div>
<h4 id="华为云私有dns连通性测试" tabindex="-1"><a class="header-anchor" href="#华为云私有dns连通性测试"><span>华为云私有DNS连通性测试</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>根据使用的对象存储区域，请参考以下文档查找私有NDS (Network Domain Service)地址。<br>
参考文档：<a href="https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html</a></p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100.125.1.250</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>成功返回：</p>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-43.png" alt="agent-pre-settings-43.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-43.png</figcaption></figure>
<h4 id="华为对象存储连通性测试-2" tabindex="-1"><a class="header-anchor" href="#华为对象存储连通性测试-2"><span>华为对象存储连通性测试</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回：</p>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-44.png" alt="agent-pre-settings-44.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-44.png</figcaption></figure>
<h3 id="linux主机" tabindex="-1"><a class="header-anchor" href="#linux主机"><span>Linux主机</span></a></h3>
<h4 id="检查对象存储endpoint" tabindex="-1"><a class="header-anchor" href="#检查对象存储endpoint"><span>检查对象存储Endpoint</span></a></h4>
<p>确认对象存储服务Endpoint返回内网ip地址。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ping obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>成功返回：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>PING obs.lz01.ap-southeast-3.myhuaweicloud.com (100.125.36.29) 56(84) bytes of data.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>华为云对象存储服务内部IP范围:100.125.xx。如果没有ICMP响应，则认为正常。</p>
</div>
<h4 id="华为对象存储连通性测试-3" tabindex="-1"><a class="header-anchor" href="#华为对象存储连通性测试-3"><span>华为对象存储连通性测试</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>curl https://obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>&#x3C;?xml version="1.0" encoding="UTF-8" standalone="yes"?>&#x3C;Error>&#x3C;Code>AccessDenied&#x3C;/Code>&#x3C;Message>Anonymous access is forbidden for this operation&#x3C;/Message>&#x3C;RequestId>0000018C1F508F2F9012234EA17641CE&#x3C;/RequestId>&#x3C;HostId>Z9v+cC1sRnaWw6x0vi8pxxYA0YVnKxbYHUPAFpnxkX8sLV44u5b02Z+ailn2wCnR&#x3C;/HostId>&#x3C;/Error>#</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>该命令主要用于测试华为云对象存储桶的可访问性。目前测试的对象存储服务域为华为云新加坡区域。如果需要在其他地区进行测试，请参考华为云官方文档查找对应的Endpoint域名地址。
参考链接： <a href="https://developer.huaweicloud.com/intl/en-us/endpoint?OBS" target="_blank" rel="noopener noreferrer">https://developer.huaweicloud.com/intl/en-us/endpoint?OBS</a></p>
</div>
<h2 id="选项一-公网访问-测试源端主机到hyperbdr的网络连通性" tabindex="-1"><a class="header-anchor" href="#选项一-公网访问-测试源端主机到hyperbdr的网络连通性"><span>(选项一：公网访问)测试源端主机到HyperBDR的网络连通性</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>该步骤需要在HyperBDR安装完成后进行测试。
测试HyperBDR访问端口10443和30080。</p>
</div>
<h3 id="windows主机" tabindex="-1"><a class="header-anchor" href="#windows主机"><span>Windows主机</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>使用Windows命令提示符(CMD)执行测试操作。</p>
</div>
<p>测试访问HyperBDR 10443和30080端口</p>
<p>执行命令:</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10443</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 公网</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果：如果有以下输入结果，并且结果中包含[debug1: Connection established.]信息，则表示网络连通性没问题。</p>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-45.png" alt="agent-pre-settings-45.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-45.png</figcaption></figure>
<p>执行命令:</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 30080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 公网</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-46.png" alt="agent-pre-settings-46.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-46.png</figcaption></figure>
<p>测试结果：如果有以下输入结果，并且结果中包含[debug1: Connection established.]信息，则表示网络连通性没问题。</p>
<h3 id="linux-主机" tabindex="-1"><a class="header-anchor" href="#linux-主机"><span>Linux 主机</span></a></h3>
<p>测试访问HyperBDR 10443和30080端口</p>
<p>执行命令：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10443</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 公网</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果：如果有以下输入结果，并且结果中包含[debug1: Connection established.]信息，则表示网络连通性没问题。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips 26 Jan 2017</span></span>
<span class="line"><span></span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span></span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span></span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Public IP> [&#x3C;HyperBDR Public IP>] port 10443.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 30080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 公网</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果：如果有以下输入结果，并且结果中包含[debug1: Connection established.]信息，则表示网络连通性没问题。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips 26 Jan 2017</span></span>
<span class="line"><span></span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span></span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span></span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Public IP> [&#x3C;HyperBDR Public IP>] port 30080.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选项二-内网vpn访问-测试源端主机到hyperbdr的网络连通性" tabindex="-1"><a class="header-anchor" href="#选项二-内网vpn访问-测试源端主机到hyperbdr的网络连通性"><span>(选项二：内网VPN访问)测试源端主机到HyperBDR的网络连通性</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>该步骤需要在HyperBDR安装完成后进行测试。
测试HyperBDR访问端口10443和30080。</p>
</div>
<h3 id="windows-主机" tabindex="-1"><a class="header-anchor" href="#windows-主机"><span>Windows 主机</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>使用Windows命令提示符(CMD)执行测试操作。</p>
</div>
<p>执行命令：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10443</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 内网</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果：如果有以下输入结果，并且结果中包含[debug1: Connection established.]信息，则表示网络连通性没问题。</p>
<figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-47.png" alt="agent-pre-settings-47.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-47.png</figcaption></figure>
<p>执行命令：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 30080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 内网</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/zh/userguide/poc/images/agent-pre-settings-48.png" alt="agent-pre-settings-48.png" tabindex="0" loading="lazy"><figcaption>agent-pre-settings-48.png</figcaption></figure>
<p>测试结果：如果有以下输入结果，并且结果中包含[debug1: Connection established.]信息，则表示网络连通性没问题。</p>
<h3 id="linux-主机-1" tabindex="-1"><a class="header-anchor" href="#linux-主机-1"><span>Linux 主机</span></a></h3>
<p>执行命令：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>ssh -v -p 10443 &#x3C;HyperBDR 内网 IP></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果：如果有以下输入结果，并且结果中包含[debug1: Connection established.]信息，则表示网络连通性没问题。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span></span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span></span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span></span></span>
<span class="line"><span>debug1: Connecting to &#x3C;HyperBDR Internal IP> [&#x3C;HyperBDR Internal IP>] port 10443.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>ssh -v -p 30080 &#x3C;HyperBDR 内网 IP></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果：如果有以下输入结果，并且结果中包含[debug1: Connection established.]信息，则表示网络连通性没问题。</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="源端windows主机防病毒软件检查与措施" tabindex="-1"><a class="header-anchor" href="#源端windows主机防病毒软件检查与措施"><span><strong>源端Windows主机防病毒软件检查与措施</strong></span></a></h2>
<h3 id="检查主机是否正在运行防毒软件" tabindex="-1"><a class="header-anchor" href="#检查主机是否正在运行防毒软件"><span>检查主机是否正在运行防毒软件</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果Windows主机本地有防毒软件正在运行，在安装和使用Windows Agent时相关程序和文件会被误认为木马、病毒以及危险文件等，导致Windows Agent不能正常使用。</p>
</div>
<p>在安装Windows Agent之前检查主机中是否运行防毒软件，并进行以下措施避免Windows Agent无法正常安装或运行的情况。</p>
<h4 id="如果您的主机正在运行卡巴斯基软件-请单击-这里" tabindex="-1"><a class="header-anchor" href="#如果您的主机正在运行卡巴斯基软件-请单击-这里"><span>如果您的主机正在运行卡巴斯基软件，请单击 <a href="https://docs.oneprocloud.com/userguide/faq/faq.html#kaspersky" target="_blank" rel="noopener noreferrer">这里</a>.</span></a></h4>
<h4 id="如果您的主机正在运行mcafee-请单击-这里" tabindex="-1"><a class="header-anchor" href="#如果您的主机正在运行mcafee-请单击-这里"><span>如果您的主机正在运行McAfee，请单击 <a href="https://docs.oneprocloud.com/userguide/faq/faq.html#mcafee" target="_blank" rel="noopener noreferrer">这里</a>.</span></a></h4>
<p>如果在您的主机上没有找到正在运行的杀毒软件，请继续浏览本文档的内容。</p>
<h3 id="防病毒软件在windows主机上运行时的应对措施" tabindex="-1"><a class="header-anchor" href="#防病毒软件在windows主机上运行时的应对措施"><span>防病毒软件在Windows主机上运行时的应对措施</span></a></h3>
<h4 id="选项1-加入防病毒软件白名单" tabindex="-1"><a class="header-anchor" href="#选项1-加入防病毒软件白名单"><span>选项1：加入防病毒软件白名单</span></a></h4>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>由于某些杀毒软件可能在后台运行，因此此方法可能无法完全避免杀毒软件引起的问题，从而导致Windows Agent无法正常工作。</p>
</div>
<ol>
<li>
<p><strong>关闭防病毒软件的保护特性。</strong></p>
</li>
<li>
<p><strong>安装Windows Agent(参考文档: <a href="https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-windows-host" target="_blank" rel="noopener noreferrer">安装 Windows Agent</a>).</strong></p>
</li>
<li>
<p><strong>将以下目录和文件加入防病毒软件白名单(默认安装路径)。</strong></p>
</li>
</ol>
<table>
<thead>
<tr>
<th><strong>列表</strong></th>
<th><strong>属性</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent</td>
<td>目录</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\hyper_exporter</td>
<td>目录</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\CollHostInfo.bat</td>
<td>文件</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\create_bcd.bat</td>
<td>文件</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\DiskSyncAgent.exe</td>
<td>文件</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\DiskSyncCtrl.exe</td>
<td>文件</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\ExecPro_in.exe</td>
<td>文件</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\ExecPro_un.exe</td>
<td>文件</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\hyper_exporter.exe</td>
<td>文件</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\Opcli.exe</td>
<td>文件</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\reg_service.bat</td>
<td>文件</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\reset.bat</td>
<td>文件</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\uninst.exe</td>
<td>文件</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\unreg_service.bat</td>
<td>文件</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\WindowsAgentCmd.bat</td>
<td>文件</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\hyper_exporter\hp_exporter_service.exe</td>
<td>文件</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\hyper_exporter\hyper_exporter.exe</td>
<td>文件</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\hyper_exporter\reg_service.bat</td>
<td>文件</td>
</tr>
<tr>
<td>C:\Program Files (x86)\DiskSync-Agent\hyper_exporter\unreg_service.bat</td>
<td>文件</td>
</tr>
</tbody>
</table>
<ol start="4">
<li><strong>开启防病毒软件的保护功能</strong></li>
</ol>
<p>在此过程中，如果防病毒软件提示以弹出窗口阻止windows Agent的安装和操作，或提示隔离文件，则需要手动进行“<strong>allow</strong>”或“<strong>restore</strong>”操作。</p>
<ol start="5">
<li><strong>启动Windows Agent服务(参考文档: <a href="https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#start-the-windows-agent-service" target="_blank" rel="noopener noreferrer">启动 Windows Agent 服务</a>)</strong></li>
</ol>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>如果程序无法启动，请卸载Windows Agent并重复步骤 <strong>[1]</strong> 至 <strong>[5]</strong> 直到Windows Agent启动成功。</p>
</div>
<ol start="6">
<li><strong>如果多次尝试后问题仍然存在，请联系我们寻求帮助。</strong></li>
</ol>
<h4 id="选项2-卸载防病毒软件" tabindex="-1"><a class="header-anchor" href="#选项2-卸载防病毒软件"><span>选项2：卸载防病毒软件</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>当选项1不能解决问题时，请考虑此选项。</p>
</div>
<p>安装Windows Agent前完全卸载杀毒软件可有效解决此问题。如果条件允许，请卸载系统上正在使用的防病毒软件，并禁止在主机容灾过程中重装防病毒软件。</p>
<h4 id="选项3-永久退出防病毒软件程序" tabindex="-1"><a class="header-anchor" href="#选项3-永久退出防病毒软件程序"><span>选项3：永久退出防病毒软件程序</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>当选项1不能解决问题时，请考虑此选项。</p>
</div>
<p>退出杀毒软件也可以使Windows Agent正常安装和使用。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>在安装和使用Windows Agent的过程中，确保防病毒软件没有运行是至关重要的。如果防病毒软件在使用Windows Agent过程中重启(手动重启或系统自动重启)，可能会导致Windows Agent不可用，导致HyperBDR容灾失败。</p>
</div>
<h2 id="选项二-内网vpn访问-agent主机所在的网络设备配置华为云内网dns地址" tabindex="-1"><a class="header-anchor" href="#选项二-内网vpn访问-agent主机所在的网络设备配置华为云内网dns地址"><span>(选项二：内网VPN访问)Agent主机所在的网络设备配置华为云内网DNS地址</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果你的容灾环境是通过华为云VPN与生产站点内网互联，VPC Endpont服务创建之后，需要在生产站点Agent主机所在网络增加华为云内网OBS VPC Endpoint服务解析地址。</p>
</div>
<h3 id="配置防火墙或交换机等网络设备" tabindex="-1"><a class="header-anchor" href="#配置防火墙或交换机等网络设备"><span>配置防火墙或交换机等网络设备</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Example: Palo Alto防火墙
以下操作在防火墙 Web 管理界面进行。</p>
</div>
<ol>
<li>
<p>导航到[网络] &gt; [DNS Proxy]。</p>
</li>
<li>
<p>单击 [添加] &quot;以弹出 DNS 代理对话框。</p>
</li>
<li>
<p>选择应启用 DNS 代理的接口。在下图中, 在以太网1/2 和1/3 接口上启用了 DNS 代理。</p>
</li>
<li>
<p>选择防火墙应将 DNS 查询转发到的主服务器和辅机。该示例显示了在以太网1/2 和1/3 接口上启用 DNS 代理的配置。主 DNS 服务器配置为10.0.0.246（此地址配置为华为云内网DNS）。</p>
</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>根据使用华为云资源所在区域来选择华为云内网DNS地址进行配置。<br>
华为云内网DNS服务地址参考： <a href="https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html</a></p>
</div>
<figure><img src="@source/zh/userguide/poc/images/configure-a-huawei-cloud-intranet-dns-address-for-the-network-device-1.png" alt="configure-a-huawei-cloud-intranet-dns-address-for-the-network-device-1.png" tabindex="0" loading="lazy"><figcaption>configure-a-huawei-cloud-intranet-dns-address-for-the-network-device-1.png</figcaption></figure>
</div></template>


