// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const importantLinks = [
    { name: 'Catalogue', href: '/catalogue' },
    { name: 'Stores', href: '/stores' },
    { name: 'Gift Cards', href: '/gift-cards' },
    { name: 'Corporate Gifts', href: '/corporate-gifts' },
    { name: 'Press', href: '/press' },
    { name: 'Contact', href: '/contact' },
    { name: 'Terms & Conditions', href: '/terms' }
  ];

  const mainMenu = [
    { name: 'About Us', href: '/about' },
    { name: 'Shop', href: '/shop' },
    { name: 'Collaborations', href: '/collaborations' },
    { name: 'Dori Chronicles', href: '/dori-chronicles' },
    { name: 'Cafe Dori', href: '/cafe-dori' }
  ];

  return (
    <footer className="bg-black/70 backdrop-blur-md text-white pt-16 pb-8 px-8 sm:px-12 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-white text-lg font-light tracking-wider">
                CHOONGSHIN
              </h3>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-white/70">
              Choongshin is a tribute to quintessential Neplease sensibilities, blended perfectly with contemporary interpretations in design, material and craftsmanship. The Nepalease love story being a global one, aspires everyone to the nostalgia, mysticism and romance of the historic landmarks, vibrant culture, landscape and an endless collection of eclectic modern icons.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">s
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-white text-lg font-light tracking-wider mb-4">
              IMPORTANT LINKS
            </h3>
            <ul className="space-y-2.5">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Menu */}
          <div>
            <h3 className="text-white text-lg font-light tracking-wider mb-4">
              MAIN MENU
            </h3>
            <ul className="space-y-2.5">
              {mainMenu.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-light tracking-wider mb-4">
              NEWSLETTER
            </h3>
            <p className="text-sm text-white/70 mb-4 leading-relaxed">
              Subscribe to stay updated about new products, promotional offers and more.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2.5 bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/50 transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm tracking-wider hover:bg-white/20 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Choongshin. All rights reserved.
            </p>
            <p className="text-sm text-white/70">
              Chitwan, Nepal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;