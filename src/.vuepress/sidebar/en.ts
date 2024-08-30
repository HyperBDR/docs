import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    // {
    //   text: "Demo",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "Docs",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    // {
    //   text: "Slides",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html",
    // },
  ],
  "/checklist": [
    {
      text: "Checklist",
      icon: "book",
      prefix: "",
      // children: "structure",
      children: [
        "dr-checklist.md", // 指定 dr-checklist.md 文件
      ],
      collapsible: true,
      expanded: true,
    },
  ],
  "/userguide/poc/": [
    {
      text: "DR Prerequisites",
      icon: "book",
      prefix: "",
      // children: "structure",
      children: [
        {
          text: "Production Site",
          children: [
            'agent-pre-settings',
            'vmware-pre-settings',
            'aws-pre-settings',
          ],
        },
        {
          text: "DR Site",
          children: [
            'huaweicloud-pre-settings',
            'tmcae-pre-settings'
          ],
        },
        {
          text: "HyperBDR",
          children: [
            'hyperbdr-vmware-pre-settings',
            'hyperbdr-proxy-pre-settings',
          ],
        },
      ],
      collapsible: true,
      expanded: true,
    },
    {
      text: "Failback Prerequisites",
      icon: "book",
      prefix: "",
      // children: "structure",
      children: [
        {
          text: "Failback Network Requirement",
          children: [
            'failback-network-requirement-huaweicloud',
            'failback-network-requirement-tmcae',
          ],
        },
        {
          text: "Failback Source",
          children: [
            'failback-agent-pre-settings',
          ],
        },
        {
          text: "Failback Target",
          children: [
            'failback-vmware-pre-settings',
            'failback-agent-source-pre-settings',
          ],
        },
        {
          text: "HyperBDR",
          children: [
            'failback-hyperbdr-pre-settings',
          ],
        },
      ],
      collapsible: true,
      expanded: true,
    },
  ],
  "/product-overview/": [
    {
      text: "HyperBDR Features Matrix",
      icon: "book",
      prefix: "",
      children: [
        'features/features-matrix.md',
      ],
    },
    {
      text: "Production Site Compatibility & Limitations",
      icon: "book",
      prefix: "",
      children: [
        'limitations/linux-agent.md',
        'limitations/windows-agent.md',
        'limitations/vmware-agentless.md',
        'limitations/openstack-ceph-agentless.md',
      ],
    },
    {
      text: "HyperBDR Operation",
      icon: "book",
      prefix: "",
      children: [
        'operation/upgrade-manual',
      ],
    },
  ],
  '/product-training/': [
    {
      text: "Training",
      icon: "book",
      prefix: "",
      children: [
        'product-overview.md',
        'scenarios.md',
        'technical-highlights.md',
        'project-delivery.md',
      ],
    },
  ],
  '/userguide/presales/': [
    {
      text: "Pre Sales",
      icon: "book",
      prefix: "",
      children: [
        'hyperbdr-vmware-investigation',
        'hyperbdr-agent-investigation',
        'dr-network-planning-recommendations',
        'hyperbdr-rpo-rto-planning-best-practices',
        'cloud-platform-support-matrix',
        'poc',
        'aws-agentless-mode-cost-calculator',
        'compatibility-and-limitations',
        'hyperbdr-license-purchasing-guide',
      ],
    },
  ],
  '/userguide/dr-usage-guide/': [
    {
      text: "HyperBDR User Manual",
      icon: "book",
      prefix: "",
      children: [
        {
          text: "Huawei Cloud",
          children: [
            'dr-operations-manual-huaweicloud-object',
            'dr-operations-manual-huaweicloud-block',
          ],
        },
        {
          text: "Huawei Cloud Stack 8.2.x/8.3.x",
          children: [
            'dr-operations-manual-hcs8-block',
          ],
        },
        {
          text: "TM CAE",
          children: [
            'dr-operations-manual-tmcae-object',
          ],
        },
      ],
    },
  ],
  '/userguide/faq/': [
    {
      text: "FAQ",
      icon: "book",
      prefix: "",
      children: [
        'faq',
        'configure-vpn-huaweicloud',
        'collect-logs',
      ],
    },
  ],
},);
