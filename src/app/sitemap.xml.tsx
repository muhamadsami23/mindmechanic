import { MetadataRoute } from "next";

export default function Sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.mindmechanicss.com"; // Fixed: Use correct domain

  const pages = [
    "/",
    "/about",
    "/contact",
    "/services",
    "/therapist",
    "/workshops",
  ];

  return pages.map((page) => ({
    url: `${siteUrl}${page}`,
    lastModified: new Date().toISOString(),
  }));
}
