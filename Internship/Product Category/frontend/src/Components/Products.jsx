import React, { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null); // Fixed missing error state

  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [maxPrice, setMaxPrice] = useState(1000); 

    //call the actual api to fetch the data form the database 
     
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=10');
        const data = await response.json();
        setProducts(data);
        
        // Dynamically set max price slider limit based on highest product price fetched
        if (data.length > 0) {
          const highestPrice = Math.max(...data.map(p => p.price));
          setMaxPrice(Math.ceil(highestPrice));
        }
      } catch (err) {
        setError(err.message);
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  // Extract unique categories from the product list for the dropdown filter
  const categories = [...new Set(products.map(p => p.category))];

  // Filter Logic run on every state change
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
    const matchesPrice = product.price <= maxPrice;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto"> 
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Featured Products</h1>
        
        {/* --- Filter Controls UI --- */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Search Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Search Products</label>
            <input 
              type="text" 
              placeholder="Type to search..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm capitalize"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Price Range Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-gray-700">Max Price</label>
              <span className="text-sm font-bold text-blue-600">${maxPrice}</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="1000" 
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

        </div>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} obj={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products match your filter criteria.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Products;