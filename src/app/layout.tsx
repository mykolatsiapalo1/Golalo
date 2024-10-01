import "./globals.css";
import favicon from "./favicon.svg";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/core/Header/Header";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Golalo",
  description: "Golalo app",
  icons: [favicon.src],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
