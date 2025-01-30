import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";

import { Providers } from "./providers";

const Header = dynamic(() => import("@/components/layout/Header"), {
  ssr: true,
});

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: true,
});

export const metadata: Metadata = {
  title: {
    default: "Alican Basak",
    template: "%s | Alican Basak",
  },
  description: "Full-stack developer specializing in modern web technologies.",
  metadataBase: new URL("https://alicanbasak.com"),
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link href="/site.webmanifest" rel="manifest" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&f[]=space-grotesk@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={clsx("min-h-screen bg-background antialiased font-satoshi")}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen">
            <Header />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full mt-24">
              <Footer />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
