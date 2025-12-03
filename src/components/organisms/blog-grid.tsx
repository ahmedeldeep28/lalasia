import { Article } from "@/types";
import { BlogCard } from "../molecules/blog-card";
import { cn } from "@/lib/utils";

type BlogGridProps = {
  articles: Article[];
  className?: string;
};

export default function BlogGrid({ articles, className }: BlogGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
    >
      {articles.map((article) => {
        return <BlogCard key={article.id} article={article} />;
      })}
    </div>
  );
}
