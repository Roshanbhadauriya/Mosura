export default function SoixPage() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 text-center">
      <div className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight md:text-7xl">Soix</h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          The unified platform for the agentic era. Manage APIs, event streams,
          and AI agents with ease and enterprise-grade security.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8">
        {[1, 2, 3].map((v) => (
          <div
            key={v}
            className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors"
          >
            <div className="mb-4 h-10 w-10 rounded-lg bg-(--primary-color)/20 flex items-center justify-center">
              <div className="h-5 w-5 rounded-full bg-(--primary-color) shadow-[0_0_10px_rgba(237,127,24,0.5)]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Key Capability {v}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Experience lightning-fast performance and unified control across
              your entire infrastructure.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
