import React from "react";
import { BsCart } from "react-icons/bs";
export function Cart() {
  return (
    <div className="cursor-pointer relative w-9">
      <p className="text-xl">

      <BsCart />
      </p>
      <div className="absolute px-1 bg-red-500 text-white rounded-full text-xs top-0 right-0">
        0
      </div>
    </div>
  );
}
