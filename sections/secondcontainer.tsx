"use client";

import { motion } from "motion/react";
import NeuralBackground from "@/components/flow-field-background";
import { HERO_CONTENT } from "@/constants/hero";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const topRevealVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] as const },
  },
};

const bottomRevealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] as const },
  },
};

const SecondContainer = () => {
  return (
    <div className="relative w-full  min-h-screen overflow-hidden bg-black pb-20 flex justify-center items-center">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <NeuralBackground 
            color="#ed7f18" // Using the primary hex #ed7f18 for saturated visibility against black
            scale={1}
            trailOpacity={0.05}
            particleCount={300}
            speed={0.5}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col h-full w-full"
        >
          <motion.div variants={topRevealVariants}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(237,127,24,0.35)] bg-black/50 px-3 py-1 text-[11px] font-mediumtracking-[0.22em] text-orange-100/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-(--primary-color) shadow-[0_0_14px_rgba(237,127,24,0.95)]" />
              <span>{HERO_CONTENT.badge}</span>
            </div>
          </motion.div>

          <motion.div variants={topRevealVariants} className="space-y-4 md:space-y-6 mt-6 md:mt-8">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 md:text-6xl lg:text-7xl">
              <span className="bg-[linear-gradient(90deg,var(--primary-color),#ffffff)] bg-clip-text text-transparent">
                {HERO_CONTENT.headline.line1}
              </span>
              <br />
              <span>{HERO_CONTENT.headline.line2}</span>
            </h1>
            <p className="max-w-2xl text-balance text-sm leading-relaxed text-slate-200/80 md:text-base lg:text-lg">
              {HERO_CONTENT.description}
            </p>
          </motion.div>

          <motion.div variants={bottomRevealVariants} className="flex flex-col items-center gap-3 pt-6 md:pt-8 sm:flex-row sm:items-center sm:justify-start">
            <button
              className="inline-flex items-center justify-center rounded-xl bg-(--primary-color) px-7 py-2.5 text-sm font-medium text-white shadow-[0_18px_60px_rgba(237,127,24,0.55)] transition hover:bg-[#ff8f28] hover:shadow-[0_20px_70px_rgba(237,127,24,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary-color) focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              {HERO_CONTENT.buttons.primary}
            </button>
            <button
              className="inline-flex items-center justify-center rounded-xl border border-(--primary-color) bg-black/40 px-7 py-2.5 text-sm font-medium text-slate-100 transition hover:border-(--primary-color) hover:bg-black/70 hover:text-(--primary-color) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary-color) focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              {HERO_CONTENT.buttons.secondary}
            </button>
          </motion.div>

          <motion.p variants={bottomRevealVariants} className="pt-4 md:pt-6 text-xs text-slate-300/70">
            {HERO_CONTENT.footer}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export { SecondContainer };