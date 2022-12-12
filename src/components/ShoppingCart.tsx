import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useShoppingCart } from "../context/ShopCartContext";
import { CartItem } from "./CartItem";
import { useGetProducts } from "../api/useGetProducts";

export function ShoppingCart() {
  const { closeCart, cartTotal } = useShoppingCart();
   const { data } = useGetProducts();
  return (
    <div className="fixed top-0 right-0 h-screen bg-white w-1/2 font-sans ">
      <div className="px-10 py-5">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Shopping Cart</h3>
          <button onClick={closeCart}>
            <RxCross1 />
          </button>
        </div>
        <div className="my-5 flex flex-col gap-3">
          {cartTotal?.map((item: any) => (
            <CartItem key={item.id} id={item.id} quantity={item.quantity} data={data} />
          ))}
          <div className=" font-bold text-gray text-right">
            Total: $
            {cartTotal?.reduce(
              (total: any, cartItem: any) => {
                const item = data?.products.find((product: any) => product.id === cartItem.id);
                return total + (item.price || 0) * cartItem.quantity;
              },
              0
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
