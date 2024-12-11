'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { CiStar } from 'react-icons/ci'
import LayoutPopuler from './populer/layout'
import DetailProduct from './populer/detail'
import LayoutKategori from './kategori/layout'
import DetailKategori from './kategori/detail'
import Popup from './popup'
import useProductModule from '../../product/lib'
import { ImInsertTemplate } from 'react-icons/im'
import useCategoryModule from '../../category/lib/index'

const HomeContent = () => {
  const { useProductList } = useProductModule()
  const { useCategoryList } = useCategoryModule()

  const { data, isFetching, isError, isLoading } = useProductList()
  const { datas } = useCategoryList()
  const [dataFilter, setDataFilter] = useState<any>(null)
  const [dataCategory, setDataCategory] = useState<any>(null)

  const handleClick = (id: number) => {
    const filterData = data?.find((item: any) => item.id === id)
    setDataFilter(filterData)
    setPopup(true)
  }
  const handleCategory = (name: string) => {
    if (name !== 'semua') {
      const dtfiltr = data?.filter((item: any) => item.categoryName === name)
      setDataCategory(dtfiltr)
    } else {
      setDataCategory(data)
    }
  }


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
          {datas &&
            datas?.map((items: any, index: any) => (
              <DetailKategori
                key={index}
                img={items.img}
                name={items.name}
                onclick={() => handleCategory(items.name)}
              />
            ))}
        </LayoutKategori>
      </div>
      <div className='w-full flex flex-col gap-4 text-color-text'>
        <div className='flex justify-between items-center'>
          <h5 className='text-xl font-bold'>Populer</h5>
        </div>
        <LayoutPopuler>
          {dataCategory
            ? dataCategory?.map((item: any, index: number) => (
                <DetailProduct
                  key={index}
                  img={item.image}
                  onclick={() => handleClick(item.id)}
                  price={item.price}
                  title={item.name}
                  rating={item.rating}
                />
              ))
            : data?.map((item: any, index: number) => (
                <DetailProduct
                  key={index}
                  img={item.image}
                  onclick={() => handleClick(item.id)}
                  price={item.price}
                  title={item.name}
                  rating={item.rating}
                />
              ))}
        </LayoutPopuler>
      </div>
      {popup && <Popup exit={() => setPopup(false)} data={dataFilter} />}
    </section>
  )
}

export default HomeContent
