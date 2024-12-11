import React, { useEffect } from 'react'
import DetailProduct from './populer/detail'
import { FaX } from 'react-icons/fa6'

const Popup = ({ exit, data }: { exit: any; data: any }) => {
  const [count, setCount] = React.useState(1)
  if (count <= 0) setCount(1)

  const handleOrder = () => {
    console.log(data)
    const dlcls = localStorage.getItem('order')
    console.log(JSON.parse(dlcls as never))
    if (!dlcls) {
      localStorage.setItem(
        'order',
        JSON.stringify([{ data, count, total: data.price * count }])
      )
    } else {
      localStorage.setItem(
        'order',
        JSON.stringify([
          ...JSON?.parse(dlcls as never),
          { data, count, total: data.price * count }
        ])
      )
    }
    window.location.reload()
  }

  return (
    <div className='md:w-[86.375rem] md:h-[40.6rem] absolute z-[29] p-24 text-color-text flex justify-center items-center'>
      <div className='w-[500px]  bg-white p-4 rounded-xl shadow-2xl'>
        <div
          className='w-8 h-8 flex justify-center items-center pb-2'
          onClick={exit}
        >
          <FaX size={20} />
        </div>
        <DetailProduct
          img={data?.image}
          price={data?.price}
          title={data?.name}
          rating={data?.rating}
        />
        <p className='mt-2 font-semibold'>total : Rp.{data?.price * count}</p>
        <div className='flex justify-between items-end'>
          <p>stock : {data?.stock}</p>
          <div className='flex gap-4'>
            <div className='flex gap-4 items-center text-white'>
              <div
                onClick={() => setCount(count - 1)}
                className='cursor-pointer w-10 h-8 rounded-full bg-color-benner-primary flex justify-center items-center text-2xl'
              >
                -
              </div>
              <p className='text-color-text'>{count}</p>
              <div
                onClick={() => setCount(count + 1)}
                className=' cursor-pointer w-10 h-8 rounded-full bg-color-benner-primary  flex justify-center items-center text-xl'
              >
                +
              </div>
            </div>
            <button
              onClick={handleOrder}
              className='w-24 py-2 px-4 bg-color-benner-primary rounded-xl text-white'
            >
              pesan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup
