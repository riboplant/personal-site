"use client";

import { useTranslations } from "next-intl";

type Job = { company: string; role: string; period: string; description: string; tags: string[] };
type Project = { name: string; description: string; tags: string[]; github: string };
type Category = { name: string; items: string[] };

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-mono text-amber-400/70 uppercase tracking-[0.2em] mb-8">
      {children}
    </p>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/[0.07] text-zinc-500 bg-white/[0.02]">
      {children}
    </span>
  );
}

export default function MainContent() {
  const hero = useTranslations("hero");
  const exp = useTranslations("experience");
  const proj = useTranslations("projects");
  const skills = useTranslations("skills");
  const contact = useTranslations("contact");
  const about = useTranslations("about");

  const jobs = exp.raw("jobs") as Job[];
  const projects = proj.raw("items") as Project[];
  const categories = skills.raw("categories") as Category[];

  const featuredProjects = [projects[5], projects[0], projects[1]]; // PyTorch, Acrux, MON-E
  const otherProjects = [projects[2], projects[3], projects[4]]; // Star-Core, Oktopus, MGFF

  return (
    <main className="flex-1 min-w-0 py-16 lg:py-16 space-y-28">

      {/* ── HERO (mobile only header) ── */}
      <div className="lg:hidden mb-12">
        <h1 className="text-3xl font-semibold text-white mb-1">Ignacio Maruottolo</h1>
        <p className="text-zinc-500 text-sm">{hero("title")}</p>
        <div className="flex gap-5 mt-4 text-[11px] font-mono text-zinc-600">
          <a href="https://github.com/riboplant" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/ignacio-maruottolo/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300">LinkedIn ↗</a>
          <a href="mailto:ignaciomaruottolo@gmail.com" className="hover:text-zinc-300">Email ↗</a>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section>
        <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl mb-4">
          {about("p1")}
        </p>
        <p className="text-zinc-500 text-base leading-relaxed max-w-2xl">
          {about("p2")}
        </p>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience">
        <SectionLabel>{exp("section_title")}</SectionLabel>

        <div className="space-y-0">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="group grid grid-cols-[1fr_auto] gap-x-6 py-6 border-t border-white/[0.05] hover:border-white/[0.1] transition-colors"
            >
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="text-white font-medium text-sm">{job.company}</h3>
                  <span className="text-zinc-600 text-xs font-mono">·</span>
                  <span className="text-zinc-400 text-xs">{job.role}</span>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed mb-3 max-w-xl">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                </div>
              </div>
              <span className="text-zinc-700 text-[11px] font-mono whitespace-nowrap pt-0.5">
                {job.period}
              </span>
            </div>
          ))}
          <div className="border-t border-white/[0.05]" />
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section id="projects">
        <SectionLabel>{proj("section_title")}</SectionLabel>

        <div className="space-y-4">
          {featuredProjects.map((project, i) => (
            <a
              key={project.name}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  {i === 0 && (
                    <span className="text-[10px] font-mono text-amber-400/70 border border-amber-400/20 rounded px-2 py-0.5 tracking-widest">
                      OPEN SOURCE
                    </span>
                  )}
                  <h3 className="text-white font-semibold text-base group-hover:text-amber-400 transition-colors">
                    {project.name}
                  </h3>
                </div>
                <svg className="w-4 h-4 text-zinc-700 group-hover:text-zinc-400 transition-colors shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4 max-w-xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
              </div>
            </a>
          ))}
        </div>

        {/* Other projects */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {otherProjects.map((project) => (
            <a
              key={project.name}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-white/[0.05] p-4 hover:border-white/[0.1] hover:bg-white/[0.02] transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-zinc-300 text-xs font-medium group-hover:text-white transition-colors">
                  {project.name}
                </h4>
                <svg className="w-3 h-3 text-zinc-700 group-hover:text-zinc-500 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-zinc-600 text-[11px] leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills">
        <SectionLabel>{skills("section_title")}</SectionLabel>

        <div className="space-y-6">
          {categories.map((cat) => (
            <div key={cat.name} className="flex flex-col sm:flex-row sm:items-start gap-3">
              <p className="text-zinc-700 text-[10px] font-mono uppercase tracking-widest w-28 shrink-0 pt-1">
                {cat.name}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => <Tag key={item}>{item}</Tag>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="pb-16">
        <p className="text-zinc-300 text-2xl font-medium mb-3">
          {contact("section_title")}
        </p>
        <p className="text-zinc-500 text-sm leading-relaxed max-w-md mb-8">
          {contact("subtitle")}
        </p>
        <a
          href="mailto:ignaciomaruottolo@gmail.com"
          className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
        >
          ignaciomaruottolo@gmail.com
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </section>

    </main>
  );
}
