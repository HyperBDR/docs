# Quick Installation Guide

[[toc]]

## About This Guide

This guide is designed for technical professionals who are familiar with user requirements, usage scenarios, and product limitations. It provides streamlined instructions for planning and deploying the product efficiently, suitable for both proof-of-concept and production environments.

This document can also be used as training material for users who are new to the product.

If you are already familiar with the product's scope and limitations, you can proceed directly to [Product Installation](#product-installation).

## Getting Started

### 1. Product Scope

HyperMotion & HyperBDR is designed for host-level migration and disaster recovery. It supports various environments including physical servers, virtual machines, public clouds, private clouds, and hyper-converged platforms, as long as you have operating system access.

#### 1.1 Production Site

1. Agent-based: Mainly supports common Linux and Windows operating systems. For a detailed support list, please refer to: [Agent Operation System Support](https://oneprocloud.feishu.cn/sheets/VRqksSPEPhRTPStp3kVcItXNnyh?sheet=Y9fpqO)

2. Agentless: Mainly supports platforms such as VMware, OpenStack (Ceph), AWS, Oracle Cloud, and Huawei FusionCompute. For a detailed support list, please refer to: [Agentless Operation System Support](https://oneprocloud.feishu.cn/sheets/VRqksSPEPhRTPStp3kVcItXNnyh?sheet=0MJNYC)

For more detailed support and limitation information, please refer to: [Compatibility Overview](../../product-overview/limitations/product-support-overview.md)

#### 1.2 Confirm RPO and RTO for Disaster Recovery Scenarios

- [Product Environment Compatibility Guide](../../product-overview/limitations/product-support-overview.md)

For disaster recovery scenarios, please verify that the product's RPO and RTO meet your requirements:

[RPO & RTO Best Practices](../../product-overview/presales/hyperbdr-rpo-rto-planning-best-practices.md)

### 2. Environment Assessment

After confirming that the product meets your requirements, please review:

- [(General)Host Assessment Guide](../../product-overview/presales/hyperbdr-agent-investigation.md)
- [VMware Host Assessment](../../product-overview/presales/hyperbdr-vmware-investigation.md)

### 3. Target Site Support

- [Public Cloud Support Capabilities](https://oneprocloud.feishu.cn/sheets/S7LisoSWdhm2G4t0rdycwxEunEd?sheet=o9tX6a)
- [Private Cloud Support Capabilities](https://oneprocloud.feishu.cn/sheets/S7LisoSWdhm2G4t0rdycwxEunEd?sheet=g5grTH)

### 4. Storage Type Selection

The product supports two storage types: block storage and object storage. Choose based on your specific use case:

| Use Case | Recommended Storage | Description |
|----------|---------------------|-------------|
| Migration | Block Storage | Short RTO, ideal for limited downtime windows |
| Migration | Generic Mode | For environments without API integration |
| DR | Block Storage | Low RTO, leverages cloud platform capabilities |
| DR | Object Storage | Cost-effective solution with acceptable RTO trade-offs |

### 5. Network Planning

#### Network Communication Matrix

- [Object Storage Mode Network Matrix](../../product-overview/presales/dr-network-planning-recommendations.md#open-ports)
- [Block Storage Mode Network Matrix](../../product-overview/presales/dr-network-planning-recommendations.md#open-ports-1)

#### Network Planning Guide

- [Network Planning Recommendations](../../product-overview/presales/dr-network-planning-recommendations.md)

## Product Installation

Both HyperMotion (migration) and HyperBDR (disaster recovery) products are deployed using a unified offline installation package. The package must be downloaded in an environment with internet access, but the installation process can be completed in an isolated environment.

### 1. Prepare Deployment Environment

::: warning
If the console host is accessible via public network, for security reasons, we strongly recommend:
1. Disable password-based remote login and use key authentication instead
2. Restrict access to trusted IP addresses only
3. Enable firewall and open only necessary ports
4. Regularly update system security patches
:::

| Configuration | Specification |
|---------------|---------------|
| CPU | 8 Cores |
| Memory | 16 GiB |
| OS | Ubuntu 20.04 server 64-bit |
| System Disk | 200GB |
| Firewall | Required ports only |

::: tip
If your platform doesn't have Ubuntu 20.04 Server 64-bit image, you can download our standard image and import it to your platform.

Download link: [ubuntu-20.04-server-cloud-init-amd64.qcow2](https://downloads.oneprocloud.com/docs_images/ubuntu-20.04-server-cloud-init-amd64.qcow2)
:::

### 2. Obtain Installation Package

If the console host has direct internet access, we recommend using this method to obtain the installation package.

```sh
# Get the latest HyperBDR package URL
HYPERBDR_PACKAGE=$(curl -s -k https://install.oneprocloud.com/get_hyperbdr_latest/latest)
echo "HYPERBDR_PACKAGE: ${HYPERBDR_PACKAGE}"

# Get the corresponding MD5 file URL
HYPERBDR_PACKAGE_MD5="${HYPERBDR_PACKAGE}.md5"
echo "HYPERBDR_PACKAGE_MD5: ${HYPERBDR_PACKAGE_MD5}"

# Extract package name
HYPERBDR_PACKAGE_NAME="${HYPERBDR_PACKAGE##*/}"
echo "HYPERBDR_PACKAGE_NAME: ${HYPERBDR_PACKAGE_NAME}"

# Extract MD5 filename
HYPERBDR_PACKAGE_MD5_NAME="${HYPERBDR_PACKAGE_NAME}.md5"
echo "HYPERBDR_PACKAGE_MD5_NAME: ${HYPERBDR_PACKAGE_MD5_NAME}"

# Start download
curl -k -O "$HYPERBDR_PACKAGE"
curl -k -O "$HYPERBDR_PACKAGE_MD5"
```

#### (Optional) Offline Package Download

::: warning
Skip this step if you've already obtained the package through the online method.
:::

If the installation host cannot access the internet, you can use a browser on another device to access:

- [https://install.oneprocloud.com/get_hyperbdr_latest](https://install.oneprocloud.com/get_hyperbdr_latest)

Add `.md5` suffix to the URL to get the corresponding MD5 verification file. Then manually upload the installation package to the console host.

### 3. Verify Package Integrity (MD5)

If obtained through the online method, you can directly compare; if downloaded through a browser, you need to manually verify.

- Step 1: Generate MD5 value for the downloaded package

```sh
md5sum "$HYPERBDR_PACKAGE_NAME"
```

- Step 2: Check the MD5 value in the verification file

```sh
cat "$HYPERBDR_PACKAGE_MD5_NAME"
```

- Step 3: Compare MD5 values

If the MD5 values from Step 1 and Step 2 match, the package is intact. If they differ, try downloading again or contact our support team.

### 4. Product Installation

::: tip
Before proceeding, ensure:
1. The installation package is correctly uploaded to the target host
2. Package integrity verification is completed
3. Target host OS is Ubuntu 20.04 64-bit
4. System time is correctly synchronized
5. System firewall is properly configured
:::

- Extract the installation package

```sh
rm -rf /mnt/installer && tar -zxvf "$HYPERBDR_PACKAGE_NAME" -C /mnt/
```

#### (Method 1) Internal Network/Dedicated Line/VPN

::: warning
By default, the installation script uses the first network interface address as the platform service address.
:::

```sh
bash /mnt/installer/install.sh
```

#### (Method 2) Public Network/NAT Network

```sh
bash /mnt/installer/install.sh -i <Console Service IP>
```

::: tip
The -i parameter specifies the console's external service IP address, which is used for:
- Agent/Agentless package download
- Client-to-console communication

For example, if you specify a public IP (such as an EIP in cloud platforms), all external services will use public network addresses, including:
- Agent download links
- Source-to-Console platform communication addresses

Please carefully select the console service IP address based on your actual environment.
:::

### 5. Installation Complete

Upon successful installation, you'll see the login information:

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

#### Platform Access Points

| Console Name | Access URL | Description | Default Credentials |
|--------------|------------|-------------|---------------------|
| HyperBDR Console | `https://<Console Service IP>:10443` | Disaster Recovery Management Console | admin / P@ssw0rd |
| HyperMotion Console | `https://<Console Service IP>:20443` | Migration Management Console | admin / P@ssw0rd |
| Admin Portal | `https://<Console Service IP>:30443` | System Management Console | admin / P@ssw0rd |

## Installation Video Demo

[![asciicast](https://asciinema.org/a/686760.svg)](https://asciinema.org/a/686760)

## Reference Links

- [Get Product Support](https://support.oneprocloud.com)
