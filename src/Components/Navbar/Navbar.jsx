import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center">
      <img className="logo" src={assets.logo2} alt="" />
      <img className="w-[40px]" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
