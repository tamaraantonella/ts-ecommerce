import React from "react";
import { BsCart } from "react-icons/bs";
import { useShoppingCart } from "../context/ShopCartContext";

export function Cart() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <div className="cursor-pointer relative w-9">
      <button className="text-xl" onClick={openCart}>
      <BsCart />
      </button>
      <div className="absolute px-1 bg-red-500 text-white rounded-full text-xs top-0 right-0">
        {cartQuantity}
      </div>
    </div>
  );
}
