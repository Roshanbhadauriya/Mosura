"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { MOSURA_TIMELINE_DATA } from "@/constants/mosura-timeline";

export const MosuraTimeline = () => {
  return (
    <section className="w-full bg-black">
      <Timeline 
        data={MOSURA_TIMELINE_DATA} 
        title="Core Platform Capabilities"
        description="Explore the unified power of Mosura. From governing APIs to orchestrating AI agents, our platform provides the essential infrastructure for the modern digital economy."
      />
    </section>
  );
};
