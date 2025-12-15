import React from "react";
import { cn } from "@/lib/utils";

interface OrderTrackingTemplateProps {
  children?: React.ReactNode;
  className?: string;
}

export const OrderTrackingTemplate = ({
  children,
  className,
}: OrderTrackingTemplateProps) => {
  return (
    <div className={cn("container mx-auto px-4 py-8 md:py-12", className)}>
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Track Your Order
        </h1>
      </div>
      {children}
    </div>
  );
};
