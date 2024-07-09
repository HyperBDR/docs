# 云容灾操作手册（华为云对象存储）

[[toc]]

# 一、【容灾场景概述】            

该文档主要阐述使用HyperBDR产品，通过支持S3协议的对象存储，

将 **【源端】各类主机** 容灾备份至 **【华为云（公有云）】**

![dr-operations-manual-huaweicloud-1.jpeg](./images/dr-operations-manual-huaweicloud-1.jpeg)

# 二、【基础条件】


- 有需要容灾的主机（物理机/云主机/虚拟机）

- 已完成容灾工具< HyperBDR>的安装、注册及登录

- 可用的对象存储

# 三、【步骤索引】

![dr-operations-manual-huaweicloud-2.jpeg](./images/dr-operations-manual-huaweicloud-2.jpeg)

# 四、【容灾操作】

## 1. 生产平台操作

*根据 容灾生产平台 (待容灾主机) 类型不同，查看以下对应适用的容灾操作说明*

### 1.1. 登录容灾工具HyperBDR

![dr-operations-manual-huaweicloud-3.png](./images/dr-operations-manual-huaweicloud-3.png)

---

### 1.2. 场景I：VMware虚拟机 容灾至 华为云

#### 1.2.1. 配置生产平台 (VMware)

【说明】
- 当源端（被容灾端）为VMware虚拟化时，需要进行相关配置。
- 该场景可以实现 **无代理Agentless** 方式容灾
> 即**无需**在每台VMware虚拟机内安装agent，以实现无入侵操作

【基础条件】
- 存在 vCenter/ESXi 集群
- 安装完成 VMware vSphere Client，并且登录  vCenter/ESXi 集群
- 已完成容灾工具 **HyperBDR** 的安装及登录
- 已开通生产平台VMware虚拟化到 **HyperBDR** 和 **云同步网关** 的网络策略

**第一步：** 点击上方 **配置管理** ，左侧菜单栏选择 **生产站点配置** ，点击 **VMware** 选择框
![dr-operations-manual-huaweicloud-4.png](./images/dr-operations-manual-huaweicloud-4.png)

**第二步：** 点击 **+添加** 按钮，添加源端hamal无代理组件

> 首次添加VMware需要安装hamal组件（见第三步）

![dr-operations-manual-huaweicloud-5.png](./images/dr-operations-manual-huaweicloud-5.png)

**第三步：** 按照界面指引安装hamal

> 如果你已经在容灾方案验证准备文档中已经安装了Hamal，那么直接操作第四步即可。

（1） 将OVA下载到VMware端，或者源端准备一台 CentOS7.x 版本的虚拟机。

（2） 通过OVA导入的主机或者在准备的 CentOS7.x 虚拟机后台执行安装命令。

::: tip
请根据当前容灾工具界面显示信息操作，该动作由用户在VMware vSphere Client环境中执行。
:::

（3） 完成后回到容灾工具点击 **下一步** 按钮

![dr-operations-manual-huaweicloud-6.png](./images/dr-operations-manual-huaweicloud-6.png)

> _VMware端使用OVA模板部署Hamal操作参考以下文档。_  
> _文档链接：_[_https://docs.oneprocloud.com/userguide/poc/vmware-pre-settings.html#import-ova-images-and-create-proxy-virtual-machine-in-vmware_](https://docs.oneprocloud.com/userguide/poc/vmware-pre-settings.html#import-ova-images-and-create-proxy-virtual-machine-in-vmware)

**第四步：** 弹框中填写相关信息

| **鉴权地址** | vCenter/ESXi 的访问管理地址 |
| --- | --- |
| **用户名** | vCenter/ESXi 账号（管理员权限） |
| **密码** | vCenter/ESXI 账户密码 |
| **同步节点** | 上个步骤OVA导入的主机安装完后带出的ip信息 |

![dr-operations-manual-huaweicloud-7.png](./images/dr-operations-manual-huaweicloud-7.png)

**完成配置**
vCenter/ESXI 被成功加入到容灾生产平台中，重复以上步骤可以添加多个vCenter（按需）
![dr-operations-manual-huaweicloud-8.png](./images/dr-operations-manual-huaweicloud-8.png)


完成生产平台VMware配置，可进行 [**[1.2.2. 添加待容灾主机]**](#__1-2-2-%E6%B7%BB%E5%8A%A0%E5%BE%85%E5%AE%B9%E7%81%BE%E4%B8%BB%E6%9C%BA)添加容灾主机

#### 1.2.2. 添加待容灾主机
上方选择 **资源容灾** -> 点击左侧 **主机容灾** 之后，右侧点击 **+添加主机** ，点击 **VMware** 选项

![dr-operations-manual-huaweicloud-9.png](./images/dr-operations-manual-huaweicloud-9.png)

点击 **无代理模式** -> **VMware** 选项，选择其中一个VMware源端连接，并点击 **下一步** 按钮

![dr-operations-manual-huaweicloud-10.png](./images/dr-operations-manual-huaweicloud-10.png)

在VCenter/ESXi的所有VMware主机列表中 勾选要容灾的主机，并点击 **确定** 按钮

> 如果主机较多，可以右上角搜索，并执行批量勾选添加

![dr-operations-manual-huaweicloud-11.png](./images/dr-operations-manual-huaweicloud-11.png)

在容灾界面可以看到 待容灾的VMware主机清单，勾选要操作的主机，点击 **下一步** 按钮，进入 **容灾配置** 操作

![dr-operations-manual-huaweicloud-12.png](./images/dr-operations-manual-huaweicloud-12.png)

完成源端容灾主机添加，可进行 [**[4. 执行容灾操作]**](#_4-%E6%89%A7%E8%A1%8C%E5%AE%B9%E7%81%BE%E6%93%8D%E4%BD%9C) 容灾操作

### 1.3. 场景II：物理机及各类虚拟主机 容灾至 华为公有云

#### 1.3.1 Linux主机安装Agent

查看文档以进行操作。

文档链接： [https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-linux-host](https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-linux-host)

#### 1.3.2 Windows主机安装Agent

查看文档以进行操作。

文档链接： [https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-windows-host](https://docs.oneprocloud.com/userguide/poc/agent-pre-settings.html#install-agent-on-the-source-windows-host)


完成源端容灾主机添加，可进行 [**[4. 执行容灾操作]**](#_4-%E6%89%A7%E8%A1%8C%E5%AE%B9%E7%81%BE%E6%93%8D%E4%BD%9C) 容灾操作

---

## 2. 对象存储设置

### 2.1. 添加华为云（公有云）对象存储

（1） 上侧菜单栏点击 **配置管理**，左侧选择 **存储配置** 中的 **对象存储** 后，点击 **+添加**。

![dr-operations-manual-huaweicloud-32.png](./images/dr-operations-manual-huaweicloud-32.png)

（2） 在 **对象存储平台**，选择您所使用的华为云对象存储区域。

![dr-operations-manual-huaweicloud-34.png](./images/dr-operations-manual-huaweicloud-34.png)

（3） 填写用于鉴权认证对象存储的AK/SK，确认后点击 **下一步**。

![dr-operations-manual-huaweicloud-36.png](./images/dr-operations-manual-huaweicloud-36.png)


（4） 设置对象存储桶的名称后点击 **确定**。

> 您可以使用区域内已经存在的对象存储桶，或者新建对象存储桶并自定义名称。

![dr-operations-manual-huaweicloud-38.png](./images/dr-operations-manual-huaweicloud-38.png)

![dr-operations-manual-huaweicloud-39.png](./images/dr-operations-manual-huaweicloud-39.png)

（5）对象存储添加完成

![dr-operations-manual-huaweicloud-42.png](./images/dr-operations-manual-huaweicloud-42.png)

---

## 3. 容灾平台操作

### 3.1. 配置容灾恢复平台

（1） 上侧菜单栏点击 **配置管理**，选择左侧 **对象存储恢复网关**，点击 **添加** 按钮。

![dr-operations-manual-huaweicloud-43.png](./images/dr-operations-manual-huaweicloud-43.png)

（2） 按以下步骤填写信息，创建对象存储恢复网关

> 该步骤会在认证完成后自动在华为云认证租户下上传镜像，该镜像用于容灾演练和恢复

按照如图所示，在添加目标容灾平台时需要填写华为云的认证信息，填写内容条目如下：

- Access Key ID**：**华为云账号Access Key ID
- Access Key Secret**：**华为云账号Access Key Secret

![dr-operations-manual-huaweicloud-45.png](./images/dr-operations-manual-huaweicloud-45.png)

![dr-operations-manual-huaweicloud-46.png](./images/dr-operations-manual-huaweicloud-46.png)

![dr-operations-manual-huaweicloud-47.png](./images/dr-operations-manual-huaweicloud-47.png)

确认信息后，点击 **确定** 按钮，在 **对象存储恢复网关** 页面中等待添加完成

![dr-operations-manual-huaweicloud-51.png](./images/dr-operations-manual-huaweicloud-51.png)

容灾平台华为云配置完成，可进行 [**[1. 生产平台操作]**](#_1-%E7%94%9F%E4%BA%A7%E5%B9%B3%E5%8F%B0%E6%93%8D%E4%BD%9C) 配置生产平台，或进行 [**[4. 执行容灾操作]**](#_4-%E6%89%A7%E8%A1%8C%E5%AE%B9%E7%81%BE%E6%93%8D%E4%BD%9C) 容灾操作

---

## 4. 执行容灾操作

如果已经添加了待容灾主机，那么选择待容灾主机，点击下一步到容灾配置页面

![dr-operations-manual-huaweicloud-53.png](./images/dr-operations-manual-huaweicloud-53.png)

### 4.1. 容灾配置

在 **容灾配置** 页面，勾选待容灾主机，点击 **容灾配置** 按钮，并选择 **对象存储恢复** 选项按照容灾配置步骤进行操作。

![dr-operations-manual-huaweicloud-55.png](./images/dr-operations-manual-huaweicloud-55.png)

**容灾配置步骤一**：指定容灾平台，选择容灾主机所在容灾平台的配置信息，并点击 **下一步** 按钮。

> 容灾平台信息为空，则表示暂未添加容灾平台，需要 [**配置容灾恢复操作**](#_3-1-%E9%85%8D%E7%BD%AE%E5%AE%B9%E7%81%BE%E6%81%A2%E5%A4%8D%E5%B9%B3%E5%8F%B0) ，再进行后续操作。

存储类型选择 **对象存储恢复**，选择配置好的对象存储和恢复平台。

![dr-operations-manual-huaweicloud-57.png](./images/dr-operations-manual-huaweicloud-57.png)

**容灾配置步骤二**：计算资源配置，选择容灾主机在目标容灾平台使用的规格和系统类型，设置完成后，并点击 **下一步** 按钮。

![dr-operations-manual-huaweicloud-59.png](./images/dr-operations-manual-huaweicloud-59.png)

**容灾配置步骤三**：指定卷类型，选择容灾主机在目标容灾平台所使用的卷类型，如果有多个卷，可以按照系统卷和数据卷进行分别设置，设置完成后，并点击 **下一步** 按钮。

![dr-operations-manual-huaweicloud-61.png](./images/dr-operations-manual-huaweicloud-61.png)

系统拥有多块磁盘的情况下可以手动选系统盘，如果您的原始系统中第一块磁盘并非用于启动的磁盘，必须在这里指定启动磁盘，否则可能导致启动失败。

::: warning
在块存储模式下，由于云平台API接口的限制，一旦数据同步完成，将无法更改用于启动的磁盘选项。在开始同步之前，请再次确认所选用于启动的磁盘。若选择错误，您将需要清理数据并重新进行同步。请谨慎操作，确保正确选择启动磁盘以避免不必要的重新同步步骤。
:::

![dr-operations-manual-huaweicloud-169.png](./images/dr-operations-manual-huaweicloud-169.png)

**容灾配置步骤四**：网络配置，选择容灾主机在目标容灾平台所使用的**专有网络**、**子网**以及启动时是否指定IP、配置公网IP和安全组，设置完成后，并点击 **下一步** 按钮。

> **专有网络**与**子网**需要在华为云账户下提前创建。

![dr-operations-manual-huaweicloud-63.png](./images/dr-operations-manual-huaweicloud-63.png)

**容灾配置步骤五**：关联策略，待容灾主机关联相应的容灾策略（可以暂不进行关联），如果没有策略可以新建策略，完成后点击 **确定** 按钮。

> 开始配置策略前，已经配置好的主机将自动进入 "开始容灾" 中。

![dr-operations-manual-huaweicloud-65.png](./images/dr-operations-manual-huaweicloud-65.png)

![dr-operations-manual-huaweicloud-66.png](./images/dr-operations-manual-huaweicloud-66.png)

> 容灾配置完成后，还可以选择容灾主机在更多操作中修改容灾配置。

![dr-operations-manual-huaweicloud-69.png](./images/dr-operations-manual-huaweicloud-69.png)

---

### 4.2. 同步数据（全量/增量）

在 **开始容灾** 步骤，可以勾选单个或多个容灾主机，并点击 **立即同步** 按钮直接进行数据同步。

![dr-operations-manual-huaweicloud-71.png](./images/dr-operations-manual-huaweicloud-71.png)

确认需要同步的容灾机器，并点击 **确定** 按钮

>  首次点击，将同步全量数据，后续点击将同步增量数据，这里也可以勾选全量数据同步，则表示本次会进行全量数据同步。

![dr-operations-manual-huaweicloud-73.png](./images/dr-operations-manual-huaweicloud-73.png)

等待容灾主机数据同步完成

![dr-operations-manual-huaweicloud-75.png](./images/dr-operations-manual-huaweicloud-75.png)

---

### 4.3. 容灾演练/容灾接管

等待数据同步完成（同步快照完成），勾选需要容灾演练/容灾接管主机，并选择 **容灾演练/容灾接管** 按钮

> 容灾演练/容灾接管功能保持一致，此功能则表示将容灾主机在容灾平台进行启动，启动后即可进行相关验证和接管工作

![dr-operations-manual-huaweicloud-77.png](./images/dr-operations-manual-huaweicloud-77.png)

选择容灾主机启动时数据同步时间点（快照），并点击 **确定** 按钮，开始主机实例启动

> 提示 : 该动作会按照当前这台容灾主机的容灾配置时设定的容灾参数，在容灾平台华为云上启动一台实例，即为容灾到云上的主机，这里的同步时间点是每同步一次数据便会产生一个快照时间，用于启动时进行选择（同步时间点保留个数可以按需进行配置）详情查看链接

![dr-operations-manual-huaweicloud-79.png](./images/dr-operations-manual-huaweicloud-79.png)

![dr-operations-manual-huaweicloud-80.png](./images/dr-operations-manual-huaweicloud-80.png)

---

### 4.4. 查看容灾结果

容灾主机启动完成后，主机启动状态显示主机在容平台的相关配置信息，则表示 **容灾演练/容灾接管** 执行成功。可以登录华为云查看容灾主机的运行情况

![dr-operations-manual-huaweicloud-83.png](./images/dr-operations-manual-huaweicloud-83.png)

![dr-operations-manual-huaweicloud-84.png](./images/dr-operations-manual-huaweicloud-84.png)

### 4.5. 清理验证主机

选中需要 **清理验证主机** 的主机，在 **更多操作** 中点击 **清理验证主机** 选项。等待清理完成即可。

![dr-operations-manual-huaweicloud-87.png](./images/dr-operations-manual-huaweicloud-87.png)

---

## 5. 资源组容灾

**资源组容灾**，主要适用于具有相同属性和需求的多个容灾主机资源的组，可以是业务组的维度、也可以是其他维度的资源的集合，所有的操作配置的维度均为资源组。包含资源组同步策略设置，所有组内的容灾主机数据同步指令下发保持同一时间点，来保证资源组的所有主机数据底层保持一致性。

> **资源组容灾**在添加容灾主机时，需要确保单台主机 **容灾配置 **完成后方可加入到容灾资源组，否则无法直接加入**资源组容灾**。

### 5.1 新建资源组

点击上方菜单栏 **资源组容灾**，点击 **新建资源组** 按钮

![dr-operations-manual-huaweicloud-89.png](./images/dr-operations-manual-huaweicloud-89.png)

配置资源组基本信息，包括**资源组名称**和**描述，**此处两部分内部可以按照需求进行添加即可，并点击 **下一步** 按钮

![dr-operations-manual-huaweicloud-91.png](./images/dr-operations-manual-huaweicloud-91.png)

关联资源，选择左侧已经完成容灾配置的容灾主机资源，并点击 **添加资源** 按钮，将对应容灾主机加入到资源组中，并点击 **下一步** 按钮。

![dr-operations-manual-huaweicloud-93.png](./images/dr-operations-manual-huaweicloud-93.png)

同步策略，选择资源组所使用的策略，如果已经提前已经创建同步策略，则可以直接选择，如果没有可以点击 **创建策略** 按钮，创建一个新的容灾策略。

![dr-operations-manual-huaweicloud-95.png](./images/dr-operations-manual-huaweicloud-95.png)

启动编排，左侧已关联资源中的主机资源可以进行启动顺序的调整，确认后点击完成

![dr-operations-manual-huaweicloud-97.png](./images/dr-operations-manual-huaweicloud-97.png)

![dr-operations-manual-huaweicloud-98.png](./images/dr-operations-manual-huaweicloud-98.png)

![dr-operations-manual-huaweicloud-99.png](./images/dr-operations-manual-huaweicloud-99.png)

### 5.2. 修改资源组

选择资源组后点击  **更多操作** 按钮，可以对资源组的 基本信息、关联资源、关联策略和启动编排进行修改。

![dr-operations-manual-huaweicloud-103.png](./images/dr-operations-manual-huaweicloud-103.png)

![dr-operations-manual-huaweicloud-104.png](./images/dr-operations-manual-huaweicloud-104.png)

![dr-operations-manual-huaweicloud-105.png](./images/dr-operations-manual-huaweicloud-105.png)

![dr-operations-manual-huaweicloud-106.png](./images/dr-operations-manual-huaweicloud-106.png)

![dr-operations-manual-huaweicloud-107.png](./images/dr-operations-manual-huaweicloud-107.png)

### 5.3. 删除资源组

勾选资源组，并点击 **删除资源组** 按钮来执行删除资源组操作

![dr-operations-manual-huaweicloud-113.png](./images/dr-operations-manual-huaweicloud-113.png)

按照删除资源组弹框提醒，勾选相关配置选项，输入 **Yes** 字符来确定删除动作，并点击 **确定** 按钮完成删除操作。

::: warning
**选项一：** 该操作仅删除资源组，资源组中的资源将会保留 【资源组内容灾主机将会单独在主机容灾里面展示，仍然可以对单个容灾主机进行容灾操作，继续保留已经同步完成的数据，不会从容灾平台清理掉】  
**选项二：** 该操作不仅删除资源组，资源组中的资源也将会删除【资源组内容灾主机会直接被从容灾平台清理掉，所有同步的数据将会被清理掉】  
**选项三：** (不推荐)我确认要强制清理资源，可能会导致有资源残留（仅在清理失败时使用）【在特殊场景下勾选使用，正常流程无需勾选，特殊场景例如：资源组中的容灾主机失联、清理失败等，此选项会直接清理记录，不会发起调用请求】
:::

![dr-operations-manual-huaweicloud-115.png](./images/dr-operations-manual-huaweicloud-115.png)

### 5.4. 资源组 - 同步数据

勾选配置完成的资源组，点击 **立即同步** 按钮，按照提示框点击 **确定** 按钮，进行数据同步操作，也可以按照资源组的 **关联策略** 自动执行同步数据动作。

> 初次加入资源组的容灾主机，需要进行 **立即同步** 数据操作，即使在容灾主机在 **主机容灾** 时已经进行了数据同步操作。
> 附加到资源组的同步策略将会自动按照策略设定执行同步数据任务

![dr-operations-manual-huaweicloud-117.png](./images/dr-operations-manual-huaweicloud-117.png)

![dr-operations-manual-huaweicloud-118.png](./images/dr-operations-manual-huaweicloud-118.png)

### 5.5. 资源组 - 容灾接管/容灾演练

等待数据同步完成（同步快照完成），勾选需要容灾演练/容灾接管的资源组，并选择 **容灾演练/容灾接管** 按钮

::: warning
初次加入资源组的容灾主机，需要进行 **立即同步** 数据操作，不然无法进行 **容灾演练/容灾接管** 操作。即使资源组内的容灾主机已经在 **主机容灾** 时进行了数据同步操作。
:::

![dr-operations-manual-huaweicloud-121.png](./images/dr-operations-manual-huaweicloud-121.png)

弹出框选择 **同步时间点** 快照副本，确认信息无误后，点击 **确定** 按钮

> 同步时间点，则每次数据同步完成后产生的快照副本，记录了每一次可恢复数据时间点可供选择

![dr-operations-manual-huaweicloud-123.png](./images/dr-operations-manual-huaweicloud-123.png)

资源组状态为演练/接管完成，即可登录到容灾平台进行演练或接管操作。

![dr-operations-manual-huaweicloud-125.png](./images/dr-operations-manual-huaweicloud-125.png)

### 5.6. 资源组 - 清理验证资源

勾选需要清理验证资源的资源组，点击 **更多操作** 按钮，选择 **清理验证资源** 按钮

> 清理验证资源，则表示将已经执行了 **容灾演练/容灾接管** 的资源组，并在容灾平台产生的容灾主机实例进行删除动作，此动作防止直接人工操作容灾平台删除实例而导致的风险。

::: warning
如果容灾平台恢复的容灾主机已经接管业务，请不要执行此操作，此操作会直接删除容灾平台生成的实例。**
:::

![dr-operations-manual-huaweicloud-127.png](./images/dr-operations-manual-huaweicloud-127.png)

确认需要在容灾平台清理的验证资源准确无误后，输入框填写 **Yes** 字符进行确认，并点击 **确定** 按钮即可

![dr-operations-manual-huaweicloud-129.png](./images/dr-operations-manual-huaweicloud-129.png)

![dr-operations-manual-huaweicloud-130.png](./images/dr-operations-manual-huaweicloud-130.png)

## 6. 策略设置

### 6.1. 创建策略

上方菜单栏点击 **配置管理**，左侧选择 **策略设置**，点击 **创建策略**。

![dr-operations-manual-huaweicloud-133.png](./images/dr-operations-manual-huaweicloud-133.png)

创建策略页面可以修改策略配置的各种参数。

#### 6.1.1 策略名称、保留快照数量、策略状态

| **参数** | **描述** |
| --- | --- |
| 策略名称 | 填写同步策略的名称，自定义配置，其他容灾资源组都可以共用。 |
| 保留快照数量 | 配置同步快照的保留数量，快照数量取值范围为(1-128)的整数，如不设置默认为128。快照数量达到设定配额后将从最早的快照开始删除，始终保持设定的快照个数。 |
| 策略状态 | 控制同步策略的开启与关闭。 |

![dr-operations-manual-huaweicloud-135.png](./images/dr-operations-manual-huaweicloud-135.png)

#### 6.1.2 同步策略

勾选 **同步策略-增量同步**，可以开启并设置增量数据同步策略的参数。

勾选 **同步策略-全量同步**，可以开启并设置全量数据同步策略的参数。

![dr-operations-manual-huaweicloud-137.png](./images/dr-operations-manual-huaweicloud-137.png)

| **参数** | **描述** |
| --- | --- |
| 周期 | 同步策略执行周期，可以设置为 **每间隔N分钟**、**每间隔N小时**、**每N天**、**每周**、**每月** 的周期进行设置周期性同步任务触发条件 |
| 分钟数 | 在 **周期** 设置为 **每间隔N分钟** 时可以进行设置，设置每间隔N分钟执行一次，其中N取值范围为[5-59]的整数。 <br> 本次设置完成后，应用的所有资源组都会按照此策略生效 |
| 小时数 | 在 **周期** 设置为 **每间隔N小时** 时可以进行设置，设置每间隔N小时执行一次，其中N取值范围为[1-23]的整数。 |
| 天数 | 在 **周期** 设置为 **每N天**时可以进行设置，设置每N天执行一次，其中N取值范围为[1-30]的整数。 |
| 日期（周） | 在 **周期** 设置为 **每周** 时可以进行设置，每周几执行一次同步策略。 <br> 每周执行一次，其中n取值范围为[周一、周二、周三、周四、周五、周六、周日]，可多选。 |
| 日期（月） | 在 **周期** 设置为 **每月** 时可以进行设置，每月的几号执行一次同步策略。 <br> 每月几号执行一次，其中可选范围为[1-31、月末]，可多选。 <br> 29号：在2月份只在闰年时会执行，平年2月份会跳过不执行。 <br> 30号：跳过2月份不执行，其他都执行。 <br> 31号：只在[1，3，5，7，8，10，12]月份执行，其他不执行。 <br> 月末：每个月最后一天执行。 |
| 开始时间 | 在 **周期** 设置为 **每间隔N分钟** 和 **每间隔N小时** 时均可以进行设置。 <br> 设置同步策略的第一次触发时间。 |
| 时间（**每周**） | 在 **周期** 设置为 **每周** 时可以进行设置。 <br> 设置每周几当天的时间开始触发策略执行同步。 |
| 时间（**每月**） | 在 **周期** 设置为 **每月** 时可以进行设置。 <br> 设置每月当天的时间开始触发策略执行同步。 |

#### 6.1.3 限速策略

支持 多时间段限速 (支持在同一周期内设置不同时间段的限速，切换周期会清除当前设定的限速设置)

![dr-operations-manual-huaweicloud-139.png](./images/dr-operations-manual-huaweicloud-139.png)


| **参数** | **描述** |
| --- | --- |
| 周期 | 限速周期，可以设置为**每N天**、**每周**、**每月** 的周期进行设置周期性触发限速条件 |
| 天数 | 在 **周期** 设置为 **每N天**时可以进行设置，设置每N天执行一次，其中N取值范围为[1-30]的整数。 |
| 日期（每周） | 在 **周期** 设置为 **每周** 时可以进行设置，每周几执行一次限速策略。 <br> 每周执行一次，其中n取值范围为[周一、周二、周三、周四、周五、周六、周日]，可多选。 |
| 日期（每月） | 在 **周期** 设置为 **每月** 时可以进行设置，每月的几号执行一次同步策略。 <br> 每月几号执行一次，其中可选范围为[1-31、月末]，可多选。 <br> 29号：在2月份只在闰年时会执行，平年2月份会跳过不执行。 <br> 30号：跳过2月份不执行，其他都执行。 <br> 31号：只在[1，3，5，7，8，10，12]月份执行，其他不执行。 <br> 月末：每个月最后一天执行。 |
| 限速时间 | 设置限速任务触发的时间。 |
| 主机限速 | 主机限速值应为≥1的整数。单位: Mbps |

#### 6.1.4 保留策略

可以勾选按序列保留，开启并设置快照保留策略 (设置按快照序列进行快照保留，通过该设定可以让特殊时间点的快照保留指定时间，例如：每个月的第一个快照保留3周。注意：在设置时，请保证有充足的配额制作新的快照，否则同步数据将失败。)

![dr-operations-manual-huaweicloud-141.png](./images/dr-operations-manual-huaweicloud-141.png)

### 6.2. 修改策略

勾选已经创建的同步策略，点击 **更多操作**，选择 **修改**，可以修改同步策略的参数。

![dr-operations-manual-huaweicloud-143.png](./images/dr-operations-manual-huaweicloud-143.png)

### 6.3. 策略关联主机

勾选已经创建的同步策略，在点击 **更多操作**，选择 **关联主机**，勾选未关联策略的主机后点击 **确定**，可以进行关联。

![dr-operations-manual-huaweicloud-145.png](./images/dr-operations-manual-huaweicloud-145.png)

![dr-operations-manual-huaweicloud-146.png](./images/dr-operations-manual-huaweicloud-146.png)

### 6.4. 删除策略

勾选已经创建的同步策略，点击 **更多操作**，选择 **删除**，确定即可删除未关联主机的策略。

![dr-operations-manual-huaweicloud-149.png](./images/dr-operations-manual-huaweicloud-149.png)

![dr-operations-manual-huaweicloud-150.png](./images/dr-operations-manual-huaweicloud-150.png)

> 如果策略已经关联资源（主机、资源组），则不支持删除，请先解）再进行删除操作。

![dr-operations-manual-huaweicloud-153.png](./images/dr-operations-manual-huaweicloud-153.png)

### 6.5 策略解绑关联资源（主机、资源组）

点击策略名称，选择 **关联主机 **或** 关联资源组 **的标签页，勾选需要解绑的资源，点击 **解绑主机 **或 **解绑资源组 **按钮，确定后即可解绑关联资源。

![dr-operations-manual-huaweicloud-155.png](./images/dr-operations-manual-huaweicloud-155.png)

![dr-operations-manual-huaweicloud-156.png](./images/dr-operations-manual-huaweicloud-156.png)

![dr-operations-manual-huaweicloud-157.png](./images/dr-operations-manual-huaweicloud-157.png)

## 7. 告警设置

::: tip
Currently, two methods of Email alerts and SMS alerts are supported.
:::

### 7.1 告警发送配置

#### 7.1.1 Email 邮件告警

1. Log in the Broadview coss console

> Login Address：https://<HyperBDR IP\>:30443  
> Default administrator user：admin  
> Default administrator password：P@ssw0rd

2. Configure SMTP

3. Send Test Email

#### 7.1.2 SMS 短信告警

1. Log in the Broadview coss console

> Login Address：https://<HyperBDR IP\>:30443  
> Default administrator user：admin  
> Default administrator password：P@ssw0rd

2. Configure SMS Service

3. Send Test SMS

### 7.2 通知配置

> Logged into the HyperBDR console by default

1. Add Notufication


2. Configure Notufication


### 7.3 告警规则配置

#### 7.3.1 资源告警

1. Create Resource Alert

2. Configure Resource Alert

#### 7.3.2 事件告警

1. Create Event Alert

2. Configure Event Alert

## 8. 清理资源

清理资源，将添加到容灾平台的容灾主机进行清理删除操作，该步骤完成后，所选主机无法进行容灾操作。

> 注意：清理资源对源机、已经启动云上的主机没有影响

勾选已经需要清理资源的容灾主机，点击 **更多操作**，选择 **清理资源**，确认信息并勾选确认即可清理资源。

![dr-operations-manual-huaweicloud-161.png](./images/dr-operations-manual-huaweicloud-161.png)

![dr-operations-manual-huaweicloud-162.png](./images/dr-operations-manual-huaweicloud-162.png)

---

## 附录一：参考-windows防火墙设置

**请根据实际需要在以下两种环境中选择配置：**

### 一、Windows 2008/2012/2016**

打开【Windows防火墙】，将Windows-Agent.exe服务加入"防火墙允许通过"，详见下图所示： 

![dr-operations-manual-huaweicloud-165.jpeg](./images/dr-operations-manual-huaweicloud-165.jpeg)

![dr-operations-manual-huaweicloud-166.jpeg](./images/dr-operations-manual-huaweicloud-166.jpeg)


### 二、Windows 2003**

打开Windows防火墙，依次点击【例外】→【添加程序】→【浏览】

![dr-operations-manual-huaweicloud-167.png](./images/dr-operations-manual-huaweicloud-167.png)

![dr-operations-manual-huaweicloud-168.png](./images/dr-operations-manual-huaweicloud-168.png)

图3中，选中Windows-Agent.exe程序，点击【打开】；  
在图4“添加程序”列表可看到“Windows-Agent.exe”默认被选中，点击【确定】完成添加，重启系统。  
注：目录默认为“C:\Program Files (x86)\Windows-Agent\ Windows-Agent.exe”
