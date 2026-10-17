import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/evden-eve-nakliyat",
    "/ofis-tasima",
    "/sehirler-arasi-nakliyat",
    "/hakkimizda",
    "/teklif-al",
  ].map((path) => ({ url: new URL(path, siteUrl).href }));
}
