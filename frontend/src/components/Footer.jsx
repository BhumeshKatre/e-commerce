import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="pt-10 border-t-1  border-gray-200 flex flex-col md:flex-row justify-between  text-gray-800">
        <div className="mb-4 md:mb-0 max-w-xs">
          <h1 className="text-xl font-bold mb-2">E-Commerce</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aut
            saepe expedita, a illum voluptate natus similique soluta, officia
            veniam dolorem sunt! Modi velit odio eos iste ea deleniti quibusdam?
          </p>
        </div>

        <div className="mb-4 md:mb-0">
          <h1 className="text-lg font-semibold mb-2">Company</h1>
          <ul>
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-lg font-semibold mb-2">Get in Touch</h1>
          <ul>
            <li>Email: info@ecommerce.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
