# 主机容灾（HostDR）流程与截图关联清单

> 范围：仅梳理中文 VuePress 的“主机容灾”正向流程，用于后续自动化截图设计；不包含主机回切。此清单根据现有文档反向整理，页面名称、步骤顺序和控件均以文档明确描述为准。当前文档没有提供控制台页面 URL、DOM 选择器或稳定测试数据，因此这些内容需要在实现截图自动化时另行补充。

## 1. 文档入口与流程总览

入口文档为[主机容灾](src/zh/userguide/dr/dr/host-dr.md#L1-L87)。它依次引入[选择主机](src/zh/userguide/dr/dr/_host-dr/select-host.md#L1-L236)、[容灾配置入口与公共步骤](src/zh/userguide/dr/dr/_host-dr/setup-dr.md#L1-L28)、[块存储配置](src/zh/userguide/dr/dr/_host-dr/setup-dr-block-storage.md#L1-L287)、[对象存储配置](src/zh/userguide/dr/dr/_host-dr/setup-dr-object-storage.md#L1-L271)及[开始容灾](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L1-L336)。

```text
准备工作
  → 选择主机（源端无代理 / 源端 Agent；Agent 分 Linux / Windows）
  → 容灾配置（块存储 / 对象存储）
      块存储：指定容灾平台 → 指定云同步网关 → 计算资源 → 卷类型 → 网络 → 高级配置（可选）→ 关联策略（可选）
      对象存储：指定容灾平台 → 计算资源 → 卷类型 → 网络 → 高级配置（可选）→ 关联策略（可选）
  → 开始容灾（立即同步）
      同步完成后：容灾演练 / 容灾接管
      同步过程中且卷准备完成：可停止同步
      块存储专属：快速接管（解除策略关联并确认影响）
```

**自动化注意：** 容灾配置完成后，文档说明主机会自动进入“开始容灾”，不需要再手动点击“下一步”。配置步骤的实际顺序在不同云平台可能略有差异，应以运行时页面为准。

## 2. 条件分支清单

| 分支点 | 条件与分支 | 对截图流程的影响 | 来源 |
| --- | --- | --- | --- |
| 准备工作 | 已有容灾账号、已添加授权、已配置生产站点的项目可分别跳过对应步骤；生产站点配置仅适用于源端无代理模式。 | 根据测试账号与源端接入模式决定是否执行准备步骤。准备工作段本身未附截图。 | [host-dr.md:18–52](src/zh/userguide/dr/dr/host-dr.md#L18-L52) |
| 源端接入模式 | 源端无代理模式；或源端代理程序（Linux / Windows）。 | 无代理分支还需生产平台站点和 Sync Proxy；Agent 分支分别执行 Linux 命令或 Windows 安装包流程。 | [select-host.md:22–107](src/zh/userguide/dr/dr/_host-dr/select-host.md#L22-L107) |
| 无代理生产平台 | VMware、OpenStack、AWS、FusionCompute、Oracle、HCS 8.0.2、HCS Online、华为云。 | 平台选择及生产站点配置说明按平台分支；HCS Online 的生产站点配置目前在相应页面标记为待补充。 | [select-host.md:22–53](src/zh/userguide/dr/dr/_host-dr/select-host.md#L22-L53)；[host-dr.md:36–51](src/zh/userguide/dr/dr/host-dr.md#L36-L51) |
| 容灾存储类型 | 块存储 / 对象存储。 | 块存储需要“指定云同步网关”；对象存储无此步骤，改为选择对象存储及读写网络、容灾恢复平台。 | [setup-dr.md:10–16](src/zh/userguide/dr/dr/_host-dr/setup-dr.md#L10-L16)；[setup-dr-block-storage.md:9–67](src/zh/userguide/dr/dr/_host-dr/setup-dr-block-storage.md#L9-L67)；[setup-dr-object-storage.md:9–51](src/zh/userguide/dr/dr/_host-dr/setup-dr-object-storage.md#L9-L51) |
| 网络网卡数量 | 单网卡 / 多网卡。 | 多网卡分支可选添加网卡，并可修改或移除网卡；单网卡分支直接设置网络参数。 | [setup-dr-block-storage.md:122–179](src/zh/userguide/dr/dr/_host-dr/setup-dr-block-storage.md#L122-L179)；[setup-dr-object-storage.md:108–165](src/zh/userguide/dr/dr/_host-dr/setup-dr-object-storage.md#L108-L165) |
| 高级配置 | 无特殊需求时通常跳过；有特殊需求时逐主机配置。 | 自动化应允许“跳过”与“进入配置”两条路；需要按实际页面提示确认。 | [setup-dr-block-storage.md:199–215](src/zh/userguide/dr/dr/_host-dr/setup-dr-block-storage.md#L199-L215)；[setup-dr-object-storage.md:185–201](src/zh/userguide/dr/dr/_host-dr/setup-dr-object-storage.md#L185-L201) |
| 策略关联 | 可逐主机或批量关联；也可暂不关联，后续再设置。若没有合适策略，可先创建策略。 | 自动化应支持选择策略、刷新列表、批量操作及跳过策略分支。 | [setup-dr-block-storage.md:261–287](src/zh/userguide/dr/dr/_host-dr/setup-dr-block-storage.md#L261-L287)；[setup-dr-object-storage.md:247–271](src/zh/userguide/dr/dr/_host-dr/setup-dr-object-storage.md#L247-L271) |
| 同步状态 | 同步中、同步完成、非同步状态。 | 只有同步中且卷准备完毕时可停止同步；文档要求完成数据同步后才能进行演练或接管。 | [start-dr.md:7–33](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L7-L33) |
| 接管方式 | 常规容灾接管；或快速接管。 | 快速接管仅支持块存储，需先解除策略关联并确认影响；完成后主机不能继续同步。 | [start-dr.md:47–74](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L47-L74) |
| 主机数量与批量设置 | 单台或多台主机；部分参数可逐台或批量设置。 | 截图流程应分别覆盖单选、多选/批量设置的代表性路径。 | [host-dr.md:3–5](src/zh/userguide/dr/dr/host-dr.md#L3-L5)；[setup-dr-block-storage.md:85–97](src/zh/userguide/dr/dr/_host-dr/setup-dr-block-storage.md#L85-L97) |

## 3. 按业务步骤映射页面、操作、文档和截图

截图文件名均链接到仓库中的实际图片。页面层级是文档给出的控制台导航或步骤名称；若文档没有明确指出是独立页面还是同页面板，不额外假定。

| 步骤 | UI 页面 / 面板 | 需要点击、选择、填写或勾选的元素 | 条件 | 对应 Markdown | 文档截图 |
| --- | --- | --- | --- | --- | --- |
| 准备：账号、授权 | 容灾账号注册 / 产品授权申请；具体控制台页面未在 HostDR 文档中展开 | 创建容灾账号；申请或添加 HyperBDR 授权。已有账号或授权时跳过。 | 是否已有账号、授权 | [host-dr.md:20–34](src/zh/userguide/dr/dr/host-dr.md#L20-L34) | 无截图 |
| 准备：源端生产站点 | 配置管理中的生产站点配置（按平台选择） | 无代理模式下按源端平台添加生产站点；已有配置或使用 Agent 模式时跳过。 | 源端 Agentless；平台类型 | [host-dr.md:36–52](src/zh/userguide/dr/dr/host-dr.md#L36-L52)；具体指南链接在文档表格中 | 无截图 |
| 准备：容灾目标与网络 | 容灾恢复平台 / 存储配置 / 网络规划；具体页面由目标平台决定 | 按块存储、对象存储完成目标配置；开通所需网络；规划 VPC、子网、安全组。 | 存储类型、目标平台 | [host-dr.md:53–80](src/zh/userguide/dr/dr/host-dr.md#L53-L80) | 无截图 |
| 选择主机：进入页面 | 资源容灾 → 主机容灾 → 选择主机 | 点击“添加主机”；页面还提供“下一步”和“更多操作”。 | 主流程入口 | [select-host.md:1–20](src/zh/userguide/dr/dr/_host-dr/select-host.md#L1-L20) | [hostdr-select-host-main.png](src/zh/userguide/dr/dr/images/hostdr-select-host-main.png) |
| 添加主机：无代理 | 选择主机 → 添加主机 → 源端无代理模式 / 生产平台 | 选择“源端无代理模式”和平台；选择已添加的生产站点；点击“下一步”；在主机列表中搜索/翻页、勾选虚拟机；若主机未显示，点击“重载虚拟机”；点击“确定”注册。 | Agentless；需已部署 Sync Proxy 并完成站点准备 | [select-host.md:22–73](src/zh/userguide/dr/dr/_host-dr/select-host.md#L22-L73) | [hostdr-select-host-vmware-account.png](src/zh/userguide/dr/dr/images/hostdr-select-host-vmware-account.png)、[hostdr-select-host-vmware-host-list.png](src/zh/userguide/dr/dr/images/hostdr-select-host-vmware-host-list.png)、[hostdr-select-host-main.png](src/zh/userguide/dr/dr/images/hostdr-select-host-main.png) |
| 添加主机：Linux Agent | 选择主机 → 添加主机 → 源端代理程序 → Linux | 选择 Agent 和 Linux；复制/点击安装命令，在源端 Linux 终端执行；等待自动注册并检查状态。 | Linux 主机且 OS 在支持范围内 | [select-host.md:75–91](src/zh/userguide/dr/dr/_host-dr/select-host.md#L75-L91) | [hostdr-select-host-agent-linux.png](src/zh/userguide/dr/dr/images/hostdr-select-host-agent-linux.png)、[hostdr-select-host-main.png](src/zh/userguide/dr/dr/images/hostdr-select-host-main.png) |
| 添加主机：Windows Agent | 选择主机 → 添加主机 → 源端代理程序 → Windows | 选择 Agent 和 Windows；按 OS 版本点击“立即下载”；将安装包上传至 Windows 主机并安装；等待自动注册。 | Windows 主机且 OS 在支持范围内 | [select-host.md:93–107](src/zh/userguide/dr/dr/_host-dr/select-host.md#L93-L107) | [hostdr-select-host-agent-windows.png](src/zh/userguide/dr/dr/images/hostdr-select-host-agent-windows.png)、[hostdr-select-host-agent-windows-download.png](src/zh/userguide/dr/dr/images/hostdr-select-host-agent-windows-download.png)、[hostdr-select-host-main.png](src/zh/userguide/dr/dr/images/hostdr-select-host-main.png) |
| 选择完成并继续 | 选择主机列表 | 勾选待备份主机；点击“下一步”进入容灾配置。 | 主机已注册 | [select-host.md:109–111](src/zh/userguide/dr/dr/_host-dr/select-host.md#L109-L111) | 文档未单独配图 |
| 容灾配置：入口 | 资源容灾 → 主机容灾 → 容灾配置 | 选择一台或多台主机；点击“容灾配置”；再选择块存储或对象存储。 | 已选中待配置主机 | [setup-dr.md:2–16](src/zh/userguide/dr/dr/_host-dr/setup-dr.md#L2-L16) | [hostdr-setup-main.png](src/zh/userguide/dr/dr/images/hostdr-setup-main.png) |
| 块存储：指定容灾平台 | 容灾配置 → 块存储 → 指定容灾平台 | 选择“块存储”；选择存储平台、云账号、地域和可用区；可选修改源端同步设置；点击“下一步”。 | 块存储配置和云同步网关初始化已完成 | [setup-dr-block-storage.md:9–43](src/zh/userguide/dr/dr/_host-dr/setup-dr-block-storage.md#L9-L43) | [hostdr-setup-block-platform.png](src/zh/userguide/dr/dr/images/hostdr-setup-block-platform.png) |
| 块存储：指定云同步网关 | 容灾配置 → 指定云同步网关 | 选择网关；在“未指定主机”行点击“+”加入；在“已指定主机”行点击“x”移除；确认后点击“下一步”。 | 仅块存储分支 | [setup-dr-block-storage.md:45–67](src/zh/userguide/dr/dr/_host-dr/setup-dr-block-storage.md#L45-L67) | [hostdr-setup-block-gateway.png](src/zh/userguide/dr/dr/images/hostdr-setup-block-gateway.png)、[hostdr-setup-block-gateway-plus.png](src/zh/userguide/dr/dr/images/hostdr-setup-block-gateway-plus.png) |
| 对象存储：指定容灾平台 | 容灾配置 → 对象存储 → 指定容灾平台 | 选择“对象存储”；选择对象存储、数据写入网络、数据读取网络；选择并配置容灾恢复平台、可用域和可用区；点击“下一步”。可用域由对象存储配置决定且不可在此修改。 | 仅对象存储分支；无指定云同步网关步骤 | [setup-dr-object-storage.md:9–51](src/zh/userguide/dr/dr/_host-dr/setup-dr-object-storage.md#L9-L51) | [hostdr-setup-object-platform.png](src/zh/userguide/dr/dr/images/hostdr-setup-object-platform.png) |
| 计算资源配置 | 容灾配置 → 计算资源配置 | 勾选主机；必要时点击“修改规格”“修改”或 OS 下拉框；可批量设置规格、启动方式和系统类型；点击“下一步”。 | 块/对象存储共有；部分目标平台不支持所有启动方式 | [setup-dr-block-storage.md:69–97](src/zh/userguide/dr/dr/_host-dr/setup-dr-block-storage.md#L69-L97)；[setup-dr-object-storage.md:53–81](src/zh/userguide/dr/dr/_host-dr/setup-dr-object-storage.md#L53-L81) | [hostdr-setup-block-computing.png](src/zh/userguide/dr/dr/images/hostdr-setup-block-computing.png)、[hostdr-setup-object-computing.png](src/zh/userguide/dr/dr/images/hostdr-setup-object-computing.png) |
| 指定卷类型 | 容灾配置 → 指定卷类型 | 为系统盘、数据盘、新增盘选择目标卷类型；多磁盘主机逐台设置启动盘；对象存储还记录了可选的目标卷性能参数修改；点击“下一步”。 | 块/对象存储共有；多磁盘主机须指定启动盘 | [setup-dr-block-storage.md:99–120](src/zh/userguide/dr/dr/_host-dr/setup-dr-block-storage.md#L99-L120)；[setup-dr-object-storage.md:83–106](src/zh/userguide/dr/dr/_host-dr/setup-dr-object-storage.md#L83-L106) | [hostdr-setup-block-volume.png](src/zh/userguide/dr/dr/images/hostdr-setup-block-volume.png)、[hostdr-setup-object-volume.png](src/zh/userguide/dr/dr/images/hostdr-setup-object-volume.png) |
| 网络配置：单网卡 | 容灾配置 → 网络配置 | 选择网络和子网；设置内网 IP、公网 IP、MAC 地址、安全组；按需要批量设置；点击“下一步”。 | 块/对象存储共有；功能支持随云平台不同 | [setup-dr-block-storage.md:122–153](src/zh/userguide/dr/dr/_host-dr/setup-dr-block-storage.md#L122-L153)；[setup-dr-object-storage.md:108–139](src/zh/userguide/dr/dr/_host-dr/setup-dr-object-storage.md#L108-L139) | [hostdr-setup-block-network.png](src/zh/userguide/dr/dr/images/hostdr-setup-block-network.png)、[hostdr-setup-object-network.png](src/zh/userguide/dr/dr/images/hostdr-setup-object-network.png) |
| 网络配置：多网卡 | 容灾配置 → 网络配置 → 多网卡 | 可选点击“添加网卡”；找到网卡后点击“修改”或“移除”；完成后点击“下一步”。 | 仅在主机需要多块网卡分别配置时进入 | [setup-dr-block-storage.md:155–177](src/zh/userguide/dr/dr/_host-dr/setup-dr-block-storage.md#L155-L177)；[setup-dr-object-storage.md:141–163](src/zh/userguide/dr/dr/_host-dr/setup-dr-object-storage.md#L141-L163) | [hostdr-setup-network-add-nic.png](src/zh/userguide/dr/dr/images/hostdr-setup-network-add-nic.png)、[hostdr-setup-network-modify-nic.png](src/zh/userguide/dr/dr/images/hostdr-setup-network-modify-nic.png)（块/对象文档共用） |
| 高级配置（可选） | 容灾配置 → 高级配置 | 点击主机行右侧“配置”；按需配置前后脚本、驱动适配、恢复主机网络、启动高级设置；阅读提示后确认并点击“下一步”。 | 无特殊需求可跳过；配置后主机进入开始容灾状态，但尚未启动首次同步 | [setup-dr-block-storage.md:199–259](src/zh/userguide/dr/dr/_host-dr/setup-dr-block-storage.md#L199-L259)；[setup-dr-object-storage.md:185–245](src/zh/userguide/dr/dr/_host-dr/setup-dr-object-storage.md#L185-L245) | [hostdr-setup-block-advanced.png](src/zh/userguide/dr/dr/images/hostdr-setup-block-advanced.png)、[hostdr-setup-object-advanced.png](src/zh/userguide/dr/dr/images/hostdr-setup-object-advanced.png)、[hostdr-setup-block-advanced-configuration.png](src/zh/userguide/dr/dr/images/hostdr-setup-block-advanced-configuration.png)、[hostdr-setup-object-advanced-configuration.png](src/zh/userguide/dr/dr/images/hostdr-setup-object-advanced-configuration.png)、[hostdr-setup-driver-adaptation.png](src/zh/userguide/dr/dr/images/hostdr-setup-driver-adaptation.png)（块/对象共用） |
| 关联策略（可选） | 容灾配置 → 关联策略 | 选择主机行的策略下拉项；必要时刷新策略列表；可批量关联；弹窗中选择策略并确认，最后点击“确定”。也可跳过。 | 需已有策略；若无合适策略可先创建；允许延后关联 | [setup-dr-block-storage.md:261–287](src/zh/userguide/dr/dr/_host-dr/setup-dr-block-storage.md#L261-L287)；[setup-dr-object-storage.md:247–271](src/zh/userguide/dr/dr/_host-dr/setup-dr-object-storage.md#L247-L271) | [hostdr-setup-block-policy-single.png](src/zh/userguide/dr/dr/images/hostdr-setup-block-policy-single.png)、[hostdr-setup-block-policy-batch.png](src/zh/userguide/dr/dr/images/hostdr-setup-block-policy-batch.png)、[hostdr-setup-object-policy-single.png](src/zh/userguide/dr/dr/images/hostdr-setup-object-policy-single.png)、[hostdr-setup-object-policy-batch.png](src/zh/userguide/dr/dr/images/hostdr-setup-object-policy-batch.png) |
| 开始容灾：立即同步 | 资源容灾 → 主机容灾 → 开始容灾 | 选择一台或多台主机；点击“立即同步”；阅读确认框注意事项并点击“确认”；等待全量同步完成。可打开主机状态、任务状态或启动状态详情查看进度。 | 首次同步必须完成后，才能进行演练或接管 | [start-dr.md:1–25](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L1-L25) | [hostdr-start-main.png](src/zh/userguide/dr/dr/images/hostdr-start-main.png)、[hostdr-start-sync.png](src/zh/userguide/dr/dr/images/hostdr-start-sync.png)、[hostdr-start-sync-confirm.png](src/zh/userguide/dr/dr/images/hostdr-start-sync-confirm.png) |
| 停止同步 | 开始容灾 → 主机列表 / 同步任务 | 同步中且卷准备完毕时点击“停止同步”。非同步或已完成的主机不支持。 | 可选，且只在指定状态下执行 | [start-dr.md:27–33](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L27-L33) | [hostdr-start-stop-sync.png](src/zh/userguide/dr/dr/images/hostdr-start-stop-sync.png) |
| 容灾演练 | 开始容灾 → 主机列表 → 容灾演练 | 选择容灾主机；点击“容灾演练”；选择恢复时间点；检查启动的目标实例及应用服务。 | 数据同步完成后 | [start-dr.md:35–45](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L35-L45) | [hostdr-start-main.png](src/zh/userguide/dr/dr/images/hostdr-start-main.png)、[hostdr-start-drill.png](src/zh/userguide/dr/dr/images/hostdr-start-drill.png) |
| 容灾接管 | 开始容灾 → 主机列表 → 容灾接管 | 选择业务主机；点击“容灾接管”；选择恢复快照时间点；点击“确定”；启动业务后检查数据库、应用和依赖服务。 | 数据同步完成后 | [start-dr.md:47–57](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L47-L57) | [hostdr-start-main.png](src/zh/userguide/dr/dr/images/hostdr-start-main.png)、[hostdr-start-takeover.png](src/zh/userguide/dr/dr/images/hostdr-start-takeover.png) |
| 快速接管 | 开始容灾 → 主机容灾页面 → 快速接管弹窗 | 选择主机；点击“快速接管”；点击“解除策略关联”；等待策略状态为“无策略”；点击“下一步”；勾选主机及影响确认框；点击“确认快速接管”。 | 仅块存储；接管后不支持继续同步 | [start-dr.md:59–74](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L59-L74) | [hostdr-start-main.png](src/zh/userguide/dr/dr/images/hostdr-start-main.png)、[hostdr-start-quick-takeover-step-02.png](src/zh/userguide/dr/dr/images/hostdr-start-quick-takeover-step-02.png)、[hostdr-start-quick-takeover-step-03.png](src/zh/userguide/dr/dr/images/hostdr-start-quick-takeover-step-03.png) |

## 4. “更多操作”页面元素与条件

“更多操作”是选择主机和开始容灾中的可选管理分支。截图自动化应将“悬停/展开菜单”和“点击具体操作”建成不同动作，不能仅按图片数量推断控件位置。

| 操作 | 需要操作的页面元素 / 输入 | 条件 | 文档与截图 |
| --- | --- | --- | --- |
| 指定容灾平台 | 展开“更多操作”，点击“指定容灾平台”；块存储/对象存储分别按对应配置步骤修改。 | 已完成数据同步的主机不支持更改。 | [start-dr.md:80–92](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L80-L92)；[hover](src/zh/userguide/dr/dr/images/hostdr-start-action-hover-specify-dr-platform.png) / [click](src/zh/userguide/dr/dr/images/hostdr-start-action-click-specify-dr-platform.png) |
| 指定云同步网关 | 点击“指定云同步网关”，选择网关。 | 仅块存储；已完成数据同步的主机不支持更改。 | [start-dr.md:94–102](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L94-L102)；[菜单](src/zh/userguide/dr/dr/images/hostdr-start-action-dropdown.png) |
| 指定卷类型 | 点击“指定卷类型”，按存储类型修改卷设置。 | 已完成数据同步的主机不支持更改。 | [start-dr.md:104–116](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L104-L116)；[hover](src/zh/userguide/dr/dr/images/hostdr-start-action-hover-specify-volume-type.png) / [click](src/zh/userguide/dr/dr/images/hostdr-start-action-click-specify-volume-type.png) |
| 计算资源 / 网络配置 | 点击相应菜单项并调整已有目标配置。 | 已完成数据同步的主机不支持更改。 | [start-dr.md:118–144](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L118-L144)；[计算 hover](src/zh/userguide/dr/dr/images/hostdr-start-action-hover-computing-resource-configuration.png) / [计算 click](src/zh/userguide/dr/dr/images/hostdr-start-action-click-computing-resource-configuration.png)；[网络 hover](src/zh/userguide/dr/dr/images/hostdr-start-action-hover-network-configuration.png) / [网络 click](src/zh/userguide/dr/dr/images/hostdr-start-action-click-network-configuration.png) |
| 高级配置 / 关联策略 | 点击对应菜单项，修改配置或策略。 | 文档未在此处说明同步完成后的限制；不要臆测。 | [start-dr.md:146–168](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L146-L168)；对应 hover/click 图片分别为 `hostdr-start-action-hover-advanced-configuration.png`、`hostdr-start-action-click-advanced-configuration.png`、`hostdr-start-action-hover-associate-policy.png`、`hostdr-start-action-click-associate-policy.png` |
| 源端同步设置 | 点击菜单；按适用模式切换并设置通用参数、线程、重试、对象上传或 VSS 参数。 | 通用/重试：Linux Agent、Windows Agent、Agentless；Agentless 线程项；Agent 线程项；对象上传仅 Linux Agent；VSS 仅 Windows Agent。界面位置因模式可能不同。 | [start-dr.md:170–252](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L170-L252)；[开始容灾 hover](src/zh/userguide/dr/dr/images/hostdr-start-action-hover-source-sync-settings.png) / [选择主机 hover](src/zh/userguide/dr/dr/images/hostdr-select-host-action-hover-source-sync-settings.png) / [共享 click](src/zh/userguide/dr/dr/images/hostdr-action-click-source-sync-settings.png) |
| 源端磁盘同步设置 | 选择无需同步的磁盘，将行末“Yes”改为“No”，在弹窗中确认。 | 仅 Agent 模式；仅首次同步开始前可修改。 | [start-dr.md:253–268](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L253-L268)；[菜单](src/zh/userguide/dr/dr/images/hostdr-start-action-dropdown.png)、[hover](src/zh/userguide/dr/dr/images/hostdr-action-hover-source-disk-sync-settings.png)、[click](src/zh/userguide/dr/dr/images/hostdr-action-click-source-disk-sync-settings.png)、[设为 No](src/zh/userguide/dr/dr/images/hostdr-action-click-source-disk-sync-settings-no.png)；三张设置图与选择主机页共用。 |
| 修改源端同步代理 | 点击对应操作，选择新的代理节点。 | 文档未列同步状态限制。 | [start-dr.md:270–278](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L270-L278)；[hover](src/zh/userguide/dr/dr/images/hostdr-start-action-hover-modify-sync-proxy.png) / [click](src/zh/userguide/dr/dr/images/hostdr-start-action-click-modify-sync-proxy.png) |
| 绑定 / 解绑标签 | 点击绑定或解绑标签，选择要关联/解除关联的标签。 | 按标签分类管理主机。 | [start-dr.md:280–294](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L280-L294)；[绑定 hover](src/zh/userguide/dr/dr/images/hostdr-start-action-hover-attach-tag.png) / [绑定 click](src/zh/userguide/dr/dr/images/hostdr-start-action-click-attach-tag.png) / [解绑 hover](src/zh/userguide/dr/dr/images/hostdr-start-action-hover-detach-tag.png) / [解绑 click](src/zh/userguide/dr/dr/images/hostdr-start-action-click-detach-tag.png) |
| 报告导出 | 点击报告导出，选择报告类型并导出。 | 需要查看或留存容灾报告时。 | [start-dr.md:296–302](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L296-L302)；[hover](src/zh/userguide/dr/dr/images/hostdr-start-action-hover-export-report.png) / [click](src/zh/userguide/dr/dr/images/hostdr-start-action-click-export-report.png) |
| 解除注册主机 | 点击解除注册主机，在弹窗中阅读注意事项并确认；强制解除注册时勾选确认项并选择强制解除注册。 | 解除后自动注销服务；Agentless 需回到选择主机重新加载，Agent 需重启服务；强制解除可能遗留资源。 | [start-dr.md:304–320](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L304-L320)；[hover](src/zh/userguide/dr/dr/images/hostdr-start-action-hover-deregister-host.png) / [click](src/zh/userguide/dr/dr/images/hostdr-start-action-click-deregister-host.png) |
| 清理资源（不解除注册） | 在解除注册的高级功能中选择该操作。 | 清除已同步数据并恢复容灾配置初始状态，但保留注册关系。 | [start-dr.md:313–316](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L313-L316)；使用解除注册弹窗截图 |
| 清理验证主机 | 点击“清理验证主机”；弹窗内输入 `Yes` 并确认。 | 仅清理云上已启动的验证主机。 | [start-dr.md:322–328](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L322-L328)；[菜单](src/zh/userguide/dr/dr/images/hostdr-start-action-dropdown.png)、[确认框](src/zh/userguide/dr/dr/images/hostdr-start-clean-validation-host.png) |
| 强制终止 | 点击“强制终止”按钮。 | 同步、演练等操作长时间卡顿或遇到不可控异常时使用。 | [start-dr.md:330–336](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L330-L336)；[菜单](src/zh/userguide/dr/dr/images/hostdr-start-action-dropdown.png) |

### 选择主机页“更多操作”的截图

| 操作 | 截图 | 来源 |
| --- | --- | --- |
| 源端同步设置 | [hover](src/zh/userguide/dr/dr/images/hostdr-select-host-action-hover-source-sync-settings.png)；[click（与开始容灾共用）](src/zh/userguide/dr/dr/images/hostdr-action-click-source-sync-settings.png) | [select-host.md:113–190](src/zh/userguide/dr/dr/_host-dr/select-host.md#L113-L190) |
| 源端磁盘同步设置 | [hover（实际图片路径）](src/zh/userguide/dr/dr/images/hostdr-action-hover-source-disk-sync-settings.png)；[click（共享）](src/zh/userguide/dr/dr/images/hostdr-action-click-source-disk-sync-settings.png)；[设为 No（共享）](src/zh/userguide/dr/dr/images/hostdr-action-click-source-disk-sync-settings-no.png) | [select-host.md:192–204](src/zh/userguide/dr/dr/_host-dr/select-host.md#L192-L204) |
| 修改源端同步代理 | [hover](src/zh/userguide/dr/dr/images/hostdr-select-host-action-hover-modify-sync-proxy.png)；[click](src/zh/userguide/dr/dr/images/hostdr-select-host-action-click-modify-sync-proxy.png) | [select-host.md:206–212](src/zh/userguide/dr/dr/_host-dr/select-host.md#L206-L212) |
| 绑定 / 解绑标签 | [绑定 hover](src/zh/userguide/dr/dr/images/hostdr-select-host-action-hover-attach-tag.png)；[绑定 click](src/zh/userguide/dr/dr/images/hostdr-select-host-action-click-attach-tag.png)；[解绑 hover](src/zh/userguide/dr/dr/images/hostdr-select-host-action-hover-detach-tag.png)；[解绑 click](src/zh/userguide/dr/dr/images/hostdr-select-host-action-click-detach-tag.png) | [select-host.md:214–228](src/zh/userguide/dr/dr/_host-dr/select-host.md#L214-L228) |
| 解除注册主机 | [hover](src/zh/userguide/dr/dr/images/hostdr-select-host-action-hover-deregister-host.png)；[click](src/zh/userguide/dr/dr/images/hostdr-select-host-action-click-deregister-host.png) | [select-host.md:230–236](src/zh/userguide/dr/dr/_host-dr/select-host.md#L230-L236) |

选择主机页的“更多操作”还包含上述源端同步设置、磁盘同步设置、修改源端同步代理、绑定/解绑标签和解除注册主机；具体控件及适用条件见对应文档。

## 5. 多文档复用的截图

经图片引用路径统计：纳入范围的 Markdown 共 **100 次图片引用、74 个唯一图片路径**；其中 **7 个路径在多个 Markdown 源文件中复用**。路径均相同且对应的本地图片文件存在。

| 图片 | 复用文档及行号 | 涉及流程 / 自动化建模提示 |
| --- | --- | --- |
| [hostdr-action-click-source-sync-settings.png](src/zh/userguide/dr/dr/images/hostdr-action-click-source-sync-settings.png) | [select-host.md:125,141,154](src/zh/userguide/dr/dr/_host-dr/select-host.md#L121-L154)；[start-dr.md:180,196,209,221,232,244](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L176-L244) | 选择主机与开始容灾中的源端同步设置；同一图片在不同模式/设置子项重复出现。 |
| [hostdr-action-hover-source-disk-sync-settings.png](src/zh/userguide/dr/dr/images/hostdr-action-hover-source-disk-sync-settings.png) | [select-host.md:198](src/zh/userguide/dr/dr/_host-dr/select-host.md#L192-L204)；[start-dr.md:262](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L253-L268) | 两个步骤文档共用源端磁盘同步设置的 hover 图。 |
| [hostdr-action-click-source-disk-sync-settings.png](src/zh/userguide/dr/dr/images/hostdr-action-click-source-disk-sync-settings.png) | [select-host.md:202](src/zh/userguide/dr/dr/_host-dr/select-host.md#L192-L204)；[start-dr.md:266](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L253-L268) | 两个步骤文档共用磁盘排除设置图。 |
| [hostdr-action-click-source-disk-sync-settings-no.png](src/zh/userguide/dr/dr/images/hostdr-action-click-source-disk-sync-settings-no.png) | [select-host.md:204](src/zh/userguide/dr/dr/_host-dr/select-host.md#L192-L204)；[start-dr.md:268](src/zh/userguide/dr/dr/_host-dr/start-dr.md#L253-L268) | 两个步骤文档共用将磁盘设为 No 的截图。 |
| [hostdr-setup-network-add-nic.png](src/zh/userguide/dr/dr/images/hostdr-setup-network-add-nic.png) | [setup-dr-block-storage.md:165](src/zh/userguide/dr/dr/_host-dr/setup-dr-block-storage.md#L155-L177)；[setup-dr-object-storage.md:151](src/zh/userguide/dr/dr/_host-dr/setup-dr-object-storage.md#L141-L163) | 块/对象存储的多网卡添加流程复用；文件名中的 `block` 不代表只属于块存储。 |
| [hostdr-setup-network-modify-nic.png](src/zh/userguide/dr/dr/images/hostdr-setup-network-modify-nic.png) | [setup-dr-block-storage.md:175](src/zh/userguide/dr/dr/_host-dr/setup-dr-block-storage.md#L155-L177)；[setup-dr-object-storage.md:161](src/zh/userguide/dr/dr/_host-dr/setup-dr-object-storage.md#L141-L163) | 块/对象存储共用网卡修改截图。 |
| [hostdr-setup-driver-adaptation.png](src/zh/userguide/dr/dr/images/hostdr-setup-driver-adaptation.png) | [setup-dr-block-storage.md:234](src/zh/userguide/dr/dr/_host-dr/setup-dr-block-storage.md#L230-L240)；[setup-dr-object-storage.md:220](src/zh/userguide/dr/dr/_host-dr/setup-dr-object-storage.md#L216-L227) | 两种存储模式共用驱动适配截图。 |

### 同一文档内重复出现的图片

下列图片虽不跨 Markdown 文件复用，但在单个文件中被多次引用，截图自动化可将它们建成一个资产、多个步骤关联：

- [hostdr-select-host-main.png](src/zh/userguide/dr/dr/images/hostdr-select-host-main.png)：[select-host.md](src/zh/userguide/dr/dr/_host-dr/select-host.md) 5 次。
- [hostdr-start-main.png](src/zh/userguide/dr/dr/images/hostdr-start-main.png)：[start-dr.md](src/zh/userguide/dr/dr/_host-dr/start-dr.md) 4 次。
- [hostdr-start-action-dropdown.png](src/zh/userguide/dr/dr/images/hostdr-start-action-dropdown.png)：[start-dr.md](src/zh/userguide/dr/dr/_host-dr/start-dr.md) 4 次。
- [hostdr-setup-block-platform.png](src/zh/userguide/dr/dr/images/hostdr-setup-block-platform.png)：[setup-dr-block-storage.md](src/zh/userguide/dr/dr/_host-dr/setup-dr-block-storage.md) 2 次。
- [hostdr-setup-object-platform.png](src/zh/userguide/dr/dr/images/hostdr-setup-object-platform.png)：[setup-dr-object-storage.md](src/zh/userguide/dr/dr/_host-dr/setup-dr-object-storage.md) 2 次。

## 6. 截图名称统一（已执行）

已对中文 HostDR 章节引用的 **74 张唯一图片**统一命名，图片仍保留在原 `images` 目录，Markdown 引用位置未变；所有图片的 alt 名称已同步为对应的新文件名（不含扩展名）。名称按流程/页面/动作组织，例如 `hostdr-select-host-*`、`hostdr-setup-block-*`、`hostdr-setup-object-*`、`hostdr-start-*`；跨步骤复用图使用共同名称 `hostdr-action-*`，块/对象流程共用的多网卡图也改为中性名称。

| 原名 | 现名 | 命名依据 |
| --- | --- | --- |
| `image.png` | [hostdr-start-quick-takeover-step-02.png](src/zh/userguide/dr/dr/images/hostdr-start-quick-takeover-step-02.png) | 快速接管步骤 2 的文档位置 |
| `image-1.png` | [hostdr-start-quick-takeover-step-03.png](src/zh/userguide/dr/dr/images/hostdr-start-quick-takeover-step-03.png) | 快速接管步骤 3 的文档位置 |
| `hostdisasterrecovery-hostdisasterrecovery-58.png` | [hostdr-start-sync-confirm.png](src/zh/userguide/dr/dr/images/hostdr-start-sync-confirm.png) | 立即同步确认步骤 |
| `hostdisasterrecovery-hostdisasterrecovery-95.png` | [hostdr-setup-driver-adaptation.png](src/zh/userguide/dr/dr/images/hostdr-setup-driver-adaptation.png) | 块/对象存储共用的驱动适配步骤 |
| `dr-setupdr-block-network-multiple-nics.png` | [hostdr-setup-network-add-nic.png](src/zh/userguide/dr/dr/images/hostdr-setup-network-add-nic.png) | 块/对象存储共用的添加网卡步骤 |
| `dr-startdr-action-click-source-sync-settings.png` | [hostdr-action-click-source-sync-settings.png](src/zh/userguide/dr/dr/images/hostdr-action-click-source-sync-settings.png) | 选择主机与开始容灾共用，改为跨步骤名称 |

**核验边界：** 名称根据图片在文档中的位置和相邻说明生成，是流程标识，不代表图片画面内容已核验。后续讨论截图如何截取时仍需逐图核对；若图像内容有误，可以替换图片而不改变文档放置位置。本次未修改其他仪表盘、迁移文档中同 basename 但位于各自独立 `images` 目录的图片。



## 7. 自动化落地前还需补充的信息

1. **控制台页面地址与测试环境：** 文档给出导航名称，没有可直接导航的应用 URL、租户/账号、固定测试主机或源端生产平台信息。
2. **稳定元素定位：** 只有可见按钮名（如“下一步”“确定”“立即同步”），没有 DOM selector、ARIA label、测试 ID 或坐标；截图自动化实现需另行建立定位映射。
3. **等待条件：** “等待同步完成”“待策略状态为无策略”“等待 Agent 注册”等需要对应可观测状态/超时策略。
4. **截图断言目标：** 现有图片是文档示例图，不一定等同于自动化的目标截图；需指定页面视口、缩放、敏感信息遮罩、成功态和失败态标准。
5. **未展开的准备流程：** 账号注册、授权申请、网络开通、VPC/子网规划及个别生产平台的站点配置，在 HostDR 主流程中仅作为前置说明或外链，不含可执行的截图步骤。

## 8. 与本清单同步的对象存储前置说明

主流程中将对象存储准备拆为“对象存储配置”和“对象存储容灾目标平台配置”两项；对应表述已同步到对象存储流程的前置条件，见[setup-dr-object-storage.md:9–22](src/zh/userguide/dr/dr/_host-dr/setup-dr-object-storage.md#L9-L22)。

---

**统计口径：** 入口 [host-dr.md](src/zh/userguide/dr/dr/host-dr.md) 本身没有图片；图片统计覆盖它引入的六个 Markdown 包含片段，来自五份源文件（`select-host.md`、含两个包含区段的 `setup-dr.md`、`setup-dr-block-storage.md`、`setup-dr-object-storage.md`、`start-dr.md`）。统计的是 Markdown 图片引用，不是对图片视觉内容的识别。
