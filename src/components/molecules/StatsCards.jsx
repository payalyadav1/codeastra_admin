import { Card, CardContent } from "../ui/card";
import { RiFileList2Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { MdCheckCircle } from "react-icons/md";
import { HiMiniXCircle } from "react-icons/hi2";

export default function StatsCards() {
  return (
    <div className="mb-5 md:mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">

      
      <Card>
        <CardContent className="p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Total Transactions
              </p>
              <p className="text-xl sm:text-2xl font-bold">2,847</p>
            </div>

            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-md bg-gray-200">
              <RiFileList2Fill className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            </div>
          </div>

          <p className="text-xs sm:text-sm font-medium text-green-600">
            +12.5% from last month
          </p>
        </CardContent>
      </Card>

      
      <Card>
        <CardContent className="p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Total Users
              </p>
              <p className="text-xl sm:text-2xl font-bold">1,234</p>
            </div>

            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-md bg-gray-200">
              <FaUsers className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            </div>
          </div>

          <p className="text-xs sm:text-sm font-medium text-green-600">
            +8.2% from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Active Plans
              </p>
              <p className="text-xl sm:text-2xl font-bold">987</p>
            </div>

            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-md bg-green-100">
              <MdCheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
            </div>
          </div>

          <p className="text-xs sm:text-sm font-medium text-green-600">
            +5.1% from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Expired Plans
              </p>
              <p className="text-xl sm:text-2xl font-bold">247</p>
            </div>

            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-md bg-red-100">
              <HiMiniXCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
            </div>
          </div>

          <p className="text-xs sm:text-sm font-medium text-red-600">
            -3.4% from last month
          </p>
        </CardContent>
      </Card>

    </div>
  );
}