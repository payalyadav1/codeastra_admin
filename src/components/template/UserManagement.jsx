import React from 'react'
import Sidebar from '../organisms/Sidebar'
import UserManage from '../organisms/UserManage'

const UserManagement = () => {
  return (
    <div>
      <div>
                  <div className="min-h-screen flex bg-white shadow-md   ">
                     <Sidebar />
                       <div   
                          style={{ scrollbarWidth: "none" }}
                           className='h-screen overflow-y-auto w-full ml-18 md:ml-0 '>
                           
                    <UserManage/>
                      </div>
              
                    </div>
                  </div>
    </div>
  )
}

export default UserManagement
