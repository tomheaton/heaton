import type { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
  return {
    sitemap: "https://heaton.one/sitemap.xml",
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}
