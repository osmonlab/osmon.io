import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're trying to ship. We respond within two working days.",
};

const channels = [
  {
    label: "General",
    handle: "hello@osmon.io",
    href: "mailto:hello@osmon.io",
    body:
      "For new engagements, partnerships, and anything that doesn&rsquo;t fit the buckets below.",
  },
  {
    label: "Engineering",
    handle: "build@osmon.io",
    href: "mailto:build@osmon.io",
    body:
      "Going deep on a technical question, an integration, or a working session — start here.",
  },
  {
    label: "Press &amp; speaking",
    handle: "press@osmon.io",
    href: "mailto:press@osmon.io",
    body:
      "Interviews, podcasts, conference invitations, and student outreach.",
  },
];

const fitChecks = [
  "You have a real product and real users — or you&rsquo;re days away from both.",
  "An agent is a means to an outcome, not the outcome itself.",
  "You can write the eval that decides whether the system works.",
  "You&rsquo;re allergic to demo-ware.",
];

const briefHints = [
  "What you&rsquo;re trying to ship — one paragraph",
  "Who it&rsquo;s for, and how you&rsquo;ll know it works",
  "Where it sits in your stack today",
  "When you&rsquo;d ideally start",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Tell us what you&rsquo;re{" "}
            <span className="font-light italic">trying to ship</span>.
          </>
        }
        lede="We respond within two working days. Most engagements start with a 30-minute call where we ask the questions below."
      />

      <section className="relative py-16 md:py-24">
        <div className="mx-auto grid max-w-(--container-wide) gap-16 px-6 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-5">
            <div className="space-y-8">
              <div>
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
                  Direct
                </p>
                <h2 className="mt-3 font-serif text-[clamp(1.5rem,3vw,2.25rem)] leading-tight tracking-[-0.015em] text-ink">
                  Email lands faster than any form.
                </h2>
                <p className="mt-4 max-w-md text-[1rem] leading-[1.65] text-ink-muted">
                  We read every message that lands in these inboxes. No
                  filters, no autoresponders, no &ldquo;your case has been
                  opened.&rdquo;
                </p>
              </div>

              <ul className="space-y-5 border-t border-line-soft pt-6">
                {channels.map((c) => (
                  <li key={c.handle} className="group">
                    <a
                      href={c.href}
                      className="block space-y-1 transition-colors"
                    >
                      <p
                        className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-muted"
                        dangerouslySetInnerHTML={{ __html: c.label }}
                      />
                      <p className="flex items-center gap-2 font-mono text-[1rem] text-ink underline decoration-line underline-offset-[5px] group-hover:decoration-sky group-hover:text-sky-deep">
                        {c.handle}
                        <ArrowUpRight size={14} weight="bold" />
                      </p>
                      <p
                        className="max-w-sm text-[0.9375rem] leading-[1.6] text-ink-muted"
                        dangerouslySetInnerHTML={{ __html: c.body }}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120} className="md:col-span-7">
            <div className="rounded-xl border border-line bg-canvas p-8 md:p-10">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
                What to write
              </p>
              <h2 className="mt-3 font-serif text-[clamp(1.5rem,3vw,2rem)] leading-tight tracking-[-0.015em] text-ink">
                A short message wins over a long form.
              </h2>
              <p className="mt-4 text-[1rem] leading-[1.65] text-ink-muted">
                Skip the NDA dance and the templated brief. A paragraph that
                covers these four things is enough to know if there&rsquo;s a
                fit.
              </p>

              <ol className="mt-8 space-y-3 border-t border-line-soft pt-6">
                {briefHints.map((b, i) => (
                  <li key={b} className="flex items-start gap-4">
                    <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-[0.9375rem] leading-[1.6] text-ink-soft"
                      dangerouslySetInnerHTML={{ __html: b }}
                    />
                  </li>
                ))}
              </ol>

              <a
                href="mailto:hello@osmon.io?subject=osmon%20—%20new%20brief&body=Hi%20osmon%2C%0A%0A1.%20What%20we%E2%80%99re%20shipping%3A%0A%0A2.%20Who%20it%E2%80%99s%20for%2C%20how%20we%E2%80%99ll%20know%20it%20works%3A%0A%0A3.%20Where%20it%20sits%20in%20our%20stack%20today%3A%0A%0A4.%20Ideal%20start%3A%0A%0AThanks%2C%0A"
                className="group mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-ink pl-5 pr-3 text-[0.9375rem] font-medium text-canvas shadow-[0_2px_0_rgba(11,15,20,0.06),0_8px_28px_-12px_rgba(11,15,20,0.35)] transition-colors hover:bg-ink-soft active:scale-[0.98]"
              >
                <EnvelopeSimple size={16} weight="bold" />
                Open a draft to hello@osmon.io
                <span className="inline-flex size-7 items-center justify-center rounded-full bg-canvas/12 transition-colors group-hover:bg-canvas/20">
                  <ArrowUpRight size={12} weight="bold" />
                </span>
              </a>

              <p className="mt-5 text-[0.75rem] leading-relaxed text-ink-muted">
                Opens your default mail client with the prompts pre-filled.
                Edit and send.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-20 md:py-32">
        <div className="mx-auto max-w-(--container-wide) px-6 md:px-10">
          <div className="mb-12 grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
                Fit check
              </p>
            </Reveal>
            <Reveal delay={80} className="md:col-span-8">
              <h2 className="text-balance font-serif text-[clamp(1.875rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-ink">
                Honest signals before you write.
              </h2>
            </Reveal>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
            {fitChecks.map((c, i) => (
              <Reveal key={c} delay={i * 60} className="bg-canvas p-8 md:p-10">
                <p className="font-mono text-[0.72rem] tracking-[0.16em] text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p
                  className="mt-4 text-[1rem] leading-[1.6] text-ink-soft"
                  dangerouslySetInnerHTML={{ __html: c }}
                />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
