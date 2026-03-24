"use client";

import { useState } from "react";
import { Blog7 } from "@/components/blog7";
import { Blog8 } from "@/components/blog8";
import { BLOG_POSTS } from "@/constants/blog";
import { ResourcesHeader } from "@/components/resources-header";

const ITEMS_PER_PAGE = 3;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  
  // The first two posts go to Blog8 (Featured)
  const featuredPosts = BLOG_POSTS.slice(0, 2);
  
  // The rest go to Blog7 (Latest Updates)
  const remainingPosts = BLOG_POSTS.slice(2);
  
  const totalPages = Math.ceil(remainingPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPosts = remainingPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">
        
        {/* Blog Header */}
        <ResourcesHeader 
          title="Mosura"
          subtitle="The unified API and AI Gateway platform"
          badgeText="Mosura Platform Documentation"
          badgeHref="/resources/documentation"
          introHeading="Introducing Mosura"
          introText="Mosura unifies and manages APIs, LLMs, events, and microservices with a single, centralized management plane, giving you consistent visibility and control across your entire API ecosystem."
          useCasesTitle="Mosura can help you with the following use cases:"
          useCases={[
            "Easily manage API and LLM Gateways",
            "Catalog and publish API products",
            "Achieve federated AI management with multi-model fallback support"
          ]}
          ctaText="Start a free trial"
          ctaHref="/pricing"
        />

        {/* Featured Posts */}
        <Blog8 
          heading="Featured Insights" 
          description="In-depth technical deep dives and platform announcements from the Zeroteq team."
          posts={featuredPosts}
        />

        {/* Latest Updates
        <div className="space-y-8">
          <Blog7 
            tagline="Latest Updates"
            heading="More from the Blog"
            description="Stay updated with our quick tips, tutorials, and community news."
            buttonText="See all posts"
            buttonUrl="#"
            posts={paginatedPosts}
          />
          
          
        </div> */}
        {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8 pb-12">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm font-medium hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      currentPage === idx + 1
                        ? "bg-[#ed7f18] text-white"
                        : "text-slate-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm font-medium hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          )} 
      </div>
    </div>
  );
}
