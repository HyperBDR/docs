 # SaaS Network Communication
 ## Overview of network communication for SaaS disaster recovery and migration

 High availability and data protection are critical for modern business systems. Our SaaS disaster recovery product delivers unified continuity and data protection from the cloud, enabling fast recovery of critical systems when failures occur on-premises or in the cloud.

 HyperBDR/HyperMotion is an internet-facing SaaS operated by OnePro that maintains live cloud connections with customer environments. Therefore, production environments must allow outbound internet access or use approved networking methods (proxy, VPN, dedicated line) to reach the service. Proper network design is essential to ensure reliable and efficient disaster recovery workflows. This document summarizes network best practices for SaaS disaster recovery, covering access control, ports and protocols, and isolation to help organizations achieve secure and stable data sync and failover between cloud and on-premises environments.

 Advantages:

 * No local deployment required: lower hardware cost and simpler onboarding — only outbound internet access is needed to use the service.
 * Faster updates and maintenance: the SaaS platform can deliver patches and updates centrally to keep systems current and secure.
 * Geo-redundant disaster recovery: internet connectivity enables cross-region protection and reduces on-prem network and operations costs.

 Limitations:

 * Strong network dependency: control and data flows rely on the public network; instability or limited bandwidth can affect responsiveness.
 * Compliance constraints: some industries restrict public transfer of sensitive data and may require private or on-prem deployments.

 ## Deployment Solution for Object Storage

 ### List of Open Ports

 #### Agent

 Agent deployment supports both Windows and Linux agents.

 | No. | Source            | Destination        | Direction | Port        | Type        | Notes                                                                                               |
 | --- | ----------------- | ------------------ | --------- | ----------- | ----------- | --------------------------------------------------------------------------------------------------- |
 | 1   | Agent             | HyperBDR Console   | Outbound  | 443 / 30080 | Control Flow (public) | Agent requires outbound internet access. Allow agents to reach HyperBDR/HyperMotion endpoints.     |
 | 2   | Agent             | Object Storage     | Outbound  | 443         | Data Flow         | Data traffic can use public network or be routed over VPN/dedicated lines for private transfer.     |
 | 3   | HyperBDR Console  | Object Storage     | Outbound  | 443         | Control Flow (public) | —                                                                                                 |
 | 4   | HyperBDR Console  | Transition Host    | Outbound  | 10729       | Control Flow (public) | A temporary cloud host created by HyperBDR/HyperMotion for driver repair and image creation. Security groups and ports are created automatically. |
 | 5   | HyperBDR Console  | Cloud API          | Outbound  | 443         | Control Flow (public) | —                                                                                                 |
 | 6   | Transition Host   | Object Storage     | Outbound  | 443         | Data Flow         | The temporary host is created and removed automatically; security groups and ports are handled by the platform. |

 #### Agentless

 The example below uses VMware agentless (Sync Proxy); refer to [Network Planning Overview](https://docs.oneprocloud.com/product-overview/presales/dr-network-planning-recommendations.html#deployment-solution-for-object-storage) for other platforms.

 | No. | Source      | Destination      | Direction | Port        | Type        | Notes                                                                                          |
 | --- | ----------- | ---------------- | --------- | ----------- | ----------- | ---------------------------------------------------------------------------------------------- |
 | 1   | Sync Proxy  | vCenter          | Outbound  | 443         | Control Flow (public) | —                                                                                              |
 | 2   | Sync Proxy  | ESXi             | Outbound  | 902         | Data Flow         | Required for ESXi hosts managed by vCenter (port 902).                                         |
 | 3   | Sync Proxy  | HyperBDR Console | Outbound  | 443 / 30080 | Control Flow (public) | Sync Proxy needs outbound internet access to reach HyperBDR/HyperMotion endpoints.             |
 | 4   | Sync Proxy  | Object Storage   | Outbound  | 443         | Data Flow         | Data traffic may use public or private networks (VPN/dedicated line) depending on the setup.    |
 | 5   | HyperBDR Console | Object Storage | Outbound  | 443         | Control Flow (public) | —                                                                                              |
 | 6   | HyperBDR Console | Transition Host | Outbound  | 10729       | Control Flow (public) | A temporary cloud host created automatically; security groups and ports are managed by the platform. |
 | 7   | HyperBDR Console | Cloud API      | Outbound  | 443         | Control Flow (public) | —                                                                                              |
 | 8   | Transition Host | Object Storage | Outbound  | 443         | Data Flow         | The temporary host is removed automatically after use; ports are managed by the platform.        |

 ### Deployment architecture

 #### SaaS

 ![](./images/bestpracticesfornetworkcommunicationinsaasmodel-objectstoragesolution-1.png)

 ## Deployment Solution for Block Storage

 ### List of Open Ports

 #### Agent

 Agent deployment supports both Windows and Linux agents.

 | No. | Source            | Destination         | Direction | Port                  | Type        | Notes                                                                                             |
 | --- | ----------------- | ------------------- | --------- | --------------------- | ----------- | ------------------------------------------------------------------------------------------------- |
 | 1   | Agent             | HyperBDR Console    | Outbound  | 443 / 30080           | Control Flow (public) | Agent requires outbound internet access. Allow agents to reach HyperBDR/HyperMotion endpoints.   |
 | 2   | Agent             | Cloud Sync Gateway  | Outbound  | 13260                 | Data Flow         | Data traffic can use public network or be routed over VPN/dedicated lines for private transfer.   |
 | 3   | HyperBDR Console  | Cloud Sync Gateway  | Outbound  | 22 / 10729 / 16100    | Control Flow (public) | —                                                                                               |
 | 4   | Cloud Sync Gateway| HyperBDR Console    | Outbound  | 443 / 30080           | Control Flow (public) | Temporary hosts used for driver repair and image creation are created automatically; change internal port 10443 to 443 if required. |
 | 5   | HyperBDR Console  | Cloud API           | Outbound  | 443                   | Control Flow (public) | —                                                                                               |

 #### Agentless

 The example below uses VMware agentless (Sync Proxy); refer to [Network Planning Overview](https://docs.oneprocloud.com/product-overview/presales/dr-network-planning-recommendations.html#deployment-solution-for-block-storage) for other platforms.

 | No. | Source            | Destination         | Direction | Port                  | Type        | Notes                                                                                         |
 | --- | ----------------- | ------------------- | --------- | --------------------- | ----------- | --------------------------------------------------------------------------------------------- |
 | 1   | Sync Proxy        | vCenter             | Outbound  | 443                   | Control Flow (public) | —                                                                                             |
 | 2   | Sync Proxy        | ESXi                | Outbound  | 902                   | Data Flow         | All ESXi hosts managed by vCenter require port 902.                                           |
 | 3   | Sync Proxy        | HyperBDR Console    | Outbound  | 443 / 30080           | Control Flow (public) | Sync Proxy needs outbound internet access to reach HyperBDR/HyperMotion endpoints.            |
 | 4   | Sync Proxy        | Cloud Sync Gateway  | Outbound  | 13260                 | Data Flow         | Data traffic may use public or private networks (VPN/dedicated line) depending on the setup.   |
 | 5   | HyperBDR Console  | Cloud Sync Gateway  | Outbound  | 22 / 10729 / 16100    | Control Flow (public) | The gateway is created automatically during sync and its security group config is managed by the platform. |
 | 6   | Cloud Sync Gateway| HyperBDR Console    | Outbound  | 443 / 30080           | Control Flow (public) | —                                                                                             |
 | 7   | HyperBDR Console  | Cloud API           | Outbound  | 443                   | Control Flow (public) | —                                                                                             |
 | 8   | HyperBDR Console  | Transition Host     | Outbound  | 10729                 | Control Flow (public) | If no special configuration is made in HyperBDR/HyperMotion, these services require public access. |

 ### Deployment architecture

 #### SaaS

 ![](./images/bestpracticesfornetworkcommunicationinsaasmodel-blockstoragesolution-1.png)

 ### Notes

 > In block storage mode, during the Transition Host phase you can set whether control traffic uses public or private network via Network Configuration → Driver Adaption Network Mode.
 >
 > For SaaS mode, to ensure a stable and highly reachable control channel that does not rely on complex customer network setups, we recommend fixing Driver Adaption Network Mode to: Public Network without Proxy.
 >
 > Also set the Cloud Sync Gateway's Control Network as shown below so control traffic consistently accesses the SaaS service over the public network.
 >
 > For Data Transmission Network, choose based on your environment:
 >
 > * Use Private Network if you already have VPN/dedicated lines and internal routing in place.
 > * Use Public Network if no private link is available.

 ![](./images/bestpracticesfornetworkcommunicationinsaasmodel-blockstoragesolution-2.png)
