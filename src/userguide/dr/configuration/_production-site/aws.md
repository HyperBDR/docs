### **AWS**

The AWS page is used to configure and manage the AWS agentless (Agentless) production platform, including IAM credentials, region selection, Sync Proxy binding, and connection status monitoring.

#### **Add AWS Platform**

In the left navigation bar of the console, click **"Production Site"** > **"AWS"**, and click the **"Add"** button. Follow the wizard to complete platform connection.

![config-productionsite-dr-aws](../images/config-productionsite-dr-aws.png)

##### **Deploy Sync Proxy**

Launch an EC2 instance in the target AWS Region to deploy the Source Sync Proxy (Sync Proxy):

1. **Launch EC2 Instance**:
   * In the AWS EC2 console, launch an instance using the official native **Ubuntu 24.04 LTS** image (recommended instance types such as `t3.xlarge` / `c6i.xlarge` or meeting the **4 vCPU / 8 GB RAM / 50 GB Disk** specification).
2. **Configure Network & Security Group**:
   * Ensure the instance can access the HyperBDR Console (ports 10443 and 30080) and has outbound access to AWS service endpoints (port 443).
3. **One-Click Installation & Registration**:
   * Log in to the EC2 instance, paste and execute the installation command provided in the wizard terminal. Upon completion, the instance will automatically register with the platform as a Sync Proxy.

> **Note:** For detailed specifications and network planning, see [Source Sync Proxy](#source-sync-proxy).

![config-productionsite-dr-aws-add](../images/config-productionsite-dr-aws-add.png)

##### **Create AWS Production Platform**

1. **AWS Authentication Information Configuration**

| **Parameter** | **Example / Format** | **Description** |
| :--- | :--- | :--- |
| **Access Key ID** | `AKIAIOSFODNN7EXAMPLE` | AWS IAM user access key ID with necessary permissions. |
| **Secret Access Key** | `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY` | Secret access key paired with the Access Key ID. |
| **Region** | `ap-southeast-1` | AWS Region where the target EC2 instances are located (select from dropdown or enter manually). |
| **Source Sync Proxy** | Select from dropdown | Select the deployed Source Sync Proxy EC2 instance from the dropdown list. |
| **Platform Name** | Custom name (optional) | Identifier name for the production platform, supporting custom input or system auto-generation. |

2. **Network Policy & Endpoint Requirements**

| **Source** | **Target** | **Port / Protocol** | **Description** |
| :--- | :--- | :--- | :--- |
| Sync Proxy | AWS EC2 / EBS Service Endpoints | 443 / TCP (HTTPS) | Interacting with the AWS control plane and reading snapshot block data via EBS Direct APIs.<br>+ **Public Network Access**: Assign an EIP to the Sync Proxy and allow outbound port 443 in the security group;<br>+ **Private Network / Direct Connect / VPC**: Configure VPC Endpoints for EC2 and EBS within the VPC for high-efficiency internal transmission without public IPs. |

3. **IAM Permission Policy Requirements**

When calling AWS EBS Direct APIs for agentless snapshot differential backups, the IAM account must be granted minimum permissions for EC2, EBS snapshot read/write, and related resources. For detailed IAM Policy configuration, see [AWS IAM Preparation Guide](https://docs.oneprocloud.com/userguide/poc/aws-pre-settings.html#aws-iam-preparation).

After confirming all configurations are correct, click **"Confirm"** to submit.

![config-productionsite-dr-aws-add-next](../images/config-productionsite-dr-aws-add-next.png)

##### **Complete AWS Addition**

After adding, return to the AWS production platform list. Wait until the platform status becomes **"Normal"** and the total number of managed EC2 instances in the target Region is retrieved, indicating a successful connection.

> **Note:**
> * To protect workloads across multiple AWS Regions or different AWS accounts, repeat the steps above to add each environment independently.

![config-productionsite-dr-aws](../images/config-productionsite-dr-aws.png)
#### **Action**

In the AWS production platform list, click the **"Action"** dropdown menu on the right side of the target platform row to perform operations such as **Settings**, **Bind**, **Unbind**, **Reload Virtual Machine**, **Modify Authentication Information**, and **Delete**. For detailed instructions, refer to [Production Site Management](#production-site-management).

---
