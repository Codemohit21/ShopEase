


import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import { IoEyeOutline, IoEye } from "react-icons/io5";
import axios from 'axios'
import { authDataContext } from '../context/AuthContext';
import { adminDataContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { serverUrl } = useContext(authDataContext)
  const { getAdmin } = useContext(adminDataContext)
  const navigate = useNavigate()

  const AdminLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await axios.post(serverUrl + '/api/auth/adminlogin', { email, password }, { withCredentials: true })
      toast.success("Admin Login Successfully")
      getAdmin()
      navigate("/")
      setLoading(false)
    } catch (error) {
      console.log(error)
      toast.error("Admin Login Failed")
      setLoading(false)
    }
  }

  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex flex-col items-center justify-start'>
      
      {/* Logo */}
      <div className='w-full h-[80px] flex items-center justify-start px-8 gap-3 cursor-pointer'>
        <img className='w-[40px]' src={logo} alt="logo" />
        <h1 className='text-[24px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500'>OneCart</h1>
      </div>

      {/* Page title */}
      <div className='w-full h-[100px] flex flex-col items-center justify-center gap-2'>
        <span className='text-[28px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500'>Admin Login</span>
        <span className='text-[16px] text-gray-300'>Welcome to OneCart, please login</span>
      </div>

      {/* Form container */}
      <div className='max-w-[600px] w-[90%] bg-black/30 backdrop-blur-md border border-gray-400/30 rounded-2xl shadow-lg flex items-center justify-center py-12'>
        <form className='w-[90%] flex flex-col gap-6' onSubmit={AdminLogin}>
          
          <input
            type="text"
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='w-full h-[50px] px-5 rounded-lg bg-white/10 border border-gray-400/50 placeholder-gray-200 text-white font-semibold focus:ring-2 focus:ring-blue-400 outline-none'
            required
          />

          <div className='relative w-full'>
            <input
              type={show ? "text" : "password"}
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              className='w-full h-[50px] px-5 rounded-lg bg-white/10 border border-gray-400/50 placeholder-gray-200 text-white font-semibold focus:ring-2 focus:ring-blue-400 outline-none'
              required
            />
            {!show && <IoEyeOutline onClick={() => setShow(true)} className='absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 cursor-pointer text-gray-200' />}
            {show && <IoEye onClick={() => setShow(false)} className='absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 cursor-pointer text-gray-200' />}
          </div>

          <button
            type='submit'
            className='w-full h-[50px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:scale-105 transition-transform'
          >
            {loading ? "Loading..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login


