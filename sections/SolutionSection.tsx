"use client";

import { motion } from "motion/react";
import { HOMEPAGE_CONTENT } from "@/constants/homepage";
import { ArrowRight, Cloud, Cpu, Database, Network } from "lucide-react";

export const SolutionSection = () => {
  const { solution } = HOMEPAGE_CONTENT;

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(237,127,24,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ed7f18] font-bold tracking-tight text-sm"
          >
            The Solution
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            {solution.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-[#ed7f18]">{solution.title.split(" ").pop()}</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12"
          >
            {solution.philosophy.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <div className="h-2 w-2 rounded-full bg-[#ed7f18]" />
                <span className="text-sm md:text-base font-medium text-slate-200">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual Architecture Representation */}
        <div className="relative mt-24 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-7 items-center gap-4 md:gap-0">
            {/* Control Plane */}
            <div className="md:col-span-1 flex flex-col items-center gap-4">
               <div className="w-20 h-20 rounded-2xl bg-[#ed7f18]/20 border border-[#ed7f18]/40 flex items-center justify-center shadow-[0_0_30px_rgba(237,127,24,0.2)]">
                  <Cpu className="text-[#ed7f18] w-10 h-10" />
               </div>
               <span className="text-xs font-bold tracking-tight text-[#ed7f18]">{solution.layers.control}</span>
            </div>

            <div className="hidden md:flex md:col-span-1 justify-center">
               <ArrowRight className="text-slate-700 w-8 h-8" />
            </div>

            {/* Distributed Gateways */}
            <div className="md:col-span-1 flex flex-col items-center gap-4">
               <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Network className="text-slate-200 w-10 h-10" />
               </div>
               <span className="text-xs font-bold tracking-tight text-slate-400">{solution.layers.gateways}</span>
            </div>

            <div className="hidden md:flex md:col-span-1 justify-center">
               <ArrowRight className="text-slate-700 w-8 h-8" />
            </div>

            {/* Targets */}
            <div className="md:col-span-3 grid grid-cols-2 gap-4">
               <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center gap-2">
                  <Database className="text-slate-400 w-6 h-6" />
                  <span className="text-[10px] font-bold text-slate-500">{solution.layers.target1}</span>
               </div>
               <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center gap-2">
                  <Cloud className="text-slate-400 w-6 h-6" />
                  <span className="text-[10px] font-bold text-slate-500">{solution.layers.target2}</span>
               </div>
            </div>
          </div>
          
          <div className="mt-12 p-3 rounded-lg bg-white/2 border border-white/5 inline-block">
            <p className="text-xs text-slate-500 font-mono tracking-tighter">
              {solution.visualLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
