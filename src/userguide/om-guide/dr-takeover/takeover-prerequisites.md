# Takeover Prerequisites

When a severe failure or disaster occurs on the source side and cannot be quickly restored, failover in the disaster recovery environment is required to ensure business continuity.

## Confirm the Fault Level

* If the fault cannot be repaired in a short time and has exceeded the acceptable RTO/RPO limits, disaster recovery takeover can be initiated.

* It is necessary to confirm in advance that the production environment truly cannot be quickly restored, to avoid blind takeover that could cause greater impact.

## DR Environment Preparation

* Ensure that the target environment has completed the latest data synchronization or snapshot backup according to the HyperBDR policy.

* The network configuration and resource quotas (such as CPU, memory, bandwidth, etc.) of the disaster recovery environment must meet the requirements for business launch.

## Business Impact Assessment

* Communicate with business stakeholders to understand the impact of the switchover on user access paths, data consistency, and application dependencies.

* Confirm the takeover operation window and whether an external announcement is needed (such as notifying customers about the switchover).