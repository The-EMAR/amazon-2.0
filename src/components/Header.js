import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />

          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right */}
        <div className="mx-6 text-white flex space-x-6 items-center text-xs whitespace-nowrap">
          <div className="link">
            <p>Hello, Mesut Boz</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>

          <div className="link">
            <p>Return</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="relative flex items-center link">
            <span className="absolute top-0 right-0 md:right-10 w-4 h-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>

            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex space-x-3 items-center p-2 pl-6 bg-amazon_blue-light text-sm text-white">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>

        <p className="link">Prime Video</p>
        <p className="link">Amazon Buisiness</p>
        <p className="link">Today's delas</p>
        <p className="hidden md:inline-flex link">Electorincs</p>
        <p className="hidden lg:inline-flex link">Prime Video</p>
        <p className="hidden lg:inline-flex link">Amazon Buisiness</p>
        <p className="hidden lg:inline-flex link">Today's delas</p>
      </div>
    </header>
  );
}

export default Header;