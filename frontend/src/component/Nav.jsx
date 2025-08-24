

import React, { useContext, useState } from 'react';
import logo from '../assets/logo.png';
import { IoSearchCircleOutline, IoSearchCircleSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { HiOutlineCollection } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userDataContext } from '../context/UserContext';
import { authDataContext } from '../context/authContext';
import { shopDataContext } from '../context/ShopContext';

function Nav() {
  const { userData, setUserData } = useContext(userDataContext);
  const { serverUrl } = useContext(authDataContext);
  const { showSearch, setShowSearch, search, setSearch, getCartCount } = useContext(shopDataContext);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get(`${serverUrl}/api/auth/logout`, { withCredentials: true });
      setUserData(null);
      setShowProfile(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-full fixed top-0 z-20 bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] shadow-md'>
      <div className='max-w-[1200px] mx-auto h-[70px] flex items-center justify-between px-5 md:px-10'>

        {/* Logo */}
        <div className='flex items-center gap-3'>
          <img src={logo} alt="ShopEase" className='w-14' />
         <h1 className='text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500'>ShopEase</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex gap-4 text-gray-800'>
          <li className='px-4 py-2 rounded-full font-semibold hover:bg-pink-500 hover:text-white cursor-pointer' onClick={()=>navigate("/")}>HOME</li>
          <li className='px-4 py-2 rounded-full font-semibold hover:bg-pink-500 hover:text-white cursor-pointer' onClick={()=>navigate("/collection")}>PRODUCTS</li>
          <li className='px-4 py-2 rounded-full font-semibold hover:bg-pink-500 hover:text-white cursor-pointer' onClick={()=>navigate("/about")}>ABOUT</li>
          <li className='px-4 py-2 rounded-full font-semibold hover:bg-pink-500 hover:text-white cursor-pointer' onClick={()=>navigate("/contact")}>CONTACT</li>
        </ul>

        {/* Icons */}
        <div className='flex items-center gap-4 relative'>

          {/* Search */}
          {!showSearch 
            ? <IoSearchCircleOutline className='w-9 h-9 text-gray-800 cursor-pointer' onClick={()=>{setShowSearch(true); navigate("/collection")}} />
            : <IoSearchCircleSharp className='w-9 h-9 text-gray-800 cursor-pointer' onClick={()=>setShowSearch(false)} />
          }

          {/* Profile */}
          <div className='relative'>
            {!userData 
              ? <FaCircleUser className='w-7 h-7 text-gray-800 cursor-pointer' onClick={()=>setShowProfile(prev=>!prev)} />
              : <div className='w-8 h-8 bg-white text-gray-800 rounded-full flex items-center justify-center cursor-pointer shadow-md' onClick={()=>setShowProfile(prev=>!prev)}>
                  {userData?.name[0]}
                </div>
            }

            {/* Profile Dropdown */}
            {showProfile && (
              <div className='absolute top-full right-0 mt-2 w-52 bg-white shadow-xl rounded-2xl z-30 border border-gray-200'>
                <ul className='flex flex-col text-gray-800'>
                  {!userData && <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={()=>{navigate("/login"); setShowProfile(false)}}>Login</li>}
                  {userData && <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={handleLogout}>Logout</li>}
                  <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={()=>{navigate("/order"); setShowProfile(false)}}>Orders</li>
                  <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={()=>{navigate("/about"); setShowProfile(false)}}>About</li>
                </ul>
              </div>
            )}
          </div>

          {/* Desktop Cart */}
          <div className='relative hidden md:block cursor-pointer' onClick={()=>navigate("/cart")}>
            <MdOutlineShoppingCart className='w-8 h-8 text-gray-800' />
            {getCartCount() > 0 && (
              <span className='absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-pink-500 text-white text-[10px] font-semibold rounded-full shadow-md'>
                {getCartCount()}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className='w-full bg-white shadow-md py-3 flex justify-center'>
          <input 
            type="text" 
            placeholder="Search Here" 
            value={search} 
            onChange={e=>setSearch(e.target.value)} 
            className='w-4/5 md:w-1/2 px-5 py-3 rounded-full border border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-pink-500 outline-none bg-white'
          />
        </div>
      )}

      {/* Mobile Bottom Nav */}
      <div className='md:hidden fixed bottom-0 left-0 w-full bg-white flex justify-around items-center h-[70px] shadow-t border-t border-gray-200 text-gray-800'>
        <button className='flex flex-col items-center justify-center cursor-pointer' onClick={()=>navigate("/")}>
          <IoMdHome className='w-7 h-7' /> Home
        </button>
        <button className='flex flex-col items-center justify-center cursor-pointer' onClick={()=>navigate("/collection")}>
          <HiOutlineCollection className='w-7 h-7' /> Collections
        </button>
        <button className='flex flex-col items-center justify-center cursor-pointer' onClick={()=>navigate("/contact")}>
          <MdContacts className='w-7 h-7' /> Contact
        </button>
        <div className='relative flex flex-col items-center justify-center cursor-pointer' onClick={()=>navigate("/cart")}>
          <MdOutlineShoppingCart className='w-7 h-7 text-gray-800' />
          {getCartCount() > 0 && (
            <span className='absolute -top-1 -right-2 w-5 h-5 flex items-center justify-center bg-pink-500 text-white text-[10px] font-semibold rounded-full shadow-md'>
              {getCartCount()}
            </span>
          )}
          <span className='text-[10px] mt-1'>Cart</span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
