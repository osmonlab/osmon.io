import { journalEntries } from "@/lib/journal";

export const dynamic = "force-static";

const decode = (s: string) => s.replace(/&[a-z]+;/g, "'");

export function GET() {
  const entries = journalEntries
    .map(
      (e) =>
        `- [${e.title}](https://osmon.io/journal/${e.slug}): ${decode(e.dek)}`,
    )
    .join("\n");

  const body = `# osmon

> osmon is a studio building agentic software for engineering teams. Based in Tashkent, working remote-first.

## Pages
- [Work](https://osmon.io/work): selected client engagements — production agents, orchestration layers, surfaces around them.
- [About](https://osmon.io/about): studio principles and how we work.
- [Journal](https://osmon.io/journal): field notes on agents, evals, and shipping models in production.
- [Contact](https://osmon.io/contact): hello@osmon.io — we respond within two working days.

## Journal
${entries}

## Contact
- General: hello@osmon.io
- Engineering: build@osmon.io
- Press: press@osmon.io
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
