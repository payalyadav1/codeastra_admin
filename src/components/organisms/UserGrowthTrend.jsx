import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Jan", users: 8500 },
    { month: "Feb", users: 8800 },
    { month: "Mar", users: 9200 },
    { month: "Apr", users: 9600 },
    { month: "May", users: 9900 },
    { month: "Jun", users: 10200 },
    { month: "Jul", users: 10500 },
    { month: "Aug", users: 10800 },
    { month: "Sep", users: 11200 },
    { month: "Oct", users: 11600 },
    { month: "Nov", users: 11900 },
];

const UserGrowthTrend = () => {
    return (
        <Card className="w-full shadow-sm  ">
            <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <CardTitle className="text-base font-semibold">
                    User Growth Trend
                </CardTitle>

                <Tabs defaultValue="growth" className="w-fit ">
                    <TabsList className="h-10 w-120 bg-[#f3f4f6] rounded-md">
                        <TabsTrigger value="growth" className="text-xs">
                            User Growth
                        </TabsTrigger>
                        <TabsTrigger value="activity" className="text-xs">
                            Daily Activity
                        </TabsTrigger>
                        <TabsTrigger value="demo" className="text-xs">
                            Demographics
                        </TabsTrigger>
                        <TabsTrigger value="device" className="text-xs">
                            Devices
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </CardHeader>

<CardContent className="h-[260px] sm:h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.4} />
                                <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.05} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="month" tickLine={false} axisLine={false} />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            ticks={[0, 2000, 4000, 6000, 8000, 10000]}
                            tickFormatter={(v) => (v === 0 ? "0" : `${v / 1000}k`)}
                        />
<Tooltip formatter={(value) => `${value / 1000}k`} />
                        <Area
                            type="monotone"
                            dataKey="users"
                            stroke="#f59e0b"
                            strokeWidth={2}
                            fill="url(#colorUsers)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default UserGrowthTrend;
