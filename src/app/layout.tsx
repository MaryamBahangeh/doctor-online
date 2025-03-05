import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/typography.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight:["100" , "300" , '400','500','700','900']
});

export const metadata: Metadata = {
  title: "Doctor Online",
  description: "Comprehensive doctor search and appointment booking platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />

        <main>{children}</main>

        <p className="tagline">
          Doctor search and appointment booking platform
        </p>

        <Footer />
      </body>
    </html>
  );
}
