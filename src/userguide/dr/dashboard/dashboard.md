# **Dashboard Overview**

The dashboard provides an overview of the production platform, data storage, and disaster recovery (DR) platform in the current environment. It helps users quickly understand the status of system resources, sync progress, task results, alert events, and other key information, supporting unified monitoring and decision-making for administrators.

## **Page Structure and Function Description**

This section helps users quickly understand the purpose and navigation of each module. By explaining each area of the page, users can fully grasp the system's entry points and core resource status, providing guidance for further operations and management.

### **Top Navigation Bar**

The top navigation bar provides quick access to the main system modules, including: **Dashboard, DR, Orchestration, Configuration, Operations, Monitor & Alerts, Settings**.

The upper right area displays the current logged-in user, system time (with time zone), and language settings for easy viewing and personalization.

### **Core System Structure Overview**

Shows the three core components of the system architecture: **Production → Storage → DR Site**

![](./images/overviewhomepagedescription-pagestructureandfunctiondescription-1.png)

### **Section Descriptions**

The dashboard displays the current status and operational data of various resources, including production platform, DR policies, sync progress, storage configuration, resource recovery drills, and alert events. Each section supports navigation to the corresponding module page for more details and actions.

#### **Production**

Displays an overview of production resources connected to the system, including the total number of hosts and their running status, helping users quickly understand the overall load of the production environment.

Click the **Details** button in the lower right to go to the DR resources page for detailed host information and DR configuration status.

![](./images/overviewhomepagedescription-pagestructureandfunctiondescription-2.png)

#### **DR Group**

Shows the number of DR groups configured in the system, helping users understand the DR configuration status of resource groups.

Click the **Details** button in the lower right to go to the DR group page for detailed configuration and DR status of each group.

![](./images/overviewhomepagedescription-pagestructureandfunctiondescription-3.png)

#### **DR Policy**

Displays the DR policy configuration status for production hosts, helping users quickly identify how many hosts are protected by DR.

Click the **Details** button in the lower right to go to the "Start DR" page, where you can select target hosts and associate policies.

![](./images/overviewhomepagedescription-pagestructureandfunctiondescription-4.png)

#### **Data Sync**

Shows the overall progress of data synchronization from source hosts, which is an important indicator of DR readiness.

Click the **Details** button in the lower right to go to the "Start DR" page, where you can select hosts and perform immediate sync operations.

![](./images/overviewhomepagedescription-pagestructureandfunctiondescription-5.png)

#### **Storage Pool**

##### **Object Storage**

Displays the number of configured object storage pools and their capacity usage, helping users understand overall storage resource usage.

Click the **Details** button in the lower right to go to the storage configuration page for object storage management.

![](./images/overviewhomepagedescription-pagestructureandfunctiondescription-6.png)

##### **Cloud Sync Gateway**

Click the **Details** button in the lower right to go to the storage configuration page for block storage management.

![](./images/overviewhomepagedescription-pagestructureandfunctiondescription-7.png)

#### **Restore / DR**

The "Restore / Drill" area shows the recovery status of DR resources on the platform, helping users quickly understand resource protection and drill status.

##### **Restore**
Shows the number of resources under "Restore" management, as well as the number of resources in restoring, restored, and failed states.

##### **DR**
Shows the number of resources under "Drill" management, as well as the number of resources in drilling, drill success, and drill failure states.

Click the **Details** button in the lower right to go to the "Start DR" page for drill and takeover operations on hosts.

![](./images/overviewhomepagedescription-pagestructureandfunctiondescription-8.png)

#### **DR Site**

Displays the number of successfully and unsuccessfully connected DR sites, as well as detailed configuration information.

Click the **Details** button to go to the "Start DR" page for related operations.

![](./images/overviewhomepagedescription-pagestructureandfunctiondescription-9.png)

#### **DR Resources Monitoring & Analysis**

This module provides real-time statistics and visualizations of the overall health, configuration, and usage of key DR resources, helping users quickly understand the stability of the DR system.

Users can select different monitoring resources from the dropdown list. Supported resource types and monitoring metrics include:

| **Resource Type**      | **Monitoring Metrics**  |
| ------------- | --------- |
| Sync Proxy        | CPU Usage, Network (bytes) |
| Cloud Sync Gateway         | CPU Usage, Network (bytes) |
| Linux Agent   | CPU Usage, Network (bytes) |
| Windows Agent | CPU Usage, Network (bytes) |

Click the **Details** button in the upper right to go to the system monitoring page for more information.

![](./images/overviewhomepagedescription-pagestructureandfunctiondescription-13.png)

#### **Events**

This module displays key dynamic information related to the user, helping users quickly understand system status and task progress through real-time event aggregation and classification.

Click the **Operation Log** button in the upper right to go to the audit log page for detailed event logs.

![](./images/overviewhomepagedescription-pagestructureandfunctiondescription-10.png)

#### **Alert**

Displays alert messages triggered by the alarm system, helping users stay informed of system exceptions.

Click the **Details** button in the upper right to go to the alert messages page for more information.

![](./images/overviewhomepagedescription-pagestructureandfunctiondescription-11.png)

#### **License Status**

Shows the number, usage status, and validity of activation codes, helping administrators efficiently manage license resources.

Click the **Details** button in the upper right to go to the license management page for more information and to add or export licenses.

![](./images/overviewhomepagedescription-pagestructureandfunctiondescription-12.png)

#### **Carbon Footprint**

User's carbon emission data is calculated based on the usage of cloud resources. When calculating the carbon emissions data for cloud products, factors such as Power Usage Effectiveness (PUE) of different cloud data centers in different countries or regions, resource sales, the proportion of renewable energy usage, and technological carbon reduction measures are taken into account. Therefore, the calculated carbon emissions data may vary for different regions or within different months, which is considered normal.

The cloud product carbon footprint covers various cloud products, including computing, storage, networking, databases, CDN, etc. During the calculation process, only the resources generated in actual business scenarios are taken into account.