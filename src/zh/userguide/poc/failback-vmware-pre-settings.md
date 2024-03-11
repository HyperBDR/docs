# VMware目标端预设置

[[toc]]

## 下载Hyperdoor镜像文件（ISO）并上传至VMware存储

### 下载Hyperdoor镜像文件（ISO）

::: tip
请在文档中的下载地址下载ISO镜像。  
文档链接： [https://docs.oneprocloud.com/userguide/poc/failback-hyperbdr-pre-settings.html#download-iso-format-image](http://192.168.7.58:8080/userguide/poc/failback-hyperbdr-pre-settings.html#download-iso-format-image)
:::

### 将Hyperdoor镜像文件（ISO）上传至VMware存储

#### 登录VMware vSphere Client控制台

![complete-doc-for-block-storage-failback-8.png](./images/complete-doc-for-block-storage-failback-8.png)

#### 选择 [存储]

![complete-doc-for-block-storage-failback-9.png](./images/complete-doc-for-block-storage-failback-9.png)

![complete-doc-for-block-storage-failback-10.png](./images/complete-doc-for-block-storage-failback-10.png)

#### 左侧选择可用的[存储池]，点击[文件]，选择镜像的存放路径后点击[上载文件]

![complete-doc-for-block-storage-failback-11.png](./images/complete-doc-for-block-storage-failback-11.png)

#### 选择下载的Hyperdoor镜像文件（iso），等待上传镜像完成

![complete-doc-for-block-storage-failback-12.png](./images/complete-doc-for-block-storage-failback-12.png)

![complete-doc-for-block-storage-failback-13.png](./images/complete-doc-for-block-storage-failback-13.png)


## 使用Hyperdoor镜像创建VMware虚拟机作为通用存储回切网关

### 创建通用存储回切网关

选择你的ESXi或数据中心，右击鼠标，选择[新建虚拟机]

![complete-doc-for-block-storage-failback-14.png](./images/complete-doc-for-block-storage-failback-14.png)

### 新虚拟机配置

**Step 1: 创建新虚拟机，配置完成后点击[NEXT]**

![complete-doc-for-block-storage-failback-15.png](./images/complete-doc-for-block-storage-failback-15.png)

**Step 2: 填写虚拟机名称，选择可用集群，配置完成后点击[NEXT]**

![complete-doc-for-block-storage-failback-16.png](./images/complete-doc-for-block-storage-failback-16.png)

**Step 3: 选择[计算资源] ，配置完成后点击[NEXT]**

![complete-doc-for-block-storage-failback-17.png](./images/complete-doc-for-block-storage-failback-17.png)

**Step: 选择[存储]，配置完成后点击[NEXT]**

![complete-doc-for-block-storage-failback-18.png](./images/complete-doc-for-block-storage-failback-18.png)

**Step 5: 选择兼容性，默认即可，配置完成后点击[NEXT]**

![complete-doc-for-block-storage-failback-19.png](./images/complete-doc-for-block-storage-failback-19.png)

**Step 6: 选择操作系统，操作系统系列使用[Linux] ，操作系统版本使用 [Other Linux（64-bit）]即可，配置完成后点击[NEXT]**

![complete-doc-for-block-storage-failback-20.png](./images/complete-doc-for-block-storage-failback-20.png)

**Step 7-1: 自定义硬件，配置CPU≥2，内存≥4GB**

![complete-doc-for-block-storage-failback-21.png](./images/complete-doc-for-block-storage-failback-21.png)

**Step 7-2: 自定义硬件，配置选择可用的网络**

![complete-doc-for-block-storage-failback-22.png](./images/complete-doc-for-block-storage-failback-22.png)

![complete-doc-for-block-storage-failback-23.png](./images/complete-doc-for-block-storage-failback-23.png)

**Step 7-3: 自定义硬件，配置系统盘和数据盘**

::: warning
通用存储回切网关虚拟机的系统盘和数据盘需要与回切主机一致。
:::

![complete-doc-for-block-storage-failback-24.png](./images/complete-doc-for-block-storage-failback-24.png)

![complete-doc-for-block-storage-failback-25.png](./images/complete-doc-for-block-storage-failback-25.png)

**Step 7-4: CD/DVD驱动配置，类型选择[数据存储ISO文件]，新窗口选择上传到存储的Hyperdoor镜像文件（ISO），并且勾选[打开电源时连接]选项；其他配置默认即可，配置完成后点击[NEXT]**

![complete-doc-for-block-storage-failback-26.png](./images/complete-doc-for-block-storage-failback-26.png)

![complete-doc-for-block-storage-failback-27.png](./images/complete-doc-for-block-storage-failback-27.png)

![complete-doc-for-block-storage-failback-28.png](./images/complete-doc-for-block-storage-failback-28.png)

![complete-doc-for-block-storage-failback-29.png](./images/complete-doc-for-block-storage-failback-29.png)

**Step 8: 确认信息无误后，单击[FINISH]启动创建**

![complete-doc-for-block-storage-failback-30.png](./images/complete-doc-for-block-storage-failback-30.png)

### 启动虚拟机

右键点击刚刚创建的虚拟机，选择 [启动] > [打开电源] 。

![complete-doc-for-block-storage-failback-31.png](./images/complete-doc-for-block-storage-failback-31.png)

打开虚拟机控制台，查看虚拟机启动状态。

![complete-doc-for-block-storage-failback-32.png](./images/complete-doc-for-block-storage-failback-32.png)

虚拟机系统正常启动。

![complete-doc-for-block-storage-failback-33.png](./images/complete-doc-for-block-storage-failback-33.png)


## 配置通用存储回切网关虚拟机的IP地址

### 登录VMware vSphere Client控制台

![complete-doc-for-block-storage-failback-34.png](./images/complete-doc-for-block-storage-failback-34.png)

### 控制台访问通用存储回切网关虚拟机

![complete-doc-for-block-storage-failback-35.png](./images/complete-doc-for-block-storage-failback-35.png)

### 登录系统

> 默认用户名: root  
> 默认密码: Acb@132.Inst

![complete-doc-for-block-storage-failback-36.png](./images/complete-doc-for-block-storage-failback-36.png)

### Manually configure the network

::: tip
The Hyperdoor image is configured with default DHCP mode for networking. If the VMware network you selected supports DHCP, confirm the virtual machine's IP and proceed. If the VMware network does not use DHCP, manual configuration of the virtual machine's network is required
:::

#### 确认虚拟机的网络适配器设备名称

```shell
ip a
```

![complete-doc-for-block-storage-failback-37.png](./images/complete-doc-for-block-storage-failback-37.png)

#### 清除网络配置信息

```shell
ip addr flush dev eth0
```

配置临时IP

::: tip
配置为示例信息，请根据实际情况替换IP地址/掩码 [192.168.x.x/20] 和网关地址 [192.168.0.1]
:::

```shell
ip addr add 192.168.x.x/20 dev ens160 && ip route add default via 192.168.0.1
```

#### 查看网络配置

```shell
ip a
```

![complete-doc-for-block-storage-failback-38.png](./images/complete-doc-for-block-storage-failback-38.png)

```shell
ip route
```

![complete-doc-for-block-storage-failback-39.png](./images/complete-doc-for-block-storage-failback-39.png)

## vCenter创建用户及开放权限 （主机回切）

### VMware用户权限（主机回切）

准备用于回切的VMware用户身份验证信息，并确保该用户具有必要的权限。  

有关配置VMware用户权限的信息，请参阅以下文档。  

文档链接： [https://docs.oneprocloud.com/userguide/poc/vmware-pre-settings.html#vcenter-permission-open-settings-steps](https://docs.oneprocloud.com/userguide/poc/vmware-pre-settings.html#vcenter-permission-open-settings-steps)

### VMware用户所需权限（主机回切）

| **权限类型** | **权限** |
| --- | --- |
| 数据存储 | 低级别文件操作 |
| | 分配空间 |
| 网络 | 分配网络 |
| 资源 | 将虚拟机分配给资源池 |
| vApp | 导入 |
| 虚拟机 | **交互** |
| | 关闭电源 |
| | 打开电源 |
| | 重置 |
| | **客户机操作** |
| | 客户机操作查询 |
| | 客户机操作程序执行 |
| | **更改配置** |
| | 更改 CPU 数目 |
| | 更改内存 |
| | 更改设置 |
| | 添加或移除设备 |
| | 添加新磁盘 |
| | 添加现有磁盘 |
| | 移除磁盘 |
| | 高级配置 |
| | **编辑清单** |
| | 从现有项创建 |
| | 移除 |
| | **置备** |
| | 克隆虚拟机 |

## vCenter/ESXi网络策略开通 (主机回切)


1. HyperBDR节点主机需要正常访问vCenter 443端口。  
2. HyperBDR节点主机需要正常访问vCenter管理的所有ESXi 443端口。 
3. VMware业务网络虚拟机（回切恢复虚拟机）需要正常访问对象存储的443端口。 
4. HyperBDR节点主机需要正常访问VMware业务网络虚拟机（回切恢复虚拟机）的10729端口。

::: tip
HyperBDR节点主机需要访问vCenter API接口进行认证，通过调用容灾生产站点vCenter/ESXi接口在VMware业务网络创建回切恢复虚拟机，并进行管理，同时自动创建回切恢复虚拟机通过访问华为云对象存储的443端口来获取数据，进行回切恢复。
:::

## （内网VPN访问）配置VMware生产端回切恢复主机所在网络使用容灾目标云内网DNS解析

::: tip
如果在对容灾目标云的灾难恢复过程中，已经配置容灾目标云内网OBS VPC Endpoint服务解析地址，则无需重复配置。
:::


如果你的容灾环境是通过华为云VPN与生产站点内网互联，VPC Endpont服务创建之后，需要在生产站点Agent主机所在网络增加华为云内网OBS VPC Endpoint服务解析地址。

参考文档链接: [https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#option-2-intranet-vpn-access-configure-huawei-cloud-intranet-dns-address-for-the-network-device-where-the-agent-host-reside](https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#option-2-intranet-vpn-access-configure-huawei-cloud-intranet-dns-address-for-the-network-device-where-the-agent-host-reside)

## （内网VPN访问）测试VMware生产端回切恢复主机所在网络到内网OBS网络的连通性

::: tip
使用华为云作为测试示例
:::

### 准备测试主机并登录

::: tip
测试主机所在网络需要与回切恢复主机所在的网络一致。  
:::

### 私有DNS连接测试

::: tip
请参阅以下文档，查找基于所用对象存储区域的专用NDS（网络域服务）地址。  
参考文档： [https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html](https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html)
:::

```shell
ping 100.125.1.250
```

Success Response:

![docs-of-object-storage-host-failback-5.png](./images/docs-of-object-storage-host-failback-5.png)

### 对象存储连接测试

```shell
ping https://obs.ap-southeast-3.myhuaweicloud.com
```

Success Response:

![docs-of-object-storage-host-failback-6.png](./images/docs-of-object-storage-host-failback-6.png)

::: tip
该命令主要用于测试华为云对象存储桶的可访问性。目前，测试的OBS域适用于华为云新加坡地区。如果您需要在不同的地区进行测试，请参阅华为云官方文档，找到相应的Endpoint域名。  
文档链接： [https://developer.huaweicloud.com/intl/en-us/endpoint?OBS](https://developer.huaweicloud.com/intl/en-us/endpoint?OBS)
:::

## 验证HyperBDR添加的对象存储状态（主机回切）

::: tip
默认已完成HyperBDR环境的部署。
:::

### 登录HyperBDR

![docs-of-object-storage-host-failback-7.png](./images/docs-of-object-storage-host-failback-7.png)

### 检查对象存储状态

选择 [**配置管理**] > [**对象存储**] > [**回切**], 可以看到您添加的 [**对象存储**] ，确认 [**对象存储**] 的健康状态为 [**在线**] 即可。

![docs-of-object-storage-host-failback-8.png](./images/docs-of-object-storage-host-failback-8.png)

## 添加源端生产vCenter/ESXi主机为对象存储回切网关

::: tip
默认已完成HyperBDR环境的部署。
:::

### 登录HyperBDR

![add-the-vcenteresxi-as-an-object-dr-gatewayfailback-1.png](./images/docs-of-object-storage-host-failback-7.png)

### 添加回切恢复网关

**Step 1.** 上方导航栏中选择 "配置管理"，左侧菜单栏选择"对象存储恢复网关"，在"回切"标签页中点击"添加"。

![add-the-vcenteresxi-as-an-object-dr-gatewayfailback-2.png](./images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-2.png)

**Step 2.** 在"添加回切平台账号"页面填写VMware平台鉴权信息，确认后点击"下一步"。

![add-the-vcenteresxi-as-an-object-dr-gatewayfailback-3.png](./images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-3.png)

**Step 3.** 回切目标平台VMware的配置，确认后点击"下一步"。

![add-the-vcenteresxi-as-an-object-dr-gatewayfailback-4.png](./images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-4.png)

**Step 4.** "驱动修复"选项默认即可。

![add-the-vcenteresxi-as-an-object-dr-gatewayfailback-5.png](./images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-5.png)

**Step 5.** 对象存储恢复网关添加成功。

![add-the-vcenteresxi-as-an-object-dr-gatewayfailback-6.png](./images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-6.png)

