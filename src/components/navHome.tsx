import React from 'react'
import { IoMdMenu } from 'react-icons/io'
import InputSearch from './inputSearch'

const NavHome = () => {
  return (
      <div className='w-full flex gap-6 items-center px-6 text-color-text py-2'>
          <IoMdMenu size={26}/>
          <h1 className='text-xl font-bold'>MyKantin</h1>
          <InputSearch/>
    </div>
  )
}

export default NavHome