import React from 'react'
import Sidebar from '../organisms/Sidebar'
import HistoryHeader from '../atoms/HistoryHeader'
import FiltersBar from '../molecules/FiltersBar'
import StatsCards from '../molecules/StatsCards'
import TransactionCardsPage from '../organisms/TransactionCardsPage'

const History = () => {
  return (
      <div>
                <div className="min-h-screen flex bg-white shadow-md  w-full ">
                    <Sidebar />
                    <div
                        style={{ scrollbarWidth: "none" }}
                        className='h-screen overflow-y-auto mx-auto w-full px-6 ml-18 md:ml-0'>
                        <HistoryHeader />
                        <FiltersBar/>
                       
                       <StatsCards  />
    
    <TransactionCardsPage/>
                    </div>
    
                </div>
            </div>
  )
}

export default History
