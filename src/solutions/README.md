# HyperBDR VMware Investigation

## About Investigation
This document is primarily designed to guide the initial investigation of user scenarios to determine whether they fall within the scope of product support during the early stages.
## Investigation Steps
### Step1 - Host Information Collection
> Why we need this infromation?
> Investigate your VMware host information to assist us in analyzing whether your operating system type is compatible with HyperBDR for protection, and to determine how to effectively utilize cloud resources to provide protection for your system.

After these steps, you will get a csv file, please send back to us.
#### Login vCenter
![](./images/hyperbdr-vmware-investigation-1.png)
#### Menu->Global Inventory Lists
![image.png](https://cdn.nlark.com/yuque/0/2023/png/759715/1701161398995-e2319e1c-ed7b-42b9-b4a4-8a52bb35108c.png#averageHue=%23f9f8f8&clientId=ue9479982-5c1c-4&from=paste&height=782&id=uf92d0cb2&originHeight=1564&originWidth=2878&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1110907&status=done&style=none&taskId=u05c409a3-a9a9-4e6b-80c5-4ccdd27de6e&title=&width=1439)
#### Virtual Machines
![image.png](https://cdn.nlark.com/yuque/0/2023/png/759715/1701161486263-f3ed56fc-c82d-414a-9fd4-ca4aebad79f2.png#averageHue=%23f9f9f8&clientId=ue9479982-5c1c-4&from=paste&height=781&id=u91cf2df4&originHeight=1562&originWidth=2878&originalType=binary&ratio=2&rotation=0&showTitle=false&size=843362&status=done&style=none&taskId=u18f03613-ce5d-4c9d-b32d-6cc5d9af996&title=&width=1439)
#### Export
![image.png](https://cdn.nlark.com/yuque/0/2023/png/759715/1701161601227-f9f4875d-7fa9-4277-b152-d863b40f0fba.png#averageHue=%23faf9f8&clientId=ue9479982-5c1c-4&from=paste&height=782&id=ue284c3e5&originHeight=1564&originWidth=2876&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1016266&status=done&style=none&taskId=uab9b1bfa-d13c-4474-abdb-6e976f45a29&title=&width=1438)
#### Select [All rows] and [All Columns]
![image.png](https://cdn.nlark.com/yuque/0/2023/png/759715/1701161642534-897fc912-77ad-4707-b766-f3a9714586f6.png#averageHue=%23e9e8e8&clientId=ue9479982-5c1c-4&from=paste&height=637&id=uff6e70ad&originHeight=1274&originWidth=1252&originalType=binary&ratio=2&rotation=0&showTitle=false&size=198607&status=done&style=none&taskId=u36d281a0-c711-4f35-83fc-13b4278186b&title=&width=626)
Exporting
![image.png](https://cdn.nlark.com/yuque/0/2023/png/759715/1701161695661-af3242a9-545b-4e57-b782-e3a4a18cda2c.png#averageHue=%23f0efef&clientId=ue9479982-5c1c-4&from=paste&height=629&id=ue55f3fc9&originHeight=1258&originWidth=1202&originalType=binary&ratio=2&rotation=0&showTitle=false&size=199128&status=done&style=none&taskId=u4f0fcf14-1b43-4bf9-b077-9a4d999d080&title=&width=601)
#### 
### Step2 - RPO/RTO Requirements
> What is RPO and RTO?
> RTO: The maximum length of an application outage before business operations experience considerable damage.
> RPO: The amount of data loss that can occur before a company experiences substantial operational or financial repercussions.

| Item | Requirement |
| --- | --- |
| RPO(Recovery point objective) |  |
| RTO(Recovery time objectives) |  |

### Egress Bandwidth
| Item | Requirement(Mbps) |
| --- | --- |
| Egress Bandwidth |  |

## FAQ
### The export operation has been blocked
![image.png](https://cdn.nlark.com/yuque/0/2023/png/759715/1701161713843-0e68b6ac-9a2a-4c9e-b405-7614cb1fb856.png#averageHue=%23dddddd&clientId=ue9479982-5c1c-4&from=paste&height=232&id=zzRF6&originHeight=464&originWidth=1214&originalType=binary&ratio=2&rotation=0&showTitle=false&size=83396&status=done&style=none&taskId=uc80d591d-3d88-4c06-a598-03a2529bc10&title=&width=607)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/759715/1701161929774-5949430a-4b90-4068-bc31-0db0d04bd6c8.png#averageHue=%23f9f7f6&clientId=ue9479982-5c1c-4&from=paste&height=899&id=kGrNe&originHeight=1798&originWidth=2876&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1291994&status=done&style=none&taskId=ufdd61616-848a-4b34-8a30-7963d834ca3&title=&width=1438)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/759715/1701161965751-37924d03-8426-48cf-a6d6-3d8d4b68e0db.png#averageHue=%23fdfcfc&clientId=ue9479982-5c1c-4&from=paste&height=856&id=jakzf&originHeight=1712&originWidth=2878&originalType=binary&ratio=2&rotation=0&showTitle=false&size=636332&status=done&style=none&taskId=u07b8de52-71d8-45c6-9c80-f6c3dba9f0b&title=&width=1439)
After the configuration is complete, it is necessary to perform a page reload operation.

