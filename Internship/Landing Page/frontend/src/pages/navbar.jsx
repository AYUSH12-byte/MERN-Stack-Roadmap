import Button from "../components/Button";

const Navbar = () => {
  return (
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* Brand */}
          <h1 className="text-2xl font-bold text-[#123B5D]">
            Finpay
          </h1>

          {/* Navigation */}
          <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600">
            <li>
              <a href="#" className="hover:text-[#39A6B2] transition">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#39A6B2] transition">
                Customers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#39A6B2] transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#39A6B2] transition">
                Learn
              </a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Button
              value="Login"
              className="px-6 py-2 border border-gray-300 rounded-xl bg-white text-gray-700 hover:bg-gray-100"
            />

            <Button
              value="Sign Up"
              className="px-6 py-2 rounded-xl bg-[#39A6B2] text-white hover:bg-[#2F8D97]"
            />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;