import React from "react";
import { ThumbsUp, ThumbsDown, Copy, Share2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { FaRegStar } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const messages = [
  {
    date: "05 Nov 2025",
    role: "user",
    time: "10:34 AM",
    text: "Can you help me design a modern landing page for a SaaS product? I need it to have a hero section, features, pricing, and testimonials.",
  },
  {
    role: "ai",
    time: "10:34 AM",
    text: "I'll help you create a modern SaaS landing page...",
  },
  {
    role: "user",
    time: "10:38 AM",
    text: "Can you make the hero section more vibrant with a gradient background?",
  },
  {
    role: "ai",
    revision: "Revision #1",
    time: "10:38 AM",
    text: "I've updated the hero section...",
  },
  {
    role: "user",
    time: "10:42 AM",
    text: "Perfect! Can you also add some animations to the feature cards?",
  },
  {
    role: "ai",
    revision: "Revision #2",
    time: "10:43 AM",
    text: "I've added smooth hover animations...",
  },
];

const messages1 = [
  {
    date: "04 Nov 2025",
    role: "user",
    time: "3:22 PM",
    text: "Create a dashboard layout With Sidebar navigation and multiple data Cards.",
  },
  {
    role: "ai",
    time: "3:23 PM",
    text: "l've created acomprehensive dashboard...",
  },
];

export default function ChatHistoryPage() {
  return (
    <Card className="bg-white border-none px-3 sm:px-6 lg:px-8 py-4 sm:py-6 mt-4">
      <div className="mx-auto max-w-5xl space-y-6">

        {messages.map((msg, idx) => (
          <div key={idx}>

            {msg.date && (
              <div className="mb-4 flex items-center gap-3">
                <p className="text-sm sm:text-md font-medium text-muted-foreground whitespace-nowrap">
                  {msg.date}
                </p>
                <div className="h-px flex-1 bg-border border-gray-100" />
              </div>
            )}

            <div className="flex items-start gap-3">
              {msg.role === "ai" && (
                <Avatar className="h-9 w-9 sm:h-10 sm:w-10">
                  <AvatarFallback className="bg-black text-white">
                    <FaRobot />
                  </AvatarFallback>
                </Avatar>
              )}

              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <span className="font-normal text-foreground">
                    {msg.revision ? msg.revision : msg.role === "ai" ? "AI" : "User"}
                  </span>
                  <span>{msg.time}</span>
                </div>

                <Card
                  className={`w-full mt-2 border-none rounded-sm shadow-none
                  ${msg.role === "ai" ? "bg-[#f0f2ff]" : "bg-[#f9fafb]"}`}
                >
                  <CardContent className="p-3 sm:p-4">
                    <p className="text-sm leading-relaxed text-foreground">
                      {msg.text}
                    </p>
                  </CardContent>
                </Card>

                {msg.role === "ai" && (
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-muted-foreground">
                    <FaCopy className="h-4 w-4 cursor-pointer hover:text-foreground" />
                    <IoReload className="h-4 w-4 cursor-pointer hover:text-foreground" />
                    <FaRegEdit className="h-4 w-4 cursor-pointer hover:text-foreground" />
                    <FaThumbsUp className="h-4 w-4 cursor-pointer text-[#16a34a]" />
                    <ThumbsDown className="h-4 w-4 cursor-pointer hover:text-foreground" />
                  </div>
                )}

                {msg.role === "user" && (
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-muted-foreground">
                    <FaCopy className="h-4 w-4 cursor-pointer hover:text-foreground" />
                    <FaRegStar className="h-4 w-4 cursor-pointer hover:text-foreground" />
                    <FaTag className="h-4 w-4 cursor-pointer hover:text-foreground" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {messages1.map((msg, idx) => (
          <div key={idx}>

            {msg.date && (
              <div className="mb-4 flex items-center gap-3">
                <p className="text-sm sm:text-md font-medium text-muted-foreground whitespace-nowrap">
                  {msg.date}
                </p>
                <div className="h-px flex-1 bg-border border-gray-100" />
              </div>
            )}

            <div className="flex items-start gap-3">
              {msg.role === "ai" && (
                <Avatar className="h-9 w-9 sm:h-10 sm:w-10">
                  <AvatarFallback className="bg-black text-white">
                    <FaRobot />
                  </AvatarFallback>
                </Avatar>
              )}

              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <span className="font-normal text-foreground">
                    {msg.role === "ai" ? "AI" : "User"}
                  </span>
                  <span>{msg.time}</span>
                </div>

                <Card
                  className={`w-full mt-2 border-none rounded-sm shadow-none
                  ${msg.role === "ai" ? "bg-[#f0f2ff]" : "bg-[#f9fafb]"}`}
                >
                  <CardContent className="p-3 sm:p-4">
                    <p className="text-sm leading-relaxed text-foreground">
                      {msg.text}
                    </p>
                  </CardContent>
                </Card>

                {msg.role === "ai" && (
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-muted-foreground">
                    <FaCopy className="h-4 w-4 cursor-pointer hover:text-foreground" />
                    <IoReload className="h-4 w-4 cursor-pointer hover:text-foreground" />
                    <FaRegEdit className="h-4 w-4 cursor-pointer hover:text-foreground" />
                    <FaThumbsUp className="h-4 w-4 cursor-pointer text-[#16a34a]" />
                    <ThumbsDown className="h-4 w-4 cursor-pointer hover:text-foreground" />
                  </div>
                )}

                {msg.role === "user" && (
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-muted-foreground">
                    <FaCopy className="h-4 w-4 cursor-pointer hover:text-foreground" />
                    <FaStar className="h-4 w-4 text-[#eab308]" />
                    <FaTag className="h-4 w-4 cursor-pointer hover:text-foreground" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}