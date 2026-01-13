import React from 'react'
// import Sidebar from '../organisms/Sidebar'
import Navbar from '../organisms/Navbar'
import UserCard from '../organisms/UserCard'
import UserGrowthTrend from '../organisms/UserGrowthTrend'
import UserRoleDistribution from '../organisms/UserRoleDistribution'
import TopActiveUsers from '../organisms/TopActiveUsers'
import AverageSessionDuration from '../organisms/AverageSessionDuration'
import QuickActions from '../organisms/QuickActions'
import NewUserAcquisition from '../organisms/NewUserAcquisition '
import UsersDetails from '../organisms/UsersDetails '
import Footer from '../organisms/Footer '
import Sidebar from '../organisms/Sidebar'

const Dashboard = () => {
  return (
    <div>


      <div className="min-h-screen flex bg-[#e9f2fc]  ">

        <Sidebar />
        <div
        style={{ scrollbarWidth: "none" }}
         className='h-screen overflow-y-auto w-full ml-18 md:ml-0 '>
          <Navbar />
          <UserCard />
         


<div className="grid grid-cols-12 gap-4 w-full px-2">
  <div className="col-span-12 md:col-span-8 flex flex-col gap-4 p-2 w-full px-4">
    <UserGrowthTrend />
    <NewUserAcquisition />
    <UsersDetails />
  </div>

  <div className="col-span-12 md:col-span-4 flex flex-col gap-4 p-2 w-full px-4">
    <UserRoleDistribution />
    <TopActiveUsers />
    <AverageSessionDuration />
    <QuickActions />
  </div>
</div>


      <Footer />
        </div>

      </div>
    </div>
  )
}

export default Dashboard