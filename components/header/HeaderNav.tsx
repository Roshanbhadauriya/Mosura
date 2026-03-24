import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { NAV_ITEMS, HeaderMenuId, HeaderMenuWithPanel } from "@/constants/header";

type HeaderNavProps = {
  openMenu: HeaderMenuId;
  onToggle: (id: HeaderMenuWithPanel) => void;
};

const HeaderNav = ({ openMenu, onToggle }: HeaderNavProps) => {
  return (
    <nav className="hidden items-center gap-4 text-sm text-slate-100 md:flex">
      {NAV_ITEMS.map((item) => {
        const isOpen = openMenu === item.id;
        const baseClasses =
          "inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-[16px] font-semibold transition-colors cursor-pointer";
        const interactiveClasses = item.hasPanel
          ? isOpen
            ? "bg-white/5 text-white"
            : "text-slate-200 hover:text-white"
          : "text-slate-200 hover:text-white";

        return item.hasPanel ? (
          <button
            key={item.id}
            type="button"
            onClick={() => onToggle(item.id as HeaderMenuWithPanel)}
            className={`${baseClasses} ${interactiveClasses}`}
          >
            <span>{item.label}</span>
            <ChevronDown
              className={`h-3 w-3 transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        ) : (
          <Link
            key={item.id}
            href="#"
            onClick={() => onToggle(item.id as HeaderMenuWithPanel)}
            className={`${baseClasses} ${interactiveClasses}`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export { HeaderNav }; 
