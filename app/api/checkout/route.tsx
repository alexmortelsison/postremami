import { NextResponse } from "next/server";
import { Stripe } from "stripe";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  try {
    const { cartItems }: { cartItems: CartItem[] } = await req.json();
    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json({ error: "No items found" }, { status: 400 });
    }
    const lineItems = cartItems.map((item) => {
      let imageUrl = item.image || "https://via.placeholder.com/150";
      if (!imageUrl.startsWith("http")) {
        console.warn("Invalid url detected", imageUrl);
        imageUrl = "https://via.placeholder.com/150";
      }
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [imageUrl],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
    });
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
