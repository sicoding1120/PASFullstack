import React from 'react'
import Image from 'next/image'
import { CiStar } from 'react-icons/ci'

const DetailProduct = ({onclick }: { onclick?:any}) => {
  return (
    <div className='w-full  flex flex-col gap-2' onClick={onclick}>
      <Image
        src={''}
        alt=''
        width={320}
        height={155}
        className='w-full h-full'
      />
      <div className='flex flex-col gap-1'>
        <h2 className='text-2xl font-bold capitalize'>chess2</h2>
        <div className='flex gap-12 items-center'>
          <div className='flex items-center gap-2'>
            <CiStar size={24} />
            4.7
          </div>
          <p className='text-lg font-semibold'>Rp.20000</p>
        </div>
      </div>
    </div>
  )
}

export default DetailProduct
