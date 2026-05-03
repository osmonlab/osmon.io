"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center px-6 py-32 text-center">
      <div className="mx-auto max-w-xl">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
          Error
        </p>
        <h1 className="mt-6 text-balance font-serif text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-ink">
          Something broke on this page.
        </h1>
        <p className="mt-6 text-pretty text-[1rem] leading-[1.7] text-ink-muted">
          The studio has been notified. You can try again, or head back to the
          home page.
        </p>
        {error.digest ? (
          <p className="mt-4 font-mono text-[0.7rem] text-ink-muted">
            ref · {error.digest}
          </p>
        ) : null}
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-10 items-center rounded-full bg-ink px-5 text-[0.8125rem] font-medium text-canvas transition-colors hover:bg-ink-soft"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex h-10 items-center rounded-full border border-line px-5 text-[0.8125rem] font-medium text-ink transition-colors hover:border-ink"
          >
            Go home
          </Link>
        </div>
      </div>
    </section>
  );
}
