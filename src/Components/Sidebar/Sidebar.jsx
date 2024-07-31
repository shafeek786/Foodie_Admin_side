import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="sidebar w-18p min-h-full border-1.5 border-t-0 border-gray-400">
      <div className="pt-[50px] pl-[20%] flex flex-col gap-5">
        <div className="flex items-center gap-[12px] border border-gray-400 border-r-0 px-[10px] py-[8px] rounded-l-[30px] cursor-pointer">
          <img src={assets.add_icon} alt="" />
          <p className="hidden custom-lg:inline">Add Items</p>{" "}
        </div>
        <div className="flex items-center gap-[12px] border border-gray-400 border-r-0 px-[10px] py-[8px] rounded-l-[30px] cursor-pointer">
          <img src={assets.order_icon} alt="" />
          <p className="hidden custom-lg:inline">List Items</p>{" "}
        </div>
        <div className="flex items-center gap-[12px] border border-gray-400 border-r-0 px-[10px] py-[8px] rounded-l-[30px] cursor-pointer">
          <img src={assets.order_icon} alt="" />
          <p className="hidden custom-lg:inline">Order Items</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
