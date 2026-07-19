import React from "react";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-5">
              Solutions
            </h3>

            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-cyan-500">Small Businesses</a></li>
              <li><a href="#" className="hover:text-cyan-500">Freelancers</a></li>
              <li><a href="#" className="hover:text-cyan-500">Customers</a></li>
              <li><a href="#" className="hover:text-cyan-500">Taxes</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-cyan-500">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-500">Career</a></li>
              <li><a href="#" className="hover:text-cyan-500">Contact</a></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-5">
              Learn
            </h3>

            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-cyan-500">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-500">Ebooks</a></li>
              <li><a href="#" className="hover:text-cyan-500">Guides</a></li>
              <li><a href="#" className="hover:text-cyan-500">Templates</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:text-right">
            <h3 className="text-lg font-semibold text-slate-900 mb-5">
              Follow us on
            </h3>

            <div className="flex md:justify-end gap-4 text-lg">
              <FaTwitter className="cursor-pointer hover:text-cyan-500" />
              <FaLinkedinIn className="cursor-pointer hover:text-cyan-500" />
              <FaFacebookF className="cursor-pointer hover:text-cyan-500" />
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-12 border-gray-200" />

        {/* Bottom */}
        <p className="text-center text-gray-500 text-sm">
          © Finpay 2026. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;