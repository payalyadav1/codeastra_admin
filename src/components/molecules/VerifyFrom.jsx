import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoIosArrowBack } from "react-icons/io";
import code from '../../assets/codeastra1.png'

export default function VerifyFrom() {
      const [show, setShow] = useState(false)



  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-8 lg:py-0">
     
      <div className="">
        <div className="flex items-center gap-1">
        <img src={code} alt="codeastra logo" className="h-20 w-50 mb-"/>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-3 flex  cursor-pointer">
          <IoIosArrowBack className="mt-1" /> <span className="ml-1">Back to login</span>
        </p>

      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 mt-3">Verify code</h1>
        <p className="text-gray-500 text-sm sm:text-base">An authent.cotion code hos teen sent to your emaiL</p>
      </div>




       <label className="text-sm font-medium text-gray-700 ">
        Enter Code
      </label>

      <div className="relative mt-1 ">
        <Input
          type={show ? "text" : "password"}
          defaultValue="7789BMX"
          className="pr-10 h-12"
        />

       
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

        <p className="text-sm text-gray-500 mb-6 mt-3">
          Didn’t receive a code?
          <span className="text-red-500 cursor-pointer ml-1">
            Resend
          </span>
        </p>

     
      

        <Button className="w-full h-12 mb-60 mt-3  text-white rounded-lg text-base font-medium">
          Verify
        </Button>

        
      
      </div>
    
  );
}
