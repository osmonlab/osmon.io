import { Reveal } from "@/components/reveal";
import { Wordmark } from "@/components/wordmark";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const social = [
  { href: "https://github.com/osmonlab", label: "GitHub" },
  { href: "https://x.com/osmonlab", label: "X" },
  { href: "https://linkedin.com/company/osmonlab", label: "LinkedIn" },
];

export function CtaFooter() {
  return (
    <section
      id="contact"
      className="relative border-t border-line-soft pt-24 md:pt-40"
    >
      <div className="mx-auto max-w-(--container-wide) px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
            Get in touch
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-8 max-w-4xl text-balance font-serif text-[clamp(2.25rem,7vw,6rem)] leading-[1.02] tracking-[-0.025em] text-ink">
            Tell us what you&rsquo;re trying to ship.
          </h2>
        </Reveal>

        <Reveal delay={220}>
          <a
            href="mailto:hello@osmon.io"
            className="mt-12 inline-flex items-center gap-3 font-mono text-[1.0625rem] text-ink underline decoration-line underline-offset-[6px] transition-[color,text-decoration-color] hover:decoration-sky hover:text-sky-deep"
          >
            hello@osmon.io
            <ArrowUpRight size={18} weight="bold" />
          </a>
        </Reveal>
      </div>

      <footer className="mt-32 border-t border-line-soft py-10">
        <div className="mx-auto flex max-w-(--container-wide) flex-col gap-6 px-6 text-[0.8125rem] text-ink-muted md:flex-row md:items-center md:justify-between md:px-10">
          <div className="flex items-center gap-3">
            <Wordmark className="text-ink text-[1rem]" />
            <span aria-hidden className="h-3 w-px bg-line" />
            <span>The web gateway for future software.</span>
          </div>
          <nav className="flex items-center gap-6">
            {social.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-ink"
              >
                {s.label}
              </a>
            ))}
            <span className="hidden md:inline">© {new Date().getFullYear()} osmon lab</span>
          </nav>
        </div>
      </footer>
    </section>
  );
}
