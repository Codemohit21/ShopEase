

import React from 'react'

function Title({ text1, text2 }) {
  return (
    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900
                   leading-tight'>
      {text1} <span className='text-pink-500'>{text2}</span>
    </h2>
  )
}

export default Title


