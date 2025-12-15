import { FileMetaData } from "./shard";

export type OrderItem = {
  id: string;
  title: string;
  discountPercentage: string;
  price: number;
  quantity: number;
  total: number;
  cover: FileMetaData;
};

export type Order = {
  createdAt: string;
  orderNumber: number;
  orderStatus: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
  shippingCost: number;
  total: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  items: OrderItem[];
};
