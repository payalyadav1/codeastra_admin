import React from "react";
import { Plus, RefreshCw, Settings } from "lucide-react";

export default function SubscriptionHeader() {
  return (
    <div className="w-full flex flex-col gap-6 px-4 sm:px-6 lg:px-10 mt-6">

      <div className="flex flex-col gap-1 text-center sm:text-left">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black">
          Subscription Plans Management
        </h1>

        <p className="text-sm text-gray-500 max-w-2xl mx-auto sm:mx-0">
          Monitor, modify, and control all active and upcoming subscription plans.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:justify-end items-center">

        <button className="w-48 sm:w-auto flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-900 transition">
          <Plus size={16} />
          Add New Plan
        </button>

        <button className="w-48 sm:w-auto flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-900 transition">
          <RefreshCw size={16} />
          Refresh Plans
        </button>

        <button className="w-48 sm:w-auto flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-900 transition">
          <Settings size={16} />
          Manage Settings
        </button>

      </div>
    </div>
  );
}
