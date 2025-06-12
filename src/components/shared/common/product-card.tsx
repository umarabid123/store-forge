import Image from "next/image";
import React from "react";
import CustomButton from "./custom-button";
import { CartIcon } from "@/svgs/header-svg-grabber";
import Link from "next/link";

interface Card {
  img: string;
}

const ProductCard: React.FC<Card> = ({ img }) => {
  return (
    <div className="mr-5 font-mulish  ">
      <div className=" relative group cursor-pointer py-">
        <Link href={"#details"}>
          <Image
            src={img}
            alt="eid dress"
            height={500}
            width={500}
            className="object-cover w-full transition-opacity duration-300 group-hover:opacity-0"
          />

          {/* show image on hover  */}
          <Image
            src={"/assets/eid2.webp"}
            alt="eid dress"
            height={250}
            width={230}
            className="object-cover w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          <div className=" w-fit h-fit z-10 absolute inset-0 top-4 left-4 flex flex-col gap-2 text-xs text-white  font-semibold *:px-2 *:py-1 *:w-fit">
            <span className="bg-zinc-800 ">NEW</span>
            <span className="bg-redText">Save 30%</span>
          </div>
        </Link>
        {/* btn  */}
        <div className="absolute bottom-4 right-4 ">
          <CustomButton
            btnText="+ Quick add"
            AdditionalStyle="hidden lg:flex bg-black text-white p-3 text-xs hover:!text-black hover:border-2 hover:bg-transparent  opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          <CartIcon className="lg:hidden h-10 w-10 p-3 bg-white" />
        </div>
      </div>
      <div className="py-2 px-1">
        <Link href={"#details"}>
          <p className="uppercase font-semibold  text-md text-center">
            checked casual shirt navy
          </p>
        </Link>
        <div className="flex flex-wrap justify-center gap-2 text-center text-sm font-extralight">
          <span className="text-red-500 ">Rs.3,146.50 </span>
          <span className="line-through">Rs.4,495.00</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
