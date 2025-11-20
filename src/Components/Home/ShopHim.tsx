"use client";
import React, { useState, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";

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
    title: "Father",
    subtitle: "For the man who taught you everything",
    frontImage:
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=400&h=300&fit=crop",
    backText:
      "Show appreciation with thoughtful gifts that honour his wisdom and care.",
    colors: {
      frontBg: "bg-slate-50",
      backGradient: "from-slate-50 to-slate-100",
      accent: "bg-slate-600",
    },
  },
  {
    id: 2,
    title: "Husband",
    subtitle: "Your life partner",
    frontImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop",
    backText:
      "Romantic, practical, or playful — find gifts that say ‘I love you’ in your language.",
    colors: {
      frontBg: "bg-emerald-50",
      backGradient: "from-emerald-50 to-emerald-100",
      accent: "bg-emerald-600",
    },
  },
  {
    id: 3,
    title: "Brother",
    subtitle: "Your lifelong teammate",
    frontImage:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=300&fit=crop",
    backText:
      "Celebrate the bond with unique picks your brother will actually use and love.",
    colors: {
      frontBg: "bg-cyan-50",
      backGradient: "from-cyan-50 to-sky-100",
      accent: "bg-cyan-600",
    },
  },
  {
    id: 4,
    title: "Boyfriend",
    subtitle: "Make his day",
    frontImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop",
    backText:
      "Surprise him with playful, romantic or personalised gifts that make memories.",
    colors: {
      frontBg: "bg-rose-50",
      backGradient: "from-rose-50 to-red-50",
      accent: "bg-rose-600",
    },
  },
  {
    id: 5,
    title: "Best Mate",
    subtitle: "Partner in mischief",
    frontImage:
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=400&h=300&fit=crop",
    backText:
      "Gift your best mate something practical, funny, or legendary — depending on the occasion.",
    colors: {
      frontBg: "bg-amber-50",
      backGradient: "from-amber-50 to-yellow-100",
      accent: "bg-amber-600",
    },
  },
  {
    id: 6,
    title: "Son",
    subtitle: "The little hero",
    frontImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop",
    backText:
      "Delight your son with playful and inspiring gifts for every age and milestone.",
    colors: {
      frontBg: "bg-sky-50",
      backGradient: "from-sky-50 to-blue-100",
      accent: "bg-sky-600",
    },
  },
];

export default function ShopForHim() {
  const [flippedId, setFlippedId] = useState<number | null>(null);

  const router = useRouter();

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
            Shop For Him
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of personalised gifts made for him —
            practical, stylish, and memorable.
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
                      role="button"
                      tabIndex={0}
                      onClick={() =>
                        setFlippedId((p) => (p === cat.id ? null : cat.id))
                      }
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
                          <span className="text-white text-2xl">🎁</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-6">
                          {cat.backText}
                        </p>
                        <button
                          type="button"
                          className={`px-6 py-2 ${cat.colors.accent} cursor-pointer text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300`}
                          onClick={() => {
                            /* replace with real routing or CTA */
                            router.push(`/products`);
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
