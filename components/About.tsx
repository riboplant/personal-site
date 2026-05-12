"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          {t("section_title")}
          <span className="block w-12 h-1 bg-blue-600 mt-3 rounded-full" />
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "ITBA", sublabel: "Computer Engineering, 4th year" },
              { label: "PyTorch", sublabel: "Open source contributor" },
              { label: "CTO @ 20", sublabel: "Led tech strategy at Turbodato" },
              { label: "LATAM Payments", sublabel: "Production systems at Tapi" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
              >
                <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                <p className="text-gray-400 text-xs mt-1">{item.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
