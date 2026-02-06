import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";

export const metadata: Metadata = {
  title: "Clint Hasse | Musician & Photographer",
  description: "Portfolio of Clint Hasse - exploring the intersection of music and visual art through photography and sound.",
  keywords: ["Clint Hasse", "musician", "photographer", "portfolio", "music", "photography"],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SessionProvider>
          <div className="noise-overlay" aria-hidden="true" />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
