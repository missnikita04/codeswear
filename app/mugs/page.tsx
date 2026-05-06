import Link from "next/link";
import React from "react";

const Mugs = () => {
  const products = Array(8).fill({
    title: "Wear the Code",
    category: "Hoodies",
    price: "₹499.00",
    sizes: "S, M, L, XL",
    image:
      "https://m.media-amazon.com/images/I/710ko3wuppL._AC_UL320_.jpg",
    slug: "wear-the-code",
  });

  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Mugs Collection</h1>
          <p className="mt-2 text-gray-500">
            Premium coding Mugs
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <Link
              key={index}
              href={`/product/${item.slug}`}
              className="bg-white border rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="bg-gray-100 p-4 h-72 flex items-center justify-center">
                <img
                  alt={item.title}
                  src={item.image}
                  className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="text-xs text-indigo-500 font-semibold uppercase tracking-wider mb-2">
                  {item.category}
                </h3>

                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h2>

                <p className="text-xl font-bold text-gray-800 mb-2">
                  {item.price}
                </p>

                <p className="text-sm text-gray-500">{item.sizes}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mugs;