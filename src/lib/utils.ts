import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStrapiMedia(url: string): string {
  if (!url) return "";
  if (url.startsWith("https")) return url;
  return `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
}

export function formatPrice(
  amount: number,
  locale: string = 'eg-EG',
  currency: string = 'EGP'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}