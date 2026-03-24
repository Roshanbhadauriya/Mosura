import Image from "next/image";
import dashboardImage from "@/assets/image.png";
import mosuraLogo from "@/assets/Mosura12.png";
import { MosuraTimeline } from "@/sections/MosuraTimeline";

const whyItems = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Blazing fast performance",
    description:
      "Sub-millisecond latency with our ultra-lightweight gateway engine. Process millions of API calls without breaking a sweat.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Enterprise-grade security",
    description:
      "Zero-trust architecture with end-to-end encryption, mTLS, OAuth 2.0, and RBAC — built into every layer. No compromises.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    title: "Unified control plane",
    description:
      "One dashboard to manage APIs, events, and AI agents across all environments. Full visibility at a single glance.",
  },
];

const featureHighlights = [
  {
    badge: "API Management",
    title: "Design, publish, and manage APIs at any scale",
    description:
      "A full lifecycle API management suite — from design to deprecation. Visual API designer, versioning, rate limiting, and analytics all in one place.",
    imagePosition: "right" as const,
  },
  {
    badge: "AI Gateway",
    title: "Secure and orchestrate your AI agents",
    description:
      "Route, observe, and control AI model traffic. Built-in prompt guardrails, token metering, cost tracking, and model fallback for the agentic era.",
    imagePosition: "left" as const,
  },
  {
    badge: "Event Gateway",
    title: "Real-time event streaming, simplified",
    description:
      "Publish and subscribe to events across your entire ecosystem. Support for Kafka, MQTT, WebSocket, and SSE with schema validation and replay.",
    imagePosition: "right" as const,
  },
  {
    badge: "Micro Gateway",
    title: "Ultra-lightweight, high-performance gateway",
    description:
      "Deploy a distributed micro-gateway for edge computing and microservices. Sub-millisecond latency, minimal footprint, and horizontal scalability optimized for cloud-native environments.",
    imagePosition: "left" as const,
  },
];

const stats = [
  { value: "<1ms", label: "Avg. latency" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "10M+", label: "API calls / sec" },
  { value: "50+", label: "Integrations" },
];

export default function MosuraPage() {
  return (
    <div
      className="relative flex flex-col items-center bg-black"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
      `}</style>

      {/* ─── HERO ─── */}
      <section className="relative flex flex-col items-center justify-start px-6 pt-20 pb-10 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="relative z-20 max-w-4xl text-center flex flex-col items-center">
          <div className="mb-2 w-full max-w-[400px] md:max-w-[600px] animate-in fade-in zoom-in duration-700">
            <Image
              src={mosuraLogo}
              alt="Mosura Logo"
              className="w-full h-auto drop-shadow-[0_0_15px_rgba(237,127,24,0.3)]"
              priority
            />
          </div>
          <p className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed mb-6">
            The Intelligent Guardian
          </p>

          <div className="flex items-center gap-4 mb-16">
            <button className="h-12 px-8 text-base font-medium rounded-lg bg-linear-to-b from-white via-white/95 to-white/60 text-black hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Get started
            </button>
            <button className="h-12 px-8 text-base font-medium rounded-lg border border-white/15 text-slate-300 hover:border-white/30 hover:text-white hover:bg-white/5 transition-all">
              Watch demo
            </button>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative w-full max-w-5xl group pb-10">
          <div
            className="absolute left-1/2 w-[95%] pointer-events-none z-0 -top-[23%] -translate-x-1/2"
            aria-hidden="true"
          >
            <img
              src="https://i.postimg.cc/Ss6yShGy/glows.png"
              alt=""
              className="w-full h-auto opacity-60 group-hover:opacity-100 transition-opacity duration-1000"
              loading="eager"
            />
          </div>
          <div className="relative z-10 rounded-[1.5rem] border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden shadow-2xl">
            <Image
              src={dashboardImage}
              alt="Mosura Dashboard Preview"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* ─── FEATURE TIMELINE ─── */}
      <MosuraTimeline />

      {/* ─── WHY MOSURA ─── */}
      <section className="w-full px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold  tracking-[0.2em] text-(--primary-color) mb-3">
              Why Mosura
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Built for the agentic era
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              A featherweight, lightning-fast platform that unifies API management, event streaming, and AI gateway — all under one intelligent guardian.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whyItems.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-(--primary-color)/10 text-(--primary-color) transition-all group-hover:bg-(--primary-color)/15 group-hover:shadow-[0_0_20px_rgba(237,127,24,0.15)]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS BANNER ─── */}
      <section className="w-full px-6 py-16">
        <div className="max-w-5xl mx-auto rounded-2xl border border-white/[0.06] bg-linear-to-r from-white/[0.02] via-white/[0.04] to-white/[0.02] p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold bg-linear-to-br from-white to-slate-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURE HIGHLIGHTS (text + image alternating) ─── */}
      <section className="w-full px-6 py-24">
        <div className="max-w-5xl mx-auto space-y-32">
          {featureHighlights.map((feature, idx) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center gap-12 md:gap-16 ${
                feature.imagePosition === "left"
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              }`}
            >
              {/* Text Side */}
              <div className="flex-1 space-y-5">
                <span className="inline-flex rounded-full bg-(--primary-color)/10 px-4 py-1.5 text-xs font-semibold text-(--primary-color) border border-(--primary-color)/20">
                  {feature.badge}
                </span>
                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-base leading-relaxed">
                  {feature.description}
                </p>
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-(--primary-color) hover:text-white transition-colors group/btn">
                  Learn more
                  <svg
                    className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Image Placeholder Side */}
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden aspect-[4/3]">
                  {/* Subtle gradient glow */}
                  <div className="absolute inset-0 bg-linear-to-br from-(--primary-color)/5 via-transparent to-blue-500/5" />
                  {/* Placeholder wireframe illustration */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                    <div className="h-16 w-16 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                      <div className="h-8 w-8 rounded-lg bg-(--primary-color)/20 flex items-center justify-center">
                        <div className="h-3 w-3 rounded-full bg-(--primary-color) shadow-[0_0_10px_rgba(237,127,24,0.5)]" />
                      </div>
                    </div>
                    <div className="space-y-2 w-full max-w-[200px]">
                      <div className="h-2 rounded-full bg-white/[0.06] w-full" />
                      <div className="h-2 rounded-full bg-white/[0.04] w-3/4 mx-auto" />
                      <div className="h-2 rounded-full bg-white/[0.03] w-1/2 mx-auto" />
                    </div>
                    <p className="text-[11px] text-slate-600 font-medium  tracking-widest mt-2">
                      Preview {idx + 1}
                    </p>
                  </div>
                  {/* Subtle grid pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="w-full px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-[0.2em] text-(--primary-color) mb-3">
              How it works
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Three steps to production
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Connect",
                description:
                  "Import your existing APIs, services, or AI models. Auto-discover endpoints from OpenAPI specs, gRPC, or GraphQL schemas.",
              },
              {
                step: "02",
                title: "Configure",
                description:
                  "Apply policies, rate limits, and security rules with a visual editor. Set up routing, transformations, and caching in minutes.",
              },
              {
                step: "03",
                title: "Deploy",
                description:
                  "Push to production with zero downtime. Monitor performance in real-time with built-in observability and alerting.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 group hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
              >
                <span className="text-5xl font-black text-white/[0.04] absolute top-6 right-6 group-hover:text-(--primary-color)/10 transition-colors duration-300">
                  {item.step}
                </span>
                <div className="mb-4 h-10 w-10 rounded-xl bg-(--primary-color)/10 flex items-center justify-center text-(--primary-color) text-sm font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="w-full px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative rounded-3xl border border-white/[0.06] bg-linear-to-br from-white/[0.03] via-transparent to-(--primary-color)/[0.03] p-12 md:p-20 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-(--primary-color)/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Ready to unleash the guardian?
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
                Join thousands of enterprises running on Mosura. Start for free, scale without limits.
              </p>
              <div className="flex items-center justify-center gap-4 pt-4">
                <button className="h-12 px-8 text-base font-semibold rounded-lg bg-(--primary-color) text-white hover:brightness-110 transition-all shadow-[0_0_30px_rgba(237,127,24,0.3)]">
                  Start free trial
                </button>
                <button className="h-12 px-8 text-base font-medium rounded-lg border border-white/15 text-slate-300 hover:border-white/30 hover:text-white transition-all">
                  Contact sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
