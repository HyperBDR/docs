# **Resources Group**

The Resources Group module is used to group, schedule, and orchestrate multiple related resources in the system (including hosts, networks, storage, and custom scripts) in a unified manner. Through the visual workflow canvas, you can predefine the startup dependency order of resources, disaster recovery verification scripts, and scheduled periodic tasks, ensuring that in the event of a disaster, business systems can automatically, quickly, and smoothly complete cross-environment recovery and takeover in the expected order.

## **Resource Group Management**

Log in to the HyperBDR console, and go to the **【Orchestration】>【Resources Groups】** page from the top navigation bar.

![drgroup-manage-1](./images/drgroup-manage-1.png)

Action buttons are provided above the list: **【Create DR Group】**, **【Create Workflow】**, **【Sync】**, **【Run】**, and **【Action】**; below them are the search and filter bars. The list columns clearly display the resource group name, resource sync status, boot status, task status, number of workflows, number of hosts, and storage capacity.

#### **View Details**

Each row in the resource group list provides three quick detail drill-down drawer entries:

![drgroup-manage-1](./images/drgroup-manage-1.png)

##### **View Associated Tasks**

Click **【Click to view tasks】** in the corresponding table row, and the drawer with all historical task execution records of the resource group will slide out on the right:

![drgroup-details-1](./images/drgroup-details-1.png)

- **View task details**: In the task list drawer, click **【Click for details】** to further expand the sub-steps, execution duration, and log details of the task:

  ![drgroup-details-2](./images/drgroup-details-2.png)

##### **View Associated Workflows**

Click **【Click to view workflows】** in the corresponding table row, and the drawer of all workflows already orchestrated for the current resource group will slide out on the right:

![drgroup-details-3](./images/drgroup-details-3.png)

##### **View Associated Resources**

Click **【Click for resources】** in the corresponding table row, and the drawer of host resources managed by the current resource group will slide out on the right:

![drgroup-details-4](./images/drgroup-details-4.png)

- **Data sync in the resource drawer**: After selecting the target host in the host resource drawer, click **【Sync】**, and the snapshot quota and sync policy window for that host will pop up:

  ![drgroup-details-5](./images/drgroup-details-5.png)

- **DR configuration in the resource drawer**: After selecting the target host in the host resource drawer, click **【Action】**, and the DR configuration information of that host will pop up. For details, refer to [Host DR](../dr/host-dr.md):

  ![drgroup-details-6](./images/drgroup-details-6.png)

### **Create DR Group**

Click the **【Create DR Group】** button in the upper left corner of the list, and the creation wizard window will pop up. Fill in the basic information of the resource group according to the wizard form:

![drgroup-createdrgroup-1](./images/drgroup-createdrgroup-1.png)

In the pending resource list on the left, check the target protected hosts, and click the **【>】** button in the middle (or drag and drop directly) to add them to the selected resource column on the right (the **【<】** button in the middle can remove selected hosts):

![drgroup-createdrgroup-2](./images/drgroup-createdrgroup-2.png)

##### **Parameter Description**

| Parameter | Required | Description |
| :--- | :---: | :--- |
| **Name** | Yes | Custom unique identifier name of the resource group |
| **Description** | No | Remarks and business description of the resource group |
| **Associated Resources** | Yes | Check the target protected host resources to be added to the current resource group |

::: warning Note
Hosts on generic platforms cannot be added to resource groups.
:::

### **Create Workflow**

Check the target resource group in the resource group list, and click the **【Create Workflow】** button above the list. The visual workflow orchestration canvas will pop up:

- **Customize the workflow name**: In the menu bar at the top of the canvas, click the workflow name on the right to customize it.

![drgroup-createworkflow-3](./images/drgroup-createworkflow-3.png)

- **Common canvas tools**: The middle area of the top menu bar provides common canvas operations, supporting undo, zoom in, zoom out, and dragging the canvas.

![drgroup-createworkflow-2](./images/drgroup-createworkflow-2.png)

- **Workflow control bar**: The left area of the top menu bar provides workflow run, retry, environment variable configuration, and save functions, which can be used to edit the workflow, configure the runtime environment, and test the execution of the workflow.

![drgroup-createworkflow-1](./images/drgroup-createworkflow-1.png)

#### **Step 1: Select Run Mode**

Click the root node card, and select the run mode of the workflow in the right panel (【Disaster Recovery Drill】 or 【Disaster Recovery Takeover】):

![drgroup-createworkflow-4](./images/drgroup-createworkflow-4.png)

#### **Step 2: Add Nodes (Resources and Tools)**

Click the **【+】** (add node) button next to the node, and select the required node types in the pop-up node selection window. The panel supports two major categories: 【Resources】 and 【Tools】:

![drgroup-createworkflow-5](./images/drgroup-createworkflow-5.png)

| Node Category | Node Name | Description |
| :--- | :--- | :--- |
| **Resources** | **Host** | Add protected host nodes, and orchestrate the startup order and dependencies of hosts |
| **Tools** | **Remote Linux Command Execution** | Send and execute custom commands or O&M scripts on the target host |
| | **Conditional Branch** | Split the workflow into different branches based on the execution status or conditional expressions |
| | **Remove Sync Policy** | Remove the data sync policy currently bound to the parent resource node |
| | **Stop Sync** | Force stop the data sync task being executed by the parent resource node |
| | **Clean Up Validation Resources** | Clean up only the disaster recovery validation resources started on the target side corresponding to this node |

- **Add a protected host node**: Select the 【Host】 node type, and check the target protected hosts in the pop-up host resource list:

  ::: tip
  Each host can only be selected once.
  :::

  ![drgroup-createworkflow-6](./images/drgroup-createworkflow-6.png)

  After confirmation, the host node cards and their topology connections will be generated on the canvas:

  ![drgroup-createworkflow-7](./images/drgroup-createworkflow-7.png)

- **Add a tool node**: After the added host node, continue to click the **【+】** (add node) entry, and select downstream nodes such as 【Remote Linux Command Execution】:

  ![drgroup-createworkflow-8](./images/drgroup-createworkflow-8.png)

  Select 【Remote Linux Command Execution】 in the pop-up node list:

  ![drgroup-createworkflow-9](./images/drgroup-createworkflow-9.png)

  After confirmation, the remote command execution node and its upstream/downstream dependency lines will be generated on the canvas:

  ![drgroup-createworkflow-10](./images/drgroup-createworkflow-10.png)

#### **Step 3: Configure Node Properties**

Click the target node card on the canvas, and the properties panel will slide out on the right side of the page, where you can configure basic information, connection credentials, execution scripts, or environment variables as needed:

![drgroup-createworkflow-11](./images/drgroup-createworkflow-11.png)

::: tip Best Practices
For end-to-end disaster recovery orchestration scenarios of enterprise-level multi-layer business architectures (such as WordPress + MySQL HA), automated switchover script specifications, and practical drill cases, refer to [HyperBDR Orchestration Best Practices](../../technical-practices/hyperbdr-orchestration-best-practices.md).
:::

### **Sync**

Check the target resource group in the resource group main list, and click the **【Sync】** button above the list. The system will initiate group-wide data sync for all associated hosts in the resource group:

![drgroup-sync-1](./images/drgroup-sync-1.png)

### **Run**

Check the target resource group in the resource group main list, and click the **【Run】** button above the list. The system will pop up the workflow detail list drawer, displaying the workflows bound to the resource group:

![drgroup-run-1](./images/drgroup-run-1.png)

#### **Modify**

After checking the workflow, click the **【Modify】** button above the list to enter the visual workflow orchestration canvas, where the saved node topology and configuration parameters can be edited:

![drgroup-run-2](./images/drgroup-run-2.png)

#### **Run**

After checking the target workflow, click the **【Run】** button above the list. The run parameter confirmation window will pop up, where you can select the recovery time point and advanced settings for each host before initiating the run:

![drgroup-run-3](./images/drgroup-run-3.png)

#### **Retry**

When the workflow fails or some nodes become abnormal, click the **【Retry】** button to re-initiate the execution of the failed nodes and downstream tasks.

#### **Action**

After selecting the workflow, click the **【Action】** dropdown menu to perform the following operations on the workflow:

![drgroup-run-5](./images/drgroup-run-5.png)

##### **Associate Scheduled Task**

Click **【Action】>【Associate Scheduled Task】**, and select the scheduled task to be bound in the pop-up window to enable scheduled automatic scheduling of the workflow:

![drgroup-run-4](./images/drgroup-run-4.png)

##### **Remove Scheduled Task**

Click **【Action】>【Remove Scheduled Task】** to unbind the workflow from the associated scheduled task. After removal, the scheduled task will no longer automatically trigger the workflow.

##### **Delete**

Click **【Action】>【Delete】**, and click **【Submit】** in the secondary confirmation window to completely delete the orchestration workflow:

![drgroup-workflow-8](./images/drgroup-workflow-8.png)

### **Action**

Check the target resource group in the resource group list, and click the **【Action】** dropdown menu at the top of the list:

![drgroup-action-1](./images/drgroup-action-1.png)

#### **Basic Info**

Click **【Action】>【Basic Info】** to view or edit the basic information of the current resource group (including the resource group name and description) in the pop-up window:

![drgroup-action-2](./images/drgroup-action-2.png)

#### **Associated Resources**

Click **【Action】>【Associated Resources】** to view the list of protected hosts managed by the current resource group in the pop-up window, and adjust or transfer the associated hosts:

![drgroup-action-3](./images/drgroup-action-3.png)

#### **Clean Up Validation Resources**

Click **【Action】>【Clean Up Validation Resources】**, and confirm in the secondary confirmation window to release all target-side cloud test validation instances and associated resources started by the current resource group during the disaster recovery drill:

![drgroup-action-4](./images/drgroup-action-4.png)

#### **Delete Resource Group**

Click **【Action】>【Delete Resource Group】**, and click **【Submit】** in the secondary confirmation dialog to completely delete the metadata logic configuration of the resource group:

![drgroup-action-5](./images/drgroup-action-5.png)

::: warning Operation Impact
Cleaning up validation resources only releases the test validation instances started on the cloud, and does not affect source production hosts or synchronized data. Deleting a resource group only deletes the metadata logic, and host data will be fully retained.
:::

## **Workflow Management**

Click **【Workflows】** in the left navigation bar to centrally view and manage all orchestration workflows created in the system:

![drgroup-workflow-1](./images/drgroup-workflow-1.png)

#### **View Workflow Tasks**

Click the target workflow name directly in the workflow list, and the drawer of execution topology details and historical task records of the workflow will slide out on the right:

![drgroup-workflow-2](./images/drgroup-workflow-2.png)

### **Modify**

Select the target workflow in the workflow list, and click the **【Modify】** button above the list:

![drgroup-workflow-3](./images/drgroup-workflow-3.png)

The system will reopen the visual orchestration canvas, where the saved workflow node topology and configuration parameters can be edited:

![drgroup-workflow-4](./images/drgroup-workflow-4.png)

### **Run**

Check the target workflow in the workflow list, and click the **【Run】** button above the list (or click the run icon in the operation column directly). The workflow run parameter confirmation window will pop up:

![drgroup-workflow-5](./images/drgroup-workflow-5.png)

In the pop-up run configuration window, you can view the number of bootable resources managed by the workflow, protected host names, host IPs, storage types, target cloud platforms, and restore point snapshots, and expand **【Advanced Settings】** to adjust startup parameters. After confirming everything is correct, click **【Submit】** to trigger the workflow execution.

### **Retry**

When the workflow fails during execution due to exceptions such as network jitter, insufficient target resource quota, or script execution timeout, the **【Retry】** button above the list (and the retry icon in the operation column) will be activated.

Check the failed workflow in the workflow list, and click the **【Retry】** button. The system will continue execution from the failure breakpoint of the failed node, or re-trigger the workflow according to the preset retry policy, without reconfiguring and running from scratch.

::: tip Retry Availability
The **【Retry】** button is available only when the last execution status of the workflow is failed. For workflows that have never been executed or whose last execution succeeded, the button is grayed out.
:::

### **Action**

After selecting the target workflow, click the **【Action】** dropdown menu in the operation column:

![drgroup-workflow-6](./images/drgroup-workflow-6.png)

#### **Associate Scheduled Task**

Click **【Action】>【Associate Scheduled Task】**, and select a created scheduled task policy in the pop-up window for binding, so that the workflow can be automatically executed periodically according to the preset plan:

![drgroup-workflow-7](./images/drgroup-workflow-7.png)

#### **Remove Scheduled Task**

If the current workflow is bound to a scheduled task, click **【Action】>【Remove Scheduled Task】** to unbind it. After removal, the workflow will no longer be triggered periodically by the scheduled task, but the workflow itself is unaffected.

::: note Check Before Deletion
Before deleting a workflow, make sure it is not associated with any enabled scheduled task. If there is an association, unbind it here first.
:::

#### **Delete**

Click **【Action】>【Delete】**, and click **【Submit】** in the secondary confirmation dialog to completely delete the workflow configuration:

![drgroup-workflow-8](./images/drgroup-workflow-8.png)

::: warning Operation Impact
Deleting a workflow only deletes its metadata orchestration logic and topology configuration, and does not delete source host data or underlying snapshots.
:::

## **Scheduled Tasks**

Click **【Scheduled Tasks】** in the left navigation bar to configure and schedule scheduled automatic disaster recovery tasks in a unified manner:

![drgroup-scheduledtasks-1](./images/drgroup-scheduledtasks-1.png)

### **Create**

Click the **【Create】** button in the upper left corner of the page, and the scheduled task creation wizard window will pop up:

![drgroup-scheduledtasks-2](./images/drgroup-scheduledtasks-2.png)

- **Configure the time cycle and scheduling parameters**: Set the execution cycle (such as every N hours, every N days) and the specific number of hours:
  ![drgroup-scheduledtasks-3](./images/drgroup-scheduledtasks-3.png)
- **View Execution Time**: Click **【View Execution Time】** at the bottom of the form to preview the specific trigger time points of future cycles:
  ![drgroup-scheduledtasks-4](./images/drgroup-scheduledtasks-4.png)

##### **Configuration Description**

| Configuration Item | Description |
| :--- | :--- |
| **Name** | Custom unique name of the scheduled task |
| **Time Zone** | Time zone in which the scheduled task takes effect, defaulting to (GMT+08:00) Asia/Shanghai |
| **Start Time** | Time when the scheduled task takes effect and is executed for the first time |
| **Task Status** | Switch control, enabled by default |
| **Type** | Supports time cycle and advanced settings (Crontab expression) |
| **Cycle** | Supports every N hours, every N days, weekly, and monthly |

### **Action**

Select the target scheduled task in the list, and click the **【Action】** menu:

![drgroup-scheduledtasks-5](./images/drgroup-scheduledtasks-5.png)

#### **Modify**

Click **【Action】>【Modify】** to re-edit the basic information and scheduling cycle policy of the scheduled task:

![drgroup-scheduledtasks-6](./images/drgroup-scheduledtasks-6.png)

#### **Enable**

Click **【Action】>【Enable】** to enable a scheduled task that is in the paused state:

![drgroup-scheduledtasks-7](./images/drgroup-scheduledtasks-7.png)

#### **Disable**

Click **【Action】>【Disable】** to pause the periodic scheduling of the scheduled task:

![drgroup-scheduledtasks-8](./images/drgroup-scheduledtasks-8.png)

#### **Associated Workflows**

Click **【Action】>【Associated Workflows】** to view and manage the disaster recovery workflows bound to the scheduled task in the pop-up window:

![drgroup-scheduledtasks-9](./images/drgroup-scheduledtasks-9.png)

#### **Unbind Workflows**

Click **【Action】>【Unbind Workflows】** to unbind the scheduled task from the associated workflows.

#### **Delete**

Click **【Action】>【Delete】**, and click **【Submit】** in the confirmation prompt to delete the scheduled task:

![drgroup-scheduledtasks-10](./images/drgroup-scheduledtasks-10.png)

::: warning Deletion Restriction
A scheduled task associated with workflows cannot be deleted directly. Remove its association with the workflows first.
:::

## **Workflow Settings**

Click **【Workflow Settings】** in the left navigation bar to configure the global workflow concurrency and timeout policies of the system:

![drgroup-workflowsettings-1](./images/drgroup-workflowsettings-1.png)

### **Max Concurrent Hosts**

Configure the maximum number of hosts that a running workflow can process concurrently:

![drgroup-workflowsettings-2](./images/drgroup-workflowsettings-2.png)

### **Default Timeout per Node**

Set the global default timeout limit for a single node such as command execution:

![drgroup-workflowsettings-3](./images/drgroup-workflowsettings-3.png)

##### **Parameter Description**

| Configuration Item | Description |
| :--- | :--- |
| **Max Concurrent Hosts** | The maximum number of hosts that each running workflow can process concurrently |
| **Default Timeout per Node** | Sets the default maximum timeout for custom command nodes. If not completed within the timeout, execution will be interrupted and an alert will be triggered |
| **Failure Interruption Policy** | When a node in the workflow fails, determines whether to terminate subsequent execution or skip non-critical nodes and continue running |
