# RPO & RTO 最佳实践

## Basic Concept

### About RPO & RTO

When it comes to Disaster Recovery, two key concepts are RPO (Recovery Point Objective) and RTO (Recovery Time Objective). They are critical performance metrics in disaster recovery planning, used to measure the recoverability and business continuity of systems in the event of a catastrophic incident.

#### Recovery Point Objective(RPO)

RPO refers to the time frame within which a system can tolerate data loss in the event of a failure or catastrophic incident. In other words, RPO defines the maximum amount of data loss that the business can tolerate. Usually measured in units of time (such as hours or minutes), the choice of RPO depends on the business's real-time data requirements and the acceptable risk of data loss. Lower RPO values indicate that the system can back up data more frequently, reducing the amount of data lost in the event of a catastrophic incident.

Factors involved in calculating RPO include:

- Business criticality: Systems critical to business operations will have a higher RPO, while less critical systems will have a lower RPO.

- Data change rate: Systems with a high data change rate typically have a higher RPO, while systems with a lower data change rate have a lower RPO.

- Backup frequency: Higher backup frequencies result in lower RPO.

- Recovery time: Shorter recovery time requirements lead to lower RPO.

- Backup storage: If backup storage is more reliable and recovery time is shorter, RPO will remain lower.

- Compliance and regulatory requirements: Some industries have specific requirements for data recovery and retention, which may affect RPO.

- IT budget and resources: An organization's IT budget and available resources can impact RPO.

- To establish a robust disaster recovery plan, it's essential to consider the above factors when calculating RPO.

#### Recovery Time Objective(RTO)

RTO (Recovery Time Objective) refers to the maximum time required for a system to recover to normal operation after a catastrophic event. It is a time window that defines the maximum acceptable downtime for the business. The selection of RTO is typically based on the business's continuity requirements, indicating how quickly the business can resume normal operation after a catastrophic event. A shorter RTO indicates a higher level of business continuity, as the system can recover more quickly from a disaster, minimizing business interruption.

The RTO time is equal to the sum of the Host Recovery Time and Business Recovery Time.

Host Recovery Time: This refers to the time required to recover the system after a failure or catastrophic event. This may involve steps such as restarting the host, loading the operating system, and applications.

Business Recovery Time: This refers to the time required for the business to fully recover to normal operation after the host has been recovered. This includes ensuring that applications and services are fully available and that business functions are executing normally.

#### Disaster recovery costs and their relationship with RPO and RTO:

The pursuit of a lower RPO often requires more frequent data backup and replication, leading to an increase in storage, bandwidth, and operational costs. Real-time or near-real-time backup demands greater resource investment, resulting in a corresponding increase in costs while achieving a low RPO. Conversely, higher RPO implies longer backup intervals, reducing the frequency of backup and replication, thereby lowering hardware and network costs.

Achieving a shorter RTO typically demands more resource investment, including high-availability systems, redundant equipment, and complex architecture, which increases hardware, software, and maintenance costs. On the contrary, opting for a longer RTO allows for more downtime, reducing reliance on high-availability systems and consequently lowering associated costs.

#### How to choose reasonable RPO and RTO?

It is recommended to adopt a flexible disaster recovery plan based on business needs and cost tolerance. Flexibly choose RPO and RTO based on the importance of business systems. Provide higher investment for critical business systems to minimize potential data loss and downtime, while secondary systems can accept some sacrifices to achieve cost reduction. For critical business systems, pursuing low RPO and short RTO may require higher investment, whereas secondary systems can tolerate higher RPO and longer RTO to reduce costs.

## HyperBDR RPO & RTO Best Practices

### HyperBDR RPO & RTO

| Storage Type | Cloud Platform | Min. RPO | Min. RTO | Notes |
| --- | --- | --- | --- | --- |
| Block Storage | Huawei Cloud | 5 Minutes | 5 Minutes - 10 Minutes | In Huawei Cloud, the recovery time for block storage is independent of the data volume, with a restoration time range of 5-10 minutes. |
| Object Storage | Huawei Cloud | 5 Minutes | 5 minutes to hours (depending on the actual amount of data being recovered) | In Huawei Cloud, the Object Storage Recovery Time Objective (RTO) is influenced by multiple factors, including data volume and the specifications of the recovery host. For detailed calculation methods, please refer to the Best Practices for RTO Planning. |

### Best Practices for RPO Calculation

#### RPO Calculation

In HyperBDR, the factors influencing RPO primarily include network (bandwidth and latency) and data change volume, where RPO is approximately equal to the data change volume divided by the network.

HyperBDR predominantly employs block-level differential capture technology to obtain the data change volume. This involves capturing the sum of changed blocks at the operating system's block level within a unit time range, which can be estimated based on the specific business scenario.

Network bandwidth and latency refer to the connection between the user's current environment and the cloud. Depending on the mode used, they are categorized as follows:


- Block Storage: Network bandwidth and latency between the user's side and the synchronization gateway's public network in the cloud.

- Object Storage: Network bandwidth and latency between the user's side and the cloud's object storage.


Assuming the user's production data allocation capacity is 1TB, we outline the bandwidth and data change volume under different RPO requirements.


| Data Volume (TB)  | RPO Expectation (Minutes)  | Data Change Rate (%) | Data Change Volume (GB) | Estimated Bandwidth (Mbps) |
| --- | --- | --- | --- | --- |
| 1 | 5 | 5.00% | 51.20  | 1398  |
| 1 | 10 | 5.00% | 51.20  | 699  |
| 1 | 30 | 5.00% | 51.20  | 233  |
| 1 | 60 | 5.00% | 51.20  | 117  |
| 1 | 240 | 5.00% | 51.20  | 29  |
| 1 | 720 | 5.00% | 51.20  | 10  |
| 1 | 1440 | 5.00% | 51.20  | 5  |

### Best Practices for RTO Calculation

#### Block Storage

In Huawei Cloud, the recovery time for block storage is independent of the data volume and the specifications of the host used for recovery. The RTO time range is between 5 minutes and 10 minutes. The following is a simulated test scenario using 1 TB capacity for reference in actual planning:

| Disk Count | Recovery Host Flavor | Disk Type | Recovery Host Duration(Minutes) |
| --- | --- | --- | --- |
| Single Disk(Usage Capacity 800 GB)<br/> Multiple Disks(Usage Capacity 1010 GB) | Unrestricted (Ensure that the selected host specifications can use the corresponding disk type) | High I/O(SAS) <br/> General Purpose SSD(GPSSD) <br/> Ultra-high I/O(SSD) <br/> Extreme SSD(ESSD) | 5 - 10 |

#### Object Storage

In Huawei Cloud, the Object Storage mode is influenced by several factors in terms of RTO time, primarily including:

- Data Volume: The actual volume of data being recovered.

- Number of Disks: When recovering from multiple disks simultaneously, the recovery time is approximately equal to the time taken for the maximum disk recovery.

- Temporary Recovery Gateway Specification Configuration

   - During recovery with HyperBDR, a host is launched as a temporary recovery gateway for business recovery. The specifications of this host are set by the user in the disaster recovery configuration. Metrics such as CPU, memory, maximum bandwidth, and maximum packet send/receive capability in these specifications may affect the recovery speed.

   - Impact of Specifications on Disk Concurrent Recovery Speed: During the recovery process in HyperBDR, CPU and memory resources are required to decrypt and decompress (if enabled) object storage data before restoring it to block storage. By default, data recovery is performed concurrently, and each disk requires a minimum of 1 GB of memory for recovery. For example, using a specification of 2 cores and 4 GB of RAM, a maximum of 4 disks can undergo simultaneous recovery.

- Volume Type: During recovery with HyperBDR, the data from object storage is recopied to block storage. Therefore, the selected volume type in the disaster recovery configuration also affects the recovery time.


Below are some common specification recommendations and the host recovery time for 1TB of effective data (i.e., entirely comprised of data) under different circumstances.

| Disk Count | Recovery Host Flavor | Disk Type | Recovery Host Duration(Minutes) |
| --- | --- | --- | --- |
| Single Disk(Usage capacity 100 GB) | Memory is less than or equal to 4GB Maximum bandwidth range: 1.5 - 4 Gbps | High I/O(SAS) <br/> General Purpose SSD(GPSSD) <br/> Ultra-high I/O(SSD) <br/> Extreme SSD(ESSD) | 20 Minutes(Ultra-high I/O、Extreme SSD) <br/> 25 Minutes(General Purpose SSD) <br/> 30 Minutes(High I/O) |
| Single Disk(Usage capacity 100 GB) | Memory is greater than 4GB Maximum bandwidth range: Greater than 4 Gbps | High I/O(SAS) <br/> General Purpose SSD(GPSSD) <br/> Ultra-high I/O(SSD) <br/> Extreme SSD(ESSD) | 30 Minutes(High I/O) <br/> 20 Minutes(Ultra-high I/O、Extreme SSD) |
| Single Disk(Usage capacity 500 GB) | Memory is less than or equal to 4GB Maximum bandwidth range: 1.5 - 4 Gbps | High I/O(SAS) <br/> General Purpose SSD(GPSSD) <br/> Ultra-high I/O(SSD) <br/> Extreme SSD(ESSD) | 1 Hour 30 Minutes(High I/O) <br/> 1 Hour 10 Minutes(Ultra-high I/O、Extreme SSD) |
| Single Disk(Usage capacity 500 GB) | Memory is greater than 4GB Maximum bandwidth range: Greater than 4 Gbps | High I/O(SAS) <br/> General Purpose SSD(GPSSD) <br/> Ultra-high I/O(SSD) <br/> Extreme SSD(ESSD) | 45 Minutes(Ultra-high I/O、Extreme SSD) <br/> 1 Hour 30 Minutes(High I/O) |
| Single Disk(Usage capacity 920 GB) <br/> Multiple Disks(Usage capacity 1010 GB) | Memory is less than or equal to 4GB Maximum bandwidth range: 1.5 - 4 Gbps | High I/O(SAS) <br/> General Purpose SSD(GPSSD) <br/> Ultra-high I/O(SSD) <br/> Extreme SSD(ESSD) | 2 Hours 10 Minutes(Ultra-high I/O、Extreme SSD) <br/> 2 Hours 20 Minutes(General Purpose SSD) <br/> 2 Hours 30 Minutes(High I/O) |
| Single Disk(Usage capacity 920 GB) <br/> Multiple Disks(Usage capacity 1010 GB) | Memory is greater than 4GB Maximum bandwidth range: Greater than 4 Gbps | General Purpose SSD(GPSSD) <br/> Ultra-high I/O(SSD) <br/> Extreme SSD(ESSD) | 1 Hour 15 Minutes(Ultra-high I/O、Extreme SSD) <br/> 1 Hour 35 Minutes(General Purpose SSD) |

#### Recommended Specifications for Object Storage Mode Disaster Recovery

Documentation for Huawei Cloud Computing Specifications：[https://support.huaweicloud.com/intl/en-us/productdesc-ecs/ecs_01_0014.html](https://support.huaweicloud.com/intl/en-us/productdesc-ecs/ecs_01_0014.html)

| Specifications | Recommendation |
| --- | --- |
| Memory is less than or equal to 4GB Maximum bandwidth range: 1.5 - 4 Gbps | General Computing S7 / S7n / S6 / Sn3 <br/> General Computing-plus C7n / C6 / C3ne / C3 <br/> High-performance computing H3 / Hc2 |
| Memory is greater than 4GB Maximum bandwidth range: Greater than 4 Gbps | General Computing Sn3 / S3 / S2 <br/> General Computing-plus C7 / aC7 / C7n / C6s / C6h / C6 / C3ne / C3 <br/> Memory-optimized M7 / aM7 / M7n / M6 / M6nl / M3ne / M3 / M2 <br/> Large-Memory E7 / E6 / E3 <br/> Disk-intensive D7 / D6 / D3 / D2 <br/> Ultra-high I/O Ir7 / I7 / aI7 / Ir7n / I7n / Ir3 / I3 <br/> High-Performance Computing H3 / Hc2 |

How to search for recommended series and specific specifications in the Huawei Cloud official documentation:

For instance, if the specifications require a memory size of 4GB or less and a maximum bandwidth ranging from 1.5 to 4 Gbps, follow these steps:

1. Locate each series that meets these requirements. Then, search the Max./Assured Bandwidth (Gbit/s) column in the specifications list for each series, filtering the range between 1.5 and 4 Gbps.

2. Refine the search by filtering the Memory (GiB) column to find specifications with 4GB or less.

Example Reference: In the General Computing S7 series, under the S7 type, the s7.large.2(2C4G) specification meets the criteria, with 4GB of memory and a maximum bandwidth of 1.5 Gbps.

![hyperbdr-rpo--rto-planning-best-practices-1.png](./images/hyperbdr-rpo--rto-planning-best-practices-1.png)

## FAQ

### How to test the bandwidth and latency between a local host and a Huawei Cloud host?

#### How to test latency using the ping command:


1. Open the command prompt: On the local host, press the Win + R key combination, type cmd, and press Enter.

2. Run the ping command: In the command prompt, enter the following command, replacing CloudServerIP with the actual IP address of your Huawei Cloud host.

```bash
ping CloudServerIP
```

This will display the round-trip latency between the local host and the Huawei Cloud host.

#### Performing bandwidth tests using iperf


1. Install iperf: Install the iperf tool on both the local host and the Huawei Cloud host. You can find relevant installation instructions on the iperf official website([https://iperf.fr/](https://iperf.fr/)).

2. Start the iperf server: Run the following command on the Huawei Cloud host:

```bash
iperf -s
```


3. Run the iperf client: Execute the following command on the local host, replacing CloudServerIP with the actual IP address of your Huawei Cloud host.

```bash
iperf -c CloudServerIP
```

This will display the bandwidth test results from the local host to the Huawei Cloud host.

```bash
Client connecting to <Cloud Host IP>, TCP port 5001
TCP window size: 85.3 KByte (default)
------------------------------------------------------------
[  3] local 192.168.1.2 port 12345 connected with <Cloud Host IP> port 5001
[ ID] Interval       Transfer     Bandwidth
[  3]  0.0-10.0 sec  1.10 GBytes   944 Mbits/sec
```

To analyze bandwidth, you only need to look at the "Bandwidth" column. Bandwidth is a measure of network connection speed, usually expressed in bits per second (bps). In the example above, bandwidth is represented in megabits per second (Mbits/sec).

Please note that the results of bandwidth tests may be influenced by network conditions, server performance, and other factors. Before actual application, it is recommended to run multiple tests at different times and under different conditions to obtain more comprehensive bandwidth performance data.
