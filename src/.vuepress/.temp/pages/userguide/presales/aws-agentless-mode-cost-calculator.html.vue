<template><div><h1 id="deep-in-aws-agentless-mode-rc" tabindex="-1"><a class="header-anchor" href="#deep-in-aws-agentless-mode-rc"><span>Deep in AWS Agentless Mode(RC)</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#how-it-works">How it works?</router-link><ul><li><router-link to="#overview">Overview</router-link></li><li><router-link to="#synchronization-process">Synchronization Process</router-link></li><li><router-link to="#technical-details">Technical Details</router-link></li><li><router-link to="#reference-links">Reference Links</router-link></li></ul></li><li><router-link to="#aws-agentless-mode-cost-calculator-rc">AWS Agentless Mode Cost Calculator(RC)</router-link><ul><li><router-link to="#understand-the-cost">Understand the Cost</router-link></li><li><router-link to="#aws-cost-calculator">AWS Cost Calculator</router-link></li><li><router-link to="#sample">Sample</router-link></li></ul></li></ul></nav>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This document will apply only to HyperBDR version 5.6.0 and above. HyperBDR version 5.6.0 is scheduled for release on June 30, 2024.</p>
</div>
<h2 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works"><span>How it works?</span></a></h2>
<h3 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h3>
<p>This document outlines how to achieve agentless synchronization using AWS Direct API. The method relies on AWS EC2 snapshots and leverages HyperBDR for efficient and reliable data synchronization. The core idea is to utilize the full and incremental snapshot features to synchronize data by comparing differences between snapshots.</p>
<h3 id="synchronization-process" tabindex="-1"><a class="header-anchor" href="#synchronization-process"><span>Synchronization Process</span></a></h3>
<h4 id="initial-snapshot-creation" tabindex="-1"><a class="header-anchor" href="#initial-snapshot-creation"><span>Initial Snapshot Creation</span></a></h4>
<ul>
<li>Create an initial snapshot of the host using AWS EC2 snapshot functionality.</li>
<li>This initial snapshot contains all the data from the host.</li>
<li>Use AWS Direct API operations list-snapshot-blocks and get-snapshot-block to read all data from this snapshot and transfer it to the target platform storage.</li>
<li>Retain the initial snapshot for future synchronization.</li>
</ul>
<h4 id="subsequent-incremental-synchronization" tabindex="-1"><a class="header-anchor" href="#subsequent-incremental-synchronization"><span>Subsequent Incremental Synchronization</span></a></h4>
<ul>
<li>Create a new snapshot of the host using AWS EC2 snapshot functionality during the next synchronization.</li>
<li>Use AWS Direct API operation list-changed-blocks to find the differences between the new snapshot and the previous snapshot, identifying the incremental data.</li>
<li>Use get-snapshot-block to read and transfer the incremental data to the target platform storage, ensuring the target platform is up to date.</li>
<li>After transferring the incremental data, delete the previous snapshot and keep the current snapshot for the next synchronization.</li>
</ul>
<h3 id="technical-details" tabindex="-1"><a class="header-anchor" href="#technical-details"><span>Technical Details</span></a></h3>
<h4 id="snapshot-creation" tabindex="-1"><a class="header-anchor" href="#snapshot-creation"><span>Snapshot Creation</span></a></h4>
<ul>
<li>Create snapshots using the AWS EC2 API, such as the CreateSnapshot API.</li>
<li>Ensure the snapshot creation process minimally impacts the production environment.</li>
</ul>
<h4 id="data-reading-and-transfer" tabindex="-1"><a class="header-anchor" href="#data-reading-and-transfer"><span>Data Reading and Transfer</span></a></h4>
<ul>
<li>Use list-snapshot-blocks to get a list of data blocks in the snapshot.</li>
<li>Use get-snapshot-block to read each data block and transfer the data efficiently to the target platform storage.</li>
</ul>
<h4 id="incremental-snapshots-and-difference-calculation" tabindex="-1"><a class="header-anchor" href="#incremental-snapshots-and-difference-calculation"><span>Incremental Snapshots and Difference Calculation</span></a></h4>
<ul>
<li>Use list-changed-blocks to get a list of changed data blocks between two snapshots.</li>
<li>Use get-snapshot-block to read the changed data blocks and transfer the incremental data to the target platform storage.</li>
</ul>
<h4 id="snapshot-management" tabindex="-1"><a class="header-anchor" href="#snapshot-management"><span>Snapshot Management</span></a></h4>
<ul>
<li>Retain the latest snapshot for the next incremental synchronization.</li>
<li>Regularly delete old snapshots to save storage costs and reduce management overhead.</li>
</ul>
<h3 id="reference-links" tabindex="-1"><a class="header-anchor" href="#reference-links"><span>Reference Links</span></a></h3>
<ul>
<li><a href="https://docs.aws.amazon.com/ebs/latest/userguide/readsnapshots.html" target="_blank" rel="noopener noreferrer">Read snapshots with EBS direct APIs</a></li>
</ul>
<h2 id="aws-agentless-mode-cost-calculator-rc" tabindex="-1"><a class="header-anchor" href="#aws-agentless-mode-cost-calculator-rc"><span>AWS Agentless Mode Cost Calculator(RC)</span></a></h2>
<h3 id="understand-the-cost" tabindex="-1"><a class="header-anchor" href="#understand-the-cost"><span>Understand the Cost</span></a></h3>
<p>The pricing calculation for AWS Agentless mode primarily involves two main components: costs at the source and destination ends. This document focuses on describing potential charges incurred on the AWS side. For calculating destination costs, we recommend using the calculator available at <a href="https://calculator.oneprocloud.com/home" target="_blank" rel="noopener noreferrer">https://calculator.oneprocloud.com/home</a>.</p>
<h3 id="aws-cost-calculator" tabindex="-1"><a class="header-anchor" href="#aws-cost-calculator"><span>AWS Cost Calculator</span></a></h3>
<p>For hosts requiring data synchronization, key considerations include:</p>
<ul>
<li>Total disk capacity</li>
<li>Data change rate based on Recovery Point Objectives (RPO)</li>
</ul>
<p>When calculating AWS source-side costs, the main components include:</p>
<ul>
<li><strong>Sync Proxy EC2 Cost</strong>: Used to establish a synchronization agent at the source for managing data transfers and synchronization operations.</li>
<li><strong>Data Transfer Cost</strong>: Involves the cost of network data transfer from the source to the destination. Costs may vary, especially for transfers across AWS regions or to other cloud providers.</li>
<li><strong>Snapshot Storage Cost</strong>: At least one snapshot needs to be kept for incremental data synchronization.</li>
<li><strong>EBS Direct API Call Cost</strong>: If utilizing EBS Direct API for snapshot operations, consider the corresponding API call charges.</li>
</ul>
<h3 id="sample" tabindex="-1"><a class="header-anchor" href="#sample"><span>Sample</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The prices in this document are based on data from the AWS calculator as of June 20, 2024, in the Hong Kong region. For the latest data, please visit the <a href="https://calculator.aws/#/" target="_blank" rel="noopener noreferrer">AWS calculator website</a>.</p>
</div>
<p>We assume there are 1 hosts, each with a disk capacity of 1TB and effective data of 500GB, with an RPO of 1 day and incremental data of 5%. We are backing up data to another cloud platform. Monthly cost calculations are as follows:</p>
<h4 id="sync-proxy" tabindex="-1"><a class="header-anchor" href="#sync-proxy"><span>Sync Proxy</span></a></h4>
<p>We use a c5.large EC2 instance with 2 cores and 4 GB of RAM, along with a dedicated public IP address. The monthly cost on an On-Demand basis is approximately $78.84</p>
<h4 id="snapshots" tabindex="-1"><a class="header-anchor" href="#snapshots"><span>Snapshots</span></a></h4>
<p>We need to keep at least one snapshot for comparing incremental changes during the next synchronization. Assuming we use a General Purpose SSD (gp2) volume type, the snapshot size was 500GB on the first day and 25GB on the second day. From the second day until the end of the month, the snapshot size remains 25GB (ignoring the overlap of two snapshots).</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Initial snapshot cost for 1 Day: 500 GB x 0.0550000000 / 30 = 0.917 USD</span></span>
<span class="line"><span>Monthly cost of each snapshot: 25 GB x 0.0550000000 USD = 1.375 USD</span></span>
<span class="line"><span>Discount for partial storage month: 1.375 USD x 50% = 0.6875 USD</span></span>
<span class="line"><span>Incremental snapshot cost: 0.6875 USD x (30 - 1) = 19.9375 USD</span></span>
<span class="line"><span>Total snapshot cost: 0.917 USD + 19.9375 USD = 20.8545 USD</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="data-transfer" tabindex="-1"><a class="header-anchor" href="#data-transfer"><span>Data Transfer</span></a></h4>
<p>The data transfer starts with 500GB on the first day and decreases to 25GB per day thereafter due to a 5% incremental change daily. Now, let's calculate the total data transfer over 30 days:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Initial day transfer: 500GB</span></span>
<span class="line"><span>Subsequent days transfer: 25GB per day</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Total transfer = (Initial day transfer + Sum of subsequent days transfers)</span></span>
<span class="line"><span>Total transfer = 500GB + (25GB * 29 days)</span></span>
<span class="line"><span>Total transfer = 500GB + 725GB</span></span>
<span class="line"><span>Total transfer = 1225GB</span></span>
<span class="line"><span>Internet: 1225 GB x 0.12 USD per GB = 147.00 USD</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ebs-direct-api" tabindex="-1"><a class="header-anchor" href="#ebs-direct-api"><span>EBS Direct API</span></a></h4>
<p>Based on the calculation process provided, here's how you would determine the cost for managing 1225GB of data using AWS EBS Direct API operations:</p>
<p>Based on the calculation process provided, here's how you would determine the cost for managing 1225GB of data using AWS EBS Direct API operations:</p>
<h5 id="calculate-total-block-count" tabindex="-1"><a class="header-anchor" href="#calculate-total-block-count"><span>Calculate Total Block Count:</span></a></h5>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Total data size in KiB = 1225 GB * 1024 * 1024 KiB/GB = 1,259,520,000 KiB</span></span>
<span class="line"><span>Block size = 512 KiB</span></span>
<span class="line"><span>Total blocks = Total data size / Block size = 1,259,520,000 KiB / 512 KiB = 2,456,250 blocks</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="calculate-getsnapshotblock-api-cost" tabindex="-1"><a class="header-anchor" href="#calculate-getsnapshotblock-api-cost"><span>Calculate GetSnapshotBlock API Cost:</span></a></h5>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Total SnapshotAPIUnits = Total blocks = 2,456,250 blocks</span></span>
<span class="line"><span>Cost per 1,000 SnapshotAPIUnits = $0.003</span></span>
<span class="line"><span>GetSnapshotBlock API cost = (Total SnapshotAPIUnits / 1,000) * Cost per 1,000 SnapshotAPIUnits</span></span>
<span class="line"><span>  = (2,456,250 / 1,000) * $0.003</span></span>
<span class="line"><span>  = 2,456.25 * $0.003</span></span>
<span class="line"><span>  = $7.36875</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="calculate-listsnapshotblocks-and-listchangedblocks-api-cost" tabindex="-1"><a class="header-anchor" href="#calculate-listsnapshotblocks-and-listchangedblocks-api-cost"><span>Calculate ListSnapshotBlocks and ListChangedBlocks API Cost:</span></a></h5>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Total requests for List APIs = Total blocks / 512 blocks per request</span></span>
<span class="line"><span>  = 2,456,250 blocks / 512 blocks per request</span></span>
<span class="line"><span>  ≈ 4,796.68 requests (rounded up from 4,796.6796875)</span></span>
<span class="line"><span>Cost per 1,000 requests = $0.0006</span></span>
<span class="line"><span>List APIs cost = (Total requests / 1,000) * Cost per 1,000 requests</span></span>
<span class="line"><span>  = (4,796.68 / 1,000) * $0.0006</span></span>
<span class="line"><span>  = 4.79668 * $0.0006</span></span>
<span class="line"><span>  = $0.002878008</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="total-cost" tabindex="-1"><a class="header-anchor" href="#total-cost"><span>Total Cost:</span></a></h5>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Total cost = GetSnapshotBlock API cost + List APIs cost</span></span>
<span class="line"><span>  = $7.36875 + $0.002878008</span></span>
<span class="line"><span>  ≈ $7.371628</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Therefore, the estimated cost for managing 1225GB of data using AWS EBS Direct APIs is approximately <strong>$7.37</strong>. This calculation includes the costs for retrieving snapshot blocks and listing snapshot information based on the specified data size.</p>
<h4 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h4>
<p>We assume there are 1 host, each with a disk capacity of 1TB and effective data of 500GB, with an RPO of 1 day and incremental data of 5%. We are backing up data to another cloud platform. Monthly cost calculations are as follows:</p>
<table>
<thead>
<tr>
<th>Description</th>
<th>Cost (USD)</th>
</tr>
</thead>
<tbody>
<tr>
<td>EC2 c5.large instance (On-Demand, monthly)</td>
<td>$78.84</td>
</tr>
<tr>
<td>Total snapshot cost</td>
<td>$20.8545</td>
</tr>
<tr>
<td>Internet data transfer (1225 GB x $0.12 per GB)</td>
<td>$147.00</td>
</tr>
<tr>
<td>EBS Direct API cost (for managing 1225GB of data)</td>
<td>$7.37</td>
</tr>
<tr>
<td><strong>Total Estimated Cost</strong></td>
<td><strong>$254.0645</strong></td>
</tr>
</tbody>
</table>
</div></template>


