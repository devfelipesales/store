import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex flex-col justify-self-start">
      <div className="bg-category-item-gradient flex h-[150px] w-[165px] items-center justify-center rounded-t">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-[90px] w-auto"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="rounded-b bg-accent p-2 text-center text-sm font-semibold">
        {category.name}
      </div>
    </div>
  );
};

export default CategoryItem;
