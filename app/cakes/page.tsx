import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`);
  return res.json();
}
export default async function CakePage() {
  const products = await getProducts();

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
          Choose from Our Most Loved Cupcakes - Handpicked Favorites Just for
          You!
        </p>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 px-16 border-t border-b border-gray-300 py-8 mx-2">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
