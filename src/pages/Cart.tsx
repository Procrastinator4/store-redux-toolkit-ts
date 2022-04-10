import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { removeToCart } from "../features/products/productSlice";

const Cart = () => {
    const cartItems = useAppSelector((state) => state.products.cart);
    const dispatch = useAppDispatch()
    return (
        <section>
            <div className="flex flex-col space-y-8 px-8">
                {cartItems && cartItems.map((items) => (
                    <div key={items.id} className="flex justify-evenly bg-slate-400 items-center">
                        <img
                            src={items.image}
                            alt={items.title}
                            className="h-[80px] w-[80px] object-contain"
                        />
                        <span className="font-bold">{items.title} </span>
                        <span className="font-bold">{items.price} </span>
                        <div>
                            <button className="bg-purple-700 py-2 px-6 rounded-md"
                                onClick={() => dispatch(removeToCart(items.id))}
                            >Remove from Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cart;
