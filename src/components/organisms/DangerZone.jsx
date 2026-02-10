import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { FaExclamationTriangle } from "react-icons/fa";

export default function DangerZone() {
  return (
    <Card className="border border-red-200 p-4 sm:p-5 md:p-6 rounded-xl mt-6 md:mt-7">
      <h2 className="mb-4 flex items-center gap-2 font-semibold text-red-600 text-lg sm:text-xl">
        <FaExclamationTriangle />
        Danger Zone
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">

        <div className="rounded-lg border border-red-200 bg-red-50 p-4 sm:p-5">
          <h3 className="font-medium text-base sm:text-lg text-red-700">
            Deactivate Account
          </h3>

          <p className="mt-1 text-sm sm:text-base text-red-600">
            Temporarily disable your admin account access
          </p>

          <Button className="mt-4 w-full sm:w-auto bg-red-600 text-white hover:bg-red-700">
            Deactivate Account
          </Button>
        </div>

        <div className="rounded-lg border border-red-200 bg-red-50 p-4 sm:p-5">
          <h3 className="font-medium text-base sm:text-lg text-red-700">
            Reset Admin Access
          </h3>

          <p className="mt-1 text-sm sm:text-base text-red-600">
            Reset all permissions and require re-authorization
          </p>

          <Button className="mt-4 w-full sm:w-auto border border-red-300 text-red-600 hover:bg-red-100 bg-red-50">
            Reset Access
          </Button>
        </div>

      </div>
    </Card>
  );
}