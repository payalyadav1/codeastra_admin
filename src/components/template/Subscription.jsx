import React from 'react'
import SubscriptionHeader from '../atoms/SubscriptionHeader'
import Sidebar from '../organisms/Sidebar'
import SubscriptionMetrics from '../molecules/SubscriptionMetrics'
import PricingPlans from '../organisms/PricingPlans'
import ActiveSubscribersChart from '../organisms/ActiveSubscribersChart'
import RevenueContributionChart from '../organisms/RevenueContributionChart'
import PlanActionsBar from '../organisms/PlanActionsBar '

const Subscription = () => {
  return (
     <div>
        <div className="min-h-screen flex bg-white shadow-md   ">
           <Sidebar />
             <div   
                style={{ scrollbarWidth: "none" }}
                 className='h-screen overflow-y-auto '>
                  <SubscriptionHeader/>
                  <SubscriptionMetrics/>
                  <PricingPlans/>

              <div class="grid grid-cols-12 gap-4">
                <div class="col-span-6 p-4">
                 <ActiveSubscribersChart/>
                </div>
    
                <div class="col-span-6  p-4">
                  <RevenueContributionChart/>
                </div>
              </div>
    
    <PlanActionsBar/>
          
            </div>
    
          </div>
        </div>
  )
}

export default Subscription
