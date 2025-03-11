import Image from "next/image";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CakePage() {
  return (
    <div className="min-h-screen lg:bg-amber-950/50 bg-amber-950 w-full lg:rounded-[100px]">
      <Image
        src={"/hero6.jpg"}
        alt="hero"
        fill
        className="-z-10 md:object-cover brightness-50 hidden lg:inline-block"
      />
      <div className="flex flex-col">
        <div className="mb-24 top-0">
          <Navbar />
        </div>
        <div className="flex flex-col justify-center items-center mt-64">
          <p className="text-center text-4xl font-railey text-white mt-10">
            🎂 **Thank You for Your Order!**
            <br />
            Your delicious cupcakes are being prepared with love.
            <br />
            Expect sweetness to arrive soon! 🍰✨
          </p>
          <Link href={"/"}>
            <Button className="text-white font-railey bg-[#de3c4a] w-[300px] mt-8 text-3xl py-8 hover:bg-[#ee838c]">
              Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
