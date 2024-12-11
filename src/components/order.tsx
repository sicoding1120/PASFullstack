import React from 'react'
import Image from 'next/image'

interface OrderProps {
  img: string
  jmlOrder: number
  orderName: string
  price: number
}

const OrderDetail = ({ img, jmlOrder, price, orderName }: OrderProps) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex gap-4 items-center font-semibold'>
        <Image
          src={img}
          alt=''
          width={30}
          height={30}
          className='w-8 h-8 rounded-md'
        />
        <p>{jmlOrder}</p>
        <p>x</p>
      </div>
      <p className='font-semibold'>{orderName}</p>
      <p className='font-semibold'>Rp. {price}</p>
    </div>
  )
}

export default OrderDetail
