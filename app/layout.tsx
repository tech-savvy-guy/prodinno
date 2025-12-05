import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ProdInno | Soham Datta",
  description: "A modern website template built with Next.js, TypeScript, and Tailwind CSS. Features dark theme, animations, and responsive design.",
  authors: [
    {
      name: "Soham Datta",
      url: "www.sohamdatta.com",
    },
  ],
  openGraph: {
    title: "ProdInno | Soham Datta",
    description: "A modern website template built with Next.js, TypeScript, and Tailwind CSS. Features dark theme, animations, and responsive design.",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "ProdInno Website Template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProdInno | Soham Datta",
    description: "A modern website template built with Next.js, TypeScript, and Tailwind CSS.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
