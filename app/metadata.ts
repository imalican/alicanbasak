import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://alicanbasak.dev"),
  title: {
    default: "Alican Basak",
    template: "%s | Alican Basak",
  },
  description:
    "Full-stack developer specializing in modern web technologies. Building secure and scalable solutions with cutting-edge technologies.",
  openGraph: {
    title: "Alican Basak",
    description:
      "Full-stack developer specializing in modern web technologies.",
    url: "https://alicanbasak.dev",
    siteName: "Alican Basak",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Alican Basak",
    description:
      "Full-stack developer specializing in modern web technologies.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};
