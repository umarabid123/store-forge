"use client";
import React, { useRef } from "react";
import CustomButton from "../shared/common/custom-button";
import { DropDownIcon, UserIcon } from "@/svgs/header-svg-grabber";
import ProductCard from "../shared/common/product-card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../shared/container";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setIndex } from "@/redux-store/slices/toggle";

const SectionComp = () => {
  const sliderRef = useRef<any>(null);
  const slides = useSelector((state: any) => state.slider.startIndex);
  const dispatch = useDispatch();

  const visiableSlide = 5.1;

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: visiableSlide,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2.4 } },
      { breakpoint: 640, settings: { slidesToShow: 1.3 } },
    ],
  };

  const images = [
    "/assets/eid1.webp",
    "/assets/eid1.webp",
    "/assets/eid1.webp",
    "/assets/eid1.webp",
    "/assets/eid1.webp",
    "/assets/eid1.webp",
    "/assets/eid1.webp",
  ];

  return (
    <div>
      {/* top big  image div  */}
      <div className="h-[560px] relative">
        <Image
          src={"/assets/festive.webp"}
          alt={"festive"}
          priority
          fill
          className="object-cover"
        />
      </div>

      <Container parentStyle="pl-5 bg-white !pr-0 py-10 bg-white text-black relative">
        {/* Section title */}
        <div className="flex md:items-center gap-4 flex-col md:flex-row justify-start md:justify-between md:mr-12">
          <span className="text-xl">Eid Drop - 25</span>
          <span className="group flex gap-2 cursor-pointer">
            <CustomButton
              btnText="View all"
              AdditionalStyle="!normal-case !font-normal group-hover:border-b"
            />
            <DropDownIcon
              stroke={3}
              size={12}
              className="-rotate-90 group-hover:bg-black group-hover:text-white bg-zinc-200 rounded-full p-1.5 h-6 w-6"
            />
          </span>
        </div>

        {/* Slider */}
        <div className="my-6 md:my-12 border">
          <Slider
            ref={sliderRef}
            {...settings}
            afterChange={(index) => dispatch(setIndex(index))}
          >
            {images.map((i, index) => (
              <div key={index} className=" ">
                <ProductCard img={i} />
              </div>
            ))}
          </Slider>
        </div>

        <div className="relative   flex  items-center py-5">
          {/* Custom Arrows div */}
          <div className="w-full  *:h-fit border justify-around flex items-center gap-3 ">
            <div className="w-[80%] border"></div>

            <div className="flex gap-3 items-center *:border *:rounded-full">
              <CustomButton
                disable={slides <= 0}
                onClick={() => sliderRef.current?.slickPrev()}
                AdditionalStyle={`h-12 w-12 rotate-90 text-center ${
                  slides <= 0 ? "bg-gray-300 cursor-not-allowed" : ""
                }`}
                icon={<DropDownIcon stroke={3} size={18} />}
              />
              <CustomButton
                disable={slides >= images.length - 5.1}
                onClick={() => sliderRef.current?.slickNext()}
                AdditionalStyle={`h-12 w-12 -rotate-90 text-center ${
                  slides >= images.length - 5.1
                    ? "bg-gray-300 cursor-not-allowed"
                    : ""
                }`}
                icon={<DropDownIcon stroke={3} size={18} />}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectionComp;
