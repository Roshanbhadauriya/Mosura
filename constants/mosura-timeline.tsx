import React from "react";
import Image from "next/image";

export const MOSURA_TIMELINE_DATA = [
  {
    title: "API Management",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-normal">
          The complete lifecycle platform for designing, documenting, and governing your enterprise API ecosystem with absolute control.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://assets.aceternity.com/templates/startup-1.webp"
            alt="API Management Suite Preview"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl"
          />
          <Image
            src="https://assets.aceternity.com/templates/startup-2.webp"
            alt="API Governance Preview"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl"
          />
        </div>
      </div>
    ),
  },
  {
    title: "AI Gateway",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-normal">
          Secure, observe, and orchestrate LLM traffic. Built-in prompt guardrails, token metering, and model fallback for the agentic era.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="AI Gateway Preview"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl"
          />
          <Image
            src="https://assets.aceternity.com/features-section.png"
            alt="AI Orchestration Preview"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Event Gateway",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-normal">
          Unify your event-driven architecture. Seamlessly bridge Kafka, MQTT, and WebSockets with schema validation and intelligent routing.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://assets.aceternity.com/pro/bento-grids.png"
            alt="Event Gateway Preview"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl"
          />
          <Image
            src="https://assets.aceternity.com/cards.png"
            alt="Real-time Streaming Preview"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Orchestration",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-normal">
          Design complex service chains and automated workflows with a visual, low-code interface. Automate the glue between your APIs and AI.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://assets.aceternity.com/templates/startup-3.webp"
            alt="Workflow Builder Preview"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl"
          />
          <Image
            src="https://assets.aceternity.com/templates/startup-4.webp"
            alt="Visual Orchestration Preview"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Micro Gateway",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-normal">
          The industry&apos;s fastest, lightest micro-gateway. Perfect for edge deployments and high-frequency microservice communication with zero overhead.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="Micro Gateway Preview"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl"
          />
          <Image
            src="https://assets.aceternity.com/features-section.png"
            alt="Edge Deployment Preview"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl"
          />
        </div>
      </div>
    ),
  },
];
