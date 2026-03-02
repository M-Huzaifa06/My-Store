import React from 'react'
import hero_image from '../../assets/hero_image.png'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-linear-to-r from-amber-50 via-orange-50 to-red-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left Content Section */}
          <div className="space-y-5 sm:space-y-6">

            {/* Badge */}
            <div className="inline-block">
              <span className="px-3 py-1 sm:px-4 sm:py-2 bg-linear-to-r from-amber-500 to-orange-500 text-white text-xs sm:text-sm font-semibold rounded-full shadow">
                ✨ NEW ARRIVALS ONLY
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-4">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-transparent bg-linear-to-r from-amber-900 via-orange-700 to-red-600 bg-clip-text leading-tight">
                  new
                </h1>
                <img src={hand_icon} alt="Hand Icon" className="h-8 sm:h-10 md:h-14 w-8 sm:w-10 md:w-14 animate-bounce" />
              </div>

              <div className="space-y-1">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-transparent bg-linear-to-r from-orange-600 to-red-600 bg-clip-text leading-tight">
                  collections
                </h2>
                <p className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800">
                  for everyone
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
             <a href="#new-collections">
              <button className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <span className="text-base sm:text-lg">Latest Collection</span>
                <img 
                  src={arrow_icon} 
                  alt="Arrow" 
                  className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transform group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </a>
            </div>
              

          </div>

          {/* Right Hero Image Section */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative inline-block w-full max-w-md sm:max-w-lg md:max-w-xl">
              {/* Decorative linear Background Circle */}
              <div className="absolute -top-10 md:-top-20 -right-10 md:-right-20 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-linear-to-br from-amber-300 to-transparent rounded-full opacity-20 filter blur-3xl pointer-events-none"></div>
              
              {/* Hero Image */}
              <img 
                src={hero_image} 
                alt="Hero Character" 
                className="relative z-10 w-full h-auto object-contain max-h-56 sm:max-h-80 md:max-h-112 drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              
              {/* Decorative Bottom Accent */}
              <div className="absolute -bottom-8 -left-8 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 bg-linear-to-tr from-orange-300 to-transparent rounded-full opacity-15 filter blur-3xl pointer-events-none"></div>
            </div>
          </div>

        </div>

        {/* Bottom Decorative Elements */}
        {/* <div className="mt-12 md:mt-16 flex justify-center gap-3">
          <div className="w-3 h-3 rounded-full bg-linear-to-r from-amber-500 to-orange-500"></div>
          <div className="w-3 h-3 rounded-full bg-linear-to-r from-orange-500 to-red-500 opacity-60"></div>
          <div className="w-3 h-3 rounded-full bg-linear-to-r from-red-500 to-pink-500 opacity-40"></div>
        </div> */}

      </div>
    </section>
  )
}

export default Hero
