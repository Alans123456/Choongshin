"use client";

import HeroSection from "@/Components/Home/HeroSection";
import ShopByOccasion from "@/Components/Home/ShopSection";
import WhyChooseUs from "@/Components/Home/WhyChooseUs";
import ShopForHer from "@/Components/Home/ShopHer";
import HeroSection1 from "@/Components/Home/HeroSection1";
import AuthenticitySection from "@/Components/Home/Authencitysection";
import CollaborationsSection from "@/Components/Home/CollaborationSection";


export default function HomePage() {
  return (
    <div className='min-h-screen w-full p-0 m-0 overflow-hidden bg-gray-100'>
      {/* Other Sections */}

      <HeroSection1/>
      <HeroSection />
      <ShopByOccasion />
      <CollaborationsSection/>
      <AuthenticitySection/>
      <ShopForHer/>
      <WhyChooseUs/>

    </div>
  );
}
