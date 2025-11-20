export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  hoverImage: string;
  category: string;
  subCategory: string;
  inStock: boolean;
  description: string;
  tags: string[];
  featured: boolean;
}

// Updated products based on your flyer data
export const products: Product[] = [
  {
    id: 1,
    name: "Custom Wooden Token of Love with UV Print",
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.5,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=400&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    category: "Token of Love",
    subCategory: "Wooden/MDF",
    inStock: true,
    description:
      "Beautiful customized wooden token with high-quality UV print, perfect for gifts and special occasions.",
    tags: ["Customized", "UV Print", "Gift"],
    featured: true,
  },
  {
    id: 2,
    name: "Premium Acrylic Love Plaque",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.8,
    reviews: 256,
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=400&h=400&fit=crop",
    category: "Token of Love",
    subCategory: "Acrylic",
    inStock: true,
    description:
      "Elegant acrylic plaque with precision laser engraving for a professional finish.",
    tags: ["Laser Engrave", "Premium"],
    featured: true,
  },
  {
    id: 3,
    name: "Professional CNC Cut ACP Board",
    price: 189.99,
    originalPrice: 299.99,
    rating: 4.9,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1581094794329-c811e6bd6ed4?w=400&h=400&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1581094794329-c811e6bd6ed4?w=400&h=400&fit=crop",
    category: "2D/3D Board",
    subCategory: "CNC Cutout ACP 2D Board",
    inStock: true,
    description:
      "Precision CNC cut ACP board for professional displays and signage solutions.",
    tags: ["Professional", "Signage"],
    featured: false,
  },
  {
    id: 4,
    name: "3D Acrylic Letter Sign - Custom Design",
    price: 69.99,
    originalPrice: 99.99,
    rating: 4.3,
    reviews: 412,
    image:
      "https://images.unsplash.com/photo-1557800634-7bf3c7305596?w=400&h=400&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    category: "2D/3D Board",
    subCategory: "Acrylic 3D Letter",
    inStock: false,
    description:
      "Beautiful 3D acrylic letters for indoor and outdoor signage with custom designs.",
    tags: ["3D", "Custom"],
    featured: true,
  },
  {
    id: 5,
    name: "Custom Neon Light Sign - Multiple Colors",
    price: 59.99,
    originalPrice: 89.99,
    rating: 4.6,
    reviews: 178,
    image:
      "https://images.unsplash.com/photo-1518832553480-cf6b2ad71d64?w=400&h=400&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1518832553480-cf6b2ad71d64?w=400&h=400&fit=crop",
    category: "Image",
    subCategory: "Neon Light",
    inStock: true,
    description:
      "Custom designed neon lights for home decor, offices, and commercial spaces.",
    tags: ["LED", "Colorful"],
    featured: false,
  },
  {
    id: 6,
    name: "Elegant Light Photo Frame Display",
    price: 45.99,
    originalPrice: 75,
    rating: 4.4,
    reviews: 93,
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
    category: "Image",
    subCategory: "Light Photo Frame",
    inStock: true,
    description:
      "Elegant light photo frames with LED illumination for displaying precious memories.",
    tags: ["LED", "Display"],
    featured: false,
  },
  {
    id: 7,
    name: "Corporate Promotional Gift Set",
    price: 99.99,
    originalPrice: 149.99,
    rating: 4.7,
    reviews: 521,
    image:
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=400&h=400&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=400&h=400&fit=crop",
    category: "Promotional/Presents",
    subCategory: "Corporate Promotionals",
    inStock: true,
    description:
      "Premium corporate promotional items with custom branding options.",
    tags: ["Business", "Branding"],
    featured: true,
  },
  {
    id: 8,
    name: "Festival Special Gift Box Collection",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviews: 267,
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop",
    category: "Promotional/Presents",
    subCategory: "Festival Gifts",
    inStock: true,
    description:
      "Special festival gift boxes for all occasions with customizable contents.",
    tags: ["Festival", "Gift Box"],
    featured: false,
  },
  {
    id: 9,
    name: "Handcrafted Wooden Carving Art Piece",
    price: 79.99,
    originalPrice: 120,
    rating: 4.8,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1564936281293-5017c8595d5c?w=400&h=400&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1564936281293-5017c8595d5c?w=400&h=400&fit=crop",
    category: "Crafting/Carving",
    subCategory: "Wooden",
    inStock: true,
    description:
      "Handcrafted wooden carving artwork with intricate designs and patterns.",
    tags: ["Handmade", "Art"],
    featured: true,
  },
  {
    id: 10,
    name: "Premium Marble Engraving Masterpiece",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.9,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1585356922328-2d15f6b4b1b7?w=400&h=400&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1585356922328-2d15f6b4b1b7?w=400&h=400&fit=crop",
    category: "Crafting/Carving",
    subCategory: "Granite/Marble/Shilalekh/Tamapatra",
    inStock: true,
    description:
      "Elegant marble engraving for home decor with premium finish and durability.",
    tags: ["Marble", "Premium"],
    featured: false,
  },
  {
    id: 11,
    name: "UV Printed Custom Signage",
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 203,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop",
    category: "Printing & Many More...",
    subCategory: "UV Printing",
    inStock: true,
    description:
      "High-quality UV printed signage with vibrant colors and long-lasting finish.",
    tags: ["UV Print", "Durable"],
    featured: false,
  },
  {
    id: 12,
    name: "Laser Engraved Custom Plaque",
    price: 34.99,
    originalPrice: 54.99,
    rating: 4.7,
    reviews: 178,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop",
    category: "Printing & Many More...",
    subCategory: "Laser Printing/Marking",
    inStock: true,
    description:
      "Precision laser engraved plaques with detailed designs and professional look.",
    tags: ["Laser", "Precision"],
    featured: true,
  },
];