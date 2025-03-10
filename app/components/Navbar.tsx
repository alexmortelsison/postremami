"use client";
import { RiShoppingBasketFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  return (
    <div className="py-8 flex justify-between md:max-w-7xl md:mx-auto items-center px-8 mr-8 md:mr-0 md:px-0 absolute top-0">
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={2000}
          height={2000}
          className="w-100 hover:invert"
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
      <div className="flex items-center px-8 lg:px-0 lg:mr-16 md:mr-8">
        <Button className="font-railey text-2xl text-white hover:text-[#de3c4a]">
          Sign in
        </Button>
        <RiShoppingBasketFill
          size={30}
          className="text-white hover:text-[#de3c4a]"
        />
      </div>
    </div>
  );
}
