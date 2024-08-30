<template><div><h1 id="vmware-agentless" tabindex="-1"><a class="header-anchor" href="#vmware-agentless"><span>VMware Agentless</span></a></h1>
<h2 id="vmware-compatibility" tabindex="-1"><a class="header-anchor" href="#vmware-compatibility"><span>VMWare Compatibility</span></a></h2>
<ul>
<li>vCenter Server 5.1, 5.5, 6.0, 6.5, 6.7, 7.0, 8.0(RC)</li>
<li>ESXi 5.0, 5.1, 5.5, 6.0, 6.5, 6.7, 7.0, 8.0(RC)</li>
<li>VMFS 5.1, 5.2, 5.5, 5.8, 6.0, 6.5</li>
<li>VSAN 6.5, 6.6, 7.0</li>
</ul>
<h2 id="guest-os-support" tabindex="-1"><a class="header-anchor" href="#guest-os-support"><span>Guest OS Support</span></a></h2>
<p>Click <a href="https://365.kdocs.cn/l/ctsKIt85ScaM" target="_blank" rel="noopener noreferrer">Cloud Platform Support Matrix</a> to view the compatibility list and get the latest support status.</p>
<h2 id="support-and-limitations" tabindex="-1"><a class="header-anchor" href="#support-and-limitations"><span>Support and Limitations</span></a></h2>
<h3 id="vmware-storage-support-and-limitations" tabindex="-1"><a class="header-anchor" href="#vmware-storage-support-and-limitations"><span>VMware Storage Support and Limitations</span></a></h3>
<ul>
<li>Incremental data synchronization is not supported for virtual machines with version 4 (only full data synchronization is supported).</li>
<li>Data synchronization for disks larger than 2TB is not supported under ESXi 5.0 and 5.1 versions (single disk capacity &lt; 2032GB).</li>
</ul>
<h3 id="sync-proxy-network-requirements" tabindex="-1"><a class="header-anchor" href="#sync-proxy-network-requirements"><span>Sync Proxy Network Requirements</span></a></h3>
<ul>
<li>A CentOS 7 system with a minimum of 2 cores and 4GB of RAM is required as a <strong>Sync Proxy</strong> node.</li>
<li>Access to the vCenter management network address and port is required.</li>
<li>Access to port 902 of ESXi managed under the vCenter is required.</li>
<li>Access to the management network address of <strong>HyperMotion/HyperBDR Console</strong> is required.</li>
</ul>
<h3 id="sync-proxy-performance" tabindex="-1"><a class="header-anchor" href="#sync-proxy-performance"><span>Sync Proxy Performance</span></a></h3>
<ul>
<li>The maximum number of synchronized hosts per <strong>Sync Proxy</strong> is limited to 100.</li>
<li><strong>Sync Proxy</strong> rate configuration is related to the number of concurrent synchronized hosts:
<ul>
<li>(Default Setting) When a higher rate is required, it is recommended to adjust vmware_release_cpu_time = 0 to improve synchronization efficiency.</li>
<li>When there are many concurrent synchronized hosts, it is recommended to adjust vmware_release_cpu_time = the number of concurrent synchronized hosts.</li>
</ul>
</li>
</ul>
<h3 id="guest-os-support-and-limitations" tabindex="-1"><a class="header-anchor" href="#guest-os-support-and-limitations"><span>Guest OS Support and Limitations</span></a></h3>
<ul>
<li>Virtual machines using remote RDM disks (directly accessing a storage LUN in SAN) are not supported.</li>
<li>Network-shared mounted directories (e.g., accessing data through NFS/NAS in the virtual machine system via remote network) are not supported for synchronization. Use a file synchronization tool for this data.</li>
<li>Independent-mode virtual disks are not supported and must be synchronized as basic disks.</li>
<li>Virtual machines mounted with USB or PCI peripherals will fail to snapshot (e.g., encrypted dog devices, etc.).</li>
<li>Virtual machines configured with shared disks need to change the shared disk to non-shared mode (modify the parameter iscsi1:0.sharing to mutil-write and change it to FALSE).</li>
</ul>
</div></template>


