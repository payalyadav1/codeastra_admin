import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const UserHeader = () => {
  return (
      <div className="w-full mt-2 ml-6">
      <div className="flex items-center gap-2 text-sm sm:text-base">
        
        <FaArrowLeftLong  className="h-4 w-4 cursor-pointer text-black " />

        <span className=" text-lg font-semibold text-black ">
          User Management
        </span>

        <IoIosArrowForward className="h-4 w-4 text-gray-400" />

        <span className="text-gray-500 text-base font-medium">
          Riya Sharma
        </span>
      </div>
    </div>
  );
};

export default UserHeader;
