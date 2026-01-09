import React from "react";
import {   UserPlus, BarChart2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { TbUsersGroup } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { RxDotFilled } from "react-icons/rx";
import { ChartSpline } from "lucide-react";
import { FaUserCheck } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { LuChartSpline } from "react-icons/lu";


const statsData = [
  {
    title: "Total Users",
    value: "11,250",
    percent: "+8.8%",
    note: "from last month",
    icon: TbUsersGroup ,
    iconBg: "bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600",
    iconColor: "text-white",
    positive: true,
  },
  {
    title: "Active Users",
    value: "9,820",
    percent: "+9.6%",
    note: "from last month",
    icon: FaUserCheck ,
    iconBg: "bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600",
    iconColor: "text-white",
    positive: true,
  },
  {
    title: "New Users",
    value: "870",
    percent: "+4.1%",
    note: "this month",
    icon: FaUserPlus,
    iconBg: "bg-gradient-to-br from-fuchsia-400 via-purple-500 to-indigo-600",
    iconColor: "text-white",
    positive: true,
  },
  {
    title: "Engagement Rate",
    value: "93.4%",
    percent: "-1.2%",
    note: "from last month",
    icon: LuChartSpline ,
    iconBg: "bg-gradient-to-br from-amber-400 via-orange-500 to-red-500",
    iconColor: "text-white",
    positive: false,
  },
];

const UserCard = () => {
  return (
    <div className="w-full p-4 md:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {statsData.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index} className="shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div
                    className={`h-11 w-11 rounded-lg flex items-center justify-center ${item.iconBg} ${item.iconColor}`}
                  >
                    <Icon size={22} />
                  </div>

                  <Badge
                    variant="outline"
                    className={`text-xs h-7 w-14 ${
                      item.positive
                        ? "text-[#2fc967] bg-[#f0fdf4] border-none"
                        : "text-[#f47a7a] border-none bg-[#fef2f2]"
                    }`}
                  >
                    {item.percent}
                  </Badge>
                </div>

                <div className="mt-4">
                  <h2 className="text-2xl font-bold ">{item.value}</h2>
                  <p className="text-sm text-muted-foreground ">
                    {item.title}
                  </p>
                </div>
<p className="mt-2 text-xs text-muted-foreground flex items-center gap-1">
  {item.title === "Total Users" && (
    <ChartSpline size={13} className="text-red-500 bg-[#d4dee7]" />
  )}

  {item.title === "Active Users" && (
    <RxDotFilled  size={13} className="fill-green-500 text-green-500 " />
  )}

  {item.title === "New Users" && (
    <FaCalendarAlt  size={13} className="text-gray-500 bg-gradient-to-b from-[#a75e5e] to-[#d5d5d5]" />
  )}

  {item.title === "Engagement Rate" && (
    <TiArrowSortedDown  size={13} className="text-red-500" />
  )}

  {item.note}
</p>

              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default UserCard;

