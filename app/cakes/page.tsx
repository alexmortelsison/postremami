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

export default function CakePage() {
  return <div></div>;
}
