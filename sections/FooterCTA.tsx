"use client";

import { motion } from "motion/react";
import { HOMEPAGE_CONTENT } from "@/constants/homepage";

export const FooterCTA = () => {
  const { cta } = HOMEPAGE_CONTENT;

  return (
    <section className="relative w-full py-32 bg-black overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(237,127,24,0.1)_0%,transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-none"
        >
          {cta.headline}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-slate-400 mb-16 max-w-2xl mx-auto"
        >
          {cta.subtext}
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
           <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-[#ed7f18] text-white font-bold text-lg shadow-[0_20px_50px_rgba(237,127,24,0.3)] hover:shadow-[0_25px_60px_rgba(237,127,24,0.5)] transition-all hover:-translate-y-1">
              {cta.buttons.primary}
           </button>
           <button className="w-full sm:w-auto px-10 py-5 rounded-2xl border border-white/20 bg-white/5 text-white font-bold text-lg backdrop-blur-md hover:bg-white/10 transition-all hover:-translate-y-1">
              {cta.buttons.secondary}
           </button>
        </motion.div>
      </div>
    </section>
  );
};
