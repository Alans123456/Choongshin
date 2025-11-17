"use client";

import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {craft1} from "@/assets/images";
import {StaticImageData} from "next/image";
import {craft2} from "@/assets/images";
import {craft3} from "@/assets/images";
import {craft4} from "@/assets/images";
interface HeroSlide {
  id: number;
  image: string | StaticImageData;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Your 5 hero slides with images
  const slides: HeroSlide[] = [
    {
      id: 1,
      image: craft1,
      title: "The Art of",
      subtitle: "FESTIVE GIFTING",
      buttonText: "SHOP NOW",
      buttonLink: "/shop",
    },
    {
      id: 2,
      image: craft2,
      title: "Handcrafted",
      subtitle: "ELEGANCE",
      buttonText: "EXPLORE",
      buttonLink: "/shop",
    },
    {
      id: 3,
      image: craft3,
      title: "Artisan",
      subtitle: "COLLECTIONS",
      buttonText: "DISCOVER",
      buttonLink: "/shop",
    },
    {
      id: 4,
      image: craft4,
      title: "Curated",
      subtitle: "TREASURES",
      buttonText: "SHOP NOW",
      buttonLink: "/shop",
    },
    {
      id: 5,
      image: craft1,
      title: "Timeless",
      subtitle: "CRAFTSMANSHIP",
      buttonText: "VIEW MORE",
      buttonLink: "/shop",
    },
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full min-h-screen max-h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image src={slide.image} alt={slide.subtitle} fill priority={index === 0} className="object-cover" quality={90} />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 md:px-20 lg:px-32">
            <h2 className="text-amber-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-1 md:mb-2">{slide.title}</h2>
            <h1 className="text-amber-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif italic mb-6 md:mb-8 lg:mb-10">{slide.subtitle}</h1>
            <Link
              href={slide.buttonLink}
              className="inline-block w-fit px-6 sm:px-8 py-2.5 sm:py-3 border border-amber-100/50 bg-amber-100/5 backdrop-blur-sm text-amber-100 tracking-[0.2em] text-xs sm:text-sm hover:bg-amber-100/15 hover:border-amber-100 transition-all duration-500"
            >
              {slide.buttonText}
            </Link>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-8 sm:left-12 md:left-20 lg:left-32 flex gap-2 sm:gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-0.5 transition-all duration-500 ${index === currentSlide ? "bg-amber-100 w-8 sm:w-10 md:w-12" : "bg-amber-100/30 w-6 sm:w-8 hover:bg-amber-100/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
