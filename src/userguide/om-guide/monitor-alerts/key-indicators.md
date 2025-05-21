# Key Indicators

## System Level

* **CPU / Memory Usage**: Identify if there are resource bottlenecks.

* **Number of Concurrent Tasks**: Monitor the number of backup/restore/sync tasks currently running.

* **Network Throughput**: Pay attention to data transfer speed and assess if there is network congestion.

## DR Drill & Failover Level

* **Task Success Rate**: Trigger alerts if the failure rate of backup or restore tasks exceeds the threshold.

* **Number and Size of Snapshots**: Monitor the storage space occupied by snapshots to avoid running out of storage.

* **Resource Usage**: Includes usage of resources such as cloud hosts and cloud storage.

## Alarms and Events

* **Alarm Level Distribution**: Count the current alarms by level (info, warning, critical), and prioritize handling of high-level alarms.

* **Event Trends**: Observe changes in the number of alarms over a certain period (e.g., 7 days, 30 days) to quickly identify potential issues.