import { Skeleton } from "@/components/ui/skeleton";

export const CartSkeleton = () => {
  return (
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="grid grid-cols-12 gap-5 py-6 border-b last:border-0"
        >
          <div className="col-span-12 sm:col-span-4 lg:col-span-3">
            <Skeleton className="aspect-square w-full rounded-md" />
          </div>
          <div className="col-span-12 sm:col-span-8 lg:col-span-9 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-10 w-10 rounded-md" />
            </div>
            <div className="space-y-2 mt-4">
              <div className="flex gap-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-8" />
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
