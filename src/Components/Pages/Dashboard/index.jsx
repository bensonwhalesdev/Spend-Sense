import React from 'react'
import Sidebar from './Sidebar'
import HeaderBar from './HeaderBar'
import BudgetTable from './BudgetTable'
import SummaryPanel from './SummaryPanel'
import 'animate.css'

const Dashboard = () => {
  return (
    <div className='relative '>
      <div className="flex md:flex-row min-h-screen left-0 w-full z-10 ">
      <Sidebar />
      <div className="flex-1 bg-gray-50"> 
        <HeaderBar />
        <div className="flex flex-col lg:flex-row gap-4 p-1 animate__animated animate__fadeInUp">
          <div className="flex-1">
            <BudgetTable />
          </div>
          <div className="w-full lg:w-1/3">
            <SummaryPanel />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
