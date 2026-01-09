import React from "react";
import { Bell, Download, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { UserRoundPen } from "lucide-react";



const Navbar = () => {
  return (

    <div className="w-full   bg-white px-4 py-4  shadow-md  z-0  ">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">




        <div>
          <h1 className="text-xl font-semibold text-gray-900 ">
            User Analytics Dashboard
          </h1>
          <p className="text-sm text-gray-500 ">
            Monitor and analyze user activity, engagement, and growth trends.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">

          <Select>
            <SelectTrigger className="w-[150px] bg-[#f9fafb] border-0 shadow-none focus:ring-0 focus:outline-none focus-visible:ring-0">
              <Filter className="mr-2 h-4 w-4 text-gray-500" />
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="india">India</SelectItem>
              <SelectItem value="usa">USA</SelectItem>
            </SelectContent>
          </Select>


          <Select>
            <SelectTrigger className="w-[120px] bg-[#f9fafb] border-0 shadow-none focus:ring-0 focus:outline-none focus-visible:ring-0">
              <UserRoundPen className="mr-2 h-4 w-4 text-gray-500" />
              <SelectValue placeholder="All Roles" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="user">User</SelectItem>
            </SelectContent>
          </Select>


          <Button variant="outline"
            className="gap-2 border-black text-black hover:bg-transparent"
          >
            <Download className="h-4 w-4" />
            Download Report
          </Button>

          <div className="relative">
            <Bell className="h-6 w-6 cursor-pointer text-gray-600" />
            <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
              3
            </Badge>
          </div>

        </div>
      </div>

    </div>


  );
};

export default Navbar;
