# Haitong Brazil Bank HyperBDR Best Practices (Standard)

This document is based on the Haitong Brazil Bank disaster recovery project, focusing on demonstrating HyperBDR's application in the financial industry VMware to Huawei Cloud disaster recovery scenario.

***

## 1. Project Overview

### 1.1 Customer & Scenario

| Dimension                    | Description                                                  |
| ---------------------------- | ------------------------------------------------------------ |
| **Customer**                 | Haitong Brazil Bank                                          |
| **Industry/Region**          | Financial Industry, EU-regulated bank with business across Iberia, UK, Poland, France, Brazil, and Macau |
| **Business Characteristics** | Provides professional services in structured finance, capital markets, M&A advisory, bonds, corporate derivatives, and asset management |
| **Key Systems**              | Database systems, file storage service systems, investment banking related business systems |
| **Business Scale**           | 16 hosts, Storage approximately 8.7TB                        |
| **Source Environment**       | On-premises VMware environment                               |
| **DR Objectives**            | RTO < 30 minutes, RPO 4~24 hours (based on business system tier) |

This project is a typical scenario for financial industry VMware to Huawei Cloud disaster recovery, suitable as a reference case for financial industry DR to cloud.

### 1.2 HyperBDR's Core Value in This Project

- **Boot in Cloud**: Supports one-click cloud recovery of business systems to available state without requiring 1:1 pre-provisioned instances in the cloud, significantly reducing DR costs
- **VMware Agentless Migration**: Source VMware hosts do not require agent installation one by one, minimizing impact on source business systems
- **Combined Storage Strategy**: Database and file storage systems use block storage for minute-level recovery, while other business systems use object storage to reduce storage costs

***

## 2. Business Challenges & HyperBDR's Response

Financial industry disaster recovery often faces the following challenges. This project provides solutions through HyperBDR:

| Challenge                                           | Description                                                  | HyperBDR's Response                                          |
| --------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Original solution does not meet DR requirements** | Business systems run in on-premises VMware environment, original local backup product lacks offsite DR and cloud DR capabilities | HyperBDR provides complete cloud DR solution, supporting VMware to Huawei Cloud offsite DR |
| **Strict RTO/RPO requirements**                     | Financial industry regulatory requirements: RTO < 30 minutes, RPO planned as 4~24 hours based on business system tier | Boot in Cloud technology achieves minute-level RTO, policy-based synchronization meets different RPO requirements |
| **DR cost control**                                 | Traditional DR solutions require 1:1 pre-provisioned instances in the cloud, resulting in high costs | Boot in Cloud technology does not require pre-provisioned instances, object storage reduces storage costs, overall TCO reduced by 50% |
| **Minimize production environment impact**          | Financial business systems have high stability requirements and do not allow invasive operations on the source side | Agentless mode accesses directly through VMware API without installing agents on the source side |

These challenges are common in most financial industry DR scenarios, so the HyperBDR capabilities demonstrated in this project have reusable best practice value.

***

## 3. HyperBDR Solution & Architecture

### 3.1 Overall Approach

This project uses HyperBDR to replicate 16 business hosts from Haitong Brazil Bank's on-premises VMware environment to Huawei Cloud, adopting a combined storage strategy based on business system importance: database and file storage systems (with large data volumes) use block storage for data synchronization to achieve business recovery time of less than 10 minutes; other business system hosts use object storage for data synchronization, meeting RTO < 30 minutes requirements while reducing storage costs during the DR backup phase.

### 3.2 Architecture Key Points

- **Production**: On-premises VMware environment running 16 Windows Server virtual machines, including database servers, application servers, and file servers
- **DR**: Huawei Cloud sa-brazil-1 region, using various cloud instance types (c3.large.4, s6.xlarge.2, m7n.xlarge.8, etc.)
- **Storage Layer**: Database and file storage systems use block storage, other business systems use object storage as intermediate layer
- **Replication**: Incremental synchronization mode, snapshot interval 1 hour, snapshot quota 128, supports policy-based synchronization

### 3.3 HyperBDR Core Capabilities in This Project

| HyperBDR Capability              | Application in This Project                                  | Value                                                        |
| -------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Boot in Cloud**                | Supports one-click cloud recovery of business systems to available state without requiring 1:1 pre-provisioned instances in the cloud | Significantly reduces DR costs, TCO reduced by 50%           |
| **VMware Agentless**             | Source VMware hosts do not require agent installation one by one, accessed directly through VMware API | Minimizes impact on source business systems, reduces deployment complexity |
| **Policy-Based Synchronization** | Configures different synchronization strategies based on business system importance, snapshot interval 1 hour | Meets RPO requirements for different business systems (4~24 hours) |
| **Combined Storage Strategy**    | Database and file storage systems use block storage, other business systems use object storage | Balances recovery performance and storage costs, critical systems <10 minutes RTO, other systems <30 minutes RTO |
| **Automated Driver Adaptation**  | Automatically adapts Huawei Cloud architecture drivers without manual intervention | Improves recovery success rate, reduces operational complexity |

***

## 4. Implementation & DR Drill Best Practices

### 4.1 Data Replication Phase

In the data replication phase before drills, this project adopts incremental synchronization strategy:

- **Incremental Synchronization Mode**: Only transfers changed data blocks, reducing network bandwidth usage
- **Snapshot Interval 1 Hour**: Creates a snapshot every hour to ensure data recovery points
- **Snapshot Quota 128**: Retains 128 snapshot versions, supporting long-term data retention
- **Policy-Based Synchronization**: Configures synchronization strategies based on business system importance

The data replication process is continuous, providing the data foundation for subsequent drills and takeover. Current project status: 5 hosts synchronizing, 11 hosts snapshot synchronization completed.

### 4.2 Drill & Takeover Phase Best Practices

Drills and takeover are key steps to verify the effectiveness of the DR solution. This project uses Boot in Cloud one-click recovery method. The following are the detailed steps and best practices during the drill:

#### 4.2.1 Pre-Drill Preparation

| Step                                  | Time               | Key Actions                                                  | Purpose                            |
| ------------------------------------- | ------------------ | ------------------------------------------------------------ | ---------------------------------- |
| **Environment Check**                 | 1 day before drill | Check Huawei Cloud resource quotas, network connectivity, storage space | Ensure DR environment is available |
| **Data Synchronization Verification** | 1 day before drill | Verify synchronization status of all hosts, confirm snapshot integrity | Ensure data consistency            |
| **Network Planning**                  | 1 day before drill | Configure drill network, IP address planning, DNS configuration | Ensure drill network connectivity  |
| **Orchestration Planning**            | 1 day before drill | Develop recovery sequence, dependency relationships, parallel strategy | Optimize recovery time             |

**Key Points of Pre-Drill Preparation:**

- Ensure Huawei Cloud region sa-brazil-1 has sufficient resource quotas
- Verify network connectivity from source VMware to Huawei Cloud
- Plan IP addresses and routing configuration for drill network
- Develop detailed recovery orchestration plan with clear dependency relationships

#### 4.2.2 Drill & Takeover Phase

| Phase                           | Objective                           | Detailed Steps & HyperBDR Key Actions                        | Time & Results           |
| ------------------------------- | ----------------------------------- | ------------------------------------------------------------ | ------------------------ |
| **Database System Recovery**    | Prioritize database system recovery | Database hosts using block storage (SRBRSPDBS01, SRBRSPDBS03) use Boot in Cloud one-click recovery, automated driver adaptation | Completed in <10 minutes |
| **Application System Recovery** | Recover application servers         | Application servers (TSAPLIC01, SRBRSPAD02, SRBRSPAD03, etc.) recovered in parallel using object storage mode | Completed in <30 minutes |
| **File Storage Recovery**       | Recover file services               | File storage server (BESSPSRV19) recovered using block storage mode | Completed in <10 minutes |
| **Business Verification**       | Verify business availability        | Conduct business function testing, data consistency verification, network connectivity testing | Verification passed      |

**HyperBDR Best Practice Points During Drill:**

- **Priority Sequencing**: Recover database systems first, then application systems, finally auxiliary systems
- **Parallel Recovery**: Use parallel recovery strategy for application servers without dependencies to reduce overall RTO
- **Storage Strategy Optimization**: Use block storage for critical systems to achieve fast recovery, use object storage for non-critical systems to reduce costs
- **Orchestration-Driven**: Use HyperBDR orchestration capability to manage recovery sequence and dependencies
- **Automated Driver Adaptation**: Rely on HyperBDR automatic Huawei Cloud driver adaptation without manual intervention

***

## 5. Key Results & Metrics

Adopting HyperBDR Boot in Cloud and combined storage strategy, the following results can be achieved during DR drills and takeover:

| Metric                          | Result                        | HyperBDR's Contribution                                      |
| ------------------------------- | ----------------------------- | ------------------------------------------------------------ |
| **RTO (Critical Systems)**      | <10 minutes                   | Boot in Cloud one-click recovery + block storage strategy    |
| **RTO (Non-Critical Systems)**  | <30 minutes                   | Boot in Cloud one-click recovery + object storage strategy   |
| **RPO**                         | 1~4 hours                     | Incremental synchronization + 1 hour snapshot interval       |
| **TCO**                         | Reduced by 50%                | No 1:1 pre-provisioned instances + object storage cost optimization |
| **Data Synchronization Status** | 11 completed, 5 synchronizing | Incremental synchronization strategy, continuous data protection |
| **Source Impact**               | Minimized                     | Agentless mode, no agent installation required               |

Note: Values may vary under different environments and bandwidth conditions, but HyperBDR Boot in Cloud and combined storage strategy have replicability.

***

## 6. Project Summary

This project successfully verified HyperBDR's effectiveness in the financial industry VMware to Huawei Cloud disaster recovery scenario, achieving a compliant DR solution for Haitong Brazil Bank. The key achievements of the project are as follows:

### 6.1 Key Achievements

- **Regulatory Compliance**: Achieved RTO < 30 minutes, RPO 4~24 hours regulatory requirements
- **Cost Optimization**: TCO reduced by 50% through Boot in Cloud and object storage strategy
- **Minimized Production Impact**: Agentless mode adopted, no agent installation required on source side
- **Flexible Storage Strategy**: Block storage for critical systems, object storage for non-critical systems, balancing performance and cost

### 6.2 Project Value

This project demonstrates HyperBDR's core value in financial industry disaster recovery scenarios:

- **Compliance Assurance**: Meets strict RTO/RPO regulatory requirements of the financial industry
- **Cost Efficiency**: Significantly reduces DR costs through cloud-native architecture
- **Operational Simplification**: Agentless deployment and automated driver adaptation reduce operational complexity
- **Flexible Strategy**: Configures differentiated DR strategies based on business importance

### 6.3 Typical Scenarios

This project covers typical scenarios for financial industry VMware to Huawei Cloud disaster recovery, including DR protection for database systems, application systems, 和 file storage systems, which has representativeness and reference value for similar financial customers.

---

*This is the standard version, containing detailed implementation guidance and best practices. For more details and troubleshooting information, please refer to the complete version.*
