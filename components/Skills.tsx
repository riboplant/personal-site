"use client";

import { useTranslations } from "next-intl";

type Category = {
  name: string;
  items: string[];
};

export default function Skills() {
  const t = useTranslations("skills");
  const categories = t.raw("categories") as Category[];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          {t("section_title")}
          <span className="block w-12 h-1 bg-blue-600 mt-3 rounded-full" />
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wider mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 bg-gray-50 text-gray-700 rounded-full border border-gray-100 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
