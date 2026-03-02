import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const Navbar = () => {
  const [Menu, setMenu] = useState("shop")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getTotalItems } = useContext(ShopContext)

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="My Store Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold text-gray-900 hidden sm:inline">My Store</span>
          </div>

          {/* Navigation Menu - Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link
                to="/"
                className="text-gray-700 font-medium hover:text-amber-600 transition-colors duration-200"
                onClick={() => setMenu("shop")}
              >
                Shop {Menu === "shop" ? <hr className="mt-1 border-t-2 border-amber-600 w-full" /> : null}
              </Link>
            </li>
            <li>
              <Link
                to="/men"
                className="text-gray-700 font-medium hover:text-amber-600 transition-colors duration-200"
                onClick={() => setMenu("men")}
              >
                Men {Menu === "men" ? <hr className="mt-1 border-t-2 border-amber-600 w-full" /> : null}
              </Link>
            </li>
            <li>
              <Link
                to="/women"
                className="text-gray-700 font-medium hover:text-amber-600 transition-colors duration-200"
                onClick={() => setMenu("women")}
              >
                Women {Menu === "women" ? <hr className="mt-1 border-t-2 border-amber-600 w-full" /> : null}
              </Link>
            </li>
            <li>
              <Link
                to="/kids"
                className="text-gray-700 font-medium hover:text-amber-600 transition-colors duration-200"
                onClick={() => setMenu("kids")}
              >
                Kids {Menu === "kids" ? <hr className="mt-1 border-t-2 border-amber-600 w-full" /> : null}
              </Link>
            </li>
          </ul>

          {/* Cart and Login Section */}
          <div className="flex items-center gap-4">

            {localStorage.getItem('auth-token') ? (
              <button 
              onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}
                className="px-6 py-2 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors duration-200 text-sm md:text-base"
              >
                Logout
              </button>
            ) : <Link to="/login-signup">
            <button 
              className="px-6 py-2 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors duration-200 text-sm md:text-base"
            >
              Login
            </button>
            </Link>}
           
           

            <Link to="/cart">
            <button 
              className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Shopping Cart"
            >
              <img 
                src={cart_icon} 
                alt="Cart Icon" 
                className="h-6 w-6 md:h-7 md:w-7 object-contain" 
              />
              {getTotalItems() > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                  {getTotalItems()}
                </span>
              )}
            </button>
            </Link>

            {/* Hamburger Menu Button - Mobile */}
            <button
              className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200">
            <ul className="flex flex-col gap-2 py-4">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-700 font-medium hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
                  onClick={() => handleMenuClick("shop")}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/men"
                  className="block px-4 py-2 text-gray-700 font-medium hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
                  onClick={() => handleMenuClick("men")}
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/women"
                  className="block px-4 py-2 text-gray-700 font-medium hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
                  onClick={() => handleMenuClick("women")}
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/kids"
                  className="block px-4 py-2 text-gray-700 font-medium hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
                  onClick={() => handleMenuClick("kids")}
                >
                  Kids
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
