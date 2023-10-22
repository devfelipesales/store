"use client";

import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
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
    </>
  );
}
