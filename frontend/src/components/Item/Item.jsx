import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  const [added, setAdded] = useState(false)
  
  // Calculate discount percentage
  const discountPercent = props.old_price && props.new_price 
    ? Math.round(((props.old_price - props.new_price) / props.old_price) * 100)
    : 0;

  const handleAddToCart = () => {
    if (props.onAddToCart) {
      props.onAddToCart(props.id)
      setAdded(true)
      setTimeout(() => setAdded(false), 1500)
    }
  }

  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
        
        {/* Image Container */}
        <div className="relative h-64 md:h-80 overflow-hidden bg-linear-to-br from-gray-50 to-gray-100">
          <Link to={`/product/${props.id}`} className="block w-full h-full">
            <img 
              src={props.image} 
              alt={props.name}
              onClick={window.scrollTo(0,0)}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </Link>
          
          {/* Discount Badge */}
          {discountPercent > 0 && (
            <div className="absolute top-4 right-4 bg-linear-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              -{discountPercent}%
            </div>
          )}

          {/* New Badge */}
          <div className="absolute top-4 left-4 bg-linear-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            NEW
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 md:p-6 bg-white">
          
          {/* Product Name */}
          <h3 className="text-gray-800 font-bold text-sm md:text-base line-clamp-2 mb-3 group-hover:text-amber-600 transition-colors duration-200">
            {props.name}
          </h3>

          {/* Price Section */}
          <div className="flex items-center justify-between gap-3 mb-4">
            {/* New Price */}
            <div className="flex items-center gap-1">
              <span className="text-base md:text-lg font-bold text-transparent bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text">
                ${props.new_price.toFixed(2)}
              </span>
            </div>

            {/* Old Price (Strikethrough) */}
            {props.old_price && (
              <span className="text-sm text-gray-400 line-through">
                ${props.old_price.toFixed(2)}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button 
            onClick={handleAddToCart}
            className={`w-full py-2.5 md:py-3 px-4 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 ${
              added
                ? 'bg-linear-to-r from-green-600 to-emerald-600'
                : 'bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700'
            }`}
          >
            {added ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>

        {/* Bottom Border linear */}
        <div className="h-1 bg-linear-to-r from-amber-400 via-orange-400 to-red-400 group-hover:via-amber-500 transition-all duration-300"></div>
      </div>
    </div>
  )
}

export default Item
