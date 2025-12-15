import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const ProductCardSkeleton = () => {
  return (
    <Card className="group overflow-hidden gap-3 py-0 border-0 shadow-none">
      <CardHeader className="relative w-full aspect-12/9 overflow-hidden p-0">
        <Skeleton className="h-full w-full" />
      </CardHeader>

      <CardContent className="p-0 space-y-2">
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-24" />
        </div>

        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />

        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
      </CardContent>
    </Card>
  );
};
