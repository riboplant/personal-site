"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { routing } from "@/i18n/routing";

export default function Navbar() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale() {
    const other = routing.locales.find((l) => l !== locale) ?? "en";
    const segments = pathname.split("/");
    segments[1] = other;
    router.push(segments.join("/") || "/");
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto w-full">
      <span className="text-sm font-semibold text-white/80 tracking-widest uppercase">
        IM
      </span>
      <button
        onClick={switchLocale}
        className="text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all"
      >
        {locale === "en" ? "ES" : "EN"}
      </button>
    </header>
  );
}
