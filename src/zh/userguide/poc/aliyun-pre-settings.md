# 阿里云预设置

[[toc]]

## 为容灾目标端创建阿里云子账号

创建一个阿里云RAM账户，并赋予相应的权限，详细要求请参考以下文档。同时，为该RAM账户创建Access Key ID和Access Secret Key用于设置。

### 创建RAM账号

#### 阿里云官方文档链接：

- [https://www.alibabacloud.com/help/en/ram/user-guide/create-a-ram-user](https://www.alibabacloud.com/help/en/ram/user-guide/create-a-ram-user)

### 授予RAM用户权限

#### 阿里云官方文档链接：

- [https://www.alibabacloud.com/help/en/ram/user-guide/grant-permissions-to-the-ram-user](https://www.alibabacloud.com/help/en/ram/user-guide/grant-permissions-to-the-ram-user)


### 管理RAM用户访问密钥

#### 阿里云官方文档链接：

- [https://www.alibabacloud.com/help/en/ram/user-guide/create-an-accesskey-pair](https://www.alibabacloud.com/help/en/ram/user-guide/create-an-accesskey-pair)

### 阿里云RAM权限要求

::: tip
阿里云在不同地区使用不同的API版本，包括v2和v3，并且每个地区对资源描述权限的定义略有不同。当您为HyperBDR创建权限时，需要提供对ecs、evs、obs、ims和network服务的完全访问权限。
:::

#### ecs/vpc/evs/ims

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

#### oss

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

## 配置 VPC & 子网

根据阿里云文档创建VPC网络和子网。说明：根据以下灾难恢复网络场景建立您的网络。

1. 内部 VPN 访问:

如果通过内部 VPN 访问，请创建一个灾难恢复(VPC)网络，并将HyperBDR ECS实例放置在此网络中。

2. 灾难恢复 VPC:

为HyperBDR灾难恢复和备份创建专用的VPC网络和子网，通过VPN与本地IDC相互连接。

3. 业务 VPC:

用于灾难接管和演练的业务VPC网络和子网。

## 创建 HyperBDR 安全组

::: tip
HyperBDR 安全组名称: SG-HyperBDR
:::

### 创建安全组规则

::: warning
注意：对于源IP范围，我们强烈建议将第 1 条 TCP:22 类型的来源访问设置为安全范围，而非 0.0.0.0/0。将范围设置为 0.0.0.0/0 意味着您的ECS主机暴露在互联网，任何人都可以访问并进行攻击，存在安全风险。

例如: 如果您的外部IP地址是110.242.68.66，源IP范围可以配置为110.242.68.66/32。
:::

| No. | Action | Type | Protocol & Port | Source | Description |
| --- | --- | --- | --- | --- | --- |
| 1 | 允许 | IPv4 | TCP:22 | 0.0.0.0/0 | 默认允许Linux SSH端口 |
| 2 | 允许 | IPv4 | TCP:10443 | 0.0.0.0/0 | 允许 HyperBDR web 控制台 |
| 3 | 允许 | IPv4 | TCP:30443 | 0.0.0.0/0 | 允许 HyperBDR 运维管理平台 Web 控制台端口 |
| 4 | 允许 | IPv4 | TCP:30080 | 0.0.0.0/0 | 允许 HyperBDR HTTPS 服务端口 |

## 创建ECS实例用来安装 HyperBDR

### 登录阿里云主控台

### 基于配置信息创建阿里云ECS实例

> 阿里云文档 ：[https://www.alibabacloud.com/help/en/ecs/user-guide/create-a-subscription-instance-on-the-quick-launch-tab](https://www.alibabacloud.com/help/en/ecs/user-guide/create-a-subscription-instance-on-the-quick-launch-tab)  
> HyperBDR服务器的资源配置如下:

::: warning
我们强烈建议在创建 ECS 云实例时，登录模式选择为 密钥对 进行登录，而不是密码登录，以保证您的服务器访问安全。
:::

| 配置项               | 参数                                                      |
| :------------------ | :-------------------------------------------------------------- |
| 付费类型                | 包年/包月|按需计费                                                      |
| 地域           | 您的地域                                                        |
| 网络及可用区              | 选择您的网络和可用区                                                          |
| 实例                | 8c 16g                                                    |
| 镜像                | Ubuntu 20.04 64bit  |
| 系统盘              | ESSD 500GB PL0                                                     |
| 网络                | <VPC-HyperBDR-172.16.0.0\>                                      |
| 子网                | <Subnet-HyperBDR-172.16.0.0\> (Automatically assign IP address) |
| 安全组              | SG-HyperBDR                                                     |
| 弹性公网ip          | 现在购买                                                         |
| 弹性公网ip线路       | 全动态 BGP                                                      |
| 公网带宽             | 按流量计费                                                      |
| 带宽大小             | 100Mbps                                                        |
| 实例名称             | HyperBDR-Prod                                                  |
| 登录凭证             | 密钥对                                                         |
| 密钥对               | <你的密钥对\>                                                            |

> 关于密钥对登录模式，您可以查看以下链接了解详细信息：
> [https://www.alibabacloud.com/help/en/ecs/user-guide/instance-logon-credential-management](https://www.alibabacloud.com/help/en/ecs/user-guide/instance-logon-credential-management)

## 测试VPC之间的网络访问

### 测试灾难恢复VPC和业务VPC之间的网络连通性

- 步骤1: 登录到阿里云并创建一个测试服务器  
在阿里云上创建一个测试云服务器（使用Ubuntu24.04操作系统）。在配置网络时，选择业务VPC和子网。确保这台新创建的测试虚拟机的安全组具有允许端口22的入站访问策略。

- 步骤2: 从灾难恢复VPC到业务VPC进行网络测试访问

登录阿里云控制台，并登录到HyperBDR 服务器，使用内部网络IP连接到业务VPC内的主机。


执行命令:

```sh
ssh root@<业务vpc主机IP地址>  22
```

测试结果:  
如果您能够成功访问并输入密码，表示正常访问。

### 测试业务VPC之间的网络连通性

- 步骤1: 创建一个新的测试云服务器，使用ubuntu24.04操作系统。在配置网络时，选择不同的业务VPC和子网。确保这台新创建的测试虚拟机的安全组具有允许端口22的入站访问策略。

- 步骤2: 通过控制台登录到不同vpc的测试云服务器，并使用以下命令进行双向命令测试。

执行命令:

```sh
ssh root@<测试主机IP地址> 22
```

测试结果:  
如果您能够成功访问并输入密码，表示正常访问。

## QA
### [Unable to upload images when adding an Alibaba Cloud recovery platform in Object Storage mode — how to fix it?](https://qa.oneprocloud.com/questions/D1C7/E1D7)