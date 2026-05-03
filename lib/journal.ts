export type JournalEntry = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  read: string;
  topic: string;
};

export const journalEntries: JournalEntry[] = [
  {
    slug: "the-thinnest-layer",
    title: "The thinnest layer between people and the model",
    dek:
      "We&rsquo;ve been building agent surfaces for two years and the same lesson keeps surfacing — make the affordances obvious, hide the orchestration, and let people see when the model isn&rsquo;t sure.",
    date: "2026-04-22",
    read: "8 min",
    topic: "Surface design",
  },
  {
    slug: "evals-are-the-spec",
    title: "The eval suite is the spec, not the test",
    dek:
      "If your evals can be satisfied without solving the problem, the spec is wrong. A working note on writing evals that actually constrain the system.",
    date: "2026-03-30",
    read: "11 min",
    topic: "Evaluation",
  },
  {
    slug: "agents-on-call",
    title: "What it looks like to put an agent on call",
    dek:
      "Cost ceilings, fallback paths, replay tooling, and the org changes nobody warned us about. A practical writeup from one engagement.",
    date: "2026-03-04",
    read: "14 min",
    topic: "Operations",
  },
  {
    slug: "writing-tools-the-model-actually-uses",
    title: "Writing tools the model actually uses",
    dek:
      "Tool descriptions are prompts. Argument schemas are prompts. Most teams underweight both. Five rewrites that doubled tool-use accuracy.",
    date: "2026-02-12",
    read: "9 min",
    topic: "Tool use",
  },
  {
    slug: "ceilings",
    title: "Ceilings",
    dek:
      "Why we named the studio osmon — the Uzbek word for sky — and what we mean when we say the ceiling is what matters.",
    date: "2026-01-08",
    read: "5 min",
    topic: "Studio",
  },
];
