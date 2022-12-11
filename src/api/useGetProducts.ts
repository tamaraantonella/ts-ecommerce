import { useQuery } from "react-query";

//useGetProducts returns two objects, data and isLoading
const getProducts = async () => {
  return fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((json) => json);
};

export const useGetProducts = () => {
  return useQuery("products", () => getProducts(), {
    staleTime: Infinity,
  });
};
