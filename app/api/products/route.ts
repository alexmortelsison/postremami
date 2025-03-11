import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      id: "1",
      name: "Classic Vanilla",
      price: 85,
      description:
        "A soft, fluffy vanilla cupcake topped with smooth, creamy vanilla buttercream. A timeless favorite!",
      image: "/vanilla.jpg",
    },
    {
      id: "2",
      name: "Decadent Chocolate",
      price: 95,
      description:
        "Rich, moist chocolate cake with luscious chocolate ganache frosting for the ultimate chocolate lover's delight.",
      image: "/chocolate.jpg",
    },
    {
      id: "3",
      name: "Strawberry Dream",
      price: 100,
      description:
        "Light and airy vanilla cake infused with real strawberries, topped with strawberry-flavored buttercream.",
      image: "/strawberry.jpg",
    },
    {
      id: "4",
      name: "Mocha Espresso",
      price: 110,
      description:
        "A bold fusion of espresso and chocolate cake, topped with espresso-infused frosting and a dusting of cocoa.",
      image: "/mocha.jpg",
    },
    {
      id: "5",
      name: "Salted Caramel Bliss",
      price: 115,
      description:
        "A vanilla cupcake filled with gooey caramel, topped with caramel buttercream and a sprinkle of sea salt.",
      image: "/caramel.jpg",
    },
    {
      id: "6",
      name: "Lemon Zest",
      price: 105,
      description:
        "A refreshing citrus-infused cupcake with tangy lemon frosting, perfect for a light and zesty treat.",
      image: "/lemon.jpg",
    },
    {
      id: "7",
      name: "Ube Coconut",
      price: 120,
      description:
        "A Filipino favorite! Moist ube cake with coconut-infused frosting, topped with toasted coconut flakes.",
      image: "/ube.jpg",
    },
    {
      id: "8",
      name: "Red Velvet Indulgence",
      price: 110,
      description:
        "A rich and velvety red cupcake with a hint of cocoa, topped with classic cream cheese frosting.",
      image: "/red.jpg",
    },
  ];
  console.log("Products:", products);
  return NextResponse.json(products);
}
