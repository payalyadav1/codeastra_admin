import { BsFillBellFill } from "react-icons/bs";
import { Card } from "../ui/card";

export default function AdminProfileHeader() {
  return (
    <Card className="w-full border-b rounded-none">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 md:px-8">
        
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
            Admin Profile
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="flex items-center">
          <BsFillBellFill className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
        </div>

      </div>
    </Card>
  );
}