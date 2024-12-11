import React, { useState } from "react";
import clsx from "clsx";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const FaqItem = ({ item }) => {
  const [activeId, setActiveId] = useState(null);
  const active = activeId === item.id;

  return (
      <div className="relative z-2 mb-12">
        <div className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
          onClick={() => {
            setActiveId(activeId === item.id ? null : item.id);
          }} >
          <div className="flex-1">
            <div className={clsx(
                "h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
                active && "max-lg:text-blue-400")}>
              {item.question}
            </div>
          </div>
          <div className={clsx(
              "faq-slideIcon relative flex size-10 items-center justify-center rounded-full border-2 border-blue-500 shadow-400 transition-all duration-500 group-hover:border-blue-500",
              active && "before:bg-blue-500 after:rotate-0 after:bg-blue-500"
            )} >
            <div className="gap-4 size-11/12 rounded-full shadow-300" />
          </div>
        </div>

        <SlideDown>
          {activeId === item.id && (
            <div className="body-3 px-7 py-3.5">{item.answer}</div>
          )}
        </SlideDown>

        <div className={clsx(
            "gap-5 -bottom-7 -top-7 left-0 right-0 -z-10 rounded-3xl opacity-0 transition-opacity duration-500 absolute", active && "opacity-100 absolute"
          )}
        >
          <div className="gap-4 absolute inset-0.5 -z-10 rounded-3xl border border-blue-400 bg-blue-500/20" />
          <div className="absolute left-8 top-0 h-0.5 w-40 bg-blue-500" />
        </div>
      </div>
  );
};

export default FaqItem;
