"use client";

import React, { useState, useRef, MouseEvent } from "react";
import {
  Heart,
  Share2,
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Check,
  Package,
  Truck,
  Shield,
} from "lucide-react";
import SimilarProducts from "@/Components/Product/SimilarProducts";

interface Product {
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  materials: string[];
  colors: { name: string; hex: string }[];
  images: string[];
  specifications: { label: string; value: string }[];
  artisan: string;
  origin: string;
}

export default function HandicraftProductPage() {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedMaterial, setSelectedMaterial] = useState<string>("Ceramic");
  const [selectedColor, setSelectedColor] = useState<string>("Terracotta");
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
  const [showZoom, setShowZoom] = useState<boolean>(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const product: Product = {
    name: "Handcrafted Ceramic Vase",
    price: "Rs. 2,899",
    originalPrice: "Rs. 4,999",
    discount: "42% OFF",
    rating: 4.8,
    reviews: 89,
    description:
      "Exquisite handcrafted ceramic vase, meticulously created by skilled artisans. Each piece is unique with intricate hand-painted designs inspired by traditional Nepalese art. Perfect for home décor or as a thoughtful gift.",
    features: [
      "100% Handmade by Local Artisans",
      "Unique Hand-Painted Designs",
      "Eco-Friendly Materials",
      "Lead-Free Glazing",
      "Water-Resistant Finish",
      "Supports Local Craftsmen",
    ],
    materials: ["Ceramic", "Clay", "Terracotta"],
    colors: [
      { name: "Terracotta", hex: "#E07856" },
      { name: "Deep Blue", hex: "#1e40af" },
      { name: "Emerald", hex: "#059669" },
      { name: "Ivory", hex: "#FFFEF2" },
    ],
    images: [
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80",
    ],
    specifications: [
      { label: "Height", value: "12 inches" },
      { label: "Diameter", value: "6 inches" },
      { label: "Weight", value: "800g" },
      { label: "Material", value: "Ceramic" },
      { label: "Finish", value: "Glazed" },
    ],
    artisan: "Ramesh Kumar",
    origin: "Bhaktapur, Nepal",
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setShowZoom(true);
  };

  const handleMouseLeave = () => {
    setShowZoom(false);
  };

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in ordering:
    
*${product.name}*
Material: ${selectedMaterial}
Color: ${selectedColor}
Price: ${product.price}

Please let me know the availability and delivery details.`;

    const phoneNumber = "9779811874247";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+9779811874247";
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Heritage Crafts</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="p-2 hover:bg-purple-50 rounded-full transition-colors"
            >
              <Heart
                className={`w-6 h-6 ${
                  isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
                }`}
              />
            </button>
            <button className="p-2 hover:bg-purple-50 rounded-full transition-colors">
              <Share2 className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Gallery Section */}
          <div className="space-y-4">
            <div className="relative">
              {/* Main Image with Hover */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
                <div
                  ref={imageRef}
                  className="aspect-square overflow-hidden cursor-crosshair"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
                >
                  <ChevronLeft
                    className="w-6 h-6"
                    style={{ color: "#633B6F" }}
                  />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
                >
                  <ChevronRight
                    className="w-6 h-6"
                    style={{ color: "#633B6F" }}
                  />
                </button>

                {/* Discount Badge */}
                <div
                  className="absolute top-4 right-4 px-4 py-2 rounded-full font-bold text-white shadow-lg"
                  style={{ backgroundColor: "#F8A61C" }}
                >
                  {product.discount}
                </div>

                {/* Handmade Badge */}
                {/* <div className="absolute top-4 left-4 px-4 py-2 rounded-full font-semibold text-white shadow-lg bg-gradient-to-r from-purple-600 to-purple-800">
                  ✋ Handmade
                </div> */}
              </div>

              {/* Zoomed Image Frame - Only shows when hovering */}
              {showZoom && (
                <div className="hidden lg:block absolute left-full ml-4 top-0 w-[600px] h-[600px] bg-white rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-200 z-50">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${product.images[selectedImage]})`,
                      backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                      backgroundSize: "250%",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-xl overflow-hidden transition-all ${
                    selectedImage === idx
                      ? "ring-4 ring-[#633B6F] scale-105 shadow-lg"
                      : "hover:scale-105 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`View ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            {/* Specifications */}
            <div className="hidden lg:block bg-white rounded-2xl p-6 shadow-lg">
              <h3
                className="font-semibold mb-4 text-lg"
                style={{ color: "#633B6F" }}
              >
                Specifications
              </h3>
              <div className="space-y-3">
                {product.specifications.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between py-2 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-gray-600">{spec.label}</span>
                    <span className="font-medium text-gray-900">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Artisan Info */}

            {/* Title and Rating */}
            <div>
              <h1
                className="text-4xl font-bold mb-3"
                style={{ color: "#633B6F" }}
              >
                {product.name}
              </h1>
              {/* <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="ml-2 text-gray-600 font-medium">
                    {product.rating}
                  </span>
                </div>
                <span className="text-gray-500">
                  ({product.reviews} reviews)
                </span>
              </div> */}
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold" style={{ color: "#633B6F" }}>
                {product.price}
              </span>
              <span className="text-2xl text-gray-400 line-through">
                {product.originalPrice}
              </span>
              <span
                className="px-3 py-1 rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: "#F8A61C" }}
              >
                {product.discount}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            <div>
              <h3
                className="font-semibold mb-3 text-lg"
                style={{ color: "#633B6F" }}
              >
                Available Colors
              </h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`relative w-14 h-14 rounded-full transition-all ${
                      selectedColor === color.name
                        ? "scale-110 shadow-lg"
                        : "hover:scale-105"
                    }`}
                    style={{
                      backgroundColor: color.hex,
                      border:
                        color.hex === "#FFFEF2" ? "2px solid #e5e7eb" : "none",
                    }}
                    title={color.name}
                  >
                    {selectedColor === color.name && (
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{ boxShadow: "0 0 0 4px #633B6F" }}
                      >
                        <Check className="w-6 h-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Selection */}
            <div>
              <h3
                className="font-semibold mb-3 text-lg"
                style={{ color: "#633B6F" }}
              >
                Material Type
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.materials.map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      selectedMaterial === material
                        ? "text-white shadow-lg scale-105"
                        : "bg-white text-gray-700 hover:scale-105 shadow"
                    }`}
                    style={{
                      backgroundColor:
                        selectedMaterial === material ? "#633B6F" : "white",
                    }}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-linear-to-br from-white to-purple-50 rounded-2xl p-6 shadow-lg border-2 border-purple-100">
              <h3
                className="font-semibold mb-4 text-lg"
                style={{ color: "#633B6F" }}
              >
                Key Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "#F8A61C" }}
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 shadow text-center">
                <Shield
                  className="w-8 h-8 mx-auto mb-2"
                  style={{ color: "#633B6F" }}
                />
                <p className="text-xs font-semibold text-gray-700">
                  Authentic Craft
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow text-center">
                <Truck
                  className="w-8 h-8 mx-auto mb-2"
                  style={{ color: "#633B6F" }}
                />
                <p className="text-xs font-semibold text-gray-700">
                  Safe Delivery
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow text-center">
                <Package
                  className="w-8 h-8 mx-auto mb-2"
                  style={{ color: "#633B6F" }}
                />
                <p className="text-xs font-semibold text-gray-700">
                  Gift Packaging
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleWhatsAppOrder}
                className="relative py-4 rounded-xl font-semibold text-white overflow-hidden group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: "#25D366" }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <MessageCircle className="mr-2" size={20} />
                  Order on WhatsApp
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>

              <button
                onClick={handleCall}
                className="relative py-4 rounded-xl font-semibold text-white overflow-hidden group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: "#633B6F" }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Phone className="mr-2" size={20} />
                  Call Us
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>

            {/* Specifications */}
            <div className=" lg:hidden bg-white rounded-2xl p-6 shadow-lg">
              <h3
                className="font-semibold mb-4 text-lg"
                style={{ color: "#633B6F" }}
              >
                Specifications
              </h3>
              <div className="space-y-3">
                {product.specifications.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between py-2 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-gray-600">{spec.label}</span>
                    <span className="font-medium text-gray-900">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* similar products section can go here */}

      <SimilarProducts/>



    </div>
  );
}
