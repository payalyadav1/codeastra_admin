import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const TopActiveUsers = () => {
  const users = [
    { name: "Rahul Verma", sessions: 45 },
    { name: "Rahul Verma", sessions: 39 },
    { name: "Priya Singh", sessions: 34 },
  ];

  return (
    <Card className="w-full max-w-md mx-auto md:max-w-sm lg:max-w-md mt-7 mr-10"> 
      <CardHeader className="pb-3"> 
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">Top Active Users</CardTitle>
      </CardHeader>
      <CardContent className="-mt-8"> 
        <div className="space-y-2   "> 
          {users.map((user, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-1 px-1" 
            >
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate ml-8"> 
                {user.name}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[80px] text-right">
                {user.sessions} sessions
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopActiveUsers;