import React from "react";
import { IoLogOut } from "react-icons/io5";

const Logout = () => {
  return (
    <div className="bg-[#1a1a1a] hover:bg-[#303030] text-white hidden md:block p-2 rounded-sm">
      <IoLogOut className="w-4 h-4" />
    </div>
  );
};

export default Logout;
