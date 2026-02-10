import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { LuRotateCcw } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { TbActivity } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";
import { FaBell } from "react-icons/fa6";
import { BsCalendarWeekFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { GrSend } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";


const timelineData = [
  { id: 1, label: 'Plan Purchased', description: 'Pro Plan subscription initiated', date: 'Jan 15, 2024 at 10:30 AM', icon: <FaShoppingCart  className="text-green-500 border-green-500"  /> },
  { id: 2, label: 'Payment Successful', description: 'Payment of $49.99 processed via Razorpay', date: 'Jan 15, 2024 at 10:31 AM', icon: <FaCheckCircle className="text-green-500" /> },
  { id: 3, label: 'Plan Activated', description: 'Pro Plan features enabled for account', date: 'Jan 15, 2024 at 10:32 AM', icon: <TbActivity  className="text-green-500" /> },
  { id: 4, label: 'Auto-Renewal Enabled', description: 'Subscription set to renew automatically', date: 'Jan 15, 2024 at 10:32 AM', icon: <TfiReload  className="text-green-500" /> },
  { id: 5, label: 'Renewal Reminder Sent', description: 'Email notification sent for upcoming renewal', date: 'Feb 08, 2024 at 09:00 AM', icon: <FaBell className="text-purple-500" /> },
  { id: 6, label: 'Next Renewal Scheduled', description: 'Plan will renew on expiry date', date: 'Feb 15, 2024 at 12:00 AM', icon: <BsCalendarWeekFill  className="text-gray-500" /> },
];

const TransactionDetailsActivity = () => {
  return (

<div className="p-4 md:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
  <Card className="lg:col-span-2">
    <CardHeader>
      <div className="flex items-center space-x-2">
        <LuRotateCcw className="text-lg" />
        <CardTitle className="text-xl font-bold">Activity Timeline</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <ul className="space-y-6 border-l-2 border-gray-300 ml-4 relative">
        {timelineData.map((item) => (
          <li key={item.id} className=" relative flex gap-5 pb-2 ">
<div className="absolute -left-[18px] flex items-center justify-center">              
              <div
                className={`
                  w-8 h-8 flex items-center justify-center
                  rounded-full border-2
                  border-gray-300
                  text-${item.color}-500
                  hover:bg-${item.color}-100
                  transition
                `}
              >
                {item.icon}
              </div>
            </div>
            <div className='ml-8'>
              <p className="font-semibold">{item.label}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
              <p className="text-xs text-gray-400 mt-1">{item.date}</p>
            </div>


            
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>

  <Card className="lg:col-span-1">
    <CardHeader>
           <div className="flex items-center space-x-2">
        <HiAdjustmentsHorizontal className="text-lg " />
        <CardTitle className="text-xl font-bold">Actions</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
     
      <Button variant="destructive" className="w-full text-lg h-12">
           <IoIosArrowDropupCircle />
        Deactivate Plan</Button>
      <Button variant="outline" className="w-full text-lg h-12 border-black border-2">
        <GrSend />

        Resend Invoice</Button>
      <Button variant="outline" className="w-full text-lg h-12 border-black border-2">
        <FaEdit/>
        Edit Subscription</Button>

    
      <div className="mt-4 border-t pt-4">
  <p className="text-lg text-black font-bold">Quick Stats</p>

  <ul className="mt-2 space-y-1">
    <li className="flex justify-between">
      <span className="text-gray-500">Total Spent:</span>
      <span className='font-semibold'>$149.97</span>
    </li>

    <li className="flex justify-between">
      <span className="text-gray-500">Active Since:</span>
      <span className='font-semibold'>6 Months</span>
    </li>

    <li className="flex justify-between">
      <span className="text-gray-500">Last Payment:</span>
      <span className='font-semibold'>Jan 15, 2024</span>
    </li>

    <li className="flex justify-between">
      <span className="text-gray-500">Payment Method:</span>
      <span className='font-semibold'>Razorpay</span>
    </li>
  </ul>
</div>
    <div className='mt-5 bg-[#f9fafb] h-30 w-full rounded-sm pt-4'>
 <h1 className="font-bold ml-4 flex items-center gap-2">
    <FaCircleInfo className='text-blue-400' />
  Need Help?
</h1>
  <p className="text-sm text-gray-400 mt-4 ml-4">
    Contact support for any subscription or billing queries.
  </p>
</div>
    </CardContent>
  </Card>
</div>
  );
};

export default TransactionDetailsActivity;
