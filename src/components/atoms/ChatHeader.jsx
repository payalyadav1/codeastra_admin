import { Search, ArrowLeft, Download } from "lucide-react"
import React from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom"

const ChatHeader = () => {
    const navigate = useNavigate();
  return (
    <div className="w-full -mt-2 border-b border-gray-100 bg-white">
      
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3">

        <div className="flex cursor-pointer items-center gap-2 text-sm font-medium text-muted-foreground shrink-0">
          <ArrowLeft  onClick={() => navigate("/builder")} className="h-4 w-4" />
          <span className="whitespace-nowrap">
            Back to Prompt Interactions
          </span>
        </div>

        <h1 className="hidden flex-1 text-center text-md font-semibold text-foreground md:block">
          Chat History - Prompt Interaction Details
        </h1>

        <div className="flex w-full items-center justify-end gap-2 sm:w-auto">

          <div className="relative w-full sm:w-[220px]">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search chats..."
              className="h-9 w-full pl-8"
            />
          </div>

          <Button size="sm" className="h-9 shrink-0 gap-2">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>

        </div>
      </div>

      <div className="border-t px-4 py-2 text-center text-sm font-semibold md:hidden">
        Chat History - Prompt Interaction Details
      </div>

    </div>
  )
}

export default ChatHeader