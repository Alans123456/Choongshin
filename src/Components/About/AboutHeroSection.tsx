"use client";
import Image from "next/image";
import { hero } from "@/assets/images";
import { craft1 } from "@/assets/images";
import { craft2 } from "@/assets/images";
import { craft3 } from "@/assets/images";
import { craft4 } from "@/assets/images";
import { useEffect, useRef } from "react";

const images = [
  hero,
  craft1,
  craft2,
  craft3,
  craft4,
  craft4,
    
];

const AboutHeroSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollSpeed = 0.4; // control vertical scroll speed
    let scrollInterval: NodeJS.Timeout;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (container.scrollTop >= container.scrollHeight / 2) {
          container.scrollTop = 0;
        }
        container.scrollTop += scrollSpeed;
      }, 16); // ~60fps
    };

    startScrolling();
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-[#FAF7F2] to-[#F9F6F1] py-20 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT SIDE */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3E2F23] leading-tight">
            Our Story, <br />
            Your <span className="text-[#A67C52]">Legacy</span>
          </h1>

          <p className="text-[#5C4A38] text-lg sm:text-xl leading-relaxed">
            <strong>Choongshin</strong> began as a dream to preserve traditional craftsmanship
            while embracing modern creativity. Founded by artisans who believe that every
            gift carries a piece of the maker's soul, we continue to honor age-old techniques
            while innovating for today's discerning gift-givers.
          </p>

          {/* FEATURES */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-[#F1E4D4]/50 shadow-sm border border-[#E7D8C6]">
              <div className="text-[#8B5E3C] font-semibold mb-2">
                Heritage Meets Innovation
              </div>
              <p className="text-[#5C4A38] text-sm">
                Blending traditional techniques with contemporary design.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#E9E4DD]/50 shadow-sm border border-[#E7D8C6]">
              <div className="text-[#8B5E3C] font-semibold mb-2">
                Artisans First
              </div>
              <p className="text-[#5C4A38] text-sm">
                Supporting skilled craftsmen and preserving cultural heritage.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE GRID (AUTO-SCROLLING VERTICAL) */}
        <div
          ref={scrollRef}
          className="h-[420px] overflow-hidden rounded-2xl"
        >
          <div className="grid grid-cols-2 gap-3">
            {[...images, ...images].map((src, index) => (
              <div
                key={index}
                className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src={src}
                  alt={`craft-${index}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;