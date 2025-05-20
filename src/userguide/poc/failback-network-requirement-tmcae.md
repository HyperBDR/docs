# TM CAE

[[toc]]

## (Intranet VPN Access) Create and configure the VPN service

::: tip
The VPC network of the TM CAE failback host connects to the local vCenter/ESXi VM service network.  
If the VPC network where the HyperBDR resides has been connected to the vCenter/ESXi service network through the VPN service when the Dr Is deployed to TM CAE, you do not need to connect the network again.
:::

### Configuration document

Configure VPN. For details, see TM CAE official documentation.

Document Link: [https://support.alphaedge.tmone.com.my/en-us/usermanual/vpn/en-us_topic_0133627788.html](https://support.alphaedge.tmone.com.my/en-us/usermanual/vpn/en-us_topic_0133627788.html)

## (Internal VPN Access) - Create VPC Endpoint service

::: tip
If your disaster recovery environment is interconnected with the production site's intranet through TM CAE VPN, and the production site needs to access TM CAE HyperBDR and OBS services through VPN during a disaster, then you need to purchase and configure VPC Endpoint services in TM CAE.  
You need to purchase two VPC Endpoint services, one for OBS and the other for DNS.
:::

::: tip
If you have purchased and configured the Endpoint service in the VPC when the disaster recovery system is deployed to TM CAE, you do not need to repeat this configuration.
:::

### Configure VPC Endpoint

 
TM CAE official definition: If you want to access OBS services from a local data center via VPN or Cloud Connect using an intranet method, you can achieve this by connecting through terminal endpoints to access terminal endpoint services.  
Document Link: [https://support.alphaedge.tmone.com.my/usermanual/vpcep/vpcep_02_0301.html](https://support.alphaedge.tmone.com.my/usermanual/vpcep/vpcep_02_0301.html)

## (Intranet VPN Access) Create and configure the VPN service - Agent

::: tip
The VPC network of the TM CAE failback host connects to the source production environment network.  
Note: If the VPC network where the HyperBDR resides has been connected to the source production environment network through the VPN service when the Dr Is deployed to TM CAE, you do not need to connect the network again.
:::

### Configuration document
Configure VPN. For details, see TM CAE official documentation.
Document Link: [https://support.alphaedge.tmone.com.my/en-us/usermanual/vpn/en-us_topic_0133627788.html](https://support.alphaedge.tmone.com.my/en-us/usermanual/vpn/en-us_topic_0133627788.html)

## (Intranet VPN Access) Create and Configure VPN Service - VMware

Requirement: The VPC network where TM CAE HyperBDR is located needs to be interconnected with the local vCenter/ESXi host management network and the upper-level virtual machine business network. 

::: tip
If during disaster recovery to TM CAE Cloud, the VPC network where HyperBDR is located is already connected to the vCenter/ESXi business network via a VPN service, then it is only necessary to establish connectivity between the VPC network where HyperBDR is located and the vCenter/ESXi host management network.
:::

To configure the VPN service, please refer to the detailed information in the official TM CAE Cloud documentation.  
Document Link: [https://support.alphaedge.tmone.com.my/en-us/usermanual/vpn/en-us_topic_0133627788.html](https://support.alphaedge.tmone.com.my/en-us/usermanual/vpn/en-us_topic_0133627788.html)


## (Intranet VPN Access) Create VPC Endpoint - VMware

::: tip
If the purchase and configuration of VPC Endpoint services have already been completed during the disaster recovery to TM CAE, there is no need to repeat the configuration.
:::

TM CAE official definition: If you want to access OBS services from a local data center via VPN or Cloud Connect using an intranet method, you can achieve this by connecting through terminal endpoints to access terminal endpoint services.  
Document Link: [https://support.alphaedge.tmone.com.my/usermanual/vpcep/vpcep_02_0301.html](https://support.alphaedge.tmone.com.my/usermanual/vpcep/vpcep_02_0301.html)

## (Intranet VPN Access) Test the network connectivity between the Failback Host and TM CAE OBS

::: tip
The VPN service has been configured on the TM CAE side, and the TM CAE side has connected to the production site through the VPN. You can perform the following tests.
:::

### The Failback Host is Linux 

#### Log in to the Failback Host .

::: tip
Ensure that the ssh command is running on the Failback Host.
:::

#### TM CAE Private DNS Connectivity Testing

::: tip
Refer to the following document to find the Private DNS server addresses based on the used object storage region.  
Reference documents: [https://support.alphaedge.tmone.com.my/en-us/usermanual/dns/dns_faq_002.html](https://support.alphaedge.tmone.com.my/en-us/usermanual/dns/dns_faq_002.html)
:::

```shell
ping 100.125.12.250
```

Success Response:

```
64 bytes from 100.125.12.250 (100.125.12.250): icmp_seq=1 ttl=44 time=0.255 ms
64 bytes from 100.125.12.250 (100.125.12.250): icmp_seq=2 ttl=44 time=0.294 ms
64 bytes from 100.125.12.250 (100.125.12.250): icmp_seq=3 ttl=44 time=0.300 ms
```

#### TM CAE Object Storage Connectivity Testing

```shell
ping obs.my-kualalumpur-1.alphaedge.tmone.com.my
```

Success Response:

```
64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=1 ttl=44 time=0.255 ms
64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=2 ttl=44 time=0.294 ms
64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=3 ttl=44 time=0.300 ms
```

::: tip
This command is primarily used to test the accessibility of TM CAE Object Storage buckets. Currently, the tested OBS domain is for the TM CAE Singapore region. If you need to test in a different region, please refer to the official TM CAE documentation to find the corresponding Endpoint domain address.  
Reference Link: [https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html](https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html)
:::


### The Failback Host is Windows

#### Log in to the Failback Host .

::: tip
Ensure that the ssh command exists on the Failback Host, and open the CMD command line.
:::

#### TM CAE Private DNS Connectivity Testing

::: tip
Refer to the following document to find the Private DNS server addresses based on the used object storage region.  
Reference documents: [https://support.alphaedge.tmone.com.my/en-us/usermanual/dns/dns_faq_002.html](https://support.alphaedge.tmone.com.my/en-us/usermanual/dns/dns_faq_002.html)
:::

```shell
ping 100.125.12.250
```

Success Response:


```
C:\Users\Administrator>ping 100.125.12.250

Pinging 100.125.12.250 with 32 bytes of data:
Reply from 100.125.12.250: bytes=32 time=101ms TTL=84
Reply from 100.125.12.250: bytes=32 time=96ms TTL=93
Reply from 100.125.12.250: bytes=32 time=91ms TTL=75
Reply from 100.125.12.250: bytes=32 time=95ms TTL=77

Ping statistics for 100.125.12.250:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 91ms, Maximum = 101ms, Average = 95ms
```

#### TM CAE Object Storage Connectivity  Testing

```shell
ping obs.my-kualalumpur-1.alphaedge.tmone.com.my
```

Success Response:

```
C:\Users\Administrator>ping obs.my-kualalumpur-1.alphaedge.tmone.com.my

Pinging obs.lz01.my-kualalumpur-1.alphaedge.tmone.com.my [100.125.32.15] with 32
 bytes of data:
Reply from 100.125.32.15: bytes=32 time=311ms TTL=44
Reply from 100.125.32.15: bytes=32 time=310ms TTL=44
Reply from 100.125.32.15: bytes=32 time=319ms TTL=44
Reply from 100.125.32.15: bytes=32 time=310ms TTL=44

Ping statistics for 100.125.32.15:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 310ms, Maximum = 319ms, Average = 312ms
```

::: tip
This command is primarily used to test the accessibility of TM CAE Object Storage buckets. Currently, the tested OBS domain is for the TM CAE Singapore region. If you need to test in a different region, please refer to the official TM CAE documentation to find the corresponding Endpoint domain address.  
Reference Link: [https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html](https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html)
:::

## (Intranet VPN Access)Test the connectivity from the Failback Transition Host network to OBS network - Agent

### Login Failback Transition Host System

::: tip
Default User: root  
Default Password: Acb@132.Inst
:::

![test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-1.png](./images/test-the-connectivity-from-the-failback-gateway-network-to-huawei-cloud-obs-network---agent-1.png)

### TM CAE Private DNS Connection Test

::: tip
Please refer to the following document to find the dedicated Network Domain Service (NDS) address based on the used TM CAE OBS region.  
Reference Document:[https://support.alphaedge.tmone.com.my/en-us/usermanual/dns/dns_faq_002.html](https://support.alphaedge.tmone.com.my/en-us/usermanual/dns/dns_faq_002.html)
:::

```shell
ping 100.125.12.250
```

Success Response:

```
64 bytes from 100.125.12.250 (100.125.12.250): icmp_seq=1 ttl=44 time=0.255 ms
64 bytes from 100.125.12.250 (100.125.12.250): icmp_seq=2 ttl=44 time=0.294 ms
64 bytes from 100.125.12.250 (100.125.12.250): icmp_seq=3 ttl=44 time=0.300 ms
```

### TM CAE Object Storage Connection Test

```shell

ping obs.my-kualalumpur-1.alphaedge.tmone.com.my

```

Success Response:

```
64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=1 ttl=44 time=0.255 ms
64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=2 ttl=44 time=0.294 ms
64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=3 ttl=44 time=0.300 ms
```

::: tip
This command is primarily used to test the accessibility of TM CAE Object Storage. Currently, the tested OBS domain is applicable to the TM CAE Singapore region. If you need to perform tests in different regions, please refer to the official TM CAE documentation to find the corresponding Endpoint domain.  
Document Link: [https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html](https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html)
:::

## (Intranet VPN Access)Configure a TM CAE Intranet DNS address for the VMware Network-Object Storage Fallback

::: tip
If the configuration of the TM CAE intranet OBS VPC Endpoint service resolution address has already been completed during the disaster recovery to TM CAE, there is no need to repeat the configuration.
:::

If your fallback environment is interconnected with the on-premises network through TM CAE VPN, after creating VPC Endpoint services, it is necessary to configure the TM CAE intranet OBS VPC Endpoint service resolution address in the local vCenter/ESXi host management network and the virtual machine business network.  
Reference Document: [https://docs.oneprocloud.com/userguide/poc/tmcae-pre-settings.html#option-2-intranet-vpn-access-configure-tm-cae-intranet-dns-address-for-the-network-device-where-the-agent-host-resid](https://docs.oneprocloud.com/userguide/poc/tmcae-pre-settings.html#option-2-intranet-vpn-access-configure-tm-cae-intranet-dns-address-for-the-network-device-where-the-agent-host-resid)

## (Intranet VPN Access)Test the connectivity from the VMware failback recovery host network to TM CAE OBS network

### Prepare and log in the test host 

::: tip
The network of the test host needs to be consistent with the network of the fallback recovery host.  
:::

### TM CAE Private DNS Connection Test

::: tip
Please refer to the following document to find the dedicated Network Domain Service (NDS) address based on the used TM CAE OBS region.  
Reference Document:[https://support.alphaedge.tmone.com.my/en-us/usermanual/dns/dns_faq_002.html](https://support.alphaedge.tmone.com.my/en-us/usermanual/dns/dns_faq_002.html)
:::

```shell
ping 100.125.12.250
```

Success Response:

```
64 bytes from 100.125.12.250 (100.125.12.250): icmp_seq=1 ttl=44 time=0.255 ms
64 bytes from 100.125.12.250 (100.125.12.250): icmp_seq=2 ttl=44 time=0.294 ms
64 bytes from 100.125.12.250 (100.125.12.250): icmp_seq=3 ttl=44 time=0.300 ms
```

### TM CAE Object Storage Connection Test

```shell

ping obs.my-kualalumpur-1.alphaedge.tmone.com.my

```

Success Response:

```
64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=1 ttl=44 time=0.255 ms
64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=2 ttl=44 time=0.294 ms
64 bytes from 100.125.32.15 (100.125.32.15): icmp_seq=3 ttl=44 time=0.300 ms
```

::: tip
This command is primarily used to test the accessibility of TM CAE Object Storage buckets. Currently, the tested OBS domain is applicable to the TM CAE Singapore region. If you need to perform tests in different regions, please refer to the official TM CAE documentation to find the corresponding Endpoint domain.  
Document Link: [https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html](https://support.alphaedge.tmone.com.my/en-us/endpoint/index.html)
:::
