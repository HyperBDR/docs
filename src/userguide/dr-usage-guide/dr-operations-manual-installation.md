# HyperBDR Installation

[[toc]]

## Installation method

HyperBDR supports single-machine offline deployment. We will provide an offline installation package for installation and deployment. For specific installation prerequisites and resource requirements, please refer to the following documents.

## Environmental requirements

::: warning
Notes: We strongly recommend that when preparing HyperBDR console host resources, if HyperBDR uses public network access, then select key pair login instead of password login for the host login mode to ensure the security of server access.
:::

| Configuration items | Parameters                                                      |
| :------------------ | :-------------------------------------------------------------- |
| Cpu                 | 8 C                                                             |
| Mem                 | 16 GiB                                                          |
| Image               | Ubuntu 20.04 server 64bit                                       |
| System Disk         | High IO 200GB                                                   |
| Firewall Rule       | [HyperBDR Open Network Plicy](https://docs.oneprocloud.com/userguide/faq/faq.html#hyperbdr-required-network-policy) |

::: tip
If the platform you are on does not have the `Ubuntu 20.04 Server 64bit` image, then you can download the standard image provided by us and import it to the platform for installation.

Download Link: [Ubuntu-20.04-server-64bit.qcow2](https://downloads.oneprocloud.com/docs_images/Ubuntu-20.04-server-64bit.qcow2)
:::

## Software installation

### Installation Package Information

#### Installation Package

Access [https://install.oneprocloud.com/get_hyperbdr_latest](https://install.oneprocloud.com/get_hyperbdr_latest) through a browser to obtain the download package link.

#### Installation Package MD5 Checksum File

Access [https://install.oneprocloud.com/get_hyperbdr_latest](https://install.oneprocloud.com/get_hyperbdr_latest) through a browser to obtain the download package link. Then, add the `.md5` suffix after obtaining the link to obtain the MD5 file.

::: tip
Log in to the HyperBDR host backend and execute the command.  
:::

### Download Installation Package and MD5 Checksum File

#### Set url in Shell

```sh
# Retrieve the latest HyperBDR package URL
HYPERBDR_PACKAGE=$(curl -s -k https://install.oneprocloud.com/get_hyperbdr_latest/latest)
echo "HYPERBDR_PACKAGE: ${HYPERBDR_PACKAGE}"

# Get the corresponding MD5 file URL
HYPERBDR_PACKAGE_MD5="${HYPERBDR_PACKAGE}.md5"
echo "HYPERBDR_PACKAGE_MD5: ${HYPERBDR_PACKAGE_MD5}"

# Use string manipulation to extract the package name
HYPERBDR_PACKAGE_NAME="${HYPERBDR_PACKAGE##*/}"
echo "HYPERBDR_PACKAGE_NAME: ${HYPERBDR_PACKAGE_NAME}"

# Extract the MD5 file name
HYPERBDR_PACKAGE_MD5_NAME="${HYPERBDR_PACKAGE_NAME}.md5"
echo "HYPERBDR_PACKAGE_MD5_NAME: ${HYPERBDR_PACKAGE_MD5_NAME}"
```
#### Download File

```sh
curl -k -O "$HYPERBDR_PACKAGE"
curl -k -O "$HYPERBDR_PACKAGE_MD5"
```
### Installation Package Consistency Check

- Step1: Generate the MD5 value for the downloaded installation package  

```sh
md5sum "$HYPERBDR_PACKAGE_NAME"
```
- Step2: Check the MD5 value recorded in the MD5 checksum file

```sh
cat "$HYPERBDR_PACKAGE_MD5_NAME"
```
- Step3: Compare MD5 Values
 
If the MD5 values obtained in `Step1` and `Step2` are the same, it indicates that the installation package is not corrupted. If the MD5 values are different, you can try re-downloading the file for comparison or contact us for assistance.

### Install HyperBDR

> After completing the download of the HyperBDR installation package, you can proceed to install it  
> Already logged in to the HyperBDR installation host backend by default

::: tip
The operating system used for the installation must be Ubuntu 20.04 version.
:::

#### Unzip the HyperBDR installation package

- Execute the following command to unzip the installation package  

```sh
tar -zxvf "$HYPERBDR_PACKAGE_NAME" -C /mnt/  
```
#### Run the installation script

##### Enable public access to the HyperBDR platform

- Execute the command  

```sh
bash /mnt/installer/install.sh -i <HyperBDR Public IP>
```

::: tip
The Public IP specified by -i can be understood as your external Internet address. Generally, in a data center, it is called an Internet IP. If it is on the cloud, it is generally called an Elastic Public IP (EIP). Obtain it according to your actual environment.
:::

##### Access the HyperBDR platform through an internal VPN

- Execute the command  

```sh
bash /mnt/installer/install.sh
```
::: warning
By default, the installation script uses the address of the first network interface card as the platform service address. 
:::

If the installation is successful, you will see the prompted login information.  

```
[2023-03-30 23:08:36] [INFO] --------------------------------------------------
[2023-03-30 23:08:36] [INFO] Congratulations! The installation of HyperBDR is complete.
[2023-03-30 23:08:36] [INFO]
[2023-03-30 23:08:36] [INFO] DR        : https://192.168.12.81:10443
[2023-03-30 23:08:36] [INFO] Migration : https://192.168.12.81:20443
[2023-03-30 23:08:36] [INFO] Admin     : https://192.168.12.81:30443
[2023-03-30 23:08:36] [INFO]
[2023-03-30 23:08:36] [INFO] The default username and password : admin / P@ssw0rd
[2023-03-30 23:08:36] [INFO]
[2023-03-30 23:08:36] [INFO] If you have any questions or need assistance, please refer
[2023-03-30 23:08:36] [INFO] to the user manual or contact our support team.
[2023-03-30 23:08:36] [INFO]
[2023-03-30 23:08:36] [INFO] Enjoy using our product!
[2023-03-30 23:08:36] [INFO] --------------------------------------------------
```
- Access HyperBDR Console       url: https://\<HyperBDR IP\>:10443
- Access HyperMotion Console    url: https://\<HyperBDR IP\>:20443
- Access Admin Portal Console   url: https://\<HyperBDR IP\>:30443