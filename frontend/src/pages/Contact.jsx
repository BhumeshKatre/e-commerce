import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";

const Contact = () => {
  return (
    <section>
      <Title text1={"COUNTACT"} text2={"US"} />
      <div className="py-5 px-4 md:flex gap-10 max-w-4xl mx-auto my-10">
        <div className="md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
          <img
            src={assets.contact_img}
            alt="Contact"
            className="w-full h-72 object-cover "
          />
        </div>
        <div className="md:w-1/2 flex flex-col ">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h2>
          <p className="mb-6 text-gray-600">
            We'd love to hear from you! Reach out to us using the details below:
          </p>
          <ul className="space-y-4">
            <li>
              <span className="font-semibold text-gray-700">Email:</span>{" "}
              <a
                href="mailto:support@ecommerce.com"
                className="text-blue-600 hover:underline"
              >
                support@ecommerce.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-gray-700">Phone:</span>{" "}
              <a
                href="tel:+11234567890"
                className="text-blue-600 hover:underline"
              >
                +1 (123) 456-7890
              </a>
            </li>
            <li>
              <span className="font-semibold text-gray-700">Address:</span> 123
              Main Street, City, Country
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
