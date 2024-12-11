import React, { useState } from "react";
import { Element } from "react-scroll";
import clsx from "clsx";
import { plans } from "../constant";
import { FaRegCheckCircle } from "react-icons/fa";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);
  return (
    <section className="lg:pt-30 pt-20 lg:pb-10 pb-10 z-20 relative priceBg">
      <Element name="pricing">
        <div className="container">
          <div className="lg:w-[75%] w-full mx-auto">
            <h3 className="max-lg:h2 h4 leading-9 mb-8 text-center">
              Strategy your plan price
            </h3>
            <p className="text-md leading-5 text-center mb-8">
              Designing Strategies with tailored services, ensuring value and
              efficacy within a budget-friendly framework for client's needs.
            </p>
          </div>
          <div className="relative bg-blue-950 flex mx-auto rounded-full  w-1/5 z-10 backdrop-blur-[6px] max-lg:w-[310px] max-md:w-[380px]">
            <button
              className={clsx("priceBtn", monthly && "text-red-500")}
              onClick={() => setMonthly(true)}
            >
              Monthly
            </button>
            <button
              className={clsx("priceBtn", !monthly && "text-blue-400")}
              onClick={() => setMonthly(false)}
            >
              Yearly
            </button>
            <div
              className={clsx(
                "g4 rounded-14 before:h-100 priceBtn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                !monthly && "translate-x-full"
              )}
            ></div>
          </div>
          {/* Pricing section */}

          <div className="relative mt-12 flex items-center scroll-hide overflow-y-scroll justify-center gap-5">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 lg:p-7 p-4  rounded-3xl lg:w-[calc(33.33%+2px)]" >
                {index === 1 && <div className="gap-2 rounded-3xl" />}
                <div
                  className={clsx(
                    "relative flex flex-col items-center",
                    index === 1 ? "pt-12" : "pt-18"
                  )}
                >
                  <div
                    className={clsx(
                      "rounded-3xl relative mx-auto ",
                      index === 1
                        ? "border-gray-400 text-blue-400"
                        : "border-red-400 text-green-400"
                    )}
                  ></div>
                  <div className="mb-12">
                     <h6 className="h4">{plan.name}</h6>
                  </div>
                  <div className="relative mb-16">
                    <p className="leading-6 text-[16px] text-gray-300 font-normal">{plan.desc}</p>
                  </div>
                  <div className="relative flex items-center mb-10">
                    <div className="h2">
                    $ {plan.price}
                    </div>
                    <div className="ml-2">
                      /MO
                    </div>
                  </div>
                  <div className="w-full border rounded-full shadow-lg shadow-black bg-blue-950/50 text-center py-1 text-xl">
                    <button>{plan.button}</button>
                  </div>
                  <div className="py-10 relative">
                    <ul className="">
                      {plan.features.map((feature) =>(
                        <li key={feature} className="flex items-center justify-start border-b border-b-gray-500 py-3">
                          <FaRegCheckCircle className="mr-2 text-gray-300"/>
                          <p className="flex-1 text-gray-300">{feature}</p>
                        </li>
                      ))}
                      <li>
                            
                      </li>
                    </ul>
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

export default Pricing;
