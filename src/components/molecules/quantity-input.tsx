"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";

type QuantityInputProps = {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  isDisable?: boolean;
  className?: string;
};

export function QuantityInput({
  value = 1,
  onChange,
  min = 1,
  max = 100,
  step = 1,
  isDisable,
  className,
}: QuantityInputProps) {
  const handleChange = (newQuantity: number) => {
    if (newQuantity <= max && newQuantity >= min) {
      onChange?.(newQuantity);
    }
  };

  const handleDecrement = () => {
    onChange?.(value - step);
  };

  const handleIncrement = () => {
    onChange?.(value + step);
  };

  return (
    <div
      className={cn(
        "bg-background border-input flex h-12 items-center justify-between border px-2 py-0.5",
        className
      )}
    >
      <Button
        variant="secondary"
        size="icon"
        className="size-8"
        onClick={handleDecrement}
        disabled={value <= min || isDisable}
        aria-label="Decrement quantity"
      >
        <Minus />
        <span className="sr-only">Decrement quantity</span>
      </Button>
      <input
        type="number"
        className="w-full min-w-0 appearance-none text-center text-sm font-medium outline-none"
        value={value}
        onChange={(e) => handleChange(Number(e.target.value))}
      />
      <Button
        variant="secondary"
        size="icon"
        className="size-8"
        onClick={handleIncrement}
        disabled={value >= max || isDisable}
        aria-label="Increment quantity"
      >
        <Plus />
        <span className="sr-only">Increment quantity</span>
      </Button>
    </div>
  );
}
