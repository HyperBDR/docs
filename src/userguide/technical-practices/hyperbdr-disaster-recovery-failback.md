# Cloud Failback to VMware

## **Scene description**

This document is applicable to the operation process of safely switching back to the original VMware environment for business systems that have taken over disaster recovery to the Cloud Computing Platform without expanding the computing resources of the source production environment.

Using a WordPress host running in a VMware environment as an example, demonstrate how to complete the business failback from the cloud disaster recovery platform and ensure normal service access is restored.

## Architecture diagram

> Disaster recovery takeover architecture : disaster recovery from the source production environment to the target cloud

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-60.png)

> Disaster recovery failback architecture: failback from the target cloud to the source production environment

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-61.png)



## Operation process

### **Add the host to be failback to the disaster recovery platform**

"Configuration"--"Product Site"--"Failback"--"Failback Agent"--"Copy command"

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-1.png)

Log in to the host to be failback through SSH and execute the Agent installation command

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-2.png)

After completing registration, the failback host will be displayed in the disaster recovery Console

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-3.png)

### **Create a snapshot for the VMware original host (must be done before failback)**

Note: To prevent data loss caused by a failback failure, a snapshot of the original VMware host needs to be created.

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-4.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-5.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-6.png)

### **Download and upload LiveCD-HyperDoor mirroring to VMware**

Get the `Livecd-HyperDoor.iso `mirroring file

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-7.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-8.png)

Upload to VMware cluster ISO library:

Go to the **ISO content library&#x20;**&#x61;nd select **Import Item**

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-9.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-10.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-11.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-12.png)

Select the file and click **Import**

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-13.png)

### **Boot host using LiveCD mirroring**

Turn off the host power and edit the settings.

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-14.png)

Add **CD/DVD drive&#x20;**&#x64;evice

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-15.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-16.png)

Select the uploaded ISO file

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-17.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-18.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-19.png)

Configure the BIOS boot sequence and set the CD drive as the first boot item

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-20.png)

Start the host, select the **CD-ROM boot&#x20;**, and enter the Ubuntu temporary system

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-21.png)

After pressing "F10", click "Yes" in the dialog box that pops up.

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-22.png)

Select "Try or Install Ubuntu" ,Then wait the host boot successful

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-23.png)

**Note&#x20;**: After successful startup, you need to manually configure the IP Address (such as `192.168.7.61 `) to be consistent with the VMware original host IP.

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-24.png)

Configure IP Address Operation Command:

cp /etc/netplan/00-installer-config.yaml.bak /etc/netplan/00-installer-config.yaml
vi /etc/netplan/00-installer-config.yaml

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-25.png)

After the configuration is complete, save and exit.

Execute the command to restart the network interface card operation.

netplan apply&#x20;

Command to view IP:

ip a s

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-26.png)

### Add a failback transition host in the DR console

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-27.png)

Enter the host information (default password: `Acb@132.Inst `) and click **Next**

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-28.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-29.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-30.png)

### **Configuring disaster recovery failback parameters**

Enter the "Setup failback"**&#x20;**&#x69;nterface and follow the instructions to complete the configuration

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-31.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-32.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-33.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-34.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-35.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-36.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-37.png)

### **Performing data synchronization**

Initiate data synchronization from the target cloud disaster recovery environment to the VMware production environment

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-38.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-39.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-40.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-41.png)

### Failbac&#x6B;**&#x20;verification (pre-production testing)**

**Description&#x20;**: This step will clone the host in VMware for testing (time depending on the amount of data)

Clone host:

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-42.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-43.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-44.png)

According to your own on-site environment, follow the steps indexed by VMware to perform cloning.

Cloning is successful.

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-45.png)

Boot the clone host using `LiveCD-HyperDoor.iso `(refer to step 3.4)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-46.png)

Repair system driver (replace `sda`according to actual disk):

minitgt-fix /dev/sda&#x20;

Wait for the driver repair to succeed.

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-47.png)

Shut down the host, remove the optical drive device and boot from the disk

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-48.png)

Host started successfully. Configure a temporary IP Address for this host (Example: 192.168.7.65)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-49.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-50.png)

Adjust the business configuration and verify WordPress service access in the browser.

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-51.png)



### **Formal implementation of failback takeover**

Note: Before the formal failback takeover, the business service of the failback host needs to be stopped, and then the final incremental synchronization needs to be performed on the disaster recovery failback platform

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-52.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-53.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-54.png)

### **Verify Failback Results**

Confirm that the host is starting normally and the service is available

First, shut down the failback target machine, then uninstall the CD/DVD and reboot from the disk

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-55.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-56.png)

After closing the CD boot, reboot and wait for startup.

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-57.png)

Successfully launched

### **Business system testing**

Reconfigure IP Address to verify service status by accessing WordPress via browser

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-58.png)

![](./images/hyperbdrdisasterrecoveryfailback-operationprocess-59.png)

**At this point, the VMware production environment failback operation is complete.**
