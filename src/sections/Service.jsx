import React from 'react'
import { Element } from 'react-scroll'
const Service = () => {
  return (
    <section className="lg:pt-30 pt-20 lg:pb-10 pb-10 z-10 relative serv-Bg bg-gradient-to-r from-[#200025] to-[#00053c]">
    <Element name='Help center'>
    <div className="container">
      <div className="w-full max-lg-w-[75%] mx-auto">
        <h3 className="h2 leading-9 mb-10 text-center">
          Prepared to Launch Your AI-as-a Service Venture?
        </h3>
        <p className='text-xl leading-5 text-center text-gray-400'>Ready to Launch your AI-as-a-Service venture, pioneering innovation and excellence.</p>
      </div>
      <div className='text-center mt-10'>
      <button type="button" className="btn-effect relative text-white bg-blue-700 z-10 focus:ring-4 focus:outline-none shadow-lg shadow-black-500/50 font-medium text-[18px] px-4 py-1.5 text-center rounded-full transition-all duration-500 overflow-hidden border-2 border-blue-800">Start Now</button>
      </div>
    </div>
    </Element>
    </section>
  )
}

export default Service
