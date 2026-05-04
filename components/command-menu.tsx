"use client";

import { useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import {
  ArrowRight,
  ArrowUpRight,
  EnvelopeSimple,
  House,
  MagnifyingGlass,
  Newspaper,
  UsersThree,
  Briefcase,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { cn } from "@/lib/cn";
import { journalEntries } from "@/lib/journal";

export type CommandItem = {
  id: string;
  label: string;
  href: string;
  group: "Pages" | "Journal" | "Direct";
  hint?: string;
  icon: Icon;
  external?: boolean;
};

const pageItems: CommandItem[] = [
  { id: "home", label: "Home", group: "Pages", href: "/", icon: House },
  { id: "work", label: "Work", group: "Pages", href: "/work", icon: Briefcase, hint: "Selected case studies" },
  { id: "about", label: "About", group: "Pages", href: "/about", icon: UsersThree, hint: "Studio & principles" },
  { id: "journal", label: "Journal", group: "Pages", href: "/journal", icon: Newspaper, hint: "Working notes" },
  { id: "contact", label: "Contact", group: "Pages", href: "/contact", icon: EnvelopeSimple },
];

const directItems: CommandItem[] = [
  { id: "email", label: "Email hello@osmon.io", group: "Direct", href: "mailto:hello@osmon.io", icon: EnvelopeSimple, external: true },
  { id: "github", label: "GitHub — osmonlab", group: "Direct", href: "https://github.com/osmonlab", icon: ArrowUpRight, external: true },
];

const journalItems: CommandItem[] = journalEntries.map((entry) => ({
  id: `journal-${entry.slug}`,
  label: entry.title,
  group: "Journal",
  href: `/journal/${entry.slug}`,
  icon: Newspaper,
}));

const items: CommandItem[] = [...pageItems, ...journalItems, ...directItems];

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CommandMenu({ open, onOpenChange }: Props) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) =>
      [i.label, i.group, i.hint ?? ""].some((s) =>
        s.toLowerCase().includes(q),
      ),
    );
  }, [query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, open]);

  useEffect(() => {
    if (!open) return;
    triggerRef.current = (document.activeElement as HTMLElement | null) ?? null;
    const t = setTimeout(() => inputRef.current?.focus(), 10);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
      triggerRef.current?.focus?.();
      triggerRef.current = null;
    };
  }, [open]);

  const close = useCallback(() => onOpenChange(false), [onOpenChange]);

  const select = useCallback(
    (item: CommandItem) => {
      if (item.external || item.href.startsWith("mailto:")) {
        window.open(item.href, item.href.startsWith("mailto:") ? "_self" : "_blank");
      } else {
        router.push(item.href);
      }
      close();
    },
    [router, close],
  );

  const onKey = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, Math.max(filtered.length - 1, 0)));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const item = filtered[activeIndex];
        if (item) select(item);
      } else if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "Tab") {
        // Trap focus inside the dialog.
        const root = e.currentTarget;
        const focusables = root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey && (active === first || !root.contains(active))) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [filtered, activeIndex, select, close],
  );

  useEffect(() => {
    const node = listRef.current?.querySelector<HTMLLIElement>(
      `[data-index="${activeIndex}"]`,
    );
    node?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  if (!open) return null;

  // Group items for rendering
  const groups = filtered.reduce<Record<string, CommandItem[]>>((acc, it) => {
    (acc[it.group] ||= []).push(it);
    return acc;
  }, {});

  let runningIndex = -1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command menu"
      onKeyDown={onKey}
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[18vh]"
    >
      <button
        aria-hidden
        tabIndex={-1}
        onClick={close}
        className="absolute inset-0 cursor-default bg-overlay backdrop-blur-md animate-[osmon-fade_180ms_ease-out]"
      />
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-canvas shadow-[0_24px_60px_-20px_rgba(11,15,20,0.25),0_2px_0_rgba(11,15,20,0.04)] animate-[osmon-pop_220ms_cubic-bezier(0.16,1,0.3,1)]">
        <div className="flex items-center gap-3 border-b border-line-soft px-5 py-4">
          <MagnifyingGlass size={18} weight="bold" className="shrink-0 text-ink-muted" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, journal, contact…"
            className="w-full bg-transparent text-[0.9375rem] text-ink placeholder:text-ink-muted/70 focus:outline-none"
            aria-label="Search"
            aria-controls="command-list"
            aria-activedescendant={
              filtered[activeIndex] ? `cmd-${filtered[activeIndex].id}` : undefined
            }
          />
          <kbd className="hidden sm:inline-flex h-6 items-center rounded border border-line bg-bone px-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-ink-muted">
            Esc
          </kbd>
        </div>

        <ul
          ref={listRef}
          id="command-list"
          role="listbox"
          className="max-h-[55vh] overflow-y-auto py-2"
        >
          {filtered.length === 0 ? (
            <li className="px-5 py-10 text-center text-[0.875rem] text-ink-muted">
              Nothing matches{query ? <> &ldquo;{query}&rdquo;</> : null}.
            </li>
          ) : (
            Object.entries(groups).map(([group, list]) => (
              <li key={group} className="py-1">
                <p className="px-5 pb-1 pt-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink-muted">
                  {group}
                </p>
                <ul>
                  {list.map((it) => {
                    runningIndex += 1;
                    const idx = runningIndex;
                    const active = idx === activeIndex;
                    return (
                      <li
                        key={it.id}
                        id={`cmd-${it.id}`}
                        data-index={idx}
                        role="option"
                        aria-selected={active}
                      >
                        <button
                          type="button"
                          onMouseEnter={() => setActiveIndex(idx)}
                          onClick={() => select(it)}
                          className={cn(
                            "flex w-full items-center gap-3 px-5 py-2.5 text-left text-[0.9375rem] transition-colors",
                            active
                              ? "bg-bone text-ink"
                              : "text-ink-soft hover:bg-bone/60",
                          )}
                        >
                          <it.icon
                            size={16}
                            weight="bold"
                            className={cn(
                              "shrink-0",
                              active ? "text-sky-deep" : "text-ink-muted",
                            )}
                          />
                          <span className="flex-1 truncate">{it.label}</span>
                          {it.hint ? (
                            <span className="hidden sm:inline text-[0.75rem] text-ink-muted">
                              {it.hint}
                            </span>
                          ) : null}
                          <ArrowRight
                            size={14}
                            weight="bold"
                            className={cn(
                              "shrink-0 transition-opacity",
                              active ? "opacity-100" : "opacity-0",
                            )}
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))
          )}
        </ul>

        <div className="flex items-center justify-between gap-4 border-t border-line-soft bg-bone/40 px-5 py-2.5 text-[0.7rem] text-ink-muted">
          <div className="flex items-center gap-3 font-mono">
            <span className="inline-flex items-center gap-1.5">
              <kbd className="inline-flex h-5 min-w-5 items-center justify-center rounded border border-line bg-canvas px-1 font-mono text-[0.65rem] text-ink-soft">
                ↵
              </kbd>
              open
            </span>
            <span className="inline-flex items-center gap-1.5">
              <kbd className="inline-flex h-5 min-w-5 items-center justify-center rounded border border-line bg-canvas px-1 font-mono text-[0.65rem] text-ink-soft">
                ↑
              </kbd>
              <kbd className="inline-flex h-5 min-w-5 items-center justify-center rounded border border-line bg-canvas px-1 font-mono text-[0.65rem] text-ink-soft">
                ↓
              </kbd>
              navigate
            </span>
          </div>
          <span className="font-mono">{filtered.length} result{filtered.length === 1 ? "" : "s"}</span>
        </div>
      </div>
    </div>
  );
}
