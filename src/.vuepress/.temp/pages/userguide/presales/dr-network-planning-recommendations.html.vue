<template><div><h2 id="network-planning-overview" tabindex="-1"><a class="header-anchor" href="#network-planning-overview"><span>Network Planning Overview</span></a></h2>
<nav class="table-of-contents"><ul><li><router-link to="#network-planning-overview">Network Planning Overview</router-link></li><li><router-link to="#deployment-solution-for-object-storage">Deployment Solution for Object Storage</router-link><ul><li><router-link to="#networking-schemes">Networking Schemes</router-link></li><li><router-link to="#list-of-open-ports">List of Open Ports</router-link></li><li><router-link to="#deployment-architecture">Deployment Architecture</router-link></li></ul></li><li><router-link to="#deployment-solution-for-block-storage">Deployment Solution for Block Storage</router-link><ul><li><router-link to="#network-schemes">Network Schemes</router-link></li><li><router-link to="#list-of-open-ports-1">List of Open Ports</router-link></li><li><router-link to="#deployment-architecture-1">Deployment Architecture</router-link></li></ul></li><li><router-link to="#failback-network-planning-—-dedicated-line-solution">Failback Network Planning — Dedicated Line Solution</router-link><ul><li><router-link to="#block-storage">Block Storage</router-link></li><li><router-link to="#object-storage">Object Storage</router-link></li></ul></li><li><router-link to="#dr-network-planning">DR Network Planning</router-link><ul><li><router-link to="#user-network">User Network</router-link></li><li><router-link to="#dedicated-line-solution-1">Dedicated Line Solution 1</router-link></li><li><router-link to="#dedicated-line-solution-2">Dedicated Line Solution 2</router-link></li><li><router-link to="#internet-2">Internet</router-link></li></ul></li></ul></nav>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This document of AWS part will apply only to HyperBDR version 5.6.0 and above. HyperBDR version 5.6.0 is scheduled for release on June 30, 2024.</p>
</div>
<p>This document primarily focuses on the rational planning of the HyperBDR network and disaster recovery takeover, as well as the network used for drills, prior to the commencement of the project. The following are fundamental principles for network planning:</p>
<ul>
<li>
<p>HyperBDR should be deployed within the disaster recovery platform to ensure that, in the event of a production platform failure, HyperBDR can still effectively recover business systems on the disaster recovery platform.</p>
</li>
<li>
<p>HyperBDR does not have specific requirements for the underlying networking topology; it only requires that network communication ports and directions align with HyperBDR's needs.</p>
</li>
<li>
<p>The deployment approach for HyperBDR depends on the connection method between the production site and the cloud disaster recovery site. Based on different network connection scenarios, there are slight variations in deployment methods, resource requirements, and associated costs.</p>
</li>
<li>
<p>For stateful business system takeover, attention should be given to the firewall policy configuration of the network used for disaster recovery takeover, ensuring it aligns with the production network connection. This is to avoid incorrect data writes after the disaster recovery takeover system directly connects to the production end.</p>
</li>
</ul>
<h2 id="deployment-solution-for-object-storage" tabindex="-1"><a class="header-anchor" href="#deployment-solution-for-object-storage"><span>Deployment Solution for Object Storage</span></a></h2>
<h3 id="networking-schemes" tabindex="-1"><a class="header-anchor" href="#networking-schemes"><span>Networking Schemes</span></a></h3>
<table>
<thead>
<tr>
<th>Solution</th>
<th>Data Transmission</th>
<th>Business Access</th>
</tr>
</thead>
<tbody>
<tr>
<td>Internet</td>
<td>Internet</td>
<td>Internet</td>
</tr>
<tr>
<td>Dedicated Network Connection Solution (e.g. VPN)</td>
<td>Dedicated Network</td>
<td>Dedicated Network</td>
</tr>
<tr>
<td>Hybrid Network Solution</td>
<td>Internet</td>
<td>Dedicated Network</td>
</tr>
</tbody>
</table>
<blockquote>
<p>NOTE: Business Access after Post-Disaster Recovery Takeover</p>
</blockquote>
<h3 id="list-of-open-ports" tabindex="-1"><a class="header-anchor" href="#list-of-open-ports"><span>List of Open Ports</span></a></h3>
<h4 id="agent" tabindex="-1"><a class="header-anchor" href="#agent"><span>Agent</span></a></h4>
<p>Agent contains Windows Agent and Linux Agent.</p>
<table>
<thead>
<tr>
<th><strong>No.</strong></th>
<th><strong>From</strong></th>
<th><strong>To</strong></th>
<th><strong>Direction</strong></th>
<th><strong>Ports</strong></th>
<th><strong>Type</strong></th>
<th><strong>Comment</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Agent</td>
<td>HyperBDR Console</td>
<td>TCP Unidirectional</td>
<td>10443 / 30080</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>Agent</td>
<td>Object Storage Service</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Data Flow</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>HyperBDR Console</td>
<td>Object Storage Service</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>HyperBDR Console</td>
<td>Transition Host</td>
<td>TCP Unidirectional</td>
<td>10729</td>
<td>Control Flow</td>
<td>It is necessary to establish VPC Peering between HyperBDR Console and the VPC hosting the recovered VM. Port configurations will be automatically set up by the security group, and no specific settings are required.</td>
</tr>
<tr>
<td>5</td>
<td>HyperBDR Console</td>
<td>Cloud API</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>Transition Host</td>
<td>Object Storage Service</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Data Flow</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="vmware-agentless" tabindex="-1"><a class="header-anchor" href="#vmware-agentless"><span>VMware Agentless</span></a></h4>
<table>
<thead>
<tr>
<th><strong>No.</strong></th>
<th><strong>From</strong></th>
<th><strong>To</strong></th>
<th><strong>Direction</strong></th>
<th><strong>Ports</strong></th>
<th><strong>Type</strong></th>
<th><strong>Comment</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Sync Proxy</td>
<td>vCenter</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>Sync Proxy</td>
<td>ESXi</td>
<td>TCP Unidirectional</td>
<td>902</td>
<td>Data Flow</td>
<td>Port 902 for all ESXis managed by vCenter</td>
</tr>
<tr>
<td>3</td>
<td>Sync Proxy</td>
<td>HyperBDR Console</td>
<td>TCP Unidirectional</td>
<td>10443 / 30080</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>Sync Proxy</td>
<td>Object Storage Service</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Data Flow</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>HyperBDR Console</td>
<td>Object Storage Service</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>HyperBDR Console</td>
<td>Transition Host</td>
<td>TCP Unidirectional</td>
<td>10729</td>
<td>Control Flow</td>
<td>It is necessary to establish VPC Peering between HyperBDR Console and the VPC hosting the recovered VM. Port configurations will be automatically set up by the security group, and no specific settings are required.</td>
</tr>
<tr>
<td>7</td>
<td>HyperBDR Console</td>
<td>Cloud API</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>8</td>
<td>Transition Host</td>
<td>Object Storage Service</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Data Flow</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="aws-agentless" tabindex="-1"><a class="header-anchor" href="#aws-agentless"><span>AWS Agentless</span></a></h4>
<table>
<thead>
<tr>
<th><strong>No.</strong></th>
<th><strong>From</strong></th>
<th><strong>To</strong></th>
<th><strong>Direction</strong></th>
<th><strong>Ports</strong></th>
<th><strong>Type</strong></th>
<th><strong>Comment</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Sync Proxy</td>
<td>AWS API Endpoint</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>Sync Proxy</td>
<td>HyperBDR Console</td>
<td>TCP Unidirectional</td>
<td>10443 / 30080</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>Sync Proxy</td>
<td>Object Storage Service</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Data Flow</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>HyperBDR</td>
<td>Object Storage Service</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>HyperBDR Console</td>
<td>Transition Host</td>
<td>TCP Unidirectional</td>
<td>10729</td>
<td>Control Flow</td>
<td>It is necessary to establish VPC Peering between HyperBDR Console and the VPC hosting the recovered VM. Port configurations will be automatically set up by the security group, and no specific settings are required.</td>
</tr>
<tr>
<td>6</td>
<td>HyperBDR Console</td>
<td>Cloud API</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>Transition Host</td>
<td>Object Storage Service</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Data Flow</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="deployment-architecture" tabindex="-1"><a class="header-anchor" href="#deployment-architecture"><span>Deployment Architecture</span></a></h3>
<h4 id="internet" tabindex="-1"><a class="header-anchor" href="#internet"><span>Internet</span></a></h4>
<figure><img src="@source/userguide/presales/images/dr-network-planning-recommendations-1.jpeg" alt="dr-network-planning-recommendations-1.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-1.jpeg</figcaption></figure>
<h4 id="aws-internet" tabindex="-1"><a class="header-anchor" href="#aws-internet"><span>AWS(Internet)</span></a></h4>
<figure><img src="@source/userguide/presales/images/dr-network-planning-recommendations-aws-1.jpeg" alt="dr-network-planning-recommendations-aws-1.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-aws-1.jpeg</figcaption></figure>
<h4 id="dedicated-network-connection" tabindex="-1"><a class="header-anchor" href="#dedicated-network-connection"><span>Dedicated Network Connection</span></a></h4>
<figure><img src="@source/userguide/presales/images/dr-network-planning-recommendations-2.jpeg" alt="dr-network-planning-recommendations-2.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-2.jpeg</figcaption></figure>
<h4 id="aws-dedicated-network-connection" tabindex="-1"><a class="header-anchor" href="#aws-dedicated-network-connection"><span>AWS(Dedicated Network Connection)</span></a></h4>
<figure><img src="@source/userguide/presales/images/dr-network-planning-recommendations-aws-2.jpeg" alt="dr-network-planning-recommendations-2.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-2.jpeg</figcaption></figure>
<h4 id="hybrid-network" tabindex="-1"><a class="header-anchor" href="#hybrid-network"><span>Hybrid Network</span></a></h4>
<figure><img src="@source/userguide/presales/images/dr-network-planning-recommendations-3.jpeg" alt="dr-network-planning-recommendations-3.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-3.jpeg</figcaption></figure>
<h4 id="aws-hybrid-network" tabindex="-1"><a class="header-anchor" href="#aws-hybrid-network"><span>AWS(Hybrid Network)</span></a></h4>
<figure><img src="@source/userguide/presales/images/dr-network-planning-recommendations-aws-hybrid.jpeg" alt="dr-network-planning-recommendations-aws-hybrid" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-aws-hybrid</figcaption></figure>
<h2 id="deployment-solution-for-block-storage" tabindex="-1"><a class="header-anchor" href="#deployment-solution-for-block-storage"><span>Deployment Solution for Block Storage</span></a></h2>
<h3 id="network-schemes" tabindex="-1"><a class="header-anchor" href="#network-schemes"><span>Network Schemes</span></a></h3>
<table>
<thead>
<tr>
<th>Solution</th>
<th>Data Transmission</th>
<th>Business Access</th>
</tr>
</thead>
<tbody>
<tr>
<td>Internet</td>
<td>Internet</td>
<td>Internet</td>
</tr>
<tr>
<td>Dedicated Network Connection Solution (e.g. VPN)</td>
<td>Dedicated Network</td>
<td>Dedicated Network</td>
</tr>
</tbody>
</table>
<blockquote>
<p>NOTE: Business Access after Post-Disaster Recovery Takeover</p>
</blockquote>
<h3 id="list-of-open-ports-1" tabindex="-1"><a class="header-anchor" href="#list-of-open-ports-1"><span>List of Open Ports</span></a></h3>
<h4 id="agent-1" tabindex="-1"><a class="header-anchor" href="#agent-1"><span>Agent</span></a></h4>
<table>
<thead>
<tr>
<th><strong>No.</strong></th>
<th><strong>From</strong></th>
<th><strong>To</strong></th>
<th><strong>Direction</strong></th>
<th><strong>Ports</strong></th>
<th><strong>Type</strong></th>
<th><strong>Comment</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Agent</td>
<td>HyperBDR Console</td>
<td>TCP Unidirectional</td>
<td>10443 / 30080</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>Agent</td>
<td>Cloud Sync Gateway</td>
<td>TCP Unidirectional</td>
<td>3260</td>
<td>Data Flow</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>HyperBDR Console</td>
<td>Cloud Sync Gateway</td>
<td>TCP Unidirectional</td>
<td>22 / 10729</td>
<td>Control Flow</td>
<td>It is necessary to establish VPC Peering between HyperBDR Console and the VPC hosting the recovered VM. Port configurations will be automatically set up by the security group, and no specific settings are required.</td>
</tr>
<tr>
<td>4</td>
<td>HyperBDR Console</td>
<td>Cloud API</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Control Flow</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="agentless" tabindex="-1"><a class="header-anchor" href="#agentless"><span>Agentless</span></a></h4>
<table>
<thead>
<tr>
<th><strong>No.</strong></th>
<th><strong>From</strong></th>
<th><strong>To</strong></th>
<th><strong>Direction</strong></th>
<th><strong>Ports</strong></th>
<th><strong>Type</strong></th>
<th><strong>Comment</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Sync Proxy</td>
<td>vCenter</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>Sync Proxy</td>
<td>ESXi</td>
<td>TCP Unidirectional</td>
<td>902</td>
<td>Data Flow</td>
<td>Port 902 for all ESXis managed by vCenter</td>
</tr>
<tr>
<td>3</td>
<td>Sync Proxy</td>
<td>HyperBDR Console</td>
<td>TCP Unidirectional</td>
<td>10443 / 30080</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>Sync Proxy</td>
<td>Cloud Sync Gateway</td>
<td>TCP Unidirectional</td>
<td>3260</td>
<td>Data Flow</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>HyperBDR Console</td>
<td>Cloud Sync Gateway</td>
<td>TCP Unidirectional</td>
<td>22 / 10729</td>
<td>Control Flow</td>
<td>It is necessary to establish VPC Peering between HyperBDR Console and the VPC hosting the recovered VM. Port configurations will be automatically set up by the security group, and no specific settings are required.</td>
</tr>
<tr>
<td>6</td>
<td>HyperBDR Console</td>
<td>Cloud API</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Control Flow</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="aws-agentless-1" tabindex="-1"><a class="header-anchor" href="#aws-agentless-1"><span>AWS Agentless</span></a></h4>
<table>
<thead>
<tr>
<th><strong>No.</strong></th>
<th><strong>From</strong></th>
<th><strong>To</strong></th>
<th><strong>Direction</strong></th>
<th><strong>Ports</strong></th>
<th><strong>Type</strong></th>
<th><strong>Comment</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Sync Proxy</td>
<td>AWS API Endpoint</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>Sync Proxy</td>
<td>HyperBDR Console</td>
<td>TCP Unidirectional</td>
<td>10443 / 30080</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>Sync Proxy</td>
<td>Cloud Sync Gateway</td>
<td>TCP Unidirectional</td>
<td>3260</td>
<td>Data Flow</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>HyperBDR Console</td>
<td>Cloud Sync Gateway</td>
<td>TCP Unidirectional</td>
<td>22 / 10729</td>
<td>Control Flow</td>
<td>It is necessary to establish VPC Peering between HyperBDR Console and the VPC hosting the recovered VM. Port configurations will be automatically set up by the security group, and no specific settings are required.</td>
</tr>
<tr>
<td>5</td>
<td>HyperBDR Console</td>
<td>Cloud API</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Control Flow</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="deployment-architecture-1" tabindex="-1"><a class="header-anchor" href="#deployment-architecture-1"><span>Deployment Architecture</span></a></h3>
<h4 id="internet-1" tabindex="-1"><a class="header-anchor" href="#internet-1"><span>Internet</span></a></h4>
<figure><img src="@source/userguide/presales/images/dr-network-planning-recommendations-4.jpeg" alt="dr-network-planning-recommendations-4.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-4.jpeg</figcaption></figure>
<h4 id="aws-internet-1" tabindex="-1"><a class="header-anchor" href="#aws-internet-1"><span>AWS(Internet)</span></a></h4>
<figure><img src="@source/userguide/presales/images/dr-network-planning-recommendations-aws-3.jpeg" alt="dr-network-planning-recommendations-aws-3.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-aws-3.jpeg</figcaption></figure>
<h4 id="dedicated-network-connection-1" tabindex="-1"><a class="header-anchor" href="#dedicated-network-connection-1"><span>Dedicated Network Connection</span></a></h4>
<figure><img src="@source/userguide/presales/images/dr-network-planning-recommendations-5.jpeg" alt="dr-network-planning-recommendations-5.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-5.jpeg</figcaption></figure>
<h4 id="aws-dedicated-network-connection-1" tabindex="-1"><a class="header-anchor" href="#aws-dedicated-network-connection-1"><span>AWS(Dedicated Network Connection)</span></a></h4>
<figure><img src="@source/userguide/presales/images/dr-network-planning-recommendations-aws-4.jpeg" alt="dr-network-planning-recommendations-aws-4.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-aws-4.jpeg</figcaption></figure>
<h2 id="failback-network-planning-—-dedicated-line-solution" tabindex="-1"><a class="header-anchor" href="#failback-network-planning-—-dedicated-line-solution"><span>Failback Network Planning — Dedicated Line Solution</span></a></h2>
<p>During the failback process, due to the necessity for cloud takeover of the host with direct access to the production-side IP address, the current support is limited to dedicated line solutions.</p>
<h3 id="block-storage" tabindex="-1"><a class="header-anchor" href="#block-storage"><span>Block Storage</span></a></h3>
<h4 id="deployment-architecutre" tabindex="-1"><a class="header-anchor" href="#deployment-architecutre"><span>Deployment Architecutre</span></a></h4>
<figure><img src="@source/userguide/presales/images/dr-network-planning-recommendations-6.jpeg" alt="dr-network-planning-recommendations-6.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-6.jpeg</figcaption></figure>
<h4 id="list-of-open-ports-2" tabindex="-1"><a class="header-anchor" href="#list-of-open-ports-2"><span>List of Open Ports</span></a></h4>
<table>
<thead>
<tr>
<th><strong>No.</strong></th>
<th><strong>From</strong></th>
<th><strong>To</strong></th>
<th><strong>Direction</strong></th>
<th><strong>Ports</strong></th>
<th><strong>Type</strong></th>
<th><strong>Comment</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Failback Agent</td>
<td>HyperBDR Console</td>
<td>TCP Unidirectional</td>
<td>10443 / 30080</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>Failback Agent</td>
<td>Failback Transition Host</td>
<td>TCP Unidirectional</td>
<td>3260</td>
<td>Data Flow</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>HyperBDR Console</td>
<td>Failback Transition Host</td>
<td>TCP Unidirectional</td>
<td>10729</td>
<td>Control Flow</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="object-storage" tabindex="-1"><a class="header-anchor" href="#object-storage"><span>Object Storage</span></a></h3>
<h4 id="deployment-architecture-2" tabindex="-1"><a class="header-anchor" href="#deployment-architecture-2"><span>Deployment Architecture</span></a></h4>
<figure><img src="@source/userguide/presales/images/dr-network-planning-recommendations-7.jpeg" alt="dr-network-planning-recommendations-7.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-7.jpeg</figcaption></figure>
<h4 id="list-of-open-ports-3" tabindex="-1"><a class="header-anchor" href="#list-of-open-ports-3"><span>List of Open Ports</span></a></h4>
<table>
<thead>
<tr>
<th><strong>No.</strong></th>
<th><strong>From</strong></th>
<th><strong>To</strong></th>
<th><strong>Direction</strong></th>
<th><strong>Ports</strong></th>
<th><strong>Type</strong></th>
<th><strong>Comment</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Failback Agent</td>
<td>HyperBDR Console</td>
<td>TCP Unidirectional</td>
<td>10443 / 30080</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>Failback Agent</td>
<td>Object Storage Service</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Data Flow</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>HyperBDR Console</td>
<td>Object Storage Service</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>HyperBDR Console</td>
<td>Failback Transition Host</td>
<td>TCP Unidirectional</td>
<td>10729</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>HyperBDR Console</td>
<td>Cloud API</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>HyperBDR Console</td>
<td>vCenter/ESXi</td>
<td>TCP Unidirectional</td>
<td>443/902</td>
<td>Control Flow</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>Failback Transition Host</td>
<td>Object Storage Service</td>
<td>TCP Unidirectional</td>
<td>443</td>
<td>Data Flow</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="dr-network-planning" tabindex="-1"><a class="header-anchor" href="#dr-network-planning"><span>DR Network Planning</span></a></h2>
<h3 id="user-network" tabindex="-1"><a class="header-anchor" href="#user-network"><span>User Network</span></a></h3>
<p>We use the network of a specific client's production environment as an example to illustrate network planning under different scenarios. Below is the network architecture topology diagram for the user:</p>
<figure><img src="@source/userguide/presales/images/dr-network-planning-recommendations-8.jpeg" alt="dr-network-planning-recommendations-8.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-8.jpeg</figcaption></figure>
<p>The user network allocation is as follows:</p>
<table>
<thead>
<tr>
<th>Network</th>
<th>Subnet</th>
<th>Usage</th>
</tr>
</thead>
<tbody>
<tr>
<td>Client Desktops</td>
<td>192.168.0.0/24</td>
<td>User access application network</td>
</tr>
<tr>
<td>Application A</td>
<td>192.168.4.0/24</td>
<td>Application A network</td>
</tr>
<tr>
<td>Application B</td>
<td>10.227.129.0/24</td>
<td>The network for Business System B, which is the VMware Business Network address</td>
</tr>
<tr>
<td>VMware Management Network</td>
<td>10.227.230.0/24</td>
<td>VMware management network</td>
</tr>
</tbody>
</table>
<h3 id="dedicated-line-solution-1" tabindex="-1"><a class="header-anchor" href="#dedicated-line-solution-1"><span>Dedicated Line Solution 1</span></a></h3>
<p>Production network and takeover subnet are distinct.</p>
<h4 id="architecture" tabindex="-1"><a class="header-anchor" href="#architecture"><span>Architecture</span></a></h4>
<figure><img src="@source/userguide/presales/images/dr-network-planning-recommendations-9.jpeg" alt="dr-network-planning-recommendations-9.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-9.jpeg</figcaption></figure>
<h4 id="firewall-policies" tabindex="-1"><a class="header-anchor" href="#firewall-policies"><span>Firewall Policies</span></a></h4>
<table>
<thead>
<tr>
<th>Production Subnet</th>
<th>Takeover Subnet</th>
<th>Production to Takeover</th>
<th>Takeover to Production</th>
</tr>
</thead>
<tbody>
<tr>
<td>192.168.0.0/24 <br/> 192.168.4.0/24</td>
<td>192.168.104.0/24</td>
<td>ALLOW</td>
<td>Denied</td>
</tr>
<tr>
<td>192.168.0.0/24 <br/> 10.227.129.0/24</td>
<td>10.227.229.0/24</td>
<td>ALLOW</td>
<td>Denied</td>
</tr>
</tbody>
</table>
<p>Explanation:</p>
<ul>
<li>
<p>User Access: On the target cloud platform, a different subnet address is used for the takeover network. On the production side, direct access to the cloud's VPC is possible through the dedicated line. Users can also connect directly to the cloud's VPN using a VPN client to access the business network.</p>
</li>
<li>
<p>Firewall Configuration: To prevent erroneously accessing the original hosts after takeover, restrictions are in place to prevent the directly accessing the production network from the taken-over hosts. Specific ports are allowed based on policy requirements.</p>
</li>
</ul>
<h3 id="dedicated-line-solution-2" tabindex="-1"><a class="header-anchor" href="#dedicated-line-solution-2"><span>Dedicated Line Solution 2</span></a></h3>
<p>Production network and takeover subnet are the same.</p>
<h4 id="architecture-1" tabindex="-1"><a class="header-anchor" href="#architecture-1"><span>Architecture</span></a></h4>
<figure><img src="@source/userguide/presales/images/dr-network-planning-recommendations-10.jpeg" alt="dr-network-planning-recommendations-10.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-10.jpeg</figcaption></figure>
<h4 id="firewall-policies-1" tabindex="-1"><a class="header-anchor" href="#firewall-policies-1"><span>Firewall Policies</span></a></h4>
<table>
<thead>
<tr>
<th>Production Subnet</th>
<th>Takeover Subnet</th>
<th>Production to Takeover</th>
<th>Takeover to Production</th>
</tr>
</thead>
<tbody>
<tr>
<td>192.168.0.0/24 <br/> 192.168.4.0/24</td>
<td>192.168.4.0/24</td>
<td>Denied</td>
<td>Denied</td>
</tr>
<tr>
<td>192.168.0.0/24 <br/> 10.227.129.0/24</td>
<td>10.227.129.0/24</td>
<td>Denied</td>
<td>Denied</td>
</tr>
</tbody>
</table>
<p>Explanation:</p>
<ul>
<li>Firewall Configuration: To prevent erroneously accessing the original hosts after takeover, restrictions are in place to prevent the directly accessing the production network from the taken-over hosts. Specific ports are allowed based on policy requirements.</li>
</ul>
<h3 id="internet-2" tabindex="-1"><a class="header-anchor" href="#internet-2"><span>Internet</span></a></h3>
<h4 id="architecutre" tabindex="-1"><a class="header-anchor" href="#architecutre"><span>Architecutre</span></a></h4>
<figure><img src="@source/userguide/presales/images/dr-network-planning-recommendations-11.jpeg" alt="dr-network-planning-recommendations-11.jpeg" tabindex="0" loading="lazy"><figcaption>dr-network-planning-recommendations-11.jpeg</figcaption></figure>
<h4 id="firewall-policies-2" tabindex="-1"><a class="header-anchor" href="#firewall-policies-2"><span>Firewall Policies</span></a></h4>
<p>Users access the taken-over business system directly through a public network address. The firewall needs to allow the required access from the public network</p>
</div></template>


