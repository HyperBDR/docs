# **Tencent Cloud**

## **Add Block Storage**

From the top navigation bar, select **"Configuration" → "Storage Configuration" → "Block Storage"** to enter the block storage page. Click the "Add" button in the upper right corner to add a new block storage configuration.

### **Add Platform Account**

Select "Tencent Cloud" from the block storage platform dropdown list. Fill in the following authentication information according to your actual environment:

![](./images/tencentcloud-addblockstorage-1.png)

* **Add Platform Account Description**

| **Configuration Item**  | **Example Value**                          | **Description**                                                                                                                                                                                                                                      |
|-------------------------|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Block Storage Platform  | Tencent Cloud                              | Select **Tencent Cloud** from the dropdown list.                                                                                                                                                                                                    |
| Access Key ID           | HPUAAG0B2•••••••••••••••                   | API access credential with full account permissions. To obtain it: Log in to the management console → Personal Information (top-right corner) → **[Access Management]** → **[API Key Management]**.                                                |
| Access Key Secret       | •••••••••••••••••••••••••••••••            | API access credential with full account permissions. To obtain it: Log in to the management console → Personal Information (top-right corner) → **[Access Management]** → **[API Key Management]**.                                                |
| App ID                  | 125••••••••                                | An essential credential for Tencent Cloud API requests. To find it: Log in to the management console → Personal Information (top-right corner) → **[Account Information]** → **[Basic Information]** → **APP ID**.                                 |
| Driver Injection        | Yes / No                                   | **This setting applies only when starting a host on the same virtualization platform.**<br>Enabling this option allows skipping the driver adaptation process.<br>**(Not Recommended)** Skipping driver injection may lead to boot failures. Use with caution. |

After adding the platform account, click **"Next"** to start **"Set Up Cloud Sync Gateway"**.

### **Set Up Cloud Sync Gateway**

For the Cloud Sync Gateway, configure the region, subnet, etc., to ensure stable and efficient operation in the target environment.

![](./images/tencentcloud-addblockstorage-2.png)

| **Configuration Item**           | **Example Value**                                        | **Description**                                                                                                                                                                                                                                                                       |
|----------------------------------|----------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Region                           | North China (Beijing)                                   | Select the region where the Cloud Sync Gateway will be deployed.                                                                                                                                                                                                                      |
| Zone                             | Beijing Zone 2                                          | Select the appropriate availability zone within the selected region from the dropdown list.                                                                                                                                                                                           |
| VPC                              | vpc-1lgooc (10.0.0.0/12)                                | Select the Virtual Private Cloud (VPC) where the Cloud Sync Gateway resides. The actual selection depends on your deployment plan.                                                                                                                                                    |
| Subnet                           | vswitch-1u7yiu (10.0.0.0/16)                            | Select the subnet within the chosen availability zone. The specific option should match your existing network setup.                                                                                                                                                                   |
| Bandwidth Size                   | 20 Mbps                                                 | Choose an appropriate bandwidth value based on your scenario. This directly affects the data transmission speed from the source to the destination.                                                                                                                                   |
| Windows Transition Host Image    | Windows Server 2019 Datacenter Edition 64-bit (ZH, Recommended) | **Main Functions of This Image:**<br>1. Converts Windows UEFI boot mode to BIOS boot mode.<br>2. Performs driver adaptation during system startup.<br>3. Creates disk types that meet cloud platform requirements during boot.<br><br>**If the required version is not available in the public, private, or shared image repositories, you can:**<br>① **Upload to Private Image Repository:** Upload the image file to Object Storage, then import it into the Private Image Repository.<br>② **Use Shared Image:** If another account in the same region has the required version, request them to share it with your account. |

* **Data Transfer Advanced Setting**

| **Field**             | **Options**                   | **Description**                                                                                 |
|-----------------------|------------------------------|------------------------------------------------------------------------------------------------|
| Data Transfer Protocol| S3Block / iSCSI (Not Recommended) | The protocol for data transfer between the source and the sync gateway.<br>S3Block is widely used for WAN and is more suitable for data transfer.<br>iSCSI is for storage networks and suitable for stable network environments. |

After the Cloud Sync Gateway is set up, click **"Complete"**. The system will automatically create the Cloud Sync Gateway and the transition host image.

<!-- @include: ./huawei.md#snippet -->