import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from "lucide-react";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const categoryIcon = {
    keyboards: <KeyboardIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    mousepads: <SquareIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
    mouses: <MouseIcon size={16} />,
  };
  return (
    <div>
      <Badge
        variant="outline"
        className="flex justify-center gap-2 rounded-md px-2 py-3"
      >
        {categoryIcon[category.slug as keyof typeof categoryIcon]}
        <span className="text-sm font-semibold">{category.name}</span>
      </Badge>
    </div>
  );
};

export default CategoryItem;
