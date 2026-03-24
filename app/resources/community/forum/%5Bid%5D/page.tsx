"use client";

import { 
  ArrowLeft, 
  MessageSquare, 
  Eye, 
  Clock, 
  Share2, 
  ChevronRight,
  User,
  Shield,
  ThumbsUp,
  MoreVertical
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FORUM_POSTS } from "@/constants/forum";

export default function ForumTopicDetail({
  params,
}: {
  params: { id: string };
}) {
  const post = FORUM_POSTS.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-8">
          <Link href="/resources/community" className="hover:text-(--primary-color) transition-colors">Community</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/resources/community/forum" className="hover:text-(--primary-color) transition-colors">Forum</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-300 truncate max-w-[200px] md:max-w-md">{post.title}</span>
        </nav>

        {/* Topic Header Area */}
        <div className="space-y-6 mb-12">
          <Link 
            href="/resources/community/forum" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Discussions
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-linear-to-br from-slate-700 to-slate-900 border border-white/10 flex items-center justify-center text-[8px] font-bold text-slate-300">
                {post.author.name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="font-semibold text-slate-300">{post.author.name}</span>
            </div>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.lastActive}</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Eye className="w-3.5 h-3.5" /> {post.views} views</span>
            <div className="ml-auto flex items-center gap-3">
               <button className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Discussion Thread */}
          <div className="lg:col-span-12 space-y-12">
            
            {/* Original Post */}
            <article className="space-y-6">
              <div className="prose prose-invert prose-orange max-w-none text-slate-300 text-lg leading-relaxed">
                {post.content}
              </div>
              
              <div className="flex flex-wrap gap-2 pt-4">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs font-medium text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-white/5 flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4" /> Helpful
                </Button>
                <Button className="bg-(--primary-color) hover:brightness-110 text-white font-semibold rounded-xl shadow-[0_16px_45px_rgba(237,127,24,0.4)] px-6">
                  Reply
                </Button>
              </div>
            </article>

            {/* Replies Section */}
            <div className="space-y-8 pt-12">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-xl font-bold flex items-center gap-3 italic">
                  <MessageSquare className="w-5 h-5 text-(--primary-color)" /> {post.replies} Replies
                </h3>
              </div>

              {post.repliesData && post.repliesData.map((reply, idx) => (
                <div key={idx} className="flex gap-4 md:gap-6 group">
                   <div className="hidden md:block shrink-0">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-slate-800 to-black border border-white/10 flex items-center justify-center text-xs font-bold text-slate-400">
                       {reply.author.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="flex-1 space-y-3 p-6 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-white/10 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                         <span className="font-bold text-slate-200">{reply.author.name}</span>
                         {reply.author.role === 'Maintainer' && (
                           <span className="px-2 py-0.5 rounded bg-(--primary-color)/20 text-(--primary-color) text-[10px] font-boldtracking-wider flex items-center gap-1">
                             <Shield className="w-2.5 h-2.5" /> Staff
                           </span>
                         )}
                         <span className="text-slate-500 text-xs">• {reply.timestamp}</span>
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-white/5 text-slate-500 hover:text-white transition-all">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="prose prose-invert prose-orange max-w-none text-slate-300 text-[15px] leading-relaxed">
                       {reply.content}
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                       <button className="text-xs font-bold text-slate-500 hover:text-(--primary-color) transition-colors">Like</button>
                       <button className="text-xs font-bold text-slate-500 hover:text-(--primary-color) transition-colors">Reply</button>
                    </div>
                  </div>
                </div>
              ))}

              {post.replies === 0 && (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 border border-dashed border-white/10">
                    <MessageSquare className="w-8 h-8 text-slate-600" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-200">No replies yet</h4>
                  <p className="text-slate-500 max-w-xs mx-auto text-sm">
                    Be the first one to help {post.author.name.split(' ')[0]} with their question.
                  </p>
                  <Button className="bg-(--primary-color)/10 text-(--primary-color) hover:bg-(--primary-color)/20 font-bold px-8 rounded-xl border border-(--primary-color)/30">
                    Start the conversation
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
