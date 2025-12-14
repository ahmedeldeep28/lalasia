"use client";

import { Product } from "@/types";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/use-cart-store";
import { toast } from "sonner";
import { QuantityInput } from "../molecules/quantity-input";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const { id, title, description, price, material, discount, cover, slug } =
    product;
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem({ productId: id, price, cover, discount, title, slug, quantity });
    setQuantity(1);
    toast("Added to cart!");
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Heading as="h1" variant="h2" className="mb-2">
          {title}
        </Heading>
        <Heading variant="h3" className="font-bold text-primary">
          {formatPrice(price)}
        </Heading>
      </div>

      <div className="space-y-1">
        <Text variant="md" className="font-semibold">
          Description
        </Text>
        <Text variant="md" color="muted">
          {description}
        </Text>
      </div>
      <div className="space-y-1">
        <Text variant="md" className="font-semibold">
          Material
        </Text>
        <Text variant="md" color="muted">
          {material}
        </Text>
      </div>
      <div className="flex flex-1 gap-4">
        <QuantityInput value={quantity} onChange={setQuantity} />
        <Button
          onClick={handleAddToCart}
          size="lg"
          className="grow h-12 text-base px-7"
        >
          <ShoppingCart /> Add to Cart
        </Button>
      </div>
    </div>
  );
}
