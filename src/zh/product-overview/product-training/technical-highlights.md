# 技术亮点

## 实现

迁移/灾难恢复的过程可以简化为三个主要步骤：同步数据、存储数据，并在需要时恢复数据，比如恢复主机。

![Implementation](./images/technical-highlights-implementation.png)

云迁移平台（HyperMotion）和云容灾平台（HyperBDR）解决了以下关键挑战：

* 获取数据：由于云迁移平台（HyperMotion）与云容灾平台（HyperBDR）专注于保护主机，主要任务是确定如何从系统中获取数据，特别是在基础层面。
* 正确存储数据：云迁移平台（HyperMotion）与云容灾平台（HyperBDR）专为云平台设计，确保数据以合理的方式存储在云服务中，为快速恢复做好准备。
* 实现一体化：与传统的系统设置不同，云平台可以轻松进行编排。云迁移平台（HyperMotion）与云容灾平台（HyperBDR）充分利用这一能力，迅速恢复业务系统。
* 简化学习：云迁移平台（HyperMotion）与云容灾平台（HyperBDR）提供易于使用的界面，简化用户操作，降低学习曲线。

## 块级全量增量复制技术

让我们深入了解云迁移平台（HyperMotion）和云容灾平台（HyperBDR）如何读取和存储数据。

![Block-level full incremental replication technology](./images/technical-highlights-block-level-sync.png)

如前所述，为实现主机级备份和恢复，云迁移平台（HyperMotion）和云容灾平台（HyperBDR）采用块级数据同步，这意味着它可以通过这种方法备份主机上所有磁盘的数据。需要注意的是，这些磁盘不包括网络磁盘，如NFS。

确定同步级别后，接下来是解决数据同步的问题，特别是获取完整数据和增量数据。

在云迁移平台（HyperMotion）与云容灾平台（HyperBDR）中，主要有三种数据同步方式：

- 对于Agent同步，增量数据主要通过内核模块I/O捕获技术获取。
- 对于VMware平台，主要利用CBT技术捕获用户的增量数据。
- 对于使用Ceph存储的OpenStack平台，我们通过RBD接口获取数据。

在块存储模式下，数据直接写入云平台块存储的相应位置。

如前所述，在数据同步过程中，云迁移平台（HyperMotion）与云容灾平台（HyperBDR）会直接将从源主机捕获的数据存储到云存储中。具体而言，在块存储模式下，数据通过云同步网关（Cloud Sync Gateway）直接写入云平台的块存储相应位置。最后，通过调用云平台的块存储快照接口，锁定每次同步后的数据。

这种方法的优势在于，在数据同步阶段，无需建立源主机和目标主机之间的一对一映射。只需适当数量的云同步网关和相应的磁盘即可。

一个常见问题是，在数据同步过程中，我需要多少个云同步网关（Cloud Sync Gateway）？

首先，云同步网关（Cloud Sync Gateway）的数量与生产环境主机的数量并无直接关系。 其次，云同步网关上挂载的磁盘数量与生产环境主机的总磁盘数量一一对应。例如，如果源端有10台主机，每台主机有两个磁盘，那么在华为云上只需要一个云同步网关（Cloud Sync Gateway），因为华为云上的每台云主机可以挂载20个磁盘。

在对象存储模式下，数据被划分为默认4MB大小的区域。当检测到某一特定区域的变化时，该区域的数据会存储在对象存储中，而对应的元数据存储在云迁移平台（HyperMotion）与云容灾平台（HyperBDR）中。由于对象存储的访问接口本身使用HTTP，因此无需额外的计算资源来进行存储。

## Boot-in-Cloud

Boot-in-Cloud是云迁移平台（HyperMotion）和云容灾平台（HyperBDR）独特的技术，通过全面利用云API的编排能力和驱动适配能力，实现一键主机启动功能。

![Boot in Cloud](./images/technical-highlights-boot-in-cloud.png)

在块存储模式下，启动过程包括以下步骤：

首先，需要将块存储快照恢复到卷，并修复系统启动磁盘的驱动。最终恢复主机时，由于每个云平台使用的方法略有不同，例如，在华为云上，可以通过交换系统磁盘和数据磁盘来实现启动。最终的主机启动过程会根据灾难恢复配置中指定的规格、卷类型、启动磁盘、网络等信息完成。

在对象存储模式下，启动过程稍有不同：

首先，目标平台需要上传两种自定义类型的镜像，一种用于Linux系统，一种用于Windows系统。在对象存储主机启动过程中，首先启动一个临时恢复主机，并创建和挂载相应的磁盘。然后，将数据从对象存储恢复到块存储，并进行驱动修复过程。 完成后，临时主机将自动重启，一旦重启完成，主机启动也就完成。

## Boot-in-Cloud深入解析

在Boot-in-Cloud过程中，驱动适配是一个关键步骤，也是云迁移平台（HyperMotion）和云容灾平台（HyperBDR）能够成功恢复不同平台主机的关键因素。

![Boot in Cloud In-Depth](./images/technical-highlights-boot-in-cloud-in-depth.png)

驱动适配主要包括以下内容：

* 不同平台驱动适配：例如，当从VMware平台迁移到KVM平台时，需要注入virtio相关驱动程序，以确保主机能够正确启动，网络功能正常。
* 从UEFI到BIOS的启动转换：由于云平台对UEFI启动的支持有限，如果源系统使用的是UEFI启动，需要在云端自动转换为BIOS启动。
* 网络配置：由于大多数云平台使用DHCP进行地址分配，而传统环境通常使用静态IP地址，因此在启动过程中需要调整网络配置。
* 配置文件修改：主要是确保符合目标云平台的操作要求。例如，在将VMware主机恢复到云平台后，可能需要禁用vmware-tools等操作。
* 驱动修复涉及多个任务，在此不一一列举。与其他灾难恢复软件不同，云迁移平台（HyperMotion）和云容灾平台（HyperBDR）的驱动修复发生在事后。无论是Agent模式还是Agentless模式，源生产环境主机上都不会提前安装或注入驱动或配置，旨在最大程度减少对源生产环境的影响。

## 向导式最简操作

尽管其底层逻辑复杂，但云迁移平台（HyperMotion）与云容灾平台（HyperBDR）通过将复杂的过程抽象为三个简单的步骤，简化了用户体验：选择主机、配置灾难恢复、启动恢复。

![HyperMotion & HyperBDR Wizard](./images/technical-highlights-wizard-ui.png)

通过这三步，用户几乎可以完全通过云迁移平台（HyperMotion）或云容灾平台（HyperBDR）的图形用户界面（GUI）完成所有操作流程，无需频繁登录生产环境和目标云平台。