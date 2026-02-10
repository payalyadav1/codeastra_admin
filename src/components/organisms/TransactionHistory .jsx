import React from "react";
import { Download } from "lucide-react";
import { BsCalendar4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const TransactionHistory = () => {
    const navigate = useNavigate();

  const data = [
    {
      date: "12 Nov 2024",
      plan: "Premium Plan",
      amount: "₹499",
      mode: "Razorpay",
      status: "Success",
      id: "TXN23456",
    },
    {
      date: "09 Oct 2024",
      plan: "Basic Plan",
      amount: "₹299",
      mode: "UPI",
      status: "Failed",
      id: "TXN22589",
    },
    {
      date: "15 Sep 2024",
      plan: "Premium Plan",
      amount: "₹499",
      mode: "Credit Card",
      status: "Success",
      id: "TXN21234",
    },
  ];

  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-5 mt-5">
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h2 className="text-md font-bold text-black">
          Transaction History
        </h2>

        <div className="flex flex-wrap gap-2">
          <select className="border rounded-md text-md px-2 py-1 w-35">
            <option>All Months</option>
          </select>

          <button  onClick={() => navigate("/history")}
           className="px-3 py-1 text-md border rounded-md bg-black text-white">
            View all
          </button>

          <button className="px-3 py-1 text-md bg-black text-white rounded-md flex items-center gap-1 hover:bg-gray-800">
            <Download size={14} />
            Download Invoice
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[700px]">
          <thead>
            <tr className="text-gray-400  border-b border-gray-100  ">
              <th className="text-left py-2 font-medium ">Date</th>
              <th className="text-left py-2 font-medium">Plan Name</th>
              <th className="text-left py-2 font-medium">Amount</th>
              <th className="text-left py-2 font-medium">Payment Mode</th>
              <th className="text-left py-2 font-medium">Status</th>
              <th className="text-left py-2 font-medium">Transaction ID</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index} className=" border-b border-gray-50  text-gray-400 font-medium ">
                <td className="py-3  text-sm ">{item.date}</td>
                <td className="py-3 text-sm">{item.plan}</td>
                <td className="py-3 text-sm">{item.amount}</td>
                <td className="py-3 text-sm ">{item.mode}</td>
                <td className="py-2 text-sm">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      item.status === "Success"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-2 text-gray-500 ">{item.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col border-t border-gray-100 mt-5 sm:flex-row sm:justify-between gap-2 text-xs text-gray-500 ">
<span className="mt-4 text-sm font-medium flex items-center gap-2">
  <BsCalendar4 className="text-base bg-[#f8bbd9]" />
  Total Spent: ₹3,299
</span>
        <span className="mt-4 text-sm font-medium">Showing 3 of 8 transactions</span>
      </div>

    </div>
  );
};

export default TransactionHistory;
