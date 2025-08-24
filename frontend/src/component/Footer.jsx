

import React from 'react'
import logo from "../assets/logo.png"

function Footer() {
  return (
    <div className="w-full bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + About */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="ShopEase Logo" className="w-10 h-10" />
            <h1 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              ShopEase
            </h1>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            ShopEase is your all-in-one fashion destination – offering curated
            collections, exclusive deals, and fast delivery, all designed to
            make your shopping effortless & stylish.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col items-start md:items-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Company</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="cursor-pointer hover:text-pink-500">Home</li>
            <li className="cursor-pointer hover:text-pink-500">About Us</li>
            <li className="cursor-pointer hover:text-pink-500">Delivery</li>
            <li className="cursor-pointer hover:text-pink-500">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start md:items-end">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Get in Touch</h2>
          <ul className="space-y-2 text-gray-600">
            <li>+91-9876543210</li>
            <li>contact@shopease.com</li>
            <li className="hidden md:block">+1-123-456-7890</li>
            <li className="hidden md:block">support@shopease.com</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-300"></div>

      {/* Bottom Bar */}
      <div className="w-full py-4 text-center text-gray-600 text-sm">
        © 2025 ShopEase – All Rights Reserved
      </div>
    </div>
  )
}

export default Footer


