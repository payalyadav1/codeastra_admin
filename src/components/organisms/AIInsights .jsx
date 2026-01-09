import React from "react";
import { FaLightbulb } from "react-icons/fa";

const AIInsights = () => {
  return (
    <div className="w-full h-40% mt-5 max-w-md mx-auto rounded-2xl bg-gradient-to-r from-blue-50 to-green-50 shadow-md p-4 flex gap-3">
      
      <div className="flex items-start">
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-semibold">
          <FaLightbulb />

        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-black mb-1">
          AI Insights
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed">
          Riya's engagement increased by <span className="font-medium">23%</span> compared to last month. 
          She's most active on Tuesdays between <span className="font-medium">3-6 PM</span>.
        </p>
      </div>

    </div>
  );
};

export default AIInsights;
