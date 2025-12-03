import { useCartStore } from "@/stores/use-cart-store";
import { Product } from "@/types";

export const useCart = () => {
    const items = useCartStore((state) => state.items);
    const addItem = useCartStore((state) => state.addItem);
    const removeItem = useCartStore((state) => state.removeItem);
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const clearCart = useCartStore((state) => state.clearCart);
    const getTotalItems = useCartStore((state) => state.getTotalItems);
    const getTotalPrice = useCartStore((state) => state.getTotalPrice);

    const addToCart = (product: Product, color: string) => {
        addItem(product, color);
    };

    const removeFromCart = (itemId: string | number) => {
        removeItem(itemId);
    };

    const updateItemQuantity = (itemId: string | number, quantity: number) => {
        updateQuantity(itemId, quantity);
    };

    const clear = () => {
        clearCart();
    };

    return {
        items,
        addToCart,
        removeFromCart,
        updateItemQuantity,
        clear,
        totalItems: getTotalItems(),
        totalPrice: getTotalPrice(),
    };
};
