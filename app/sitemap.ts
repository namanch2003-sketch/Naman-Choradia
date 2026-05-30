import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://namanrch.in", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://namanrch.in/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://namanrch.in/research", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://namanrch.in/ca-final", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://namanrch.in/markets", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://namanrch.in/ai-lab", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://namanrch.in/journal", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://namanrch.in/contact", lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];
}
