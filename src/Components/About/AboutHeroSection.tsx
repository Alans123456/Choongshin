"use client";
import { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Award,
  Users,
  Heart,
  ArrowRight,
  Play,
  Star,
  CheckCircle,
  Target,
  Eye,
  Shield,
  Zap,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";

// Color Constants
const COLORS = {
  primary: "#633B6F",
  secondary: "#F8A61C",
  white: "#FFFFFF",
  lightBg: "#F8F9FA",
  lightPurple: "#F3F4F6",
  lightOrange: "#FEF7E5",
  gray: "#6B7280",
  darkGray: "#374151",
};

// Mock images - Added more high-quality images
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600",
  "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
  "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600",
  "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600",
  "https://images.unsplash.com/photo-1581578021517-5a5cd0b34b78?w=600",
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600",
];

// Types for departments and members to satisfy TypeScript
type Member = {
  name: string;
  role: string;
  image: string;
  bio: string;
  specialty: string;
};

type Department = {
  title: string;
  description: string;
  members: Member[];
};

const DEPARTMENTS: Record<
  "leadership" | "design" | "craftsmanship" | "operations",
  Department
> = {
  leadership: {
    title: "Leadership & Strategy",
    description: "Guiding vision and strategic direction",
    members: [
      {
        name: "John Anderson",
        role: "CEO & Founder",
        image: "https://i.pravatar.cc/400?img=12",
        bio: "Visionary leader with 20+ years in craftsmanship industry. Founded Choongshin with a mission to preserve traditional artistry.",
        specialty: "Business Strategy",
      },
      {
        name: "Lisa Thompson",
        role: "Creative Director",
        image: "https://i.pravatar.cc/400?img=20",
        bio: "Innovative thinker bringing fresh perspectives to traditional crafts while honoring their authentic roots.",
        specialty: "Innovation",
      },
      {
        name: "Robert Kim",
        role: "Chief Operating Officer",
        image: "https://i.pravatar.cc/400?img=68",
        bio: "Operations expert with 15+ years in luxury goods manufacturing and supply chain management.",
        specialty: "Operations",
      },
      {
        name: "Maria Garcia",
        role: "Finance Director",
        image: "https://i.pravatar.cc/400?img=33",
        bio: "Financial strategist ensuring sustainable growth and fair compensation for all artisans.",
        specialty: "Finance",
      },
    ],
  },
  design: {
    title: "Design & Innovation",
    description: "Creating tomorrow's heirlooms today",
    members: [
      {
        name: "Michael Chen",
        role: "Lead Designer",
        image: "https://i.pravatar.cc/400?img=33",
        bio: "Award-winning designer who seamlessly blends cultural heritage with contemporary aesthetics.",
        specialty: "Product Design",
      },
      {
        name: "Rachel Kim",
        role: "Textile Designer",
        image: "https://i.pravatar.cc/400?img=25",
        bio: "Expert in traditional weaving and embroidery, creating stunning textile pieces with cultural significance.",
        specialty: "Textile Arts",
      },
      {
        name: "David Park",
        role: "UX/UI Designer",
        image: "https://i.pravatar.cc/400?img=45",
        bio: "Digital experience designer creating seamless online experiences for our customers.",
        specialty: "Digital Design",
      },
      {
        name: "Sarah Johnson",
        role: "Color Specialist",
        image: "https://i.pravatar.cc/400?img=60",
        bio: "Master of color theory and material finishes, ensuring perfect visual harmony in every piece.",
        specialty: "Color Theory",
      },
    ],
  },
  craftsmanship: {
    title: "Master Craftsmen",
    description: "Hands that shape legacy",
    members: [
      {
        name: "Sarah Mitchell",
        role: "Master Carpenter",
        image: "https://i.pravatar.cc/400?img=5",
        bio: "Third-generation woodworker specializing in traditional joinery techniques passed down through generations.",
        specialty: "Woodworking",
      },
      {
        name: "James Wilson",
        role: "Metal Artisan",
        image: "https://i.pravatar.cc/400?img=51",
        bio: "Master metalworker specializing in forging and traditional metalwork techniques.",
        specialty: "Metalwork",
      },
      {
        name: "Emma Zhang",
        role: "Ceramic Artist",
        image: "https://i.pravatar.cc/400?img=28",
        bio: "Ceramic specialist creating unique pottery pieces using ancient techniques.",
        specialty: "Ceramics",
      },
      {
        name: "Carlos Rodriguez",
        role: "Leather Craftsman",
        image: "https://i.pravatar.cc/400?img=70",
        bio: "Leather artisan with 25 years experience in traditional leatherworking methods.",
        specialty: "Leatherwork",
      },
      {
        name: "Aisha Patel",
        role: "Jewelry Maker",
        image: "https://i.pravatar.cc/400?img=42",
        bio: "Goldsmith and jewelry designer creating bespoke pieces with precious metals and stones.",
        specialty: "Jewelry",
      },
      {
        name: "Kenji Tanaka",
        role: "Lacquerware Master",
        image: "https://i.pravatar.cc/400?img=55",
        bio: "Traditional lacquerware artist preserving ancient Japanese techniques.",
        specialty: "Lacquerware",
      },
    ],
  },
  operations: {
    title: "Operations & Quality",
    description: "Excellence in every detail",
    members: [
      {
        name: "Emily Rodriguez",
        role: "Artisan Coordinator",
        image: "https://i.pravatar.cc/400?img=9",
        bio: "Connecting skilled craftspeople worldwide, ensuring fair trade practices and quality collaboration.",
        specialty: "Operations",
      },
      {
        name: "David Park",
        role: "Quality Director",
        image: "https://i.pravatar.cc/400?img=15",
        bio: "Meticulous quality expert ensuring every piece meets our exacting standards before reaching customers.",
        specialty: "Quality Assurance",
      },
      {
        name: "Sophie Williams",
        role: "Supply Chain Manager",
        image: "https://i.pravatar.cc/400?img=38",
        bio: "Oversees ethical sourcing and sustainable material procurement across global networks.",
        specialty: "Supply Chain",
      },
      {
        name: "Thomas Brown",
        role: "Customer Experience",
        image: "https://i.pravatar.cc/400?img=65",
        bio: "Ensures exceptional service and support throughout the customer journey.",
        specialty: "Customer Service",
      },
    ],
  },
};
const FAQS = [
  {
    question: "What makes Choongshin different from other gift companies?",
    answer:
      "We combine traditional craftsmanship with modern design, ensuring each piece is handmade by skilled artisans using time-honored techniques while meeting contemporary aesthetic standards. Every item has a story and soul.",
  },
  {
    question: "How do you ensure quality in your products?",
    answer:
      "Every item undergoes rigorous quality checks at multiple stages. Our artisans are masters of their craft, and our Quality Director personally reviews each piece before it reaches you. We maintain strict standards for materials and craftsmanship.",
  },
  {
    question: "Can I customize products for special occasions?",
    answer:
      "Absolutely! We specialize in personalized gifts for weddings, anniversaries, corporate events, and more. Contact our team to discuss your vision, and we'll work with our artisans to create something truly unique and meaningful.",
  },
  {
    question: "What is your production and delivery timeline?",
    answer:
      "Standard items ship within 5-7 business days. Custom pieces typically take 2-4 weeks depending on complexity and customization level. We'll provide a detailed timeline when you place your order and keep you updated throughout the process.",
  },
  {
    question: "Do you ship internationally and how is packaging handled?",
    answer:
      "Yes, we ship worldwide! Shipping times and costs vary by location. We ensure secure, eco-friendly packaging to protect your handcrafted items during transit. Each piece is carefully wrapped and cushioned for safe delivery.",
  },
  {
    question: "What is your return and satisfaction policy?",
    answer:
      "We stand behind our craftsmanship with a 30-day satisfaction guarantee. If you're not completely satisfied, we'll work with you to make it right. Custom pieces are non-refundable but we ensure your approval before final production.",
  },
];

const JOURNEY_MILESTONES = [
  {
    year: "2015",
    title: "The Beginning",
    desc: "Founded with a vision to preserve traditional craftsmanship and support local artisans in their craft.",
    icon: Sparkles,
  },
  {
    year: "2017",
    title: "Artisan Network",
    desc: "Partnered with 50+ master craftspeople across multiple regions, creating a thriving community.",
    icon: Users,
  },
  {
    year: "2019",
    title: "Global Recognition",
    desc: "Received international awards for design excellence and commitment to preserving cultural heritage.",
    icon: Award,
  },
  {
    year: "2021",
    title: "Sustainable Practice",
    desc: "Committed to eco-friendly materials, ethical sourcing, and zero-waste production methods.",
    icon: Shield,
  },
  {
    year: "2023",
    title: "Digital Innovation",
    desc: "Launched online platform connecting artisans with customers worldwide, bridging tradition and technology.",
    icon: Zap,
  },
  {
    year: "2025",
    title: "Expanding Horizons",
    desc: "Opening new workshops, training programs, and mentorship initiatives for the next generation.",
    icon: TrendingUp,
  },
];

const COMPANY_VALUES = [
  {
    icon: Heart,
    title: "Passion for Craft",
    desc: "Every piece is created with love, dedication, and respect for traditional techniques.",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "Supporting artisans and their families through fair wages and sustainable practices.",
  },
  {
    icon: Award,
    title: "Excellence Always",
    desc: "Uncompromising quality standards in materials, craftsmanship, and customer service.",
  },
  {
    icon: Shield,
    title: "Ethical & Sustainable",
    desc: "Eco-friendly materials, responsible sourcing, and minimal environmental impact.",
  },
];

const METRICS = [
  { value: "8+", label: "Years Excellence" },
  { value: "500+", label: "Artisans" },
  { value: "10K+", label: "Creations" },
];

const VALUE_PROPOSITIONS = [
  "Master artisans with decades of experience",
  "Sustainable & ethically sourced materials",
  "Lifetime craftsmanship guarantee",
  "Custom designs tailored to your vision",
];

const AboutUsPage = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeDepartment, setActiveDepartment] =
    useState<keyof typeof DEPARTMENTS>("leadership");

  useEffect(() => {
    const imageGrid = scrollRef.current?.querySelector(
      "div"
    ) as HTMLDivElement | null;
    if (!imageGrid) return;

    let rotation = 0;
    const rotationSpeed = 0.3;
    let animationFrameId: number;

    const animate = () => {
      rotation += rotationSpeed;
      if (rotation >= 360) rotation = 0;
      imageGrid.style.transform = `rotate(${rotation}deg)`;
      imageGrid.style.transformOrigin = "center center";
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.white }}>
      {/* HERO SECTION */}
      <section
        style={{ backgroundColor: COLORS.lightBg }}
        className="relative min-h-screen overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, ${COLORS.primary} 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Accent Shapes */}
        <div
          className="absolute top-10 left-10 w-72 h-72"
          style={{ backgroundColor: COLORS.secondary, opacity: 0.1 }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96"
          style={{ backgroundColor: COLORS.primary, opacity: 0.05 }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 gap-12 lg:gap-8">
            {/* LEFT: Text Content */}
            <div className="flex-1 text-center lg:text-left space-y-8 z-10">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full shadow-lg border"
                style={{
                  backgroundColor: COLORS.white,
                  borderColor: COLORS.lightPurple,
                }}
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      style={{
                        fill: COLORS.secondary,
                        color: COLORS.secondary,
                      }}
                    />
                  ))}
                </div>
                <span
                  className="text-sm font-semibold"
                  style={{ color: COLORS.primary }}
                >
                  Excellence in Craftsmanship Since 2015
                </span>
                <Sparkles
                  className="w-4 h-4"
                  style={{ color: COLORS.secondary }}
                />
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span style={{ color: COLORS.primary }}>Crafting</span>
                  <br />
                  <span style={{ color: COLORS.secondary }}>Timeless</span>
                  <br />
                  <span style={{ color: COLORS.primary }}>Legacies</span>
                </h1>

                <p
                  className="text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
                  style={{ color: COLORS.gray }}
                >
                  Where heritage craftsmanship meets contemporary design. Each
                  piece tells a story of passion, precision, and enduring
                  beauty.
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-8 py-6 max-w-md">
                {METRICS.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div
                      className="text-2xl font-bold"
                      style={{ color: COLORS.primary }}
                    >
                      {metric.value}
                    </div>
                    <div className="text-sm" style={{ color: COLORS.gray }}>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Value Propositions */}
              <div className="space-y-4 max-w-xl">
                {VALUE_PROPOSITIONS.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle
                      className="w-5 h-5 shrink-0"
                      style={{ color: COLORS.secondary }}
                    />
                    <span style={{ color: COLORS.darkGray }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button
                  className="group px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                  style={{
                    backgroundColor: COLORS.primary,
                    color: COLORS.white,
                  }}
                >
                  Explore Our Collection
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  className="group px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 border"
                  style={{
                    backgroundColor: COLORS.white,
                    color: COLORS.primary,
                    borderColor: COLORS.primary,
                  }}
                >
                  <Play className="w-5 h-5" />
                  Our Story
                </button>
              </div>
            </div>

            {/* RIGHT: Visual Content */}
            <div className="flex-1 flex items-center justify-center lg:justify-end w-full max-w-2xl">
              <div className="relative">
                {/* Main Rotating Showcase */}
                <div ref={scrollRef} className="relative w-[520px] h-[520px]">
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{ backgroundColor: COLORS.primary, opacity: 0.1 }}
                  ></div>

                  {/* Rotating Image Grid */}
                  <div className="relative w-full h-full">
                    {HERO_IMAGES.map((src, index) => {
                      const angle = (index * 360) / HERO_IMAGES.length;
                      const radius = 200; // Increased radius
                      const x = Math.cos((angle * Math.PI) / 180) * radius;
                      const y = Math.sin((angle * Math.PI) / 180) * radius;

                      return (
                        <div
                          key={index}
                          className="absolute top-1/2 left-1/2 w-36 h-36 -ml-18 -mt-18" // Increased size
                          style={{ transform: `translate(${x}px, ${y}px)` }}
                        >
                          <div className="relative w-full h-full group">
                            <div
                              className="absolute inset-0 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity"
                              style={{ backgroundColor: COLORS.primary }}
                            ></div>
                            <img
                              src={src}
                              alt={`Craft ${index + 1}`}
                              className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      );
                    })}

                    {/* Center Piece */}
                    <div
                      className="absolute top-1/2 left-1/2 -ml-24 -mt-24 w-48 h-48 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      <div className="text-center text-white">
                        <Heart className="w-14 h-14 mx-auto mb-2" />
                        <div className="text-base font-semibold">
                          Handcrafted
                        </div>
                        <div className="text-xs opacity-90">With Love</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Award Badge */}
                <div
                  className="absolute -top-4 -right-4 rounded-2xl p-4 shadow-2xl"
                  style={{
                    backgroundColor: COLORS.secondary,
                    color: COLORS.white,
                  }}
                >
                  <div className="text-center">
                    <Award className="w-8 h-8 mx-auto mb-1" />
                    <div className="text-xs font-semibold">2024</div>
                    <div className="text-xs">Best Craft</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY VALUES */}
      <section style={{ backgroundColor: COLORS.white }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: COLORS.primary }}
            >
              Our Values
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: COLORS.gray }}
            >
              The principles that guide every piece we create and every artisan
              we support
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_VALUES.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border"
                  style={{
                    backgroundColor: COLORS.lightBg,
                    borderColor: COLORS.lightPurple,
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: COLORS.primary }}
                  >
                    {value.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: COLORS.gray }}>
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section style={{ backgroundColor: COLORS.lightBg }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: COLORS.primary }}
            >
              About Choongshin
            </h2>
            <p
              className="text-2xl font-semibold"
              style={{ color: COLORS.secondary }}
            >
              Where Tradition Meets Tomorrow
            </p>
          </div>

          <div
            className="rounded-3xl p-8 sm:p-12 shadow-2xl space-y-6 leading-relaxed text-lg border"
            style={{
              backgroundColor: COLORS.white,
              borderColor: COLORS.lightPurple,
            }}
          >
            <p style={{ color: COLORS.darkGray }}>
              Founded in the heart of artisan country, Choongshin represents
              more than just a company—we are a movement to preserve and
              celebrate the art of handcrafted excellence.
            </p>

            <p style={{ color: COLORS.darkGray }}>
              Our name, meaning{" "}
              <span className="font-bold" style={{ color: COLORS.primary }}>
                "sincerity"
              </span>{" "}
              in Korean, embodies our commitment to authentic craftsmanship.
              Every product we create tells a story. From the selection of
              premium materials to the final touches by master artisans, we
              ensure that each piece meets our exacting standards.
            </p>

            <p style={{ color: COLORS.darkGray }}>
              Our workshop is a place where tradition and innovation dance
              together, creating gifts that are both timeless and contemporary.
              We believe in the power of meaningful gifts—items that carry
              emotional weight, cultural significance, and unparalleled quality.
            </p>

            <p style={{ color: COLORS.darkGray }}>
              In a world of mass production,{" "}
              <span className="font-bold" style={{ color: COLORS.secondary }}>
                we stand firm in our dedication to the human touch
              </span>
              , fair trade practices, and sustainable craftsmanship that honors
              both people and planet.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY SECTION */}
      <section style={{ backgroundColor: COLORS.white }} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: COLORS.primary }}
            >
              Our Journey
            </h2>
            <p className="text-lg" style={{ color: COLORS.gray }}>
              A decade of dedication, innovation, and craftsmanship
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 transform lg:-translate-x-1/2"
              style={{ backgroundColor: COLORS.primary }}
            ></div>

            <div className="space-y-12">
              {JOURNEY_MILESTONES.map((milestone, idx) => {
                const Icon = milestone.icon;
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`relative flex items-center ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } flex-row`}
                  >
                    {/* Year badge */}
                    <div
                      className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-xl z-10 border-4 border-white"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div
                      className={`ml-28 lg:ml-0 lg:w-1/2 ${
                        isEven ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                      }`}
                    >
                      <div
                        className="p-6 rounded-2xl shadow-lg border"
                        style={{
                          backgroundColor: COLORS.lightBg,
                          borderColor: COLORS.lightPurple,
                        }}
                      >
                        <div
                          className="font-bold text-sm mb-2"
                          style={{ color: COLORS.primary }}
                        >
                          {milestone.year}
                        </div>
                        <h3
                          className="text-2xl font-bold mb-2"
                          style={{ color: COLORS.darkGray }}
                        >
                          {milestone.title}
                        </h3>
                        <p style={{ color: COLORS.gray }}>{milestone.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section style={{ backgroundColor: COLORS.lightBg }} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: COLORS.primary }}
            >
              Vision & Mission
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div
              className="rounded-3xl p-8 sm:p-10 shadow-2xl border"
              style={{
                backgroundColor: COLORS.white,
                borderColor: COLORS.lightPurple,
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: COLORS.primary }}
                >
                  Our Vision
                </h3>
              </div>
              <p
                className="leading-relaxed text-lg"
                style={{ color: COLORS.darkGray }}
              >
                To become the world's leading platform for authentic handcrafted
                gifts, where every purchase supports artisans, preserves
                cultural heritage, and creates lasting memories through
                meaningful objects that connect generations.
              </p>
            </div>

            <div
              className="rounded-3xl p-8 sm:p-10 shadow-2xl border"
              style={{
                backgroundColor: COLORS.white,
                borderColor: COLORS.lightPurple,
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: COLORS.secondary }}
                >
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: COLORS.primary }}
                >
                  Our Mission
                </h3>
              </div>
              <p
                className="leading-relaxed text-lg"
                style={{ color: COLORS.darkGray }}
              >
                To champion traditional craftsmanship in the modern world by
                connecting skilled artisans with discerning customers, ensuring
                fair compensation, sustainable practices, and the continuation
                of time-honored techniques for future generations to cherish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section style={{ backgroundColor: COLORS.lightBg }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-md mb-4"
              style={{ backgroundColor: COLORS.white }}
            >
              <Users className="w-4 h-4" style={{ color: COLORS.primary }} />
              <span
                className="text-sm font-semibold"
                style={{ color: COLORS.primary }}
              >
                Meet Our Team
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span style={{ color: COLORS.primary }}>The Faces Behind</span>
              <br />
              <span style={{ color: COLORS.secondary }}>The Craftsmanship</span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: COLORS.gray }}
            >
              The passionate individuals who bring creativity, skill, and
              dedication to every piece we create
            </p>
          </div>

          {/* Department Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.entries(DEPARTMENTS).map(([key, dept]) => (
              <button
                key={key}
                onClick={() =>
                  setActiveDepartment(key as keyof typeof DEPARTMENTS)
                }
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeDepartment === key
                    ? "text-white shadow-lg scale-105"
                    : "text-gray-700 hover:bg-white hover:shadow-md"
                }`}
                style={{
                  backgroundColor:
                    activeDepartment === key ? COLORS.primary : COLORS.white,
                }}
              >
                {dept.title}
              </button>
            ))}
          </div>

          {/* Department Description */}
          <div
            className="text-center mb-12 rounded-2xl p-6 shadow-lg max-w-2xl mx-auto border"
            style={{
              backgroundColor: COLORS.white,
              borderColor: COLORS.lightPurple,
            }}
          >
            <p
              className="text-lg font-medium"
              style={{ color: COLORS.darkGray }}
            >
              {DEPARTMENTS[activeDepartment].description}
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {DEPARTMENTS[activeDepartment].members.map((member, idx) => (
              <div
                key={idx}
                className="group rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border"
                style={{
                  backgroundColor: COLORS.white,
                  borderColor: COLORS.lightPurple,
                }}
              >
                <div
                  className="relative h-64 overflow-hidden"
                  style={{ backgroundColor: COLORS.lightBg }}
                >
                  <div
                    className="absolute top-3 right-3 px-3 py-1 text-white text-xs font-semibold rounded-full shadow-lg z-10"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    {member.specialty}
                  </div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: COLORS.primary }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="font-semibold mb-3 text-sm"
                    style={{ color: COLORS.secondary }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: COLORS.gray }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ backgroundColor: COLORS.white }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: COLORS.primary }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-lg" style={{ color: COLORS.gray }}>
              Everything you need to know about our craftsmanship
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl shadow-lg overflow-hidden border hover:shadow-xl transition-shadow"
                style={{
                  backgroundColor: COLORS.lightBg,
                  borderColor: COLORS.lightPurple,
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
                  style={{ backgroundColor: COLORS.white }}
                >
                  <span
                    className="font-bold pr-4"
                    style={{ color: COLORS.darkGray }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 shrink-0 transition-transform ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                    style={{ color: COLORS.primary }}
                  />
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  className={`overflow-hidden transition-all ${
                    openFaq === idx ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div
                    className="p-4 sm:p-6 pt-0 leading-relaxed"
                    style={{ color: COLORS.gray }}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section style={{ backgroundColor: COLORS.lightBg }} className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Get in touch</h2>
          <p
            className="text-base mb-8 max-w-2xl mx-auto"
            style={{ color: COLORS.primary }}
          >
            Have a question or custom request? Reach out to us
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-3xl mx-auto">
            {/* Email */}
            <div
              className="rounded-2xl p-6 shadow-xl inset-shadow-sm border flex-1 min-w-[200px] transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-white cursor-pointer"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.25)",
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6" style={{ color: COLORS.primary }} />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <a
                href="mailto:hello@choongshin.example"
                className="hover:text-white transition-colors text-sm"
                style={{ color: COLORS.primary }}
              >
                hello@choongshin.example
              </a>
            </div>

            {/* Phone */}
            <div
              className="rounded-2xl p-6 shadow-xl inset-shadow-sm border flex-1 min-w-[200px] transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-white cursor-pointer"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.25)",
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6" style={{ color: COLORS.primary }} />
              </div>
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <a
                href="tel:+15551234567"
                className="hover:text-white transition-colors text-sm"
                style={{ color: COLORS.primary }}
              >
                +1 (555) 123-4567
              </a>
            </div>

            {/* Address */}
            <div
              className="rounded-2xl p-6 shadow-xl inset-shadow-sm border flex-1 min-w-[200px] transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-white cursor-pointer"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.25)",
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6" style={{ color: COLORS.primary }} />
              </div>
              <h3 className="font-bold text-lg mb-2">Visit Our Studio</h3>
              <p className="text-sm" style={{ color: COLORS.primary }}>
                123 Artisan Lane
                <br />
                Craft District
                <br />
                Seoul, South Korea 04521
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
