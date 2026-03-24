"use client";

import { motion } from "motion/react";
import { HOMEPAGE_CONTENT } from "@/constants/homepage";
import { Brain, Sparkles, CheckCircle2 } from "lucide-react";

export const AIGateway = () => {
  const { ai } = HOMEPAGE_CONTENT;

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ed7f18]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ed7f18]/30 bg-[#ed7f18]/5 text-[#ed7f18] text-xs font-bold tracking-tight mb-8"
            >
              <Sparkles size={14} />
              {ai.badge}
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
            >
              {ai.title}
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {ai.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-2 text-slate-300"
                >
                  <CheckCircle2 size={18} className="text-[#ed7f18] shrink-0" />
                  <span className="font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <p className="text-lg text-slate-200 leading-relaxed italic">
                "{ai.positioning}"
              </p>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, rotateY: -15, scale: 0.95 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-video flex items-center justify-center rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-transparent p-1 shadow-2xl overflow-hidden"
              style={{ perspective: "1000px" }}
            >
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
               <div className="flex flex-col items-center gap-8 relative">
                  <div className="w-24 h-24 rounded-full bg-[#ed7f18] flex items-center justify-center shadow-[0_0_60px_rgba(237,127,24,0.6)] animate-pulse">
                    <Brain className="text-white w-12 h-12" />
                  </div>
                  <p className="text-2xl md:text-3xl font-black text-center px-8 tracking-tight">
                    <span className="text-slate-500 line-through mr-4 decoration-white/30 decoration-2">{ai.comparison}</span>
                    <br />
                    <span className="text-white mt-4 block">{ai.differentiator}</span>
                  </p>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
