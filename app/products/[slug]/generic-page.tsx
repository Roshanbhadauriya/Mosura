export default function GenericProductPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const title = params.slug
    .split("-")
    .map(word => word.charAt(0) + word.slice(1))
    .join(" ");

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 text-center">
      <div className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight md:text-7xl ">
          {title}
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
          Transforming digital infrastructure through unified, high-performance solutions. Explore the future of {title}.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 pt-12 max-w-5xl mx-auto">
        <div className="rounded-3xl border border-white/5 bg-white/2 p-8 md:p-12 hover:bg-white/4 transition-all group">
          <h3 className="text-2xl font-semibold mb-4 text-(--primary-color) group-hover:scale-105 transition-transform">Enterprise Grade</h3>
          <p className="text-slate-400 leading-relaxed">
            Scalable, secure, and reliable. Built for the most demanding environments and agentic workflows.
          </p>
        </div>
        <div className="rounded-3xl border border-white/5 bg-white/2 p-8 md:p-12 hover:bg-white/4 transition-all group">
          <h3 className="text-2xl font-semibold mb-4 text-(--primary-color) group-hover:scale-105 transition-transform">Instant Visibility</h3>
          <p className="text-slate-400 leading-relaxed">
            Deep observability and insights across your entire ecosystem, powered by AI-driven analytics.
          </p>
        </div>
      </div>
    </div>
  );
}
