import type { Metadata } from "next";
import { Work_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-work-sans",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "APPEXE DEVELOPMENTS LTD | Premium Construction & Engineering",
  description: "Building the future with integrity – commercial, residential & civil engineering.",
  metadataBase: new URL("https://appexedevelopments.co.uk"),
  openGraph: {
    title: "APPEXE DEVELOPMENTS LTD | Premium Construction & Engineering",
    description: "Building Spaces. Creating Futures. Quality construction, built on trust, delivering excellence.",
    url: "https://appexedevelopments.co.uk",
    siteName: "APPEXE DEVELOPMENTS LTD",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "APPEXE DEVELOPMENTS LTD – Building Spaces. Creating Futures.",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "APPEXE DEVELOPMENTS LTD | Premium Construction & Engineering",
    description: "Building Spaces. Creating Futures. Quality construction, built on trust, delivering excellence.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${workSans.variable} ${inter.variable} bg-[#0a0a0a] text-[#ededed] antialiased`}>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}