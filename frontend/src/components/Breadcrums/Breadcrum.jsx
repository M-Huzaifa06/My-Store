import React from 'react'
import arrow_icon from '../../assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product}=props;
    
    const breadcrumbs = [
      { label: 'Home', href: '/' },
      { label: 'Shop', href: '/' },
      { label: product.category, href: `/shop/${product.category.toLowerCase()}` },
      { label: product.name, href: '#', active: true }
    ];

  return (
    <nav className="bg-linear-to-r from-slate-50 via-blue-50 to-indigo-50 border-b border-gray-200 shadow-sm py-4 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center flex-wrap gap-2 md:gap-3">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index} className="flex items-center gap-2 md:gap-3">
              <a
                href={breadcrumb.href}
                className={`group relative px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                  breadcrumb.active
                    ? 'text-indigo-600 bg-indigo-50 font-bold'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  {breadcrumb.active ? (
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  ) : (
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  )}
                  {breadcrumb.label}
                </span>
                {!breadcrumb.active && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-indigo-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                )}
              </a>
              
              {index < breadcrumbs.length - 1 && (
                <span className="text-gray-400 hidden sm:inline">
                  <img 
                    src={arrow_icon} 
                    alt="separator" 
                    className="w-4 h-4 opacity-60 hover:opacity-100 transition-opacity"
                  />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrum
