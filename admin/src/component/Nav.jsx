

import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png"
import axios from 'axios'
import { authDataContext } from '../context/AuthContext'
import { adminDataContext } from '../context/AdminContext'
import { toast } from 'react-toastify'

function Nav() {
  const navigate = useNavigate()
  const { serverUrl } = useContext(authDataContext)
  const { getAdmin } = useContext(adminDataContext)

  const logOut = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/auth/logout`, { withCredentials: true })
      console.log(result.data)
      toast.success("LogOut Successfully")
      getAdmin()
      navigate("/login")
    } catch (error) {
      console.log(error)
      toast.error("LogOut Failed")
    }
  }

  return (
    <div className='w-full h-16 md:h-20 bg-gradient-to-r from-[#f5f7fa] to-[#dfe9f3] z-10 fixed top-0 flex items-center justify-between px-6 md:px-12 shadow-lg backdrop-blur-sm'>

      {/* Logo */}
      <div className='flex items-center gap-3 cursor-pointer' onClick={() => navigate("/")}>
        <img src={logo} alt="OneCart Logo" className='w-10 md:w-12' />
        <h1 className='text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500'>
          ShopEase
        </h1>
      </div>


      {/* Logout Button */}
      <button
        className="px-5 py-2 rounded-2xl font-semibold text-white 
             bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 
             hover:scale-105 transform transition-all duration-300 
             shadow-lg shadow-purple-400/50 
             backdrop-blur-md border border-white/20"
        onClick={logOut}
      >
        LogOut
      </button>

    </div>
  )
}

export default Nav

