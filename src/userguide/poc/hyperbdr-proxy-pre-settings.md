# Sync Proxy Setup

[[toc]]

## Configure Sync Proxy IP Address

### Login Sync Proxy VM

::: tip
Default username and password for Sync Proxy ova:

* Username: root
* Password: Acb@132.Inst
:::

Use vCenter Web Console to login the Sync Proxy VM and to the following configurations.
![vcenter-web-console-1.png](./images/vcenter-web-console-1.png)  
![vcenter-web-console-2.png](./images/vcenter-web-console-2.png)  

### Configure Sync Proxy VM network

::: tip
The Sync Proxy ova is configured with default DHCP mode for networking. If the source production environment network you selected supports DHCP, confirm the virtual machine's IP and proceed. If the source production environment network does not use DHCP, manual configuration of the machine's network is required.
:::

#### Confirm the virtual machine's network adapter device name

```shell
ip a
```

![confirm-vm-network-device-name-1.png](./images/confirm-vm-network-device-name-1.png)

#### Configure a IP address and gateway

::: tip
Configuring the network of the Sync Proxy VM using the command method is temporary. An unexpected restart will lose the network configuration. It is recommended to configure the network using the configuration file method.
:::

```shell
sudo ifconfig eth0 192.168.7.48/20 && sudo route add default gw 192.168.0.1 eth0
```
![configure-ip-address-and-gateway-1.png](./images/configure-ip-address-and-gateway-1.png)

#### Modify network interface configuration file

Confirm the network interface configuration file

> The file extension is usually [.yaml]

![configure-ip-address-and-gateway-2.png](./images/configure-ip-address-and-gateway-2.png)

The following command will directly overwrite the specified network configuration content into the specified configuration file. Please modify the network parameters (such as IP address, gateway, DNS, etc.) according to your actual needs.  

```shell
echo "network:
  version: 2
  renderer: networkd
  ethernets:
    eth0:
      addresses:
        - 192.168.7.48/20
      gateway4: 192.168.0.1
" | sudo tee /etc/netplan/70-netplan-set.yaml && sudo netplan apply
```
![configure-ip-address-and-gateway-3.png](./images/configure-ip-address-and-gateway-3.png)

### Restart Network

```
sudo systemctl restart systemd-networkd
```

### Testing

Try to ping VMware vCenter IP or ESXi IP, check if you can get correct response.

```bash
ping <vcenter ip or esxi ip>
```

## Configure NTP Server

### Check Current Time Synchronization Status

```bash
timedatectl status
```
This command shows the current system time, time synchronization status, and the NTP server in use.

### Modify timesyncd Configuration

Edit the configuration file /etc/systemd/timesyncd.conf:

```bash
sudo vim /etc/systemd/timesyncd.conf
```

Find and modify the [Time] section as below:

```bash
[Time]
NTP=ntp.aliyun.com
FallbackNTP=ntp1.aliyun.com ntp2.aliyun.com
```

- NTP: Preferred NTP server.
- FallbackNTP: Backup servers if the primary fails.

There **<ntp.aliyun.com>** is your ntp server ip address or FQDN domain name.
There **<ntp1.aliyun.com>** **<ntp2.aliyun.com>** is your backup ntp server ip address or FQDN domain name, if you don't have this, you use # to annotation on this line begen.

Save and exit the editor.

### Restart timesyncd Service

After modifying the configuration, restart the service:

```bash
systemctl restart systemd-timesyncd
```

Enable the service to start automatically on boot:

```bash
systemctl enable systemd-timesyncd
```

### Verify Synchronization

Check synchronization status again:

```bash
timedatectl status
```

You should see System clock synchronized: yes.
To view detailed synchronization logs:

```bash
journalctl -u systemd-timesyncd
```

### (Optional) Set the Correct Timezone

If necessary, set the correct system timezone, for example:

```bash
sudo timedatectl set-timezone Asia/Shanghai
```

There **<Asia/Shanghai>** is your local timezone.

## Enable Access Policy for Sync Proxy

Open the network access policy in your firewall for synchronizing Sync Proxy nodes to vCenter and all ESXi hosts managed by vCenter.

1. Sync Proxy nodes need to have normal access to vCenter on port 443.
2. Sync Proxy nodes need to have normal access to all ESXi hosts managed by vCenter on port 902.

::: tip
Sync Proxy nodes access the vCenter API interface for authentication, and they retrieve data by calling the ESXi host where the disaster recovery production site VM are located. Therefore, it is necessary to open network access policies for all ESXi hosts managed by vCenter.
:::

::: tip
In VMware production environment, maybe use domain name to access EXSi. You need to configure domain name mapping or DNS service address for Sync Proxy to resolve the domain name.
Reference Documentation: [How does Sync Proxy access EXSi using a domain name?](https://docs.oneprocloud.com/userguide/faq/faq.html#how-does-sync-proxy-access-exsi-using-a-domain-name)
:::


## Test Access Policy for Sync Proxy

Test if Sync Proxy can connect to vCenter 443 port and ESXis 902 port which is management by vCenter.

### Test vCenter/ESXi Connectivity

NOTE: Repeat this steps if you have multiple vCenter or ESXis to be protected.

Test Port 443

```
ssh -v -p 443 <vCenter/ESXi IP/Domain>
```

Success Response:
::: tip
If it displays 'Connection established', it means the link port is normal.
:::

```
OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 58: Applying options for *
debug1: Connecting to <vCenter/ESXi IP/Domain> [<vCenter/ESXi IP/Domain>] port 443.
debug1: Connection established.
```

Test Port 902

```
ssh -v -p 902 <ESXi IP/Domain>
```

Success Response:
::: tip
If it displays 'Connection established', it means the link port is normal.
:::

```
OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 58: Applying options for *
debug1: Connecting to <vCenter/ESXi IP/Domain> [<vCenter/ESXi IP/Domain>] port 902.
debug1: Connection established.
```

## Test Network Connectivity from Sync Proxy to Object Storage

::: tip
Make sure you already login to Sync Proxy VM
:::

### Internet

Ensure your Sync Proxy can access internet before testing.

#### Public DNS Connectivity Testing

```
ping -c 4 -t 2 8.8.8.8
```

Success Response:

```
ping -c 4 -t 2 8.8.8.8
PING 8.8.8.8 (8.8.8.8): 56 data bytes
64 bytes from 8.8.8.8: icmp_seq=0 ttl=111 time=43.362 ms
64 bytes from 8.8.8.8: icmp_seq=1 ttl=111 time=49.807 ms

--- 8.8.8.8 ping statistics ---
2 packets transmitted, 2 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 43.362/46.585/49.807/3.222 ms
```

#### Huawei Object Storage Bucket Connectivity

```
curl -I https://obs.ap-southeast-3.myhuaweicloud.com
```

Success Response:

```
HTTP/1.1 405 Method Not Allowed
Server: OBS
Date: Thu, 29 Feb 2024 08:29:51 GMT
Content-Type: application/xml
Content-Length: 380
Connection: close
x-reserved: amazon, aws and amazon web services are trademarks or registered trademarks of Amazon Technologies, Inc
x-amz-request-id: 0000018DF3FBF121900FFB988BE0FC8D
Allow: HEAD, GET, OPTIONS
x-amz-id-2: 32AAAQAAEAABAAAQAAEAABAAAQAAEAABCRjxc+HEW3ehsrcsKS60jUgz7XhG8uyS
```

Note: This command is primarily used to test the accessibility of Huawei Cloud Object Storage buckets. Currently, the tested OBS domain is for the Huawei Cloud Singapore region. If you need to test in a different region, please refer to the official Huawei Cloud documentation to find the corresponding Endpoint domain address.

Reference Link: [https://developer.huaweicloud.com/intl/en-us/endpoint?OBS](https://developer.huaweicloud.com/intl/en-us/endpoint?OBS)

### VPN

#### Check Object Storage Service Endpoint

Make sure object storage service endpoint address return internal ip address.

```sh
ping obs.ap-southeast-3.myhuaweicloud.com
```

Success Response:

```
[root@data-sync-proxy-2024-0229-145824 ~]# ping obs.ap-southeast-3.myhuaweicloud.com  
PING obs.lz01.ap-southeast-3.myhuaweicloud.com (100.125.80.30) 56(84) bytes of data.  
64 bytes from ecs-159-138-80-62.compute.hwclouds-dns.com (100.125.80.30): icmp_seq=1 ttl=53 time=1.24 ms  
64 bytes from ecs-159-138-80-62.compute.hwclouds-dns.com (100.125.80.30): icmp_seq=2 ttl=53 time=0.971 ms  
64 bytes from ecs-159-138-80-62.compute.hwclouds-dns.com (100.125.80.30): icmp_seq=3 ttl=53 time=0.972 ms
```

::: tip
Huawei Cloud Object Storage Service internal IP Range: 100.125.xx. If there is no ICMP response, it is considered normal.
:::

#### Huawei Object Storage Bucket Connectivity

```sh
curl -I https://obs.ap-southeast-3.myhuaweicloud.com
```

Success Response:

```
HTTP/1.1 405 Method Not Allowed
Server: OBS
Date: Thu, 29 Feb 2024 08:29:51 GMT
Content-Type: application/xml
Content-Length: 380
Connection: close
x-reserved: amazon, aws and amazon web services are trademarks or registered trademarks of Amazon Technologies, Inc
x-amz-request-id: 0000018DF3FBF121900FFB988BE0FC8D
Allow: HEAD, GET, OPTIONS
x-amz-id-2: 32AAAQAAEAABAAAQAAEAABAAAQAAEAABCRjxc+HEW3ehsrcsKS60jUgz7XhG8uyS
```

::: tip
This command is primarily used to test the accessibility of Huawei Cloud Object Storage buckets. Currently, the tested OBS domain is for the Huawei Cloud Singapore region. If you need to test in a different region, please refer to the official Huawei Cloud documentation to find the corresponding Endpoint domain address.
:::

Reference Link: [https://developer.huaweicloud.com/intl/en-us/endpoint?OBS](https://developer.huaweicloud.com/intl/en-us/endpoint?OBS)

## Test Network Connectivity from Sync Proxy to HyperBDR

::: tip
This step needs to be tested after the installation of HyperBDR is completed.
:::

::: tip
Default username and password for Sync Proxy ova:

* Username: root
* Password: Acb@132.Inst

If you don't know how to use SSH on a Windows system, please refer to the following link:

[How do I connect to SSH on Windows?](../faq/faq.md)
:::

### Option 1: Public Network Access

Test the network connectivity from the production site to Huawei Cloud HyperBDR

- Step1: Log in to the Sync Proxy Node

- Step2: Test Access to HyperBDR Port 10443 and Port 30080

Execute Command: 
```sh
ssh -v -p 10443 <HyperBDR Public IP>
```

Test Result: If the input results include the information "[debug1: Connection established.]" it indicates that there are no issues with network connectivity.

```
OpenSSH_7.4p1, OpenSSL 1.0.2k-fips 26 Jan 2017
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 58: Applying options for *
debug1: Connecting to <HyperBDR Public IP> [<HyperBDR Public IP>] port 10443.
debug1: Connection established.
```
Execute Command: 
```sh
ssh -v -p 30080 <HyperBDR Public IP>
```

Test Result: If the input results include the information "[debug1: Connection established.]" it indicates that there are no issues with network connectivity.

```
OpenSSH_7.4p1, OpenSSL 1.0.2k-fips 26 Jan 2017
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 58: Applying options for *
debug1: Connecting to <HyperBDR Public IP> [<HyperBDR Public IP>] port 30080.
debug1: Connection established.
```

### Option 2: Internal VPN Access

Test the network connectivity from the production site to Huawei Cloud HyperBDR

- Step1: Log in to the Sync Proxy Node  

- Step2: Test Access to HyperBDR Port 10443 and Port 30080  

Execute Command:  
```sh
ssh -v -p 10443 <HyperBDR Internal IP>
```
Test Result: If the input results include the information "[debug1: Connection established.]" it indicates that there are no issues with network connectivity.

```
OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 58: Applying options for *
debug1: Connecting to <HyperBDR Internal IP> [<HyperBDR Internal IP>] port 10443.
debug1: Connection established.
```

Execute Command: 

```sh
ssh -v -p 30080 <HyperBDR Internal IP>
```

Test Result: If the input results include the information "[debug1: Connection established.]" it indicates that there are no issues with network connectivity.

```
OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 58: Applying options for *
debug1: Connecting to <HyperBDR Internal IP> [<HyperBDR Internal IP>] port 30080.
debug1: Connection established.
```

## Sync Proxy DNS Settings

::: tip
This step is only used when connecting to the cloud platform via VPN.  
If your disaster recovery environment is interconnected with the production site's intranet through Huawei Cloud VPN, after creating the VPC Endpoint service, you need to add the resolution address of the Huawei Cloud intranet OBS VPC Endpoint service in the network where the production site's Proxy host is located.
:::

::: tip
Default username and password for Sync Proxy ova:

* Username: root
* Password: Acb@132.Inst

If you don't know how to use SSH on a Windows system, please refer to the following link:

[How do I connect to SSH on Windows?](../faq/faq.md)
:::

### Get DNS domain name

::: tip
\<Huawei DNS Endpoint Service IPaddress\> is the IP address of the DNS endpoint service after creating the VPC Endpoint service.   
:::

![option-2-internal-vpn-access-configure-proxy-nodes-to-use-huawei-cloud-intranet-dns-resolution-2.png](./images/option-2-internal-vpn-access-configure-proxy-nodes-to-use-huawei-cloud-intranet-dns-resolution-2.png)  

### Configure Firewall or Network Devices such as Switches

::: tip
Example: Palo Alto Firewall  
The following operations are performed in the firewall web management interface.
:::

1. Navigate to [Network] > [DNS Sync Proxy] .

2. Click [Add] to bring up the DNS Sync Proxy dialog box.

3. Select the interface on which DNS Sync Proxy should be enabled. In the following figure, DNS Sync Proxy is enabled on Ethernet 1/2 and 1/3 interfaces.

4. Select the primary and secondary servers to which the firewall should forward DNS queries. This example shows the configuration of enabling DNS Sync Proxy on Ethernet interfaces 1/2 and 1/3. The active DNS server is set to 10.0.0.246 (This IP is configured as the Huawei Cloud internal DNS Server Addresse).

::: tip
Configure the Huawei Cloud internal DNS address based on the region where you use Huawei Cloud resources.  
Huawei Cloud internal DNS service address at:  [https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html](https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html)
:::

![configure-a-huawei-cloud-intranet-dns-address-for-the-network-device-1.png](./images/configure-a-huawei-cloud-intranet-dns-address-for-the-network-device-1.png)

## Install Sync Proxy

::: tip
Sync Proxy should be installation after the completion of the HyperBDR installation process.
:::

::: tip
Default username and password for Sync Proxy ova:

* Username: root
* Password: Acb@132.Inst

If you don't know how to use SSH on a Windows system, please refer to the following link:

[How do I connect to SSH on Windows?](../faq/faq.md)
:::

### Log in to the HyperBDR console

![install-proxy-1.png](./images/install-proxy-1.png) 

![install-proxy-2.png](./images/install-proxy-2.png) 

### Retrieve the installation command

Click on the top menu bar **"Configuration"**, **"Production Site"**, **"VMware"** then click the **"Add"** button. 

![install-proxy-3.png](./images/install-proxy-3.png) 

In the popped-up page, in the **"Step 2: Installing synchronization nodes"** section, under **"2. Execute the following command to install"** click on **"Copy command"** to obtain the installation command for the Sync Proxy node. 

![install-proxy-4.png](./images/install-proxy-4.png) 

### Log in to the Proxy Node

![install-proxy-5.png](./images/install-proxy-5.png) 

### Execute the installation command on the Sync Proxy node

Paste the copied installation command into the command line and execute it. Wait for the command to execute successfully; this indicates that the Sync Proxy synchronization node program is running normally. 

![install-proxy-6.png](./images/install-proxy-6.png)

##  Add and Configure Cloud Sync Gateway

::: tip
Already logged in to the HyperBDR console by default.  
After configuring Cloud Sync Gateway, it will automatically invoke the API of the DR target cloud platform to create a cloud instance as Cloud Sync Gateway.  
Cloud Sync Gateway CPU : 2 Core  
Cloud Sync Gateway RAM : 2 GB  
Cloud Sync Gateway System Disk Size : 40 GB
:::

![add-and-configure-hypergate-1.png](./images/add-and-configure-hypergate-1.png)

### Operational Steps

::: tip
The following operations use Huawei Cloud as an example. Please choose the corresponding disaster recovery target cloud based on your actual disaster recovery scenario.
:::

::: tip
The Cloud Sync Gateway is an automatically created cloud instance that needs to be in the same region as the business VPC for DR.
:::

**Step1.** Click on "Configuration Management" in the top menu, choose "Storage Configuration" on the left, select "Block Storage," and click on the "Add" button.

![add-and-configure-hypergate-2.png](./images/add-and-configure-hypergate-2.png)

**Step 2.** Fill in the information as follows to add the cloud platform. 

> This step will automatically create a block storage recovery Cloud Sync Gateway under the Huawei Cloud authentication tenant after authentication.

Choose Huawei Cloud in the Recovery Platform.

Fill in the Huawei Cloud authentication information as shown in the image below when adding the target disaster recovery platform:

- Access Key ID: Huawei Cloud account Access Key ID  
- Access Key Secret: Huawei Cloud account Access Key Secret  
- Project: Optional, can be left blank  
- Project ID: Optional, can be left blank  
- Skip Driver Adaption: Optional

After confirming the filled information, click the "Next" button.

![add-and-configure-hypergate-3.png](./images/add-and-configure-hypergate-3.png)

Choose the relevant information to create the Cloud Sync Gateway instance under the authentication tenant and click the "Next" button.

![add-and-configure-hypergate-4.png](./images/add-and-configure-hypergate-4.png)

After the name and status are available, wait for the "Createing" process to complete, then click the "Complete" button.

![add-and-configure-hypergate-5.png](./images/add-and-configure-hypergate-5.png)

Check the "Block Storage" - "Cloud Sync Gateway" page, and the status should be "Available".

![add-and-configure-hypergate-6.png](./images/add-and-configure-hypergate-6.png)

## AWS Site Sync Proxy network configuration

Access an Amazon Web Services service using an interface VPC endpoint.

::: tip
AWS Reference Documentation:   
[https://docs.amazonaws.cn/en_us/vpc/latest/privatelink/create-interface-endpoint.html#create-interface-endpoint-aws](https://docs.amazonaws.cn/en_us/vpc/latest/privatelink/create-interface-endpoint.html#create-interface-endpoint-aws)
:::

### Prerequisites

::: tip
AWS Reference Documentation:   
[https://docs.amazonaws.cn/en_us/vpc/latest/privatelink/create-interface-endpoint.html#prerequisites-interface-endpoints](https://docs.amazonaws.cn/en_us/vpc/latest/privatelink/create-interface-endpoint.html#prerequisites-interface-endpoints)
:::

Create a security group for the endpoint network interface that allows the expected traffic from the resources in your VPC. For example, to ensure that the Amazon CLI can send HTTPS requests to the Amazon Web Services service, the security group must allow inbound HTTPS traffic.

![aws-site-sync-proxy-network-configuration-1.png](./images/aws-site-sync-proxy-network-configuration-1.png)

To use private DNS, you must enable DNS hostnames and DNS resolution for your VPC. For more information, see View and update DNS attributes in the Amazon VPC User Guide.

![aws-site-sync-proxy-network-configuration-2.png](./images/aws-site-sync-proxy-network-configuration-2.png)

### Create VPC Endpoints Step

1. Open the Amazon VPC console

![aws-site-sync-proxy-network-configuration-3.png](./images/aws-site-sync-proxy-network-configuration-3.png)

2. In the navigation pane, choose Endpoints.

![aws-site-sync-proxy-network-configuration-4.png](./images/aws-site-sync-proxy-network-configuration-4.png)

3. Choose Create endpoint.

![aws-site-sync-proxy-network-configuration-5.png](./images/aws-site-sync-proxy-network-configuration-5.png)

4. To access the AWS API for EC2 and EBS services, create service endpoints for each.

![aws-site-sync-proxy-network-configuration-6.png](./images/aws-site-sync-proxy-network-configuration-6.png)

![aws-site-sync-proxy-network-configuration-7.png](./images/aws-site-sync-proxy-network-configuration-7.png)

5. Wait for the status to become available.

![aws-site-sync-proxy-network-configuration-8.png](./images/aws-site-sync-proxy-network-configuration-8.png)

## Test network connectivity of the Sync Proxy to AWS Service Endpoints

::: tip
 Find the Service endpoints based on the region you are using.
:::

**AWS International EC2 Service endpoints:**  
[https://docs.aws.amazon.com/general/latest/gr/ec2-service.html#ec2_region](https://docs.aws.amazon.com/general/latest/gr/ec2-service.html#ec2_region)  
**AWS International EBS Service endpoints:**  
[https://docs.aws.amazon.com/general/latest/gr/ebs-service.html#ebs_region](https://docs.aws.amazon.com/general/latest/gr/ebs-service.html#ebs_region)  

**AWS China Service endpoints:**  
[https://docs.amazonaws.cn/aws/latest/userguide/endpoints-Beijing.html](https://docs.amazonaws.cn/aws/latest/userguide/endpoints-Beijing.html)  
[https://docs.amazonaws.cn/aws/latest/userguide/endpoints-Ningxia.html](https://docs.amazonaws.cn/aws/latest/userguide/endpoints-Ningxia.html)  

### Test AWS API Connectivity

::: tip
Log in to Sync Proxy EC2 by default.
:::

Execute the following command on Sync Proxy:


```sh
## Please use the Service endpoints in the actual area.
ssh -v -p 443 ec2.cn-north-1.amazonaws.com.cn
ssh -v -p 443 ebs.cn-north-1.amazonaws.com
```

![test-network-connectivity-of-the-sync-proxy-to-aws-service-endpoints-1.png](./images/test-network-connectivity-of-the-sync-proxy-to-aws-service-endpoints-1.png)  

If it displays 'Connection established', it means the link port is normal. 
If your scenario uses VPN or dedicated line instead of EIP, the resolution address will be the intranet of the same subnet.
