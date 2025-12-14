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

export default function CartItem({ item }: { item: CartItemType }) {
  const { productId, title, quantity, cover, price, slug } = item;
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div className="grid grid-cols-12 py-6 gap-5">
      <div className="col-span-12 sm:col-span-4 lg:col-span-3">
        <Image
          width={600}
          height={600}
          src={getStrapiMedia(cover.url)}
          className="aspect-square"
          alt="product card"
        />
      </div>
      <div className="col-span-12 sm:col-span-8 lg:col-span-9 flex flex-col justify-between">
        <div className="flex flex-wrap justify-between items-center">
          <Link href={`/products/${slug}`}>
            <Heading variant="h4" className="truncate">
              {title}
            </Heading>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeItem(productId)}
          >
            <Trash />
          </Button>
        </div>
        <ul className="flex flex-col flex-wrap space-y-2 mt-4">
          <li className="flex items-center gap-1">
            <Text variant="sm" className="font-semibold capitalize">
              quantity
            </Text>
            <Text color="muted">{quantity}</Text>
          </li>
          <li className="flex items-center gap-1">
            <Text variant="sm" className="font-semibold capitalize">
              price
            </Text>
            <Text color="muted">{formatPrice(price)}</Text>
          </li>
          <li className="flex items-center gap-1">
            <Text variant="sm" className="font-semibold capitalize">
              total price
            </Text>
            <Text color="muted">{formatPrice(quantity * price)} </Text>
          </li>
        </ul>
      </div>
    </div>
  );
}
