"use client";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Hero() {
  const { data: session } = useSession();
  const year = new Date().getFullYear();

  if (session) return redirect("/");

  return (
    <div className="flex flex-col md:justify-center md:items-center text-center max-w-7xl mx-auto mt-48">
      <Image
        src={"/hero6.jpg"}
        alt="hero"
        fill
        className="-z-10 object-cover brightness-30"
      />
      <div className="border bg-white/10 rounded-3xl lg:w-[70%] mx-16 lg:mx-0">
        <div className="grid lg:grid-cols-2">
          <div className="mt-16">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={2000}
              height={2000}
              className=""
            />
            <p className="flex text-center lg:text-start lg:w-150 w-full lg:pl-12 text-2xl text-white font-railey mt-24 px-8">
              Because you deserve more than just a cupcake.
            </p>
            <div
              className="flex justify-center items-center text-center border lg:w-[200px] w-[180px] pr-2 mx-auto mt-8 bg-white rounded-xl py-2 cursor-pointer space-x-2"
              onClick={() => signIn("google")}
            >
              <Image
                src={"/google.ico"}
                alt="logo"
                width={100}
                height={100}
                className="w-8"
              />
              <p className="text-sm">Sign in with Google</p>
            </div>
            <p className="text-gray-400 text-sm mt-40 mb-8">
              &copy; {year} All rights reserved. Postremami.
            </p>
          </div>
          <div className="w-full">
            <Image
              src={"/signinp.jpg"}
              alt="logo"
              width={2000}
              height={2000}
              className="h-full object-cover hidden lg:inline-grid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
