import React from 'react'
import Sidebar from '../organisms/Sidebar'
import ProjectHeader from '../atoms/ProjectHeader '
import ProjectOverviewCard from '../molecules/ProjectOverviewCard'
import PromptInteractionsCard from '../organisms/PromptInteractionsCard'
import ModificationLog from '../organisms/ModificationLog '
import AdditionalMetrics from '../organisms/AdditionalMetrics '

const Builder = () => {
    return (
        <div>
            <div className="min-h-screen flex bg-white shadow-md  w-full ">
                <Sidebar />
                <div
                    style={{ scrollbarWidth: "none" }}
                    className='h-screen overflow-y-auto mx-auto w-full px-6 ml-18 md:ml-0'>
                    <ProjectHeader />
                    <ProjectOverviewCard />
                    <PromptInteractionsCard />
                    <ModificationLog  />
                    <AdditionalMetrics />


                </div>

            </div>
        </div>
    )
}

export default Builder
