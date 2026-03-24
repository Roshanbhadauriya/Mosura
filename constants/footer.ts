import { Twitter, Linkedin, Github, Mail } from "lucide-react";

export const FOOTER_CONTENT = {
  brand: {
    badge: "Mosura",
    description: "Any API. Any event. Any agent. Hold nothing back. The unified control plane for APIs, AI, events, and edge built for the enterprise.",
  },
  newsletter: {
    title: "Subscribe to our newsletter",
    placeholder: "Enter your email",
    buttonLabel: "Subscribe",
  },
  contact: {
    email: "info@mosura.io",
  },
  links: [
    {
      title: "Platform",
      links: [
        { label: "API Management Suite", href: "/products/mosura/features/api-management-suite" },
        { label: "Event Gateway", href: "/products/mosura/features/event-gateway" },
        { label: "AI Gateway", href: "/products/mosura/features/ai-gateway" },
        { label: "Micro Gateway", href: "/products/mosura/features/micro-gateway" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "BFSI", href: "#" },
        { label: "Telecom", href: "#" },
        { label: "Government", href: "#" },
        { label: "Retail & eCommerce", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "API Reference", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Status", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/company/about-us" },
        { label: "Compliance", href: "/company/compliance" },
        { label: "Privacy Policy", href: "/company/privacy-policy" },
        { label: "Terms of Use", href: "/company/terms-of-use" },
      ],
    },
  ],
  socials: [
    { icon: "Twitter", label: "Twitter", href: "#" },
    { icon: "Linkedin", label: "LinkedIn", href: "#" },
    { icon: "Github", label: "GitHub", href: "#" },
  ],
  copyright: "Zeroteq Software Pvt. Ltd. All rights reserved.",
};

export const SOCIAL_ICONS = {
  Twitter,
  Linkedin,
  Github,
  Mail,
};
