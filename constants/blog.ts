export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  label: string;
  author: string;
  published: string;
  image: string;
  tags?: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    slug: "building-modern-uis-shadcn-react",
    title: "Building Modern UIs: A Deep Dive into Shadcn and React Components",
    summary: "Join us for an in-depth exploration of building modern user interfaces using shadcn/ui and React. Learn best practices and advanced techniques.",
    content: "<p>This is a detailed placeholder content for building modern UIs. It explains how to structure your React applications and use utility-first CSS frameworks like Tailwind alongside accessible component libraries like shadcn/ui.</p><h2>Key Takeaways:</h2><ul><li>Understand component anatomy.</li><li>Learn theming techniques.</li><li>Master accessibility patterns.</li></ul>",
    label: "Web Design",
    author: "Sarah Chen",
    published: "15 Feb 2024",
    image: "/images/block/placeholder-dark-1.svg",
    tags: ["Web Design", "UI Development"],
  },
  {
    id: "post-2",
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS: From Basics to Advanced Techniques",
    summary: "Discover how to leverage the full power of Tailwind CSS to create beautiful, responsive websites with clean and maintainable code.",
    content: "<p>Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p><p>This article covers responsive design, direct styling, and creating reusable component abstractions.</p>",
    label: "Web Design",
    author: "Michael Park",
    published: "22 Feb 2024",
    image: "/images/block/placeholder-dark-1.svg",
    tags: ["Web Design", "CSS"],
  },
  {
    id: "post-3",
    slug: "api-gateway-architecture",
    title: "Designing a Scalable Edge API Gateway",
    summary: "Learn how to architect an API gateway that can handle millions of requests while providing essential security, routing, and observability.",
    content: "<p>An API Gateway is a crucial component in any microservices architecture. It acts as a reverse proxy, accepting all application programming interface (API) calls, aggregating the various services required to fulfill them, and returning the appropriate result.</p>",
    label: "Engineering",
    author: "Alex Rivera",
    published: "05 Mar 2024",
    image: "/images/block/placeholder-dark-1.svg",
    tags: ["Architecture", "API", "Scaling"],
  },
  {
    id: "post-4",
    slug: "zero-trust-security",
    title: "Implementing Zero Trust Security in Modern Applications",
    summary: "A comprehensive guide to understanding and applying zero trust principles to secure your application boundaries.",
    content: "<p>The zero trust security model assumes that threat actors are already inside your network. Therefore, no user or device is trusted implicitly. Every request must be authenticated, authorized, and encrypted before granting access.</p>",
    label: "Security",
    author: "Jessica Williams",
    published: "12 Mar 2024",
    image: "/images/block/placeholder-dark-1.svg",
    tags: ["Security", "Zero Trust"],
  },
  {
    id: "post-5",
    slug: "ai-agents-orchestration",
    title: "Orchestrating Complex AI Agent Workflows",
    summary: "Explore patterns and practices for managing interactions between multiple specialized AI agents.",
    content: "<p>As AI applications become more complex, coordinating multiple specialized agents is essential. This post discusses routing models, memory sharing, and execution graphs.</p>",
    label: "AI",
    author: "David Kim",
    published: "20 Mar 2024",
    image: "/images/block/placeholder-dark-1.svg",
    tags: ["AI", "Orchestration", "LLMs"],
  },
  {
    id: "post-6",
    slug: "event-driven-microservices",
    title: "Event-Driven Architecture for Data Processing",
    summary: "How to decouple services and increase resilience using event stream platforms and pub/sub patterns.",
    content: "<p>Event-driven architecture (EDA) promotes the production, detection, consumption of, and reaction to events. We look at using Kafka and Redis streams to build resilient pipelines.</p>",
    label: "Engineering",
    author: "Sarah Chen",
    published: "02 Apr 2024",
    image: "/images/block/placeholder-dark-1.svg",
    tags: ["Architecture", "EDA", "Kafka"],
  },
  {
    id: "post-7",
    slug: "frontend-performance-optimizations",
    title: "Top 10 Frontend Performance Optimizations",
    summary: "Practical tips to reduce bundle size, improve Core Web Vitals, and make your React applications significantly faster.",
    content: "<p>Performance directly impacts user retention and SEO. We cover techniques like code-splitting, lazy loading, image optimization, and avoiding unnecessary re-renders.</p>",
    label: "Web Design",
    author: "Michael Park",
    published: "15 Apr 2024",
    image: "/images/block/placeholder-dark-1.svg",
    tags: ["Performance", "React", "Web Design"],
  },
  {
    id: "post-8",
    slug: "future-of-api-management",
    title: "The Future of API Management in the AI Era",
    summary: "As AI agents consume more APIs, how must API management platforms adapt their rate limiting, billing, and auth?",
    content: "<p>The primary consumer of APIs is shifting from humans (via UI) to AI agents. This necessitates changes in how we describe APIs (OpenAPI improvements), manage authentication, and handle unpredictable traffic spikes.</p>",
    label: "Product",
    author: "Alex Rivera",
    published: "28 Apr 2024",
    image: "/images/block/placeholder-dark-1.svg",
    tags: ["Product", "API", "AI"],
  }
];
