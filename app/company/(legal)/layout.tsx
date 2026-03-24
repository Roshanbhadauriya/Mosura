"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_HERO, COMPANY_TABS, COMPANY_CTA } from "@/constants/company";

export default function CompanyLegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#ed7f18] via-[#e8720a] to-[#c45f08] pt-32 pb-16">
        {/* Decorative geometric shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 opacity-15">
            <svg width="160" height="300" viewBox="0 0 160 300" fill="none">
              <path
                d="M0 150L80 0L160 150L80 300Z"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M20 150L80 30L140 150L80 270Z"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="absolute -right-8 top-1/3 opacity-10">
            <svg width="120" height="240" viewBox="0 0 120 240" fill="none">
              <path
                d="M0 120L60 0L120 120L60 240Z"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="absolute left-1/4 top-8 h-3 w-3 rounded-full bg-white/30" />
          <div className="absolute right-1/3 bottom-12 h-2 w-2 rounded-full bg-white/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {COMPANY_HERO.title}{" "}
                <span className="ml-2 inline-block h-3 w-3 rounded-full bg-black/40" />
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-white/80">
                {COMPANY_HERO.description}
              </p>
            </motion.div>

            {/* Decorative illustration area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative h-56 w-72">
                <div className="absolute left-8 top-4 h-40 w-28 rotate-[-5deg] rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm" />
                <div className="absolute left-20 top-0 h-44 w-32 rotate-3 rounded-lg border border-white/25 bg-white/15 backdrop-blur-sm">
                  <div className="space-y-2 p-4">
                    <div className="h-2 w-16 rounded bg-white/30" />
                    <div className="h-1.5 w-20 rounded bg-white/20" />
                    <div className="h-1.5 w-14 rounded bg-white/20" />
                    <div className="mt-4 h-1.5 w-18 rounded bg-white/15" />
                    <div className="h-1.5 w-12 rounded bg-white/15" />
                  </div>
                </div>
                <div className="absolute right-4 top-8 h-36 w-24 rotate-[8deg] rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm" />
                <div className="absolute bottom-2 right-8 rounded-md border border-white/30 bg-white/20 px-3 py-1.5 text-xs font-bold tracking-wider text-white backdrop-blur-sm">
                  Standards
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Banner Image Strip */}
      <div className="relative h-40 w-full overflow-hidden bg-linear-to-b from-slate-900 to-black">
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(237,127,24,0.05)_1px,transparent_1px),linear-gradient(rgba(237,127,24,0.05)_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center gap-12 py-6">
            {COMPANY_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = pathname === tab.href;
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`group flex flex-col items-center gap-2 transition-colors ${
                    isActive
                      ? "text-[#ed7f18]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 transition-colors ${
                      isActive
                        ? "text-[#ed7f18]"
                        : "text-slate-500 group-hover:text-white"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium ${
                      isActive ? "text-[#ed7f18]" : ""
                    }`}
                  >
                    {tab.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="company-tab-indicator"
                      className="h-0.5 w-full rounded-full bg-[#ed7f18]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Page Content */}
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {children}
      </div>

      {/* CTA Section — matches FooterCTA pattern */}
      <section className="relative w-full py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(237,127,24,0.1)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-none"
          >
            {COMPANY_CTA.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto"
          >
            {COMPANY_CTA.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              asChild
              className="px-10 py-5 rounded-2xl bg-[#ed7f18] text-white font-bold text-lg shadow-[0_20px_50px_rgba(237,127,24,0.3)] hover:shadow-[0_25px_60px_rgba(237,127,24,0.5)] hover:bg-[#ed7f18]/90 transition-all hover:-translate-y-1"
            >
              <Link href={COMPANY_CTA.buttonHref}>
                {COMPANY_CTA.buttonLabel}{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
