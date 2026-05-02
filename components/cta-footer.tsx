import { Reveal } from "@/components/reveal";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function Cta() {
  return (
    <section
      id="contact"
      className="relative border-t border-line-soft py-24 md:py-40"
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
    </section>
  );
}
