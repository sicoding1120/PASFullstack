import React from 'react'
import Image from 'next/image'
import { CiStar } from 'react-icons/ci'

const DetailProduct = ({onclick, price,title,rating, img }: { onclick?:any,price:number, title:string, rating:number , img:string}) => {
  return (
    <div className='w-full  flex flex-col gap-2' onClick={onclick}>
      <Image
        src={img}
        alt=''
        width={320}
        height={155}
        className='w-full h-60 rounded-xl'
      />
      <div className='flex flex-col gap-1'>
        <h2 className='text-2xl font-bold capitalize'>{title}</h2>
        <div className='flex gap-12 items-center'>
          <div className='flex items-center gap-2'>
            <CiStar size={24} />
            <p>{rating}</p>
          </div>
          <p className='text-lg font-semibold'>Rp.{price}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailProduct
