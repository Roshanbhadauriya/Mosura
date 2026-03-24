"use client";
import { useState } from "react";
import Link from "next/link";
import { HeaderLogo } from "@/components/header/HeaderLogo";
import { HeaderNav } from "@/components/header/HeaderNav";
import { HeaderPanel } from "@/components/header/HeaderPanel";
import { HeaderMenuId, HeaderMenuWithPanel } from "@/constants/header";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<HeaderMenuId>(null);

  const handleToggle = (id: HeaderMenuWithPanel) => {
    setOpenMenu((current) => (current === id ? null : id));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black backdrop-blur-xl w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <HeaderLogo onClick={() => setOpenMenu(null)} />
        <HeaderNav openMenu={openMenu} onToggle={handleToggle} />
        <div className="flex items-center gap-3">
          <Link
            href="/pricing"
            onClick={() => setOpenMenu(null)}
            className="hidden items-center justify-center rounded-xl border border-white/25 bg-transparent px-4 py-1.5 text-xs font-medium text-slate-100 transition hover:border-white/60 hover:bg-white/5 md:inline-flex cursor-pointer"
          >
            Get Pricing
          </Link>
          <button
            type="button"
            onClick={() => setOpenMenu(null)}
            className="inline-flex items-center justify-center rounded-xl bg-(--primary-color) px-4 py-1.5 text-xs font-semibold text-white shadow-[0_16px_45px_rgba(237,127,24,0.8)] transition hover:brightness-110 cursor-pointer"
          >
            Get a Demo
          </button>
        </div>
      </div>
      <HeaderPanel activeMenu={openMenu} onClose={() => setOpenMenu(null)} />
    </header>
  );
};

export { Header };
