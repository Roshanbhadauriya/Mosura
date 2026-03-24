"use client";

import { useState } from "react";
import { 
  Search, 
  Plus, 
  ChevronRight, 
  Pin,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FORUM_POSTS, FORUM_CATEGORIES } from "@/constants/forum";

export default function ForumPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Discussions");

  const filteredPosts = FORUM_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchedCategory = selectedCategory === "All Discussions" || 
                           post.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase().replace(" & ", "-")));
    return matchesSearch && matchedCategory;
  });

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <Link 
              href="/resources/community" 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Community
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100">Community Forum</h1>
            <p className="text-slate-400 max-w-2xl text-lg font-medium opacity-80">
              The place to ask questions, share knowledge, and connect with other Mosura developers.
          </p>
          </div>
          <Button className="bg-(--primary-color) hover:brightness-110 text-white font-bold px-6 py-2.5 text-sm rounded-xl shadow-[0_12px_40px_rgba(237,127,24,0.45)] transition-all hover:scale-105 active:scale-95 cursor-pointer border border-white/10">
            <Plus className="w-4 h-4 mr-2" /> Post a Doubt
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Left Sidebar: Categories */}
          <div className="lg:col-span-1 border-r border-white/5 pr-8 hidden lg:block">
             <div className="space-y-6">
              <h3 className="text-[10px] font-bold tracking-tight text-slate-600 px-2 mb-4">Categories</h3>
              <div className="flex flex-col gap-1.5">
                {FORUM_CATEGORIES.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      selectedCategory === category 
                        ? "bg-(--primary-color)/12 text-(--primary-color) shadow-[inset_0_0_12px_rgba(237,127,24,0.1)] border border-(--primary-color)/20" 
                        : "text-slate-500 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {category}
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${selectedCategory === category ? "rotate-90 opacity-100" : "opacity-0"}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {/* Search Bar - Premium Glassmorphism */}
            <div className="relative group max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-(--primary-color) transition-colors" />
              <Input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search forum..."
                className="w-full bg-white/3 border-white/10 h-11 pl-11 text-xs focus-visible:ring-1 focus-visible:ring-(--primary-color)/50 rounded-xl transition-all placeholder:text-slate-600"
              />
            </div>

            {/* Forum Table Header */}
            <div className="grid grid-cols-12 px-8 py-5 border-b border-white/10 text-[10px] font-bold tracking-tight text-slate-500 bg-white/1 rounded-t-2xl">
              <div className="col-span-7">Topic</div>
              <div className="col-span-2 text-center">Replies</div>
              <div className="col-span-1 text-center">Views</div>
              <div className="col-span-2 text-right">Activity</div>
            </div>

            {/* Post List (Table Style) */}
            <div className="divide-y divide-white/5 border-b border-white/5">
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <Link 
                    key={post.id}
                    href={`/resources/community/forum/${post.id}`}
                    className="grid grid-cols-12 items-center px-8 py-10 transition-all duration-300 group hover:bg-white/3 relative overflow-hidden"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-y-0 left-0 w-[3px] bg-(--primary-color) scale-y-0 group-hover:scale-y-100 transition-transform origin-center duration-300 opacity-60" />
                    
                    {/* Topic Column */}
                    <div className="col-span-7 flex gap-6 pr-4 relative">
                      <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-slate-800 to-black border border-white/10 flex items-center justify-center text-xs font-bold text-slate-400 shrink-0 group-hover:border-(--primary-color)/40 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(237,127,24,0.1)]">
                        {post.author.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="space-y-2">
                        <h2 className="text-[19px] font-bold text-slate-200 group-hover:text-white transition-colors flex items-center gap-2 leading-tight">
                          {post.isPinned && <Pin className="w-4 h-4 fill-(--primary-color) text-(--primary-color)" />}
                          {post.title}
                        </h2>
                        <p className="text-slate-500 text-[13px] line-clamp-1 mb-4 font-medium max-w-xl group-hover:text-slate-400 transition-colors">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="flex items-center gap-2 mr-3 px-2.5 py-1 bg-white/5 rounded-lg border border-white/10 group-hover:border-(--primary-color)/20 transition-colors">
                             <div className={`w-2 h-2 rounded-full ${post.tags[0].includes('Security') ? 'bg-red-500' : post.tags[0].includes('AI') ? 'bg-yellow-500' : 'bg-green-500'} shadow-[0_0_10px_currentColor]`} />
                             <span className="text-[10px] font-bold text-slate-400 tracking-tight">{post.tags[0].replace('#', '').replace('-', ' ')}</span>
                          </span>
                          {post.tags.slice(1).map(tag => (
                            <span 
                              key={tag}
                              className="text-[11px] font-bold text-slate-600 group-hover:text-slate-400 transition-colors tracking-wide"
                            >
                              {tag.replace('#', '')}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Replies Column */}
                    <div className="col-span-2 text-center text-slate-300 font-bold text-[16px] group-hover:text-white transition-colors">
                      {post.replies}
                    </div>

                    {/* Views Column */}
                    <div className="col-span-1 text-center text-slate-500 text-sm font-semibold group-hover:text-slate-300 transition-colors">
                      {post.views}
                    </div>

                    {/* Activity Column */}
                    <div className="col-span-2 text-right text-slate-500 text-sm font-bold group-hover:text-slate-300 transition-colors">
                      {post.lastActive}
                    </div>
                  </Link>
                ) )
              ) : (
                <div className="py-24 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 border border-dashed border-white/20">
                    <Search className="w-8 h-8 text-slate-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-300 tracking-tight">No discussions found</h3>
                  <p className="text-slate-500 max-w-sm mx-auto font-medium">
                    We couldn't find any threads matching your search criteria.
                  </p>
                </div>
              )}
            </div>
            
            <div className="pt-12 text-center">
               <p className="text-slate-600 text-[10px] font-bold tracking-tight opacity-60">Showing {filteredPosts.length} of {FORUM_POSTS.length} topics</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
