import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function TransactionDetailsHeader() {
  const navigate = useNavigate();

  return (
    <div className="
      mt-4 mb-5 md:mb-6 border-b pb-4
      flex flex-col gap-4
      sm:flex-row sm:items-center sm:justify-between
      px-3 sm:px-4 md:px-0
    ">

      <div className="flex items-start sm:items-center gap-3">

        <button
          onClick={() => navigate("/history")}
          className="border rounded-sm h-8 w-8 flex items-center justify-center shrink-0 hover:bg-gray-100 transition"
        >
          <FaArrowLeft className="h-4 w-4" />
        </button>

        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
            Transaction Details
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground">
            View complete purchase and subscription information
          </p>
        </div>
      </div>

      <div className="flex w-full sm:w-auto">
        <Button
          variant="outline"
          size="sm"
          className="w-full sm:w-auto border-black border-2 text-md h-9 sm:h-10"
        >
          <Download className="mr-2 h-4 w-4" />
          Export Invoice
        </Button>
      </div>

    </div>
  );
}