


import React, { useEffect, useState } from 'react'
import Backgound from '../component/Backgound'
import Hero from '../component/Hero'
import Product from './Product'
import OurPolicy from '../component/OurPolicy'
import NewLetterBox from '../component/NewLetterBox'
import Footer from '../component/Footer'

function Home() {
  const heroData = [
  { text1: "Upgrade Your Wardrobe Today", text2: "Unmissable Deals!" },
  { text1: "Step Into Trendsetting Fashion", text2: "Shop the Latest!" },
  { text1: "Elevate Your Style Game", text2: "Limited Stock!" },
  { text1: "Discover Fashion That Speaks", text2: "Grab Yours Now!" },
  { text1: "Be Bold, Be Stylish", text2: "New Arrivals Just Dropped!" },
  { text1: "Turn Heads Everywhere You Go", text2: "Shop Top Picks!" },
  { text1: "Your Dream Wardrobe Awaits", text2: "Don’t Miss Out!" }
];


  const [heroCount, setHeroCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount(prev => (prev === heroData.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='overflow-x-hidden relative top-[70px] bg-gray-900 text-gray-200'>
      
      {/* Hero Section */}
      <div className='w-full lg:h-[100vh] md:h-[50vh] sm:h-[30vh] relative bg-gradient-to-l from-gray-900 to-gray-800'>
        <Backgound heroCount={heroCount} />
        <Hero
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          heroData={heroData[heroCount]}
          textColor="text-gray-200" // pass text color if Hero uses it
        />
      </div>

      {/* Products Section */}
      <Product />

      {/* Policies Section */}
      <OurPolicy />

      

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home



