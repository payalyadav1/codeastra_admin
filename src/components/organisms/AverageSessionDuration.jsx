import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const AverageSessionDuration = () => {
  return (
    <Card className="w-full max-w-md mx-auto md:max-w-sm lg:max-w-md mt-7 mr-10"> 
      <CardHeader className="pb-2"> 
        <CardTitle className="text-base font-semibold text-gray-900 dark:text-gray-100"> 
          Average Session Duration
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 pb-4 -mt-4">
        <div className="text-center"> 
          <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-1"> 
            12m 36s
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400"> 
            Avg. time spent per session this month
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AverageSessionDuration;