"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
    currentPage: number;
}

export const PaginationData = ({ currentPage }: PaginationProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page.toString());
        router.push(`?${params.toString()}`);
    };


    const handlePrevious = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage) {
            handlePageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex items-center justify-center gap-2 mt-8">
            <Button
                variant="outline"
                size="icon-sm"
                onClick={handlePrevious}
                disabled={currentPage === 1}
            >
                <ChevronLeft className="w-4 h-4" />
            </Button>

            {currentPage}

            <Button
                variant="outline"
                size="icon-sm"
                onClick={handleNext}
            >
                <ChevronRight className="w-4 h-4" />
            </Button>
        </div>
    );
};
