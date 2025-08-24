

import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'
import Card from './Card'

function BestSeller() {
    let { products } = useContext(shopDataContext)
    let [bestSeller, setBestSeller] = useState([])

    useEffect(() => {
        let filterProduct = products.filter(item => item.bestseller)
        setBestSeller(filterProduct.slice(0, 4))
    }, [products])

    return (
        <div className="w-full flex flex-col items-center py-10">
            {/* Heading */}
            <div className='text-center mb-6'>
                <Title text1="CUSTOMER" text2="FAVOURITE" /> 
{/* Subtext with premium accent */}
<p className='mt-4 text-[15px] md:text-[18px] lg:text-[20px] max-w-[600px] mx-auto leading-relaxed'>
  <span className='text-black'>Tried, Trusted, </span>
  <span className='text-pink-500 font-semibold'>Adored</span>
  <span className='text-black'> – Explore Our Customer Favorites.</span>
</p>


            </div>

            {/* Cards */}
            <div className='w-full flex flex-wrap justify-center gap-8 px-4 md:px-10'>
                {bestSeller.map((item, index) => (
                    <Card 
                        key={index} 
                        name={item.name} 
                        image={item.image1} 
                        id={item._id} 
                        price={item.price} 
                        theme="light"
                    />
                ))}
            </div>
        </div>
    )
}

export default BestSeller


