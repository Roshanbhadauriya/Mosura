"use client";

import { ReactNode, useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import { PANEL_CONTENT } from "@/constants/header";

const navItems = [
  { label: "Overview", href: "/products/mosura" },
  { label: "Features", href: "/products/mosura/features", hasDropdown: true },
  { label: "Documentation", href: "/products/mosura/docs" },
  { label: "Plugin Hub", href: "/products/mosura/plugins" },
  { label: "Pricing", href: "/products/mosura/pricing" },
];

// Get feature items grouped by category
const featureGroups = PANEL_CONTENT.features.map((section) => ({
  category: section.title,
  items: section.items.map((item) => ({
    label: item.label,
    href: item.href,
  })),
}));

export default function MosuraLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
          setDropdownOpen(false);
        }
      }
    }
  });

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        {/* Floating Sub-navigation — BOTTOM */}
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{
              y: visible ? 0 : 100,
              opacity: visible ? 1 : 0,
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-6 inset-x-0 mx-auto z-[5000] flex justify-center pointer-events-none"
          >
            <nav className="pointer-events-auto relative flex items-center gap-0.5 rounded-full border border-white/[0.08] bg-black/70 px-1.5 py-1.5 shadow-[0_8px_40px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur-2xl">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.label === "Features" &&
                    pathname.includes("/features"));

                if (item.hasDropdown) {
                  return (
                    <div key={item.label} className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className={cn(
                          "relative flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200 cursor-pointer",
                          isActive
                            ? "text-white"
                            : "text-slate-400 hover:text-white"
                        )}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeMosuraNav"
                            className="absolute inset-0 rounded-full bg-white/[0.08] ring-1 ring-white/[0.05]"
                            transition={{
                              duration: 0.35,
                              type: "spring",
                              bounce: 0.15,
                            }}
                            style={{ zIndex: -1 }}
                          />
                        )}
                        <span>{item.label}</span>
                        <svg
                          className={cn(
                            "h-3 w-3 opacity-40 transition-transform duration-200",
                            dropdownOpen && "rotate-180"
                          )}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Features Dropdown — opens upward */}
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.95 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[280px] rounded-2xl border border-white/[0.08] bg-black/90 backdrop-blur-2xl shadow-[0_-12px_50px_rgba(0,0,0,0.5)] overflow-hidden"
                          >
                            <div className="px-2 py-2">
                              {featureGroups.flatMap(g => g.items).map((feature) => {
                                const isFeatureActive = pathname === feature.href;
                                return (
                                  <Link
                                    key={feature.label}
                                    href={feature.href}
                                    onClick={() => setDropdownOpen(false)}
                                    className={cn(
                                      "group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-150",
                                      isFeatureActive
                                        ? "bg-white/[0.06]"
                                        : "hover:bg-white/[0.04]"
                                    )}
                                  >
                                    <div
                                      className={cn(
                                        "h-7 w-7 rounded-lg flex items-center justify-center shrink-0 transition-all",
                                        isFeatureActive
                                          ? "bg-(--primary-color)/20"
                                          : "bg-white/[0.04] group-hover:bg-(--primary-color)/10"
                                      )}
                                    >
                                      <div
                                        className={cn(
                                          "h-2 w-2 rounded-full transition-all",
                                          isFeatureActive
                                            ? "bg-(--primary-color) shadow-[0_0_8px_rgba(237,127,24,0.6)]"
                                            : "bg-slate-500 group-hover:bg-(--primary-color) group-hover:shadow-[0_0_6px_rgba(237,127,24,0.4)]"
                                        )}
                                      />
                                    </div>
                                    <span
                                      className={cn(
                                        "text-[13px] font-medium transition-colors",
                                        isFeatureActive
                                          ? "text-white"
                                          : "text-slate-400 group-hover:text-white"
                                      )}
                                    >
                                      {feature.label}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "relative flex items-center gap-1 rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200",
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeMosuraNav"
                        className="absolute inset-0 rounded-full bg-white/[0.08] ring-1 ring-white/[0.05]"
                        transition={{
                          duration: 0.35,
                          type: "spring",
                          bounce: 0.15,
                        }}
                        style={{ zIndex: -1 }}
                      />
                    )}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        </AnimatePresence>

        {/* Page content */}
        <div className="pb-24">
          {children}
        </div>
      </main>
    </div>
  );
}
