import React from "react";
import { FileText, Monitor, Wallet } from "lucide-react";

const activities = [
  {
    id: 1,
    title: 'Submitted "Edvice Dashboard UI"',
    date: "08 Nov 2025",
    icon: FileText,
    bg: "bg-[#7ba4ff]",
  },
  {
    id: 2,
    title: "Logged in from Chrome Web",
    date: "05 Nov 2025",
    icon: Monitor,
    bg: "bg-[#6b7280]",
  },
  {
    id: 3,
    title: "Renewed Premium Plan",
    date: "02 Nov 2025",
    icon: Wallet,
    bg: "bg-[#22c55e]",
  },
];

export default function ActivityFeed() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm p-4 sm:p-6 mt-5">
      <h2 className="text-lg font-bold mb-4 ">Activity Feed</h2>

      <div className="space-y-5">
        {activities.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="flex items-start gap-4">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full ${item.bg}`}
              >
                <Icon className="text-white w-5 h-5" />
              </div>

              <div>
                <p className="text-md font-medium text-gray-900">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500 font-medium  mt-1">{item.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
