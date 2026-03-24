import Link from "next/link";
import { ArrowRight, BarChart3, Globe, Layout, Settings, Shield, Zap, Search, Bell, User } from "lucide-react";

export interface ResourcesHeaderProps {
  title: string;
  subtitle: string;
  badgeText: string;
  badgeHref: string;
  introHeading: string;
  introText: string;
  useCasesTitle: string;
  useCases: string[];
  ctaText: string;
  ctaHref: string;
  onCtaClick?: () => void;
}

export function ResourcesHeader({
  title,
  subtitle,
  badgeText,
  badgeHref,
  introHeading,
  introText,
  useCasesTitle,
  useCases,
  ctaText,
  ctaHref,
  onCtaClick,
}: ResourcesHeaderProps) {
  return (
    <div className="w-full text-white mb-20">
      {/* Top Title Section */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>
        <p className="text-xl text-slate-300 mb-6">{subtitle}</p>
        <Link 
          href={badgeHref}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
        >
          <Zap className="w-3 h-3 text-(--primary-color)" />
          {badgeText}
        </Link>
      </div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
        {/* Left Column: Intro & Use Cases */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">{introHeading}</h2>
          <p className="text-slate-300 leading-relaxed text-[15px]">
            {introText}
          </p>
          
          <div className="pt-2 pb-4">
            <p className="text-slate-200 font-medium mb-4">{useCasesTitle}</p>
            <ul className="space-y-3">
              {useCases.map((useCase, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0" />
                  <span className="text-slate-300 text-[15px] leading-snug">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>

          {onCtaClick ? (
            <button
              onClick={onCtaClick}
              className="inline-flex items-center justify-center rounded-xl bg-(--primary-color) px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_45px_rgba(237,127,24,0.6)] transition hover:brightness-110 active:scale-95 cursor-pointer"
            >
              {ctaText} <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          ) : (
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-xl bg-(--primary-color) px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_45px_rgba(237,127,24,0.6)] transition hover:brightness-110 active:scale-95"
            >
              {ctaText} <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Right Column: Dashboard Mockup */}
        <div className="relative rounded-xl border border-white/10 bg-[#0B1120] overflow-hidden shadow-2xl flex flex-col h-[400px]">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0F172A]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/40 border border-white/5 mx-4 w-48 lg:w-64">
                <Search className="w-3 h-3 text-slate-400" />
                <span className="text-[10px] text-slate-500">Quick search...</span>
              </div>
              <Bell className="w-4 h-4 text-slate-400" />
              <div className="w-6 h-6 rounded-full bg-(--primary-color) text-black flex items-center justify-center text-[10px] font-bold">
                M
              </div>
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div className="w-48 border-r border-white/5 bg-[#0F172A]/50 p-3 hidden sm:flex flex-col gap-1">
              <div className="px-3 py-2 text-[10px] font-bold text-slate-500 tracking-tight mb-1">Overview</div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-(--primary-color)/10 text-(--primary-color) text-xs font-medium cursor-default">
                <Layout className="w-3.5 h-3.5" /> Dashboard
              </div>
              <div className="px-3 py-2 text-[10px] font-bold text-slate-500 tracking-tight mt-4 border-t border-white/5 pt-4 mb-1">Traffic</div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-slate-400 hover:text-slate-200 text-xs cursor-default">
                <Globe className="w-3.5 h-3.5" /> Edge Routing
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-slate-400 hover:text-slate-200 text-xs cursor-default">
                <Zap className="w-3.5 h-3.5" /> AI Gateway
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-slate-400 hover:text-slate-200 text-xs cursor-default">
                <BarChart3 className="w-3.5 h-3.5" /> Analytics
              </div>
              
              <div className="mt-auto">
                <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-slate-400 hover:text-slate-200 text-xs cursor-default">
                  <Settings className="w-3.5 h-3.5" /> Settings
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-[#F8FAFC] p-6 text-slate-800 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900">Overview</h3>
                <span className="text-xs text-slate-500 font-medium">Last 7 Days</span>
              </div>
              
               {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <p className="text-[10px] font-bold text-slate-500 tracking-tight flex items-center gap-1.5 mb-1"><Globe className="w-3 h-3 text-(--primary-color)" /> Requests</p>
                  <p className="text-2xl font-bold text-slate-900">12.4M</p>
                  <p className="text-xs text-green-600 font-medium mt-1 flex items-center gap-1">↑ 14% <span className="text-slate-400 font-normal">vs previous 7 days</span></p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <p className="text-[10px] font-bold text-slate-500 tracking-tight flex items-center gap-1.5 mb-1"><Shield className="w-3 h-3 text-red-500" /> Error Rate</p>
                  <p className="text-2xl font-bold text-slate-900">0.02%</p>
                  <p className="text-xs text-green-600 font-medium mt-1 flex items-center gap-1">↓ 0.01% <span className="text-slate-400 font-normal">vs previous 7 days</span></p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <p className="text-[10px] font-bold text-slate-500 tracking-tight flex items-center gap-1.5 mb-1"><Zap className="w-3 h-3 text-yellow-500" /> Avg Latency</p>
                  <p className="text-2xl font-bold text-slate-900">42ms</p>
                  <p className="text-xs text-green-600 font-medium mt-1 flex items-center gap-1">↓ 5ms <span className="text-slate-400 font-normal">vs previous 7 days</span></p>
                </div>
              </div>

              {/* Modules Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2"><Zap className="w-4 h-4 text-(--primary-color)" /> AI Gateway Manager</h4>
                  <p className="text-xs text-slate-500 mb-4">Monitor tokens and load balance LLMs.</p>
                  <div className="flex justify-between items-center text-xs font-medium text-slate-600 border-t border-slate-100 pt-3">
                    <span>Active Endpoints</span>
                    <span className="text-(--primary-color) font-bold bg-(--primary-color)/10 px-2 py-0.5 rounded-full">14</span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2"><Settings className="w-4 h-4 text-emerald-500" /> API Products</h4>
                  <p className="text-xs text-slate-500 mb-4">Catalog your APIs in a unified hub.</p>
                  <div className="flex justify-between items-center text-xs font-medium text-slate-600 border-t border-slate-100 pt-3">
                    <span>Published APIs</span>
                    <span className="text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full">28</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
