import Link from "next/link";
import { ArrowRight, BookOpen, Code, Lightbulb } from "lucide-react";

export default function DocumentationPage() {
  return (
    <div className="flex flex-col space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-white">Documentation Overview</h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          Welcome to the Mosura Documentation. Select a topic from the sidebar or choose one of the popular categories below to get started.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link 
          href="/resources/documentation/introduction"
          className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:border-orange-500/50"
        >
          <BookOpen className="w-8 h-8 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            Introduction <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            New to Mosura? Start here to learn the core architecture and fundamental concepts.
          </p>
        </Link>

        <Link 
          href="/resources/documentation/quick-start"
          className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:border-orange-500/50"
        >
          <Code className="w-8 h-8 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            Quick Start <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Get your first Mosura gateway up and running on the edge in minutes.
          </p>
        </Link>

        <Link 
          href="/resources/documentation/llm-routing"
          className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:border-orange-500/50"
        >
          <Lightbulb className="w-8 h-8 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            AI Gateway <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Learn how to route LLM requests, manage tokens, and implement semantic caching.
          </p>
        </Link>
      </div>
    </div>
  );
}
