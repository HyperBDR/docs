# **Host DR**

Resource Disaster Recovery is the core workflow in HyperBDR. All disaster recovery operations are managed from this section, including forward host disaster recovery and host failback.

The Host DR workflow consists of three main steps: **Select Host**, **Setup DR**, and **Start DR**. Follow these steps to complete the end-to-end process from initial protection to drills and failover takeover.

To access the workflow, click the top **"DR"** navigation bar, then select **"Host DR"** in the left sidebar.

## **Operation Process**

| **Step** | **Description** |
| --- | --- |
| Preparation | Register a HyperBDR account and activate a product license. |
| Step 1: Select Host | Go to **DR** > **Host DR** > **Select Host** to choose the source hosts for disaster recovery. |
| Step 2: Setup DR | Go to **DR** > **Host DR** > **Setup DR** to configure disaster recovery parameters. |
| Step 3: Start DR | Go to **DR** > **Host DR** > **Start DR** to initiate synchronization, drills, or takeover. |

## **Preparation**

### **Register a HyperBDR User**

Before adding a disaster recovery host, make sure that at least one disaster recovery account has been created on the platform. The platform uses a multi-tenant architecture, allowing accounts and permissions to be configured independently for different teams or projects for flexible resource management and isolation.

[Click here to learn how to create a new disaster recovery account](../register/register.md)

If you already have an account, skip this step.

### **Add a HyperBDR Product License**

Before using the disaster recovery service, request a product license. Contact your project manager or email support@oneprocloud.com to obtain a valid license.

[Click here to view the license application guide](../../saas-license/hyperbdr)

If you have already added a license, skip this step.

### **Complete Production Site Configuration**

This step applies when the source uses Agentless mode. Complete the corresponding site configuration according to the source production platform.

| Production Platform | Configuration Guide |
| --- | --- |
| VMware | [View the guide](../configuration/production-site.md#add-vmware-platform) |
| OpenStack | [View the guide](../configuration/production-site.md#add-openstack-platform) |
| AWS | [View the guide](../configuration/production-site.md#add-aws-platform) |
| FusionCompute | [View the guide](../configuration/production-site.md#add-fusioncompute-platform) |
| Oracle | [View the guide](../configuration/production-site.md#add-oracle-platform) |
| HCS 8.0.2 | [View the guide](../configuration/production-site.md#add-hcs-8-0-2-platform) |
| HCS Online | Configuration guide to be added. |
| Huawei Cloud | [View the guide](../configuration/production-site.md#add-huawei-cloud-platform) |

If the source uses Agent mode or the production site has already been configured, skip this step.

### **Complete DR Target Configuration**

This step applies to DR target platforms that have completed automated integration. Complete the corresponding DR target configuration according to the storage type you intend to use before continuing.

| Storage Type | Configuration Description | Configuration Guide |
| --- | --- | --- |
| Block Storage | Block storage configuration | [View the guide](../configuration/dr-site-configuration.html#block-storage-mode) |
| Object Storage | Object storage configuration | [View the guide](../configuration/dr-site-configuration.html#object-storage-mode) |
| Object Storage | Object-storage DR target platform configuration | [View the guide](../configuration/dr-site-configuration.html#object-storage-mode) |

If the preceding configuration is incomplete, complete the required preparation first.

### **Activate Network Policies**

Before performing the **Select Host**, **Setup DR**, and **Start DR** steps, enable network access from the source production platform to the HyperBDR DR console and the DR target. This is required for the source production platform to be added and registered correctly and for subsequent data synchronization. Otherwise, hosts cannot be added.

| **Storage Type** | **Agent** | **Agentless** |
| --- | --- | --- |
| Object Storage | [View Details](../../../product-overview/presales/dr-network-planning-recommendations.md#agent) | [View Details](../../../product-overview/presales/dr-network-planning-recommendations.md#list-of-open-ports) |
| Block Storage | [View Details](../../../product-overview/presales/dr-network-planning-recommendations.md#agent-1) | [View Details](../../../product-overview/presales/dr-network-planning-recommendations.md#agentless) |

### **Plan VPCs, Subnets, and Other Network Resources for the DR Target Platform**

During **Setup DR**, specify target resources for the hosts to be protected. Select the pre-planned VPCs, subnets, security groups, and other network resources. If these resources have not been created and planned in advance, you cannot continue with the subsequent steps.

Make sure that the DR target cloud account contains at least one available VPC, subnet, and security group.

This step applies to DR targets that use automated block storage mode or automated recovery mode with object storage. Other common methods can skip this step.

<!-- @include: ./_host-dr/select-host.md -->
<!-- @include: ./_host-dr/setup-dr.md#setup-dr-intro -->
<!-- @include: ./_host-dr/setup-dr-block-storage.md -->
<!-- @include: ./_host-dr/setup-dr-object-storage.md -->
<!-- @include: ./_host-dr/setup-dr.md#setup-dr-shared -->
<!-- @include: ./_host-dr/start-dr.md -->
