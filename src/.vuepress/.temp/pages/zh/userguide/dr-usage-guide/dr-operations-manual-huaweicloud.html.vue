<template><div><h1 id="云容灾操作手册-华为云对象存储" tabindex="-1"><a class="header-anchor" href="#云容灾操作手册-华为云对象存储"><span>云容灾操作手册（华为云对象存储）</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#_1-生产平台操作">1. 生产平台操作</router-link><ul><li><router-link to="#_1-1-登录容灾工具hyperbdr">1.1. 登录容灾工具HyperBDR</router-link></li><li><router-link to="#_1-2-场景i-vmware虚拟机-容灾至-华为云">1.2. 场景I：VMware虚拟机 容灾至 华为云</router-link></li><li><router-link to="#_1-3-场景ii-物理机及各类虚拟主机-容灾至-华为公有云">1.3. 场景II：物理机及各类虚拟主机 容灾至 华为公有云</router-link></li></ul></li><li><router-link to="#_2-对象存储设置">2. 对象存储设置</router-link><ul><li><router-link to="#_2-1-添加华为云-公有云-对象存储">2.1. 添加华为云（公有云）对象存储</router-link></li></ul></li><li><router-link to="#_3-容灾平台操作">3. 容灾平台操作</router-link><ul><li><router-link to="#_3-1-配置容灾恢复平台">3.1. 配置容灾恢复平台</router-link></li></ul></li><li><router-link to="#_4-执行容灾操作">4. 执行容灾操作</router-link><ul><li><router-link to="#_4-1-容灾配置">4.1. 容灾配置</router-link></li><li><router-link to="#_4-2-同步数据-全量-增量">4.2. 同步数据（全量/增量）</router-link></li><li><router-link to="#_4-3-容灾演练-容灾接管">4.3. 容灾演练/容灾接管</router-link></li><li><router-link to="#_4-4-查看容灾结果">4.4. 查看容灾结果</router-link></li><li><router-link to="#_4-5-清理验证主机">4.5. 清理验证主机</router-link></li></ul></li><li><router-link to="#_5-资源组容灾">5. 资源组容灾</router-link><ul><li><router-link to="#_5-1-新建资源组">5.1 新建资源组</router-link></li><li><router-link to="#_5-2-修改资源组">5.2. 修改资源组</router-link></li><li><router-link to="#_5-3-删除资源组">5.3. 删除资源组</router-link></li><li><router-link to="#_5-4-资源组-同步数据">5.4. 资源组 - 同步数据</router-link></li><li><router-link to="#_5-5-资源组-容灾接管-容灾演练">5.5. 资源组 - 容灾接管/容灾演练</router-link></li><li><router-link to="#_5-6-资源组-清理验证资源">5.6. 资源组 - 清理验证资源</router-link></li></ul></li><li><router-link to="#_6-策略设置">6. 策略设置</router-link><ul><li><router-link to="#_6-1-创建策略">6.1. 创建策略</router-link></li><li><router-link to="#_6-2-修改策略">6.2. 修改策略</router-link></li><li><router-link to="#_6-3-策略关联主机">6.3. 策略关联主机</router-link></li><li><router-link to="#_6-4-删除策略">6.4. 删除策略</router-link></li><li><router-link to="#_6-5-策略解绑关联资源-主机、资源组">6.5 策略解绑关联资源（主机、资源组）</router-link></li></ul></li><li><router-link to="#_7-告警设置">7. 告警设置</router-link><ul><li><router-link to="#_7-1-告警发送配置">7.1 告警发送配置</router-link></li><li><router-link to="#_7-2-通知配置">7.2 通知配置</router-link></li><li><router-link to="#_7-3-告警规则配置">7.3 告警规则配置</router-link></li></ul></li><li><router-link to="#_8-清理资源">8. 清理资源</router-link></li><li><router-link to="#附录一-参考-windows防火墙设置">附录一：参考-windows防火墙设置</router-link><ul><li><router-link to="#一、windows-2008-2012-2016">一、Windows 2008/2012/2016**</router-link></li><li><router-link to="#二、windows-2003">二、Windows 2003**</router-link></li></ul></li></ul></nav>
<h1 id="一、【容灾场景概述】" tabindex="-1"><a class="header-anchor" href="#一、【容灾场景概述】"><span>一、【容灾场景概述】</span></a></h1>
<p>该文档主要阐述使用HyperBDR产品，通过支持S3协议的对象存储，</p>
<p>将 <strong>【源端】各类主机</strong> 容灾备份至 <strong>【华为云（公有云）】</strong></p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-1.jpeg" alt="dr-operations-manual-huaweicloud-1.jpeg" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-1.jpeg</figcaption></figure>
<h1 id="二、【基础条件】" tabindex="-1"><a class="header-anchor" href="#二、【基础条件】"><span>二、【基础条件】</span></a></h1>
<ul>
<li>
<p>有需要容灾的主机（物理机/云主机/虚拟机）</p>
</li>
<li>
<p>已完成容灾工具&lt; HyperBDR&gt;的安装、注册及登录</p>
</li>
<li>
<p>可用的对象存储</p>
</li>
</ul>
<h1 id="三、【步骤索引】" tabindex="-1"><a class="header-anchor" href="#三、【步骤索引】"><span>三、【步骤索引】</span></a></h1>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-2.jpeg" alt="dr-operations-manual-huaweicloud-2.jpeg" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-2.jpeg</figcaption></figure>
<h1 id="四、【容灾操作】" tabindex="-1"><a class="header-anchor" href="#四、【容灾操作】"><span>四、【容灾操作】</span></a></h1>
<h2 id="_1-生产平台操作" tabindex="-1"><a class="header-anchor" href="#_1-生产平台操作"><span>1. 生产平台操作</span></a></h2>
<p><em>根据 容灾生产平台 (待容灾主机) 类型不同，查看以下对应适用的容灾操作说明</em></p>
<h3 id="_1-1-登录容灾工具hyperbdr" tabindex="-1"><a class="header-anchor" href="#_1-1-登录容灾工具hyperbdr"><span>1.1. 登录容灾工具HyperBDR</span></a></h3>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-3.png" alt="dr-operations-manual-huaweicloud-3.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-3.png</figcaption></figure>
<hr>
<h3 id="_1-2-场景i-vmware虚拟机-容灾至-华为云" tabindex="-1"><a class="header-anchor" href="#_1-2-场景i-vmware虚拟机-容灾至-华为云"><span>1.2. 场景I：VMware虚拟机 容灾至 华为云</span></a></h3>
<h4 id="_1-2-1-配置生产平台-vmware" tabindex="-1"><a class="header-anchor" href="#_1-2-1-配置生产平台-vmware"><span>1.2.1. 配置生产平台 (VMware)</span></a></h4>
<p>【说明】</p>
<ul>
<li>当源端（被容灾端）为VMware虚拟化时，需要进行相关配置。</li>
<li>该场景可以实现 <strong>无代理Agentless</strong> 方式容灾</li>
</ul>
<blockquote>
<p>即<strong>无需</strong>在每台VMware虚拟机内安装agent，以实现无入侵操作</p>
</blockquote>
<p>【基础条件】</p>
<ul>
<li>存在 vCenter/ESXi 集群</li>
<li>安装完成 VMware vSphere Client，并且登录  vCenter/ESXi 集群</li>
<li>已完成容灾工具 <strong>HyperBDR</strong> 的安装及登录</li>
<li>已开通生产平台VMware虚拟化到 <strong>HyperBDR</strong> 和 <strong>云同步网关</strong> 的网络策略</li>
</ul>
<p><strong>第一步：</strong> 点击上方 <strong>配置管理</strong> ，左侧菜单栏选择 <strong>生产站点配置</strong> ，点击 <strong>VMware</strong> 选择框
<img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-4.png" alt="dr-operations-manual-huaweicloud-4.png" loading="lazy"></p>
<p><strong>第二步：</strong> 点击 <strong>+添加</strong> 按钮，添加源端hamal无代理组件</p>
<blockquote>
<p>首次添加VMware需要安装hamal组件（见第三步）</p>
</blockquote>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-5.png" alt="dr-operations-manual-huaweicloud-5.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-5.png</figcaption></figure>
<p><strong>第三步：</strong> 按照界面指引安装hamal</p>
<blockquote>
<p>如果你已经在容灾方案验证准备文档中已经安装了Hamal，那么直接操作第四步即可。</p>
</blockquote>
<p>（1） 将OVA下载到VMware端，或者源端准备一台 CentOS7.x 版本的虚拟机。</p>
<p>（2） 通过OVA导入的主机或者在准备的 CentOS7.x 虚拟机后台执行安装命令。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>请根据当前容灾工具界面显示信息操作，该动作由用户在VMware vSphere Client环境中执行。</p>
</div>
<p>（3） 完成后回到容灾工具点击 <strong>下一步</strong> 按钮</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-6.png" alt="dr-operations-manual-huaweicloud-6.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-6.png</figcaption></figure>
<blockquote>
<p><em>VMware端使用OVA模板部署Hamal操作参考以下文档。</em><br>
<em>文档链接：</em><a href="https://docs.oneprocloud.com/userguide/poc/vmware-pre-settings.html#import-ova-images-and-create-proxy-virtual-machine-in-vmware" target="_blank" rel="noopener noreferrer"><em>https://docs.oneprocloud.com/userguide/poc/vmware-pre-settings.html#import-ova-images-and-create-proxy-virtual-machine-in-vmware</em></a></p>
</blockquote>
<p><strong>第四步：</strong> 弹框中填写相关信息</p>
<table>
<thead>
<tr>
<th><strong>鉴权地址</strong></th>
<th>vCenter/ESXi 的访问管理地址</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>用户名</strong></td>
<td>vCenter/ESXi 账号（管理员权限）</td>
</tr>
<tr>
<td><strong>密码</strong></td>
<td>vCenter/ESXI 账户密码</td>
</tr>
<tr>
<td><strong>同步节点</strong></td>
<td>上个步骤OVA导入的主机安装完后带出的ip信息</td>
</tr>
</tbody>
</table>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-7.png" alt="dr-operations-manual-huaweicloud-7.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-7.png</figcaption></figure>
<p><strong>完成配置</strong>
vCenter/ESXI 被成功加入到容灾生产平台中，重复以上步骤可以添加多个vCenter（按需）
<img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-8.png" alt="dr-operations-manual-huaweicloud-8.png" loading="lazy"></p>
<p>完成生产平台VMware配置，可进行 <a href="#__1-2-2-%E6%B7%BB%E5%8A%A0%E5%BE%85%E5%AE%B9%E7%81%BE%E4%B8%BB%E6%9C%BA"><strong>[1.2.2. 添加待容灾主机]</strong></a>添加容灾主机</p>
<h4 id="_1-2-2-添加待容灾主机" tabindex="-1"><a class="header-anchor" href="#_1-2-2-添加待容灾主机"><span>1.2.2. 添加待容灾主机</span></a></h4>
<p>上方选择 <strong>资源容灾</strong> -&gt; 点击左侧 <strong>主机容灾</strong> 之后，右侧点击 <strong>+添加主机</strong> ，点击 <strong>VMware</strong> 选项</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-9.png" alt="dr-operations-manual-huaweicloud-9.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-9.png</figcaption></figure>
<p>点击 <strong>无代理模式</strong> -&gt; <strong>VMware</strong> 选项，选择其中一个VMware源端连接，并点击 <strong>下一步</strong> 按钮</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-10.png" alt="dr-operations-manual-huaweicloud-10.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-10.png</figcaption></figure>
<p>在VCenter/ESXi的所有VMware主机列表中 勾选要容灾的主机，并点击 <strong>确定</strong> 按钮</p>
<blockquote>
<p>如果主机较多，可以右上角搜索，并执行批量勾选添加</p>
</blockquote>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-11.png" alt="dr-operations-manual-huaweicloud-11.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-11.png</figcaption></figure>
<p>在容灾界面可以看到 待容灾的VMware主机清单，勾选要操作的主机，点击 <strong>下一步</strong> 按钮，进入 <strong>容灾配置</strong> 操作</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-12.png" alt="dr-operations-manual-huaweicloud-12.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-12.png</figcaption></figure>
<p>完成源端容灾主机添加，可进行 <a href="#_4-%E6%89%A7%E8%A1%8C%E5%AE%B9%E7%81%BE%E6%93%8D%E4%BD%9C"><strong>[4. 执行容灾操作]</strong></a> 容灾操作</p>
<h3 id="_1-3-场景ii-物理机及各类虚拟主机-容灾至-华为公有云" tabindex="-1"><a class="header-anchor" href="#_1-3-场景ii-物理机及各类虚拟主机-容灾至-华为公有云"><span>1.3. 场景II：物理机及各类虚拟主机 容灾至 华为公有云</span></a></h3>
<h4 id="_1-3-1-linux主机安装agent" tabindex="-1"><a class="header-anchor" href="#_1-3-1-linux主机安装agent"><span>1.3.1 Linux主机安装Agent</span></a></h4>
<p>查看文档以进行操作。</p>
<p>文档链接： <a href="https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-linux-host" target="_blank" rel="noopener noreferrer">https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-linux-host</a></p>
<h4 id="_1-3-2-windows主机安装agent" tabindex="-1"><a class="header-anchor" href="#_1-3-2-windows主机安装agent"><span>1.3.2 Windows主机安装Agent</span></a></h4>
<p>查看文档以进行操作。</p>
<p>文档链接： <a href="https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-windows-host" target="_blank" rel="noopener noreferrer">https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-windows-host</a></p>
<p>完成源端容灾主机添加，可进行 <a href="#_4-%E6%89%A7%E8%A1%8C%E5%AE%B9%E7%81%BE%E6%93%8D%E4%BD%9C"><strong>[4. 执行容灾操作]</strong></a> 容灾操作</p>
<hr>
<h2 id="_2-对象存储设置" tabindex="-1"><a class="header-anchor" href="#_2-对象存储设置"><span>2. 对象存储设置</span></a></h2>
<h3 id="_2-1-添加华为云-公有云-对象存储" tabindex="-1"><a class="header-anchor" href="#_2-1-添加华为云-公有云-对象存储"><span>2.1. 添加华为云（公有云）对象存储</span></a></h3>
<p>（1） 上侧菜单栏点击 <strong>配置管理</strong>，左侧选择 <strong>存储配置</strong> 中的 <strong>对象存储</strong> 后，点击 <strong>+添加</strong>。</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-32.png" alt="dr-operations-manual-huaweicloud-32.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-32.png</figcaption></figure>
<p>（2） 在 <strong>对象存储平台</strong>，选择您所使用的华为云对象存储区域。</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-34.png" alt="dr-operations-manual-huaweicloud-34.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-34.png</figcaption></figure>
<p>（3） 填写用于鉴权认证对象存储的AK/SK，确认后点击 <strong>下一步</strong>。</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-36.png" alt="dr-operations-manual-huaweicloud-36.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-36.png</figcaption></figure>
<p>（4） 设置对象存储桶的名称后点击 <strong>确定</strong>。</p>
<blockquote>
<p>您可以使用区域内已经存在的对象存储桶，或者新建对象存储桶并自定义名称。</p>
</blockquote>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-38.png" alt="dr-operations-manual-huaweicloud-38.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-38.png</figcaption></figure>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-39.png" alt="dr-operations-manual-huaweicloud-39.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-39.png</figcaption></figure>
<p>（5）对象存储添加完成</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-42.png" alt="dr-operations-manual-huaweicloud-42.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-42.png</figcaption></figure>
<hr>
<h2 id="_3-容灾平台操作" tabindex="-1"><a class="header-anchor" href="#_3-容灾平台操作"><span>3. 容灾平台操作</span></a></h2>
<h3 id="_3-1-配置容灾恢复平台" tabindex="-1"><a class="header-anchor" href="#_3-1-配置容灾恢复平台"><span>3.1. 配置容灾恢复平台</span></a></h3>
<p>（1） 上侧菜单栏点击 <strong>配置管理</strong>，选择左侧 <strong>对象存储恢复网关</strong>，点击 <strong>添加</strong> 按钮。</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-43.png" alt="dr-operations-manual-huaweicloud-43.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-43.png</figcaption></figure>
<p>（2） 按以下步骤填写信息，创建对象存储恢复网关</p>
<blockquote>
<p>该步骤会在认证完成后自动在华为云认证租户下上传镜像，该镜像用于容灾演练和恢复</p>
</blockquote>
<p>按照如图所示，在添加目标容灾平台时需要填写华为云的认证信息，填写内容条目如下：</p>
<ul>
<li>Access Key ID**：**华为云账号Access Key ID</li>
<li>Access Key Secret**：**华为云账号Access Key Secret</li>
</ul>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-45.png" alt="dr-operations-manual-huaweicloud-45.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-45.png</figcaption></figure>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-46.png" alt="dr-operations-manual-huaweicloud-46.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-46.png</figcaption></figure>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-47.png" alt="dr-operations-manual-huaweicloud-47.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-47.png</figcaption></figure>
<p>确认信息后，点击 <strong>确定</strong> 按钮，在 <strong>对象存储恢复网关</strong> 页面中等待添加完成</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-51.png" alt="dr-operations-manual-huaweicloud-51.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-51.png</figcaption></figure>
<p>容灾平台华为云配置完成，可进行 <a href="#_1-%E7%94%9F%E4%BA%A7%E5%B9%B3%E5%8F%B0%E6%93%8D%E4%BD%9C"><strong>[1. 生产平台操作]</strong></a> 配置生产平台，或进行 <a href="#_4-%E6%89%A7%E8%A1%8C%E5%AE%B9%E7%81%BE%E6%93%8D%E4%BD%9C"><strong>[4. 执行容灾操作]</strong></a> 容灾操作</p>
<hr>
<h2 id="_4-执行容灾操作" tabindex="-1"><a class="header-anchor" href="#_4-执行容灾操作"><span>4. 执行容灾操作</span></a></h2>
<p>如果已经添加了待容灾主机，那么选择待容灾主机，点击下一步到容灾配置页面</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-53.png" alt="dr-operations-manual-huaweicloud-53.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-53.png</figcaption></figure>
<h3 id="_4-1-容灾配置" tabindex="-1"><a class="header-anchor" href="#_4-1-容灾配置"><span>4.1. 容灾配置</span></a></h3>
<p>在 <strong>容灾配置</strong> 页面，勾选待容灾主机，点击 <strong>容灾配置</strong> 按钮，并选择 <strong>对象存储恢复</strong> 选项按照容灾配置步骤进行操作。</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-55.png" alt="dr-operations-manual-huaweicloud-55.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-55.png</figcaption></figure>
<p><strong>容灾配置步骤一</strong>：指定容灾平台，选择容灾主机所在容灾平台的配置信息，并点击 <strong>下一步</strong> 按钮。</p>
<blockquote>
<p>容灾平台信息为空，则表示暂未添加容灾平台，需要 <a href="#_3-1-%E9%85%8D%E7%BD%AE%E5%AE%B9%E7%81%BE%E6%81%A2%E5%A4%8D%E5%B9%B3%E5%8F%B0"><strong>配置容灾恢复操作</strong></a> ，再进行后续操作。</p>
</blockquote>
<p>存储类型选择 <strong>对象存储恢复</strong>，选择配置好的对象存储和恢复平台。</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-57.png" alt="dr-operations-manual-huaweicloud-57.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-57.png</figcaption></figure>
<p><strong>容灾配置步骤二</strong>：计算资源配置，选择容灾主机在目标容灾平台使用的规格和系统类型，设置完成后，并点击 <strong>下一步</strong> 按钮。</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-59.png" alt="dr-operations-manual-huaweicloud-59.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-59.png</figcaption></figure>
<p><strong>容灾配置步骤三</strong>：指定卷类型，选择容灾主机在目标容灾平台所使用的卷类型，如果有多个卷，可以按照系统卷和数据卷进行分别设置，设置完成后，并点击 <strong>下一步</strong> 按钮。</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-61.png" alt="dr-operations-manual-huaweicloud-61.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-61.png</figcaption></figure>
<p>系统拥有多块磁盘的情况下可以手动选系统盘，如果您的原始系统中第一块磁盘并非用于启动的磁盘，必须在这里指定启动磁盘，否则可能导致启动失败。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>在块存储模式下，由于云平台API接口的限制，一旦数据同步完成，将无法更改用于启动的磁盘选项。在开始同步之前，请再次确认所选用于启动的磁盘。若选择错误，您将需要清理数据并重新进行同步。请谨慎操作，确保正确选择启动磁盘以避免不必要的重新同步步骤。</p>
</div>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-169.png" alt="dr-operations-manual-huaweicloud-169.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-169.png</figcaption></figure>
<p><strong>容灾配置步骤四</strong>：网络配置，选择容灾主机在目标容灾平台所使用的<strong>专有网络</strong>、<strong>子网</strong>以及启动时是否指定IP、配置公网IP和安全组，设置完成后，并点击 <strong>下一步</strong> 按钮。</p>
<blockquote>
<p><strong>专有网络</strong>与<strong>子网</strong>需要在华为云账户下提前创建。</p>
</blockquote>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-63.png" alt="dr-operations-manual-huaweicloud-63.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-63.png</figcaption></figure>
<p><strong>容灾配置步骤五</strong>：关联策略，待容灾主机关联相应的容灾策略（可以暂不进行关联），如果没有策略可以新建策略，完成后点击 <strong>确定</strong> 按钮。</p>
<blockquote>
<p>开始配置策略前，已经配置好的主机将自动进入 &quot;开始容灾&quot; 中。</p>
</blockquote>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-65.png" alt="dr-operations-manual-huaweicloud-65.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-65.png</figcaption></figure>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-66.png" alt="dr-operations-manual-huaweicloud-66.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-66.png</figcaption></figure>
<blockquote>
<p>容灾配置完成后，还可以选择容灾主机在更多操作中修改容灾配置。</p>
</blockquote>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-69.png" alt="dr-operations-manual-huaweicloud-69.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-69.png</figcaption></figure>
<hr>
<h3 id="_4-2-同步数据-全量-增量" tabindex="-1"><a class="header-anchor" href="#_4-2-同步数据-全量-增量"><span>4.2. 同步数据（全量/增量）</span></a></h3>
<p>在 <strong>开始容灾</strong> 步骤，可以勾选单个或多个容灾主机，并点击 <strong>立即同步</strong> 按钮直接进行数据同步。</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-71.png" alt="dr-operations-manual-huaweicloud-71.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-71.png</figcaption></figure>
<p>确认需要同步的容灾机器，并点击 <strong>确定</strong> 按钮</p>
<blockquote>
<p>首次点击，将同步全量数据，后续点击将同步增量数据，这里也可以勾选全量数据同步，则表示本次会进行全量数据同步。</p>
</blockquote>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-73.png" alt="dr-operations-manual-huaweicloud-73.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-73.png</figcaption></figure>
<p>等待容灾主机数据同步完成</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-75.png" alt="dr-operations-manual-huaweicloud-75.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-75.png</figcaption></figure>
<hr>
<h3 id="_4-3-容灾演练-容灾接管" tabindex="-1"><a class="header-anchor" href="#_4-3-容灾演练-容灾接管"><span>4.3. 容灾演练/容灾接管</span></a></h3>
<p>等待数据同步完成（同步快照完成），勾选需要容灾演练/容灾接管主机，并选择 <strong>容灾演练/容灾接管</strong> 按钮</p>
<blockquote>
<p>容灾演练/容灾接管功能保持一致，此功能则表示将容灾主机在容灾平台进行启动，启动后即可进行相关验证和接管工作</p>
</blockquote>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-77.png" alt="dr-operations-manual-huaweicloud-77.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-77.png</figcaption></figure>
<p>选择容灾主机启动时数据同步时间点（快照），并点击 <strong>确定</strong> 按钮，开始主机实例启动</p>
<blockquote>
<p>提示 : 该动作会按照当前这台容灾主机的容灾配置时设定的容灾参数，在容灾平台华为云上启动一台实例，即为容灾到云上的主机，这里的同步时间点是每同步一次数据便会产生一个快照时间，用于启动时进行选择（同步时间点保留个数可以按需进行配置）详情查看链接</p>
</blockquote>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-79.png" alt="dr-operations-manual-huaweicloud-79.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-79.png</figcaption></figure>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-80.png" alt="dr-operations-manual-huaweicloud-80.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-80.png</figcaption></figure>
<hr>
<h3 id="_4-4-查看容灾结果" tabindex="-1"><a class="header-anchor" href="#_4-4-查看容灾结果"><span>4.4. 查看容灾结果</span></a></h3>
<p>容灾主机启动完成后，主机启动状态显示主机在容平台的相关配置信息，则表示 <strong>容灾演练/容灾接管</strong> 执行成功。可以登录华为云查看容灾主机的运行情况</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-83.png" alt="dr-operations-manual-huaweicloud-83.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-83.png</figcaption></figure>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-84.png" alt="dr-operations-manual-huaweicloud-84.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-84.png</figcaption></figure>
<h3 id="_4-5-清理验证主机" tabindex="-1"><a class="header-anchor" href="#_4-5-清理验证主机"><span>4.5. 清理验证主机</span></a></h3>
<p>选中需要 <strong>清理验证主机</strong> 的主机，在 <strong>更多操作</strong> 中点击 <strong>清理验证主机</strong> 选项。等待清理完成即可。</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-87.png" alt="dr-operations-manual-huaweicloud-87.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-87.png</figcaption></figure>
<hr>
<h2 id="_5-资源组容灾" tabindex="-1"><a class="header-anchor" href="#_5-资源组容灾"><span>5. 资源组容灾</span></a></h2>
<p><strong>资源组容灾</strong>，主要适用于具有相同属性和需求的多个容灾主机资源的组，可以是业务组的维度、也可以是其他维度的资源的集合，所有的操作配置的维度均为资源组。包含资源组同步策略设置，所有组内的容灾主机数据同步指令下发保持同一时间点，来保证资源组的所有主机数据底层保持一致性。</p>
<blockquote>
<p><strong>资源组容灾</strong>在添加容灾主机时，需要确保单台主机 <strong>容灾配置 <strong>完成后方可加入到容灾资源组，否则无法直接加入</strong>资源组容灾</strong>。</p>
</blockquote>
<h3 id="_5-1-新建资源组" tabindex="-1"><a class="header-anchor" href="#_5-1-新建资源组"><span>5.1 新建资源组</span></a></h3>
<p>点击上方菜单栏 <strong>资源组容灾</strong>，点击 <strong>新建资源组</strong> 按钮</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-89.png" alt="dr-operations-manual-huaweicloud-89.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-89.png</figcaption></figure>
<p>配置资源组基本信息，包括<strong>资源组名称</strong>和**描述，**此处两部分内部可以按照需求进行添加即可，并点击 <strong>下一步</strong> 按钮</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-91.png" alt="dr-operations-manual-huaweicloud-91.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-91.png</figcaption></figure>
<p>关联资源，选择左侧已经完成容灾配置的容灾主机资源，并点击 <strong>添加资源</strong> 按钮，将对应容灾主机加入到资源组中，并点击 <strong>下一步</strong> 按钮。</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-93.png" alt="dr-operations-manual-huaweicloud-93.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-93.png</figcaption></figure>
<p>同步策略，选择资源组所使用的策略，如果已经提前已经创建同步策略，则可以直接选择，如果没有可以点击 <strong>创建策略</strong> 按钮，创建一个新的容灾策略。</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-95.png" alt="dr-operations-manual-huaweicloud-95.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-95.png</figcaption></figure>
<p>启动编排，左侧已关联资源中的主机资源可以进行启动顺序的调整，确认后点击完成</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-97.png" alt="dr-operations-manual-huaweicloud-97.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-97.png</figcaption></figure>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-98.png" alt="dr-operations-manual-huaweicloud-98.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-98.png</figcaption></figure>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-99.png" alt="dr-operations-manual-huaweicloud-99.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-99.png</figcaption></figure>
<h3 id="_5-2-修改资源组" tabindex="-1"><a class="header-anchor" href="#_5-2-修改资源组"><span>5.2. 修改资源组</span></a></h3>
<p>选择资源组后点击  <strong>更多操作</strong> 按钮，可以对资源组的 基本信息、关联资源、关联策略和启动编排进行修改。</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-103.png" alt="dr-operations-manual-huaweicloud-103.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-103.png</figcaption></figure>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-104.png" alt="dr-operations-manual-huaweicloud-104.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-104.png</figcaption></figure>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-105.png" alt="dr-operations-manual-huaweicloud-105.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-105.png</figcaption></figure>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-106.png" alt="dr-operations-manual-huaweicloud-106.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-106.png</figcaption></figure>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-107.png" alt="dr-operations-manual-huaweicloud-107.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-107.png</figcaption></figure>
<h3 id="_5-3-删除资源组" tabindex="-1"><a class="header-anchor" href="#_5-3-删除资源组"><span>5.3. 删除资源组</span></a></h3>
<p>勾选资源组，并点击 <strong>删除资源组</strong> 按钮来执行删除资源组操作</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-113.png" alt="dr-operations-manual-huaweicloud-113.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-113.png</figcaption></figure>
<p>按照删除资源组弹框提醒，勾选相关配置选项，输入 <strong>Yes</strong> 字符来确定删除动作，并点击 <strong>确定</strong> 按钮完成删除操作。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p><strong>选项一：</strong> 该操作仅删除资源组，资源组中的资源将会保留 【资源组内容灾主机将会单独在主机容灾里面展示，仍然可以对单个容灾主机进行容灾操作，继续保留已经同步完成的数据，不会从容灾平台清理掉】<br>
<strong>选项二：</strong> 该操作不仅删除资源组，资源组中的资源也将会删除【资源组内容灾主机会直接被从容灾平台清理掉，所有同步的数据将会被清理掉】<br>
<strong>选项三：</strong> (不推荐)我确认要强制清理资源，可能会导致有资源残留（仅在清理失败时使用）【在特殊场景下勾选使用，正常流程无需勾选，特殊场景例如：资源组中的容灾主机失联、清理失败等，此选项会直接清理记录，不会发起调用请求】</p>
</div>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-115.png" alt="dr-operations-manual-huaweicloud-115.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-115.png</figcaption></figure>
<h3 id="_5-4-资源组-同步数据" tabindex="-1"><a class="header-anchor" href="#_5-4-资源组-同步数据"><span>5.4. 资源组 - 同步数据</span></a></h3>
<p>勾选配置完成的资源组，点击 <strong>立即同步</strong> 按钮，按照提示框点击 <strong>确定</strong> 按钮，进行数据同步操作，也可以按照资源组的 <strong>关联策略</strong> 自动执行同步数据动作。</p>
<blockquote>
<p>初次加入资源组的容灾主机，需要进行 <strong>立即同步</strong> 数据操作，即使在容灾主机在 <strong>主机容灾</strong> 时已经进行了数据同步操作。
附加到资源组的同步策略将会自动按照策略设定执行同步数据任务</p>
</blockquote>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-117.png" alt="dr-operations-manual-huaweicloud-117.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-117.png</figcaption></figure>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-118.png" alt="dr-operations-manual-huaweicloud-118.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-118.png</figcaption></figure>
<h3 id="_5-5-资源组-容灾接管-容灾演练" tabindex="-1"><a class="header-anchor" href="#_5-5-资源组-容灾接管-容灾演练"><span>5.5. 资源组 - 容灾接管/容灾演练</span></a></h3>
<p>等待数据同步完成（同步快照完成），勾选需要容灾演练/容灾接管的资源组，并选择 <strong>容灾演练/容灾接管</strong> 按钮</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>初次加入资源组的容灾主机，需要进行 <strong>立即同步</strong> 数据操作，不然无法进行 <strong>容灾演练/容灾接管</strong> 操作。即使资源组内的容灾主机已经在 <strong>主机容灾</strong> 时进行了数据同步操作。</p>
</div>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-121.png" alt="dr-operations-manual-huaweicloud-121.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-121.png</figcaption></figure>
<p>弹出框选择 <strong>同步时间点</strong> 快照副本，确认信息无误后，点击 <strong>确定</strong> 按钮</p>
<blockquote>
<p>同步时间点，则每次数据同步完成后产生的快照副本，记录了每一次可恢复数据时间点可供选择</p>
</blockquote>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-123.png" alt="dr-operations-manual-huaweicloud-123.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-123.png</figcaption></figure>
<p>资源组状态为演练/接管完成，即可登录到容灾平台进行演练或接管操作。</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-125.png" alt="dr-operations-manual-huaweicloud-125.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-125.png</figcaption></figure>
<h3 id="_5-6-资源组-清理验证资源" tabindex="-1"><a class="header-anchor" href="#_5-6-资源组-清理验证资源"><span>5.6. 资源组 - 清理验证资源</span></a></h3>
<p>勾选需要清理验证资源的资源组，点击 <strong>更多操作</strong> 按钮，选择 <strong>清理验证资源</strong> 按钮</p>
<blockquote>
<p>清理验证资源，则表示将已经执行了 <strong>容灾演练/容灾接管</strong> 的资源组，并在容灾平台产生的容灾主机实例进行删除动作，此动作防止直接人工操作容灾平台删除实例而导致的风险。</p>
</blockquote>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>如果容灾平台恢复的容灾主机已经接管业务，请不要执行此操作，此操作会直接删除容灾平台生成的实例。**</p>
</div>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-127.png" alt="dr-operations-manual-huaweicloud-127.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-127.png</figcaption></figure>
<p>确认需要在容灾平台清理的验证资源准确无误后，输入框填写 <strong>Yes</strong> 字符进行确认，并点击 <strong>确定</strong> 按钮即可</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-129.png" alt="dr-operations-manual-huaweicloud-129.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-129.png</figcaption></figure>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-130.png" alt="dr-operations-manual-huaweicloud-130.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-130.png</figcaption></figure>
<h2 id="_6-策略设置" tabindex="-1"><a class="header-anchor" href="#_6-策略设置"><span>6. 策略设置</span></a></h2>
<h3 id="_6-1-创建策略" tabindex="-1"><a class="header-anchor" href="#_6-1-创建策略"><span>6.1. 创建策略</span></a></h3>
<p>上方菜单栏点击 <strong>配置管理</strong>，左侧选择 <strong>策略设置</strong>，点击 <strong>创建策略</strong>。</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-133.png" alt="dr-operations-manual-huaweicloud-133.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-133.png</figcaption></figure>
<p>创建策略页面可以修改策略配置的各种参数。</p>
<h4 id="_6-1-1-策略名称、保留快照数量、策略状态" tabindex="-1"><a class="header-anchor" href="#_6-1-1-策略名称、保留快照数量、策略状态"><span>6.1.1 策略名称、保留快照数量、策略状态</span></a></h4>
<table>
<thead>
<tr>
<th><strong>参数</strong></th>
<th><strong>描述</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>策略名称</td>
<td>填写同步策略的名称，自定义配置，其他容灾资源组都可以共用。</td>
</tr>
<tr>
<td>保留快照数量</td>
<td>配置同步快照的保留数量，快照数量取值范围为(1-128)的整数，如不设置默认为128。快照数量达到设定配额后将从最早的快照开始删除，始终保持设定的快照个数。</td>
</tr>
<tr>
<td>策略状态</td>
<td>控制同步策略的开启与关闭。</td>
</tr>
</tbody>
</table>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-135.png" alt="dr-operations-manual-huaweicloud-135.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-135.png</figcaption></figure>
<h4 id="_6-1-2-同步策略" tabindex="-1"><a class="header-anchor" href="#_6-1-2-同步策略"><span>6.1.2 同步策略</span></a></h4>
<p>勾选 <strong>同步策略-增量同步</strong>，可以开启并设置增量数据同步策略的参数。</p>
<p>勾选 <strong>同步策略-全量同步</strong>，可以开启并设置全量数据同步策略的参数。</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-137.png" alt="dr-operations-manual-huaweicloud-137.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-137.png</figcaption></figure>
<table>
<thead>
<tr>
<th><strong>参数</strong></th>
<th><strong>描述</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>周期</td>
<td>同步策略执行周期，可以设置为 <strong>每间隔N分钟</strong>、<strong>每间隔N小时</strong>、<strong>每N天</strong>、<strong>每周</strong>、<strong>每月</strong> 的周期进行设置周期性同步任务触发条件</td>
</tr>
<tr>
<td>分钟数</td>
<td>在 <strong>周期</strong> 设置为 <strong>每间隔N分钟</strong> 时可以进行设置，设置每间隔N分钟执行一次，其中N取值范围为[5-59]的整数。 <br> 本次设置完成后，应用的所有资源组都会按照此策略生效</td>
</tr>
<tr>
<td>小时数</td>
<td>在 <strong>周期</strong> 设置为 <strong>每间隔N小时</strong> 时可以进行设置，设置每间隔N小时执行一次，其中N取值范围为[1-23]的整数。</td>
</tr>
<tr>
<td>天数</td>
<td>在 <strong>周期</strong> 设置为 <strong>每N天</strong>时可以进行设置，设置每N天执行一次，其中N取值范围为[1-30]的整数。</td>
</tr>
<tr>
<td>日期（周）</td>
<td>在 <strong>周期</strong> 设置为 <strong>每周</strong> 时可以进行设置，每周几执行一次同步策略。 <br> 每周执行一次，其中n取值范围为[周一、周二、周三、周四、周五、周六、周日]，可多选。</td>
</tr>
<tr>
<td>日期（月）</td>
<td>在 <strong>周期</strong> 设置为 <strong>每月</strong> 时可以进行设置，每月的几号执行一次同步策略。 <br> 每月几号执行一次，其中可选范围为[1-31、月末]，可多选。 <br> 29号：在2月份只在闰年时会执行，平年2月份会跳过不执行。 <br> 30号：跳过2月份不执行，其他都执行。 <br> 31号：只在[1，3，5，7，8，10，12]月份执行，其他不执行。 <br> 月末：每个月最后一天执行。</td>
</tr>
<tr>
<td>开始时间</td>
<td>在 <strong>周期</strong> 设置为 <strong>每间隔N分钟</strong> 和 <strong>每间隔N小时</strong> 时均可以进行设置。 <br> 设置同步策略的第一次触发时间。</td>
</tr>
<tr>
<td>时间（<strong>每周</strong>）</td>
<td>在 <strong>周期</strong> 设置为 <strong>每周</strong> 时可以进行设置。 <br> 设置每周几当天的时间开始触发策略执行同步。</td>
</tr>
<tr>
<td>时间（<strong>每月</strong>）</td>
<td>在 <strong>周期</strong> 设置为 <strong>每月</strong> 时可以进行设置。 <br> 设置每月当天的时间开始触发策略执行同步。</td>
</tr>
</tbody>
</table>
<h4 id="_6-1-3-限速策略" tabindex="-1"><a class="header-anchor" href="#_6-1-3-限速策略"><span>6.1.3 限速策略</span></a></h4>
<p>支持 多时间段限速 (支持在同一周期内设置不同时间段的限速，切换周期会清除当前设定的限速设置)</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-139.png" alt="dr-operations-manual-huaweicloud-139.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-139.png</figcaption></figure>
<table>
<thead>
<tr>
<th><strong>参数</strong></th>
<th><strong>描述</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>周期</td>
<td>限速周期，可以设置为<strong>每N天</strong>、<strong>每周</strong>、<strong>每月</strong> 的周期进行设置周期性触发限速条件</td>
</tr>
<tr>
<td>天数</td>
<td>在 <strong>周期</strong> 设置为 <strong>每N天</strong>时可以进行设置，设置每N天执行一次，其中N取值范围为[1-30]的整数。</td>
</tr>
<tr>
<td>日期（每周）</td>
<td>在 <strong>周期</strong> 设置为 <strong>每周</strong> 时可以进行设置，每周几执行一次限速策略。 <br> 每周执行一次，其中n取值范围为[周一、周二、周三、周四、周五、周六、周日]，可多选。</td>
</tr>
<tr>
<td>日期（每月）</td>
<td>在 <strong>周期</strong> 设置为 <strong>每月</strong> 时可以进行设置，每月的几号执行一次同步策略。 <br> 每月几号执行一次，其中可选范围为[1-31、月末]，可多选。 <br> 29号：在2月份只在闰年时会执行，平年2月份会跳过不执行。 <br> 30号：跳过2月份不执行，其他都执行。 <br> 31号：只在[1，3，5，7，8，10，12]月份执行，其他不执行。 <br> 月末：每个月最后一天执行。</td>
</tr>
<tr>
<td>限速时间</td>
<td>设置限速任务触发的时间。</td>
</tr>
<tr>
<td>主机限速</td>
<td>主机限速值应为≥1的整数。单位: Mbps</td>
</tr>
</tbody>
</table>
<h4 id="_6-1-4-保留策略" tabindex="-1"><a class="header-anchor" href="#_6-1-4-保留策略"><span>6.1.4 保留策略</span></a></h4>
<p>可以勾选按序列保留，开启并设置快照保留策略 (设置按快照序列进行快照保留，通过该设定可以让特殊时间点的快照保留指定时间，例如：每个月的第一个快照保留3周。注意：在设置时，请保证有充足的配额制作新的快照，否则同步数据将失败。)</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-141.png" alt="dr-operations-manual-huaweicloud-141.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-141.png</figcaption></figure>
<h3 id="_6-2-修改策略" tabindex="-1"><a class="header-anchor" href="#_6-2-修改策略"><span>6.2. 修改策略</span></a></h3>
<p>勾选已经创建的同步策略，点击 <strong>更多操作</strong>，选择 <strong>修改</strong>，可以修改同步策略的参数。</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-143.png" alt="dr-operations-manual-huaweicloud-143.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-143.png</figcaption></figure>
<h3 id="_6-3-策略关联主机" tabindex="-1"><a class="header-anchor" href="#_6-3-策略关联主机"><span>6.3. 策略关联主机</span></a></h3>
<p>勾选已经创建的同步策略，在点击 <strong>更多操作</strong>，选择 <strong>关联主机</strong>，勾选未关联策略的主机后点击 <strong>确定</strong>，可以进行关联。</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-145.png" alt="dr-operations-manual-huaweicloud-145.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-145.png</figcaption></figure>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-146.png" alt="dr-operations-manual-huaweicloud-146.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-146.png</figcaption></figure>
<h3 id="_6-4-删除策略" tabindex="-1"><a class="header-anchor" href="#_6-4-删除策略"><span>6.4. 删除策略</span></a></h3>
<p>勾选已经创建的同步策略，点击 <strong>更多操作</strong>，选择 <strong>删除</strong>，确定即可删除未关联主机的策略。</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-149.png" alt="dr-operations-manual-huaweicloud-149.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-149.png</figcaption></figure>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-150.png" alt="dr-operations-manual-huaweicloud-150.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-150.png</figcaption></figure>
<blockquote>
<p>如果策略已经关联资源（主机、资源组），则不支持删除，请先解）再进行删除操作。</p>
</blockquote>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-153.png" alt="dr-operations-manual-huaweicloud-153.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-153.png</figcaption></figure>
<h3 id="_6-5-策略解绑关联资源-主机、资源组" tabindex="-1"><a class="header-anchor" href="#_6-5-策略解绑关联资源-主机、资源组"><span>6.5 策略解绑关联资源（主机、资源组）</span></a></h3>
<p>点击策略名称，选择 **关联主机 <strong>或</strong> 关联资源组 **的标签页，勾选需要解绑的资源，点击 **解绑主机 **或 **解绑资源组 **按钮，确定后即可解绑关联资源。</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-155.png" alt="dr-operations-manual-huaweicloud-155.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-155.png</figcaption></figure>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-156.png" alt="dr-operations-manual-huaweicloud-156.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-156.png</figcaption></figure>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-157.png" alt="dr-operations-manual-huaweicloud-157.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-157.png</figcaption></figure>
<h2 id="_7-告警设置" tabindex="-1"><a class="header-anchor" href="#_7-告警设置"><span>7. 告警设置</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Currently, two methods of Email alerts and SMS alerts are supported.</p>
</div>
<h3 id="_7-1-告警发送配置" tabindex="-1"><a class="header-anchor" href="#_7-1-告警发送配置"><span>7.1 告警发送配置</span></a></h3>
<h4 id="_7-1-1-email-邮件告警" tabindex="-1"><a class="header-anchor" href="#_7-1-1-email-邮件告警"><span>7.1.1 Email 邮件告警</span></a></h4>
<ol>
<li>Log in the Broadview coss console</li>
</ol>
<blockquote>
<p>Login Address：https://&lt;HyperBDR IP&gt;:30443<br>
Default administrator user：admin<br>
Default administrator password：P@ssw0rd</p>
</blockquote>
<ol start="2">
<li>
<p>Configure SMTP</p>
</li>
<li>
<p>Send Test Email</p>
</li>
</ol>
<h4 id="_7-1-2-sms-短信告警" tabindex="-1"><a class="header-anchor" href="#_7-1-2-sms-短信告警"><span>7.1.2 SMS 短信告警</span></a></h4>
<ol>
<li>Log in the Broadview coss console</li>
</ol>
<blockquote>
<p>Login Address：https://&lt;HyperBDR IP&gt;:30443<br>
Default administrator user：admin<br>
Default administrator password：P@ssw0rd</p>
</blockquote>
<ol start="2">
<li>
<p>Configure SMS Service</p>
</li>
<li>
<p>Send Test SMS</p>
</li>
</ol>
<h3 id="_7-2-通知配置" tabindex="-1"><a class="header-anchor" href="#_7-2-通知配置"><span>7.2 通知配置</span></a></h3>
<blockquote>
<p>Logged into the HyperBDR console by default</p>
</blockquote>
<ol>
<li>
<p>Add Notufication</p>
</li>
<li>
<p>Configure Notufication</p>
</li>
</ol>
<h3 id="_7-3-告警规则配置" tabindex="-1"><a class="header-anchor" href="#_7-3-告警规则配置"><span>7.3 告警规则配置</span></a></h3>
<h4 id="_7-3-1-资源告警" tabindex="-1"><a class="header-anchor" href="#_7-3-1-资源告警"><span>7.3.1 资源告警</span></a></h4>
<ol>
<li>
<p>Create Resource Alert</p>
</li>
<li>
<p>Configure Resource Alert</p>
</li>
</ol>
<h4 id="_7-3-2-事件告警" tabindex="-1"><a class="header-anchor" href="#_7-3-2-事件告警"><span>7.3.2 事件告警</span></a></h4>
<ol>
<li>
<p>Create Event Alert</p>
</li>
<li>
<p>Configure Event Alert</p>
</li>
</ol>
<h2 id="_8-清理资源" tabindex="-1"><a class="header-anchor" href="#_8-清理资源"><span>8. 清理资源</span></a></h2>
<p>清理资源，将添加到容灾平台的容灾主机进行清理删除操作，该步骤完成后，所选主机无法进行容灾操作。</p>
<blockquote>
<p>注意：清理资源对源机、已经启动云上的主机没有影响</p>
</blockquote>
<p>勾选已经需要清理资源的容灾主机，点击 <strong>更多操作</strong>，选择 <strong>清理资源</strong>，确认信息并勾选确认即可清理资源。</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-161.png" alt="dr-operations-manual-huaweicloud-161.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-161.png</figcaption></figure>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-162.png" alt="dr-operations-manual-huaweicloud-162.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-162.png</figcaption></figure>
<hr>
<h2 id="附录一-参考-windows防火墙设置" tabindex="-1"><a class="header-anchor" href="#附录一-参考-windows防火墙设置"><span>附录一：参考-windows防火墙设置</span></a></h2>
<p><strong>请根据实际需要在以下两种环境中选择配置：</strong></p>
<h3 id="一、windows-2008-2012-2016" tabindex="-1"><a class="header-anchor" href="#一、windows-2008-2012-2016"><span>一、Windows 2008/2012/2016**</span></a></h3>
<p>打开【Windows防火墙】，将Windows-Agent.exe服务加入&quot;防火墙允许通过&quot;，详见下图所示：</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-165.jpeg" alt="dr-operations-manual-huaweicloud-165.jpeg" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-165.jpeg</figcaption></figure>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-166.jpeg" alt="dr-operations-manual-huaweicloud-166.jpeg" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-166.jpeg</figcaption></figure>
<h3 id="二、windows-2003" tabindex="-1"><a class="header-anchor" href="#二、windows-2003"><span>二、Windows 2003**</span></a></h3>
<p>打开Windows防火墙，依次点击【例外】→【添加程序】→【浏览】</p>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-167.png" alt="dr-operations-manual-huaweicloud-167.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-167.png</figcaption></figure>
<figure><img src="@source/zh/userguide/dr-usage-guide/images/dr-operations-manual-huaweicloud-168.png" alt="dr-operations-manual-huaweicloud-168.png" tabindex="0" loading="lazy"><figcaption>dr-operations-manual-huaweicloud-168.png</figcaption></figure>
<p>图3中，选中Windows-Agent.exe程序，点击【打开】；<br>
在图4“添加程序”列表可看到“Windows-Agent.exe”默认被选中，点击【确定】完成添加，重启系统。<br>
注：目录默认为“C:\Program Files (x86)\Windows-Agent\ Windows-Agent.exe”</p>
</div></template>


