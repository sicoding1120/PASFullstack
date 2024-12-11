import React from 'react'

const LayoutPopuler = ({ children}: { children: React.ReactNode }) => {
  return (
      <div className='w-full grid grid-cols-3 gap-4'>
          {children}
    </div>

  )
}

export default LayoutPopuler