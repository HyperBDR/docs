# 自动化主机收集工具

[[toc]]

## 介绍

Prophet 是由 OneProCloud 开发的开源自动化收集与分析工具。它支持对多种环境进行高效的数据收集和详细分析，包括物理服务器、云主机和 VMware。该工具专为云迁移和灾难恢复规划设计。通过自动收集源主机的关键信息并比较技术指标，确保迁移或灾难恢复过程顺利进行。Prophet 已成功应用于多个实际项目，证明了其稳定的性能和可靠的功能。

更多详情：[查看 GitHub](https://github.com/Cloud-Discovery/prophet/blob/main/docs/README_EN.md)

提交新问题：[新建问题](https://github.com/Cloud-Discovery/prophet/issues)

## 功能

目前，Prophet 包含以下主要功能：

1. **网络主机扫描**
    使用 `nmap` 命令扫描网络中的活跃主机，并尝试通过数据包信息分析主机的基本信息。

2. **VMware 环境信息收集**
    通过 VMware API 收集详细的主机信息，包括计算资源、存储和网络相关数据，支持主机迁移相关分析。

3. **Linux 主机信息收集**
    使用 Ansible 从 Linux 主机收集详细信息，包括计算资源、存储和网络相关数据。

4. **Windows 主机信息收集**
    通过 Windows WMI 接口收集 Windows 主机的详细信息，包括计算资源、存储和网络相关数据。

5. **数据打包与匿名化**
    将收集到的数据打包并压缩为 YAML 格式，并通过去除敏感用户信息来进行数据匿名化处理。

6. **数据分析与技术结论**
    分析收集到的数据，生成一份全面的技术研究报告，为迁移和灾备规划提供可靠的基础。

## 安装指南

### **推荐环境：**

为了确保 Prophet 工具的最佳性能，建议使用以下环境：

* 操作系统：Ubuntu 24.04 及以上版本
* 容器支持：Docker（Ubuntu 内置版本）

#### **安装过程：**

1. **安装 Docker：** 在 Ubuntu 上，使用系统包管理器直接安装 Docker：

```bash
sudo apt update
sudo apt install -y docker.io
```

2. **启动并验证 Docker 服务：** 安装完成后，启动 Docker 服务，设置开机自启，并检查其状态：

```bash
sudo systemctl start docker
sudo systemctl enable docker
sudo systemctl status docker
```

验证 Docker 安装：

```bash
sudo docker --version
```

安装完成后，您可以在容器化环境中运行 Prophet 工具。

### **获取 Prophet 容器**

1. **下载 Prophet 容器镜像**

    使用以下命令从容器镜像仓库下载 Prophet 的最新版本：

    ```bash
    docker pull registry.cn-beijing.aliyuncs.com/oneprocloud-opensource/cloud-discovery-prophet:latest
    ```

2. **启动 Prophet 容器服务**

    使用以下命令启动 Prophet 容器服务：

    ```bash
    docker run -d -ti --name prophet registry.cn-beijing.aliyuncs.com/oneprocloud-opensource/cloud-discovery-prophet:latest
    ```

3. **访问 Prophet 容器**

    容器启动后，您可以使用以下命令进入容器进行进一步操作：

    ```bash
    docker exec -ti prophet bash
    ```

4. **使用 Prophet CLI**

    进入容器后，您可以使用 Prophet CLI 工具，支持 `scan`、`collect` 和 `report` 操作：

    ```bash
    prophet-cli {scan,collect,report}
    ```

按照以上步骤完成 Prophet 容器服务的部署和使用。

## 用户指南

### 基本使用流程

1. 扫描指定的 IP 地址范围。
2. 在扫描结果的 CSV 文件中，提供您想要获取详细信息的主机的认证信息。
3. 执行批量收集。
4. 分析并获取结果。

### 功能 1：扫描网络上的所有运行实例

#### 功能描述

通过网络扫描发现特定网络段内的活跃主机，并记录扫描结果。该信息可以作为后续更详细信息收集的输入。扫描完成后，将自动在指定路径生成一个 `scan_results.csv` 文件以存储信息。

**注意：为了防止对生产环境造成较大压力，扫描采用单进程模式，因此扫描进度较慢。估计扫描一个子网（掩码为 24）的时间大约为 30 分钟。**

```
usage: prophet-cli scan [-h] --host HOST [--arg ARG] --output-path OUTPUT_PATH
                        [--report-name REPORT_NAME]

optional arguments:
  -h, --help            显示此帮助信息并退出
  --host HOST           输入主机，例如：192.168.10.0/24，192.168.10.1-2
  --arg ARG             nmap 参数，详细信息请参考 nmap 文档
  --output-path OUTPUT_PATH
                        生成初始主机报告路径
  --report-name REPORT_NAME
                        扫描报告 CSV 文件名
```

#### 示例 1：获取子网主机

扫描 192.168.10.0/24 子网中的所有活跃主机，并在 /tmp 目录生成一个 CSV 文件。

```
prophet-cli scan --host 192.168.10.0/24 --output-path /tmp/
```

#### 示例 2：获取指定 IP 范围内的主机

扫描 192.168.10.2 到 192.168.10.50 范围内的所有活跃主机，并在 /tmp 目录生成一个 CSV 文件。

```
prophet-cli scan --host 192.168.10.2-50 --output-path /tmp/
```

#### CSV结构说明

| 字段名称   | 字段描述                                               |
|--------------|-------------------------------------------------------------|
| hostname     | 主机名, 可以为空                                          |
| ip           | 用户IP地址, 必填                                      |
| username     | 用户名; 对于VMware, 它是ESXi或vCenter的用户名     |
| password     | 密码; 对于VMware, 它是ESXi或vCenter的密码     |
| ssh_port     | 对于Linux, 这个字段表示SSH端口; 对于VMware ESXi或vCenter, 它是连接端口, 默认是443; 对于Windows, 它是空默认值 |
| key_path     | 如果使用基于密钥的登录, 请指定密钥的绝对路径; 否则, 它是空 |
| mac          | 主机MAC地址, 可以为空                                   |
| vendor       | 供应商, 可以为空; 如果它是运行在VMware上的虚拟机, 它将是VMware |
| check_status | 是否需要详细信息收集; 如果需要, 设置为"check"; 否则, 工具将自动跳过 |
| os           | 操作系统类型; 目前支持的类型是: Linux/Windows/VMware; 区分大小写 |
| version      | 操作系统版本, 可以为空                           |
| tcp_ports    | 开放的外部端口, 可以为空                                 |
| do_status    | 详细信息收集状态, 指示是否收集完成或失败; 默认是空                         |

### 功能 2：详细信息收集

#### 功能描述

用户输入认证信息到模板后, 进一步进行详细扫描。

**注意：**

* 对于要扫描的主机, 设置 `check_status` 为 "check"; 否则, 不会进行检查。
* 对于VMware虚拟机, 扫描将仅通过关联的ESXi主机进行。
* 对于Windows主机, 扫描需要管理员用户。
* 成功收集的主机在后续脚本运行时不会再次进行收集, 除非用户指定 `force-check` 参数。
* 收集失败的主机将在下次收集时重试。
* 在最终生成的压缩包中, 所有与用户认证相关的敏感信息已被删除。
* (稳定) VMware 收集部分目前是稳定的。
* (测试) Linux 和 Windows 收集部分仍在测试中。

```
usage: prophet-cli collect [-h] --host-file HOST_FILE --output-path
                           OUTPUT_PATH [-f] [--package-name PACKAGE_NAME]

optional arguments:
  -h, --help            显示此帮助信息并退出
  --host-file HOST_FILE
                        由网络扫描生成的主机文件
  --output-path OUTPUT_PATH
                        批量收集的输出路径
  -f, --force-check     强制检查所有主机
  --package-name PACKAGE_NAME
                        主机收集包的前缀名称
```

#### 示例：执行收集

首先，更新生成的 `scan_results.csv` 中要收集主机的认证信息。项目的 examples 目录包括一个 [示例 scan_results.csv](https://github.com/Cloud-Discovery/prophet/blob/master/examples/scan_results.csv)。

|hostname|ip            |username                   |password             |ssh_port|key_path|mac              |vendor|check_status|os     |version                                   |tcp_ports                                                                            |do_status|
|--------|--------------|---------------------------|---------------------|--------|--------|-----------------|------|------------|-------|------------------------------------------|-------------------------------------------------------------------------------------|---------|
|        |192.168.10.2  |administrator@vsphere.local|your_vcenter_password|        |        |00:50:56:9f:03:f0|      |check       |Windows|Microsoft Windows 7 or Windows Server 2012|80,88,135,139,389,443,445,514,636,2020,3389,8088,9009,9090                           |         |
|        |192.168.10.6  |root                       |your_esxi_password   |443     |        |0c:c4:7a:e5:5d:20|      |check       |VMware |VMware ESXi Server 4.1                    |22,80,427,443,902,5988,5989,8000,8080,8100,8300                                      |         |
|        |192.168.10.185|Administrator              |your_windows_password|        |        |00:50:56:9a:6d:2e|      |check       |Windows|Microsoft Windows Server 2003 SP1 or SP2  |135,139,445,1028,3389                                                                |         |
|        |192.168.10.201|root                       |your_linux_password  |22      |        |ac:1f:6b:27:7f:e4|      |check       |Linux  |Linux 2.6.32 - 3.9                        |22,80,3306,4567,5000,5900,5901,5902,5903,5904,5906,5907,5910,5911,5915,8022,8080,9100|         |


```
prophet-cli collect --host-file /tmp/scan_hosts.csv --output-path /tmp
```

#### 收集结果说明

收集目录结构

```
hosts_collection
|-- LINUX -> Linux 主机收集信息
|-- VMWARE -> VMWare 主机收集信息
|-- WINDOWS -> Windows 主机收集信息
|-- prophet.log -> 收集过程中生成的日志, 用于分析未知场景
|-- scan_hosts.csv -> 包含收集主机信息的文件, 包括开放端口详细信息
```

此外，在输出目录中还会生成一个 `hosts_collection_xxxxxxx.zip` 文件。该文件是用于分析的最终压缩文件。

### 功能 3：分析并生成报告

#### 功能描述

分析收集到的结果并生成最终的迁移报告。此部分可以根据具体需求进行扩展。

```
usage: prophet-cli report [-h] --package-file PACKAGE_FILE --output-path
                          OUTPUT_PATH [--report-name REPORT_NAME] [--clean]

optional arguments:
  -h, --help            show this help message and exit
  --package-file PACKAGE_FILE
                        Investigate package file which is genreated by
                        prophet-collect
  --output-path OUTPUT_PATH
                        Generate report path
  --report-name REPORT_NAME
                        Generate report name
  --clean               Clean temp work dir or not, by default is not
```

#### 示例：分析并生成报告

```
prophet-cli -d -v report --package-file /tmp/hosts_collection_20211215202459.zip --output-path /tmp
```

#### 示例：分析报告

| Platform Type | Hostname | VMware Hostname | IP | Mac | Operating System Type | Operating System Version | Operating System Bit | Operating System Kernel Version | Boot Method | CPU | CPU Cores | Memory | Total Memory (GB) | Free Memory (GB) | Disk Count | Total Disk Capacity (GB) | Disk Information | Partition Information | Network Card Count | Network Card Information | Virtualization Type | Virtualization Version | ESXi Server |
|--------|---------------------|---------|------------------------|-----------------|----------------------------------|----------------------------------|------|---------------------|----|-----------------------------------------|-----|---------------|--------|--------|----|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|----|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-------------------------------|---------------------|
|Physical|compute201           |         |192.168.10.201          |ac:1f:6b:27:7f:e4|CentOS                            |7.5.1804                          |x86_64|3.10.0-862.el7.x86_64|bios|Intel(R) Xeon(R) CPU E5-2630 v4 @ 2.20GHz|40   |               |62.65   |5.35    |7   |5467004.78 |sda&#124;56266.78&#124;ATA&#124;SuperMicro SSD sdb&#124;213212.97&#124;ATA&#124;INTEL SSDSC2BB24 sdc&#124;1039505.00&#124;SEAGATE&#124;ST1200MM0007 sdd&#124;1039505.00&#124;SEAGATE&#124;ST1200MM0007 sde&#124;1039505.00&#124;SEAGATE&#124;ST1200MM0007 sdf&#124;1039505.00&#124;TOSHIBA&#124;AL15SEB120NY sdg&#124;1039505.00&#124;TOSHIBA&#124;AL15SEB120NY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |/dev/sda2&#124;62245572608&#124;58963365888&#124;0.95&#124;xfs /dev/sda1&#124;1063256064&#124;922746880&#124;0.87&#124;xfs /dev/sdc1&#124;1199655976960&#124;1141407465472&#124;0.95&#124;xfs|4   |eno1&#124;0c:c4:7a:a5:29:3a&#124;True&#124;1500&#124;10000&#124;10.0.100.201&#124;255.255.255.0&#124;10.0.100.0&#124;10.0.100.255&#124;fe80::ec4:7aff:fea5:293a ens2f3&#124;ac:1f:6b:27:7f:e7&#124;True&#124;1500&#124;1000&#124;None&#124;None&#124;None&#124;None&#124;fe80::ae1f:6bff:fe27:7fe7 ens2f0&#124;ac:1f:6b:27:7f:e4&#124;True&#124;1500&#124;1000&#124;192.168.10.201&#124;255.255.255.0&#124;192.168.10.0&#124;192.168.10.255&#124;192.168.10.1&#124;fe80::ae1f:6bff:fe27:7fe4 ens2f1&#124;ac:1f:6b:27:7f:e5&#124;True&#124;1500&#124;1000&#124;172.16.100.201&#124;255.255.255.0&#124;172.16.100.0&#124;172.16.100.255&#124;fe80::ae1f:6bff:fe27:7fe5|                 |                               |                     |
|Physical|compute202           |         |192.168.10.202          |0c:c4:7a:e5:5c:f8|CentOS                            |7.5.1804                          |x86_64|3.10.0-862.el7.x86_64|bios|Intel(R) Xeon(R) CPU E5-2630 v4 @ 2.20GHz|40   |               |62.65   |13.27   |7   |5467004.78 |sda&#124;56266.78&#124;ATA&#124;SuperMicro SSD sdb&#124;213212.97&#124;ATA&#124;INTEL SSDSC2BB24 sdc&#124;1039505.00&#124;SEAGATE&#124;ST1200MM0007 sdd&#124;1039505.00&#124;SEAGATE&#124;ST1200MM0007 sde&#124;1039505.00&#124;SEAGATE&#124;ST1200MM0007 sdf&#124;1039505.00&#124;TOSHIBA&#124;AL15SEB120NY sdg&#124;1039505.00&#124;TOSHIBA&#124;AL15SEB120NY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |/dev/sda2&#124;62245572608&#124;52926242816&#124;0.85&#124;xfs /dev/sda1&#124;1063256064&#124;922746880&#124;0.87&#124;xfs                                               |4   |eno1&#124;0c:c4:7a:a5:2e:d0&#124;True&#124;1500&#124;10000&#124;10.0.100.202&#124;255.255.255.0&#124;10.0.100.0&#124;10.0.100.255&#124;fe80::ec4:7aff:fea5:2ed0 ens2f3&#124;0c:c4:7a:e5:5c:fb&#124;True&#124;1500&#124;1000&#124;None&#124;None&#124;None&#124;None&#124;fe80::ec4:7aff:fee5:5cfb ens2f0&#124;0c:c4:7a:e5:5c:f8&#124;True&#124;1500&#124;1000&#124;192.168.10.202&#124;255.255.255.0&#124;192.168.10.0&#124;192.168.10.255&#124;192.168.10.1&#124;fe80::ec4:7aff:fee5:5cf8 ens2f1&#124;0c:c4:7a:e5:5c:f9&#124;True&#124;1500&#124;1000&#124;172.16.100.202&#124;255.255.255.0&#124;172.16.100.0&#124;172.16.100.255&#124;fe80::ec4:7aff:fee5:5cf9   |                 |                               |                     |
|VMware  |node01               |         |                        |00:50:56:9a:49:b7|CentOS 4/5/6/7                    |CentOS 4/5/6/7                    |64-bit|                     |efi |Intel(R) Xeon(R) CPU E5-2680 0 @ 2.70GHz |4    |               |8192.00 |        |1   |51200.00   |[10.3-4T-5] centos7.4_node_139/centos7.4_node_139.vmdk&#124;51200.00                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                 |1   |VM Network&#124;00:50:56:9a:49:b7                                                                                                                                                                                                                                                                                                                                                                                                                                               |VMware ESX Server|VMware ESXi 6.0.0 build-2715440|192.168.10.3         |
|VMware  |master03             |         |                        |00:50:56:9a:63:a0|CentOS 4/5/6/7                    |CentOS 4/5/6/7                    |64-bit|                     |efi |Intel(R) Xeon(R) CPU E5-2680 0 @ 2.70GHz |4    |               |4096.00 |        |1   |51200.00   |[10.3-4T-5] centos7.2_132/centos7.2_132.vmdk&#124;51200.00                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                 |1   |VM Network&#124;00:50:56:9a:63:a0                                                                                                                                                                                                                                                                                                                                                                                                                                               |VMware ESX Server|VMware ESXi 6.0.0 build-2715440|192.168.10.3         |
|VMware  |master02             |         |                        |00:50:56:9a:06:ad|CentOS 4/5/6/7                    |CentOS 4/5/6/7                    |64-bit|                     |efi |Intel(R) Xeon(R) CPU E5-2680 0 @ 2.70GHz |4    |               |4096.00 |        |1   |51200.00   |[10.3-4T-5] centos7.3_131/centos7.3_131.vmdk&#124;51200.00                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                 |1   |VM Network&#124;00:50:56:9a:06:ad                                                                                                                                                                                                                                                                                                                                                                                                                                               |VMware ESX Server|VMware ESXi 6.0.0 build-2715440|192.168.10.3         |
|Physical|COMPUTER-PC          |         |192.168.10.62           |00:0c:29:9a:59:73|Microsoft Windows 7 旗舰版           |Microsoft Windows 7 旗舰版           |64-bit|6.1.7600             |bios|Intel(R) Xeon(R) CPU E5-2680 0 @ 2.70GHz |4    |Physical Memory|8191.55 |4.83    |2   |255996.72  |0&#124;51199.34&#124;VMware Virtual disk SCSI Disk Device&#124;VMware Virtual disk SCSI Disk Device 1&#124;204797.37&#124;VMware Virtual disk SCSI Disk Device&#124;VMware Virtual disk SCSI Disk Device                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |C:&#124;53580132352&#124;4455071744&#124;0.08&#124;NTFS D:&#124;109887614976&#124;109790175232&#124;1.0&#124;NTFS E:&#124;104857595904&#124;104760311808&#124;1.0&#124;NTFS                  |1   |[00000007] Intel(R) PRO/1000 MT Network Connection&#124;00:0c:29:9a:59:73&#124;192.168.10.1&#124;192.168.10.62&#124;255.255.255.0                                                                                                                                                                                                                                                                                                                                                              |                 |                               |                     |