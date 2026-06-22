# **Download Logs**

In HyperBDR, users can go to "O&M Management > Download Logs" to quickly collect logs from key components for troubleshooting.

## **DR**

### **Supported Resource Types**

| Resource Type     | Description                                      |
|-------------------|-------------------------------------------------|
| Console           | Management node logs, including core platform services |
| Sync Proxy        | Agentless hosts deployed via OVA template        |
| Linux Host        | Logs from Linux hosts with Agent installed       |
| Windows Host      | Logs from Windows hosts with Agent installed     |
| Cloud Sync Gateway| Gateway hosts automatically created at DR start  |

### **Page Field Descriptions**

| Field Name | Example         | Description                                         |
|------------|----------------|-----------------------------------------------------|
| Host Name  | onepro         | Name of the host, used to identify the device       |
| Host IP    | 192.168.7.141  | IP address of the host                              |
| Status     | Online         | Current status (offline hosts cannot collect logs)  |
| Log Status | Downloadable    | Status of host logs (click to view details)         |
| Action     | Collect        | Collect logs                                        |

### **Collection Example: Sync Proxy**

On the **"Download Logs > DR > Sync Proxy"** page, users can collect and download required log files as needed for troubleshooting and monitoring.

![operations-download-logs-dr-sync-proxy](./images/operations-download-logs-dr-sync-proxy.png)

#### **Log Collection**

Select the target host and click the "Collect" button in the corresponding row.

![operations-download-logs-dr-sync-proxy-collect-pointer](./images/operations-download-logs-dr-sync-proxy-collect-pointer.png)

#### **Select Time Range**

In the pop-up dialog, set the time range for the logs you want to collect. After confirming, the system will automatically start collecting logs.

![operations-download-logs-dr-syncproxy-time-range](./images/operations-download-logs-dr-syncproxy-time-range.png)

#### **Start Collection**

After confirming the time range, the system will automatically start collecting logs, and the log status will change to "Collecting".

![operations-download-logs-dr-sync-proxy](./images/operations-download-logs-dr-sync-proxy.png)

#### **Download Logs**

After log collection is complete, the status will update to **"Available"**. Users can click "Click for list" to see the log files and select files to download.

![operations-download-logs-dr-syncproxy-click-for-list](./images/operations-download-logs-dr-syncproxy-click-for-list.png)

## **Failback**

### **Supported Resource Types**

| Resource Type         | Description                                      |
|-----------------------|-------------------------------------------------|
| Failback Sync Proxy   | Agentless hosts deployed via OVA template        |
| Linux Host            | Logs from Linux hosts with Agent installed       |
| Windows Host          | Logs from Windows hosts with Agent installed     |
| Cloud Sync Gateway    | Gateway hosts automatically created at failback  |

### **Page Field Descriptions**

| Field Name | Example         | Description                                         |
|------------|----------------|-----------------------------------------------------|
| Host Name  | ubuntu-ova     | Name of the host, used to identify the device       |
| Host IP    | 192.168.7.202  | IP address of the host                              |
| Status     | Online         | (Offline hosts cannot collect logs)                 |
| Log Status | Downloadable    | Status of host logs (click to view details)         |
| Action     | Collect        | Collect logs                                        |

### **Collection Example: Cloud Sync Gateway**

On the **"Download Logs > Failback > Cloud Sync Gateway"** page, users can collect and download required log files as needed for troubleshooting and monitoring.

![operations-downloadlogs-failback-csg](./images/operations-downloadlogs-failback-csg.png)

#### **Log Collection**

Select the target host and click the "Collect" button in the corresponding row.

![operations-downloadlogs-failback-csg-collect-pointer](./images/operations-downloadlogs-failback-csg-collect-pointer.png)

#### **Select Time Range**

In the pop-up dialog, set the time range for the logs you want to collect. After confirming, the system will automatically start collecting logs.

![operations-downloadlogs-failback-csg-time-range](./images/operations-downloadlogs-failback-csg-time-range.png)

#### **Start Collection**

After confirming the time range, the system will automatically start collecting logs, and the log status will change to "Collecting".

![operations-downloadlogs-failback-csg](./images/operations-downloadlogs-failback-csg.png)

#### **Download Logs**

After log collection is complete, the status will update to **"Available"**. Users can click "Click for list" to see the log files and select files to download.

![operations-downloadlogs-failback-csg-click-for-list](./images/operations-downloadlogs-failback-csg-click-for-list.png)

