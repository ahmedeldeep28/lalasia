"use client"
import { Logo } from "@/components/ui/logo";
import { CartBadge } from "@/components/molecules/cart-badge";
import { NavMenu } from "../molecules/nav-menu";
import { MobileMenu } from "../molecules/mobile-menu";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export const Header = () => {
  return (
    <header className="h-auto w-full sticky top-0 z-50 bg-background border-b">
      <div className="container h-20 flex justify-between items-center">
        <Logo />

        <NavMenu />

        <div className="flex items-center gap-2">
          <CartBadge />
          <MobileMenu />
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};
