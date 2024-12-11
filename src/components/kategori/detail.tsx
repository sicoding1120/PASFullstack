import React from 'react'
import Image from 'next/image'

interface DetailKategoryProps {
  img: string
  name: string
  onclick: () => number | any | void
}

const DetailKategori = ({ img, name , onclick }: DetailKategoryProps) => {
  return (
    <div
      className='w-full h-[150px] rounded-2xl overflow-hidden cursor-pointer'
      onClick={onclick}
    >
      <div className='w-full h-[150px] bg-black/20 relative z-[10] text-white  flex justify-center items-center text-xl font-semibold'>
        {name}
      </div>
      <Image
        src={img}
        alt=''
        width={250}
        height={155}
        className=' relative bottom-[150px] h-[150px]'
      />
    </div>
  )
}

export default DetailKategori
