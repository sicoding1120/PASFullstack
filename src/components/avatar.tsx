import Image from 'next/image'
import React from 'react'

const Avatar = () => {
  return (
    <div className='avatar'>
      <div className='w-10 rounded-full'>
        <Image src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' alt='avatar' width={24} height={24} />
      </div>
    </div>
  )
}

export default Avatar
