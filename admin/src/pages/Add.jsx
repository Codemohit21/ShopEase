

import React, { useContext, useState } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import upload from '../assets/upload image.jpeg'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loading from '../component/Loading'

function Add() {
  let [image1,setImage1] = useState(null)
  let [image2,setImage2] = useState(null)
  let [image3,setImage3] = useState(null)
  let [image4,setImage4] = useState(null)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("Men")
  const [price, setPrice] = useState("")
  const [subCategory, setSubCategory] = useState("TopWear")
  const [bestseller, setBestSeller] = useState(false)
  const [sizes,setSizes] = useState([])
  const [loading,setLoading] = useState(false)
  let {serverUrl} = useContext(authDataContext)

  const handleAddProduct = async (e) => {
    setLoading(true)
    e.preventDefault()
    try {
      let formData = new FormData()
      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subCategory",subCategory)
      formData.append("bestseller",bestseller)
      formData.append("sizes",JSON.stringify(sizes))
      formData.append("image1",image1)
      formData.append("image2",image2)
      formData.append("image3",image3)
      formData.append("image4",image4)

      let result = await axios.post(serverUrl + "/api/product/addproduct" , formData, {withCredentials:true} )
      toast.success("Product Added Successfully")
      setLoading(false)

      if(result.data){
          setName("")
          setDescription("")
          setImage1(null)
          setImage2(null)
          setImage3(null)
          setImage4(null)
          setPrice("")
          setBestSeller(false)
          setCategory("Men")
          setSubCategory("TopWear")
      }
    } catch (error) {
       console.log(error)
       setLoading(false)
       toast.error("Add Product Failed")
    }
  }

  const images = [
    { img: image1, setter: setImage1 },
    { img: image2, setter: setImage2 },
    { img: image3, setter: setImage3 },
    { img: image4, setter: setImage4 }
  ]

  return (
    <div className='w-full min-h-screen bg-gradient-to-r from-[#f5f7fa] to-[#dfe9f3] text-gray-800 overflow-x-hidden relative'>
      <Nav/>
      <Sidebar/>

      <div className='w-full md:w-[82%] flex justify-center absolute right-0 top-[70px] md:top-[100px]'>
        <form onSubmit={handleAddProduct} className='w-full md:w-[90%] flex flex-col gap-8 py-12 px-6 md:px-12 bg-white rounded-2xl shadow-2xl'>

          <h1 className='text-3xl md:text-4xl font-bold text-gradient-to-r from-blue-700 to-yellow-500'>Add Product Page</h1>

          {/* Image Upload */}
          <div className='flex flex-col gap-4'>
            <p className='text-xl md:text-2xl font-semibold text-gray-700'>Upload Images</p>
            <div className='flex flex-wrap gap-4'>
              {images.map((item, idx)=>(
                <label key={idx} className='relative w-[70px] h-[70px] md:w-[120px] md:h-[120px] rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105'>
                  <img
                    src={item.img ? URL.createObjectURL(item.img) : upload}
                    alt=""
                    className='w-full h-full object-cover transition-all duration-300'
                  />
                  <div className='absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 flex items-center justify-center text-white text-lg md:text-xl font-semibold transition-opacity'>
                    Preview
                  </div>
                  <input type="file" hidden onChange={(e)=>item.setter(e.target.files[0])} required/>
                </label>
              ))}
            </div>
          </div>

          {/* Name & Description */}
          <div className='flex flex-col gap-2'>
            <label className='text-lg md:text-xl font-semibold text-gray-700'>Product Name</label>
            <input type="text" placeholder='Type here' className='w-full h-10 px-4 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-yellow-400 outline-none text-gray-800 placeholder-gray-400' value={name} onChange={(e)=>setName(e.target.value)} required/>
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-lg md:text-xl font-semibold text-gray-700'>Product Description</label>
            <textarea placeholder='Type here' className='w-full h-24 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-yellow-400 outline-none text-gray-800 placeholder-gray-400' value={description} onChange={(e)=>setDescription(e.target.value)} required/>
          </div>

          {/* Category & Subcategory */}
          <div className='flex flex-wrap gap-4'>
            {[
              {label:"Category", value:category, setter:setCategory, options:["Men","Women","Kids"]},
              {label:"Sub-Category", value:subCategory, setter:setSubCategory, options:["TopWear","BottomWear","WinterWear"]}
            ].map((field,index)=>(
              <div key={index} className='flex flex-col gap-2 md:w-[30%] w-full'>
                <label className='text-lg md:text-xl font-semibold text-gray-700'>{field.label}</label>
                <select className='bg-gray-100 border border-gray-300 rounded-lg text-gray-800 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-yellow-400 outline-none' value={field.value} onChange={(e)=>field.setter(e.target.value)}>
                  {field.options.map(opt=><option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className='flex flex-col gap-2'>
            <label className='text-lg md:text-xl font-semibold text-gray-700'>Product Price</label>
            <input type="number" placeholder='₹ 2000' className='w-full h-10 px-4 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-yellow-400 outline-none text-gray-800 placeholder-gray-400' value={price} onChange={(e)=>setPrice(e.target.value)} required/>
          </div>

          {/* Sizes */}
          <div className='flex flex-col gap-2'>
            <label className='text-lg md:text-xl font-semibold text-gray-700'>Product Size</label>
            <div className='flex flex-wrap gap-3'>
              {["S","M","L","XL","XXL"].map(sz=>(
                <div key={sz} className={`px-4 py-2 rounded-lg border cursor-pointer shadow-md transition-all ${sizes.includes(sz) ? "bg-blue-500 text-white border-yellow-400" : "bg-gray-100 text-gray-800 border-gray-300"} hover:scale-105`} onClick={()=>setSizes(prev=>prev.includes(sz)?prev.filter(i=>i!==sz):[...prev,sz])}>{sz}</div>
              ))}
            </div>
          </div>

          {/* Bestseller */}
          <div className='flex items-center gap-3'>
            <input type="checkbox" className='w-5 h-5 cursor-pointer' onChange={()=>setBestSeller(prev=>!prev)}/>
            <label className='text-lg md:text-xl font-semibold text-gray-700'>Add to BestSeller</label>
          </div>

          <button className='w-full md:w-[200px] px-6 py-3 rounded-lg bg-blue-600 hover:bg-yellow-400 text-white font-semibold flex items-center justify-center gap-2'>{loading ? <Loading/> : "Add Product"}</button>

        </form>
      </div>
    </div>
  )
}

export default Add





