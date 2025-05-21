# **Daliy Operation Maintenance**

## **Routine Checks**

### **System Health Check**

* **Console Status**: Log in to the HyperBDR Operations & Maintenance Management Platform and check the running status of each module, as well as the usage of key resources such as CPU, memory, and storage.

![](./images/dailyoperationandmaintenance-dailycheck-1.png)

* **Backup Task List**: Review the execution status of all backup tasks to confirm if there are any failed or excessively delayed tasks.

![](./images/dailyoperationandmaintenance-dailycheck-2.png)

* **Logs and Alerts**: Use the log management module to check for abnormal alerts or error logs.

![](./images/dailyoperationandmaintenance-dailycheck-3.png)

### **Network Connectivity**

* Ensure that the network connection between the source (production environment) and the target (disaster recovery environment or cloud platform) is stable and has sufficient bandwidth.

* If using VPN, dedicated line, or VPC Endpoint, regularly check the tunnel status.

![](./images/dailyoperationandmaintenance-dailycheck-4.png)

### **Cloud Accounts and Authorization**

* Regularly verify the validity of cloud platform accounts and check if any keys have expired.

* Review account permissions to avoid excessive privileges or missing critical permissions that could cause backup or recovery failures.

![](./images/dailyoperationandmaintenance-dailycheck-5.png)

## **Resource Monitoring and Backup Task Inspection**

### **Resource Monitoring**

* **Storage Space**: Check the remaining capacity of object storage, block storage, and database storage. If space is insufficient, expand capacity or clean up historical snapshots in time.

![](./images/dailyoperationandmaintenance-resourcemonitoringandbackuptaskinspection-1.png)

* **Network Throughput**: Monitor bandwidth usage during backup peak periods. Upgrade bandwidth or adjust backup schedules as needed.

![](./images/dailyoperationandmaintenance-resourcemonitoringandbackuptaskinspection-2.png)

### **Backup Task Inspection**

* **Backup Strategy**: Review backup strategies (full/incremental) weekly or monthly, and adjust backup frequency and retention periods according to business changes.

![](./images/dailyoperationandmaintenance-resourcemonitoringandbackuptaskinspection-3.png)

* **Data Consistency Check**: Regularly verify backup data or perform sample recovery tests to ensure data integrity and availability.

![](./images/dailyoperationandmaintenance-resourcemonitoringandbackuptaskinspection-4.png)

* **Handling Abnormal Tasks**: Analyze the causes of failed backup tasks (network, permissions, storage space, etc.), fix issues promptly, and re-execute the tasks.

![](./images/dailyoperationandmaintenance-resourcemonitoringandbackuptaskinspection-5.png)

## **Log Export**

The log management feature allows you to quickly collect logs from service components for further analysis and troubleshooting when issues occur.

* Console

* Source Sync Proxy

* Linux Host

* Windows Host

![](./images/dailyoperationandmaintenance-logexport-1.png)