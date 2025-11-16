import React from 'react';
import Link from 'next/link';
import { Search, User, Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  const navLinks: { name: string; href: string }[] = [
    { name: 'ABOUT US', href: '/about' },
    { name: 'SHOP', href: '/shop' },
    { name: 'CLOTHING', href: '/clothing' },
    { name: 'DORI LIVING', href: '/dori-living' },
    { name: 'CORPORATE GIFTS', href: '/corporate-gifts' },
    { name: 'COLLABORATIONS', href: '/collaborations' },
    { name: 'CAFE DORI', href: '/cafe-dori' }
  ];

  return (
    <nav className="w-full bg-black/75 backdrop-blur-md shadow-md transition-transform duration-300">
      <div className="max-w-full mx-auto px-8 py-6">
        <div className="flex items-center justify-between overflow-x-auto">
          {/* Logo and Brand Name - Clickable */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <h1 className="text-white text-2xl font-light tracking-[0.3em]">
              CHOONGSHIN
            </h1>
          </Link>

          {/* Navigation links - Center */}
          <div className="flex items-center gap-12 overflow-x-auto no-scrollbar">
            {navLinks.map((link, index: number) => (
              <Link
                key={index}
                href={link.href}
                className="text-white text-sm font-light tracking-wider hover:text-white/70 transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            <button 
              className="text-white hover:text-white/80 transition-colors"
              aria-label="User account"
            >
              <User size={20} />
            </button>
            <button 
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button 
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Favorites"
            >
              <Heart size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;