import React from "react"
import { Card, CardContent } from "../ui/card"
import { MessageSquare, RefreshCcw, Calendar, Bot } from "lucide-react"

const stats = [
  {
    label: "Total Prompts",
    value: "42",
    icon: MessageSquare,
    iconBg: "bg-slate-100",
  },
  {
    label: "AI Responses",
    value: "42",
    icon: Bot,
    iconBg: "bg-purple-100",
  },
  {
    label: "Modifications",
    value: "7",
    icon: RefreshCcw,
    iconBg: "bg-slate-100",
  },
  {
    label: "Last Prompt Date",
    value: "05 Nov 2025",
    icon: Calendar,
    iconBg: "bg-green-100",
  },
]

const ChatStatsCards = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <Card key={item.label} className="rounded-xl shadow-sm">
            
            <CardContent className="flex items-center justify-between gap-4 p-5">
              
              <div className="space-y-1">
                <p className="text-sm sm:text-base text-muted-foreground">
                  {item.label}
                </p>
                <p className="text-xl sm:text-2xl font-semibold text-foreground">
                  {item.value}
                </p>
              </div>

              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.iconBg}`}
              >
                <item.icon className="h-5 w-5 text-foreground" />
              </div>

            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  )
}

export default ChatStatsCards