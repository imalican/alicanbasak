import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import { Providers } from "./providers";
import clsx from "clsx";

// Dinamik import ile header ve footer'ı lazy load yapalım
const Header = dynamic(() => import("@/components/layout/Header"), {
  ssr: true,
});

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: true,
});

export const metadata: Metadata = {
  title: "Next.js + NextUI",
  description: "Beautiful, fast and modern React UI library.",
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
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&f[]=space-grotesk@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={clsx("min-h-screen bg-background antialiased font-satoshi")}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Header />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
