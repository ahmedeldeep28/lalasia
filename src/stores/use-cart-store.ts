import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types";

export interface CartItem extends Product {
  quantity: number;
  color: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (newItem: CartItem) => void;
  removeItem: (id: string | number, color: string) => void;
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
          (item) => item.id === newItem.id && item.color === newItem.color
        );

        if (existingItem) {
          get().updateQuantity(existingItem.id, existingItem.quantity + 1);
        } else {
          set({
            items: [...items, newItem],
          });
        }
      },

      removeItem: (id, color) => {
        set({
          items: get().items.filter(
            (item) => item.id !== id || item.color !== color
          ),
        });
      },

      updateQuantity: (id, quantity) => {
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity } : item
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
