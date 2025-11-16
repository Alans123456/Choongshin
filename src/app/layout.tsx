import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Topbar from "@/Components/Topbar";

// make sure folder name is lowercase

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Choongshin",
  description: "a website for a company called choongshin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <header className="fixed top-0 left-0 right-0 z-50 w-full">
            <Topbar />
            <Navbar />
          </header>
          <main className="mt-32 w-full grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
