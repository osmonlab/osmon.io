import type { MetadataRoute } from "next";
import { journalEntries } from "@/lib/journal";

const base = "https://osmon.io";

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
    ...journalEntries.map((entry) => ({
      url: `${base}/journal/${entry.slug}`,
      lastModified: new Date(entry.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
