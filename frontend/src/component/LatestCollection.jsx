


import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'
import Card from './Card'

function LatestCollection() {
    let { products } = useContext(shopDataContext)
    let [latestProducts, setLatestProducts] = useState([])

    useEffect(() => {
        setLatestProducts(products.slice(0, 8));
    }, [products])

    return (
        <div className="w-full flex flex-col items-center py-10">
            <div className='text-center mb-10'>
                {/* Heading */}
                <Title text1="SEASON’S" text2="HIGHLIGHTS" />
                
                <p className='mt-4 text-gray-700 text-[15px] md:text-[18px] lg:text-[20px] max-w-[600px] mx-auto leading-relaxed'>
  Step Up Your Style Game – <span className='text-pink-500 font-semibold'>New Collection</span> Is Here!
</p>

            </div>

            {/* Cards */}
            <div className='w-full flex flex-wrap justify-center gap-8 px-4 md:px-10'>
                {latestProducts.map((item, index) => (
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

export default LatestCollection

