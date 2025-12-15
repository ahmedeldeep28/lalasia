export type FileMetaData = {
  url: string;
  mime: string;
  name: string;
  size: number;
  width: number;
  height: number;
};

export type StrapiAsset = {
  id: number;
  name: string;
  alternativeText: string | null;
  width: number;
  height: number;
  formats: Record<string, FileMetaData>;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type SearchParams = Record<
  string,
  | string
  | number
  | boolean
  | Array<string | number | boolean>
  | undefined
  | null
>;

export type ApiResponse<T> = {
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
  data: T[];
};

export type BenefitItem = {
  icon: string;
  title: string;
  description: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
};

export type TeamItem = {
  name: string;
  image: string;
  job: string;
};

export type ReviewItem = {
  name: string;
  title: string;
  avatar: string;
  rating: number;
  comment: string;
};
