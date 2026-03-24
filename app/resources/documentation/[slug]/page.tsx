import { DOCUMENTATION_DATA } from "@/constants/documentation";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const allItems = DOCUMENTATION_DATA.flatMap((s) => s.items);
  return allItems.map((item) => ({
    slug: item.slug,
  }));
}

export default function DocumentationPost({
  params,
}: {
  params: { slug: string };
}) {
  const item = DOCUMENTATION_DATA.flatMap((s) => s.items).find(
    (i) => i.slug === params.slug
  );

  if (!item) {
    notFound();
  }

  return (
    <article className="prose prose-invert prose-orange max-w-none prose-headings:font-bold">
      <h1 className="text-4xl sm:text-5xl tracking-tight text-white mb-8">
        {item.title}
      </h1>
      
      <div 
        className="text-slate-300 leading-relaxed space-y-6"
        dangerouslySetInnerHTML={{ __html: item.content }}
      />
      
      <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center text-sm text-slate-500">
        <div>Was this helpful?</div>
        <div className="flex gap-4">
          <button className="hover:text-white transition-colors">Yes</button>
          <button className="hover:text-white transition-colors">No</button>
        </div>
      </div>
    </article>
  );
}
