# **OpenStack Community Edition (Juno+)**

## **Add Block Storage**

From the top navigation bar, select **"Configuration Management" → "Storage Configuration" → "Block Storage"** to enter the block storage page. Click the "Add" button in the upper right corner to add a new block storage configuration.

### **Add Platform Account**

Select "OpenStack Community Edition (Juno+)" from the block storage platform dropdown list. Fill in the following platform authentication information according to your actual block storage environment:

> If you are not sure how to obtain the relevant information, click "Click to View" below for detailed instructions.<br>
> [👉 Click to View](https://qa.oneprocloud.com/questions/D1n6)

![](./images/openstackcommunityversion_juno-addblockstorage-1.png)

* Platform Account Description

| **Configuration Item**     | **Example Value**                | **Description**                                                                                                 |
|---------------------------|----------------------------------|----------------------------------------------------------------------------------------------------------------|
| Block Storage Platform    | OpenStack Community Edition (Juno+)| Find and select Alibaba Cloud from the dropdown list.                                                           |
| Auth URL                  | http://192.168.10.201:5000/v3    | Log in to the platform, click the username in the upper right corner, then click [OpenStack RC File]. In this file, find the value for [OS_AUTH_URL], for example: http://192.168.10.201:5000/v3. |
| User Domain ID            | default                          | Log in to the platform, click the username in the upper right corner, then click [OpenStack RC File]. In this file, find the value for [OS_USER_DOMAIN_NAME], usually "default". |
| Username                  | zhangweizhen                     | The username in the upper right corner after logging in.                                                        |
| Password                  | **********                       | The login password for the username.                                                                            |
| Project Domain ID         | default                          | Log in to the platform, click the username in the upper right corner, then click [OpenStack RC File]. In this file, find the value for [OS_PROJECT_DOMAIN_ID], usually "default". |
| Project Name              | zhangweizhen                     | Usually the same as the username.                                                                               |
| Region                    | RegionOne                        | Log in to the platform, click the username in the upper right corner, then click [OpenStack RC File]. In this file, find the value for [OS_REGION_NAME], usually "RegionOne". |
| Driver Injection          | Yes / No                         | Only applicable when starting a host on the same virtualization platform and you need to skip driver adaptation. (Not recommended) Skipping driver adaptation may cause the host to fail to start properly. Please use this option with caution. |

* Advanced Setting Description

| **Configuration Item**                  | **Example Value**           | **Description**                                                                                 |
|-----------------------------------------|----------------------------|-------------------------------------------------------------------------------------------------|
| Cloud Sync Gateway SSH Communication Port | 22                         | SSH port for logging into the cloud sync gateway image. Default is `22` if left blank.           |
| Cloud Sync Gateway SSH root Password    | Please input your value     | SSH root password for logging into the cloud sync gateway image. Default is `Acb@132.Inst` if left blank. |
| Transition Host Image Username          | Please input your value     | Username for the transition host image. Default is `root` if left blank.                        |
| Transition Host Image Password          | Please input your value     | Password for the transition host image. Default is `Acb@132.Inst` if left blank.                |
| Transition Host Image Port              | 10729                      | Communication port for the transition host image. Default is `10729` if left blank.             |
| Driver Adaption Network Mode            | Public Network without Proxy / Private Network without Proxy / Public Network with Cloud Sync Gateway Proxy / Private Network with Cloud Sync Gateway Proxy | Network connection mode for driver adaptation host.                                              |

After filling in the authentication information, click **"Next"** to start **"Set Up Cloud Sync Gateway"**

### **Set Up Cloud Sync Gateway**

Configure region, subnet, etc. for the cloud sync gateway to ensure stable and efficient operation in the target environment.

![](./images/openstackcommunityversion_juno-addblockstorage-2.png)

* Cloud Sync Gateway Configuration Description

| **Configuration Item**         | **Example Value**                                         | **Description**                                                                                                                                                                                                                                 |
|-------------------------------|----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Project                       | zhangweizhen                                             |                                                                 |
| Region                        | RegionOne                                                |                                                                 |
| Compute Zone                  | nova                                                     | This field is the compute availability zone, default is "nova". Please refer to the actual situation.                                         |
| Image                         | ubuntu-20.04-XXXXXXXXXXXXX                               | When creating a cloud sync gateway, select a Linux OS image from the list. If not available, manually upload an Ubuntu 20.04 image. Note: To avoid irregular image naming, all images are listed here. Please select the required OS image. |
| Flavor                        | 2C\_4GB 50GB(2C4G)                                       | The cloud sync gateway is mainly used for data synchronization. It is recommended to select an instance with at least 2 vCPU and 4 GB memory, and ensure the bandwidth is above 1Gbps for efficient and stable data synchronization. |
| Network                       | project-vpc (xxx.xxx.xxx.xxx/xx)                         | Select the private network for the cloud sync gateway from the dropdown list. Only networks in the same region are displayed. Please refer to the actual situation. |
| Subnet                        | project-subnet-public1-cn-north-1a (xxx.xxx.xxx.xxx/xx)  | Please select a subnet and ensure the server can communicate with it. Please refer to the actual situation.                                                       |
| Fixed IP                      | x.x.x.x                                                  | The IP address used by the cloud sync gateway. Default is auto-assigned. If specifying, make sure the IP is not occupied.                                         |
| System Disk Type              | DEFAULT VOLUME TYPE_DEFAULT_                             | Please refer to the actual situation.                                                                                                                             |
| System Disk Size              | 50                                                       | Select an appropriate size based on the workload. Default is 50G, recommended is also 50G.                                 |
| Block Store Zone              | nova                                                     | Usually the same as the compute availability zone. Default is "nova".                                                      |
| Whether to use Floating IP    | Don't use Floating IP / Auto-create Floating IP / Manually select Floating IP | Choose whether to enable based on actual needs. Auto-create will call the API to create a Floating IP in the selected region. Manual selection allows you to choose an existing Floating IP from the dropdown list. |
| Windows Transition Host Image | WINSRV\_2019\_xxxxxxxx                                  | **This image is mainly used for:** 1. Converting Windows UEFI boot to BIOS; 2. Driver adaptation during boot; 3. Creating disk types that meet cloud platform requirements. If not found in public, private, or shared image libraries, you can: 1. Upload to private image library: upload the image file to object storage, then import it to the private image library. 2. Obtain a shared image: If another account in the same region has this Windows version, you can ask them to share it with you. |
| Boot Type                     | Boot From Volume / Boot From Image                        | It is recommended to use volume booting to shorten the startup time. If platform limitations prevent the use of volume booting, you can use image booting instead. |

* Network Advanced Settings Description

| **Configuration Item**                | **Example Value**                    | **Description**                                                                                 |
|---------------------------------------|--------------------------------------|-------------------------------------------------------------------------------------------------|
| Cloud Sync Gateway Control Network    | Private Network / Public Network     | Setting for the communication network between the console and cloud sync gateway. For example, when using VPN or dedicated lines, the intranet should be selected. |
| Custom Control Network                | Please input IPv4/IPv6/Domain Name  | By default, no configuration is required. Only configure when needed (e.g., NAT address translation). Supports IPv4, IPv6, and domain names. |
| Data Transmission Network             | Private Network / Public Network     | Setting for the communication network between the source and the cloud sync gateway. For example, when using VPN or dedicated lines, the intranet should be selected. |
| Custom Data Transmission Network      | Please input IPv4/IPv6/Domain Name  | By default, no configuration is required. Only configure when needed (e.g., NAT address translation). Supports IPv4, IPv6, and domain names. |

* Data Transfer Advanced Setting Description

| **Configuration Item**      | **Optional Values**                | **Description**                                                                                  |
|----------------------------|------------------------------------|--------------------------------------------------------------------------------------------------|
| Data Transfer Protocol      | S3Block / iSCSI (To be deprecated, not recommended)  | The data transfer protocol between the source and the sync gateway. S3Block is widely used in WAN and is more suitable for data transfer. iSCSI is used for storage networks and is suitable for stable network environments. |

After configuring the cloud sync gateway, click **"Complete"**. The system will automatically create the cloud sync gateway and transition host image.

![](./images/openstackcommunityversion_juno-addblockstorage-3.png)

### **View Details**

During creation, click "View List" to see the detailed list of created cloud sync gateways.

![](./images/openstackcommunityversion_juno-addblockstorage-4.png)

Select the corresponding host and click "View Details" to see detailed logs generated during the task creation process, which helps you quickly understand the execution status and troubleshoot issues.

![](./images/openstackcommunityversion_juno-addblockstorage-5.png)

<!-- @include: ./huawei.md{110-150} -->