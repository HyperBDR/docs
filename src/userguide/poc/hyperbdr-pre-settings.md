# HyperBDR For VMware Pre-Settings

[[toc]]

## Download HyperBDR Installation Package

### Installation Package Information

#### Installation Package
 
> File Nmae: HyperBDR_release_v4.10.1_20231031-20231031-1617.tar.gz  
> Download Link: [https://oneprocloud.oss-cn-beijing.aliyuncs.com/download/standalone-prod/HyperBDR_release_v4.10.1_20231031-20231031-1617.tar.gz](https://oneprocloud.oss-cn-beijing.aliyuncs.com/download/standalone-prod/HyperBDR_release_v4.10.1_20231031-20231031-1617.tar.gz)  

#### MD5 Checksum File

> File Nmae: HyperBDR_release_v4.10.1_20231031-20231031-1617.tar.gz.md5  
> Download Link: [https://oneprocloud.oss-cn-beijing.aliyuncs.com/download/standalone-prod/HyperBDR_release_v4.10.1_20231031-20231031-1617.tar.gz.md5](https://oneprocloud.oss-cn-beijing.aliyuncs.com/download/standalone-prod/HyperBDR_release_v4.10.1_20231031-20231031-1617.tar.gz.md5)  

::: tip
Log in to the HyperBDR host backend and execute the command.  
:::


### Download Installation Package and MD5 Checksum File

#### Set url in Shell

```sh
export HYPERBDR_PACKAGE=<url for Installation Package>
export HYPERBDR_PACKAGE_MD5=<url for MD5 Checksum File>
export HYPERBDR_PACKAGE_NAME=<File Name for Installation Package>
export HYPERBDR_PACKAGE_MD5_NAME=<File Name for MD5 Checksum File>
```
#### Download File

```sh
curl -O "$HYPERBDR_PACKAGE"
curl -O "$HYPERBDR_PACKAGE_MD5"
```

### Installation Package Consistency Check

- Step1: Generate the MD5 value for the downloaded installation package  

```sh
md5sm "$HYPERBDR_PACKAGE_NAME"
```
- Step2: Check the MD5 value recorded in the MD5 checksum file

```sh
cat "$HYPERBDR_PACKAGE_MD5_NAME"
```

- Step3: Compare MD5 Values 
 
If the MD5 values obtained in `Step1` and `Step2` are the same, it indicates that the installation package is not corrupted. If the MD5 values are different, you can try re-downloading the file for comparison or contact us for assistance.

## Install HyperBDR

> After completing the download of the HyperBDR installation package, you can proceed to install it  
> Already logged in to the Huawei Cloud HyperBDR ECS instance backend by default  

### Unzip the HyperBDR installation package

- Execute the following command to unzip the installation package  

```sh
tar -zxvf "$HYPERBDR_PACKAGE_MD5_NAME" -C /mnt/  
```
### Run the installation script

#### Enable public access to the HyperBDR platform

- Execute the command  

```sh
bash /mnt/installer/install.sh -i <HyperBDR EIP>
```

#### Access the HyperBDR platform through an internal VPN

- Execute the command  

```sh
bash /mnt/installer/install.sh
```

## Apply for HyperBDR License

## Verify Proxy Registration in HyperBDR

## Add VMware Credentials

## Verify VMware Status in HyperBDR

## Add Object Storage

## Add DR Recovery Gateway

## Add VMware Hosts in HyperBDR
