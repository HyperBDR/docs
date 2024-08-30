<template><div><h1 id="vmware-pre-settings" tabindex="-1"><a class="header-anchor" href="#vmware-pre-settings"><span>VMware Pre-Settings</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#download-the-transition-host-image-file-iso-and-upload-it-to-the-vmware-storage">Download the Transition Host Image file (ISO) and upload it to the VMware storage.</router-link><ul><li><router-link to="#download-the-transition-host-image-file-iso">Download the Transition Host Image file (ISO)</router-link></li><li><router-link to="#upload-the-transition-host-image-file-iso-to-the-vmware-storage">Upload the Transition Host Image file (ISO) to the VMware storage</router-link></li></ul></li><li><router-link to="#use-the-transition-host-image-to-create-a-virtual-machine-in-the-production-vmware-environment-as-the-failback-transition-host">Use the Transition Host Image to create a virtual machine in the production VMware environment as the Failback Transition Host</router-link><ul><li><router-link to="#create-a-new-virtual-machine">Create a new virtual machine</router-link></li><li><router-link to="#new-virtual-machine-configuration">New Virtual Machine Configuration</router-link></li><li><router-link to="#start-the-virtual-machine">Start the virtual machine</router-link></li></ul></li><li><router-link to="#configure-the-ip-address-for-the-failback-transition-host">Configure the IP address for the Failback Transition Host</router-link><ul><li><router-link to="#log-in-to-the-vmware-vsphere-client-console-1">Log in to the VMware vSphere Client console</router-link></li><li><router-link to="#access-the-failback-transition-host-virtual-machine-through-the-console">Access the Failback Transition Host virtual machine through the console.</router-link></li><li><router-link to="#log-in-system">Log in system</router-link></li><li><router-link to="#manually-configure-the-network">Manually configure the network</router-link></li></ul></li><li><router-link to="#vmware-user-permission-requirements-host-failback">VMware User Permission Requirements（Host Failback）</router-link><ul><li><router-link to="#vmware-user-preparation-host-failback">VMware User Preparation（Host Failback）</router-link></li><li><router-link to="#vmware-user-permission-host-failback">VMware User Permission (Host Failback)</router-link></li></ul></li><li><router-link to="#vmware-network-policy-enablement-host-failback">VMware Network Policy Enablement (Host Failback)</router-link></li><li><router-link to="#intranet-vpn-access-configure-a-huawei-cloud-intranet-dns-address-for-the-vmware-network-object-storage-fallback">(Intranet VPN Access)Configure a Huawei cloud Intranet DNS address for the VMware Network-Object Storage Fallback</router-link></li><li><router-link to="#intranet-vpn-access-test-the-connectivity-from-the-vmware-failback-host-network-to-huawei-cloud-obs-network">(Intranet VPN Access)Test the connectivity from the VMware failback host network to Huawei Cloud OBS network</router-link><ul><li><router-link to="#prepare-and-log-in-the-test-host">Prepare and log in the test host</router-link></li><li><router-link to="#huawei-cloud-private-dns-connection-test">Huawei Cloud Private DNS Connection Test</router-link></li><li><router-link to="#huawei-cloud-object-storage-connection-test">Huawei Cloud Object Storage Connection Test</router-link></li></ul></li><li><router-link to="#verify-the-status-of-the-huawei-cloud-object-storage-added-by-hyperbdr-host-failback">Verify the status of the Huawei Cloud Object Storage added by HyperBDR(Host Failback)</router-link><ul><li><router-link to="#log-in-hyperbdr-console">Log in HyperBDR Console</router-link></li><li><router-link to="#check-the-status-of-huawei-cloud-object-storage">Check the status of Huawei Cloud Object Storage</router-link></li></ul></li><li><router-link to="#add-the-vcenter-esxi-as-an-object-dr-gateway-failback">Add the vCenter/ESXi as an Object DR Gateway(Failback)</router-link><ul><li><router-link to="#login-hyperbdr">Login HyperBDR</router-link></li><li><router-link to="#add-object-dr-gateway-failback">Add Object DR Gateway(Failback)</router-link></li></ul></li></ul></nav>
<h2 id="download-the-transition-host-image-file-iso-and-upload-it-to-the-vmware-storage" tabindex="-1"><a class="header-anchor" href="#download-the-transition-host-image-file-iso-and-upload-it-to-the-vmware-storage"><span>Download the Transition Host Image file (ISO) and upload it to the VMware storage.</span></a></h2>
<h3 id="download-the-transition-host-image-file-iso" tabindex="-1"><a class="header-anchor" href="#download-the-transition-host-image-file-iso"><span>Download the Transition Host Image file (ISO)</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Download the ISO image to the download address in the document.<br>
Document link: <a href="https://docs.oneprocloud.com/userguide/poc/failback-hyperbdr-pre-settings.html#download-the-failback-transition-image-for-the-failback-transition-host" target="_blank" rel="noopener noreferrer">https://docs.oneprocloud.com/userguide/poc/failback-hyperbdr-pre-settings.html#download-the-failback-transition-image-for-the-failback-transition-host</a></p>
</div>
<h3 id="upload-the-transition-host-image-file-iso-to-the-vmware-storage" tabindex="-1"><a class="header-anchor" href="#upload-the-transition-host-image-file-iso-to-the-vmware-storage"><span>Upload the Transition Host Image file (ISO) to the VMware storage</span></a></h3>
<h4 id="log-in-to-the-vmware-vsphere-client-console" tabindex="-1"><a class="header-anchor" href="#log-in-to-the-vmware-vsphere-client-console"><span>Log in to the VMware vSphere Client console</span></a></h4>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-8.png" alt="complete-doc-for-block-storage-failback-8.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-8.png</figcaption></figure>
<h4 id="select-storage" tabindex="-1"><a class="header-anchor" href="#select-storage"><span>Select [Storage]</span></a></h4>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-9.png" alt="complete-doc-for-block-storage-failback-9.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-9.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-10.png" alt="complete-doc-for-block-storage-failback-10.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-10.png</figcaption></figure>
<h4 id="on-the-left-navigation-bar-choose-the-available-datastore-click-files-and-select-the-storage-path-for-the-image-file-click-upload-files" tabindex="-1"><a class="header-anchor" href="#on-the-left-navigation-bar-choose-the-available-datastore-click-files-and-select-the-storage-path-for-the-image-file-click-upload-files"><span>On the left navigation bar, choose the available [Datastore]. Click [Files] and select the storage path for the image file,click [Upload Files].</span></a></h4>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-11.png" alt="complete-doc-for-block-storage-failback-11.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-11.png</figcaption></figure>
<p>Select the downloaded Transition Host Image file (ISO), and wait for the image upload to complete.</p>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-12.png" alt="complete-doc-for-block-storage-failback-12.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-12.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-13.png" alt="complete-doc-for-block-storage-failback-13.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-13.png</figcaption></figure>
<h2 id="use-the-transition-host-image-to-create-a-virtual-machine-in-the-production-vmware-environment-as-the-failback-transition-host" tabindex="-1"><a class="header-anchor" href="#use-the-transition-host-image-to-create-a-virtual-machine-in-the-production-vmware-environment-as-the-failback-transition-host"><span>Use the Transition Host Image to create a virtual machine in the production VMware environment as the Failback Transition Host</span></a></h2>
<h3 id="create-a-new-virtual-machine" tabindex="-1"><a class="header-anchor" href="#create-a-new-virtual-machine"><span>Create a new virtual machine</span></a></h3>
<p>Select your ESXi host or data center, right-click, and choose [New Virtual Machine]</p>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-14.png" alt="complete-doc-for-block-storage-failback-14.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-14.png</figcaption></figure>
<h3 id="new-virtual-machine-configuration" tabindex="-1"><a class="header-anchor" href="#new-virtual-machine-configuration"><span>New Virtual Machine Configuration</span></a></h3>
<p><strong>Step 1: Choose [Create a new virtual machine], and after configuring, click [NEXT]</strong></p>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-15.png" alt="complete-doc-for-block-storage-failback-15.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-15.png</figcaption></figure>
<p><strong>Step 2: Enter the virtual machine name, select an available cluster,click [NEXT].</strong></p>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-16.png" alt="complete-doc-for-block-storage-failback-16.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-16.png</figcaption></figure>
<p><strong>Step 3: Choose an available [Compute Resource],click [NEXT].</strong></p>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-17.png" alt="complete-doc-for-block-storage-failback-17.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-17.png</figcaption></figure>
<p><strong>Step 4: Choose an available [Storage],click [NEXT].</strong></p>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-18.png" alt="complete-doc-for-block-storage-failback-18.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-18.png</figcaption></figure>
<p><strong>Step 5: Choose compatibility (leave it as default), click [NEXT].</strong></p>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-19.png" alt="complete-doc-for-block-storage-failback-19.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-19.png</figcaption></figure>
<p><strong>Step 6: Choose the operating system. For the operating system family, select [Linux], and for the operating system version, choose [Other Linux (64-bit)], click [NEXT].</strong></p>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-20.png" alt="complete-doc-for-block-storage-failback-20.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-20.png</figcaption></figure>
<p><strong>Step 7-1: Customize hardware by configuring CPU ≥2 and memory ≥4GB.</strong></p>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-21.png" alt="complete-doc-for-block-storage-failback-21.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-21.png</figcaption></figure>
<p><strong>Step 7-2: Customize hardware by selecting an available network configuration</strong></p>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-22.png" alt="complete-doc-for-block-storage-failback-22.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-22.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-23.png" alt="complete-doc-for-block-storage-failback-23.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-23.png</figcaption></figure>
<p><strong>Step 7-3: Customize hardware by configuring system disk and data disk.</strong></p>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>The number and capacity of disks for the Failback Transition Host need to be consistent with the Takeover Host.</p>
</div>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-24.png" alt="complete-doc-for-block-storage-failback-24.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-24.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-25.png" alt="complete-doc-for-block-storage-failback-25.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-25.png</figcaption></figure>
<p><strong>Step 7-4: Configure the CD/DVD drive. Choose the type as [Datastore ISO File], in the new window select the uploaded Transition Host Image file (ISO) from the storage, and check the option [Connect At Power On].</strong></p>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-26.png" alt="complete-doc-for-block-storage-failback-26.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-26.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-27.png" alt="complete-doc-for-block-storage-failback-27.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-27.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-28.png" alt="complete-doc-for-block-storage-failback-28.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-28.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-29.png" alt="complete-doc-for-block-storage-failback-29.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-29.png</figcaption></figure>
<p><strong>Step 7-5: The SCSI controller of the disk for the universal storage Failback Transition Host is identical to that of the source machine in VMware.  Leave other configurations as default, click [NEXT].</strong></p>
<figure><img src="@source/userguide/poc/images/vmware-scsi-controller-en-1.png" alt="vmware-scsi-controller-en-1.png" tabindex="0" loading="lazy"><figcaption>vmware-scsi-controller-en-1.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/vmware-scsi-controller-en-2.png" alt="vmware-scsi-controller-en-2.png" tabindex="0" loading="lazy"><figcaption>vmware-scsi-controller-en-2.png</figcaption></figure>
<p><strong>Step 8: After confirming that the information is correct, click [FINISH] to start the creation.</strong></p>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-30.png" alt="complete-doc-for-block-storage-failback-30.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-30.png</figcaption></figure>
<h3 id="start-the-virtual-machine" tabindex="-1"><a class="header-anchor" href="#start-the-virtual-machine"><span>Start the virtual machine</span></a></h3>
<p>Right-click on the newly created virtual machine, choose [<strong>Power</strong>] &gt; [<strong>Power On</strong>].</p>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-31.png" alt="complete-doc-for-block-storage-failback-31.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-31.png</figcaption></figure>
<p>Open the virtual machine console and check the startup status of the virtual machine.</p>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-32.png" alt="complete-doc-for-block-storage-failback-32.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-32.png</figcaption></figure>
<p>The virtual machine system has started successfully.</p>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-33.png" alt="complete-doc-for-block-storage-failback-33.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-33.png</figcaption></figure>
<h2 id="configure-the-ip-address-for-the-failback-transition-host" tabindex="-1"><a class="header-anchor" href="#configure-the-ip-address-for-the-failback-transition-host"><span>Configure the IP address for the Failback Transition Host</span></a></h2>
<h3 id="log-in-to-the-vmware-vsphere-client-console-1" tabindex="-1"><a class="header-anchor" href="#log-in-to-the-vmware-vsphere-client-console-1"><span>Log in to the VMware vSphere Client console</span></a></h3>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-34.png" alt="complete-doc-for-block-storage-failback-34.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-34.png</figcaption></figure>
<h3 id="access-the-failback-transition-host-virtual-machine-through-the-console" tabindex="-1"><a class="header-anchor" href="#access-the-failback-transition-host-virtual-machine-through-the-console"><span>Access the Failback Transition Host virtual machine through the console.</span></a></h3>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-35.png" alt="complete-doc-for-block-storage-failback-35.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-35.png</figcaption></figure>
<h3 id="log-in-system" tabindex="-1"><a class="header-anchor" href="#log-in-system"><span>Log in system</span></a></h3>
<blockquote>
<p>Default username: root<br>
Default password: Acb@132.Inst</p>
</blockquote>
<figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-36.png" alt="complete-doc-for-block-storage-failback-36.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-36.png</figcaption></figure>
<h3 id="manually-configure-the-network" tabindex="-1"><a class="header-anchor" href="#manually-configure-the-network"><span>Manually configure the network</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The Transition Host Image is configured with default DHCP mode for networking. If the VMware network you selected supports DHCP, confirm the virtual machine's IP and proceed. If the VMware network does not use DHCP, manual configuration of the virtual machine's network is required</p>
</div>
<h4 id="confirm-the-virtual-machine-s-network-adapter-device-name" tabindex="-1"><a class="header-anchor" href="#confirm-the-virtual-machine-s-network-adapter-device-name"><span>Confirm the virtual machine's network adapter device name</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-37.png" alt="complete-doc-for-block-storage-failback-37.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-37.png</figcaption></figure>
<h4 id="clear-network-configuration-information" tabindex="-1"><a class="header-anchor" href="#clear-network-configuration-information"><span>Clear network configuration information</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> addr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> flush</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> eth0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Configure a temporary IP address and gateway</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Configure with example information. Please replace the IP address/mask [192.168.x.x/20] and gateway address [192.168.0.1] based on your actual situation.</p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> addr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 192.168.x.x/20</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ens160</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> route</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> via</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 192.168.0.1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="view-network-configuration" tabindex="-1"><a class="header-anchor" href="#view-network-configuration"><span>View network configuration</span></a></h4>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-38.png" alt="complete-doc-for-block-storage-failback-38.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-38.png</figcaption></figure>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> route</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/userguide/poc/images/complete-doc-for-block-storage-failback-39.png" alt="complete-doc-for-block-storage-failback-39.png" tabindex="0" loading="lazy"><figcaption>complete-doc-for-block-storage-failback-39.png</figcaption></figure>
<h2 id="vmware-user-permission-requirements-host-failback" tabindex="-1"><a class="header-anchor" href="#vmware-user-permission-requirements-host-failback"><span>VMware User Permission Requirements（Host Failback）</span></a></h2>
<h3 id="vmware-user-preparation-host-failback" tabindex="-1"><a class="header-anchor" href="#vmware-user-preparation-host-failback"><span>VMware User Preparation（Host Failback）</span></a></h3>
<p>Prepare the VMware user authentication information for failback and ensure that the user has the necessary permissions.</p>
<p>For configuring VMware user permissions, please refer to the following document.</p>
<p>Document Link:<a href="https://docs.oneprocloud.com/userguide/poc/vmware-pre-settings.html#vcenter-permission-open-settings-steps" target="_blank" rel="noopener noreferrer">https://docs.oneprocloud.com/userguide/poc/vmware-pre-settings.html#vcenter-permission-open-settings-steps</a></p>
<h3 id="vmware-user-permission-host-failback" tabindex="-1"><a class="header-anchor" href="#vmware-user-permission-host-failback"><span>VMware User Permission (Host Failback)</span></a></h3>
<table>
<thead>
<tr>
<th><strong>Permission Type</strong></th>
<th><strong>Permissions</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Datastore</td>
<td>Low level file operations</td>
</tr>
<tr>
<td></td>
<td>Allocate space</td>
</tr>
<tr>
<td>Network</td>
<td>Assign network</td>
</tr>
<tr>
<td>Resource</td>
<td>Assign virtual machine to resource pool</td>
</tr>
<tr>
<td>vApp</td>
<td>Import</td>
</tr>
<tr>
<td>Virtual machine</td>
<td><strong>Interaction</strong></td>
</tr>
<tr>
<td></td>
<td>Power off</td>
</tr>
<tr>
<td></td>
<td>Power on</td>
</tr>
<tr>
<td></td>
<td>Reset</td>
</tr>
<tr>
<td></td>
<td><strong>Guest operations</strong></td>
</tr>
<tr>
<td></td>
<td>Guest operation queries</td>
</tr>
<tr>
<td></td>
<td>Guest operation program execution</td>
</tr>
<tr>
<td></td>
<td><strong>Change Configuration</strong></td>
</tr>
<tr>
<td></td>
<td>Change CPU count</td>
</tr>
<tr>
<td></td>
<td>Change Memory</td>
</tr>
<tr>
<td></td>
<td>Change Settings</td>
</tr>
<tr>
<td></td>
<td>Add or remove device</td>
</tr>
<tr>
<td></td>
<td>Add new disk</td>
</tr>
<tr>
<td></td>
<td>Add existing disk</td>
</tr>
<tr>
<td></td>
<td>Remove disk</td>
</tr>
<tr>
<td></td>
<td>Advanced configuration</td>
</tr>
<tr>
<td></td>
<td><strong>Edit Inventory</strong></td>
</tr>
<tr>
<td></td>
<td>Create from existing</td>
</tr>
<tr>
<td></td>
<td>Remove</td>
</tr>
<tr>
<td></td>
<td><strong>Provisioning</strong></td>
</tr>
<tr>
<td></td>
<td>Clone virtual machine</td>
</tr>
</tbody>
</table>
<h2 id="vmware-network-policy-enablement-host-failback" tabindex="-1"><a class="header-anchor" href="#vmware-network-policy-enablement-host-failback"><span>VMware Network Policy Enablement (Host Failback)</span></a></h2>
<ol>
<li>The HyperBDR node host needs to have normal access to the vCenter on port 443.</li>
<li>The HyperBDR node host needs to have normal access to all ESXi hosts managed by vCenter on port 443.</li>
<li>The VMware business network virtual machine (failback host virtual machine) needs to have normal access to the object storage on port 443.</li>
<li>The HyperBDR node host needs to have normal access to port 10729 of the VMware business network virtual machine (failback host virtual machine).</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The HyperBDR node host requires access to the vCenter API interface for authentication. By invoking the Disaster Recovery Production vCenter/ESXi interface, it creates a failback host virtual machine in the VMware business network, manages it, and automatically creates a failback host virtual machine. This involves accessing port 443 of Huawei Cloud Object Storage to retrieve data for failback host.</p>
</div>
<h2 id="intranet-vpn-access-configure-a-huawei-cloud-intranet-dns-address-for-the-vmware-network-object-storage-fallback" tabindex="-1"><a class="header-anchor" href="#intranet-vpn-access-configure-a-huawei-cloud-intranet-dns-address-for-the-vmware-network-object-storage-fallback"><span>(Intranet VPN Access)Configure a Huawei cloud Intranet DNS address for the VMware Network-Object Storage Fallback</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If the configuration of the Huawei Cloud intranet OBS VPC Endpoint service resolution address has already been completed during the disaster recovery to Huawei Cloud, there is no need to repeat the configuration.</p>
</div>
<p>If your fallback environment is interconnected with the on-premises network through Huawei Cloud VPN, after creating VPC Endpoint services, it is necessary to configure the Huawei Cloud intranet OBS VPC Endpoint service resolution address in the local vCenter/ESXi host management network and the virtual machine business network.<br>
Reference Document: <a href="https://docs.oneprocloud.com/userguide/poc/hyperbdr-agent-pre-settings.html#option-2-intranet-vpn-access-configure-huawei-cloud-intranet-dns-address-for-the-network-device-where-the-agent-host-resid" target="_blank" rel="noopener noreferrer">https://docs.oneprocloud.com/userguide/poc/hyperbdr-agent-pre-settings.html#option-2-intranet-vpn-access-configure-huawei-cloud-intranet-dns-address-for-the-network-device-where-the-agent-host-resid</a></p>
<h2 id="intranet-vpn-access-test-the-connectivity-from-the-vmware-failback-host-network-to-huawei-cloud-obs-network" tabindex="-1"><a class="header-anchor" href="#intranet-vpn-access-test-the-connectivity-from-the-vmware-failback-host-network-to-huawei-cloud-obs-network"><span>(Intranet VPN Access)Test the connectivity from the VMware failback host network to Huawei Cloud OBS network</span></a></h2>
<h3 id="prepare-and-log-in-the-test-host" tabindex="-1"><a class="header-anchor" href="#prepare-and-log-in-the-test-host"><span>Prepare and log in the test host</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The network of the test host needs to be consistent with the network of the fallback recovery host.</p>
</div>
<h3 id="huawei-cloud-private-dns-connection-test" tabindex="-1"><a class="header-anchor" href="#huawei-cloud-private-dns-connection-test"><span>Huawei Cloud Private DNS Connection Test</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Please refer to the following document to find the dedicated Network Domain Service (NDS) address based on the used Huawei Cloud OBS region.<br>
Reference Document:<a href="https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html" target="_blank" rel="noopener noreferrer">https://support.huaweicloud.com/intl/en-us/dns_faq/dns_faq_002.html</a></p>
</div>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100.125.1.250</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<figure><img src="@source/userguide/poc/images/docs-of-object-storage-host-failback-5.png" alt="docs-of-object-storage-host-failback-5.png" tabindex="0" loading="lazy"><figcaption>docs-of-object-storage-host-failback-5.png</figcaption></figure>
<h3 id="huawei-cloud-object-storage-connection-test" tabindex="-1"><a class="header-anchor" href="#huawei-cloud-object-storage-connection-test"><span>Huawei Cloud Object Storage Connection Test</span></a></h3>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://obs.ap-southeast-3.myhuaweicloud.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Success Response:</p>
<figure><img src="@source/userguide/poc/images/docs-of-object-storage-host-failback-6.png" alt="docs-of-object-storage-host-failback-6.png" tabindex="0" loading="lazy"><figcaption>docs-of-object-storage-host-failback-6.png</figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This command is primarily used to test the accessibility of Huawei Cloud Object Storage buckets. Currently, the tested OBS domain is applicable to the Huawei Cloud Singapore region. If you need to perform tests in different regions, please refer to the official Huawei Cloud documentation to find the corresponding Endpoint domain.<br>
Document Link: <a href="https://developer.huaweicloud.com/intl/en-us/endpoint?OBS" target="_blank" rel="noopener noreferrer">https://developer.huaweicloud.com/intl/en-us/endpoint?OBS</a></p>
</div>
<h2 id="verify-the-status-of-the-huawei-cloud-object-storage-added-by-hyperbdr-host-failback" tabindex="-1"><a class="header-anchor" href="#verify-the-status-of-the-huawei-cloud-object-storage-added-by-hyperbdr-host-failback"><span>Verify the status of the Huawei Cloud Object Storage added by HyperBDR(Host Failback)</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The deployment of the HyperBDR environment has been completed by default.</p>
</div>
<h3 id="log-in-hyperbdr-console" tabindex="-1"><a class="header-anchor" href="#log-in-hyperbdr-console"><span>Log in HyperBDR Console</span></a></h3>
<figure><img src="@source/userguide/poc/images/docs-of-object-storage-host-failback-7.png" alt="docs-of-object-storage-host-failback-7.png" tabindex="0" loading="lazy"><figcaption>docs-of-object-storage-host-failback-7.png</figcaption></figure>
<h3 id="check-the-status-of-huawei-cloud-object-storage" tabindex="-1"><a class="header-anchor" href="#check-the-status-of-huawei-cloud-object-storage"><span>Check the status of Huawei Cloud Object Storage</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The following operations use Huawei Cloud Object Storage as an example.</p>
</div>
<p>Select [<strong>Configuration</strong>]&gt; [<strong>Object Storage</strong>]&gt; [<strong>Failback</strong>], and you can see the failback [<strong>Object Storage</strong>] you added. Confirm that the status of [<strong>Object Storage</strong>] is [<strong>Available</strong>].</p>
<figure><img src="@source/userguide/poc/images/docs-of-object-storage-host-failback-8.png" alt="docs-of-object-storage-host-failback-8.png" tabindex="0" loading="lazy"><figcaption>docs-of-object-storage-host-failback-8.png</figcaption></figure>
<h2 id="add-the-vcenter-esxi-as-an-object-dr-gateway-failback" tabindex="-1"><a class="header-anchor" href="#add-the-vcenter-esxi-as-an-object-dr-gateway-failback"><span>Add the vCenter/ESXi as an Object DR Gateway(Failback)</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Default deployment of HyperBDR environment completed</p>
</div>
<h3 id="login-hyperbdr" tabindex="-1"><a class="header-anchor" href="#login-hyperbdr"><span>Login HyperBDR</span></a></h3>
<figure><img src="@source/userguide/poc/images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-1.png" alt="add-the-vcenteresxi-as-an-object-dr-gatewayfailback-1.png" tabindex="0" loading="lazy"><figcaption>add-the-vcenteresxi-as-an-object-dr-gatewayfailback-1.png</figcaption></figure>
<h3 id="add-object-dr-gateway-failback" tabindex="-1"><a class="header-anchor" href="#add-object-dr-gateway-failback"><span>Add Object DR Gateway(Failback)</span></a></h3>
<p><strong>Step 1.</strong> Select &quot;Configuration&quot; in the upper navigation bar, choose &quot;Object DR Gateway&quot; in the left menu, and click &quot;Add&quot; on the &quot;Failback&quot; tab.</p>
<figure><img src="@source/userguide/poc/images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-2.png" alt="add-the-vcenteresxi-as-an-object-dr-gatewayfailback-2.png" tabindex="0" loading="lazy"><figcaption>add-the-vcenteresxi-as-an-object-dr-gatewayfailback-2.png</figcaption></figure>
<p><strong>Step 2.</strong> Fill in the authentication information for the VMware platform on the &quot;Authentication Information&quot; page, and click &quot;Next&quot; after confirmation.</p>
<figure><img src="@source/userguide/poc/images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-3.png" alt="add-the-vcenteresxi-as-an-object-dr-gatewayfailback-3.png" tabindex="0" loading="lazy"><figcaption>add-the-vcenteresxi-as-an-object-dr-gatewayfailback-3.png</figcaption></figure>
<p><strong>Step 3.</strong> Configure the failback target platform VMware Setting, and click &quot;Next&quot; after confirmation.</p>
<figure><img src="@source/userguide/poc/images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-4.png" alt="add-the-vcenteresxi-as-an-object-dr-gatewayfailback-4.png" tabindex="0" loading="lazy"><figcaption>add-the-vcenteresxi-as-an-object-dr-gatewayfailback-4.png</figcaption></figure>
<p>**Step 4. **The &quot;Driver Adaption&quot; option can remain at its default setting.</p>
<figure><img src="@source/userguide/poc/images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-5.png" alt="add-the-vcenteresxi-as-an-object-dr-gatewayfailback-5.png" tabindex="0" loading="lazy"><figcaption>add-the-vcenteresxi-as-an-object-dr-gatewayfailback-5.png</figcaption></figure>
<p><strong>Step 5.</strong> The Object DR Gateway(Failback) has been successfully added.</p>
<figure><img src="@source/userguide/poc/images/add-the-vcenteresxi-as-an-object-dr-gatewayfailback-6.png" alt="add-the-vcenteresxi-as-an-object-dr-gatewayfailback-6.png" tabindex="0" loading="lazy"><figcaption>add-the-vcenteresxi-as-an-object-dr-gatewayfailback-6.png</figcaption></figure>
</div></template>


