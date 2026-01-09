import React from "react";
import { Card, CardContent } from "../ui/card";
import { FaCheckSquare } from "react-icons/fa";

const PlanDetails = () => {
  return (
    <div className="w-full  max-w-sm mx-auto bg-[#f9fafb] rounded-2xl shadow-md p-5">
      
      <h2 className="text-base font-bold text-gray-900 mb-4">
        Plan Details
      </h2>

      <Card className="bg-white rounded-xl ">
        <CardContent className="p-4">
          
          <div className="flex justify-between items-center mb-2 -mt-4">
            <span className="text-sm font-medium text-black">
              Premium
            </span>

            <span className="flex items-center gap-1 text-xs font-medium text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
              <span className=""><FaCheckSquare /></span>
              Active
            </span>
          </div>

          <p className="text-xl font-bold text-black mt-5">
            ₹799 <span className="text-xl font-medium">/ month</span>
          </p>

          <p className="text-sm text-gray-600 mb-4 mt-1">
            Active till Dec 2025
          </p>

          <div className="flex justify-between text-xs text-gray-800 mb-1 mt-5">
            <span>Usage</span>
            <span>75%</span>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
            <div className="h-2 bg-blue-500 rounded-full w-[75%]"></div>
          </div>

          <p className="text-md text-gray-600 mb-4">
            Auto-Renew: <span className="font-medium text-gray-600">On</span>
          </p>

          <button className="w-full mt-4 bg-black text-white text-md font-medium py-2.5 rounded-full hover:bg-gray-800 transition">
            Next Update on 8 jan
          </button>

        </CardContent>
      </Card>
    </div>
  );
};

export default PlanDetails;
