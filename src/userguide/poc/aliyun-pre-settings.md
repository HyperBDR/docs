# Alibaba Cloud Pre-Settings

[[toc]]

## Create Alibaba Cloud RAM Sub-account for DR Target

Create an Alibaba Cloud RAM account and assign the required permissions. For detailed requirements, refer to the documentation below. Additionally, create Access Key ID and Access Secret Key for this RAM account.

### Create RAM Account

#### Alibaba Cloud Official Documentation:

- [https://www.alibabacloud.com/help/en/ram/user-guide/create-a-ram-user](https://www.alibabacloud.com/help/en/ram/user-guide/create-a-ram-user)

### Grant RAM User Permissions

#### Alibaba Cloud Official Documentation:

- [https://www.alibabacloud.com/help/en/ram/user-guide/grant-permissions-to-the-ram-user](https://www.alibabacloud.com/help/en/ram/user-guide/grant-permissions-to-the-ram-user)


### Manage RAM User Access Keys

#### Alibaba Cloud Official Documentation:

- [https://www.alibabacloud.com/help/en/ram/user-guide/create-an-accesskey-pair](https://www.alibabacloud.com/help/en/ram/user-guide/create-an-accesskey-pair)

### Alibaba Cloud RAM Permission Requirements

::: tip
Alibaba Cloud uses different API versions across regions (v2 and v3), and permission definitions may vary slightly by region. When creating permissions for HyperBDR, you must grant full access permissions to ECS, EVS, OBS, IMS, and network services.
:::

#### ECS/VPC/EVS/IMS

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ecs:*"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "vpc:*"
      ],
      "Resource": "*"
    }
  ]
}

```

#### OSS

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "oss:*"
      ],
      "Resource": "*"
    }
  ]
}
```

## Configure VPC & Subnet

Create VPC network and subnet according to Alibaba Cloud documentation. Set up your network based on the following DR scenarios:

1. Internal VPN Access:

If accessing through internal VPN, create a DR VPC network and place the HyperBDR ECS instance in this network.

2. DR VPC:

Create a dedicated VPC network and subnet for HyperBDR DR and backup, connected to your on-premises IDC through VPN.

3. Business VPC:

VPC network and subnet for DR takeover and disaster recovery drills.

## Create HyperBDR Security Group

::: tip
HyperBDR Security Group Name: SG-HyperBDR
:::

### Create Security Group Rules

::: warning
Important: For source IP range, we strongly recommend setting the source access for TCP:22 to a secure IP range instead of 0.0.0.0/0. Setting it to 0.0.0.0/0 exposes your ECS instances to the internet, allowing anyone to access and attack them, which is a security risk.

For example: If your external IP address is 110.242.68.66, you can set the source IP range to 110.242.68.66/32.
:::

| No. | Action | Type | Protocol & Port | Source | Description |
| --- | --- | --- | --- | --- | --- |
| 1 | Allow | IPv4 | TCP:22 | 0.0.0.0/0 | Default Linux SSH port |
| 2 | Allow | IPv4 | TCP:10443 | 0.0.0.0/0 | HyperBDR web console |
| 3 | Allow | IPv4 | TCP:30443 | 0.0.0.0/0 | HyperBDR Operations Management Platform web console port |
| 4 | Allow | IPv4 | TCP:30080 | 0.0.0.0/0 | HyperBDR HTTPS service port |

## Create ECS Instance for HyperBDR Installation

### Log in to Alibaba Cloud Console

### Create Alibaba Cloud ECS Instance Based on Configuration

> Alibaba Cloud Documentation: [https://www.alibabacloud.com/help/en/ecs/user-guide/create-a-subscription-instance-on-the-quick-launch-tab](https://www.alibabacloud.com/help/en/ecs/user-guide/create-a-subscription-instance-on-the-quick-launch-tab)  
> HyperBDR server resource configuration:

::: warning
We strongly recommend using key pair login instead of password login when creating ECS instances to ensure server access security.
:::

| Configuration Item | Parameter |
| :------------------ | :-------------------------------------------------------------- |
| Billing Type | Subscription or Pay-as-you-go |
| Region | Your region |
| Network and Availability Zone | Select your VPC and availability zone |
| Instance Type | 8 vCPU, 16 GB RAM |
| Image | Ubuntu 20.04 64-bit |
| System Disk | ESSD 500GB PL0 |
| Network | <VPC-HyperBDR-172.16.0.0\> |
| Subnet | <Subnet-HyperBDR-172.16.0.0\> (Automatically assign IP address) |
| Security Group | SG-HyperBDR |
| Elastic IP | Purchase now |
| ISP Line | Full-route BGP |
| Public Bandwidth | Pay by traffic |
| Bandwidth Size | 100 Mbps |
| Instance Name | HyperBDR-Prod |
| Login Credential | Key pair |
| Key Pair | <Your key pair\> |

> For more information about key pair login, see:
> [https://www.alibabacloud.com/help/en/ecs/user-guide/instance-logon-credential-management](https://www.alibabacloud.com/help/en/ecs/user-guide/instance-logon-credential-management)

## Test Network Access Between VPCs

### Test Network Connectivity Between DR VPC and Business VPC

- Step 1: Log in to Alibaba Cloud and create a test server  
Create a test cloud server on Alibaba Cloud (using Ubuntu 20.04 operating system). When configuring the network, select the Business VPC and subnet. Ensure the security group of the new test VM has an inbound access rule allowing port 22.

- Step 2: Test network access from DR VPC to Business VPC

Log in to the Alibaba Cloud console and access the HyperBDR server. Connect to hosts in the Business VPC using their internal network IP addresses.

Execute command:

```sh
ssh root@<Business_VPC_Host_IP_Address> 22
```

Test Result:  
If you can successfully access the host and enter the password, the connection is working normally.

### Test Network Connectivity Between Business VPCs

- Step 1: Create a new test cloud server using Ubuntu 20.04 operating system. When configuring the network, select a different Business VPC and subnet. Ensure the security group of the new test VM has an inbound access rule allowing port 22.

- Step 2: Log in to the test cloud server on different VPCs through the console and perform bidirectional connectivity tests using the following command.

Execute command:

```sh
ssh root@<Test_Host_IP_Address> 22
```

Test Result:  
If you can successfully access the host and enter the password, the connection is working normally.

## FAQ
### [Unable to upload images when adding an Alibaba Cloud recovery platform in Object Storage mode — how to fix it?](https://qa.oneprocloud.com/questions/D1C7/E1D7)