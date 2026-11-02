# **系统监控**

提供对平台核心资源的运行状态可视化展示，支持实时采集 CPU、内存、磁盘、网络、负载等多项指标，帮助管理员全面掌握主机资源健康状况。用户可按资源类型与节点维度切换视图，实现分层级的统一监控。

## **系统监控功能说明**

系统监控模块用于对平台内各类关键资源的运行状态进行实时可视化展示和性能分析。以“源端同步代理”为例，用户可选择具体主机，查看该节点的详细运行指标，以便及时发现资源瓶颈或潜在故障风险。

![systemmonitor-dr-1](./images/systemmonitor-dr-1.png)

#### **基本信息**

* **运行时间**：显示同步代理自启动以来的持续运行时长。
* **CPU 核数**：显示当前代理主机的物理 CPU 核心数量。
* **总内存**：展示当前代理主机的物理内存总容量。

#### **资源使用情况**

系统通过图表方式动态展示各类资源的使用状态，便于用户实时掌握运行负载与性能变化。

| **监控项** | **描述** |
| :--- | :--- |
| **CPU 使用率** | 以折线图展示单位时间内 CPU 占用率的变化情况 |
| **内存信息** | 展示内存总量、已使用及剩余情况 |
| **系统平均负载** | 分别展示过去 1 分钟、5 分钟、15 分钟的系统平均负载 |
| **网络流量（bytes）** | 以图形方式展示网卡的入站（In）与出站（Out）流量 |
| **磁盘使用率** | 展示各挂载磁盘路径的空间占用百分比 |
| **每秒磁盘读容量** | 实时展示磁盘的读写吞吐量 |
| **磁盘写入速率（IOPS）** | 以 IOPS 为单位展示磁盘写入频率 |
| **iSCSI 进程状态数量统计** | 展示当前 iSCSI 进程状态的数量变化 |

::: note
支持按资源类型与主机实例灵活切换视图，便于针对性查看对应节点的实时性能监控数据。
:::

## **容灾**

登录 HyperBDR 控制台，在顶部导航栏进入 **【监控与报警管理】>【系统监控】**，默认处于 **【容灾】** 标签页。用户可通过组件类型下拉菜单与主机列表，灵活查看各类容灾组件的实时运行指标。

### **源端同步代理**

在组件类型下拉菜单中选择 **【源端同步代理】**（Sync Proxy），查看选定代理节点的系统资源使用情况。

![systemmonitor-dr-1](./images/systemmonitor-dr-1.png)

### **云同步网关**

在组件类型下拉菜单中选择 **【云同步网关】**（Cloud Sync Gateway），即可查看云同步网关的系统资源消耗与运行负载指标。

![systemmonitor-dr-2](./images/systemmonitor-dr-2.png)

### **Linux Agent**

在组件类型下拉菜单中选择 **【Linux Agent】**，并在主机列表中选择目标 Linux 实例，即可调取该源端 Linux 主机的 Agent 资源监控详情。

![systemmonitor-dr-3](./images/systemmonitor-dr-3.png)

### **Windows Agent**

在组件类型下拉菜单中选择 **【Windows Agent】**，并在主机列表中选择目标 Windows 实例，即可实时查看该 Windows 生产主机的 Agent 监控数据。

![systemmonitor-dr-4](./images/systemmonitor-dr-4.png)

## **回切**

在 **【监控与报警管理】>【系统监控】** 页面，切换至 **【回切】**（Failback）标签页，即可针对反向回切流程中涉及的各类运行组件进行实时性能监控。

### **回切源端同步代理**

在组件类型下拉菜单中选择 **【回切源端同步代理】**（Failback Sync Proxy），查看选定代理节点的运行监控面板。

![systemmonitor-failback-1](./images/systemmonitor-failback-1.png)

### **回切云同步网关**

在组件类型下拉菜单中选择 **【回切云同步网关】**（Failback Cloud Sync Gateway），查看回切场景中数据流转网关的运行指标。

![systemmonitor-failback-2](./images/systemmonitor-failback-2.png)

### **回切Linux Agent**

在组件类型下拉菜单中选择 **【回切Linux Agent】**（Failback Linux Agent），并在主机列表中选择目标节点，查看反向回切过程中的 Linux 主机监控状态。

![systemmonitor-failback-3](./images/systemmonitor-failback-3.png)

### **回切Windows Agent**

在组件类型下拉菜单中选择 **【回切Windows Agent】**（Failback Windows Agent），并在主机列表中选择目标节点，查看回切流程中 Windows 主机的系统监控情况。

![systemmonitor-failback-4](./images/systemmonitor-failback-4.png)
