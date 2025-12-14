"use client";

import { useCartStore } from "@/stores/use-cart-store";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Text } from "../ui/text";
import { Button } from "../ui/button";

import Link from "next/link";
import { cn, formatPrice } from "@/lib/utils";

type OrderSummaryProps = {
  isAction?: boolean;
  className?: string;
};

export function OrderSummary({ isAction, className }: OrderSummaryProps) {
  const clearCart = useCartStore((state) => state.clearCart);
  const { getTotalPrice } = useCartStore();
  const subtotal = getTotalPrice();
  const shippingCost = 200;
  const total = subtotal + shippingCost;

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center justify-between text-sm">
          <Text color="muted">Subtotal</Text>
          <Text>{formatPrice(subtotal)}</Text>
        </div>
        <div className="flex items-center justify-between text-sm">
          <Text color="muted">Shipping</Text>
          <Text>{formatPrice(shippingCost)}</Text>
        </div>

        <Separator />
        <div className="flex items-center justify-between font-medium">
          <Text>Total</Text>
          <Text>{formatPrice(total)}</Text>
        </div>
      </CardContent>
      {isAction && (
        <CardFooter className="flex-col items-stretch gap-2">
          <Separator className="mb-3" />
          <Button size="lg" variant="secondary" asChild>
            <Link href="/checkout">Checkout</Link>
          </Button>
          <Button size="lg" variant="outline" onClick={clearCart}>
            Clear all
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
