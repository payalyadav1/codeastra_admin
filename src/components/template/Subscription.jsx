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
          className='h-screen overflow-y-auto w-full ml-18 md:ml-0 '>
          <SubscriptionHeader />
          <SubscriptionMetrics />
          <PricingPlans />



          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-6  p-2 w-full px-8 ">
              <ActiveSubscribersChart />
            </div>

            <div className="col-span-12 sm:col-span-6 p-2 w-full px-8">
              <RevenueContributionChart />
            </div>
          </div>


          <PlanActionsBar />

        </div>

      </div>
    </div>
  )
}

export default Subscription
