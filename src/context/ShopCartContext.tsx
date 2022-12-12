import { createContext, ReactNode, useContext } from "react";
import React from "react";

const ShoppingCartContext = createContext({} as ShopCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

type ShopCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShopCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number, stock: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeItemFromCart: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
  cartQuantity: number;
  cartTotal: CartItem[];
};

export function ShoppingCartProvider({ children }: ShopCartProviderProps) {
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  function openCart() {
    setIsOpen(true);
  }
  function closeCart() {
    setIsOpen(false);
  }
  function getItemQuantity(id: number) {
    const item = cart.find((item) => item.id === id);
    return item?.quantity || 0;
  }

  function increaseCartQuantity(id: number, stock: number) {
    const item = cart.find((item) => item.id === id);
    if (item && item.quantity < stock) {
      item.quantity++;
      setCart([...cart]);
    } else {
      setCart([...cart, { id, quantity: 1 }]);
    }
  }

  function decreaseCartQuantity(id: number) {
    const item = cart.find((item) => item.id === id);
    if (item) {
      item.quantity--;
      setCart([...cart]);
    }
  }

  function removeItemFromCart(id: number) {
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemFromCart,
        cartQuantity,
        openCart,
        closeCart,
        cartTotal: cart,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
