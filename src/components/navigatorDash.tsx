'use client'
import React, { useEffect, useState } from 'react'
import Avatar from './avatar'
import { FaHeart } from 'react-icons/fa'

const NavigatorDash = () => {
  const [dt, setdt]  = useState<any[]>()
  useEffect(() => {
    const dtlcl = localStorage.getItem('order')
    if (dtlcl) {
      setdt(JSON.parse(dtlcl))
    }
  },[])
  return (
    <div className=' flex flex-row-reverse gap-4 items-center justify-start'>
      <Avatar />
      <div className="w-6 h-6 p-2 bg-yellow-500 rounded-full flex justify-center items-center">
        {dt?.length || 0}
      </div>
      <FaHeart size={24} />

    </div>
  )
}

export default NavigatorDash
