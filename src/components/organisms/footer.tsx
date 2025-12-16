import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { getProductCategories } from "@/services/product-services";
import { nav_links } from "@/data";

export default async function footer() {
  const { data: categories } = await getProductCategories();
  return (
    <footer>
      <div className="container border-t py-16">
        <div className="grid grid-cols-12 gap-6 justify-between">
          <div className="col-span-12 md:col-span-6 mb-4">
            <Logo className="mb-4" />
            <Text variant="sm" className="pr-0 md:pr-48">
              Lalasia is digital agency that help you make better experience
              iaculis cras in.
            </Text>
          </div>

          <div className="col-span-4 md:col-span-2">
            <Heading as="h4" variant="h4" className="mb-3">
              pages
            </Heading>
            <ul className="flex flex-col gap-y-1">
              {nav_links.map((link) => {
                return (
                  <li>
                    <Link
                      href={link.path}
                      className="capitalize text-sm sm:text-base font-medium leading-relaxed hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-4 md:col-span-2">
            <Heading as="h4" variant="h4" className="mb-3">
              categories
            </Heading>
            <ul className="flex flex-col gap-y-2">
              {categories.map((category) => {
                return (
                  <li>
                    <Link
                      href={`/products?category=${category.title}`}
                      className="capitalize text-sm sm:text-base font-medium leading-relaxed hover:text-primary transition-colors"
                    >
                      {category.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-span-4 md:col-span-2">
            <Heading as="h4" variant="h4" className="mb-3">
              Follow us
            </Heading>
            <ul className="flex flex-col gap-y-1">
              <li>
                <Link
                  href="/"
                  className="capitalize text-sm sm:text-base font-medium leading-relaxed hover:text-primary transition-colors"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="capitalize text-sm sm:text-base font-medium leading-relaxed hover:text-primary transition-colors"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="capitalize text-sm sm:text-base font-medium leading-relaxed hover:text-primary transition-colors"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
