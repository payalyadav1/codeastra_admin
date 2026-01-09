import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { FaCalendar } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import R from '../../assets/Riya.png'

const UserProfileInfo = () => {
  return (
    <Card className="mt-4 ml-5 mr-6">
      <CardContent className="p-4  flex flex-col h-23  gap-4 sm:flex-row sm:items-center sm:justify-between">
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={R}
              alt="profile"
              className="h-20 w-20 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full bg-green-500 border-3 border-white " />
          </div>

          <div>
            <h1 className="font-bold text-xl">Riya Sharma</h1>
            <p className="text-sm text-gray-500">
              UX Designer @ Codastra
            </p>
             <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-gray-500">
      <span className="flex items-center gap-1">
        <FaCalendar className="h-3 w-3 text-gray-400" />
        Joined Aug 2024
      </span>

      <span className="flex items-center gap-1">
        <MdMail className="h-3 w-3 text-gray-400" />
        riya@codastra.in
      </span>

      <span className="flex items-center gap-1">
        <IoCall  className="h-3 w-3 text-gray-400" />
        +91 9876543210
      </span>
    </div>
          </div>
        </div>

        

   <div>
            
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="rounded-full bg-black text-white text-xs hover:bg-black/90"
              >
                Cancel Subscription
              </Button>

              <Button
                size="sm"
                className="rounded-full bg-black text-white text-xs hover:bg-black/90"
              >
                Block User
              </Button>
            </div>

            <div className="flex gap-3 mt-4 ml-3">
              
              <div className="w-24 rounded-xl border bg-white p-3 text-center shadow-sm">
                <p className="text-xl font-bold text-blue-600 ">24</p>
                <p className="text-xs text-gray-500 ">Projects</p>
              </div>

              <div className="w-24 rounded-xl border bg-white p-3 text-center shadow-sm ">
                <h1 className="text-xl font-bold text-gray-500 ">
                  2h ago
                </h1>
                <p className="text-xs text-gray-500">Last Login</p>
              </div>

            </div>
          </div>

        

      </CardContent>
    </Card>
  );
};

export default UserProfileInfo;
