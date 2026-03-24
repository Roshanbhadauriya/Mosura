"use client";

import React, { useState, useMemo } from "react";
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion } from "framer-motion";

import { nodeTypes } from "@/components/ComparisonFlow/CustomNode";
import { HOMEPAGE_CONTENT } from "@/constants/homepage";
import {
  WITHOUT_MOSURA_DATA,
  WITH_MOSURA_DATA,
  FLOW_COLORS,
} from "@/constants/comparison-flow";

const FlowInner = ({ mode, nodes, edges, onNodesChange, onEdgesChange, defaultEdgeOptions }: any) => {
  const { fitView } = useReactFlow();

  React.useEffect(() => {
    // Small timeout to ensure nodes are rendered before fitting
    const timer = setTimeout(() => {
      fitView({ padding: 0.1, duration: 800 });
    }, 50);
    return () => clearTimeout(timer);
  }, [mode, fitView, nodes]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      defaultEdgeOptions={defaultEdgeOptions}
      fitView
      fitViewOptions={{ padding: 0.1 }}
      minZoom={0.05}
      maxZoom={1}
      nodesConnectable={false}
      nodesDraggable={false}
      elementsSelectable={false}
      zoomOnScroll={false}
      panOnScroll={false}
      panOnDrag={false}
      zoomOnPinch={false}
      zoomOnDoubleClick={false}
      preventScrolling={true}
      proOptions={{ hideAttribution: true }}
      colorMode="dark"
    >
      <Background color="#111" gap={20} />
    </ReactFlow>
  );
};

export const ComparisonFlow = () => {
  const [mode, setMode] = useState<"with" | "without">("without");

  const initialData = useMemo(() => {
    return mode === "with" ? WITH_MOSURA_DATA : WITHOUT_MOSURA_DATA;
  }, [mode]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialData.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialData.edges);

  const handleToggle = (newMode: "with" | "without") => {
    if (newMode === mode) return;
    setMode(newMode);
    const data = newMode === "with" ? WITH_MOSURA_DATA : WITHOUT_MOSURA_DATA;
    setNodes(data.nodes);
    setEdges(data.edges);
  };

  const defaultEdgeOptions = {
    type: "default", // Bezier curves
    animated: true,
    // Removed MarkerEnd for a cleaner, modern look similar to reference
  };

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden min-h-[800px] flex flex-col items-center">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(237,127,24,0.05)_0%,transparent_70%)] opacity-30" />
      </div>

      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ed7f18] font-bold tracking-tight text-sm"
          >
            The Analysis
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            {HOMEPAGE_CONTENT.comparison.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-[#ed7f18]">{HOMEPAGE_CONTENT.comparison.title.split(" ").pop()}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-2xl font-medium mt-4"
          >
            {HOMEPAGE_CONTENT.comparison.subtitle}
          </motion.p>
        </div>

        {/* Toggle Switch */}
        <div className="flex p-1.5 bg-white/3 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl">
          <button
            onClick={() => handleToggle("without")}
            className={`px-10 py-3 text-[13px] font-bold tracking-tight rounded-xl transition-all duration-300 ${
              mode === "without"
                ? FLOW_COLORS.without.button
                : "text-slate-500 hover:text-white"
            }`}
          >
           {HOMEPAGE_CONTENT.comparison.toggle.without}
          </button>
          <button
            onClick={() => handleToggle("with")}
            className={`px-10 py-3 text-[13px] font-bold tracking-tight rounded-xl transition-all duration-300 ${
              mode === "with"
                ? FLOW_COLORS.with.button
                : "text-slate-500 hover:text-white"
            }`}
          >
            {HOMEPAGE_CONTENT.comparison.toggle.with}
          </button>
        </div>

        {/* React Flow Container */}
        <div className="relative w-2/3 h-[700px] md:h-[500px] rounded-[2.5rem] border border-white/8 bg-black/60 backdrop-blur-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-[#080808]/40" />
          <ReactFlowProvider>
            <FlowInner 
              mode={mode}
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              defaultEdgeOptions={defaultEdgeOptions}
            />
          </ReactFlowProvider>
        </div>
      </div>
    </section>
  );
};

export default ComparisonFlow;
