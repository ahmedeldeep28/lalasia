import { cn, getStrapiMedia } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OrderLineItem from "../molecules/order-line-item";
import { OrderItem } from "@/types/order";

interface TrackingOrderItemsProps {
  items: OrderItem[];
  className?: string;
}

export const TrackingOrderItems = ({
  items,
  className,
}: TrackingOrderItemsProps) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>Order Items</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6 *:pb-4 divide-y-2">
        {items.map((item) => (
          <OrderLineItem
            key={item.id}
            title={item.title}
            quantity={item.quantity}
            cover={getStrapiMedia(item.cover.url)}
            price={item.price}
          />
        ))}
      </CardContent>
    </Card>
  );
};
