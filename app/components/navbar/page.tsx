import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="flex md:flex-row md:justify-start  justify-between items-center flex-col mb-1 py-2 shadow-md">
        <div className="logo mx-5 ">
            <Link href={"/"}>
          <Image
            src="/images/logo.jpeg"
            alt="logo img"
            width={80}
            height={30}
          /></Link>
        </div>
        <div className="nav">
          <ul className="flex item-center space-x-4 font-semibold  md:text-lg">
            <Link href={"/tshirt"}>
              <li>Tshirts</li>
            </Link>
            <Link href={"/hoodies"}>
              <li>Hoodies</li>
            </Link>
            <Link href={"/stickers"}>
              <li>Stickers</li>
            </Link>
            <Link href={"/mugs"}>
              <li>Mugs</li>
            </Link>
          </ul>
        </div>
        <div className="cart absolute right-0 mx-12 top-8">
          <FaShoppingCart className="text-xl md:text-3xl  text-pink-500 " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
