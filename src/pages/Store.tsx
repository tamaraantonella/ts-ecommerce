import React from "react";
import { useGetProducts } from "../api/useGetProducts";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  const { data, isLoading, status } = useGetProducts();
  console.log(data);
  return (
    <div className="mx-auto max-w-5xl">
      <h1>Store</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data?.products.map((product:any) => <StoreItem {...product} key={product.id} />)}
      </div>
    </div>
  );
}
