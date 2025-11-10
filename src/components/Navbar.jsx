import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setshowSearch, getCartCount } = useContext(ShopContext);

  return (
    <>
      {/* Navbar Main */}
      <div
        className="flex justify-between items-center py-5 font-medium px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]
        relative z-50 bg-white/80 backdrop-blur-md"
      >
        {/* Logo */}
        <Link to="/">
          <img src={assets.logo} className="w-36" alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-5 text-sm text-[#180f07]">
          <NavLink to="/" className="flex flex-col items-center gap-1 hover:text-black">
            <p>Home</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="/collection" className="flex flex-col items-center gap-1 hover:text-black">
            <p>Collection</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="/about" className="flex flex-col items-center gap-1 hover:text-black">
            <p>About</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="/contact" className="flex flex-col items-center gap-1 hover:text-black">
            <p>Contact</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <img
            onClick={() => setshowSearch(true)}
            src={assets.search_icon}
            alt="Search Icon"
            className="w-5 cursor-pointer"
          />

          {/* Profile Dropdown */}
          <div className="group relative">
            <Link to="/login">
              <img src={assets.profile_icon} alt="profile_icon" className="w-5 cursor-pointer" />
            </Link>

            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} alt="cart" className="w-5 min-w-5" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>

          {/* Hamburger Icon */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            alt="hamburger"
            className="w-5 cursor-pointer sm:hidden"
          />
        </div>
      </div>

      {/* Overlay (background blur when menu is open) */}
      {visible && (
        <div
          onClick={() => setVisible(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        ></div>
      )}

      {/* Sidebar menu For Small Screen */}
      <div
        className={`fixed top-0 right-0 h-full overflow-hidden bg-white transition-all duration-300 z-50 ${
          visible ? "w-3/4 sm:w-1/2" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer border-b"
          >
            <img src={assets.dropdown_icon} alt="Back" className="h-4 rotate-180" />
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              isActive ? "py-3 pl-6 bg-black text-white" : "py-3 pl-6 border-b"
            }
            to="/"
          >
            HOME
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              isActive ? "py-3 pl-6 bg-black text-white" : "py-3 pl-6 border-b"
            }
            to="/collection"
          >
            COLLECTION
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              isActive ? "py-3 pl-6 bg-black text-white" : "py-3 pl-6 border-b"
            }
            to="/about"
          >
            ABOUT
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              isActive ? "py-3 pl-6 bg-black text-white" : "py-3 pl-6 border-b"
            }
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
