import React, { useState } from 'react';
import { Eye } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  image: string;
  artisan: string;
  isNew?: boolean;
}

export default function SimilarProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "Handwoven Basket",
      price: "Rs. 1,599",
      originalPrice: "Rs. 2,899",
      discount: "45% OFF",
      image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80",
      artisan: "Maya Thapa",
      isNew: true
    },
    {
      id: 2,
      name: "Ceramic Bowl Set",
      price: "Rs. 2,199",
      originalPrice: "Rs. 3,999",
      discount: "45% OFF",
      image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&q=80",
      artisan: "Raju Maharjan"
    },
    {
      id: 3,
      name: "Clay Decorative Pot",
      price: "Rs. 1,899",
      originalPrice: "Rs. 3,499",
      discount: "46% OFF",
      image: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=600&q=80",
      artisan: "Sita Devi"
    },
    {
      id: 4,
      name: "Traditional Wall Art",
      price: "Rs. 3,299",
      originalPrice: "Rs. 5,999",
      discount: "45% OFF",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80",
      artisan: "Krishna Lal",
      isNew: true
    },
    {
      id: 5,
      name: "Wooden Carved Box",
      price: "Rs. 1,799",
      originalPrice: "Rs. 3,299",
      discount: "45% OFF",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&q=80",
      artisan: "Bikash Shrestha"
    }
  ];

  return (
    <div className="py-12 px-4 bg-gradient-to-br from-purple-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3" style={{ color: '#633B6F' }}>
            Similar Handicrafts
          </h2>
          <p className="text-gray-600 text-lg">
            Handpicked items crafted with love by local artisans
          </p>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: '#F8A61C' }}></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-xs font-bold rounded-full shadow-lg">
                      NEW
                    </span>
                  )}
                  <span 
                    className="px-3 py-1 text-white text-xs font-bold rounded-full shadow-lg"
                    style={{ backgroundColor: '#F8A61C' }}
                  >
                    {product.discount}
                  </span>
                </div>

                {/* Quick View Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <button
                    className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-110 flex items-center gap-2 shadow-lg"
                    style={{ backgroundColor: '#633B6F' }}
                  >
                    <Eye size={18} />
                    View Details
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-3">
                {/* Artisan Name */}
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F8A61C' }}></div>
                  <p className="text-xs font-medium" style={{ color: '#633B6F' }}>
                    By {product.artisan}
                  </p>
                </div>

                {/* Product Name */}
                <h3 className="font-bold text-lg text-gray-900 line-clamp-2 min-h-[3.5rem] group-hover:text-purple-800 transition-colors">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-2 pt-2">
                  <span className="text-2xl font-bold" style={{ color: '#633B6F' }}>
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300"
                style={{
                  border: hoveredProduct === product.id ? '3px solid #633B6F' : '3px solid transparent',
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            className="relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#633B6F' }}
          >
            <span className="relative z-10">Explore More Handicrafts</span>
            <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
}