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
    <button
      onClick={switchLocale}
      className="fixed top-6 right-6 z-50 text-[11px] font-mono font-medium px-3 py-1.5 rounded-full border border-white/10 text-white/40 hover:text-amber-400 hover:border-amber-400/30 transition-all tracking-widest"
    >
      {locale === "en" ? "ES" : "EN"}
    </button>
  );
}
