"use client";

import { useState } from "react";
import { Product } from "@/types";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/use-cart-store";
import { Toggle } from "@radix-ui/react-toggle";
import { toast } from "sonner";

interface ProductInfoProps {
    product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const addItem = useCartStore((state) => state.addItem);


    const handleAddToCart = () => {
        addItem({ ...product, color: selectedColor, quantity: 1 });
    
        toast("Added to cart!");
    };

    return (
        <div className="flex flex-col gap-6">
            <div>
                <Heading as="h1" variant="h2" className="mb-2">
                    {product.title}
                </Heading>
                <Heading variant="h3" className="font-bold text-primary">
                    ${product.price.toFixed(2)}
                </Heading>
            </div>

            <div className="space-y-2">
                <Text variant="sm" className="font-semibold">
                    Description
                </Text>
                <Text variant="sm" color="muted">
                    {product.description}
                </Text>
            </div>

            <div className="space-y-2">
                <Text variant="sm" className="font-semibold">
                    Color
                </Text>
                <div className="flex gap-3">
                    {product.colors.map((color) => (
                        <Toggle
                            key={color}
                            onPressedChange={() => setSelectedColor(color)}
                            pressed={color === selectedColor}
                            style={{ backgroundColor: color }}
                            aria-label={`Select ${color} color`}
                            className="size-8 hover:scale-110 transition rounded-full border-3 data-[state=on]:border-primary"
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-1 gap-4">
                <Button
                    onClick={handleAddToCart}
                    size="lg"
                    className="h-12 text-base px-7"
                >
                    Add to Cart
                </Button>

            </div>
        </div>
    );
}
