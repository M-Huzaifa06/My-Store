import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Item/Item";

const ShopCategory = (props) => {
  const { all_products, addToCart } = useContext(ShopContext);
  const [sortBy, setSortBy] = useState("relevance");
  const [itemsToShow, setItemsToShow] = useState(12);

  //  Prevent crash before products load
  if (!Array.isArray(all_products)) {
    return <div className="text-center py-20">Loading...</div>;
  }

  //  Case-insensitive category match
  const filteredProducts = all_products.filter(
    (item) =>
      item.category &&
      props.category &&
      item.category.toLowerCase() === props.category.toLowerCase()
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.new_price - b.new_price;
    if (sortBy === "price-high") return b.new_price - a.new_price;
    if (sortBy === "newest") return b.id - a.id;
    return 0;
  });

  const displayedProducts = sortedProducts.slice(0, itemsToShow);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Banner */}
      <div className="w-full h-64 flex items-center justify-center">
        <img
          src={props.banner}
          alt="Category Banner"
          className="max-h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Sort */}
        <div className="flex justify-between mb-8">
          <p className="text-lg font-semibold">
            {displayedProducts.length} of {filteredProducts.length} products
          </p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="relevance">Relevance</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>

        {/* Products Grid */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedProducts.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No products found in this category
            </p>
          </div>
        )}

        {/* Load More */}
        {itemsToShow < filteredProducts.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setItemsToShow(itemsToShow + 12)}
              className="px-6 py-3 bg-amber-500 text-white rounded"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopCategory;