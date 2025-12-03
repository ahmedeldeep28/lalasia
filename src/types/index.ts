export interface Product {
  id: string;
  title: string;
  slug: string;
  price: number;
  image: string;
  material: string;
  category: string;
  description: string;
  colors: string[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  image: string;
  category: string;
  description: string;
  createAt: string;
  content: string;
}

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
