export type HeaderMenuId = "features" | "soix" | "frax" | "resources" | null;

export type NavItem = {
  id: Exclude<HeaderMenuId, null> | "why-us" | "pricing" | "demo";
  label: string;
  hasPanel: boolean;
};

export type PanelItem = {
  label: string;
  description: string;
  href: string;
};

export type PanelSection = {
  title: string;
  items: PanelItem[];
};

export type HeaderMenuWithPanel = Exclude<HeaderMenuId, null>;

export const NAV_ITEMS: NavItem[] = [
  { id: "features", label: "Platform", hasPanel: true },
  { id: "soix", label: "SoIX", hasPanel: true },
  { id: "frax", label: "FraX", hasPanel: true },
  { id: "resources", label: "Resources", hasPanel: true },
  { id: "why-us", label: "Why us?", hasPanel: false },

];

export const PANEL_CONTENT: Record<HeaderMenuWithPanel, PanelSection[]> = {
  features: [
    {
      title: "BUILD",
      items: [
        {
          label: "API Management Suite",
          description: "Full lifecycle API control and governance , Full lifecycle API control and governance , Full lifecycle API control and governance , Full lifecycle API control and governance",
          href: "/products/mosura/features/api-management-suite",
        },
        {
          label: "API Gateway",
          description: "High-performance enterprise edge gateway",
          href: "/products/mosura/features/api-gateway",
        },
        {
          label: "AI Gateway",
          description: "Secure orchestration for LLMs and AI agents",
          href: "/products/mosura/features/ai-gateway",
        },
      ],
    },
    {
      title: "RUN",
      items: [
        {
          label: "Event Gateway",
          description: "Real-time streaming and event orchestration",
          href: "/products/mosura/features/event-gateway",
        },
        {
          label: "Orchestration",
          description: "Visual workflow and service composition",
          href: "/products/mosura/features/orchestration",
        },
        {
          label: "Micro Gateway/IoT Gateway",
          description: "Lightweight connectivity at the edge",
          href: "/products/mosura/features/micro-gateway-iot",
        },
      ],
    },
  ],
  soix: [
    {
      title: "Data & Banking",
      items: [
        {
          label: "Data Monetization",
          description: "Turn your APIs and data assets into new revenue streams.",
          href: "/soix/data-monetization",
        },
        {
          label: "Open Banking",
          description: "Comply with open banking standards and launch APIs rapidly.",
          href: "/soix/open-banking",
        },
        {
          label: "Open Finance",
          description: "Extend beyond banking to comprehensive financial data sharing.",
          href: "/soix/open-finance",
        },
      ],
    },
    {
      title: "Platforms & Trust",
      items: [
        {
          label: "ODP (Open Data Platform)",
          description: "Secure, scalable infrastructure for organization-wide open data.",
          href: "/soix/odp",
        },
        {
          label: "Zero trust Platform",
          description: "Identity-aware, strictly verified access for all external traffic.",
          href: "/soix/zero-trust",
        },
        {
          label: "Compliance Hub",
          description: "Centralized governance and risk management for your APIs.",
          href: "/soix/compliance-hub",
        },
      ],
    },
    {
      title: "Operations",
      items: [
        {
          label: "Observability",
          description: "Deep insights and distributed tracing across all transactions.",
          href: "/soix/observability",
        },
        {
          label: "Commercialization",
          description: "Tools to package, price, and sell your digital services.",
          href: "/soix/commercialization",
        },
        {
          label: "Connected Schools",
          description: "Secure data gateways tailored for educational institutions.",
          href: "/soix/connected-schools",
        },
      ],
    },
  ],
  frax: [
    {
      title: "Platform & Strategy",
      items: [
        {
          label: "BaaS (Bank as Services Platform)",
          description: "Featherweight lightning speed API Management Platform",
          href: "/frax/baas",
        },
        {
          label: "Marketplace",
          description: "API/AI Agent()",
          href: "/frax/marketplace",
        },
        {
          label: "LLM Selection & Optimization",
          description: "Featherweight lightning speed API Management Platform",
          href: "/frax/llm-selection",
        },
      ],
    },
    {
      title: "Core Services",
      items: [
        {
          label: "Open Banking",
          description: "Featherweight lightning speed API Management Platform",
          href: "/frax/open-banking",
        },
        {
          label: "AI/Account Aggregator",
          description: "Featherweight lightning speed API Management Platform",
          href: "/frax/ai-aggregator",
        },
        {
          label: "PLaaS (Policy as a Service)",
          description: "Featherweight lightning speed API Management Platform",
          href: "/frax/plaas",
        },
      ],
    },
    {
      title: "Developer & Integration",
      items: [
        {
          label: "Developer Portal",
          description: "Featherweight lightning speed API Management Platform",
          href: "/frax/developer-portal",
        },
        {
          label: "Tememetronic",
          description: "Featherweight lightning speed API Management Platform",
          href: "/frax/tememetronic",
        },
        {
          label: "Telco as FinTech",
          description: "Featherweight lightning speed API Management Platform",
          href: "/frax/telco-fintech",
        },
      ],
    },
  ],
  resources: [
    {
      title: "Learn & Grow",
      items: [
        {
          label: "Blog",
          description: "Discover the latest trends, tips, and best practices.",
          href: "/resources/blog",
        },
        {
          label: "Documentation",
          description: "Technical guides and API references for developers.",
          href: "/resources/documentation",
        },
        {
          label: "Community",
          description: "Join our community of developers and innovators.",
          href: "/resources/community",
        },
      ],
    },
  ],
};
export const PROMO_CONTENT = {
  mosura: {
    title: "Mosura",
    subtitle: "The Intelligent Guardian",
    href: "/products/mosura",
  },
};
