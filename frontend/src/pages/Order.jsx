// import React, { useContext, useEffect, useState } from 'react'
// import Title from '../component/Title'
// import { shopDataContext } from '../context/ShopContext'
// import { authDataContext } from '../context/authContext'
// import axios from 'axios'

// function Order() {
//     let [orderData,setOrderData] = useState([])
//     let {currency} = useContext(shopDataContext)
//     let {serverUrl} = useContext(authDataContext)

//     const loadOrderData = async () => {
//        try {
//       const result = await axios.post(serverUrl + '/api/order/userorder',{},{withCredentials:true})
//       if(result.data){
//         let allOrdersItem = []
//         result.data.map((order)=>{
//           order.items.map((item)=>{
//             item['status'] = order.status
//             item['payment'] = order.payment
//             item['paymentMethod'] = order.paymentMethod
//             item['date'] = order.date
//             allOrdersItem.push(item)
//           })
//         })
//         setOrderData(allOrdersItem.reverse())
//       }
//     } catch (error) {
//       console.log(error)
//     }
//     }

// useEffect(()=>{
//  loadOrderData()
// },[])


//   return (
//     <div className='w-[99vw] min-h-[100vh] p-[20px] pb-[150px]  overflow-hidden bg-gradient-to-l from-[#141414] to-[#0c2025] '>
//       <div className='h-[8%] w-[100%] text-center mt-[80px]'>
//         <Title text1={'MY'} text2={'ORDER'} />
//       </div>
//       <div className=' w-[100%] h-[92%] flex flex-wrap gap-[20px]'>
//         {
//          orderData.map((item,index)=>(
//             <div key={index} className='w-[100%] h-[10%] border-t border-b '>
//                 <div className='w-[100%] h-[80%] flex items-start gap-6 bg-[#51808048]  py-[10px] px-[20px] rounded-2xl relative '>
//                     <img src={item.image1} alt="" className='w-[130px] h-[130px] rounded-md '/>
//                     <div className='flex items-start justify-center flex-col gap-[5px]'>
//                     <p className='md:text-[25px] text-[20px] text-[#f3f9fc]'>{item.name}</p>
//                     <div className='flex items-center gap-[8px]   md:gap-[20px]'>
//                         <p className='md:text-[18px] text-[12px] text-[#aaf4e7]'>{currency} {item.price}</p>
//                       <p className='md:text-[18px] text-[12px] text-[#aaf4e7]'>Quantity: {item.quantity}</p>
//                       <p className='md:text-[18px] text-[12px] text-[#aaf4e7]'>Size: {item.size}</p>
//                     </div>
//                     <div className='flex items-center'>
//                      <p className='md:text-[18px] text-[12px] text-[#aaf4e7]'>Date: <span className='text-[#e4fbff] pl-[10px] md:text-[16px] text-[11px]'>{new Date(item.date).toDateString()}</span></p>
//                     </div>
//                     <div className='flex items-center'>
//                       <p className='md:text-[16px] text-[12px] text-[#aaf4e7]'>Payment Method :{item.paymentMethod}</p>
//                     </div>
//                     <div className='absolute md:left-[55%] md:top-[40%] right-[2%] top-[2%]  '>
//                         <div className='flex items-center gap-[5px]'>
//                       <p className='min-w-2 h-2 rounded-full bg-green-500'></p> 
//                       <p className='md:text-[17px] text-[10px] text-[#f3f9fc]'>{item.status}</p>

//                     </div>

//                     </div>
//                      <div className='absolute md:right-[5%] right-[1%] md:top-[40%] top-[70%]'> 
//                     <button className='md:px-[15px] px-[5px] py-[3px] md:py-[7px] rounded-md bg-[#101919] text-[#f3f9fc] text-[12px] md:text-[16px] cursor-pointe active:bg-slate-500' onClick={loadOrderData} >Track Order</button>
//                   </div>
//                     </div>
//                 </div>
               
//             </div>
//          ))
//         }
//       </div>
//     </div>
//   )
// }

// export default Order

///////////ui2.//////////////////////////////


import React, { useContext, useEffect, useState } from 'react';
import Title from '../component/Title';
import { shopDataContext } from '../context/ShopContext';
import { authDataContext } from '../context/authContext';
import axios from 'axios';

function Order() {
  const [orderData, setOrderData] = useState([]);
  const { currency } = useContext(shopDataContext);
  const { serverUrl } = useContext(authDataContext);

  const loadOrderData = async () => {
    try {
      const result = await axios.post(`${serverUrl}/api/order/userorder`, {}, { withCredentials: true });
      if (result.data) {
        const allOrdersItem = [];
        result.data.forEach(order => {
          order.items.forEach(item => {
            allOrdersItem.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date
            });
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, []);

  return (
    <div className='w-full min-h-screen p-5 pb-[150px] bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3]'>
      <div className='text-center mt-20'>
        <Title text1={'MY'} text2={'ORDER'} />
      </div>

      <div className='w-full flex flex-col gap-5 mt-5'>
        {orderData.map((item, index) => (
          <div key={index} className='w-full border border-gray-200 rounded-2xl shadow-xl bg-white p-4 flex flex-col md:flex-row items-start gap-4'>
            
            {/* Product Image */}
            <img src={item.image1} alt={item.name} className='w-[130px] h-[130px] rounded-md object-cover' />

            {/* Product Details */}
            <div className='flex flex-col flex-1 gap-2 text-gray-800'>
              <p className='text-lg md:text-2xl font-semibold'>{item.name}</p>
              <div className='flex flex-wrap gap-4 text-sm md:text-base text-gray-700'>
                <p>{currency} {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Size: {item.size}</p>
              </div>
              <p className='text-sm md:text-base text-gray-500'>
                Date: <span className='text-gray-800'>{new Date(item.date).toDateString()}</span>
              </p>
              <p className='text-sm md:text-base text-gray-500'>Payment Method: {item.paymentMethod}</p>
            </div>

            {/* Status */}
            <div className='flex flex-col items-end justify-between'>
              <div className='flex items-center gap-2 mb-2'>
                <span className={`w-3 h-3 rounded-full ${item.status === 'Delivered' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                <p className='text-sm md:text-base font-medium text-gray-800'>{item.status}</p>
              </div>
              <button 
                onClick={loadOrderData} 
                className='px-4 py-2 rounded-md bg-pink-500 text-white text-sm md:text-base hover:bg-pink-600 transition-colors'
              >
                Track Order
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;



