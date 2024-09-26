# Google Cloud Stack Pre-Settings

[[toc]]

## Create Google Cloud service account and create a key DR purpose

Create a Google Cloud **service account** and create **service account key** with correspinding permissions, detail requirement please refer to below document. And create a **service account key** of service account for setup.

### Create a service account

::: tip
Reference to Google Cloud official [Create a service account](https://cloud.google.com/iam/docs/service-accounts-create?hl=en#creating) documentation 
:::

1. In the Google Cloud console, go to the **[Create service account](https://console.cloud.google.com/projectselector/iam-admin/serviceaccounts/create)** page.

2. Select a Google Cloud project. 

 ![google-create-a-service-account-1.png](./images/google-create-a-service-account-1.png)

3. Enter a **Service account name** to display in the Google Cloud console

 ![google-create-a-service-account-2.png](./images/google-create-a-service-account-2.png)

> The Google Cloud console generates a service account ID based on this name. Edit the ID if necessary. You cannot change the ID later.

4. Optional: Enter a description of the service account.

5. Set access controls now, click **CREATE AND CONTINUE** and continue to the next step.

> **Select a role** menu, **Quick access** > **Basic** > **Roles**, then click **Editor**.

 ![google-create-a-service-account-3.png](./images/google-create-a-service-account-3.png)

6. When you are done adding roles, click **CONTINUE**.

7. Click **Done** to finish creating the service account.

### Create a service account key

::: tip
Reference to Google Cloud official [Create a service account key](https://cloud.google.com/iam/docs/keys-create-delete?hl=en#creating) documentation
:::

1. In the Google Cloud console, go to the **[Service accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)** page.

2. Select a project. 

3. Click the email address of the service account that you want to create a key for.

![google-create-a-service-account-key-1.png](./images/google-create-a-service-account-key-1.png)

4. Click the **KEYS** tab.

![google-create-a-service-account-key-2.png](./images/google-create-a-service-account-key-2.png)

5. Click the **ADD KEY** drop-down menu, then select **Create new key**.

6. Select **JSON** as the **Key type** and click **CREATE**.

![google-create-a-service-account-key-3.png](./images/google-create-a-service-account-key-3.png)

Clicking **CREATE** downloads a service account key file. After you download the key file, you cannot download it again.

The downloaded key has the following format, where `PRIVATE_KEY` is the private portion of the public/private key pair:

```
{  
    "type": "service_account",
    "project_id": "PROJECT_ID",
    "private_key_id": "KEY_ID",
    "private_key": "-----BEGIN PRIVATE KEY-----\nPRIVATE_KEY\n-----END PRIVATE KEY-----\n",
    "client_email": "SERVICE_ACCOUNT_EMAIL",
    "client_id": "CLIENT_ID",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://accounts.google.com/o/oauth2/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/SERVICE_ACCOUNT_EMAIL"  
}
```
open it and locate the value of **private_key** and copy it.

## Obtain Google Cloud Platform Credentials information

When targeting the **Google Cloud**, the following authentication information of the **Goole Cloud** platform is required to complete the authentication docking of the API interface.

[How to obtain Google Cloud Platform Credentials information?](https://docs.oneprocloud.com/userguide/faq/faq.html#how-to-obtain-google-cloud-platform-credentials-information)

## Create VPC & Subnet

::: tip
Reference to Google Cloud official [Create auto network](https://cloud.google.com/vpc/docs/create-modify-vpc-networks#create-auto-network) documentation

Reference document for disaster recovery [network planning overview](https://docs.oneprocloud.com/userguide/presales/dr-network-planning-recommendations.html) architecture
:::

Create VPC Network and Subnet According to Google Cloud Documentation. Explanation: Establish your network based on the following disaster recovery network scenarios.

1. Intranet VPN Access:

If accessing through an intranet VPN, create a DR VPC network and place HyperBDR ECS instances in this network.

2. Disaster Recovery VPC:

Dedicated VPC network and subnet for HyperBDR disaster recovery and backup, interconnected with the on-premises IDC through VPN.

3. Business VPC:

Business VPC network and subnet used for disaster takeover and drills.

## Create VPC Firewalls for HyperBDR or Cloud Sync Gateway

Open policies required for HyperBDR & Cloud Sync Gateway: [What port strategies should be opened for HyperBDR and Cloud Sync Gateway?](https://docs.oneprocloud.com/userguide/faq/faq.html#what-port-strategies-should-be-opened-for-hyperbdr-and-cloud-sync-gateway)

::: tip
Reference to Google Cloud official [Create VPC firewall rules](https://cloud.google.com/firewall/docs/using-firewalls#creating_firewall_rules) documentation
:::

1. Login to the [VPC networks](https://console.cloud.google.com/networking/networks/list), click you want used the **VPC Name**

![google-create-vpc-firewalls-for-hyperbdr-1.png](./images/google-create-vpc-firewalls-for-hyperbdr-1.png)

2. Click the **FIREWALLS** top menu, and click **ADD FIREWALL RULE** button

![google-create-vpc-firewalls-for-hyperbdr-2.png](./images/google-create-vpc-firewalls-for-hyperbdr-2.png)

Configure according to the open policy list. For specific configuration steps, refer to the official documentation.

## Configure disaster recovery drill network policy

For specific network policy requirements, please refer to the [How to configure a disaster recovery network policy?](https://docs.oneprocloud.com/userguide/faq/faq.html#how-to-configure-a-disaster-recovery-network-policy) documentation.

::: tip
Reference to Google Cloud official [Peer two VPC networks](https://cloud.google.com/vpc/docs/peer-two-networks) documentation
:::