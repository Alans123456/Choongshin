// components/CollaborationsSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cg } from '@/assets/images';
import { npl } from '@/assets/images';
import { nwc } from '@/assets/images';
import { yeti } from '@/assets/images';

const CollaborationsSection: React.FC = () => {
  // Replace with your actual brand logos
  const brands = [
    {
      name: 'Yeti Airways',
      logo: yeti,
    },
    {
      name: 'NWC',
      logo: nwc
    },
    {
      name: "CG",
      logo:cg,
    },
    {
      name: "NPL",
      logo: npl,
    },
  ];

  return (
    <section className="bg-gray-200 py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
        
        {/* Brand Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-20">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <div className="relative w-full h-20 md:h-24 lg:h-28">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  quality={90}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Description Text */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-5xl mx-auto px-4">
            Creative collaborations with brands and organisations that resonate with our design philosophy. Limited Edition leather goods and other handcrafted results of artistic associations.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/collaborations"
            className="inline-block px-12 md:px-16 py-4 bg-black text-white text-xs md:text-sm tracking-[0.25em] font-light hover:bg-gray-800 transition-all duration-300"
          >
            SEE MORE COLLABORATIONS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;
