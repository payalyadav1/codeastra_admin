import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Regular Users", value: 66.7 },
    { name: "Partners", value: 19.6 },
     { name: "Guests", value: 9.78 },
      { name: "Admins", value: 4 },
       
  

];

const COLORS = ["#10B981", "#7C3AED", "#F97316", "#3B82F6"]; 



// Custom label function
const renderCustomLabel = ({ name, percent }) => {
  return `${name} ${((percent || 0) * 100).toFixed(2)}%`;
};


export default function UserRoleDistribution() {
  return (
    <Card className="w-full max-w-md h-85">
      <CardHeader>
        <CardTitle>User Role Distribution</CardTitle>
      </CardHeader>
      <CardContent className='flex justify-center -mt-8 '>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              labelLine
              label={renderCustomLabel}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            {/* <Legend verticalAlign="bottom" height={36} /> */}
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
