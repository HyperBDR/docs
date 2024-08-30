<template><div><h1 id="华为云预设置" tabindex="-1"><a class="header-anchor" href="#华为云预设置"><span>华为云预设置</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#为容灾目标端创建华为云子账号">为容灾目标端创建华为云子账号</router-link><ul><li><router-link to="#创建iam账号">创建IAM账号</router-link></li><li><router-link to="#授予iam用户权限">授予IAM用户权限</router-link></li><li><router-link to="#管理iam用户访问密钥">管理IAM用户访问密钥</router-link></li><li><router-link to="#华为云iam权限要求">华为云IAM权限要求</router-link></li></ul></li><li><router-link to="#配置-vpc-子网">配置 VPC &amp; 子网</router-link></li><li><router-link to="#创建-hyperbdr-安全组">创建 HyperBDR 安全组</router-link><ul><li><router-link to="#创建安全组规则">创建安全组规则</router-link></li></ul></li><li><router-link to="#创建ecs实例用来安装-hyperbdr">创建ECS实例用来安装 HyperBDR</router-link><ul><li><router-link to="#登录华为云主控台">登录华为云主控台</router-link></li><li><router-link to="#基于配置信息创建华为云ecs实例">基于配置信息创建华为云ECS实例</router-link></li></ul></li><li><router-link to="#镜像下载-上传">镜像下载 &amp; 上传</router-link><ul><li><router-link to="#镜像下载">镜像下载</router-link></li><li><router-link to="#镜像信息">镜像信息</router-link></li><li><router-link to="#上传镜像到华为云对象存储">上传镜像到华为云对象存储</router-link></li><li><router-link to="#导入镜像">导入镜像</router-link></li></ul></li><li><router-link to="#vpn-设置">VPN 设置</router-link></li><li><router-link to="#创建华为vpc终端节点">创建华为VPC终端节点</router-link><ul><li><router-link to="#为终端节点配置dns接口类型">为终端节点配置DNS接口类型</router-link></li><li><router-link to="#选择obs网关类型的终端端点">选择OBS网关类型的终端端点</router-link></li><li><router-link to="#配置vpn本地端obs网关">配置VPN本地端OBS网关</router-link></li></ul></li><li><router-link to="#创建华为vpc对等连接">创建华为VPC对等连接</router-link><ul><li><router-link to="#通过与多个业务vpc建立对等连接的灾难恢复vpc">通过与多个业务VPC建立对等连接的灾难恢复VPC</router-link></li><li><router-link to="#与多个业务vpc进行灾难恢复vpc的对等连接-以及多个业务vpc之间的对等连接">与多个业务VPC进行灾难恢复VPC的对等连接，以及多个业务VPC之间的对等连接</router-link></li></ul></li><li><router-link to="#测试vpc之间的网络访问">测试VPC之间的网络访问</router-link><ul><li><router-link to="#测试灾难恢复vpc和业务vpc之间的网络连通性">测试灾难恢复VPC和业务VPC之间的网络连通性</router-link></li><li><router-link to="#测试业务vpc之间的网络连通性">测试业务VPC之间的网络连通性</router-link></li></ul></li><li><router-link to="#华为云平台账户配额检查">华为云平台账户配额检查</router-link><ul><li><router-link to="#源主机资源清单">源主机资源清单</router-link></li><li><router-link to="#华为云账户资源配额检查">华为云账户资源配额检查</router-link></li><li><router-link to="#增加华为云账户中的配额。">增加华为云账户中的配额。</router-link></li></ul></li></ul></nav>
<h2 id="为容灾目标端创建华为云子账号" tabindex="-1"><a class="header-anchor" href="#为容灾目标端创建华为云子账号"><span>为容灾目标端创建华为云子账号</span></a></h2>
<p>创建一个华为云IAM账户，并赋予相应的权限，详细要求请参考以下文档。同时，为该IAM账户创建Access Key ID和Access Secret Key用于设置。</p>
<h3 id="创建iam账号" tabindex="-1"><a class="header-anchor" href="#创建iam账号"><span>创建IAM账号</span></a></h3>
<h4 id="华为云官方文档链接" tabindex="-1"><a class="header-anchor" href="#华为云官方文档链接"><span>华为云官方文档链接：</span></a></h4>
<ul>
<li><a href="https://support.huaweicloud.com/intl/en-us/usermanual-iam/iam_02_0001.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/usermanual-iam/iam_02_0001.html</a></li>
</ul>
<h3 id="授予iam用户权限" tabindex="-1"><a class="header-anchor" href="#授予iam用户权限"><span>授予IAM用户权限</span></a></h3>
<h4 id="华为云官方文档链接-1" tabindex="-1"><a class="header-anchor" href="#华为云官方文档链接-1"><span>华为云官方文档链接：</span></a></h4>
<ul>
<li><a href="https://support.huaweicloud.com/intl/en-us/usermanual-iam/iam_01_0652.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/usermanual-iam/iam_01_0652.html</a></li>
</ul>
<h3 id="管理iam用户访问密钥" tabindex="-1"><a class="header-anchor" href="#管理iam用户访问密钥"><span>管理IAM用户访问密钥</span></a></h3>
<h4 id="华为云官方文档链接-2" tabindex="-1"><a class="header-anchor" href="#华为云官方文档链接-2"><span>华为云官方文档链接：</span></a></h4>
<ul>
<li><a href="https://support.huaweicloud.com/intl/en-us/usermanual-iam/iam_02_0003.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/usermanual-iam/iam_02_0003.html</a></li>
</ul>
<h3 id="华为云iam权限要求" tabindex="-1"><a class="header-anchor" href="#华为云iam权限要求"><span>华为云IAM权限要求</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>华为云在不同地区使用不同的API版本，包括v2和v3，并且每个地区对资源描述权限的定义略有不同。当您为HyperBDR创建权限时，需要提供对ecs、evs、obs、ims和network服务的完全访问权限。</p>
</div>
<h4 id="ecs-vpc-evs-ims" tabindex="-1"><a class="header-anchor" href="#ecs-vpc-evs-ims"><span>ecs/vpc/evs/ims</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    "Version": "1.1",</span></span>
<span class="line"><span>    "Statement": [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            "Effect": "Allow",</span></span>
<span class="line"><span>            "Action": [</span></span>
<span class="line"><span>                "ecs:*:*"</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            "Effect": "Allow",</span></span>
<span class="line"><span>            "Action": [</span></span>
<span class="line"><span>                "evs:*:*"</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            "Effect": "Allow",</span></span>
<span class="line"><span>            "Action": [</span></span>
<span class="line"><span>                "vpc:*:*"</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            "Effect": "Allow",</span></span>
<span class="line"><span>            "Action": [</span></span>
<span class="line"><span>                "IMS:*:*"</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="obs" tabindex="-1"><a class="header-anchor" href="#obs"><span>obs</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    "Version": "1.1",</span></span>
<span class="line"><span>    "Statement": [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            "Effect": "Allow",</span></span>
<span class="line"><span>            "Action": [</span></span>
<span class="line"><span>                "OBS:*:*"</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-vpc-子网" tabindex="-1"><a class="header-anchor" href="#配置-vpc-子网"><span>配置 VPC &amp; 子网</span></a></h2>
<p>根据华为云文档创建VPC网络和子网。说明：根据以下灾难恢复网络场景建立您的网络。</p>
<ol>
<li>内部 VPN 访问:</li>
</ol>
<p>如果通过内部 VPN 访问，请创建一个灾难恢复(VPC)网络，并将HyperBDR ECS实例放置在此网络中。</p>
<ol start="2">
<li>灾难恢复 VPC:</li>
</ol>
<p>为HyperBDR灾难恢复和备份创建专用的VPC网络和子网，通过VPN与本地IDC相互连接。</p>
<ol start="3">
<li>业务 VPC:</li>
</ol>
<p>用于灾难接管和演练的业务VPC网络和子网。</p>
<h2 id="创建-hyperbdr-安全组" tabindex="-1"><a class="header-anchor" href="#创建-hyperbdr-安全组"><span>创建 HyperBDR 安全组</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>HyperBDR 安全组名称: SG-HyperBDR</p>
</div>
<h3 id="创建安全组规则" tabindex="-1"><a class="header-anchor" href="#创建安全组规则"><span>创建安全组规则</span></a></h3>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>注意：对于源IP范围，我们强烈建议将第 1 条 TCP:22 类型的来源访问设置为安全范围，而非 0.0.0.0/0。将范围设置为 0.0.0.0/0 意味着您的ECS主机暴露在互联网，任何人都可以访问并进行攻击，存在安全风险。</p>
<p>例如: 如果您的外部IP地址是110.242.68.66，源IP范围可以配置为110.242.68.66/32。</p>
</div>
<table>
<thead>
<tr>
<th>No.</th>
<th>Action</th>
<th>Type</th>
<th>Protocol &amp; Port</th>
<th>Source</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>允许</td>
<td>IPv4</td>
<td>TCP:22</td>
<td>0.0.0.0/0</td>
<td>默认允许Linux SSH端口</td>
</tr>
<tr>
<td>2</td>
<td>允许</td>
<td>IPv4</td>
<td>TCP:10443</td>
<td>0.0.0.0/0</td>
<td>允许 HyperBDR web 控制台</td>
</tr>
<tr>
<td>3</td>
<td>允许</td>
<td>IPv4</td>
<td>TCP:30443</td>
<td>0.0.0.0/0</td>
<td>允许 HyperBDR 运维管理平台 Web 控制台端口</td>
</tr>
<tr>
<td>4</td>
<td>允许</td>
<td>IPv4</td>
<td>TCP:30080</td>
<td>0.0.0.0/0</td>
<td>允许 HyperBDR HTTPS 服务端口</td>
</tr>
</tbody>
</table>
<h2 id="创建ecs实例用来安装-hyperbdr" tabindex="-1"><a class="header-anchor" href="#创建ecs实例用来安装-hyperbdr"><span>创建ECS实例用来安装 HyperBDR</span></a></h2>
<h3 id="登录华为云主控台" tabindex="-1"><a class="header-anchor" href="#登录华为云主控台"><span>登录华为云主控台</span></a></h3>
<h3 id="基于配置信息创建华为云ecs实例" tabindex="-1"><a class="header-anchor" href="#基于配置信息创建华为云ecs实例"><span>基于配置信息创建华为云ECS实例</span></a></h3>
<blockquote>
<p>华为云文档 ：<a href="https://support.huaweicloud.com/intl/en-us/qs-ecs/ecs_02_0009.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/qs-ecs/ecs_02_0009.html</a><br>
HyperBDR服务器的资源配置如下:</p>
</blockquote>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>我们强烈建议在创建 ECS 云实例时，登录模式选择为 密钥对 进行登录，而不是密码登录，以保证您的服务器访问安全。</p>
</div>
<table>
<thead>
<tr>
<th style="text-align:left">配置项</th>
<th style="text-align:left">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">区域</td>
<td style="text-align:left">&lt;你的区域&gt;</td>
</tr>
<tr>
<td style="text-align:left">计费模式</td>
<td style="text-align:left">包年/包月</td>
</tr>
<tr>
<td style="text-align:left">可用区</td>
<td style="text-align:left">可用区1</td>
</tr>
<tr>
<td style="text-align:left">规格</td>
<td style="text-align:left">s6.2xlarge.2</td>
</tr>
<tr>
<td style="text-align:left">镜像</td>
<td style="text-align:left">Ubuntu 20.04 server 64bit(40GiB)(cecc4bcf-b055-4d35-bd5f-693d4412eaef)</td>
</tr>
<tr>
<td style="text-align:left">系统盘</td>
<td style="text-align:left">高IO 200GB</td>
</tr>
<tr>
<td style="text-align:left">网络</td>
<td style="text-align:left">&lt;VPC-HyperBDR-172.16.0.0&gt;</td>
</tr>
<tr>
<td style="text-align:left">子网</td>
<td style="text-align:left">&lt;Subnet-HyperBDR-172.16.0.0&gt; (Automatically assign IP address)</td>
</tr>
<tr>
<td style="text-align:left">安全组</td>
<td style="text-align:left">SG-HyperBDR</td>
</tr>
<tr>
<td style="text-align:left">弹性公网ip</td>
<td style="text-align:left">现在购买</td>
</tr>
<tr>
<td style="text-align:left">弹性公网ip线路</td>
<td style="text-align:left">全动态 BGP</td>
</tr>
<tr>
<td style="text-align:left">公网带宽</td>
<td style="text-align:left">按流量计费</td>
</tr>
<tr>
<td style="text-align:left">带宽大小</td>
<td style="text-align:left">100Mbps</td>
</tr>
<tr>
<td style="text-align:left">实例名称</td>
<td style="text-align:left">HyperBDR-Prod</td>
</tr>
<tr>
<td style="text-align:left">登录凭证</td>
<td style="text-align:left">密钥对</td>
</tr>
<tr>
<td style="text-align:left">密钥对</td>
<td style="text-align:left">&lt;你的密钥对&gt;</td>
</tr>
</tbody>
</table>
<blockquote>
<p>关于密钥对登录模式，您可以查看以下链接了解详细信息：
<a href="https://support.huaweicloud.com/usermanual-ecs/zh-cn_topic_0014250631.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/usermanual-ecs/zh-cn_topic_0014250631.html</a></p>
</blockquote>
<h2 id="镜像下载-上传" tabindex="-1"><a class="header-anchor" href="#镜像下载-上传"><span>镜像下载 &amp; 上传</span></a></h2>
<h3 id="镜像下载" tabindex="-1"><a class="header-anchor" href="#镜像下载"><span>镜像下载</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>海外华为云暂时没有Windows镜像。Windows镜像主要用于以UEFI Windows为源主机进行灾难恢复，而Linux镜像则以块存储模式使用，并作为云同步网关创建的基础镜像。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>通过提供的镜像链接将Windows/Linux镜像下载到本地计算机。</p>
</div>
<h3 id="镜像信息" tabindex="-1"><a class="header-anchor" href="#镜像信息"><span>镜像信息</span></a></h3>
<h4 id="linux-镜像" tabindex="-1"><a class="header-anchor" href="#linux-镜像"><span>Linux 镜像</span></a></h4>
<ul>
<li>版本：CentOS 8.4 64bit</li>
<li>大小： 1.22 GB</li>
<li>下载链接：<a href="https://hyperbdr-system-image-do-not-delete.obs.ap-southeast-3.myhuaweicloud.com/CentOS-8-GenericCloud-8.4.2105-20210603.0.x86_64.qcow2" target="_blank" rel="noopener noreferrer">https://hyperbdr-system-image-do-not-delete.obs.ap-southeast-3.myhuaweicloud.com/CentOS-8-GenericCloud-8.4.2105-20210603.0.x86_64.qcow2</a></li>
<li>镜像的MD5值: fe9f21a75a80d12159030fff76e1c8a5</li>
</ul>
<h4 id="windows-镜像" tabindex="-1"><a class="header-anchor" href="#windows-镜像"><span>Windows 镜像</span></a></h4>
<ul>
<li>版本：Windows Server 2016 Datacenter 64bit English</li>
<li>大小：12.11 GB</li>
<li>下载链接：<a href="https://hyperbdr-system-image-do-not-delete.obs.ap-southeast-3.myhuaweicloud.com/Windows_Server_2016_Datacenter_64bit_English_40G.qcow2" target="_blank" rel="noopener noreferrer">https://hyperbdr-system-image-do-not-delete.obs.ap-southeast-3.myhuaweicloud.com/Windows_Server_2016_Datacenter_64bit_English_40G.qcow2</a></li>
<li>镜像的MD5值: 519444d4b0343e15fa014c50d906a832</li>
</ul>
<h3 id="上传镜像到华为云对象存储" tabindex="-1"><a class="header-anchor" href="#上传镜像到华为云对象存储"><span>上传镜像到华为云对象存储</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>华为云官方文档链接:
<a href="https://support.huaweicloud.com/intl/en-us/usermanual-ims/ims_01_0205.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/usermanual-ims/ims_01_0205.html</a></p>
</div>
<h3 id="导入镜像" tabindex="-1"><a class="header-anchor" href="#导入镜像"><span>导入镜像</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>华为云官方文档链接:
<a href="https://support.huaweicloud.com/intl/en-us/usermanual-ims/ims_01_0206.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/usermanual-ims/ims_01_0206.html</a>
<a href="https://support.huaweicloud.com/intl/en-us/usermanual-ims/ims_01_0211.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/usermanual-ims/ims_01_0211.html</a></p>
</div>
<h4 id="步骤一-访问ims控制台" tabindex="-1"><a class="header-anchor" href="#步骤一-访问ims控制台"><span>步骤一: 访问IMS控制台</span></a></h4>
<ul>
<li>登录管理控制台。</li>
<li>在“计算”下，点击“镜像服务IMS”。IMS控制台将显示。将外部镜像文件注册为私有镜像。
<img src="@source/zh/userguide/poc/images/upload-custom-windowslinux-images-to-huawei-cloud-1.png" alt="upload-custom-windowslinux-images-to-huawei-cloud-1.png" loading="lazy"></li>
</ul>
<h4 id="步骤2-将外部镜像文件注册为私有镜像" tabindex="-1"><a class="header-anchor" href="#步骤2-将外部镜像文件注册为私有镜像"><span>步骤2: 将外部镜像文件注册为私有镜像</span></a></h4>
<ul>
<li>点击右上角的“创建私有镜像”
<img src="@source/zh/userguide/poc/images/upload-custom-windowslinux-images-to-huawei-cloud-2.png" alt="upload-custom-windowslinux-images-to-huawei-cloud-2.png" loading="lazy"></li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>1.名称必须是以下之一，并且不能包含额外的字符。<br>
2.由于源主机上Windows的各种版本，选择操作系统的通用选项。<br>
3.Linux镜像主要用于创建HyperDoor。当前版本的推荐版本是CentOS 8+。</p>
</div>
<p>支持的 windows 镜像名称</p>
<blockquote>
<p>Windows Server 2012 R2 Standard 64bit<br>
Windows Server 2012 R2 Datacenter 64bit<br>
Windows Server 2016 Standard 64bit<br>
Windows Server 2016 Standard 64bit English<br>
Windows Server 2016 Datacenter 64bit<br>
Windows Server 2016 Datacenter 64bit English<br>
Windows Server 2019 Datacenter 64bit<br>
Windows Server 2019 Datacenter 64bit English</p>
</blockquote>
<figure><img src="@source/zh/userguide/poc/images/upload-custom-windowslinux-images-to-huawei-cloud-3.png" alt="upload-custom-windowslinux-images-to-huawei-cloud-3.png" tabindex="0" loading="lazy"><figcaption>upload-custom-windowslinux-images-to-huawei-cloud-3.png</figcaption></figure>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>系统磁盘的大小必须为40G。</p>
</div>
<figure><img src="@source/zh/userguide/poc/images/upload-custom-windowslinux-images-to-huawei-cloud-4.png" alt="upload-custom-windowslinux-images-to-huawei-cloud-4.png" tabindex="0" loading="lazy"><figcaption>upload-custom-windowslinux-images-to-huawei-cloud-4.png</figcaption></figure>
<p>支持的 Linux 镜像名称</p>
<blockquote>
<p>CentOS 8.4 64bit<br>
CentOS 8.3 64bit<br>
CentOS 8.2 64bit<br>
CentOS 8.1 64bit<br>
CentOS 8.5 64bit</p>
</blockquote>
<figure><img src="@source/zh/userguide/poc/images/upload-custom-windowslinux-images-to-huawei-cloud-7.png" alt="upload-custom-windowslinux-images-to-huawei-cloud-7.png" tabindex="0" loading="lazy"><figcaption>upload-custom-windowslinux-images-to-huawei-cloud-7.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/upload-custom-windowslinux-images-to-huawei-cloud-8.png" alt="upload-custom-windowslinux-images-to-huawei-cloud-8.png" tabindex="0" loading="lazy"><figcaption>upload-custom-windowslinux-images-to-huawei-cloud-8.png</figcaption></figure>
<h4 id="步骤3-确认并提交" tabindex="-1"><a class="header-anchor" href="#步骤3-确认并提交"><span>步骤3: 确认并提交</span></a></h4>
<ul>
<li>
<p>勾选“我已阅读并同意”，选择“创建镜像承诺书”和“华为镜像免责声明”。然后点击“立即创建”。</p>
</li>
<li>
<p>返回到私有镜像页面。当镜像的状态变为正常时，表示成功注册。</p>
</li>
</ul>
<h2 id="vpn-设置" tabindex="-1"><a class="header-anchor" href="#vpn-设置"><span>VPN 设置</span></a></h2>
<blockquote>
<p>注意：如果您的灾难恢复环境通过华为云连接到生产站点的内部网络，您需要购买华为云VPN服务，并配置华为云连接到本地网络。</p>
</blockquote>
<blockquote>
<p>配置VPN。详细信息请参阅华为云官方文档。
文档链接: <a href="https://support.huaweicloud.com/intl/en-us/qs-vpn/vpn_03_0001.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/qs-vpn/vpn_03_0001.html</a></p>
</blockquote>
<h2 id="创建华为vpc终端节点" tabindex="-1"><a class="header-anchor" href="#创建华为vpc终端节点"><span>创建华为VPC终端节点</span></a></h2>
<blockquote>
<p>如果您的灾难恢复环境通过华为云VPN与生产站点的内部网络相互连接，并且在灾难期间生产站点需要通过VPN访问华为云HyperBDR和OBS服务，那么您需要购买并配置华为云中的VPC终端服务。</p>
</blockquote>
<blockquote>
<p>您需要购买两个VPC终端服务，一个用于OBS，另一个用于DNS。</p>
</blockquote>
<blockquote>
<p>华为云的官方定义：如果您希望通过VPN或Cloud Connect使用内部网络方法从本地数据中心访问OBS服务，您可以通过连接终端端点以访问终端端点服务来实现这一目标。<br>
文档链接：<a href="https://support.huaweicloud.com/intl/en-us/qs-vpcep/vpcep_02_0301.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/qs-vpcep/vpcep_02_0301.html</a></p>
</blockquote>
<h3 id="为终端节点配置dns接口类型" tabindex="-1"><a class="header-anchor" href="#为终端节点配置dns接口类型"><span>为终端节点配置DNS接口类型</span></a></h3>
<table>
<thead>
<tr>
<th>项目</th>
<th>配置</th>
</tr>
</thead>
<tbody>
<tr>
<td>区域</td>
<td>选择要激活的区域</td>
</tr>
<tr>
<td>计费模式</td>
<td>按需计费</td>
</tr>
<tr>
<td>服务类别</td>
<td>选择默认的'云服务'，选择 com.myhuaweicloud.&lt;region&gt;.dns，并将类型设置为接口</td>
</tr>
<tr>
<td>虚拟私有云</td>
<td>选择与本地IDC VPN互联的VPC</td>
</tr>
<tr>
<td>子网</td>
<td>选择用于VPN互连的子网</td>
</tr>
</tbody>
</table>
<figure><img src="@source/zh/userguide/poc/images/option-2-internal-vpn-access---create-vpc-endpoint-service-1.png" alt="option-2-internal-vpn-access---create-vpc-endpoint-service-1.png" tabindex="0" loading="lazy"><figcaption>option-2-internal-vpn-access---create-vpc-endpoint-service-1.png</figcaption></figure>
<h3 id="选择obs网关类型的终端端点" tabindex="-1"><a class="header-anchor" href="#选择obs网关类型的终端端点"><span>选择OBS网关类型的终端端点</span></a></h3>
<table>
<thead>
<tr>
<th>Project</th>
<th>Configuration</th>
</tr>
</thead>
<tbody>
<tr>
<td>区域</td>
<td>选择要激活的区域</td>
</tr>
<tr>
<td>计费模式</td>
<td>按需计费</td>
</tr>
<tr>
<td>服务类别</td>
<td>选择默认的'云服务'，选择 com.myhuaweicloud.&lt;region&gt;.obs，并将类型设置为网关</td>
</tr>
<tr>
<td>虚拟私有云</td>
<td>选择与本地IDC VPN互联的VPC</td>
</tr>
<tr>
<td>路由表</td>
<td>默认</td>
</tr>
<tr>
<td>策略</td>
<td>默认</td>
</tr>
</tbody>
</table>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>注意：在“服务类别”部分，可能无法直接找到默认云服务类型对应的OBS服务。在这种情况下，您需要使用“按名称查找服务”进行搜索。您必须输入特定OBS服务的完整名称。请与华为云确认，因为华为云侧目标OBS服务终端点在v1和v2版本之间可能存在差异。此外，每个地区的名称和v1/v2版本之间以及对象存储桶的资源池之间的关联需要澄清。如果您购买了v1 OBS终端节点但您的对象存储桶位于v2集群中，必须相应地进行调整。请提前与华为云确认对象存储桶集群的具体版本和OBS终端节点。</p>
<p>示例：v2版本OBS终端节点名称：sa-brazil-1.com.myhuaweicloud.v4.obsv2.lz002</p>
</div>
<figure><img src="@source/zh/userguide/poc/images/option-2-internal-vpn-access---create-vpc-endpoint-service-2.png" alt="option-2-internal-vpn-access---create-vpc-endpoint-service-2.png" tabindex="0" loading="lazy"><figcaption>option-2-internal-vpn-access---create-vpc-endpoint-service-2.png</figcaption></figure>
<h3 id="配置vpn本地端obs网关" tabindex="-1"><a class="header-anchor" href="#配置vpn本地端obs网关"><span>配置VPN本地端OBS网关</span></a></h3>
<p>在VPN连接点添加本地（华为云）OBS服务的内部子网范围。所有内部华为云OBS服务的子网地址为100.125.0.0/16。<br>
<img src="@source/zh/userguide/poc/images/option-2-internal-vpn-access---create-vpc-endpoint-service-3.png" alt="option-2-internal-vpn-access---create-vpc-endpoint-service-3.png" loading="lazy"><br>
<img src="@source/zh/userguide/poc/images/option-2-internal-vpn-access---create-vpc-endpoint-service-4.png" alt="option-2-internal-vpn-access---create-vpc-endpoint-service-4.png" loading="lazy"></p>
<h2 id="创建华为vpc对等连接" tabindex="-1"><a class="header-anchor" href="#创建华为vpc对等连接"><span>创建华为VPC对等连接</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>根据业务需求，选择不同的VPC对等连接配置：</p>
<ul>
<li>如果多个业务VPC之间不需要相互访问，只需根据 <a href="https://docs.oneprocloud.com/userguide/poc/huaweicloud-pre-settings.html#disaster-recovery-vpc-connected-via-peering-with-multiple-business-vpc" target="_blank" rel="noopener noreferrer">容灾恢复 VPC 通过对等连接与多个业务VPC连接</a> 配置对等连接。</li>
<li>如果需要多个业务VPC之间相互访问的需求，那么您需要根据 <a href="https://docs.oneprocloud.com/userguide/poc/huaweicloud-pre-settings.html#disaster-recovery-vpc-peering-with-multiple-business-vpcs-as-well-as-peering-connections-between-multiple-business-vpc" target="_blank" rel="noopener noreferrer">与多个业务VPC进行灾难恢复VPC对等连接，以及多个业务VPC之间的对等连接</a> 进行配置。</li>
</ul>
</div>
<h3 id="通过与多个业务vpc建立对等连接的灾难恢复vpc" tabindex="-1"><a class="header-anchor" href="#通过与多个业务vpc建立对等连接的灾难恢复vpc"><span>通过与多个业务VPC建立对等连接的灾难恢复VPC</span></a></h3>
<p>在华为云灾难恢复中，灾难恢复主机需要恢复到计划的生产业务VPC。因此，需要在华为云中配置跨VPC点对点连接，将灾难恢复VPC与业务VPC进行配置，并添加点对点连接路由。主要用于灾难恢复，HyperBDR所在的灾难恢复VPC可以通过内部网络访问业务VPC，以进行虚拟机的数据恢复。</p>
<blockquote>
<p>华为云文档链接:<br>
<a href="https://support.huaweicloud.com/intl/en-us/usermanual-vpc/en-us_topic_0046809840.html#section1" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/usermanual-vpc/en-us_topic_0046809840.html#section1</a></p>
</blockquote>
<figure><img src="@source/zh/userguide/poc/images/configure-cross-vpc-network-access-between-disaster-recovery-vpc-and-business-vpc-1.png" alt="configure-cross-vpc-network-access-between-disaster-recovery-vpc-and-business-vpc-1.png" tabindex="0" loading="lazy"><figcaption>configure-cross-vpc-network-access-between-disaster-recovery-vpc-and-business-vpc-1.png</figcaption></figure>
<h3 id="与多个业务vpc进行灾难恢复vpc的对等连接-以及多个业务vpc之间的对等连接" tabindex="-1"><a class="header-anchor" href="#与多个业务vpc进行灾难恢复vpc的对等连接-以及多个业务vpc之间的对等连接"><span>与多个业务VPC进行灾难恢复VPC的对等连接，以及多个业务VPC之间的对等连接</span></a></h3>
<p>当客户的所有灾难恢复主机需要放置在华为云规划的不同业务VPC中，并且在业务中存在跨VPC访问的需求时，就需要在业务VPC之间配置点对点连接，以确保在后续业务恢复后正常进行跨VPC业务交互。</p>
<blockquote>
<p>华为云文档链接:<br>
<a href="https://support.huaweicloud.com/intl/en-us/usermanual-vpc/en-us_topic_0046809840.html#section0" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/usermanual-vpc/en-us_topic_0046809840.html#section0</a></p>
</blockquote>
<h2 id="测试vpc之间的网络访问" tabindex="-1"><a class="header-anchor" href="#测试vpc之间的网络访问"><span>测试VPC之间的网络访问</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p><a href="https://docs.oneprocloud.com/userguide/poc/huaweicloud-pre-settings.html#create-huawei-vpc-peering" target="_blank" rel="noopener noreferrer">创建华为VPC对等连接</a> 配置已成功完成，并且路由条目已正确添加。</p>
</div>
<h3 id="测试灾难恢复vpc和业务vpc之间的网络连通性" tabindex="-1"><a class="header-anchor" href="#测试灾难恢复vpc和业务vpc之间的网络连通性"><span>测试灾难恢复VPC和业务VPC之间的网络连通性</span></a></h3>
<ul>
<li>
<p>步骤1: 登录到华为云并创建一个ECS测试云服务器<br>
在华为云上创建一个ECS测试云服务器（使用CentOS 7.6操作系统）。在配置网络时，选择业务VPC和子网。确保这台新创建的ECS测试虚拟机的安全组具有允许端口22的入站访问策略。</p>
</li>
<li>
<p>步骤2: 从灾难恢复VPC到业务VPC进行网络测试访问</p>
</li>
</ul>
<p>登录华为云控制台，访问HyperBDR ECS云服务器，使用内部网络IP连接到业务VPC内的ECS主机。</p>
<figure><img src="@source/zh/userguide/poc/images/test-the-intranet-network-connectivity-across-vpcs-1.png" alt="test-the-intranet-network-connectivity-across-vpcs-1.png" tabindex="0" loading="lazy"><figcaption>test-the-intranet-network-connectivity-across-vpcs-1.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/test-the-intranet-network-connectivity-across-vpcs-2.png" alt="test-the-intranet-network-connectivity-across-vpcs-2.png" tabindex="0" loading="lazy"><figcaption>test-the-intranet-network-connectivity-across-vpcs-2.png</figcaption></figure>
<p>执行命令:</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> root@</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">The</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> intranet</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> IP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> address</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> of</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> EC</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">S> </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">22</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>测试结果:<br>
如果您能够成功访问并输入密码，表示正常访问。</p>
<h3 id="测试业务vpc之间的网络连通性" tabindex="-1"><a class="header-anchor" href="#测试业务vpc之间的网络连通性"><span>测试业务VPC之间的网络连通性</span></a></h3>
<ul>
<li>
<p>步骤1: 创建一个新的ECS测试云服务器，使用CentOS 7.6操作系统。在配置网络时，选择不同的业务VPC和子网。确保这台新创建的ECS测试虚拟机的安全组具有允许端口22的入站访问策略。</p>
</li>
<li>
<p>步骤2: 通过控制台登录到不同的测试云服务器，并使用以下命令进行双向命令测试。</p>
</li>
</ul>
<p>执行命令:</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> root@</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">The</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> intranet</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> IP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> of</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> EC</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">S> </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">22</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>测试结果:<br>
如果您能够成功访问并输入密码，表示正常访问。</p>
<h2 id="华为云平台账户配额检查" tabindex="-1"><a class="header-anchor" href="#华为云平台账户配额检查"><span>华为云平台账户配额检查</span></a></h2>
<p>在灾难恢复过程中，确保云账户具有足够的资源配额以支持数据同步和灾难恢复非常重要。为防止因配额不足而导致灾难恢复的潜在失败，有必要在启动灾难恢复之前进行资源配额检查。</p>
<p>如果华为云账户中的剩余配额不足，就有必要清理账户中的不必要资源，或者申请扩展华为云资源配额。</p>
<h3 id="源主机资源清单" tabindex="-1"><a class="header-anchor" href="#源主机资源清单"><span>源主机资源清单</span></a></h3>
<p>需要收集等待灾难恢复的主机系统的计算和存储资源信息，并将详细信息输入到一个表格中。</p>
<table>
<thead>
<tr>
<th>资源类型</th>
<th>大小</th>
</tr>
</thead>
<tbody>
<tr>
<td>源端主机的总数量</td>
<td></td>
</tr>
<tr>
<td>源端主机的总CPU数量</td>
<td></td>
</tr>
<tr>
<td>源端主机的总内存大小</td>
<td></td>
</tr>
<tr>
<td>源端主机的总磁盘数量</td>
<td></td>
</tr>
<tr>
<td>源端主机磁盘的总容量</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="华为云账户资源配额检查" tabindex="-1"><a class="header-anchor" href="#华为云账户资源配额检查"><span>华为云账户资源配额检查</span></a></h3>
<h4 id="登录华为云" tabindex="-1"><a class="header-anchor" href="#登录华为云"><span>登录华为云</span></a></h4>
<figure><img src="@source/zh/userguide/poc/images/huawei-cloud-platform-account-quota-check-1.png" alt="huawei-cloud-platform-account-quota-check-1.png" tabindex="0" loading="lazy"><figcaption>huawei-cloud-platform-account-quota-check-1.png</figcaption></figure>
<h4 id="查看资源配额" tabindex="-1"><a class="header-anchor" href="#查看资源配额"><span>查看资源配额</span></a></h4>
<p>访问CDN控制台，选择“资源” &gt; “我的配额”。系统将跳转到“配额”页面。</p>
<figure><img src="@source/zh/userguide/poc/images/huawei-cloud-platform-account-quota-check-2.png" alt="huawei-cloud-platform-account-quota-check-2.png" tabindex="0" loading="lazy"><figcaption>huawei-cloud-platform-account-quota-check-2.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/huawei-cloud-platform-account-quota-check-3.png" alt="huawei-cloud-platform-account-quota-check-3.png" tabindex="0" loading="lazy"><figcaption>huawei-cloud-platform-account-quota-check-3.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/huawei-cloud-platform-account-quota-check-4.png" alt="huawei-cloud-platform-account-quota-check-4.png" tabindex="0" loading="lazy"><figcaption>huawei-cloud-platform-account-quota-check-4.png</figcaption></figure>
<h4 id="整理您的华为云账户资源配额并计算剩余配额" tabindex="-1"><a class="header-anchor" href="#整理您的华为云账户资源配额并计算剩余配额"><span>整理您的华为云账户资源配额并计算剩余配额</span></a></h4>
<p>访问CDN控制台，选择“资源” &gt; “我的配额”。系统将跳转到“配额”页面。</p>
<figure><img src="@source/zh/userguide/poc/images/huawei-cloud-platform-account-quota-check-5.png" alt="huawei-cloud-platform-account-quota-check-5.png" tabindex="0" loading="lazy"><figcaption>huawei-cloud-platform-account-quota-check-5.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/huawei-cloud-platform-account-quota-check-6.png" alt="huawei-cloud-platform-account-quota-check-6.png" tabindex="0" loading="lazy"><figcaption>huawei-cloud-platform-account-quota-check-6.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/huawei-cloud-platform-account-quota-check-7.png" alt="huawei-cloud-platform-account-quota-check-7.png" tabindex="0" loading="lazy"><figcaption>huawei-cloud-platform-account-quota-check-7.png</figcaption></figure>
<table>
<thead>
<tr>
<th>服务</th>
<th>资源类型</th>
<th>使用配额</th>
<th>总配额</th>
<th>剩余配额</th>
</tr>
</thead>
<tbody>
<tr>
<td>弹性云服务器</td>
<td>ECS实例</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>弹性云服务器</td>
<td>CPU</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>弹性云服务器</td>
<td>内存</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>镜像管理服务</td>
<td>镜像</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>弹性卷服务</td>
<td>磁盘</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>弹性卷服务</td>
<td>磁盘容量</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>虚拟私用云</td>
<td>弹性IP地址</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="将剩余配额与源主机的资源进行比较" tabindex="-1"><a class="header-anchor" href="#将剩余配额与源主机的资源进行比较"><span>将剩余配额与源主机的资源进行比较</span></a></h4>
<p>根据您的清单，将源主机的资源水平与华为云账户中的剩余资源配额进行比较，以评估是否满足灾难恢复的要求。</p>
<p><strong>1. 如果您正在使用对象存储恢复模式进行灾难恢复，请参考以下标准。</strong></p>
<blockquote>
<p><strong>弹性云服务器: ECSs</strong> 剩余配额 ≥ 源主机的总数<br>
<strong>弹性云服务器: vCPUs</strong> 剩余配额 ≥ 源主机的总CPU数<br>
<strong>弹性云服务器: Memory (MB)</strong> 剩余配额 ≥ 源主机的总内存（MB）<br>
<strong>弹性卷服务: Disk</strong> 剩余配额 ≥ 源主机的总磁盘数<br>
<strong>弹性卷服务: Disk capacity(GB)</strong> 剩余配额 ≥ 源主机的总磁盘容量（GB）
<strong>镜像管理服务: Images</strong>  剩余配额 ≥ 2<br>
<strong>虚拟专有云: 弹性IP地址</strong> 剩余配额：满足将灾难恢复主机恢复到华为云平台所需的公网IP数量即可。</p>
</blockquote>
<p><strong>2. 如果您正在使用块存储恢复模式进行灾难恢复，请参考以下标准。</strong></p>
<blockquote>
<p><strong>弹性云服务器: ECSs</strong> 剩余配额 ≥ 源主机的总数 + HyperGate实例的数量<br>
<strong>弹性云服务器: vCPUs</strong> 剩余配额 ≥ 源主机的总CPU数 + 2 * HyperGate实例的数量<br>
<strong>弹性云服务器: Memory (MB)</strong> 剩余配额 ≥ 源主机的总内存（MB） + 2048（MB） * HyperGate实例的数量<br>
<strong>弹性卷服务: Disk</strong> 剩余配额 ≥ 2 * 源主机的总磁盘数 + HyperGate实例的数量<br>
<strong>弹性卷服务: Disk capacity(GB)</strong> 剩余配额 ≥ 2 * 源主机的总磁盘容量（GB） + 40（GB） * HyperGate实例的数量<br>
<strong>镜像管理服务: Images</strong>  剩余配额 ≥ 2<br>
<strong>虚拟专有云: 弹性IP地址s</strong> 剩余配额：数量应满足将灾难恢复主机恢复到华为云平台所需的公网IP地址总数，包括源主机的公网IP数量和HyperGate实例的数量。</p>
</blockquote>
<p>如果发现华为云账户中的剩余资源配额不足，就有必要清理账户中的不必要资源，或者向华为云申请扩展资源配额。</p>
<h3 id="增加华为云账户中的配额。" tabindex="-1"><a class="header-anchor" href="#增加华为云账户中的配额。"><span>增加华为云账户中的配额。</span></a></h3>
<p>如果发现华为云账户中的剩余资源配额不足，并且账户中没有可清理的资源，您可以尝试提交一张华为云工单，请求扩展资源配额。</p>
<p>在“配额”页面上，点击“增加”，并填写华为云工单。</p>
<figure><img src="@source/zh/userguide/poc/images/huawei-cloud-platform-account-quota-check-8.png" alt="huawei-cloud-platform-account-quota-check-8.png" tabindex="0" loading="lazy"><figcaption>huawei-cloud-platform-account-quota-check-8.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/huawei-cloud-platform-account-quota-check-9.png" alt="huawei-cloud-platform-account-quota-check-9.png" tabindex="0" loading="lazy"><figcaption>huawei-cloud-platform-account-quota-check-9.png</figcaption></figure>
<p>在填写完表单后，勾选同意框，并点击“提交”。等待并监视华为云工单的响应，获取有关增加配额的信息。</p>
</div></template>


