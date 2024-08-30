<template><div><h1 id="hyperbdr-setup" tabindex="-1"><a class="header-anchor" href="#hyperbdr-setup"><span>HyperBDR Setup</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#download-hyperbdr-installation-package">Download HyperBDR Installation Package</router-link><ul><li><router-link to="#installation-package-information">Installation Package Information</router-link></li><li><router-link to="#download-installation-package-and-md5-checksum-file">Download Installation Package and MD5 Checksum File</router-link></li><li><router-link to="#installation-package-consistency-check">Installation Package Consistency Check</router-link></li></ul></li><li><router-link to="#install-hyperbdr">Install HyperBDR</router-link><ul><li><router-link to="#unzip-the-hyperbdr-installation-package">Unzip the HyperBDR installation package</router-link></li><li><router-link to="#run-the-installation-script">Run the installation script</router-link></li></ul></li><li><router-link to="#apply-for-hyperbdr-license">Apply for HyperBDR License</router-link><ul><li><router-link to="#activate-a-license">Activate a License</router-link></li></ul></li><li><router-link to="#verify-sync-proxy-registration-in-hyperbdr">Verify Sync Proxy Registration in HyperBDR</router-link><ul><li><router-link to="#check-the-status-of-the-sync-proxy-node">Check The Status Of The Sync Proxy Node</router-link></li></ul></li><li><router-link to="#add-vmware-credentials">Add VMware Credentials</router-link><ul><li><router-link to="#add-vmware-to-the-hyperbdr">Add VMware To The HyperBDR</router-link></li></ul></li><li><router-link to="#add-aws-credentials">Add AWS Credentials</router-link><ul><li><router-link to="#add-aws-to-the-hyperbdr">Add AWS to the HyperBDR</router-link></li></ul></li><li><router-link to="#verify-vmware-status-in-hyperbdr">Verify VMware Status in HyperBDR</router-link><ul><li><router-link to="#check-the-status-of-the-vmware-connection">Check the status of the VMware Connection</router-link></li></ul></li><li><router-link to="#verify-aws-status-in-hyperbdr">Verify AWS Status in HyperBDR</router-link><ul><li><router-link to="#check-the-status-of-the-aws-connection">Check the status of the AWS Connection</router-link></li></ul></li><li><router-link to="#add-object-storage">Add Object Storage</router-link><ul><li><router-link to="#configure-step">Configure Step</router-link></li></ul></li><li><router-link to="#add-object-dr-gateway">Add Object DR Gateway</router-link><ul><li><router-link to="#configure-step-1">Configure Step</router-link></li></ul></li><li><router-link to="#add-vmware-hosts-in-hyperbdr">Add VMware Hosts in HyperBDR</router-link><ul><li><router-link to="#configure-step-2">Configure Step</router-link></li></ul></li><li><router-link to="#add-aws-ec2-to-hyperbdr">Add AWS EC2 to HyperBDR</router-link><ul><li><router-link to="#configure-step-3">Configure Step</router-link></li></ul></li><li><router-link to="#bind-unbind-sync-proxy-to-vmware-production-site">Bind/Unbind Sync Proxy to VMware Production Site</router-link><ul><li><router-link to="#configure-step-4">Configure Step</router-link></li></ul></li></ul></nav>
<h2 id="download-hyperbdr-installation-package" tabindex="-1"><a class="header-anchor" href="#download-hyperbdr-installation-package"><span>Download HyperBDR Installation Package</span></a></h2>
<h3 id="installation-package-information" tabindex="-1"><a class="header-anchor" href="#installation-package-information"><span>Installation Package Information</span></a></h3>
<h4 id="installation-package" tabindex="-1"><a class="header-anchor" href="#installation-package"><span>Installation Package</span></a></h4>
<blockquote>
<p>File Name: <strong>HyperBDR_release_v5.7.0_20240731-20240731-3881.tar.gz</strong><br>
Download Link: <a href="https://downloads.oneprocloud.com/HyperBDR_release_v5.7.0_20240731-20240731-3881.tar.gz" target="_blank" rel="noopener noreferrer">https://downloads.oneprocloud.com/HyperBDR_release_v5.7.0_20240731-20240731-3881.tar.gz</a></p>
</blockquote>
<h4 id="md5-checksum-file" tabindex="-1"><a class="header-anchor" href="#md5-checksum-file"><span>MD5 Checksum File</span></a></h4>
<blockquote>
<p>File Name: <strong>HyperBDR_release_v5.7.0_20240731-20240731-3881.tar.gz.md5</strong><br>
Download Link: <a href="https://downloads.oneprocloud.com/HyperBDR_release_v5.7.0_20240731-20240731-3881.tar.gz.md5" target="_blank" rel="noopener noreferrer">https://downloads.oneprocloud.com/HyperBDR_release_v5.7.0_20240731-20240731-3881.tar.gz.md5</a></p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Log in to the HyperBDR host backend and execute the command.</p>
</div>
<h3 id="download-installation-package-and-md5-checksum-file" tabindex="-1"><a class="header-anchor" href="#download-installation-package-and-md5-checksum-file"><span>Download Installation Package and MD5 Checksum File</span></a></h3>
<h4 id="set-url-in-shell" tabindex="-1"><a class="header-anchor" href="#set-url-in-shell"><span>Set url in Shell</span></a></h4>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> HYPERBDR_PACKAGE</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">url</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Installation</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Package</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> HYPERBDR_PACKAGE_MD5</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">url</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> MD5</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Checksum</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> File</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> HYPERBDR_PACKAGE_NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">File</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Name</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Installation</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Package</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> HYPERBDR_PACKAGE_MD5_NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">File</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Name</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> MD5</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Checksum</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> File</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="download-file" tabindex="-1"><a class="header-anchor" href="#download-file"><span>Download File</span></a></h4>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -k</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -O</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$HYPERBDR_PACKAGE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -k</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -O</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$HYPERBDR_PACKAGE_MD5</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="installation-package-consistency-check" tabindex="-1"><a class="header-anchor" href="#installation-package-consistency-check"><span>Installation Package Consistency Check</span></a></h3>
<ul>
<li>Step1: Generate the MD5 value for the downloaded installation package</li>
</ul>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">md5sum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$HYPERBDR_PACKAGE_NAME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>Step2: Check the MD5 value recorded in the MD5 checksum file</li>
</ul>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$HYPERBDR_PACKAGE_MD5_NAME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>Step3: Compare MD5 Values</li>
</ul>
<p>If the MD5 values obtained in <code v-pre>Step1</code> and <code v-pre>Step2</code> are the same, it indicates that the installation package is not corrupted. If the MD5 values are different, you can try re-downloading the file for comparison or contact us for assistance.</p>
<h2 id="install-hyperbdr" tabindex="-1"><a class="header-anchor" href="#install-hyperbdr"><span>Install HyperBDR</span></a></h2>
<blockquote>
<p>After completing the download of the HyperBDR installation package, you can proceed to install it<br>
Already logged in to the Huawei Cloud HyperBDR ECS instance backend by default</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The operating system used for the installation must be Ubuntu 20.04 version.</p>
</div>
<h3 id="unzip-the-hyperbdr-installation-package" tabindex="-1"><a class="header-anchor" href="#unzip-the-hyperbdr-installation-package"><span>Unzip the HyperBDR installation package</span></a></h3>
<ul>
<li>Execute the following command to unzip the installation package</li>
</ul>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -zxvf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$HYPERBDR_PACKAGE_NAME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /mnt/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="run-the-installation-script" tabindex="-1"><a class="header-anchor" href="#run-the-installation-script"><span>Run the installation script</span></a></h3>
<h4 id="enable-public-access-to-the-hyperbdr-platform" tabindex="-1"><a class="header-anchor" href="#enable-public-access-to-the-hyperbdr-platform"><span>Enable public access to the HyperBDR platform</span></a></h4>
<ul>
<li>Execute the command</li>
</ul>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /mnt/installer/install.sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> EI</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>In Huawei Cloud, the Elastic IP (EIP) service enables your cloud resources to communicate with the Internet using static public IP addresses and outbound bandwidth services. After configuring an EIP for a resource, it gains direct access to the Internet. If a resource is configured only with a private IP, it cannot access the Internet directly. In another cloud platforms, it may be referred to by a different names, such as 'Public IP address' in Azure.</p>
</div>
<h4 id="access-the-hyperbdr-platform-through-an-internal-vpn" tabindex="-1"><a class="header-anchor" href="#access-the-hyperbdr-platform-through-an-internal-vpn"><span>Access the HyperBDR platform through an internal VPN</span></a></h4>
<ul>
<li>Execute the command</li>
</ul>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /mnt/installer/install.sh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>By default, the installation script uses the address of the first network interface card as the platform service address.</p>
</div>
<p>If the installation is successful, you will see the prompted login information.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[2023-03-30 23:08:36] [INFO] --------------------------------------------------</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO] Congratulations! The installation of HyperBDR is complete.</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO]</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO] DR        : https://192.168.12.81:10443</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO] Migration : https://192.168.12.81:20443</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO] Admin     : https://192.168.12.81:30443</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO]</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO] The default username and password : admin / P@ssw0rd</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO]</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO] If you have any questions or need assistance, please refer</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO] to the user manual or contact our support team.</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO]</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO] Enjoy using our product!</span></span>
<span class="line"><span>[2023-03-30 23:08:36] [INFO] --------------------------------------------------</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Access HyperBDR Console   url：https://&lt;HyperBDR IP&gt;:10443</p>
<h2 id="apply-for-hyperbdr-license" tabindex="-1"><a class="header-anchor" href="#apply-for-hyperbdr-license"><span>Apply for HyperBDR License</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Already logged in to the HyperBDR Console  by default.</p>
</div>
<h3 id="activate-a-license" tabindex="-1"><a class="header-anchor" href="#activate-a-license"><span>Activate a License</span></a></h3>
<p>Go to [Settings]-&gt;[Licenses], then click the [+Add] button:</p>
<figure><img src="@source/userguide/poc/images/hyperbdr-license-activation-guide-1.png" alt="hyperbdr-license-activation-guide-1.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-license-activation-guide-1.png</figcaption></figure>
<p>There are two ways to activate a license:</p>
<h4 id="i-activate-a-license-by-using-the-qr-code" tabindex="-1"><a class="header-anchor" href="#i-activate-a-license-by-using-the-qr-code"><span>I. Activate a license by using the QR code</span></a></h4>
<figure><img src="@source/userguide/poc/images/hyperbdr-license-activation-guide-2.png" alt="hyperbdr-license-activation-guide-2.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-license-activation-guide-2.png</figcaption></figure>
<p>Scan the QR code and fill in the application form. OnePro Cloud customer service will email user the activation code after reviewing the application.</p>
<p>Fill in the activation code and click the [Activate] button.</p>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>Please make sure the email address provided on the application form is correct, otherwise activation code will not be received.</p>
</div>
<h4 id="ii-activate-a-license-by-using-the-activation-code" tabindex="-1"><a class="header-anchor" href="#ii-activate-a-license-by-using-the-activation-code"><span>II. Activate a license by using the activation code</span></a></h4>
<figure><img src="@source/userguide/poc/images/hyperbdr-license-activation-guide-3.png" alt="hyperbdr-license-activation-guide-3.png" tabindex="0" loading="lazy"><figcaption>hyperbdr-license-activation-guide-3.png</figcaption></figure>
<p>Copy and email the registration code to OnePro Cloud and customer service will email user the activation code.</p>
<p>Fill in the activation code and click the [Activate] button.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>User can send the registration code to OnePro Cloud sales representative or <em><a href="mailto:enquiry@oneprocloud.com" target="_blank" rel="noopener noreferrer">enquiry@oneprocloud.com</a></em>._</p>
</div>
<h2 id="verify-sync-proxy-registration-in-hyperbdr" tabindex="-1"><a class="header-anchor" href="#verify-sync-proxy-registration-in-hyperbdr"><span>Verify Sync Proxy Registration in HyperBDR</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>After the Sync Proxy Node installation is completed, it will automatically be added to HyperBDR, and you can view this Sync Proxy Node machine in HyperBDR.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Already logged in to the HyperBDR Console  by default.</p>
</div>
<figure><img src="@source/userguide/poc/images/verify-proxy-registration-in-hyperbdr-1.png" alt="verify-proxy-registration-in-hyperbdr-1.png" tabindex="0" loading="lazy"><figcaption>verify-proxy-registration-in-hyperbdr-1.png</figcaption></figure>
<h3 id="check-the-status-of-the-sync-proxy-node" tabindex="-1"><a class="header-anchor" href="#check-the-status-of-the-sync-proxy-node"><span>Check The Status Of The Sync Proxy Node</span></a></h3>
<p>Click on the top menu bar 'Configuration,' 'Production Site,' 'SyncNode' to view the Sync Proxy Node host. If you can see this host and status is 'online,' it indicates that it has been successfully registered with HyperBDR, and you can proceed with further configuration and usage.</p>
<figure><img src="@source/userguide/poc/images/verify-proxy-registration-in-hyperbdr-2.png" alt="verify-proxy-registration-in-hyperbdr-2.png" tabindex="0" loading="lazy"><figcaption>verify-proxy-registration-in-hyperbdr-2.png</figcaption></figure>
<h2 id="add-vmware-credentials" tabindex="-1"><a class="header-anchor" href="#add-vmware-credentials"><span>Add VMware Credentials</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Using the pre-prepared VMware account information, add VMware to the HyperBDR platform as a disaster recovery source-side production platform.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Already logged in to the HyperBDR Console  by default.</p>
</div>
<figure><img src="@source/userguide/poc/images/add-vmware-credentials-1.png" alt="add-vmware-credentials-1.png" tabindex="0" loading="lazy"><figcaption>add-vmware-credentials-1.png</figcaption></figure>
<h3 id="add-vmware-to-the-hyperbdr" tabindex="-1"><a class="header-anchor" href="#add-vmware-to-the-hyperbdr"><span>Add VMware To The HyperBDR</span></a></h3>
<p>Click on the top menu bar 'Configuration,' 'Production Site,' 'VMware.' Click the 'Add' button, then on the popped-up page, click the 'Next' button. Follow the prompts to fill in the VMware information and click the 'Submit' button.</p>
<figure><img src="@source/userguide/poc/images/add-vmware-credentials-2.png" alt="add-vmware-credentials-2.png" tabindex="0" loading="lazy"><figcaption>add-vmware-credentials-2.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/add-vmware-credentials-3.png" alt="add-vmware-credentials-3.png" tabindex="0" loading="lazy"><figcaption>add-vmware-credentials-3.png</figcaption></figure>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>If the EXSi host where the synchronized VM is located uses domain name, Sync Proxy will be unable to access the EXSi host because it cannot resolve the domain name. Need to configure source domain setting on HyperBDR/HyperMotion.<br>
Please refer to the documentation for configuration: <a href="https://qa.oneprocloud.com/questions/D1E4" target="_blank" rel="noopener noreferrer">https://qa.oneprocloud.com/questions/D1E4</a></p>
</div>
<table>
<thead>
<tr>
<th>Auth Url</th>
<th>https://&lt;vCenter IP/Domain Name&gt;:443</th>
</tr>
</thead>
<tbody>
<tr>
<td>user</td>
<td>&lt;vCenter user&gt;</td>
</tr>
<tr>
<td>password</td>
<td>&lt;vCenter password&gt;</td>
</tr>
<tr>
<td>SyncNode</td>
<td>&lt;Sync Proxy Node IP&gt;</td>
</tr>
</tbody>
</table>
<figure><img src="@source/userguide/poc/images/add-vmware-credentials-4.png" alt="add-vmware-credentials-4.png" tabindex="0" loading="lazy"><figcaption>add-vmware-credentials-4.png</figcaption></figure>
<h2 id="add-aws-credentials" tabindex="-1"><a class="header-anchor" href="#add-aws-credentials"><span>Add AWS Credentials</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Using the pre-prepared AWS account information, add AWS to the HyperBDR platform as a disaster recovery source-side production platform.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Already logged in to the HyperBDR Console  by default.</p>
</div>
<figure><img src="@source/userguide/poc/images/add-aws-credentials-1.png" alt="add-aws-credentials-1.png" tabindex="0" loading="lazy"><figcaption>add-aws-credentials-1.png</figcaption></figure>
<h3 id="add-aws-to-the-hyperbdr" tabindex="-1"><a class="header-anchor" href="#add-aws-to-the-hyperbdr"><span>Add AWS to the HyperBDR</span></a></h3>
<p>Click on the top menu bar 'Configuration,' 'Production Site', 'AWS' Click the 'Add' button, then on the popped-up page, click the 'Next' button. Follow the prompts to fill in the VMware information and click the 'Submit' button.</p>
<p><img src="@source/userguide/poc/images/add-aws-credentials-2.png" alt="add-aws-credentials-2.png" loading="lazy">
<img src="@source/userguide/poc/images/add-aws-credentials-3.png" alt="add-aws-credentials-3.png" loading="lazy"></p>
<table>
<thead>
<tr>
<th>Item</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Access Key ID</td>
<td>Access to AWS Access Key, which has full permissions for the account.</td>
</tr>
<tr>
<td>Access Key Secret</td>
<td>Get the AWS Access Key Secret and have full permissions for the account.</td>
</tr>
<tr>
<td>Region</td>
<td>The region of the machine to be synchronized.</td>
</tr>
<tr>
<td>Sync Proxy</td>
<td>The host IP of the Sync Proxy installed.</td>
</tr>
</tbody>
</table>
<figure><img src="@source/userguide/poc/images/add-aws-credentials-4.png" alt="add-aws-credentials-4.png" tabindex="0" loading="lazy"><figcaption>add-aws-credentials-4.png</figcaption></figure>
<h2 id="verify-vmware-status-in-hyperbdr" tabindex="-1"><a class="header-anchor" href="#verify-vmware-status-in-hyperbdr"><span>Verify VMware Status in HyperBDR</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Already logged in to the HyperBDR Console  by default.</p>
</div>
<figure><img src="@source/userguide/poc/images/verify-proxy-registration-in-hyperbdr-2.png" alt="verify-proxy-registration-in-hyperbdr-2.png" tabindex="0" loading="lazy"><figcaption>verify-proxy-registration-in-hyperbdr-2.png</figcaption></figure>
<h3 id="check-the-status-of-the-vmware-connection" tabindex="-1"><a class="header-anchor" href="#check-the-status-of-the-vmware-connection"><span>Check the status of the VMware Connection</span></a></h3>
<p>Click on the top menu bar 'Configuration,' 'Production Site,' 'VMware' to view the status of the added source-side VMware account, as well as obtain information such as the number of hosts. You can also click on the VMware name to check the detailed information and host details. If everything is normal, you can proceed with the subsequent configuration operations.</p>
<figure><img src="@source/userguide/poc/images/verify-vmware-status-in-hyperbdr-1.png" alt="verify-vmware-status-in-hyperbdr-1.png" tabindex="0" loading="lazy"><figcaption>verify-vmware-status-in-hyperbdr-1.png</figcaption></figure>
<p>If the status is 'Online,' it indicates that the addition was successful.</p>
<h2 id="verify-aws-status-in-hyperbdr" tabindex="-1"><a class="header-anchor" href="#verify-aws-status-in-hyperbdr"><span>Verify AWS Status in HyperBDR</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Already logged in to the HyperBDR Console  by default.</p>
</div>
<figure><img src="@source/userguide/poc/images/verify-aws-status-in-hyperbdr-1.png" alt="verify-aws-status-in-hyperbdr-1.png" tabindex="0" loading="lazy"><figcaption>verify-aws-status-in-hyperbdr-1.png</figcaption></figure>
<h3 id="check-the-status-of-the-aws-connection" tabindex="-1"><a class="header-anchor" href="#check-the-status-of-the-aws-connection"><span>Check the status of the AWS Connection</span></a></h3>
<p>Click on the top menu bar 'Configuration,' 'Production Site,' 'AWS' to view the status of the added source-side AWS account, as well as obtain information such as the number of hosts. You can also click on the AWS  connections name to check the detailed information and host details. If everything is normal, you can proceed with the subsequent configuration operations.</p>
<figure><img src="@source/userguide/poc/images/verify-aws-status-in-hyperbdr-2.png" alt="verify-aws-status-in-hyperbdr-2.png" tabindex="0" loading="lazy"><figcaption>verify-aws-status-in-hyperbdr-2.png</figcaption></figure>
<p>If the status is 'Online,' it indicates that the addition was successful.</p>
<h2 id="add-object-storage" tabindex="-1"><a class="header-anchor" href="#add-object-storage"><span>Add Object Storage</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Already logged in to the HyperBDR Console  by default.</p>
</div>
<figure><img src="@source/userguide/poc/images/add-vmware-credentials-1.png" alt="add-vmware-credentials-1.png" tabindex="0" loading="lazy"><figcaption>add-vmware-credentials-1.png</figcaption></figure>
<h3 id="configure-step" tabindex="-1"><a class="header-anchor" href="#configure-step"><span>Configure Step</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The following operations use Huawei Cloud Object Storage as an example. Please choose the corresponding object storage based on your actual disaster recovery scenario.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Using the provided IAM account AK/SK information, configure and add Huawei Cloud Object Storage bucket in the HyperBDR Console .</p>
</div>
<ul>
<li>Step1: &quot;Click on the top menu bar 'Configuration,' 'Storage,' 'Object Storage.' Click the 'Add' button.</li>
</ul>
<figure><img src="@source/userguide/poc/images/add-object-storage-1.png" alt="add-object-storage-1.png" tabindex="0" loading="lazy"><figcaption>add-object-storage-1.png</figcaption></figure>
<ul>
<li>Step2: Fill in or select the corresponding parameters according to the prompts, click 'Submit,' and wait for the completion.</li>
</ul>
<figure><img src="@source/userguide/poc/images/add-object-storage-2.png" alt="add-object-storage-2.png" tabindex="0" loading="lazy"><figcaption>add-object-storage-2.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/add-object-storage-3.png" alt="add-object-storage-3.png" tabindex="0" loading="lazy"><figcaption>add-object-storage-3.png</figcaption></figure>
<h2 id="add-object-dr-gateway" tabindex="-1"><a class="header-anchor" href="#add-object-dr-gateway"><span>Add Object DR Gateway</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Already logged in to the HyperBDR Console  by default.</p>
</div>
<figure><img src="@source/userguide/poc/images/add-vmware-credentials-1.png" alt="add-vmware-credentials-1.png" tabindex="0" loading="lazy"><figcaption>add-vmware-credentials-1.png</figcaption></figure>
<h3 id="configure-step-1" tabindex="-1"><a class="header-anchor" href="#configure-step-1"><span>Configure Step</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The following operations use Huawei Cloud as an example. Please choose the corresponding disaster recovery target cloud based on your actual disaster recovery scenario.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Using the provided IAM account AK/SK information, Configure and add Huawei Cloud Object DR Gateway in the HyperBDR Console</p>
</div>
<p>Click on the top menu bar &quot;Configuration,&quot; &quot;Disaster Recovery Site,&quot; &quot;Object DR Gateway.&quot; Click the &quot;Add&quot; button, fill in or select the corresponding parameters as prompted, click &quot;Submit,&quot; and wait for the completion.</p>
<figure><img src="@source/userguide/poc/images/add-dr-recovery-gateway-1.png" alt="add-dr-recovery-gateway-1.png" tabindex="0" loading="lazy"><figcaption>add-dr-recovery-gateway-1.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/add-dr-recovery-gateway-2.png" alt="add-dr-recovery-gateway-2.png" tabindex="0" loading="lazy"><figcaption>add-dr-recovery-gateway-2.png</figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Windows UEFI Fixes Image uses the private Windows image you uploaded.</p>
<p>Document link: <a href="https://docs.oneprocloud.com/userguide/poc/huaweicloud-pre-settings.html#image-download-upload" target="_blank" rel="noopener noreferrer">https://docs.oneprocloud.com/userguide/poc/huaweicloud-pre-settings.html#image-download-upload</a></p>
</div>
<figure><img src="@source/userguide/poc/images/add-dr-recovery-gateway-3.png" alt="add-dr-recovery-gateway-3.png" tabindex="0" loading="lazy"><figcaption>add-dr-recovery-gateway-3.png</figcaption></figure>
<h2 id="add-vmware-hosts-in-hyperbdr" tabindex="-1"><a class="header-anchor" href="#add-vmware-hosts-in-hyperbdr"><span>Add VMware Hosts in HyperBDR</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Already logged in to the HyperBDR Console  by default.<br>
Already Add VMware Connection to  the HyperBDR by default.</p>
</div>
<figure><img src="@source/userguide/poc/images/add-vmware-credentials-1.png" alt="add-vmware-credentials-1.png" tabindex="0" loading="lazy"><figcaption>add-vmware-credentials-1.png</figcaption></figure>
<h3 id="configure-step-2" tabindex="-1"><a class="header-anchor" href="#configure-step-2"><span>Configure Step</span></a></h3>
<p>Click on the top menu bar &quot;DR,&quot; &quot;Host DR,&quot; click the &quot;Add Host&quot; button, select &quot;Agentless,&quot; &quot;VMware,&quot; choose the previously added VMware account, filter and select the desired disaster recovery hosts, and finally click confirm. Once the selection is complete, click confirm to add the VMware disaster recovery hosts to the disaster recovery platform.</p>
<figure><img src="@source/userguide/poc/images/add-vmware-hosts-in-hyperbdr-1.png" alt="add-vmware-hosts-in-hyperbdr-1.png" tabindex="0" loading="lazy"><figcaption>add-vmware-hosts-in-hyperbdr-1.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/add-vmware-hosts-in-hyperbdr-2.png" alt="add-vmware-hosts-in-hyperbdr-2.png" tabindex="0" loading="lazy"><figcaption>add-vmware-hosts-in-hyperbdr-2.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/add-vmware-hosts-in-hyperbdr-3.png" alt="add-vmware-hosts-in-hyperbdr-3.png" tabindex="0" loading="lazy"><figcaption>add-vmware-hosts-in-hyperbdr-3.png</figcaption></figure>
<figure><img src="@source/userguide/poc/images/add-vmware-hosts-in-hyperbdr-4.png" alt="add-vmware-hosts-in-hyperbdr-4.png" tabindex="0" loading="lazy"><figcaption>add-vmware-hosts-in-hyperbdr-4.png</figcaption></figure>
<h2 id="add-aws-ec2-to-hyperbdr" tabindex="-1"><a class="header-anchor" href="#add-aws-ec2-to-hyperbdr"><span>Add AWS EC2 to HyperBDR</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Already logged in to the HyperBDR Console  by default.<br>
Already Add AWS Connection to  the HyperBDR by default.</p>
</div>
<figure><img src="@source/userguide/poc/images/add-aws-ec2-to-hyperbdr-1.png" alt="add-aws-ec2-to-hyperbdr-1.png" tabindex="0" loading="lazy"><figcaption>add-aws-ec2-to-hyperbdr-1.png</figcaption></figure>
<h3 id="configure-step-3" tabindex="-1"><a class="header-anchor" href="#configure-step-3"><span>Configure Step</span></a></h3>
<p>Click on the top menu bar &quot;DR,&quot; &quot;Host DR,&quot; click the &quot;Add Host&quot; button, select &quot;Agentless,&quot; &quot;AWS&quot;, choose the previously added AWS account, filter and select the desired disaster recovery hosts, and finally click confirm. Once the selection is complete, click confirm to add the AWS disaster recovery EC2 to the disaster recovery platform.</p>
<p><img src="@source/userguide/poc/images/add-aws-ec2-to-hyperbdr-2.png" alt="add-aws-ec2-to-hyperbdr-2.png" loading="lazy">
<img src="@source/userguide/poc/images/add-aws-ec2-to-hyperbdr-3.png" alt="add-aws-ec2-to-hyperbdr-3.png" loading="lazy">
<img src="@source/userguide/poc/images/add-aws-ec2-to-hyperbdr-4.png" alt="add-aws-ec2-to-hyperbdr-4.png" loading="lazy"></p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If the EC2 you newly created on the cloud platform is not displayed in the list below, please click the &quot;Reload Virtual Machine&quot; button to reload it into this list.</p>
</div>
<figure><img src="@source/userguide/poc/images/add-aws-ec2-to-hyperbdr-5.png" alt="add-aws-ec2-to-hyperbdr-5.png" tabindex="0" loading="lazy"><figcaption>add-aws-ec2-to-hyperbdr-5.png</figcaption></figure>
<h2 id="bind-unbind-sync-proxy-to-vmware-production-site" tabindex="-1"><a class="header-anchor" href="#bind-unbind-sync-proxy-to-vmware-production-site"><span>Bind/Unbind Sync Proxy to VMware Production Site</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>By default, each Sync Proxy supports up to 50 disks for simultaneous synchronization in Agentless mode. When the total number of disks to be synchronized on the source VMs is greater than 50, you need to expand the Agentless Sync Proxy.</p>
</div>
<h3 id="configure-step-4" tabindex="-1"><a class="header-anchor" href="#configure-step-4"><span>Configure Step</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Already logged in to the HyperBDR Console  by default.<br>
Already Add VMware Connection to  the HyperBDR by default.</p>
</div>
<ol>
<li>Click on the top menu bar &quot;<strong>Configuration</strong>&quot; &gt; &quot;<strong>Production Site</strong>&quot; &gt; &quot;<strong>Sync Proxy</strong>&quot;.</li>
</ol>
<blockquote>
<p>The installed Sync Proxy will be displayed on this page.
<img src="@source/userguide/poc/images/bind-sync-proxy-1.png" alt="bind-sync-proxy-1.png" loading="lazy"></p>
</blockquote>
<ol start="2">
<li>Select the installed Sync Proxy, click &quot;<strong>Action</strong>&quot; &gt; &quot;<strong>bind</strong>&quot;.
<img src="@source/userguide/poc/images/bind-sync-proxy-2.png" alt="bind-sync-proxy-2.png" loading="lazy">
<img src="@source/userguide/poc/images/bind-sync-proxy-3.png" alt="bind-sync-proxy-3.png" loading="lazy"></li>
<li>Select the required link to bind the new Sync Proxy to the Production VMware Site, click &quot;<strong>Submit</strong>&quot; after confirmation.
<img src="@source/userguide/poc/images/bind-sync-proxy-4.png" alt="bind-sync-proxy-4.png" loading="lazy">
<img src="@source/userguide/poc/images/bind-sync-proxy-5.png" alt="bind-sync-proxy-5.png" loading="lazy"></li>
<li>View the Sync Proxy bundled with the Production VMware Site.
<img src="@source/userguide/poc/images/bind-sync-proxy-6.png" alt="bind-sync-proxy-6.png" loading="lazy">
<img src="@source/userguide/poc/images/bind-sync-proxy-7.png" alt="bind-sync-proxy-7.png" loading="lazy"></li>
<li>Unbaind Sync Proxy.</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>You can only unbind Sync Proxy that has no registered host.</p>
</div>
<p><img src="@source/userguide/poc/images/bind-sync-proxy-8.png" alt="bind-sync-proxy-8.png" loading="lazy">
<img src="@source/userguide/poc/images/bind-sync-proxy-9.png" alt="bind-sync-proxy-9.png" loading="lazy">
<img src="@source/userguide/poc/images/bind-sync-proxy-10.png" alt="bind-sync-proxy-10.png" loading="lazy"></p>
</div></template>


