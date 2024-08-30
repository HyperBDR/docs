<template><div><h1 id="aws-pre-settings-rc" tabindex="-1"><a class="header-anchor" href="#aws-pre-settings-rc"><span>AWS Pre-Settings(RC)</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#about-aws-agentless-model">About AWS Agentless Model</router-link><ul><li><router-link to="#background-of-aws-ebs-direct-api">Background of AWS EBS Direct API</router-link></li><li><router-link to="#key-functions-of-aws-ebs-direct-api">Key Functions of AWS EBS Direct API</router-link></li><li><router-link to="#use-cases">Use Cases</router-link></li><li><router-link to="#reference-links">Reference Links</router-link></li></ul></li><li><router-link to="#aws-iam-preparation">AWS IAM Preparation</router-link><ul><li><router-link to="#how-to-create-an-iam-user-in-aws-with-specific-permissions">How to Create an IAM User in AWS with Specific Permissions</router-link></li></ul></li><li><router-link to="#setting-up-a-sync-proxy-instance-ubuntu-20-04">Setting Up a Sync Proxy Instance(Ubuntu 20.04)</router-link></li><li><router-link to="#aws-and-huawei-cloud-establish-site-to-site-vpn">AWS and Huawei Cloud establish Site to Site VPN</router-link><ul><li><router-link to="#huawei-cloud-site-create-vpn">Huawei Cloud Site Create VPN</router-link></li><li><router-link to="#aws-site-create-vpn">AWS Site Create VPN</router-link></li><li><router-link to="#aws-ec2-accesses-huawei-cloud-object-storage-through-the-intranet">AWS ec2 accesses Huawei Cloud object storage through the intranet</router-link></li></ul></li></ul></nav>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This document will apply only to HyperBDR version 5.6.0 and above. HyperBDR version 5.6.0 is scheduled for release on June 30, 2024.</p>
</div>
<h2 id="about-aws-agentless-model" tabindex="-1"><a class="header-anchor" href="#about-aws-agentless-model"><span>About AWS Agentless Model</span></a></h2>
<p>HyperBDR uses the AWS EBS Direct API to achieve agentless incremental data synchronization in production environments.</p>
<h3 id="background-of-aws-ebs-direct-api" tabindex="-1"><a class="header-anchor" href="#background-of-aws-ebs-direct-api"><span>Background of AWS EBS Direct API</span></a></h3>
<p>The Amazon Elastic Block Store (Amazon EBS) Direct API provides a set of powerful functionalities to interact directly with EBS snapshots, enabling users to create, write, read, and compare snapshots efficiently. This suite of APIs is particularly advantageous for independent software vendors (ISVs) that offer backup and disaster recovery solutions, as it simplifies and optimizes the process of managing incremental changes and backups of Amazon EBS volumes.</p>
<h3 id="key-functions-of-aws-ebs-direct-api" tabindex="-1"><a class="header-anchor" href="#key-functions-of-aws-ebs-direct-api"><span>Key Functions of AWS EBS Direct API</span></a></h3>
<ol>
<li>
<p><strong>Create Snapshots</strong>: The API allows for the creation of EBS snapshots. These snapshots can be used to back up the data of an EBS volume at a specific point in time.</p>
</li>
<li>
<p><strong>Write Data to Snapshots</strong>: Users can write data directly to their EBS snapshots. This capability is essential for scenarios such as disaster recovery, where data from on-premises environments needs to be securely backed up to the cloud.</p>
</li>
<li>
<p><strong>Read Data from Snapshots</strong>: The API facilitates the reading of data from existing EBS snapshots. This function is crucial for data verification, analytics, and recovery processes.</p>
</li>
<li>
<p><strong>Identify Differences Between Snapshots</strong>: One of the most powerful features of the EBS Direct API is its ability to identify and track incremental changes between two snapshots. This is particularly beneficial for backup services that need to efficiently monitor and manage data changes without creating new volumes or utilizing EC2 instances for comparison.</p>
</li>
</ol>
<h3 id="use-cases" tabindex="-1"><a class="header-anchor" href="#use-cases"><span>Use Cases</span></a></h3>
<ul>
<li>
<p><strong>Backup and Recovery for ISVs</strong>: ISVs that provide backup services can leverage these APIs to offer more efficient and cost-effective solutions. By tracking incremental changes through snapshots, ISVs can reduce the need for creating additional volumes and deploying EC2 instances, which in turn lowers costs and simplifies operations.</p>
</li>
<li>
<p><strong>Disaster Recovery</strong>: The ability to write data directly to snapshots enables quick disaster recovery solutions. During a disaster, on-premises data can be written to a snapshot, which can then be restored to either AWS or on-premises environments after recovery. This eliminates the need for complex data transfer mechanisms and ensures business continuity.</p>
</li>
<li>
<p><strong>Incremental Backups</strong>: Creating incremental snapshots from on-premises data into AWS volumes or the cloud ensures that businesses can maintain up-to-date backups. This is crucial for reducing data loss and ensuring that recovery points are as recent as possible.</p>
</li>
</ul>
<p>In summary, the AWS EBS Direct API enhances the efficiency and cost-effectiveness of data management for EBS volumes by providing direct access to snapshot operations. This enables more streamlined and flexible backup, recovery, and data comparison processes, benefiting ISVs and businesses that rely on robust data protection strategies.</p>
<h3 id="reference-links" tabindex="-1"><a class="header-anchor" href="#reference-links"><span>Reference Links</span></a></h3>
<ul>
<li><a href="https://docs.aws.amazon.com/ebs/latest/APIReference/Welcome.html" target="_blank" rel="noopener noreferrer">AWS EBS direct APIs</a></li>
</ul>
<h2 id="aws-iam-preparation" tabindex="-1"><a class="header-anchor" href="#aws-iam-preparation"><span>AWS IAM Preparation</span></a></h2>
<h3 id="how-to-create-an-iam-user-in-aws-with-specific-permissions" tabindex="-1"><a class="header-anchor" href="#how-to-create-an-iam-user-in-aws-with-specific-permissions"><span>How to Create an IAM User in AWS with Specific Permissions</span></a></h3>
<ol>
<li>
<p><strong>Sign in to AWS Management Console</strong>: Log in to the AWS Management Console using your administrator account.</p>
</li>
<li>
<p><strong>Navigate to IAM Console</strong>:</p>
<ul>
<li>In the services search box at the top of the console, type &quot;IAM&quot; and click to open the IAM console.</li>
</ul>
</li>
<li>
<p><strong>Add IAM User</strong>:</p>
<ul>
<li>In the left navigation pane of the IAM console, click on &quot;Users&quot;.</li>
<li>Click on the &quot;Add user&quot; button.</li>
</ul>
</li>
<li>
<p><strong>Set User Details</strong>:</p>
<ul>
<li>Enter a username for the user. Use a descriptive username for easy identification later.</li>
<li>Choose the access type:
<ul>
<li>Programmatic access: Allows API access.</li>
<li>AWS Management Console access: Allows console login.</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Assign Permissions</strong>:</p>
<ul>
<li>Set permissions for the user. Use the following policy as a template:<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "Version"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2012-10-17"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "Statement"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">            "Effect"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Allow"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">            "Action"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ec2:CreateSnapshot"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ec2:CreateSnapshots"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ec2:DescribeSnapshots"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ec2:DescribeSnapshotAttribute"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ec2:DescribeRegions"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ec2:DescribeInstanceTypes"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ec2:CreateImage"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ec2:CreateTags"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ec2:DescribeVolumes"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ec2:DescribeVolumeAttribute"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ec2:DescribeVolumeStatus"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ec2:DescribeVolumesModifications"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ebs:StartSnapshot"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ebs:CompleteSnapshot"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ebs:PutSnapshotBlock"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ebs:GetSnapshotBlock"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ebs:ListChangedBlocks"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ebs:ListSnapshotBlocks"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ec2:DescribeInstances"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ec2:DescribeInstanceStatus"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ec2:DescribeImages"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ec2:DescribeImageAttribute"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ec2:DescribeNetworkInterfaces"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ec2:DescribeVpcs"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ec2:DescribeSubnets"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ec2:DescribeSecurityGroups"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                "ec2:DescribeTags"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            ],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">            "Resource"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"*"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>Ensure to customize the policy based on specific resource requirements and least privilege principles.</li>
</ul>
</li>
<li>
<p><strong>Review and Create</strong>:</p>
<ul>
<li>Review the user details and assigned permissions.</li>
<li>Confirm and create the IAM user.</li>
</ul>
</li>
<li>
<p><strong>Save User's Security Credentials</strong>:</p>
<ul>
<li>After creation, AWS will provide security credentials for the user, such as access keys and a sign-in link.</li>
<li>Securely store and share these credentials as needed.</li>
</ul>
</li>
</ol>
<p><strong>Reference Links</strong>:</p>
<ul>
<li>AWS Official Documentation: <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html" target="_blank" rel="noopener noreferrer">Creating IAM Users</a></li>
</ul>
<h2 id="setting-up-a-sync-proxy-instance-ubuntu-20-04" tabindex="-1"><a class="header-anchor" href="#setting-up-a-sync-proxy-instance-ubuntu-20-04"><span>Setting Up a Sync Proxy Instance(Ubuntu 20.04)</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>We'll first create this Sync Proxy host, and then proceed with necessary software installations after completing the installation of HyperBDR Console.</p>
</div>
<ol>
<li>
<p><strong>Launch an EC2 Instance with Network Planning</strong>:</p>
<ul>
<li>Before launching the instance, ensure networking requirements are planned based on communication needs:
<ul>
<li><strong>Public Network Communication</strong>:
<ul>
<li>If Sync Proxy communicates with HyperBDR Console and Cloud Sync Gateway over the public network, ensure the instance can access the public internet.</li>
</ul>
</li>
<li><strong>Private Network Communication (VPN or Direct Connect)</strong>:
<ul>
<li>If using VPN or Direct Connect for communication:
<ul>
<li>Set up VPN or Direct Connect beforehand to ensure the instance can access HyperBDR Console and Cloud Sync Gateway, as well as AWS API endpoints.</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Instance Launch</strong>:</p>
<ul>
<li>Sign in to the AWS Management Console.</li>
<li>Navigate to EC2 and click on &quot;Launch Instance&quot;.</li>
<li>Choose the <strong>c5.large</strong> instance type:
<ul>
<li><strong>vCPU</strong>: 2</li>
<li><strong>Memory</strong>: 4 GiB</li>
<li><strong>Network Performance</strong>: Moderate</li>
<li><strong>Storage</strong>: EBS only</li>
</ul>
</li>
<li>Configure instance details including networking, storage, and security groups.</li>
<li><strong>Networking</strong>:
<ul>
<li>Select the appropriate network configuration based on your earlier planning:
<ul>
<li>If using <strong>Public Network</strong>, ensure the instance has a public IP or Elastic IP.</li>
<li>If using <strong>Private Network (VPN or Direct Connect)</strong>, configure the instance to connect to the appropriate Virtual Private Cloud (VPC) or networking setup.</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Configure Security Groups</strong>:</p>
<ul>
<li>Ensure the instance's security group allows outbound traffic for accessing EBS Direct API endpoints.</li>
<li>Optionally, configure inbound rules based on security requirements.</li>
</ul>
</li>
<li>
<p><strong>Configure Security Groups</strong>:</p>
<ul>
<li>Ensure the EC2 instance has a security group that allows outbound traffic to access the EBS Direct API endpoints.</li>
<li>Optionally, restrict inbound traffic to specific IP ranges or protocols based on security best practices.</li>
</ul>
</li>
<li>
<p><strong>Test Connectivity</strong>:</p>
<ul>
<li>Test the connection from the Sync Proxy instance to HyperBDR Console:
<ul>
<li>Ensure the Sync Proxy can establish a network connection with HyperBDR Console to verify communication integrity.</li>
</ul>
</li>
</ul>
</li>
</ol>
<h2 id="aws-and-huawei-cloud-establish-site-to-site-vpn" tabindex="-1"><a class="header-anchor" href="#aws-and-huawei-cloud-establish-site-to-site-vpn"><span>AWS and Huawei Cloud establish Site to Site VPN</span></a></h2>
<h3 id="huawei-cloud-site-create-vpn" tabindex="-1"><a class="header-anchor" href="#huawei-cloud-site-create-vpn"><span>Huawei Cloud Site Create VPN</span></a></h3>
<h4 id="vpn-gateway" tabindex="-1"><a class="header-anchor" href="#vpn-gateway"><span>VPN Gateway</span></a></h4>
<p>Create S2C VPN Gateway</p>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-1.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-1.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-1.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-2.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-2.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-2.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-3.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-3.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-3.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-4.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-4.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-4.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-5.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-5.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-5.png</figcaption></figure>
<h4 id="customer-gateway" tabindex="-1"><a class="header-anchor" href="#customer-gateway"><span>Customer Gateway</span></a></h4>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-6.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-6.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-6.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-7.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-7.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-7.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-8.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-8.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-8.png</figcaption></figure>
<h4 id="vpn-connections" tabindex="-1"><a class="header-anchor" href="#vpn-connections"><span>VPN Connections</span></a></h4>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-9.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-9.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-9.png</figcaption></figure>
<h3 id="aws-site-create-vpn" tabindex="-1"><a class="header-anchor" href="#aws-site-create-vpn"><span>AWS Site Create VPN</span></a></h3>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-10.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-10.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-10.png</figcaption></figure>
<p>Just keep PSK and Confirm PSK consistent with those on the AWS side.</p>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-11.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-11.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-11.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-12.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-12.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-12.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-13.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-13.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-13.png</figcaption></figure>
<h4 id="customer-gateway-1" tabindex="-1"><a class="header-anchor" href="#customer-gateway-1"><span>Customer Gateway</span></a></h4>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-14.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-14.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-14.png</figcaption></figure>
<ul>
<li>For IP address, select the public IP address of Huawei Cloud, which is the address information displayed in the Gateway IP Address column of VPN Gateway. If you choose the active-standby or Active-Active mode, select the address of EIP 1.</li>
</ul>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-15.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-15.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-15.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-16.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-16.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-16.png</figcaption></figure>
<h4 id="virtual-private-gateways" tabindex="-1"><a class="header-anchor" href="#virtual-private-gateways"><span>Virtual private gateways</span></a></h4>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-17.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-17.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-17.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-18.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-18.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-18.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-19.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-19.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-19.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-20.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-20.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-20.png</figcaption></figure>
<h4 id="site-to-site-vpn-connections" tabindex="-1"><a class="header-anchor" href="#site-to-site-vpn-connections"><span>Site-to-Site VPN Connections</span></a></h4>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-21.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-21.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-21.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-22.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-22.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-22.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-23.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-23.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-23.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-24.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-24.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-24.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-25.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-25.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-25.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-26.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-26.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-26.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-27.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-27.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-27.png</figcaption></figure>
<ul>
<li>Get the default PSK authentication code</li>
</ul>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-28.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-28.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-28.png</figcaption></figure>
<p>Select the VPN Tunnel address, copy the value of the Pre-shared key option, and then use this value to fill in the connection PSK box on the Huawei Cloud side. You can also make custom modifications here as long as both sides are consistent.</p>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-29.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-29.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-29.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-30.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-30.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-30.png</figcaption></figure>
<h4 id="adding-routes-on-the-vpc" tabindex="-1"><a class="header-anchor" href="#adding-routes-on-the-vpc"><span>Adding routes on the VPC</span></a></h4>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-31.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-31.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-31.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-32.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-32.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-32.png</figcaption></figure>
<p>Add a static route to the target Huawei Cloud VPC network. Select Virtual Private Gateway for Target and the created VGW resource for Resource.</p>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-33.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-33.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-33.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-34.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-34.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-34.png</figcaption></figure>
<h3 id="aws-ec2-accesses-huawei-cloud-object-storage-through-the-intranet" tabindex="-1"><a class="header-anchor" href="#aws-ec2-accesses-huawei-cloud-object-storage-through-the-intranet"><span>AWS ec2 accesses Huawei Cloud object storage through the intranet</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If object storage mode is not used, this configuration is not required.</p>
</div>
<h4 id="huawei-cloud-vpn-adds-object-storage-100-125-0-0-16-network" tabindex="-1"><a class="header-anchor" href="#huawei-cloud-vpn-adds-object-storage-100-125-0-0-16-network"><span>Huawei Cloud VPN adds object storage (100.125.0.0/16) network</span></a></h4>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-35.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-35.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-35.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-36.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-36.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-36.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-37.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-37.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-37.png</figcaption></figure>
<h4 id="add-vpc-endpoint-service-dns-obs-on-huawei-cloud" tabindex="-1"><a class="header-anchor" href="#add-vpc-endpoint-service-dns-obs-on-huawei-cloud"><span>Add VPC Endpoint Service (DNS &amp; OBS) on Huawei Cloud</span></a></h4>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-38.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-38.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-38.png</figcaption></figure>
<h4 id="modify-the-local-and-remote-ipv4-network-cidr-addresses-on-aws" tabindex="-1"><a class="header-anchor" href="#modify-the-local-and-remote-ipv4-network-cidr-addresses-on-aws"><span>Modify the local and remote IPv4 network CIDR addresses on AWS</span></a></h4>
<p>Change the addresses allowed through VPN on both ends to 0.0.0.0/0</p>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-39.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-39.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-39.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-40.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-40.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-40.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-41.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-41.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-41.png</figcaption></figure>
<h4 id="vpn-connections-adds-routes-to-the-100-125-0-0-16-network-segment" tabindex="-1"><a class="header-anchor" href="#vpn-connections-adds-routes-to-the-100-125-0-0-16-network-segment"><span>VPN Connections adds routes to the 100.125.0.0/16 network segment</span></a></h4>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-42.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-42.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-42.png</figcaption></figure>
<h4 id="add-a-route-to-the-100-125-0-0-16-network-segment-in-the-vpc-routing-table" tabindex="-1"><a class="header-anchor" href="#add-a-route-to-the-100-125-0-0-16-network-segment-in-the-vpc-routing-table"><span>Add a route to the 100.125.0.0/16 network segment in the VPC routing table</span></a></h4>
<p>The next hop address is selected as the VGW device of the VPN VPG</p>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-43.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-43.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-43.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/aws-and-huawei-cloud-establish-site-to-site-vpn-44.png" alt="aws-and-huawei-cloud-establish-site-to-site-vpn-44.png" tabindex="0" loading="lazy"><figcaption>aws-and-huawei-cloud-establish-site-to-site-vpn-44.png</figcaption></figure>
<h4 id="configure-sync-proxy-ec2-to-access-dns-and-obs" tabindex="-1"><a class="header-anchor" href="#configure-sync-proxy-ec2-to-access-dns-and-obs"><span>Configure Sync Proxy EC2 to access DNS and OBS</span></a></h4>
<p><strong>Modify the DNS configuration of Sync Proxy EC2</strong></p>
<blockquote>
<p>Log in to Sync Proxy EC2 by default.</p>
</blockquote>
<p>Execute Command:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>echo -e "\n[Resolve]\nDNS=10.10.0.23\nDomains=~myhuaweicloud.com" >> /etc/systemd/resolved.conf &#x26;&#x26; systemctl restart systemd-resolved</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cat /etc/systemd/resolved.conf</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Modify the daemon.json file of docker service and add DNS configuration.</strong></p>
<blockquote>
<p>Sync Proxy is installed by default.</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "default-ulimits"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "nofile"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "Name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"nofile"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "Hard"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1048576</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "Soft"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1048576</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "dns"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"127.0.0.53"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Restart the Docker service.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>sudo systemctl retsart docker</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


