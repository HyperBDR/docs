### **FusionCompute**

The FusionCompute page is used to configure and manage the Huawei FusionCompute agentless (Agentless) production platform, including VRM authentication, Sync Proxy binding, and connection status monitoring.

#### **Add FusionCompute Platform**

In the left navigation bar of the console, click **"Production Site"** > **"FusionCompute"**, and click the **"Add"** button. Follow the wizard to complete platform connection.

![config-productionsite-dr-fusioncompute](../images/config-productionsite-dr-fusioncompute.png)

##### **Deploy Sync Proxy**

Import the OVA template into the FusionCompute cluster to deploy the Source Sync Proxy (Sync Proxy):

1. **Download OVA Template**:
   * Click the download link in the wizard, or download directly via the internet: <https://downloads.oneprocloud.com/proxy-agent_BaseOS.ova>
2. **Import Virtual Machine**:
   * Import the OVA file into the FusionCompute cluster, deploy one or more Source Sync Proxy virtual machines, and configure network IP addresses (recommended version: FusionCompute 8.6.0 or higher).
3. **Log in to the Virtual Machine**:
   * Log in to the newly created Sync Proxy VM. The system default initial credentials are `root` / `Acb@132.Inst`.
4. **One-Click Installation & Registration**:
   * Copy the installation command from the wizard interface, paste and execute it in the Sync Proxy terminal. Upon completion, the node will automatically register with the HyperBDR platform.

> **Note:** The recommended specification for Sync Proxy is **4 vCPU / 8 GB RAM / 50 GB Disk**. For detailed specifications and multi-node scale-out instructions, see [Source Sync Proxy](#source-sync-proxy).

* **FusionCompute Platform Usage Conditions & Limitations:**

| **Category** | **Key Requirements & Limitations** |
| :--- | :--- |
| **Prerequisites** | 1. **Install and Run Tools**: Protected VMs must have Huawei VM Tools installed and running properly; this is a prerequisite for creating CBT differential snapshots;<br>2. **Snapshot Limit**: A single VM supports up to 32 snapshots;<br>3. **VM Status**: VMs must be in "Running", "Suspended", or "Stopped" state to create snapshots. |
| **Limitations** | 1. **Unsupported Snapshot Scenarios**: VMs using shared disks, independent disks, linked clones, or template VMs do not support snapshot backups;<br>2. **CBT Failure Scenarios**: CBT will fail when a VM undergoes HA migration, snapshot restoration, disk expansion, or host reboot, requiring the system to automatically trigger a full verification scan;<br>3. **Storage Space Requirements**: The source storage pool must reserve snapshot merge buffer space during backup; a single compute node supports up to 8 concurrent backup socket connections. |

![config-productionsite-dr-fusioncompute-add](../images/config-productionsite-dr-fusioncompute-add.png)

##### **Create FusionCompute Production Platform**

1. **FusionCompute Authentication Configuration**

| **Parameter** | **Example / Format** | **Description** |
| :--- | :--- | :--- |
| **Auth Address** | `https://<VRM_IP_or_Domain>:7443` | FusionCompute VRM management node access address (default port 7443). If using a domain name, configure DNS or hosts resolution in advance. |
| **Username** | Administrator account | Administrator username with platform query and snapshot management permissions. |
| **Password** | Account password | Password used to connect to FusionCompute. |
| **Source Sync Proxy** | Select from dropdown | Select the deployed Source Sync Proxy node from the dropdown list. |

2. **Network Policy Requirements**

| **Source** | **Target** | **Port / Protocol** | **Description** |
| :--- | :--- | :--- | :--- |
| Sync Proxy | FusionCompute VRM Management Node | 7443 / TCP | Management authentication and snapshot API communication |
| Sync Proxy | CNA Compute Nodes | 21064 / TCP | Data stream channel. Used to read VM disk data directly from compute node underlying storage. Ensure connectivity to port 21064 on all relevant compute nodes. |

After confirming all configurations are correct, click **"Confirm"** to submit.

![config-productionsite-dr-fusioncompute-add-next](../images/config-productionsite-dr-fusioncompute-add-next.png)

##### **Complete FusionCompute Addition**

After adding, return to the FusionCompute production platform list. Wait until the platform status becomes **"Normal"** and the number of cluster hosts and virtual machines is successfully retrieved, indicating a successful connection.

> **Note:**
> * Repeat the above steps to add multiple FusionCompute clusters or standalone sites.

![config-productionsite-dr-fusioncompute](../images/config-productionsite-dr-fusioncompute.png)
#### **Action**

In the FusionCompute production platform list, click the **"Action"** dropdown menu on the right side of the target platform row to perform operations such as **Settings**, **Bind**, **Unbind**, **Reload Virtual Machine**, **Modify Authentication Information**, and **Delete**. For detailed instructions, refer to [Production Site Management](#production-site-management).

---
