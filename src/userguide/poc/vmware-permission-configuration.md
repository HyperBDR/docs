# VMware User Permission Requirements

## Why we need this permissions?

HyperBDR utilizes VMware CBT technology for incremental data synchronization. Change Block Tracking (CBT) is a technique employed in VMware for incremental backup and replication. It tracks the blocks that have changed on a virtual disk, allowing for the transmission of only the data associated with these changes during the backup and replication processes.

## VMware Permission List

Provide VMware user with following permissions:

| Permission Type       | Permissions                                        |
|------------------------|---------------------------------------------------|
| Host Profile           | View host configuration files                   |
| Global                 | Enable method                                    |
|                        | Disable method                                   |
|                        | License management                              |
| Content Library        | Download files                                   |
|                        | Update configuration settings                   |
|                        | View configuration settings                      |
|                        | Read storage                                      |
| Scheduled Tasks        | Create tasks                                      |
| Data Storage           | Low-level file operations                       |
|                        | Update virtual machine metadata                  |
|                        | Update virtual machine files                     |
|                        | Browse data storage                               |
| Virtual Machine        | Interaction                                      |
|                        |   Backup operation on virtual machine            |
|                        |   Defragment all disks                           |
|                        |   Restore Fault Tolerance                        |
|                        |   Enable Fault Tolerance                         |
|                        |   Pause or Unpause                               |
|                        |   Perform Guest Operations via VIX API          |
|                        |   Reset                                          |
|                        | Guest Operations                                 |
|                        |   Modify guest operations                       |
|                        |   Query guest operations                        |
|                        |   Execute guest operation programs               |
|                        | Snapshot Management                              |
|                        |   Create snapshot                                |
|                        |   Remove snapshot                                |
|                        | Configuration Changes                            |
|                        |   Modify device settings                        |
|                        |   Toggle fork parent                             |
|                        |   Toggle disk change tracking                   |
|                        |   Reload based on path                           |
|                        |   Display connection settings                   |
|                        |   Modify Settings                                |
|                        |   Modify resources                               |
|                        |   Query Fault Tolerance compatibility           |
|                        |   Query unowned files                            |
|                        |   Retrieve disk lease                            |
|                        |   Configure managedBy                           |
|                        |   Reset guest information                       |
|                        |   Advanced configuration                        |
|                        | Service Configuration                            |
|                        |   Modify service configuration                  |
|                        |   Query service configuration                   |
|                        |   Manage service configuration                  |
|                        |   Read service configuration                     |
| Provisioning          |   Allow virtual machine download                |
|                        |   Allow read-only access to disks               |
|                        |   Allow file access                             |
|                        |   Allow disk access                             |
|                        |   Customize guest                                |
|                        |   Read customization specification             |

