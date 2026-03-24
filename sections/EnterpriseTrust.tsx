"use client";

import { motion } from "motion/react";
import { HOMEPAGE_CONTENT } from "@/constants/homepage";
import { ShieldCheck, Zap, Server, Globe } from "lucide-react";

export const EnterpriseTrust = () => {
  const { trust } = HOMEPAGE_CONTENT;

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
              <h2 className="text-3xl font-bold text-white mb-8">{trust.title}</h2>
              <div className="flex flex-wrap gap-4">
                {trust.badges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold">
                    <ShieldCheck size={14} />
                    {badge}
                  </div>
                ))}
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-4">
                 {trust.stats.map((stat, idx) => (
                   <div key={idx} className="p-4 rounded-xl border border-white/5 bg-white/2">
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-[10px] text-slate-500font-black">{stat.label}</div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="grid grid-cols-1 gap-6">
              <div className="p-8 rounded-3xl border border-white/10 bg-linear-to-br from-white/5 to-transparent backdrop-blur-xl">
                 <div className="flex items-center gap-6 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                       <Server className="text-slate-400" />
                    </div>
                    <div>
                       <h4 className="text-white font-bold">{trust.deploymentTitle}</h4>
                       <p className="text-sm text-slate-500">{trust.deploymentSubtitle}</p>
                    </div>
                 </div>
                 <div className="flex gap-3">
                    {trust.deployments.map((d, i) => (
                      <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
                        {d}
                      </span>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
