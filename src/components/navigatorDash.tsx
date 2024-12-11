'use client'
import React from 'react'
import Avatar from './avatar'
import { FaHeart } from 'react-icons/fa'

const NavigatorDash = () => {
  return (
    <div className=' flex flex-row-reverse gap-4 items-center justify-start'>
      <Avatar />
      <div className="w-6 h-6 p-2 bg-yellow-500 rounded-full flex justify-center items-center">
        3
      </div>
      <FaHeart size={24} />
      
    </div>
  )
}

export default NavigatorDash
