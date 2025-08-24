

import React from 'react'
import Title from '../component/Title'
import contact from "../assets/contact.jpg"
import NewLetterBox from '../component/NewLetterBox'
import Footer from '../component/Footer'

function Contact() {
  return (
    <div className='w-[99vw] min-h-[100vh] flex items-center justify-center flex-col bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] gap-[60px] pt-[80px]'>

      {/* Title */}
      <Title text1={'CONTACT'} text2={'US'} />

      {/* Card */}
      <div className='w-[95%] lg:w-[80%] flex flex-col lg:flex-row gap-[40px] bg-white border border-gray-200 rounded-2xl shadow-xl p-6'>

        {/* Left Image */}
        <div className='lg:w-[50%] w-[100%] flex items-center justify-center'>
          <img 
            src={contact} 
            alt="contact"  
            className='lg:w-[75%] w-[90%] rounded-xl shadow-md'
          />
        </div>

        {/* Right Info */}
        <div className='lg:w-[50%] w-[100%] flex flex-col gap-[16px]'>
          <h3 className='text-gray-800 font-bold lg:text-[20px] text-[16px]'>Our Store</h3>
          <div className='text-gray-600 md:text-[15px] text-[13px] leading-relaxed'>
            <p>12345 Random Station</p>
            <p>Random City, State, India</p>
          </div>

          <div className='text-gray-600 md:text-[15px] text-[13px] leading-relaxed'>
            <p>Tel: +91-9876543210</p>
            <p>Email: admin@shopease.com</p>
          </div>

          <h3 className='text-gray-800 font-bold lg:text-[20px] text-[16px] mt-[10px]'>Careers at Shopease</h3>
          <p className='text-gray-600 md:text-[15px] text-[13px]'>
            Learn more about our teams and job openings
          </p>

          <button className='px-[25px] py-[12px] text-white bg-pink-500 hover:bg-pink-600 rounded-full transition-all duration-300 active:scale-95 w-fit'>
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Newsletter */}
      <Footer />
    </div>
  )
}

export default Contact
