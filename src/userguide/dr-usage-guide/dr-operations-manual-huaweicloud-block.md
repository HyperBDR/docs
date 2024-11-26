# DR OM Block Storage

[[toc]]

# I. Disaster Recovery Scenario Overview

This user guide explains the use of HyperBDR to backup various types of hosts from the source platform to Huawei public cloud by supporting Block storage.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-1.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-1.png)

# II. Basic requirements

- The hosts (VMware virtual machines) that need to be protected against disasters.

- Installation of HyperBDR disaster recovery tool and the login credential.

- Block storage.

# III.  Workflow

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-2.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-2.png)

# IV. Disaster Recovery Operations

## 1. Configure the Production Platform 

### 1.1. Log in to HyperBDR Disaster Recovery Tool 

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-3.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-3.png)

### 1.2. Disaster Recovery of VMware Virtual Machines to Huawei Cloud

#### 1.2.1. Configuring the Production Platform (VMware)

**[Note]**

- When the source  ( the host to be protected) is a VMware virtual machine, relevant configurations need to be performed.

- This scenario can achieve agentless disaster recovery, meaning that there is no need to install an agent in each VMware virtual machine to achieve non-intrusive operations.

**[Basic requirements]**

- A vCenter/ESXi cluster

- Installation of VMware vSphere Client and login to the vCenter/ESXi cluster.

- Installation of HyperBDR disaster recovery tool and the login credential.

- Enable the network policy for the VMware virtual machines on production platform to HyperBDR and the cloud synchronization gateway.

**Step 1:** Click **"Configuration"**, click on **"Production Site"** in the left menu, and than click the **""+Add""** button to add the agentless proxy component **"Hamal"** in the **VMware** tab.  

>  For the initial addition of VMware, you need to install the **"Hamal"** component (refer to Step 2).

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-4.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-4.png)

**Step 2:** Install Hamal as per the prompts

> If you have already installed Hamal as outlined in the VMware DR Solution POC Preparation Doc, you can proceed directly to **Step 3**.

(1) Download the OVA to the VMware end or prepare a CentOS7.x version virtual machine at the source end.

(2) Install the agent by executing the installation command in the background of the host imported through OVA or the prepared CentOS7.x virtual machine.

:::tip
Please operate according to the current display information on the disaster recovery tool. This action is performed by the user in the VMware vSphere Client environment
:::

(3) After installation, return to the disaster recovery tool and click on the **"Next"** button.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-6.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-6.png)

> _Please refer to the following document for the procedure to deploy Hamal on the VMware side using the OVA template._
> _Documentation Link: _[_https://docs.oneprocloud.com/userguide/poc/vmware-pre-settings.html#import-ova-images-and-create-proxy-virtual-machine-in-vmware_](https://docs.oneprocloud.com/userguide/poc/vmware-pre-settings.html#import-ova-images-and-create-proxy-virtual-machine-in-vmware)

**Step 3:** Fill in the relevant information in the pop-up box to complete configurations


| **Auth Url** | vCenter/ESXi Url |
| --- | --- |
| **Username** | vCenter/ESXi Account (Administrator Privileges)  |
| **Password** | vCenter/ESXI Password |
| **SyncNode** | IP Information exported after the host installed from OVA in the previous step. |

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-7.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-7.png)

**Complete Configuration**

After vCenter/ESXI has been successfully added to the disaster recovery production platform. Repeat the above steps to add multiple vCenters as needed.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-8.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-8.png)

After completing the VMware production platform configuration, you can proceed to [[1.2.2. Add disaster recovery host(s)]](#_1-2-2-add-disaster-recovery-host-s).

#### 1.2.2. Add Disaster Recovery Host(s) 

After clicking on **"DR,"** select **"Host DR"** from the left menu, then click on **"+Add Host"** on the right side, and choose the **"Agentless"** -> **"VMware"**  option.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-9.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-9.png)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-10.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-10.png)

Select one of the VMware source connections and click on the **"Next"** button.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-11.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-11.png)

Select the VMware hosts to be protected against disasters from the list of all VMware hosts in the vCenter/ESXi and click on the **"Submit"** button:

If there are multiple hosts, you can search in the upper right corner and perform batch selection. 

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-12.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-12.png)

On the disaster recovery page, you can view the list of VMware hosts to be protected against disasters. Select the hosts to be operated on, click on the **"Next"** button, and proceed to the disaster recovery configuration operation:

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-13.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-13.png)

After adding the source end disaster recovery hosts, you can proceed to [[3. Perform disaster recovery operations]](#_3-perform-disaster-recovery-operations)

### 1.3. Disaster Recovery of Physical and Various Virtual Hosts to Huawei cloud

#### 1.3.1 Install Agent on the source Linux host

View documents for operation.

Document Link: [https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-linux-host](https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-linux-host)

#### 1.3.2 Install Agent on the source Windows host

View documents for operation.

Document Link: [https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-windows-host](https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-windows-host)


---

## 2. Recovery/Block Platform
### 2.1. Storage Configuration
(1) Click on **"Configuration"** in the upper menu bar, select **"Block Storage"** under **"Storage"** on the left, and click on **"+Add"** .  
![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-14.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-14.png)


(2) Follow the steps below to fill in the information and add Huawei Cloud platform
Choose Huawei Cloud as the **"Recovery/Block Platform"**.
Follow the steps below to fill in the authentication information for Huawei Cloud when adding the target disaster recovery platform:
::: tip
Huawei Cloud API has been updated to SDK v3. It is recommended to use Huawei Cloud (SDK v3.1.86) as the Block Storage Platform.
:::

- Access Key ID: Huawei Cloud account"s Access Key ID
- Access Key Secret: Huawei Cloud account"s Access Key Secret
- Project Name: The key for accessing Huawei Cloud API with full account permissions.

After confirming the entered information, click the **"Next"** button.  
![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-15.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-15.png)

(3) Select the information for creating the HyperGate instance under the authenticated tenant and click the **"Next"** button.  

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-16-1.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-16-1.png)
![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-16-2.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-16-2.png)

(4) After configure the Cloud Sync Gateway network, click the **"Next"** button.  

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-16-3.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-16-3.png)

(5) Target Start Setting, click the **"Complete"** button.  
::: tip
Please select a 64-bit image of Windows Server 2019/2016.
Main Functions of This Image:
1. Converts Windows UEFI boot mode to BIOS boot mode.
2. Adapts drivers during the boot process.
3. Creates disk types that meet cloud platform requirements during the boot process.
If you cannot find this version in the public, private, or shared image repositories, you can resolve it by following these steps:
1. Upload to the Private Image Repository: Upload the image file to object storage and then import it from object storage into the private image repository.
2. Obtain a Shared Image: If another account in the same region has the mentioned Windows version, you can request them to share it with you for use.
:::

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-16-4.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-16-4.png)

(6) On the **"Block Storage"** - **"Cloud Sync Gateway"** page, check the status, and it should display as **"Available."**
![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-18.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-18.png)

After configuring the Recovery/Block Platform on Huawei Cloud, you can proceed to [[1. Configure the production platform]](#_1-configure-the-production-platform) or proceed to [[3. Perform disaster recovery operations]](#_3-perform-disaster-recovery-operations)

---

## 3. Perform Disaster Recovery Operations

When the hosts to be protected against disasters have already been added, select the hosts and click on the **"Next"** button to go to the disaster recovery configuration page:

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-19.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-19.png)

### 3.1. Disaster Recovery Configuration

On the Hops DR page, select the hosts to be protected against disasters, click on the **"Setup DR"** button, select **"Block Storage"** and follow the configuration steps:

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-20.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-20.png)

**Disaster recovery configuration step 1:** Specify the **"DR Platform"**, Select the configuration information of the disaster recovery platform where the disaster recovery host is located, and click the **"Next"** button.

>  If the disaster recovery platform information is empty, it means that no disaster recovery platform has been added yet. You need to perform **"Storage Configuration"** before proceeding with the next steps.

Choose **"Block Storage"** as the storage type, and select the configured cloud platform and cloud synchronization gateway.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-21.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-21.png)

**Disaster recovery configuration step 2:** Specify the **"Gateway"**, select the DR host, and add it to the **"Gateway"**, then click the **"Next"** button.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-22.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-22.png)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-23.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-23.png)

**Disaster recovery configuration step 3:** Computing Resource Configuration; Select the flavor and OS type for the disaster recovery host on the target disaster recovery platform. Once configured, click on the **"Next"** button.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-25.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-25.png)

**Disaster recovery configuration step 4:** Specify Volume Type; Choose the volume type used by the disaster recovery host on the target disaster recovery platform. If there are multiple volumes, you can configure them separately for system and data volumes. Once configured, click the **"Next"** button.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-24-1.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-24-1.png)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-24-2.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-24-2.png)

**Disaster recovery configuration step 5:** Network Congfiguration; Select the VPC network, Subnet, and whether to specify an IP address at startup, configure a public IP, and security group for the disaster recovery host on the target disaster recovery platform. Once configured, click the **"Next"** button.

> VPC networks and Subnets need to be created in advance under your Huawei Cloud account.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-26.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-26.png)

**Disaster recovery configuration step 6:** Advanced Configuration; Configure driver injection switch and Custom Pre & Post Scripts.

::: tip
With this option enabled, it will automatically load the necessary drivers for the target platform, including disk and network drivers.  
It is enabled by default.
:::

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-77-1.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-77-1.png)  

::: tip
Custom Pre and Post Scripts can be used to assist users in executing custom scripts before and after the host is started. This is primarily used to execute commands during a reboot to ensure business continuity.
> The pre-script runs last during the driver adaptation process. It works on Ubuntu 20.04 and needs to be written in Linux Bash. This script can change settings in your root disk.
If you need to change data in other disks, it's better to use the post-script.
You can access your root disk folder through $HOST_ROOT_PATH.
For example, on Linux, $HOST_ROOT_PATH means the system root directory; on Windows, it's the C drive.
For example, if you want to modify a program configuration file in CentOS 7, you can do it like this: sed -i 's/old_text/new_text/g' $HOST_ROOT_PATH/path/to/config/file  

>The post-script runs after the system starts.
Use Bash on Linux and bat files on Windows.
This script can handle system-related tasks flexibly, like starting or stopping services. It can also modify settings files and add entries to the Windows registry.
:::

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-77-2.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-77-2.png)  

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-77-3.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-77-3.png)  

**Disaster recovery configuration step 7:** Associat Policy;  Associate the corresponding disaster recovery policy with the standby host (association can be skipped for now). If there is no policy, you can create a new one. After completion, click the **"Submit"** button.

> Before starting the policy configuration, the hosts that have already been configured will automatically enter the **"Start DR"** phase.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-27.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-27.png)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-28.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-28.png)

> After completing the disaster recovery configuration, you can still choose to modify the disaster recovery configuration for the host in the **"Action"** section.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-29.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-29.png)


---

### 3.2. Data Synchronization (Full / Incremental)
In the **"Start DR"** step, you can select one or more hosts to be protected against disasters, and click on the **"Sync"** button to synchronize data:  
![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-30.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-30.png)

Confirm the disaster recovery hosts that need to be synchronized and click on the **"Submit"** button:
> For the first synchronization, full data will be synchronized. For subsequent synchronizations, incremental data will be synchronized. You can also select run full synchronization, which means that all data will be synchronized during this synchronization.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-31.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-31.png)

Wait for the data synchronization of the disaster recovery hosts to complete.  
![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-32.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-32.png)


---


### 3.3. DR Drill / DR Takeover

After the data synchronization (snapshot synchronization) is completed, select the host and click on the **"Drill"** / **"Takeover"**  button accordingly:

> The  **"Drill"** / **"Takeover"**  functions are consistent, these functions indicate starting the disaster recovery host on the disaster recovery platform, and relevant verification and takeover work can be performed after the start.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-33.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-33.png)

Select the snapshot time point when starting the disaster recovery hosts and click on the **"Submit"** button to start the host instance.

> **Note:** This action will start an instance on the Huawei platform according to the disaster recovery parameters set for this disaster recovery host. This instance is a host recovered to the cloud. The snapshot time point is generated each time data is synchronized and is used for selection during startup. (The number of reserved snapshot time points can be configured as needed.)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-34.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-34.png)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-35.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-35.png)


---

### 3.4. View Disaster Recovery Result
After the disaster recovery host is started, if the host startup status displays the relevant configuration information of the host on the disaster recovery platform, it means that the disaster recovery drill/disaster recovery takeover was successful. You can log in to Huawei Cloud to view the running status of the disaster recovery host:  

> Click Remote login to open VNC to the Drill/Takeover host.  

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-36.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-36.png)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-37.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-37.png)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-37-1.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-37-1.png)

Or you can go to Huawei Cloud Platform to view cloud instances.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-37-2.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-37-2.png)

### 3.5. Clean Up Verification Host
Select the host that needs to be **"Clean Up Verification Host"**, and in the **"Action"** section, click on the **"Clean Up Verification Host"** option. Wait for the cleaning process to complete.  
![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-38.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-38.png)


---


## 4. Host Group Disaster Recovery

Host group disaster recovery is mainly applicable to groups of disaster recovery host resources with similar attributes and requirements. These groups can be based on business units or other dimensions of resource sets. All operational configurations are done at the host group level. This includes setting up host group synchronization strategies, where all disaster recovery host data synchronization commands within the group are issued simultaneously to ensure that all host data in the host group remains consistent at the underlying level.

> When adding a disaster recovery host to host group disaster recovery, it is necessary to ensure that the single host disaster recovery configuration is completed before it can be added to the disaster recovery host group. Otherwise, it cannot be directly added to the host group disaster recovery.

### 4.1 Create Host Group

Go to the **"Group DR"** on the left menu bar and then click the **"+Add"** button:

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-39.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-39.png)

**Step1: Basic Info**

Configure basic information for the Host Group, including **"Name"** and **"Description"** You can add information in these two sections according to your needs. Then, click the **"Next"** button.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-40.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-40.png)

**Step2: Select Hosts**

Select the disaster recovery host resources that have completed the disaster recovery configuration on the left side. Click the **"Add Resource"** button to include the corresponding disaster recovery hosts in the resource group. Then, click the **"Next"** button.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-41.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-41.png)

**Step3: Associate Policy**

Choose the policy used by the resource group. If a synchronization policy has been created in advance, you can select it directly. If not, click the **"Create Policy"** button to create a new disaster recovery policy.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-42.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-42.png)

**Step4: Boot Sequence**

Adjust the startup sequence of the host resources in the associated resources on the left, and click **"Finish"** after confirmation.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-43.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-43.png)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-44.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-44.png)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-45.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-45.png)

### 4.2. Modify Host Group

Click the **"Action"** button after selecting the resource group to modify the **Basic Info**, **Select Hosts**, **Associate Policy**, and **Boot Sequence** of the resource group.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-46.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-46.png)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-47.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-47.png)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-48.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-48.png)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-49.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-49.png)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-50.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-50.png)

### 4.3. Delete Host Group

Go to [Group DR] and click the on **"Delete Host group"** button :

Check the resource group, and click the **"Delete Resource Group"** button to perform the operation of deleting the resource group.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-51.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-51.png)

According to the prompt for host group deletion, select the relevant configuration options, enter the character **"Yes"** to confirm deletion, then click the **"Submit"** button to complete deletion.

:::tip
**1:** This operation only deletes the host group, and the resources in the host group will be retained. The disaster recovery hosts in the host group will still be displayed separately in the host disaster recovery, and the disaster recovery operation can still be performed on a single disaster recovery host, and the data that has been synchronized will not be cleared from the disaster recovery platform.

**2:** This operation not only deletes the host group, but also the resources in the host group. The disaster recovery hosts in the host group will be directly cleared from the disaster recovery platform, and all synchronized data will be cleared.

**3:** (Not recommended) I confirm that I want to force clean up resources, which may cause residual resources (only used when cleaning fails). [Use in special scenarios only such as disaster recovery hosts in the host group lose contact or cleaning fails. This option will directly clear the records without initiating a call request.]
:::

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-52.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-52.png)

### 4.4. Host Group – Data Synchronization

Select the configured host group, click the **"Sync"** button, and then the **"Submit"** button to perform data synchronization. You can also automatically perform data synchronization according to the configured Host Group Policy Management.

> For the disaster recovery hosts that are first added to the host group, it is necessary to perform data synchronization even if the data synchronization operation has been performed in the Host Disaster Recovery during the disaster recovery process.
> The synchronization policy of the host group will automatically execute data synchronization tasks according to policy settings.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-53.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-53.png)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-54.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-54.png)

### 4.5. Host Group - DR Drill / Takeover

Wait for data synchronization to complete (synchronization snapshot completed), check the host group that needs to be disaster recovery drilled/taken over, then click on the **"Drill"** / **"Takeover"** button:

Note: For disaster recovery hosts that are first added to the host group, it is necessary to perform data synchronization operation, otherwise it will not be possible to perform disaster recovery drill/takeover even if the disaster recovery hosts in the host group have already performed data synchronization operation during Host Disaster Recovery.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-55.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-55.png)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-56.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-56.png)

In the pop-up box, select the synchronization time point snapshot copy, after confirming that the information is correct, click the **"Submit"** button.

> The synchronization time point records the recoverable data time point for each snapshot copy generated after each data synchronization is completed.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-57.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-57.png)

When the host group status showing disaster recovery drill / takeover is completed, you can log in to the disaster recovery platform for drill and takeover operations.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-58.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-58.png)

### 4.6. Host Group - Clean Up Validation Resources

Check the resource group that needs to clean up and verify resources, click the **"Action"** button, and select the **"Clean Up Validation Resources"** button.

> This operation means that the disaster recovery hosts in the host group that have already performed disaster recovery drill / takeover and the disaster recovery host instances generated on the disaster recovery platform will be deleted. This action prevents the risk of manual operation of deleting instances on the disaster recovery platform.

> Note: If the disaster recovery host restored on the disaster recovery platform has taken over the business, **do not** perform this operation, as this operation will directly delete the instances generated on the disaster recovery platform.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-59.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-59.png)

After confirming that the resources to be cleaned on the disaster recovery platform are accurate, enter the character **"Yes"** in the input box to confirm and click the **"Submit"** button.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-60.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-60.png)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-61.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-61.png)

## 5. Policy Management

### 5.1. Create Policy

Click **"Configuration"** on the top menu bar, select **"Policy Settings"** on the left, and click **"Create Policy"**.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-62.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-62.png)

The Create Policy page allows you to modify various parameters of the policy configuration.

#### 5.1.1 Policy Name、Snapshot Retain Count、Policy Status

| **Parameter** |  | **Description** |
| --- | --- | --- |
| Policy Name |  | Fill in the synchronization policy name and customize the configuration, which can be shared by other disaster recovery host groups. |
| Snapshot Retain Count |  | The range of snapshot quantities is an integer between 1 and 128; if not set, the default is 128. Once the number of snapshots reaches the set quota, deletion will start from the earliest snapshot, always maintaining the set number of snapshots. |
| Policy Status |  | Control the activation and deactivation of the synchronization policy. |

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-63.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-63.png)

#### 5.1.2 Synchronization Policy

Check **Synchronization Policy : Incremental Synchronization** You can enable and configure parameters for the incremental synchronization policy.

Check **Synchronization Policy : Full Synchronization** You can enable and configure parameters for the full synchronization policy.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-64.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-64.png)


| **Parameter** | **Description** |
| --- | --- |
| Cycle | Sync policy execution cycle can be set to **Every N minutes**、**Every N hours**、**Every N days**、**Weekly**、**Monthly** for setting the triggering conditions for periodic sync tasks. |
| Minutes | You can configure it when the **Cycle** is set to **Every N minutes**.<br> Execute once every N minutes, where N is an integer in the range [5-59].  |
| Hours Amount | You can configure it when the **Cycle** is set to **Every N hours**.<br> Execute once every N hours, where N is an integer in the range [1-23]. |
| Day | You can configure it when the **Cycle** is set to **Every N days**.<br> Execute once every N hours, where N is an integer in the range [1-30]. |
| Date（Weekly）| You can configure it when the **Cycle** is set to **Weekly**.<br> Execute the synchronization policy on one day or days of the week every n week.<br> Execute once a week, where N can take values in the range [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday], and multiple selections are allowed. |
| Date（Mouthly）| You can configure it when the **Cycle** is set to **Mouthly**.<br> Execute every certain date of the month, where the selectable range is [1-31, end of the month], and multiple selections are allowed.<br> **29**: The current option will only be executed in leap years of February and will be skipped in other years of February.<br> **30**: The current option will not be executed in February.<br> **31**: Only executes in January, March, May, July, August, October and December.<br> **E.O.M**: The current option will be executed in the last day of each month. |
| Start Time | You can configure it when the **Cycle** is set to **Every N minutes **or** Every N hours**.<br> Setting the Start Time for Synchronization。 |
| Time（Weekly）| You can configure it when the **Cycle** is set to **Weekly**.<br> Setting the Start Time for Synchronization。 |
| Time（Mouthly）| You can configure it when the **Cycle** is set to **Mouthly**.<br> Setting the Start Time for Synchronization。 |

#### 5.1.3 Speed Limit Policy（To be revised）

Support Multi-time period speed limiting(Supports setting different speed limits for different time periods within the same cycle, only supports selecting one cycle mode.)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-65.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-65.png)


| **Parameter** | **Description** |
| --- | --- |
| Cycle | Speed Limit Policy execution cycle can be set to **Every N days**、**Weekly**、**Monthly** for setting the triggering conditions for speed limit tasks. |
| Day | You can configure it when the **Cycle** is set to **Every N days**. <br> Execute once every N days, where N is an integer in the range [1-30]. |
| Date（Weekly）| You can configure it when the **Cycle** is set to **Weekly**. <br> Execute the speed limit policy on one day or days of the week every n week.<br> Execute once a week, where N can take values in the range [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday], and multiple selections are allowed. |
| Date（Monthly）| You can configure it when the **Cycle** is set to **Mouthly**.<br> Execute every certain date of the month, where the selectable range is [1-31, end of the month], and multiple selections are allowed.<br> **29**: The current option will only be executed in leap years of February and will be skipped in other years of February.<br> **30**: The current option will not be executed in February.<br> **31**: Only executes in January, March, May, July, August, October and December.<br> **E.O.M**: The current option will be executed in the last day of each month. |
| Speed Limit Time | Set the time for speed limit tasks |
| Host Speed Limit | The host speed limit value should be an integer ≥1. Unit: Mbps |

#### 5.1.4 Retention Policy

Check **"Sequence Retention"**, enabling and configuring the snapshot retention policy. (Set snapshot retention based on sequence to retain snapshots at specific time points for a specified duration. For example, retain the first snapshot of each month for 3 weeks. Note: Ensure sufficient quota is available for creating new snapshots during the setup, otherwise data synchronization may fail.)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-66.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-66.png)

### 5.2. Modify Policy

Check the created Policy, click on **"Action"** select **"Modify"** and you can modify the parameters of the policy.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-67.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-67.png)

### 5.3. Policy Associated Host

Select the created policy, click on **"Action"** choose **"Associate Host"** check the hosts that are not associated with the strategy, and click **"Submit"** to establish the association.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-68.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-68.png)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-69.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-69.png)

### 5.4. Delete Policy

Select the created policy, click on **"Action"** choose **"Delete"** and click **"Submit"** to delete the that is not associated with any hosts.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-70.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-70.png)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-71.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-71.png)

> If the policy is already associated with resources (hosts, resource groups), deletion is not supported. Please unbind the associated resources (hosts, resource groups) before deleting them.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-72.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-72.png)

### 5.5 Policy Unbind Associated Resources (Host, Resource Group)

Click on the policy name, select the **"Associate Hosts"** or **"Associate Resource Group"** tab, check the resources to unbind, click the **"Unbind Hosts"** or **"Unbind Resource Group"** button, and confirm to unbind the associated resources.

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-73.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-73.png)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-74.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-74.png)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-75.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-75.png)

![hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-76.png](./images/hyperbdruserguide-vmwaretohuaweicloud-blockstoragemode-76.png)

## 6. Alarm Management

::: tip
Currently, two methods of Email alerts and SMS alerts are supported.
:::

### 6.1 Alarm Sending Configuration

#### 6.1.1 Use Email Alerts

1. Log in the Broadview coss console

> Login Address: https://<HyperBDR IP\>:30443  
> Default administrator user: admin  
> Default administrator password: P@ssw0rd

![alarmconfiguration-1.png](./images/alarmconfiguration-1.png)

2. Configure SMTP

![alarmconfiguration-2.png](./images/alarmconfiguration-2.png)

![alarmconfiguration-3.png](./images/alarmconfiguration-3.png)


3. Send Test Email


![alarmconfiguration-4.png](./images/alarmconfiguration-4.png)

![alarmconfiguration-5.png](./images/alarmconfiguration-5.png)

#### 6.1.2 Use SMS Alerts

1. Log in the Broadview coss console

> Login Address: https://<HyperBDR IP\>:30443  
> Default administrator user: admin  
> Default administrator password: P@ssw0rd

![alarmconfiguration-6.png](./images/alarmconfiguration-6.png)

2. Configure SMS Service

![alarmconfiguration-7.png](./images/alarmconfiguration-7.png)

![alarmconfiguration-8.png](./images/alarmconfiguration-8.png)

3. Send Test SMS

![alarmconfiguration-9.png](./images/alarmconfiguration-9.png)

![alarmconfiguration-10.png](./images/alarmconfiguration-10.png)

### 6.2 Notification Configuration

> Logged into the HyperBDR console by default

1. Add Notufication

![alarmconfiguration-11.png](./images/alarmconfiguration-11.png)


2. Configure Notufication

![alarmconfiguration-12.png](./images/alarmconfiguration-12.png)

### 6.3 Alarm Rule Configuration

#### 6.3.1 Resource Alert

1. Create Resource Alert

![alarmconfiguration-13.png](./images/alarmconfiguration-13.png)

2. Configure Resource Alert

![alarmconfiguration-14.png](./images/alarmconfiguration-14.png)

#### 6.3.2 Event Alert

1. Create Event Alert

![alarmconfiguration-15.png](./images/alarmconfiguration-15.png)

2. Configure Event Alert

![alarmconfiguration-16.png](./images/alarmconfiguration-16.png)