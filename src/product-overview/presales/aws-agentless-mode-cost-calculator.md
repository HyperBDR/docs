# Deep in AWS Agentless Mode(RC)

[[toc]]

:::tip
This document will apply only to HyperBDR version 5.6.0 and above. HyperBDR version 5.6.0 is scheduled for release on June 30, 2024.
:::

## How it works?

### Overview
This document outlines how to achieve agentless synchronization using AWS Direct API. The method relies on AWS EC2 snapshots and leverages HyperBDR for efficient and reliable data synchronization. The core idea is to utilize the full and incremental snapshot features to synchronize data by comparing differences between snapshots.

### Synchronization Process

#### Initial Snapshot Creation

* Create an initial snapshot of the host using AWS EC2 snapshot functionality.
* This initial snapshot contains all the data from the host.
* Use AWS Direct API operations list-snapshot-blocks and get-snapshot-block to read all data from this snapshot and transfer it to the target platform storage.
* Retain the initial snapshot for future synchronization.

#### Subsequent Incremental Synchronization

* Create a new snapshot of the host using AWS EC2 snapshot functionality during the next synchronization.
* Use AWS Direct API operation list-changed-blocks to find the differences between the new snapshot and the previous snapshot, identifying the incremental data.
* Use get-snapshot-block to read and transfer the incremental data to the target platform storage, ensuring the target platform is up to date.
* After transferring the incremental data, delete the previous snapshot and keep the current snapshot for the next synchronization.

### Technical Details

#### Snapshot Creation

* Create snapshots using the AWS EC2 API, such as the CreateSnapshot API.
* Ensure the snapshot creation process minimally impacts the production environment.

#### Data Reading and Transfer

* Use list-snapshot-blocks to get a list of data blocks in the snapshot.
* Use get-snapshot-block to read each data block and transfer the data efficiently to the target platform storage.


#### Incremental Snapshots and Difference Calculation

* Use list-changed-blocks to get a list of changed data blocks between two snapshots.
* Use get-snapshot-block to read the changed data blocks and transfer the incremental data to the target platform storage.

#### Snapshot Management

* Retain the latest snapshot for the next incremental synchronization.
* Regularly delete old snapshots to save storage costs and reduce management overhead.

### Reference Links

* [Read snapshots with EBS direct APIs](https://docs.aws.amazon.com/ebs/latest/userguide/readsnapshots.html)

## AWS Agentless Mode Cost Calculator(RC)

### Understand the Cost

The pricing calculation for AWS Agentless mode primarily involves two main components: costs at the source and destination ends. This document focuses on describing potential charges incurred on the AWS side. For calculating destination costs, we recommend using the calculator available at [https://calculator.oneprocloud.com/home](https://calculator.oneprocloud.com/home).

### AWS Cost Calculator

For hosts requiring data synchronization, key considerations include:

- Total disk capacity
- Data change rate based on Recovery Point Objectives (RPO)

When calculating AWS source-side costs, the main components include:

- **Sync Proxy EC2 Cost**: Used to establish a synchronization agent at the source for managing data transfers and synchronization operations.
- **Data Transfer Cost**: Involves the cost of network data transfer from the source to the destination. Costs may vary, especially for transfers across AWS regions or to other cloud providers.
- **Snapshot Storage Cost**: At least one snapshot needs to be kept for incremental data synchronization.
- **EBS Direct API Call Cost**: If utilizing EBS Direct API for snapshot operations, consider the corresponding API call charges.

### Sample

:::tip
The prices in this document are based on data from the AWS calculator as of June 20, 2024, in the Hong Kong region. For the latest data, please visit the [AWS calculator website](https://calculator.aws/#/).
:::

We assume there are 1 hosts, each with a disk capacity of 1TB and effective data of 500GB, with an RPO of 1 day and incremental data of 5%. We are backing up data to another cloud platform. Monthly cost calculations are as follows:

#### Sync Proxy

We use a c5.large EC2 instance with 2 cores and 4 GB of RAM, along with a dedicated public IP address. The monthly cost on an On-Demand basis is approximately $78.84

#### Snapshots

We need to keep at least one snapshot for comparing incremental changes during the next synchronization. Assuming we use a General Purpose SSD (gp2) volume type, the snapshot size was 500GB on the first day and 25GB on the second day. From the second day until the end of the month, the snapshot size remains 25GB (ignoring the overlap of two snapshots).

```
Initial snapshot cost for 1 Day: 500 GB x 0.0550000000 / 30 = 0.917 USD
Monthly cost of each snapshot: 25 GB x 0.0550000000 USD = 1.375 USD
Discount for partial storage month: 1.375 USD x 50% = 0.6875 USD
Incremental snapshot cost: 0.6875 USD x (30 - 1) = 19.9375 USD
Total snapshot cost: 0.917 USD + 19.9375 USD = 20.8545 USD
```

#### Data Transfer

The data transfer starts with 500GB on the first day and decreases to 25GB per day thereafter due to a 5% incremental change daily. Now, let's calculate the total data transfer over 30 days:

```
Initial day transfer: 500GB
Subsequent days transfer: 25GB per day

Total transfer = (Initial day transfer + Sum of subsequent days transfers)
Total transfer = 500GB + (25GB * 29 days)
Total transfer = 500GB + 725GB
Total transfer = 1225GB
Internet: 1225 GB x 0.12 USD per GB = 147.00 USD
```

#### EBS Direct API

Based on the calculation process provided, here's how you would determine the cost for managing 1225GB of data using AWS EBS Direct API operations:

Based on the calculation process provided, here's how you would determine the cost for managing 1225GB of data using AWS EBS Direct API operations:

##### Calculate Total Block Count:

```
Total data size in KiB = 1225 GB * 1024 * 1024 KiB/GB = 1,259,520,000 KiB
Block size = 512 KiB
Total blocks = Total data size / Block size = 1,259,520,000 KiB / 512 KiB = 2,456,250 blocks
```

##### Calculate GetSnapshotBlock API Cost:

```
Total SnapshotAPIUnits = Total blocks = 2,456,250 blocks
Cost per 1,000 SnapshotAPIUnits = $0.003
GetSnapshotBlock API cost = (Total SnapshotAPIUnits / 1,000) * Cost per 1,000 SnapshotAPIUnits
  = (2,456,250 / 1,000) * $0.003
  = 2,456.25 * $0.003
  = $7.36875
```

##### Calculate ListSnapshotBlocks and ListChangedBlocks API Cost:

```
Total requests for List APIs = Total blocks / 512 blocks per request
  = 2,456,250 blocks / 512 blocks per request
  ≈ 4,796.68 requests (rounded up from 4,796.6796875)
Cost per 1,000 requests = $0.0006
List APIs cost = (Total requests / 1,000) * Cost per 1,000 requests
  = (4,796.68 / 1,000) * $0.0006
  = 4.79668 * $0.0006
  = $0.002878008
```

##### Total Cost:

```
Total cost = GetSnapshotBlock API cost + List APIs cost
  = $7.36875 + $0.002878008
  ≈ $7.371628
```

Therefore, the estimated cost for managing 1225GB of data using AWS EBS Direct APIs is approximately **$7.37**. This calculation includes the costs for retrieving snapshot blocks and listing snapshot information based on the specified data size.

#### Summary

We assume there are 1 host, each with a disk capacity of 1TB and effective data of 500GB, with an RPO of 1 day and incremental data of 5%. We are backing up data to another cloud platform. Monthly cost calculations are as follows:

| Description                                             | Cost (USD)        |
|---------------------------------------------------------|-------------------|
| EC2 c5.large instance (On-Demand, monthly)               | $78.84            |
| Total snapshot cost                                      | $20.8545          |
| Internet data transfer (1225 GB x $0.12 per GB)          | $147.00           |
| EBS Direct API cost (for managing 1225GB of data)        | $7.37             |
| **Total Estimated Cost**                                 | **$254.0645**     |
