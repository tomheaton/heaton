import "@/styles/globals.css";
import type { Metadata } from "next";
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
  themeColor: "#000000",
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
  viewport: "width=device-width, initial-scale=1",
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Heaton",
  },
  // icons: {
  //   apple: "/apple-touch-icon.png",
  // },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
