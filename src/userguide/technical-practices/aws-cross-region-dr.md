# AWS Cross-Region DR

## 1. Project Background

With **CloudEndure officially exiting the Chinese market**, users who originally relied on it for business DR and rapid restoration need to find a stable and sustainable alternative. The core requirements that users focus on include:

* **One-click business recovery**, ensuring continuity of DR;

* **Cross-cloud and cross-region support**, meeting the requirements for multi-cloud and regional-level risk isolation;

* **Costs for long-term storage and network transmission are controllable**;

* **Reduce the risk of vendor lock-in**, and enhance architectural flexibility.

Against this backdrop, users choose&#x20;**&#x20;HyperBDR&#x20;**&#x20;as a replacement for CloudEndure, which not only fully covers the original one - click recovery capability but also has additional advantages in multi - cloud adaptation, cost optimization, and architectural consistency.&#x20;

## 2. CloudEndure vs HyperBDR

**Advantages of Object Storage**: HyperBDR supports object storage, which can significantly reduce long-term storage costs. Compared with traditional Block Storage, object storage is billed based on actual data volume and increments, making it more cost-effective.

**Flexible Deployment Modes&#x20;**: HyperBDR supports&#x20;**&#x20;agent-based&#x20;**&#x20;and&#x20;**&#x20;agentless&#x20;**&#x20;modes:&#x20;

* **Agentless Mode**: Suitable for high-load or special operating systems (such as specific Linux kernels), reducing system load and maintenance costs.

* **Agent Mode**: Suitable for scenarios with light load and normal environment, reducing the cost of Cloud Computing Platform interface calls.

**Cross-region and cross-cloud recovery**: Supports business recovery in heterogeneous environments, reducing the risk of relying on a single vendor.

**Network Optimization**: Reduce cross-regional data transfer volume through deduplication and compression technologies (compression ratio depends on data type), optimizing transmission costs.

| **Features**                                          | **CloudEndure**                                                           | **HyperBDR**                                                                                                                                                                       |
| ----------------------------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **One-click business recovery**                       | Support                                                                   | Full support (at the same level as CloudEndure)                                                                                                                                    |
| **Architecture Pattern and Replication Method&#x20;** | Based on Agent + Block-level Differential Replication                     | Supports both agent-based and agentless modes + block-level differential replication, which can be selected based on the scenario                                                  |
| **Source-side agentless support**                     | Not supported                                                             | Supports multi-platform source-side agentless mode (multiple architectures such as VMware, AWS, Oracle Cloud, OpenStack, etc.), and flexibly adapts to various architectures       |
| **Multi-cloud/Cross-region**                          | Limited to within AWS                                                     | Supports multiple AWS Cloud Computing Platforms and can achieve one-click business recovery at the same level within the AWS platform                                              |
| **Storage Cost**                                      | Relies on Block Storage, with relatively high costs                       | Supports both Block Storage and Object Storage, with Object Storage achieving over 70% savings in long-term storage costs                                                          |
| **Data Transfer Optimization (DTO)**                  | Compression within the host has a significant impact on host performance  | Agentless Synchronization Gateway Compression + Source Compression + Deduplication effectively reduces DTO costs while having minimal impact on the performance of the source host |
| **Vendor Lock-in Risk&#x20;**                         | High                                                                      | Low, cross-cloud recoverable                                                                                                                                                       |

## 3. Overall Solution

### DR Solution

**Console Deployment**: Deploy one **8-core 16GB** host in the target area to run the HyperBDR Console.

**Data Synchronization**: In the first phase, data is collected through **Windows/Linux Agent**, and the Beijing and Ningxia regions are interconnected via **dedicated lines** to ensure stable transmission.

**Storage Optimization**: Backup data in the Ningxia region is directly stored in **Standard Object Storage (S3 Standard)**, reducing long-term backup costs.

**Network Configuration**: The DR system uses Layer 2 connectivity with the source end to achieve transparent business switching.

![](./images/aws-cross-region-dr.png)

### Cloud DR Resource Usage Inventory

| **Component Role** | **Component Name**             | **Specification**                  | **Deployment Location**        | **Core Function**                    | **Instructions**                                                                                                                                                 |
| ------------------ | ------------------------------ | ---------------------------------- | ------------------------------ | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Control Plane**  | HyperBDR Control Platform      | EC2 c6i.2xlarge（8C16G）+ 500 GB EBS | DR Side / Cloud | Centralized Management and Control   | Provides unified policy configuration, task scheduling, and DR takeover capabilities, without directly participating in large-scale data transfer |
| **Agent**          | HyperBDR Windows / Linux Agent | N/A                                | Inside the source host         | Data Acquisition and Synchronization | Installed in the source operating system, used for data acquisition and synchronization in proxy mode                                                            |
| **Data Storage**   | Object Storage (Amazon S3)     | S3 Standard Storage                | Cloud                          | Data Storage                         | Store protected data and recover data with high reliability and elastic scalability&#xA;The allocated capacity of the source host is 20.5TB.                     |
| **Network**        | EC2 DTO / Leased Line          | N/A                                | Connect two regions            | Data Replication and Business Access | Supports cross-regional data replication and DR business access                                                                                   |
| **Cloud Host**     | EC2                            | Source Specification               | DR Site         | Business System Recovery             | Only exists during the drill or takeover phase and does not participate in data replication during normal times                                                  |

> Note: The fees do not include costs such as the number of Object Storage API calls and cross-region network transmission.

## 4. Project Results

This project focuses on users' requirements for DR capability takeover in the context of the CloudEndure service exit, and has built a DR architecture centered around object storage.&#x20;**&#x20;While maintaining business-level recovery capabilities without degradation, it has achieved significant cost optimization and improved architecture sustainability.&#x20;**&#x20;The main achievements are as follows:&#x20;

### Cost Comparison (Approximately 20.5 TB Data Scale)

In traditional CloudEndure or similar solutions, DR typically relies on long-term pre-provisioned block storage capacity and accumulated snapshot data, with storage costs strongly tied to pre-provisioned capacity. Even if the actual data volume does not increase, costs continue to accrue. In this solution,&#x20;**&#x20;Standard Object Storage (S3 Standard)&#x20;**&#x20;is adopted, with long-term storage costs approximately **¥5,257/month&#x20;**, compared to **¥17,424/month for traditional&#x20;**&#x20;EBS + Snapshot, which can save&#x20;**&#x20;over 70% of costs&#x20;**.&#x20;

| **Solution&#x20;**         | **Basic Storage**             | **Incremental Data&#x20;**            | **Total**     |
| -------------------------- | ----------------------------- | ------------------------------------- | ------------- |
| EBS + Snapshot             | 20,500 GB × ¥0.5312 ≈ ¥10,890 | 20,500 GB × 5% × 23 × ¥0.277 ≈ ¥6,533 | ¥17,424/month |
| S3 Standard Object Storage | 15,000 GB × ¥0.163 ≈ ¥2,445   | 15,000 GB × 5% × 23 × ¥0.163 ≈ ¥2,812 | ¥5,257/month  |

**Core of Cost Difference**: Object Storage is billed based on actual data volume and increments, while Block Storage requires payment for the full pre-set capacity and cumulative snapshots. The main highlights include:

* Billing based on actual usage avoids long-term capacity waste of Block Storage.&#x20;

* Data objectification + deduplication, compression, and lifecycle policies reduce long-term retention costs.

* Incremental data is billed only based on the actual amount of change, preventing the inflation of snapshot historical references.&#x20;

* Under cross-regional DR, network transmission costs are related to the actual amount of change, with no additional long-term cumulative costs.

> In the long run, the cost advantage of the object storage solution will be further magnified while maintaining cross-region DR capabilities and business continuity.&#x20;

### Implement equivalent business-level DR and restoration capabilities on the object storage architecture

This solution fully covers the core DR capabilities of CloudEndure at the capability level, and also supports restoring the entire business system from DR data, rather than being limited to single-file or data-level recovery.&#x20;

In DR drills or real fault scenarios, it can complete the reconstruction of computing resources, the recovery of disk data, and the overall startup of business applications, meeting the requirements for business continuity and DR.&#x20;

Unlike traditional file-level backup, which only supports file rollback, this solution emphasizes the overall recoverability of business systems. Compared with CloudEndure, while maintaining the same recovery effectiveness, the solution transforms DR capabilities from "heavy Block Storage dependency" to "object storage hosting", laying the foundation for cost optimization.&#x20;

### While supporting cross-regional DR, achieve a controllable balance between cost and capability&#x20;

This solution supports cross-region DR deployment (e.g., from Beijing Region to Ningxia Region), meeting regional-level risk isolation and compliance requirements.&#x20;

It should be clear that cross-regional data synchronization inevitably incurs network transmission costs, but under this architecture, the transmission costs are mainly related to the actual amount of change, rather than adding the continuous costs brought by long-term pre-set storage and snapshot accumulation.&#x20;

Overall, even when considering cross-regional transmission costs, the DR solution centered on object storage is still significantly superior to the traditional DR implementation centered on block storage in terms of**long-term operating costs, capacity elasticity, and architectural sustainability**.

## 5. Reference Link

* Amazon EBS Pricing: https://www.amazonaws.cn/ebs/pricing

* Amazon S3 Standard Storage Pricing:[https://www.amazonaws.cn/s3/pricing](https://www.amazonaws.cn/s3/pricing?utm_source=chatgpt.com)
