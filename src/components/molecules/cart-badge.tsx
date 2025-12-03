"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/stores/use-cart-store";
import { Button } from "../ui/button";

export const CartBadge = () => {
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <Button variant={"ghost"} size="icon" asChild>
      <Link href="/cart" className="relative inline-block">
        <ShoppingCart className="size-5" />
        {totalItems > 0 && (
          <Badge
            variant="destructive"
            className="absolute -top-2 -left-2 h-5 min-w-5 flex items-center justify-center p-1 text-xs rounded-full"
          >
            {totalItems}
          </Badge>
        )}
      </Link>
    </Button>
  );
};
