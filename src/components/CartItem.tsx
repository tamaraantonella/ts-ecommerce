import React from "react";
import { useShoppingCart } from "../context/ShopCartContext";

type CartItemProps = {
  id: number;
  quantity: number;
  data: any;
};
export function CartItem({ id, quantity, data }: CartItemProps) {
  const { removeItemFromCart } = useShoppingCart();

  const product = data?.products.find((product: any) => product.id === id);
  if (product === null) return null;

  return (
    <div>
      <div className="flex items-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-20 h-20"
        />
        <div className="flex-1 ml-3">
          <h2 className="text-xl font-bold">
            {product.title}{" "}
            <span className=" text-sm  font-extralight">x{quantity}</span>
          </h2>

          <p className="text-gray-500">$ {product.price}</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-gray-600"> ${quantity * product.price}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => removeItemFromCart(id)}>
            x
          </button>
        </div>
      </div>
    </div>
  );
}
