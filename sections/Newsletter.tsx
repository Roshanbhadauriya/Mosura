"use client";

import { motion } from "motion/react";
import { HOMEPAGE_CONTENT } from "@/constants/homepage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  const { newsletter } = HOMEPAGE_CONTENT;

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(237,127,24,0.05)_0%,transparent_60%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative p-12 md:p-16 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#ed7f18]/30 bg-[#ed7f18]/10 text-[#ed7f18] text-[10px] font-boldtracking-[0.2em] mb-8">
              {newsletter.badge}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {newsletter.title}
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              {newsletter.description}
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder={newsletter.placeholder}
                className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 rounded-xl focus:border-[#ed7f18]/50 focus:ring-[#ed7f18]/20"
              />
              <Button className="h-12 px-8 bg-[#ed7f18] hover:bg-[#ff8f28] text-white font-bold rounded-xl shadow-[0_10px_30px_rgba(237,127,24,0.3)] transition-all">
                {newsletter.button}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
