import { BLOG_POSTS } from "@/constants/blog";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-black text-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <Link 
          href="/resources/blog"
          className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
        
        {/* Header content */}
        <header className="space-y-6 mb-12">
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="bg-[#ed7f18]/10 text-[#ed7f18] hover:bg-[#ed7f18]/20 border-0">
              {post.label}
            </Badge>
            <time className="text-sm text-slate-400">{post.published}</time>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-slate-300 leading-relaxed md:w-5/6">
            {post.summary}
          </p>
          
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-lg font-bold">
              {post.author.charAt(0)}
            </div>
            <div>
              <div className="font-medium text-slate-200">{post.author}</div>
              <div className="text-sm text-slate-500">Zeroteq Team</div>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="aspect-video w-full bg-slate-900 rounded-2xl overflow-hidden mb-16 border border-white/5">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Prose Content */}
        <div 
          className="prose prose-invert prose-lg max-w-none prose-orange prose-headings:font-bold prose-a:text-[#ed7f18] hover:prose-a:text-orange-400"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-16 pt-8 border-t border-white/10">
            <h3 className="text-sm font-semiboldtracking-wider text-slate-500 mb-4">Related Topics</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
