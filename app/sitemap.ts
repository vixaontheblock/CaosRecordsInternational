import type { MetadataRoute } from "next";
import { artists } from "@/data/artists";

const baseUrl = "https://caosrecords.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/artists", "/booking", "/records", "/about", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })
  );

  const artistRoutes = artists.map((a) => ({
    url: `${baseUrl}/artists/${a.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...artistRoutes];
}
