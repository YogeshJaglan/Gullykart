import React from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const ProductCard = ({ product }) => {
  const [count, setCount] = React.useState(0);
  const { currency, addToCart, removeFromCart, cartItems } = useAppContext();

  return (
    product && (
      <div className="border border-gray-300 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full shadow-sm hover:shadow-md transition-shadow duration-200">
        
        {/* Product Image */}
        <div className="group cursor-pointer flex items-center justify-center px-2">
          <img
            className="group-hover:scale-105 transition-transform max-w-26 md:max-w-36"
            src={product.image[0]}
            alt={product.name}
          />
        </div>

        {/* Product Details */}
        <div className="text-gray-500/70 text-sm mt-2">
          <p>{product.category}</p>
          <p className="text-gray-800 font-medium text-lg truncate w-full">
            {product.name}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-0.5 mt-1">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  className="md:w-3.5 w-3"
                  src={
                    product.rating > i
                      ? assets.star_icon
                      : assets.star_dull_icon
                  }
                  alt="star"
                />
              ))}
            <p className="ml-1">(4)</p>
          </div>

          {/* Price & Add Button */}
          <div className="flex items-end justify-between mt-3">
            <p className="md:text-xl text-base font-semibold text-primary">
              {currency}{product.offerPrice}{" "}
              <span className="text-gray-500/60 md:text-sm text-xs line-through">
                {currency}{product.price}
              </span>
            </p>

            <div onClick={(e)=> { e.stopPropagation();}} className="text-primary">
              {!cartItems[product._id] ? (
                // Add Button
                <button
                  className="flex items-center justify-center gap-1 bg-primary/10 border border-primary/40 md:w-[80px] w-[64px] h-[34px] rounded cursor-pointer"
                  onClick={() => addToCart(product._id)}>

                  <img src={assets.cart_icon} alt="cart_icon" className="w-4" />
                  Add
                </button>
              ) : (
                // Quantity Controls
                <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-primary/25 rounded select-none">
                  <button
                    onClick={() => {removeFromCart(product._id)}
                      }
                    className="cursor-pointer text-lg px-2 h-full text-primary"
                  >
                    -
                  </button>
                  <span className="w-5 text-center font-medium text-primary">
                    {cartItems[product._id]}
                  </span>
                  <button
                    onClick={() => {addToCart(product._id)}
                      }
                    className="cursor-pointer text-lg px-2 h-full text-primary"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;
