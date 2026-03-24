export const FEATURES_CONTENT = {
  "api-management-suite": {
    badge: "API Governance",
    title: "Manage, Secure, and Monetize Your APIs",
    description:
      "Empower your teams with a centralized API platform that scales across regions, business units, and partners — while maintaining governance, security, and observability.",
    highlightPills: ["Enterprise-Grade", "Federated", "Policy-as-Code"],
    stats: [
      { label: "Deployment", value: "Instant" },
      { label: "Compliance", value: "100%" },
      { label: "Uptime SLA", value: "99.99%" },
    ],
    ctas: {
      primary: "Request a Demo",
      secondary: "Get Started",
    },
    overview: {
      intro:
        "Mosura is a next-generation API Management Suite designed for modern enterprises. It provides a central control plane for policies, governance, and analytics, paired with federated data planes for distributed, high-performance API traffic management.",
      capabilities: [
        "Securely expose APIs to internal teams, partners, and developers",
        "Automate policy enforcement with Policy-as-Code",
        "Monitor, analyze, and monetize your API traffic",
        "Enable AI-driven applications through advanced LLM routing",
      ],
    },
    keyFeatures: [
      {
        icon: "ShieldCheck",
        title: "Centralized API Governance",
        items: [
          "Define, version, and enforce organization-wide policies",
          "Ensure compliance across all teams and regions",
          "Maintain a single source of truth for API standards",
        ],
      },
      {
        icon: "Network",
        title: "Federated Gateway Architecture",
        items: [
          "Deploy gateways per team, region, or partner",
          "Retain local autonomy while enforcing global rules",
          "Scale API delivery without bottlenecks",
        ],
      },
      {
        icon: "Lock",
        title: "Security & Zero Trust",
        items: [
          "mTLS, OAuth2, JWT authentication",
          "Data masking and PII protection",
          "Policy enforcement at the edge, no traffic dependency on central plane",
        ],
      },
      {
        icon: "BrainCircuit",
        title: "AI & LLM Orchestration",
        items: [
          "Route AI/LLM requests intelligently",
          "Monitor performance, cost, and compliance",
          "Enable safe, scalable AI applications",
        ],
      },
      {
        icon: "CircleDollarSign",
        title: "Monetization & Billing",
        items: [
          "Usage-based billing and subscription models",
          "Partner-tier management and revenue sharing",
          "Track and enforce quotas automatically",
        ],
      },
      {
        icon: "BarChart3",
        title: "Observability & Analytics",
        items: [
          "SLA/SLO monitoring and anomaly detection",
          "API traffic analytics and AI usage insights",
          "Self-healing mechanisms to prevent downtime",
        ],
      },
      {
        icon: "Code2",
        title: "Developer Experience & Ecosystem",
        items: [
          "Developer portal with self-service onboarding",
          "API documentation and sandbox environment",
          "Faster partner integration with minimal friction",
        ],
      },
    ],
    howItWorks: {
      title: "How Mosura Works",
      steps: [
        {
          step: "01",
          title: "Control Plane",
          description:
            "Central hub for policies, governance, analytics, and monetization.",
        },
        {
          step: "02",
          title: "Federated Data Planes",
          description:
            "Distributed gateways enforce policies, route API & AI traffic, and provide local autonomy.",
        },
        {
          step: "03",
          title: "Policy-as-Code",
          description:
            "Write once, enforce everywhere — automatically and auditable.",
        },
        {
          step: "04",
          title: "Observability & Self-Healing",
          description:
            "Monitor and act in real-time to maintain uptime and SLA compliance.",
        },
      ],
    },
    whyChoose: {
      title: "Why Enterprises Choose Mosura",
      items: [
        {
          label: "Scale confidently",
          description: "Handle traffic from multiple regions and partners",
        },
        {
          label: "Secure & compliant",
          description: "Enforce policies automatically across all gateways",
        },
        {
          label: "Monetize efficiently",
          description: "Convert APIs into revenue streams",
        },
        {
          label: "AI-ready",
          description: "Route, monitor, and govern LLM usage",
        },
        {
          label: "Faster adoption",
          description: "Self-service portals for developers and partners",
        },
      ],
    },
    industries: {
      title: "Industries & Use Cases",
      items: [
        { name: "BFSI", outcome: "Open Banking, PSD2, fintech APIs" },
        { name: "Telecom", outcome: "Network exposure, partner APIs" },
        {
          name: "Retail & eCommerce",
          outcome: "Partner integrations, multi-region APIs",
        },
        {
          name: "Education",
          outcome: "Connected Schools, system integrations",
        },
        {
          name: "Government",
          outcome: "Citizen services, compliance-ready APIs",
        },
      ],
    },
    footerCta: {
      headline:
        "Transform the way you manage APIs. Scale securely. Monetize efficiently.",
      subtext: "Get started with Mosura today.",
      buttons: {
        primary: "Request a Demo",
        secondary: "Talk to Sales",
      },
    },
  },
  "api-gateway": {
    badge: "Edge Performance",
    title: "Secure, Route, and Optimize Your API Traffic",
    description:
      "Mosura API Gateway provides high-performance, reliable, and secure traffic management for modern enterprises, enabling seamless API delivery across teams, partners, and regions.",
    highlightPills: ["Sub-ms Latency", "Multi-Cloud", "Federated"],
    stats: [
      { label: "Latency", value: "<1ms" },
      { label: "Throughput", value: "10M+/s" },
      { label: "Uptime", value: "99.99%" },
    ],
    ctas: {
      primary: "Request a Demo",
      secondary: "Get Started",
    },
    overview: {
      intro:
        "Mosura API Gateway is the core of your API ecosystem, acting as the traffic control layer for your APIs and AI services. It is designed for federated deployment, giving teams and partners autonomy while maintaining centralized governance.",
      capabilities: [
        "Securely expose APIs and microservices",
        "Route API and AI requests intelligently",
        "Enforce policies automatically via Policy-as-Code",
        "Monitor traffic, latency, and performance in real-time",
      ],
    },
    keyFeatures: [
      {
        icon: "Waypoints",
        title: "Intelligent Traffic Routing",
        items: [
          "Route requests to internal services, cloud functions, or AI models",
          "Support for multi-region, multi-cloud, and partner networks",
          "Failover, retry, and circuit-breaking for high availability",
        ],
      },
      {
        icon: "Network",
        title: "Federated Gateway Architecture",
        items: [
          "Deploy independent gateways per team, region, or partner",
          "Central governance ensures policy and security compliance",
          "Local autonomy enables fast innovation and scale",
        ],
      },
      {
        icon: "Lock",
        title: "Security & Zero Trust Enforcement",
        items: [
          "mTLS, OAuth2, JWT authentication",
          "API-level threat detection",
          "Payload inspection and PII masking",
        ],
      },
      {
        icon: "BrainCircuit",
        title: "AI & LLM Traffic Management",
        items: [
          "Intelligent routing to multiple AI/LLM providers",
          "Monitor performance, cost, and compliance",
          "Policy enforcement for safe AI usage",
        ],
      },
      {
        icon: "BarChart3",
        title: "API Traffic Analytics",
        items: [
          "Real-time metrics: latency, throughput, errors",
          "SLA/SLO monitoring and anomaly detection",
          "Logging and auditing for compliance",
        ],
      },
      {
        icon: "FileCode2",
        title: "Policy-as-Code Enforcement",
        items: [
          "Write policies once, enforce everywhere automatically",
          "Version-controlled and auditable",
          "Automate rate limits, quotas, security rules, and governance",
        ],
      },
      {
        icon: "Code2",
        title: "Developer & Partner Experience",
        items: [
          "Self-service API access for developers and partners",
          "Sandbox environments for testing",
          "API documentation and interactive explorers",
        ],
      },
    ],
    howItWorks: {
      title: "How Mosura API Gateway Works",
      steps: [
        {
          step: "01",
          title: "Edge Gateway (Data Plane)",
          description:
            "Handles all API and AI traffic, enforces local policies, routes requests, and provides high availability.",
        },
        {
          step: "02",
          title: "Control Plane",
          description:
            "Defines policies, security rules, analytics, and monetization strategies.",
        },
        {
          step: "03",
          title: "Federated Deployment",
          description:
            "Multiple gateways operate independently but follow global governance rules.",
        },
        {
          step: "04",
          title: "Policy-as-Code",
          description:
            "Automates policy enforcement across all gateways.",
        },
      ],
    },
    footerCta: {
      headline:
        "Secure, route, and optimize your API traffic at enterprise scale.",
      subtext: "Deploy Mosura API Gateway today.",
      buttons: {
        primary: "Request a Demo",
        secondary: "Talk to Sales",
      },
    },
  },
  "ai-gateway": {
    badge: "AI Orchestration",
    title: "Intelligent AI Traffic Management for Enterprise-Scale LLMs",
    description:
      "Mosura AI Gateway empowers organizations to route, monitor, and govern AI/LLM requests securely and efficiently across multiple models, cloud providers, and business domains.",
    highlightPills: ["Multi-LLM", "Cost Control", "Prompt Governance"],
    stats: [
      { label: "Guardrails", value: "Real-time" },
      { label: "Cost Track", value: "Included" },
      { label: "Fallback", value: "Automatic" },
    ],
    ctas: {
      primary: "Request a Demo",
      secondary: "Get Started",
    },
    overview: {
      intro:
        "The Mosura AI Gateway is a next-generation AI traffic management platform that sits on top of your API ecosystem. It's designed to handle large-scale AI/LLM requests, ensuring optimal latency and performance, cost-efficient AI usage, security and compliance at all times, and intelligent routing to the best-performing LLM.",
      capabilities: [
        "Route AI requests dynamically to the best-performing LLM",
        "Track and optimize cost and token usage across providers",
        "Enforce security, compliance, and prompt governance",
        "Full visibility across internal, public, and hybrid AI infrastructure",
      ],
    },
    keyFeatures: [
      {
        icon: "BrainCircuit",
        title: "Multi-LLM Orchestration",
        items: [
          "Route AI requests dynamically to the best-performing LLM",
          "Support for OpenAI, Anthropic, Azure, AWS, and on-prem models",
          "Intelligent fallback in case of model failure",
          "Performance scoring and adaptive routing",
        ],
      },
      {
        icon: "CircleDollarSign",
        title: "Cost & Token Management",
        items: [
          "Track usage per model, per API key, and per team",
          "Enforce cost limits and budgets",
          "Optimize token usage across multiple AI providers",
        ],
      },
      {
        icon: "FileCode2",
        title: "Policy-as-Code for AI",
        items: [
          "Define prompt policies, input/output validation, and content safety rules",
          "Enforce PII detection and regulatory compliance",
          "Version-controlled, automated, and auditable enforcement",
        ],
      },
      {
        icon: "ShieldCheck",
        title: "Security & Governance",
        items: [
          "mTLS and API key authentication",
          "Payload inspection and sanitization",
          "Audit logs for every AI request and response",
          "Centralized governance across federated gateways",
        ],
      },
      {
        icon: "BarChart3",
        title: "Observability & Analytics",
        items: [
          "Monitor latency, cost, errors, and SLA compliance",
          "Track AI model performance over time",
          "Alerts for anomalous or high-cost behavior",
        ],
      },
      {
        icon: "Code2",
        title: "Developer & Partner Ecosystem",
        items: [
          "Self-service API access to AI models",
          "Sandbox and test environments for safe experimentation",
          "Centralized API documentation for AI endpoints",
        ],
      },
    ],
    plugins: [
      {
        icon: "Waypoints",
        title: "Model Routing & Selection",
        description:
          "Dynamic selection based on latency, cost, or accuracy. Fallback strategies and A/B testing between models.",
      },
      {
        icon: "TextCursorInput",
        title: "Prompt Transformation & Pre-Processing",
        description:
          "Auto-format, sanitize prompts, enforce length/prohibited words, and auto-translate or normalize.",
      },
      {
        icon: "CheckCircle2",
        title: "Output Validation & Post-Processing",
        description:
          "Validate AI outputs against business rules. Content moderation, PII masking, and structured JSON formatting.",
      },
      {
        icon: "CircleDollarSign",
        title: "Cost & Usage Optimization",
        description:
          "Track token usage and spending. Dynamic throttling and cheaper model suggestions without losing SLA.",
      },
      {
        icon: "ShieldCheck",
        title: "Security & Compliance",
        description:
          "Data masking, encryption, access control. GDPR, HIPAA enforcement. Tamper-proof audit trails.",
      },
      {
        icon: "BarChart3",
        title: "Analytics & Monitoring",
        description:
          "Real-time dashboards for latency, throughput, errors, cost. SLA/SLO monitoring and AI performance scoring.",
      },
      {
        icon: "Code2",
        title: "Developer & Partner Experience",
        description:
          "Self-service onboarding, sandbox provisioning, and interactive API explorer for AI endpoints.",
      },
      {
        icon: "Plug",
        title: "Integration Plugins",
        description:
          "Connect to internal apps, microservices, webhooks, message queues, event-driven pipelines, and BI systems.",
      },
    ],
    howItWorks: {
      title: "AI Gateway Architecture",
      steps: [
        {
          step: "01",
          title: "Mosura Control Plane",
          description:
            "Policy management, governance & compliance, AI/LLM orchestration, analytics & cost management.",
        },
        {
          step: "02",
          title: "Policy & Config Distribution",
          description:
            "Policies and configurations are distributed to all edge gateways automatically.",
        },
        {
          step: "03",
          title: "AI Gateway Edge Nodes",
          description:
            "Deployed per team, region, or partner — each handles AI/LLM traffic independently.",
        },
        {
          step: "04",
          title: "Intelligent Model Routing",
          description:
            "AI/LLM requests are routed to the best-performing models based on latency, cost, and accuracy.",
        },
      ],
    },
    footerCta: {
      headline:
        "Unlock the full potential of AI at scale.",
      subtext: "Manage, secure, and optimize LLM traffic with Mosura AI Gateway.",
      buttons: {
        primary: "Request a Demo",
        secondary: "Talk to Sales",
      },
    },
  },

  "event-gateway": {
    badge: "Real-time Streaming",
    title: "Reliable, Secure, and Scalable Event-Driven Architecture",
    description:
      "Mosura Event Gateway enables organizations to streamline, manage, and secure all asynchronous API and event traffic, providing a robust foundation for event-driven applications across teams, regions, and partners.",
    highlightPills: ["Event-Driven", "Guaranteed Delivery", "Federation-Ready"],
    stats: [
      { label: "Protocols", value: "Multiple" },
      { label: "Delivery", value: "Guaranteed" },
      { label: "Reliability", value: "99.99%" },
    ],
    ctas: {
      primary: "Request a Demo",
      secondary: "Get Started",
    },
    overview: {
      intro:
        "The Mosura Event Gateway is designed to orchestrate asynchronous communication between applications, microservices, and external partners. It handles webhooks, events, messages, and streaming data efficiently, securely, and at enterprise scale. It is federation-ready, providing local autonomy for teams while maintaining centralized governance, observability, and policy enforcement.",
      capabilities: [
        "Deliver high-throughput, low-latency event processing",
        "Ensure guaranteed delivery and event integrity",
        "Manage multi-tenant, multi-region event pipelines",
        "Integrate seamlessly with APIs, AI services, and backend systems",
      ],
    },
    keyFeatures: [
      {
        icon: "RefreshCcw",
        title: "Reliable Event Delivery",
        items: [
          "Guaranteed message delivery (at-least-once, exactly-once semantics)",
          "Retry policies, dead-letter queues (DLQ), and failure handling",
          "Event deduplication and ordering",
        ],
      },
      {
        icon: "Waypoints",
        title: "Event Routing & Transformation",
        items: [
          "Intelligent routing to internal or external systems",
          "Event transformation, enrichment, and validation",
          "Support for JSON, XML, Avro, and other common payloads",
        ],
      },
      {
        icon: "Network",
        title: "Multi-Tenant & Multi-Region Federation",
        items: [
          "Deploy event gateways per business unit, region, or partner",
          "Central policy enforcement across distributed gateways",
          "Local configuration autonomy for faster innovation",
        ],
      },
      {
        icon: "ShieldCheck",
        title: "Security & Compliance",
        items: [
          "mTLS, OAuth2, and API key authentication for events",
          "Payload encryption, data masking, and PII protection",
          "Audit logs for all events and processing actions",
        ],
      },
      {
        icon: "BarChart3",
        title: "Observability & Analytics",
        items: [
          "Real-time metrics: event volume, latency, errors, and throughput",
          "SLA/SLO monitoring for event processing pipelines",
          "Event tracing and correlation across multiple systems",
        ],
      },
      {
        icon: "BrainCircuit",
        title: "Integration with AI & API Gateways",
        items: [
          "Route events to AI models or API endpoints automatically",
          "Enable event-driven AI workflows and automated responses",
          "Bridge synchronous APIs and asynchronous event streams",
        ],
      },
      {
        icon: "Code2",
        title: "Developer & Partner Experience",
        items: [
          "Self-service onboarding for webhook/event subscriptions",
          "Interactive sandbox environment for testing",
          "Developer portal with API/event schema documentation",
        ],
      },
    ],
    howItWorks: {
      title: "Event Gateway Architecture",
      steps: [
        {
          step: "01",
          title: "Mosura Control Plane",
          description:
            "Policy management, security & compliance, observability & analytics, event routing rules.",
        },
        {
          step: "02",
          title: "Federated Event Gateways",
          description:
            "Deployed per region, business unit, or partner — each operates independently.",
        },
        {
          step: "03",
          title: "Event Processing Pipeline",
          description:
            "Events are routed, transformed, validated, and delivered to consumers reliably.",
        },
        {
          step: "04",
          title: "Guaranteed Delivery",
          description:
            "Retry policies, DLQs, and deduplication ensure no event is ever lost.",
        },
      ],
    },
    whyChoose: {
      title: "Why Enterprises Choose Mosura Event Gateway",
      items: [
        {
          label: "High reliability",
          description: "Ensure no event is lost, even in distributed setups",
        },
        {
          label: "Scalable",
          description: "Handle millions of events per second",
        },
        {
          label: "Secure & compliant",
          description: "Zero Trust event delivery and data protection",
        },
        {
          label: "Federation-ready",
          description: "Local control + central governance",
        },
        {
          label: "AI & API integration",
          description: "Build event-driven AI and automation workflows",
        },
      ],
    },
    industries: {
      title: "Use Cases & Industries",
      items: [
        { name: "BFSI", outcome: "Real-time transaction updates, fraud detection, payment status events" },
        { name: "Telecom", outcome: "Network events, call records, location triggers" },
        { name: "Retail & eCommerce", outcome: "Order events, inventory updates, notifications" },
        { name: "Education", outcome: "Admission and student lifecycle events, analytics" },
        { name: "IoT & Logistics", outcome: "Device telemetry, location tracking, event-driven alerts" },
      ],
    },
    footerCta: {
      headline:
        "Enable reliable, scalable, and secure event-driven architecture across your enterprise.",
      subtext: "Start with Mosura Event Gateway today.",
      buttons: {
        primary: "Request a Demo",
        secondary: "Talk to Sales",
      },
    },
  },
  "orchestration": {
    badge: "Workflow Builder",
    title: "Automate, Coordinate, and Optimize Your Ecosystem",
    description:
      "Mosura Orchestration empowers enterprises to streamline complex workflows, route requests intelligently, and coordinate services across APIs, AI models, events, and microservices — all from a centralized control plane.",
    highlightPills: ["Visual Builder", "Cross-Service", "Self-Healing"],
    stats: [
      { label: "Workflows", value: "Visual" },
      { label: "Automation", value: "End-to-End" },
      { label: "Efficiency", value: "10x Faster" },
    ],
    ctas: {
      primary: "Request a Demo",
      secondary: "Get Started",
    },
    overview: {
      intro:
        "The Mosura Orchestration Layer acts as the central intelligence connecting all Mosura gateways and your enterprise applications. With Mosura Orchestration, enterprises can scale operational complexity without increasing risk, while ensuring security, compliance, and reliability.",
      capabilities: [
        "Automate workflows across APIs, AI/LLM models, and event pipelines",
        "Dynamically route traffic to the best-performing service or model",
        "Apply business rules, policies, and logic consistently",
        "Monitor and optimize complex enterprise workflows in real-time",
      ],
    },
    keyFeatures: [
      {
        icon: "Workflow",
        title: "Workflow Orchestration",
        items: [
          "Define multi-step workflows across APIs, events, and AI services",
          "Sequential, parallel, or conditional routing of requests",
          "Supports synchronous and asynchronous execution",
        ],
      },
      {
        icon: "Waypoints",
        title: "Intelligent Routing & Load Balancing",
        items: [
          "Route requests based on latency, cost, SLA, or performance",
          "Automatic fallback to secondary services or models",
          "Adaptive traffic distribution across gateways and regions",
        ],
      },
      {
        icon: "FileCode2",
        title: "Policy & Governance Integration",
        items: [
          "Enforce Policy-as-Code across orchestrated workflows",
          "Centralized policy evaluation for security, compliance, and governance",
          "Audit logs for every orchestrated step",
        ],
      },
      {
        icon: "BrainCircuit",
        title: "AI & LLM Orchestration",
        items: [
          "Dynamically select the best-performing AI/LLM model",
          "Route prompts through transformations, validations, or moderation plugins",
          "Integrate AI outputs into downstream APIs or event workflows",
        ],
      },
      {
        icon: "Network",
        title: "Event & Microservice Orchestration",
        items: [
          "Connect events to APIs, AI services, or microservices automatically",
          "Retry, DLQ, and failure handling built-in",
          "Transform, enrich, and validate messages along the pipeline",
        ],
      },
      {
        icon: "HeartPulse",
        title: "Monitoring & Self-Healing",
        items: [
          "Real-time visibility into workflow performance and SLA compliance",
          "Detect anomalies and trigger automated remediation",
          "Alerts, dashboards, and predictive analytics for operational efficiency",
        ],
      },
      {
        icon: "Code2",
        title: "Developer & Partner Enablement",
        items: [
          "Visual workflow builder and declarative orchestration DSL",
          "Sandbox and testing environments",
          "Documentation and interactive testing for orchestrated workflows",
        ],
      },
    ],
    howItWorks: {
      title: "Orchestration Architecture",
      steps: [
        {
          step: "01",
          title: "Mosura Control Plane",
          description:
            "Workflow definitions, Policy-as-Code engine, AI & event routing, analytics & monitoring.",
        },
        {
          step: "02",
          title: "API Gateway Data Plane",
          description:
            "Handles API traffic, enforces policies, and routes requests.",
        },
        {
          step: "03",
          title: "AI Gateway Data Plane",
          description:
            "Manages AI/LLM traffic, model selection, and prompt governance.",
        },
        {
          step: "04",
          title: "Event Gateway Data Plane",
          description:
            "Processes events, messages, and streaming data across the ecosystem.",
        },
      ],
    },
    whyChoose: {
      title: "Why Enterprises Choose Mosura Orchestration",
      items: [
        {
          label: "Automate complex workflows",
          description: "Reduce manual integration and errors",
        },
        {
          label: "Intelligent service routing",
          description: "Optimize cost, latency, and performance",
        },
        {
          label: "End-to-end observability",
          description: "Track requests across gateways, AI models, and events",
        },
        {
          label: "Self-healing and reliability",
          description: "Automated remediation for failures",
        },
        {
          label: "Policy-driven governance",
          description: "Consistent security, compliance, and audit readiness",
        },
      ],
    },
    industries: {
      title: "Use Cases & Industries",
      items: [
        { name: "BFSI", outcome: "Payment processing, fraud detection, and reporting workflows" },
        { name: "Telecom", outcome: "Event-driven service orchestration and partner API integration" },
        { name: "Retail & eCommerce", outcome: "Order fulfillment, inventory updates, and AI-powered recommendations" },
        { name: "IoT & Smart Cities", outcome: "Device telemetry, event pipelines, and edge-to-cloud workflows" },
      ],
    },
    footerCta: {
      headline:
        "Automate, coordinate, and optimize your entire API, AI, and event ecosystem.",
      subtext: "Start with Mosura Orchestration today.",
      buttons: {
        primary: "Request a Demo",
        secondary: "Talk to Sales",
      },
    },
  },
  "micro-gateway-iot": {
    badge: "Edge & IoT",
    title: "Lightweight, Edge-Optimized Gateway for IoT and Microservices",
    description:
      "Mosura Micro Gateway enables secure, low-latency, and autonomous edge deployments, connecting IoT devices, microservices, and distributed applications seamlessly to your enterprise platform.",
    highlightPills: ["Edge Ready", "Low Resource", "Offline Capable"],
    stats: [
      { label: "Footprint", value: "<20MB" },
      { label: "Start-up", value: "Instant" },
      { label: "Security", value: "mTLS" },
    ],
    ctas: {
      primary: "Request a Demo",
      secondary: "Get Started",
    },
    overview: {
      intro:
        "The Mosura Micro Gateway / IoT Gateway is designed for edge and lightweight deployments. It's ideal for distributed environments where network reliability, latency, and edge autonomy are critical.",
      capabilities: [
        "Low-latency API and event routing near the source",
        "Secure device-to-cloud and microservice communication",
        "Local enforcement of policies while remaining connected to the central control plane",
        "Scalable handling of millions of IoT devices or microservice instances",
      ],
    },
    keyFeatures: [
      {
        icon: "Feather",
        title: "Lightweight & Edge-Optimized",
        items: [
          "Minimal footprint for edge devices or microservice clusters",
          "Low memory and CPU consumption",
          "Works offline and syncs with central control plane when connected",
        ],
      },
      {
        icon: "FileCode2",
        title: "Local Policy Enforcement",
        items: [
          "Apply security, rate limiting, and routing policies locally",
          "Supports Policy-as-Code at the edge",
          "Autonomous decisions even when central connectivity is intermittent",
        ],
      },
      {
        icon: "Lock",
        title: "Secure Device & Microservice Communication",
        items: [
          "mTLS, JWT, and API key authentication for device or service endpoints",
          "Payload encryption and data masking",
          "Supports Zero Trust principles in IoT and microservices environments",
        ],
      },
      {
        icon: "Waypoints",
        title: "Event Routing & Transformation",
        items: [
          "Edge processing of events and telemetry",
          "Transform, enrich, or filter messages before sending upstream",
          "Dead-letter queues and retry mechanisms for reliability",
        ],
      },
      {
        icon: "Cloud",
        title: "Multi-Cloud & Hybrid Deployment",
        items: [
          "Connect edge devices to cloud platforms or on-prem systems",
          "Federated configuration via central Mosura Control Plane",
          "Seamless integration with API Gateway, AI Gateway, and Event Gateway",
        ],
      },
      {
        icon: "BarChart3",
        title: "Observability & Monitoring",
        items: [
          "Collect metrics locally and send aggregated telemetry upstream",
          "Monitor device health, event throughput, and API performance",
          "Alerts for anomalous behavior or failed communication",
        ],
      },
      {
        icon: "Code2",
        title: "Developer & Partner Enablement",
        items: [
          "Easy provisioning for devices or microservices",
          "Local sandbox environment for testing and simulation",
          "Interactive documentation and API explorers",
        ],
      },
    ],
    howItWorks: {
      title: "Micro / IoT Gateway Architecture",
      steps: [
        {
          step: "01",
          title: "Mosura Control Plane",
          description:
            "Policy & security management, device registry & auth, analytics & telemetry.",
        },
        {
          step: "02",
          title: "IoT / Edge Micro Gateways",
          description:
            "Lightweight gateways deployed per device cluster, region edge, or partner edge.",
        },
        {
          step: "03",
          title: "Local Policy Enforcement",
          description:
            "Policies enforced at edge even offline — syncs when connected.",
        },
        {
          step: "04",
          title: "Upstream Integration",
          description:
            "API, events, and telemetry routed, secured, and transformed before reaching the cloud.",
        },
      ],
    },
    whyChoose: {
      title: "Why Enterprises Choose Mosura Micro / IoT Gateway",
      items: [
        {
          label: "Edge performance",
          description: "Low-latency routing close to devices or services",
        },
        {
          label: "Local autonomy",
          description: "Policies enforced at edge even offline",
        },
        {
          label: "Scalable",
          description: "Millions of devices or microservices supported",
        },
        {
          label: "Secure & compliant",
          description: "Zero Trust and encrypted communications",
        },
        {
          label: "Integrated",
          description: "Works with Mosura API, AI, and Event Gateways",
        },
      ],
    },
    industries: {
      title: "Use Cases & Industries",
      items: [
        { name: "IoT & Manufacturing", outcome: "Sensor data aggregation, telemetry routing" },
        { name: "Smart Cities", outcome: "Traffic monitoring, energy management, public services" },
        { name: "Retail & Supply Chain", outcome: "Inventory tracking, POS device integration" },
        { name: "Healthcare", outcome: "Medical device data routing and secure telemetry" },
        { name: "Microservices & SaaS", outcome: "Edge API proxy for distributed applications" },
      ],
    },
    footerCta: {
      headline:
        "Connect, secure, and manage your edge devices and microservices effortlessly.",
      subtext: "Start with Mosura Micro / IoT Gateway today.",
      buttons: {
        primary: "Request a Demo",
        secondary: "Talk to Sales",
      },
    },
  },
};
