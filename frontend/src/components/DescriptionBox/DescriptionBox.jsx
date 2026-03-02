import React, { useState } from 'react'

const DescriptionBox = ({ product = {} }) => {
  const [open, setOpen] = useState({ description: true, specs: false, shipping: false })

  const toggle = (key) => setOpen((s) => ({ ...s, [key]: !s[key] }))

  const specs = product.specs || {
    Material: 'Cotton blend',
    Color: 'Navy',
    Fit: 'Regular',
    'Made In': 'India',
  }

  return (
    <section className="max-w-7xl mx-auto my-8 px-4 md:px-8">
      <div className="bg-linear-to-br from-white to-slate-50 rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Product Details</h2>
          <p className="text-gray-600 mb-6">{product.summary || product.description || 'No description available.'}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">


            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-linear-to-r from-green-50 to-emerald-50 text-emerald-600 font-bold">
                wt
              </div>
              <div>
                <div className="text-sm text-gray-500">Weight</div>
                <div className="font-semibold text-gray-800">{product.weight || '—'}</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-linear-to-r from-pink-50 to-rose-50 text-rose-600 font-bold">
                ✓
              </div>
              <div>
                <div className="text-sm text-gray-500">Availability</div>
                <div className="font-semibold text-gray-800">{product.in_stock ? 'In stock' : 'Out of stock'}</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {[
              {
                key: 'description',
                title: 'Description',
                content: (
                  <div className="text-gray-700 leading-relaxed">
                    {product.description || 'No additional description available.'}
                  </div>
                ),
              },
              {
                key: 'specs',
                title: 'Specifications',
                content: (
                  <table className="w-full text-sm">
                    <tbody>
                      {Object.entries(specs).map(([k, v]) => (
                        <tr key={k} className="border-b last:border-b-0">
                          <td className="py-3 text-gray-500 w-1/3">{k}</td>
                          <td className="py-3 font-medium text-gray-800">{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ),
              },
              {
                key: 'shipping',
                title: 'Shipping & Returns',
                content: (
                  <div className="text-gray-700 space-y-2">
                    <p>{product.shipping || 'Ships in 2-5 business days.'}</p>
                    <p>{product.returns || 'Free returns within 30 days.'}</p>
                  </div>
                ),
              },
            ].map((section) => (
              <div key={section.key} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <button
                  onClick={() => toggle(section.key)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={!!open[section.key]}
                >
                  <div>
                    <div className="text-sm text-gray-500">{section.title}</div>
                    <div className="text-gray-800 font-semibold">{section.subtitle}</div>
                  </div>
                  <div className={`transform transition-transform duration-300 ${open[section.key] ? 'rotate-180' : 'rotate-0'}`}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 8L10 13L15 8" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>

                <div className={`px-5 transition-all duration-300 ${open[section.key] ? 'pt-4 max-h-96' : 'pt-0 max-h-0'} overflow-hidden`}>
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DescriptionBox
