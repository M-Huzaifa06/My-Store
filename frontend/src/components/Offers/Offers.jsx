import React from 'react'
import exclusive_image from '../../assets/exclusive_image.png'
import { Link } from 'react-router-dom'

const Offers = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-linear-to-b from-amber-50 via-white to-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">

          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-4">
            <div className="mb-4 inline-block">
              <span className="px-3 py-1 sm:px-4 sm:py-2 bg-linear-to-r from-amber-600 to-orange-500 text-white rounded-full font-semibold shadow">HOT DEALS</span>
            </div>
            <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-900 via-orange-700 to-red-600 leading-tight">
              Exclusive
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-2 sm:mb-4">
              Offers for you
            </h3>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-lg mx-auto lg:mx-0">
              Discover our exclusive offers and discounts. Shop now and save big on your favorite products — limited time only.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-3 sm:gap-4">
              <Link to="/offers" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-linear-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
                Check Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link to="/sale" className="hidden md:inline-flex items-center px-5 py-3 bg-white border border-gray-200 text-gray-700 rounded-full shadow-sm hover:shadow-md transition">Shop Sale</Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
              <div className="absolute -left-8 -top-8 w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 bg-linear-to-br from-orange-300 to-transparent rounded-full opacity-30 filter blur-2xl pointer-events-none"></div>
              <img src={exclusive_image} alt="Exclusive Offer" className="relative z-10 w-full h-auto object-contain rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 max-h-64 sm:max-h-80 md:max-h-112" />
              <div className="absolute -right-8 -bottom-8 w-32 sm:w-40 md:w-44 h-32 sm:h-40 md:h-44 bg-linear-to-tl from-amber-200 to-transparent rounded-full opacity-25 filter blur-2xl pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Offers
