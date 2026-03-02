import React from 'react'
import footer_logo from '../../assets/logo_big.png'
import instagram_icon from '../../assets/instagram_icon.png'
import pinterest_icon from '../../assets/pintester_icon.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-linear-to-b from-slate-900 via-gray-900 to-black text-white">      

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img src={footer_logo} alt="My Store Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your ultimate destination for trendy, quality fashion and lifestyle products.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <img src={instagram_icon} alt="Instagram" className="w-5 h-5 invert" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <img src={pinterest_icon} alt="Pinterest" className="w-5 h-5 invert" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <img src={whatsapp_icon} alt="WhatsApp" className="w-5 h-5 invert" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-linear-to-b from-amber-500 to-orange-500 rounded"></span>
              Shop
            </h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm">All Products</a></li>
              <li><a href="/women" className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm">Women</a></li>
              <li><a href="/men" className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm">Men</a></li>
              <li><a href="/kids" className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm">Kids</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-linear-to-b from-amber-500 to-orange-500 rounded"></span>
              Company
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm">Press</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-linear-to-b from-amber-500 to-orange-500 rounded"></span>
              Support
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm">Track Order</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-linear-to-b from-amber-500 to-orange-500 rounded"></span>
              Legal
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm">Returns Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-700 mb-8"></div>

        {/* Bottom Section (responsive) */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-3 text-sm text-gray-400">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <p className="text-sm">&copy; {currentYear} <span className="text-white font-semibold">My Store</span>. All rights reserved.</p>
          </div>

          <div className="w-full md:w-1/3 flex justify-center">
            <span className="text-xs sm:text-sm">Made with ❤️ by Me</span>
          </div>

          <div className="w-full sm:w-1/2 flex flex-wrap justify-center md:justify-end gap-2 text-xs sm:text-sm">
            <span className="px-2">Secure Payments</span>
            <span className="hidden md:inline px-1">•</span>
            <span className="px-2">Fast Shipping</span>
            <span className="hidden md:inline px-1">•</span>
            <span className="px-2">Easy Returns</span>
          </div>
        </div>
      </div>

      {/* linear Line */}
      <div className="h-1 bg-linear-to-r from-transparent via-amber-500 to-transparent"></div>
    </footer>
  )
}

export default Footer
