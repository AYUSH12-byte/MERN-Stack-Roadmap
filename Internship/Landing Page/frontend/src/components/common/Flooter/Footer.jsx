import React from "react";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import Card from "./Card";
import SocialCard from "./SocialCard";
export const footerData = [
  {
    title: "Solutions",
    links: ["Small Businesses", "Freelancers", "Customers", "Taxes"],
  },
  {
    title: "Company",
    links: ["About Us", "Career", "Contact"],
  },
  {
    title: "Learn",
    links: ["Blog", "Ebooks", "Guides", "Templates"],
  },
];

const links = {
  title: "social media",
  icons: [FaTwitter, FaLinkedinIn, FaFacebookF],
};
const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Solutions */}
          {footerData.map((e, i) => (
            <Card key={i} {...e} />
          ))}

          <SocialCard {...links} />

          {/* Social */}

          {/* <div className="md:text-right">
            <h3 className="text-lg font-semibold text-slate-900 mb-5">
              Follow us on
            </h3>
            <div className="flex md:justify-end gap-4 text-lg">
              <FaTwitter className="cursor-pointer hover:text-cyan-500" />
              <FaLinkedinIn className="cursor-pointer hover:text-cyan-500" />
              <FaFacebookF className="cursor-pointer hover:text-cyan-500" />
            </div>
          </div> */}
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
