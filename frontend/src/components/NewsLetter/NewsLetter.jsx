import React from 'react'

const NewsLetter = () => {
  return (
    <section className="py-12 md:py-16 bg-linear-to-r from-amber-50 via-white to-amber-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-900 via-orange-700 to-red-600">
            Get Exclusive Offers
          </h2>
          <p className="mt-3 text-gray-600">Subscribe to our newsletter and stay updated with new drops and special discounts.</p>

          <form className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-300 transition"
            />

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg shadow-md hover:shadow-2xl transform hover:scale-105 transition"
            >
              Subscribe
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-500">No spam — unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter
