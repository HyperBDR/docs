# Huawei Cloud Pre-Settings for POC

## 1. Huawei Cloud IAM requirements

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

## 2. HyperBDR Security Group Settings

| No. | Security Group Name | Priority | Action | Type | Protocol & Port | Source                | Description                                     | Priority | Action | Type | Protocol & Port | Source    | Description                                     |
| --- | ------------------- | -------- | ------ | ---- | --------------- | -------------------- | ----------------------------------------------- | -------- | ------ | ---- | --------------- | --------- | ----------------------------------------------- |
| 1   | SG-HyperBDR         | 1        | Allow  | IPv4 | TCP:22          | 61.49.138.26/32      | Permit default Linux SSH port.                  | 1        | Allow  | IPv4 | All             | 0.0.0.0/0 |                                                 |
| 2   | SG-HyperBDR         | 1        | Allow  | IPv4 | TCP:10443       | 0.0.0.0/0            | Permit HyperBDR web console port.               | 1        | Allow  | IPv6 | All             | ::/0      |                                                 |
| 3   | SG-HyperBDR         | 1        | Allow  | IPv4 | TCP:30443       | 0.0.0.0/0            | Permit HyperBDR Operation and maintenance management platform web console port. |                                                 |                                                 |      |                 |               |  |                 |                     |                                                 |
| 4   | SG-HyperBDR         | 1        | Allow  | IPv4 | TCP:30080       | 0.0.0.0/0            | Permit HyperBDR https services port.            |                                                 |                                                 |      |                 |               |  |                 |                     |