import type { MetadataRoute } from "next";
import { artists } from "@/data/artists";

import {siteUrl as baseUrl} from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/artists", "/booking", "/records", "/about", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
    })
  );

  const artistRoutes = artists.map((a) => ({
    url: `${baseUrl}/artists/${a.slug}`,
  }));

  return [...staticRoutes, ...artistRoutes];
}
