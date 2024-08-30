<template><div><h2 id="云容灾网络规划概述" tabindex="-1"><a class="header-anchor" href="#云容灾网络规划概述"><span>云容灾网络规划概述</span></a></h2>
<nav class="table-of-contents"><ul><li><router-link to="#云容灾网络规划概述">云容灾网络规划概述</router-link></li><li><router-link to="#对象存储部署方案">对象存储部署方案</router-link><ul><li><router-link to="#组网方案">组网方案</router-link></li><li><router-link to="#开放端口列表">开放端口列表</router-link></li><li><router-link to="#部署架构">部署架构</router-link></li></ul></li><li><router-link to="#块存储部署解决方案">块存储部署解决方案</router-link><ul><li><router-link to="#网络方案">网络方案</router-link></li><li><router-link to="#开放端口列表-1">开放端口列表</router-link></li><li><router-link to="#部署架构-1">部署架构</router-link></li></ul></li><li><router-link to="#回切网络规划-—-专线解决方案">回切网络规划 — 专线解决方案</router-link><ul><li><router-link to="#块存储方式">块存储方式</router-link></li><li><router-link to="#对象存储">对象存储</router-link></li></ul></li><li><router-link to="#容灾网络规划">容灾网络规划</router-link><ul><li><router-link to="#用户网络">用户网络</router-link></li><li><router-link to="#专线解决方案-1">专线解决方案 1</router-link></li><li><router-link to="#专线方案-2">专线方案 2</router-link></li><li><router-link to="#公网">公网</router-link></li></ul></li></ul></nav>
<p>本文主要着重于 HyperBDR 网络和灾难恢复接管的合理规划，以及项目启动前所使用的网络。以下是网络规划的基本原则：</p>
<ul>
<li>
<p>HyperBDR需要部署在容灾平台中，因为一旦生产平台发生故障，HyperBDR在容灾平台上仍然可以正常对业务系统进行恢复。</p>
</li>
<li>
<p>HyperBDR对底层所使用的组网形式并没有特别的要求，只要保证网络通讯端口和方向符合HyperBDR需求即可。</p>
</li>
<li>
<p>HyperBDR的部署方案取决于生产站点和云容灾站点的连接方式，根据不同的网络连接方案，部署方式上略有差异，所需要的资源不同，成本也有较大差异。</p>
</li>
<li>
<p>对于有状态的业务系统接管，要注意容灾接管所使用的网络与生产网络连接的防火墙策略配置，避免在容灾接管后，容灾接管系统直接连接生产端后造成不正确的数据写入。</p>
</li>
</ul>
<h2 id="对象存储部署方案" tabindex="-1"><a class="header-anchor" href="#对象存储部署方案"><span>对象存储部署方案</span></a></h2>
<h3 id="组网方案" tabindex="-1"><a class="header-anchor" href="#组网方案"><span>组网方案</span></a></h3>
<table>
<thead>
<tr>
<th>方案名称</th>
<th>数据传输</th>
<th>业务访问(容灾接管后)</th>
</tr>
</thead>
<tbody>
<tr>
<td>公网方案</td>
<td>公网</td>
<td>公网</td>
</tr>
<tr>
<td>专线方案(例如：VPN等)</td>
<td>专线</td>
<td>专线</td>
</tr>
<tr>
<td>混合方案</td>
<td>公网</td>
<td>专线</td>
</tr>
</tbody>
</table>
<blockquote>
<p>注意：灾难后恢复接管后的业务访问</p>
</blockquote>
<h3 id="开放端口列表" tabindex="-1"><a class="header-anchor" href="#开放端口列表"><span>开放端口列表</span></a></h3>
<h4 id="代理" tabindex="-1"><a class="header-anchor" href="#代理"><span>代理</span></a></h4>
<p>代理包含 Windows 代理和 Linux 代理两种方式。</p>
<table>
<thead>
<tr>
<th><strong>编号</strong></th>
<th><strong>来源</strong></th>
<th><strong>目标</strong></th>
<th><strong>方向</strong></th>
<th><strong>端口</strong></th>
<th><strong>类型</strong></th>
<th><strong>备注</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Agent</td>
<td>HyperBDR Console</td>
<td>TCP 单向</td>
<td>10443 / 30080</td>
<td>控制流</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>Agent</td>
<td>对象存储服务</td>
<td>TCP 单向</td>
<td>443</td>
<td>数据流</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>HyperBDR Console</td>
<td>对象存储服务</td>
<td>TCP 单向</td>
<td>443</td>
<td>控制流</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>HyperBDR Console</td>
<td>Transition Host</td>
<td>TCP 单向</td>
<td>10729</td>
<td>控制流</td>
<td>必须在 HyperBDR Console 和容灾演练/接管VM 的 VPC 之间建立 VPC Peering。端口配置将由安全组自动设置，无需特定设置。</td>
</tr>
<tr>
<td>5</td>
<td>HyperBDR Console</td>
<td>云 API</td>
<td>TCP 单向</td>
<td>443</td>
<td>控制流</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>Transition Host</td>
<td>对象存储服务</td>
<td>TCP 单向</td>
<td>443</td>
<td>数据流</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="vmware-无代理" tabindex="-1"><a class="header-anchor" href="#vmware-无代理"><span>VMware 无代理</span></a></h4>
<table>
<thead>
<tr>
<th><strong>编号</strong></th>
<th><strong>来源</strong></th>
<th><strong>目标</strong></th>
<th><strong>方向</strong></th>
<th><strong>端口</strong></th>
<th><strong>类型</strong></th>
<th><strong>备注</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Sync Proxy</td>
<td>vCenter</td>
<td>TCP 单向</td>
<td>443</td>
<td>控制流</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>Sync Proxy</td>
<td>ESXi</td>
<td>TCP 单向</td>
<td>902</td>
<td>数据流</td>
<td>所有由 vCenter 管理的 ESXi 的端口 902</td>
</tr>
<tr>
<td>3</td>
<td>Sync Proxy</td>
<td>HyperBDR Console</td>
<td>TCP 单向</td>
<td>10443 / 30080</td>
<td>控制流</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>Sync Proxy</td>
<td>对象存储服务</td>
<td>TCP 单向</td>
<td>443</td>
<td>数据流</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>HyperBDR Console</td>
<td>对象存储服务</td>
<td>TCP 单向</td>
<td>443</td>
<td>控制流</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>HyperBDR Console</td>
<td>Transition Host</td>
<td>TCP 单向</td>
<td>10729</td>
<td>控制流</td>
<td>必须在 HyperBDR Console 和容灾演练/接管VM 的 VPC 之间建立 VPC Peering。端口配置将由安全组自动设置，无需特定设置。</td>
</tr>
<tr>
<td>7</td>
<td>HyperBDR Console</td>
<td>云 API</td>
<td>TCP 单向</td>
<td>443</td>
<td>控制流</td>
<td></td>
</tr>
<tr>
<td>8</td>
<td>Transition Host</td>
<td>对象存储服务</td>
<td>TCP 单向</td>
<td>443</td>
<td>数据流</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="部署架构" tabindex="-1"><a class="header-anchor" href="#部署架构"><span>部署架构</span></a></h3>
<h4 id="互联网" tabindex="-1"><a class="header-anchor" href="#互联网"><span>互联网</span></a></h4>
<figure><img src="@source/zh/userguide/presales/images/dr-network-planning-recommendations-1.jpeg" alt="dr-network-planning-recommendations-1.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-1.jpeg</figcaption></figure>
<h4 id="专用网络连接" tabindex="-1"><a class="header-anchor" href="#专用网络连接"><span>专用网络连接</span></a></h4>
<figure><img src="@source/zh/userguide/presales/images/dr-network-planning-recommendations-2.jpeg" alt="dr-network-planning-recommendations-2.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-2.jpeg</figcaption></figure>
<h4 id="混合网络" tabindex="-1"><a class="header-anchor" href="#混合网络"><span>混合网络</span></a></h4>
<figure><img src="@source/zh/userguide/presales/images/dr-network-planning-recommendations-3.jpeg" alt="dr-network-planning-recommendations-3.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-3.jpeg</figcaption></figure>
<h2 id="块存储部署解决方案" tabindex="-1"><a class="header-anchor" href="#块存储部署解决方案"><span>块存储部署解决方案</span></a></h2>
<h3 id="网络方案" tabindex="-1"><a class="header-anchor" href="#网络方案"><span>网络方案</span></a></h3>
<table>
<thead>
<tr>
<th>方案</th>
<th>数据传输</th>
<th>业务访问</th>
</tr>
</thead>
<tbody>
<tr>
<td>公网</td>
<td>公网</td>
<td>公网</td>
</tr>
<tr>
<td>专用网络连接解决方案（例如 VPN）</td>
<td>专线</td>
<td>专线</td>
</tr>
</tbody>
</table>
<blockquote>
<p>注意：灾难后恢复接管后的业务访问</p>
</blockquote>
<h3 id="开放端口列表-1" tabindex="-1"><a class="header-anchor" href="#开放端口列表-1"><span>开放端口列表</span></a></h3>
<h4 id="代理-1" tabindex="-1"><a class="header-anchor" href="#代理-1"><span>代理</span></a></h4>
<table>
<thead>
<tr>
<th><strong>编号</strong></th>
<th><strong>来源</strong></th>
<th><strong>目标</strong></th>
<th><strong>方向</strong></th>
<th><strong>端口</strong></th>
<th><strong>类型</strong></th>
<th><strong>备注</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Agent</td>
<td>HyperBDR Console</td>
<td>TCP 单向</td>
<td>10443 / 30080</td>
<td>控制流</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>Agent</td>
<td>Cloud Sync Gateway</td>
<td>TCP 单向</td>
<td>3260</td>
<td>数据流</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>HyperBDR Console</td>
<td>Cloud Sync Gateway</td>
<td>TCP 单向</td>
<td>22 / 10729</td>
<td>控制流</td>
<td>必须在 HyperBDR Console 和容灾演练/接管VM 的 VPC 之间建立 VPC Peering。端口配置将由安全组自动设置，无需特定设置。</td>
</tr>
<tr>
<td>4</td>
<td>HyperBDR Console</td>
<td>云 API</td>
<td>TCP 单向</td>
<td>443</td>
<td>控制流</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="无代理" tabindex="-1"><a class="header-anchor" href="#无代理"><span>无代理</span></a></h4>
<table>
<thead>
<tr>
<th><strong>编号</strong></th>
<th><strong>来源</strong></th>
<th><strong>目标</strong></th>
<th><strong>方向</strong></th>
<th><strong>端口</strong></th>
<th><strong>类型</strong></th>
<th><strong>备注</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Sync Proxy</td>
<td>vCenter</td>
<td>TCP 单向</td>
<td>443</td>
<td>控制流</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>Sync Proxy</td>
<td>ESXi</td>
<td>TCP 单向</td>
<td>902</td>
<td>数据流</td>
<td>所有由 vCenter 管理的 ESXi 的端口 902</td>
</tr>
<tr>
<td>3</td>
<td>Sync Proxy</td>
<td>HyperBDR Console</td>
<td>TCP 单向</td>
<td>10443 / 30080</td>
<td>控制流</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>Sync Proxy</td>
<td>Cloud Sync Gateway</td>
<td>TCP 单向</td>
<td>3260</td>
<td>数据流</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>HyperBDR Console</td>
<td>Cloud Sync Gateway</td>
<td>TCP 单向</td>
<td>22 / 10729</td>
<td>控制流</td>
<td>必须在 HyperBDR Console 和容灾演练/接管 VM 的 VPC 之间建立 VPC Peering。端口配置将由安全组自动设置，无需特定设置。</td>
</tr>
<tr>
<td>6</td>
<td>HyperBDR Console</td>
<td>云 API</td>
<td>TCP 单向</td>
<td>443</td>
<td>控制流</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="部署架构-1" tabindex="-1"><a class="header-anchor" href="#部署架构-1"><span>部署架构</span></a></h3>
<h4 id="互联网-1" tabindex="-1"><a class="header-anchor" href="#互联网-1"><span>互联网</span></a></h4>
<figure><img src="@source/zh/userguide/presales/images/dr-network-planning-recommendations-4.jpeg" alt="dr-network-planning-recommendations-4.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-4.jpeg</figcaption></figure>
<h4 id="专用网络连接-1" tabindex="-1"><a class="header-anchor" href="#专用网络连接-1"><span>专用网络连接</span></a></h4>
<figure><img src="@source/zh/userguide/presales/images/dr-network-planning-recommendations-5.jpeg" alt="dr-network-planning-recommendations-5.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-5.jpeg</figcaption></figure>
<h2 id="回切网络规划-—-专线解决方案" tabindex="-1"><a class="header-anchor" href="#回切网络规划-—-专线解决方案"><span>回切网络规划 — 专线解决方案</span></a></h2>
<p>在回切过程中，由于需要云端接管主机直接访问生产端IP地址，所以目前只支持专线方案进行回切。</p>
<h3 id="块存储方式" tabindex="-1"><a class="header-anchor" href="#块存储方式"><span>块存储方式</span></a></h3>
<h4 id="部署架构-2" tabindex="-1"><a class="header-anchor" href="#部署架构-2"><span>部署架构</span></a></h4>
<figure><img src="@source/zh/userguide/presales/images/dr-network-planning-recommendations-6.jpeg" alt="dr-network-planning-recommendations-6.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-6.jpeg</figcaption></figure>
<h4 id="开放端口列表-2" tabindex="-1"><a class="header-anchor" href="#开放端口列表-2"><span>开放端口列表</span></a></h4>
<table>
<thead>
<tr>
<th><strong>编号</strong></th>
<th><strong>访问来源</strong></th>
<th><strong>访问目标</strong></th>
<th><strong>通信方向</strong></th>
<th><strong>开放端口</strong></th>
<th><strong>通讯类型</strong></th>
<th><strong>备注</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Failback Agent</td>
<td>HyperBDR Console</td>
<td>TCP 单向</td>
<td>10443 / 30080</td>
<td>控制流</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>Failback Agent</td>
<td>Failback Transition Host</td>
<td>TCP 单向</td>
<td>3260</td>
<td>数据流</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>HyperBDR Console</td>
<td>Failback Transition Host</td>
<td>TCP 单向</td>
<td>10729</td>
<td>控制流</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="对象存储" tabindex="-1"><a class="header-anchor" href="#对象存储"><span>对象存储</span></a></h3>
<h4 id="部署架构-3" tabindex="-1"><a class="header-anchor" href="#部署架构-3"><span>部署架构</span></a></h4>
<figure><img src="@source/zh/userguide/presales/images/dr-network-planning-recommendations-7.jpeg" alt="dr-network-planning-recommendations-7.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-7.jpeg</figcaption></figure>
<h4 id="开放端口列表-3" tabindex="-1"><a class="header-anchor" href="#开放端口列表-3"><span>开放端口列表</span></a></h4>
<table>
<thead>
<tr>
<th><strong>编号</strong></th>
<th><strong>来源</strong></th>
<th><strong>目标</strong></th>
<th><strong>方向</strong></th>
<th><strong>端口</strong></th>
<th><strong>类型</strong></th>
<th><strong>备注</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Failback Agent</td>
<td>HyperBDR Console</td>
<td>TCP 单向</td>
<td>10443 / 30080</td>
<td>控制流</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>Failback Agent</td>
<td>对象存储服务</td>
<td>TCP 单向</td>
<td>443</td>
<td>数据流</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>HyperBDR Console</td>
<td>对象存储服务</td>
<td>TCP 单向</td>
<td>443</td>
<td>控制流</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>HyperBDR Console</td>
<td>Failback Transition Host</td>
<td>TCP 单向</td>
<td>10729</td>
<td>控制流</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>HyperBDR Console</td>
<td>云 API</td>
<td>TCP 单向</td>
<td>443</td>
<td>控制流</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>HyperBDR Console</td>
<td>vCenter/ESXi</td>
<td>TCP 单向</td>
<td>443/902</td>
<td>控制流</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>Failback Transition Host</td>
<td>对象存储服务</td>
<td>TCP 单向</td>
<td>443</td>
<td>数据流</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="容灾网络规划" tabindex="-1"><a class="header-anchor" href="#容灾网络规划"><span>容灾网络规划</span></a></h2>
<h3 id="用户网络" tabindex="-1"><a class="header-anchor" href="#用户网络"><span>用户网络</span></a></h3>
<p>我们以某客户生产环境的网络为例，说明不同方式下的网络规划，以下为用户现有的网络架构拓扑图：</p>
<figure><img src="@source/zh/userguide/presales/images/dr-network-planning-recommendations-8.jpeg" alt="dr-network-planning-recommendations-8.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-8.jpeg</figcaption></figure>
<p>用户网络分配如下：</p>
<table>
<thead>
<tr>
<th>网络名称</th>
<th>网段</th>
<th>用途</th>
</tr>
</thead>
<tbody>
<tr>
<td>用户客户端桌面网络</td>
<td>192.168.0.0/24</td>
<td>用于桌面电脑访问业务网络</td>
</tr>
<tr>
<td>业务系统A</td>
<td>192.168.4.0/24</td>
<td>业务系统A所在网络</td>
</tr>
<tr>
<td>业务系统B</td>
<td>10.227.129.0/24</td>
<td>业务系统B所在网络，该网络为VMware业务网地址</td>
</tr>
<tr>
<td>VMware 管理网络</td>
<td>10.227.230.0/24</td>
<td>VMware资源管理网地址</td>
</tr>
</tbody>
</table>
<h3 id="专线解决方案-1" tabindex="-1"><a class="header-anchor" href="#专线解决方案-1"><span>专线解决方案 1</span></a></h3>
<p>生产网络和接管子网是不同的。</p>
<h4 id="架构" tabindex="-1"><a class="header-anchor" href="#架构"><span>架构</span></a></h4>
<figure><img src="@source/zh/userguide/presales/images/dr-network-planning-recommendations-9.jpeg" alt="dr-network-planning-recommendations-9.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-9.jpeg</figcaption></figure>
<h4 id="防火墙策略" tabindex="-1"><a class="header-anchor" href="#防火墙策略"><span>防火墙策略</span></a></h4>
<table>
<thead>
<tr>
<th>生产子网</th>
<th>接管子网</th>
<th>生产网络访问接管网络</th>
<th>接管网络访问生产网络</th>
</tr>
</thead>
<tbody>
<tr>
<td>192.168.0.0/24 <br/> 192.168.4.0/24</td>
<td>192.168.104.0/24</td>
<td>允许</td>
<td>拒绝</td>
</tr>
<tr>
<td>192.168.0.0/24 <br/> 10.227.129.0/24</td>
<td>10.227.229.0/24</td>
<td>允许</td>
<td>拒绝</td>
</tr>
</tbody>
</table>
<p>解释：</p>
<ul>
<li>
<p>用户访问：在目标云平台侧使用不同的子网地址作为接管网络，生产侧可以直接通过专线访问云上的VPC，用户也可以通过VPN客户端直接连接至云端的VPN后访问业务网络。</p>
</li>
<li>
<p>防火墙设定：为了防止接管后的主机，错误的访问原有主机，所以限制接管后的主机直接访问生产网络，根据策略需求情况对指定端口进行放行。</p>
</li>
</ul>
<h3 id="专线方案-2" tabindex="-1"><a class="header-anchor" href="#专线方案-2"><span>专线方案 2</span></a></h3>
<p>生产网络和接管子网是相同的。</p>
<h4 id="架构-1" tabindex="-1"><a class="header-anchor" href="#架构-1"><span>架构</span></a></h4>
<figure><img src="@source/zh/userguide/presales/images/dr-network-planning-recommendations-10.jpeg" alt="dr-network-planning-recommendations-10.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-10.jpeg</figcaption></figure>
<h4 id="防火墙策略-1" tabindex="-1"><a class="header-anchor" href="#防火墙策略-1"><span>防火墙策略</span></a></h4>
<table>
<thead>
<tr>
<th>生产子网</th>
<th>接管子网</th>
<th>生产网络访问接管网络</th>
<th>接管网络访问生产网络</th>
</tr>
</thead>
<tbody>
<tr>
<td>192.168.0.0/24 <br/> 192.168.4.0/24</td>
<td>192.168.4.0/24</td>
<td>不允许</td>
<td>不允许</td>
</tr>
<tr>
<td>192.168.0.0/24 <br/> 10.227.129.0/24</td>
<td>10.227.129.0/24</td>
<td>不允许</td>
<td>不允许</td>
</tr>
</tbody>
</table>
<p>说明:</p>
<ul>
<li>防火墙设定：为了防止接管后的主机，和原有主机发生冲突，所以严格限制接管后的主机与原有生产网络地址的访问，根据策略需求情况对指定端口进行放行。</li>
</ul>
<h3 id="公网" tabindex="-1"><a class="header-anchor" href="#公网"><span>公网</span></a></h3>
<h4 id="架构-2" tabindex="-1"><a class="header-anchor" href="#架构-2"><span>架构</span></a></h4>
<figure><img src="@source/zh/userguide/presales/images/dr-network-planning-recommendations-11.jpeg" alt="dr-network-planning-recommendations-11.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-11.jpeg</figcaption></figure>
<h4 id="防火墙策略-2" tabindex="-1"><a class="header-anchor" href="#防火墙策略-2"><span>防火墙策略</span></a></h4>
<p>用户通过公网地址直接访问接管后的业务系统，防火墙需要放行对公网访问的需要。</p>
</div></template>


