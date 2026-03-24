import { COMPLIANCE_CONTENT } from "@/constants/company";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance | Mosura",
  description: COMPLIANCE_CONTENT.intro,
};

export default function CompliancePage() {
  return (
    <article>
      <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {COMPLIANCE_CONTENT.title}
      </h1>
      <p className="mb-12 text-lg leading-relaxed text-slate-400">
        {COMPLIANCE_CONTENT.intro}
      </p>

      <div className="space-y-10">
        {COMPLIANCE_CONTENT.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-3 text-2xl font-bold text-white">
              {section.heading}
            </h2>
            <p className="text-base leading-relaxed text-slate-300">
              {section.text}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
