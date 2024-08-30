<template><div><h1 id="hyperbdr部署与配置" tabindex="-1"><a class="header-anchor" href="#hyperbdr部署与配置"><span>HyperBDR部署与配置</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#下载-hyperbdr-安装包">下载 HyperBDR 安装包</router-link><ul><li><router-link to="#安装包信息">安装包信息</router-link></li><li><router-link to="#下载安装包和md5校验文件">下载安装包和MD5校验文件</router-link></li><li><router-link to="#安装包一致性检查">安装包一致性检查</router-link></li></ul></li><li><router-link to="#安装-hyperbdr">安装 HyperBDR</router-link><ul><li><router-link to="#解压hyperbdr安装包">解压HyperBDR安装包</router-link></li><li><router-link to="#运行安装脚本">运行安装脚本</router-link></li></ul></li><li><router-link to="#申请hyperbdr授权">申请HyperBDR授权</router-link><ul><li><router-link to="#激活授权">激活授权</router-link></li></ul></li><li><router-link to="#在hyperbdr中验证代理注册">在HyperBDR中验证代理注册</router-link><ul><li><router-link to="#检查代理节点的状态">检查代理节点的状态</router-link></li></ul></li><li><router-link to="#添加vmware链接">添加VMware链接</router-link><ul><li><router-link to="#添加vmware到-hyperbdr">添加VMware到 HyperBDR</router-link></li></ul></li><li><router-link to="#在hyperbdr中验证vmware的状态">在HyperBDR中验证VMware的状态</router-link><ul><li><router-link to="#检查vmware连接的状态">检查VMware连接的状态</router-link></li></ul></li><li><router-link to="#添加对象存储">添加对象存储</router-link><ul><li><router-link to="#配置步骤">配置步骤</router-link></li></ul></li><li><router-link to="#添加dr恢复网关">添加DR恢复网关</router-link><ul><li><router-link to="#配置步骤-1">配置步骤</router-link></li></ul></li><li><router-link to="#在hyperbdr中添加vmware主机">在HyperBDR中添加VMware主机</router-link><ul><li><router-link to="#配置步骤-2">配置步骤</router-link></li></ul></li><li><router-link to="#绑定-解绑源端同步代理到-vmware-生产站点">绑定/解绑源端同步代理到 VMware 生产站点</router-link><ul><li><router-link to="#配置步骤-3">配置步骤</router-link></li></ul></li></ul></nav>
<h2 id="下载-hyperbdr-安装包" tabindex="-1"><a class="header-anchor" href="#下载-hyperbdr-安装包"><span>下载 HyperBDR 安装包</span></a></h2>
<h3 id="安装包信息" tabindex="-1"><a class="header-anchor" href="#安装包信息"><span>安装包信息</span></a></h3>
<h4 id="安装包" tabindex="-1"><a class="header-anchor" href="#安装包"><span>安装包</span></a></h4>
<blockquote>
<p>文件名称: <strong>HyperBDR_release_v5.7.0_20240731-20240731-3881.tar.gz</strong><br>
下载链接: <a href="https://downloads.oneprocloud.com/HyperBDR_release_v5.7.0_20240731-20240731-3881.tar.gz" target="_blank" rel="noopener noreferrer">https://downloads.oneprocloud.com/HyperBDR_release_v5.7.0_20240731-20240731-3881.tar.gz</a></p>
</blockquote>
<h4 id="md5校验文件" tabindex="-1"><a class="header-anchor" href="#md5校验文件"><span>MD5校验文件</span></a></h4>
<blockquote>
<p>文件名称: <strong>HyperBDR_release_v5.7.0_20240731-20240731-3881.tar.gz.md5</strong><br>
下载链接: <a href="https://downloads.oneprocloud.com/HyperBDR_release_v5.7.0_20240731-20240731-3881.tar.gz.md5" target="_blank" rel="noopener noreferrer">https://downloads.oneprocloud.com/HyperBDR_release_v5.7.0_20240731-20240731-3881.tar.gz.md5</a></p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>登录到HyperBDR主机后端并执行命令。</p>
</div>
<h3 id="下载安装包和md5校验文件" tabindex="-1"><a class="header-anchor" href="#下载安装包和md5校验文件"><span>下载安装包和MD5校验文件</span></a></h3>
<h4 id="在shell中设置url" tabindex="-1"><a class="header-anchor" href="#在shell中设置url"><span>在Shell中设置URL</span></a></h4>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> HYPERBDR_PACKAGE</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">url</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Installation</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Package</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> HYPERBDR_PACKAGE_MD5</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">url</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> MD5</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Checksum</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> File</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> HYPERBDR_PACKAGE_NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">File</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Name</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Installation</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Package</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> HYPERBDR_PACKAGE_MD5_NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">File</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Name</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> MD5</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Checksum</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> File</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="下载文件" tabindex="-1"><a class="header-anchor" href="#下载文件"><span>下载文件</span></a></h4>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -k</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -O</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$HYPERBDR_PACKAGE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -k</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -O</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$HYPERBDR_PACKAGE_MD5</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装包一致性检查" tabindex="-1"><a class="header-anchor" href="#安装包一致性检查"><span>安装包一致性检查</span></a></h3>
<ul>
<li>步骤1: 生成已下载安装包的MD5值</li>
</ul>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">md5sum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$HYPERBDR_PACKAGE_NAME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>步骤2: 检查MD5校验文件中记录的MD5值</li>
</ul>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$HYPERBDR_PACKAGE_MD5_NAME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>Step3: 比较MD5值</li>
</ul>
<p>如果步骤1和步骤2中获取的MD5值相同，则表示安装包未损坏。如果MD5值不同，您可以尝试重新下载文件进行比较，或者联系我们寻求帮助。</p>
<h2 id="安装-hyperbdr" tabindex="-1"><a class="header-anchor" href="#安装-hyperbdr"><span>安装 HyperBDR</span></a></h2>
<blockquote>
<p>完成HyperBDR安装包的下载后，您可以继续进行安装。<br>
默认已登录到华为云HyperBDR ECS实例的后端。</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>安装所使用的操作系统必须是 Ubuntu 20.04 版本。</p>
</div>
<h3 id="解压hyperbdr安装包" tabindex="-1"><a class="header-anchor" href="#解压hyperbdr安装包"><span>解压HyperBDR安装包</span></a></h3>
<ul>
<li>执行以下命令解压安装包</li>
</ul>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -zxvf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$HYPERBDR_PACKAGE_NAME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /mnt/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="运行安装脚本" tabindex="-1"><a class="header-anchor" href="#运行安装脚本"><span>运行安装脚本</span></a></h3>
<h4 id="启用hyperbdr平台的公共访问" tabindex="-1"><a class="header-anchor" href="#启用hyperbdr平台的公共访问"><span>启用HyperBDR平台的公共访问</span></a></h4>
<ul>
<li>执行命令</li>
</ul>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /mnt/installer/install.sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> EI</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="通过内部vpn访问hyperbdr平台" tabindex="-1"><a class="header-anchor" href="#通过内部vpn访问hyperbdr平台"><span>通过内部VPN访问HyperBDR平台</span></a></h4>
<ul>
<li>执行命令</li>
</ul>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /mnt/installer/install.sh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>默认情况下，安装脚本使用第一个网络接口卡的地址作为平台服务地址。</p>
</div>
<p>如果安装成功，您将看到提示的登录信息。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[2023-03-30 23:08:36] [INFO] --------------------------------------------------</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO] Congratulations! The installation of HyperBDR is complete.</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO]</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO] DR        : https://192.168.12.81:10443</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO] Migration : https://192.168.12.81:20443</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO] Admin     : https://192.168.12.81:30443</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO]</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO] The default username and password : admin / P@ssw0rd</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO]</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO] If you have any questions or need assistance, please refer</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO] to the user manual or contact our support team.</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO]</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO] Enjoy using our product!</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO] --------------------------------------------------</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问HyperBDR控制台URL：https://&lt;HyperBDR IP&gt;:10443</p>
<h2 id="申请hyperbdr授权" tabindex="-1"><a class="header-anchor" href="#申请hyperbdr授权"><span>申请HyperBDR授权</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>默认已登录到HyperBDR控制台。</p>
</div>
<h3 id="激活授权" tabindex="-1"><a class="header-anchor" href="#激活授权"><span>激活授权</span></a></h3>
<p>转到[设置]-&gt;[授权管理]，然后点击[+添加]按钮：</p>
<figure><img src="@source/zh/userguide/poc/images/hyperbdr-license-activation-guide-1.png" alt="hyperbdr-license-activation-guide-1.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-license-activation-guide-1.png</figcaption></figure>
<p>激活许可证有两种方法：</p>
<h4 id="i-通过使用二维码激活授权" tabindex="-1"><a class="header-anchor" href="#i-通过使用二维码激活授权"><span>I. 通过使用二维码激活授权</span></a></h4>
<figure><img src="@source/zh/userguide/poc/images/hyperbdr-license-activation-guide-2.png" alt="hyperbdr-license-activation-guide-2.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-license-activation-guide-2.png</figcaption></figure>
<p>扫描QR码并填写申请表。OnePro Cloud客户服务在审核申请后将通过电子邮件发送激活码给用户。</p>
<p>填写激活码并点击[激活]按钮。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>请确保申请表上提供的电子邮件地址是正确的，否则将无法收到激活码。</p>
</div>
<h4 id="ii-通过使用激活码激活授权" tabindex="-1"><a class="header-anchor" href="#ii-通过使用激活码激活授权"><span>II. 通过使用激活码激活授权</span></a></h4>
<figure><img src="@source/zh/userguide/poc/images/hyperbdr-license-activation-guide-3.png" alt="hyperbdr-license-activation-guide-3.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-license-activation-guide-3.png</figcaption></figure>
<p>复制并将注册码发送给OnePro Cloud，客户服务将通过电子邮件发送激活码给用户。</p>
<p>填写激活码并点击[激活]按钮。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>用户可以将注册码发送给OnePro Cloud销售代表或者 <em><a href="mailto:enquiry@oneprocloud.com" target="_blank" rel="noopener noreferrer">enquiry@oneprocloud.com</a></em>._</p>
</div>
<h2 id="在hyperbdr中验证代理注册" tabindex="-1"><a class="header-anchor" href="#在hyperbdr中验证代理注册"><span>在HyperBDR中验证代理注册</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>代理节点安装完成后，它将自动添加到HyperBDR，并且您可以在HyperBDR中查看此代理节点机器。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>默认已登录到HyperBDR控制台。</p>
</div>
<figure><img src="@source/zh/userguide/poc/images/verify-proxy-registration-in-hyperbdr-1.png" alt="verify-proxy-registration-in-hyperbdr-1.png" tabindex="0" loading="lazy"><figcaption>verify-proxy-registration-in-hyperbdr-1.png</figcaption></figure>
<h3 id="检查代理节点的状态" tabindex="-1"><a class="header-anchor" href="#检查代理节点的状态"><span>检查代理节点的状态</span></a></h3>
<p>点击顶部菜单栏的 '配置管理'、'生产站点配置'、'同步节点' 来查看代理节点主机。如果您能看到这个主机，并且状态为 '正常'，则表示它已成功注册到HyperBDR，您可以继续进行进一步的配置和使用。</p>
<figure><img src="@source/zh/userguide/poc/images/verify-proxy-registration-in-hyperbdr-2.png" alt="verify-proxy-registration-in-hyperbdr-2.png" tabindex="0" loading="lazy"><figcaption>verify-proxy-registration-in-hyperbdr-2.png</figcaption></figure>
<h2 id="添加vmware链接" tabindex="-1"><a class="header-anchor" href="#添加vmware链接"><span>添加VMware链接</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>使用预先准备好的VMware账户信息，将VMware添加到HyperBDR平台作为灾难恢复源端生产平台。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>默认已登录到HyperBDR控制台。</p>
</div>
<figure><img src="@source/zh/userguide/poc/images/add-vmware-credentials-1.png" alt="add-vmware-credentials-1.png" tabindex="0" loading="lazy"><figcaption>add-vmware-credentials-1.png</figcaption></figure>
<h3 id="添加vmware到-hyperbdr" tabindex="-1"><a class="header-anchor" href="#添加vmware到-hyperbdr"><span>添加VMware到 HyperBDR</span></a></h3>
<p>点击顶部菜单栏的 '配置管理'、'生产站点配置'、'VMware'。点击 '+添加' 按钮，然后在弹出的页面上点击 '下一步' 按钮。按照提示填写VMware信息，然后点击 'Submit' 按钮。</p>
<figure><img src="@source/zh/userguide/poc/images/add-vmware-credentials-2.png" alt="add-vmware-credentials-2.png" tabindex="0" loading="lazy"><figcaption>add-vmware-credentials-2.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/add-vmware-credentials-3.png" alt="add-vmware-credentials-3.png" tabindex="0" loading="lazy"><figcaption>add-vmware-credentials-3.png</figcaption></figure>
<table>
<thead>
<tr>
<th>鉴权地址</th>
<th>https://&lt;vCenter IP/Domain Name&gt;:443</th>
</tr>
</thead>
<tbody>
<tr>
<td>用户名</td>
<td>&lt;vCenter&gt;用户名</td>
</tr>
<tr>
<td>密码</td>
<td>&lt;vCenter&gt;密码</td>
</tr>
<tr>
<td>同步节点</td>
<td>&lt;同步节点 IP&gt;</td>
</tr>
</tbody>
</table>
<figure><img src="@source/zh/userguide/poc/images/add-vmware-credentials-4.png" alt="add-vmware-credentials-4.png" tabindex="0" loading="lazy"><figcaption>add-vmware-credentials-4.png</figcaption></figure>
<h2 id="在hyperbdr中验证vmware的状态" tabindex="-1"><a class="header-anchor" href="#在hyperbdr中验证vmware的状态"><span>在HyperBDR中验证VMware的状态</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>默认已登录到HyperBDR控制台</p>
</div>
<figure><img src="@source/zh/userguide/poc/images/verify-proxy-registration-in-hyperbdr-2.png" alt="verify-proxy-registration-in-hyperbdr-2.png" tabindex="0" loading="lazy"><figcaption>verify-proxy-registration-in-hyperbdr-2.png</figcaption></figure>
<h3 id="检查vmware连接的状态" tabindex="-1"><a class="header-anchor" href="#检查vmware连接的状态"><span>检查VMware连接的状态</span></a></h3>
<p>点击顶部菜单栏 '配置管理'、'生产站点配置'、'VMware'，查看添加的源端VMware账户的状态，以及获取诸如主机数量之类的信息。您还可以点击VMware的名称来查看详细信息和主机详情。如果一切正常，可以继续进行后续的配置操作。</p>
<figure><img src="@source/zh/userguide/poc/images/verify-vmware-status-in-hyperbdr-1.png" alt="verify-vmware-status-in-hyperbdr-1.png" tabindex="0" loading="lazy"><figcaption>verify-vmware-status-in-hyperbdr-1.png</figcaption></figure>
<p>如果状态为 '正常'，表示添加成功。</p>
<h2 id="添加对象存储" tabindex="-1"><a class="header-anchor" href="#添加对象存储"><span>添加对象存储</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>默认已登录到HyperBDR控制台。</p>
</div>
<figure><img src="@source/zh/userguide/poc/images/add-vmware-credentials-1.png" alt="add-vmware-credentials-1.png" tabindex="0" loading="lazy"><figcaption>add-vmware-credentials-1.png</figcaption></figure>
<h3 id="配置步骤" tabindex="-1"><a class="header-anchor" href="#配置步骤"><span>配置步骤</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>使用提供的IAM账号的AK/SK信息，在HyperBDR控制台中配置并添加华为云对象存储桶。</p>
</div>
<ul>
<li>步骤1: 点击顶部菜单栏 '配置管理'、'对象存储'。点击 '+添加' 按钮。</li>
</ul>
<figure><img src="@source/zh/userguide/poc/images/add-object-storage-1.png" alt="add-object-storage-1.png" tabindex="0" loading="lazy"><figcaption>add-object-storage-1.png</figcaption></figure>
<ul>
<li>步骤2: 根据提示填写或选择相应的参数，点击 '确定'，然后等待完成。</li>
</ul>
<figure><img src="@source/zh/userguide/poc/images/add-object-storage-2.png" alt="add-object-storage-2.png" tabindex="0" loading="lazy"><figcaption>add-object-storage-2.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/add-object-storage-3.png" alt="add-object-storage-3.png" tabindex="0" loading="lazy"><figcaption>add-object-storage-3.png</figcaption></figure>
<h2 id="添加dr恢复网关" tabindex="-1"><a class="header-anchor" href="#添加dr恢复网关"><span>添加DR恢复网关</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>默认已登录到HyperBDR控制台。</p>
</div>
<figure><img src="@source/zh/userguide/poc/images/add-vmware-credentials-1.png" alt="add-vmware-credentials-1.png" tabindex="0" loading="lazy"><figcaption>add-vmware-credentials-1.png</figcaption></figure>
<h3 id="配置步骤-1" tabindex="-1"><a class="header-anchor" href="#配置步骤-1"><span>配置步骤</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>使用提供的IAM账号的AK/SK信息，在HyperBDR控制台中配置并添加华为云恢复网关</p>
</div>
<p>点击顶部菜单栏 &quot;配置管理&quot;， &quot;对象存储恢复网关&quot;，点击 &quot;+添加&quot; 按钮，根据提示填写或选择相应的参数，点击 &quot;确定&quot;，然后等待完成。</p>
<figure><img src="@source/zh/userguide/poc/images/add-dr-recovery-gateway-1.png" alt="add-dr-recovery-gateway-1.png" tabindex="0" loading="lazy"><figcaption>add-dr-recovery-gateway-1.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/add-dr-recovery-gateway-2.png" alt="add-dr-recovery-gateway-2.png" tabindex="0" loading="lazy"><figcaption>add-dr-recovery-gateway-2.png</figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Windows UEFI 修复镜像使用您上传的私有 Windows 镜像。</p>
<p>文档链接: <a href="https://docs.oneprocloud.com/userguide/poc/huaweicloud-pre-settings.html#image-download-upload" target="_blank" rel="noopener noreferrer">https://docs.oneprocloud.com/userguide/poc/huaweicloud-pre-settings.html#image-download-upload</a></p>
</div>
<figure><img src="@source/zh/userguide/poc/images/add-dr-recovery-gateway-3.png" alt="add-dr-recovery-gateway-3.png" tabindex="0" loading="lazy"><figcaption>add-dr-recovery-gateway-3.png</figcaption></figure>
<h2 id="在hyperbdr中添加vmware主机" tabindex="-1"><a class="header-anchor" href="#在hyperbdr中添加vmware主机"><span>在HyperBDR中添加VMware主机</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>默认已登录到HyperBDR控制台。<br>
默认已在HyperBDR中添加了VMware连接。</p>
</div>
<figure><img src="@source/zh/userguide/poc/images/add-vmware-credentials-1.png" alt="add-vmware-credentials-1.png" tabindex="0" loading="lazy"><figcaption>add-vmware-credentials-1.png</figcaption></figure>
<h3 id="配置步骤-2" tabindex="-1"><a class="header-anchor" href="#配置步骤-2"><span>配置步骤</span></a></h3>
<p>点击顶部菜单栏 &quot;资源容灾&quot;，&quot;主机容灾&quot;，点击 &quot;添加主机&quot; 按钮，选择 &quot;无代理模式&quot; &quot;VMware&quot; ，选择之前添加的VMware账户，过滤并选择所需的灾难恢复主机，最后点击确认。一旦选择完成，点击确认将VMware灾难恢复主机添加到灾难恢复平台。</p>
<figure><img src="@source/zh/userguide/poc/images/add-vmware-hosts-in-hyperbdr-1.png" alt="add-vmware-hosts-in-hyperbdr-1.png" tabindex="0" loading="lazy"><figcaption>add-vmware-hosts-in-hyperbdr-1.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/add-vmware-hosts-in-hyperbdr-2.png" alt="add-vmware-hosts-in-hyperbdr-2.png" tabindex="0" loading="lazy"><figcaption>add-vmware-hosts-in-hyperbdr-2.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/add-vmware-hosts-in-hyperbdr-3.png" alt="add-vmware-hosts-in-hyperbdr-3.png" tabindex="0" loading="lazy"><figcaption>add-vmware-hosts-in-hyperbdr-3.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/add-vmware-hosts-in-hyperbdr-4.png" alt="add-vmware-hosts-in-hyperbdr-4.png" tabindex="0" loading="lazy"><figcaption>add-vmware-hosts-in-hyperbdr-4.png</figcaption></figure>
<h2 id="绑定-解绑源端同步代理到-vmware-生产站点" tabindex="-1"><a class="header-anchor" href="#绑定-解绑源端同步代理到-vmware-生产站点"><span>绑定/解绑源端同步代理到 VMware 生产站点</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Agentless 模式下每个源端同步代理默认支持最多 50 块磁盘同时同步，当需要同步的源VMware虚拟机磁盘总数大于50块时，需要扩容 Agentless 源端同步代理。</p>
</div>
<h3 id="配置步骤-3" tabindex="-1"><a class="header-anchor" href="#配置步骤-3"><span>配置步骤</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>默认已登录到HyperBDR控制台。<br>
默认已在HyperBDR中添加了VMware连接。</p>
</div>
<ol>
<li>点击顶部菜单栏 <strong>配置管理</strong> &gt; <strong>生产站点配置</strong> &gt; <strong>源端同步代理</strong>。</li>
</ol>
<blockquote>
<p>已安装的源端同步代理将显示在此页面。
<img src="@source/zh/userguide/poc/images/bind-sync-proxy-1.png" alt="bind-sync-proxy-1.png" loading="lazy"></p>
</blockquote>
<ol start="2">
<li>选择已安装的同步代理，点击 <strong>更多操作</strong> &gt; <strong>绑定</strong>。
<img src="@source/zh/userguide/poc/images/bind-sync-proxy-2.png" alt="bind-sync-proxy-2.png" loading="lazy">
<img src="@source/zh/userguide/poc/images/bind-sync-proxy-3.png" alt="bind-sync-proxy-3.png" loading="lazy"></li>
<li>选择所需的源端链接将新的源端同步代理绑定到生产 VMware 站点，确认后单击 <strong>确定</strong>。
<img src="@source/zh/userguide/poc/images/bind-sync-proxy-4.png" alt="bind-sync-proxy-4.png" loading="lazy">
<img src="@source/zh/userguide/poc/images/bind-sync-proxy-5.png" alt="bind-sync-proxy-5.png" loading="lazy"></li>
<li>查看与生产 VMware 站点绑定的源端同步代理。
<img src="@source/zh/userguide/poc/images/bind-sync-proxy-6.png" alt="bind-sync-proxy-6.png" loading="lazy">
<img src="@source/zh/userguide/poc/images/bind-sync-proxy-7.png" alt="bind-sync-proxy-7.png" loading="lazy"></li>
<li>解绑源端同步节点。</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>只能对没有注册主机的源端同步节点进行解绑操作。</p>
</div>
<p><img src="@source/zh/userguide/poc/images/bind-sync-proxy-8.png" alt="bind-sync-proxy-8.png" loading="lazy">
<img src="@source/zh/userguide/poc/images/bind-sync-proxy-9.png" alt="bind-sync-proxy-9.png" loading="lazy">
<img src="@source/zh/userguide/poc/images/bind-sync-proxy-10.png" alt="bind-sync-proxy-10.png" loading="lazy"></p>
</div></template>


