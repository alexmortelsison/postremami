"use client";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/store/features/cartSlice";
import { RootState } from "@/store/store";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function ProductCard({ product }: { product: ProductProps }) {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();

  console.log("isAuthenticated:", isAuthenticated);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success("Successfully added to cart!");
  };
  return (
    <div className="border rounded-xl hover:scale-120 duration-400 w-full h-60">
      <div className="grid grid-cols-2">
        <Link href={`/cakes/${product.id}`}>
          <img
            src={product.image}
            alt="photo"
            width={300}
            height={300}
            className="w-full rounded-l-xl rounded object-cover h-60"
          />
        </Link>
        <div className="font-railey text-center pt-4 px-2 text-white rounded-r-xl bg-amber-900">
          <p className="text-2xl font-bold h-20">{product.name}</p>
          <p className="text-2xl">Php {product.price}</p>
          <Button
            className="mt-8 hover:cursor-pointer bg-[#de3c4a] text-white hover:bg-[#e97781] text-lg"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
