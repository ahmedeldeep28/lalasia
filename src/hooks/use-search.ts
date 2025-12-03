import { useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const useSearch = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get("term") || "");

    const handleSearch = useCallback(() => {
        const params = new URLSearchParams(searchParams.toString());
        if (searchTerm) {
            params.set("term", searchTerm);
        } else {
            params.delete("term");
        }
        router.push(`/products?${params.toString()}`);
    }, [searchTerm, searchParams, router]);

    const clearSearch = useCallback(() => {
        setSearchTerm("");
        const params = new URLSearchParams(searchParams.toString());
        params.delete("term");
        router.push(`/products?${params.toString()}`);
    }, [searchParams, router]);

    return {
        searchTerm,
        setSearchTerm,
        handleSearch,
        clearSearch,
    };
};
