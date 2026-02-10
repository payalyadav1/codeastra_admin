import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const transactions = [
  {
    email: "sarah.wilson@email.com",
    plan: "Premium Plan",
    status: "Active",
    count: "3 times",
    amount: "$299.00",
    method: "Credit Card",
    purchase: "Dec 15, 2024",
    expiry: "Dec 15, 2025",
  },
  {
    email: "mike.johnson@company.com",
    plan: "Pro Plan",
    status: "Active",
    count: "1 time",
    amount: "$149.00",
    method: "PayPal",
    purchase: "Dec 12, 2024",
    expiry: "Dec 12, 2025",
  },
  {
    email: "emma.davis@startup.io",
    plan: "Basic Plan",
    status: "Inactive",
    count: "2 times",
    amount: "$49.00",
    method: "Credit Card",
    purchase: "Nov 28, 2024",
    expiry: "Nov 28, 2024",
  },
];

export default function TransactionCardsPage() {
      const navigate = useNavigate();

  return (
    <div className="space-y-5 md:space-y-6">

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>View:</span>

          <div className="flex rounded-md bg-[#f3f4f6] p-1">
            <Button size="sm" variant="secondary">Cards</Button>
            <Button size="sm" variant="ghost">Table</Button>
          </div>
        </div>

        <span className="text-xs sm:text-sm">
          Showing 1-12 of 2,847 transactions
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {transactions.map((item, index) => (
          <Card key={index} className="rounded-xl">
            <CardContent className="p-4 sm:p-5 space-y-4">

              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium text-sm sm:text-base break-all">
                    {item.email}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {item.plan}
                  </p>
                </div>

                <span
                  className={`text-xs sm:text-sm font-medium ${
                    item.status === "Active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                <Row label="Purchase Count" value={item.count} />
                <Row label="Amount Paid" value={item.amount} />
                <Row label="Payment Method" value={item.method} />
                <Row label="Purchase Date" value={item.purchase} />
                <Row label="Expiry Date" value={item.expiry} />
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <Button onClick={() => navigate("/transactiondetails")}
                  size="sm" className="w-50">
                  View Details
                </Button>

                <Button size="sm" variant="secondary" className="w-50">
                  {item.status === "Active" ? "Deactivate" : "Reactivate"}
                </Button>
              </div>

            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 text-sm">
        <Button variant="ghost" size="sm">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Button>

        <div className="flex flex-wrap justify-center gap-2">
          <Button size="sm">1</Button>
          <Button size="sm" variant="ghost">2</Button>
          <Button size="sm" variant="ghost">3</Button>
          <span className="px-1">…</span>
          <Button size="sm" variant="ghost">237</Button>
        </div>

        <Button variant="ghost" size="sm">
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>

    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right">{value}</span>
    </div>
  );
}