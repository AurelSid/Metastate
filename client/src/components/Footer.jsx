import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 py-2">
      <div className="container mx-auto flex flex-wrap justify-center ">
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <h3 className="text-l font-semibold text-white mb-4">Careers</h3>
          <ul className="text-gray-400 text-sm">
            <li className="mb-2">
              <a href="#">Open Positions</a>
            </li>
            <li className="mb-2">
              <a href="#">Culture</a>
            </li>
            <li className="mb-2">
              <a href="#">Benefits</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <h3 className="text-l font-semibold text-white mb-4">Company</h3>
          <ul className="text-gray-400 text-sm">
            <li className="mb-2">
              <a href="#">Contact Us</a>
            </li>
            <li className="mb-2">
              <a href="#">shop</a>
            </li>
            <li className="mb-2">
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <h3 className="text-xl font-semibold text-white mb-4">Copyright</h3>
          <p className="text-gray-400">
            © 2023 EspecGraphics. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
