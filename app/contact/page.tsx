import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

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
    body: "For new engagements, partnerships, and anything that doesn't fit the buckets below.",
  },
  {
    label: "Engineering",
    handle: "build@osmon.io",
    href: "mailto:build@osmon.io",
    body: "Going deep on a technical question, an integration, or a working session — start here.",
  },
  {
    label: "Press & speaking",
    handle: "press@osmon.io",
    href: "mailto:press@osmon.io",
    body: "Interviews, podcasts, conference invitations, and student outreach.",
  },
];

const fitChecks = [
  "You have a real product and real users — or you're days away from both.",
  "An agent is a means to an outcome, not the outcome itself.",
  "You can write the eval that decides whether the system works.",
  "You're allergic to demo-ware.",
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
                  Email is faster than the form.
                </h2>
                <p className="mt-4 max-w-md text-[1rem] leading-[1.65] text-ink-muted">
                  We read everything that lands in these inboxes. No filters,
                  no autoresponders, no &ldquo;your case has been opened.&rdquo;
                </p>
              </div>

              <ul className="space-y-5 border-t border-line-soft pt-6">
                {channels.map((c) => (
                  <li key={c.handle} className="group">
                    <a
                      href={c.href}
                      className="block space-y-1 transition-colors"
                    >
                      <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-muted">
                        {c.label}
                      </p>
                      <p className="flex items-center gap-2 font-mono text-[1rem] text-ink underline decoration-line underline-offset-[5px] group-hover:decoration-sky group-hover:text-sky-deep">
                        {c.handle}
                        <ArrowUpRight size={14} weight="bold" />
                      </p>
                      <p className="max-w-sm text-[0.9375rem] leading-[1.6] text-ink-muted">
                        {c.body}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120} className="md:col-span-7">
            <form
              className="space-y-8 rounded-xl border border-line bg-canvas p-8 md:p-10"
              action="mailto:hello@osmon.io"
              method="post"
              encType="text/plain"
            >
              <div>
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
                  Or write here
                </p>
                <h2 className="mt-3 font-serif text-[clamp(1.5rem,3vw,2rem)] leading-tight tracking-[-0.015em] text-ink">
                  A short message lands the same place.
                </h2>
              </div>

              <Field label="Your name" name="name" placeholder="Lena Asanova" />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="lena@company.com"
                required
              />
              <Field
                label="Company"
                name="company"
                placeholder="Northwind Robotics"
              />

              <div className="space-y-2">
                <label
                  htmlFor="scope"
                  className="block font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-muted"
                >
                  What are you trying to ship?
                </label>
                <textarea
                  id="scope"
                  name="scope"
                  rows={5}
                  required
                  placeholder="One paragraph is enough. Skip the NDA dance."
                  className="w-full rounded-md border border-line bg-canvas px-4 py-3 text-[0.9375rem] leading-relaxed text-ink placeholder:text-ink-muted/60 focus:border-sky focus:outline-none"
                />
              </div>

              <div className="space-y-3 border-t border-line-soft pt-6">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    name="exploration"
                    className="mt-1 size-4 cursor-pointer accent-[var(--color-sky-deep)]"
                  />
                  <span className="text-[0.9375rem] leading-relaxed text-ink-soft">
                    I&rsquo;m exploring — a thirty-minute call before either of us
                    commits is fine.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="group inline-flex h-12 items-center gap-2 rounded-md bg-ink px-6 text-[0.9375rem] font-medium text-canvas transition-colors hover:bg-ink-soft active:scale-[0.98]"
              >
                Send the brief
                <ArrowUpRight
                  size={16}
                  weight="bold"
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

              <p className="text-[0.75rem] leading-relaxed text-ink-muted">
                We don&rsquo;t track the form. Submissions arrive as a plain
                email; we never sync this anywhere.
              </p>
            </form>
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
                <p className="mt-4 text-[1rem] leading-[1.6] text-ink-soft">
                  {c}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-muted"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-md border border-line bg-canvas px-4 py-3 text-[0.9375rem] text-ink placeholder:text-ink-muted/60 focus:border-sky focus:outline-none"
      />
    </div>
  );
}
