"use client";
import Image from "next/image";
import craft1 from "@/assets/images/craft1.png";
import { craft2 } from "@/assets/images";
import { craft3 } from "@/assets/images";
import { craft4 } from "@/assets/images";

const occasions = [
  {
    title: "Father's Day",
    description: "Thoughtful treasures to celebrate Dad's special day.",
    image: craft1,
  },
  {
    title: "Dashain",
    description: "Festive offerings to honor tradition and family bonds.",
    image: craft2,
  },
  {
    title: "Tihar",
    description: "Luminous presents to brighten the festival of lights.",
    image: craft3,
  },
  {
    title: "Corporate Event",
    description: "Professional solutions for impactful business gatherings.",
    image: craft4,
  },
];

const ShopByOccasion = () => {
  return (
    <section className='py-24 sm:px-10 lg:px-20 bg-tertiary'>
      {/* Heading */}
      <div className='text-center max-w-full mx-auto mb-16'>
        <h2 className='text-4xl sm:text-5xl  font-title-bold text-neutral-900 mb-4 tracking-tight'>
          Shop By Occasion
        </h2>
        <p className='text-neutral-600 text-base leading-relaxed'>
          Discover handcrafted treasures for every celebration. Our artisan
          collection brings together traditional craftsmanship and timeless
          elegance, perfect for honoring life's special moments.
        </p>
      </div>

      {/* Occasion Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
        {occasions.map((item, index) => (
          <div
            key={index}
            className='bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer'>
            <div className='aspect-[4/3] bg-neutral-100 overflow-hidden relative'>
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className='object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out'
              />
              <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300'></div>
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-bold text-neutral-900 mb-2'>
                {item.title}
              </h3>
              <p className='text-sm text-neutral-600 leading-relaxed'>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByOccasion;
