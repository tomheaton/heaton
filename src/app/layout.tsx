import "@/styles/globals.css";
import React from "react";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <title>heaton</title>
        <meta name="description" content="heaton" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
