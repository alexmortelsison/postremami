"use client";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Hero() {
  const { data: session } = useSession();

  if (!session) return redirect("/signin");

  return (
    <div className="flex flex-col md:justify-center mt-72 lg:mt-96 md:items-center text-center max-w-7xl mx-auto">
      <Image
        src={"/hero6.jpg"}
        alt="hero"
        fill
        className="-z-10 object-cover brightness-50"
      />
      <Navbar />
      <p className="text-white font-extrabold md:text-8xl text-5xl font-railey">
        <span className="text-[#de3c4a]">Sweet</span> Moments, One{" "}
        <span className="text-[#de3c4a]">Cupcake</span> at a Time!
      </p>
      <p className=" text-gray-100 text-xl mt-4 lg:w-[1000px] px-8">
        Indulge in handcrafted cupcakes made with the finest ingredients, baked
        fresh daily, and topped with rich, velvety frosting. Every bite is a
        taste of pure joy—because you deserve more than just a cupcake, you
        deserve a sweet experience!
      </p>
      <div>
        <Link href={"/cakes"}>
          <Button className="mt-16 text-white font-railey text-3xl bg-[#de3c4a] px-8 py-7 w-[300px] hover:bg-[#ac5d5df3]">
            See cupcakes
          </Button>
        </Link>
      </div>
    </div>
  );
}
