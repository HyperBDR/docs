# 目标云回切到VMware

## **场景说明**

本文档适用于将已容灾接管至云平台的业务系统，在不扩容源端生产环境计算资源的情况下，安全回切至原有VMware环境的操作流程。

以VMware环境中运行的WordPress主机为例，演示如何从目标云容灾平台完成业务回切，并确保服务恢复正常访问。

## **架构示意图**

> 容灾接管架构: 从源端生产环境容灾恢复到目标云侧

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-structurediagram-1.png)



> 容灾回切架构：从目标云侧回切到源端生产环境



![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-structurediagram-2.png)



## **操作流程**

### **将待回切主机添加至容灾平台**

"Configuration"--"Product Site"--"Failback"--"Agent"

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-1.png)

通过SSH登录待回切主机，执行Agent安装命令

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-2.png)

完成注册后，主机将显示在容灾控制台回切界面

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-3.png)

### **为VMware原主机创建快照（回切前必做）**

注意：为防止回切失败导致数据丢失，需对原VMware主机创建快照。

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-4.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-5.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-6.png)

### **下载并上传LiveCD-HyperDoor镜像至VMware**

1. 获取`Livecd-HyperDoor.iso`镜像文件

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-7.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-8.png)

* 上传至VMware集群ISO库：

进入**ISO内容库**，选择**导入项目**

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-9.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-10.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-11.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-12.png)

选定文件后点击**导入**

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-13.png)

### **使用LiveCD镜像引导主机启动**

1. 关闭主机电源，编辑设置：

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-14.png)

添加**CD/DVD光驱**设备

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-15.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-16.png)

选择已上传的ISO文件

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-17.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-18.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-19.png)

* 配置BIOS启动顺序，将光驱设为第一启动项

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-20.png)

* 启动主机，选择**光驱引导**，进入Ubuntu临时系统

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-21.png)

按 "F10"之后，在弹出的对话框里点击"Yes"&#x20;

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-22.png)

Select "Try or Install Ubuntu" ,Then wait the host boot successful

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-23.png)

**注意**：启动成功后，需手动配置IP地址（例如`192.168.7.61`），需与VMware原主机IP保持一致。

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-24.png)

配置IP地址操作命令：

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-25.png)

配置完成之后，保存退出。

执行重启网卡操作命令:

查看IP的命令：

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-26.png)

### **在容灾控制台添加过渡主机**



![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-27.png)

输入主机信息（默认密码：`Acb@132.Inst`），点击**下一步**

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-28.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-29.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-30.png)

### **配置容灾回切参数**

进入**回切设置**界面，按指引完成配置

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-31.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-32.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-33.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-34.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-35.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-36.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-37.png)

### **执行数据同步**

启动从目标云容灾环境到VMware生产环境的数据同步

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-38.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-39.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-40.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-41.png)

### **回切验证（预生产测试）**

**说明**：此步骤将在VMware中克隆主机进行测试（耗时取决于数据量大小）

1. 克隆主机：

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-42.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-43.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-44.png)

根据自己现场的环境，按照VMware给出的步骤索引执行克隆即可。

克隆成功。

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-45.png)

* 使用`LiveCD-HyperDoor.iso`引导克隆机（参考步骤3.4）

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-46.png)

* 修复系统驱动（根据实际磁盘替换`sda`）：

等待驱动修复成功。

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-47.png)

* 关闭主机，移除光驱设备后从磁盘启动

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-48.png)

主机启动成功。为该主机配置一个临时IP地址（示例：192.168.7.65）

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-49.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-50.png)

调整好业务配置，在浏览器验证wordpress服务访问。

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-51.png)



### **正式执行回切接管**

注意：在正式回切接管之前，需要停止带回切主机的业务服务，然后在容灾回切平台执行最终增量同步

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-52.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-53.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-54.png)

### **验证回切结果**

1. 确认主机正常启动且服务可用

先把回切成功的主机关机，然后把CD/DVD卸载掉，从磁盘重新引导

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-55.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-56.png)

关闭光盘引导之后，重新开机等待启动即可。

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-57.png)

成功启动

### **业务系统测试**

重新配置IP地址，通过浏览器访问WordPress验证服务状态

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-58.png)

![](./images/solution_switchbackfromthetargetcloudtothevmwareproductionenvironment-operationprocess-59.png)

**至此，VMware生产环境回切操作全部完成。**
