import React from "react";
import phoneimg from '../../assets/p.png'
export default function Sideimags() {
  return (
    <div className=" w-170 mt-15 bg-[#f5f5f5] items-center justify-center rounded-3xl m-4">
    <img src={phoneimg} alt="phone image" className="ml-20 mt-15 h-150 "/>
    </div>
  );
}