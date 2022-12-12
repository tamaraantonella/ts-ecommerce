import { useShoppingCart } from "../context/ShopCartContext";

type StoreItemProps = {
  brand: string;
  category: string;
  description: string;
  id: number;
  image: string | string[];
  price: number;
  rating: number;
  stock: number;
  title: string;
  thumbnail: string;
};

export function StoreItem(props: StoreItemProps) {
  const {
    brand,
    category,
    description,
    id,
    image,
    price,
    rating,
    stock,
    title,
    thumbnail,
  } = props;
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-3 h-44">
        <h2 className="text-xl font-bold">
          {title} - {brand}
        </h2>
        <p className="text-gray-600">{description}</p>
        <p>Category: {category}</p>
      </div>
      <div className="p-3 w-full">
        <div>
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-44 object-cover overflow-hidden"
          />
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex-1">
            <p className="text-xl font-bold">${price}</p>
            <p>Rating: {rating}</p>
            <p>Stock {stock}</p>
          </div>
          <div className=" self-end">
            {quantity === 0 ? (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => increaseCartQuantity(id,stock)}>
                Add to Cart
              </button>
            ) : (
              <div className=" flex flex-col items-center gap-2 ">
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-2 rounded"
                    onClick={() => decreaseCartQuantity(id)}>
                    -
                  </button>
                  <div>{quantity}</div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-2 rounded"
                    onClick={() => increaseCartQuantity(id,stock)}>
                    +
                  </button>
                </div>
                <button onClick={() => removeItemFromCart(id)}>Remove</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
