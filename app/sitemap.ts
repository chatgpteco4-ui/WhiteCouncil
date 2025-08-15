// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://whitecouncil.vercel.app";
  return [
    { url: `${base}/`, priority: 1.0, changeFrequency: "weekly" },
    { url: `${base}/#services`, priority: 0.8 },
    { url: `${base}/#proof`, priority: 0.7 },
    { url: `${base}/#pricing`, priority: 0.7 },
    { url: `${base}/#faq`, priority: 0.6 },
    { url: `${base}/#contact`, priority: 0.9 },
  ];
}
