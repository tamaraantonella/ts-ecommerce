import React from "react";
import { useGetProducts } from "../api/useGetProducts";

export function Store() {
  const { data, isLoading, status } = useGetProducts();
  console.log(data);
  return <div>Store</div>;
}
