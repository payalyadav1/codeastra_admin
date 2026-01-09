import React from 'react';
import { Card, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import S from '../../assets/Analytics.png'
import D from '../../assets/Dashboard.png'
const RecentProjects = () => {
  return (
   <div className="p-6 bg-white rounded-lg shadow-sm border   ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Recent Projects</h2>
        <Button variant="outline" size="sm" className="bg-black text-white hover:bg-gray-800 border-black">
          View all
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="overflow-hidden h-84 ">
          <img 
            src={S} 
            alt="AppPay Redesign Mockup" 
            className="w-87 h-48 rounded-xl object-cover ml-5 "
          />
         

          <div className="flex justify-around items-start">
    
    <div className='-mt-2 mr-7'>
      <CardTitle className="text-lg font-semibold text-gray-900">
        SmartPay Redesign
      </CardTitle>
      <p className="text-gray-500 text-sm mt-1">App UI Design</p>
      <p className="text-sm text-gray-500 mt-1">3 Weeks</p>
    </div>

    <div className="flex flex-col  gap-2">
      <span className=" w-21 ml-5 items-center px-3 py-1 rounded-full text-xs font-medium bg-[#dcfce7] text-green-800">
        Completed
      </span>

      <Button className="bg-black text-white hover:bg-gray-800 text-sm h-9">
        View Project
      </Button>
    </div>

  </div>
        </Card>

        <Card className="overflow-hidden h-84">
          <img 
            src={D}
            alt="Dashboard Analytics Mockup" 
            className="w-87 h-48 rounded-xl object-cover ml-5"
          />

       <div className="flex justify-around items-start">
    
    <div className='-mt-2 mr-7'>
      <CardTitle className="text-lg font-semibold text-gray-900">
      Dashboard Analytics
      </CardTitle>
      <p className="text-gray-500 text-sm mt-1">Web UI Design</p>
      <p className="text-sm text-gray-500 mt-1">2 Weeks</p>
    </div>

    <div className="flex flex-col  gap-2">
      <span className=" w-18 ml-5 items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
       Ongoing </span>

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