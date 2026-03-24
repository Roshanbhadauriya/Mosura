export interface ForumPost {
  id: string;
  author: {
    name: string;
    avatar?: string;
    role: string;
  };
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  replies: number;
  views: number;
  lastActive: string;
  isPinned?: boolean;
  repliesData?: {
    author: {
      name: string;
      role: string;
    };
    content: string;
    timestamp: string;
  }[];
}

export const FORUM_CATEGORIES = [
  "All Discussions",
  "General",
  "Routing & Load Balancing",
  "AI Gateway",
  "Security & Privacy",
  "Developer Tools",
  "Ecosystem"
];

export const FORUM_POSTS: ForumPost[] = [
  {
    id: "post-1",
    author: {
      name: "Alex Rivera",
      role: "Platform Engineer"
    },
    title: "Best practices for multi-region LLM fallback?",
    excerpt: "I'm setting up a global gateway and want to ensure high availability for our AI endpoints across US and EU regions. What strategy works best with Mosura?",
    content: "We are currently using Mosura to manage our AI endpoints. We want to implement a robust fallback strategy where if the primary region (US-East) experiences latency above 500ms or returns a 5xx error, the traffic automatically routes to our EU-Central instance. Has anyone done this specifically with the AI Gateway module?",
    tags: ["#AI-Gateway", "#HighAvailability"],
    replies: 1,
    views: 515,
    lastActive: "Nov 2021",
    isPinned: true,
    repliesData: [
      {
        author: { name: "Mosura Team", role: "Maintainer" },
        content: "Great question Alex! You can use our 'smart-routing' policy combined with health checks. In your mosura.yaml, define both endpoints and set the priority. Our documentation on AI Gateway Fallback covers the exact schema for this.",
        timestamp: "Nov 2021"
      }
    ]
  },
  {
    id: "post-2",
    author: {
      name: "Sarah Chen",
      role: "Security Lead"
    },
    title: "SAML SP SSO fails with HTTP 502 Bad Gateway when Request Signature is enabled (Gravitee AM v4.4.x)",
    excerpt: "Got a question about the Gravitee platform? Post your question in the relevant sub category. Know the answer? Let your fellow community member know. Do your own research first.",
    content: "I'm encountering a consistent 502 error when enabling request signatures in my SAML configuration. It seems like the gateway is failing to validate the signature from the Identity Provider. I've checked the certificate chain but the issue persists. Any ideas on what might be causing the signature mismatch at the edge?",
    tags: ["#Security", "#AccessManagement"],
    replies: 1,
    views: 23,
    lastActive: "4d",
    repliesData: [
      {
        author: { name: "David Miller", role: "Security Architect" },
        content: "Check if the XML canonicalization method matches between your IdP and Mosura. We've seen cases where 'Exclude Comments' causes issues if not explicitly set on both sides.",
        timestamp: "3d"
      }
    ]
  },
  {
    id: "post-3",
    author: {
      name: "James Wilson",
      role: "Backend Dev"
    },
    title: "Kafka API-Endpoints Deep Dive - Avro Key Support and more complex transformations",
    excerpt: "We're seeing about a 40ms overhead on cache misses but massive gains on hits. Is anyone seeing different numbers with vector search enabled?",
    content: "We are streaming large datasets through the Kafka bridge and need to perform complex Avro transformations before exposing the data via REST. Does the Mosura Kafka module support custom JOLT transformations for Avro payloads, or should we handle that upstream in a separate microservice?",
    tags: ["#API-Management", "#Kafka"],
    replies: 2,
    views: 46,
    lastActive: "21d",
    repliesData: [
      {
        author: { name: "Kevin Zhang", role: "Contributor" },
        content: "The Kafka bridge currently supports basic transformations. For complex JOLT logic, we recommend using a sidecar or a dedicated message processor.",
        timestamp: "20d"
      },
      {
        author: { name: "James Wilson", role: "Backend Dev" },
        content: "Thanks Kevin, that's what I suspected. I'll stick to a sidecar approach for now.",
        timestamp: "19d"
      }
    ]
  },
  {
    id: "post-4",
    author: {
      name: "Maria Garcia",
      role: "Solutions Architect"
    },
    title: "Magic Link / One-Time Password (passwordless) login flow — is it possible?",
    excerpt: "Need guidance on setting up dynamic issuer validation. Is it possible to handle 100+ different issuers at the edge?",
    content: "We're looking to implement a passwordless login flow using Magic Links. Can Mosura handle the generation and verification of these short-lived tokens, or is it better to integrate with an external OIDC provider like Clerk or Kinde?",
    tags: ["#AccessManagement", "#auth"],
    replies: 2,
    views: 23,
    lastActive: "23d"
  },
  {
    id: "post-5",
    author: {
      name: "John Doe",
      role: "DevOps"
    },
    title: "Order of evaluation for Plan- and common flows",
    excerpt: "I'm curious about how the gateway evaluates policies when multiple flows are active.",
    content: "When a request matches both a specific Plan flow and a common flow, which one takes precedence? I'm trying to avoid duplicate rate limiting being applied at both levels.",
    tags: ["#API-Management", "#flow"],
    replies: 3,
    views: 33,
    lastActive: "Jan 24"
  }
];
