

import React, { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import Title from './Title'

function CartTotal() {
  const { currency, delivery_fee, getCartAmount } = useContext(shopDataContext)

  return (
    <div className='w-full'>
      {/* Title */}
      <div className='text-xl py-3'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      {/* Totals Box */}
      <div className='flex flex-col gap-3 mt-2 p-5 border-2 border-gray-200 rounded-xl bg-white shadow-md'>
        <div className='flex justify-between text-gray-800 text-base sm:text-lg font-medium'>
          <p>Subtotal</p>
          <p>{currency} {getCartAmount()}.00</p>
        </div>
        <hr className='border-gray-300' />
        <div className='flex justify-between text-gray-800 text-base sm:text-lg font-medium'>
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee}</p>
        </div>
        <hr className='border-gray-300' />
        <div className='flex justify-between text-gray-900 text-base sm:text-lg font-semibold'>
          <p>Total</p>
          <p>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</p>
        </div>
      </div>
    </div>
  )
}

export default CartTotal

