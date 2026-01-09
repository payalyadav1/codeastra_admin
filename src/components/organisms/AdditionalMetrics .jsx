import React from "react";
import { CheckCircle } from "lucide-react";

const AdditionalMetrics = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-6 mt-5 ">
      {/* Title */}
      <h2 className="text-lg font-bold text-black mb-5">
        Additional Metrics
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1 */}
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-md text-gray-500 mb-1">AI Efficiency Score</p>
          <h3 className="text-2xl font-semibold text-black">92%</h3>
          <p className="text-sm text-gray-400 mt-1">
            Calculated from successful prompts vs <br/> revisions
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-md text-gray-500 mb-1">Bot Response Speed</p>
          <h3 className="text-2xl font-semibold text-black">3.2s</h3>
          <p className="text-sm text-gray-400 mt-1">
            Average per prompt
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-md text-gray-500 mb-1">Error Logs</p>
          <h3 className="text-2xl font-semibold text-black">0</h3>
          <p className="text-sm text-gray-400 mt-1">
            Warnings, 2 retries
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-md text-gray-500 mb-1">Deployment Status</p>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-black">
              Netlify
            </h3>
            <CheckCircle className="w-4 h-4 text-green-500" />
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Hosting active
          </p>
        </div>

      </div>
    </div>
  );
};

export default AdditionalMetrics;
