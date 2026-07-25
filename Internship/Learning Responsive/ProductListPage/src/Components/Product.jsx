import React from "react";

const Product = ({ selectedProduct, setSelectedProduct }) => {
  if (!selectedProduct) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-lg p-4 sm:p-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Close Button */}
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-4 right-4 text-2xl font-bold hover:text-red-500"
        >
          ✕
        </button>
        
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <img
              src={selectedProduct.images?.[0] || selectedProduct.thumbnail}
              alt={selectedProduct.title}
              className="w-full max-w-sm h-64 sm:h-80 object-contain rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold">
              {selectedProduct.title}
            </h2>

            <p className="text-2xl font-bold text-green-600">
              ${selectedProduct.price}
            </p>

            <p className="text-gray-600">{selectedProduct.description}</p>

            <hr />

            <div className="space-y-2 text-sm sm:text-base">
              <p>
                {" "}
                <strong>Brand:</strong> {selectedProduct.brand}{" "}
              </p>

              <p>
                <strong>Category:</strong> {selectedProduct.category}{" "}
              </p>

              <p>
                {" "}
                <strong>Rating:</strong> ⭐ {selectedProduct.rating}{" "}
              </p>

              <p>
                {" "}
                <strong>Stock:</strong> {selectedProduct.stock}{" "}
              </p>

              <p>
                <strong>Availability:</strong>{" "}
                {selectedProduct.availabilityStatus}
              </p>

              <p>
                {" "}
                <strong>Discount:</strong> {selectedProduct.discountPercentage}
                %{" "}
              </p>

              <p>
                {" "}
                <strong>Weight:</strong> {selectedProduct.weight} kg{" "}
              </p>

              <p>
                <strong>Dimensions:</strong> {selectedProduct.dimensions?.width}{" "}
                × {selectedProduct.dimensions?.height} ×{" "}
                {selectedProduct.dimensions?.depth} cm
              </p>

              <p>
                {" "}
                <strong>Warranty:</strong>{" "}
                {selectedProduct.warrantyInformation}{" "}
              </p>

              <p>
                {" "}
                <strong>Shipping:</strong>{" "}
                {selectedProduct.shippingInformation}{" "}
              </p>

              <p>
                {" "}
                <strong>Return Policy:</strong>{" "}
                {selectedProduct.returnPolicy}{" "}
              </p>

              <div>
                <strong>Tags:</strong>

                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedProduct.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
                Add to Cart
              </button>

              <button
                onClick={() => setSelectedProduct(null)}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
