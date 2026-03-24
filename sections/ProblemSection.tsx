"use client";

import { motion, Variants } from "motion/react";
import { HOMEPAGE_CONTENT } from "@/constants/homepage";
import { InteractiveGlobe } from "@/components/interactive-globe";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const ProblemSection = () => {
  const { problem } = HOMEPAGE_CONTENT;

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 px-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ed7f18] font-bold tracking-tight text-sm mb-4"
          >
            The Challenge
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            {problem.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xl text-slate-400 mb-12">
                {problem.subtitle}
              </p>
            </motion.div>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {problem.items.map((item) => (
                <motion.li
                  key={item.id}
                  variants={itemVariants}
                  className="flex items-start gap-4 text-lg text-slate-300 group"
                >
                  <span className="mt-2.5 h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="leading-relaxed">{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-1 lg:order-2 flex justify-center items-center h-[400px] md:h-[600px]"
          >
            <div className="absolute inset-0 bg-linear-to-r from-[#ed7f18]/10 to-transparent blur-3xl opacity-30 pointer-events-none" />
            <InteractiveGlobe 
              size={600}
              dotColor="rgba(237, 127, 24, ALPHA)"
              markerColor="rgba(237, 127, 24, 1)"
              arcColor="rgba(237, 127, 24, 0.5)"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
