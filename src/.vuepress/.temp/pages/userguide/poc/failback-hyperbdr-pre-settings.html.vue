<template><div><h1 id="hyperbdr-setup" tabindex="-1"><a class="header-anchor" href="#hyperbdr-setup"><span>HyperBDR Setup</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#intranet-vpn-access-test-the-network-connectivity-between-the-hyperbdr-and-the-failback-transition-host">(Intranet VPN access)Test the network connectivity between the HyperBDR and the Failback Transition Host</router-link><ul><li><router-link to="#verification-test-procedure">Verification test procedure</router-link></li></ul></li><li><router-link to="#test-the-connectivity-from-hyperbdr-to-the-management-network-of-vcenter-esxi">Test the connectivity from HyperBDR to the management network of vCenter/ESXi</router-link><ul><li><router-link to="#log-in-to-the-hyperbdr-host">Log in to the HyperBDR host</router-link></li><li><router-link to="#test-access-to-the-vcenter-address-port">Test access to the vCenter address port</router-link></li><li><router-link to="#test-access-to-the-esxi-address-port">Test access to the ESXi address port</router-link></li></ul></li><li><router-link to="#add-the-failback-transition-host-to-hyperbdr">Add the Failback Transition Host to HyperBDR</router-link><ul><li><router-link to="#log-in-to-the-hyperbdr-console">Log in to the HyperBDR console</router-link></li><li><router-link to="#add-the-failback-transition-host">Add the Failback Transition Host</router-link></li></ul></li><li><router-link to="#verify-the-status-of-the-failback-transition-host">Verify the status of the Failback Transition Host</router-link><ul><li><router-link to="#log-in-to-the-hyperbdr-console-1">Log in to the HyperBDR console</router-link></li><li><router-link to="#check-the-status-of-the-failback-transition-host">Check the status of the Failback Transition Host</router-link></li></ul></li><li><router-link to="#apply-for-hyperbdr-failback-license">Apply for HyperBDR Failback License</router-link><ul><li><router-link to="#log-in-the-hyperbdr-console">Log in the HyperBDR console</router-link></li><li><router-link to="#activate-a-failback-license">Activate a Failback License</router-link></li><li><router-link to="#retrieve-the-failback-license-activation-code">Retrieve the Failback License activation code</router-link></li></ul></li><li><router-link to="#download-the-failback-transition-image-for-the-failback-transition-host">Download the Failback Transition Image for the Failback Transition Host</router-link><ul><li><router-link to="#download-iso-format-image">Download ISO Format Image</router-link></li><li><router-link to="#download-qcow2-format-image">Download QCOW2 Format Image</router-link></li><li><router-link to="#download-vmdk-format-image">Download VMDK Format Image</router-link></li></ul></li><li><router-link to="#add-huawei-cloud-object-storage-failback">Add Huawei Cloud Object Storage (Failback)</router-link><ul><li><router-link to="#configure-step">Configure Step</router-link></li></ul></li></ul></nav>
<h2 id="intranet-vpn-access-test-the-network-connectivity-between-the-hyperbdr-and-the-failback-transition-host" tabindex="-1"><a class="header-anchor" href="#intranet-vpn-access-test-the-network-connectivity-between-the-hyperbdr-and-the-failback-transition-host"><span>(Intranet VPN access)Test the network connectivity between the HyperBDR and the Failback Transition Host</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If the failback environment is connected to the Intranet of the production site through VPN, perform this step to test the network connectivity between the HyperBDR and the universal storage failback Transition Host.</p>
</div>
<h3 id="verification-test-procedure" tabindex="-1"><a class="header-anchor" href="#verification-test-procedure"><span>Verification test procedure</span></a></h3>
<p>Log in to the HyperBDR host</p>
<h4 id="test-access-to-port-10729-of-the-failback-transition-host" tabindex="-1"><a class="header-anchor" href="#test-access-to-port-10729-of-the-failback-transition-host"><span>Test access to port 10729 of the Failback Transition Host</span></a></h4>
<p>Test command:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -v -p 10729 &#x3C;Failback Transition Host Intranet IP></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>If the input result includes the information '[debug1: Connection established.],' it indicates that the network connection is successful.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to 192.168.10.2 [ESXi IP Address] port 443.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="test-the-connectivity-from-hyperbdr-to-the-management-network-of-vcenter-esxi" tabindex="-1"><a class="header-anchor" href="#test-the-connectivity-from-hyperbdr-to-the-management-network-of-vcenter-esxi"><span>Test the connectivity from HyperBDR to the management network of vCenter/ESXi</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If your fallback environment is interconnected with the on-premises network through VPN, you can test the network connectivity from HyperBDR to the Common Storage Fallback Transition Host using the following steps.</p>
</div>
<h3 id="log-in-to-the-hyperbdr-host" tabindex="-1"><a class="header-anchor" href="#log-in-to-the-hyperbdr-host"><span>Log in to the HyperBDR host</span></a></h3>
<h3 id="test-access-to-the-vcenter-address-port" tabindex="-1"><a class="header-anchor" href="#test-access-to-the-vcenter-address-port"><span>Test access to the vCenter address port</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Replace the IP address of vCenter in the command with the actual IP address from the production environment.</p>
</div>
<p>Test command:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -v -p 443 &#x3C;vCenter IP Address></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>If the input result includes the information '[debug1: Connection established.],' it indicates that the network connection is successful.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to 192.168.10.2 [vCenter IP Address] port 443.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="test-access-to-the-esxi-address-port" tabindex="-1"><a class="header-anchor" href="#test-access-to-the-esxi-address-port"><span>Test access to the ESXi address port</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Replace the IP address of ESXi in the command with the actual IP address from the production environment.</p>
</div>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh -v -p 443 &#x3C;ESXi IP Address></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Test command:</p>
<p>If the input result includes the information '[debug1: Connection established.],' it indicates that the network connection is successful.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 58: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to 192.168.10.2 [ESXi IP Address] port 443.</span></span>
<span class="line"><span>debug1: Connection established.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="add-the-failback-transition-host-to-hyperbdr" tabindex="-1"><a class="header-anchor" href="#add-the-failback-transition-host-to-hyperbdr"><span>Add the Failback Transition Host to HyperBDR</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The deployment of the HyperBDR has been completed by default.</p>
</div>
<h3 id="log-in-to-the-hyperbdr-console" tabindex="-1"><a class="header-anchor" href="#log-in-to-the-hyperbdr-console"><span>Log in to the HyperBDR console</span></a></h3>
<figure><img src="@source/userguide/poc/images/configure-hyperbdr-host-failback-1.png" alt="configure-hyperbdr-host-failback-1.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-1.png</figcaption></figure>
<h3 id="add-the-failback-transition-host" tabindex="-1"><a class="header-anchor" href="#add-the-failback-transition-host"><span>Add the Failback Transition Host</span></a></h3>
<p><strong>Step 1.</strong> On the top navigation bar, select &quot;Configuration&quot;, choose &quot;Generic Storage&quot; in the left menu, and click &quot;Add&quot; on the &quot;Failback&quot; - &quot;Failback Storage Gateway&quot; tab.</p>
<figure><img src="@source/userguide/poc/images/configure-hyperbdr-host-failback-2.png" alt="configure-hyperbdr-host-failback-2.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-2.png</figcaption></figure>
<p><strong>Step 2.</strong> Follow the instructions in the form to create the Generic Storage &quot;Failback Transition Host&quot;. Choose &quot;Block Storage&quot; or &quot;Object Storage&quot; as the Failback Method, fill in the information for the generic storage failback Transition Host, and after confirming, click &quot;Next&quot;.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Choose &quot;Object Storage&quot; or &quot;Block Storage&quot; based on your storage type to configure the &quot;Failback Method&quot;.</p>
</div>
<figure><img src="@source/userguide/poc/images/configure-hyperbdr-host-failback-3.png" alt="configure-hyperbdr-host-failback-3.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-3.png</figcaption></figure>
<p><strong>Step 3.</strong> The &quot;Driver Adaption&quot; option can remain at its default setting.</p>
<figure><img src="@source/userguide/poc/images/configure-hyperbdr-host-failback-4.png" alt="configure-hyperbdr-host-failback-4.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-4.png</figcaption></figure>
<p><strong>Step 4.</strong> The status of the general storage failback Transition Host should be &quot;Available&quot;.</p>
<figure><img src="@source/userguide/poc/images/configure-hyperbdr-host-failback-5.png" alt="configure-hyperbdr-host-failback-5.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-5.png</figcaption></figure>
<h2 id="verify-the-status-of-the-failback-transition-host" tabindex="-1"><a class="header-anchor" href="#verify-the-status-of-the-failback-transition-host"><span>Verify the status of the Failback Transition Host</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The deployment of the HyperBDR has been completed by default.</p>
</div>
<h3 id="log-in-to-the-hyperbdr-console-1" tabindex="-1"><a class="header-anchor" href="#log-in-to-the-hyperbdr-console-1"><span>Log in to the HyperBDR console</span></a></h3>
<figure><img src="@source/userguide/poc/images/configure-hyperbdr-host-failback-6.png" alt="configure-hyperbdr-host-failback-6.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-6.png</figcaption></figure>
<h3 id="check-the-status-of-the-failback-transition-host" tabindex="-1"><a class="header-anchor" href="#check-the-status-of-the-failback-transition-host"><span>Check the status of the Failback Transition Host</span></a></h3>
<p>On the top navigation bar, select &quot;Configuration&quot;, choose &quot;Generic Storage&quot; in the left menu, and click on the [Failback Gateway] you want to confirm.</p>
<figure><img src="@source/userguide/poc/images/configure-hyperbdr-host-failback-7.png" alt="configure-hyperbdr-host-failback-7.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-7.png</figcaption></figure>
<p>Confirm that the status of this Failback Transition Host is [<strong>available</strong>].</p>
<figure><img src="@source/userguide/poc/images/configure-hyperbdr-host-failback-8.png" alt="configure-hyperbdr-host-failback-8.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-8.png</figcaption></figure>
<h2 id="apply-for-hyperbdr-failback-license" tabindex="-1"><a class="header-anchor" href="#apply-for-hyperbdr-failback-license"><span>Apply for HyperBDR Failback License</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The deployment of the HyperBDR has been completed by default.</p>
</div>
<h3 id="log-in-the-hyperbdr-console" tabindex="-1"><a class="header-anchor" href="#log-in-the-hyperbdr-console"><span>Log in the HyperBDR console</span></a></h3>
<figure><img src="@source/userguide/poc/images/configure-hyperbdr-host-failback-9.png" alt="configure-hyperbdr-host-failback-9.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-9.png</figcaption></figure>
<h3 id="activate-a-failback-license" tabindex="-1"><a class="header-anchor" href="#activate-a-failback-license"><span>Activate a Failback License</span></a></h3>
<p>Select [<strong>Settings</strong>] &gt; [<strong>License Management</strong>] &gt; [<strong>Failback License</strong>], and click [<strong>Add</strong>].</p>
<figure><img src="@source/userguide/poc/images/configure-hyperbdr-host-failback-10.png" alt="configure-hyperbdr-host-failback-10.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-10.png</figcaption></figure>
<h3 id="retrieve-the-failback-license-activation-code" tabindex="-1"><a class="header-anchor" href="#retrieve-the-failback-license-activation-code"><span>Retrieve the Failback License activation code</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>There are two methods to obtain the Failback License activation code.</p>
</div>
<h4 id="activate-using-the-qr-code" tabindex="-1"><a class="header-anchor" href="#activate-using-the-qr-code"><span>Activate using the QR code</span></a></h4>
<figure><img src="@source/userguide/poc/images/configure-hyperbdr-host-failback-11.png" alt="configure-hyperbdr-host-failback-11.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-11.png</figcaption></figure>
<p>Scan the QR code and fill out the application form. Customer service will send the activation code to the user via email (as an attachment) after reviewing the application.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Please ensure that the email address provided on the application form is accurate; otherwise, you will not receive the activation code.</p>
</div>
<figure><img src="@source/userguide/poc/images/configure-hyperbdr-host-failback-12.png" alt="configure-hyperbdr-host-failback-12.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-12.png</figcaption></figure>
<p>After filling in the received activation code, click [<strong>Activate</strong>].</p>
<figure><img src="@source/userguide/poc/images/configure-hyperbdr-host-failback-13.png" alt="configure-hyperbdr-host-failback-13.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-13.png</figcaption></figure>
<h4 id="activate-using-the-registration-code" tabindex="-1"><a class="header-anchor" href="#activate-using-the-registration-code"><span>Activate using the <strong>registration code</strong></span></a></h4>
<p>[<strong>click here</strong>] to obtain the registration code, and [<strong>Click copy the registration code</strong>].</p>
<figure><img src="@source/userguide/poc/images/configure-hyperbdr-host-failback-14.png" alt="configure-hyperbdr-host-failback-14.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-14.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/configure-hyperbdr-host-failback-15.png" alt="configure-hyperbdr-host-failback-15.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-15.png</figcaption></figure>
<p>You can send the registration code to the sales representative or email it to <strong>enquiry@oneprocloud.com</strong>. After receiving the activation code, fill it in and click [<strong>Activate</strong>].</p>
<figure><img src="@source/userguide/poc/images/configure-hyperbdr-host-failback-16.png" alt="configure-hyperbdr-host-failback-16.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-16.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/configure-hyperbdr-host-failback-17.png" alt="configure-hyperbdr-host-failback-17.png" tabindex="0" loading="lazy"><figcaption>configure-hyperbdr-host-failback-17.png</figcaption></figure>
<h2 id="download-the-failback-transition-image-for-the-failback-transition-host" tabindex="-1"><a class="header-anchor" href="#download-the-failback-transition-image-for-the-failback-transition-host"><span>Download the Failback Transition Image for the Failback Transition Host</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Choose the available Failback Transition Image file according to the production environment on the source. You will need to use the Failback Transition Image to create a virtual machine/physical machine in the source production environment.</p>
</div>
<h3 id="download-iso-format-image" tabindex="-1"><a class="header-anchor" href="#download-iso-format-image"><span>Download ISO Format Image</span></a></h3>
<p>Failback Transition Image download link：<a href="https://downloads.oneprocloud.com/Livecd-HyperDoor.iso" target="_blank" rel="noopener noreferrer">https://downloads.oneprocloud.com/Livecd-HyperDoor.iso</a></p>
<h3 id="download-qcow2-format-image" tabindex="-1"><a class="header-anchor" href="#download-qcow2-format-image"><span>Download QCOW2 Format Image</span></a></h3>
<p>Failback Transition Image download link：<a href="https://downloads.oneprocloud.com/Livecd-HyperDoor.qcow2" target="_blank" rel="noopener noreferrer">https://downloads.oneprocloud.com/Livecd-HyperDoor.qcow2</a></p>
<h3 id="download-vmdk-format-image" tabindex="-1"><a class="header-anchor" href="#download-vmdk-format-image"><span>Download VMDK Format Image</span></a></h3>
<p>Failback Transition Image download link：<a href="https://downloads.oneprocloud.com/Livecd-HyperDoor.vmdk" target="_blank" rel="noopener noreferrer">https://downloads.oneprocloud.com/Livecd-HyperDoor.vmdk</a></p>
<h2 id="add-huawei-cloud-object-storage-failback" tabindex="-1"><a class="header-anchor" href="#add-huawei-cloud-object-storage-failback"><span>Add Huawei Cloud Object Storage (Failback)</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Already logged in to the HyperBDR console by default.<br>
Using the provided IAM account AK/SK information, configure and add Huawei Cloud Object Storage bucket in the HyperBDR console.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The following operations use Huawei Cloud Object Storage as an example. Please choose the corresponding object storage based on your actual disaster recovery scenario.</p>
</div>
<h3 id="configure-step" tabindex="-1"><a class="header-anchor" href="#configure-step"><span>Configure Step</span></a></h3>
<ul>
<li>Step 1. Click on the top menu bar 'Configuration,' 'Storage,' 'Object Storage.' Select 'fallback' tab, Click the 'Add' button.</li>
</ul>
<figure><img src="@source/userguide/poc/images/add-huawei-cloud-object-storage-failback-1.png" alt="add-huawei-cloud-object-storage-failback-1.png" tabindex="0" loading="lazy"><figcaption>add-huawei-cloud-object-storage-failback-1.png</figcaption></figure>
<ul>
<li>Step 2. On the object storage platform, select the Huawei Cloud object storage region.</li>
</ul>
<figure><img src="@source/userguide/poc/images/add-huawei-cloud-object-storage-failback-2.png" alt="add-huawei-cloud-object-storage-failback-2.png" tabindex="0" loading="lazy"><figcaption>add-huawei-cloud-object-storage-failback-2.png</figcaption></figure>
<ul>
<li>Step 3. Using the provided IAM account AK/SK information，After confirmation, click 'Next'.</li>
</ul>
<figure><img src="@source/userguide/poc/images/add-huawei-cloud-object-storage-failback-3.png" alt="add-huawei-cloud-object-storage-failback-3.png" tabindex="0" loading="lazy"><figcaption>add-huawei-cloud-object-storage-failback-3.png</figcaption></figure>
<ul>
<li>Step 4. After setting the name of the object storage bucket, click 'Submit'.</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>You can use existing object buckets within the region, or create new object buckets and customize their names.</p>
</div>
<figure><img src="@source/userguide/poc/images/add-huawei-cloud-object-storage-failback-4.png" alt="add-huawei-cloud-object-storage-failback-4.png" tabindex="0" loading="lazy"><figcaption>add-huawei-cloud-object-storage-failback-4.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/add-huawei-cloud-object-storage-failback-5.png" alt="add-huawei-cloud-object-storage-failback-5.png" tabindex="0" loading="lazy"><figcaption>add-huawei-cloud-object-storage-failback-5.png</figcaption></figure>
<ul>
<li>Step 5. Object storage(Failback) addition completed.</li>
</ul>
<figure><img src="@source/userguide/poc/images/add-huawei-cloud-object-storage-failback-6.png" alt="add-huawei-cloud-object-storage-failback-6.png" tabindex="0" loading="lazy"><figcaption>add-huawei-cloud-object-storage-failback-6.png</figcaption></figure>
</div></template>


