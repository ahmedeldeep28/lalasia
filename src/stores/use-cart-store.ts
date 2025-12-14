import { create } from "zustand";
import { persist } from "zustand/middleware";
import { StrapiAsset } from "@/types";

export interface CartItem {
  productId: string;
  title: string;
  slug: string;
  price: number;
  discount: number;
  cover: StrapiAsset;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (newItem: CartItem) => void;
  removeItem: (id: string | number) => void;
  updateQuantity: (id: string | number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (newItem) => {
        const items = get().items;
        const existingItem = items.find(
          (item) => item.productId === newItem.productId
        );
        if (existingItem) {
          get().updateQuantity(
            existingItem.productId,
            existingItem.quantity + newItem.quantity
          );
        } else {
          set({
            items: [...items, newItem],
          });
        }
      },

      removeItem: (productId) => {
        set({
          items: get().items.filter((item) => item.productId !== productId),
        });
      },

      updateQuantity: (productId, quantity) => {
        set({
          items: get().items.map((item) =>
            item.productId === productId ? { ...item, quantity } : item
          ),
        });
      },

      clearCart: () => {
        set({ items: [] });
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
