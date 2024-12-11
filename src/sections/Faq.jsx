import React from 'react'
import { Element } from 'react-scroll'
import { CiSearch } from "react-icons/ci";
import { faq } from "../constant"
import FaqItem from '../componets/FaqItem';

const Faq = () => {
  return (
    <section className="pt-10  pb-10 z-10 relative">
      <Element name="faq">
        <div className="container">
          <div className="lg:faq-line_after w-0.5 md:h-[80%] h-[100%] absolute left-[calc(50%-1px)] top-30 -z-1 bg-gray-600 md:faq-line_after:hidden hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div className="relative flex-1 pt-10 lg:px-10">
              <div className="after:content-[''] after:absolute after:w-96 after:h-96 after:bg-blue-950 after:blur-3xl after:rotate-45 after:rounded-full after:opacity-80 after:-bottom-10 after:-z-10">
                <h6 className="mb-10 h4 leading-4">Frequently Asked Question</h6>
                <p className='text-xl leading-7 text-left text-gray-400 tracking-normal'>Explore Artificaial Intelligent capabilities and applications with our comprehensive FAQ, answering your most common queries effortlessly.</p>
                <div className='py-10'>
                  <form action="" className='relative'>
                   <div className="relative">
                   <input type="text" className='w-3/4 py-1.5 px-5 border border-gray-500 bg-transparent rounded-full focus:outline-none' placeholder='Search for questions'/>
                   <span className='absolute right-36 top-2'><CiSearch/></span>
                   </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="relative flex-1 pt-10 lg:pt-10 lg:px-10">
            {faq.map((item)=>(
                  <FaqItem key={item.id} item={item}/>
                ))}
            </div>
          </div>
          <div className="faq-line_after w-0.5 absolute left-[calc(50%-1px)] top-30 -z-1 bg-gray-600" />
        </div>
      </Element>
    </section>
  )
}

export default Faq
