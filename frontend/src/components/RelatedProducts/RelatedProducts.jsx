import React, { useContext, useState } from 'react'
import Item from "../Item/Item";
import { ShopContext } from '../../context/ShopContext'

const RelatedProducts = ({ product }) => {
  const { all_products, addToCart } = useContext(ShopContext)
  const [recentlyAdded, setRecentlyAdded] = useState(null)

  const handleAdd = (productId) => {
    addToCart(productId)
    setRecentlyAdded(productId)
    setTimeout(() => setRecentlyAdded(null), 1500)
  }

  // Filter products by same category and exclude current product
  const relatedProducts = product 
    ? all_products.filter(item => item.category === product.category && item.id !== product.id).slice(0, 4)
    : []

  return (
    <section className="max-w-7xl mx-auto my-8 px-4 md:px-8">
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">Related Products</h3>
          <a href="/shop" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View all →</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((item, i) => (
              <Item 
                    name={item.name} 
                    key={i}
                    id={item.id}
                    image={item.image} 
                    old_price={item.old_price} 
                    new_price={item.new_price}
                    onAddToCart={handleAdd}
                  />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center py-8">No related products found</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts
