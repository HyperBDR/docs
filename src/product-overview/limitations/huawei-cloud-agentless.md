# Huawei Cloud Agentless Mode

## 1. Compatibility

The EVS Snapshot Consistency Group and CBR Disk Data Export API are newly released features of Huawei Cloud. Please verify that these APIs are officially available in your target region.

| **Component**               | **Version** | **Note**                                              |
| -------------------------- | ----------- | ----------------------------------------------------- |
| Huawei Cloud EVS Snapshot API | /v5        | Verify API availability in your target region         |
| Huawei Cloud CBR API      | /v3        | Verify API availability in your target region         |

### Required API Permissions

| **No.** | **Description**                      | **API Endpoint**                                               |
| ------- | ------------------------------------ | ------------------------------------------------------------- |
| 1       | Authentication                        | /v3/auth/tokens                                                |
| 2       | List Images                           | /v2/cloudimages                                                |
| 3       | List Volumes                          | /v2/{project\_id}/cloudvolumes/detail                         |
| 4       | List Server Details                   | /v1/{project\_id}/cloudservers/detail                         |
| 5       | List Buckets                          | ListBuckets                                                    |
| 6       | Create Bucket                         | CreateBucket                                                   |
| 7       | Delete Bucket                         | DeleteBucket                                                   |
| 8       | List Objects                          | ListObjects                                                    |
| 9       | Delete Object                         | DeleteObject                                                   |
| 10      | Read Object Data                      | GetObject                                                      |
| 11      | Create Export Data Bucket Authorization | /v3/domains/{domain\_id}/export-snapshot/agency               |
| 12      | Delete Export Data Bucket Authorization | /v3/domains/{domain\_id}/export-snapshot/agency/{agency\_id}  |
| 13      | Query Export Data Bucket Authorization  | /v3/{project\_id}/export-snapshot/agency                      |
| 14      | Create Consistency Snapshot Group      | /v5/{project\_id}/snapshot-groups                             |
| 15      | Delete Consistency Snapshot Group      | /v5/{project\_id}/snapshot-groups/{snapshot\_group\_id}       |
| 16      | Query Consistency Snapshot Group       | /v5/{project\_id}/snapshot-groups/{snapshot\_group\_id}       |
| 17      | List Volume Snapshots                 | /v5/{project\_id}/snapshots/detail                            |
| 18      | Create Snapshot Export Job            | /v3/{project\_id}/export-snapshot/jobs                        |
| 19      | Delete Snapshot Export Job            | /v3/{project\_id}/export-snapshot/jobs/{job\_id}              |
| 20      | Query Snapshot Export Job             | /v3/{project\_id}/export-snapshot/jobs/{job\_id}              |

### Required IAM permissions

The user group to which the user belongs needs to authorize two types of policies, one is system-defined policy and the other is custom policy.

#### System-defined policy

| **No.** | **Description**    | **Policy Name**                                                       |
| ------ | ----------- | ------------------------------------------------------------ |
| 1 | All permissions of ECS service.    | ECS FullAccess                                                      |
| 2 | Full permissions for Elastic Volume Service, including creating, expanding, attaching, detaching, querying, and deleting EVS disks.    | EVS FullAccess |
| 3 | Object Storage Service Administrator    | OBS Administrator  |
| 4 | Administrator permissions for CBR. Users granted these permissions can operate and use all vaults, backups, and policies.    | CBR FullAccess |
| 5 | All permissions of Image Management Service   | IMS FullAccess                                                     |
| 6 | All permissions of VPC service.    | VPC FullAccess                                                    |

#### custom policy

Custom policy content:

```
{
    "Version": "1.1",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "iam:roles:deleteRole",
                "iam:agencies:deleteAgency",
                "iam:roles:createRole",
                "iam:agencies:createAgency",
                "iam:permissions:grantRoleToAgency",
                "iam:permissions:revokeRoleFromAgency"
            ]
        }
    ]
}
```

## 2. Operating System Support

Click [Agentless Support Matrix](https://oneprocloud.feishu.cn/sheets/VRqksSPEPhRTPStp3kVcItXNnyh?sheet=Y9fpqO) to view the compatibility list and latest support status.

### Network Requirements

The Sync Proxy must have access to Huawei Cloud APIs.

### Limitations

**Feature Availability**

* The EVS Snapshot Consistency Group and CBR Disk Data Export APIs are new features. Verify their availability in your target region.

**Bandwidth and Speed Limitations**

* Maximum bandwidth per compute node: **500 MB/s**
* Single snapshot export job speed range: **25 MB/s to 300 MB/s**

**Concurrency and Quota Limitations**

* Maximum concurrent snapshot export jobs per node: **20** (additional jobs will be queued)
* When concurrent disk operations exceed the CBR snapshot export quota, host synchronization will fail and must wait for available quota

**Task Pause and Failure Handling**

* CBR snapshot export jobs **cannot be paused**. Even if paused in the HyperBDR console, the sync job continues until completion or failure, consuming quota
* When paused in HyperBDR or on failure, temporary data in storage buckets is **not automatically cleaned up** and will continue to incur charges. Cleanup occurs only on sync completion or host cleanup

**Synchronization Progress Display**

* Initial progress shown in HyperBDR console is an **estimated value (marked as [Estimated])**
* After all disk snapshot exports complete, actual synchronization progress is displayed if the host sync is still ongoing

**Storage Bucket Constraints**

* CBR exported snapshot data is temporarily stored in the specified bucket
* **Manual operations on bucket objects are prohibited** as they may corrupt data integrity, requiring forced full synchronization
* Temporary bucket space usage approximately equals effective data size, with some overhead due to fixed 2 MB export block size

**Shared Disks**

* Supports synchronization of Huawei Cloud shared data disks, but they can only be started as individual disks (not shared) on the target end

## 3. Common Huawei Cloud CBR Service Error Codes

| Error Name | Process | HTTP Code | Error Code | Error Message |
| ---------- | ------- | --------- | ---------- | ------------- |
| No API Permission | All APIs | 403 | BackupService.0403 | |
| Account Not Verified | All APIs | 403 | CSBS.9009 | User is unverified. |
| System Busy | All APIs | 500 | CSBS.9999 | The system is busy. Please try later. |
| Snapshot Export Not Supported | All APIs | 400 | BackupService.7469 | Snapshot export not support. |
| Identical base_snapshot_id and current_snapshot_id | Create API | 400 | CSBS.9001 | The current_snapshot_id and base_snapshot_id cannot be the same |
| Invalid base_snapshot_id Creation Time | Create API | 400 | CSBS.9001 | The creation time of base_snapshot_id must be earlier than current_snapshot_id |
| Invalid snapshot_id | Create API | 400 | CSBS.9001 | Invalid snapshot_id |
| Invalid snapshot_id Status | Create API | 400 | CSBS.9001 | Snapshot_id status is invalid |
| No Tenant Agency Information | Create API | 400 | CSBS.9001 | This current project has no agency info |
| Snapshot Export Jobs Exceed Limit | Create API | 400 | CSBS.9001 | The number of snapshot export jobs exceeds the maximum concurrency |
| Source Agency Creation Failed | Create API | 500 | BackupService.7475 | Create snap bucket authorization failed |
| Snapshot Export Job Creation Failed | Create API | 500 | BackupService.7467 | Create export snapshot job failed |
| Snapshot Export Job Not Found | Query/Delete API | 404 | BackupService.7466 | Export snapshot job (job_id) not found |
| Snapshot Export Job Already Deleted | Delete API | 400 | CSBS.9001 | The export snapshot job id: (job_id) already be canceled |
| Authorization Bucket Not Found | Create Agency API | 400 | CSBS.9001 | obs_bucket_name: (obs_bucket_name) is not exist |
| One Agency Per Tenant Limit | Create Agency API | 400 | CSBS.9001 | Each project can only create one agency |
| Agency Deletion Failed | Delete Agency API | 500 | BackupService.7468 | Delete export snapshot agency failed |

## 4. Data Synchronization Principles

Huawei Cloud Backup and Recovery (CBR) service provides a set of APIs for exporting data based on cloud disk snapshots. These APIs enable exporting cloud server disk data to specified storage buckets, which can then be transferred to the target end for backup. The core principles are:

* **Storage Bucket Authorization Management**: Provides APIs for creating, deleting, and viewing authorized storage buckets, ensuring data export security and legitimacy.

* **Data Export**: Offers APIs for exporting full and incremental cloud disk snapshot data to authorized buckets, enabling data capture at different time points.

* **Data Synchronization**: Achieves backup and synchronization by transferring data from authorized buckets to the target end.

* **Resource Cleanup**: Deletes bucket objects after data transfer during synchronization. After completion, removes created snapshots while retaining base snapshots until migration or backup is complete. (Temporary data exported to storage buckets follows Huawei Cloud's standard storage pricing model)

## 5. Resource and Cost Planning Example

### Source Environment

| Configuration Item | Parameters | Notes |
|-------------------|------------|--------|
| Number of Servers | 10 | |
| Disks per Server | 10 | |
| Disk Capacity | 100 GB | |
| Total Disk Capacity per Server | 1 TB (1000 GB) = 10 × 100 GB | |
| Total Data Volume Estimate | 10 TB = 10 servers × 1 TB/server | Total data volume for backup |

### Source Resource Usage During Synchronization

| **Resource** | **Resource Name** | **Description** |
|-------------|-------------------|-----------------|
| ECS | Sync Proxy Server (4 cores, 8GB) | Higher specifications recommended for faster sync |
| EVS | System Disk for Sync Proxy (200GB) | |
| EIP | Elastic IP for Sync Proxy (1000 Mbit/s) | Required for data export |
| EVS Snapshots | Source Server Disk Snapshots | Created during backup |
| OBS | Object Storage Bucket | For temporary data storage |

### Full Sync Resource Usage Statistics

| **Resource** | **Per Server** | **All Servers** |
|--------------|----------------|-----------------|
| Cloud Disk Snapshots | 10 snapshots | 100 snapshots |
| Snapshot Billing Duration | 1TB snapshot (retained as base) | 10TB snapshots (retained as base) |
| Object Storage Data | 1 TB (1000 GB) = 10 × 100 GB | 10 TB = 10 servers × 1 TB/server |
| Storage Billing Duration | 1h 20m = 10 × 14 min | 23h 20m = 10 × 1h 20m |

### Incremental Sync Resource Usage Statistics (5% Change Rate)

| **Resource** | **Per Server** | **All Servers** |
|--------------|----------------|-----------------|
| Cloud Disk Snapshots | 10 snapshots | 100 snapshots |
| Snapshot Billing Duration | 1TB + 5GB (5GB retained for 7min, 1TB retained as base) | 10TB + 500GB (500GB retained for 1h 10m, 10TB retained as base) |
| Object Storage Data | 50 GB = 10 × 5 GB | 500 GB = 10 servers × 50 GB/server |
| Storage Billing Duration | 7 min ≈ 10 × 40 sec | 1h 10m = 10 × 7 min |

### Conclusion

In Huawei Cloud Agentless mode, object storage is used only for temporary data storage during synchronization. Data is removed after successful sync, except during pause/stop operations. Storage usage approximately equals the transferred data volume. Storage duration correlates with transfer time, depending on data volume and network bandwidth. Key factors:

* Maximum object storage usage equals full data volume during full sync and change volume during incremental sync, without additional accumulation.
* Network bandwidth inversely affects transfer duration: higher bandwidth means faster transfer and shorter storage occupation.

Temporary Data Duration Formula:
Storage Duration = Sync Data Volume ÷ Actual Network Transfer Rate