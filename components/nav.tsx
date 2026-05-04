"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, List, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { Wordmark } from "@/components/wordmark";
import { CommandMenu } from "@/components/command-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/cn";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const meta = e.metaKey || e.ctrlKey;
      if (meta && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setMenuOpen((v) => !v);
      } else if (e.key === "/" && !menuOpen) {
        const target = e.target as HTMLElement | null;
        const tag = target?.tagName;
        if (tag !== "INPUT" && tag !== "TEXTAREA" && !target?.isContentEditable) {
          e.preventDefault();
          setMenuOpen(true);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[padding] duration-300",
          scrolled ? "py-2" : "py-4",
        )}
      >
        <div
          className={cn(
            "mx-auto flex h-14 max-w-(--container-wide) items-center justify-between gap-4 rounded-full border px-3 pl-5 transition-all duration-300",
            scrolled
              ? "border-line bg-canvas/80 shadow-[0_1px_0_rgba(11,15,20,0.04),0_8px_24px_-12px_rgba(11,15,20,0.08)] backdrop-blur-xl"
              : "border-transparent bg-canvas/40 backdrop-blur-md",
          )}
        >
          <Link
            href="/"
            aria-label="osmon — home"
            className="group flex items-center gap-2.5"
          >
            <span aria-hidden className="relative inline-flex">
              <span className="block size-1.5 rounded-full bg-sky" />
              <span className="absolute inset-0 inline-flex animate-ping rounded-full bg-sky opacity-60" />
            </span>
            <Wordmark className="text-[1.0625rem] text-ink transition-colors group-hover:text-ink/80" />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-1 rounded-full border border-line-soft bg-bone/60 p-1 backdrop-blur"
          >
            {links.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-1.5 text-[0.8125rem] font-medium transition-colors",
                    active
                      ? "bg-canvas text-ink shadow-[0_1px_0_rgba(11,15,20,0.04),0_2px_8px_-3px_rgba(11,15,20,0.08)]"
                      : "text-ink-muted hover:text-ink",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {/* Search trigger: tablet+ shows label + kbd hint */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open command menu"
              aria-keyshortcuts="Meta+K Control+K"
              className="group hidden sm:inline-flex h-9 items-center gap-2 rounded-full border border-line-soft bg-canvas/70 pl-3 pr-1.5 text-[0.8125rem] text-ink-muted transition-colors hover:border-line hover:text-ink"
            >
              <MagnifyingGlass size={14} weight="bold" />
              <span className="hidden md:inline">Search</span>
              <kbd className="inline-flex h-6 items-center gap-0.5 rounded-full bg-bone px-2 font-mono text-[0.65rem] text-ink-soft">
                <span aria-hidden>⌘</span>K
              </kbd>
            </button>

            <ThemeToggle />

            {/* Mobile menu: opens the same command palette (already lists every route) */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="inline-flex md:hidden size-9 items-center justify-center rounded-full border border-line-soft bg-canvas/70 text-ink transition-colors hover:border-line"
            >
              <List size={16} weight="bold" />
            </button>

            <Link
              href="/contact"
              className="group inline-flex h-9 items-center gap-1.5 rounded-full bg-ink pl-4 pr-3 text-[0.8125rem] font-medium text-canvas transition-all hover:bg-ink-soft hover:gap-2 active:scale-[0.97]"
            >
              Talk to us
              <span className="inline-flex size-6 items-center justify-center rounded-full bg-canvas/12 transition-colors group-hover:bg-canvas/20">
                <ArrowUpRight size={12} weight="bold" />
              </span>
            </Link>
          </div>
        </div>
      </header>

      <CommandMenu open={menuOpen} onOpenChange={setMenuOpen} />
    </>
  );
}
