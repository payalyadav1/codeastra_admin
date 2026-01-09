// import React from "react";
// import S from '../../assets/Riya.png'
// const ProjectHeader = () => {
//     return (
// <div className="w-100px flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ml-10  border-b border-gray-300 pb-4">

//             <div>

//                 <h1 className="text-xl sm:text-2xl font-semibold text-black mt-6  ">
//                     Astrology Website Builder
//                 </h1>
//                 <div className="flex flex-col sm:flex-row sm:items-center  sm:gap-4 ">

//                     <div>
//                         <div className="flex flex-wrap items-center gap-2 text-md text-gray-500 mt-1 ">
//                             <img
//                                 src={S}
//                                 alt="Profile"
//                                 className="w-8 h-8 rounded-full object-cover "
//                             />
//                             <span>
//                                 Created by: <span className="text-gray-700 font-bold">Riya Sharma</span>
//                             </span>

//                             <span className="ml-2">User ID: <span className="font-medium">#USR-018</span></span>
//                         </div>

//                         <div className="flex flex-wrap items-center gap-2 text-md text-gray-500 mt-2 ">
//                             <span className="bg-[#3b82f6] text-white px-1 py-0.9 rounded-full font-medium">
//                                 In Progress
//                             </span>
//                             <span>Created on 28 Oct 2025</span>
//                             <span>•</span>
//                             <span>Last Updated 05 Nov 2025</span>
//                         </div>
//                     </div>

//                     <div className="flex gap-2 sm:gap-3 -mt-3 ml-130">
//                         <button className="px-4 py-2 text-sm h-10 font-medium  border-gray-300 bg-black text-white rounded-md  transition">
//                             View User Profile
//                         </button>

//                         <button className="px-4 py-2 text-sm h-10 font-medium bg-black text-white rounded-md hover:bg-gray-900 transition">
//                             Delete Project
//                         </button>
//                     </div>
//                 </div>
//             </div>


//         </div>
//     );
// };

// export default ProjectHeader;


import React from "react";
import S from "../../assets/Riya.png";

const ProjectHeader = () => {
  return (
    <div className="w-full flex flex-col gap-4 border-b border-gray-300 pb-4 px-4 sm:px-6 lg:px-10">

      {/* Title */}
      <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black mt-4">
        Astrology Website Builder
      </h1>

      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        {/* Left Section */}
        <div>
          {/* Creator Info */}
          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-md text-gray-500">
            <img
              src={S}
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span>
              Created by:{" "}
              <span className="text-gray-700 font-bold">
                Riya Sharma
              </span>
            </span>
            <span>
              User ID: <span className="font-medium">#USR-018</span>
            </span>
          </div>

          {/* Status Info */}
          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-md text-gray-500 mt-2">
            <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full font-medium text-xs sm:text-sm">
              In Progress
            </span>
            <span>Created on 28 Oct 2025</span>
            <span>•</span>
            <span>Last Updated 05 Nov 2025</span>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button className="px-4 py-2 text-sm h-10 font-medium bg-black text-white rounded-md">
            View User Profile
          </button>

          <button className="px-4 py-2 text-sm h-10 font-medium bg-black text-white rounded-md hover:bg-gray-900 transition">
            Delete Project
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectHeader;
