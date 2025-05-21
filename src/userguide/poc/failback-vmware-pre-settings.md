# VMware Pre-Settings

[[toc]]

## Download the Transition Host Image file (ISO) and upload it to the VMware storage.

### Download the Transition Host Image file (ISO)

::: tip
Download the ISO image to the download address in the document.  
Document link: [https://docs.oneprocloud.com/userguide/poc/failback-hyperbdr-pre-settings.html#download-the-failback-transition-image-for-the-failback-transition-host](https://docs.oneprocloud.com/userguide/poc/failback-hyperbdr-pre-settings.html#download-the-failback-transition-image-for-the-failback-transition-host)
:::

### Upload the Transition Host Image file (ISO) to the VMware storage

#### Log in to the VMware vSphere Client console

![complete-doc-for-block-storage-failback-8.png](./images/complete-doc-for-block-storage-failback-8.png)

#### Select [Storage]

![complete-doc-for-block-storage-failback-9.png](./images/complete-doc-for-block-storage-failback-9.png)

![complete-doc-for-block-storage-failback-10.png](./images/complete-doc-for-block-storage-failback-10.png)

#### On the left navigation bar, choose the available [Datastore]. Click [Files] and select the storage path for the image file,click [Upload Files].

![complete-doc-for-block-storage-failback-11.png](./images/complete-doc-for-block-storage-failback-11.png)

Select the downloaded Transition Host Image file (ISO), and wait for the image upload to complete.

![complete-doc-for-block-storage-failback-12.png](./images/complete-doc-for-block-storage-failback-12.png)

![complete-doc-for-block-storage-failback-13.png](./images/complete-doc-for-block-storage-failback-13.png)


## Use the Transition Host Image to create a virtual machine in the production VMware environment as the Failback Transition Host

### Create a new virtual machine

Select your ESXi host or data center, right-click, and choose [New Virtual Machine]

![complete-doc-for-block-storage-failback-14.png](./images/complete-doc-for-block-storage-failback-14.png)

### New Virtual Machine Configuration

**Step 1: Choose [Create a new virtual machine], and after configuring, click [NEXT]**

![complete-doc-for-block-storage-failback-15.png](./images/complete-doc-for-block-storage-failback-15.png)

**Step 2: Enter the virtual machine name, select an available cluster,click [NEXT].**

![complete-doc-for-block-storage-failback-16.png](./images/complete-doc-for-block-storage-failback-16.png)

**Step 3: Choose an available [Compute Resource],click [NEXT].**

![complete-doc-for-block-storage-failback-17.png](./images/complete-doc-for-block-storage-failback-17.png)

**Step 4: Choose an available [Storage],click [NEXT].**

![complete-doc-for-block-storage-failback-18.png](./images/complete-doc-for-block-storage-failback-18.png)

**Step 5: Choose compatibility (leave it as default), click [NEXT].**

![complete-doc-for-block-storage-failback-19.png](./images/complete-doc-for-block-storage-failback-19.png)

**Step 6: Choose the operating system. For the operating system family, select [Linux], and for the operating system version, choose [Other Linux (64-bit)], click [NEXT].**

![complete-doc-for-block-storage-failback-20.png](./images/complete-doc-for-block-storage-failback-20.png)

**Step 7-1: Customize hardware by configuring CPU ≥2 and memory ≥4GB.**

![complete-doc-for-block-storage-failback-21.png](./images/complete-doc-for-block-storage-failback-21.png)

**Step 7-2: Customize hardware by selecting an available network configuration**

![complete-doc-for-block-storage-failback-22.png](./images/complete-doc-for-block-storage-failback-22.png)

![complete-doc-for-block-storage-failback-23.png](./images/complete-doc-for-block-storage-failback-23.png)

**Step 7-3: Customize hardware by configuring system disk and data disk.**

::: warning
The number and capacity of disks for the Failback Transition Host need to be consistent with the Takeover Host.
:::

![complete-doc-for-block-storage-failback-24.png](./images/complete-doc-for-block-storage-failback-24.png)

![complete-doc-for-block-storage-failback-25.png](./images/complete-doc-for-block-storage-failback-25.png)

**Step 7-4: Configure the CD/DVD drive. Choose the type as [Datastore ISO File], in the new window select the uploaded Transition Host Image file (ISO) from the storage, and check the option [Connect At Power On].**

![complete-doc-for-block-storage-failback-26.png](./images/complete-doc-for-block-storage-failback-26.png)

![complete-doc-for-block-storage-failback-27.png](./images/complete-doc-for-block-storage-failback-27.png)

![complete-doc-for-block-storage-failback-28.png](./images/complete-doc-for-block-storage-failback-28.png)

![complete-doc-for-block-storage-failback-29.png](./images/complete-doc-for-block-storage-failback-29.png)

**Step 7-5: The SCSI controller of the disk for the universal storage Failback Transition Host is identical to that of the source machine in VMware.  Leave other configurations as default, click [NEXT].**

![vmware-scsi-controller-en-1.png](./images/vmware-scsi-controller-en-1.png)

![vmware-scsi-controller-en-2.png](./images/vmware-scsi-controller-en-2.png)

**Step 8: After confirming that the information is correct, click [FINISH] to start the creation.**

![complete-doc-for-block-storage-failback-30.png](./images/complete-doc-for-block-storage-failback-30.png)

### Start the virtual machine

Right-click on the newly created virtual machine, choose [**Power**] \> [**Power On**].

![complete-doc-for-block-storage-failback-31.png](./images/complete-doc-for-block-storage-failback-31.png)

Open the virtual machine console and check the startup status of the virtual machine.

![complete-doc-for-block-storage-failback-32.png](./images/complete-doc-for-block-storage-failback-32.png)

The virtual machine system has started successfully.

![complete-doc-for-block-storage-failback-33.png](./images/complete-doc-for-block-storage-failback-33.png)


## Configure the IP address for the Failback Transition Host

### Log in to the VMware vSphere Client console

![complete-doc-for-block-storage-failback-34.png](./images/complete-doc-for-block-storage-failback-34.png)

### Access the Failback Transition Host virtual machine through the console.

![complete-doc-for-block-storage-failback-35.png](./images/complete-doc-for-block-storage-failback-35.png)

### Log in system

> Default username: root  
> Default password: Acb@132.Inst

![complete-doc-for-block-storage-failback-36.png](./images/complete-doc-for-block-storage-failback-36.png)

### Manually configure the network

::: tip
The Transition Host Image is configured with default DHCP mode for networking. If the VMware network you selected supports DHCP, confirm the virtual machine's IP and proceed. If the VMware network does not use DHCP, manual configuration of the virtual machine's network is required
:::

#### Confirm the virtual machine's network adapter device name

```shell
ip a
```

![complete-doc-for-block-storage-failback-37.png](./images/complete-doc-for-block-storage-failback-37.png)

#### Clear network configuration information

```shell
ip addr flush dev eth0
```

Configure a temporary IP address and gateway

::: tip
Configure with example information. Please replace the IP address/mask [192.168.x.x/20] and gateway address [192.168.0.1] based on your actual situation.
:::

```shell
ip addr add 192.168.x.x/20 dev ens160 && ip route add default via 192.168.0.1
```

#### View network configuration

```shell
ip a
```

![complete-doc-for-block-storage-failback-38.png](./images/complete-doc-for-block-storage-failback-38.png)

```shell
ip route
```

![complete-doc-for-block-storage-failback-39.png](./images/complete-doc-for-block-storage-failback-39.png)

## VMware User Permission Requirements（Host Failback）

### VMware User Preparation（Host Failback）

Prepare the VMware user authentication information for failback and ensure that the user has the necessary permissions. 

For configuring VMware user permissions, please refer to the following document.

Document Link:[https://docs.oneprocloud.com/userguide/poc/vmware-pre-settings.html#vcenter-permission-open-settings-steps](https://docs.oneprocloud.com/userguide/poc/vmware-pre-settings.html#vcenter-permission-open-settings-steps)

### VMware User Permission (Host Failback)

| **Permission Type** | **Permissions** |
| --- | --- |
| Datastore | Low level file operations |
| | Allocate space |
| Network | Assign network |
| Resource | Assign virtual machine to resource pool |
| vApp | Import |
| Virtual machine | **Interaction** |
| | Power off |
| | Power on |
| | Reset |
| | **Guest operations** |
| | Guest operation queries |
| | Guest operation program execution |
| | **Change Configuration** |
| | Change CPU count |
| | Change Memory |
| | Change Settings |
| | Add or remove device |
| | Add new disk |
| | Add existing disk |
| | Remove disk |
| | Advanced configuration |
| | **Edit Inventory** |
| | Create from existing |
| | Remove |
| | **Provisioning** |
| | Clone virtual machine |

## VMware Network Policy Enablement (Host Failback)


1. The HyperBDR node host needs to have normal access to the vCenter on port 443.  
2. The HyperBDR node host needs to have normal access to all ESXi hosts managed by vCenter on port 443.  
3. The VMware business network virtual machine (failback host virtual machine) needs to have normal access to the object storage on port 443.  
4. The HyperBDR node host needs to have normal access to port 10729 of the VMware business network virtual machine (failback host virtual machine).

::: tip
The HyperBDR node host requires access to the vCenter API interface for authentication. By invoking the Disaster Recovery Production vCenter/ESXi interface, it creates a failback host virtual machine in the VMware business network, manages it, and automatically creates a failback host virtual machine. This involves accessing port 443 of Huawei Cloud Object Storage to retrieve data for failback host.
:::

## (Intranet VPN Access)Configure a Huawei cloud Intranet DNS address for the VMware Network-Object Storage Fallback

::: tip
If the configuration of the Huawei Cloud intranet OBS VPC Endpoint service resolution address has already been completed during the disaster recovery to Huawei Cloud, there is no need to repeat the configuration.
:::

If your fallback environment is interconnected with the on-premises network through Huawei Cloud VPN, after creating VPC Endpoint services, it is necessary to configure the Huawei Cloud intranet OBS VPC Endpoint service resolution address in the local vCenter/ESXi host management network and the virtual machine business network.  
Reference Document: [https://docs.oneprocloud.com/userguide/poc/hyperbdr-agent-pre-settings.html#option-2-intranet-vpn-access-configure-huawei-cloud-intranet-dns-address-for-the-network-device-where-the-agent-host-resid](https://docs.oneprocloud.com/userguide/poc/hyperbdr-agent-pre-settings.html#option-2-intranet-vpn-access-configure-huawei-cloud-intranet-dns-address-for-the-network-device-where-the-agent-host-resid)

## (Intranet VPN Access)Test the connectivity from the VMware failback host network to Huawei Cloud OBS network

### Prepare and log in the test host 

::: tip
The network of the test host needs to be consistent with the network of the fallback recovery host.  
:::

### Huawei Cloud Private DNS Connection Test

::: tip
Please refer to the following document to find the dedicated Network Domain Service (NDS) address based on the used Huawei Cloud OBS region.  
Reference Document:[https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html](https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html)
:::

```shell
ping 100.125.1.250
```

Success Response:

![docs-of-object-storage-host-failback-5.png](./images/docs-of-object-storage-host-failback-5.png)

### Huawei Cloud Object Storage Connection Test

```shell
ping https://obs.ap-southeast-3.myhuaweicloud.com
```

Success Response:

![docs-of-object-storage-host-failback-6.png](./images/docs-of-object-storage-host-failback-6.png)

::: tip
This command is primarily used to test the accessibility of Huawei Cloud Object Storage buckets. Currently, the tested OBS domain is applicable to the Huawei Cloud Singapore region. If you need to perform tests in different regions, please refer to the official Huawei Cloud documentation to find the corresponding Endpoint domain.  
Document Link: [https://developer.huaweicloud.com/intl/en-us/endpoint?OBS](https://developer.huaweicloud.com/intl/en-us/endpoint?OBS)
:::

## Verify the status of the Huawei Cloud Object Storage added by HyperBDR(Host Failback)

::: tip
The deployment of the HyperBDR environment has been completed by default.
:::

### Log in HyperBDR Console

![docs-of-object-storage-host-failback-7.png](./images/docs-of-object-storage-host-failback-7.png)

### Check the status of Huawei Cloud Object Storage

::: tip
The following operations use Huawei Cloud Object Storage as an example.
:::

Select [**Configuration**]> [**Object Storage**]> [**Failback**], and you can see the failback [**Object Storage**] you added. Confirm that the status of [**Object Storage**] is [**Available**].

![docs-of-object-storage-host-failback-8.png](./images/docs-of-object-storage-host-failback-8.png)

##  Add the vCenter/ESXi as an Object DR Gateway(Failback)

::: tip
Default deployment of HyperBDR environment completed
:::

### Login HyperBDR

![add-the-vcenteresxi-as-an-object-dr-gatewayfailback-1.png](./images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-1.png)

### Add Object DR Gateway(Failback)

**Step 1.** Select "Configuration" in the upper navigation bar, choose "Object DR Gateway" in the left menu, and click "Add" on the "Failback" tab.

![add-the-vcenteresxi-as-an-object-dr-gatewayfailback-2.png](./images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-2.png)

**Step 2.** Fill in the authentication information for the VMware platform on the "Authentication Information" page, and click "Next" after confirmation.

![add-the-vcenteresxi-as-an-object-dr-gatewayfailback-3.png](./images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-3.png)

**Step 3.** Configure the failback target platform VMware Setting, and click "Next" after confirmation.

![add-the-vcenteresxi-as-an-object-dr-gatewayfailback-4.png](./images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-4.png)

**Step 4. **The "Driver Adaption" option can remain at its default setting.

![add-the-vcenteresxi-as-an-object-dr-gatewayfailback-5.png](./images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-5.png)

**Step 5.** The Object DR Gateway(Failback) has been successfully added.

![add-the-vcenteresxi-as-an-object-dr-gatewayfailback-6.png](./images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-6.png)

