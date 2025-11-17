"use client";
import React, {useState} from "react";
import Link from "next/link";
import {Search} from "lucide-react";
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
    <nav className="w-full bg-white/90 backdrop-blur-sm shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section with logo, search, and links */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image src="/CCM-Logo.png" alt="Logo" width={120} height={80} />
          </Link>

          {/* Search bar with suggestions */}
          <div className="flex-1 max-w-2xl mx-8 relative">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Search for products, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSearchSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSearchSuggestions(false), 200)}
                className="w-full pl-12 pr-32 py-3 border-2 bg-white rounded-lg focus:outline-none transition-colors"
                style={{borderColor: "#633B6F20"}}
                onFocusCapture={(e) => (e.currentTarget.style.borderColor = "#633B6F")}
                onBlurCapture={(e) => (e.currentTarget.style.borderColor = "#633B6F20")}
              />
              <button
                className="absolute right-1 top-1/2 -translate-y-1/2 px-8 py-2 text-white rounded-md transition-all font-medium shadow-sm"
                style={{backgroundColor: "#F8A61C"}}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E09519")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F8A61C")}
              >
                Search
              </button>
            </div>

            {/* Search Suggestions Dropdown */}
            {showSearchSuggestions && searchQuery && filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto" style={{border: "1px solid #633B6F20"}}>
                <div className="p-2">
                  <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider" style={{color: "#633B6F"}}>
                    Suggestions
                  </p>
                  {filteredSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSearchQuery(suggestion);
                        setShowSearchSuggestions(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-md transition-colors flex items-center gap-3 group hover:bg-gray-50"
                    >
                      <Search
                        size={16}
                        className="text-gray-400"
                        style={{transition: "color 0.2s"}}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#F8A61C")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                      />
                      <span
                        className="text-sm text-gray-700 group-hover:text-gray-900"
                        style={{transition: "color 0.2s"}}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#F8A61C")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                      >
                        {suggestion}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right navigation links */}
          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-gray-700 transition-colors text-sm font-medium hover:opacity-80"
              style={{transition: "color 0.2s"}}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F8A61C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="text-gray-700 transition-colors text-sm font-medium hover:opacity-80"
              style={{transition: "color 0.2s"}}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F8A61C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 transition-colors text-sm font-medium hover:opacity-80"
              style={{transition: "color 0.2s"}}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F8A61C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 transition-colors text-sm font-medium hover:opacity-80"
              style={{transition: "color 0.2s"}}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F8A61C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              Blog
            </Link>
          </div>
        </div>

        {/* Navigation links */}
        <div className="border-t" style={{borderColor: "#633B6F20"}}>
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative" onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)} onMouseLeave={() => setActiveDropdown(null)}>
                <Link
                  href={link.href}
                  className={`block px-6 py-4 text-sm font-medium transition-colors ${link.name === "Personalized Gifts" ? "text-white" : "text-gray-700"}`}
                  style={link.name === "Personalized Gifts" ? {backgroundColor: "#633B6F"} : {}}
                  onMouseEnter={(e) => {
                    if (link.name !== "Personalized Gifts") {
                      e.currentTarget.style.color = "#F8A61C";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (link.name !== "Personalized Gifts") {
                      e.currentTarget.style.color = "";
                    }
                  }}
                >
                  {link.name}
                </Link>

                {/* Mega Menu Dropdown */}
                {link.hasDropdown && activeDropdown === link.name && megaMenuData[link.name] && (
                  <div className="absolute left-0 top-full w-screen max-w-6xl bg-white/95 backdrop-blur-md shadow-xl z-50 p-8" style={{borderTop: "2px solid #F8A61C"}}>
                    <div className="grid grid-cols-7 gap-6">
                      {megaMenuData[link.name].map((category) => (
                        <div key={category.title}>
                          <h3 className="text-xs font-semibold mb-3 tracking-wider" style={{color: "#633B6F"}}>
                            {category.title}
                          </h3>
                          <ul className="space-y-2">
                            {category.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="text-sm text-gray-700 transition-colors block"
                                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F8A61C")}
                                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
