import React from 'react'

const LayoutKategori = ({ children }: { children: React.ReactNode }) => {
  return <div className='w-full grid grid-cols-4 gap-4'>{children}</div>
}

export default LayoutKategori
