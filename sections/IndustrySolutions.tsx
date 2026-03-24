"use client";

import { motion } from "motion/react";
import { HOMEPAGE_CONTENT } from "@/constants/homepage";

export const IndustrySolutions = () => {
  const { industries } = HOMEPAGE_CONTENT;

  return (
    <section className="relative w-full py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ed7f18] font-bold tracking-tight text-sm"
          >
            Verticals
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            {industries.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.items.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-2xl border border-white/5 bg-white/1 hover:border-[#ed7f18]/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-[#ed7f18] mb-4">
                {industry.name}
              </h3>
              <p className="text-slate-400 font-medium leading-relaxed group-hover:text-slate-200 transition-colors">
                {industry.outcome}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
