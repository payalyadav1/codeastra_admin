import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { FaRegEdit } from "react-icons/fa";
import EditProfile from "../organisms/EditProfile";
import { useState } from "react";

export default function AdminProfileCard() {
  const [open, setOpen] = useState(false);

  return (
    <Card className="w-full p-4 sm:p-5 md:p-6 mt-6 md:mt-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full border-2 shrink-0" />

          <div className="space-y-1">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
              John Anderson
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground">
              Super Admin
            </p>

            <p className="text-sm sm:text-base text-muted-foreground break-all">
              john.anderson@codeastra.com
            </p>

            <div className="flex items-center gap-2 text-xs sm:text-sm mt-1">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-green-600">Active</span>
            </div>
          </div>
        </div>

        <Button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          <FaRegEdit className="h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      <EditProfile open={open} setOpen={setOpen} />
    </Card>
  );
}