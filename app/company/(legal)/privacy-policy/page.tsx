import { PRIVACY_POLICY } from "@/constants/company";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Mosura",
  description: PRIVACY_POLICY.intro,
};

export default function PrivacyPolicyPage() {
  return (
    <article>
      <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {PRIVACY_POLICY.title}
      </h1>
      <p className="mb-12 text-lg leading-relaxed text-slate-400">
        {PRIVACY_POLICY.intro}
      </p>

      <div className="space-y-12">
        {PRIVACY_POLICY.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-4 text-2xl font-bold text-white">
              {section.heading}
            </h2>
            {section.text && (
              <p className="mb-6 text-base leading-relaxed text-slate-300">
                {section.text}
              </p>
            )}
            {"items" in section && section.items && (
              <div className="space-y-5">
                {section.items.map((item) => (
                  <div key={item.subheading}>
                    <h3 className="mb-2 text-lg font-semibold text-[#ed7f18]">
                      {item.subheading}
                    </h3>
                    <p className="text-base leading-relaxed text-slate-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
