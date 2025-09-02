import type { Metadata } from "next";
import type { ReactNode } from "react";

import { LanguageProvider } from "@/contexts/LanguageContext";

import "./globals.css";

export const metadata: Metadata = {
  title: "Bahram Autohaus - Premium Cars Deutschland",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full overflow-x-hidden">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
