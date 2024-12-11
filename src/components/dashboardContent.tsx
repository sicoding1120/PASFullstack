import React from 'react'
import NavigatorDash from './navigatorDash'

const DashboardContent = () => {
  return (
 <div className='w-1/4 h-full bg-color-dash text-color-text px-4 py-2 flex flex-col gap-8'>
        <NavigatorDash />
        <div className='w-full flex flex-col gap-2'>
          <h3 className='text-xl font-semibold'>pesanan saya</h3>
          <div className='w-full h-36 bg-indigo-500 rounded-xl text-white p-3 flex flex-col gap-4 font-semibold'>
            <p className='' id='name'>
              Daffa hafizh firdaus
            </p>
            <p className='' id='saldo'>
              Rp. 3000000
            </p>
            <p className='' id='no rek'>
              8172933647642
            </p>
          </div>
        </div>
        <div className='w-full'>
          <div className='w-full flex justify-between'>
            <p className='text-xl '>🚗</p>
            <h4 className='font-bold'>Jonggol,Bogor</h4>
            <p className='text-slate-400 text-sm'>gratis</p>
          </div>
          <div className='py-6'></div>
          <div className='flex flex-col gap-6'>
            <div className='flex justify-between px-2 font-semibold'>
              <h5>total : </h5>
              <div className=''>Rp. 0</div>
            </div>
            <button className=' w-full bg-yellow-500 py-2 rounded-lg font-semibold'>
              pesan
            </button>
          </div>
        </div>
      </div>
  )
}

export default DashboardContent