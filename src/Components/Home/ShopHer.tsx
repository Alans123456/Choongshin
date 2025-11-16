"use client";
import React, { useState, KeyboardEvent } from "react";

type Colors = {
  frontBg: string;
  backGradient: string;
  accent: string;
};

type Category = {
  id: number;
  title: string;
  subtitle: string;
  frontImage: string;
  backText: string;
  colors: Colors;
};

const CATEGORIES: Category[] = [
  {
    id: 1,
    title: "Mother",
    subtitle: "For the one who means everything",
    frontImage:
      "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?w=400&h=300&fit=crop",
    backText:
      "Celebrate the woman who gave you everything with personalized gifts that show your love.",
    colors: {
      frontBg: "bg-pink-50",
      backGradient: "from-pink-50 to-rose-100",
      accent: "bg-pink-500",
    },
  },
  {
    id: 2,
    title: "Wife",
    subtitle: "Your forever love",
    frontImage:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=300&fit=crop",
    backText:
      "Make your life partner feel cherished with thoughtful, romantic personalized gifts.",
    colors: {
      frontBg: "bg-red-50",
      backGradient: "from-red-50 to-pink-100",
      accent: "bg-red-500",
    },
  },
  {
    id: 3,
    title: "Sister",
    subtitle: "Your first best friend",
    frontImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
    backText:
      "Honor your first friend with unique gifts that celebrate your special bond.",
    colors: {
      frontBg: "bg-purple-50",
      backGradient: "from-purple-50 to-violet-100",
      accent: "bg-purple-500",
    },
  },
  {
    id: 4,
    title: "Girlfriend",
    subtitle: "Make her heart flutter",
    frontImage:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop",
    backText:
      "Express your affection with creative, personalized gifts she'll treasure forever.",
    colors: {
      frontBg: "bg-rose-50",
      backGradient: "from-rose-50 to-pink-100",
      accent: "bg-rose-500",
    },
  },
  {
    id: 5,
    title: "Best Friend",
    subtitle: "Your partner in crime",
    frontImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop",
    backText:
      "Show appreciation for your bestie with fun, memorable personalized gifts.",
    colors: {
      frontBg: "bg-amber-50",
      backGradient: "from-amber-50 to-yellow-100",
      accent: "bg-amber-500",
    },
  },
  {
    id: 6,
    title: "Daughter",
    subtitle: "Your little princess",
    frontImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
    backText:
      "Delight your little princess with gifts that make her feel special and loved.",
    colors: {
      frontBg: "bg-sky-50",
      backGradient: "from-sky-50 to-blue-100",
      accent: "bg-sky-500",
    },
  },
];

export default function ShopForHer() {
  const [flippedId, setFlippedId] = useState<number | null>(null);

  const handleKeyToggle = (e: KeyboardEvent<HTMLDivElement>, id: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlippedId((prev) => (prev === id ? null : id));
    }
  };

  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shop For Her
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of personalized gifts designed to make her
            feel special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => {
            const isFlipped = flippedId === cat.id;

            const containerStyle: React.CSSProperties = {
              perspective: "1000px",
              height: "18rem", // matches h-72
            };

            const innerStyle: React.CSSProperties = {
              width: "100%",
              height: "100%",
              transition: "transform 0.7s",
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              position: "relative",
            };

            const faceStyle: React.CSSProperties = {
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              borderRadius: "1rem",
              overflow: "hidden",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            };

            const backStyle: React.CSSProperties = {
              ...faceStyle,
              transform: "rotateY(180deg)",
            };

            return (
              <div
                key={cat.id}
                className="relative"
                onMouseEnter={() => setFlippedId(cat.id)}
                onMouseLeave={() => setFlippedId(null)}
              >
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {cat.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">{cat.subtitle}</p>
                </div>

                <div style={containerStyle}>
                  <div style={innerStyle}>
                    {/* front */}
                    <div
                      style={faceStyle}
                      className={`${cat.colors.frontBg} rounded-2xl shadow-lg overflow-hidden border border-gray-100`}
                      // Make front focusable + toggleable for keyboard users
                      role="button"
                      tabIndex={0}
                      onClick={() => setFlippedId((p) => (p === cat.id ? null : cat.id))}
                      onKeyDown={(e) => handleKeyToggle(e, cat.id)}
                      aria-pressed={isFlipped}
                      aria-label={`${cat.title} card`}
                    >
                      <div className="relative w-full h-full p-4">
                        <div className="w-full h-full rounded-xl overflow-hidden shadow-md ring-2 ring-white">
                          <img
                            src={cat.frontImage}
                            alt={cat.title}
                            className="w-full h-full object-cover transition-transform duration-300"
                            style={{ transform: isFlipped ? "scale(1.05)" : "scale(1)" }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* back */}
                    <div
                      style={backStyle}
                      className={`rounded-2xl shadow-lg overflow-hidden border border-gray-100 bg-opacity-90 ${cat.colors.backGradient}`}
                    >
                      <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                        <div
                          className={`w-16 h-16 ${cat.colors.accent} rounded-full flex items-center justify-center mb-4 shadow-md`}
                        >
                          <span className="text-white text-2xl">♥</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-6">
                          {cat.backText}
                        </p>
                        <button
                          type="button"
                          className={`px-6 py-2 ${cat.colors.accent} text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300`}
                          onClick={() => {
                            /* replace with real routing or CTA */
                            console.log("Shop Now ->", cat.title);
                          }}
                        >
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}




