import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { FaUser } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaCalendarPlus } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa";
import { FaCalendarTimes } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { Switch } from "../ui/switch";
import { MdPayment } from "react-icons/md";
import { FaHashtag } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";


const TransactionDetailsCard = () => {
    return (
        <div className="p-4 md:p-8 min-h-screen flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl">
            

              <Card className="bg-white">
  <CardContent className="space-y-4 overflow-hidden">

    <div className="flex items-center gap-2">
      <FaUser className="text-lg shrink-0" />
      <h2 className="text-lg font-bold">User Information</h2>
    </div>

    <div className="flex flex-col items-center space-y-3 text-center">
      <div className="w-20 h-20 border-2 rounded-full shrink-0"></div>
      <p className="font-bold text-gray-900 text-lg break-words">
        Michael Rodriguez
      </p>

      <span className="text-[#15803d] font-medium flex items-center">
        <GoDotFill className="mr-1 shrink-0" /> Active
      </span>
    </div>

    <div className="space-y-2 mt-5">

      <div className="flex items-center gap-2 text-gray-500">
        <MdEmail className="h-5 w-5 shrink-0" />
        <p className="text-md">Email Address</p>
      </div>
      <p className="text-black font-medium text-md break-words">
        michael.rodriguez@company.com
      </p>

      <div className="flex items-center gap-2 text-gray-500 mt-3">
        <FaPhone className="h-4 w-4 shrink-0" />
        <p className="text-md">Phone Number</p>
      </div>
      <p className="text-black font-medium text-md break-words">
        +1 (555) 234-5678
      </p>

      <div className="flex items-center gap-2 text-gray-500 mt-3">
        <FaIdCard className="h-5 w-5 shrink-0" />
        <p className="text-md">Customer ID</p>
      </div>
      <p className="text-black font-medium text-md break-words">
        CUST-2024-8471
      </p>

    </div>
  </CardContent>
</Card>

                <Card className="bg-white">
  <CardContent className="space-y-4 overflow-hidden">

    <div className="flex items-center gap-2">
      <FaCrown className="h-5 w-5 shrink-0" />
      <h2 className="text-lg font-bold">Plan & Subscription Details</h2>
    </div>

    <div className="space-y-2">
      <p className="text-md text-gray-600">Plan Name</p>
      <p className="font-semibold text-xl">Pro Plan</p>
      <hr />

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-md text-gray-600">Purchase Count</p>
          <p className="font-semibold text-lg">3 Times</p>
        </div>

        <div className="sm:text-right">
          <p className="text-md text-gray-600">Status</p>
          <span className="text-[#15803d] font-medium flex items-center sm:justify-end">
            <FaCheckCircle className="mr-1" /> Active
          </span>
        </div>
      </div>

      <div>
        <div className="flex items-start gap-3 mt-8">
          <FaCalendarPlus className="text-gray-500 mt-1 shrink-0" size={20} />
          <div className="min-w-0">
            <p className="text-md text-gray-500">Purchase Date</p>
            <p className="text-gray-900 font-semibold text-lg -mt-1">Jan 15, 2024</p>
          </div>
        </div>

        <div className="flex items-start gap-3 mt-3">
          <FaCalendarDay className="text-gray-500 mt-1 shrink-0" size={20} />
          <div className="min-w-0">
            <p className="text-md text-gray-500">Start Date</p>
            <p className="text-gray-900 font-semibold text-lg -mt-1">Jan 15, 2024</p>
          </div>
        </div>

        <div className="flex items-start gap-3 mt-3">
          <FaCalendarTimes className="text-gray-500 mt-1 shrink-0" size={20} />
          <div className="min-w-0">
            <p className="text-md text-gray-500">Expiry Date</p>
            <p className="text-gray-900 font-semibold text-lg -mt-1">Jan 15, 2024</p>
          </div>
        </div>

        <hr className="mt-4" />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 mt-3">
        <div className="flex items-center gap-2">
          <TfiReload className="text-gray-500 shrink-0" size={20} />
          <p className="text-gray-900 font-semibold text-lg">Auto Renew</p>
        </div>

        <div className="flex items-center gap-2">
          <Switch className="!bg-green-600" />
          <span className="text-green-500 font-medium">ON</span>
        </div>
      </div>

    </div>
  </CardContent>
</Card>

                <Card className="bg-white">
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-2   ">
                            <MdPayment className="h-5 w-5" />
                            <h2 className="text-lg font-bold">Payment Details</h2>
                        </div>
                        <div className="p-6 bg-[#f9fafb] rounded-xl  w-full">
                            <p className="text-md text-gray-500">Amount Paid</p>
                            <p className="mt-1 text-3xl font-bold text-black">$49.99</p>
                            <p className="text-sm text-gray-400">USD</p>
                        </div>

                        <div className="space-y-2">

                            <div className="flex items-start gap-3 mt-3 w-full">
                                <FaHashtag className="text-gray-500 mt-1 shrink-0" size={20} />

                                <div className="flex flex-col min-w-0">
                                    <p className="text-md text-gray-500">Transaction ID</p>
                                    <p className="text-gray-900 font-semibold text-lg -mt-1 break-words">
                                        TXN-2024-15847
                                    </p>
                                </div>

                                <div className="border rounded-sm h-8 w-8 flex items-center justify-center ml-auto shrink-0">
                                    <FaCopy className="w-4 h-4 cursor-pointer text-gray-500" />
                                </div>
                            </div>
                            <hr className="mt-5" />



                            <div className="flex items-start gap-3 mt-3">

                                <FaCcPaypal className="text-gray-500 mt-3" size={20} />

                                <div className="flex flex-col">
                                    <p className="text-md text-gray-500 "> Payment Method</p>
                                    <p className="text-gray-900 font-semibold text-lg -mt-1">Razorpay</p>
                                </div>

                            </div>
                            <hr className="mt-5" />



                            <div className="flex items-start gap-3 mt-3">

                                <FaFileInvoice className="text-gray-500 mt-3" size={20} />

                                <div className="flex flex-col">
                                    <p className="text-md text-gray-500 "> Invoice Number</p>
                                    <p className="text-gray-900 font-semibold text-lg -mt-1">INV-2024-0158</p>
                                </div>

                            </div>
                            <hr className="mt-5" />

                            <div className="flex items-start gap-3 mt-3">

                                <FaCheckCircle className="text-green-500 mt-3" size={20} />

                                <div className="flex flex-col">
                                    <p className="text-md text-gray-500 "> Payment Status</p>
                                    <p className="text-[#329055] font-semibold text-lg -mt-1">Success</p>
                                </div>

                            </div>
                            <hr className="mt-5" />



                            <div className="flex items-start gap-3 mt-3">

                                <FaMapMarkerAlt className="text-gray-500 mt-3" size={20} />

                                <div className="flex flex-col">
                                    <p className="text-md text-gray-500 "> Billing Address</p>
                                    <p className="text-black font-semibold text-lg  -mt-1">
                                        123 Business Ave, Suite 400
                                        <br />
                                        San Francisco, CA 94102
                                        <br />
                                        United States</p>
                                </div>

                            </div>



                            <Button className="w-full h-12 text-xl mt-2 bg-black text-white hover:bg-gray-900">

                                <FaDownload />
                                Download Invoice
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default TransactionDetailsCard;