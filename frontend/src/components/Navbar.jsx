import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaUser,
  FaShoppingCart,
  FaSearch,
  FaUserMinus,
  FaHamburger,
} from "react-icons/fa";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "COLLECTION", path: "/collection" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  const handleSearchBox = () => {
    setShow(!show);
  };

  const handleMenuVisible = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <div className="py-5 flex justify-between items-center border-b border-gray-200">
        <h1 className="font-semibold italic text-2xl">Riwaaz Rewards</h1>

        <nav className=" gap-5 hidden sm:flex">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="flex flex-col items-center gap-1"
            >
              <p>{item.name}</p>
              <hr className="w-3/4 border-none h-0.5 bg-gray-300 hidden" />
            </NavLink>
          ))}
        </nav>

        <div className="flex gap-5 font-normal">
          <button type="button" aria-label="Search">
            <FaSearch onClick={handleSearchBox} className="text-xl" />
          </button>

          <div className="cursor-pointer relative group">
            <FaShoppingCart className="text-xl " />

            <div className="absolute -top-2 -right-2 rounded-full p-2 bg-blue-500 w-5 h-5 flex items-center justify-center  text-white">
              <span className="text-sm">1</span>
            </div>
          </div>

          <div className="cursor-pointer relative group">
            <FaUser className="text-xl" />
            <div className="absolute top-5 invisible  right-1 p-2  bg-gray-100 w-30 py-2 rounded-sm group-hover:visible">
              <p className="w-full hover:text-blue-400 p-2  cursor-pointer ">
                My Profile
              </p>
              <p className="w-full hover:text-blue-400 p-2  cursor-pointer ">
                My Order
              </p>
              <p className="w-full hover:text-blue-400 p-2  cursor-pointer ">
                logout
              </p>
            </div>
          </div>

          <CgMenuRight className="md:hidden " onClick={handleMenuVisible} />
        </div>
      </div>

      {menuVisible && (
        <div className="absolute p-1 top-0 w-full bg-white h-screen transition ease-in-out  ">
          <p
            onClick={handleMenuVisible}
            className="hover:text-blue-500 cursor-pointer  py-1 flex items-center border-b-1  border-gray-300"
          >
            <IoIosArrowBack /> Back
          </p>
          <div className="flex flex-col">
            {menuItems.map((menu, idx) => (
              <NavLink
                key={idx}
                to={menu.path}
                onClick={() => setMenuVisible(false)}
                className={({ isActive }) =>
                  `hover:-blue-500 cursor-pointer p-2 border-b-1 border-gray-300 ${
                    isActive ? "bg-black text-white" : ""
                  }`
                }
              >
                {menu.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {show && (
        <div className="bg-gray-100 py-5 flex justify-center items-center border-t-1 border-b-2 border-gray-200 relative">
          <div className="sm:w-10/12 md:w-7/12 rounded-full flex  items-center  px-2 border border-gray-300 ">
            <input
              type="text"
              placeholder="search"
              className="px-4 py-2 w-11/12  outline-none  "
            />
            <FaSearch />
          </div>
          <IoMdClose
            onClick={handleSearchBox}
            className="absolute right-2 top-2"
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
