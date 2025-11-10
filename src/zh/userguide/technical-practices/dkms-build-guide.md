# 内核模块构建(DKMS)

## 1. 适用场景说明

为了应对各类 Linux 内核版本（包括大量定制化内核）高度多样化的情况，我们提供了基于 DKMS（Dynamic Kernel Module Support）的安装模式。DKMS 是一项成熟且广泛应用的技术，已被包括 Google、Red Hat、Ubuntu、VMware 等知名企业在内的众多大型项目广泛采用，确保了内核模块能够在不同内核版本间自动编译和更新。

由于我们无法预先收集并适配所有可能的内核环境，DKMS 模式允许用户在当前系统内直接编译并安装所需的内核模块，从而实现对 Linux Agent 的快速部署。该模式特别适用于内核版本较新、较旧或经过定制的系统场景，用户无需等待我们提供特定版本的预编译模块，即可独立完成安装，提升了兼容性与部署效率。

简而言之，当安装 Linux Agent 时无法直接加载内核模块，且当前系统内核的大版本在支持范围内，您可通过 DKMS 动态构建内核模块，顺利完成安装并开展后续数据同步。

## 2. DKMS使用前提条件

在使用 DKMS 动态构建模式时，构建所需的工具（如 gcc、make、kernel headers 等）将由安装脚本自动安装，无需用户手动干预。该过程依赖系统软件源的正常访问能力，因此请确保当前环境能够成功连接软件源并安装所需依赖包。

使用DKMS时注意事项：

1. **系统资源占用**：DKMS 构建过程将在本地进行编译，可能占用系统资源，包括 CPU、内存、磁盘空间及网络流量。在资源紧张的环境中，编译可能导致系统负载上升，磁盘空间需预留数百 MB 存放构建产物，首次构建时可能会拉取依赖包，产生网络流量。请根据系统实际情况做好准备。

2. **内核大版本变更**：当内核大版本变化超过软件支持范围时，DKMS 编译失败的风险增加。此时建议重新卸载并安装 Linux Agent，必要时联系技术支持。

3. **升级时机**：确保安装源正常且系统资源充足（编译时可能占用较高 CPU 和磁盘空间）。建议在系统和业务负载较低时进行内核升级，以便自动通过 DKMS 更新 Linux Agent 内核模块。

## 3. 首次安装

### 3.1 安装说明

在安装Linux Agent时，若控制台源中缺少对应内核版本的预编译模块，系统将提示用户是否使用DKMS进行构建，默认选项为否(n), 输入y则表示进行dkms方式编译和安装内核版本：

> 注意：安装时将自动获取源索引并安装所需软件，请确保软件源配置正确且网络连接正常。

```plain&#x20;text
Sorry, the current kernel version 6.8.0-62-generic is not found, would you like to build Linux Agent Kernel Module Build (DKMS)dattobd with DKMS? (y/n) [n]:
```

此外，用户也可通过指定 --enable-dkms 参数，采用非交互方式自动使用DKMS编译模块。

```plain&#x20;text
curl -k 'https://192.168.7.122:10443/hypermotion/v1/sources/download?type=linux&id=OEExMTAwNTA1NjlGMTk1RWV5SmhiR2NpT2lKSVV6STFOaUlzSW1WNGNDSTZNVGMxTWpVM01USTJNeXdpYVdGMElqb3hOelV4T1RZMk5EWXpmUS4zQjA0NUI0NERBQjUxMUU5ZXlKdFozSmZkMkY1SWpvaVNIbHdaWEpIWVhSbElpd2lkV2xrSWpvaVl6RmxPVEl3TmpRME1qa3hOR1pqTmpobVpEUXhPRGc0WldZeFpHRTFPR0VpTENKeWIyeGxjeUk2SW1Ga2JXbHVJaXdpWlc1MFgybGtJam9pWWpBM1kySmtZVEV6TUdGak5EQXdZVGd3T0dRMk16bGlaR0UyTnpBME1UTWlmUS5OVTBQTlNudTNyaThXVUpJZXpTTkkzRGtJQlBvd1AxRlBRUjY2X1pVTXow&scene=dr' | bash -s -- --enable-dkms
```

### 3.2 过程示例

输入Y后，开始安装DMKS依赖包

```plain&#x20;text
[2025-07-07 02:58:14] [INFO] DKMS module is not installed, trying to installing DKMS?
y/n [n]: y
[2025-07-07 02:58:15] [INFO] Trying to execute 'apt-get install -y dkms' to install dattobd with DKMS tools.
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  binutils binutils-common binutils-x86-64-linux-gnu build-essential bzip2 cpp cpp-13 cpp-13-x86-64-linux-gnu cpp-x86-64-linux-gnu
  dpkg-dev fakeroot g++ g++-13 g++-13-x86-64-linux-gnu g++-x86-64-linux-gnu gcc gcc-13 gcc-13-base gcc-13-x86-64-linux-gnu
  gcc-x86-64-linux-gnu libalgorithm-diff-perl libalgorithm-diff-xs-perl libalgorithm-merge-perl libasan8 libatomic1 libbinutils
  libcc1-0 libctf-nobfd0 libctf0 libdpkg-perl libfakeroot libfile-fcntllock-perl libgcc-13-dev libgomp1 libgprofng0 libhwasan0
  libisl23 libitm1 liblsan0 libmpc3 libquadmath0 libsframe1 libstdc++-13-dev libtsan2 libubsan1 lto-disabled-list make
Suggested packages:
  binutils-doc gprofng-gui bzip2-doc cpp-doc gcc-13-locales cpp-13-doc menu debian-keyring g++-multilib g++-13-multilib gcc-13-doc
  gcc-multilib autoconf automake libtool flex bison gdb gcc-doc gcc-13-multilib gdb-x86-64-linux-gnu bzr libstdc++-13-doc make-doc
The following NEW packages will be installed:
  binutils binutils-common binutils-x86-64-linux-gnu build-essential bzip2 cpp cpp-13 cpp-13-x86-64-linux-gnu cpp-x86-64-linux-gnu
  dkms dpkg-dev fakeroot g++ g++-13 g++-13-x86-64-linux-gnu g++-x86-64-linux-gnu gcc gcc-13 gcc-13-base gcc-13-x86-64-linux-gnu
  gcc-x86-64-linux-gnu libalgorithm-diff-perl libalgorithm-diff-xs-perl libalgorithm-merge-perl libasan8 libatomic1 libbinutils
  libcc1-0 libctf-nobfd0 libctf0 libdpkg-perl libfakeroot libfile-fcntllock-perl libgcc-13-dev libgomp1 libgprofng0 libhwasan0
  libisl23 libitm1 liblsan0 libmpc3 libquadmath0 libsframe1 libstdc++-13-dev libtsan2 libubsan1 lto-disabled-list make
0 upgraded, 48 newly installed, 0 to remove and 58 not upgraded.
Need to get 66.9 MB of archives.
After this operation, 229 MB of additional disk space will be used.
Get:1 http://cn.archive.ubuntu.com/ubuntu noble-updates/main amd64 gcc-13-base amd64 13.3.0-6ubuntu2~24.04 [51.5 kB]
Get:2 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 libisl23 amd64 0.26-3build1.1 [680 kB]
Get:3 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 libmpc3 amd64 1.3.1-1build1.1 [54.6 kB]
Get:4 http://cn.archive.ubuntu.com/ubuntu noble-updates/main amd64 cpp-13-x86-64-linux-gnu amd64 13.3.0-6ubuntu2~24.04 [10.7 MB]
Get:5 http://cn.archive.ubuntu.com/ubuntu noble-updates/main amd64 cpp-13 amd64 13.3.0-6ubuntu2~24.04 [1,038 B]
Get:6 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 cpp-x86-64-linux-gnu amd64 4:13.2.0-7ubuntu1 [5,326 B]
Get:7 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 cpp amd64 4:13.2.0-7ubuntu1 [22.4 kB]
Get:8 http://cn.archive.ubuntu.com/ubuntu noble-updates/main amd64 libcc1-0 amd64 14.2.0-4ubuntu2~24.04 [48.0 kB]
Get:9 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 binutils-common amd64 2.42-4ubuntu2.5 [240 kB]
Get:10 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 libsframe1 amd64 2.42-4ubuntu2.5 [15.5 kB]
..........................................                                                 
```

开始进行内核模块编译

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

编译成功

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

## 4. 内核升级

在大多数情况下，系统在内核升级后会自动触发 DKMS（Dynamic Kernel Module Support）构建流程，以编译并安装适配新内核的内核模块。构建完成后，系统重启时将自动加载这些模块，无需手动干预。

请务必确保所升级的内核版本在当前软件的支持范围内。若内核版本不受支持，可能导致 DKMS 构建失败，进而影响相关模块的加载与功能使用。

为降低风险并确保兼容性，建议优先采用系统推荐的内核升级方式。例如：

* 在 基于 Ubuntu 的系统中，建议使用 apt upgrade 或 apt full-upgrade 方式进行内核更新；

* 在 CentOS 或 Red Hat Enterprise Linux（RHEL） 中，建议使用 yum update 或 dnf upgrade 命令升级内核；

* 对于 SUSE Linux Enterprise Server（SLES） 或 openSUSE，应使用 zypper update 或 zypper patch 进行官方推荐的内核升级。

避免手动下载安装第三方内核包或使用非官方源，以减少因兼容性问题导致 DKMS 构建失败或系统不稳定的风险。如果需要采用手动升级方式，请参考附录二中常见问题中的推荐手动升级方式。

以下为升级参考过程：

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

## 6. 附录二：常见问题

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



### 6.2 FAQ 2: 重启服务器后Linux Agent 驱动没有正确加载

重启服务器后，发现datto没有自动加载，需要将Linux Agent 驱动压入引导镜像中，可采用如下命令：

```plain&#x20;text
depmod
modprobe dattobd
update-initramfs -u
```



### 6.3 FAQ 3: Ubuntu重启后，自动升级了内核和headers包

有些版本自动开启了内核自动升级，重启服务器后，发现系统自动升级了image和headers 包，但是dattobd没有重新编译。系统自动升级一般会自动触发编译和安装。

但是如果没有自动触发dkms的编译，此时需要手工编译下dattobd包，可按照如下步骤进行编译和安装，并生效：

```plain&#x20;text
dkms build -m dattobd -v 0.12.0
dkms install -m dattobd -v 0.12.0
modprobe dattobd
update-initramfs -u
```

然后重启服务器生效。

