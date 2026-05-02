import Link from "next/link";
import { Wordmark } from "@/components/wordmark";

const links = [
  { href: "#work", label: "Work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line-soft bg-canvas/75 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-(--container-wide) items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          aria-label="osmon — home"
          className="text-[1.15rem] tracking-[-0.04em] font-medium text-ink"
        >
          <Wordmark />
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-[0.875rem] text-ink-muted">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:hello@osmon.io"
          className="inline-flex h-9 items-center rounded-md bg-ink px-4 text-[0.8125rem] font-medium text-canvas transition-colors hover:bg-ink-soft active:scale-[0.98]"
        >
          Talk to us
        </a>
      </div>
    </header>
  );
}
