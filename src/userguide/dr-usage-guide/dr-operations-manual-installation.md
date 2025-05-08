# Quick Installation Guide

[[toc]]

## About This Document

This guide is designed for technical personnel who have a clear understanding of user requirements, use cases, and product limitations. It provides streamlined instructions for planning and deploying the product efficiently, and is suitable for both POC (Proof of Concept) and production delivery stages.

If you're already familiar with the applicable scenarios, you can jump directly to [Product Installation](#product-installation).

## Before You Begin

### 1. Understand Product Scope

This product is designed for host-level migration and disaster recovery. It supports physical machines, virtual machines, public clouds, private clouds, and hyper-converged platforms, as long as OS-level access is available.

[Compatibility Overview](../../product-overview/limitations/product-support-overview.md)

For disaster recovery use cases, confirm whether the product’s RPO and RTO align with user requirements:

[RPO & RTO Best Practices](../../product-overview/presales/hyperbdr-rpo-rto-planning-best-practices.md)

### 2. Host Environment Survey

Ensure the product meets the user’s environment requirements by performing a host-level assessment:

* [General Host Assessment](../../product-overview/presales/hyperbdr-agent-investigation.md)
* [VMware Host Assessment](../../product-overview/presales/hyperbdr-vmware-investigation.md)

### 3. Select Storage Type

The product supports two storage types: block storage and object storage. Choose based on your specific use case:

| Scenario          | Recommended Storage | Notes                                                                |
| ----------------- | ------------------- | -------------------------------------------------------------------- |
| Migration         | Block Storage       | Short RTO, suitable for limited downtime windows                     |
| Migration         | General Mode         | Broader compatibility, suitable for environments without API support |
| Disaster Recovery | Block Storage       | Low RTO, relies on cloud platform capabilities                       |
| Disaster Recovery | Object Storage      | Cost-effective, trades longer RTO for lower costs                    |

### 4. Network Planning

#### Communication Matrix

* [Object Storage Mode](../../product-overview/presales/dr-network-planning-recommendations.md#list-of-open-ports)
* [Block Storage Mode](../../product-overview/presales/dr-network-planning-recommendations.md#list-of-open-ports-1)

#### Planning Guide

[Network Planning Guide](../../product-overview/presales/dr-network-planning-recommendations.md)

## Product Installation

HyperMotion (migration) and HyperBDR (disaster recovery) are deployed using a unified offline installation package. The package must be downloaded from an internet-accessible machine, but installation can be completed in an isolated environment.

### 1. Prepare the Deployment Host

::: warning
If the host is exposed to the public internet, we strongly recommend:

1. Disabling password-based remote login; use SSH key authentication instead.
2. Restricting inbound access to trusted IP addresses only.
3. Enabling the firewall and opening only necessary ports.
:::

| Configuration | Value                      |
| ------------- | -------------------------- |
| CPU           | 8 cores                    |
| Memory        | 16 GiB                     |
| OS            | Ubuntu 20.04 Server 64-bit |
| System Disk   | 200 GB                     |

::: tip
If your platform doesn’t provide a native Ubuntu 20.04 Server image, you can download our official image:

[ubuntu-20.04-server-cloud-init-amd64.qcow2](https://downloads.oneprocloud.com/docs_images/ubuntu-20.04-server-cloud-init-amd64.qcow2)
:::

### 2. Download Installation Package

If the host can access the internet:

```sh
# Retrieve latest package URL
HYPERBDR_PACKAGE=$(curl -s -k https://install.oneprocloud.com/get_hyperbdr_latest/latest)
echo "HYPERBDR_PACKAGE: ${HYPERBDR_PACKAGE}"

# Retrieve the corresponding MD5 file
HYPERBDR_PACKAGE_MD5="${HYPERBDR_PACKAGE}.md5"
echo "HYPERBDR_PACKAGE_MD5: ${HYPERBDR_PACKAGE_MD5}"

# Extract the package name
HYPERBDR_PACKAGE_NAME="${HYPERBDR_PACKAGE##*/}"
echo "HYPERBDR_PACKAGE_NAME: ${HYPERBDR_PACKAGE_NAME}"

# Extract the MD5 file name
HYPERBDR_PACKAGE_MD5_NAME="${HYPERBDR_PACKAGE_NAME}.md5"
echo "HYPERBDR_PACKAGE_MD5_NAME: ${HYPERBDR_PACKAGE_MD5_NAME}"

# Download files
curl -k -O "$HYPERBDR_PACKAGE"
curl -k -O "$HYPERBDR_PACKAGE_MD5"
```

#### (Optional) Offline Download

::: warning
Skip this step if the package has already been downloaded.
:::

If the installation host has no internet access, use another device to visit:

* [https://install.oneprocloud.com/get\_hyperbdr\_latest](https://install.oneprocloud.com/get_hyperbdr_latest)

Add `.md5` to the URL to obtain the corresponding checksum file, then manually transfer the package to the host.

### 3. Verify Package Integrity (MD5)

To validate the installation package:

* Step 1: Generate MD5 checksum for the downloaded package:

```sh
md5sum "$HYPERBDR_PACKAGE_NAME"
```

* Step 2: Check the MD5 value in the .md5 file:

```sh
cat "$HYPERBDR_PACKAGE_MD5_NAME"
```

* Step 3: Compare values.

If the values match, the package is intact. If not, try downloading again or contact support.

### 4. Install the Product

::: tip
Before proceeding, ensure that:

1. The package has been uploaded to the host.
2. The MD5 checksum has been verified.
3. The host OS is Ubuntu 20.04 (64-bit).
4. The system time is properly synchronized.
:::

* Extract the installation package:

```sh
rm -rf /mnt/installer && tar -zxvf "$HYPERBDR_PACKAGE_NAME" -C /mnt/
```

#### Option 1: Internal Network / Private Line / VPN

::: warning
By default, the installer uses the first NIC IP as the console service IP.
:::

```sh
bash /mnt/installer/install.sh
```

#### Option 2: Public Network / NAT

```sh
bash /mnt/installer/install.sh -i <Console Service IP>
```

::: tip
Use `-i` to specify the console’s external service IP, e.g., for Agent downloads or platform communications.
If using a public IP (e.g., EIP), ensure it’s stable and properly secured.
:::

### 5. Installation Complete

Upon successful installation, you will see:

```
[INFO] --------------------------------------------------
[INFO] Congratulations! The installation of HyperBDR is complete.
[INFO]
[INFO] DR        : https://192.168.12.81:10443
[INFO] Migration : https://192.168.12.81:20443
[INFO] Admin     : https://192.168.12.81:30443
[INFO]
[INFO] Default login: admin / P@ssw0rd
[INFO]
[INFO] For help, please refer to the user manual or contact support.
[INFO] Enjoy using our product!
[INFO] --------------------------------------------------
```

#### Platform Access

| Console Name         | Access Link                          | Description                  |
| -------------------- | ------------------------------------ | ---------------------------- |
| HyperBDR Console     | `https://<Console Service IP>:10443` | Disaster Recovery Console    |
| HyperMotion Console  | `https://<Console Service IP>:20443` | Migration Management Console |
| Admin Portal Console | `https://<Console Service IP>:30443` | System Management Console    |

## (Demo) Product Installation Video

[![asciicast](https://asciinema.org/a/686760.svg)](https://asciinema.org/a/686760)

## Reference Links

* [Get Product Support](https://support.oneprocloud.com)