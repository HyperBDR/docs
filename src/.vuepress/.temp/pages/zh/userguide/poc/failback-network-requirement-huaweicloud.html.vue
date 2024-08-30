<template><div><h1 id="华为云" tabindex="-1"><a class="header-anchor" href="#华为云"><span>华为云</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#内网vpn访问-创建并配置vpn服务">（内网VPN访问）创建并配置VPN服务</router-link><ul><li><router-link to="#配置文档">配置文档</router-link></li></ul></li><li><router-link to="#内部vpn访问-创建vpc端点服务">（内部VPN访问）- 创建VPC端点服务</router-link><ul><li><router-link to="#配置vpc端点">配置VPC端点</router-link></li></ul></li><li><router-link to="#内网vpn访问-创建并配置vpn服务-agent">（内网VPN访问）创建并配置VPN服务 - Agent</router-link><ul><li><router-link to="#配置文档-1">配置文档</router-link></li></ul></li><li><router-link to="#内网vpn访问-创建并配置vpn服务-vmware">（内网VPN访问）创建并配置VPN服务 - VMware</router-link></li><li><router-link to="#内网vpn访问-创建华为vpc端点-vmware">（内网VPN访问）创建华为VPC端点 - VMware</router-link></li></ul></nav>
<h2 id="内网vpn访问-创建并配置vpn服务" tabindex="-1"><a class="header-anchor" href="#内网vpn访问-创建并配置vpn服务"><span>（内网VPN访问）创建并配置VPN服务</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>华为云回切主机的VPC网络连接到本地vCenter/ESXi VM服务网络。<br>
如果HyperBDR所在的VPC网络在部署到华为云时已通过VPN服务连接到vCenter/ESXi服务网络，那么在这种情况下，您无需重新配置。</p>
</div>
<h3 id="配置文档" tabindex="-1"><a class="header-anchor" href="#配置文档"><span>配置文档</span></a></h3>
<p>配置VPN。详情请参阅华为云官方文档。</p>
<p>文档链接：<a href="https://support.huaweicloud.com/intl/en-us/qs-vpn/vpn_03_0001.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/qs-vpn/vpn_03_0001.html</a></p>
<h2 id="内部vpn访问-创建vpc端点服务" tabindex="-1"><a class="header-anchor" href="#内部vpn访问-创建vpc端点服务"><span>（内部VPN访问）- 创建VPC端点服务</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果您的容灾恢复环境通过华为云VPN与生产站点的内部网络相互连接，并且在灾难期间生产站点需要通过VPN访问华为云HyperBDR和OBS服务，则需要在华为云购买并配置VPC端点服务。<br>
您需要购买两个VPC端点服务，一个用于OBS，另一个用于DNS。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果在将容灾环境部署到华为云时已购买并配置了端点服务，则无需重复此配置。</p>
</div>
<h3 id="配置vpc端点" tabindex="-1"><a class="header-anchor" href="#配置vpc端点"><span>配置VPC端点</span></a></h3>
<p>华为云官方定义：如果您想通过VPN或云连接使用内部方法从本地数据中心访问OBS服务，可以通过连接终端端点以访问终端端点服务的方式实现。<br>
文档链接：<a href="https://support.huaweicloud.com/intl/en-us/qs-vpcep/vpcep_02_0301.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/qs-vpcep/vpcep_02_0301.html</a></p>
<h4 id="配置连接dns的终端节点" tabindex="-1"><a class="header-anchor" href="#配置连接dns的终端节点"><span>配置连接DNS的终端节点</span></a></h4>
<table>
<thead>
<tr>
<th>参数</th>
<th>配置说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>区域</td>
<td>选择要激活的区域</td>
</tr>
<tr>
<td>计费方式</td>
<td>按需计费</td>
</tr>
<tr>
<td>服务类别</td>
<td>选择默认的“云服务器”，选中com.myhuaweicloud.&lt;region&gt;.dns，并将类型设置为接口</td>
</tr>
<tr>
<td>虚拟私有云</td>
<td>选择与本地IDC VPN相互连接的VPC</td>
</tr>
<tr>
<td>子网</td>
<td>选择VPN互连的子网</td>
</tr>
</tbody>
</table>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-40.png" alt="complete-doc-for-block-storage-failback-40.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-40.png</figcaption></figure>
<h4 id="选择obs网关类型的终端端点" tabindex="-1"><a class="header-anchor" href="#选择obs网关类型的终端端点"><span>选择OBS网关类型的终端端点</span></a></h4>
<table>
<thead>
<tr>
<th>参数</th>
<th>配置说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>区域</td>
<td>选择要激活的区域</td>
</tr>
<tr>
<td>计费方式</td>
<td>按需计费</td>
</tr>
<tr>
<td>服务类别</td>
<td>选择默认的“云服务器”，选中com.myhuaweicloud.&lt;region&gt;.obs, 并将类型设置为网关</td>
</tr>
<tr>
<td>虚拟私有云</td>
<td>选择与本地IDC VPN相互连接的VPC</td>
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
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>在服务类别部分，可能无法直接找到默认云服务类型的相应OBS服务。在这种情况下，您需要使用“按名称查找服务”进行搜索。您必须输入特定OBS服务的完整名称。请与华为云确认，因为华为云侧的目标OBS服务终端点在v1和v2版本之间可能存在差异。此外，每个地区的名称和v1/v2版本之间的关联以及对象存储桶资源池的关系需要澄清。如果您购买了v1 OBS终端节点，但您的对象存储桶在v2集群中，则必须相应地对齐。请事先与华为确认对象存储桶集群和OBS终端节点的具体版本。</p>
<p>示例：v2版本OBS终端节点名称：sa-brazil-1.com.myhuaweicloud.v4.obsv2.lz002</p>
</div>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-41.png" alt="complete-doc-for-block-storage-failback-41.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-41.png</figcaption></figure>
<h4 id="配置vpn本地端obs网关" tabindex="-1"><a class="header-anchor" href="#配置vpn本地端obs网关"><span>配置VPN本地端OBS网关</span></a></h4>
<p>在VPN连接点添加本地（华为云）OBS服务的内部子网范围。所有内部华为云OBS服务的子网地址为100.125.0.0/16。</p>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-42.png" alt="complete-doc-for-block-storage-failback-42.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-42.png</figcaption></figure>
<figure><img src="@source/zh/userguide/poc/images/complete-doc-for-block-storage-failback-43.png" alt="complete-doc-for-block-storage-failback-43.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-43.png</figcaption></figure>
<h2 id="内网vpn访问-创建并配置vpn服务-agent" tabindex="-1"><a class="header-anchor" href="#内网vpn访问-创建并配置vpn服务-agent"><span>（内网VPN访问）创建并配置VPN服务 - Agent</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>华为云回切主机的VPC网络连接到源生产环境网络。
注意：如果HyperBDR所在的VPC网络在部署到华为云时已通过VPN服务连接到源生产环境网络，那么在这种情况下，您无需重新配置。</p>
</div>
<h3 id="配置文档-1" tabindex="-1"><a class="header-anchor" href="#配置文档-1"><span>配置文档</span></a></h3>
<p>配置VPN。详情请参阅华为云官方文档。<br>
文档链接：<a href="https://support.huaweicloud.com/intl/en-us/qs-vpn/vpn_03_0001.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/qs-vpn/vpn_03_0001.html</a></p>
<h2 id="内网vpn访问-创建并配置vpn服务-vmware" tabindex="-1"><a class="header-anchor" href="#内网vpn访问-创建并配置vpn服务-vmware"><span>（内网VPN访问）创建并配置VPN服务 - VMware</span></a></h2>
<p>要求：华为云HyperBDR所在的VPC网络需要与本地vCenter/ESXi主机管理网络和上层虚拟机业务网络相互连接。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果在部署配置容灾环境时，HyperBDR所在的VPC网络已通过VPN服务与vCenter/ESXi业务网络连接，则只需在HyperBDR所在的VPC网络与vCenter/ESXi主机管理网络之间建立连接即可。</p>
</div>
<p>有关配置VPN服务的详细信息，请参考官方华为云文档中提供的详细信息，您可以在以下文档中找到必要的指导。<br>
文档链接:<a href="https://support.huaweicloud.com/intl/en-us/qs-vpn/vpn_03_0001.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/qs-vpn/vpn_03_0001.html</a></p>
<h2 id="内网vpn访问-创建华为vpc端点-vmware" tabindex="-1"><a class="header-anchor" href="#内网vpn访问-创建华为vpc端点-vmware"><span>（内网VPN访问）创建华为VPC端点 - VMware</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果在部署配置容灾环境时已完成VPC端点服务的购买和配置，则无需重复进行配置。</p>
</div>
<p>参考文档: <a href="https://docs.oneprocloud.com/userguide/poc/huaweicloud-pre-settings.html#create-huawei-vpc-endpoint" target="_blank" rel="noopener noreferrer">https://docs.oneprocloud.com/userguide/poc/huaweicloud-pre-settings.html#create-huawei-vpc-endpoint</a></p>
</div></template>


