import React from 'react'
import Sidebar from '../organisms/Sidebar'
import TransactionDetailsHeader from '../atoms/TransactionDetailsHeader'
import TransactionDetailsCard from '../molecules/TransactionDetailsCard'
import TransactionDetailsActivity from '../organisms/TransactionDetailsActivity'

const TransactionDetails = () => {
  return (
   <div>
               <div className="min-h-screen flex bg-white shadow-md  w-full ">
                   <Sidebar />
                   <div
                       style={{ scrollbarWidth: "none" }}
                       className='h-screen overflow-y-auto mx-auto w-full px-6 ml-18 md:ml-0'>
                       <TransactionDetailsHeader/>
                       <TransactionDetailsCard/>
                       <TransactionDetailsActivity/>
   
   
                   </div>
   
               </div>
           </div>
   
  )
}

export default TransactionDetails
