import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { ChevronLeft, ChevronRight, Plus, Download } from "lucide-react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { useNavigate } from "react-router-dom";

const users = [
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    status: "Active",
    plan: "Pro",
    projects: 12,
    joined: "15 Mar 2024",
    active: "2 hrs ago",
  },
  {
    name: "Michael Chen",
    email: "michael.chen@email.com",
    status: "Active",
    plan: "Enterprise",
    projects: 28,
    joined: "10 Mar 2024",
    active: "1 day ago",
    actions:""
  },
  {
    name: "David Rodriguez",
    email: "david.rodriguez@email.com",
    status: "Blocked",
    plan: "Basic",
    projects: 5,
    joined: "08 Mar 2024",
    active: "3 days ago",
  },
  {
    name: "Emma Wilson",
    email: "emma.wilson@email.com",
    status: "Inactive",
    plan: "Free",
    projects: 2,
    joined: "05 Mar 2024",
    active: "1 week ago",
  },
  {
    name: "James Thompson",
    status: "active",
    plan: "Pro",
    projects: 18,
    joined: "02 Mar 2024",
    active: "5 hrs ago",
  },
];

export default function UserManage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-4 ">

<div className="mb-4 ml-2">
  <div className="flex items-center gap-2">
    <FaArrowLeftLong  onClick={() => navigate(-1)}
     className="h-5 w-5 text-black" />
    <h1 className="text-xl md:text-2xl font-semibold">
      User Management
    </h1>
  </div>

  <p className="text-md text-muted-foreground">
    Manage and monitor all user accounts
  </p>
</div>

<div className="rounded-md border p-4 mt-8">
  <div className="flex flex-wrap lg:flex-nowrap items-center gap-3">

    <div className="relative w-full lg:w-[280px]">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
      <Input
        className="pl-9 h-10 w-full text-md"
        placeholder="Search project by name / user"
      />
    </div>

    <Select>
      <SelectTrigger className="h-10 w-full lg:w-[160px] text-md">
        <SelectValue placeholder="All Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="active">Active</SelectItem>
        <SelectItem value="completed">Completed</SelectItem>
        <SelectItem value="paused">Paused</SelectItem>
      </SelectContent>
    </Select>

    <Select>
      <SelectTrigger className="h-10 w-full lg:w-[160px] text-md">
        <SelectValue placeholder="All Plans " />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="qwq">aqsq</SelectItem>
        <SelectItem value="dszsf">qwsqw</SelectItem>
      </SelectContent>
    </Select>

    <div className="flex items-center gap-2">
      <Input type="date" className="h-10 w-[140px]" />
      <span className="text-md text-gray-500">to</span>
      <Input type="date" className="h-10 w-[140px]" />
    </div>

    <Button  onClick={() => navigate("/Addfrom")}
     size="sm" className="h-10 whitespace-nowrap text-md">
      <Plus className="w-4 h-4 mr-1" />
      Add New User
    </Button>

    <Button
      variant="outline"
      className="h-10 border-black whitespace-nowrap text-md"
    >
      <Download className="h-4 w-4 mr-1" />
      Export Projects
    </Button>
  </div>
</div>


<div className="rounded-xl border bg-white   overflow-x-auto mt-8">
<Table>
<TableHeader>
<TableRow className="bg-muted/40 ">
<TableHead className="w-10 h-15">
<Checkbox />
</TableHead>
<TableHead>User</TableHead>
<TableHead>Email</TableHead>
<TableHead>Status</TableHead>
<TableHead>Plan</TableHead>
<TableHead>Total Projects</TableHead>
<TableHead>Date Joined</TableHead>
<TableHead>Last Active</TableHead>
<TableHead>Actions</TableHead>
</TableRow>
</TableHeader>



          <TableBody className='h-[50vh]'>
            {users.map((user, index) => {
              const status = user.status.toLowerCase();

              return (
                <TableRow key={index}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>

                  <TableCell className="font-medium">
                    {user.name}
                  </TableCell>

                  <TableCell className="text-muted-foreground text-sm">
                    {user.email}
                  </TableCell>

                  <TableCell>
                    <span
                      className={`
                        inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium
                        ${status === "active" && "bg-green-100 text-green-700"}
                        ${status === "inactive" && "bg-gray-100 text-gray-700"}
                        ${status === "blocked" && "bg-red-100 text-red-700"}
                      `}
                    >
                      <span
                        className={`
                          h-2 w-2 rounded-full
                          ${status === "active" && "bg-green-600"}
                          ${status === "inactive" && "bg-gray-500"}
                          ${status === "blocked" && "bg-red-600"}
                        `}
                      />
                      {user.status}
                    </span>
                  </TableCell>

                  <TableCell>{user.plan}</TableCell>
                  <TableCell>{user.projects}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {user.joined}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {user.active}
                  </TableCell>

                  <TableCell className="space-x-2">
                    <Button  onClick={() => navigate("/management")}  size="sm" variant="outline" className='border-2 border-black'>View</Button>
                    {status === "blocked" ? (
                      <Button size="sm" variant="ghost" className="text-green-600">
                        Unblock
                      </Button>
                    ) : (
                      <Button size="sm" variant="ghost" className="text-red-600">
                        Block
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
</Table>
</div>

  <div className="flex items-center justify-between px-4 py-3 text-md border-t bg-white">

      <p className="text-muted-foreground">
        Showing 1-5 of  245 users
      </p>

      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-1 text-muted-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          Prev
        </Button>

        <Button size="sm" className="h-8 w-8 p-0">
          1
        </Button>

        <Button
          size="sm"
          variant="outline"
          className="h-8 w-8 p-0"
        >
          2
        </Button>

        <Button
          size="sm"
          variant="outline"
          className="h-8 w-8 p-0"
        >
          3
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-1 text-muted-foreground"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
    </div>
  );
}

