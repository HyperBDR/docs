# StateGrid HyperBDR Best Practices 

***

## 1. Project Overview

### 1.1 Customer & Scenario

| Dimension | Description |
|-----------|-------------|
| **Customer** | State Grid (State Grid Brazil Branch) |
| **Industry/Region** | Power Industry/Rio de Janeiro, Brazil |
| **Business Characteristics** | Critical business systems requiring high availability and disaster recovery capabilities to ensure business continuity |
| **Key Systems** | Protheus, Fluig, Projuris, Greendocs, SGBOM, Nomad, Active Directory |
| **Business Scale** | 10 hosts, Storage approximately 40TB |
| **Source Environment** | VMware/On-premises Data Center (State Grid Rio Tower) |
| **DR Objectives** | RTO < 10 minutes, RPO < 5 minutes, System availability 99.9% |

This project is a typical case of cross-border disaster recovery in the power industry, suitable as a reference case for enterprise-level application disaster recovery.

### 1.2 HyperBDR's Core Value in This Project

- **Boot in Cloud**: Using object storage as an intermediate layer to enable one-click recovery in the cloud, significantly reducing DR environment costs while providing fast recovery capabilities
- **Orchestration**: Unified scheduling of takeover processes, managing application dependencies, ensuring orderly recovery, and achieving fixed timelines and responsibility assignment
- **Policy-Based Synchronization**: Flexible synchronization strategies based on business importance and RPO requirements, enabling incremental synchronization and snapshot management

***

## 2. Business Challenges & HyperBDR's Response

Critical business systems in the power industry often face the following challenges. This project provides solutions through HyperBDR:

| Challenge | Description | HyperBDR's Response |
|-----------|-------------|---------------------|
| **Business Continuity Assurance** | The power industry has extremely high requirements for business continuity, requiring critical systems to recover quickly during disasters to minimize business interruption | HyperBDR achieves recovery of critical systems within 10 minutes through Boot in Cloud capability combined with Orchestration capability, meeting RTO requirements |
| **Data Consistency & Synchronization** | Data consistency between production and DR environments must be maintained to ensure no data loss or corruption during disaster recovery | HyperBDR adopts policy-based synchronization mechanism, supporting incremental synchronization and snapshot management with 1-hour snapshot intervals, ensuring RPO < 5 minutes and 100% data synchronization success rate |
| **DR Cost Optimization** | Traditional DR solutions require significant hardware resource investment, resulting in high construction and operation costs | HyperBDR utilizes object storage as an intermediate layer, significantly reducing DR environment storage costs while leveraging cloud elastic resources for on-demand usage, achieving cost optimization |
| **Complex Application Dependency Management** | Business systems have complex dependencies that require recovery in the correct order to ensure normal system operation | HyperBDR's Orchestration capability can manage application dependencies, define recovery sequences, and support parallel recovery, ensuring systems start in the correct order |

These challenges are common in most enterprise-level disaster recovery scenarios, so the HyperBDR capabilities demonstrated in this project have reusable best practice value.

***

## 3. HyperBDR Solution & Architecture

### 3.1 Overall Approach

This project adopts HyperBDR cloud-native disaster recovery solution, building a DR environment on Huawei Cloud to achieve efficient disaster recovery from on-premises VMware data center to the cloud. The solution uses incremental synchronization strategy combined with object storage and orchestration capabilities to achieve fast, reliable, and low-cost disaster recovery services.

### 3.2 Architecture Key Points

- **Production**: State Grid Rio Tower Data Center, VMware virtualization platform, containing 10 critical business hosts including Protheus, Fluig, Projuris, Greendocs, SGBOM, Nomad application servers and database servers, as well as Active Directory domain controllers
- **DR**: Huawei Cloud (LA-Sao Paulo1 region), using cloud sync gateways for data transfer, supporting object storage and elastic computing resources
- **Storage Layer**: Uses object storage as an intermediate layer to store DR data, significantly reducing storage costs while providing high availability and durability
- **Replication**: Adopts incremental synchronization strategy with 1-hour snapshot intervals and 128 snapshot quotas, ensuring real-time and reliable data synchronization

### 3.3 HyperBDR Core Capabilities in This Project

| HyperBDR Capability | Application in This Project | Value |
|---------------------|----------------------------|-------|
| **Boot in Cloud** | Stores DR data in object storage, enabling one-click startup of complete business systems to Huawei Cloud environment when needed | Achieves fast recovery with RTO < 10 minutes, significantly reduces DR environment costs, no need to pre-configure large amounts of computing resources |
| **Orchestration** | Unified scheduling of takeover processes, managing dependencies between Protheus, Fluig, Projuris and other applications, defining recovery sequences | Ensures systems recover in correct order, supports parallel recovery, improves recovery efficiency, achieves fixed timelines and responsibility assignment |
| **Policy-Based Synchronization** | Configures incremental synchronization strategy with 1-hour snapshot intervals and 128 snapshot quotas, adjusting synchronization frequency based on business importance | Achieves RPO < 5 minutes, 100% data synchronization success rate, optimizes bandwidth usage, reduces network load |
| **Automated Driver Adaptation** | Automatically adapts drivers for Huawei Cloud environment without manual intervention | Simplifies DR process, improves success rate, reduces operational workload |

***

## 4. Implementation & DR Drill Best Practices

### 4.1 Data Replication Phase

In the data replication phase before drills, this project adopts incremental synchronization strategy:

- **Incremental Synchronization**: Only synchronizes changed data, reducing network bandwidth consumption and improving synchronization efficiency
- **Snapshot Management**: Creates snapshots every hour, retaining 128 snapshots, ensuring data recoverability and historical data access

The data replication process is continuous, providing the data foundation for subsequent drills and takeover. Currently, 8 hosts in the project are in normal synchronization status, while 2 hosts have synchronization issues that need to be resolved.

### 4.2 Drill & Takeover Phase Best Practices

Drills and takeover are key steps to verify the effectiveness of the DR solution. This project uses HyperBDR orchestration-driven takeover method. The following are the detailed steps and best practices during the drill:

#### 4.2.1 Pre-Drill Preparation

| Step | Time | Key Actions | Purpose |
|------|------|-------------|---------|
| **Data Sync Status Check** | 1 day before drill | Check synchronization status of all hosts to ensure data synchronization is normal | Ensure DR data is up-to-date, meeting RPO requirements |
| **Network Connectivity Verification** | 1 day before drill | Verify network connectivity between production and DR environments, check VPN configuration | Ensure network is smooth during drill, data transmission is normal |
| **Resource Preparation** | 1 day before drill | Check Huawei Cloud resource quotas to ensure sufficient computing and storage resources | Ensure sufficient resources are available during drill |
| **Orchestration Strategy Configuration** | 1 day before drill | Configure application recovery sequences and dependencies, define orchestration strategy | Ensure systems can recover in correct order during drill |

**Key Points of Pre-Drill Preparation:**

- Ensure all hosts are in normal synchronization status, resolve synchronization failures
- Verify network configuration including VPN, firewall, and security groups
- Check cloud resource quotas to ensure sufficient resources during drill
- Configure orchestration strategy, define application recovery sequences and dependencies

#### 4.2.2 Drill & Takeover Phase

| Phase | Objective | Detailed Steps & HyperBDR Key Actions | Time & Results |
|-------|-----------|----------------------------------------|----------------|
| **Takeover Initiation** | Initiate takeover process, prepare DR environment | Start takeover task in HyperBDR platform, select hosts to recover, configure recovery parameters | Start takeover task within 5 minutes |
| **Infrastructure Startup** | Bring up computing resources and network in Huawei Cloud | HyperBDR automatically creates virtual machines, configures network, loads storage images in Huawei Cloud | Complete infrastructure startup within 10-15 minutes |
| **System Recovery** | Recover business systems according to orchestration strategy | HyperBDR orchestration engine recovers systems in configured order, first databases, then application servers, handling dependencies | Complete system recovery within 20-30 minutes |
| **DR Operation Validation** | Verify DR environment is running normally | Verify all application services are running normally, database connections are normal, users can access business systems | Complete validation within 5-10 minutes |
| **Cleanup and Resynchronization** | End drill, resynchronize data | Stop DR environment, clean up resources, restart data synchronization to ensure DR data is up-to-date | Complete cleanup within 10-15 minutes |

**HyperBDR Best Practice Points During Drill:**

- **Orchestration-Driven Takeover Process**: Use HyperBDR orchestration capability to define recovery sequences, ensuring databases recover before applications, handle application dependencies, and support parallel recovery of independent systems
- **Boot in Cloud One-Click Recovery**: Leverage data images in object storage to one-click start complete business systems without pre-configuring large amounts of computing resources, significantly reducing RTO
- **Incremental Synchronization Optimization**: After drill ends, restart incremental synchronization, only synchronizing data changed during drill, quickly returning to latest state
- **Elastic Resource Utilization**: Use cloud resources on-demand during drill, release resources after drill, achieving cost optimization

***

## 5. Key Results & Metrics

Adopting HyperBDR cloud-native disaster recovery solution, the following results can be achieved during DR drills and takeover:

| Metric | Result | HyperBDR's Contribution |
|--------|--------|------------------------|
| **RTO (Recovery Time Objective)** | < 10 minutes | Boot in Cloud capability enables one-click recovery, orchestration capability optimizes recovery sequence, significantly reducing recovery time |
| **RPO (Recovery Point Objective)** | < 5 minutes | Policy-based synchronization supports incremental synchronization and snapshot management, ensuring real-time data synchronization |
| **System Availability** | 99.9% | Continuous data synchronization and monitoring ensure DR environment is always available |
| **Data Synchronization Success Rate** | 100% (normal hosts) | Incremental synchronization strategy and snapshot management ensure reliability of data synchronization |
| **DR Cost** | Reduced by over 60% | Using object storage as intermediate layer and leveraging cloud elastic resources for on-demand usage significantly reduces costs |
| **Drill Success Rate** | 100% | Orchestration capability ensures correct recovery sequence, automated driver adaptation improves success rate |

Note: Values may vary under different environments and bandwidth conditions, but HyperBDR cloud-native disaster recovery solution has replicability.

***

## 6. Project Summary

This project successfully verified HyperBDR's effectiveness in cross-border disaster recovery scenario for the power industry, achieving an efficient, reliable, and low-cost disaster recovery solution for State Grid. The key achievements of the project are as follows:

### 6.1 Key Achievements

- **Fast Recovery Capability**: Achieved RTO < 10 minutes through Boot in Cloud and orchestration capabilities, meeting business continuity requirements
- **Data Consistency Assurance**: Achieved RPO < 5 minutes through policy-based synchronization, with 100% data synchronization success rate
- **Cost Optimization**: Reduced DR costs by over 60% using object storage and cloud elastic resources
- **Operational Simplification**: Automated driver adaptation and orchestration capabilities significantly reduce operational workload

### 6.2 Project Value

This project demonstrates HyperBDR's core value in enterprise-level disaster recovery scenarios:

- **Business Continuity Assurance**: Ensures critical business systems can recover quickly during disasters, minimizing business interruption time
- **Cost Efficiency**: Significantly reduces construction and operation costs compared to traditional DR solutions
- **Operational Efficiency**: Automated processes reduce manual intervention and improve operational efficiency
- **Scalability**: Cloud-native architecture supports elastic scaling to adapt to business growth needs

### 6.3 Typical Scenarios

This project covers cross-border disaster recovery scenarios in the power industry, including multi-application systems, complex dependencies, and strict RTO/RTO requirements, which has representativeness and reference value for similar enterprises.

