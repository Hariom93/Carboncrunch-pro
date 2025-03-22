import React from "react";
import logo from "../images/company-logo.png"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  

    return (
      <div className="mt-14 text-black flex relative w-full absolute justify-around  py-2 items-center">
      <div className="flex gap-x-2  cursor-pointer text-xl">
          <NavLink to="/">
              <img src={logo} className="h-12 w-12 "/>
          </NavLink>
      <h1 className="mt-2 font-semibold">Carboncrunch</h1>
      </div>
      <div className="flex gap-x-12 text-black">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Services</NavLink>
      <NavLink to="/careers">Blog</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/careers">Contact</NavLink>
  </div>
  <div className="flex gap-x-5">
  <button className="cursor-pointer text-green-600 font-DM Sans font-semibold bg-green-200 py-2 px-10 rounded transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Login</button>
  <button className="hover:duration-300 ease-in  cursor-pointer font-semibold bg-green-600 py-1 px-6 rounded transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Book Demo</button>
  </div>
      </div>
    )
  }

  export default Navbar;