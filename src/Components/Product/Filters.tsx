import { X } from "lucide-react";
import { useState } from "react";
import FilterContent from "./FilterContent";
import { categories } from "./categoriesData";

interface FiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  selectedSubCategories: string[];
  setSelectedSubCategories: (subCategories: string[]) => void;
  onClearFilters: () => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
}

export default function Filters({
  searchQuery,
  setSearchQuery,
  priceRange,
  setPriceRange,
  selectedCategories,
  setSelectedCategories,
  selectedSubCategories,
  setSelectedSubCategories,
  onClearFilters,
  showFilters,
  setShowFilters,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode,
}: FiltersProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
      // Also remove any subcategories from this category
      const categorySubs =
        categories.find((c) => c.name === category)?.subCategories || [];
      setSelectedSubCategories(
        selectedSubCategories.filter((sub) => !categorySubs.includes(sub))
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleSubCategoryChange = (subCategory: string) => {
    if (selectedSubCategories.includes(subCategory)) {
      setSelectedSubCategories(
        selectedSubCategories.filter((s) => s !== subCategory)
      );
    } else {
      setSelectedSubCategories([...selectedSubCategories, subCategory]);
    }
  };

  return (
    <>
      {/* Mobile Filter Overlay */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterContent
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedSubCategories={selectedSubCategories}
                setSelectedSubCategories={setSelectedSubCategories}
                onClearFilters={onClearFilters}
                expandedCategory={expandedCategory}
                toggleCategory={toggleCategory}
                handleCategoryChange={handleCategoryChange}
                handleSubCategoryChange={handleSubCategoryChange}
              />
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar - Full Height with Better Styling */}
      <aside className="hidden lg:flex lg:flex-col w-72 bg-gradient-to-b from-white to-gray-50 border-r-2 border-gray-200 h-screen sticky top-0 shadow-lg">
        <div className="p-5 h-full flex flex-col">
          <div className="mb-6 pb-5 border-b-2 border-gray-300">
            <h2 className="text-xl font-bold text-gray-900">
              <span className="text-primary">Filter</span> Products
            </h2>
            <p className="text-xs text-gray-600 mt-2 uppercase tracking-widest font-semibold">
              Refine your search
            </p>
          </div>
          <div className="flex-1 overflow-y-auto pr-2">
            <FilterContent
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedSubCategories={selectedSubCategories}
              setSelectedSubCategories={setSelectedSubCategories}
              onClearFilters={onClearFilters}
              expandedCategory={expandedCategory}
              toggleCategory={toggleCategory}
              handleCategoryChange={handleCategoryChange}
              handleSubCategoryChange={handleSubCategoryChange}
            />
          </div>
        </div>
      </aside>
    </>
  );
}
