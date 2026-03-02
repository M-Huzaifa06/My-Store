import React, { useState, useContext } from 'react'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'
import { Eye } from 'lucide-react';

const ProductDisplay = (props) => {
    const {product} = props
    const { addToCart } = useContext(ShopContext)
    const [selectedSize, setSelectedSize] = useState('M')
    const [mainImage, setMainImage] = useState(product.image)
    const [added, setAdded] = useState(false)
    
    const discount = Math.round(((product.old_price - product.new_price) / product.old_price) * 100)
    
    const handleAddToCart = () => {
        addToCart(product.id)
        setAdded(true)
        setTimeout(() => setAdded(false), 2000)
    }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Image Gallery Section */}
            <div className="flex flex-col gap-4">
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-square flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 overflow-hidden group">
                        <img 
                            src={mainImage} 
                            alt={product.name}
                            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    {discount > 0 && (
                        <div className="absolute top-4 right-4 bg-linear-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                            -{discount}%
                        </div>
                    )}
                </div>

                {/* Thumbnail Images */}
                <div className="grid grid-cols-4 gap-3">
                    {[0, 1, 2, 3].map((index) => (
                        <div 
                            key={index}
                            onClick={() => setMainImage(product.image)}
                            className="cursor-pointer rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-400 transition-all duration-300 bg-white shadow-md hover:shadow-lg"
                        >
                            <div className="aspect-square bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300">
                                <img 
                                    src={product.image} 
                                    alt={`Thumbnail ${index + 1}`}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Product Details Section */}
            <div className="py-4">
                {/* Product Title */}
                <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4 leading-tight">
                    {product.name}
                </h1>

                {/* Rating Section */}
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex gap-1">
                        {[0, 1, 2, 3, 4].map((i) => (
                            <img 
                                key={i} 
                                src={i < 4 ? star_icon : star_dull_icon} 
                                alt="star"
                                className="w-5 h-5 hover:scale-110 transition-transform"
                            />
                        ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        4.0/5 (122 reviews)
                    </span>
                </div>

                {/* Price Section */}
                <div className="flex items-baseline gap-4 mb-8 p-4 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                    <span className="text-4xl font-bold text-transparent bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text">
                        ${product.new_price}
                    </span>
                    <span className="text-xl text-gray-400 line-through">
                        ${product.old_price}
                    </span>
                    {discount > 0 && (
                        <span className="ml-auto text-lg font-bold text-red-500 bg-red-50 px-4 py-2 rounded-lg">
                            Save {discount}%
                        </span>
                    )}
                </div>

                {/* Description */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8 p-4 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center gap-2">
                    {product.description}<span><Eye /></span> 45 peoples are viewing this product right now
                </p>

                {/* Size Selection */}
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-linear-to-r from-blue-500 to-indigo-500 rounded-full"></span>
                        Select Size
                    </h3>
                    <div className="grid grid-cols-5 gap-2">
                        {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`py-3 px-2 rounded-lg font-bold text-center transition-all duration-300 border-2 ${
                                    selectedSize === size
                                        ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white border-indigo-600 shadow-lg scale-105'
                                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:shadow-md'
                                }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Add to Cart Button */}
                <button 
                    onClick={handleAddToCart}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 mb-6 ${
                        added 
                            ? 'bg-linear-to-r from-green-600 to-emerald-600' 
                            : 'bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                    }`}
                >
                    {added ? '✓ Added to Cart' : '🛒 Add to Cart'}
                </button>

                {/* Product Info */}
                <div className="space-y-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex justify-between items-center py-2 border-b border-gray-300">
                        <span className="font-semibold text-gray-700">Category:</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold text-sm">
                            {product.category}
                        </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <span className="font-semibold text-gray-700">Tags:</span>
                        <div className="flex gap-2">
                            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-semibold text-sm">
                                Modern
                            </span>
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold text-sm">
                                Latest
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay
