<template><div><h1 id="rpo-rto-最佳实践" tabindex="-1"><a class="header-anchor" href="#rpo-rto-最佳实践"><span>RPO &amp; RTO 最佳实践</span></a></h1>
<h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h2>
<h3 id="rpo-和-rto-简介" tabindex="-1"><a class="header-anchor" href="#rpo-和-rto-简介"><span>RPO 和 RTO 简介</span></a></h3>
<p>在灾难恢复方面，RPO（恢复点目标）和RTO（恢复时间目标）是两个关键概念。它们是灾难恢复规划中的关键性能指标，用于衡量系统在发生灾难性事件时的可恢复性和业务连续性。</p>
<h4 id="恢复点目标-rpo" tabindex="-1"><a class="header-anchor" href="#恢复点目标-rpo"><span>恢复点目标（RPO）</span></a></h4>
<p>RPO 指的是系统在发生故障或灾难性事件时可以容忍数据丢失的时间范围。换句话说，RPO 定义了业务可以容忍的最大数据丢失量。通常以时间单位（如小时或分钟）来衡量，RPO 的选择取决于业务的实时数据要求和对数据丢失风险的可接受程度。较低的 RPO 值表示系统可以更频繁地备份数据，从而减少灾难性事件发生时的数据丢失量。</p>
<p>计算 RPO 所涉及的因素包括：</p>
<ul>
<li>
<p>业务重要性：对业务运营至关重要的系统将具有较高的 RPO，而较不重要的系统将具有较低的 RPO。</p>
</li>
<li>
<p>数据变更率：数据变更率高的系统通常具有较高的 RPO，而数据变更率低的系统具有较低的 RPO。</p>
</li>
<li>
<p>备份频率：较高的备份频率导致较低的 RPO。</p>
</li>
<li>
<p>恢复时间：较短的恢复时间要求会导致较低的 RPO。</p>
</li>
<li>
<p>备份存储：如果备份存储更可靠且恢复时间更短，则 RPO 会保持较低水平。</p>
</li>
<li>
<p>合规性和监管要求：某些行业对数据恢复和保留有特定要求，这可能会影响 RPO。</p>
</li>
<li>
<p>IT 预算和资源：组织的 IT 预算和可用资源可能会影响 RPO。</p>
</li>
</ul>
<p>在计算 RPO 时，考虑上述因素是建立健壮的灾难恢复计划至关重要。</p>
<h4 id="恢复时间目标-rto" tabindex="-1"><a class="header-anchor" href="#恢复时间目标-rto"><span>恢复时间目标（RTO）</span></a></h4>
<p>RTO（恢复时间目标）指的是系统在发生灾难性事件后恢复到正常运行所需的最长时间。它是一个时间窗口，定义了业务可以接受的最大停机时间。选择 RTO 通常基于业务的连续性要求，表明业务可以在灾难性事件后多快恢复到正常运行。较短的 RTO 表示业务连续性水平较高，因为系统可以更快地从灾难中恢复，最小化业务中断。</p>
<p>RTO 时间等于主机恢复时间和业务恢复时间的总和。</p>
<p>主机恢复时间：指在故障或灾难性事件发生后恢复系统所需的时间。这可能涉及重新启动主机、加载操作系统和应用程序等步骤。</p>
<p>业务恢复时间：指在主机恢复后，业务完全恢复到正常运行所需的时间。这包括确保应用程序和服务完全可用，并且业务功能正常执行。</p>
<h4 id="与-rpo-和-rto-相关的灾难恢复成本" tabindex="-1"><a class="header-anchor" href="#与-rpo-和-rto-相关的灾难恢复成本"><span>与 RPO 和 RTO 相关的灾难恢复成本：</span></a></h4>
<p>追求较低的 RPO 通常需要更频繁的数据备份和复制，导致存储、带宽和运营成本增加。实时或接近实时的备份需要更多的资源投入，从而增加成本，同时实现较低的 RPO。相反，较高的 RPO 意味着较长的备份间隔，减少备份和复制的频率，从而降低硬件和网络成本。</p>
<p>实现较短的 RTO 通常需要更多的资源投入，包括高可用性系统、冗余设备和复杂的架构，这增加了硬件、软件和维护成本。相反，选择较长的 RTO 允许更多的停机时间，减少对高可用性系统的依赖，从而降低相关成本。</p>
<h4 id="如何选择合理的-rpo-和-rto" tabindex="-1"><a class="header-anchor" href="#如何选择合理的-rpo-和-rto"><span>如何选择合理的 RPO 和 RTO？</span></a></h4>
<p>建议根据业务需求和成本容忍度采用灵活的灾难恢复计划。根据业务系统的重要性灵活选择 RPO 和 RTO。为关键业务系统提供更高的投资，以最小化潜在的数据丢失和停机时间，而辅助系统则可以接受一些牺牲以实现成本降低。对于关键业务系统，追求低的 RPO 和短的 RTO 可能需要更高的投资，而辅助系统可以容忍更高的 RPO 和较长的 RTO 以降低成本。</p>
<h2 id="hyperbdr-rpo和rto最佳实践" tabindex="-1"><a class="header-anchor" href="#hyperbdr-rpo和rto最佳实践"><span>HyperBDR RPO和RTO最佳实践</span></a></h2>
<h3 id="hyperbdr-rpo和rto" tabindex="-1"><a class="header-anchor" href="#hyperbdr-rpo和rto"><span>HyperBDR RPO和RTO</span></a></h3>
<table>
<thead>
<tr>
<th>存储类型</th>
<th>云平台</th>
<th>最低RPO</th>
<th>最低RTO</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>块存储</td>
<td>华为云</td>
<td>5分钟</td>
<td>5分钟 - 10分钟</td>
<td>在华为云中，块存储的恢复时间与数据量无关，恢复时间范围为5-10分钟。</td>
</tr>
<tr>
<td>对象存储</td>
<td>华为云</td>
<td>5分钟</td>
<td>5分钟到几小时（取决于实际恢复数据量）</td>
<td>在华为云中，对象存储的恢复时间目标（RTO）受多种因素影响，包括数据量和恢复主机的规格。有关详细的计算方法，请参阅RTO规划的最佳实践。</td>
</tr>
</tbody>
</table>
<h3 id="rpo计算的最佳实践" tabindex="-1"><a class="header-anchor" href="#rpo计算的最佳实践"><span>RPO计算的最佳实践</span></a></h3>
<h4 id="rpo计算" tabindex="-1"><a class="header-anchor" href="#rpo计算"><span>RPO计算</span></a></h4>
<p>在HyperBDR中，影响RPO的主要因素主要包括网络（带宽和延迟）和数据变化量，其中RPO大约等于数据变化量除以网络。</p>
<p>HyperBDR主要使用块级差异捕获技术来获取数据变化量。这涉及在操作系统的块级别上捕获单位时间范围内已更改的块的总和，可以根据具体的业务场景进行估计。</p>
<p>网络带宽和延迟指的是用户当前环境与云之间的连接。根据使用的模式，它们分为以下几类：</p>
<ul>
<li>
<p>块存储：用户端和云端同步网关之间的公共网络的网络带宽和延迟。</p>
</li>
<li>
<p>对象存储：用户端和云端对象存储之间的网络带宽和延迟。</p>
</li>
</ul>
<p>假设用户的生产数据分配容量为1TB，我们概述了在不同RPO要求下的带宽和数据变化量。</p>
<table>
<thead>
<tr>
<th>数据量（TB）</th>
<th>RPO期望（分钟）</th>
<th>数据变化率（%）</th>
<th>数据变化量（GB）</th>
<th>估计带宽（Mbps）</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>5</td>
<td>5.00%</td>
<td>51.20</td>
<td>1398</td>
</tr>
<tr>
<td>1</td>
<td>10</td>
<td>5.00%</td>
<td>51.20</td>
<td>699</td>
</tr>
<tr>
<td>1</td>
<td>30</td>
<td>5.00%</td>
<td>51.20</td>
<td>233</td>
</tr>
<tr>
<td>1</td>
<td>60</td>
<td>5.00%</td>
<td>51.20</td>
<td>117</td>
</tr>
<tr>
<td>1</td>
<td>240</td>
<td>5.00%</td>
<td>51.20</td>
<td>29</td>
</tr>
<tr>
<td>1</td>
<td>720</td>
<td>5.00%</td>
<td>51.20</td>
<td>10</td>
</tr>
<tr>
<td>1</td>
<td>1440</td>
<td>5.00%</td>
<td>51.20</td>
<td>5</td>
</tr>
</tbody>
</table>
<h3 id="rto计算的最佳实践" tabindex="-1"><a class="header-anchor" href="#rto计算的最佳实践"><span>RTO计算的最佳实践</span></a></h3>
<h4 id="块存储" tabindex="-1"><a class="header-anchor" href="#块存储"><span>块存储</span></a></h4>
<p>在华为云中，块存储的恢复时间与数据量和用于恢复的主机规格无关。RTO时间范围为5分钟到10分钟。以下是1TB容量的模拟测试场景供参考：</p>
<table>
<thead>
<tr>
<th>磁盘数量</th>
<th>恢复主机规格</th>
<th>磁盘类型</th>
<th>恢复主机持续时间（分钟）</th>
</tr>
</thead>
<tbody>
<tr>
<td>单磁盘（使用容量800GB）<br/>多磁盘（使用容量1010GB）</td>
<td>无限制（确保所选主机规格可以使用相应的磁盘类型）</td>
<td>高I/O（SAS） <br/> 通用型SSD（GPSSD） <br/> 超高I/O（SSD） <br/> 极速SSD（ESSD）</td>
<td>5 - 10</td>
</tr>
</tbody>
</table>
<h4 id="对象存储" tabindex="-1"><a class="header-anchor" href="#对象存储"><span>对象存储</span></a></h4>
<p>在华为云中，对象存储模式受多个因素影响，主要包括：</p>
<ul>
<li>
<p>数据量：正在恢复的实际数据量。</p>
</li>
<li>
<p>磁盘数量：同时从多个磁盘恢复时，恢复时间大约等于最大磁盘恢复所需的时间。</p>
</li>
<li>
<p>临时恢复网关规格配置</p>
<ul>
<li>
<p>在HyperBDR中进行恢复时，会启动一个主机作为临时恢复网关进行业务恢复。此主机的规格由用户在灾难恢复配置中设置。这些规格中的CPU、内存、最大带宽和最大数据包发送/接收能力等指标可能会影响恢复速度。</p>
</li>
<li>
<p>规格对磁盘并发恢复速度的影响：在HyperBDR的恢复过程中，需要CPU和内存资源来解密和解压（如果已启用）对象存储数据，然后将其恢复到块存储中。默认情况下，数据恢复是并发进行的，每个磁盘恢复需要至少1GB的内存。例如，使用2核和4GB内存的规格，最多可以同时恢复4个磁盘。</p>
</li>
</ul>
</li>
<li>
<p>卷类型：在HyperBDR的恢复过程中，对象存储中的数据将重新复制到块存储中。因此，灾难恢复配置中选择的卷类型也会影响恢复时间。</p>
</li>
</ul>
<p>下面是一些常见的规格建议以及不同情况下1TB有效数据（即完全由数据组成）的主机恢复时间。</p>
<table>
<thead>
<tr>
<th>磁盘数量</th>
<th>恢复主机规格</th>
<th>磁盘类型</th>
<th>恢复主机持续时间（分钟）</th>
</tr>
</thead>
<tbody>
<tr>
<td>单磁盘（使用容量100GB）</td>
<td>内存小于或等于4GB 最大带宽范围：1.5 - 4 Gbps</td>
<td>高I/O（SAS） <br/> 通用型SSD（GPSSD） <br/> 超高I/O（SSD） <br/> 极速SSD（ESSD）</td>
<td>20分钟（超高I/O、极速SSD） <br/> 25分钟（通用型SSD） <br/> 30分钟（高I/O）</td>
</tr>
<tr>
<td>单磁盘（使用容量100GB）</td>
<td>内存大于4GB 最大带宽范围：大于4 Gbps</td>
<td>高I/O（SAS） <br/> 通用型SSD（GPSSD） <br/> 超高I/O（SSD） <br/> 极速SSD（ESSD）</td>
<td>30分钟（高I/O） <br/> 20分钟（超高I/O、极速SSD）</td>
</tr>
<tr>
<td>单磁盘（使用容量500GB）</td>
<td>内存小于或等于4GB 最大带宽范围：1.5 - 4 Gbps</td>
<td>高I/O（SAS） <br/> 通用型SSD（GPSSD） <br/> 超高I/O（SSD） <br/> 极速SSD（ESSD）</td>
<td>1小时30分钟（高I/O） <br/> 1小时10分钟（超高I/O、极速SSD）</td>
</tr>
<tr>
<td>单磁盘（使用容量500GB）</td>
<td>内存大于4GB 最大带宽范围：大于4 Gbps</td>
<td>高I/O（SAS） <br/> 通用型SSD（GPSSD） <br/> 超高I/O（SSD） <br/> 极速SSD（ESSD）</td>
<td>45分钟（超高I/O、极速SSD） <br/> 1小时30分钟（高I/O）</td>
</tr>
<tr>
<td>单磁盘（使用容量920GB） <br/> 多磁盘（使用容量1010GB）</td>
<td>内存小于或等于4GB 最大带宽范围：1.5 - 4 Gbps</td>
<td>高I/O（SAS） <br/> 通用型SSD（GPSSD） <br/> 超高I/O（SSD） <br/> 极速SSD（ESSD）</td>
<td>2小时10分钟（超高I/O、极速SSD） <br/> 2小时20分钟（通用型SSD） <br/> 2小时30分钟（高I/O）</td>
</tr>
<tr>
<td>单磁盘（使用容量920GB） <br/> 多磁盘（使用容量1010GB）</td>
<td>内存大于4GB 最大带宽范围：大于4 Gbps</td>
<td>通用型SSD（GPSSD） <br/> 超高I/O（SSD） <br/> 极速SSD（ESSD）</td>
<td>1小时15分钟（超高I/O、极速SSD） <br/> 1小时35分钟（通用型SSD）</td>
</tr>
</tbody>
</table>
<h4 id="对象存储模式灾难恢复的推荐规格" tabindex="-1"><a class="header-anchor" href="#对象存储模式灾难恢复的推荐规格"><span>对象存储模式灾难恢复的推荐规格</span></a></h4>
<p>华为云计算规格文档：<a href="https://support.huaweicloud.com/intl/en-us/productdesc-ecs/ecs_01_0014.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/productdesc-ecs/ecs_01_0014.html</a></p>
<table>
<thead>
<tr>
<th>规格</th>
<th>推荐</th>
</tr>
</thead>
<tbody>
<tr>
<td>内存小于或等于4GB 最大带宽范围：1.5 - 4 Gbps</td>
<td>通用型S7 / S7n / S6 / Sn3 <br/> 通用型C7n / C6 / C3ne / C3 <br/> 高性能计算H3 / Hc2</td>
</tr>
<tr>
<td>内存大于4GB 最大带宽范围：大于4 Gbps</td>
<td>通用型Sn3 / S3 / S2 <br/> 通用型C7 / aC7 / C7n / C6s / C6h / C6 / C3ne / C3 <br/> 内存优化型M7 / aM7 / M7n / M6 / M6nl / M3ne / M3 / M2 <br/> 大内存E7 / E6 / E3 <br/> 磁盘密集型D7 / D6 / D3 / D2 <br/> 超高I/O Ir7 / I7 / aI7 / Ir7n / I7n / Ir3 / I3 <br/> 高性能计算H3 / Hc2</td>
</tr>
</tbody>
</table>
<p>如何在华为云官方文档中搜索推荐系列和具体规格：</p>
<p>例如，如果规格要求内存大小为4GB或以下，最大带宽范围为1.5到4 Gbps，请按以下步骤操作：</p>
<ol>
<li>
<p>找到符合这些要求的每个系列。然后，在规格列表中搜索最大/保证带宽（Gbps）列，将范围过滤为1.5到4 Gbps。</p>
</li>
<li>
<p>通过将内存（GiB）列过滤为4GB或以下，细化搜索以查找具有4GB或以下内存的规格。</p>
</li>
</ol>
<p>示例参考：在通用型S7系列中，类型为S7的s7.large.2(2C4G)规格符合条件，具有4GB内存和1.5 Gbps的最大带宽。</p>
<figure><img src="@source/zh/userguide/presales/images/hyperbdr-rpo--rto-planning-best-practices-1.png" alt="hyperbdr-rpo--rto-planning-best-practices-1.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-rpo--rto-planning-best-practices-1.png</figcaption></figure>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<h3 id="如何测试本地主机与华为云主机之间的带宽和延迟" tabindex="-1"><a class="header-anchor" href="#如何测试本地主机与华为云主机之间的带宽和延迟"><span>如何测试本地主机与华为云主机之间的带宽和延迟？</span></a></h3>
<h4 id="使用ping命令测试延迟" tabindex="-1"><a class="header-anchor" href="#使用ping命令测试延迟"><span>使用ping命令测试延迟：</span></a></h4>
<ol>
<li>
<p>打开命令提示符：在本地主机上，按Win + R组合键，键入cmd，然后按Enter。</p>
</li>
<li>
<p>运行ping命令：在命令提示符中，输入以下命令，将CloudServerIP替换为您华为云主机的实际IP地址。</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> CloudServerIP</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这个命令将显示从本地主机到华为云主机的延迟。</p>
<h4 id="使用iperf执行带宽测试" tabindex="-1"><a class="header-anchor" href="#使用iperf执行带宽测试"><span>使用iperf执行带宽测试：</span></a></h4>
<ol>
<li>
<p>安装iperf：在本地主机和华为云主机上安装iperf工具。您可以在iperf官方网站<a href="https://iperf.fr/" target="_blank" rel="noopener noreferrer">https://iperf.fr/</a>上找到相关的安装说明。</p>
</li>
<li>
<p>启动iperf服务器：在华为云主机上运行以下命令：</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">iperf</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -s</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>运行iperf客户端：在本地主机上执行以下命令，将CloudServerIP替换为您华为云主机的实际IP地址。</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">iperf</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> CloudServerIP</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这将显示从本地主机到华为云主机的带宽测试结果。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Client</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> connecting</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Cloud</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> TCP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> port</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5001</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">TCP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> window</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> size:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 85.3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> KByte</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (default)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[  3] </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">local</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> 192</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">168</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">2</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> port</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> 12345</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> connected</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">Cloud</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Host</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> IP</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">port</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> 5001</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[ ID] Interval       Transfer     Bandwidth</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[  3]  0.0-10.0 sec  1.10 GBytes   944 Mbits/sec</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要分析带宽，您只需要查看“带宽”列。带宽是网络连接速度的度量，通常以每秒比特数（bps）表示。在上面的示例中，带宽以兆比特每秒（Mbits/sec）表示。</p>
<p>请注意，带宽测试的结果可能会受到网络条件、服务器性能和其他因素的影响。在实际应用之前，建议在不同时间和不同条件下运行多次测试，以获取更全面的带宽性能数据。</p>
</div></template>


