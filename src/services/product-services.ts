import { publicApi } from "@/lib/api";
import {
  ApiResponse,
  Product,
  FilterProductParams,
  ProductCategory,
} from "@/types";

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
    next: {
      revalidate: 60 * 60,
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
    next: {
      revalidate: 60 * 60,
    },
  });
  return data[0];
}

export async function getPopularProducts(): Promise<ApiResponse<Product>> {
  const res = await publicApi<ApiResponse<Product>>("/products", {
    params: {
      populate: "*",
      filters: {
        isPopular: {
          $eq: true,
        },
      },
    },
    next: {
      revalidate: 60 * 60,
    },
  });
  return res;
}

export async function getProductCategories(): Promise<
  ApiResponse<ProductCategory>
> {
  const res = await publicApi<ApiResponse<ProductCategory>>("/categories", {
    params: {
      populate: "*",
    },
    next: {
      revalidate: 60 * 60,
    },
  });
  return res;
}
