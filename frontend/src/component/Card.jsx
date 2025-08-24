

import React, { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

function Card({ name, image, id, price }) {
    let { currency } = useContext(shopDataContext)
    let navigate = useNavigate()

    return (
        <div 
            className='w-[220px] sm:w-[45%] md:w-[240px] h-[360px] 
                       bg-gradient-to-t from-[#fdfcfb] via-[#f5e0d3] to-[#e2d1c3] 
                       rounded-2xl shadow-lg hover:shadow-xl hover:scale-105
                       flex flex-col cursor-pointer border border-gray-200 transition-all duration-300'
            onClick={() => navigate(`/productdetail/${id}`)}
        >
            {/* Product Image */}
            <div className='w-full h-[60%] overflow-hidden rounded-t-2xl'>
                <img 
                    src={image} 
                    alt={name} 
                    className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-500'
                />
            </div>

            {/* Product Name */}
            <div className='mt-2 px-3 text-gray-800 font-semibold text-md line-clamp-1'>
                {name}
            </div>

            {/* Product Price */}
            <div className='mt-1 px-3 text-gray-600 font-semibold text-sm'>
                {currency} {price}
            </div>

            {/* Add to Cart Button */}
            <button className='mt-3 mx-3 w-[calc(100%-1.5rem)] py-1.5 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 
                               text-white rounded-full text-sm font-semibold transition-all hover:brightness-105'>
                View Product
            </button>
        </div>
    )
}

export default Card
