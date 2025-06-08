import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Internet Roadtrip: You Steer, the Internet Goes Wild!",
  description: "Join Neal Agarwal's chaotic internet road trip! Vote every ten seconds to steer, change radio, and reach hilariously random destinations. Expect the unexpected!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1232219942277862"
        crossOrigin="anonymous"></script>
        <link rel="canonical" href="https://internetroadtrip.net/" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleTagManager  gtmId="G-T2YBNJG28D" />
      </body>
    </html>
  );
}
