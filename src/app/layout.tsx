import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JOMATO",
  description: "New Era of Food Delivery App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={(inter as any).className}>{children}</body>
    </html>
  );
}
