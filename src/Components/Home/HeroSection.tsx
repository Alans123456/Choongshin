"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { hero } from "@/assets/images";
import { craft1 } from "@/assets/images";
import { craft2 } from "@/assets/images";
import { craft3 } from "@/assets/images";
import { craft4 } from "@/assets/images";

const images = [hero, craft1, craft2, craft3, craft4, craft4];

const HeroSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollSpeed = 0.5;
    let animationId: number;

    const scroll = () => {
      if (container.scrollTop >= container.scrollHeight / 2) {
        container.scrollTop = 0;
      }
      container.scrollTop += scrollSpeed;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-[#FAF7F2] to-[#F9F6F1] overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT SIDE */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3E2F23] leading-tight">
              Crafted with Heart, <br />
              Gifted with <span className="text-[#A67C52]">Love</span>
            </h1>

            <p className="text-[#5C4A38] text-lg sm:text-xl leading-relaxed">
              At <strong>Choongshin</strong>, we transform the art of gifting into
              a heartfelt experience. Each of our handcrafted creations tells a
              story — celebrating creativity, craftsmanship, and the joy of
              meaningful personalization.
            </p>

            {/* FEATURES */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 rounded-2xl bg-[#F1E4D4]/50 shadow-sm border border-[#E7D8C6]">
                <div className="text-[#8B5E3C] font-semibold mb-2">
                  Personalized, Just for You
                </div>
                <p className="text-[#5C4A38] text-sm">
                  Unique pieces reflecting your personality and style.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#E9E4DD]/50 shadow-sm border border-[#E7D8C6]">
                <div className="text-[#8B5E3C] font-semibold mb-2">
                  Local Craft, Global Love
                </div>
                <p className="text-[#5C4A38] text-sm">
                  Quality with heart — rooted locally, admired globally.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE GRID (AUTO-SCROLLING VERTICAL) */}
          <div
            ref={scrollRef}
            className="h-[420px] overflow-y-scroll scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="grid grid-cols-2 gap-3">
              {/* First set of images */}
              {images.map((src, index) => (
                <div
                  key={`first-${index}`}
                  className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden shadow-md relative"
                >
                  <Image
                    src={src}
                    alt={`craft-${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {images.map((src, index) => (
                <div
                  key={`second-${index}`}
                  className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden shadow-md relative"
                >
                  <Image
                    src={src}
                    alt={`craft-duplicate-${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default HeroSection;