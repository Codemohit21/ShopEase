


import React from 'react'
import LatestCollection from '../component/LatestCollection'
import BestSeller from '../component/BestSeller'

function Product() {
  return (
    <div className='w-full min-h-[100vh] bg-gradient-to-t from-[#fdfcfb] to-[#e2d1c3] flex flex-col items-center py-10 gap-16'>
        <LatestCollection />
        <BestSeller />
    </div>
  )
}

export default Product
