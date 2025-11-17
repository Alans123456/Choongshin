"use client";
import { Star, X, ArrowLeft } from "lucide-react";
import { useState, useMemo } from "react";

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

interface CategoryCardProps {
  category: string;
  productCount: number;
  onClick: () => void;
}

// Category Card Component
function CategoryCard({ category, productCount, onClick }: CategoryCardProps) {
  const categoryImages: Record<string, string> = {
    shirts: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop",
    pants: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=400&fit=crop",
    jackets: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=400&fit=crop",
    shoes: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop",
    dresses: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=400&fit=crop",
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={categoryImages[category] || categoryImages.shirts}
          alt={category}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#633B6F] to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white capitalize">{category}</h3>
          <p className="text-white text-sm">{productCount} products</p>
        </div>
      </div>
     
    </div>
  );
}

interface FiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  onClearFilters: () => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

// Filters Component
function Filters({ 
  searchQuery, 
  setSearchQuery, 
  priceRange, 
  setPriceRange, 
  onClearFilters, 
  showFilters, 
  setShowFilters 
}: FiltersProps) {
  return (
    <aside className={`${showFilters ? "block" : "hidden"} lg:block w-full lg:w-64`}>
      <div className="bg-white rounded-lg p-6 sticky top-24">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#633B6F]">Filters</h2>
          <button type="button" className="lg:hidden" onClick={() => setShowFilters(false)}>
            <X className="w-5 h-5 text-[#633B6F]" />
          </button>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-3 text-[#633B6F]">Search</h3>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none border-[#F8A61C] focus:border-[#633B6F]"
          />
        </div>

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
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onClearFilters}
          className="w-full py-2 rounded-lg text-sm font-medium bg-[#F8A61C] text-white hover:bg-[#e09515] transition-colors"
        >
          Clear Filters
        </button>
      </div>
    </aside>
  );
}

interface ProductCardProps {
  product: Product;
}

// Product Card Component
function ProductCard({ product }: ProductCardProps) {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
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
          <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
        </div>
        <h3 className="font-semibold mb-2 line-clamp-2 text-[#633B6F]">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#F8A61C]">${product.price}</span>
          <span className="text-sm line-through text-gray-400">
            ${product.originalPrice}
          </span>
        </div>
      </div>
    </div>
  );
}

interface CategoriesPageProps {
  onSelectCategory: (category: string) => void;
}

// Categories Page
function CategoriesPage({ onSelectCategory }: CategoriesPageProps) {
  const categoryGroups = useMemo(() => {
    const grouped: Record<string, Product[]> = {};
    products.forEach((product) => {
      if (!grouped[product.category]) {
        grouped[product.category] = [];
      }
      grouped[product.category].push(product);
    });
    return grouped;
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Shop by Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(categoryGroups).map(([category, prods]) => (
          <CategoryCard
            key={category}
            category={category}
            productCount={prods.length}
            onClick={() => onSelectCategory(category)}
          />
        ))}
      </div>
    </div>
  );
}

interface ProductsPageProps {
  category: string;
  onBack: () => void;
}

// Products Page
function ProductsPage({ category, onBack }: ProductsPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<number[]>([0, 200]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((p) => p.category === category);

    if (searchQuery) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sortBy) {
      case "price-low":
        return filtered.sort((a, b) => a.price - b.price);
      case "price-high":
        return filtered.sort((a, b) => b.price - a.price);
      case "rating":
        return filtered.sort((a, b) => b.rating - a.rating);
      case "popular":
        return filtered.sort((a, b) => b.reviews - a.reviews);
      default:
        return filtered;
    }
  }, [category, searchQuery, priceRange, sortBy]);

  const clearFilters = () => {
    setPriceRange([0, 200]);
    setSearchQuery("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-white mb-6 hover:text-[#F8A61C] transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Categories
      </button>

      <div className="flex gap-8">
        <Filters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          onClearFilters={clearFilters}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />

        <main className="flex-1">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-white mb-4 capitalize">{category}</h1>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-white font-medium">{filteredProducts.length} products</p>
              
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden px-4 py-2 bg-[#F8A61C] text-white rounded-lg"
              >
                Filters
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border-2 rounded-lg border-[#F8A61C] focus:outline-none bg-white"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-white text-lg">No products found</p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-4 underline text-[#F8A61C] hover:text-[#e09515]"
              >
                Clear all filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// Main Component
export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-10 bg-[#633B6F]">
      {!selectedCategory ? (
        <CategoriesPage onSelectCategory={setSelectedCategory} />
      ) : (
        <ProductsPage
          category={selectedCategory}
          onBack={() => setSelectedCategory(null)}
        />
      )}
    </div>
  );
}