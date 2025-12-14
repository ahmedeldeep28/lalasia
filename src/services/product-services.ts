import { publicApi } from "@/lib/api";
import { ApiResponse, Product, FilterProductParams } from "@/types";

export async function getProducts(
  searchParams: FilterProductParams
): Promise<ApiResponse<Product>> {
  const { term, category } = searchParams;
  
  const res = await publicApi<ApiResponse<Product>>("/products", {
    params: {
      populate: "*",
      filters: {
        title: {
          $contains: term,
        },
        category: {
          title: {
            $eq: category,
          },
        },
      },
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
