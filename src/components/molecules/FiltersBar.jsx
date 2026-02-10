import { Input } from "../ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { IoSearch } from "react-icons/io5";

export default function FiltersBar() {
  return (
    <div className="mb-5 md:mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 rounded-lg bg-[#f9fafb] p-4 sm:p-5 shadow-sm">
      
      <div className="space-y-1">
        <label className="text-sm sm:text-base font-medium text-muted-foreground">
          Search by Email
        </label>

        <div className="relative">
          <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="user@example.com"
            className="pl-9 bg-white h-9 sm:h-10"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm sm:text-base font-medium text-muted-foreground">
          Plan
        </label>

        <Select>
          <SelectTrigger className="w-full bg-white h-9 sm:h-10">
            <SelectValue placeholder="All Plans" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Plans</SelectItem>
            <SelectItem value="basic">Basic</SelectItem>
            <SelectItem value="pro">Pro</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <label className="text-sm sm:text-base font-medium text-muted-foreground">
          Status
        </label>

        <Select>
          <SelectTrigger className="w-full bg-white h-9 sm:h-10">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <label className="text-sm sm:text-base font-medium text-muted-foreground">
          From Date
        </label>
        <Input type="date" className="bg-white h-9 sm:h-10" />
      </div>

      <div className="space-y-1">
        <label className="text-sm sm:text-base font-medium text-muted-foreground">
          To Date
        </label>
        <Input type="date" className="bg-white h-9 sm:h-10" />
      </div>
    </div>
  );
}