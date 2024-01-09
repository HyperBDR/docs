# Agent Source For Host Failback Pre-Settings

[[toc]]

##  Create Failback Gateway - Agent

1. Use the hyperdoor image to create a virtual machine or physical machine in the source production environment as a Failback Gateway.
2. The Failback Gateway serves as the data receiver during rollback and the recovery host during the final rollback.
3. The Failback Gateway serves requires a minimum configuration of 2 cores and 4 GB RAM. As this host is the recovery host during the final rollback, the general rule is to have a computing resource configuration consistent with the failback host.
4. The Failback Gateway serves storage configuration (disk number and disk capacity) for the Failback Gateway should match that of the failback host.

### Example：
| Host configuration | Failback Host configuration | Failback Gateway configuration |
| --- | --- | --- |
| CPU | 4 | 4 |
| RAM | 8GB | 8GB |
| OS disk capacity | 100GB | 100GB |
| data disk1 capacity | 200GB | 200GB |
| data disk2 capacity | 500GB | 500GB |

## Configure the IP address for the Failback Gateway Host - Agent

::: tip
The virtual machine/physical machine has already been created as a failback gateway in the source production environment by defaul.
:::

### Login the Failback Gateway system

::: tip
Default User：root  
Default Password：Acb@132.Inst
:::

![configure-the-ip-address-for-the-failback-gateway-host---agent-1.png](./images/configure-the-ip-address-for-the-failback-gateway-host---agent-1.png)

### Manually configure the network

::: tip
The Hyperdoor image is configured with default DHCP mode for networking. If the source production environment network you selected supports DHCP, confirm the virtual machine's IP and proceed. If the source production environment network does not use DHCP, manual configuration of the machine's network is required
:::

#### Confirm the virtual machine's network adapter device name

```shell
ip a
```

![configure-the-ip-address-for-the-failback-gateway-host---agent-2.png](./images/configure-the-ip-address-for-the-failback-gateway-host---agent-2.png)

#### Clear network configuration information

```shell
ip addr flush dev eth0
```

Configure a IP address and gateway

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

![configure-the-ip-address-for-the-failback-gateway-host---agent-3.png](./images/configure-the-ip-address-for-the-failback-gateway-host---agent-3.png)

```shell
ip route
```

![configure-the-ip-address-for-the-failback-gateway-host---agent-4.png](./images/configure-the-ip-address-for-the-failback-gateway-host---agent-4.png)

