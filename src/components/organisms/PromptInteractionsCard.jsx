import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { FaUser } from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const PromptInteractionsCard = () => {
   const navigate = useNavigate();
  return (
    <div className="w-full  p-4">
      <Card className="w-full  border border-gray-200 ">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            Prompt Interactions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            <div className=" p-3 bg-[#f9fafb] rounded-lg  h-25 ">
              <div className="text-md text-gray-500 dark:text-gray-400 ml-2 mt-2">Total Prompts Given</div>
                            <div className="text-2xl font-bold text-gray-900 ml-2 dark:text-white">42</div>

            </div>
            <div className=" p-3 bg-[#f9fafb] rounded-lg shadow-sm h-25 ">
              <div className="text-md text-gray-500 dark:text-gray-400 ml-2 mt-2">AI Responses Generated</div>
                            <div className="text-2xl font-bold text-gray-900 ml-2 dark:text-white">42</div>

            </div>
            <div className=" p-3 bg-[#f9fafb] rounded-lg shadow-sm h-25 ">
              <div className="text-md text-gray-500 dark:text-gray-400 ml-2 mt-2">Modifications/Revisions</div>
                            <div className="text-2xl font-bold text-gray-900 ml-2 dark:text-white">7</div>

            </div>
            <div className=" p-3 bg-[#f9fafb] rounded-lg shadow-sm h-25">
              <div className="text-md text-gray-500 dark:text-gray-400 ml-2 mt-2">Last Prompt Date</div>
                            <div className="text-xl font-bold text-gray-900 ml-2 dark:text-white">05 Nov 2025</div>

            </div>
          </div>

          <div className=" bg-[#f9fafb] rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 p-5  ml-5 ">
              Recent Chat Snippet
            </h3>
            <div className="p-4 space-y-3 -mt-3">
          
              <div className="flex items-start gap-3 ml-2">
                <div className="w-8 h-8 bg-[#3b82f6] rounded-full mt-2 flex items-center justify-center flex-shrink-0">
                  <FaUser  className=" text-white " />
                </div>
                <p className="text-md mt-1 text-[#1f2634] font-medium  dark:text-gray-200 flex-1">
                  User <br />
                  <span className='text-gray-600 text-md font-normal '>Generate homepage content for astrology site - include daily horoscope.</span>
                </p>
              </div>

              <div className="flex items-start gap-3 ml-2">
             <div className="w-8 h-8 bg-black rounded-full mt-2 flex items-center justify-center flex-shrink-0">
                  <FaRobot   className=" text-white " />
                </div> 
                 <p className="text-md mt-1 text-[#1f2634] font-medium  dark:text-gray-200 flex-1">
                  Bot
                   <br />
                  <span className='text-gray-600 text-md font-normal '>
                       Here's a clean homepage layout with sections: Horoscope, Reports, and Gemstones.</span>
                 </p>       
             </div>

          <div className="flex items-start gap-3 ml-2">
               <div className="w-8 h-8 bg-[#3b82f6] rounded-full mt-2 flex items-center justify-center flex-shrink-0">
                  <FaUser  className=" text-white " />
                </div>
                  <p className="text-md mt-1 text-[#1f2634] font-medium  dark:text-gray-200 flex-1">
                  User
                   <br />
                  <span className='text-gray-600 text-md font-normal '>
                       Added healing crystals and remove reports.</span>
                 </p>  
              </div>


           <div className="flex items-start gap-3 ml-2">
               <div className="w-8 h-8 bg-black rounded-full mt-2 flex items-center justify-center flex-shrink-0">
                  <FaRobot  className=" text-white " />
                </div> 
                  <p className="text-md mt-1 text-[#1f2634] font-medium  dark:text-gray-200 flex-1">
                  Bot
                   <br />
                  <span className='text-gray-600 text-md font-normal '>
                      Updated layout: Horoscope + Healing Crystals + Gemstones.</span>
                 </p>  
              </div>
        </div>
          
          </div>


            <Button  onClick={() => navigate("/fullchat")}
              className=" h-12 w-55 mt-2 bg-black text-white text-md">
              View Full Chat History
            </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PromptInteractionsCard;