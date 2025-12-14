"use client";

import { useCartStore } from "@/stores/use-cart-store";
import CartItem from "../molecules/cart-item";
import { FeedbackState } from "../molecules/feedback-state";

export default function CartItemList() {
  const items = useCartStore((state) => state.items);

  if (!items.length) return null;

  if (items.length === 0) {
    return (
      <FeedbackState
        state="empty"
        title="cart empty"
        message="There are no items to display right now"
      />
    );
  }

  return (
    <div className="space-y-2 divide-y">
      {items.map((item) => {
        return <CartItem key={item.productId} item={item} />;
      })}
    </div>
  );
}
