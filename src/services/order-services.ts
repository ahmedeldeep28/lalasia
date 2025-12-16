import { publicApi } from "@/lib/api";
import { ApiResponse } from "@/types";
import { Order } from "@/types/order";

export async function createOrder(
  payload: object
): Promise<{ orderId: string }> {
  const res = await publicApi<Promise<{ orderId: string }>>(
    "/orders/checkout",
    {
      method: "post",
      body: JSON.stringify(payload),
    }
  );
  return res;
}

export async function getOrderById(orderId: string): Promise<Order> {
  const { data: order } = await publicApi<ApiResponse<Order>>("/orders", {
    params: {
      populate: ["items.cover"],
      filters: {
        id: {
          $eq: orderId,
        },
      },
    },
    next: {
      revalidate: 60 * 60,
    },
  });
  return order[0];
}
