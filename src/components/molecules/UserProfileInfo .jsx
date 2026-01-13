import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { FaCalendar } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import R from '../../assets/Riya.png';

const UserProfileInfo = () => {
  return (
    <Card className="w-full mt-4">
      <CardContent className="p-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto">
          <div className="relative flex-shrink-0">
            <img
              src={R}
              alt="profile"
              className="h-20 w-20 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 left-0 h-5 w-5 rounded-full bg-green-500 border-2 border-white" />
          </div>

          <div className="flex-1">
            <h1 className="font-bold text-xl truncate">Riya Sharma</h1>
            <p className="text-sm text-gray-500 truncate">UX Designer @ Codastra</p>

            <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <FaCalendar className="h-3 w-3 text-gray-400" />
                Joined Aug 2024
              </span>
              <span className="flex items-center gap-1 truncate max-w-[150px] sm:max-w-none">
                <MdMail className="h-3 w-3 text-gray-400" />
                riya@codastra.in
              </span>
              <span className="flex items-center gap-1">
                <IoCall className="h-3 w-3 text-gray-400" />
                +91 9876543210
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:items-end w-full sm:w-auto mt-4 sm:mt-0 gap-3">
          <div className="flex flex-wrap gap-2 justify-start sm:justify-end w-full sm:w-auto">
            <Button
              size="sm"
              variant="outline"
              className="rounded-full bg-black text-white text-xs hover:bg-gray-800 hover:text-white flex-1 sm:flex-none"
            >
              Cancel Subscription
            </Button>
            <Button
              size="sm"
              className="rounded-full bg-black text-white text-xs hover:bg-black/90 flex-1 sm:flex-none"
            >
              Block User
            </Button>
          </div>

          <div className="flex flex-wrap gap-3 mt-2 justify-start sm:justify-end w-full sm:w-auto">
            <div className="w-24 rounded-xl border bg-white p-3 text-center shadow-sm">
              <p className="text-xl font-bold text-blue-600">24</p>
              <p className="text-xs text-gray-500">Projects</p>
            </div>
            <div className="w-24 rounded-xl border bg-white p-3 text-center shadow-sm">
              <h1 className="text-xl font-bold text-gray-500">2h ago</h1>
              <p className="text-xs text-gray-500">Last Login</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileInfo;
