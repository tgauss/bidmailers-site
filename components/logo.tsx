"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        "font-normal flex gap-2 justify-center items-center text-sm text-black px-2 py-1 shrink-0 relative z-20",
        className
      )}
    >
      <Image
        src="/bidmailers-logo.png"
        alt="Bid Mailers"
        width={180}
        height={40}
        className="h-10 w-auto"
      />
    </Link>
  );
};
