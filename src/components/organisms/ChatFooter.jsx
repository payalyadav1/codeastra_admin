import { Button } from "../ui/button";
import { Plus, FlaskConical, Share2 } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa6";

export default function ChatFooter() {
  
  return (
    <div className="w-full border-b bg-white mt-5">
      
      <div className="flex items-center justify-between px-3 sm:px-4 py-2">

       
        {/* <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1 text-sm bg-white shrink-0"
        >
          <FaArrowLeft className="h-4 w-4" />
          Back
        </Button> */}

        <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap ml-3">
          
          {/* <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1 shrink-0"
          >
            <Plus className="h-4 w-4" />
            Add New Prompt
          </Button> */}

          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1 shrink-0"
          >
            <FlaskConical className="h-4 w-4" />
            Test Similar Prompt
          </Button>

          <Button
            size="sm"
            className="flex items-center gap-1 shrink-0"
          >
            <Share2 className="h-4 w-4" />
            Share with Team
          </Button>

        </div>
      </div>
    </div>
  );
}