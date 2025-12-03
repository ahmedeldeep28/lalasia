import { CheckoutForm } from "@/components/organisms/checkout-form";
import { CartSummary } from "@/components/organisms/cart-summary";
import { OrderSummary } from "@/components/organisms/order-summary";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "checkout"
}

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-8 text-3xl font-bold">Checkout</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CheckoutForm />
        </div>
        <div className="space-y-8">
          <CartSummary />
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
