"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [term, setTerm] = useState(searchParams.get("term") || "");

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (term) {
      params.set("term", term);
    } else {
      params.delete("term");
    }
    router.push(`/products?${params.toString()}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative shadow-md h-16 bg-background w-full">
      <div className="absolute top-1/2 left-3 -translate-y-1/2 hidden sm:block z-10">
        <Image
          width={34}
          height={34}
          src="/icons/search-normal.png"
          alt="search"
        />
      </div>
      <Input
        type="text"
        className="w-full h-full py-4 pl-4 sm:pl-14 pr-20 sm:pr-36 rounded-none"
        placeholder="Input Search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        onClick={handleSearch}
        className="absolute top-1/2 -translate-y-1/2 right-1 !px-9 h-auto py-2.5 sm:py-3.5"
        size="lg"
      >
        <span className="hidden sm:block">Find Now</span>
        <Search className="w-5 h-5 sm:hidden" />
      </Button>
    </div>
  );
};
