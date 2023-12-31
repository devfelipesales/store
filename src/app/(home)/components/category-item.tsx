import { CATEGORY_ICON } from "@/app/constants/category-icon";
import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div>
        <Badge
          variant="outline"
          className="flex justify-center gap-2 rounded-md px-2 py-3"
        >
          {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
          <span className="text-sm font-semibold">{category.name}</span>
        </Badge>
      </div>
    </Link>
  );
};

export default CategoryItem;
