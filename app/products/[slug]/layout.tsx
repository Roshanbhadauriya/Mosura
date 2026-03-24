"use client";

import { Header } from "@/sections/Header";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

import { use, ReactNode } from "react";

export default function ProductLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const pathname = usePathname();
  const { slug } = use(params);

  const navItems = [
    { label: "Overview", href: `/products/${slug}` },
    { label: "Features", href: `/products/${slug}/features`, hasDropdown: true },
    { label: "Documentation", href: `/products/${slug}/docs` },
    { label: "Plugin Hub", href: `/products/${slug}/plugins` },
    { label: "Pricing", href: `/products/${slug}/pricing` },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <main >
        {/* Sub-navigation */}
        <div className="border-b border-white/5 bg-black/80 backdrop-blur-md sticky top-[64px] z-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-center gap-8 py-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.label === "Features" && pathname.includes("/features"));
                
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="relative text-sm font-medium transition-colors hover:text-white"
                  >
                    <span className={`${isActive ? "text-white" : "text-slate-400"} flex items-center`}>
                      {item.label}
                      {item.hasDropdown && (
                        <svg className="ml-1 inline-h-3 w-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeSubNav"
                        className="absolute -bottom-[17px] left-0 h-[2px] w-full bg-linear-to-r from-blue-400 to-cyan-400"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </div>
      </main>
    </div>
  );
}
