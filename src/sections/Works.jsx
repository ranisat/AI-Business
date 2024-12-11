import React from "react";
import { Element } from "react-scroll";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


const Works = () => {
  const works = [
    {
      name:'Problem Defination and understanding',
    },
    {
      name:'Data Collection and Preparation',
    },
    {
      name:'Deployment and Integration',
    },
    {
      name:'Collaboration and Teamwork',
    },
  ]
  return (
    <section className="pt-10  pb-10 z-10 relative">
      <Element name="How It Works">
        <div className="container">
          <div className="lg:w-[75%] w-full mx-auto">
            <h3 className="max-lg:h2 h4 leading-9 mb-10 text-center">How It Works?</h3>
          </div>
          <div className="faq-line_after w-0.5 h-3/4 absolute left-[calc(50%-1px)] top-30 -z-1 bg-gray-600 md:faq-line_after:hidden hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div className="relative flex-1 pt-5 lg:px-10">
              <div className="after:content-[''] after:absolute after:w-96 after:h-96 after:bg-blue-950 after:blur-3xl after:rotate-45 after:rounded-full after:opacity-80 after:-bottom-10 after:-z-10">
                <h6 className="mb-10 h4 leading-4">Explanation the work</h6>
                {works.map((data, index)=>(
              <div key={index} className="rounded-md shadow-md drop-shadow-md  py-8 leading-10 px-4 w-full mx-auto bg-gradient-to-r from-[#151254] to-[#280b34] mb-5 transition-all duration-500 hover:border border-transparent border-1 hover:border-r-gray-500 text-gray-400 hover:text-gray-300">
                  <div  className="flex items-center justify-between">
                    <h4 className="font-normal text-2xl ">{data.name}</h4>
                    <span><FaRegArrowAltCircleRight/></span>
                </div>
              </div>
                ))}
              </div>
            </div>
            <div className="relative flex-1 lg:pt-10 lg:px-10">
              <div className="bg-black/35 border border-gray-500 rounded-xl">
                   <h6 className="h6 py-5 px-5">Data Collection and Preparation</h6>
                   <div className="">
                    <img src="./images/brain-1.jpg" alt="" />
                   </div>
                   <p className="text-md text-gray-400 leading-6 py-4 px-5">Data Collection and Preparation are critical stages in the development of AI systems. During the data collection phase, relevant information is gathered, whether through manual processes, sensors, or online sources. This raw data is often unstructured and requires careful curation to ensure its quality and relevance.</p>
              </div>
            </div>
          </div>
          <div className="faq-line_after w-0.5 absolute left-[calc(50%-1px)] top-30 -z-1 bg-gray-600" />
        </div>
      </Element>
    </section>
  );
};

export default Works;
