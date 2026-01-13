import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import {
  Star,
  Crown,
  Diamond,
  Pencil,
  X,
  RefreshCw,
  TriangleAlert,
} from "lucide-react";
import { FaLock, FaFileAlt } from "react-icons/fa";

const plans = [
  {
    title: "Basic Plan",
    price: "₹399",
    users: "800 active users",
    desc: (
      <>
        Essential tools for individual learners and small <br />
        creators.
      </>
    ),
    color: "bg-blue-200",
    icon: Star,
    features: [
      "5 AI Tools Access",
      "Basic Support",
      "Limited Storage (5 GB)",
      "1 Team Member",
    ],
    actions: ["remove", "change"],
  },
  {
    title: "Pro Plan",
    price: "₹899",
    users: "1,200 active users",
    desc: "Advanced AI tools and collaboration features for professionals.",
    color: "bg-indigo-200",
    icon: Crown,
    features: [
      "All Basic features + Priority Support",
      "50 GB Storage",
      "Team Collaboration (Up to 5)",
      "Dashboard Customization",
      "Weekly AI Reports",
    ],
    actions: ["upgrade", "disable"],
  },
  {
    title: "Premium Plan",
    price: "₹1,499",
    users: "340 active users",
    desc: "Full access to AI automation, team tools, and priority insights.",
    color: "bg-pink-200",
    icon: Diamond,
    features: [
      "Unlimited Storage & Users",
      "AI Workspace + Analytics",
      "Premium Support 24×7",
      "Beta Access to New Tools",
      "Early Feature Release",
    ],
    actions: ["subscribers", "Remove"],
  },
];

export default function PricingPlans() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-10 mt-10">
      {plans.map((plan, i) => {
        const Icon = plan.icon;
        return (
          <Card
            key={i}
            className="rounded-2xl shadow-lg flex flex-col overflow-hidden"
          >
            <CardContent className="p-6 flex flex-col gap-6">
              <div className={`${plan.color} rounded-xl p-4 relative`}>
                <Icon className="absolute top-4 right-4 text-yellow-400 w-6 h-6" />
                <h2 className="font-semibold text-lg">{plan.title}</h2>
                <h1 className="text-3xl font-bold mt-1">
                  {plan.price}
                  <span className="text-sm font-normal text-gray-600">
                    /month
                  </span>
                </h1>
                <p className="text-sm text-gray-700 mt-1">{plan.users}</p>
              </div>

              <p className="text-sm text-gray-600 ml-1">{plan.desc}</p>

              <ul className="space-y-2 text-sm text-gray-500 ml-1">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Button className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto flex items-center justify-center gap-2">
                <Pencil className="w-4 h-4" />
                Edit Plan
              </Button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {plan.actions.includes("remove") && (
                  <Button className="w-full sm:w-auto flex items-center justify-center gap-2" variant="secondary">
                    <X className="w-4 h-4" />
                    Remove
                  </Button>
                )}
                {plan.actions.includes("change") && (
                  <Button className="w-full sm:w-auto flex items-center justify-center gap-2" variant="secondary">
                    <RefreshCw className="w-4 h-4" />
                    Change Tier
                  </Button>
                )}
                {plan.actions.includes("upgrade") && (
                  <Button className="w-full sm:w-auto flex items-center justify-center gap-2" variant="secondary">
                    <RefreshCw className="w-4 h-4" />
                    Upgrade
                  </Button>
                )}
                {plan.actions.includes("disable") && (
                  <Button className="w-full sm:w-auto flex items-center justify-center gap-2" variant="secondary">
                    <FaLock className="w-4 h-4" />
                    Disable
                  </Button>
                )}
                {plan.actions.includes("subscribers") && (
                  <Button className="w-full sm:w-auto flex items-center justify-center gap-2" variant="secondary">
                    <FaFileAlt className="w-4 h-4" />
                    Subscribers
                  </Button>
                )}
                {plan.actions.includes("Remove") && (
                  <Button className="w-full sm:w-auto flex items-center justify-center gap-2" variant="secondary">
                    <TriangleAlert className="w-4 h-4" />
                    Remove
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
