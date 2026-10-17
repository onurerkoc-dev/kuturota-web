import type { Metadata } from "next";

export const siteUrl = "https://kuturota.onurerkoc.dev";

const shareImage = {
  url: `${siteUrl}/og/kuturota.png`,
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "KutuRota — Yeni başlangıçlara güvenle taşının. Taşınma kolileriyle hazırlanmış bir yaşam alanı.",
};

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = new URL(path, siteUrl).href;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "KutuRota",
      locale: "tr_TR",
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: shareImage.url, alt: shareImage.alt }],
    },
  };
}
