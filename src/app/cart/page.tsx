import CartItemList from "@/components/organisms/cart-item-list";
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
        <Heading variant="h2">shopping cart</Heading>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-full lg:col-span-8">
            <CartItemList />
          </div>
          <div className="col-span-full lg:col-span-4">
            <OrderSummary isAction />
          </div>
        </div>
      </div>
    </main>
  );
}
