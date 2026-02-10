import React from 'react'
import Sidebar from '../organisms/Sidebar'
import ChatHeader from '../atoms/ChatHeader'
import ChatStatsCards from '../molecules/ChatStatsCards'
import ChatHistoryPage from '../organisms/ChatHistoryPage'
import PromptDetailsCard from '../organisms/PromptDetailsCard'
import ChatFooter from '../organisms/ChatFooter'

const FullChatHistory = () => {
  return (
    <div>
      <div className="min-h-screen flex bg-[#f8f9fb] shadow-md  w-full ">
        <Sidebar />
        <div
          style={{ scrollbarWidth: "none" }}
          className='h-screen overflow-y-auto mx-auto w-full px-0 py-2 ml-18 md:ml-0'
        >
          <ChatHeader />
          <ChatStatsCards />

          <div className="grid grid-cols-1  w-full  sm:grid-cols-4">

            <div className=" sm:col-span-3 px-8 ">
              <ChatHistoryPage />
            </div>

            {/* <PromptDetailsCard /> */}
            

          </div>

          <ChatFooter />
        </div>

      </div>
    </div>
  )
}

export default FullChatHistory


