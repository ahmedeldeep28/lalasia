"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Toggle } from "@/components/ui/toggle";
import { SearchBar } from "./search-bar";

export const ProductFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

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

  const categories = [
    "Furniture",
    "Living Room",
    "Dining",
    "Office",
    "Bedroom",
    "Lighting",
    "Decor",
  ];

  return (
    <div className="w-full space-y-6 mb-12">
      <SearchBar />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-wrap gap-1">
          {categories.map((cat) => (
            <Toggle
              key={cat}
              pressed={cat === category}
              onPressedChange={() => handleCategoryChange(cat)}
              className={"rounded-full px-3.5"}
            >
              {cat}
            </Toggle>
          ))}
        </div>
      </div>
    </div>
  );
};
