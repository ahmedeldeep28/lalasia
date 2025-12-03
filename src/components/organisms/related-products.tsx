import { Product } from "@/types";
import { ProductGrid } from "@/components/organisms/product-grid";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { PRODUCTS } from "@/data";

interface RelatedProductsProps {
    currentProductId: string;
    category: string;
}

export function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
    const relatedProducts = PRODUCTS.filter(
        (product) => product.category === category && product.id !== currentProductId
    ).slice(0, 3); // Limit to 3 related products

    if (relatedProducts.length === 0) {
        return null;
    }

    return (
        <div className="mt-20">
            <div className="mb-8">
                <Heading as="h2" variant="h2" className="mb-2">
                    Related Items
                </Heading>
                <Text variant="sm" color="muted">
                    Our recommendation for you based on your current selection.
                </Text>
            </div>
            <ProductGrid products={relatedProducts} />
        </div>
    );
}
