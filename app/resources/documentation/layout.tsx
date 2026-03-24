"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOCUMENTATION_DATA } from "@/constants/documentation";
import { ResourcesHeader } from "@/components/resources-header";

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showDocs, setShowDocs] = useState(false);

  // Automatically show documentation if we're on a sub-route
  useEffect(() => {
    if (pathname !== "/resources/documentation") {
      setShowDocs(true);
    }
  }, [pathname]);

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 flex flex-col">
      {/* Documentation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-b border-white/10 pb-12 mb-8">
        <ResourcesHeader 
          title="Documentation"
          subtitle="Explore guides and API references"
          badgeText="Mosura API Gateway"
          badgeHref="/pricing"
          introHeading="Welcome to Mosura Docs"
          introText="Learn how to integrate, configure, and scale your API and AI initiatives with our comprehensive guides, SDKs, and step-by-step tutorials."
          useCasesTitle="Quick Start Categories:"
          useCases={[
            "Set up routing and load balancing",
            "Configure Semantic Caching for LLMs",
            "Deploy Custom WAF Rules natively"
          ]}
          ctaText="View Documentation"
          ctaHref="#"
          onCtaClick={() => setShowDocs(true)}
        />
      </div>

      {showDocs && (
        <div className="flex flex-col md:flex-row flex-1 max-w-7xl mx-auto w-full animate-in fade-in duration-500">
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-64 lg:w-72 shrink-0 border-r border-white/10 px-6 py-4 md:min-h-[calc(100vh-6rem)]">
          <nav className="sticky top-24 space-y-8">
            {DOCUMENTATION_DATA.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-sm tracking-tight text-slate-500 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/resources/documentation/${item.slug}`}
                        className="block text-slate-300 hover:text-white transition-colors text-sm"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 px-6 py-8 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </main>
        </div>
      )}

    </div>
  );
}
