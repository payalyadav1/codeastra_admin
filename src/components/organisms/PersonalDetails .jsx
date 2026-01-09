import React from "react";

const PersonalDetails = () => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-md p-5 mt-10">
      
      <h2 className="text-lg font-bold text-black mb-4">
        Personal Details
      </h2>

      <div className="flex justify-between items-center py-4 border-b text-sm">
        <span className="text-gray-500">Full Name</span>
        <span className="text-gray-900 font-medium">Riya Sharma</span>
      </div>

      <div className="flex justify-between items-center py-4 border-b text-sm">
        <span className="text-gray-500">Gender</span>
        <span className="text-gray-900 font-medium">Female</span>
      </div>

      <div className="flex justify-between items-center py-4 border-b text-sm">
        <span className="text-gray-500">Age</span>
        <span className="text-gray-900 font-medium">26</span>
      </div>

      <div className="flex justify-between items-center py-4 border-b text-sm">
        <span className="text-gray-500">Location</span>
        <span className="text-gray-900 font-medium">Jaipur, India</span>
      </div>

      <div className="flex justify-between items-center py-4 border-b text-sm">
        <span className="text-gray-500">Department</span>
        <span className="text-gray-900 font-medium">Design</span>
      </div>

      <div className="flex justify-between items-center py-4 border-b text-sm">
        <span className="text-gray-500">Account ID</span>
        <span className="text-gray-900 font-medium">f5r484gt</span>
      </div>

      <div className="flex justify-between items-center py-4 border-b text-sm">
        <span className="text-gray-500 py-4">Member Since</span>
        <span className="text-gray-900 font-medium">Aug 2024</span>
      </div>

      <div className="flex justify-between items-center pt-3 text-sm">
        <span className="text-gray-500">Email Verified</span>
        <span className="flex items-center gap-1 text-green-600 font-medium">
          <span className="w-3 h-3 bg-green-600 rounded-1xl flex items-center justify-center text-white text-[10px]">
            ✓
          </span>
          Yes
        </span>
      </div>

    </div>
  );
};

export default PersonalDetails;
