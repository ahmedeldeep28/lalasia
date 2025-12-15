"use client";
import {
  CartItem as CartItemType,
  useCartStore,
} from "@/stores/use-cart-store";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import { formatPrice, getStrapiMedia } from "@/lib/utils";

type OrderItemProps = {
  title: string;
  quantity: number;
  cover: string;
  price: number;
  onRemove?: () => void;
};

export default function OrderLineItem(props: OrderItemProps) {
  const { title, quantity, cover, price, onRemove } = props;
  return (
    <div className="flex items-start gap-4">
      <div className="relative aspect-square size-26 overflow-hidden rounded-lg bg-muted">
        <Image src={cover} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex justify-between items-center">
          <Heading variant="h5" className="line-clamp-1">
            {title}
          </Heading>
          {onRemove && (
            <Button variant="ghost" size="icon" onClick={() => onRemove()}>
              <Trash />
            </Button>
          )}
        </div>
        <div className="flex flex-wrap justify-between items-end mt-3">
          <div className="space-y-1">
            <Text variant="sm" className="font-semibold space-x-1.5 capitalize">
              <span>quantity</span>
              <span className="text-muted-foreground">{quantity}</span>
            </Text>
            <Text variant="sm" className="font-semibold space-x-1.5 capitalize">
              <span>price</span>
              <span className="text-muted-foreground">
                {formatPrice(price)}
              </span>
            </Text>
          </div>
          <Text variant="sm" className="font-semibold space-x-1.5 capitalize">
            <span>total</span>
            <span className="text-muted-foreground">
              {formatPrice(price * quantity)}
            </span>
          </Text>
        </div>
      </div>
    </div>
  );
}
