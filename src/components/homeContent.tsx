"use client"
import React from 'react'
import Image from 'next/image'
import { CiStar } from 'react-icons/ci'
import LayoutPopuler from './populer/layout'
import DetailProduct from './populer/detail'
import LayoutKategori from './kategori/layout'
import DetailKategori from './kategori/detail'
import Popup from './popup'

const HomeContent = () => {
    const [popup, setPopup] = React.useState(false)
  return (
    <section className='w-full h-[93.1vh] px-6 pt-2 pb-12 flex flex-col gap-12 overflow-auto scrollbar-hide'>
      <div className='w-full h-36 bg-color-benner-bg rounded-2xl flex px-4 py-12 gap-8 justify-center items-center text-color-benner-primary'>
        <Image
          src='/bener.png'
          alt='benner'
          width={200}
          height={200}
          className=''
        ></Image>
        <div className='flex flex-col'>
          <h4 className='text-3xl font-semibold'>Promo Hari ini</h4>
          <p className='text-xl font-semibold'>Perut kenyang, hati senang</p>
        </div>
      </div>
      <div className='w-full flex flex-col gap-4 text-color-text'>
        <div className='flex justify-between items-center'>
          <h5 className='text-xl font-bold'>Kategori</h5>
          <button className='px-6 py-2 bg-color-benner-primary text-sm text-white rounded-full'>
            Lihat Lengkap
          </button>
        </div>
        <LayoutKategori>
          <DetailKategori />
          <DetailKategori />
          <DetailKategori />
          <DetailKategori />
        </LayoutKategori>
      </div>
      <div className='w-full flex flex-col gap-4 text-color-text'>
        <div className='flex justify-between items-center'>
          <h5 className='text-xl font-bold'>Populer</h5>
        </div>
        <LayoutPopuler>
          <DetailProduct onclick={() => setPopup(true)} />
          <DetailProduct onclick={() => setPopup(true)} />
          <DetailProduct onclick={() => setPopup(true)} />
          <DetailProduct onclick={() => setPopup(true)} />
          <DetailProduct onclick={() => setPopup(true)} />
          <DetailProduct onclick={() => setPopup(true)} />
          <DetailProduct onclick={() => setPopup(true)} />
          <DetailProduct onclick={() => setPopup(true)} />
          <DetailProduct onclick={() => setPopup(true)} />
        </LayoutPopuler>
          </div>
          {popup && <Popup exit={() => setPopup(false)}/>}
    </section>
  )
}

export default HomeContent
