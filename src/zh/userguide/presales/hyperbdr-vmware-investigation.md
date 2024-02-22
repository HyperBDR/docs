# 源端VMware主机快速调研"

This document is primarily designed to guide the initial investigation of user scenarios to determine whether they fall within the scope of product support during the early stages.

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
