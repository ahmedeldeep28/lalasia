import CartItemList from "@/components/organisms/cart-item-list";
import { CartSkeleton } from "@/components/organisms/cart-skeleton";
import { Suspense } from "react";
import { OrderSummary } from "@/components/organisms/order-summary";
import { Heading } from "@/components/ui/heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "cart",
};

export default function CartPage() {
  return (
    <main>
      <div className="container py-12">
        <Heading variant="h3">shopping cart</Heading>
        <div className="grid grid-cols-12 gap-6 mt-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="col-span-full lg:col-span-8">
            <Suspense fallback={<CartSkeleton />}>
              <CartItemList />
            </Suspense>
          </div>
          <div className="col-span-full lg:col-span-4">
            <OrderSummary isAction />
          </div>
        </div>
      </div>
    </main>
  );
}
