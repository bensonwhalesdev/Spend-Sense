import React from 'react'
import Header from '../../LandingPage/Header'
import Sidebar from './Sidebar'
import HeaderBar from './HeaderBar'
import BudgetTable from './BudgetTable'
import SummaryPanel from './SummaryPanel'

const Dashboard = () => {
  return (
    <div>
        
        <HeaderBar />
       <div className='flex'>
         <Sidebar />
        <BudgetTable />
        <SummaryPanel />
       </div>
    </div>
  )
}

export default Dashboard