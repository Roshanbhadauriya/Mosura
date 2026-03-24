export interface DocSection {
  title: string;
  items: DocItem[];
}

export interface DocItem {
  id: string;
  slug: string;
  title: string;
  content: string;
}

export const DOCUMENTATION_DATA: DocSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        id: "doc-1",
        slug: "introduction",
        title: "Introduction",
        content: `
          <h2>Welcome to Mosura API Gateway</h2>
          <p>Mosura is a high-performance, enterprise-grade edge gateway built for modern AI and API workflows. It provides a centralized control plane for managing, securing, and scaling your API ecosystem.</p>
          <p>Our platform is designed to handle massive scale while maintaining low latency, making it ideal for real-time AI applications and high-traffic microservices.</p>
          <h3>Key Features</h3>
          <ul>
            <li><strong>Global Edge Network:</strong> Deploy policies closer to your users.</li>
            <li><strong>AI-First Design:</strong> Native support for LLM providers and semantic caching.</li>
            <li><strong>Unified Security:</strong> Integrated WAF, rate limiting, and authentication.</li>
            <li><strong>Real-time Observability:</strong> Deep insights into every request and token usage.</li>
          </ul>
        `
      },
      {
        id: "doc-2",
        slug: "quick-start",
        title: "Quick Start",
        content: `
          <h2>Quick Start Guide</h2>
          <p>Get up and running with Mosura in less than 5 minutes. This guide will walk you through the basic installation and configuration.</p>
          <h3>1. Installation</h3>
          <p>Run the following command in your terminal to install the Mosura CLI:</p>
          <pre><code>curl -sL https://get.mosura.io | bash</code></pre>
          <h3>2. Authentication</h3>
          <p>Login to your account to synchronize your dashboard configurations:</p>
          <pre><code>mosura login</code></pre>
          <h3>3. Deploy Your First Gateway</h3>
          <p>Initialize a new project and deploy it to the edge:</p>
          <pre><code>mosura init my-gateway\ncd my-gateway\nmosura deploy</code></pre>
        `
      }
    ]
  },
  {
    title: "Core Concepts",
    items: [
      {
        id: "doc-3",
        slug: "routing",
        title: "Routing & Load Balancing",
        content: `
          <h2>Routing Traffic</h2>
          <p>Mosura provides industry-leading routing capabilities, allowing you to direct traffic based on any attribute of the incoming request.</p>
          <h3>Path Matching</h3>
          <p>We support multiple path matching strategies:</p>
          <ul>
            <li><strong>Exact Match:</strong> Matches the exact path strictly.</li>
            <li><strong>Prefix Match:</strong> Matches any path starting with a specific prefix.</li>
            <li><strong>Regex Match:</strong> Powerful regular expression support for complex routing needs.</li>
          </ul>
          <h3>Load Balancing</h3>
          <p>Distribute traffic across multiple upstream targets using weighted round-robin, least connections, or IP hashing algorithms.</p>
        `
      },
      {
        id: "doc-4",
        slug: "authentication",
        title: "Authentication",
        content: `
          <h2>Securing your APIs</h2>
          <p>Security is baked into the core of Mosura. You can enable multiple authentication methods at the edge without modifying your upstream code.</p>
          <h3>Supported Methods</h3>
          <ul>
            <li><strong>JWT Validation:</strong> Verify tokens from providers like Auth0, Okta, or your own issuer.</li>
            <li><strong>API Keys:</strong> Simple and effective header-based authentication.</li>
            <li><strong>OAuth2 OIDC:</strong> Full support for modern identity flows.</li>
          </ul>
        `
      }
    ]
  },
  {
    title: "AI Gateway",
    items: [
      {
        id: "doc-5",
        slug: "llm-routing",
        title: "LLM Provider Routing",
        content: `
          <h2>Intelligent Prompt Routing</h2>
          <p>Optimize your AI usage by routing prompts between different models and providers based on real-time metrics.</p>
          <h3>Fallback Strategies</h3>
          <p>Automatically switch to a secondary provider if your primary model is hitting rate limits or experiencing high latency.</p>
          <pre><code># Example Configuration\nrouting:\n  primary: openai/gpt-4o\n  fallback: anthropic/claude-3-5-sonnet\n  on_error: 429, 503</code></pre>
        `
      },
      {
        id: "doc-6",
        slug: "semantic-caching",
        title: "Semantic Caching",
        content: `
          <h2>Reduce Latency and costs</h2>
          <p>Traditional caching doesn't work for LLMs because prompts are rarely identical. Semantic caching uses vector embeddings to understand the meaning behind requests.</p>
          <h3>How it works</h3>
          <p>When a prompt is similar enough to a previously cached response (determined by a configurable threshold), Mosura serves the cached result directly, saving you time and money.</p>
        `
      }
    ]
  }
];
