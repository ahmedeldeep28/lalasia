import React from "react";
import { cn } from "@/lib/utils";
import { Package, Truck, Home, Clock } from "lucide-react";
import { Order } from "@/types/order";

interface OrderStatusStepperProps {
  orderStatus: Order["orderStatus"];
  className?: string;
}

const steps = [
  { id: "pending", label: "Order pending", icon: Clock },
  { id: "confirmed", label: "confirmed", icon: Package },
  { id: "shipped", label: "Shipped", icon: Truck },
  { id: "delivered", label: "Delivered", icon: Home },
];

export const OrderStatusStepper = ({
  orderStatus,
  className,
}: OrderStatusStepperProps) => {
  const currentStepIndex = steps.findIndex(
    (step) => step.id === String(orderStatus)
  );

  return (
    <div className={cn("w-full p-8", className)}>
      <div className="relative flex items-center justify-between w-full">
        {/* Progress Bar Background */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -z-10 -translate-y-1/2 rounded-full" />

        {/* Active Progress Bar */}
        <div
          className="absolute top-1/2 left-0 h-1 bg-primary -z-10 -translate-y-1/2 rounded-full transition-all duration-500 ease-in-out"
          style={{
            width: `${(currentStepIndex / (steps.length - 1)) * 100}%`,
          }}
        />

        {steps.map((step, index) => {
          const isCompleted = index <= currentStepIndex;
          const isCurrent = index === currentStepIndex;
          const Icon = step.icon;

          return (
            <div
              key={step.id}
              className="flex flex-col items-center gap-2 relative group"
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 bg-background",
                  isCompleted
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-muted-foreground/30 text-muted-foreground"
                )}
              >
                {isCompleted ? (
                  <Icon className="w-5 h-5" />
                ) : (
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                )}
              </div>
              <span
                className={cn(
                  "text-xs sm:text-sm font-medium absolute top-12 whitespace-nowrap transition-colors duration-300",
                  isCompleted ? "text-primary" : "text-muted-foreground"
                )}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
