import React, { useState } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const AddProduct = () => {
  const [imagePreview, setImagePreview] = useState(null)
  const [productDetails, setProductDetails] = useState({
    name: '',
    image:'',
    old_price: '',
    new_price: '',
    category: 'Men',
  })

  const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setProductDetails({ ...productDetails, image: file }); // ✅ store file
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  }
};

  const changeHandler = (e) => {
    // const { name, value } = e.target
    setProductDetails ({ ...productDetails, [e.target.name]: e.target.value })
  }
  const Add_Product = async (e) => {
  e.preventDefault();

  console.log(productDetails);

  let responseData;
  let product = { ...productDetails };
  let formData = new FormData();

  formData.append('image', productDetails.image);

  try {
    const response = await fetch('http://localhost:4000/upload', {
      method: 'POST',
      body: formData,
    });

    responseData = await response.json();

    console.log(responseData);

    if (responseData && responseData.success) {
      product.image = responseData.image_url;

      const addResponse = await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const data = await addResponse.json();

      console.log(data);
      data.success
        ? alert("Product added successfully")
        : alert("Failed to add product");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

  return (
    <div className="max-w-2xl mx-auto bg-white p-3 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 sm:mb-2 text-center">Add New Product</h2>
      <form className="space-y-3" onSubmit={Add_Product}>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="name">
            Product Title
          </label>
          <input
            id="name"
            name="name"
            value={productDetails.name}
            onChange={changeHandler}
            type="text"
            placeholder="Enter product name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="old_price">
              Price
            </label>
            <input
              id="old_price"
              name="old_price"
              value={productDetails.old_price}
              onChange={changeHandler}
              type="text"
              placeholder="Original price"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="new_price">
              Offer Price
            </label>
            <input
              id="new_price"
              name="new_price"
              value={productDetails.new_price}
              onChange={changeHandler}
              type="text"
              placeholder="Discounted price"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-1" htmlFor="category">
            Product Category
          </label>
          <select
            id="category"
            name="category"
            value={productDetails.category}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kid">Kid</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="file-input"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded cursor-pointer hover:border-amber-400 transition-colors"
          >
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="h-full object-contain" />
            ) : (
              <>
                <AiOutlineCloudUpload className="text-4xl text-gray-400" />
                <span className="mt-2 text-gray-600">Click to upload image</span>
              </>
            )}
          </label>
          <input
            id="file-input"
            name="image"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-amber-500 text-white font-medium py-2 rounded hover:bg-amber-600 transition-colors"
        >
          Add Product
        </button>
      </form>
    </div>
  )
}

export default AddProduct
