import type { Metadata, Viewport } from "next";
import React from "react";
import "./globals.css";
import { AppMetadata } from "@/data/AppMetadata";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = { ...AppMetadata };
export const viewport: Viewport = {
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ThemeProvider attribute="class">
          <Header />
          <div className="">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
