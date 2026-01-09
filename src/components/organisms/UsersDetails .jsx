import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { Badge } from "../ui/badge";
import avater from '../../assets/avatar.png'
const users = [
  {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    status: "Active",
    joinDate: "2025-11-05",
    lastActive: "2 hrs ago",
    avatar: avater,
  },
  {
    name: "Michael Chen",
    email: "m.chen@example.com",
    status: "Active",
    joinDate: "2025-11-04",
    lastActive: "5 hrs ago",
    avatar: avater,
  },
  {
    name: "Emma Wilson",
    email: "emma.w@example.com",
    status: "Paused",
    joinDate: "2025-11-03",
    lastActive: "2 days ago",
    avatar: avater,
  },
  {
    name: "Rohan Mehta",
    email: "rohan@codastra.in",
    status: "Inactive",
    joinDate: "2025-11-01",
    lastActive: "1 week ago",
    avatar: avater,
  },
];

const statusStyles = {
  Active: "bg-green-100 text-green-700",
  Paused: "bg-orange-100 text-orange-700",
  Inactive: "bg-red-100 text-red-700",
};

const UsersDetails = () => {
  return (
    <Card className="w-full rounded-xl shadow-md mt-7">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Users Details
        </CardTitle>
      </CardHeader>

      <CardContent className="overflow-x-auto -mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Last Active</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell className="flex items-center gap-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="font-medium">{user.name}</span>
                </TableCell>

                <TableCell className="text-muted-foreground">
                  {user.email}
                </TableCell>

                <TableCell>
                  <Badge
                    className={`rounded-full px-3 py-1 text-xs ${statusStyles[user.status]}`}
                  >
                    ● {user.status}
                  </Badge>
                </TableCell>

                <TableCell>{user.joinDate}</TableCell>

                <TableCell className="text-muted-foreground">
                  {user.lastActive}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UsersDetails;
