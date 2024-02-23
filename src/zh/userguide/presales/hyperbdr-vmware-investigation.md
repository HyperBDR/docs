# 源端VMware主机快速调研

本文档主要用于指导用户场景的初步调查，以确定用户场景是否在产品支持的早期阶段。

## Investigation Steps

### Host Information Collection

> Why we need this infromation? Investigate your VMware host information to assist us in analyzing whether your operating system type is compatible with HyperBDR for protection, and to determine how to effectively utilize cloud resources to provide protection for your system.

After these steps, you will get a csv file, please send back to us.

#### Login vCenter

![hyperbdr-vmware-investigation-1.png](./images/hyperbdr-vmware-investigation-1.png)

#### Menu->Global Inventory Lists

![hyperbdr-vmware-investigation-2.png](./images/hyperbdr-vmware-investigation-2.png)

#### Virtual Machines

![hyperbdr-vmware-investigation-3.png](./images/hyperbdr-vmware-investigation-3.png)

#### Export

![hyperbdr-vmware-investigation-4.png](./images/hyperbdr-vmware-investigation-4.png)

#### Select [All rows] and [All Columns]

![hyperbdr-vmware-investigation-5.png](./images/hyperbdr-vmware-investigation-5.png)

Exporting

![hyperbdr-vmware-investigation-6.png](./images/hyperbdr-vmware-investigation-6.png)

## FAQ

### The export operation has been blocked

![hyperbdr-vmware-investigation-7.png](./images/hyperbdr-vmware-investigation-7.png)

![hyperbdr-vmware-investigation-8.png](./images/hyperbdr-vmware-investigation-8.png)

![hyperbdr-vmware-investigation-9.png](./images/hyperbdr-vmware-investigation-9.png)

After the configuration is complete, it is necessary to perform a page reload operation.
