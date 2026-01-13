import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <Card className="w-full max-w-md mx-auto md:max-w-sm lg:max-w-md mt-7"> 
      <CardHeader className="pb-3"> 
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100"> 
          Quick Actions
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-0 space-y-2 flex flex-col items-center -mt-6 w-full">
        <Button  onClick={() => navigate("/usermanagement")}
         className="w-full bg-black hover:bg-gray-800 text-white"> 
          Add New User
        </Button>
        <Button variant="secondary" className="w-full mt-2"> 
          Generate Report
        </Button>
        <Button variant="secondary" className="w-full mt-2">
          View Analytics
        </Button>
        <Button variant="secondary" className="w-full mt-2">
          Export Data
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
