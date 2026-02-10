import React from 'react'
import AdminProfileHeader from '../atoms/AdminprofileHeader'
import Sidebar from '../organisms/Sidebar'
import AdminProfileCard from '../molecules/AdminProfileCard'
import AdminProfileDetails from '../organisms/AdminProfileDetails'
import DangerZone from '../organisms/DangerZone'

const Adrninprofile = () => {
    
    return (
        <div>


            <div className="min-h-screen flex bg-white ">

                <Sidebar />
                <div
                    style={{ scrollbarWidth: "none" }}
                    className='h-screen overflow-y-auto w-full ml-18 md:ml-0 '>
                    <AdminProfileHeader />
                    <div className='px-6'>
                        <AdminProfileCard />
                        <AdminProfileDetails />
                        <DangerZone/>
                    </div>




                </div>

            </div>
        </div>
    )
}

export default Adrninprofile
