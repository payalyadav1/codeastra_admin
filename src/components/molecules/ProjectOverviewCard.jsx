import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CheckCircle } from 'lucide-react';

const ProjectOverviewCard = () => {
  return (
    <div className="w-full  p-4">
      <Card className="w-full  border border-gray-200">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            Project Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2 -mt-6">
            <h3 className="text-md font-semibold text-gray-600 dark:text-gray-300 ">
              Short Description
            </h3>
            <p className="text-[#78808a] text-md dark:text-gray-200 leading-relaxed">
              User created an astrology-based website with horoscope, gemstone, and kundli sections. The goal was to provide personalized predictions and product <br/> recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Project Type
              </h4>
              <p  className="text-md font-medium text-gray-600">
                Website Design & Content Generation
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Duration
              </h4>
              <span className="text-md font-medium text-gray-600 ">
                8 days total (28 Oct - 05 Nov)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Deployment Link
              </h4>
              <a
                href="https://astrovision.demo.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-colors"
              >
                https://astrovision.demo.in
              </a>
            </div>

             <div className="space-y-1">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
               Status
              </h4>
            <div className="flex items-center gap-1 text-green-600 dark:text-green-400 font-semibold">
                <CheckCircle className="h-4 w-4" />
                <span>Live</span>
              </div>
            </div>

         
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectOverviewCard;