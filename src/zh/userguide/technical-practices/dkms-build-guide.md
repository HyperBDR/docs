# Linux Agent 内核模块构建(DKMS)

## 1. 适用场景说明

为了应对各类 Linux 内核版本（包括大量定制化内核）高度多样化的情况，我们提供了基于 DKMS（Dynamic Kernel Module Support）的安装模式进行即时编译和部署Linux Agent中的Dattobd模块。

DKMS 是一项成熟且广泛应用的技术，已被包括 Google、Red Hat、Ubuntu、VMware 等知名企业在内的众多大型项目广泛采用，确保了内核模块能够在不同内核版本间自动编译和更新。

由于我们无法预先收集并适配所有可能的内核环境，DKMS 模式允许用户在当前系统内直接编译并安装所需的内核模块，从而实现对 Linux Agent 的快速部署。该模式特别适用于内核版本较新、较旧或经过定制的系统场景，用户无需等待我们提供特定版本的预编译模块，即可独立完成安装，提升了兼容性与部署效率。

简而言之，当安装 Linux Agent 时无法直接加载Dattobd内核模块，且当前系统内核的大版本在支持范围内，您可通过 DKMS 动态构建内核模块，顺利完成安装并开展后续数据同步。

## 2. 使用DKMS进行动态编译

在使用 DKMS 动态构建模式时，构建所需的工具（如 gcc、make、kernel headers 等），包含DKMS软件及其附属依赖的软件，需要由管理员预先安装。使用DKMS编译dattobd前，请确保当前环境已成功安装所需的DKMS组件和其所依赖包，如果没有预先安装DKMS编译所需的环境，则走原来的安装部署流程。

### 2.1 注意事项

1. **系统资源占用**：DKMS 构建过程将在本地进行编译，可能占用系统资源，包括 CPU、内存、磁盘空间及网络流量。在资源紧张的环境中，编译可能导致系统负载上升，磁盘空间需预留数百 MB 存放构建产物，请根据系统实际情况做好准备。

2. **内核大版本变更**：当内核大版本变化超过软件支持范围时，DKMS 编译失败的风险增加。此时建议重新卸载并安装 Linux Agent，必要时联系技术支持。

3. **升级时机**：确保安装源正常且系统资源充足（编译时可能占用较高 CPU 和磁盘空间）。建议在系统和业务负载较低时进行内核升级，以便自动通过 DKMS 更新 Linux Agent 内核模块。

| **使用条件**                  | **说明**                                                                                                         |
| ------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **操作系统支持**                | Ubuntu 20.04 (HyperBDR 6.9开始支持）&#xA;Ubuntu 22.04/24.04 (HyperBDR 6.7开始支持）&#xA;CentOS 8/9系列（HyperBDR 6.10 开始支持） |
| **内核支持范围**                | 5.15 至 6.8 版本                                                                                                  |
| **内核头文件（kernel headers）** | **必须安装与当前正在运行的内核版本相匹配的 kernel headers，用于编译模块。**                                                                |
| **编译工具链**                 | 需要安装如 gcc、make 等编译工具，用于构建内核模块。                                                                                 |
| **DKMS 工具包**              | 系统中需已安装 dkms 命令工具，通常可通过包管理器安装（如 apt install dkms 或 yum install dkms）。                                          |
| **可编译的模块源码包**             | 用户或软件提供方需提供符合 DKMS 格式的模块源码（包含 dkms.conf 文件），用于注册、构建和安装。                                                        |
| **root 权限**               | 安装、构建和加载内核模块通常需要 root 或 sudo 权限。                                                                               |
| **兼容的内核接口**               | 模块源码必须与当前内核版本的接口兼容，否则编译可能失败。                                                                                   |

### 2.2 安装DKMS工具

1. Ubuntu 20.04 / 22.04 / 24.04 系列环境

```plain&#x20;text
apt update
apt install dkms
```

查询是否成功安装了DKMS组件：&#x20;

```plain&#x20;text
# dpkg -l |grep dkms
ii  dkms        2.8.7-2ubuntu2.2     all          Dynamic Kernel Module Support Framework
```

* CentOS / RHEL 8 / 9 系列环境

```plain&#x20;text
yum install dkms
```

查询是否成功安装了DKMS组件:

```plain&#x20;text
# rpm -qa |grep dkms
dkms-3.2.1-1.el9.noarch
```

## 3. 安装 Linux Agent 时的自动内核适配（DKMS）

### 3.1 参数说明

部署脚本中，如果指定 --enable-dkms 参数，则采用非交互方式自动使用DKMS编译模块，系统自动认为已经安装了DKMS tools工具包：

```plain&#x20;text
curl -k 'https://192.168.7.122:10443/hypermotion/v1/sources/download?type=linux&id=OEExMTAwNTA1NjlGMTk1RWV5SmhiR2NpT2lKSVV6STFOaUlzSW1WNGNDSTZNVGMxTWpVM01USTJNeXdpYVdGMElqb3hOelV4T1RZMk5EWXpmUS4zQjA0NUI0NERBQjUxMUU5ZXlKdFozSmZkMkY1SWpvaVNIbHdaWEpIWVhSbElpd2lkV2xrSWpvaVl6RmxPVEl3TmpRME1qa3hOR1pqTmpobVpEUXhPRGc0WldZeFpHRTFPR0VpTENKeWIyeGxjeUk2SW1Ga2JXbHVJaXdpWlc1MFgybGtJam9pWWpBM1kySmtZVEV6TUdGak5EQXdZVGd3T0dRMk16bGlaR0UyTnpBME1UTWlmUS5OVTBQTlNudTNyaThXVUpJZXpTTkkzRGtJQlBvd1AxRlBRUjY2X1pVTXow&scene=dr' | bash -s -- --enable-dkms
```

安装部署脚本会预先判断是否已经安装了DKMS，否则报错返回。如果已经安装了DKMS，则会自动采用DKMS进行本地编译和安装。

没有采用 --enable-dkms的选项参数场景下，系统检查到本地已经安装DKMS组件，但在HyperBDR系统上没有找到相应内核的Dattobd模块包的时候，会提示部署过程是否采用DKMS进行编译Dattobd模块包：&#x20;

```plain&#x20;text
curl -k 'https://192.168.7.122:10443/hypermotion/v1/sources/download?type=linux&id=OEExMTAwNTA1NjlGMTk1RWV5SmhiR2NpT2lKSVV6STFOaUlzSW1WNGNDSTZNVGMxTWpVM01USTJNeXdpYVdGMElqb3hOelV4T1RZMk5EWXpmUS4zQjA0NUI0NERBQjUxMUU5ZXlKdFozSmZkMkY1SWpvaVNIbHdaWEpIWVhSbElpd2lkV2xrSWpvaVl6RmxPVEl3TmpRME1qa3hOR1pqTmpobVpEUXhPRGc0WldZeFpHRTFPR0VpTENKeWIyeGxjeUk2SW1Ga2JXbHVJaXdpWlc1MFgybGtJam9pWWpBM1kySmtZVEV6TUdGak5EQXdZVGd3T0dRMk16bGlaR0UyTnpBME1UTWlmUS5OVTBQTlNudTNyaThXVUpJZXpTTkkzRGtJQlBvd1AxRlBRUjY2X1pVTXow&scene=dr' | bash
......
[2025-09-15 09:04:36] [INFO] Sorry, the current kernel version 5.4.0-216-generic is not found, but the DKMS tools is installed, would you like to build dattobd with DKMS? (y/n) [n]:
y/n [n]: y
[2025-09-15 09:04:40] [INFO] Trying to configure the dattobd with DKMS tools.
[2025-09-15 09:04:40] [INFO] The linux-headers-5.4.0-216-generic and linux-image-5.4.0-216-generic had been installed.
[2025-09-15 09:04:40] [INFO] Trying to download the dattobd source code and extract to /usr/src/dattobd-version
```

如果选择y，则会采用DKMS编译和安装Dattobd的内核驱动。其它情况，会按照传统的安装部署方式进行，如HyperBDR没有提供对应内核版本Dattobd模块，则会报错如下：

```plain&#x20;text
[2025-09-10 07:04:00] [ERROR] Sorry, the current kernel version 5.4.0-216-generic is not supported, the installation process cannot proceed.
```

### 3.2 过程示例

输入Y后，开始采用DMKS进行编译Dattobd包：

```plain&#x20;text
[2025-07-07 02:58:59] [INFO] Trying to download the dattobd source code and extract to /usr/src/dattobd-version
.gitignore
BUILDING-PACKAGE.md
COPYING
COPYING.LIB
INSTALL.md
LICENSING.md
Makefile
README.md
app/
app/Makefile
app/bash_completion.d/
app/bash_completion.d/dbdctl
app/dbdctl.c
..............................................
performing configure test: HAVE_VZALLOC - present
performing configure test: HAVE_WITHIN_MODULE - present
performing sys_mount lookup
performing sys_umount lookup
performing sys_oldumount lookup
performing sys_call_table lookup
performing blk_mq_submit_bio lookup
performing kfree lookup
performing vm_area_alloc lookup
performing vm_area_free lookup
performing insert_vm_struct lookup
performing vm_area_cachep lookup
performing get_active_super lookup
performing vma_lock_cachep lookup

Building module:
Cleaning build area...
make -j4 KERNELRELEASE=6.8.0-62-generic -C /lib/modules/6.8.0-62-generic/build M=/var/lib/dkms/dattobd/0.12.0/build KVER=6.8.0-62-generic modules.....
Cleaning build area...
Deprecated feature: REMAKE_INITRD (/var/lib/dkms/dattobd/0.12.0/source/dkms.conf)

dattobd.ko.zst:
Running module version sanity check.
 - Original module
   - No original module exists within this kernel
 - Installation
   - Installing to /lib/modules/6.8.0-62-generic/updates/dkms/
depmod.....

```

完成编译，成功安装Linux Agent。

```yaml
[2025-07-07 03:00:07] ✔ [SUCCESS] Repository sources for ubuntu have been successfully configured.
[2025-07-07 03:00:07] [INFO] The command 'sgdisk' already exists
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 20.2M  100 20.2M    0     0  90.7M      0 --:--:-- --:--:-- --:--:-- 90.3M
[2025-07-07 03:00:08] [INFO] Installing datto util...
update-initramfs: Generating /boot/initrd.img-6.8.0-62-generic
[2025-07-07 03:00:23] [INFO] Installing egisplus-agent...
[2025-07-07 03:00:40] ✔ [SUCCESS] Install proxy node packages successful.
[2025-07-07 03:00:40] ✔ [SUCCESS] Repository sources for ubuntu have been removed.
[2025-07-07 03:00:40] [INFO] Preparing to install monitor service agent...
[2025-07-07 03:00:40] ✔ [SUCCESS] Downloaded Monitoring Service Agent execution file
[2025-07-07 03:00:40] ✔ [SUCCESS] Downloaded ca server.crt file
[2025-07-07 03:00:40] ✔ [SUCCESS] Downloaded ca server.key file
[2025-07-07 03:00:41] ✔ [SUCCESS] Successfully configured the monitor services to start on boot.
[2025-07-07 03:00:41] ✔ [SUCCESS] Monitor services are already installed and started.
[2025-07-07 03:00:41] ✔ [SUCCESS] Successfully installed and started the Monitor Service Agent.
    Device      Type    Mount   Free    Used    Sync    Path
    /dev/sda2   ext4    /boot   1.6G    11%     Yes     /dev/sda2
    /dev/dm-0   ext4    /saplv1 9.2G    1%      Yes     /dev/mapper/sapVG-testlv1
    /dev/dm-1   ext4    /       16G     32%     Yes     /dev/mapper/ubuntu--vg-ubuntu--lv
```

## 4. Linux Agent 在内核升级后的自动适配机制

在大多数情况下，系统在内核升级后会自动触发 DKMS（Dynamic Kernel Module Support）构建流程，以编译并安装适配新内核的内核模块。构建完成后，系统重启时将自动加载这些模块，无需手动干预。

请务必确保所升级的内核版本在当前软件的支持范围内。若内核版本不受支持，可能导致 DKMS 构建失败，进而影响相关模块的加载与功能使用。

为降低风险并确保兼容性，建议优先采用系统推荐的内核升级方式。例如：

* 在 基于 Ubuntu 的系统中，建议使用 apt upgrade 或 apt full-upgrade 方式进行内核更新；

* 在 CentOS 或 Red Hat Enterprise Linux（RHEL） 中，建议使用 yum update 或 dnf upgrade 命令升级内核；

* 对于 SUSE Linux Enterprise Server（SLES） 或 openSUSE，应使用 zypper update 或 zypper patch 进行官方推荐的内核升级。

避免手动下载安装第三方内核包或使用非官方源，以减少因兼容性问题导致 DKMS 构建失败或系统不稳定的风险。如果需要采用手动升级方式，请参考附录二中常见问题中的推荐手动升级方式。

以下为Ubuntu升级参考过程：

```plain&#x20;text
# apt upgrade
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Calculating upgrade... Done
The following NEW packages will be installed:
  linux-headers-6.8.0-63 linux-headers-6.8.0-63-generic linux-image-6.8.0-63-generic linux-modules-6.8.0-63-generic
  linux-modules-extra-6.8.0-63-generic linux-tools-6.8.0-63 linux-tools-6.8.0-63-generic
The following upgrades have been deferred due to phasing:
  bsdextrautils bsdutils eject fdisk libblkid1 libfdisk1 libmount1 libsmartcols1 libuuid1 mount ubuntu-drivers-common util-linux
  uuid-runtime
The following packages will be upgraded:
.............................................................

After this operation, 303 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 gzip amd64 1.12-1ubuntu3.1 [99.0 kB]
.............................................................

# While setting up linux-header, trigger compilation...
Setting up linux-headers-6.8.0-63-generic (6.8.0-63.66) ...
/etc/kernel/header_postinst.d/dkms:
 * dkms: running auto installation service for kernel 6.8.0-63-generic
Deprecated feature: REMAKE_INITRD (/var/lib/dkms/dattobd/0.12.0/source/dkms.conf)
Deprecated feature: REMAKE_INITRD (/var/lib/dkms/dattobd/0.12.0/source/dkms.conf)
Deprecated feature: REMAKE_INITRD (/etc/dkms/framework.conf)
Sign command: /usr/bin/kmodsign
Binary update-secureboot-policy not found, modules won't be signed
Deprecated feature: REMAKE_INITRD (/var/lib/dkms/dattobd/0.12.0/source/dkms.conf)

Running the pre_build script:
generating configurations for kernel-6.8.0-63-generic
xargs: warning: options --max-args and --replace/-I/-i are mutually exclusive, ignoring previous --max-args value
performing configure test: HAVE_BDEVNAME - not present
...........................................................

Building module:
Cleaning build area...
make -j4 KERNELRELEASE=6.8.0-63-generic -C /lib/modules/6.8.0-63-generic/build M=/var/lib/dkms/dattobd/0.12.0/build KVER=6.8.0-63-generic modules.....
Cleaning build area...

dattobd.ko.zst:
Running module version sanity check.
 - Original module
   - No original module exists within this kernel
 - Installation
   - Installing to /lib/modules/6.8.0-63-generic/updates/dkms/
depmod...
dkms autoinstall on 6.8.0-63-generic/x86_64 succeeded for dattobd
 * dkms: autoinstall for kernel 6.8.0-63-generic
   ...done.
Processing triggers for linux-image-6.8.0-63-generic (6.8.0-63.66) ...
/etc/kernel/postinst.d/dkms:
 * dkms: running auto installation service for kernel 6.8.0-63-generic
Deprecated feature: REMAKE_INITRD (/var/lib/dkms/dattobd/0.12.0/source/dkms.conf)
Deprecated feature: REMAKE_INITRD (/var/lib/dkms/dattobd/0.12.0/source/dkms.conf)
 * dkms: autoinstall for kernel 6.8.0-63-generic
   ...done.
...................................................................

/etc/kernel/postinst.d/initramfs-tools:
update-initramfs: Generating /boot/initrd.img-6.8.0-63-generic
/etc/kernel/postinst.d/zz-update-grub:
Sourcing file `/etc/default/grub'
Generating grub configuration file ...
Found linux image: /boot/vmlinuz-6.8.0-63-generic
Found initrd image: /boot/initrd.img-6.8.0-63-generic
Found linux image: /boot/vmlinuz-6.8.0-62-generic
Found initrd image: /boot/initrd.img-6.8.0-62-generic
Found linux image: /boot/vmlinuz-6.8.0-60-generic
Found initrd image: /boot/initrd.img-6.8.0-60-generic
Warning: os-prober will not be executed to detect other bootable partitions.
Systems on them will not be added to the GRUB boot configuration.
Check GRUB_DISABLE_OS_PROBER documentation entry.
Adding boot menu entry for UEFI Firmware Settings ...
done
Processing triggers for initramfs-tools (0.142ubuntu25.5) ...
update-initramfs: Generating /boot/initrd.img-6.8.0-63-generic
```

如果升级到指定内核，可以采用，同时升级headers和image的方式，升级过程中，系统会自动触发内核模块的编译和加载：

```plain&#x20;text
apt install linux-headers-<version>-generic linux-image-<version>-generic
```

## 5. 附录一：DKMS基本介绍

### 5.1 什么是 DKMS？

DKMS（Dynamic Kernel Module Support）是一种由 Dell 开发的框架，用于自动构建和安装 Linux 内核模块。其核心优势在于内核升级后，系统可以自动重新编译并安装相应的第三方内核模块，而无需用户手动干预。

### 5.2 DKMS 的工作原理

DKMS 会在系统中注册指定的内核模块源代码，并在以下场景下自动触发模块的构建与安装：

* 安装新内核时：系统更新内核后，DKMS 会自动为新内核构建并安装对应模块；

* 添加或升级模块时：新增或更新模块版本时，DKMS 可立即对当前内核进行构建；

* 手动触发：管理员可使用 `dkms add/build/install/remove` 等命令对模块进行管理。

## 6. 常见问题

### 6.1 FAQ 1: 手动升级内核及DKMS驱动的正确顺序是什么？

手动升级内核及 DKMS 驱动时，必须遵循正确顺序以确保系统稳定运行并成功加载内核模块。应先安装 linux-image，再安装 linux-headers，否则在重新同步数据时可能导致系统崩溃。

#### 6.1.1 手动升级内核的正确顺序

以Ubuntu 24.04操作系统为例，以下为正确的内核手动升级顺序：

1. **升级 linux-image 内核包：**

```bash
apt install linux-image-<version>-generic
update-grub
reboot
```

先安装新的内核镜像包，执行 `update-grub` 并重启使新内核生效。

* **升级 linux-headers 内核头文件包：**

```bash
apt install -y linux-headers-<version>-generic
```

在新内核生效后安装对应版本的内核头文件时，会自动触发 DKMS 编译Linux Agent内核模块，并生效。

* 更新镜像文件，这样下次引导时自动加载驱动

```plain&#x20;text
depmod
modprobe dattobd
update-initramfs -u
```

#### 6.1.2 错误的内核升级顺序及其影响

警告：如果先安装了 linux-headers，再安装 linux-image，DKMS编译会成功，但是重新加载内核并进行数据同步后，会导致系统崩溃。

在手动升级内核及安装 DKMS 驱动时，务必遵循正确的升级顺序，否则可能导致严重问题。

常见错误操作：

* 先安装 `linux-headers`，再安装 `linux-image`。

为何这是错误的？

* 安装 `linux-headers`  时，系统会自动触发 DKMS 进行内核模块编译，但此时会无法找到新内核对应的内核符号表，导致内核模块不完整，重新同步数据时会造成系统崩溃。



若操作顺序错误，可在同步数据前通过手动编译方式规避编译失败的问题。修复步骤如下：

* 使用 DKMS 强制重新编译并安装 Linux Agent 内核模块，其中 `<version>-generic` 替换为实际内核版本：

```bash
dkms build -m dattobd/0.12.0 -k <version>-generic --force
dkms install -m dattobd/0.12.0 -k <version>-generic --force
depmod
modprobe dattobd
update-initramfs -u
```

编译完成后重启服务，驱动模块将生效，问题即可修复。

### 6.2 FAQ 2: 如何处理重启服务器后Linux Agent 驱动没有正确加载的问题？

重启服务器后，发现Dattobd没有自动加载，需要将Linux Agent 驱动压入引导镜像中，可采用如下命令生效：

```plain&#x20;text
depmod
modprobe dattobd
update-initramfs -u
```

### 6.3 FAQ 3: 如何适配Ubuntu重启后自动升级了内核和headers包？

有些版本自动开启了内核自动升级，系统内核版本自动升级一般会自动触发编译和安装重启服务器后，但是在某些场景下，可能会发现系统自动升级了image和headers 包，但是Dattobd没有重新编译，这时候需要手工触发编译；可按照如下步骤进行编译和安装，并生效：

```plain&#x20;text
dkms build -m dattobd -v 0.12.0
dkms install -m dattobd -v 0.12.0
modprobe dattobd
update-initramfs -u
```

然后重启服务器生效。



### 6.4 FAQ 4: 内核自动升级后，是否会继续保持增量？

是的，会保持增量。



### 6.5 FAQ 5: 如何在其他主机上复用已编译的 Linux Agent 内核模块？

在安装 Linux Agent 时，系统会使用 **DKMS** 自动编译并安装 `Dattobd` 内核模块，同时将编译结果和相关脚本打包到 `/root/dattobd_dkms_build_pacakges` 目录下（例如：`/root/dattobd_dkms_build_pacakges/dattobd-5.15.0-153-generic-0.12.0.tar.gz`）。
&#x20;管理员可将此压缩包复制到 HyperBDR 服务器对应系统目录中（例如 Ubuntu 22.04 可放置于 `/opt/installer/production/venvs/linux-agent-venv/dkms/ubuntu/22/`）。
&#x20;当在另一台具有相同 Linux 内核版本的主机上安装 Agent 时，系统会自动检测到可用的已编译模块，并提示是否直接使用该包。若选择 **“y”**，则会自动安装该模块包并完成部署，无需重新编译。

### 6.6 FAQ 6： 在FAQ 5中， 如果复用Agent 内核模块所在主机Linux内核升级，如何处理？

在 Linux 内核升级后，**Dattobd 模块**需要重新编译和安装以匹配新内核版本。由于复用其它主机上编译好的内核模块，本地主机上可能未安装编译环境（如 DKMS 编译系统），可根据实际情况选择以下两种处理方式。

#### 方式一：使用其他主机编译好的 Dattobd 模块重新部署

当目标主机（如主机 A）没有 DKMS 编译环境时，可通过以下方式进行升级：

1. 如果主机 A 当前复用的是从其他主机（例如主机 B）编译好的 Dattobd 模块安装的版本，则需先卸载主机 A 上现有的 Dattobd 模块。

2. 在具备编译环境的主机（例如主机 B）上，针对新内核版本重新编译并生成适配的新版本 Dattobd 包。

3. 将主机 B 上编译完成的 Dattobd 安装包及压缩包上传至 **HyperBDR** 平台。

4. 在主机 A 上重新部署 Agent，以加载新的 Dattobd 模块。

#### 方式二：直接复制已编译好的模块文件并加载生效

如目标主机 A 无法自行编译 Dattobd，可从其他主机（如主机 B）复制对应内核版本的模块文件，步骤如下：

1. 确认主机 B 上的模块文件路径

主机 B 的 Dattobd 模块通常位于以下路径（其中 6.8.0-62-generic 为示例内核版本号）：

```plain&#x20;text
/lib/modules/6.8.0-62-generic/updates/dkms/dattobd.ko.zst
```

> **注意：**
> &#x20;在 Ubuntu 22.04 与 20.04 系统中，模块文件可能为 `dattobd.ko`（无 `.zst` 后缀）。
> &#x20;请根据实际版本确认文件名称。

* 将模块复制到主机 A

将主机 B 上的 `dattobd.ko.zst` 文件复制到主机 A 对应的目录中：

```plain&#x20;text
/lib/modules/6.8.0-62-generic/dattobd.ko.zst
```

* 执行生效命令

**Ubuntu 系统：**

```plain&#x20;text
depmod
modprobe dattobd
update-initramfs -u
```

**CentOS / RHEL 系列系统：**

```plain&#x20;text
depmod
modprobe dattobd
dracut -f
```

执行完成后，Dattobd 模块将与新内核版本匹配并生效。

###
