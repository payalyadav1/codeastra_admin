import React from "react";
import { Plus, RefreshCw, Settings } from "lucide-react";

export default function SubscriptionHeader() {
  return (
    <div className="w-full flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold text-black mt-6 ml-10 ">
          Subscription Plans Management
        </h1>
        <p className="text-sm text-gray-500 mt-1 ml-10">
          Monitor, modify, and control all active and upcoming subscription plans.
        </p>
      </div>
      
      <div className="flex justify-end gap-2 sm:gap-3 mt-4 mr-10">
        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-900 transition">
          <Plus size={16} />
          Add New Plan
        </button>

        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-900 transition">
          <RefreshCw size={16} />
          Refresh Plans
        </button>

        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-900 transition">
          <Settings size={16} />
          Manage Settings
        </button>
      </div>
    </div>
  );
}
