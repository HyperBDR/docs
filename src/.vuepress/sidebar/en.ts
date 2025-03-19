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
          icon: "fa-brands fa-sourcetree",
          children: [
            'agent-pre-settings',
            'vmware-pre-settings',
            'aws-pre-settings',
          ],
        },
        {
          text: "DR Site",
          icon: "fa-solid fa-bullseye",
          children: [
            'huaweicloud-pre-settings',
            'tmcae-pre-settings',
            'opentelekomcloud-pre-settings',
            'aws-target-pre-settings',
            'hcs-pre-settings',
            'googlecloud-pre-settings',
            'xhere-pre-settings.md',
          ],
        },
        {
          text: "HyperBDR",
          icon: "layer-group",
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
          icon: "network-wired",
          children: [
            'failback-network-requirement-huaweicloud',
            'failback-network-requirement-tmcae',
          ],
        },
        {
          text: "Failback Source",
          icon: "fa-brands fa-sourcetree",
          children: [
            'failback-agent-pre-settings',
          ],
        },
        {
          text: "Failback Target",
          icon: "fa-solid fa-bullseye",
          children: [
            'failback-vmware-pre-settings',
            'failback-agent-source-pre-settings',
          ],
        },
        {
          text: "HyperBDR",
          icon: "layer-group",
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
      text: "Product Overview",
      icon: "book",
      prefix: "",
      children: [
        'product-training/product-overview.md',
        'presales/hyperbdr-rpo-rto-planning-best-practices',
        'presales/dr-network-planning-recommendations',
        'product-training/scenarios.md',
        'product-training/technical-highlights.md',
        'product-training/data-sync-fundamentals.md',
        'presales/deep-in-aws-agentless-mode',
        'product-training/multi-tenant-design.md',
      ],
    },
    {
      text: "Compatibility & Limitations",
      icon: "book",
      prefix: "",
      children: [
        'limitations/product-support-overview',
        'limitations/linux-agent.md',
        'limitations/windows-agent.md',
        'limitations/vmware-agentless.md',
        'limitations/openstack-ceph-agentless.md',
        'limitations/huawei-fusioncompute-agentless.md',
      ],
    },
    {
      text: "Project Overview",
      icon: "book",
      prefix: "",
      children: [
        'product-training/project-delivery.md',
        'presales/poc',
        'presales/hyperbdr-license-purchasing-guide',
      ],
    },
    {
      text: "Hosts Investigation",
      icon: "book",
      prefix: "",
      children: [
        'presales/hyperbdr-agent-investigation',
        'presales/hyperbdr-vmware-investigation',
        'presales/auto-host-info-collector',
      ],
    },
  ],
  //'/product-training/': [
  //  {
  //    text: "Training",
  //    icon: "book",
  //    prefix: "",
  //    children: [
  //      'product-overview.md',
  //      'scenarios.md',
  //      'technical-highlights.md',
  //      'project-delivery.md',
  //    ],
  //  },
  //],
  //'/userguide/presales/': [
  //  {
  //    text: "Pre Sales",
  //    icon: "book",
  //    prefix: "",
  //    children: [
  //      'hyperbdr-vmware-investigation',
  //      'hyperbdr-agent-investigation',
  //      'auto-host-info-collector',
  //      'dr-network-planning-recommendations',
  //      'hyperbdr-rpo-rto-planning-best-practices',
  //      'cloud-platform-support-matrix',
  //      'poc',
  //      'deep-in-aws-agentless-mode',
  //      'compatibility-and-limitations',
  //      'hyperbdr-license-purchasing-guide',
  //    ],
  //  },
  //],
  '/userguide/dr-usage-guide/': [
    {
      text: "Installation and deployment",
      icon: "book",
      prefix: "",
      children: [
        'dr-operations-manual-installation',
        'agent-batch-installation',
      ],
    },
    {
      text: "Operation",
      icon: "book",
      prefix: "",
      children: [
        'operation/upgrade-manual',
      ],
    },
    {
      text: "User Manual",
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
