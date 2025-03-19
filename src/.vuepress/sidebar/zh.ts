import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    // {
    //   text: "Demo",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "文档中心",
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
  "/zh/checklist": [
    {
      text: "检查清单",
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
  "/zh/userguide/poc/": [
    {
      text: "云容灾前置条件",
      icon: "book",
      prefix: "",
      // children: "structure",
      children: [
        {
          text: "生产站点",
          children: [
            'agent-pre-settings',
            'vmware-pre-settings',
            // 'aws-pre-settings',
          ],
        },
        {
          text: "容灾站点",
          children: [
            'huaweicloud-pre-settings',
            // 'tmcae-pre-settings'
          ],
        },
        {
          text: "HyperBDR容灾平台",
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
      text: "回切前置条件",
      icon: "book",
      prefix: "",
      // children: "structure",
      children: [
        {
          text: "回切网络需求",
          children: [
            'failback-network-requirement-huaweicloud',
            // 'failback-network-requirement-tmcae',
          ],
        },
        {
          text: "回切源端",
          children: [
            'failback-agent-pre-settings',
          ],
        },
        {
          text: "回切目标端",
          children: [
            'failback-vmware-pre-settings',
            'failback-agent-source-pre-settings',
          ],
        },
        {
          text: "HyperBDR容灾平台",
          children: [
            'failback-hyperbdr-pre-settings',
          ],
        },
      ],
      collapsible: true,
      expanded: true,
    },
  ],
  "/zh/product-overview/": [
    {
      text: "产品概览",
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
      text: "兼容性与限制条件",
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
        //'presales/hyperbdr-license-purchasing-guide',
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
  //'/zh/product-training/': [
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
  '/zh/userguide/dr-usage-guide/': [
    {
      text: "Installation and deployment",
      icon: "book",
      prefix: "",
      children: [
        'dr-operations-manual-installation',
        'agent-batch-installation',
      ],
    },
    //{
    //  text: "Operation",
    //  icon: "book",
    //  prefix: "",
    //  children: [
    //    'operation/upgrade-manual',
    //  ],
    //},
    //{
    //  text: "用户手册",
    //  icon: "book",
    //  prefix: "",
    //  children: [
    //    {
    //      text: "Huawei Cloud",
    //      children: [
    //        'dr-operations-manual-huaweicloud-object',
    //        'dr-operations-manual-huaweicloud-block',
    //      ],
    //    },
    //    {
    //      text: "Huawei Cloud Stack 8.2.x/8.3.x",
    //      children: [
    //        'dr-operations-manual-hcs8-block',
    //      ],
    //    },
    //    {
    //      text: "TM CAE",
    //      children: [
    //        'dr-operations-manual-tmcae-object',
    //      ],
    //    },
    //  ],
    //},
  ],
  '/zh/userguide/faq/': [
    {
      text: "FAQ常见问题解答",
      icon: "book",
      prefix: "",
      children: [
        'faq',
        // 'configure-vpn-huaweicloud',
        'collect-logs',
      ],
    },
  ],
},);
