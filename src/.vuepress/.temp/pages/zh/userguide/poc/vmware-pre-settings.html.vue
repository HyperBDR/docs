<template><div><h1 id="vmware源端无代理预设置" tabindex="-1"><a class="header-anchor" href="#vmware源端无代理预设置"><span>VMware源端无代理预设置</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#vmware环境准备">VMware环境准备</router-link></li><li><router-link to="#vmware用户权限要求">VMware用户权限要求</router-link><ul><li><router-link to="#为什么我们需要这些权限">为什么我们需要这些权限？</router-link></li><li><router-link to="#vmware用户权限">VMware用户权限</router-link></li><li><router-link to="#vcenter权限开放设置">vCenter权限开放设置</router-link></li><li><router-link to="#hyperbdr填写">HyperBDR填写</router-link></li></ul></li><li><router-link to="#下载-ova-镜像">下载 OVA 镜像</router-link></li><li><router-link to="#在vmware中导入ova镜像并创建proxy虚拟机">在VMware中导入OVA镜像并创建proxy虚拟机</router-link><ul><li><router-link to="#部署vof模板">部署VOF模板</router-link></li><li><router-link to="#修改proxy虚拟机规格">修改Proxy虚拟机规格</router-link></li><li><router-link to="#proxy虚机启动">Proxy虚机启动</router-link></li></ul></li></ul></nav>
<h2 id="vmware环境准备" tabindex="-1"><a class="header-anchor" href="#vmware环境准备"><span>VMware环境准备</span></a></h2>
<ol>
<li>通过vCenter导出主机信息：<RouteLink to="/zh/userguide/presales/hyperbdr-vmware-investigation.html">VMware快速调查</RouteLink></li>
<li>根据导出的信息填写虚拟机主机的详细信息，用于容灾设置。</li>
</ol>
<h2 id="vmware用户权限要求" tabindex="-1"><a class="header-anchor" href="#vmware用户权限要求"><span>VMware用户权限要求</span></a></h2>
<h3 id="为什么我们需要这些权限" tabindex="-1"><a class="header-anchor" href="#为什么我们需要这些权限"><span>为什么我们需要这些权限？</span></a></h3>
<p>HyperBDR利用VMware的CBT技术实现增量数据同步。CBT (Change Block Tracking)是VMware中用于增量备份和复制的一种技术。它跟踪虚拟磁盘上发生更改的块，在备份和复制过程中只允许传输与这些更改相关的数据。</p>
<h3 id="vmware用户权限" tabindex="-1"><a class="header-anchor" href="#vmware用户权限"><span>VMware用户权限</span></a></h3>
<p>准备用于数据同步的VMware用户认证信息，并确保该用户具有相应的权限。</p>
<p>为VMware用户提供以下权限:</p>
<table>
<thead>
<tr>
<th>权限类型</th>
<th>权限</th>
</tr>
</thead>
<tbody>
<tr>
<td>主机配置文件</td>
<td>查看主机配置文件</td>
</tr>
<tr>
<td>全局</td>
<td>启用方法</td>
</tr>
<tr>
<td></td>
<td>禁用方法</td>
</tr>
<tr>
<td></td>
<td>许可证</td>
</tr>
<tr>
<td>内容库</td>
<td>下载文件</td>
</tr>
<tr>
<td></td>
<td>更新配置设置</td>
</tr>
<tr>
<td></td>
<td>查看配置设置</td>
</tr>
<tr>
<td></td>
<td>读取存储</td>
</tr>
<tr>
<td>已调度任务</td>
<td>创建任务</td>
</tr>
<tr>
<td>数据存储</td>
<td>低级别文件操作</td>
</tr>
<tr>
<td></td>
<td>更新虚拟机元数据</td>
</tr>
<tr>
<td></td>
<td>更新虚拟机文件</td>
</tr>
<tr>
<td></td>
<td>浏览数据存储</td>
</tr>
<tr>
<td>虚拟机</td>
<td>交互</td>
</tr>
<tr>
<td></td>
<td>备份虚拟机上的操作</td>
</tr>
<tr>
<td></td>
<td>对所有磁盘执行碎片整理</td>
</tr>
<tr>
<td></td>
<td>恢复 Fault Tolerance</td>
</tr>
<tr>
<td></td>
<td>打开 Fault Tolerance</td>
</tr>
<tr>
<td></td>
<td>暂停或取消暂停</td>
</tr>
<tr>
<td></td>
<td>通过 VIX API 执行客户机操作系统管理</td>
</tr>
<tr>
<td></td>
<td>重置</td>
</tr>
<tr>
<td></td>
<td>客户机操作</td>
</tr>
<tr>
<td></td>
<td>客户机操作修改</td>
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
<td>快照管理</td>
</tr>
<tr>
<td></td>
<td>创建快照</td>
</tr>
<tr>
<td></td>
<td>移除快照</td>
</tr>
<tr>
<td></td>
<td>更改配置</td>
</tr>
<tr>
<td></td>
<td>修改设备设置</td>
</tr>
<tr>
<td></td>
<td>切换派生父项</td>
</tr>
<tr>
<td></td>
<td>切换磁盘更改跟踪</td>
</tr>
<tr>
<td></td>
<td>基于路径重新加载</td>
</tr>
<tr>
<td></td>
<td>显示连接设置</td>
</tr>
<tr>
<td></td>
<td>更改设置</td>
</tr>
<tr>
<td></td>
<td>更改资源</td>
</tr>
<tr>
<td></td>
<td>查询 Fault Tolerance 兼容性</td>
</tr>
<tr>
<td></td>
<td>查询无所有者的文件</td>
</tr>
<tr>
<td></td>
<td>获取磁盘租约</td>
</tr>
<tr>
<td></td>
<td>配置托管主体</td>
</tr>
<tr>
<td></td>
<td>重置客户机信息</td>
</tr>
<tr>
<td></td>
<td>高级配置</td>
</tr>
<tr>
<td></td>
<td>服务配置</td>
</tr>
<tr>
<td></td>
<td>修改服务配置</td>
</tr>
<tr>
<td></td>
<td>查询服务配置</td>
</tr>
<tr>
<td></td>
<td>管理服务配置</td>
</tr>
<tr>
<td></td>
<td>读取服务配置</td>
</tr>
<tr>
<td>置备</td>
<td>允许下载虚拟机</td>
</tr>
<tr>
<td></td>
<td>允许对磁盘进行只读访问</td>
</tr>
<tr>
<td></td>
<td>允许访问文件</td>
</tr>
<tr>
<td></td>
<td>允许访问磁盘</td>
</tr>
<tr>
<td></td>
<td>自定义客户机</td>
</tr>
<tr>
<td></td>
<td>读取自定义规范</td>
</tr>
</tbody>
</table>
<h3 id="vcenter权限开放设置" tabindex="-1"><a class="header-anchor" href="#vcenter权限开放设置"><span>vCenter权限开放设置</span></a></h3>
<h4 id="步骤01-登录vcenter-administrator-控制台" tabindex="-1"><a class="header-anchor" href="#步骤01-登录vcenter-administrator-控制台"><span>步骤01：登录vCenter Administrator 控制台</span></a></h4>
<h4 id="步骤02-添加接入用户" tabindex="-1"><a class="header-anchor" href="#步骤02-添加接入用户"><span>步骤02：添加接入用户</span></a></h4>
<p>点击 <strong>&quot;菜单&quot;</strong>, <strong>&quot;系统管理&quot;</strong></p>
<figure><img src="@source/zh/userguide/poc/images/create-vmware-account-1.png" alt="create-vmware-account-1.png" tabindex="0" loading="lazy"><figcaption>create-vmware-account-1.png</figcaption></figure>
<p>点击左侧 <strong>&quot;用户和组&quot;</strong>, 选择 <strong>&quot;用户&quot;</strong> 标签， 选择正确登录vCenter的 <strong>&quot;Domain&quot;</strong>, 点击 <strong>&quot;添加&quot;</strong> 按钮。</p>
<figure><img src="@source/zh/userguide/poc/images/create-vmware-account-2.png" alt="create-vmware-account-2.png" tabindex="0" loading="lazy"><figcaption>create-vmware-account-2.png</figcaption></figure>
<p>按照提示，输入 用户名、密码、确认密码、其他可以选填，并点击 <strong>&quot;添加&quot;</strong> 按钮。</p>
<figure><img src="@source/zh/userguide/poc/images/create-vmware-account-3.png" alt="create-vmware-account-3.png" tabindex="0" loading="lazy"><figcaption>create-vmware-account-3.png</figcaption></figure>
<h4 id="步骤03-添加访问控制角色" tabindex="-1"><a class="header-anchor" href="#步骤03-添加访问控制角色"><span>步骤03：添加访问控制角色</span></a></h4>
<p>左侧菜单栏， <strong>&quot;访问控制&quot;</strong>， <strong>&quot;角色&quot;</strong>，<strong>&quot;角色提供程序&quot;</strong>，选择vCenter地址，点击 <strong>&quot;+&quot;</strong> 按钮。</p>
<figure><img src="@source/zh/userguide/poc/images/create-vmware-account-4.png" alt="create-vmware-account-4.png" tabindex="0" loading="lazy"><figcaption>create-vmware-account-4.png</figcaption></figure>
<p>参考 &quot;<a href="https://docs.oneprocloud.com/userguide/poc/vmware-pre-settings.html#vmware-user-permission" target="_blank" rel="noopener noreferrer">VMware用户权限</a>&quot; 清单进行勾选设置，并点击 &quot;NEXT&quot; 按钮。</p>
<figure><img src="@source/zh/userguide/poc/images/create-vmware-account-5.png" alt="create-vmware-account-5.png" tabindex="0" loading="lazy"><figcaption>create-vmware-account-5.png</figcaption></figure>
<p>设置新建 角色名称 及 描述 信息，并点击 <strong>&quot;FINISH&quot;</strong> 按钮。</p>
<figure><img src="@source/zh/userguide/poc/images/create-vmware-account-6.png" alt="create-vmware-account-6.png" tabindex="0" loading="lazy"><figcaption>create-vmware-account-6.png</figcaption></figure>
<h4 id="步骤04-添加权限到vcenter" tabindex="-1"><a class="header-anchor" href="#步骤04-添加权限到vcenter"><span>步骤04：添加权限到vCenter</span></a></h4>
<p>在 <strong>&quot;主机和集群&quot;</strong>，左侧菜单找到最顶层 <strong>&quot;vCenter IP&quot;</strong> 选中, 并点击右侧 <strong>&quot;权限&quot;</strong> 菜单。点击 <strong>&quot;+&quot;</strong> 按钮。</p>
<figure><img src="@source/zh/userguide/poc/images/create-vmware-account-7.png" alt="create-vmware-account-7.png" tabindex="0" loading="lazy"><figcaption>create-vmware-account-7.png</figcaption></figure>
<p>按照提示，选择用户授权的域，这里和前边保持一致，搜索需要添加的 <strong>&quot;migrate&quot;</strong> 用户，角色选择 <strong>&quot;迁移角色权限&quot;</strong> 并勾选 <strong>&quot;传播到子对象&quot;</strong> 。 并点击 <strong>&quot;OK&quot;</strong> 按钮。</p>
<figure><img src="@source/zh/userguide/poc/images/create-vmware-account-8.png" alt="create-vmware-account-8.png" tabindex="0" loading="lazy"><figcaption>create-vmware-account-8.png</figcaption></figure>
<p>添加完成之后，将 <strong>&quot;vCenter地址&quot;</strong>， <strong>&quot;migrate用户&quot;</strong>，和 <strong>&quot;登录密码&quot;</strong> 提供给迁移平台。</p>
<h3 id="hyperbdr填写" tabindex="-1"><a class="header-anchor" href="#hyperbdr填写"><span>HyperBDR填写</span></a></h3>
<p>随后填写该帐户在HyperBDR容灾平台的认证信息，包括:</p>
<ul>
<li>vCenter 地址</li>
<li>vCenter 用户名</li>
<li>vCenter 密码</li>
</ul>
<h2 id="下载-ova-镜像" tabindex="-1"><a class="header-anchor" href="#下载-ova-镜像"><span>下载 OVA 镜像</span></a></h2>
<p>下载OVA安装模板文件</p>
<ul>
<li><a href="https://hyperbdr-system-image-do-not-delete.obs.ap-southeast-3.myhuaweicloud.com/proxy-agent_BaseOS.ova" target="_blank" rel="noopener noreferrer">proxy-agent_BaseOS.ova</a></li>
</ul>
<h2 id="在vmware中导入ova镜像并创建proxy虚拟机" tabindex="-1"><a class="header-anchor" href="#在vmware中导入ova镜像并创建proxy虚拟机"><span>在VMware中导入OVA镜像并创建proxy虚拟机</span></a></h2>
<h3 id="部署vof模板" tabindex="-1"><a class="header-anchor" href="#部署vof模板"><span>部署VOF模板</span></a></h3>
<p>选择您的ESXi或数据中心名称，右键单击，选择 <strong>&quot;部署OVF模板..&quot;</strong></p>
<figure><img src="@source/zh/userguide/poc/images/vmware-pre-settings-1.png" alt="vmware-pre-settings-1.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-1.png</figcaption></figure>
<h4 id="步骤01-选择ovf模板" tabindex="-1"><a class="header-anchor" href="#步骤01-选择ovf模板"><span>步骤01：选择OVF模板</span></a></h4>
<p>点击 <strong>&quot;本地文件&quot;</strong>， <strong>&quot;选择文件&quot;</strong> 按钮，选择提前在本地下载的ova模板，下载的ova模板名称为 <strong>&quot;proxy-agent_BaseOS.ova&quot;</strong>。</p>
<figure><img src="@source/zh/userguide/poc/images/vmware-pre-settings-2.png" alt="vmware-pre-settings-2.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-2.png</figcaption></figure>
<h4 id="步骤02-填写虚拟机名称-选择可用集群" tabindex="-1"><a class="header-anchor" href="#步骤02-填写虚拟机名称-选择可用集群"><span>步骤02：填写虚拟机名称，选择可用集群</span></a></h4>
<p>你可以填写虚机名字, 比如 <strong>&quot;proxy-agent_BaseOS&quot;</strong>，然后为虚拟机选择一个可用集群。</p>
<figure><img src="@source/zh/userguide/poc/images/vmware-pre-settings-3.png" alt="vmware-pre-settings-3.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-3.png</figcaption></figure>
<h4 id="步骤03-选择计算资源" tabindex="-1"><a class="header-anchor" href="#步骤03-选择计算资源"><span>步骤03：选择计算资源</span></a></h4>
<p>为创建的虚拟机选择目标计算资源。</p>
<figure><img src="@source/zh/userguide/poc/images/vmware-pre-settings-4.png" alt="vmware-pre-settings-4.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-4.png</figcaption></figure>
<h4 id="步骤04-检查信息" tabindex="-1"><a class="header-anchor" href="#步骤04-检查信息"><span>步骤04：检查信息</span></a></h4>
<p>验证模板的详细信息。</p>
<figure><img src="@source/zh/userguide/poc/images/vmware-pre-settings-5.png" alt="vmware-pre-settings-5.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-5.png</figcaption></figure>
<h4 id="步骤05-选择存储" tabindex="-1"><a class="header-anchor" href="#步骤05-选择存储"><span>步骤05：选择存储</span></a></h4>
<p>为配置文件和磁盘文件选择存储。</p>
<figure><img src="@source/zh/userguide/poc/images/vmware-pre-settings-6.png" alt="vmware-pre-settings-6.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-6.png</figcaption></figure>
<h4 id="步骤06-选择网络" tabindex="-1"><a class="header-anchor" href="#步骤06-选择网络"><span>步骤06：选择网络</span></a></h4>
<p>为每个源网络选择目标网络。</p>
<figure><img src="@source/zh/userguide/poc/images/vmware-pre-settings-7.png" alt="vmware-pre-settings-7.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-7.png</figcaption></figure>
<h4 id="步骤07-准备完成" tabindex="-1"><a class="header-anchor" href="#步骤07-准备完成"><span>步骤07：准备完成</span></a></h4>
<p>确认创建的信息，然后单击完成开始创建。</p>
<figure><img src="@source/zh/userguide/poc/images/vmware-pre-settings-8.png" alt="vmware-pre-settings-8.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-8.png</figcaption></figure>
<h4 id="检查导入ovf模板任务" tabindex="-1"><a class="header-anchor" href="#检查导入ovf模板任务"><span>检查导入OVF模板任务</span></a></h4>
<ul>
<li><strong>&quot;导入OVF软件包&quot;</strong> 和 <strong>&quot;部署OVF模板&quot;</strong> 任务状态进行中。</li>
</ul>
<figure><img src="@source/zh/userguide/poc/images/vmware-pre-settings-9.png" alt="vmware-pre-settings-9.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-9.png</figcaption></figure>
<ul>
<li><strong>&quot;导入OVF软件包&quot;</strong> 和 <strong>&quot;部署OVF模板&quot;</strong> 任务状态完成。</li>
</ul>
<figure><img src="@source/zh/userguide/poc/images/vmware-pre-settings-10.png" alt="vmware-pre-settings-10.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-10.png</figcaption></figure>
<h3 id="修改proxy虚拟机规格" tabindex="-1"><a class="header-anchor" href="#修改proxy虚拟机规格"><span>修改Proxy虚拟机规格</span></a></h3>
<ul>
<li>单击虚拟机名称，然后右键单击，选择 <strong>&quot;编辑设置...&quot;</strong>.</li>
</ul>
<figure><img src="@source/zh/userguide/poc/images/vmware-pre-settings-11.png" alt="vmware-pre-settings-11.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-11.png</figcaption></figure>
<ul>
<li>修改CPU为4核，内存为8GB，硬盘1大小为100GB。</li>
</ul>
<figure><img src="@source/zh/userguide/poc/images/vmware-pre-settings-12.png" alt="vmware-pre-settings-12.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-12.png</figcaption></figure>
<h3 id="proxy虚机启动" tabindex="-1"><a class="header-anchor" href="#proxy虚机启动"><span>Proxy虚机启动</span></a></h3>
<ul>
<li>选择虚拟机名称，然后右键单击 <strong>&quot;启动&quot;</strong>, <strong>&quot;打开电源&quot;</strong>.</li>
</ul>
<figure><img src="@source/zh/userguide/poc/images/vmware-pre-settings-13.png" alt="vmware-pre-settings-13.png" tabindex="0" loading="lazy"><figcaption>vmware-pre-settings-13.png</figcaption></figure>
<p>下一步，可以配置Proxy IP地址。</p>
</div></template>


