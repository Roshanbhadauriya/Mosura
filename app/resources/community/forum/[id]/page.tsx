"use client";

import { 
  ArrowLeft, 
  MessageSquare, 
  Eye, 
  Clock, 
  Share2, 
  ChevronRight,
  Shield,
  ThumbsUp,
  MoreVertical
} from "lucide-react";
import Link from "next/link";
import { use } from "react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FORUM_POSTS } from "@/constants/forum";

export default function ForumTopicDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const post = FORUM_POSTS.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <nav className="flex items-center gap-3 text-xs font-bold tracking-tight text-slate-600 mb-12">
          <Link href="/resources/community" className="hover:text-(--primary-color) transition-colors">Community</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/resources/community/forum" className="hover:text-(--primary-color) transition-colors">Forum</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-400 truncate max-w-[200px] md:max-w-md">{post.title}</span>
        </nav>

        {/* Topic Header Area */}
        <div className="space-y-8 mb-16">
          <Link 
            href="/resources/community/forum" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-xs font-bold tracking-tight group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" /> Back to discussions
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 pb-10 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-linear-to-br from-slate-700 to-black border border-white/10 flex items-center justify-center text-[10px] font-bold text-slate-300">
                {post.author.name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="font-bold text-slate-300">{post.author.name}</span>
            </div>
            <span className="text-slate-800">/</span>
            <span className="flex items-center gap-2 font-medium"><Clock className="w-4 h-4 opacity-70" /> {post.lastActive}</span>
            <span className="text-slate-800">/</span>
            <span className="flex items-center gap-2 font-medium"><Eye className="w-4 h-4 opacity-70" /> {post.views} views</span>
            <div className="ml-auto flex items-center gap-3">
               <button className="p-2.5 rounded-xl border border-white/5 hover:bg-white/5 text-slate-400 hover:text-white transition-all">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-16">
          
          {/* Original Post */}
          <article className="space-y-8">
            <div className="prose prose-invert prose-orange max-w-none text-slate-300 text-[19px] leading-relaxed font-medium opacity-90">
              {post.content}
            </div>
            
            <div className="flex flex-wrap gap-2 pt-4">
              {post.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-4 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-[10px] font-bold tracking-tight text-slate-500 hover:text-white hover:border-(--primary-color)/30 transition-all cursor-default"
                >
                  {tag.replace('#', '')}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-10 border-t border-white/5">
              <Button variant="ghost" className="text-slate-500 hover:text-white hover:bg-white/5 flex items-center gap-2 font-bold text-xs tracking-tight px-6 h-12 rounded-xl transition-all">
                <ThumbsUp className="w-4 h-4" /> Helpful
              </Button>
              <Button className="bg-(--primary-color) hover:brightness-110 text-white font-bold rounded-xl shadow-[0_16px_45px_rgba(237,127,24,0.4)] px-10 h-12 transition-all hover:scale-105 border border-white/10">
                Reply
              </Button>
            </div>
          </article>

          {/* Replies Section */}
          <div className="space-y-10 pt-16">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <h3 className="text-2xl font-bold flex items-center gap-4">
                <MessageSquare className="w-6 h-6 text-(--primary-color)" /> {post.replies} Replies
              </h3>
            </div>

            {post.repliesData && post.repliesData.map((reply, idx) => (
              <div key={idx} className="flex gap-4 md:gap-8 group">
                 <div className="hidden md:block shrink-0 pt-1">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-slate-800 to-black border border-white/10 flex items-center justify-center text-sm font-bold text-slate-400 group-hover:border-(--primary-color)/20 transition-colors">
                     {reply.author.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="flex-1 space-y-4 p-8 rounded-3xl bg-white/[0.02] border border-white/5 group-hover:border-white/10 transition-all duration-500 group-hover:bg-white/[0.03]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <span className="font-bold text-slate-100 text-[17px]">{reply.author.name}</span>
                       {reply.author.role === 'Maintainer' && (
                         <span className="px-2.5 py-1 rounded-lg bg-(--primary-color)/20 text-(--primary-color) text-[9px] font-bold tracking-tight flex items-center gap-1.5 border border-(--primary-color)/20">
                           <Shield className="w-3 h-3" /> Mosura Team
                         </span>
                       )}
                       <span className="text-slate-600 text-xs font-bold tracking-tight opacity-60">• {reply.timestamp}</span>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 p-2 rounded-xl hover:bg-white/5 text-slate-500 hover:text-white transition-all">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="prose prose-invert prose-orange max-w-none text-slate-400 text-[16px] leading-[1.6] group-hover:text-slate-300 transition-colors">
                     {reply.content}
                  </div>
                  <div className="flex items-center gap-6 pt-4">
                     <button className="text-[10px] font-bold tracking-tight text-slate-600 hover:text-(--primary-color) transition-colors">Like</button>
                     <button className="text-[10px] font-bold tracking-tight text-slate-600 hover:text-(--primary-color) transition-colors">Reply</button>
                  </div>
                </div>
              </div>
            ))}

            {post.replies === 0 && (
              <div className="py-20 text-center space-y-6 bg-white/[0.01] rounded-3xl border border-dashed border-white/5">
                <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mx-auto mb-4 border border-white/5 shadow-inner">
                  <MessageSquare className="w-10 h-10 text-slate-700" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-slate-200 tracking-tight">Be the first to reply</h4>
                  <p className="text-slate-500 max-w-xs mx-auto text-sm font-medium">
                    Help {post.author.name.split(' ')[0]} and earn community points.
                  </p>
                </div>
                <Button className="bg-(--primary-color)/10 text-(--primary-color) hover:bg-(--primary-color)/20 font-bold px-10 h-12 rounded-xl border border-(--primary-color)/30 transition-all scale-105">
                  Write Reply
                </Button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
