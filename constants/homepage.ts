export const HOMEPAGE_CONTENT = {
  problem: {
    title: "The Enterprise Digital Control Problem",
    subtitle: "Modern enterprises operate in fragments:",
    items: [
      { id: "apis", text: "APIs in multiple regions" },
      { id: "ai", text: "AI models across providers" },
      { id: "events", text: "Event streams between systems" },
      { id: "iot", text: "IoT at the edge" },
      { id: "compliance", text: "Compliance across jurisdictions" },
      { id: "costs", text: "Rising AI costs" },
      { id: "governance", text: "No unified governance" },
    ],
    result: {
      label: "Result?",
      outcome: "Security gaps. Cost overruns. Operational complexity.",
    },
  },
  comparison: {
    title: "Architectural Shift",
    subtitle: "From fragmented direct connections to a unified, AI-native intelligence engine.",
    toggle: {
      with: "With Mosura",
      without: "Without Mosura",
    },
  },
  solution: {
    title: "Mosura Unifies the Chaos",
    subtitle: "Then introduce the architectural philosophy:",
    philosophy: [
      "A centralized control plane.",
      "Federated data planes.",
      "Policy-as-Code everywhere.",
    ],
    visualLabel: "Control Plane → Distributed Gateways → APIs / AI / Events / Edge",
    layers: {
      control: "Control Plane",
      gateways: "Distributed Gateways",
      target1: "APIs / AI",
      target2: "Events / Edge",
    },
  },
  pillars: {
    title: "The Platform",
    subtitle: "Capability Pillars",
    items: [
      {
        id: "govern",
        title: "Govern & Secure",
        description: "Centralized policy management, Zero Trust enforcement, Compliance-ready architecture, Policy-as-Code across gateways.",
        positioning: "One policy engine. Global enforcement.",
        icon: "Shield",
      },
      {
        id: "route",
        title: "Route & Optimize",
        description: "API traffic management, AI multi-LLM routing, Event delivery guarantees, Intelligent load balancing, Cost-aware AI routing.",
        positioning: "Route every request to the best possible destination.",
        icon: "Waypoints",
      },
      {
        id: "orchestrate",
        title: "Orchestrate & Automate",
        description: "Workflow orchestration, AI-driven automation, Event-to-API coordination, Conditional routing, Self-healing systems.",
        positioning: "Turn services into intelligent workflows.",
        icon: "Cpu",
      },
      {
        id: "monetize",
        title: "Monetize & Scale",
        description: "Usage-based billing, Partner tiers, Open Banking enablement, Revenue tracking, SLA monitoring.",
        positioning: "Transform infrastructure into revenue streams.",
        icon: "CircleDollarSign",
      },
    ],
  },
  ai: {
    title: "Enterprise AI Without the Chaos",
    features: [
      "Multi-LLM orchestration",
      "Cost & token control",
      "Prompt governance",
      "Output validation",
      "Compliance enforcement",
      "AI performance scoring",
    ],
    badge: "The AI Differentiator",
    positioning: "Mosura AI Gateway gives enterprises full visibility, governance, and optimization across every LLM request — whether public, private, or hybrid.",
    differentiator: "They manage APIs. You manage AI intelligence.",
    comparison: "Kong / Apigee",
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about Mosura's platform and capabilities.",
    items: [
      {
        question: "What is Mosura?",
        answer: "Mosura is a unified control plane for APIs, AI models, and event streams, designed for the enterprise agentic era.",
      },
      {
        question: "How does the AI Gateway work?",
        answer: "It provides a secure, governed entry point for all LLM requests, offering multi-LLM orchestration, cost control, and prompt governance.",
      },
    ],
  },
  newsletter: {
    badge: "Stay Updated",
    title: "Subscribe to our newsletter",
    description: "Get the latest updates on API management, AI governance, and event-driven architecture.",
    button: "Subscribe",
    placeholder: "Enter your email",
  },
  federation: {
    title: "Federated by Design",
    features: [
      "Regional autonomy",
      "Team-level deployment",
      "Partner gateways",
      "Edge gateways",
      "Central governance",
    ],
    positioning: "Local execution. Global control.",
  },
  industries: {
    title: "Industry Positioning",
    items: [
      {
        name: "BFSI",
        outcome: "Enable PSD2-ready APIs, fraud workflows, and AI governance at scale.",
      },
      {
        name: "Telecom",
        outcome: "High-throughput event mesh and network API monetization.",
      },
      {
        name: "Government",
        outcome: "Sovereign cloud compliance and secure inter-agency data sharing.",
      },
      {
        name: "Retail / eCommerce",
        outcome: "Omnichannel inventory sync and AI-driven personalized offers.",
      },
    ],
  },
  trust: {
    title: "Enterprise Credibility",
    badges: ["SOC2 Type II", "GDPR", "ISO 27001", "HIPAA Ready"],
    deployments: ["Cloud", "Hybrid", "On-prem"],
    deploymentTitle: "Flexible Deployment",
    deploymentSubtitle: "Deploy where your data lives",
    performance: "99.99% SLA Readiness",
    stats: [
      { value: "99.99%", label: "SLA Ready" },
      { value: "<1ms", label: "Latency" },
      { value: "Global", label: "Edge Network" },
    ],
  },
  cta: {
    headline: "Build the Next Digital Economy Layer — Securely.",
    subtext: "APIs, AI, events, edge, monetization — unified under one control plane.",
    buttons: {
      primary: "Schedule Enterprise Demo",
      secondary: "Speak to Solutions Team",
    },
  },
  logos: [
    {
      src: "https://img.logo.dev/stripe.com?token=pk_logo_dev_dummy",
      alt: "Partner Logo",
      gradient: { from: "#635bff", via: "#80e9ff", to: "#7a73ff" },
    },
    {
      src: "https://img.logo.dev/vercel.com?token=pk_logo_dev_dummy",
      alt: "Partner Logo",
      gradient: { from: "#000000", via: "#333333", to: "#000000" },
    },
    {
      src: "https://img.logo.dev/netflix.com?token=pk_logo_dev_dummy",
      alt: "Partner Logo",
      gradient: { from: "#e50914", via: "#ff1f2d", to: "#b20710" },
    },
    {
      src: "https://img.logo.dev/amazon.com?token=pk_logo_dev_dummy",
      alt: "Partner Logo",
      gradient: { from: "#ff9900", via: "#ffb84d", to: "#cc7a00" },
    },
    {
      src: "https://img.logo.dev/google.com?token=pk_logo_dev_dummy",
      alt: "Partner Logo",
      gradient: { from: "#4285f4", via: "#34a853", to: "#fbbc05" },
    },
    {
      src: "https://img.logo.dev/airbnb.com?token=pk_logo_dev_dummy",
      alt: "Partner Logo",
      gradient: { from: "#ff5a5f", via: "#ff7e82", to: "#d93939" },
    },
  ],
  testimonials: [
    {
      author: {
        name: "Sarah Chen",
        handle: "@sarahc_tech",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      },
      text: "Mosura has completely transformed how we manage our distributed API mesh. The unified control plane is exactly what we needed to scale safely.",
    },
    {
      author: {
        name: "David Miller",
        handle: "@dmiller_infra",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      },
      text: "The AI Gateway is a game changer. We finally have real visibility and token-level governance over our LLM usage across the enterprise.",
    },
    {
      author: {
        name: "Elena Rodriguez",
        handle: "@elena_devops",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
      },
      text: "Transitioning to Mosura was seamless. The Policy-as-Code approach has allowed us to automate compliance that used to take weeks of manual audit.",
    },
    {
      author: {
        name: "Marcus Wright",
        handle: "@m_wright_cto",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      },
      text: "Best-in-class performance. We've seen a 30% reduction in latency since moving our edge traffic to Mosura's federated gateways.",
    },
  ],
  services_header: {
    badge: "What We Offer",
    title: "Complete Solutions for Your Business",
    description: "Everything you need to build, launch, and scale your digital products with confidence.",
  },
  services: [
    {
      icon: "Brain",
      title: "AI & LLM Gateway",
      description: "Secure, monitor, and optimize your LLM traffic with token-level governance and policy-as-code.",
      features: ["Token Quotas", "Model Mesh", "AI Observability"],
      iconColor: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: "Shield",
      title: "Enterprise API Security",
      description: "Hardened security for your microservices with automated compliance and threat protection.",
      features: ["mTLS Encryption", "WAF Rules", "Policy-as-Code"],
      iconColor: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: "Zap",
      title: "Event & IoT Gateway",
      description: "High-throughput asynchronous communication for distributed edge and IoT ecosystems.",
      features: ["Edge Autonomy", "Guaranteed Delivery", "Low Latency"],
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: "Workflow",
      title: "Orchestration Layer",
      description: "Automate complex workflows across APIs, AI models, and event-driven pipelines seamlessly.",
      features: ["Dynamic Routing", "Service Mesh", "Visual Designer"],
      iconColor: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: "BarChart3",
      title: "Unified Control Plane",
      description: "Centralized management and visibility across all your gateways, regions, and partners.",
      features: ["Real-time Monitoring", "Centralized Governance", "Export Logs"],
      iconColor: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: "Zap",
      title: "Edge Performance",
      description: "Ultra-low latency routing at the edge, ensuring your APIs are accessible anywhere, instantly.",
      features: ["Global CDN", "Local Polices", "DDoS Protection"],
      iconColor: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
  ],
};
