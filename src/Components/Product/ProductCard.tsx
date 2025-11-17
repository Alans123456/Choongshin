"use client";
import { Star, Search, SlidersHorizontal, X } from "lucide-react";
import { useState, useMemo } from "react";
import { Button } from "../ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  inStock: boolean;
}

export default function ProductPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const products: Product[] = [
    { id: 1, name: "Premium Cotton T-Shirt", price: 29.99, originalPrice: 49.99, rating: 4.5, reviews: 128, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop", category: "shirts", inStock: true },
    { id: 2, name: "Slim Fit Denim Jeans", price: 79.99, originalPrice: 120, rating: 4.8, reviews: 256, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop", category: "pants", inStock: true },
    { id: 3, name: "Classic Leather Jacket", price: 189.99, originalPrice: 299.99, rating: 4.9, reviews: 89, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop", category: "jackets", inStock: true },
    { id: 4, name: "Casual Sneakers", price: 69.99, originalPrice: 99.99, rating: 4.3, reviews: 412, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop", category: "shoes", inStock: false },
    { id: 5, name: "Summer Dress", price: 59.99, originalPrice: 89.99, rating: 4.6, reviews: 178, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop", category: "dresses", inStock: true },
    { id: 6, name: "Wool Sweater", price: 45.99, originalPrice: 75, rating: 4.4, reviews: 93, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop", category: "shirts", inStock: true },
    { id: 7, name: "Running Shoes", price: 99.99, originalPrice: 149.99, rating: 4.7, reviews: 521, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", category: "shoes", inStock: true },
    { id: 8, name: "Hooded Sweatshirt", price: 39.99, originalPrice: 59.99, rating: 4.5, reviews: 267, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop", category: "shirts", inStock: true },
  ];

  const categories = ["all", "shirts", "pants", "jackets", "shoes", "dresses"];

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (searchQuery) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen pt-10 bg-[#633B6F]">

   
 
      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">

          {/* SIDEBAR */}
          <aside className={`${showFilters ? "block" : "hidden"} lg:block w-full lg:w-64`}>
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-[#633B6F]">Filters</h2>
                <Button type="button" className="lg:hidden" onClick={() => setShowFilters(false)}>
                  <X className="w-5 h-5 text-[#633B6F]" />
                </Button>
              </div>

              {/* CATEGORY */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-[#633B6F]">Category</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="mr-2 accent-[#F8A61C]"
                      />
                      <span className="capitalize text-gray-700">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* PRICE RANGE */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-[#633B6F]">Price Range</h3>

                <input
                  type="range"
                  min="0"
                  max="200"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full accent-[#F8A61C]"
                />

                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              <Button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setPriceRange([0, 200]);
                  setSearchQuery("");
                }}
                className="w-full py-2 rounded-lg text-sm font-medium bg-[#F8A61C] text-white"
              >
                Clear Filters
              </Button>
            </div>
          </aside>

          {/* MAIN PRODUCT LIST */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-white font-medium">{filteredProducts.length} products</p>
                  <div className="relative">

            <input
              type="text"
              
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 text-white pr-4 py-3 border-2 rounded-lg focus:outline-none border-secondary"
            />
          </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border-2  rounded-lg border-[#F8A61C] focus:outline-none"
              >
                <option value="featured" >Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const discount = Math.round(
                  ((product.originalPrice - product.price) / product.originalPrice) * 100
                );

                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="relative group">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      <div className="absolute top-3 left-3 bg-[#F8A61C] text-white px-2 py-1 rounded-full text-xs font-semibold">
                        -{discount}%
                      </div>

                      {!product.inStock && (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#633B6FCC]">
                          <span className="text-white font-bold text-lg">Out of Stock</span>
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating)
                                ? "fill-[#F8A61C] text-[#F8A61C]"
                                : "fill-gray-300 text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-xs text-gray-600 ml-1">
                          ({product.reviews})
                        </span>
                      </div>

                      <h3 className="font-semibold mb-2 line-clamp-2 text-[#633B6F]">
                        {product.name}
                      </h3>

                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-[#F8A61C]">
                          ${product.price}
                        </span>
                        <span className="text-sm line-through text-gray-400">
                          ${product.originalPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-white text-lg">No products found</p>

                <Button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("all");
                    setPriceRange([0, 200]);
                    setSearchQuery("");
                  }}
                  className="mt-4 underline text-[#F8A61C]"
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
