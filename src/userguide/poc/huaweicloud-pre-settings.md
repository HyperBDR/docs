# HuaweiCloud Pre-Settings

[[toc]]

## Create Huawei Cloud IAM account for DR purpose

Create a Huawei Cloud IAM account with correspinding permissions, detail requirement please refer to below document. And create Access Key ID & Access Secret Key of IAM account for setup. 

Here's the permission requests:

### ecs/vpc/evs/ims

```
{
    "Version": "1.1",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ecs:serverPasswords:manage",
                "ecs:serverKeypairs:delete",
                "ecs:cloudServers:reboot",
                "ecs:diskConfigs:use",
                "ecs:cloudServers:start",
                "ecs:cloudServers:vnc",
                "ecs:servers:lock",
                "ecs:servers:rebuild",
                "ecs:cloudServers:attach",
                "ecs:serverInterfaces:get",
                "ecs:cloudServers:detachVolume",
                "ecs:servers:unlock",
                "ecs:cloudServers:delete",
                "ecs:serverKeypairs:get",
                "ecs:cloudServers:updateMetadata",
                "ecs:cloudServers:stop",
                "ecs:servers:setMetadata",
                "ecs:serverVolumes:use",
                "ecs:cloudServers:create",
                "ecs:serverKeypairs:create",
                "ecs:servers:get",
                "ecs:serverInterfaces:use",
                "ecs:serverGroups:manage",
                "ecs:securityGroups:use",
                "ecs:*:get*",
                "ecs:*:list*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "evs:snapshots:rollback",
                "evs:volumes:use",
                "evs:snapshots:delete",
                "evs:volumes:create",
                "evs:snapshots:create",
                "evs:volumes:update",
                "evs:backups:get",
                "evs:volumes:get",
                "evs:snapshots:get",
                "evs:volumes:delete",
                "evs:*:get*",
                "evs:*:list*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "vpc:securityGroups:create",
                "vpc:vpcs:delete",
                "vpc:subnets:update",
                "vpc:routers:update",
                "vpc:subnets:delete",
                "vpc:vpcs:create",
                "vpc:networks:get",
                "vpc:publicIps:create",
                "vpc:ports:get",
                "vpc:ports:update",
                "vpc:ports:create",
                "vpc:securityGroupRules:get",
                "vpc:subnets:create",
                "vpc:securityGroups:delete",
                "vpc:publicIps:delete",
                "vpc:subnets:get",
                "vpc:securityGroups:update",
                "vpc:routers:get",
                "vpc:securityGroups:get",
                "vpc:networks:create",
                "vpc:networks:update",
                "vpc:*:list*",
                "vpc:*:get*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "ims:images:get",
                "ims:*:list*"
            ]
        }
    ]
}
```

### obs

```
{
    "Version": "1.1",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "OBS:*:*"
            ]
        }
    ]
}
```

## Configure VPC & Subnet

Create VPC Network and Subnet According to Huawei Cloud Documentation.
Explanation: Establish your network based on the following disaster recovery network scenarios.

1. Intranet VPN Access:

If accessing through an intranet VPN, create a DR VPC network and place HyperBDR ECS instances in this network.

2. Disaster Recovery VPC:

Dedicated VPC network and subnet for HyperBDR disaster recovery and backup, interconnected with the on-premises IDC through VPN.

3. Business VPC:

Business VPC network and subnet used for disaster takeover and drills.

## Create HyperBDR Security Group

::: tip
HyperBDR Security Group Name: SG-HyperBDR 
:::

### Create Security Group Rules

NOTE: For Source IP range, we recommend use safe range to replace 0.0.0.0/0. For example, if your external ip address is 110.242.68.66, source can be configurated as 110.242.68.66/32.

| No. | Action | Type | Protocol & Port | Source | Description |
| --- | ------ | ---- | --------------- | ------ | ----------- |
| 1   | Allow  | IPv4 | TCP:22          | 0.0.0.0/0 | Permit default Linux SSH port |
| 2   | Allow  | IPv4 | TCP:10443       | 0.0.0.0/0 | Permit HyperBDR web console |
| 3   | Allow  | IPv4 | TCP:30443       | 0.0.0.0/0 | Permit HyperBDR Operation and maintenance management platform web console port |
| 4   | Allow  | IPv4 | TCP:30080       | 0.0.0.0/0 | Permit HyperBDR https services port |


## Create ECS for HyperBDR

## Image Download & Upload

TODO

## VPN Setup

## Create Huawei VPC Endpoint

## Create Huawei VPC Peering

## Test Network Access between VPCs