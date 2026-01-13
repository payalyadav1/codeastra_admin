import React from 'react'
import Sidebar from '../organisms/Sidebar'
import CreatedProjects from '../organisms/CreatedProjects'

const Projects = () => {
  return (
      <div>
            <div className="min-h-screen flex bg-white shadow-md   ">
               <Sidebar />
                 <div   
                    style={{ scrollbarWidth: "none" }}
                     className='h-screen overflow-y-auto w-full ml-18 md:ml-0 '>
                     
              <CreatedProjects/>
                </div>
        
              </div>
            </div>
  )
}

export default Projects
