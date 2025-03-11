import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Signin() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <div>
          <Image
            src={session.user?.image || ""}
            alt="avatar"
            width={80}
            height={80}
            className="w-10 rounded-full cursor-pointer hover:border-2 hover:border-[#de3c4a]"
            onClick={() => signOut()}
          />
        </div>
      ) : (
        <Button
          onClick={() => signIn("google")}
          className="font-railey text-white text-2xl hover:cursor-pointer hover:text-[#de3c4a]"
        >
          Sign in
        </Button>
      )}
    </>
  );
}
