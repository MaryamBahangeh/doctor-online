import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import Header from "@/components/Header";

import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
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
    <html lang="en" className={openSans.className}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
