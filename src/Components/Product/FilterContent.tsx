import { Search, ChevronDown } from "lucide-react";
import { categories } from "./categoriesData";

interface FilterContentProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  selectedSubCategories: string[];
  setSelectedSubCategories: (subCategories: string[]) => void;
  onClearFilters: () => void;
  expandedCategory: string | null;
  toggleCategory: (category: string) => void;
  handleCategoryChange: (category: string) => void;
  handleSubCategoryChange: (subCategory: string) => void;
}

export default function FilterContent({
  searchQuery,
  setSearchQuery,
  selectedCategories,
  setSelectedCategories,
  selectedSubCategories,
  setSelectedSubCategories,
  onClearFilters,
  expandedCategory,
  toggleCategory,
  handleCategoryChange,
  handleSubCategoryChange,
}: FilterContentProps) {
  // Check if a category is currently expanded for showing subcategories
  const isShowingSubcategories =
    expandedCategory !== null && expandedCategory !== "";

  return (
    <div className="space-y-4">
      {/* Search */}
      <div>
        <h3 className="font-bold text-gray-900 mb-2 text-xs uppercase tracking-wider">
          Search
        </h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
          />
        </div>
      </div>

      {/* Categories */}
      <div>
        {isShowingSubcategories ? (
          // Show subcategories of selected category with back button
          <>
            <div className="flex items-center gap-2 mb-3">
              <button
                onClick={() => {
                  setSelectedSubCategories([]);
                  toggleCategory("");
                }}
                className="text-sm font-semibold text-primary hover:text-opacity-75 transition-all"
              >
                ← Back
              </button>
              <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider">
                {expandedCategory}
              </h3>
            </div>
            <div className="space-y-2">
              {categories
                .find((cat) => cat.name === expandedCategory)
                ?.subCategories.map((subCat) => (
                  <button
                    key={subCat}
                    onClick={() => handleSubCategoryChange(subCat)}
                    className={`w-full px-3 py-2 text-xs font-medium rounded-md transition-all text-left ${
                      selectedSubCategories.includes(subCat)
                        ? "bg-primary text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {subCat}
                  </button>
                ))}
            </div>
          </>
        ) : (
          // Show category buttons
          <>
            <h3 className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wider">
              Categories
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => {
                    toggleCategory(category.name);
                  }}
                  className="px-2 py-2 flex flex-col items-center justify-center gap-1 text-xs font-medium rounded-md border-2 border-gray-200 hover:border-primary hover:bg-gray-50 transition-all"
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="line-clamp-2 text-center">
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Clear Filters */}
      <button
        onClick={onClearFilters}
        className="w-full py-2 bg-primary text-white rounded-lg font-bold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg uppercase text-xs tracking-wider"
      >
        Clear All Filters
      </button>
    </div>
  );
}
