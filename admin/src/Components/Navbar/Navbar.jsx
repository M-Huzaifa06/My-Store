import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import navLogo from '../../assets/logo.png'
import { AiOutlineUser, AiOutlineMenu } from 'react-icons/ai'

const Navbar = ({ setSidebarOpen }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  return (
    <nav className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Left Section */}
          <div className="flex items-center gap-4">

            {/* Hamburger (Mobile Only) */}
            <button
              className="text-2xl lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <AiOutlineMenu />
            </button>

            <img src={navLogo} alt="Logo" className="h-9 w-9 object-contain" />
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              className="text-2xl"
              onClick={() => setShowProfileMenu((p) => !p)}
            >
              <AiOutlineUser />
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg py-2">
                <Link
                  to="/admin/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setShowProfileMenu(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/admin/logout"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setShowProfileMenu(false)}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar