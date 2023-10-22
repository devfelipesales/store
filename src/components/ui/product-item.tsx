import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import DiscountBadge from "./discount-badge";
import Link from "next/link";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex flex-col gap-4">
        <div className="relative flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-[90px] w-auto"
            style={{ objectFit: "contain" }}
          />

          {product.discountPercentage > 0 && (
            <DiscountBadge className="absolute left-3 top-3">
              {product.discountPercentage}
            </DiscountBadge>
          )}
        </div>
        <div>
          <p className="max-w-[16ch] overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.name}
          </p>
          <div className="flex items-center gap-2 ">
            {product.discountPercentage > 0 ? (
              <>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
                  R$ {product.totalPrice.toFixed(2)}
                </p>

                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs line-through opacity-75">
                  R$ {Number(product.basePrice).toFixed(2)}
                </p>
              </>
            ) : (
              <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
                R$ {product.basePrice.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
