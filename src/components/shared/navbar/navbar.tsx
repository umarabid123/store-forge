"use client";
import Image from "next/image";
import React from "react";
import CustomButton from "@/components/shared/common/custom-button";
import CustomLink from "../common/custom-link";
import SocialLinks from "../common/social-links";
import { usePathname } from "next/navigation";
import { RootState } from "@/components/shared/types";
import CollectionItems from "./collection-items";
import AccessoriesItems from "./accessories-items";
import { useSelector, useDispatch } from "react-redux";
import SearchBox from "./search-box";
import CloseIcon, {
  CartIcon,
  DropDownIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "@/svgs/header-svg-grabber";
import {
  Collection,
  ToggleEvent,
  MenubarItems,
  Search,
} from "@/redux-store/slices/toggle-arrow";



const Navbar = ({ navParent }: { navParent?: string }) => {
  const menuitems = useSelector((state: RootState) => state.slider.menuBar);
  const store = useSelector((state: RootState) => state.slider.AccToggle);
  const collections = useSelector(
    (state: RootState) => state.slider.colectionToggle
  );
  const searchBar = useSelector((state: RootState) => state.slider.search);
  const subCollectionsItem = useSelector(
    (state: RootState) => state.slider.subCollection
  );

  const dispatch = useDispatch();
  const pathname = usePathname();

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
      {collections && <CollectionItems subItem={subCollectionsItem} />}

      {/* when click on Accessories show menu  */}
      {store && <AccessoriesItems />}

      {/* icons part  */}
      <div className="  flex items-center gap-4 *:cursor-pointer">
        <span onClick={() => dispatch(Search())}>
          <SearchIcon className="hidden md:flex" />
        </span>
        <UserIcon className="hidden md:flex" />
        <CartIcon />
      </div>

      {/* search bar  */}
      {searchBar && <SearchBox />}
    </div>
  );
};

export default Navbar;
