import { PANEL_CONTENT } from "@/constants/header";
import { notFound } from "next/navigation";

export default async function FeaturePage({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  
  // Find the feature in our constants
  const allItems = Object.values(PANEL_CONTENT).flatMap(sections => 
    sections.flatMap(section => section.items)
  );
  
  const feature = allItems.find(item => item.href.includes(slug));
  
  if (!feature) {
    // If it's a known feature but not in the href format we expect, we still show it
    const featureTitle = slug
      .split("-")
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return (
      <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 text-center">
        <div className="space-y-6">
          <div className="inline-flex rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400 border border-blue-500/20">
            Feature Detail
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-7xl">
            {featureTitle}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Deep dive into how {featureTitle} empowers your API infrastructure.
          </p>
        </div>

        <div className="prose prose-invert max-w-3xl mx-auto">
          <p className="text-slate-300 text-lg">
            Mosura's {featureTitle} provides unparalleled control and visibility. Built for high-scale environments, it ensures your agentic workflows are optimized and secure.
          </p>
          
          <div className="mt-16 rounded-3xl border border-white/5 bg-linear-to-br from-white/5 to-transparent p-8 md:p-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Ready to see it in action?</h2>
              <p className="text-slate-400 text-lg">Join the thousands of enterprises scaling with Mosura.</p>
              <button className="mt-4 px-10 py-4 rounded-full bg-white text-black font-bold hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                Request a Technical Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 text-center">
      <div className="space-y-6">
        <div className="inline-flex rounded-full bg-(--primary-color)/10 px-4 py-1.5 text-xs font-semibold text-(--primary-color) border border-(--primary-color)/20">
          {feature.label}
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-7xl">
          {feature.label}
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          {feature.description}
        </p>
      </div>

      <div className="prose prose-invert max-w-3xl mx-auto">
        <p className="text-slate-300 text-lg">
          Mosura's {feature.label} provides unparalleled control and visibility. Built for high-scale environments, it ensures your workflows are optimized and secure.
        </p>
        
        <div className="mt-16 rounded-3xl border border-white/5 bg-linear-to-br from-white/5 to-transparent p-8 md:p-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Ready to see it in action?</h2>
            <p className="text-slate-400 text-lg">Join the thousands of enterprises scaling with Mosura.</p>
            <button className="mt-4 px-10 py-4 rounded-full bg-(--primary-color) text-white font-bold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(237,127,24,0.3)]">
              Request a Technical Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
