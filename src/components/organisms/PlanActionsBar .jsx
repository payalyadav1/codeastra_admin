import React from "react";
import {
  Plus,
  Settings,
  FileText,
  Trash2,
  Download,
} from "lucide-react";

const PlanActionsBar = () => {
  return (
    <div className="bg-gray-50 rounded-2xl shadow-md px-4 py-4 mx-4 sm:mx-10 mt-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
          <ActionButton icon={<Plus size={16} />} text="Add New Plan" />
          <ActionButton icon={<Settings size={16} />} text="Manage Features" />
          <ActionButton icon={<FileText size={16} />} text="View Invoices" />
          <ActionButton icon={<Trash2 size={16} />} text="Clean Old Plans" />
          <ActionButton icon={<Download size={16} />} text="Export Data" />
        </div>

        <div className="flex items-center gap-3 justify-center sm:justify-end mt-3 sm:mt-0">
          <span className="text-md font-medium text-gray-700">
            AI Insights
          </span>

          <label className="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-black transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

const ActionButton = ({ icon, text }) => {
  return (
    <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl text-md font-medium hover:bg-gray-900 transition">
      {icon}
      {text}
    </button>
  );
};

export default PlanActionsBar;
