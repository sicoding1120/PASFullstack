import DashboardContent from '@/components/dashboardContent'
import HomeContent from '@/components/homeContent'
import NavHome from '@/components/navHome'
import React from 'react'

const DashboardLayout = () => {
  return (
    <section className='w-full h-screen flex '>
      <div className='w-3/4 h-full bg-white  flex flex-col gap-4'>
        <NavHome />
        <HomeContent/>
      </div>
     <DashboardContent/>
    </section>
  )
}

export default DashboardLayout
