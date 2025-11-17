import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Topbar from "@/Components/Topbar";

// make sure folder name is lowercase

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Choongshin",
  description: "A personalized gift shop that crafts unique and memorable gifts for every occasion.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-background text-foreground antialiased`}>
        <div className="flex flex-col min-h-screen">
          <header className="fixed top-0 left-0 right-0 z-50 w-full">
            <Topbar />
            <Navbar />
          </header>
          <main className="mt-31 w-full grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
