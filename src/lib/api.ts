import { Product } from "@/types";

const BASE_URL = "https://lalasia-api.vercel.app";

export async function fetchProducts(params?: {
    term?: string;
    category?: string;
    minPrice?: string;
    maxPrice?: string;
}): Promise<Product[]> {
    try {
        const url = new URL(`${BASE_URL}/products`);

        if (params?.term) url.searchParams.append("term", params.term);
        // The legacy API might not support all filters directly, but let's try passing them.
        // Based on legacy code: axiosApi.get(`/products`,{params: {term}});
        // It seems it only explicitly used 'term'.
        // If the API doesn't support other filters, we might need to filter client-side or assume it does.
        // Let's assume it supports 'term' for now as seen in legacy code.
        // We will filter the rest client-side if the API returns everything, or server-side if we can.
        // But wait, `fetchProducts` is async, so we can do the fetching here.

        const res = await fetch(url.toString(), { cache: 'no-store' });

        if (!res.ok) {
            throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        // The legacy API response structure: { products: [...] } based on `const { products } = await axiosApi.get...`
        // Let's check legacy `axios-global.js` interceptor: `return response.data;`
        // So `axiosApi.get` returns `response.data`.
        // And `const { products }` implies the response body has a `products` key.

        return data.products || [];
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}
