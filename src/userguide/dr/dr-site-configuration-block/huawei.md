#  **Huawei Cloud(Recommended, SDK v3.1.86)**

## **Add Block Storage**

From the top navigation bar, select **"Configuration" → "Storage Configuration" → "Block Storage"** to enter the block storage page. Click the "Add" button in the upper right corner to add a new block storage configuration.

### **Auth Info**

Select "Huawei Cloud(Recommended, SDK v3.1.86)" from the block storage platform dropdown list. Fill in the following authentication information according to your actual environment:

> If you're unsure how to obtain the relevant information, you can click 'Click to View' below for detailed instructions:<br>
> [👉 Click to View](https://qa.oneprocloud.com/questions/D1W2)

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-addblockstorage-1.png)

* **Auth Info Description**

| **Field**              | **Example**                            | **Description**                                                                                                                           |
|------------------------|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Block Storage Platform | Huawei Cloud (Recommended, SDK v3.1.86) | Select Huawei Cloud (Recommended, SDK v3.1.86) from the dropdown list.                                                                    |
| Access Key ID          | AKIA5SII3Q•••••••••••••••              | The key for accessing Huawei Cloud API with full account permissions.<br>Log in to the management console → mouse over the top-right corner [Username] → click [My Credentials] → select [Access Key]. |
| Access Key Secret      | ••••••••••••••••••••••••••••••••       | The key for accessing Huawei Cloud API with full account permissions.<br>Log in to the management console → mouse over the top-right corner [Username] → click [My Credentials] → select [Access Key]. |
| Region                 | Automatic / Custom                     | The key for accessing Huawei Cloud API with full account permissions.<br>Log in to the management console, mouse over the top-right corner [Username] → click [My Credentials] → [API Credentials] → [Project Name]. |
| Name                   | test                                   | If you do not fill in the name, the system will automatically generate a default name for you.                                            |

After filling in the authentication information, click **"Next"** to proceed to **"Resource Configuration"**.

### **Resource Configuration**

Allocate computing and storage resources for the Cloud Sync Gateway to ensure stable and efficient operation in the target environment.

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-addblockstorage-2.png)

* Resource Configuration Description

| Field   | Example                                      | Description                                                                                                         |
| ------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------|
| Region  | CN East-Qingdao                 | Select the region where the Cloud Sync Gateway will be installed                                                    |
| Compute Zone | AZ1                       | Select the availability zone within the region from the dropdown list                                               |
| Flavor  | Select vCPU and memory as needed from the dropdown. After selection, the example specs below will refresh automatically. | The Cloud Sync Gateway is mainly used for data synchronization. It is recommended to choose at least 2 vCPU and 4 GB or above, and ensure the base bandwidth is higher than 1Gbps for stable and efficient data sync. |
| Image   | Select the corresponding Linux image from the dropdown | When creating the Cloud Sync Gateway, select a Linux OS image from the list. If not available, manually upload an Ubuntu 20.04 image.<br>Note: To avoid naming issues, all images are listed. Please select the required OS image. |
| System Disk Type | General SSD (gp3) / General SSD (gp2) | Select as needed                                                                                                    |
| System Disk Size | User-defined (based on instance needs) | Choose the appropriate size based on the workload. Default is 40GB.                                                 |

After resource configuration, click **"Next"** to proceed to **"Network Configuration"**.

### **Network Configuration**

Allocate network resources for the Cloud Sync Gateway to ensure stable and efficient operation in the target environment.

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-addblockstorage-3.png)

* Network Configuration Description

| **Field** | **Example**                                                 | **Description**                                                                     |
|-----------|-------------------------------------------------------------|-------------------------------------------------------------------------------------|
| VPC       | project-vpc (xxx.xxx.xxx.xxx/xx)                            | Select the VPC for the Cloud Sync Gateway from the dropdown list.                    |
| Subnet    | project-subnet-public1-cn-north-1a (xxx.xxx.xxx.xxx/xx)     | Select the subnet within the availability zone from the dropdown list.               |
| Specify Private IP | Auto-assign IP address                             | By default, the IP address is assigned automatically. To specify, select manual assignment from the dropdown. Make sure the IP address is not already in use. |

* **Network Advanced Settings**

| **Field**                        | **Example**                                   | **Description**                                                                 |
|----------------------------------|-----------------------------------------------|---------------------------------------------------------------------------------|
| Cloud Sync Gateway Control Network| Internal / Public                            | Set the control network between the console and the Cloud Sync Gateway. For VPN or dedicated line, select Internal. |
| Custom Control Network           | Enter IPv4/IPv6/domain name                   | Usually not required. Configure only if needed (e.g., for NAT). Supports IPv4, IPv6, and domain names. |
| Data Transmission Network        | Internal / Public                             | Set the data transfer network between the source and the Cloud Sync Gateway. For VPN or dedicated line, select Internal. |
| Custom Data Transmission Network | Enter IPv4/IPv6/domain name                   | Usually not required. Configure only if needed (e.g., for NAT). Supports IPv4, IPv6, and domain names. |
| Driver Adaption Network Mode     | Public network without proxy<br>Internal network without proxy<br>Public network via Cloud Sync Gateway proxy<br>Internal network via Cloud Sync Gateway proxy<br> | Network connection mode for the driver adaptation host.                          |
| Bandwidth Size                   | 200 Mbps                                      | Enter a value between 1-200 Mbps as needed. This affects the data transfer rate from source to target. |

* **Data Transfer Advanced Setting**

| **Field**             | **Options**                   | **Description**                                                                                 |
|-----------------------|------------------------------|------------------------------------------------------------------------------------------------|
| Data Transfer Protocol| S3Block / iSCSI (Not Recommended) | The protocol for data transfer between the source and the sync gateway.<br>S3Block is widely used for WAN and is more suitable for data transfer.<br>iSCSI is for storage networks and suitable for stable network environments. |

* **Advanced Volume Backup Settings**

| **Field**         | **Options** | **Description**                                      |
|-------------------|-------------|------------------------------------------------------|
| Max Backup Volume | 23 / 59     | If 59 is selected, platform limits: only 23 hosts supported. |

After network configuration, click **"Next"** to proceed to **"Target Start Settings"**.

### **Target Start Settings**

Configure the key parameters required for starting the target during recovery or drill, ensuring resources can take over and run smoothly.

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-addblockstorage-4.png)

* Target Start Settings Description

| **Field**                | **Example**                                         | **Description** |
|--------------------------|-----------------------------------------------------|-----------------|
| **Windows Transition Host Image** | Windows Server-2019-English-Full-Base-2025.05.15 | Please select a 64-bit image of Windows Server 2019/2016.<br><br>**Main Functions:**<br>1. Convert Windows UEFI boot mode to BIOS boot mode.<br>2. Adapt drivers during boot.<br>3. Create disk types that meet cloud platform requirements.<br><br>If you cannot find this version in the public, private, or shared image repositories, you can:<br>1. **Upload to Private Image Repository**: Upload the image file to object storage, then import it into the private image repository.<br>2. **Obtain a Shared Image**: If another account in the same region has this Windows version, you can request them to share it with you. |
| **Image Access Method**  | Default / Custom                                   | If you cannot inject username and password when creating an instance with this image, use the available username and password for the image. |

After completing the target start settings, click **"Complete"**. The system will automatically create the Cloud Sync Gateway and transition host image.

### **View Details**

During creation, click ">Click for list" to view the detailed list of created Cloud Sync Gateways.

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-addblockstorage-5.png)

Select the corresponding host and click ">Click for details" to view detailed logs generated during the task creation process, helping you quickly understand the status and troubleshoot issues.

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-addblockstorage-6.png)

## **Action**

### **Modify**

Click "Modify" to edit the authentication information.

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-moreoperations-1.png)

### **Extend**

Click "Extend" to edit the resource configuration, network configuration, and target start settings.

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-moreoperations-2.png)

### **Reports**

Click "Export Report" to export the report information for the corresponding Cloud Sync Gateway.

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-moreoperations-3.png)

Select the report type, collection range, time zone, and time range, then click Next to select the host for which you want to export the report.

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-moreoperations-4.png)

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-moreoperations-5.png)

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-moreoperations-6.png)

### **Delete**

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-moreoperations-7.png)

![](./images/huaweicloud_recommendeduse_sdkv3_1_86-moreoperations-8.png)

