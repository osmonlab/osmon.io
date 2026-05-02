import type { MetadataRoute } from "next";

const base = "https://osmon.io";

const journalSlugs = [
  "the-thinnest-layer",
  "evals-are-the-spec",
  "agents-on-call",
  "writing-tools-the-model-actually-uses",
  "ceilings",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/work", "/about", "/journal", "/contact"];
  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...journalSlugs.map((slug) => ({
      url: `${base}/journal/${slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
