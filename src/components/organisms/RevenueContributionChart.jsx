import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Pro", value: 56.6, color: "#c7d2fe" },
  { name: "Basic", value: 16.7, color: "#93c5fd" },
  { name: "Premium", value: 26.7, color: "#fbcfe8" },
];

const renderLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  name,
  value,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 18;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="middle"
      className="fill-gray-500 text-md leading-tight"
    >
      <tspan x={x} dy="-4">{name}</tspan>
      <tspan x={x} dy="14">{value}%</tspan>
    </text>
  );
};

export default function RevenueContributionChart() {
  return (
    <Card className=" w-full rounded-2xl shadow-lg mt-5 ">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Revenue Contribution by Plan
        </CardTitle>
      </CardHeader>

      <CardContent className="h-[320px] flex items-center justify-center -mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={2}
              label={renderLabel}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>

            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-gray-800 font-semibold"
            >
              ₹1.8L/mo
            </text>
            <text
              x="50%"
              y="57%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-gray-500 text-sm"
            >
              Total Revenue
            </text>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
