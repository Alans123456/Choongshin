import { Star, Heart, Share2 } from "lucide-react";
import { useState } from "react";
import { Product } from "./productData";

interface ProductCardProps {
  product: Product;
  viewMode: string;
}

export default function ProductCard({ product, viewMode }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  if (viewMode === "list") {
    return (
      <div
        className="bg-white rounded-xl border-2 border-gray-200 p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:border-primary"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="relative shrink-0">
            <img
              src={
                isHovered && product.hoverImage
                  ? product.hoverImage
                  : product.image
              }
              alt={product.name}
              className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
            {discount > 0 && (
              <div className="absolute top-3 left-3 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold">
                -{discount}%
              </div>
            )}
            {product.featured && (
              <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                Featured
              </div>
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-all"
                >
                  <Heart
                    className={`w-5 h-5 transition-all ${
                      isWishlisted
                        ? "fill-secondary text-secondary"
                        : "text-gray-400"
                    }`}
                  />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                  <Share2 className="w-5 h-5 text-gray-400 hover:text-primary" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 transition-all ${
                      i < Math.floor(product.rating)
                        ? "fill-secondary text-secondary"
                        : "fill-gray-300 text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2 font-medium">
                  ({product.reviews})
                </span>
              </div>
              <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                {product.subCategory}
              </span>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price}
                </span>
                {discount > 0 && (
                  <span className="text-lg line-through text-gray-400">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg">
                View Details
              </button>
            </div>

            <div className="flex gap-2 flex-wrap">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid View
  return (
    <div
      className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:border-gray-200 flex flex-col h-full w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-full h-[200px] sm:h-[220px] bg-gray-100 overflow-hidden shrink-0">
        <img
          src={
            isHovered && product.hoverImage ? product.hoverImage : product.image
          }
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {discount > 0 && (
            <div className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold">
              -{discount}%
            </div>
          )}
          {product.featured && (
            <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
              Featured
            </div>
          )}
        </div>

        {/* Wishlist & Share Buttons - Hover Reveal */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-all"
          >
            <Heart
              className={`w-5 h-5 transition-all ${
                isWishlisted ? "fill-secondary text-secondary" : "text-gray-600"
              }`}
            />
          </button>
          <button className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-all">
            <Share2 className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-95">
            <span className="text-gray-900 font-bold text-lg">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 overflow-hidden">
        {/* Rating */}
        {/* <div className="flex items-center gap-1 mb-1.5 shrink-0">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 transition-all ${
                i < Math.floor(product.rating)
                  ? "fill-secondary text-secondary"
                  : "fill-gray-300 text-gray-300"
              }`}
            />
          ))}
          <span className="text-xs text-gray-600 ml-1 font-medium">
            ({product.reviews})
          </span>
        </div> */}

        {/* Name */}
        <h3 className="font-bold text-gray-900 mb-1 line-clamp-1 text-sm leading-tight">
          {product.name}
        </h3>

        {/* Description - Word break after 2 lines */}
        <p className="text-xs text-gray-600 mb-2 line-clamp-2 break-all leading-tight flex-1">
          {product.description}
        </p>

        {/* Price & Category */}
        {/* <div className="flex items-center justify-between mb-2 bg-gray-50 p-2 rounded gap-1 shrink-0">
          <div className="flex items-center gap-1">
            <span className="text-base font-bold text-gray-900">
              ${product.price}
            </span>
            {discount > 0 && (
              <span className="text-xs line-through text-gray-400">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <span className="text-xs text-gray-600 bg-white px-1.5 py-0.5 rounded font-medium whitespace-nowrap line-clamp-1">
            {product.subCategory}
          </span>
        </div> */}
        {/* <span className="text-xs text-gray-600 bg-white mb-1 px-1.5 py-0.5 rounded font-medium whitespace-nowrap line-clamp-1">
          {product.subCategory}
        </span> */}

        {/* Tags */}
        <div className="flex gap-1 flex-wrap mb-2 shrink-0">
          {product.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded font-medium line-clamp-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <button className="w-full py-2 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg text-xs mt-auto shrink-0">
          View Details
        </button>
      </div>
    </div>
  );
}
