 
"use client";
import Image from "next/image";
import React from "react";
import CustomButton from "@/components/shared/common/custom-button";
import CloseIcon, {
 
  CartIcon,
  DropDownIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "@/svgs/header-svg-grabber";
 
import { useSelector, useDispatch } from "react-redux";
import {
  Collection,
  ToggleEvent,
  SubCollection,
  MenubarItems,
 
  Search,
  setQuery,
  setResults,
} from "@/redux-store/slices/toggle-arrow";
import CustomLink from "./common/custom-link";
import SocialLinks from "./common/social-links";
import { usePathname } from "next/navigation";
import path from "path";

const Navbar = ({ navParent }: { navParent?: string }) => {
  const menuitems = useSelector((state: any) => state.slider.menuBar);
  const store = useSelector((state: any) => state.slider.AccToggle);
  const collections = useSelector((state: any) => state.slider.colectionToggle);
  const searchBar = useSelector((state: any) => state.slider.search);
  const subCollectionsItem = useSelector(
    (state: any) => state.slider.subCollection
  );
  const search = useSelector((state: any) => state.slider.search);

  const dispatch = useDispatch();
  const pathname = usePathname();
 

  const collectionsElements = [
    {
      label: "New Arrivals",
 
      path: "/collections/s12025",
    },
    {
      label: "Fragrances",
      path: "/collections/perfume-bodyworks",
 
    },
    {
      label: "Polo & Tees",
      path: "/collections/polo-tees",
    },
    {
      label: "Shirts",
      icon: true,
      subCollection: [
 
        { id: 1, label: "Casual Shirts", path: "/collections/casual-shirts" },
        {
          id: 2,
          label: "Formal Shirts",
          path: "/collections/semi-formal-full-sleeve-shirts",
        },
 
      ],
    },
    {
      label: "Suiting",
      path: "/collections/suiting",
    },
    {
      label: "Semi Formal Coats",
 
      path: "/collections/casual-coats",
 
    },
    {
      label: "Afroz",
      icon: true,
      subCollection: [
 
        {
          id: 1,
          label: "Kurta Collection",
          path: "/collections/shalwar-kameez",
        },
        { id: 2, label: "Waistcoats", path: "/collections/waist-coats" },
 
      ],
    },
    {
      label: "Bottoms",
      icon: true,
      subCollection: [
        { id: 1, label: "Trousers", path: "/collections/trousers" },
        { id: 2, label: "Jeans", path: "/collections/jeans" },
 
      ],
    },
    {
      label: "Winter",
      icon: true,
      subCollection: [
        { id: 1, label: "Jackets", path: "/collections/jackets" },
        { id: 2, label: "Sweaters", path: "/collections/sweaters" },
        { id: 3, label: "Hoodies", path: "/collections/hoodies" },
      ],
    },
  ];

  const accessoriesList = [
    { label: "Ties", path: "/collections/ties" },
    { label: "Belts", path: "/collections/belts" },
    { label: "Tie Boxes", path: "/collections/tie-boxes" },
    { label: "Lapel pin", path: "/collections/lapel-pin" },
    { label: "Cufflinks", path: "/collections/cufflinks" },
    { label: "Wallets", path: "/collections/wallets" },
    { label: "Tie Pin", path: "/collections/tie-pin" },
    { label: "Boxers", path: "/collections/boxers" },
    { label: "Gift Boxes", path: "/collections/gift-boxes" },
    { label: "Vests", path: "/collections/vests" },
    { label: "Bow Tie", path: "/collections/bow-tie" },
    // { label: "View all", path: "/collections/accessories" },
  ];

  return (
 
    <div
      className={`py-7 px-2 sm:px-8 relative z-40 md:px-10 bg-transperant text-black flex items-center justify-between ${navParent}`}
    >
 
      {/* menu icons shown on small screens */}
      <div className="flex gap-2 lg:hidden">
        <span onClick={() => dispatch(MenubarItems())}>
          <MenuIcon />
        </span>
 
        <span onClick={() => dispatch(Search())}>
          <SearchIcon className=" md:hidden" />
        </span>
      </div>

{/* logo   */}
<CustomLink to="/" styles="py-2">
  {pathname === "/" ? (
    <Image
      src={"/logo.svg"}
      alt="forge"
      height={110}
      width={210}
      className="w-44 sm:h-12 sm:w-54 "
    />
  ) : (
    <Image
      src={"/logo-white.avif"}
      alt="forge"
      height={190}
      width={110}
      className="h-7 w-44 sm:w-54"
    />
  )}
</CustomLink>

 
      {/* nav links for lg screens    */}
      <div className=" hidden lg:flex gap-5 ">
        {/* 1 */}
        <CustomButton
          btnText={"collections"}
          icon={<DropDownIcon size={16} />}
          onClick={() => dispatch(Collection())}
        />
        {/* 2 */}
        <CustomButton
          btnText={"accessories"}
          icon={<DropDownIcon size={16} />}
          onClick={() => dispatch(ToggleEvent())}
        />
        {/* 3 */}
 
        <CustomLink to="/collections/flash-sale">
          <CustomButton btnText={"clearance sale"} />
        </CustomLink>
 
      </div>

      {/* menbar for small screeens  */}
      {menuitems && (
        <div
          className="bg-black/20  h-full w-full fixed top-0 left-0 flex items-center md:justify-start"
          onClick={() => dispatch(MenubarItems())}
        >
          <div
            onClick={() => dispatch(MenubarItems())}
            className="bg-white text-black p-8  h-[94%] m-auto w-[90%] md:w-1/2 md:ml-4"
          >
            {/* close btn  */}
            <div onClick={() => dispatch(MenubarItems())}>
              <CustomButton
                icon={
                  <CloseIcon
                    size={18}
                    className="transition-transform duration-300 group-hover:!rotate-90 "
                  />
                }
                AdditionalStyle="border !border-gray-300 p-4 rounded-full"
              />
            </div>

            <div className=" flex flex-col justify-between h-full pb-10">
              <div className="*:my-5">
 
                {/* 1 */}
                <CustomButton
                  btnText={"collections"}
                  icon={
                    <DropDownIcon
                      size={30}
                      className="-rotate-90 bg-gray-300 p-2 rounded-full hover:bg-black hover:text-white"
                    />
                  }
                  AdditionalStyle="!w-full !justify-between "
                  onClick={() => dispatch(Collection())}
                />
                {/* 2 */}
                <CustomButton
                  btnText={"accessories"}
                  icon={
                    <DropDownIcon
                      size={30}
                      className="-rotate-90 bg-gray-300 p-2 rounded-full hover:bg-black hover:text-white"
                    />
                  }
                  AdditionalStyle="!w-full !justify-between "
                  onClick={() => dispatch(ToggleEvent())}
                />
                {/* 3 */}
                <CustomLink to="/collections/flash-sale">
                  <CustomButton btnText={"clearance sale"} />
                </CustomLink>
              </div>

              <div>
                <SocialLinks />
                <hr className="my-5" />
                <CustomLink
                  to="/account"
                  styles="font-semibold text-center text-xl my-2"
                >
                  Account
                </CustomLink>
              </div>
 
            </div>
          </div>
        </div>
      )}

      {/* when click on collections show menu  */}
      {collections && (
        <div
          className="bg-black/60 h-full w-full fixed top-0 left-0 flex items-center"
          onClick={() => dispatch(Collection())}
        >
          {/* inner div  */}
          <div
            className="text-black   p-11 bg-white z-10 overflow-auto h-[95%] w-[90%] md:w-96 m-auto md:ml-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* close btn  */}
            <CustomButton
              icon={
                <CloseIcon
                  size={18}
                  className="transition-transform duration-300 group-hover:!rotate-90 "
                />
              }
              AdditionalStyle="border !border-gray-300 p-4 rounded-full"
              onClick={() => dispatch(Collection())}
            />

            {/* nav Collection menu element  */}
            <ul className=" ">
              {collectionsElements.map((i, index) => (
                <li
                  key={index}
                  className="font-mulish tracking-wider font-semibold text-[1.25rem] my-4 group cursor-pointer w-full"
                >
                  {i.path ? (
 
                    <CustomLink
                      to={i.path}
                      styles="group-hover:border-b"
                      click={() => dispatch(Collection())}
                    >
 
                      {i.label}
                    </CustomLink>
                  ) : (
                    <div
                      className="flex items-center justify-between group "
                      onClick={() => dispatch(SubCollection(i.label))}
                    >
                      <span className="group-hover:border-b">{i.label}</span>
                      {i.icon && (
                        <DropDownIcon className="-rotate-90 h-7 w-7 rounded-full bg-gray-200 p-2 group-hover:text-white group-hover:bg-black" />
                      )}
                    </div>
                  )}

                  {/* nested sub collection menu  */}
                  {subCollectionsItem === i.label && i.subCollection && (
                    <ul className="ml-4 fixed top-4 left-2 md:top-6 md:left-96  w-[90%] md:w-96 m-auto md:ml-4 z-50 h-[95%] p-11 pt-24 border-l border-gray-300 bg-white ">
                      {/* close btn  */}
                      <CustomButton
                        icon={
                          <CloseIcon
                            size={18}
                            className=" transition-transform duration-300 group-hover:!rotate-90 "
                          />
                        }
                        AdditionalStyle="md:hidden border !border-gray-300 p-4 rounded-full"
                        onClick={() => dispatch(SubCollection(i.label))}
                      />

                      {i.subCollection?.map((e, index) => (
                        <li key={index} className="my-4 ">
 
                          <CustomLink
                            click={() => dispatch(Collection())}
                            to={e.path}
                            styles="w-fit hover:border-b"
                          >
 
                            {e.label}
                          </CustomLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              {/* end image in accessories  */}
              <CustomLink to="/collections/accessories" styles="  h-36 ">
                <div className="relative">
                  <Image
                    src={"/assets/access.avif"}
                    alt="Accessories"
                    height={1000}
                    width={1000}
                    className="transition-transform duration-200 hover:scale-105 object-cover  h-full w-full"
                  />
                  <p className="absolute inset-0 flex items-end w-fit font-bold p-3  text-xl">
                    View all
                  </p>
                </div>
              </CustomLink>
            </ul>
          </div>
        </div>
      )}

      {/* when click on Accessories show menu  */}
      {store && (
        <div
          className="bg-black/60 h-full w-full fixed top-0 left-0 flex items-center"
          onClick={() => dispatch(ToggleEvent())}
        >
          <div
            className="text-black p-11 bg-white z-80 overflow-auto h-[95%] m-auto w-[90%] md:w-96 md:ml-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* close btn  */}
            <CustomButton
              icon={
                <CloseIcon
                  size={18}
                  className="transition-transform duration-300 group-hover:!rotate-90 "
                />
              }
              AdditionalStyle="border !border-gray-300 p-4 rounded-full"
              onClick={() => dispatch(ToggleEvent())}
            />

            {/* nav Accessories menu element  */}
            <ul>
              {accessoriesList.map((i, index) => (
                <li
                  key={index}
                  className="font-mulish tracking-wider font-semibold text-[1.25rem] my-4 group cursor-pointer w-full"
                >
                  <CustomLink
                    to={i.path}
                    styles="group-hover:border-b group-hover:"
                  >
                    {i.label}
                  </CustomLink>
                </li>
              ))}
              {/* meny end image in accessories  */}
              <CustomLink to="/collections/accessories" styles="  h-36 ">
                <div className="relative">
                  <Image
                    src={"/assets/access.avif"}
                    alt="Accessories"
                    height={1000}
                    width={1000}
                    className="transition-transform duration-200 hover:scale-105 object-cover  h-full w-full"
                  />
                  <p className="absolute inset-0 flex items-end w-fit font-bold p-3  text-xl">
                    View all
                  </p>
                </div>
              </CustomLink>
            </ul>
          </div>
        </div>
      )}
 

      {/* icons part  */}
      <div className="  flex items-center gap-4 *:cursor-pointer">
        <span onClick={() => dispatch(Search())}>
          <SearchIcon className="hidden md:flex" />
        </span>
        <UserIcon className="hidden md:flex" />
        <CartIcon />
      </div>

      {/* search bar  */}
      {searchBar && (
        <div
          className="bg-black/20  h-full w-full fixed top-0 left-0 flex items-center md:justify-start"
          onClick={() => dispatch(Search())}
        >
          <div
            className="text-black p-11 absolute right-0 bg-white  overflow-auto h-[95%] m-auto w-[90%] md:w-1/2 md:mr-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b-2 flex justify-between">
              <input
                type="text"
                placeholder="Search for ..."
                className="w-full py-3 text-xl font-medium font-mulish outline-none"
              />
              <CustomButton
                icon={
                  <CloseIcon
                    size={24}
                    className="transition-transform duration-300 group-hover:!rotate-90 "
                  />
                }
                onClick={() => dispatch(Search())}
              />{" "}
            </div>
          </div>
        </div>
      )}
 
 
    </div>
  );
};

export default Navbar;
