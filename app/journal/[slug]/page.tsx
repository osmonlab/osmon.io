import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

type Article = {
  title: string;
  dek: string;
  date: string;
  read: string;
  topic: string;
  body: ReadonlyArray<
    | { kind: "p"; text: string }
    | { kind: "h2"; text: string }
    | { kind: "quote"; text: string; cite?: string }
    | { kind: "ul"; items: string[] }
    | { kind: "code"; text: string }
  >;
  draft?: boolean;
};

const articles: Record<string, Article> = {
  "the-thinnest-layer": {
    title: "The thinnest layer between people and the model",
    dek:
      "Make the affordances obvious, hide the orchestration, and let people see when the model isn't sure.",
    date: "2026-04-22",
    read: "8 min",
    topic: "Surface design",
    body: [
      {
        kind: "p",
        text:
          "Almost every agent surface we&rsquo;ve shipped has been rebuilt at least once. The first version is always too clever — multi-pane, draggable, an inspector view, a debug drawer. The version that survives a real user base is dramatically thinner: an input, an output, and a way to back out gracefully.",
      },
      { kind: "h2", text: "What people actually look at" },
      {
        kind: "p",
        text:
          "When we instrument an agent surface, three things consistently dominate the gaze data: the input, the most recent output, and any visible status. Everything else — provenance, citations, intermediate steps — is read on demand, almost never on the first pass.",
      },
      {
        kind: "p",
        text:
          "This sounds obvious until you watch a designer fight it. The instinct to surface complexity is strong, especially in B2B tooling where complexity has historically been a sign of competence. With agents, the opposite is true. Every visible artifact of orchestration is something the user has to evaluate, and the cost of that evaluation is enormous when the system might be wrong.",
      },
      {
        kind: "quote",
        text:
          "Hide the orchestration. Show the certainty. Make the back-out free.",
      },
      { kind: "h2", text: "Three rules we don't break" },
      {
        kind: "ul",
        items: [
          "Affordances are first-class: every action the model can take has a corresponding visible affordance for the user, even when the model would never need it. The user needs the option, not the action.",
          "Confidence is rendered, not narrated: don&rsquo;t write &lsquo;I&rsquo;m not sure&rsquo; — show a confidence band, a citation count, a delta. Words about uncertainty are read as hedge. Visual signals are read as fact.",
          "Reverting is one click: undo, copy, regenerate, abandon. If any of these takes more than one motion, users stop trusting the surface and start preferring the form.",
        ],
      },
      { kind: "h2", text: "What we let through to the user" },
      {
        kind: "p",
        text:
          "The minimum viable agent surface, in our experience: the input it&rsquo;s acting on, the output it produced, the citations it leaned on, and an undo. That&rsquo;s it. Tool calls, retrieval scores, system prompts, intermediate reasoning — none of it goes in the default view. It belongs in a deep panel that engineers and power users can summon, not in the path the median user walks every day.",
      },
      {
        kind: "p",
        text:
          "We&rsquo;ve had clients push back on this. The product team wants to show the work. The engineering team wants the trace visible for debugging. The compliance team wants every step legible. All three are reasonable; none of them belong in the surface the user sees first. Build the deep view — it&rsquo;s necessary — but build it as a route, not a column.",
      },
      { kind: "h2", text: "When uncertainty leaks through" },
      {
        kind: "p",
        text:
          "Models hedge. Users read hedging as evasion. The fix isn&rsquo;t to suppress uncertainty — it&rsquo;s to convert it. Replace &lsquo;I&rsquo;m not certain about this&rsquo; with a small visual band: green when the citation graph is dense, amber when it&rsquo;s thin, red when the model is operating outside its retrieval. Users learn the band in about two sessions and read it faster than they read text. Hedging is a sentence; a colour is a glance.",
      },
      {
        kind: "p",
        text:
          "The same is true for cost, latency, and tool failure. Anything the system needs to communicate continuously belongs in the visual frame. Anything it needs to communicate occasionally belongs in a toast or a panel. Anything it needs to communicate rarely belongs in a log file the user will never open.",
      },
      { kind: "h2", text: "What we got wrong" },
      {
        kind: "p",
        text:
          "Early on we built a surface with a streaming &lsquo;reasoning&rsquo; column. The team loved it. Users hated it. The reasoning was almost always correct, which made it boring; on the rare occasion it was wrong, the user had no leverage to fix it. We replaced it with a single inline citation chip and the satisfaction score doubled inside a week. The reasoning column still exists — it lives behind a keyboard shortcut for the engineers who built the system. Nobody else needs it.",
      },
      {
        kind: "p",
        text:
          "The thinnest layer is harder to design than the thickest. It demands that you decide, on behalf of the user, what is and isn&rsquo;t worth their attention, and then commit. Most teams flinch at that decision and add a toggle. The toggle is the surface saying it doesn&rsquo;t know what to do. Make the call.",
      },
    ],
  },

  ceilings: {
    title: "Ceilings",
    dek:
      "Why we named the studio osmon — the Uzbek word for sky — and what we mean when we say the ceiling is what matters.",
    date: "2026-01-08",
    read: "5 min",
    topic: "Studio",
    body: [
      {
        kind: "p",
        text:
          "Naming things is the part of starting a studio nobody warns you about. We had a list of forty-seven words pinned to a wall in Tashkent for a month before it became obvious which one was right. The list had a lot of obvious candidates — verbs about building, verbs about acceleration, verbs about the future. We crossed all of them off, eventually, because they were saying the same thing in slightly different fonts.",
      },
      {
        kind: "p",
        text:
          "Then somebody wrote <code>osmon</code> in the corner of the wall. It stayed.",
      },
      { kind: "h2", text: "What the word names" },
      {
        kind: "p",
        text:
          "Osmon is the Uzbek word for sky. It comes from Persian, the way most words do in this part of the world. We chose it for the absence of a thing — a sky has no ceiling. We work in a field where almost everything else does.",
      },
      {
        kind: "p",
        text:
          "This is meant to read as romantic, and it isn&rsquo;t. The point isn&rsquo;t aspiration. It&rsquo;s an honest observation about the constraint we&rsquo;re trying to disappear.",
      },
      { kind: "h2", text: "Where ceilings come from" },
      {
        kind: "p",
        text:
          "Most software systems we look at are running into one of three ceilings, often more than one at the same time.",
      },
      {
        kind: "p",
        text:
          "The first is the <strong>model ceiling</strong> — what the underlying language model can actually do, accurately, on the task in front of it. This ceiling moves. A capability that wasn&rsquo;t there in March is reliable by September. Building against it is a moving target by definition, and most of the engineering practice is dealing with the fact that the ceiling shifts mid-project.",
      },
      {
        kind: "p",
        text:
          "The second is the <strong>team ceiling</strong> — what the people writing the code have already done. This one barely moves at all. A team that hasn&rsquo;t shipped an evaluation suite under real load won&rsquo;t ship one because they read about evals. They have to ship one, fail with it, ship the next, and the third one will be the one that works. Reading about ceilings doesn&rsquo;t lower them.",
      },
      {
        kind: "p",
        text:
          "The third is the <strong>organizational ceiling</strong> — what the surrounding company will actually let you do. Procurement wants a SOC 2 attestation. Legal wants the agent unable to mention a competitor. Sales wants to demo it Wednesday. The organizational ceiling is invisible until you press on it; then it&rsquo;s the only thing that matters, and it usually matters more than the other two combined.",
      },
      {
        kind: "quote",
        text:
          "A team that builds without naming the ceiling they&rsquo;re working under is a team that ships into one and is surprised.",
      },
      { kind: "h2", text: "The discipline" },
      {
        kind: "p",
        text:
          "Most of what we do at osmon, day to day, is ceiling identification. We sit down with a team that wants an agent. We ask them which of the three is closest. Almost nobody knows. They&rsquo;ve been arguing about a feature when they should have been arguing about a constraint.",
      },
      {
        kind: "p",
        text:
          "If the model ceiling is closest, the right move is usually to wait six weeks and ship into the next capability. We say this even though it costs us a project. If the team ceiling is closest, the right move is to ship something deliberately small enough that the team learns the discipline before the surface area grows. We say this even though smaller projects pay less. If the organizational ceiling is closest, you&rsquo;re not building software yet — you&rsquo;re negotiating, and pretending it&rsquo;s a build is dishonest. We say this and almost always lose the room.",
      },
      {
        kind: "p",
        text:
          "We&rsquo;ve gotten better at saying it earlier. The first call goes much faster than it used to.",
      },
      { kind: "h2", text: "What ceiling-aware work looks like" },
      {
        kind: "p",
        text:
          "Three habits show up in every engagement.",
      },
      {
        kind: "ul",
        items: [
          "Naming. The first paragraph of every internal doc names which ceiling we&rsquo;re working under. It changes through the project; we update it. The doc is incoherent without it.",
          "Asymmetric pessimism. We assume the model ceiling will rise faster than expected and the organizational ceiling will fall slower. This biases us against clever, model-dependent designs and toward designs that work even when the model gets stronger or the lawyers get nervous.",
          "Refusal to deliver across a ceiling we haven&rsquo;t named. If we&rsquo;re shipping something we know will hit an organizational wall in three months, we say so on day one. We&rsquo;ve lost work this way. We&rsquo;ve avoided most of the project disasters our peers tell us about over drinks.",
        ],
      },
      { kind: "h2", text: "Why a sky" },
      {
        kind: "p",
        text:
          "The reason we named the studio osmon, then, is that the word names what we&rsquo;re trying to do more honestly than anything else we tried.",
      },
      {
        kind: "p",
        text:
          "A studio called Velocity would be lying — we slow some teams down on purpose. A studio called Frontier would be lying — most of what we ship has been done before, just not by this team. A studio called Reliable would be lying — agents fail, and we plan for it.",
      },
      {
        kind: "quote",
        text:
          "A sky is the thing above the ceilings.",
      },
      {
        kind: "p",
        text:
          "When we do our job, the ceilings stop mattering for a while. The team can see further than it could yesterday. That&rsquo;s the only thing we promise; it turns out to be enough.",
      },
      { kind: "h2", text: "Closing" },
      {
        kind: "p",
        text:
          "We are eight engineers, five in Tashkent and three across Europe and North America. We work on small projects. We turn down most of the work we&rsquo;re offered, not because we&rsquo;re picky, but because most of it is a fight with the wrong ceiling. When that&rsquo;s the case, we say so on the first call, recommend somebody better suited to the fight, and wait for the work that&rsquo;s actually about a sky.",
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article)
    return {
      title: "Journal",
      alternates: { canonical: `/journal/${slug}` },
    };
  return {
    title: article.title,
    description: article.dek,
    alternates: { canonical: `/journal/${slug}` },
    openGraph: {
      title: article.title,
      description: article.dek,
      type: "article",
      publishedTime: article.date,
      url: `https://osmon.io/journal/${slug}`,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.dek,
      images: ["/opengraph-image"],
    },
  };
}

export function generateStaticParams() {
  return Array.from(knownSlugs).map((slug) => ({ slug }));
}

export default async function JournalEntry({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    // For slugs in the journal index that aren't drafted yet,
    // render a typography-correct stub instead of a 404.
    if (knownSlugs.has(slug)) {
      return <DraftStub slug={slug} />;
    }
    notFound();
  }

  const url = `https://osmon.io/journal/${slug}`;
  const cleanDek = article.dek.replace(/&[a-z]+;/g, "'");
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        headline: article.title,
        description: cleanDek,
        datePublished: article.date,
        dateModified: article.date,
        url,
        mainEntityOfPage: url,
        inLanguage: "en",
        keywords: article.topic,
        author: { "@id": "https://osmon.io/#org" },
        publisher: { "@id": "https://osmon.io/#org" },
        image: "https://osmon.io/opengraph-image",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://osmon.io",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Journal",
            item: "https://osmon.io/journal",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <article className="relative pt-40 pb-32 md:pt-48 md:pb-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40vh]"
      >
        <div className="osmon-drift absolute right-[10%] top-1/2 h-[35vw] w-[35vw] -translate-y-1/2 rounded-full bg-sky/[0.10] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-(--container-narrow) px-6 md:px-10">
        <Reveal>
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 font-mono text-[0.8125rem] text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft size={14} weight="bold" />
            All entries
          </Link>
        </Reveal>

        <header className="mt-10 space-y-6 border-b border-line-soft pb-12">
          <Reveal delay={80}>
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-muted">
              {article.topic}
              <span className="mx-2">·</span>
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="mx-2">·</span>
              {article.read}
            </p>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="text-balance font-serif text-[clamp(2rem,5vw,4rem)] leading-[1.08] tracking-[-0.025em] text-ink">
              {article.title}
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="max-w-3xl text-pretty text-[1.0625rem] leading-[1.65] text-ink-muted md:text-[1.1875rem]">
              {article.dek}
            </p>
          </Reveal>
        </header>

        <Reveal delay={120}>
          <div className="mt-12 space-y-8 text-[1.0625rem] leading-[1.75] text-ink-soft md:text-[1.125rem]">
            {article.body.map((b, i) => {
              if (b.kind === "h2")
                return (
                  <h2
                    key={i}
                    className="mt-14 font-serif text-[clamp(1.375rem,2.4vw,1.875rem)] leading-tight tracking-[-0.015em] text-ink"
                  >
                    {b.text}
                  </h2>
                );
              if (b.kind === "quote")
                return (
                  <blockquote
                    key={i}
                    className="my-10 border-l border-sky pl-6 font-serif text-[clamp(1.25rem,2.4vw,1.625rem)] italic leading-[1.4] text-ink"
                  >
                    {b.text}
                    {b.cite ? (
                      <cite className="mt-3 block font-sans not-italic text-[0.875rem] text-ink-muted">
                        — {b.cite}
                      </cite>
                    ) : null}
                  </blockquote>
                );
              if (b.kind === "ul")
                return (
                  <ul key={i} className="space-y-3 pl-0">
                    {b.items.map((it, j) => (
                      <li
                        key={j}
                        className="grid grid-cols-[auto_1fr] gap-4 border-l border-line-soft pl-5"
                        dangerouslySetInnerHTML={{
                          __html: `<span class="font-mono text-sm text-ink-muted pt-1">${String(
                            j + 1,
                          ).padStart(2, "0")}</span><span>${it}</span>`,
                        }}
                      />
                    ))}
                  </ul>
                );
              if (b.kind === "code")
                return (
                  <pre
                    key={i}
                    className="overflow-x-auto rounded-md border border-line bg-bone p-5 font-mono text-[0.8125rem] leading-relaxed text-ink-soft"
                  >
                    <code>{b.text}</code>
                  </pre>
                );
              return (
                <p
                  key={i}
                  dangerouslySetInnerHTML={{ __html: b.text }}
                />
              );
            })}
          </div>
        </Reveal>

        <Reveal>
          <footer className="mt-20 border-t border-line-soft pt-10">
            <p className="text-[0.875rem] text-ink-muted">
              Liked this? We send a short note when we publish.{" "}
              <Link
                href="/contact"
                className="text-ink underline decoration-line underline-offset-[4px] transition hover:text-sky-deep hover:decoration-sky"
              >
                Get in touch
              </Link>
              .
            </p>
          </footer>
        </Reveal>
      </div>
    </article>
  );
}

const knownSlugs = new Set([
  "the-thinnest-layer",
  "evals-are-the-spec",
  "agents-on-call",
  "writing-tools-the-model-actually-uses",
  "ceilings",
]);

function DraftStub({ slug }: { slug: string }) {
  const human = slug
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ");
  return (
    <article className="relative grid min-h-[70vh] place-items-center pt-40 pb-32 md:pt-48">
      <div className="mx-auto max-w-(--container-narrow) px-6 text-center md:px-10">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
          Drafting
        </p>
        <h1 className="mt-6 text-balance font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.025em] text-ink">
          {human}
        </h1>
        <p className="mx-auto mt-8 max-w-md text-[1rem] leading-[1.7] text-ink-muted">
          This entry is being written. We publish when we&rsquo;ve actually
          learned something — not on a schedule.
        </p>
        <Link
          href="/journal"
          className="mt-10 inline-flex items-center gap-2 font-mono text-[0.875rem] text-ink underline decoration-line underline-offset-[5px] transition hover:text-sky-deep hover:decoration-sky"
        >
          <ArrowLeft size={14} weight="bold" />
          Back to journal
        </Link>
      </div>
    </article>
  );
}
