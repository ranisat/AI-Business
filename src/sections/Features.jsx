import React from "react";
import { Element } from "react-scroll";
import { features } from "../constant";
import { MdKeyboardArrowRight } from "react-icons/md";

const Features = () => {
  return (
    <section className="lg:pt-20 pt-10 lg:pb-10 pb-10 z-10 relative">
      <Element name='features'>
      <div className="container">
        <div className="lg:w-[75%] w-full mx-auto">
          <h3 className="max-lg:h2 h3 leading-9 mb-10 text-center">
            How to use AI & Grow your business
          </h3>
        </div>

        <div className="featureBx grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 md:gap-4">
           {features.map(({id,icon,name,desc,content})=>(
            <div key={id} className="featureSec relative z-10 lg:px-7 pt-12 pb-3 h-96 p-5 mb-10 border rounded-xl rounded-tr-[40px] bg-[#030f3c]">
              <h2 className="h5 mb-10 leading-5">{name}</h2>
              <p className="text-gray-400 text-xl font-normal">{desc}</p>
              <div className="mt-20">
              <div className="flex items-center justify-between">
                <img src={icon} alt="icon" className="w-12 h-12 rounded-md border border-blue-800 font-bold bg-gray-900 transition-all duration-500 shadow-md hover:shadow-blue-900  p-2"/>
                <button type="button"className="transition-all duration-500 hover:text-blue-400">{content}
                </button>
              </div>
              </div>
            </div>
           ))}
        </div>
      </div>
      </Element>
    </section>
  );
};

export default Features;
