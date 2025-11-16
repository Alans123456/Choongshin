"use client";

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
      "Our commitment to eco-friendly practices means you can indulge in luxury with a clear conscience. We use responsibly sourced wood and sustainable production methods.",
    image: craft1,
  },
  {
    number: "02",
    title: "Innovation in Tradition",
    description:
      "We combine traditional woodworking techniques with modern design sensibilities, creating products that are both timeless and contemporary.",
    image: craft2,
  },
  {
    number: "03",
    title: "Storytellers in Wood",
    description:
      "Every knot, grain, and hue tells a story. We help you tell yours, creating narrative pieces that speak volumes without saying a word.",
    image: craft3,
  },
  {
    number: "04",
    title: "Assured Quality",
    description:
      "At Choongshin, quality is the driving force behind everything we do. We are committed to delivering exceptional products and services that exceed expectations.",
    image: craft4,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-20 bg-[#f7f3ee]">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl font-title-bold text-neutral-900 mb-4 tracking-tight">
          Why Choose Us?
        </h2>
        <p className="text-neutral-600 text-base leading-relaxed">
          Enjoy reasonable pricing, fast express delivery, and high-quality
          products. <br />
          Make every gift exceptional with Choongshin.
        </p>
      </div>

      {/* Reason Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto text-center">
        {reasons.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Starburst Number Badge */}
            <div
              className="w-24 h-24 flex items-center justify-center text-2xl font-bold text-neutral-800 bg-[#e18c64] text-center mb-6"
              style={{
                clipPath:
                  "polygon(50% 0%, 61% 19%, 80% 20%, 68% 36%, 70% 57%, 50% 48%, 30% 57%, 32% 36%, 20% 20%, 39% 19%)",
              }}
            >
              {item.number}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-neutral-600 leading-relaxed max-w-xs mx-auto">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
