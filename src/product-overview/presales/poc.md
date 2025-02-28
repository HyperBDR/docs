# Proof of Concept

This document is primarily intended to describe how to provide Proof of Concept (PoC) for HyperMotion & HyperBDR before the project.

## PoC Scope Overview

| Solution Component           | In Scope                                                   |
|------------------------------|------------------------------------------------------------|
| Investigation                | - Gathering and Assessment about detail technical specification requirements |
|                              | - Information gathering & analysis                         |
| Schedule                     | - Provide PoC schedule                                     |
| Deployment                   | - Provisioning Cloud (VM)                                  |
|                              | - Setup HyperMotion & HyperBDR Server (for x VM/Server)                  |
|                              | - Setup HyperMotion & HyperBDR Agent/Agentless (for x VM/Server)        |
|                              | - Setup and Configuration Migration/DR Backup (Source VM/Server to Cloud) |
| Functional Testing           | - Data Sync
|                              | - Data Sync Policy                                            |
|                              | - Drill Testing                                            |
|                              | - (Optional) Failback Testing (for x VM/Server)           |

## HyperBDR UAT

### DR Scope

| Solution Component          | In Scope                                                                 |
|-----------------------------|--------------------------------------------------------------------------|
| Configuration               | - Configuration HyperMotion & HyperBDR                                      |
|                             | - Configuration OBS or Block storage backup mode on Cloud                |
|                             | - Configure Cloud as the Migration/DR Recovery Site                               |
| Post Deployment             | Drill & Takeover:                                                       |
|                             | - Testing Data Sync Process (Policy, Incremental)                   |
|                             | - Testing Drill & Takeover (to VM in Cloud)                              |
| Finalization                | - Hand over after deployment is ready in the production                  |

### (Optional)Failback Scope

| Solution Component          | In Scope                                                                 |
|-----------------------------|--------------------------------------------------------------------------|
| Configuration               | - Configuration HyperBDR System                                         |
|                             | - Configuration OBS or Block storage failback mode on Cloud             |
|                             | - Configure Production Site                                             |
| Post Deployment             | Failback:                                                                |
|                             | - Testing Failback Process (Full Data Transmission)                      |
|                             | - Testing Failback Recovery (to VM in source production Site)           |
| Finalization                | - Hand over after deployment is ready in the production                 |

### Out of Scope

| Solution Component         | Out of Scope                                                              |
|----------------------------|---------------------------------------------------------------------------|
| Network Configuration      | Configuration existing Backup Network and Firewall such as:            |
|                            |   • Configuration and construction of the cloud special line and the Access test (VPN and source production firewall) |
|                            |   • Configuration DR Network and Drill & Takeover Network on Cloud       |
| Business Validation        | Verify Drill & Takeover business service availability                   |
|                            | Verify Failback business service availability                          |

::: warning
Due to the critical importance of networking for cloud disaster recovery, we also aim to assist users as much as possible in completing network configurations.
:::

## Responsibility Matrix 

### Network

::: warning
This section is only applicable when users need to use an intranet for output transmission. If users are using a public network solution, they can skip this part.
:::


| No  | Item                                  | OnePro | Customer |
|-----|---------------------------------------|:--------:|:----------:|
| 1   | Cloud VPN settings(VPN Service or Open Source Solution) |Assist       | ✓         |
| 2   | Private credentails for VPN                             |Assist       | ✓         |
| 3   | Firewall Settings                     |        | ✓        |
| 4   | Connectivity Testing                  |        | ✓        |


### Drill & Takeover

| No  | Item                                  | OnePro | Customer |
|-----|---------------------------------------|:--------:|:----------:|
| 1   | On-Premises backup server / VM        |        | ✓        |
| 2   | Accessing Remote                      |        | ✓        |
| 3   | Cloud Provisioning                    | ✓      |          |
| 4   | Setup HyperMotion & HyperBDR        | ✓      |          |
| 5   | Hosts Register in Console    | ✓      |          |
| 6   | Data Sync & Policy Settings              | ✓      |          |
| 7   | Drill & Takeover                      | ✓      |          |
| 8   | Make sure host boot to login status                            | ✓  |           |
| 9   | Business System Validation                    |    |    ✓      |

### Failback

| No  | Item                                                | OnePro | Customer |
|-----|-----------------------------------------------------|:-------:|:-----------:|
| 1   | Accessing Remote                                    |       | ✓         |
| 2   | Install Agent on failback VMs on Cloud             |   ✓   |            |
| 3   | Setup HyperBDR Console                              |   ✓   |           | 
| 4   | Failback Host Register in HyperBDR Console          |   ✓   |           |
| 5   | On-Premises failback server / VM Preparations       |       |  ✓        |
| 6   | Failback Full Data Sync                             |   ✓   |           |
| 7   | Restore failback server / VM                        | ✓ |   |
| 8   | Business System Validation                    |   | ✓ |


## PoC Success Criteria

Click [here](https://docs.google.com/spreadsheets/d/1KVFaDCzFmL9xEK3hKbSYJms7NEu8GyV_CuyzdSxob4w/edit?usp=sharing) to access the complete spreadsheet. Please download and print the spreadsheet for easy confirmation of the PoC results after completion.


### PoC Success Criteria Checklist

| No  | Criteria                                      | Pass | Fail | Remarks                                          |
|-----|-----------------------------------------------|------|------|--------------------------------------------------|
|     | Success Parameter – DR Backup (for x VM/Server)    |      |      |                                                  |
| 1   | Backup process On-prems to Cloud            |      |      |                                                  |
| 2   | Configuration DR & Backup Policy            |      |      |                                                  |
| 3   | Full and Incremental Backup                 |      |      |                                                  |
| 4   | Drill Backup (to VM in Cloud)               |      |      |                                                  |
| 5   | Validity Drill business service availability in Cloud |      |      |                                                  |
|     | (Optional) Success Parameter – Failback (for x VM/Server) |      |      |                                                  |
| 1   | Failback process Cloud to On-prems          |      |      |                                                  |
| 2   | Full data transmission                      |      |      |                                                  |
| 3   | Restore failback server / VM in On-prems   |      |      |                                                  |
| 4   | Validity after failback business service availability |      |      |                                                  |

| Prepared by,            | Accepted by,            |
|-------------------------|-------------------------|
| <br><br><br><br><br>    |                         |
| e.g. MSP Company | e.g. Cusotmer Company |
