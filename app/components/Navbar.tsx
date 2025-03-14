"use client";
import { RiShoppingBasketFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Signin from "./Signin";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const navlinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "All Cupcakes",
    href: "/cakes",
  },
];

export default function Navbar() {
  const pathName = usePathname();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <div className="py-8 flex justify-between md:max-w-7xl md:mx-auto items-center px-8 mr-8 md:mr-0 md:px-0 top-0 border-gray-400 w-full fixed">
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={2000}
          height={2000}
          className="w-100"
        />
      </Link>
      <div className="space-x-4 text-white font-railey text-2xl hidden lg:inline-flex flex-1 justify-end pr-8">
        {navlinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              link.href === pathName
                ? "underline underline-offset-4 text-[#de3c4a] font-bold"
                : "text-gray-300 hover:text-[#de3c4a]"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center px-8 lg:px-0 lg:mr-16 md:mr-8 relative">
        <Signin />
        <Link href={"/cart"}>
          <RiShoppingBasketFill
            size={30}
            className="text-white hover:text-[#de3c4a]"
          />
          {cartItems.length > 0 && (
            <span className="bg-red-500 rounded-full text-white px-2 py-1 text-sm absolute -top-0 -right-2">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}
