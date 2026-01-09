import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", users: 650 },
  { month: "Feb", users: 720 },
  { month: "Mar", users: 680 },
  { month: "Apr", users: 750 },
  { month: "May", users: 700 },
  { month: "Jun", users: 800 },
  { month: "Jul", users: 820 },
  { month: "Aug", users: 780 },
  { month: "Sep", users: 840 },
  { month: "Oct", users: 790 },
  { month: "Nov", users: 860 },
];

const NewUserAcquisition = () => {
  return (
    <Card className="w-full h-110 rounded-xl shadow-md bg-white mt-6">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          New User Acquisition
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Monthly new user registrations
        </CardDescription>
      </CardHeader>

      <CardContent className="w-full h-[300px] sm:h-[350px] md:h-[400px] -mt-8 z-0">
        <ResponsiveContainer width="100%" height="100%" className="z-0">
          <BarChart data={data} className="z-0">
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[0, 1000]}
              ticks={[0, 200, 400, 600, 800]}
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Bar
              dataKey="users"
              fill="#6b005f"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default NewUserAcquisition;
