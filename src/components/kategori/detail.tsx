import React from 'react'
import Image from 'next/image'


const DetailKategori = () => {
  return (
<div className='w-full h-[150px] rounded-2xl overflow-hidden'>
  <div className='w-full h-[150px] bg-black/10 relative z-[10] text-white  flex justify-center items-center text-xl font-semibold'>
    Semua
  </div>
  <Image
    src={''}
    alt=''
    width={250}
    height={155}
    className=' relative bottom-[150px] h-[150px]'
  />
</div>
  )
}

export default DetailKategori