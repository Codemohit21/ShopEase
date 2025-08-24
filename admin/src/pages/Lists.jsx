

import React, { useContext, useEffect, useState } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'

function Lists() {
  let [list, setList] = useState([])
  let { serverUrl } = useContext(authDataContext)

  const fetchList = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/product/list")
      setList(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  const removeList = async (id) => {
    try {
      let result = await axios.post(`${serverUrl}/api/product/remove/${id}`, {}, { withCredentials: true })
      if (result.data) fetchList()
      else console.log("Failed to remove Product")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-r from-[#f5f7fa] to-[#dfe9f3] text-gray-800'>
      <Nav />
      <div className='flex w-full'>
        <Sidebar />

        <div className='w-[82%] lg:ml-[320px] md:ml-[230px] mt-[70px] flex flex-col gap-6 py-8 px-6 md:px-12'>
          <h1 className='text-3xl md:text-4xl font-bold text-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6'>
            All Listed Products
          </h1>

          {list?.length > 0 ? (
            list.map((item, index) => (
              <div
                key={index}
                className='w-full md:h-[120px] h-[90px] bg-white rounded-xl flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-[30px] p-3 md:p-6 shadow-md hover:shadow-xl transition-transform transform hover:scale-105'
              >
                <img
                  src={item.image1}
                  className='w-full sm:w-[120px] h-[90%] rounded-lg object-cover'
                  alt={item.name}
                />

                <div className='w-full sm:w-[60%] flex flex-col justify-center gap-1 sm:gap-2 text-center sm:text-left'>
                  <div className='text-[#2c3e50] md:text-[20px] text-[16px] font-semibold'>{item.name}</div>
                  <div className='text-[#7f8c8d] md:text-[17px] text-[15px]'>{item.category}</div>
                  <div className='text-[#34495e] md:text-[17px] text-[15px] font-medium'>₹{item.price}</div>
                </div>

                <div className='w-full sm:w-[10%] flex justify-center mt-2 sm:mt-0'>
                  <span
                    className='px-4 py-1 rounded-md cursor-pointer bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold hover:scale-105 transition-transform'
                    onClick={() => removeList(item._id)}
                  >
                    X
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className='text-gray-700 text-lg'>No products available.</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Lists



