"use client";

import { useTranslations } from "next-intl";

type Job = { company: string; role: string; period: string; description: string; tags: string[] };
type Project = { name: string; description: string; tags: string[]; github: string };
type Category = { name: string; items: string[] };

const tile = "rounded-2xl border border-white/[0.06] bg-[#111114] p-6 flex flex-col";
const tileAccent = (color: string) => `rounded-2xl border border-white/[0.06] ${color} p-6 flex flex-col`;

export default function BentoGrid() {
  const hero = useTranslations("hero");
  const about = useTranslations("about");
  const exp = useTranslations("experience");
  const proj = useTranslations("projects");
  const skills = useTranslations("skills");
  const contact = useTranslations("contact");

  const jobs = exp.raw("jobs") as Job[];
  const projects = proj.raw("items") as Project[];
  const categories = skills.raw("categories") as Category[];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[minmax(100px,auto)]">

      {/* ── HERO ── */}
      <div className={`${tile} col-span-2 row-span-3 justify-between gap-6`}>
        <div>
          <p className="text-xs text-white/40 uppercase tracking-widest mb-4">{hero("greeting")}</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-3">
            {hero("name")}
          </h1>
          <h2 className="text-base sm:text-lg text-white/50 font-medium mb-5">
            {hero("title")}
          </h2>
          <p className="text-sm text-white/40 leading-relaxed max-w-sm">
            {hero("subtitle")}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <a
            href="#experience"
            className="px-4 py-2 bg-white text-black rounded-xl text-sm font-medium hover:bg-white/90 transition-colors"
          >
            {hero("cta_projects")}
          </a>
          <a
            href={`mailto:ignaciomaruottolo@gmail.com`}
            className="px-4 py-2 border border-white/15 text-white/70 rounded-xl text-sm font-medium hover:border-white/30 hover:text-white transition-all"
          >
            {hero("cta_contact")}
          </a>
        </div>
      </div>

      {/* ── STATUS (open to work) ── */}
      <div className={`${tileAccent("bg-[#0d1f17]")} col-span-1 row-span-1 justify-center gap-2`}>
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">Available</span>
        </div>
        <p className="text-white/60 text-xs leading-relaxed">Open to new opportunities</p>
      </div>

      {/* ── LOCATION ── */}
      <div className={`${tile} col-span-1 row-span-1 justify-center gap-1`}>
        <div className="flex items-center gap-2 text-white/30 mb-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-xs uppercase tracking-wider">Location</span>
        </div>
        <p className="text-white text-sm font-medium">Buenos Aires</p>
        <p className="text-white/40 text-xs">Argentina</p>
      </div>

      {/* ── GITHUB ── */}
      <a
        href="https://github.com/riboplant"
        target="_blank"
        rel="noopener noreferrer"
        className={`${tile} col-span-1 row-span-1 justify-between hover:bg-[#1a1a1e] transition-colors cursor-pointer`}
      >
        <svg className="w-6 h-6 text-white/50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
        <div>
          <p className="text-white text-sm font-medium">riboplant</p>
          <p className="text-white/30 text-xs">GitHub →</p>
        </div>
      </a>

      {/* ── PYTORCH OPEN SOURCE ── */}
      <div className={`${tileAccent("bg-[#180f27]")} col-span-1 row-span-1 justify-between`}>
        <div className="text-xs text-purple-400/70 uppercase tracking-wider font-medium">Open Source</div>
        <div>
          <p className="text-white text-sm font-medium leading-snug">PyTorch</p>
          <p className="text-white/30 text-xs">inductor/foreach_map →</p>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <div className={`${tile} col-span-2 lg:col-span-2 row-span-2 gap-4`}>
        <p className="text-xs text-white/30 uppercase tracking-widest">{about("section_title")}</p>
        <p className="text-white/60 text-sm leading-relaxed">{about("p1")}</p>
        <p className="text-white/60 text-sm leading-relaxed">{about("p2")}</p>
      </div>

      {/* ── LINKEDIN ── */}
      <a
        href="https://www.linkedin.com/in/ignacio-maruottolo/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${tileAccent("bg-[#0c1520]")} col-span-1 row-span-1 justify-between hover:bg-[#0f1d2e] transition-colors cursor-pointer`}
      >
        <svg className="w-5 h-5 text-[#60a5fa]/60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        <div>
          <p className="text-white text-sm font-medium">LinkedIn</p>
          <p className="text-white/30 text-xs">ignacio-maruottolo →</p>
        </div>
      </a>

      {/* ── CTO @ 20 ── */}
      <div className={`${tile} col-span-1 row-span-1 justify-center`}>
        <p className="text-3xl font-bold text-white">CTO</p>
        <p className="text-white/30 text-xs mt-1">@ Turbodato, age 20</p>
      </div>

      {/* ── EXPERIENCE ── */}
      <div className={`${tile} col-span-2 row-span-3 gap-5`}>
        <p className="text-xs text-white/30 uppercase tracking-widest">{exp("section_title")}</p>
        <div className="flex flex-col gap-4 overflow-hidden">
          {jobs.map((job, i) => (
            <div key={i} className="flex flex-col gap-1 pb-4 border-b border-white/[0.04] last:border-0 last:pb-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-white text-sm font-semibold">{job.company}</p>
                  <p className="text-white/40 text-xs">{job.role}</p>
                </div>
                <span className="text-white/25 text-xs whitespace-nowrap pt-0.5">{job.period}</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-1">
                {job.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/40">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROJECTS (featured) ── */}
      <a
        href={projects[0].github}
        target="_blank"
        rel="noopener noreferrer"
        className={`${tileAccent("bg-[#111820]")} col-span-2 row-span-2 justify-between hover:bg-[#151e2a] transition-colors cursor-pointer group`}
      >
        <div className="flex justify-between items-start">
          <p className="text-xs text-white/30 uppercase tracking-widest">{proj("section_title")}</p>
          <svg className="w-4 h-4 text-white/20 group-hover:text-white/40 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
        <div>
          <p className="text-white text-lg font-semibold mb-1">{projects[0].name}</p>
          <p className="text-white/40 text-sm leading-relaxed">{projects[0].description}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {projects[0].tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 bg-white/[0.05] text-white/40 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </a>

      {/* ── PROJECT 2 ── */}
      <a
        href={projects[1].github}
        target="_blank"
        rel="noopener noreferrer"
        className={`${tile} col-span-1 row-span-1 justify-between hover:bg-[#1a1a1e] transition-colors cursor-pointer group`}
      >
        <div className="flex justify-between items-start">
          <p className="text-white text-sm font-medium">{projects[1].name}</p>
          <svg className="w-3 h-3 text-white/20 group-hover:text-white/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
        <p className="text-white/35 text-xs leading-relaxed line-clamp-2">{projects[1].description}</p>
      </a>

      {/* ── PROJECT 3 ── */}
      <a
        href={projects[2].github}
        target="_blank"
        rel="noopener noreferrer"
        className={`${tile} col-span-1 row-span-1 justify-between hover:bg-[#1a1a1e] transition-colors cursor-pointer group`}
      >
        <div className="flex justify-between items-start">
          <p className="text-white text-sm font-medium">{projects[2].name}</p>
          <svg className="w-3 h-3 text-white/20 group-hover:text-white/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
        <p className="text-white/35 text-xs leading-relaxed line-clamp-2">{projects[2].description}</p>
      </a>

      {/* ── SKILLS ── */}
      <div className={`${tile} col-span-2 lg:col-span-2 row-span-2 gap-4`}>
        <p className="text-xs text-white/30 uppercase tracking-widest">{skills("section_title")}</p>
        <div className="flex flex-col gap-3">
          {categories.map((cat) => (
            <div key={cat.name}>
              <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1.5">{cat.name}</p>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span key={item} className="text-xs px-2.5 py-1 rounded-full border border-white/[0.08] text-white/60 bg-white/[0.03]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROJECT 4 ── */}
      <a
        href={projects[3].github}
        target="_blank"
        rel="noopener noreferrer"
        className={`${tile} col-span-1 row-span-1 justify-between hover:bg-[#1a1a1e] transition-colors cursor-pointer group`}
      >
        <div className="flex justify-between items-start">
          <p className="text-white text-sm font-medium">{projects[3].name}</p>
          <svg className="w-3 h-3 text-white/20 group-hover:text-white/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
        <p className="text-white/35 text-xs leading-relaxed line-clamp-2">{projects[3].description}</p>
      </a>

      {/* ── PROJECT 5 ── */}
      <a
        href={projects[4].github}
        target="_blank"
        rel="noopener noreferrer"
        className={`${tile} col-span-1 row-span-1 justify-between hover:bg-[#1a1a1e] transition-colors cursor-pointer group`}
      >
        <div className="flex justify-between items-start">
          <p className="text-white text-sm font-medium">{projects[4].name}</p>
          <svg className="w-3 h-3 text-white/20 group-hover:text-white/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
        <p className="text-white/35 text-xs leading-relaxed line-clamp-2">{projects[4].description}</p>
      </a>

      {/* ── CONTACT ── */}
      <div className={`${tileAccent("bg-[#0c1218]")} col-span-2 lg:col-span-4 row-span-1 flex-row items-center justify-between gap-4`}>
        <div>
          <p className="text-white font-semibold">{contact("section_title")}</p>
          <p className="text-white/40 text-sm">{contact("subtitle")}</p>
        </div>
        <a
          href="mailto:ignaciomaruottolo@gmail.com"
          className="shrink-0 px-5 py-2.5 bg-white text-black rounded-xl text-sm font-medium hover:bg-white/90 transition-colors whitespace-nowrap"
        >
          {contact("email_label")} →
        </a>
      </div>

    </div>
  );
}
