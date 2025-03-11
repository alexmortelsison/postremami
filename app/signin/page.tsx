"use client";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function SigninPage() {
  const { data: session } = useSession();
  if (session) return redirect("/");
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Button onClick={() => signIn("google")} className="hover:cursor-pointer">
        Sign in
      </Button>
    </div>
  );
}
