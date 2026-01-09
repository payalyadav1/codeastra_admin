import React from 'react'
import Sidebar from '../organisms/Sidebar'
import UserHeader from '../molecules/UserHeader '
import UserProfileInfo from '../molecules/UserProfileInfo '
import RecentProjects from '../organisms/RecentProjects'
import PlanDetails from '../organisms/PlanDetails '
import PersonalDetails from '../organisms/PersonalDetails '
import AIInsights from '../organisms/AIInsights '
import TransactionHistory from '../organisms/TransactionHistory '
import ActivityFeed from '../organisms/ActivityFeed'

const Management = () => {
  return (
    <div>
   
   
         <div className="flex  min-h-screen bg-[#f9fafb]   ">
   
           <Sidebar />
           <div style={{ scrollbarWidth: "none" }}
            className="flex-1 p-4 md:p-6 h-screen overflow-y-auto ">
             <UserHeader/>
             <UserProfileInfo/>
              <div class="grid grid-cols-12 gap-4 w-full px-2">
               <div class="col-span-8 p-4 ">
               <RecentProjects />
               <TransactionHistory/>
               <ActivityFeed/>
               </div>
   
               <div class="col-span-4  p-4 w-full px-4">
              <PlanDetails/>
              <PersonalDetails/>
              <AIInsights/>
               </div>
             </div>
   
           </div>
   
         </div>
       </div>
  )
}

export default Management
