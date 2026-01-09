import React, { useState } from "react";
import { LogOut, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

import { TiHome } from "react-icons/ti";
import { FaUsers } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import { MdContactSupport } from "react-icons/md";
import { ChartSpline, MailMinus, MessageCircleMore, Settings } from "lucide-react";

import Img from "../../assets/image.png";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

export default function Sidebar() {
  const [collapse, setCollapse] = useState(false);
  const navigate = useNavigate();


  const SidebarUI = ({ onlyIcon = false }) => (
    <div className="flex h-screen w-60 flex-col bg-black sticky top-0 left-0 text-white px-3 py-4 z-50">

      <div
        onClick={() => setCollapse(!collapse)}
        className="mb-6 flex items-center gap-2 px-2 cursor-pointer"
      >
        <div className="h-8 w-8 rounded-md bg-[#a6a7fa] flex items-center justify-center">
          <LayoutDashboard size={18} className="text-black" />
        </div>

    
      </div>


      <div className="flex-1 space-y-1">
         <div
          onClick={() => navigate("/dashboard")}
          className="group flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer "
        >
          <div className="p-1.5 rounded-md transition group-hover:bg-transparent hover:bg-[#455983]">
            <TiHome size={22} className="text-gray-200" />
          </div>

          {!onlyIcon && (
            <span className="text-gray-200 transition group-hover:text-white">
              Dashboard
            </span>
          )}
        </div>


        <div onClick={() => navigate("/management")}
          className=" group flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer -mt-3 ">
          <div className="p-1.5 rounded-md transition group-hover:bg-transparent hover:bg-[#455983]">
            <FaUsers size={22} className="text-gray-200" />
          </div>
          {!onlyIcon && (
            <span className="text-gray-200 transition group-hover:text-white">
              User
            </span>
          )}
        </div>



        <div className=" group flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer ">
          <div className="p-1.5 rounded-md transition group-hover:bg-transparent hover:bg-[#455983]">
            <ChartSpline size={22} className="text-gray-200" />

          </div>
          {!onlyIcon && (
            <span className="text-gray-200 transition group-hover:text-white">
              Analytics
            </span>
          )}

        </div>



        <div className=" group flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer ">
          <div className="p-1.5 rounded-md transition group-hover:bg-transparent hover:bg-[#455983]">
            <MailMinus size={22} className="text-gray-200" />

          </div>
          {!onlyIcon && (
            <span className="text-gray-200 transition group-hover:text-white">
              Leads
            </span>
          )}
        </div>


        <div onClick={() => navigate("/subscription")}
          className=" group flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer ">
          <div className="p-1.5 rounded-md transition group-hover:bg-transparent hover:bg-[#455983]">
            <TbReportSearch size={22} className="text-gray-200" />

          </div>

          {!onlyIcon && (
            <span className="text-gray-200 transition group-hover:text-white">
              Reports
            </span>
          )}
        </div>



        <div onClick={() => navigate("/builder")}
          className=" group flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer ">
          <div className="p-1.5 rounded-md transition group-hover:bg-transparent hover:bg-[#455983]">
            <MessageCircleMore size={22} className="text-gray-200" />

          </div>

          {!onlyIcon && (
            <span className="text-gray-200 transition group-hover:text-white">
              Messages
            </span>
          )}
        </div>

        <div className="group flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer ">
          <div className="p-1.5 rounded-md transition group-hover:bg-transparent hover:bg-[#455983]">
            <Settings size={22} className="text-gray-200" />

          </div>
          {!onlyIcon && (
            <span className="text-gray-200 transition group-hover:text-white">
              Setting
            </span>
          )}
        </div>


        <div className="group flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer ">
          <div className="p-1.5 rounded-md transition group-hover:bg-transparent hover:bg-[#455983]">
            <MdContactSupport size={22} className="text-gray-200" />

          </div>
          {!onlyIcon && (
            <span className="text-gray-200 transition group-hover:text-white">
              Support
            </span>
          )}
        </div>

      </div>

      <div className="group  flex items-center gap-3 px-3 py-2 cursor-pointer ">
                         <div className="p-1.5 rounded-md transition group-hover:bg-transparent hover:bg-[#455983]">
                                <LogOut size={22} className="text-gray-200"  />

</div>
{!onlyIcon && (
            <span className="text-gray-200 transition group-hover:text-white">
      Log Out   </span>
          )}
      </div>

      <div className="mt-4 pt-3">
        <div className="flex items-center gap-3 px-3">
          <img src={Img} className="h-8 w-8 rounded-full" />
          {!onlyIcon && <span className="text-sm">Profile</span>}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div
        className={`hidden lg:flex h-screen transition-all duration-300 ${collapse ? "w-20" : "w-60"
          }`}
      >
        <SidebarUI onlyIcon={collapse} />
      </div>

      <div className="lg:hidden p-2">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 border rounded-md">
              <Menu />
            </button>
          </SheetTrigger>

          <SheetContent side="left" className="p-0 w-full max-w-full">
            <SidebarUI />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
