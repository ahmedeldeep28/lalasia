"use client";

import Image from "next/image";
import { useCartStore } from "@/stores/use-cart-store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPrice, getStrapiMedia } from "@/lib/utils";

export function CartSummary() {
  const { items } = useCartStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cart Summary</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {!items.length && (
          <p className="text-muted-foreground text-sm">Your cart is empty.</p>
        )}
        {items.map((item) => (
          <div key={item.productId} className="flex items-start gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-md border bg-muted">
              <Image
                src={getStrapiMedia(item.cover.url)}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <span className="font-medium text-sm">{item.title}</span>
              <span className="text-muted-foreground text-xs">
                Qty: {item.quantity}
              </span>
            </div>
            <div className="font-medium text-sm">
              {formatPrice(item.price * item.quantity)}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
