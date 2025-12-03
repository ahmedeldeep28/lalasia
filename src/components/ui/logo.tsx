import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Logo = ({ className, width = 100, height = 40 }: LogoProps) => {
  return (
    <Link href="/" className={cn("inline-block", className)}>
      <Image
        width={width}
        height={height}
        src="/logos/logo.png"
        alt="Lalasia Logo"
        priority
        className="object-contain"
      />
    </Link>
  );
};
