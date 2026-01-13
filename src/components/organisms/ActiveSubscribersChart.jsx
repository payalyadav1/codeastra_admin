import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Basic", value: 800,fill: "#6A005F" },
  { name: "Pro", value: 1200 , fill: "#F2B705"},
  { name: "Premium", value: 350, fill: "#8B5CF6"  },
];

export default function ActiveSubscribersChart() {
  return (
    <Card className=" w-full rounded-2xl shadow-lg   mt-5">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Active Subscribers per Plan
        </CardTitle>
      </CardHeader>

      <CardContent className="h-[300px] ">
        <ResponsiveContainer width="100%" height="100%" >
          <BarChart data={data} >
            <CartesianGrid vertical={false} strokeDasharray="3 3"  />
            <XAxis dataKey="name"  />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value"  fill="#7c3aed" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
