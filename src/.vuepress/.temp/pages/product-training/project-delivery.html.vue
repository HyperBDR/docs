<template><div><h1 id="project-delivery" tabindex="-1"><a class="header-anchor" href="#project-delivery"><span>Project Delivery</span></a></h1>
<p>Now, Let's move to project delivery part.</p>
<h2 id="can-we-do-this-project" tabindex="-1"><a class="header-anchor" href="#can-we-do-this-project"><span>Can we do this project?</span></a></h2>
<p>When we first talk to a user, how do we decide if we can recommend HyperBDR disaster recovery to them?</p>
<figure><img src="@source/product-training/images/project-delivery-can-we-do-this-project.png" alt="can we do this project" tabindex="0" loading="lazy"><figcaption>can we do this project</figcaption></figure>
<p>Here's a simple way to decide:</p>
<ul>
<li>Firstly, if the user's business systems are running on servers and they need disaster recovery, then they might be a potential customer. If they use Oracle RAC or cloud-native relational database services partially, they might need a hybrid solution we mentioned before. If they only want to protect Oracle or use cloud-native services entirely, they might not be able to use Hyper BDR for disaster recovery.</li>
<li>Secondly, currently, HyperBDR mainly works with X86 architecture servers. It doesn't work with ARM or IBM Power series for now.</li>
<li>Thirdly, they should be using common operating systems like CentOS, Redhat, SUSE, Windows, etc. However, some operating systems provided by cloud providers might be customized with modified kernels, so standard HyperBDR products may not work directly, and custom development might be needed.</li>
<li>Finally, if the user can accept a recovery point objective (RPO) of minutes, then they are likely potential users of HyperBDR.</li>
</ul>
<h2 id="project-gantt-overview" tabindex="-1"><a class="header-anchor" href="#project-gantt-overview"><span>Project Gantt Overview</span></a></h2>
<p>To facilitate understanding of the entire project delivery process, we use Gantt charts for illustration:</p>
<figure><img src="@source/product-training/images/project-delivery-gantt.png" alt="project delivery gantt overview" tabindex="0" loading="lazy"><figcaption>project delivery gantt overview</figcaption></figure>
<ol>
<li>
<p>After confirming that HyperBDR can meet the customer's requirements, we need to conduct research on the customer's business systems to determine the scope of support.</p>
</li>
<li>
<p>Based on the research findings, we determine the types of cloud storage to be used based on the requirements for disaster recovery networks, RPO, and RTO, ultimately forming a delivery plan.</p>
</li>
<li>
<p>Once the project enters the delivery phase, pre-configuration is conducted for the user's source end and network environment according to the checklist. Simultaneously, network configuration and HyperBDR installation and configuration are performed in the cloud.</p>
</li>
<li>
<p>After the installation and configuration of the production environment and HyperBDR are completed, we enter the product usage phase, synchronizing data according to the schedule. The amount of data synchronized depends on factors such as data volume and bandwidth.</p>
</li>
<li>
<p>After the initial synchronization is completed, it is recommended to conduct a drill to confirm the integrity of disaster recovery data.</p>
</li>
<li>
<p>Finally, HyperBDR is monitored, and alarm configurations are made, completing the project delivery and entering the maintenance phase.</p>
</li>
</ol>
<h2 id="investigation" tabindex="-1"><a class="header-anchor" href="#investigation"><span>Investigation</span></a></h2>
<p>Disaster recovery research mainly involves three aspects: host, network, and applications.</p>
<figure><img src="@source/product-training/images/project-delivery-investigation.png" alt="project delivery investigation" tabindex="0" loading="lazy"><figcaption>project delivery investigation</figcaption></figure>
<ol>
<li>
<p>When conducting host research, we need to gather detailed information about the hosts to determine if HyperBDR fully supports them. We can use methods provided in the official HyperBDR documentation for this.</p>
</li>
<li>
<p>Network research aims to determine the existing network topology and bandwidth situation of the users. With this information, we can plan the disaster recovery network on the cloud platform and decide if VPN or dedicated connections are needed between the user's production and backup sites.</p>
</li>
<li>
<p>Application system research can be carried out concurrently with host research. It mainly involves determining the importance of user business systems and configuring different disaster recovery strategies in HyperBDR based on their importance levels. Additionally, we need to establish the sequence for taking over systems during disaster recovery based on their interdependencies.</p>
</li>
</ol>
<h3 id="useful-links" tabindex="-1"><a class="header-anchor" href="#useful-links"><span>Useful Links</span></a></h3>
<ul>
<li><a href="https://365.kdocs.cn/l/ctsKIt85ScaM" target="_blank" rel="noopener noreferrer">OS &amp; Cloud Platform Support Matrix</a></li>
<li><RouteLink to="/product-overview/limitations/linux-agent.html">Linux Agent Compatibility &amp; Limitations</RouteLink></li>
<li><RouteLink to="/product-overview/limitations/windows-agent.html">Windows Agent Compatibility &amp; Limitations</RouteLink></li>
<li><RouteLink to="/product-overview/limitations/vmware-agentless.html">VMware Agentless Compatibility &amp; Limitations</RouteLink></li>
</ul>
<h2 id="rpo-rto-planning" tabindex="-1"><a class="header-anchor" href="#rpo-rto-planning"><span>RPO &amp; RTO Planning</span></a></h2>
<p>Planning for RPO and RTO needs to be based on the requirements of the user's business systems. Here are some best practices for RPO and RTO planning, which you can read by clicking the link provided.</p>
<figure><img src="@source/product-training/images/project-delivery-rpo-rto-planning.png" alt="project delivery rpo rto planning" tabindex="0" loading="lazy"><figcaption>project delivery rpo rto planning</figcaption></figure>
<p>Currently, the minimum RPO time for HyperBDR is 5 minutes, and it needs to be matched with the corresponding network bandwidth based on the size of data increments.</p>
<p>In terms of RTO planning, the Huawei Cloud block storage mode is independent of data volume, with recovery times always within 15 minutes. However, the object storage mode is related to data volume. Specific indicator parameters can be referred to in the content of best practices.</p>
<p>Based on the expected RTO of the user's business system, choose the appropriate storage type reasonably.</p>
<h2 id="workload-dr-network-planning" tabindex="-1"><a class="header-anchor" href="#workload-dr-network-planning"><span>Workload DR Network Planning</span></a></h2>
<p>User's disaster recovery network planning is directly related to the connection between the production network and the disaster recovery network. Here, we also provide some best practice content for your reference. However, network planning is often a complex topic that requires experienced network engineers to make reasonable plans based on actual conditions. Here, based on some typical cases, we provide some suggestions:</p>
<figure><img src="@source/product-training/images/project-delivery-network-planning.png" alt="DR Network Planning" tabindex="0" loading="lazy"><figcaption>DR Network Planning</figcaption></figure>
<p>If the user synchronizes data using the public network, the addresses of the production network and the disaster recovery network can remain the same.</p>
<p>If the user connects the production center and the disaster recovery center using VPNs and dedicated lines, it is recommended to choose different takeover networks. This can effectively avoid the impact on the production environment during drills or takeovers.</p>
<h2 id="use-checklist-for-deployment" tabindex="-1"><a class="header-anchor" href="#use-checklist-for-deployment"><span>Use Checklist for Deployment</span></a></h2>
<p>As we officially enter the deployment phase, it's crucial to use a Checklist along with the delivery process. The Checklist provides clear guidance for users to follow through each step of the operation.</p>
<figure><img src="@source/product-training/images/project-delivery-checklist.png" alt="DR Checklist" tabindex="0" loading="lazy"><figcaption>DR Checklist</figcaption></figure>
<p>When selecting the Checklist, start by choosing based on the type of source system. Then, select the storage type of the cloud platform being used, followed by deciding on the network connection, whether it's through the public network or via VPN or dedicated lines. Finally, locate the corresponding Checklist.</p>
<p>The Checklist is presented in a form format and needs to be completed step by step according to the guidance to finish the installation and configuration work of HyperBDR.</p>
<h3 id="checklist-links" tabindex="-1"><a class="header-anchor" href="#checklist-links"><span>Checklist Links</span></a></h3>
<ul>
<li><RouteLink to="/userguide/checklist/dr-checklist.html">Checklist</RouteLink></li>
</ul>
</div></template>


