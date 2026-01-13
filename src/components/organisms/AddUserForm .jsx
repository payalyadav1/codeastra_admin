import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";
import { FaArrowLeftLong, FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { BriefcaseBusiness } from "lucide-react";
import { ChartNoAxesColumn } from "lucide-react";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";


const AddNewUser = () => {
  const [userStatus, setUserStatus] = useState("Active");
  const [plan, setPlan] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();


  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Card className=" border-none rounded-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2">

            <FaArrowLeftLong onClick={() => navigate(-1)}
              className="h-5 w-5 text-black" />
            <h1 className="text-xl md:text-2xl font-semibold">

              Add New User
            </h1>

          </CardTitle>
          <p className="text-md text-gray-500">
            Create a new user account and assign access
          </p>
        </CardHeader>

        <CardContent>
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <FaUser className="text-gray-600" />
            User Information
          </h3>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-5 ">
            <div>
              <Label className='text-md ml-1'>Full Name</Label>
              <Input className='mt-1 h-10' placeholder="e.g., Rahul Verma" />
            </div>
            <div>
              <Label className='text-md ml-1'>Email Address *</Label>
              <Input className='mt-1 h-10' placeholder="e.g., rahul@codestars.in" type="email" />
            </div>
            <div>
              <Label className='text-md ml-1'>Phone Number</Label>
              <Input className='mt-1 h-10' placeholder="e.g., +91 98765 43210" type="tel" />
            </div>
            <div>
              <Label className='text-md ml-1'>User ID</Label>
              <Input className='mt-1 h-10' placeholder="U-1089" />
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <FaLock className="text-gray-600" />
            Account Setup
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-5">
            <div>
              <Label className='text-md ml-1'>Password *</Label>
              <Input className='mt-1 h-10' placeholder="Enter password" type="password" />
            </div>
            <div>
              <Label className='text-md ml-1'>Confirm Password *</Label>
              <Input className='mt-1 h-10' placeholder="Re-enter password" type="password" />
            </div>
            <div>
              <Label className='text-md ml-1'>User Status</Label>
              <Select onValueChange={setUserStatus}>
                <SelectTrigger className='w-100 h-16 mt-1 text-gray-600  '>
                  <SelectValue placeholder="Active" />
                </SelectTrigger>
                <SelectContent className='text-black'>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <BriefcaseBusiness className="text-gray-600" />
            Plan & Access
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-5">
            <div>
              <Label className='text-md ml-1'>Select Plan *</Label>
              <Select onValueChange={setPlan}>
                <SelectTrigger className='w-100 mt-1'>
                  <SelectValue placeholder="Choose a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Basic">Basic</SelectItem>
                  <SelectItem value="Pro">Pro</SelectItem>
                  <SelectItem value="Enterprise">Enterprise</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className='text-md ml-1'>Role *</Label>
              <Select onValueChange={setRole}>
                <SelectTrigger className='w-100 mt-1'>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Editor">Editor</SelectItem>
                  <SelectItem value="Viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className='text-md ml-1'>Max Projects Allowed</Label>
              <Input className='mt-1 h-10' placeholder="3" type="number" />
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <ChartNoAxesColumn className="text-gray-600" />
            <span>Usage Limits</span>
            <span className="text-xs text-purple-500 bg-gray-200 rounded-full h-5 w-10 text-center mt-2  font-medium">PRO</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-5">
            <div>
              <Label className='text-md ml-1'>Product Limit / Month</Label>
              <Input className='mt-1 h-10' placeholder="e.g., 1000" type="number" />
            </div>
            <div>
              <Label className='text-md ml-1'>Modification Limit / Project</Label>
              <Input className='mt-1 h-10' placeholder="e.g., 50" type="number" />
            </div>
          </div>



          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Calendar className="text-gray-600" />
            Meta Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            <div>
              <Label className='text-md ml-1'>Date Joined</Label>
              <Input className='mt-1 h-10' type="date" defaultValue="2025-01-09" />
            </div>
            <div>
              <Label className='text-md ml-1'>Last Active</Label>
              <Input className='mt-1 h-10' placeholder="—" disabled />
            </div>
          </div>
        </CardContent>


        <CardFooter className="flex justify-between gap-2 ">
          <div>
            <p className="text-md">Cancel</p>
          </div>
          <div>
            <Button className=" h-10 text-md mr-4 text-[#959697] border-2 border-[#959697] bg-transparent hover:bg-gray-100">
              Save & Invite</Button>
            <Button className='bg-[#959697] h-10 text-md text-white'>Create User</Button>
          </div>

        </CardFooter>
      </Card>
    </div>
  );
};

export default AddNewUser;
