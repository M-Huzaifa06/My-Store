import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../../assets/cart_cross_icon.png'

const CartItems = () => {
  const { getCartDetails, removeFromCart, updateQuantity, getTotalPrice, getTotalItems, clearCart } = useContext(ShopContext)
  const cartItems = getCartDetails()
  const totalPrice = getTotalPrice()

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 to-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
          
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some products to get started!</p>
            <a href="/" className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-white py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Shopping Cart</h1>
          <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-4 py-2 rounded-lg">
            {getTotalItems()} items
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-gray-200 bg-linear-to-r from-slate-50 to-white">
                <div className="grid grid-cols-12 gap-3 text-sm font-bold text-gray-600">
                  <div className="col-span-5">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Subtotal</div>
                  <div className="col-span-1"></div>
                </div>
              </div>

              {/* Items */}
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 hover:bg-slate-50 transition-colors">
                    <div className="grid grid-cols-12 gap-3 items-center">
                      {/* Product Info */}
                      <div className="col-span-5 flex gap-4">
                        <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 line-clamp-2">{item.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">ID: {item.id}</p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="col-span-2 text-center font-semibold text-indigo-600">
                        ${item.new_price}
                      </div>

                      {/* Quantity */}
                      <div className="col-span-2 text-center">
                        <div className="inline-flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.cartQuantity - 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            −
                          </button>
                          <span className="px-4 py-1 font-semibold">{item.cartQuantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.cartQuantity + 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Subtotal */}
                      <div className="col-span-2 text-right font-bold text-gray-900">
                        ${item.subtotal.toFixed(2)}
                      </div>

                      {/* Remove */}
                      <div className="col-span-1 text-right">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                          aria-label="Remove item"
                        >
                          <img src={remove_icon} alt="Remove" className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clear Cart Button */}
              <div className="p-6 border-t border-gray-200 bg-slate-50">
                <button
                  onClick={clearCart}
                  className="text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Tax</span>
                  <span className="font-semibold">${(totalPrice * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-indigo-600">${(totalPrice * 1.1).toFixed(2)}</span>
              </div>

              <button className="w-full py-3 px-4 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors mb-3">
                Proceed to Checkout
              </button>

              <a href="/shop" className="block text-center text-sm font-medium text-indigo-600 hover:text-indigo-700 py-2">
                Continue Shopping
              </a>

              {/* Promo Code */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <label className="block text-sm font-medium text-gray-900 mb-2">Promo Code</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button className="px-4 py-2 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition-colors text-sm">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
