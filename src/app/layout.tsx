import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Heeo Fitness — Ahmedabad's Premier Fitness Centre | Ambli Bopal Road",
  description:
    "Transform your body at Heeo Fitness, Ahmedabad's top fitness centre on Ambli Bopal Road. Strength, HIIT, Yoga, Boxing, Personal Training & more. Join today — first session free.",
  keywords: "fitness centre Ahmedabad, gym Ambli Bopal Road, Heeo Fitness, personal trainer Ahmedabad, HIIT classes Ahmedabad",
  openGraph: {
    title: "Heeo Fitness — Become Unstoppable",
    description: "Ahmedabad's most motivated fitness community. World-class trainers, elite equipment, real results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-[#080808] antialiased">
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
