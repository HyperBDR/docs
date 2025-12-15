# Linux Agent Kernel Module Build (DKMS)

## 1. Description of applicable scenarios

To support diverse Linux kernel versions including heavily customized kernels, we provide Dynamic Kernel Module Support (DKMS) for real-time compilation and deployment of the Dattobd kernel module in Linux Agent.

DKMS is a mature and widely adopted technology by major companies such as Google, Red Hat, Ubuntu, and VMware. It enables automatic compilation and updates of kernel modules across different kernel versions.

Since it's impractical to pre-build and support all possible kernel environments, DKMS allows users to compile and install required kernel modules directly on their systems for rapid Linux Agent deployment. This approach is especially useful for systems with newer, older, or custom kernels. Users can complete installation independently without waiting for pre-compiled modules, improving compatibility and deployment efficiency.

In summary, when the Dattobd kernel module cannot be directly loaded during Linux Agent installation, but the kernel version is within the supported range, you can use DKMS to dynamically build the kernel module and complete the installation and data synchronization.

## 2. Dynamic Compilation with DKMS

When using DKMS for dynamic module builds, required build tools (such as gcc, make, kernel headers) and DKMS software with its dependencies must be pre-installed by administrators. Before using DKMS to compile Dattobd, ensure your system has all required DKMS components and dependencies installed. If DKMS compilation environment is not available, follow the standard installation process.

### 2.1 Precautions

1. **System Resource Usage**: DKMS compilation runs locally and may consume system resources including CPU, memory, disk space, and network bandwidth. In resource-constrained environments, compilation may increase system load. Reserve several hundred MB of disk space for build artifacts. Plan accordingly based on your system resources.

2. **Major Kernel Version Changes**: If kernel version changes exceed the software's supported range, DKMS compilation may fail. In this case, reinstall Linux Agent or contact technical support if needed.

3. **Upgrade Timing**: Ensure installation sources are available and system resources are sufficient (compilation may consume high CPU and disk space). Schedule kernel upgrades during periods of low system and business load to allow automatic DKMS updates of Linux Agent kernel modules.

| **Requirement**                  | **Details**                                                                                                         |
| ------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **OS Support**                | Ubuntu 20.04 (supported since HyperBDR 6.9)&#xA;Ubuntu 22.04/24.04 (supported since HyperBDR 6.7)&#xA;CentOS 8/9 (supported since HyperBDR 6.10) |
| **Kernel Version Range**                | 5.15 to 6.8                                                                                                  |
| **Kernel Headers** | **Must install kernel headers matching your running kernel version for module compilation.** |
| **Compiler Toolchain**                 | Install compilation tools such as gcc and make for building kernel modules.                                                                                 |
| **DKMS Package**              | System must have dkms command-line tool installed, typically available through package managers (apt install dkms or yum install dkms).                                          |
| **Module Source Code**             | User or vendor must provide DKMS-compliant module source (including dkms.conf) for registration, building, and installation.                                                        |
| **Root Privileges**               | Installing, building, and loading kernel modules typically requires root or sudo privileges.                                                                               |
| **Compatible Kernel Interface**               | Module source must be compatible with the current kernel version, or compilation may fail.                                                                                   |

### 2.2 Install DKMS

1. Ubuntu 20.04 / 22.04 / 24.04

```bash
apt update
apt install dkms
```

Verify successful installation:

```bash
# dpkg -l |grep dkms
ii  dkms        2.8.7-2ubuntu2.2     all          Dynamic Kernel Module Support Framework
```

* CentOS / RHEL 8 / 9

```bash
yum install dkms
```

Verify successful installation:

```bash
# rpm -qa |grep dkms
dkms-3.2.1-1.el9.noarch
```

## 3. Automatic Kernel Adaptation During Linux Agent Installation (DKMS)

### 3.1 Parameter Description

When the deployment script includes the `--enable-dkms` parameter, it uses DKMS to automatically compile modules in non-interactive mode. The system assumes DKMS tools are already installed:

```bash
curl -k 'https://192.168.7.122:10443/hypermotion/v1/sources/download?type=linux&id=OEExMTAwNTA1NjlGMTk1RWV5SmhiR2NpT2lKSVV6STFOaUlzSW1WNGNDSTZNVGMxTWpVM01USTJNeXdpYVdGMElqb3hOelV4T1RZMk5EWXpmUS4zQjA0NUI0NERBQjUxMUU5ZXlKdFozSmZkMkY1SWpvaVNIbHdaWEpIWVhSbElpd2lkV2xrSWpvaVl6RmxPVEl3TmpRME1qa3hOR1pqTmpobVpEUXhPRGc0WldZeFpHRTFPR0VpTENKeWIyeGxjeUk2SW1Ga2JXbHVJaXdpWlc1MFgybGtJam9pWWpBM1kySmtZVEV6TUdGak5EQXdZVGd3T0dRMk16bGlaR0UyTnpBME1UTWlmUS5OVTBQTlNudTNyaThXVUpJZXpTTkkzRGtJQlBvd1AxRlBRUjY2X1pVTXow&scene=dr' | bash -s -- --enable-dkms
```

The installation script first checks if DKMS is installed; if not, it returns an error. If DKMS is installed, it automatically performs local compilation and installation.

Without the `--enable-dkms` parameter, if the system detects DKMS is installed but the corresponding kernel's Dattobd module is not available on the HyperBDR system, the deployment process will prompt whether to use DKMS to compile the Dattobd module:

```bash
curl -k 'https://192.168.7.122:10443/hypermotion/v1/sources/download?type=linux&id=OEExMTAwNTA1NjlGMTk1RWV5SmhiR2NpT2lKSVV6STFOaUlzSW1WNGNDSTZNVGMxTWpVM01USTJNeXdpYVdGMElqb3hOelV4T1RZMk5EWXpmUS4zQjA0NUI0NERBQjUxMUU5ZXlKdFozSmZkMkY1SWpvaVNIbHdaWEpIWVhSbElpd2lkV2xrSWpvaVl6RmxPVEl3TmpRME1qa3hOR1pqTmpobVpEUXhPRGc0WldZeFpHRTFPR0VpTENKeWIyeGxjeUk2SW1Ga2JXbHVJaXdpWlc1MFgybGtJam9pWWpBM1kySmtZVEV6TUdGak5EQXdZVGd3T0dRMk16bGlaR0UyTnpBME1UTWlmUS5OVTBQTlNudTNyaThXVUpJZXpTTkkzRGtJQlBvd1AxRlBRUjY2X1pVTXow&scene=dr' | bash
......
[2025-09-15 09:04:36] [INFO] Sorry, the current kernel version 5.4.0-216-generic is not found, but the DKMS tools is installed, would you like to build dattobd with DKMS? (y/n) [n]:
y/n [n]: y
[2025-09-15 09:04:40] [INFO] Trying to configure the dattobd with DKMS tools.
[2025-09-15 09:04:40] [INFO] The linux-headers-5.4.0-216-generic and linux-image-5.4.0-216-generic had been installed.
[2025-09-15 09:04:40] [INFO] Trying to download the dattobd source code and extract to /usr/src/dattobd-version
```

If you choose "y", DKMS will compile and install the Dattobd kernel driver. Otherwise, the system follows the standard installation process. If HyperBDR doesn't provide a Dattobd module for your kernel version, you'll see:

```bash
[2025-09-10 07:04:00] [ERROR] Sorry, the current kernel version 5.4.0-216-generic is not supported, the installation process cannot proceed.
```

### 3.2 Process Example

After selecting "y", DKMS begins compiling the Dattobd module:

```bash
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

Compilation completes successfully and Linux Agent is installed.

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

## 4. Automatic Kernel Adaptation After Linux Agent Kernel Upgrade

In most cases, after a kernel upgrade, the system automatically triggers the DKMS build process to compile and install kernel modules compatible with the new kernel. After compilation, the system automatically loads these modules on restart without manual intervention.

Ensure the upgraded kernel version is within the software's supported range. Unsupported kernel versions may cause DKMS build failures, preventing module loading and functionality.

To minimize risk and ensure compatibility, use the system's recommended kernel upgrade method:

* **Ubuntu-based systems**: Use `apt upgrade` or `apt full-upgrade` for kernel updates.

* **CentOS or Red Hat Enterprise Linux (RHEL)**: Use `yum update` or `dnf upgrade` to upgrade the kernel.

* **SUSE Linux Enterprise Server (SLES) or openSUSE**: Use `zypper update` or `zypper patch` for official recommended kernel upgrades.

Avoid manually downloading and installing third-party kernel packages or using unofficial sources, which may cause DKMS build failures or system instability. For manual upgrades, refer to common questions in Appendix B for recommended steps.

Ubuntu upgrade example:

```bash
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

To upgrade to a specific kernel version, you can install both headers and image simultaneously. During the upgrade, the system automatically triggers kernel module compilation and loading:

```bash
apt install linux-headers-<version>-generic linux-image-<version>-generic
```

## 5. Appendix A: DKMS Overview

### 5.1 What is DKMS?

DKMS (Dynamic Kernel Module Support) is a framework developed by Dell for automatically building and installing Linux kernel modules. Its key advantage is that after kernel upgrades, the system automatically recompiles and installs corresponding third-party kernel modules without user intervention.

### 5.2 How DKMS Works

DKMS registers specified kernel module source code in the system and automatically triggers module building and installation in the following scenarios:

* **New kernel installation**: After the system updates the kernel, DKMS automatically builds and installs the corresponding module.

* **Module addition or upgrade**: When adding or updating module versions, DKMS can immediately build for the current kernel.

* **Manual triggering**: Administrators can use `dkms add/build/install/remove` commands to manage modules.

## 6. Frequently Asked Questions

### 6.1 FAQ 1: What is the correct order for manually upgrading the kernel and DKMS driver?

When manually upgrading the kernel and DKMS driver, follow the correct order to ensure system stability and successful kernel module loading. Install linux-image first, then linux-headers. Otherwise, system crashes may occur when resyncing data.

#### 6.1.1 Correct kernel upgrade order

Using Ubuntu 24.04 as an example, here is the correct manual kernel upgrade order:

1. **Upgrade linux-image kernel package:**

```bash
apt install linux-image-<version>-generic
update-grub
reboot
```

Install the new kernel image, run `update-grub`, and restart to enable the new kernel.

* **Upgrade linux-headers kernel header package:**

```bash
apt install -y linux-headers-<version>-generic
```

When you install the matching kernel headers after the new kernel takes effect, DKMS automatically compiles the Linux Agent kernel module and activates it.

* Update the image file for automatic driver loading on next boot:

```bash
depmod
modprobe dattobd
update-initramfs -u
```

#### 6.1.2 Incorrect kernel upgrade order and its impact

**Warning**: If you install linux-headers first, then linux-image, DKMS compilation may succeed, but system crashes may occur when the new kernel loads and data resyncing begins.

When manually upgrading the kernel and installing DKMS drivers, strictly follow the correct order to avoid serious problems.

Common mistakes:

* Installing `linux-headers` first, then `linux-image`.

Why is this incorrect?

* When installing `linux-headers`, the system automatically triggers DKMS to compile the kernel module, but the new kernel's kernel symbol table is not yet available, resulting in incomplete kernel modules. This causes system crashes when data resyncing begins.

If you made this mistake, you can resolve it by manual compilation before data syncing:

* Use DKMS to force recompile and reinstall the Linux Agent kernel module (replace `<version>-generic` with your actual kernel version):

```bash
dkms build -m dattobd/0.12.0 -k <version>-generic --force
dkms install -m dattobd/0.12.0 -k <version>-generic --force
depmod
modprobe dattobd
update-initramfs -u
```

After compilation completes, restart the service and the driver will take effect, resolving the issue.

### 6.2 FAQ 2: How to handle Dattobd driver not loading correctly after server restart?

If Dattobd does not auto-load after server restart, you need to embed the Linux Agent driver in the boot image using:

```bash
depmod
modprobe dattobd
update-initramfs -u
```

### 6.3 FAQ 3: How to handle automatic kernel and headers updates after Ubuntu restart?

Some versions have automatic kernel upgrades enabled. System kernel updates generally trigger automatic compilation and installation. However, in some cases, the system may have automatically upgraded image and headers packages, but Dattobd was not recompiled. Manually trigger compilation using:

```bash
dkms build -m dattobd -v 0.12.0
dkms install -m dattobd -v 0.12.0
modprobe dattobd
update-initramfs -u
```

Then restart the server to activate.

### 6.4 FAQ 4: Does data remain incremental after automatic kernel upgrade?

Yes, data remains incremental.



### 6.5 FAQ 5: How to reuse compiled Linux Agent kernel modules on other hosts?

When installing Linux Agent, the system uses **DKMS** to automatically compile and install the `Dattobd` kernel module, and packages the compilation results and scripts into `/root/dattobd_dkms_build_pacakges` directory (for example: `/root/dattobd_dkms_build_pacakges/dattobd-5.15.0-153-generic-0.12.0.tar.gz`).

Administrators can copy this package to the corresponding HyperBDR server directory (for example, for Ubuntu 22.04, place it in `/opt/installer/production/venvs/linux-agent-venv/dkms/ubuntu/22/`).
When installing Agent on another host with the same Linux kernel version, the system automatically detects available pre-compiled modules and prompts whether to use them directly. If you select **"y"**, the system automatically installs the module and completes deployment without recompilation.

### 6.6 FAQ 6: In FAQ 5, if the host with reused Agent kernel modules upgrades its Linux kernel, how to handle it?

After Linux kernel upgrade, the **Dattobd module** must be recompiled and reinstalled to match the new kernel version. Since you're reusing pre-compiled kernel modules from other hosts, the local host may not have the compilation environment (such as DKMS). You can choose one of two approaches based on your situation.
#### Method 1: Redeploy using pre-compiled Dattobd modules from other hosts

When the target host (such as host A) lacks DKMS compilation environment:

1. If host A is currently using Dattobd module compiled from another host (such as host B), first uninstall the existing Dattobd module from host A.

2. On a host with compilation environment (such as host B), recompile for the new kernel version and generate the new Dattobd package.

3. Upload the compiled Dattobd package from host B to the **HyperBDR** platform.

4. Redeploy Agent on host A to load the new Dattobd module.

#### Method 2: Copy pre-compiled module files from other hosts and activate

If target host A cannot recompile Dattobd independently, copy the corresponding kernel version module files from another host (such as host B):

1. **Identify module file location on host B**

Host B's Dattobd module is usually located at (where 6.8.0-62-generic is the example kernel version):

```bash
/lib/modules/6.8.0-62-generic/updates/dkms/dattobd.ko.zst
```

> **Note:**
> On Ubuntu 22.04 and 20.04, the module file may be `dattobd.ko` (without `.zst` suffix).
> Verify the filename based on your actual version.

* **Copy the module to host A**

Copy the `dattobd.ko.zst` file from host B to the corresponding directory on host A:

```bash
/lib/modules/6.8.0-62-generic/dattobd.ko.zst
```

* **Execute activation commands**

**Ubuntu:**

```bash
depmod
modprobe dattobd
update-initramfs -u
```

**CentOS / RHEL:**

```bash
depmod
modprobe dattobd
dracut -f
```

After completion, the Dattobd module will match the new kernel version and take effect.

###
