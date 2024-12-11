import React from 'react'
import { CiSearch } from 'react-icons/ci'

const InputSearch = () => {
  return (
    <div className='w-full p-2 flex gap-2 bg-color-dash rounded-md items-center'>
          <CiSearch size={20} />
          <input type="text" className='w-full bg-color-dash outline-none' placeholder='cari makan bang ?'/>
    </div>
  )
}

export default InputSearch
