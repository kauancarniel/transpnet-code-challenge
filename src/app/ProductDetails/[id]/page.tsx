'use client'

import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/interfaces/IProduct";
import { getProductById } from "@/service/request";
import { use, useEffect, useState } from "react";

export default function ProductDetails({ params }: { params: Promise<{ id: number }> }) {
  const { id } = use(params);
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    const fetch = async () => {
    const data = await getProductById(id);
    setProduct(data)
    };
    fetch();
  }, [])

  return (
    <div>
      { product && <ProductCard product={product}/> }
    </div>
  );
}
