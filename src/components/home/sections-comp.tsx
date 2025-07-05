"use client";
import React, { useRef } from "react";
import CustomButton from "../shared/common/custom-button";
 
import { ArrowIcon, DropDownIcon, UserIcon } from "@/svgs/header-svg-grabber";
 
 
import ProductCard from "../shared/common/product-card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../shared/container";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
 
import { setIndex } from "@/redux-store/slices/toggle-arrow";
import CustomLink from "../shared/common/custom-link";
import { Products } from "@/data";
import SectionTitle from "../shared/common/section-title";
 

interface SectionProps {
  category?: string;
  sectionTitle?: string;
  bannerImage1?: string;
  bannerImage2?: string;
 
  bannerVideo?: string;
  moreStyle?: string;
  iconStyle?: string;
}

const SectionComp = ({
  category,
  sectionTitle,
  bannerImage1,
  bannerImage2,
  moreStyle,
  iconStyle,
}: SectionProps) => {
 
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

 
  const filteredData = Products.filter((p) => p.category === category);

  return (
    <div>
 
      {/* Top banner image */}
      {bannerImage1 && (
        <div className="h-[560px] 2xl:h-[800px] relative">
          <Image
            src={bannerImage1}
            alt={sectionTitle ?? "Section banner"}
            priority
            height={1000}
            width={2000}
            // fill
            className="hidden md:flex object-cover h-full w-full"
          />
          <Image
            src={bannerImage2 ?? ""}
            alt={sectionTitle ?? "Section banner"}
            priority
            height={1000}
            width={2000}
            // fill
            className="md:hidden  object-cover h-full w-full"
          />
        </div>
      )}

 
      {sectionTitle && (
        <Container
          parentStyle={` bg-white !pr-0  bg-white text-black relative ${moreStyle}`}
        >
          {/* Section title */}
          <SectionTitle title={sectionTitle} iconStyles={iconStyle}/>
         
 

          {/* Slider */}
          <div className="my-6 md:mt-12">
            <Slider
              ref={sliderRef}
              {...settings}
              afterChange={(index) => dispatch(setIndex(index))}
            >
 
              {filteredData.slice(0, 8).map((i, index) => (
 
                <div key={index} className="">
                  <ProductCard product={i} />
                </div>
              ))}
            </Slider>
          </div>

          {/* Arrows */}
          <div className="w-full relative *:h-fit justify-around flex items-center gap-3">
            {/* progress bar  */}
            <div className="w-[80%] border"></div>

            {/* arrow btns  */}
            <div className="hidden md:flex gap-3 items-center *:border *:rounded-full ">
              <button
                disabled={slides <= 0}
                onClick={() => sliderRef.current?.slickPrev()}
                className={`h-12 w-12 rotate-90 text-center flex justify-center items-center group ${
                  slides <= 0
                    ? "border-gray-400 text-gray-600 cursor-not-allowed"
                    : " cursor-pointer"
                }`}
              >
                <DropDownIcon
                  stroke={3}
                  size={18}
                  className="group-hover:hidden"
                />
                <ArrowIcon
                  size={18}
                  className="rotate-90 hidden group-hover:flex"
                />
              </button>
              <button
 
                disabled={slides >= 8 - visiableSlide}
                onClick={() => sliderRef.current?.slickNext()}
                className={`h-12 w-12 -rotate-90 text-center flex justify-center items-center group ${
                  slides >= 8 - visiableSlide
 
                    ? "border-gray-400 text-gray-600 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                <DropDownIcon
                  stroke={3}
                  size={18}
                  className="group-hover:hidden"
                />
                <ArrowIcon
                  size={18}
                  className="rotate-90 hidden group-hover:flex"
                />
              </button>
            </div>
          </div>
        </Container>
      )}
 
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
