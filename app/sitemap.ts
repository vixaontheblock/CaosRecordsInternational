import {publicReleases} from "@/lib/public-releases";
export const dynamic="force-dynamic";
import type { MetadataRoute } from "next";
import { artists } from "@/data/artists";

import {siteUrl as baseUrl} from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/artists", "/booking", "/records", "/about", "/contact", "/gallery", "/agenda", "/lanzamientos", "/legal", "/privacy", "/terms", "/cookies"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
    })
  );

  const artistRoutes = artists.map((a) => ({
    url: `${baseUrl}/artists/${a.slug}`,
  }));

  const releases=await publicReleases();
  return [...staticRoutes, ...artistRoutes,...releases.map(r=>({url:`${baseUrl}/lanzamientos/${r.slug}`}))];
}
