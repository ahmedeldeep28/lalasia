import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { nav_links } from "@/data";
import { NavLink } from "@/components/molecules/nav-link";
import { Button } from "../ui/button";
import { Logo } from "../ui/logo";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" aria-label="Toggle menu">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <Logo />
        </SheetHeader>

        <ul className="container flex flex-col px-4 overflow-hidden">
          {nav_links.map((item) => (
            <li key={item.label} className="py-3 border-b last:border-0">
              <NavLink href={item.path} label={item.label} />
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
