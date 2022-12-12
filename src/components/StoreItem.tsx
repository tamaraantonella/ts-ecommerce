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
        <div><img src={thumbnail} alt={title} className="w-full h-44 object-cover overflow-hidden"/></div>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-xl font-bold">${price}</p>
            <p>Rating: {rating}</p>
          </div>
          <div className=" self-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
