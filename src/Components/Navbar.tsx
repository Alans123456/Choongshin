"use client";
import React, {useState} from "react";
import Link from "next/link";
import {Search, ChevronDown, Menu, X} from "lucide-react";
import Image from "next/image";

interface SubCategory {
  name: string;
  href: string;
}

interface CategoryData {
  title: string;
  items: SubCategory[];
}

interface MegaMenuData {
  [key: string]: CategoryData[];
}

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Personalized Gifts",
      href: "/personalized-gifts",
      hasDropdown: true,
    },
    {name: "Home Decor", href: "/home-decor", hasDropdown: false},
    {
      name: "Corporate Gifting",
      href: "/corporate-gifting",
      hasDropdown: false,
    },
    {name: "Events", href: "/events", hasDropdown: false},
  ];

  const searchSuggestions = ["Birthday Gifts", "Anniversary Frames", "Personalized Keyrings", "Custom Lamps", "Wedding Souvenirs", "Mother's Day Gifts", "Rakhi Special", "Photo Frames"];

  const filteredSuggestions = searchSuggestions.filter((suggestion) => suggestion.toLowerCase().includes(searchQuery.toLowerCase()));

  const megaMenuData: MegaMenuData = {
    "Personalized Gifts": [
      {
        title: "SHOP BY FESTIVAL",
        items: [
          {name: "Mother's Day", href: "/festival/mothers-day"},
          {name: "Rakhi", href: "/festival/rakhi"},
          {name: "Father's Day", href: "/festival/fathers-day"},
          {name: "Dashain", href: "/festival/dashain"},
          {name: "Tihar", href: "/festival/tihar"},
        ],
      },
      {
        title: "SHOP BY OCCASION",
        items: [
          {name: "Anniversary", href: "/occasion/anniversary"},
          {name: "Baby Shower", href: "/occasion/baby-shower"},
          {name: "Birthday", href: "/occasion/birthday"},
          {name: "Valentines Day", href: "/occasion/valentines"},
          {name: "Wedding", href: "/occasion/wedding"},
          {name: "Christmas", href: "/occasion/christmas"},
        ],
      },
      {
        title: "SHOP BY PRICE",
        items: [
          {name: "Under Rs.1500", href: "/price/under-1500"},
          {name: "Under Rs.1000", href: "/price/under-1000"},
          {name: "Under Rs.500", href: "/price/under-500"},
        ],
      },
      {
        title: "SHOP BY PRODUCT",
        items: [
          {name: "Frame", href: "/product/frame"},
          {name: "Keyring", href: "/product/keyring"},
          {name: "Lamps", href: "/product/lamps"},
          {name: "Organiser", href: "/product/organiser"},
          {name: "Souvenir", href: "/product/souvenir"},
          {name: "Notebooks", href: "/product/notebooks"},
        ],
      },
      {
        title: "SHOP FOR HER",
        items: [
          {name: "Friend", href: "/her/friend"},
          {name: "Mother", href: "/her/mother"},
          {name: "Sister", href: "/her/sister"},
          {name: "Wife", href: "/her/wife"},
          {name: "Girlfriend", href: "/her/girlfriend"},
          {name: "Kid", href: "/her/kid"},
        ],
      },
      {
        title: "SHOP FOR HIM",
        items: [
          {name: "Boyfriend", href: "/him/boyfriend"},
          {name: "Brother", href: "/him/brother"},
          {name: "Father", href: "/him/father"},
          {name: "Friend", href: "/him/friend"},
          {name: "Husband", href: "/him/husband"},
          {name: "Kid", href: "/him/kid"},
        ],
      },
      {
        title: "SHOP BY THEME",
        items: [{name: "Anime", href: "/theme/anime"}],
      },
    ],
  };

  return (
    <nav className="w-screen bg-white shadow-sm sticky inset-0 top-0  z-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-10 text-sm lg:text-xl">
            <div className="flex items-end gap-6 text-gray-600">
              <Link href="/about" className="hover:text-purple-900 transition-colors">
                About
              </Link>
              <Link href="/gallery" className="hover:text-purple-900 transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="hover:text-purple-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8" style={{background: "linear-gradient(135deg, #633B6F 0%, #7a4a86 100%)"}}>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0 hover:opacity-90 transition-opacity">
            <Image src="/CCM-Logo.png" alt="Logo" className="mb-5" width={100} height={80} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group" onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)} onMouseLeave={() => setActiveDropdown(null)}>
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-white/90 hover:text-white font-medium text-sm transition-colors py-2"
                  style={{color: activeDropdown === link.name ? "#ffffff" : ""}}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={16} className={`transition-transform ${activeDropdown === link.name ? "rotate-180" : ""}`} />}
                </Link>

                {/* Mega Menu */}
                {link.hasDropdown && activeDropdown === link.name && megaMenuData[link.name] && (
                  <div className="absolute  align-center items-center top-full pt-4 w-200 inset-x-0">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-8">
                      <div className="grid grid-cols-7 gap-8">
                        {megaMenuData[link.name].map((category) => (
                          <div key={category.title}>
                            <h3 className="text-xs font-bold mb-4 tracking-wide uppercase" style={{color: "#633B6F"}}>
                              {category.title}
                            </h3>
                            <ul className="space-y-2.5">
                              {category.items.map((item) => (
                                <li key={item.name}>
                                  <Link href={item.href} className="text-sm text-gray-600 hover:text-orange-500 transition-colors block" style={{transition: "color 0.15s ease"}}>
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden lg:block shrink-0 w-80 relative">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSearchSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSearchSuggestions(false), 200)}
                className="w-full pl-11 pr-4 py-2.5 bg-white/10 border border-white/20 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 focus:bg-white/20 transition-all text-white placeholder-white/60"
              />
            </div>

            {/* Search Suggestions */}
            {showSearchSuggestions && searchQuery && filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                <div className="p-2">
                  <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500">Popular Searches</p>
                  {filteredSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSearchQuery(suggestion);
                        setShowSearchSuggestions(false);
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3 group"
                    >
                      <Search size={14} className="text-gray-400 group-hover:text-orange-500 transition-colors" />
                      <span className="text-sm text-gray-700 group-hover:text-gray-900">{suggestion}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-900/20 focus:border-purple-900"
              />
            </div>

            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
