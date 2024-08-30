<template><div><h1 id="openstack-ceph-agentless" tabindex="-1"><a class="header-anchor" href="#openstack-ceph-agentless"><span>OpenStack(Ceph) Agentless</span></a></h1>
<h2 id="compatibility" tabindex="-1"><a class="header-anchor" href="#compatibility"><span>Compatibility</span></a></h2>
<h3 id="openstack" tabindex="-1"><a class="header-anchor" href="#openstack"><span>OpenStack</span></a></h3>
<ul>
<li>Open Source: Juno, Kilo, Liberty, Mitaka, Newton, Ocata, Pike, Queens, Rocky, Stein, Train, Ussri, Victoria, Wallaby</li>
<li>Commercial: EasyStack v3, v4, v5, v6</li>
</ul>
<h3 id="ceph" tabindex="-1"><a class="header-anchor" href="#ceph"><span>Ceph</span></a></h3>
<ul>
<li>Open Source: Jewel 10.2.11, Kraken 11.2.1, Luminous 12.2.13, Mimic 13.2.10, Nautilus 14.2.22, Octopus 15.2.16</li>
<li>Commercial: XSKY v4.0.2.0, v5.0.100.1</li>
</ul>
<h2 id="guest-os-support" tabindex="-1"><a class="header-anchor" href="#guest-os-support"><span>Guest OS Support</span></a></h2>
<p>Click <a href="https://365.kdocs.cn/l/ctsKIt85ScaM" target="_blank" rel="noopener noreferrer">Cloud Platform Support Matrix</a> to view the compatibility list and get the latest support status.</p>
<h2 id="support-and-limitations" tabindex="-1"><a class="header-anchor" href="#support-and-limitations"><span>Support and Limitations</span></a></h2>
<h3 id="openstack-cloud-platform-interface-requirements" tabindex="-1"><a class="header-anchor" href="#openstack-cloud-platform-interface-requirements"><span>OpenStack Cloud Platform Interface Requirements:</span></a></h3>
<ul>
<li>Host list, details, and snapshot interfaces</li>
<li>Host specification details interface</li>
<li>Host image creation and details interface</li>
<li>Volume list and volume details interfaces</li>
<li>Volume snapshot list and details interfaces</li>
</ul>
<h3 id="ceph-interface-requirements" tabindex="-1"><a class="header-anchor" href="#ceph-interface-requirements"><span>Ceph Interface Requirements:</span></a></h3>
<ul>
<li>Ceph commands: status query, CRUSH MAP query</li>
<li>RBD related commands: status, information retrieval, snapshot operations, etc.</li>
</ul>
<h3 id="storage-resource-pool-requirements" tabindex="-1"><a class="header-anchor" href="#storage-resource-pool-requirements"><span>Storage Resource Pool Requirements:</span></a></h3>
<ul>
<li>It is necessary to provide the correspondence between volume types and Ceph storage pools. For default volume types, when the volume type is empty in the OpenStack platform, the corresponding platform volume type value is DEFAULT_VOLUME_TYPE.</li>
<li>For hosts started with images, it is necessary to provide storage pool information corresponding to the host's local volumes. Typically, the corresponding storage pool is vms, and the default value of the platform volume type is CEPH_GLANCE_VMS.</li>
</ul>
<h3 id="sync-proxy-requirements" tabindex="-1"><a class="header-anchor" href="#sync-proxy-requirements"><span>Sync Proxy Requirements:</span></a></h3>
<ul>
<li>A CentOS 7 system with a minimum of 2 cores and 4GB of RAM is required as a <strong>Sync Proxy</strong> node.</li>
<li>Access to Ceph Monitor (default is 6789) and read corresponding data in OSD (default port is 6800).</li>
<li>Access to OpenStack platform API interface.</li>
<li>Access to the management network address of <strong>HyperMotion/HyperBDR Console</strong>.</li>
</ul>
<h3 id="sync-proxy-performance" tabindex="-1"><a class="header-anchor" href="#sync-proxy-performance"><span>Sync Proxy Performance:</span></a></h3>
<ul>
<li>The maximum number of synchronized hosts per <strong>Sync Proxy</strong> is not more than 100.</li>
<li><strong>Sync Proxy</strong> rate configuration is related to the number of concurrent synchronized hosts:
<ul>
<li>(Default Setting) When a higher rate is required, it is recommended to adjust openstack_release_cpu_time = 0 to improve synchronization efficiency.</li>
<li>When there are many concurrent synchronized hosts, it is recommended to adjust openstack_release_cpu_time = the number of concurrent synchronized hosts.</li>
</ul>
</li>
</ul>
<h3 id="guest-os-support-1" tabindex="-1"><a class="header-anchor" href="#guest-os-support-1"><span>Guest OS Support:</span></a></h3>
<ul>
<li>Virtual machines using remote mounted disks (directly accessing a storage LUN in SAN) are not supported.</li>
<li>Network-shared mounted directories (e.g., accessing data through NFS/NAS in the virtual machine system via remote network) are not supported for synchronization. Use a file synchronization tool for this data.</li>
</ul>
</div></template>


