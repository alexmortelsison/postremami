"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/store/features/cartSlice";
import { toast } from "sonner";

export default function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  const addQuantity = (id: string) => {
    dispatch(increaseQuantity(id));
  };
  const subtractQuantity = (id: string) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
    toast.success("Successfully removed from cart.");
  };

  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });
      if (!res.ok) {
        throw new Error();
      }
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
        <p className="flex justify-center mt-20 font-railey text-white text-5xl text-center">
          Great choice! Your cupcakes are ready to be checked out.
        </p>
        <div className="mt-16 border-t border-b border-gray-300 py-8 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 items-center text-center justify-center">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-center">
              <div className="flex flex-col w-full items-center justify-center text-center">
                <Image
                  src={item.image}
                  alt="photo"
                  width={200}
                  height={200}
                  className="rounded-2xl w-30 h-30 object-cover"
                />
                <div className="flex flex-col items-center">
                  <p className="text-white font-railey text-2xl mt-2 font-bold">
                    {item.name}
                  </p>
                  <p className="text-white font-railey text-xl mt-1">
                    Php {item.price}
                  </p>
                  <div className="border rounded-xl flex items-center mt-4">
                    <Button
                      className="bg-white hover:bg-gray-300"
                      variant={"ghost"}
                      onClick={() => subtractQuantity(item.id)}
                    >
                      -
                    </Button>
                    <p className="font-railey text-white px-4">
                      {item.quantity}
                    </p>
                    <Button
                      className="bg-white hover:bg-gray-300"
                      variant={"ghost"}
                      onClick={() => addQuantity(item.id)}
                    >
                      +
                    </Button>
                  </div>
                  <Trash2Icon
                    size={40}
                    className="text-red-500 pt-4"
                    onClick={() => handleRemoveFromCart(item.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="ml-16 flex space-x-4 mt-16 lg:justify-between lg:px-16 px-2 justify-center items-center pb-4 pr-8">
        <p className="font-railey text-white lg:text-xl">Total Amount:</p>

        <p className="font-railey text-white lg:text-4xl text-xl flex-1">
          Php {totalAmount}
        </p>
        <Button
          className="font-railey text-white lg:text-4xl text-xl bg-[#de3c4a] lg:px-8 py-8 hover:bg-[#925151]"
          onClick={handleCheckout}
        >
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
}
