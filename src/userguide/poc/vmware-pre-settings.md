# VMware Pre-Settings for POC

## 1. VMware User Permission

### Why we need this permissions?

HyperBDR utilizes VMware CBT technology for incremental data synchronization. Change Block Tracking (CBT) is a technique employed in VMware for incremental backup and replication. It tracks the blocks that have changed on a virtual disk, allowing for the transmission of only the data associated with these changes during the backup and replication processes.

### VMware Permission List

Provide VMware user with following permissions:

| Permission Type       | Permissions                                        |
|------------------------|---------------------------------------------------|
| Host Profile           | View host configuration files                   |
| Global                 | Enable method                                    |
|                        | Disable method                                   |
|                        | License management                              |
| Content Library        | Download files                                   |
|                        | Update configuration settings                   |
|                        | View configuration settings                      |
|                        | Read storage                                      |
| Scheduled Tasks        | Create tasks                                      |
| Data Storage           | Low-level file operations                       |
|                        | Update virtual machine metadata                  |
|                        | Update virtual machine files                     |
|                        | Browse data storage                               |
| Virtual Machine        | Interaction                                      |
|                        |   Backup operation on virtual machine            |
|                        |   Defragment all disks                           |
|                        |   Restore Fault Tolerance                        |
|                        |   Enable Fault Tolerance                         |
|                        |   Pause or Unpause                               |
|                        |   Perform Guest Operations via VIX API          |
|                        |   Reset                                          |
|                        | Guest Operations                                 |
|                        |   Modify guest operations                       |
|                        |   Query guest operations                        |
|                        |   Execute guest operation programs               |
|                        | Snapshot Management                              |
|                        |   Create snapshot                                |
|                        |   Remove snapshot                                |
|                        | Configuration Changes                            |
|                        |   Modify device settings                        |
|                        |   Toggle fork parent                             |
|                        |   Toggle disk change tracking                   |
|                        |   Reload based on path                           |
|                        |   Display connection settings                   |
|                        |   Modify Settings                                |
|                        |   Modify resources                               |
|                        |   Query Fault Tolerance compatibility           |
|                        |   Query unowned files                            |
|                        |   Retrieve disk lease                            |
|                        |   Configure managedBy                           |
|                        |   Reset guest information                       |
|                        |   Advanced configuration                        |
|                        | Service Configuration                            |
|                        |   Modify service configuration                  |
|                        |   Query service configuration                   |
|                        |   Manage service configuration                  |
|                        |   Read service configuration                     |
| Provisioning          |   Allow virtual machine download                |
|                        |   Allow read-only access to disks               |
|                        |   Allow file access                             |
|                        |   Allow disk access                             |
|                        |   Customize guest                                |
|                        |   Read customization specification             |


## 2. How to import Proxy OVA image?

## 3. How to modify proxy network?

### Login Proxy VM

Login Proxy VM using credentials:

* username: root
* password: onepro

### Modify network interface configuration file

NOTE: Before you run this command, make sure replace following variables:

* ipaddress: Assign IPv4 network according to real network
* netmask
* gateway
* dns1
* dns2

```
cat <<EOF >> /etc/sysconfig/network-scripts/ifcfg-ens160
TYPE=Ethernet

BOOTPROTO=static
DEFROUTE=yes
NAME=ens160
DEVICE=ens160
ONBOOT=yes
IPADDR=<ipaddress>
PREFIX=<netmask>
GATEWAY=<gateway>
DNS1=<dns1>
DNS2=<dns2>
EOF
```

### Restart Network

```
systemctl restart network
```

### Testing

Try to ping VMware vCenter IP or ESXi IP, check if you can get correct response.

```
ping <vcenter ip or esxi ip>
```

## 4. NTP Settings

## 5. Proxy To VMware Network Testing

Test if Proxy can connect to vCenter 443 port and ESXis 902 port which is management by vCenter.

### Login Proxy VM

Login Proxy VM using credentials:

* username: root
* password: onepro

### Test vCenter/ESXi Connectivity

NOTE: Repeat this steps if you have multiple vCenter or ESXis to be protected.

```
ssh -v -p 443 <vCenter/ESXi IP/Domain>
```

Success Retruns:

```
OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 58: Applying options for *
debug1: Connecting to <vCenter/ESXi IP/Domain> [<vCenter/ESXi IP/Domain>] port 443.
debug1: Connection established.
```

## 6. Proxy to Cloud Network Testing

### Internet

Ensure your proxy can access internet before testing.

#### Login Proxy VM

Login Proxy VM using credentials:

* username: root
* password: onepro

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
curl https://obs.ap-southeast-3.myhuaweicloud.com
```

Success Response:

```
<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Error><Code>AccessDenied</Code><Message>Anonymous access is forbidden for this operation</Message><RequestId>0000018C1F508F2F9012234EA17641CE</RequestId><HostId>Z9v+cC1sRnaWw6x0vi8pxxYA0YVnKxbYHUPAFpnxkX8sLV44u5b02Z+ailn2wCnR</HostId></Error>#
```

Note: This command is primarily used to test the accessibility of Huawei Cloud Object Storage buckets. Currently, the tested OBS domain is for the Huawei Cloud Singapore region. If you need to test in a different region, please refer to the official Huawei Cloud documentation to find the corresponding Endpoint domain address.

Reference Link: https://developer.huaweicloud.com/endpoint?OBS

### VPN