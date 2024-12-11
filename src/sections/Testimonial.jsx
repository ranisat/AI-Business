import React from 'react'
import { testimonial } from '../constant'

const Testimonial = () => {

  return (
    <section className='relative pt-20 py-10'>
      <div className="container">
      <div className="lg:w-[75%] w-full mx-auto">
          <h3 className="max-lg:h2 h3 leading-9 mb-20 text-center">
            What about say?
          </h3>
        </div>
         <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-3 mt-10">
            {testimonial.map((testimonial)=>(
               <div key={testimonial.id} className='p-5 relative z-10 border border-gray-800 border-t-0 bg-gradient-to-t to-[#0e0c15] from-[#2c0d2b] hover:bg-gray-800 rounded-xl transition-all duration-700 hover:border-blue-500 shadow-xl hover:shadow-purple-950 hover:border-t-blue-500 hover:scale-y-90 overflow-hidden'>
                <p className='h5 mb-0 text-blue-400'>"</p>
                 <h4>{testimonial.content}</h4>
                 <div className='flex items-center mt-5'>
                  <div className='rounded-full border-2 border-gray-600 p-0.5 overflow-hidden'>
                    <img src={testimonial.image} alt={testimonial.content} className='size-12 object-cover bg-center rounded-full'/>
                  </div>
                  <div className='ml-2'>
                    <p className='text-[16px] tracking-wide'>{testimonial.author}</p>
                    <p className='text-blue-400 text-sm'>{testimonial.pro}</p>
                  </div>
                 </div>
               </div>
            ))}
         </div>
      </div>
    </section>
  )
}

export default Testimonial
