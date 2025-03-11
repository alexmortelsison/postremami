import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      id: "1",
      name: "Classic Vanilla Cupcake",
      price: 85,
      description:
        "A soft, fluffy vanilla cupcake topped with smooth, creamy vanilla buttercream. A timeless favorite!",
    },
    {
      id: "2",
      name: "Decadent Chocolate Cupcake",
      price: 95,
      description:
        "Rich, moist chocolate cake with luscious chocolate ganache frosting for the ultimate chocolate lover’s delight.",
    },
    {
      id: "3",
      name: "Strawberry Dream Cupcake",
      price: 100,
      description:
        "Light and airy vanilla cake infused with real strawberries, topped with strawberry-flavored buttercream.",
    },
    {
      id: "4",
      name: "Mocha Espresso Cupcake",
      price: 110,
      description:
        "A bold fusion of espresso and chocolate cake, topped with espresso-infused frosting and a dusting of cocoa.",
    },
    {
      id: "5",
      name: "Salted Caramel Bliss Cupcake",
      price: 115,
      description:
        "A vanilla cupcake filled with gooey caramel, topped with caramel buttercream and a sprinkle of sea salt.",
    },
    {
      id: "6",
      name: "Lemon Zest Cupcake",
      price: 105,
      description:
        "A refreshing citrus-infused cupcake with tangy lemon frosting, perfect for a light and zesty treat.",
    },
    {
      id: "7",
      name: "Ube Coconut Cupcake",
      price: 120,
      description:
        "A Filipino favorite! Moist ube cake with coconut-infused frosting, topped with toasted coconut flakes.",
    },
    {
      id: "8",
      name: "Red Velvet Indulgence Cupcake",
      price: 110,
      description:
        "A rich and velvety red cupcake with a hint of cocoa, topped with classic cream cheese frosting.",
    },
  ];
  return NextResponse.json(products);
}
