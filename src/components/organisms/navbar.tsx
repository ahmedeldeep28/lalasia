"use client";

import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { NavLink } from "@/components/molecules/nav-link";
import { CartBadge } from "@/components/molecules/cart-badge";
import { useUIStore } from "@/stores/use-ui-store";
import { nav_links } from "@/data";

export const Navbar = () => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();

  return (
    <header className="h-auto w-full sticky top-0 z-50 bg-background border-b">
      <div className="container h-20 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-x-7">
          {nav_links.map((item) => (
            <li key={item.label}>
              <NavLink href={item.path} label={item.label} />
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <CartBadge />

          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <ul
        className={`container flex flex-col px-4 md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "h-72" : "h-0"
        }`}
      >
        {nav_links.map((item) => (
          <li key={item.label} className="py-3 border-b last:border-0">
            <NavLink
              href={item.path}
              label={item.label}
              onClick={closeMobileMenu}
            />
          </li>
        ))}
      </ul>
    </header>
  );
};
