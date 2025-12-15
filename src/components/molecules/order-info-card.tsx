import { cn, formatPrice } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Hash, MapPin } from "lucide-react";
import { Order } from "@/types/order";
import { Text } from "../ui/text";
import { Separator } from "../ui/separator";

interface OrderInfoCardProps {
  order: Order;
  className?: string;
}

export const OrderInfoCard = ({ order, className }: OrderInfoCardProps) => {
  const { orderNumber, orderStatus, address, createdAt } = order;
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold flex items-center gap-2">
          <Hash className="w-4 h-4 text-muted-foreground" />
          Order {orderNumber}
        </CardTitle>
        <Badge
          variant={
            orderStatus === "delivered"
              ? "default"
              : orderStatus === "cancelled"
              ? "destructive"
              : "secondary"
          }
          className="capitalize"
        >
          {orderStatus}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center text-sm gap-2 text-muted-foreground">
          <CalendarDays className="size-4" />
          Placed on {createdAt}
        </div>
        <div className="flex items-center text-sm gap-2 text-muted-foreground">
          <MapPin className="size-4" />
          {address.state}, {address.city}, {address.zipCode}
        </div>
        <Separator />

        <div className="flex items-center justify-between text-sm">
          <Text>Shipping</Text>
          <Text>{formatPrice(order.shippingCost)}</Text>
        </div>

        <Separator />
        <div className="flex items-center justify-between font-medium">
          <Text>Total</Text>
          <Text>{formatPrice(order.total)}</Text>
        </div>
      </CardContent>
    </Card>
  );
};
