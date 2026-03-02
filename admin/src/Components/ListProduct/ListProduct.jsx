import React, { useState, useEffect } from "react";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Products
  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:4000/allproducts");
      const data = await response.json();
      setAllProducts(data.products); //  FIXED
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // Delete Product
  const removeProduct = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:4000/deleteproduct/${id}`,
        { method: "DELETE" },
      );

      const data = await response.json();

      if (data.success) {
        setAllProducts((prev) => prev.filter((product) => product.id !== id));
      }
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  return (
    <div className="max-h-[87vh] px-4">
      <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl px-6 py-0 border border-white/30">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Product List</h2>

        {loading ? (
          <div className="text-center py-10 text-gray-500">
            Loading products...
          </div>
        ) : allproducts.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            No products available
          </div>
        ) : (
          <div className="overflow-x-auto">
            <div className="max-h-[72vh] overflow-y-auto rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 bg-gray-100 z-10">
                  <tr className="text-gray-600 uppercase text-sm tracking-wider">
                    <th className="p-4">Image</th>
                    <th className="p-4">Title</th>
                    <th className="p-4">Old Price</th>
                    <th className="p-4">New Price</th>
                    <th className="p-4">Category</th>
                    <th className="p-4 text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {allproducts.map((product) => (
                    <tr
                      key={product.id}
                      className="border-b hover:bg-gray-50 transition duration-200"
                    >
                      <td className="p-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-lg shadow"
                        />
                      </td>

                      <td className="p-4 font-medium text-gray-800">
                        {product.name}
                      </td>

                      <td className="p-4 text-gray-500 line-through">
                        ${product.old_price}
                      </td>

                      <td className="p-4 text-green-600 font-semibold">
                        ${product.new_price}
                      </td>

                      <td className="p-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                          {product.category}
                        </span>
                      </td>

                      <td className="p-4 text-center">
                        <button
                          onClick={() => removeProduct(product.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm shadow transition duration-200"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListProduct;
