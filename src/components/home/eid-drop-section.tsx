'use client';
import React, { useRef } from "react";
import CustomButton from "../shared/common/custom-button";
import { DropDownIcon } from "@/svgs/header-svg-grabber";
import ProductCard from "../shared/common/product-card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomArrow from "../shared/common/custom-arrows";

const EidDropSection = () => {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5.2,
    slidesToScroll: 1,
    arrows: false, 
     responsive: [
      { breakpoint: 768, settings: { slidesToShow: 3.3 } },
      { breakpoint: 640, settings: { slidesToShow: 2.2 } },
      { breakpoint: 480, settings: { slidesToShow: 1.3 } },
    ],
  };

  return (
    <div className="pl-12 py-12  bg-white text-black relative">
      
      {/* Section title */}
      <div className="flex items-center justify-between mr-12">
        <span className="text-xl">Eid Drop - 25</span>
        <span>
          <CustomButton
            btnText="View all"
            AdditionalStyle="!normal-case !font-normal"
            icon={
              <DropDownIcon
                stroke={3}
                size={12}
                className="-rotate-90 bg-zinc-200 rounded-full p-1.5 h-6 w-6"
              />
            }
          />
        </span>
      </div>

      

      {/* Slider */}
      <div className="my-12">
        <Slider ref={sliderRef} {...settings}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Slider>
      </div>


      <div className="relative   flex  items-center py-5">
       
        {/* Custom Arrows div */}
      <div className="absolute bottom-5 right-12 z-20 flex gap-3">
        <CustomArrow
          direction="prev"
          onClick={() => sliderRef.current?.slickPrev()}
          prevIconStyle="h-4 w-4 rotate-"
        />
        <CustomArrow
          direction="next"
          onClick={() => sliderRef.current?.slickNext()}
          nextIconStyle="h-4 w-4 -rotate-90"
        />
      </div>
      <div className="w-[80%] border"></div>
    
      </div>
    </div>
  );
};

export default EidDropSection;
