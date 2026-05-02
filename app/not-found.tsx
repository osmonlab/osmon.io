import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden pt-32 pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="osmon-drift absolute left-1/2 top-1/2 h-[55vw] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky/[0.10] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-(--container-narrow) px-6 text-center md:px-10">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
          404 · sky&rsquo;s the limit
        </p>
        <h1 className="mt-6 text-balance font-serif text-[clamp(2.75rem,8vw,7rem)] leading-[0.98] tracking-[-0.03em] text-ink">
          Nothing at this <span className="font-light italic">altitude</span>.
        </h1>
        <p className="mx-auto mt-8 max-w-md text-[1.0625rem] leading-[1.65] text-ink-muted">
          The page you&rsquo;re looking for either moved, was never written, or
          is still drifting somewhere out there. Let&rsquo;s get you back on
          ground.
        </p>
        <Link
          href="/"
          className="group mt-10 inline-flex h-12 items-center gap-2 rounded-md bg-ink px-6 text-[0.9375rem] font-medium text-canvas transition-colors hover:bg-ink-soft active:scale-[0.98]"
        >
          <ArrowLeft
            size={16}
            weight="bold"
            className="transition-transform group-hover:-translate-x-0.5"
          />
          Take me home
        </Link>
      </div>
    </section>
  );
}
