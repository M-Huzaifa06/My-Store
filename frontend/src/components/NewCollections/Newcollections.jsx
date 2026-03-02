import React, { useContext, useState } from 'react'
// import new_collections from '../../assets/new_collections'
import Item from '../Item/Item'
import { ShopContext } from '../../context/ShopContext'
import { useEffect } from 'react';

const Newcollections = () => {
  const { addToCart } = useContext(ShopContext);
  const [recentlyAdded, setRecentlyAdded] = useState(null);
  const [new_collections, setNew_collections] = useState([]);

  useEffect(() => {
  fetch("http://localhost:4000/newcollection")
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        setNew_collections(data.products);
      }
    })
    .catch((error) => console.error('Error fetching products:', error));
}, []);

  const handleAddToCart = (productId) => {
    addToCart(productId);
    setRecentlyAdded(productId);
    setTimeout(() => setRecentlyAdded(null), 1500);
  };
  return (
    <section id="new-collections" className="py-16 md:py-24 bg-linear-to-b from-white via-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-linear-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full font-semibold shadow-sm">NEW IN</span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-900 via-orange-700 to-red-600">
            New Collections
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Fresh drops curated just for you — modern silhouettes, bold colors, and limited runs.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {new_collections.map((item) => {
            return (
              <div key={item.id} className="transform hover:-translate-y-1.5 hover:scale-105 transition-all duration-300">
                <Item 
                  id={item.id}
                  name={item.name} 
                  image={item.image} 
                  old_price={item.old_price} 
                  new_price={item.new_price}
                  onAddToCart={handleAddToCart}
                />
              </div>
            )
          })}
        </div>

        {/* <div className="mt-12 flex justify-center">
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
            See All New Arrivals
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  )
}

export default Newcollections
