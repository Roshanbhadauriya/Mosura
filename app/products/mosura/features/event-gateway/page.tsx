"use client";

import { motion, type Variants } from "motion/react";
import { GlowyWavesHero } from "@/components/uitripled/glowy-waves-hero-shadcnui";
import { FEATURES_CONTENT } from "@/constants/features";
import {
  RefreshCcw,
  Waypoints,
  Network,
  ShieldCheck,
  BarChart3,
  BrainCircuit,
  Code2,
  Check,
  ArrowDown,
  Building2,
} from "lucide-react";

const content = FEATURES_CONTENT["event-gateway"];

const ICONS: Record<string, React.ElementType> = {
  RefreshCcw,
  Waypoints,
  Network,
  ShieldCheck,
  BarChart3,
  BrainCircuit,
  Code2,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function EventGatewayPage() {
  return (
    <div className="relative flex flex-col items-center bg-black">
      <GlowyWavesHero
        badge={content.badge}
        title={content.title}
        description={content.description}
        highlightPills={content.highlightPills}
        stats={content.stats}
      />

      {/* ─── OVERVIEW ─── */}
      <section className="w-full px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-sm font-semiboldtracking-[0.2em] text-[#ed7f18] mb-3">Overview</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              What is Mosura?
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">{content.overview.intro}</p>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-5">
            {content.overview.capabilities.map((cap, idx) => (
              <motion.div key={idx} variants={itemVariants} className="group flex items-start gap-4 p-6 rounded-2xl border border-white/6 bg-white/2 hover:border-white/10 hover:bg-white/4 transition-all duration-300">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ed7f18]/10 text-[#ed7f18] group-hover:scale-110 transition-transform"><Check className="h-4 w-4" /></div>
                <p className="text-slate-300 leading-relaxed">{cap}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── KEY FEATURES ─── */}
      <section className="w-full px-6 py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-sm font-semiboldtracking-[0.2em] text-[#ed7f18] mb-3">Capabilities</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Key Features</h2>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
            {content.keyFeatures.map((feature) => {
              const Icon = ICONS[feature.icon] || RefreshCcw;
              return (
                <motion.div key={feature.title} variants={itemVariants} className="group relative rounded-2xl border border-white/6 bg-white/2 p-8 hover:border-white/10 hover:bg-white/4 transition-all duration-300">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#ed7f18]/10 text-[#ed7f18] transition-all group-hover:bg-[#ed7f18]/15 group-hover:shadow-[0_0_20px_rgba(237,127,24,0.15)]"><Icon className="h-6 w-6" /></div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ed7f18] transition-colors">{feature.title}</h3>
                  <ul className="space-y-2.5">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ed7f18]/60" />{item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── ARCHITECTURE ─── */}
      <section className="w-full px-6 py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-sm font-semiboldtracking-[0.2em] text-[#ed7f18] mb-3">Architecture</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{content.howItWorks.title}</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-16">
            <div className="flex flex-col items-center gap-4">
              <div className="w-full max-w-md px-6 py-5 rounded-2xl border border-[#ed7f18]/30 bg-[#ed7f18]/5 text-center">
                <p className="text-[#ed7f18] font-bold text-smtracking-wider">Mosura Control Plane</p>
                <p className="text-xs text-slate-500 mt-1">Policy · Security · Observability · Event Routing</p>
              </div>
              <ArrowDown className="h-5 w-5 text-slate-600" />
              <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
                {["Region A", "BU / Team", "Partner C"].map((label) => (
                  <div key={label} className="px-4 py-4 rounded-xl border border-white/10 bg-white/3 text-center">
                    <p className="text-white text-xs font-bold">Event Gateway</p>
                    <p className="text-[10px] text-slate-500 mt-1">({label})</p>
                  </div>
                ))}
              </div>
              <ArrowDown className="h-5 w-5 text-slate-600" />
              <p className="text-xs text-slate-500 italic">Events → Routed, Transformed, Delivered to Consumers</p>
            </div>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.howItWorks.steps.map((step) => (
              <motion.div key={step.step} variants={itemVariants} className="relative rounded-2xl border border-white/6 bg-white/2 p-8 group hover:border-white/10 hover:bg-white/4 transition-all duration-300">
                <span className="text-5xl font-black text-white/4 absolute top-6 right-6 group-hover:text-[#ed7f18]/10 transition-colors duration-300">{step.step}</span>
                <div className="mb-4 h-10 w-10 rounded-xl bg-[#ed7f18]/10 flex items-center justify-center text-[#ed7f18] text-sm font-bold">{step.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── WHY CHOOSE ─── */}
      <section className="w-full px-6 py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{content.whyChoose.title}</h2>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.whyChoose.items.map((item) => (
              <motion.div key={item.label} variants={itemVariants} className="group flex items-start gap-4 p-6 rounded-2xl border border-white/6 bg-white/2 hover:border-[#ed7f18]/20 hover:bg-white/4 transition-all duration-300">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ed7f18]/10 text-[#ed7f18] group-hover:bg-[#ed7f18]/20 transition-colors"><Check className="h-4 w-4" /></div>
                <div><h4 className="font-bold text-white mb-1">{item.label}</h4><p className="text-sm text-slate-500 leading-relaxed">{item.description}</p></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className="w-full px-6 py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-sm font-semiboldtracking-[0.2em] text-[#ed7f18] mb-3">Use Cases</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{content.industries.title}</h2>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
            {content.industries.items.map((industry) => (
              <motion.div key={industry.name} variants={itemVariants} className="group text-center p-6 rounded-2xl border border-white/6 bg-white/2 hover:border-[#ed7f18]/20 hover:bg-white/4 transition-all duration-300">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ed7f18]/10 text-[#ed7f18] group-hover:scale-110 transition-transform"><Building2 className="h-5 w-5" /></div>
                <h4 className="font-bold text-white mb-2 group-hover:text-[#ed7f18] transition-colors">{industry.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{industry.outcome}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="w-full px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-3xl border border-white/6 bg-linear-to-br from-white/3 via-transparent to-[#ed7f18]/3 p-12 md:p-20 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#ed7f18]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{content.footerCta.headline}</h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">{content.footerCta.subtext}</p>
              <div className="flex items-center justify-center gap-4 pt-4">
                <button className="h-12 px-8 text-base font-semibold rounded-lg bg-[#ed7f18] text-white hover:brightness-110 transition-all shadow-[0_0_30px_rgba(237,127,24,0.3)]">{content.footerCta.buttons.primary}</button>
                <button className="h-12 px-8 text-base font-medium rounded-lg border border-white/15 text-slate-300 hover:border-white/30 hover:text-white transition-all">{content.footerCta.buttons.secondary}</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
