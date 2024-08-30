<template><div><h1 id="hyperbdr-upgrade-manual" tabindex="-1"><a class="header-anchor" href="#hyperbdr-upgrade-manual"><span>HyperBDR Upgrade Manual</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#hyperbdr-server-upgrade">HyperBDR Server Upgrade</router-link><ul><li><router-link to="#obtain-the-upgrade-package-and-extract-it">Obtain the upgrade package and extract it</router-link></li><li><router-link to="#check-the-current-installed-version">Check the current installed version</router-link></li><li><router-link to="#update-the-service">Update the service</router-link></li><li><router-link to="#update-the-configuration-files">Update the configuration files</router-link></li><li><router-link to="#confirm-the-upgraded-version">Confirm the upgraded version</router-link></li></ul></li><li><router-link to="#update-linux-agent-windows-agent-and-agentless-sync-proxy">Update Linux Agent, Windows Agent and Agentless Sync Proxy</router-link><ul><li><router-link to="#restrictions">Restrictions</router-link></li><li><router-link to="#agentless-sync-proxy">Agentless Sync Proxy</router-link></li></ul></li><li><router-link to="#source-object-dr-gateway-upgrade">Source Object DR Gateway Upgrade</router-link></li></ul></nav>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Note: The minimum supported HyperBDR version for upgrading is HyperBDR 4.4.0. Versions below HyperBDR 4.4.0 are not supported for upgrading to the latest version.</p>
</div>
<h2 id="hyperbdr-server-upgrade" tabindex="-1"><a class="header-anchor" href="#hyperbdr-server-upgrade"><span>HyperBDR Server Upgrade</span></a></h2>
<p><a href="https://hyperbdr-system-image-do-not-delete.obs.ap-southeast-3.myhuaweicloud.com/upgrade_incremental_4.4.0_to_5.2.0.tar.gz" target="_blank" rel="noopener noreferrer">Upgrade Package download link</a></p>
<h3 id="obtain-the-upgrade-package-and-extract-it" tabindex="-1"><a class="header-anchor" href="#obtain-the-upgrade-package-and-extract-it"><span>Obtain the upgrade package and extract it</span></a></h3>
<ul>
<li>
<p>Step 1: Obtain the upgrade package URL.</p>
</li>
<li>
<p>Step2. Download the upgrade package to the <strong>HyperBDR Console</strong> operating system and extract it using the following command:</p>
</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> zxvf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> upgrade_incremental_4.4.0_to_4.9.0.tar.gz</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /tmp/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="check-the-current-installed-version" tabindex="-1"><a class="header-anchor" href="#check-the-current-installed-version"><span>Check the current installed version</span></a></h3>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/installer/Version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">HyperBDR_release_v4.9.0_20230928-20230927-1437.tar.gz</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">## The installed version is HyperBDR_release_v4.9.0_20230928</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>If the HyperBDR version is earlier than 4.6.0, perform the following additional steps:</p>
</blockquote>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@log images]# cd /tmp/upgrade/images</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@log images]# ls</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">influxdb-1.7.6.tar.gz</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  mariadb-10.3.36.tar.gz</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  rabbitmq-3.8.16.tar.gz</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  redis-7.0.2-alpine.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@log images]# docker load -i influxdb-1.7.6.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@log images]# docker load -i mariadb-10.3.36.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@log images]# docker load -i rabbitmq-3.8.16.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@log images]# docker load -i redis-7.0.2-alpine.tar.gz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="update-the-service" tabindex="-1"><a class="header-anchor" href="#update-the-service"><span>Update the service</span></a></h3>
<ul>
<li>Step1. Replace the update commands:</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /tmp/upgrade/scripts/common.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/installer/production/scripts/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /tmp/upgrade/scripts/hmctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/installer/production/scripts/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Step2. Execute the update command</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/opt/installer/production/scripts/hmctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> upgrade</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /tmp/upgrade/venvs</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="update-the-configuration-files" tabindex="-1"><a class="header-anchor" href="#update-the-configuration-files"><span>Update the configuration files</span></a></h3>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/installer/production/config/newmuse/json/config.json.bak</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/installer/production/config/newmuse/json/config.json</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/installer/production/config/newmuse/json/s3.json.bak</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/installer/production/config/newmuse/json/s3.json</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/installer/production/config/newmuse/json/targetClouds.json.bak</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/installer/production/config/newmuse/json/targetClouds.json</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/installer/production/config/newmuse-motion/json/config.json.bak</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/installer/production/config/newmuse-motion/json/config.json</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/installer/production/config/newmuse-motion/json/s3.json.bak</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/installer/production/config/newmuse-motion/json/s3.json</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/installer/production/config/newmuse-motion/json/targetClouds.json.bak</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/installer/production/config/newmuse-motion/json/targetClouds.json</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="confirm-the-upgraded-version" tabindex="-1"><a class="header-anchor" href="#confirm-the-upgraded-version"><span>Confirm the upgraded version</span></a></h3>
<p>After the upgrade is completed, execute the following command to view the current HyperBDR version:</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost installer]# cat /opt/installer/Version </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">HyperBDR_release_v5.2.0_20230928-20230927-1437.tar.gz</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">## The installed version is HyperBDR_release_v5.2.0_20230928</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="update-linux-agent-windows-agent-and-agentless-sync-proxy" tabindex="-1"><a class="header-anchor" href="#update-linux-agent-windows-agent-and-agentless-sync-proxy"><span>Update <strong>Linux Agent</strong>, <strong>Windows Agent</strong> and Agentless <strong>Sync Proxy</strong></span></a></h2>
<h3 id="restrictions" tabindex="-1"><a class="header-anchor" href="#restrictions"><span>Restrictions</span></a></h3>
<blockquote>
<p>Note: Upgrade the HyperBDR Server end first.
Versions before V4.10.1 installation package cannot be directly updated using the update script.
Updating operations are prohibited during tasks such as syncing hosts or starting hosts.</p>
</blockquote>
<h3 id="agentless-sync-proxy" tabindex="-1"><a class="header-anchor" href="#agentless-sync-proxy"><span>Agentless Sync Proxy</span></a></h3>
<ul>
<li>Step 1. Log in to the Agentless <em>Sync Proxy</em>* server</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> root@</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Agentless</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Sync</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Proxy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> IP</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Step 2. Get the latest update script</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -k</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/hyper_exporter/upgrade_hamal.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> IP</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:30080/softwares/upgrade_hamal.sh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Step 3. Grant execution permissions</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /root/upgrade.hamal.sh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Step 4. Execute the update command</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/hyper_exporter/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/hyper_exporter/upgrade_hamal.sh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="linux-agent" tabindex="-1"><a class="header-anchor" href="#linux-agent"><span>Linux Agent</span></a></h4>
<ul>
<li>Step 1. Log in to the Linux Agent host</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> root@</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Agent</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> IP</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Step 2. Get the latest update script</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -k</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /var/lib/egisplus-agent/upgrade_agent.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">HyperBDR-IP</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:30080/softwares/upgrade_agent.sh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Step 3. Execute the update script</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /var/lib/egisplus-agent/upgrade_agent.sh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="windows-agent" tabindex="-1"><a class="header-anchor" href="#windows-agent"><span>Windows Agent</span></a></h4>
<ul>
<li>
<p>Step 1. Log in to the source Windows Agent server desktop</p>
</li>
<li>
<p>Step 2. Download the update files to the Windows Agent server.</p>
</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># X64</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">https://</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;HyperBDR </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">IP</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:30080/softwares/windows-agent-new/upgrade_to_xxx_x64.zip</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># X86</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">https://</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;HyperBDR </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">IP</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:30080/softwares/windows-agent-new/upgrade_to_xxx_x86.zip</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/product-overview/operation/images/upgrade-hyperbdr-offline-upgrade-1.png" alt="upgrade-hyperbdr-offline-upgrade-1.png" tabindex="0" loading="lazy"><figcaption>upgrade-hyperbdr-offline-upgrade-1.png</figcaption></figure>
<ul>
<li>Step 3. Extract the downloaded files</li>
</ul>
<figure><img src="@source/product-overview/operation/images/upgrade-hyperbdr-offline-upgrade-2.png" alt="upgrade-hyperbdr-offline-upgrade-2.png" tabindex="0" loading="lazy"><figcaption>upgrade-hyperbdr-offline-upgrade-2.png</figcaption></figure>
<ul>
<li>Step 4. Execute Upgrade.exe.</li>
</ul>
<figure><img src="@source/product-overview/operation/images/upgrade-hyperbdr-offline-upgrade-3.png" alt="upgrade-hyperbdr-offline-upgrade-3.png" tabindex="0" loading="lazy"><figcaption>upgrade-hyperbdr-offline-upgrade-3.png</figcaption></figure>
<figure><img src="@source/product-overview/operation/images/upgrade-hyperbdr-offline-upgrade-4.png" alt="upgrade-hyperbdr-offline-upgrade-4.png" tabindex="0" loading="lazy"><figcaption>upgrade-hyperbdr-offline-upgrade-4.png</figcaption></figure>
<h2 id="source-object-dr-gateway-upgrade" tabindex="-1"><a class="header-anchor" href="#source-object-dr-gateway-upgrade"><span>Source Object DR Gateway Upgrade</span></a></h2>
<p>The Source Object DR Gateway needs to be re-uploaded image to the cloud platform.</p>
<figure><img src="@source/product-overview/operation/images/upgrade-hyperbdr-offline-upgrade-5.png" alt="upgrade-hyperbdr-offline-upgrade-5.png" tabindex="0" loading="lazy"><figcaption>upgrade-hyperbdr-offline-upgrade-5.png</figcaption></figure>
</div></template>


