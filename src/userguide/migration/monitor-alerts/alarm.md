# **Alert Rules**

To ensure system security, stability, and visibility into critical events, the platform includes built-in alert rule functionality. It monitors the operating status and resource utilization of migration hosts in real time and triggers alert notifications upon detecting anomalies, enabling operations personnel to promptly discover and address issues while minimizing the impact on business systems.

> **Best practices for alert configuration**: refer to the "Monitoring & Alerts → Alarm Best Practice" chapter in the O&M Guide for detailed configuration recommendations and operational guidance.

## **Resource Rules**

In the system menu, navigate to:
**【Monitoring & Alerts】>【Alert Rules】>【Resource Alert】>【Create Alert】**

After navigating to the creation page, configure the relevant parameters based on your needs and save to complete the creation of **Migration** and **Failback** alert rules.

![](./images/alarm-resourcealert-1.png)

### **Create Alert**

#### **Alert Rule Configuration Field Description**

| **Field Name** | **Example** | **Description** |
| :--- | :--- | :--- |
| **Rule Type** | Resource Alert Rule | Select the classification or intended purpose of the alert rule, used to distinguish between different monitoring strategies. |
| **Rule Name** | test | Custom name for the alert rule, used for identification and management. |
| **Alert Level** | Critical | Specifies the severity of the alert, such as: Info, Critical, Emergency. |
| **Status** | Enabled | Sets whether the alert rule is enabled. When enabled, the system monitors and alerts according to the configured rule. |
| **Resource Type** | Sync Proxy | The type of resource monitored by the alert rule. Common resource types include:<br>+ Sync Proxy<br>+ Cloud Sync Gateway<br>+ Linux Agent<br>+ Windows Agent<br>+ Object Storage Resources |
| **Monitored Resource** | ubuntu-ova | Select the target resource objects to monitor (multiple can be added). The system will continuously monitor them based on configuration. |
| **Metric** | CPU | Sets the specific metric items to monitor. Supported items include:<br>+ CPU<br>+ Disk<br>+ RAM<br>+ Process |
| **Trigger Rule** | ≥ 80%, for 5 minutes | Defines the condition that triggers an alert, e.g., when a metric exceeds a preset threshold for a specified duration. |
| **Check Interval** | 5 minutes | Sets the time interval at which the system checks metric statuses. |
| **Notification Recipient** | | Specifies the recipients (users or user groups) to notify once an alert is triggered. |
| **Rule Description** | | Optional notes or description documenting the purpose of the alert rule for easier management and review. |

#### **Monitored Resource Types**

| **Resource Type** | **Metrics** | **Description** |
| :--- | :--- | :--- |
| **Sync Proxy** | CPU, RAM, Disk, Process | Monitors resource utilization and process status of the source sync proxy. |
| **Cloud Sync Gateway** | CPU, RAM, Disk, Process | Monitors resource utilization and process status of the cloud sync gateway. |
| **Linux Agent** | CPU, RAM, Disk, Process | Monitors resource utilization and process status of Linux Agents. |
| **Windows Agent** | CPU, RAM, Disk, Process | Monitors resource utilization and process status of Windows Agents. |
| **Object Storage Resources** | Object Storage Capacity | Monitors storage capacity usage. |

![](./images/alarm-resourcealert-2.png)

- Once an alert rule is created, the system will automatically trigger alerts when corresponding events occur and send notifications through designated channels based on associated notification recipients. Meanwhile, related alert messages will appear on the "Alert Messages" page for centralized review and resolution.

![](./images/alarm-resourcealert-3.png)

### **Action**

#### **Edit**

- Click **【Edit】** to navigate to the editing page, where you can re-edit and adjust the configuration of the created alert rule.

![](./images/alarm-resourcealert-4.png)

#### **Enable**

- Enabled alert rules cannot be modified. To change the configuration, please disable the alert rule first.

![](./images/alarm-resourcealert-5.png)

#### **Disable**

- Disabled alert rules cannot be modified. To change the configuration, please enable the alert rule first.

![](./images/alarm-resourcealert-6.png)

#### **Remove**

- Click **【Remove】** to trigger a secondary confirmation. After confirmation, the system will delete the alert rule.

![](./images/alarm-resourcealert-7.png)

## **Event Rules**

In the system menu, navigate to:
**【Monitoring & Alerts】>【Alert Rules】>【Event Alert】>【Create Alert】**

After navigating to the creation page, configure the relevant parameters based on your needs and save to complete the creation of the **Migration** alert rule.

![](./images/alarm-eventalert-1.png)

### **Create Alert**

#### **Alert Rule Configuration Field Description**

| **Field Name** | **Example** | **Description** |
| :--- | :--- | :--- |
| **Rule Type** | Event Alert Rule | Sets the type of alert rule. Event alert rules monitor critical operational actions and abnormal states, triggering alert notifications upon occurrence. |
| **Rule Name** | test | Custom name for the alert rule, used for identification and management. |
| **Alert Level** | Critical | Severity level when the event is triggered (e.g., Info, Critical, Emergency). |
| **Status** | Enabled | Specifies whether the current alert rule is active. When enabled, the system monitors and alerts based on the rule. |
| **Event Type** | User Resource / Login | Category of event to monitor. Supported categories include:<br>+ User Resource<br>+ Migration Host Resource<br>+ License Resource<br>+ Production Site Resources<br>+ Migration Platform Resources<br>+ Monitoring Alarm Resource Group<br>+ Object Storage<br>+ Migration Policies |
| **Event Result** | Success | Specifies the execution outcome condition that triggers the alert (e.g., Success, Failure). |
| **Notification Recipient** | Associated Notification Recipient | The recipients (personnel or notification groups) notified when an alert triggers, enabling prompt response by stakeholders. |
| **Rule Description** | — | Brief overview of the alert rule's function or purpose for ease of recognition and maintenance. |

#### **Event Type Descriptions**

| **Event Type** | **Alert Conditions (Examples)** | **Description** |
| :--- | :--- | :--- |
| **User Resources** | Login, Logout, Modify phone number, Change password, Reset password | Events related to user account login, authentication, and credential modifications. |
| **Host Resources** | Add migration host configuration, Boot host, Clean resources, Force abort task, Host disconnected/recovered, Snapshot integrity check, Sync host, Takeover host migration, Resource limits, etc. | Key events relating to migration host tasks, status monitoring, and resource operations. |
| **License Resources** | Add License | Critical events relating to system license status, validity period, and authorization exceptions. |
| **Source Resources** | Add/Delete Linux or Windows agent, Add/Delete/Bind sync proxy and connections, Reload VM agent, Connection status changes, etc. | Events relating to agent deployment management and connection status in production environments. |
| **Target Resources** | Add/Delete/Modify cloud platform, Create/Delete cloud sync gateway, and related process events | Operations relating to migration platform infrastructure components and deployment status. |
| **Monitoring Alarm** | Create/Modify/Delete alert rules and notification recipients | Operational events relating to monitoring alert configurations and alert dispatch mechanisms. |
| **Object Storage** | Add/Delete/Update object storage, Start add/delete operations | Events relating to storage integration, configuration changes, capacity updates, and access anomalies. |
| **Policies** | Create/Delete/Modify policies, Associate/Disassociate policies | Events relating to the full lifecycle management of migration plan policy configurations. |

![](./images/alarm-eventalert-2.png)

- Once an alert rule is created, the system will automatically trigger alerts when corresponding events occur and send notifications through designated channels based on associated notification recipients. Meanwhile, related alert messages will appear on the "Alert Messages" page for centralized review and resolution.

![](./images/alarm-eventalert-3.png)

### **Action**

#### **Edit**

- Click **【Edit】** to navigate to the editing page, where you can re-edit and adjust the configuration of the created alert rule.

![](./images/alarm-eventalert-4.png)

#### **Enable**

- Enabled alert rules cannot be modified. To change the configuration, please disable the alert rule first.

![](./images/alarm-eventalert-5.png)

#### **Disable**

- Disabled alert rules cannot be modified. To change the configuration, please enable the alert rule first.

![](./images/alarm-eventalert-6.png)

#### **Remove**

- Click **【Remove】** to trigger a secondary confirmation. After confirmation, the system will delete the alert rule.

![](./images/alarm-eventalert-7.png)
