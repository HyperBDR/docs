# **Console**



The Console supports online upgrades, with a smooth process that preserves configuration files and data, suitable for daily version maintenance, feature enhancements, and issue fixes, ensuring continuous and stable operation of the system.&#x20;



## **Upgrade Preparation**



### **Overall Upgrade**



Before starting the operation, please be sure to contact the project owner or directly visit the official OnePro online docs website to obtain the latest installation package to complete the subsequent upgrade.[Click to Get Installation Package](../../../userguide/installation/quick-installation.md#_2-obtain-installation-package)



* Upload the installation package to the server

* Unzip to the specified directory, for example:

```plain&#x20;text
tar -zxvf <update-package>.tar.gz -C /path
```

### **Single module upgrade**



Before starting, please contact the project owner to obtain the latest module package to complete subsequent upgrade operations.



* Upload the installation package to the server

* Create update package directory

```plain&#x20;text
mkdir -p /root/upgrade_$(date +%Y%m%d)
```

* Upload the update package to the newly created directory

## **Execute Upgrade**



### **Overall Upgrade**



* Execute the upgrade command, and the system will automatically load the update content into the running directory `/opt/installer/production/venvs`:&#x20;

```plain&#x20;text
cd /opt/installer/production/scripts
./hmctl upgrade /path/installer/venvs
```



### **Single module upgrade**



* Execute the upgrade command, and the system will automatically load the update content into the running directory `/opt/installer/production/venvs`:&#x20;

```plain&#x20;text
cd /opt/installer/production/scripts
./hmctl upgrade /root/upgrade_$(date +%Y%m%d)/
```

