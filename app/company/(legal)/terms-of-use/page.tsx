import { TERMS_OF_USE } from "@/constants/company";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Mosura",
  description: TERMS_OF_USE.intro,
};

export default function TermsOfUsePage() {
  return (
    <article>
      <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {TERMS_OF_USE.title}
      </h1>
      <p className="mb-12 text-lg leading-relaxed text-slate-400">
        {TERMS_OF_USE.intro}
      </p>

      <div className="space-y-12">
        {TERMS_OF_USE.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-6 text-2xl font-bold text-white">
              {section.heading}
            </h2>
            <div className="space-y-6">
              {section.content.map((item) => (
                <div key={item.subheading}>
                  <h3 className="mb-2 text-lg font-semibold text-[#ed7f18]">
                    {item.subheading}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-300">
                    {item.text}
                  </p>
                  {item.list && (
                    <ul className="mt-3 space-y-2 pl-1">
                      {item.list.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-slate-300"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ed7f18]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
