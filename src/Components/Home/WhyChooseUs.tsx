"use client";

import React from "react";
import Image from "next/image";
import craft1 from "@/assets/images/craft1.png";
import { craft2 } from "@/assets/images";
import { craft3 } from "@/assets/images";
import { craft4 } from "@/assets/images";

const reasons = [
  {
    number: "01",
    title: "Sustainable Luxury",
    description:
      "Indulge responsibly — we use responsibly sourced wood and mindful production methods.",
    image: craft1,
  },
  {
    number: "02",
    title: "Innovation in Tradition",
    description:
      "Handmade craft meets modern design for pieces that feel both timeless and fresh.",
    image: craft2,
  },
  {
    number: "03",
    title: "Storytellers in Wood",
    description:
      "Each piece carries character — knots, grain and color tell a story that becomes yours.",
    image: craft3,
  },
  {
    number: "04",
    title: "Assured Quality",
    description:
      "Quality-first: tested finishes, precise joinery, and lasting finishes you can trust.",
    image: craft4,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20 bg-linear-to-b from-[#fbf6f1] to-[#f7f3ee]">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-title-bold text-neutral-900 mb-4 tracking-tight">
          Why Choose <span className="text-[#e18c64]">Choongshin</span>
        </h2>
        <p className="text-neutral-600 text-base leading-relaxed max-w-2xl mx-auto">
          Thoughtfully made gifts, crafted with care. Reasonable prices, express delivery,
          and designs that become heirlooms.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {reasons.map((item, i) => (
          <article
            key={i}
            className="relative group bg-white/60 backdrop-blur-sm rounded-2xl p-5 pt-10 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            aria-labelledby={`reason-${i}-title`}
          >
            {/* Decorative card image */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-28 h-28 rounded-full overflow-hidden ring-4 ring-white shadow-md group-hover:scale-105 transition-transform duration-300">
              <Image src={item.image} alt={item.title} className="object-cover" />
            </div>

            {/* Starburst SVG Number Badge (centered inside SVG) */}
            <div className="mt-6 mb-3">
              <svg
                width="84"
                height="84"
                viewBox="0 0 84 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto block"
                aria-hidden
              >
                <defs>
                  <linearGradient id={`g-${i}`} x1="0" x2="1">
                    <stop offset="0%" stopColor="#ffd8c0" />
                    <stop offset="100%" stopColor="#e18c64" />
                  </linearGradient>
                </defs>

                {/* starburst path */}
                <path
                  d="M42 4l6.5 14.6L64 22l-12 9.6L56.9 46 42 37.5 27.1 46 32 31.6 20 22l15.5-3.4L42 4z"
                  fill={`url(#g-${i})`}
                  opacity="0.98"
                />

                {/* circle background for contrast */}
                <circle cx="42" cy="42" r="20" fill="#fff" />

                {/* number text centered */}
                <text
                  x="42"
                  y="46"
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="700"
                  fill="#3b2b24"
                >
                  {item.number}
                </text>
              </svg>
            </div>

            <h3 id={`reason-${i}-title`} className="text-lg font-semibold text-neutral-900 mt-3">
              {item.title}
            </h3>

            <p className="text-sm text-neutral-600 leading-relaxed mt-2 mb-4 px-2">
              {item.description}
            </p>

            <hr className="w-12 border-t-2 border-[#efc8b2] my-2" />

            <a
              href="#"
              className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#7a4a3a] hover:text-[#e18c64] transition-colors duration-200"
              aria-label={`Learn more about ${item.title}`}
            >
              Learn more
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Subtle hover overlay accent */}
            <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-transparent to-[#fff2ea]/60"></span>
          </article>
        ))}
      </div>

      {/* Accent footer wave */}
      <div className="mt-12 max-w-7xl mx-auto">
        <svg className="w-full h-10" viewBox="0 0 1200 40" preserveAspectRatio="none">
          <path d="M0 10 C 300 40 900 0 1200 20 L1200 40 L0 40 Z" fill="#f7f3ee" />
        </svg>
      </div>
    </section>
  );
}
