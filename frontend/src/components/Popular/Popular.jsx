import React, { useContext, useState, useEffect } from "react";

import Item from "../Item/Item";
import arrow_icon from "../../assets/arrow.png";
import { ShopContext } from "../../context/ShopContext";

const Popular = () => {
  const { addToCart } = useContext(ShopContext);
  const [recentlyAdded, setRecentlyAdded] = useState(null);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    // Fetch popular products from the backend API
    fetch("http://localhost:4000/popularinwomen")
      .then((response) => response.json())
      .then((data) => {
        setPopularProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching popular products:", error);
      })
  }, []);  

  const handleAddToCart = (productId) => {
    addToCart(productId);
    setRecentlyAdded(productId);
    setTimeout(() => setRecentlyAdded(null), 1500);
  };
  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-white via-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-linear-to-r from-amber-100 to-orange-100 text-amber-700 text-sm font-semibold rounded-full">
              ⭐ TOP PICKS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-linear-to-r from-amber-900 via-orange-700 to-red-600 bg-clip-text mb-4">
            Popular in Women
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Discover our best-selling collection. Handpicked items loved by our
            customers.
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-1 w-12 bg-linear-to-r from-transparent to-amber-500 rounded-full"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="h-1 w-12 bg-linear-to-l from-transparent to-orange-500 rounded-full"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {popularProducts.map((item, i) => {
            return (
              <div
                key={i}
                className="transform hover:scale-105 transition-transform duration-300"
              >
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  old_price={item.old_price}
                  new_price={item.new_price}
                  onAddToCart={handleAddToCart}
                />
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a href="/Women">
          <button className="group px-8 md:px-12 py-3 md:py-4 bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center gap-2">
              View All Products
              <img
                src={arrow_icon}
                alt="Arrow"
                className="h-5 w-5 md:h-6 md:w-6 transform group-hover:translate-x-1 transition-transform duration-300"
              />
            </span>
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Popular;
