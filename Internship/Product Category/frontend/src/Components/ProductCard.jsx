export const ProductCard = ({obj}) => {
  console.log(obj);
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col">

      <div className="h-48 p-4 bg-white flex items-center justify-center">
        <img 
        src={obj.image}
          className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300" 
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          {obj.category}
        </span>
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 h-10">
      {obj.title}
        </h3>
        <div className="mt-auto">
          <p className="text-lg font-bold text-gray-900 mb-3">5000</p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};