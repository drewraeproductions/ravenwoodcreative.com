import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Ravenwood Creative — Video Production & Story-Driven Content",
    template: "%s | Ravenwood Creative",
  },
  description:
    "National video production studio specializing in customer case study videos, corporate events, social media content, and paid ad campaigns. 12 years of cinematic storytelling.",
  keywords: [
    "video production",
    "customer case study video",
    "corporate video production",
    "social media video",
    "paid ads video",
    "national video production",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ravenwoodcreative.com",
    siteName: "Ravenwood Creative",
    title: "Ravenwood Creative — Video Production & Story-Driven Content",
    description:
      "National video production studio specializing in customer case study videos, corporate events, and social content.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
