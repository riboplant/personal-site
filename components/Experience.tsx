"use client";

import { useTranslations } from "next-intl";

type Job = {
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
};

export default function Experience() {
  const t = useTranslations("experience");
  const jobs = t.raw("jobs") as Job[];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          {t("section_title")}
          <span className="block w-12 h-1 bg-blue-600 mt-3 rounded-full" />
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gray-100 hidden md:block ml-[7px]" />

          <div className="space-y-10">
            {jobs.map((job, i) => (
              <div key={i} className="md:pl-10 relative">
                {/* Dot */}
                <div className="hidden md:block absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-blue-600 ring-4 ring-white" />

                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{job.company}</h3>
                      <p className="text-blue-600 text-sm font-medium">{job.role}</p>
                    </div>
                    <span className="text-xs text-gray-400 font-medium bg-gray-50 px-3 py-1 rounded-full border border-gray-100 whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
