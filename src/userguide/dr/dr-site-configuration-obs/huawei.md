# **Huawei Cloud (Recommended, SDK v3.1.86)**

## **Add Object Storage**

From the top navigation bar, select **"Configuration" → "DR Site Configuration" → "Object Storage"** to enter the object storage page. Click the "Add" button to add a new object storage configuration.

### **Authentication Information**

In the recovery platform dropdown, select "Huawei Cloud (Recommended, SDK v3.1.86)". Fill in the following authentication information based on your actual situation:

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-addobjectstorage-1.png)

* **Authentication Information Description**

| **Item**                | **Example**                          | **Description**                                                                                                      |
|-------------------------|--------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| Select Recovery Platform| Huawei Cloud (Recommended, SDK v3.1.86) | Select Huawei Cloud (Recommended, SDK v3.1.86) from the dropdown list.                                               |
| Access Key ID           | AKIA5SII3Q•••••••••••••••            | The key for accessing Huawei Cloud API with full account permissions.<br>How to get: Log in to the management console, hover over the top-right [Username] → click [My Credentials] → select [Access Key]. |
| Access Key Secret       | ••••••••••••••••••••••••••••••••     | The secret key for accessing Huawei Cloud API with full account permissions.<br>How to get: same as above.           |
| Project Name            | cn-east-5                            | The project name for accessing Huawei Cloud API.<br>How to get: Log in to the management console, hover over the top-right [Username] → click [My Credentials] → [API Credentials] → [Project Name]. |

After filling in the authentication information, click **"Next"** to proceed to **"Target Configuration"**.

### **Target Configuration**

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-addobjectstorage-2.png)

* **Target Configuration Description**

| **Item**                        | **Example**                             | **Description**                                                                                                                                                                                                                                                           |
|----------------------------------|-----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Region                           | CN North-Beijing4                       | Selected based on authentication information and cannot be changed.<br>For public cloud, it is recommended to select the same region as the object storage to avoid extra traffic charges.                                          |
| Create Transition Host Image     | Automatic / Custom                      | If set to automatic, the system will create the transition host image as required. If set to custom, you need to select zone, system type, and other settings. See the custom creation instructions below.                         |
| Console to Transition Host Network | Private Network / Public Network       | Used for communication between the console and the transition host.<br>Private cloud: select private network if direct communication is possible.<br>Public cloud: select public network if there is no dedicated line.             |
| Transition Host to Console Network | Default / Custom                       | Mainly used for real-time notifications such as recovery progress between the transition host and the console.<br>If the console is deployed in the cloud, it is recommended to use the internal network.                         |
| Advanced Setting                 | Name: Huawei Cloud (Recommended, SDK v3.1.86)-cn-north-4 | If you do not enter an ID, the system will generate one automatically.                                                                                                                      |

* **Custom Transition Host Creation Instructions**

| **Item**                        | **Example**                                          | **Description**                                                                                          |
|----------------------------------|-----------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| Zone                             | cn-north-la                                         | Select the zone where your business is deployed (choose according to your needs).                        |
| Flavor                           | 2/4GB/c6i.large                                     | Select the instance type based on your workload (CPU / Memory / Model).                                  |
| Network                          | Project-vpc (10.0.0.0/16)                           | Select the planned VPC network.                                                                          |
| Subnet                           | Project-subnet-public1-cn-north-1a (10.0.0.0/20)    | Select the subnet under the corresponding zone.                                                          |
| Linux Transition Host Base Image  | ubuntu-focal-20.04-amd64-server-20250530            | Temporary image for data recovery and driver adaptation.<br>Recommended: Ubuntu 20.04 / 24.04.<br>**Note:** If the source kernel ≥ 6.x, use 24.04. |
| Windows Transition Host Base Image| Windows Server-2019-English-Full-Base-2025.05.15    | Temporary image for data recovery and driver adaptation.<br>Recommended: Windows Server 2016 / 2019 64bit.|
| System Disk Type                  | General Purpose SSD (gp3)                           | Select the disk type according to performance requirements.                                               |

### **Other Settings**

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-addobjectstorage-3.png)

* **Other Settings Description**

| **Item**                                   | **Example**                                       | **Description**                                                                                                                                                                                                                                                                                                                                                                  |
|---------------------------------------------|---------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Windows Transition Host Image (UEFI to BIOS)| Windows Server-2019-English-Full-Base-2025.05.15  | Please select a 64-bit Windows Server 2019/2016 image.<br><br>**Main Functions:**<br>1. Convert Windows UEFI boot mode to BIOS boot mode.<br>2. Adapt drivers during the boot process.<br>3. Create disk types that meet cloud platform requirements.<br><br>**How to get the image:**<br>1. Upload to Private Image Repository: Upload the image file to object storage, then import it.<br>2. Obtain a Shared Image: Request a shared image from another account in the same region. |

After completing the other settings, click **"Submit"**. The system will automatically create the transition host image.

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-addobjectstorage-4.png)

### **View Details**

During the creation process, click "Click for details" to view detailed logs, which helps you quickly understand the execution status and troubleshoot issues.

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-addobjectstorage-5.png)

## **Action**

### **Modify**

Click "Modify" to edit authentication information, target configuration, and other settings.

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-moreoperations-1.png)

### **Modify Image**

Click "Modify Image" to rebuild the transition host image.

> Note: If a transition host image already exists, rebuilding will delete the old image and create a new one.

If you select automatic creation, the system will use the default settings. For custom creation, you need to select zone, system type, and other settings. See the custom creation instructions above.

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-moreoperations-2.png)

### **Delete**

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-moreoperations-3.png)

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-moreoperations-4.png)

