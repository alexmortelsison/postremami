"use client";
import Image from "next/image";
import { useDispatch } from "react-redux";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function ProductCard({ product }: { product: ProductProps }) {
  const dispatch = useDispatch();
  return (
    <div className="border w-full">
      <div>
        <Image
          src={product.image}
          alt="photo"
          width={200}
          height={200}
          className="object-cover w-full"
        />
      </div>
    </div>
  );
}
