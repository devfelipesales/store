import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <>
      <div className="container flex justify-center">
        <Image
          src="/banner-home-01.png"
          alt="Banner Home - Até 55% de desconto neste mês"
          width={0}
          height={0}
          className="h-auto w-full max-w-full"
          sizes="100vw"
        />
      </div>

      <Categories />
      <ProductList products={deals} />
    </>
  );
}
