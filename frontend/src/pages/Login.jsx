// import React from 'react'
// import Logo from "../assets/logo.png"
// import { useNavigate } from 'react-router-dom'
// import google from '../assets/google.png'
// import { IoEyeOutline } from "react-icons/io5";
// import { IoEye } from "react-icons/io5";
// import { useState } from 'react';
// import { useContext } from 'react';
// import { authDataContext } from '../context/authContext';
// import axios from 'axios';
// import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from '../../utils/Firebase';
// import { userDataContext } from '../context/UserContext';
// import Loading from '../component/Loading';

// function Login() {
//     let [show,setShow] = useState(false)
//         let [email,setEmail] = useState("")
//         let [password,setPassword] = useState("")
//         let {serverUrl} = useContext(authDataContext)
//         let {getCurrentUser} = useContext(userDataContext)
//         let [loading,setLoading] = useState(false)

//     let navigate = useNavigate()

//     const handleLogin = async (e) => {
//         setLoading(true)
//         e.preventDefault()
//         try {
//             let result = await axios.post(serverUrl + '/api/auth/login',{
//                 email,password
//             },{withCredentials:true})
//             console.log(result.data)
//             setLoading(false)
//             getCurrentUser()
//             navigate("/")
//             toast.success("User Login Successful")
            
//         } catch (error) {
//             console.log(error)
//             toast.error("User Login Failed")
//         }
//     }
//      const googlelogin = async () => {
//             try {
//                 const response = await signInWithPopup(auth , provider)
//                 let user = response.user
//                 let name = user.displayName;
//                 let email = user.email
    
//                 const result = await axios.post(serverUrl + "/api/auth/googlelogin" ,{name , email} , {withCredentials:true})
//                 console.log(result.data)
//                 getCurrentUser()
//             navigate("/")
    
//             } catch (error) {
//                 console.log(error)
//             }
            
//         }
//   return (
//     <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start'>
//     <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer' onClick={()=>navigate("/")}>
//     <img className='w-[40px]' src={Logo} alt="" />
//     <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide drop-shadow-md">
//   ShopEase
// </h1>

//     </div>

//     <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
//         <span className='text-[25px] font-semibold'>Login Page</span>
//         <span className='text-[16px]'>Welcome to ShopEase, Place your order</span>

//     </div>
//     <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center '>
//         <form action="" onSubmit={handleLogin} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>
//             <div className='w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer' onClick={googlelogin}>
//                 <img src={google} alt="" className='w-[20px]'/> Login account with Google
//             </div>
//             <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px]'>
//              <div className='w-[40%] h-[1px] bg-[#96969635]'></div> OR <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
//             </div>
//             <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px]  relative'>
              
//                  <input type="text" className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Email' required  onChange={(e)=>setEmail(e.target.value)} value={email}/>
//                   <input type={show?"text":"password"} className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Password' required onChange={(e)=>setPassword(e.target.value)} value={password}/>
//                   {!show && <IoEyeOutline className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[57%]' onClick={()=>setShow(prev => !prev)}/>}
//                   {show && <IoEye className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[57%]' onClick={()=>setShow(prev => !prev)}/>}
//                   <button className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold'>{loading? <Loading/> : "Login"}</button>
//                   <p className='flex  gap-[10px]'>You haven't any account? <span className='text-[#5555f6cf] text-[17px] font-semibold cursor-pointer' onClick={()=>navigate("/signup")}>Create New Account</span></p>
//             </div>
//         </form>
//     </div>
//     </div>
//   )
// }

// export default Login


/////////////////ui2.........................//////////////////////////////////////

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEye } from "react-icons/io5";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/Firebase";
import { authDataContext } from "../context/authContext";
import { userDataContext } from "../context/UserContext";
import Loading from "../component/Loading";
import { toast } from "react-toastify";

import Logo from "../assets/logo.png";
import google from "../assets/google.png";

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { serverUrl } = useContext(authDataContext);
  const { getCurrentUser } = useContext(userDataContext);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      let result = await axios.post(
        serverUrl + "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      console.log(result.data);
      setLoading(false);
      getCurrentUser();
      navigate("/");
      toast.success("User Login Successful");
    } catch (error) {
      console.log(error);
      toast.error("User Login Failed");
    }
  };

  const googlelogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      let user = response.user;
      let name = user.displayName;
      let email = user.email;

      const result = await axios.post(
        serverUrl + "/api/auth/googlelogin",
        { name, email },
        { withCredentials: true }
      );
      console.log(result.data);
      getCurrentUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3] flex flex-col items-center justify-start text-gray-800">
      {/* Header */}
      <div
        className="w-full h-20 flex items-center justify-start px-8 gap-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="w-10 rounded-full shadow-md" src={Logo} alt="" />
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide drop-shadow-md">
          ShopEase
        </h1>
      </div>

      {/* Welcome Section */}
      <div className="w-full text-center mt-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Login to Your Account
        </h2>
        <p className="text-gray-500 mt-1 text-sm">
          Discover exclusive clothing & styles with ShopEase
        </p>
      </div>

      {/* Card */}
      <div className="max-w-md w-[90%] mt-8 bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center gap-6"
        >
          {/* Google Login */}
          <div
            className="w-full h-12 bg-gray-100 text-gray-700 font-medium rounded-full flex items-center justify-center gap-3 shadow-sm hover:bg-gray-200 transition cursor-pointer"
            onClick={googlelogin}
          >
            <img src={google} alt="Google" className="w-5" />
            Continue with Google
          </div>

          {/* OR Divider */}
          <div className="flex items-center w-full gap-3 text-gray-400 text-sm">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span>OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Inputs */}
          <div className="w-full relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-12 rounded-full border border-gray-300 px-5 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="w-full relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              className="w-full h-12 rounded-full border border-gray-300 px-5 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {!show ? (
              <IoEyeOutline
                className="absolute right-4 top-3.5 w-6 h-6 text-gray-400 cursor-pointer"
                onClick={() => setShow((prev) => !prev)}
              />
            ) : (
              <IoEye
                className="absolute right-4 top-3.5 w-6 h-6 text-gray-400 cursor-pointer"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
          </div>

          {/* Login Button */}
          <button className="w-full h-12 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-lg font-semibold shadow-md transition">
            {loading ? <Loading /> : "Login"}
          </button>

          {/* Signup Link */}
          <p className="text-gray-500 text-sm">
            Don’t have an account?{" "}
            <span
              className="text-pink-500 font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/signup")}
            >
              Create one
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
