"use clint";
import Link from "next/link";
import {Facebook, Mail, Phone, Clock, InstagramIcon} from "lucide-react";

export default function Footer() {
  const currentYear = new Date(Date.now()).getFullYear();

  return (
    <footer className="bg-primary text-tertiary">
      <div className="max-w-screen mx-auto px-6 py-10 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold ">
                <span className="text-secondary">Choongshin</span>
                <span className="text-tertiary"> Crafts & Media</span>
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed font-body">
              Crafting Ideas into Reality for over 10 years. Your trusted partner for customized gifts, printing, branding, and engraving solutions.
            </p>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-body font-medium"
            >
              <Facebook className="w-5 h-5" />
            </a>
            &nbsp;
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-body font-medium"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            &nbsp;
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-title text-tertiary">Contact Us</h3>
            <div className="space-y-4 font-body">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300">Bharatpur-10, Saikshik Marg</p>
                  <p className="text-gray-300">Chitwan, Nepal</p>
                </div>
              </div>

              <a href="tel:9855062050" className="flex items-center gap-3 text-gray-300 hover:text-secondary transition-colors">
                <Phone className="w-5 h-5 text-secondary" />
                <span>985-5062050</span>
              </a>

              <a href="mailto:mail.ccmnepal@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-secondary transition-colors break-all">
                <Mail className="w-5 h-5 text-secondary" />
                <span>mail.ccmnepal@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-secondary" />
                <span>6 AM - 9 PM, Saturday Closed</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-title text-tertiary">Catagories</h3>
            <nav className="flex flex-col space-y-3 font-body">
              <Link href="/category/gifts" className="text-gray-300 hover:text-secondary transition-colors hover:translate-x-1 transform duration-200">
                Gifts
              </Link>
              <Link href="/category/printing" className="text-gray-300 hover:text-secondary transition-colors hover:translate-x-1 transform duration-200">
                Printing
              </Link>
              <Link href="/category/branding" className="text-gray-300 hover:text-secondary transition-colors hover:translate-x-1 transform duration-200">
                Crafting
              </Link>
            </nav>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-title text-tertiary">Quick Links</h3>
            <nav className="flex flex-col space-y-3 font-body">
              <Link href="/" className="text-gray-300 hover:text-secondary transition-colors hover:translate-x-1 transform duration-200">
                Home
              </Link>
              <Link href="/products" className="text-gray-300 hover:text-secondary transition-colors hover:translate-x-1 transform duration-200">
                Products
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-secondary transition-colors hover:translate-x-1 transform duration-200">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-secondary transition-colors hover:translate-x-1 transform duration-200">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-gray-400 text-sm font-body">© {currentYear} Choongshin Crafts and Media. All rights reserved.</p>
          <a href="https://www.intelzysoftwares.com/" target="_blank">
            {" "}
            <p className="text-end text-gray-400 text-xs font-body">Powered by Intelzy Software Pvt Ltd.</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
