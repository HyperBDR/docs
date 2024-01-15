## Huawei Cloud platform account quota check

During the disaster recovery process, it is essential to ensure that the cloud account has sufficient resource quotas to support data synchronization and disaster recovery recovery. To prevent potential failure of disaster recovery due to insufficient quotas, it is necessary to perform a resource quota check before initiating the disaster recovery.

If the remaining quota in the Huawei Cloud account is insufficient, it is necessary to clean up unnecessary resources in the account or apply for an expansion of Huawei Cloud resource quotas.

### Source host resource inventory

Need to gather information on the computing and storage resources for the host systems awaiting disaster recovery and input the details into a table.


| The total number of source host  |  |
| --- | --- |
| The total number of source host CPU |  |
| The total number of source host RAM(MB) |  |
| The total number of source host disks |  |
| The total disk capacity for source host(GB) |  |

### Huawei Cloud account resource quota check

#### Login Huawei Cloud

![huawei-cloud-platform-account-quota-check-1.png](./images/huawei-cloud-platform-account-quota-check-1.png)

#### View resource quotas

Access the CDN Console, select 'Resources' > 'My Quotas'. The system will navigate to the 'Quotas' page.

![huawei-cloud-platform-account-quota-check-2.png](./images/huawei-cloud-platform-account-quota-check-2.png)

![huawei-cloud-platform-account-quota-check-3.png](./images/huawei-cloud-platform-account-quota-check-3.png)

![huawei-cloud-platform-account-quota-check-4.png](./images/huawei-cloud-platform-account-quota-check-4.png)


#### Compile your Huawei Cloud account resource quotas and calculate the remaining quota

Access the CDN Console, select 'Resources' > 'My Quotas'. The system will navigate to the 'Quotas' page.

![huawei-cloud-platform-account-quota-check-5.png](./images/huawei-cloud-platform-account-quota-check-5.png)

![huawei-cloud-platform-account-quota-check-6.png](./images/huawei-cloud-platform-account-quota-check-6.png)

![huawei-cloud-platform-account-quota-check-7.png](./images/huawei-cloud-platform-account-quota-check-7.png)


| Service | Resources Type | Used Quota | Total Quota | Residual Quota |
| --- | --- | --- | --- | --- |
| Elastic Cloud Server | ECSs |  |  |  |
| Elastic Cloud Server | vCPUs |  |  |  |
| Elastic Cloud Server | Memory (MB) |  |  |  |
| Image Management Service | Images |  |  |  |
| Elastic Volume Service | Disks |  |  |  |
| Elastic Volume Service | Disk capacity(GB) |  |  |  |
| Virtual Private Cloud | Elastic IP addresses |  |  |  |

#### Compare the remaining quota with the resources of the source hosts

Compare the resource levels of the source hosts, as per your inventory, with the remaining resource quota in your Huawei Cloud account to assess whether it meets the requirements for disaster recovery.

> **Elastic Cloud Server: ECSs** Residual Quota ≥ The total number of source host 
> **Elastic Cloud Server: vCPUs **Residual Quota ≥ The total number of source host CPU
> **Elastic Cloud Server: Memory (MB)** Residual Quota ≥ The total number of source host RAM(MB)
> **Elastic Volume Service: Disk **Residual Quota** **≥ The total number of source host disks
> **Elastic Volume Service: Disk capacity(GB)** Residual Quota ≥ The total disk capacity for source host(GB)
> **Image Management Service: Images**  Residual Quota ≥ 2
> **Virtual Private Cloud: Elastic IP addresses** Residual Quota Satisfying the required number of public IP addresses for the disaster recovery hosts to be restored to the Huawei Cloud platform is sufficient.

If it is discovered that the remaining resource quota in the Huawei Cloud account is insufficient, it is necessary to clean up unnecessary resources in the account or apply to Huawei Cloud for an expansion of resource quotas.

### Increase quotas in your Huawei Cloud account.

If it is discovered that the remaining resource quota in the Huawei Cloud account is insufficient, and there are no resources to clean up in the account, you can try submitting a Huawei Cloud ticket to request an expansion of resource quotas. 

In the 'Quotas' page, click on 'Increase', and fill out the Huawei Cloud Ticket.

![huawei-cloud-platform-account-quota-check-8.png](./images/huawei-cloud-platform-account-quota-check-8.png)

![huawei-cloud-platform-account-quota-check-9.png](./images/huawei-cloud-platform-account-quota-check-9.png)

After completing the form, check the agreement box and click 'Submit.' Wait and monitor the response from the Huawei Cloud Ticket for information regarding the increase quotas.

