import React from "react";
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <section className="z-0 relative pt-32 pb-5 heroSec">
      <Element name='hero'>
      <div className="container">
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-2">
          <div className="order-last lg:order-first py-10 md:py-3">
            <img src="./images/rbt-1.png" alt="" className="mx-auto"/>
          </div>
          <div className="relative order-first lg:order-last">
            <div className="z-20">
              <h3 className="h2 leading-9 mb-10">
                Start your enterprise with AI in just a few minutes!
              </h3>
              <p className="text-[20px] text-gray-400 leading-8 mb-10">
                Begin your AI-driven enterprise swiftly-initiate with advanced
                technology in just a few minutes for enhanced efficiency.
              </p>
              <div className="flex items-center gap-4">
             <button type="button" className="btn-effect relative text-white bg-blue-700 z-10 focus:ring-4 focus:outline-none shadow-lg shadow-black-500/50 font-medium text-[18px] px-4 py-1.5 text-center rounded-full transition-all duration-500 overflow-hidden border-2 border-blue-800">Get Started</button>
           </div>
            </div>
          </div>
        </div>
      </div>
      </Element>
    </section>
  );
};

export default Hero;
