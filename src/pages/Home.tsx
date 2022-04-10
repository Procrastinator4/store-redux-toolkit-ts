import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addToCart, fetchProducts } from "../features/products/productSlice";

const Home = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  return (
    <div>
      <div className="text-center my-8">
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-12  px-4">
        {products.map((product) => (
          <div key={product.id} className="list-none mx-auto">
            <img
              src={product.image}
              alt={product.title}
              className="h-[200px] w-[200px] mx-auto object-contain"
            />
            <li className="font-bold">Title: {product.title}</li>
            <li className="font-bold">Description: {product.description}</li>
            <li className="font-bold">Price: {product.price}</li>
            <button
              className="bg-purple-700 py-3 px-6 rounded-md"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
