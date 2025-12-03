import BlogGrid from "@/components/organisms/blog-grid";
import { HeroSection } from "@/components/organisms/hero-section";
import { SectionHeader } from "@/components/templates/section-header";
import { ARTICLES } from "@/data";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "blog"
}

export default function BlogPage() {
  return (
    <div>
      <HeroSection
        title="Ideas, Trends & Inspiration for Your Home"
        text="Stay updated with the latest interior trends, furniture tips, styling guides, and expert advice. Our blog helps you make smarter choices and design a home that reflects your unique lifestyle."
        image="/blog-hero.png"
      />
      <div className="container pb-10">
        <SectionHeader name="Trending Topics" title="Popular last week" />
        <BlogGrid articles={ARTICLES} />
      </div>
    </div>
  );
}
