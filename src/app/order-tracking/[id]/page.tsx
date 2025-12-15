
import { OrderTrackingTemplate } from "@/components/templates/order-tracking-template";
import { OrderStatusStepper } from "@/components/molecules/order-status-stepper";
import { OrderInfoCard } from "@/components/molecules/order-info-card";
import { TrackingOrderItems } from "@/components/organisms/tracking-order-items";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getOrderById } from "@/services/order-services";

type OrderTrackingProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OrderTrackingPage({params}: OrderTrackingProps) {
 const orderId = (await params).id
  const order = await getOrderById(orderId);

  return (
    <OrderTrackingTemplate>
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <OrderStatusStepper orderStatus={order.orderStatus} />
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            <TrackingOrderItems items={order.items} />
          </div>
            <OrderInfoCard order={order} />
        </div>
      </div>
    </OrderTrackingTemplate>
  );
}
