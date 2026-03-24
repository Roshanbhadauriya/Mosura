"use client";

import { motion } from "motion/react";
import { HOMEPAGE_CONTENT } from "@/constants/homepage";

export const FederationSection = () => {
  const { federation } = HOMEPAGE_CONTENT;

  return (
    <section className="relative w-full py-32 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative h-[400px] w-full p-8 flex items-center justify-center">
              {/* Abstract Federation Visualization */}
              <div className="absolute inset-0 border border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-10 border border-dashed border-[#ed7f18]/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-20 border border-dashed border-white/5 rounded-full animate-[spin_30s_linear_infinite]" />
              
              <div className="relative z-10 w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_80px_rgba(255,255,255,0.2)]">
                <div className="w-12 h-12 bg-black rounded-lg transform rotate-45" />
                <span className="absolute text-[8px] font-blacktracking-tighter text-black">Control</span>
              </div>

              {[0, 72, 144, 216, 288].map((degree, idx) => (
                <div
                  key={idx}
                  className="absolute"
                  style={{ transform: `rotate(${degree}deg) translateY(-140px)` }}
                >
                  <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center" style={{ transform: `rotate(-${degree}deg)` }}>
                    <div className="w-2 h-2 bg-[#ed7f18] rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-8"
            >
              {federation.title}
            </motion.h2>

            <div className="flex flex-wrap gap-3 mb-12">
              {federation.features.map((feature, idx) => (
                <span key={idx} className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm font-medium">
                  {feature}
                </span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative p-8 rounded-3xl bg-white/3 border border-white/10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#ed7f18]" />
              <p className="text-3xl md:text-5xl font-black text-white leading-tighttracking-tighter">
                {federation.positioning.split(".")[0]}.<br />
                <span className="text-[#ed7f18]">{federation.positioning.split(".")[1]}</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
