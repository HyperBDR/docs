# OpenStack（Ceph）无代理模式

## 兼容性

### OpenStack

* 开源版本: Juno, Kilo, Liberty, Mitaka, Newton, Ocata, Pike, Queens, Rocky, Stein, Train, Ussri, Victoria, Wallaby
* 商业版本: EasyStack v3, v4, v5, v6

### Ceph

* 开源版本: Jewel 10.2.11, Kraken 11.2.1, Luminous 12.2.13, Mimic 13.2.10, Nautilus 14.2.22, Octopus 15.2.16
* 商业版本: XSKY v4.0.2.0, v5.0.100.1

## 客户机操作系统支持

点击[云平台支持矩阵](https://oneprocloud.feishu.cn/sheets/VRqksSPEPhRTPStp3kVcItXNnyh?sheet=0MJNYC)查看兼容性列表及最新支持状态。

## 支持与限制

### OpenStack云平台接口要求:
   - 主机列表、详情及快照接口
   - 主机规格详情接口
   - 主机镜像创建及详情接口
   - 卷列表和卷详情接口
   - 卷快照列表和详情接口

### Ceph接口要求:
   - Ceph命令: 状态查询、CRUSH MAP查询。
   - RBD相关命令: 状态、信息获取、快照操作等。

### 存储资源池要求:
   - 必须提供卷类型与Ceph存储池的对应关系。对于默认卷类型，当OpenStack平台中的卷类型为空时，平台对应的卷类型值为 DEFAULT_VOLUME_TYPE。
   - 对于从镜像启动的主机，需提供对应主机本地卷的存储池信息。通常对应的存储池为vms，平台卷类型的默认值为 CEPH_GLANCE_VMS。

### 源端同步代理（Sync Proxy）要求:
   - 需要一台最低配置为2核CPU和4GB内存的CentOS 7系统作为**源端同步代理（Sync Proxy）** 节点。
   - 必须能够访问Ceph Monitor（默认端口为6789）并读取OSD（默认端口为6800）中的相应数据。
   - 必须能够访问OpenStack平台API接口。
   - 必须能够访问**云迁移平台（HyperMotion）/云容灾平台（HyperBDR）控制台**的管理网络地址。

### 源端同步代理（Sync Proxy）性能:
   - 每个**源端同步代理（Sync Proxy）** 的最大同步主机数量不超过100台。
   - **源端同步代理（Sync Proxy）** 的速率配置与并发同步主机数量相关:
      - （默认设置）若需要更高速率，建议将 openstack_release_cpu_time 设置为0，以提升同步效率。
      - 若并发同步主机数量较多，建议将 openstack_release_cpu_time 设置为并发同步主机的数量。

### 客户机操作系统支持:
   - 不支持同步使用远程挂载磁盘（直接访问SAN中存储LUN）的虚拟机。
   - 不支持同步网络共享挂载的目录（例如通过NFS/NAS在虚拟机系统中远程访问的数据）。此类数据需使用文件同步工具处理。
