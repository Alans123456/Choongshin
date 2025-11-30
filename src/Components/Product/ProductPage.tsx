"use client";
import { Filter, Grid, List, Home, ChevronRight } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { products } from "./productData";
import Filters from "./Filters";
import ProductCard from "./ProductCard";
import Breadcrumbs from "./BreadCrumb";

// Main Component
export default function ProductPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(
    []
  );
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // responsive columns and dynamic pagination (2 rows)
  const [columns, setColumns] = useState<number>(3);

  // compute products per page = columns * 2 (two rows)
  const productsPerPage = columns * 2;

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    // Subcategory filter
    if (selectedSubCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedSubCategories.includes(p.subCategory)
      );
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    // Sort
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
        return filtered.sort(
          (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
        );
    }
  }, [selectedCategories, selectedSubCategories, searchQuery, sortBy]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedSubCategories([]);
    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, selectedSubCategories, searchQuery, sortBy]);

  // Update columns based on window width to keep grid tight with card size
  useEffect(() => {
    function updateColumns() {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      // Tailwind breakpoints: sm=640, md=768, lg=1024, xl=1280, 2xl=1536
      if (w >= 1536) setColumns(4);
      else if (w >= 1280) setColumns(3);
      else if (w >= 1024) setColumns(3);
      else if (w >= 768) setColumns(2);
      else if (w >= 640) setColumns(2);
      else setColumns(1);
    }

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <div className="min-h-screen bg-white min-w-full flex flex-col">
      {/* Breadcrumb */}
      {/* <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-full px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm">
            <a
              href="/"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Home size={16} className="text-gray-500" />
              <span className="text-gray-600">Home</span>
            </a>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="font-semibold text-primary">Products</span>
          </nav>
        </div>
      </div> */}

      <div className="flex flex-1">
        {/* Filters Sidebar - Full Height Left */}
        <Filters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedSubCategories={selectedSubCategories}
          setSelectedSubCategories={setSelectedSubCategories}
          onClearFilters={clearFilters}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          sortBy={sortBy}
          setSortBy={setSortBy}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        {/* Main Content - Right Side */}
        <main className="flex-1 px-3 sm:px-4 lg:px-6 py-4 sm:py-6 overflow-y-auto">
          <div className="w-full">
            {/* Breadcrumb + Header Section */}
            {/* <Breadcrumbs
              items={[{ label: "Home", href: "/" }, { label: "Products" }]}
            /> */}
            <div className="mb-4 sm:mb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                Transform Your Imagination to Reality
              </h1>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                Discover our custom products and services
              </p>
            </div>

            {/* Controls Bar with Search */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 sm:gap-3 mb-4 sm:mb-6 bg-gray-50 p-3 sm:p-4 rounded-lg">
              <p className="text-gray-700 font-medium text-sm">
                Showing{" "}
                <span className="text-primary font-semibold">
                  {startIndex + 1}-
                  {Math.min(
                    startIndex + productsPerPage,
                    filteredProducts.length
                  )}
                </span>{" "}
                of{" "}
                <span className="text-primary font-semibold">
                  {filteredProducts.length}
                </span>{" "}
                products
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-2 w-full lg:w-auto">
                {/* Search Box */}
                <div className="relative w-full sm:w-48">
                  <input
                    type="text"
                    placeholder="Quick search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-3 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
                  />
                </div>

                {/* View Mode Toggle */}
                <div className="flex border-2 border-gray-300 rounded-lg">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 transition-all ${
                      viewMode === "grid"
                        ? "bg-primary text-white"
                        : "bg-white text-gray-600 hover:text-primary"
                    }`}
                    title="Grid View"
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 transition-all ${
                      viewMode === "list"
                        ? "bg-primary text-white"
                        : "bg-white text-gray-600 hover:text-primary"
                    }`}
                    title="List View"
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-gray-900 font-medium cursor-pointer hover:border-primary transition-colors text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Low to High</option>
                  <option value="price-high">High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="popular">Popular</option>
                </select>

                {/* Mobile Filter Button */}
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden w-full sm:w-auto px-4 py-2 bg-primary text-white rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-opacity-90 transition-all"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </button>
              </div>
            </div>

            {/* Products Grid/List */}
            {currentProducts.length > 0 ? (
              <div
                className={
                  viewMode === "list"
                    ? "space-y-4 sm:space-y-6"
                    : "grid gap-5 auto-rows-max"
                }
                style={
                  viewMode === "list"
                    ? undefined
                    : {
                        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                      }
                }
              >
                {currentProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-lg">
                <div className="text-gray-300 text-6xl mb-4">🔍</div>
                <p className="text-gray-700 text-xl font-medium mb-2">
                  No products found
                </p>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={clearFilters}
                  className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary hover:text-primary transition-colors font-medium"
                >
                  Previous
                </button>

                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  const page = currentPage <= 3 ? i + 1 : currentPage - 2 + i;
                  if (page > totalPages) return null;

                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg transition-all font-medium ${
                        currentPage === page
                          ? "bg-primary text-white"
                          : "border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary hover:text-primary transition-colors font-medium"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
