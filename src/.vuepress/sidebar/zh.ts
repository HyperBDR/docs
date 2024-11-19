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
  '/zh/product-training/': [
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
  '/zh/userguide/presales/': [
    {
      text: "售前",
      icon: "book",
      prefix: "",
      children: [
        'hyperbdr-vmware-investigation',
        'hyperbdr-agent-investigation',
        // 'dr-network-planning-recommendations',
        'hyperbdr-rpo-rto-planning-best-practices',
        'cloud-platform-support-matrix',
        // 'poc',
        // 'aws-agentless-mode-cost-calculator',
        // 'compatibility-and-limitations',
        // 'hyperbdr-license-purchasing-guide',
      ],
    },
  ],
  '/zh/userguide/dr-usage-guide/': [
    {
      text: "HyperBDR 用户手册",
      icon: "book",
      prefix: "",
      children: [
        {
          text: "华为云",
          children: [
            'dr-operations-manual-huaweicloud',
          ],
        },
        {
          text: "安装与部署",
          children: [
            'dr-operations-manual-installation',
          ],
        },
        // {
        //   text: "Huawei Cloud Stack 8.2.x/8.3.x",
        //   children: [
        //     'dr-operations-manual-hcs8-block',
        //   ],
        // },
        // {
        //   text: "TM CAE",
        //   children: [
        //     'dr-operations-manual-tmcae-object',
        //   ],
        // },
      ],
    },
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
