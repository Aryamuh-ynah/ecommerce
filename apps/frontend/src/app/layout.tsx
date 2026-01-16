import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevShop - Modern E-Commerce",
  description: "E-commerce platform built with Next.js and DevOps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <footer className="border-t mt-12 py-8 text-center text-gray-600">
          <p>DevShop E-Commerce • Built with Next.js & DevOps</p>
          <p className="mt-2 text-sm">
            Status: <span className="text-green-600">Operational</span>
          </p>
        </footer>
      </body>
    </html>
  );
}
