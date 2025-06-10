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
      icon: "check",
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
          icon: "fa-brands fa-sourcetree",
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
          icon: "shield",
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
          icon: "shield",
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
      icon: "circle-info",
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
      icon: "triangle-exclamation",
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
      icon: "project-diagram",
      prefix: "",
      children: [
        'product-training/project-delivery.md',
        'presales/poc',
        'presales/hyperbdr-license-purchasing-guide',
      ],
    },
    {
      text: "主机调研",
      icon: "magnifying-glass",
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
      icon: "circle-info",
      prefix: "",
      children: [
        {
          text: "Huawei Cloud",
          icon: "cloud",
          children: [
            'dr-operations-manual-huaweicloud-object',
            'dr-operations-manual-huaweicloud-block',
          ]
        },
        {
          text: "Huawei Cloud Stack 8.2.x/8.3.x",
          icon: "cloud",
          children: [
            'dr-operations-manual-hcs8-block',
          ],
        },
        {
          text: "TM CAE",
          icon: "cloud",
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
      icon: "download",
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
          icon: "user",
          prefix: "login/",
          children: [
            "login.md",
          ],
        },
        {
          text: "概览",
          icon: "dashboard",
          prefix: "dashboard/",
          children: [
            "profile.md",
            "logout.md",
            "language-switch.md",
          ],
        },
        {
          text: "资源迁移",
          icon: "shuffle",
          prefix: "migration/",
          children: [
            "host-migration.md",
          ]
        },
        {
          text: "配置管理",
          icon: "gear",
          prefix: "configuration/",
          children: [
            "source-site.md",
            "target-site.md",
            "storage-configuration.md",
            "target-site-configuration.md",
            "policy-settings.md",
          ]
        },
        {
          text: "运维管理",
          icon: "gears",
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
          icon: "chart-line",
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
          icon: "wrench",
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
  '/zh/userguide/dr/': [
    {
      text: "用户平台",
      icon: "book",
      prefix: "",
      children: [
        {
          text: "登录",
          icon: "user",
          prefix: "login/",
          children: [
            "login.md",
          ],
        },
        {
          text: "概览",
          icon: "dashboard",
          prefix: "dashboard/",
          children: [
            "dashboard.md",
            "profile.md",
            "logout.md",
            "language-switch.md",
          ],
        },
        {
          text: "资源容灾",
          icon: "shield",
          prefix: "dr/",
          children: [
            "host-dr.md",
            "host-failback.md",
          ]
        },
        {
          text: "资源编排",
          icon: "paper-plane",
          prefix: "orchestration/",
          children: [
            "dr-group.md"
          ]
        },
        {
          text: "配置管理",
          icon: "gear",
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
          icon: "gears",
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
          icon: "chart-line",
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
          icon: "wrench",
          prefix: "settings/",
          children: [
            "global-settings.md",
            "license-management.md",
            "versions.md",
          ]
        },
      ],
            collapsible: true,
      expanded: true, 
    },
    {
      text: "恢复平台及存储配置指南",
      icon: "book",
      prefix: "",
      children: [
        {
          text: "对象存储",
          icon: "gear",
          prefix: "obs-configuration/",
          children: [
            "others",
            "alibaba",
            "huaweicloud"
          ],
        },
        {
          text: "容灾恢复平台(块存储)",
          icon: "gear",
          prefix: "dr-site-configuration-block/",
          children: [
            "aws",
            "huawei",
            "tengxun",
            "alibaba",
          ],
        },
        {
          text: "容灾恢复平台(对象存储)",
          icon: "gear",
          prefix: "dr-site-configuration-obs/",
          children: [
            "aws",
            "huawei",
            "tengxun",
            "alibaba",
          ],
        },
      ],
      collapsible: true,
      expanded: true,
    },
  ],
  '/zh/userguide/faq/': [
    {
      text: "FAQ常见问题解答",
      icon: "question",
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
      icon: "user-gear",
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
      icon: "tools",
      prefix: "",
      children: [
        {
          text: "概览",
          icon: "circle-info",
          prefix: "overview/",
          children: [
            "overview.md"
          ],
          collapsible: true,
          expanded: true,
        },
        {
          text: "系统架构",
          icon: "window-restore",
          prefix: "system-architecture/",
          children: [
            "system-architecture.md"
          ],
          collapsible: true,
          expanded: true,
        },
        {
          text: "运维管理",
          icon: "bars-progress",
          prefix: "om-management/",
          children: [
            "daliy-om.md",
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
          text: "升级管理",
          icon: "cloud-arrow-up",
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
          icon: "file-export",
          prefix: "report-export/",
          children: [
            "report-type.md",
            "report-export.md",
          ],
          collapsible: true,
          expanded: true,
        },
        {
          text: "监控告警管理",
          icon: "chart-line",
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
          icon: "shield-halved",
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
          icon: "shield-halved",
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
          icon: "list-ul",
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
          icon: "mug-hot",
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
      icon: "window-maximize",
      prefix: "",
      children: [
      ]
    },
  ],
  '/zh/userguide/calculator/': [
    {
      text: "容灾计算器",
      icon: "calculator",
      prefix: "",
      children: [
        "calculator.md"
      ]
    },
  ],
  '/zh/userguide/license-management/': [
    {
      text: "授权管理平台",
      icon: "key",
      prefix: "",
      children: [
        "license-management.md"
      ]
    },
  ]
},);
