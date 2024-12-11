import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";


const Footer = () => {
  return (
    <section className='relative pt-20 z-10'>
       <div className='absolute z-30 top-1/2 left-[calc(50%-25px)] border-blue-900 border-2 bg-black/40 rounded-full size-14  items-center justify-center lg:flex hidden'>
        <MdDashboard className='rotate-45 text-3xl'/>
       </div>
         <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1">
           <div className="lg:pt-20 pt-20 lg:pb-10 pb-10 z-10 relative serv-Bg bg-gradient-to-r from-[#22021e] to-[#0a062c]">
            <div className="px-10">
               <ul className='lg:pl-20'>
                <li className='leading-10 h6 mb-5'>Features</li>
                <li className='leading-10 h6 mb-5'>How It Works</li>
                <li className='leading-10 h6 mb-5'>Pricing</li>
                <li className='leading-10 h6 mb-5'>Help Center</li>
               </ul>
            </div>
           </div>
           <div className="relative flex-1 pt-10 lg:px-10 bg-gradient-to-r from-[#100d32] to-[#0c0644]">
            <div className="px-10">
               <div className='lg:pl-15'>
                  <h4 className='h4 mb-10'>Subscribe</h4>
                  <p className='text-gray-400'>"Unlock innovation with seamless access to cutting-edge artificial intelligence solutions."</p>
                  <div className='py-10'>
                  <form action="" className='relative'>
                   <div className="relative">
                   <input type="text" className='w-3/4 py-2 px-5 border border-gray-500 bg-black/35 rounded-full focus:outline-none' placeholder='Enter Your Email'/>
                   <span className='absolute right-36 top-2.5'><FaArrowRightLong /></span>
                   </div>
                   <div className='py-10 px-5'>
                    <ul className='flex items-center justify-start gap-5'>
                      <li className='text-xl rounded-full bg-black/50 border border-gray-400 p-2 transition-all duration-500 hover:bg-blue-950 shadow-md hover:shadow-blue-700'>
                        <a href="" className='text-gray-300'><FaInstagram /></a>
                      </li>
                      <li className='text-xl rounded-full bg-black/50 border border-gray-400 p-2'>
                        <a href="" className='text-gray-300'><FaWhatsapp /></a>
                      </li>
                      <li className='text-xl rounded-full bg-black/50 border border-gray-400 p-2'>
                        <a href="" className='text-gray-300'><FaTelegramPlane /></a>
                      </li>
                      <li className='text-xl rounded-full bg-black/50 border border-gray-400 p-2'>
                        <a href="" className='text-gray-300'><CiFacebook /></a>
                      </li>
                    </ul>
                   </div>
                  </form>
                </div>
               </div>
           </div>
           </div>
         </div>
         <div className='w-full py-3 border-t border-gray-400 bg-blue-950/50'>
             <div className="flex items-center justify-between">
             <div className="text-center mx-auto">
             <p className='text-gray-300 '>&copy; copyright all right reserved.</p>
             </div>
             <div className="mx-auto">
                <ul className="flex items-start gap-10">
                  <li><a href="" className='text-sm text-gray-300 transition-all duration-500 hover:text-blue-400'>Privacy Policy</a></li>
                  <li><a href="" className='text-sm text-gray-300 transition-all duration-500 hover:text-blue-400'>Terms & Services</a></li>
                </ul>
             </div>
             </div>
         </div>
    </section>
  )
}

export default Footer
