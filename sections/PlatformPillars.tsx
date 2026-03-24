"use client";

import { motion } from "motion/react";
import { HOMEPAGE_CONTENT } from "@/constants/homepage";
import { Shield, Waypoints, Cpu, CircleDollarSign } from "lucide-react";

const icons = {
  Shield,
  Waypoints,
  Cpu,
  CircleDollarSign,
};

export const PlatformPillars = () => {
  const { pillars } = HOMEPAGE_CONTENT;

  return (
    <section className="relative w-full py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ed7f18] font-boldtracking-[0.3em] text-sm mb-4"
          >
            {pillars.title}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            {pillars.subtitle}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.items.map((pillar, idx) => {
            const Icon = icons[pillar.icon as keyof typeof icons];
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-[2rem] border border-white/5 bg-white/2 hover:bg-white/4 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#ed7f18]/10 border border-[#ed7f18]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="text-[#ed7f18]" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ed7f18] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <p className="text-[#ed7f18] font-semibold text-smtracking-wider">
                    {pillar.positioning}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
