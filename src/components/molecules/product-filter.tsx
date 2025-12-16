"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Toggle } from "@/components/ui/toggle";
import { SearchBar } from "./search-bar";
import { use } from "react";
import { getProductCategories } from "@/services/product-services";

export const ProductFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: categories } = use(getProductCategories());
  const category = searchParams.get("category") || "";

  const updateUrl = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`?${params.toString()}`);
  };

  const handleCategoryChange = (cat: string) => {
    const newValue = category === cat ? "" : cat;
    updateUrl("category", newValue);
  };

  return (
    <div className="w-full space-y-6 mb-12">
      <SearchBar />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-wrap gap-1">
          {categories.map((cat) => (
            <Toggle
              key={cat.title}
              pressed={cat.title === category}
              onPressedChange={() => handleCategoryChange(cat.title)}
              className={"rounded-full px-3.5"}
            >
              {cat.title}
            </Toggle>
          ))}
        </div>
      </div>
    </div>
  );
};
