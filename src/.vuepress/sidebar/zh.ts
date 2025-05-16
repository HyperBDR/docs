import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    {
      text: "文档中心",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
  ],
  "/zh/userguide/checklist": [
    {
      text: "检查清单",
      icon: "book",
      prefix: "",
      children: [
        "dr-checklist.md",
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
      children: [
        {
          text: "生产站点",
          children: [
            'agent-pre-settings',
            'vmware-pre-settings',
            'aws-pre-settings',
          ],
        },
        {
          text: "容灾站点",
          icon: "fa-solid fa-bullseye",
          children: [
            'huaweicloud-pre-settings',
            'tmcae-pre-settings',
            'opentelekomcloud-pre-settings',
            'aws-target-pre-settings',
            'hcs-pre-settings',
            'googlecloud-pre-settings',
            'xhere-pre-settings.md',
            'azure-target-pre-settings.md',
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
      children: [
        {
          text: "回切网络需求",
          icon: "network-wired",
          children: [
            'failback-network-requirement-huaweicloud',
            'failback-network-requirement-tmcae',
          ],
        },
        {
          text: "回切源端",
          icon: "fa-brands fa-sourcetree",
          children: [
            'failback-agent-pre-settings',
          ],
        },
        {
          text: "回切目标端",
          icon: "fa-solid fa-bullseye",
          children: [
            'failback-vmware-pre-settings',
            'failback-agent-source-pre-settings',
          ],
        },
        {
          text: "HyperBDR容灾平台",
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
        'limitations/driver-adaption.md',
      ],
    },
    {
      text: "项目概述",
      icon: "book",
      prefix: "",
      children: [
        'product-training/project-delivery.md',
        'presales/poc',
        'presales/hyperbdr-license-purchasing-guide',
      ],
    },
    {
      text: "主机调研",
      icon: "book",
      prefix: "",
      children: [
        'presales/hyperbdr-agent-investigation',
        'presales/hyperbdr-vmware-investigation',
        'presales/auto-host-info-collector',
      ],
    },
  ],
  '/zh/userguide/dr-usage-guide/': [
    {
      text: "用户手册",
      icon: "book",
      prefix: "",
      children: [
        {
          text: "Huawei Cloud",
          children: [
            'dr-operations-manual-huaweicloud-object',
            'dr-operations-manual-huaweicloud-block',
          ]
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
  '/zh/userguide/installation/': [
    {
      text: "安装指南",
      icon: "book",
      prefix: "",
      children: [
        'quick-installation.md',
        'agent-batch-installation.md'
      ],
    },
  ],
  '/zh/userguide/migration/': [
    {
      text: "迁移手册",
      icon: "book",
      prefix: "",
      children: [
        {
          text: "登录",
          icon: "",
          children: [
            {
              text: "Login",
              icon: "",
              link: "login.md"
            },
          ],
        },
      ],
    },
  ],
  '/zh/userguide/dr/': [
    {
      text: "用户平台",
      icon: "book",
      prefix: "",
      children: [
        {
          text: "登录",
          icon: "",
          prefix: "login/",
          children: [
            "login.md",
          ],
        },
        {
          text: "概览",
          icon: "",
          prefix: "dashboard/",
          children: [
            "profile.md",
            "logout.md",
            "language-switch.md",
          ],
        },
        {
          text: "资源容灾",
          icon: "",
          prefix: "dr/",
          children: [
            "host-dr.md",
            "host-failback.md",
          ]
        },
        {
          text: "资源编排",
          icon: "",
          prefix: "orchestration/",
          children: [
            "dr-group.md"
          ]
        },
        {
          text: "配置管理",
          icon: "",
          prefix: "configuration/",
          children: [
            "production-site.md",
            "dr-site.md",
            "storage-configuration.md",
            "dr-site-configuration.md",
            "policy-settings.md",
          ]
        },
        {
          text: "运维管理",
          icon: "",
          prefix: "operations/",
          children: [
            "audit-logs.md",
            "task-management.md",
            "download-logs.md",
            "upgrade.md",
            "reports.md",
            "tag-management.md",
          ]
        },
        {
          text: "监控与报警管理",
          icon: "",
          prefix: "monitor-alerts/",
          children: [
            "system-monitor.md",
            "alarm.md",
            "notification.md",
            "alerts.md",
          ]
        },
        {
          text: "设置",
          icon: "",
          prefix: "settings/",
          children: [
            "global-settings.md",
            "license-management.md",
            "versions.md",
          ]
        },
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
        'configure-vpn-huaweicloud',
        'collect-logs',
      ],
    },
  ],
  '/zh/userguide/operations/': [
    {
      text: "管理指南",
      icon: "book",
      prefix: "",
      children: [
        "upgrade-manual.md",
        "hyperbdr-operation-and-maintenance-manual.md",
      ]
    }
  ],
  '/zh/userguide/om-guide/': [
    {
      text: "运维指南",
      icon: "book",
      prefix: "",
      children: [
        {
          text: "概览",
          icon: "book",
          prefix: "overview/",
          children: [
            "overview.md"
          ],
          collapsible: true,
          expanded: true,
        },
        {
          text: "系统架构",
          icon: "book",
          prefix: "system-architecture/",
          children: [
            "system-architecture.md"
          ],
          collapsible: true,
          expanded: true,
        },
        {
          text: "运维管理",
          icon: "book",
          prefix: "om-management/",
          children: [
            "daliy-om.md",
            "services-component-om.md",
          ],
          collapsible: true,
          expanded: true,
        },
        {
          text: "升级维护",
          icon: "book",
          prefix: "upgrade-maintenance/",
          children: [
            "console.md",
            "sync-proxy.md",
            "linux-agent.md",
            "windows-agent.md",
            "cloud-sync-gateway.md",
            "transition-host-image.md",
          ],
          collapsible: true,
          expanded: true,
        },
        {
          text: "报告管理",
          icon: "book",
          prefix: "report-export/",
          children: [
            "report-type.md",
            "report-export.md",
          ],
          collapsible: true,
          expanded: true,
        },
        {
          text: "监控告警",
          icon: "book",
          prefix: "monitor-alerts/",
          children: [
            "overview-display.md",
            "key-indicators.md",
            "alarm-configuration.md",
            "alarm-best-practice.md",
            "usage-scenarios.md",
          ],
          collapsible: true,
          expanded: true,
        },
        {
          text: "容灾演练",
          icon: "book",
          prefix: "dr-drill/",
          children: [
            "drill-preparation.md",
            "drill-process.md",
            "drill-report.md",
          ],
          collapsible: true,
          expanded: true,
        },
        {
          text: "容灾接管",
          icon: "book",
          prefix: "dr-takeover/",
          children: [
            "takeover-prerequisites.md",
            "takeover-process.md",
          ],
          collapsible: true,
          expanded: true,
        },
        {
          text: "附录",
          icon: "book",
          prefix: "appendix/",
          children: [
            "commands-tools.md",
            "question-submit.md",
            "change-record.md",
          ],
          collapsible: true,
          expanded: false,
        },
        {
          text: "结语",
          icon: "book",
          prefix: "end-summary/",
          children: [
            "summary.md",
          ],
          collapsible: true,
          expanded: false,
        },
      ],
      collapsible: true,
      expanded: true,
    }
  ],
  '/zh/userguide/admin-portal/': [
    {
      text: "管理门户",
      icon: "book",
      prefix: "",
      children: [
      ]
    },
  ],
  '/zh/userguide/tools/': [
    {
      text: "容灾计算器",
      icon: "",
      prefix: "calculator/",
      children: [
        "calculator.md"
      ]
    },
    {
      text: "License授权管理平台",
      icon: "",
      prefix: "license-management/",
      children: [
        "license-management.md"
      ]
    },
  ]
},);
