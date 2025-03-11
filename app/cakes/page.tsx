import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

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
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Product Grid (Pushes Content Down) */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-64 mb-24">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
