import Image from "next/image";
import React from "react";
import CustomButton from "@/components/shared/common/custom-button";
import {
  CartIcon,
  DropDownIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "@/svgs/header-svg-grabber";

const Navbar = () => {
  const navElements = [
    {
      id: 1,
      label: "collections",
      icon: <DropDownIcon size={16} className=" " />,
    },
    {
      id: 2,
      label: "accessories",
      icon: <DropDownIcon size={16} className=" " />,
    },
    { id: 3, label: "father's day deals" },
    { id: 4, label: "clearance sale" },
  ];

  return (
    <div className="py-7 px-2 sm:px-8 md:px-10 lg:px-5  bg-transperant text-black flex items-center justify-between">
     
      {/* menu icons  */}
      <div className="flex gap-2 lg:hidden">
        <MenuIcon />
        <SearchIcon className=" md:hidden" />
      </div>

      {/* logo   */}
      <div className="w-44 sm:h-12 sm:w-54 ">
        <Image
          src={"./logo.svg"}
          alt="forge"
          height={110}
          width={210}
          className="h-full w-full"
        />
      </div>

      {/* nav elements  */}
      <div className=" hidden lg:flex gap-5 lg:pr-">
        {navElements.map((i) => (
          <div key={i.id} className="">
            <CustomButton btnText={i.label} icon={i.icon} />
          </div>
        ))}
      </div>

      {/* icons part  */}
      <div className="  flex items-center gap-4">
        <SearchIcon className="hidden md:flex" />
        <UserIcon className="hidden md:flex" />
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
