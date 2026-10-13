import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SPR Travels | Reliable, Comfortable, Always With You",
  description:
    "SPR Travels provides premium corporate IT employee transportation, Chennai airport transfers, and customized outstation tour packages across South India.",
  keywords: [
    "SPR Travels",
    "Chennai Airport Taxi",
    "Corporate Transport Chennai",
    "Outstation Cabs Tamil Nadu",
    "Innova Crysta Rental Chennai",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 selection:bg-[#d99824] selection:text-white">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
