import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Brand */}
          <h1 className="text-2xl font-bold text-[#123B5D]">Finpay</h1>

          {/* Desktop Navigation */}
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

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              value="Login"
              className="px-6 py-2 border border-gray-300 rounded-xl bg-white text-gray-700 hover:bg-gray-100"
            />

            <Button
              value="Sign Up"
              className="px-6 py-2 rounded-xl bg-[#39A6B2] text-white hover:bg-[#2F8D97]"
            />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={28} className="text-[#123B5D]" />
            ) : (
              <Menu size={28} className="text-[#123B5D]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-xl shadow-lg p-6 mb-4">
            <ul className="flex flex-col gap-5 text-gray-700 font-medium">
              <li>
                <a href="#" onClick={() => setIsOpen(false)}>
                  Products
                </a>
              </li>

              <li>
                <a href="#" onClick={() => setIsOpen(false)}>
                  Customers
                </a>
              </li>

              <li>
                <a href="#" onClick={() => setIsOpen(false)}>
                  Pricing
                </a>
              </li>

              <li>
                <a href="#" onClick={() => setIsOpen(false)}>
                  Learn
                </a>
              </li>
            </ul>

            <div className="flex flex-col gap-3 mt-6">
              <Button
                value="Login"
                className="w-full border border-gray-300 rounded-xl bg-white text-gray-700 py-3"
              />

              <Button
                value="Sign Up"
                className="w-full bg-[#39A6B2] text-white rounded-xl py-3"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
