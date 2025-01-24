"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  const isSignedIn = pathname === "/sign-in";
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/agile.png"
              alt="logo"
              width={50}
              height={100}
              className="bg-blue-600 rounded-sm p-1 text-white"
            />
            <p className="text-2xl text-gray-700">Agile Code Board</p>
          </div>

          <Button asChild variant={"secondary"}>
            <Link href={isSignedIn ? "/sign-up" : "/sign-in"}>
              {isSignedIn ? "Sign Up" : "Login"}
            </Link>
          </Button>
        </nav>

        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
