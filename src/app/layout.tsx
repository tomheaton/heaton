import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://heaton.one"),
  title: "Heaton",
  description: "Heaton",
  authors: {
    name: "Heaton",
    url: "https://heaton.one",
  },
  keywords: "heaton",
  openGraph: {
    title: "Heaton",
    description: "Heaton",
    type: "website",
    url: "https://heaton.one",
    // images: {
    //   url: "/avatar.jpg",
    //   alt: "Heaton Avatar",
    // },
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
    // card: "summary_large_image",
    // site: "@heaton",
    // creator: "@heaton",
    title: "Heaton",
    description: "Heaton",
    // images: {
    //   url: "/avatar.jpg",
    //   alt: "Heaton Avatar",
    // },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Heaton",
  },
  // icons: {
  //   apple: "/apple-touch-icon.png",
  // },
};

export const viewport: Viewport = {
  themeColor: "#66b193",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
