import React from "react";
import { Card, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import S from "../../assets/Analytics.png";
import D from "../../assets/Dashboard.png";
import { useNavigate } from "react-router-dom";

const RecentProjects = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full p-4 sm:p-6 bg-white rounded-lg shadow-sm border">
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
          Recent Projects
        </h2>
        <Button  onClick={() => navigate("/projects")}
          variant="outline"
          size="sm"
          className="bg-black text-white hover:bg-gray-800 hover:text-white border-black w-fit"
        >
          View all
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <Card className="overflow-hidden p-3 flex flex-col gap-4">
          <img
            src={S}
            alt="SmartPay Redesign"
            className="w-full h-48 rounded-xl object-cover"
          />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            
            <div>
              <CardTitle className="text-base font-semibold text-gray-900">
                SmartPay Redesign
              </CardTitle>
              <p className="text-gray-500 text-sm mt-1">App UI Design</p>
              <p className="text-sm text-gray-500 mt-1">3 Weeks</p>
            </div>

            <div className="flex flex-row sm:flex-col gap-2 items-start sm:items-end">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Completed
              </span>
              <Button className="bg-black text-white hover:bg-gray-800 text-sm h-9">
                View Project
              </Button>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden p-3 flex flex-col gap-4">
          <img
            src={D}
            alt="Dashboard Analytics"
            className="w-full h-48 rounded-xl object-cover"
          />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            
            <div>
              <CardTitle className="text-base font-semibold text-gray-900">
                Dashboard Analytics
              </CardTitle>
              <p className="text-gray-500 text-sm mt-1">Web UI Design</p>
              <p className="text-sm text-gray-500 mt-1">2 Weeks</p>
            </div>

            <div className="flex flex-row sm:flex-col gap-2 items-start sm:items-end">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                Ongoing
              </span>
              <Button className="bg-black text-white hover:bg-gray-800 text-sm h-9">
                View Project
              </Button>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
};

export default RecentProjects;
