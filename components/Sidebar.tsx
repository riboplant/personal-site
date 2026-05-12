"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const navItems = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export default function Sidebar() {
  const hero = useTranslations("hero");
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = ["experience", "projects", "skills"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <aside className="hidden lg:flex flex-col justify-between h-screen sticky top-0 w-56 shrink-0 py-16 pr-8">
      <div className="flex flex-col gap-10">
        {/* Identity */}
        <div>
          <h1 className="text-white font-semibold text-base leading-tight">
            Ignacio<br />Maruottolo
          </h1>
          <p className="text-zinc-500 text-xs mt-2 leading-relaxed">
            {hero("title")}
          </p>
          <div className="flex items-center gap-1.5 mt-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-zinc-500 text-[11px] font-mono">Available</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-xs font-mono tracking-wide py-1 transition-colors ${
                active === item.href.slice(1)
                  ? "text-amber-400"
                  : "text-zinc-600 hover:text-zinc-300"
              }`}
            >
              {active === item.href.slice(1) && (
                <span className="text-amber-400 mr-2">›</span>
              )}
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Social links */}
      <div className="flex flex-col gap-3">
        <a
          href="https://github.com/riboplant"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-mono text-zinc-600 hover:text-zinc-300 transition-colors"
        >
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/ignacio-maruottolo/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-mono text-zinc-600 hover:text-zinc-300 transition-colors"
        >
          LinkedIn ↗
        </a>
        <a
          href="mailto:ignaciomaruottolo@gmail.com"
          className="text-[11px] font-mono text-zinc-600 hover:text-zinc-300 transition-colors"
        >
          Email ↗
        </a>
        <p className="text-[10px] font-mono text-zinc-700 mt-1">
          Buenos Aires, ARG
        </p>
      </div>
    </aside>
  );
}
