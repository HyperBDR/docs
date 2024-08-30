<template><div><h1 id="proof-of-concept" tabindex="-1"><a class="header-anchor" href="#proof-of-concept"><span>Proof of Concept</span></a></h1>
<p>HyperBDR offers Proof of Concept(PoC). This document will introduce the scope and objectives of PoC.</p>
<h2 id="poc-scope-overview" tabindex="-1"><a class="header-anchor" href="#poc-scope-overview"><span>PoC Scope Overview</span></a></h2>
<table>
<thead>
<tr>
<th>Solution Component</th>
<th>In Scope</th>
</tr>
</thead>
<tbody>
<tr>
<td>Investigation</td>
<td>- Gathering and Assessment about detail technical specification requirements</td>
</tr>
<tr>
<td></td>
<td>- Information gathering &amp; analysis</td>
</tr>
<tr>
<td>Schedule</td>
<td>- Provide PoC schedule</td>
</tr>
<tr>
<td>Deployment</td>
<td>- Provisioning Cloud (VM)</td>
</tr>
<tr>
<td></td>
<td>- Setup HyperBDR Server (for x VM/Server)</td>
</tr>
<tr>
<td></td>
<td>- Setup HyperBDR Agent/Agentless (for x VM/Server)</td>
</tr>
<tr>
<td></td>
<td>- Setup and Configuration DR Backup (Source VM/Server to Cloud)</td>
</tr>
<tr>
<td>Functional Testing</td>
<td>- Backup</td>
</tr>
<tr>
<td></td>
<td>- Backup Policy</td>
</tr>
<tr>
<td></td>
<td>- Drill Testing</td>
</tr>
<tr>
<td></td>
<td>- (Optional) Failback Testing (for x VM/Server)</td>
</tr>
</tbody>
</table>
<h2 id="hyperbdr-uat" tabindex="-1"><a class="header-anchor" href="#hyperbdr-uat"><span>HyperBDR UAT</span></a></h2>
<h3 id="dr-scope" tabindex="-1"><a class="header-anchor" href="#dr-scope"><span>DR Scope</span></a></h3>
<table>
<thead>
<tr>
<th>Solution Component</th>
<th>In Scope</th>
</tr>
</thead>
<tbody>
<tr>
<td>Configuration</td>
<td>- Configuration HyperBDR System</td>
</tr>
<tr>
<td></td>
<td>- Configuration OBS or Block storage backup mode on Cloud</td>
</tr>
<tr>
<td></td>
<td>- Configure Cloud as the DR Recovery Site</td>
</tr>
<tr>
<td>Post Deployment</td>
<td>Drill &amp; Takeover:</td>
</tr>
<tr>
<td></td>
<td>- Testing Backup Process (Backup Policy, Incremental)</td>
</tr>
<tr>
<td></td>
<td>- Testing Drill &amp; Takeover (to VM in Cloud)</td>
</tr>
<tr>
<td>Finalization</td>
<td>- Hand over after deployment is ready in the production</td>
</tr>
</tbody>
</table>
<h3 id="optional-failback-scope" tabindex="-1"><a class="header-anchor" href="#optional-failback-scope"><span>(Optional)Failback Scope</span></a></h3>
<table>
<thead>
<tr>
<th>Solution Component</th>
<th>In Scope</th>
</tr>
</thead>
<tbody>
<tr>
<td>Configuration</td>
<td>- Configuration HyperBDR System</td>
</tr>
<tr>
<td></td>
<td>- Configuration OBS or Block storage failback mode on Cloud</td>
</tr>
<tr>
<td></td>
<td>- Configure Production Site</td>
</tr>
<tr>
<td>Post Deployment</td>
<td>Failback:</td>
</tr>
<tr>
<td></td>
<td>- Testing Failback Process (Full Data Transmission)</td>
</tr>
<tr>
<td></td>
<td>- Testing Failback Recovery (to VM in source production Site)</td>
</tr>
<tr>
<td>Finalization</td>
<td>- Hand over after deployment is ready in the production</td>
</tr>
</tbody>
</table>
<h3 id="out-of-scope" tabindex="-1"><a class="header-anchor" href="#out-of-scope"><span>Out of Scope</span></a></h3>
<table>
<thead>
<tr>
<th>Solution Component</th>
<th>Out of Scope</th>
</tr>
</thead>
<tbody>
<tr>
<td>Network Configuration</td>
<td>Configuration existing Backup Network and Firewall such as:</td>
</tr>
<tr>
<td></td>
<td>• Configuration and construction of the cloud special line and the Access test (VPN and source production firewall)</td>
</tr>
<tr>
<td></td>
<td>• Configuration DR Network and Drill &amp; Takeover Network on Cloud</td>
</tr>
<tr>
<td>Business Validation</td>
<td>Verify Drill &amp; Takeover business service availability</td>
</tr>
<tr>
<td></td>
<td>Verify Failback business service availability</td>
</tr>
</tbody>
</table>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>Due to the critical importance of networking for cloud disaster recovery, we also aim to assist users as much as possible in completing network configurations.</p>
</div>
<h2 id="responsibility-matrix" tabindex="-1"><a class="header-anchor" href="#responsibility-matrix"><span>Responsibility Matrix</span></a></h2>
<h3 id="network" tabindex="-1"><a class="header-anchor" href="#network"><span>Network</span></a></h3>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>This section is only applicable when users need to use an intranet for output transmission. If users are using a public network solution, they can skip this part.</p>
</div>
<table>
<thead>
<tr>
<th>No</th>
<th>Item</th>
<th style="text-align:center">OnePro</th>
<th style="text-align:center">Customer</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Cloud VPN settings(VPN Service or Open Source Solution)</td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>2</td>
<td>Private credentails for VPN</td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>3</td>
<td>Firewall Settings</td>
<td style="text-align:center"></td>
<td style="text-align:center">✓</td>
</tr>
<tr>
<td>4</td>
<td>Connectivity Testing</td>
<td style="text-align:center"></td>
<td style="text-align:center">✓</td>
</tr>
</tbody>
</table>
<h3 id="drill-takeover" tabindex="-1"><a class="header-anchor" href="#drill-takeover"><span>Drill &amp; Takeover</span></a></h3>
<table>
<thead>
<tr>
<th>No</th>
<th>Item</th>
<th style="text-align:center">OnePro</th>
<th style="text-align:center">Customer</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>On-Premises backup server / VM</td>
<td style="text-align:center"></td>
<td style="text-align:center">✓</td>
</tr>
<tr>
<td>2</td>
<td>Accessing Remote</td>
<td style="text-align:center"></td>
<td style="text-align:center">✓</td>
</tr>
<tr>
<td>3</td>
<td>Cloud Provisioning</td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>4</td>
<td>Setup HyperBDR (Backup System)</td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>5</td>
<td>Hosts Register in HyperBDR Console</td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>6</td>
<td>Backup &amp; Policy Settings</td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>7</td>
<td>Drill &amp; Takeover</td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>8</td>
<td>Restore Backup</td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>9</td>
<td>Validity after backup</td>
<td style="text-align:center"></td>
<td style="text-align:center">✓</td>
</tr>
</tbody>
</table>
<h3 id="failback" tabindex="-1"><a class="header-anchor" href="#failback"><span>Failback</span></a></h3>
<table>
<thead>
<tr>
<th>No</th>
<th>Item</th>
<th style="text-align:center">OnePro</th>
<th style="text-align:center">Customer</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Accessing Remote</td>
<td style="text-align:center"></td>
<td style="text-align:center">✓</td>
</tr>
<tr>
<td>2</td>
<td>Install Agent on failback VMs on Cloud</td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>3</td>
<td>Setup HyperBDR Console</td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>4</td>
<td>Failback Host Register in HyperBDR Console</td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>5</td>
<td>On-Premises failback server / VM Preparations</td>
<td style="text-align:center"></td>
<td style="text-align:center">✓</td>
</tr>
<tr>
<td>6</td>
<td>Failback Full Data Sync</td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>7</td>
<td>Restore failback server / VM</td>
<td style="text-align:center">✓</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>8</td>
<td>Validity after failback</td>
<td style="text-align:center"></td>
<td style="text-align:center">✓</td>
</tr>
</tbody>
</table>
<h2 id="poc-success-criteria" tabindex="-1"><a class="header-anchor" href="#poc-success-criteria"><span>PoC Success Criteria</span></a></h2>
<p>Click <a href="https://docs.google.com/spreadsheets/d/1KVFaDCzFmL9xEK3hKbSYJms7NEu8GyV_CuyzdSxob4w/edit?usp=sharing" target="_blank" rel="noopener noreferrer">here</a> to access the complete spreadsheet. Please download and print the spreadsheet for easy confirmation of the PoC results after completion.</p>
<h3 id="poc-success-criteria-checklist" tabindex="-1"><a class="header-anchor" href="#poc-success-criteria-checklist"><span>PoC Success Criteria Checklist</span></a></h3>
<table>
<thead>
<tr>
<th>No</th>
<th>Criteria</th>
<th>Pass</th>
<th>Fail</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td>Success Parameter – DR Backup (for x VM/Server)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>1</td>
<td>Backup process On-prems to Cloud</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>Configuration DR &amp; Backup Policy</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>Full and Incremental Backup</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>Drill Backup (to VM in Cloud)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>Validity Drill business service availability in Cloud</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td>(Optional) Success Parameter – Failback (for x VM/Server)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>1</td>
<td>Failback process Cloud to On-prems</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>Full data transmission</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>Restore failback server / VM in On-prems</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>Validity after failback business service availability</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>Prepared by,</th>
<th>Accepted by,</th>
</tr>
</thead>
<tbody>
<tr>
<td><br><br><br><br><br></td>
<td></td>
</tr>
<tr>
<td>e.g. MSP Company</td>
<td>e.g. Cusotmer Company</td>
</tr>
</tbody>
</table>
</div></template>


