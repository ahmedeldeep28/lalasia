import { publicApi } from "@/lib/api";

export async function checkoutOrder(payload: object) {
  const res = await publicApi("/orders/checkout", {
    method: "post",
    body: JSON.stringify(payload)
  });
  return res;
}
