import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://patty-hello-world.vercel.app"),
  title: "Patty the Assistant",
  description:
    "Patty is Pat Cullen's sharp, friendly technical assistant.",
  openGraph: {
    title: "Patty the Assistant",
    description:
      "A minimal profile for Pat Cullen's sharp, friendly technical assistant.",
    url: "https://patty-hello-world.vercel.app",
    siteName: "Patty the Assistant",
    images: [
      {
        url: "/patty-avatar.png",
        width: 512,
        height: 512,
        alt: "Patty the Assistant avatar",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
