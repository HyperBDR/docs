<template><div><h1 id="rpo-rto-best-practices" tabindex="-1"><a class="header-anchor" href="#rpo-rto-best-practices"><span>RPO &amp; RTO Best Practices</span></a></h1>
<h2 id="basic-concept" tabindex="-1"><a class="header-anchor" href="#basic-concept"><span>Basic Concept</span></a></h2>
<h3 id="about-rpo-rto" tabindex="-1"><a class="header-anchor" href="#about-rpo-rto"><span>About RPO &amp; RTO</span></a></h3>
<p>When it comes to Disaster Recovery, two key concepts are RPO (Recovery Point Objective) and RTO (Recovery Time Objective). They are critical performance metrics in disaster recovery planning, used to measure the recoverability and business continuity of systems in the event of a catastrophic incident.</p>
<h4 id="recovery-point-objective-rpo" tabindex="-1"><a class="header-anchor" href="#recovery-point-objective-rpo"><span>Recovery Point Objective (RPO)</span></a></h4>
<p>RPO refers to the time frame within which a system can tolerate data loss in the event of a failure or catastrophic incident. In other words, RPO defines the maximum amount of data loss that the business can tolerate. Usually measured in units of time (such as hours or minutes), the choice of RPO depends on the business's real-time data requirements and the acceptable risk of data loss. Lower RPO values indicate that the system can back up data more frequently, reducing the amount of data lost in the event of a catastrophic incident.</p>
<p>Factors involved in calculating RPO include:</p>
<ul>
<li>
<p>Business criticality: Systems critical to business operations will have a higher RPO, while less critical systems will have a lower RPO.</p>
</li>
<li>
<p>Data change rate: Systems with a high data change rate typically have a higher RPO, while systems with a lower data change rate have a lower RPO.</p>
</li>
<li>
<p>Backup frequency: Higher backup frequencies result in lower RPO.</p>
</li>
<li>
<p>Recovery time: Shorter recovery time requirements lead to lower RPO.</p>
</li>
<li>
<p>Backup storage: If backup storage is more reliable and recovery time is shorter, RPO will remain lower.</p>
</li>
<li>
<p>Compliance and regulatory requirements: Some industries have specific requirements for data recovery and retention, which may affect RPO.</p>
</li>
<li>
<p>IT budget and resources: An organization's IT budget and available resources can impact RPO.</p>
</li>
<li>
<p>To establish a robust disaster recovery plan, it's essential to consider the above factors when calculating RPO.</p>
</li>
</ul>
<h4 id="recovery-time-objective-rto" tabindex="-1"><a class="header-anchor" href="#recovery-time-objective-rto"><span>Recovery Time Objective (RTO)</span></a></h4>
<p>RTO (Recovery Time Objective) refers to the maximum time required for a system to recover to normal operation after a catastrophic event. It is a time window that defines the maximum acceptable downtime for the business. The selection of RTO is typically based on the business's continuity requirements, indicating how quickly the business can resume normal operation after a catastrophic event. A shorter RTO indicates a higher level of business continuity, as the system can recover more quickly from a disaster, minimizing business interruption.</p>
<p>The RTO time is equal to the sum of the Host Recovery Time and Business Recovery Time.</p>
<p>Host Recovery Time: This refers to the time required to recover the system after a failure or catastrophic event. This may involve steps such as restarting the host, loading the operating system, and applications.</p>
<p>Business Recovery Time: This refers to the time required for the business to fully recover to normal operation after the host has been recovered. This includes ensuring that applications and services are fully available and that business functions are executing normally.</p>
<h4 id="disaster-recovery-costs-and-their-relationship-with-rpo-and-rto" tabindex="-1"><a class="header-anchor" href="#disaster-recovery-costs-and-their-relationship-with-rpo-and-rto"><span>Disaster recovery costs and their relationship with RPO and RTO:</span></a></h4>
<p>The pursuit of a lower RPO often requires more frequent data backup and replication, leading to an increase in storage, bandwidth, and operational costs. Real-time or near-real-time backup demands greater resource investment, resulting in a corresponding increase in costs while achieving a low RPO. Conversely, higher RPO implies longer backup intervals, reducing the frequency of backup and replication, thereby lowering hardware and network costs.</p>
<p>Achieving a shorter RTO typically demands more resource investment, including high-availability systems, redundant equipment, and complex architecture, which increases hardware, software, and maintenance costs. On the contrary, opting for a longer RTO allows for more downtime, reducing reliance on high-availability systems and consequently lowering associated costs.</p>
<h4 id="how-to-choose-reasonable-rpo-and-rto" tabindex="-1"><a class="header-anchor" href="#how-to-choose-reasonable-rpo-and-rto"><span>How to choose reasonable RPO and RTO?</span></a></h4>
<p>It is recommended to adopt a flexible disaster recovery plan based on business needs and cost tolerance. Flexibly choose RPO and RTO based on the importance of business systems. Provide higher investment for critical business systems to minimize potential data loss and downtime, while secondary systems can accept some sacrifices to achieve cost reduction. For critical business systems, pursuing low RPO and short RTO may require higher investment, whereas secondary systems can tolerate higher RPO and longer RTO to reduce costs.</p>
<h2 id="hyperbdr-rpo-rto-best-practices" tabindex="-1"><a class="header-anchor" href="#hyperbdr-rpo-rto-best-practices"><span>HyperBDR RPO &amp; RTO Best Practices</span></a></h2>
<h3 id="hyperbdr-rpo-rto" tabindex="-1"><a class="header-anchor" href="#hyperbdr-rpo-rto"><span>HyperBDR RPO &amp; RTO</span></a></h3>
<table>
<thead>
<tr>
<th>Storage Type</th>
<th>Cloud Platform</th>
<th>Min. RPO</th>
<th>Min. RTO</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>Block Storage</td>
<td>Huawei Cloud</td>
<td>5 Minutes</td>
<td>5 Minutes - 10 Minutes</td>
<td>In Huawei Cloud, the recovery time for block storage is independent of the data volume, with a restoration time range of 5-10 minutes.</td>
</tr>
<tr>
<td>Object Storage</td>
<td>Huawei Cloud</td>
<td>5 Minutes</td>
<td>5 minutes to hours (depending on the actual amount of data being recovered)</td>
<td>In Huawei Cloud, the Object Storage Recovery Time Objective (RTO) is influenced by multiple factors, including data volume and the specifications of the recovery host. For detailed calculation methods, please refer to the Best Practices for RTO Planning.</td>
</tr>
</tbody>
</table>
<h3 id="best-practices-for-rpo-calculation" tabindex="-1"><a class="header-anchor" href="#best-practices-for-rpo-calculation"><span>Best Practices for RPO Calculation</span></a></h3>
<h4 id="rpo-calculation" tabindex="-1"><a class="header-anchor" href="#rpo-calculation"><span>RPO Calculation</span></a></h4>
<p>In HyperBDR, the factors influencing RPO primarily include network (bandwidth and latency) and data change volume, where RPO is approximately equal to the data change volume divided by the network.</p>
<p>HyperBDR predominantly employs block-level differential capture technology to obtain the data change volume. This involves capturing the sum of changed blocks at the operating system's block level within a unit time range, which can be estimated based on the specific business scenario.</p>
<p>Network bandwidth and latency refer to the connection between the user's current environment and the cloud. Depending on the mode used, they are categorized as follows:</p>
<ul>
<li>
<p>Block Storage: Network bandwidth and latency between the user's side and the synchronization gateway's public network in the cloud.</p>
</li>
<li>
<p>Object Storage: Network bandwidth and latency between the user's side and the cloud's object storage.</p>
</li>
</ul>
<p>Assuming the user's production data allocation capacity is 1TB, we outline the bandwidth and data change volume under different RPO requirements.</p>
<table>
<thead>
<tr>
<th>Data Volume (TB)</th>
<th>RPO Expectation (Minutes)</th>
<th>Data Change Rate (%)</th>
<th>Data Change Volume (GB)</th>
<th>Estimated Bandwidth (Mbps)</th>
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
<h3 id="best-practices-for-rto-calculation" tabindex="-1"><a class="header-anchor" href="#best-practices-for-rto-calculation"><span>Best Practices for RTO Calculation</span></a></h3>
<h4 id="block-storage" tabindex="-1"><a class="header-anchor" href="#block-storage"><span>Block Storage</span></a></h4>
<p>In Huawei Cloud, the recovery time for block storage is independent of the data volume and the specifications of the host used for recovery. The RTO time range is between 5 minutes and 10 minutes. The following is a simulated test scenario using 1 TB capacity for reference in actual planning:</p>
<table>
<thead>
<tr>
<th>Disk Count</th>
<th>Recovery Host Flavor</th>
<th>Disk Type</th>
<th>Recovery Host Duration (Minutes)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Single Disk(Usage Capacity 800 GB)<br/> Multiple Disks(Usage Capacity 1010 GB)</td>
<td>Unrestricted (Ensure that the selected host specifications can use the corresponding disk type)</td>
<td>High I/O(SAS) <br/> General Purpose SSD(GPSSD) <br/> Ultra-high I/O(SSD) <br/> Extreme SSD(ESSD)</td>
<td>5 - 10</td>
</tr>
</tbody>
</table>
<h4 id="object-storage" tabindex="-1"><a class="header-anchor" href="#object-storage"><span>Object Storage</span></a></h4>
<p>In Huawei Cloud, the Object Storage mode is influenced by several factors in terms of RTO time, primarily including:</p>
<ul>
<li>
<p>Data Volume: The actual volume of data being recovered.</p>
</li>
<li>
<p>Number of Disks: When recovering from multiple disks simultaneously, the recovery time is approximately equal to the time taken for the maximum disk recovery.</p>
</li>
<li>
<p>Temporary Recovery Gateway Specification Configuration</p>
<ul>
<li>
<p>During recovery with HyperBDR, a host is launched as a temporary recovery gateway for business recovery. The specifications of this host are set by the user in the disaster recovery configuration. Metrics such as CPU, memory, maximum bandwidth, and maximum packet send/receive capability in these specifications may affect the recovery speed.</p>
</li>
<li>
<p>Impact of Specifications on Disk Concurrent Recovery Speed: During the recovery process in HyperBDR, CPU and memory resources are required to decrypt and decompress (if enabled) object storage data before restoring it to block storage. By default, data recovery is performed concurrently, and each disk requires a minimum of 1 GB of memory for recovery. For example, using a specification of 2 cores and 4 GB of RAM, a maximum of 4 disks can undergo simultaneous recovery.</p>
</li>
</ul>
</li>
<li>
<p>Volume Type: During recovery with HyperBDR, the data from object storage is recopied to block storage. Therefore, the selected volume type in the disaster recovery configuration also affects the recovery time.</p>
</li>
</ul>
<p>Below are some common specification recommendations and the host recovery time for 1TB of effective data (i.e., entirely comprised of data) under different circumstances.</p>
<table>
<thead>
<tr>
<th>Disk Count</th>
<th>Recovery Host Flavor</th>
<th>Disk Type</th>
<th>Recovery Host Duration (Minutes)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Single Disk(Usage capacity 100 GB)</td>
<td>Memory is less than or equal to 4GB Maximum bandwidth range: 1.5 - 4 Gbps</td>
<td>High I/O(SAS) <br/> General Purpose SSD(GPSSD) <br/> Ultra-high I/O(SSD) <br/> Extreme SSD(ESSD)</td>
<td>20 Minutes(Ultra-high I/O, Extreme SSD) <br/> 25 Minutes(General Purpose SSD) <br/> 30 Minutes(High I/O)</td>
</tr>
<tr>
<td>Single Disk(Usage capacity 100 GB)</td>
<td>Memory is greater than 4GB Maximum bandwidth range: Greater than 4 Gbps</td>
<td>High I/O(SAS) <br/> General Purpose SSD(GPSSD) <br/> Ultra-high I/O(SSD) <br/> Extreme SSD(ESSD)</td>
<td>30 Minutes(High I/O) <br/> 20 Minutes(Ultra-high I/O, Extreme SSD)</td>
</tr>
<tr>
<td>Single Disk(Usage capacity 500 GB)</td>
<td>Memory is less than or equal to 4GB Maximum bandwidth range: 1.5 - 4 Gbps</td>
<td>High I/O(SAS) <br/> General Purpose SSD(GPSSD) <br/> Ultra-high I/O(SSD) <br/> Extreme SSD(ESSD)</td>
<td>1 Hour 30 Minutes(High I/O) <br/> 1 Hour 10 Minutes(Ultra-high I/O, Extreme SSD)</td>
</tr>
<tr>
<td>Single Disk(Usage capacity 500 GB)</td>
<td>Memory is greater than 4GB Maximum bandwidth range: Greater than 4 Gbps</td>
<td>High I/O(SAS) <br/> General Purpose SSD(GPSSD) <br/> Ultra-high I/O(SSD) <br/> Extreme SSD(ESSD)</td>
<td>45 Minutes(Ultra-high I/O, Extreme SSD) <br/> 1 Hour 30 Minutes(High I/O)</td>
</tr>
<tr>
<td>Single Disk(Usage capacity 920 GB) <br/> Multiple Disks(Usage capacity 1010 GB)</td>
<td>Memory is less than or equal to 4GB Maximum bandwidth range: 1.5 - 4 Gbps</td>
<td>High I/O(SAS) <br/> General Purpose SSD(GPSSD) <br/> Ultra-high I/O(SSD) <br/> Extreme SSD(ESSD)</td>
<td>2 Hours 10 Minutes(Ultra-high I/O, Extreme SSD) <br/> 2 Hours 20 Minutes(General Purpose SSD) <br/> 2 Hours 30 Minutes(High I/O)</td>
</tr>
<tr>
<td>Single Disk(Usage capacity 920 GB) <br/> Multiple Disks(Usage capacity 1010 GB)</td>
<td>Memory is greater than 4GB Maximum bandwidth range: Greater than 4 Gbps</td>
<td>General Purpose SSD(GPSSD) <br/> Ultra-high I/O(SSD) <br/> Extreme SSD(ESSD)</td>
<td>1 Hour 15 Minutes(Ultra-high I/O, Extreme SSD) <br/> 1 Hour 35 Minutes(General Purpose SSD)</td>
</tr>
</tbody>
</table>
<h4 id="recommended-specifications-for-object-storage-mode-disaster-recovery" tabindex="-1"><a class="header-anchor" href="#recommended-specifications-for-object-storage-mode-disaster-recovery"><span>Recommended Specifications for Object Storage Mode Disaster Recovery</span></a></h4>
<p>Documentation for Huawei Cloud Computing Specifications：<a href="https://support.huaweicloud.com/intl/en-us/productdesc-ecs/ecs_01_0014.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/productdesc-ecs/ecs_01_0014.html</a></p>
<table>
<thead>
<tr>
<th>Specifications</th>
<th>Recommendation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Memory is less than or equal to 4GB Maximum bandwidth range: 1.5 - 4 Gbps</td>
<td>General Computing S7 / S7n / S6 / Sn3 <br/> General Computing-plus C7n / C6 / C3ne / C3 <br/> High-performance computing H3 / Hc2</td>
</tr>
<tr>
<td>Memory is greater than 4GB Maximum bandwidth range: Greater than 4 Gbps</td>
<td>General Computing Sn3 / S3 / S2 <br/> General Computing-plus C7 / aC7 / C7n / C6s / C6h / C6 / C3ne / C3 <br/> Memory-optimized M7 / aM7 / M7n / M6 / M6nl / M3ne / M3 / M2 <br/> Large-Memory E7 / E6 / E3 <br/> Disk-intensive D7 / D6 / D3 / D2 <br/> Ultra-high I/O Ir7 / I7 / aI7 / Ir7n / I7n / Ir3 / I3 <br/> High-Performance Computing H3 / Hc2</td>
</tr>
</tbody>
</table>
<p>How to search for recommended series and specific specifications in the Huawei Cloud official documentation:</p>
<p>For instance, if the specifications require a memory size of 4GB or less and a maximum bandwidth ranging from 1.5 to 4 Gbps, follow these steps:</p>
<ol>
<li>
<p>Locate each series that meets these requirements. Then, search the Max./Assured Bandwidth (Gbit/s) column in the specifications list for each series, filtering the range between 1.5 and 4 Gbps.</p>
</li>
<li>
<p>Refine the search by filtering the Memory (GiB) column to find specifications with 4GB or less.</p>
</li>
</ol>
<p>Example Reference: In the General Computing S7 series, under the S7 type, the s7.large.2(2C4G) specification meets the criteria, with 4GB of memory and a maximum bandwidth of 1.5 Gbps.</p>
<figure><img src="@source/userguide/presales/images/hyperbdr-rpo--rto-planning-best-practices-1.png" alt="hyperbdr-rpo--rto-planning-best-practices-1.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-rpo--rto-planning-best-practices-1.png</figcaption></figure>
<h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h2>
<h3 id="how-to-test-the-bandwidth-and-latency-between-a-local-host-and-a-huawei-cloud-host" tabindex="-1"><a class="header-anchor" href="#how-to-test-the-bandwidth-and-latency-between-a-local-host-and-a-huawei-cloud-host"><span>How to test the bandwidth and latency between a local host and a Huawei Cloud host?</span></a></h3>
<h4 id="how-to-test-latency-using-the-ping-command" tabindex="-1"><a class="header-anchor" href="#how-to-test-latency-using-the-ping-command"><span>How to test latency using the ping command:</span></a></h4>
<ol>
<li>
<p>Open the command prompt: On the local host, press the Win + R key combination, type cmd, and press Enter.</p>
</li>
<li>
<p>Run the ping command: In the command prompt, enter the following command, replacing CloudServerIP with the actual IP address of your Huawei Cloud host.</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> CloudServerIP</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This will display the round-trip latency between the local host and the Huawei Cloud host.</p>
<h4 id="performing-bandwidth-tests-using-iperf" tabindex="-1"><a class="header-anchor" href="#performing-bandwidth-tests-using-iperf"><span>Performing bandwidth tests using iperf</span></a></h4>
<ol>
<li>
<p>Install iperf: Install the iperf tool on both the local host and the Huawei Cloud host. You can find relevant installation instructions on the iperf official website(<a href="https://iperf.fr/" target="_blank" rel="noopener noreferrer">https://iperf.fr/</a>).</p>
</li>
<li>
<p>Start the iperf server: Run the following command on the Huawei Cloud host:</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">iperf</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -s</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>Run the iperf client: Execute the following command on the local host, replacing CloudServerIP with the actual IP address of your Huawei Cloud host:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">iperf</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> CloudServerIP</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This will display the bandwidth test results from the local host to the Huawei Cloud host.</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Client</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> connecting</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Cloud</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> TCP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> port</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5001</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">TCP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> window</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> size:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 85.3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> KByte</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (default)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[  3] </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">local</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> 192</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">168</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">2</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> port</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> 12345</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> connected</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">Cloud</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Host</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> IP</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">port</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> 5001</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[ ID] Interval       Transfer     Bandwidth</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[  3]  0.0-10.0 sec  1.10 GBytes   944 Mbits/sec</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To analyze bandwidth, you only need to look at the &quot;Bandwidth&quot; column. Bandwidth is a measure of network connection speed, usually expressed in bits per second (bps). In the example above, bandwidth is represented in megabits per second (Mbits/sec).</p>
<p>Please note that the results of bandwidth tests may be influenced by network conditions, server performance, and other factors. Before actual application, it is recommended to run multiple tests at different times and under different conditions to obtain more comprehensive bandwidth performance data.</p>
</div></template>


