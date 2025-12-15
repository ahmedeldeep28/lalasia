"use client";

import { useCartStore } from "@/stores/use-cart-store";
import OrderLineItem from "../molecules/order-line-item";
import { FeedbackState } from "../molecules/feedback-state";
import { getStrapiMedia } from "@/lib/utils";

export default function CartItemList() {
  const { items, removeItem } = useCartStore((state) => state);

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
    <div className="space-y-4 divide-y *:pb-4">
      {items.map((item) => {
        return (
          <OrderLineItem
            key={item.productId}
            title={item.title}
            quantity={item.quantity}
            cover={getStrapiMedia(item.cover.url)}
            price={item.price}
            onRemove={() => removeItem(item.productId)}
          />
        );
      })}
    </div>
  );
}
