# **Tencent Cloud**

## **Add Object Storage**

From the top navigation bar, select **"Configuration" → "Target Site Configuration" → "Object Storage"** to enter the object storage page. Click the "Add" button to add a new object storage configuration.

### **Authentication Information**

In the recovery platform dropdown, select "Tencent Cloud". Fill in the following authentication information based on your actual situation:

![](./images/tencentcloud-addobjectstorage-1.png)

* **Authentication Information Description**

| **Configuration Item**  | **Example Value**                | **Description**                                                                                                                                                              |
|-------------------------|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Select Recovery Platform | Tencent Cloud                   | Select **Tencent Cloud** from the dropdown list.                                                                                                                              |
| Access Key ID           | HPUAAG0B2•••••••••••••••         | This is the key used to access the Tencent Cloud API with full account permissions.<br>Navigate to: **Management Console → Personal Info (top-right) → Access Management → API Key Management**. |
| Access Key Secret       | •••••••••••••••••••••••••••••••• | This is the secret key used to access the Tencent Cloud API with full account permissions.<br>Navigate to: **Management Console → Personal Info → Access Management → API Key Management**.        |
| App ID                  | 125••••••••                      | A required credential for Tencent Cloud API requests.<br>Navigate to: **Management Console → Personal Info → Account Information → Basic Information → APP ID**.                                   |

After filling in the authentication information, click **"Next"** to proceed to **"Target Configuration"**.

### **Target Configuration**

![](./images/tencentcloud-addobjectstorage-2.png)

* **Target Configuration Description**

| **Configuration Item**           | **Example Value**                           | **Description**                                                                                                                                                                                                                              |
|----------------------------------|---------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Region                           | North China - Beijing 4                     | In the public cloud, it is recommended to select the same region as the object storage to avoid additional downstream traffic charges.                                                                                                       |
| Linux Transition Host Image      | Auto Upload                                 | This image is used for disaster recovery drills and recovery operations. If the cloud platform does not support uploading custom images, users must manually upload, select, and download the image.                                          |
| Windows Transition Host Image    | Auto Upload                                 | This image is used for disaster recovery drills and recovery operations. If the cloud platform does not support uploading custom images, users must manually upload, select, and download the image.                                          |
| Console to Transition Host Network | Private Network / Public Network            | This option is used for the communication between the console and the transition host:<br>1. During initialization, it is used to create the transition host image.<br>2. During startup, it configures communication with the transition host.<br>**Recommendations:**<br>① In private clouds, if the DR console can directly communicate with the VM's internal IP, select the private network.<br>② In public clouds, if there is no dedicated line, select the public network. |
| Name                             | Tencent Cloud - North China Region (Beijing) | If no ID is entered, the system will automatically generate one.                                                                                                                                                                              |

After completing the target configuration, click **"Next"** to proceed to **"Other Settings"**.

<!-- @include: ./huawei.md#snippet -->