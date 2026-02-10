import { Button } from "../ui/button";
import { Download, Plus } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function HistoryHeader() {
      const navigate = useNavigate();

  return (
    <div className="mt-4 mb-5 md:mb-6 border-b pb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      
      <div className="flex items-start sm:items-center gap-3">
        <FaArrowLeft  onClick={() => navigate("/management")} className="h-5 w-5 mt-1 sm:mt-0 cursor-pointer shrink-0" />

        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
            Transaction History
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground">
            Manage and view all customer transactions and plan subscriptions
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <Button
          variant="outline"
          size="sm"
          className="w-full sm:w-auto h-9 sm:h-10"
        >
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>

        <Button
          size="sm"
          className="w-full sm:w-auto h-9 sm:h-10"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Transaction
        </Button>
      </div>

    </div>
  );
}