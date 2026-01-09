import React from "react";
import { Card, CardContent } from "../ui/card";
import { IoLayers } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

const stats = [
  {
    title: "3 Active",
    subtitle: "Total Plans",
    icon: IoLayers,
    bg: "bg-[#b2f0d3]",
  },
  {
    title: "2,340",
    subtitle: "Total Subscribers",
    icon: FaUsers ,
    bg: "bg-[#a5b4fc]",
  },
  {
    title: "₹72,000",
    subtitle: "Avg. Revenue / Monthly",
    icon: FaIndianRupeeSign ,
    bg: "bg-[#ff91cf]",
  },
  {
    title: "18 users",
    subtitle: "Expiring Soon",
    icon: FaClock ,
    bg: "bg-[#93e9be]",
  },
];

export default function SubscriptionMetrics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 ml-10  mr-10 ">
      {stats.map((item, index) => {
        const Icon = item.icon;
        return (
          <Card
            key={index}
            className={`${item.bg} border-none rounded-2xl`}
          >
            <CardContent className="p-5 flex flex-col gap-3 -mt-4">
              <Icon className="w-6 h-6 text-white" />

              <h2 className="text-2xl font-bold text-black ">
                {item.title}
              </h2>

              <p className="text-sm text-black -mt-2">
                {item.subtitle}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
