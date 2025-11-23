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
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);

  const navLinks = [
    {
      name: "Token of Love",
      href: "/token-of-love",
      hasDropdown: true,
    },
    {
      name: "2D/3D Board",
      href: "/2d-3d-board",
      hasDropdown: true,
    },
    {
      name: "Sinage",
      href: "/sinage",
      hasDropdown: true,
    },
    {
      name: "Promotional/Presents",
      href: "/promotional-presents",
      hasDropdown: true,
    },
    {
      name: "Crafting/Carving",
      href: "/crafting-carving",
      hasDropdown: true,
    },
    {
      name: "Printing & More",
      href: "/printing-more",
      hasDropdown: true,
    },
  ];

  const searchSuggestions = ["Birthday Gifts", "Anniversary Frames", "Personalized Keyrings", "Custom Lamps", "Wedding Souvenirs", "Mother's Day Gifts", "Rakhi Special", "Photo Frames"];

  const filteredSuggestions = searchSuggestions.filter((suggestion) => suggestion.toLowerCase().includes(searchQuery.toLowerCase()));

  const megaMenuData: MegaMenuData = {
    "Token of Love": [
      {
        title: "PRODUCTS",
        items: [
          {name: "Wooden/MDF", href: "/token-of-love/wooden-mdf"},
          {name: "Acrylic", href: "/token-of-love/acrylic"},
          {name: "Customized", href: "/token-of-love/customized"},
          {name: "UV Print/Laser Engrave Plaque", href: "/token-of-love/uv-laser-plaque"},
        ],
      },
    ],
    "2D/3D Board": [
      {
        title: "PRODUCTS",
        items: [
          {name: "CNC Cutout ACP 2D Board", href: "/2d-3d-board/cnc-acp"},
          {name: "Acrylic 3D Letter", href: "/2d-3d-board/acrylic-3d"},
          {name: "SS (Golden/Silver) Mirror Letter", href: "/2d-3d-board/ss-mirror"},
          {name: "PVC Profile Letter", href: "/2d-3d-board/pvc-profile"},
        ],
      },
    ],
    "Sinage": [
      {
        title: "PRODUCTS",
        items: [
          {name: "Neon Light", href: "/sinage/neon-light"},
          {name: "Light Photo Frame", href: "/sinage/light-frame"},
          {name: "Product Display Frame", href: "/sinage/display-frame"},
          {name: "Interior/Exterior Sinage", href: "/sinage/interior-exterior"},
        ],
      },
    ],
    "Promotional/Presents": [
      {
        title: "PRODUCTS",
        items: [
          {name: "Corporate Promotionals", href: "/promotional/corporate"},
          {name: "Festival Gifts", href: "/promotional/festival"},
          {name: "Occasionals Gifts", href: "/promotional/occasional"},
          {name: "UV Print/Laser Engrave Plaque", href: "/promotional/uv-laser"},
        ],
      },
    ],
    "Crafting/Carving": [
      {
        title: "PRODUCTS",
        items: [
          {name: "Wooden", href: "/crafting/wooden"},
          {name: "Granite/Marble/Shilalekh/Tamrapatra", href: "/crafting/stone"},
          {name: "Aankhi Jhyal/Jali Butta", href: "/crafting/traditional"},
          {name: "Cylinder Carving", href: "/crafting/cylinder"},
        ],
      },
    ],
    "Printing & More": [
      {
        title: "PRODUCTS",
        items: [
          {name: "UV Printing", href: "/printing/uv"},
          {name: "Laser Printing/Marking", href: "/printing/laser"},
          {name: "Febric/Fiber Print", href: "/printing/fabric"},
          {name: "Digital/offset Print", href: "/printing/digital-offset"},
        ],
      },
    ],
  };

  return (
    <nav className="w-screen sticky font-poppins mb-0  inset-0 top-0 z-50" style={{background: "linear-gradient(135deg, #633B6F 0%, #7a4a86 100%)"}}>
      <div className="mx-auto mb-0 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0 hover:opacity-90 transition-opacity">
            <Image src="/CCM-Logo.png" alt="Logo" className=" translate-y-[-3px]" width={90} height={40} />
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
                  <div className="absolute align-center items-center top-full pt-4 w-auto min-w-[280px] left-1/2 -translate-x-1/2">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-8">
                      <div className="grid grid-cols-1 gap-8">
                        {megaMenuData[link.name].map((category) => (
                          <div key={category.title}>
                            <h3 className="text-xs font-bold mb-4 tracking-wide uppercase" style={{color: "#633B6F"}}>
                              {category.title}
                            </h3>
                            <ul className="space-y-2.5">
                              {category.items.map((item) => (
                                <li key={item.name}>
                                  <Link href={item.href} className="text-sm font-Poppins text-gray-600 hover:text-orange-500 transition-colors block whitespace-nowrap" style={{transition: "color 0.15s ease"}}>
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

          {/* Right Side: Search & Links */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Search Bar */}
            <div className="relative w-64">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" />
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

            {/* Top Links */}
            <div className="flex items-center gap-4 text-sm">
              <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/gallery" className="text-white/80 hover:text-white transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                Contact
              </Link>
              
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/20">
          <div className="px-4 py-4 space-y-3">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-900/20 focus:border-purple-900"
              />
            </div>

            {navLinks.map((link) => (
              <div key={link.name} className="px-1">
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileOpenDropdown((prev) => (prev === link.name ? null : link.name))}
                      className="w-full flex items-center justify-between px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={16} className={`transition-transform ${mobileOpenDropdown === link.name ? "rotate-180" : ""}`} />
                    </button>

                    {mobileOpenDropdown === link.name && megaMenuData[link.name] && (
                      <div className="pl-4 mt-2 space-y-2">
                        {megaMenuData[link.name].map((category) => (
                          <div key={category.title}>
                            <div className="text-xs font-semibold uppercase text-white/80 px-4">{category.title}</div>
                            {category.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMobileOpenDropdown(null);
                                }}
                                className="block px-6 py-2 text-white/80 hover:bg-white/5 rounded-md transition-colors text-sm"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href} className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Top Links */}
            <div className="border-t border-white/20 pt-3 mt-3 space-y-3">
              <Link href="/about" className="block px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/gallery" className="block px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Gallery
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              
            </div>
          </div>
        </div>
      )}
    
    </nav>
  );
};

export default Navbar;