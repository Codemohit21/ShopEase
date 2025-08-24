

import React from 'react'
import { FaCircle } from "react-icons/fa";

function Hero({ heroData, heroCount, setHeroCount }) {
  return (
    <div className="w-[40%] h-[100%] relative">
      {/* Hero Text */}
      <div className="absolute md:left-[10%] left-[10%] md:top-[90px] lg:top-[130px] top-[10px]">
        {/* Main Heading */}
        <p className="text-[#fdfcfb] text-[22px] md:text-[42px] lg:text-[58px] font-bold tracking-tight drop-shadow-lg">
          {heroData.text1}
        </p>
        {/* Sub Heading with Gradient Accent */}
        <p className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold text-[20px] md:text-[38px] lg:text-[52px] tracking-tight">
          {heroData.text2}
        </p>
      </div>

      {/* Slider Dots */}
      <div className="absolute md:top-[400px] lg:top-[500px] top-[160px] left-[10%] flex items-center justify-center gap-[10px]">
        <FaCircle
          className={`w-[14px] cursor-pointer ${heroCount === 0 ? "fill-pink-500" : "fill-gray-300"}`}
          onClick={() => setHeroCount(0)}
        />
        <FaCircle
          className={`w-[14px] cursor-pointer ${heroCount === 1 ? "fill-pink-500" : "fill-gray-300"}`}
          onClick={() => setHeroCount(1)}
        />
        <FaCircle
          className={`w-[14px] cursor-pointer ${heroCount === 2 ? "fill-pink-500" : "fill-gray-300"}`}
          onClick={() => setHeroCount(2)}
        />
        <FaCircle
          className={`w-[14px] cursor-pointer ${heroCount === 3 ? "fill-pink-500" : "fill-gray-300"}`}
          onClick={() => setHeroCount(3)}
        />
        <FaCircle
          className={`w-[14px] cursor-pointer ${heroCount === 4 ? "fill-pink-500" : "fill-gray-300"}`}
          onClick={() => setHeroCount(3)}
        />
        <FaCircle
          className={`w-[14px] cursor-pointer ${heroCount === 5 ? "fill-pink-500" : "fill-gray-300"}`}
          onClick={() => setHeroCount(3)}
        />
        <FaCircle
          className={`w-[14px] cursor-pointer ${heroCount === 6 ? "fill-pink-500" : "fill-gray-300"}`}
          onClick={() => setHeroCount(3)}
        />
      </div>
    </div>
  );
}

export default Hero;
