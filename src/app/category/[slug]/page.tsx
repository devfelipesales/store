import { CATEGORY_ICON } from "@/app/constants/category-icon";
import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";

const CategoryProducts = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });

  if (!category) {
    return null;
  }

  return (
    <div className="container flex flex-col gap-8">
      <Badge
        className="w-fit gap-2 border-2 border-primary px-4 py-2 text-base font-semibold uppercase"
        variant="outline"
      >
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {category?.name}
      </Badge>
      <div className="grid grid-cols-2 gap-5">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
