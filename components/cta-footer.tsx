import { Reveal } from "@/components/reveal";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function Cta() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-40"
    >
      {/* ambient sky wash — bleeds beyond the section into the footer; mask fades to transparent inside the viewport so no edges show */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-[10%] -bottom-[20%] z-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 50% 55% at 45% 50%, #000 0%, #000 25%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 50% 55% at 45% 50%, #000 0%, #000 25%, transparent 75%)",
        }}
      >
        <div
          className="osmon-drift absolute left-[45%] top-[50%] h-[80vw] max-h-[900px] w-[80vw] max-w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(61,168,255,0.32) 0%, rgba(61,168,255,0.16) 35%, rgba(61,168,255,0) 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 25% 22% at 70% 30%, rgba(61,168,255,0.14), transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-(--container-wide) px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
            07 — Get in touch
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
