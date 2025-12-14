import { StrapiAsset } from "./shard";

export interface Product {
  id: string;
  documentId: string;
  title: string;
  slug: string;
  price: number;
  discount: number;
  cover: StrapiAsset;
  media: StrapiAsset[];
  material: string;
  description: string;
  category: {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface FilterProductParams {
  term?: string;
  category?: string;
  page?: string;
}
