import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import {
  Calendar,
  Clock,
  User,
  Search,
  Download,
} from "lucide-react";

import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const projects = [
  {
    title: "E-commerce Dashboard",
    status: "Active",
    statusColor: "bg-green-100 text-green-700",
    created: "12 Nov 2025",
    duration: "3 days",
    prompts: 18,
    modifications: 6,
    user: "Rahul Verma",
    userId: "U-1024",
  },
  {
    title: "Mobile App Redesign",
    status: "Completed",
    statusColor: "bg-blue-100 text-blue-700",
    created: "08 Nov 2025",
    duration: "5 days",
    prompts: 24,
    modifications: 12,
    user: "Priya Sharma",
    userId: "U-1025",
  },
  {
    title: "SaaS Landing Page",
    status: "Paused",
    statusColor: "bg-orange-100 text-orange-700",
    created: "05 Nov 2025",
    duration: "2 days",
    prompts: 15,
    modifications: 8,
    user: "Amit Kumar",
    userId: "U-1026",
  },
  {
    title: "Blog Platform",
    status: "Deleted",
    statusColor: "bg-red-100 text-red-700",
    created: "01 Nov 2025",
    duration: "1 day",
    prompts: 9,
    modifications: 3,
    user: "Sarah Wilson",
    userId: "U-1027",
  },
  {
    title: "Portfolio Website",
    status: "Active",
    statusColor: "bg-green-100 text-green-700",
    created: "10 Nov 2025",
    duration: "4 days",
    prompts: 22,
    modifications: 11,
    user: "David Chen",
    userId: "U-1028",
  },
  {
    title: "Admin Panel",
    status: "Completed",
    statusColor: "bg-blue-100 text-blue-700",
    created: "07 Nov 2025",
    duration: "6 days",
    prompts: 31,
    modifications: 15,
    user: "Maya Patel",
    userId: "U-1029",
  },
];


export default function CreatedProjects() {
    const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-6 lg:px-8">

      <div className="rounded-md border p-4 mt-5 bg-white">

        <div className="mb-4 flex items-center gap-2">
          <FaArrowLeftLong  onClick={() => navigate(-1)} className="h-5 w-5 text-black" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            Created Projects
          </h1>
        </div>

        <div
          className="
            grid grid-cols-1 gap-4
            sm:grid-cols-2
            lg:grid-cols-[1.5fr_160px_160px_1fr_auto]
            items-center
          "
        >
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
            <Input
              className="pl-9 h-10 w-full max-w-[260px]"
              placeholder="Search project by name / user"
            />
          </div>


          <Select>
            <SelectTrigger className="h-10 w-full sm:w-40">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent position="popper" side="bottom" avoidCollisions={false}>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="paused">Paused</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-10 w-full sm:w-40">
              <SelectValue placeholder="Select User" />
            </SelectTrigger>
            <SelectContent position="popper" side="bottom" avoidCollisions={false}>
              <SelectItem value="rahul">Rahul Verma</SelectItem>
              <SelectItem value="priya">Priya Sharma</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            <Input type="date" className="h-10 w-full sm:w-[160px]" />
            <span className="text-sm text-gray-500">to</span>
            <Input type="date" className="h-10 w-full sm:w-[160px]" />
          </div>

          <Button
            variant="outline"
            className="h-10 px-4 border-black w-full sm:w-auto whitespace-nowrap"
          >
            <Download className="h-4 w-4 mr-2" />
            Export Projects
          </Button>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        {projects.map((project, index) => (
          <Card key={index} className="rounded-2xl shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <h2 className="font-semibold text-xl">
                {project.title}
              </h2>
              <Badge className={`${project.statusColor} rounded-full px-3 py-1 text-md`}>
                {project.status}
              </Badge>
            </CardHeader>

            <CardContent className="space-y-3 text-md">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" /> Created on: {project.created}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" /> Duration: {project.duration}
              </div>

              <div className="grid grid-cols-2 gap-4 text-center mt-2">
                <div>
                  <p className="font-bold">{project.prompts}</p>
                  <p className="text-sm text-muted-foreground">Total Prompts</p>
                </div>
                <div>
                  <p className="font-bold">{project.modifications}</p>
                  <p className="text-sm text-muted-foreground">Modifications</p>
                </div>
              </div>

              <hr />

              <div className="text-md text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="text-blue-600">{project.user}</span>
                </div>
                <span>UserID: ({project.userId})</span>
              </div>
            </CardContent>

            <CardFooter className="flex gap-3 ">
              <Button className="flex-1 h-10 text-blue-600 bg-gray-50 text-md" variant="outline">
                View Project
              </Button>
              <Button className="flex-1 h-10 text-red-600 bg-red-50 text-md" variant="outline">
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="w-full flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center pt-6 mt-6">
        <p className="text-md text-gray-600">
          Showing 1-9 of 128 projects
        </p>

        <div className="flex items-center gap-5">
          <button
            className="flex items-center gap-1 text-md text-gray-400"
            disabled
          >
            <MdOutlineArrowBackIosNew /> Prev
          </button>

          <button className="h-8 w-8 rounded-lg bg-blue-600 text-white text-md">
            1
          </button>
          <button className="h-8 w-8 rounded-lg text-md text-gray-600 hover:bg-gray-100">
            2
          </button>
          <button className="h-8 w-8 rounded-lg text-md text-gray-600 hover:bg-gray-100">
            3
          </button>

          <span className="text-gray-400">…</span>

          <button className="flex items-center gap-1 text-md text-gray-600">
            Next <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}
