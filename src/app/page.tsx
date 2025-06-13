import React from "react";
import TopHeaderSlider from "@/components/shared/top-header-slider";
import HeroSection from "@/components/home/hero-section";
import SectionComp from "@/components/home/sections-comp";

const page = () => {
  return (
    <div>
      <TopHeaderSlider />
      <HeroSection />

      {/* sections  */}
      <div>
        <SectionComp category="eid-drop" sectionTitle="Eid Drop - 25" />
        <SectionComp
          category="festive"
          sectionTitle="Festive - 25"
          bannerImage="/assets/festive.webp"
          moreStyle="!bg-black text-white"
        />
        <SectionComp
          category="suits"
          sectionTitle="suiting - 25"
          bannerImage="/assets/suit.webp"
        />
        <div className="h-[560px] 2xl:h-[800px] relative">
          <video
            src="/assets/video/banner.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>
{/* title-slider  */}
        <div>

        </div>

        <SectionComp
          category="perfumes"
          sectionTitle="perfumes & Oud - 25"
          bannerImage="/assets/perfume.webp"
        />
        <SectionComp
          category="accessories"
          sectionTitle="accessories - 25"
          bannerImage="/assets/accessories.webp"
          moreStyle="!bg-black text-white"
        />
        <SectionComp bannerImage="/assets/bespoke.webp" />
      </div>

    </div>
  );
};

export default page;
