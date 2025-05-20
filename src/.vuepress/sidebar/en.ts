import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: "Docs",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
  ],
  "/userguide/checklist": [
    {
      text: "Checklist",
      icon: "check",
      prefix: "",
      children: [
        "dr-checklist.md",
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
            'azure-target-pre-settings.md',
          ],
        },
        {
          text: "HyperBDR",
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
      text: "Failback Prerequisites",
      icon: "book",
      prefix: "",
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
  "/product-overview/": [
    {
      text: "Product Overview",
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
      text: "Compatibility & Limitations",
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
      text: "Project Overview",
      icon: "project-diagram",
      prefix: "",
      children: [
        'product-training/project-delivery.md',
        'presales/poc',
        'presales/hyperbdr-license-purchasing-guide',
      ],
    },
    {
      text: "Hosts Investigation",
      icon: "magnifying-glass",
      prefix: "",
      children: [
        'presales/hyperbdr-agent-investigation',
        'presales/hyperbdr-vmware-investigation',
        'presales/auto-host-info-collector',
      ],
    },
  ],
  '/userguide/dr-usage-guide/': [
    {
      text: "User Manual",
      icon: "circle-info",
      prefix: "",
      children: [
        {
          text: "Huawei Cloud",
          icon: "cloud",
          children: [
            'dr-operations-manual-huaweicloud-object',
            'dr-operations-manual-huaweicloud-block',
          ],
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
  '/userguide/installation/': [
    {
      text: "Installation",
      icon: "download",
      prefix: "",
      children: [
        'quick-installation.md',
        'agent-batch-installation.md'
      ],
    },
  ],
  '/userguide/migration/': [
    {
      text: "Migration",
      icon: "arrow-right-arrow-left",
      prefix: "",
      children: [
        {
          text: "Login",
          icon: "user",
          prefix: "login/",
          children: [
            "login.md",
          ],
        },
        {
          text: "Dashboard",
          icon: "gauge",
          prefix: "dashboard/",
          children: [
            "profile.md",
            "logout.md",
            "language-switch.md",
          ],
        },
        {
          text: "Migration",
          icon: "shuffle",
          prefix: "migration/",
          children: [
            "host-migration.md",
          ]
        },
        {
          text: "Configuration",
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
          text: "Operations",
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
          text: "Monitor & Alerts",
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
          text: "Settings",
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
  '/userguide/dr/': [
    {
      text: "User Platform",
      icon: "book",
      prefix: "",
      children: [
        {
          text: "Login",
          icon: "user",
          prefix: "login/",
          children: [
            "login.md",
          ],
        },
        {
          text: "Dashboard",
          icon: "dashboard",
          prefix: "dashboard/",
          children: [
            "profile.md",
            "logout.md",
            "language-switch.md",
          ],
        },
        {
          text: "DR",
          icon: "shield",
          prefix: "dr/",
          children: [
            "host-dr.md",
            "host-failback.md",
          ]
        },
        {
          text: "Orchestration",
          icon: "paper-plane",
          prefix: "orchestration/",
          children: [
            "dr-group.md"
          ]
        },
        {
          text: "Configuration",
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
          text: "Operations",
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
          text: "Monitor & Alerts",
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
          text: "Settings",
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
  '/userguide/faq/': [
    {
      text: "FAQ",
      icon: "question",
      prefix: "",
      children: [
        'faq',
        'configure-vpn-huaweicloud',
        'collect-logs',
      ],
    },
  ],
  '/userguide/operations/': [
    {
      text: "Administration Guide",
      icon: "user-gear",
      prefix: "",
      children: [
        "upgrade-manual.md",
        "hyperbdr-operation-and-maintenance-manual.md",
      ]
    }
  ],
  '/userguide/om-guide/': [
    {
      text: "O&M Guide",
      icon: "guide",
      prefix: "",
      children: [
        {
          text: "Overview",
          icon: "info",
          prefix: "overview/",
          children: [
            "overview.md"
          ],
          collapsible: true,
          expanded: true,
        },
        {
          text: "System Architecture",
          icon: "structure",
          prefix: "system-architecture/",
          children: [
            "system-architecture.md"
          ],
          collapsible: true,
          expanded: true,
        },
        {
          text: "O&M Management",
          icon: "management",
          prefix: "om-management/",
          children: [
            "daliy-om.md",
            "services-component-om.md",
          ],
          collapsible: true,
          expanded: true,
        },
        {
          text: "Upgrade Maintenance",
          icon: "upgrade",
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
          text: "Report Management",
          icon: "report",
          prefix: "report-export/",
          children: [
            "report-type.md",
            "report-export.md",
          ],
          collapsible: true,
          expanded: true,
        },
        {
          text: "Monitor & Alerts",
          icon: "monitor",
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
          text: "DR Drill",
          icon: "drill",
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
          text: "DR Takeover",
          icon: "takeover",
          prefix: "dr-takeover/",
          children: [
            "takeover-prerequisites.md",
            "takeover-process.md",
          ],
          collapsible: true,
          expanded: true,
        },
        {
          text: "Appendix",
          icon: "appendix",
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
          text: "End Summary",
          icon: "summary",
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
  '/userguide/admin-portal/': [
    {
      text: "Admin Portal Manual",
      icon: "admin",
      prefix: "",
      children: [
      ]
    },
  ],
  '/userguide/tools/': [
    {
      text: "Calculator",
      icon: "calculator",
      prefix: "calculator/",
      children: [
        "calculator.md"
      ]
    },
    {
      text: "License Management",
      icon: "license",
      prefix: "license-management/",
      children: [
        "license-management.md"
      ]
    },
  ]
});
