"use client";
import Link from "next/link";
import {
  Facebook,
  Mail,
  Phone,
  Clock,
  InstagramIcon,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { toast, Toaster } from "sonner";

const baseUrl= process.env.NEXT_PUBLIC_API_URL;

interface Response {
  ok: boolean;
  email?: string[];
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}api/v1/contact/newsletter/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data: Response = await response.json();
      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Subscription successful!");
        setEmail("");
      } else {
        console.error("Subscription failed");
        console.log(data);
        toast.error(data?.email?.[0] || "Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-primary text-white">
      <Toaster />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold">
              <span className="text-secondary">Choongshin</span>
              <span className="ml-1"> Crafts</span>
            </h2>
            <p className="text-white/90 text-sm">
              Crafting ideas into reality — gifts, printing, branding,
              engraving.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="text-secondary hover:opacity-90">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary hover:opacity-90">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <h3 className="font-semibold">Contact</h3>
            <div className="flex items-start gap-2 text-white/90">
              <svg
                className="w-4 h-4 text-secondary mt-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <div>Bharatpur-10, Saikshik Marg</div>
                <div>Chitwan, Nepal</div>
              </div>
            </div>
            <a
              href="tel:9855062050"
              className="flex items-center gap-2 text-white/90 hover:text-secondary"
            >
              <Phone className="w-4 h-4 text-secondary" />
              <span>985-5062050</span>
            </a>
            <a
              href="mailto:mail.ccmnepal@gmail.com"
              className="flex items-center gap-2 text-white/90 hover:text-secondary break-all"
            >
              <Mail className="w-4 h-4 text-secondary" />
              <span>mail.ccmnepal@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="w-4 h-4 text-secondary" />
              <span className="text-sm">6 AM - 9 PM, Sat Closed</span>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <h3 className="font-semibold">Categories</h3>
            <nav className="flex flex-col gap-2 text-white/90">
              <Link href="/category/gifts" className="hover:text-secondary">
                Gifts
              </Link>
              <Link href="/category/printing" className="hover:text-secondary">
                Printing
              </Link>
              <Link href="/category/branding" className="hover:text-secondary">
                Crafting
              </Link>
            </nav>
          </div>

          <div className="space-y-2 text-sm">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2 text-white/90">
              <Link href="/" className="hover:text-secondary">
                Home
              </Link>
              <Link href="/products" className="hover:text-secondary">
                Products
              </Link>
              <Link href="/about" className="hover:text-secondary">
                About
              </Link>
              <Link href="/contact" className="hover:text-secondary">
                Contact
              </Link>
              <Link href="/terms" className="hover:text-secondary">
                Tearms and Conditions
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Compact subscription */}
      <div className="bg-primary border-t border-primary/80">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold text-white">Get updates</h4>
              <p className="text-white/90 text-sm">
                New collections, offers — only good stuff.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="w-full sm:w-auto">
              <div className="flex items-center gap-2 bg-white rounded-lg p-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="px-3 py-2 text-sm bg-transparent outline-none text-gray-900 w-48"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-secondary text-white rounded-md text-sm font-medium disabled:opacity-50"
                >
                  {isLoading ? (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-primary/80">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-white/80 text-sm">
          <div>
            © {currentYear} Choongshin Crafts and Media. All rights reserved.
          </div>
          <div className="mt-1">Powered by Intelzy Softwares Pvt Ltd.</div>
        </div>
      </div>
    </footer>
  );
}
