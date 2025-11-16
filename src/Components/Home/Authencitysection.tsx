// components/AuthenticitySection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Package, Scissors } from 'lucide-react';
import { craft1 } from '@/assets/images';

const AuthenticitySection: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Verified artisans',
      subtitle: 'and weavers'
    },
    {
      icon: Package,
      title: 'Exquisite',
      subtitle: 'products'
    },
    {
      icon: Scissors,
      title: 'Intricate',
      subtitle: 'designs'
    }
  ];

  return (
    <section className="bg-gray-300 py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left: Image */}
          <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full">
            <Image
              src={craft1} 
              alt="Artisans and weavers showcasing traditional craftsmanship"
              fill
              className="object-cover object-center rounded-lg shadow-xl"
              quality={90}
              priority
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center py-8 lg:py-0">
            <h2 className="text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif mb-10 lg:mb-14 leading-tight">
              A True Reflection of Authenticity
              <br />
              <span className="italic font-normal">& Tradition</span>
            </h2>

            {/* Features */}
            <div className="space-y-7 mb-12 lg:mb-14">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-gray-600 flex items-center justify-center flex-shrink-0 bg-white/50">
                      <Icon className="text-gray-800" size={26} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-gray-800 text-lg md:text-xl font-light leading-relaxed">
                        {feature.title}
                      </p>
                      <p className="text-gray-800 text-lg md:text-xl font-light leading-relaxed">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="/shop"
                className="inline-block px-12 py-3.5 border-2 border-gray-700 text-gray-800 text-sm tracking-[0.2em] font-light hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticitySection;

