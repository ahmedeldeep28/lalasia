import { publicApi } from "@/lib/api";
import { ApiResponse, Product } from "@/types";

export async function getProducts(): Promise<ApiResponse<Product>> {
  const res = await publicApi<ApiResponse<Product>>("/products", {
    params: {
      populate: "*",
    },
  });
  return res;
}

export async function getProductBySlug(slug: string): Promise<Product> {
  const { data } = await publicApi<ApiResponse<Product>>("/products", {
    params: {
      populate: "*",
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
  });
  return data[0];
}
