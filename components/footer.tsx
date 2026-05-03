import Link from "next/link";
import { Wordmark } from "@/components/wordmark";

const social = [
  { href: "https://github.com/osmonlab", label: "GitHub" },
  { href: "https://x.com/osmonlab", label: "X" },
  { href: "https://linkedin.com/company/osmonlab", label: "LinkedIn" },
];

const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto grid max-w-(--container-wide) gap-10 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5 space-y-3">
          <Wordmark className="text-ink text-[1.15rem]" />
          <p className="max-w-xs text-[0.875rem] text-ink-muted">
            The web gateway for future software. Tashkent &middot; Remote.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-muted">
            Sitemap
          </p>
          <ul className="mt-4 space-y-2 text-[0.875rem]">
            {nav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-ink-soft transition-colors hover:text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-muted">
            Elsewhere
          </p>
          <ul className="mt-4 space-y-2 text-[0.875rem]">
            {social.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink-soft transition-colors hover:text-ink"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:hello@osmon.io"
                className="text-ink-soft transition-colors hover:text-ink"
              >
                hello@osmon.io
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-(--container-wide) flex-col gap-3 border-t border-line-soft px-6 pt-6 text-[0.75rem] text-ink-muted md:flex-row md:items-center md:justify-between md:px-10">
        <span>© {new Date().getFullYear()} osmon lab. All rights reserved.</span>
        <span className="font-mono">v0.1 — under construction</span>
      </div>
    </footer>
  );
}
