# Kernel Module Build (DKMS)

## 1. When to Use DKMS

Linux kernels come in many different versions, including a large number of custom builds. To handle this variety, we provide an installation option based on **DKMS (Dynamic Kernel Module Support)**. DKMS is a proven technology, widely used in projects by Google, Red Hat, Ubuntu, VMware, and many others. It allows kernel modules to be automatically compiled and updated for different kernel versions.

Since it is not possible to provide pre-built modules for every kernel version, the DKMS mode lets you compile and install the required module directly on your system. This makes it easy to deploy the Linux Agent even on systems with newer, older, or customized kernels. With DKMS, you don’t need to wait for us to release a specific module version—you can build it yourself, ensuring better compatibility and faster deployment.

In short, if the Linux Agent cannot load its kernel module during installation, but your system’s kernel major version is within the supported range, you can use DKMS to build the module dynamically and complete the installation for data synchronization.

## 2. Requirements for DKMS

When using DKMS, the installation script will automatically install the required build tools (such as **gcc**, **make**, and **kernel headers**). No manual setup is needed. However, this process depends on your system being able to access its package repositories. Please make sure your system can connect to the repositories and install the required packages.

### Things to Keep in Mind

1. **System Resource Usage**
   &#x20;DKMS builds the module locally, which requires system resources.

   * Compilation may increase CPU and memory usage.

   * Several hundred MB of free disk space is needed for build files.

   * The first build may download dependencies, which uses network bandwidth.
     &#x20;Plan ahead if your system is running with limited resources.

2. **Kernel Version Changes**
   &#x20;If the kernel major version is outside the supported range, DKMS builds may fail. In this case, reinstall the Linux Agent, and contact technical support if needed.

3. **Upgrade Timing**
   &#x20;Make sure the package repositories are accessible and your system has enough free resources, since compilation can temporarily use a lot of CPU and disk space. We recommend performing kernel upgrades when the system load is low, so DKMS can rebuild the Linux Agent module smoothly.

| Condition                    | Description                                                                                                                        |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Operating System Support     | Ubuntu 22.04 / 24.04                                                                                                               |
| Kernel Version Range         | Supported from version 5.15 to 6.8                                                                                                 |
| Kernel Headers               | The installed headers must match the currently running kernel version, required for building the module.                           |
| Build Toolchain              | Tools such as **gcc** and **make** must be installed to compile the kernel module.                                                 |
| DKMS Package                 | The `dkms` command-line tool must be installed (e.g., via `apt install dkms` or `yum install dkms`).                               |
| Compilable Module Source     | A DKMS-compatible module source package must be provided (including a `dkms.conf` file) for registration, build, and installation. |
| Root Privileges              | Root or sudo privileges are required to install, build, and load kernel modules.                                                   |
| Compatible Kernel Interfaces | The module source must be compatible with the current kernel interfaces; otherwise, compilation may fail.                          |

## 3. First-Time Installation

### 3.1 Installation Instructions

When installing the Linux Agent, if the repository does not contain a precompiled module for the current kernel version, the system will prompt you whether to use **DKMS** to build the module.

* The default option is **No (n)**.

* Enter **y** to proceed with DKMS compilation and installation for the current kernel version.

> **Note:** During installation, the script will automatically fetch the package index and install the required dependencies. Please ensure that your package repository is correctly configured and that the system has a stable network connection.

```plain&#x20;text
Sorry, the current kernel version 6.8.0-62-generic is not found, would you like to build dattobd with DKMS? (y/n) [n]:
```

In addition, users can enable DKMS in **non-interactive mode** by specifying the `--enable-dkms` parameter. This option allows the module to be automatically built with DKMS without requiring user confirmation during installation.

```plain&#x20;text
curl -k 'https://192.168.7.122:10443/hypermotion/v1/sources/download?type=linux&id=OEExMTAwNTA1NjlGMTk1RWV5SmhiR2NpT2lKSVV6STFOaUlzSW1WNGNDSTZNVGMxTWpVM01USTJNeXdpYVdGMElqb3hOelV4T1RZMk5EWXpmUS4zQjA0NUI0NERBQjUxMUU5ZXlKdFozSmZkMkY1SWpvaVNIbHdaWEpIWVhSbElpd2lkV2xrSWpvaVl6RmxPVEl3TmpRME1qa3hOR1pqTmpobVpEUXhPRGc0WldZeFpHRTFPR0VpTENKeWIyeGxjeUk2SW1Ga2JXbHVJaXdpWlc1MFgybGtJam9pWWpBM1kySmtZVEV6TUdGak5EQXdZVGd3T0dRMk16bGlaR0UyTnpBME1UTWlmUS5OVTBQTlNudTNyaThXVUpJZXpTTkkzRGtJQlBvd1AxRlBRUjY2X1pVTXow&scene=dr' | bash -s -- --enable-dkms
```

### 3.2 Example Process

After entering **Y**, the system will start installing the required **DKMS dependencies**.

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

The system will then begin buildin&#x67;**&#x20;the kernel module**.

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

Build Successful

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

## 4. Kernel Upgrade

In most cases, the system will automatically trigger the **DKMS (Dynamic Kernel Module Support)** build process after a kernel upgrade. DKMS will compile and install modules compatible with the new kernel. Once the build is complete, these modules will be automatically loaded upon system reboot, without any manual intervention.

> **Important:** Ensure that the upgraded kernel version is within the supported range of the software. Unsupported kernel versions may cause DKMS builds to fail, which can prevent modules from loading properly and affect functionality.

To minimize risks and ensure compatibility, it is recommended to use the system’s official kernel upgrade methods:

* **Ubuntu-based systems:** Use `apt upgrade` or `apt full-upgrade`.

* **CentOS / Red Hat Enterprise Linux (RHEL):** Use `yum update` or `dnf upgrade`.

* **SUSE Linux Enterprise Server (SLES) / openSUSE:** Use `zypper update` or `zypper patch`.

Avoid manually downloading third-party kernel packages or using unofficial repositories, as this may lead to DKMS build failures or system instability. If manual upgrades are necessary, refer to the recommended procedures in **Appendix 2 – Common Issues**.

The following provides a reference process for kernel upgrades:

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

If you upgrade to a specific kernel, you can do so by upgrading both the **kernel headers** and the **kernel image**. During the upgrade, the system will automatically trigger the compilation and loading of the kernel modules.

```plain&#x20;text
apt install linux-headers-<version>-generic linux-image-<version>-generic
```

## 5. Appendix I: DKMS Overview

### 5.1 What is DKMS?

**DKMS (Dynamic Kernel Module Support)** is a framework developed by Dell that automatically builds and installs Linux kernel modules. Its main advantage is that after a kernel upgrade, the system can automatically recompile and install third-party kernel modules without requiring manual intervention.

### 5.2 How DKMS Works

DKMS registers the specified kernel module source code in the system and automatically triggers module build and installation in the following scenarios:

* **Kernel upgrade:** When a new kernel is installed, DKMS automatically builds and installs the corresponding modules for the new kernel.

* **Module addition or update:** When a module is added or updated, DKMS can immediately build it for the current kernel.

* **Manual trigger:** Administrators can manage modules using commands such as `dkms add`, `dkms build`, `dkms install`, or `dkms remove`.

***

## 6. Appendix II: Frequently Asked Questions

### 6.1 FAQ 1: What is the correct order for manually upgrading the kernel and DKMS drivers?

When manually upgrading the kernel and DKMS drivers, following the correct sequence is crucial to ensure system stability and successful module loading. You should install the **linux-image** package first, followed by the **linux-headers** package. Installing in the wrong order may cause system crashes during subsequent data synchronization.

#### 6.1.1 Correct Sequence for Manual Kernel Upgrade

For **Ubuntu 24.04**, the recommended sequence for manually upgrading the kernel is:

Upgrade the **linux-image** package:

```bash
apt install linux-image-<version>-generic
update-grub
reboot
```

First, install the new **linux-image** package, run `update-grub`, and reboot the system to activate the new kernel.

Upgrade the **linux-headers** package:

```bash
apt install -y linux-headers-<version>-generic
```

After the new kernel is activated, installing the corresponding **linux-headers** package will automatically trigger DKMS to compile the Linux Agent kernel module and make it active.

210. Update the kernel image so that the module will be automatically loaded on the next system boot.

```plain&#x20;text
depmod
modprobe dattobd
update-initramfs -u
```

### 6.1.2 Incorrect Kernel Upgrade Order and Its Impact

**Warning:** If you install **linux-headers** before **linux-image**, DKMS compilation may succeed, but after rebooting into the new kernel and performing data synchronization, the system can crash.

When manually upgrading the kernel and installing DKMS drivers, it is essential to follow the correct upgrade sequence to avoid serious issues.

**Common Incorrect Operation:**

* Installing **linux-headers** before **linux-image**.

**Why is this incorrect?**

* During the installation of **linux-headers**, DKMS automatically triggers the compilation of kernel modules. At this point, the system cannot locate the symbol table for the new kernel, resulting in incomplete modules. Re-syncing data with these incomplete modules may cause the system to crash.

**If the sequence was done incorrectly:**
&#x20;You can avoid compilation failures before data synchronization by manually recompiling the module. The fix is as follows:

* Force DKMS to recompile and reinstall the Linux Agent kernel module, replacing `<version>-generic` with your actual kernel version:

```bash
dkms build -m dattobd/0.12.0 -k <version>-generic --force
dkms install -m dattobd/0.12.0 -k <version>-generic --force
depmod
modprobe dattobd
update-initramfs -u
```

After the compilation completes, restart the service. The kernel module will become active, and the issue will be resolved.

### 6.2 FAQ 2: Linux Agent Module Not Loading After Server Reboot

If, after rebooting the server, the Linux Agent module is not automatically loaded, you need to embed the module into the boot image. You can use the following command:

```plain&#x20;text
depmod
modprobe dattobd
update-initramfs -u
```



### 6.3 FAQ 3: Ubuntu Automatically Upgraded Kernel and Headers After Reboot

Some Ubuntu versions enable automatic kernel upgrades. After a server reboot, the system may automatically upgrade both the **linux-image** and **linux-headers** packages. However, the **dattobd** module may not be recompiled automatically.

Normally, the system-triggered upgrade should automatically invoke DKMS to compile and install the module.

If DKMS compilation is not triggered, you need to manually compile the **dattobd** module. Follow the steps below to compile, install, and activate the module:

```plain&#x20;text
dkms build -m dattobd -v 0.12.0
dkms install -m dattobd -v 0.12.0
modprobe dattobd
update-initramfs -u
```

Then, reboot the server to apply the changes.

