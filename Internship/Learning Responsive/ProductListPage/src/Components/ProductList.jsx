import React, { useState, useEffect } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=20")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading Products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-xl">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 font-sans">
      <h2 className="text-3xl font-bold text-center mb-8">
        Product Catalog (20 Items)
      </h2>

      {/*Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-300 rounded-lg shadow hover:shadow-lg transition duration-300 p-4 flex flex-col"
          >
            {/* Product Image */}
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-44 object-contain rounded"
            />

            {/* Product Title */}
            <h3 className="font-semibold text-lg mt-4 h-14 overflow-hidden">
              {product.title}
            </h3>

            {/* Product Price */}
            <p className="text-green-600 font-bold text-lg mt-2">
              ${product.price}
            </p>

            {/* Product Description */}
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
              {product.description}
            </p>

            {/* Button */}
            <button
              onClick={() => setSelectedProduct(product)}
              className="mt-auto w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded mt-5 transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Product Popup */}
      <Product
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </div>
  );
}
