import React, { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import clsx from "clsx";

const Header = () => {
  const [hascroll, setHasScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHasScroll(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({ title }) => (
    <LinkScroll
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      onClick={() => setIsOpen(false)}
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1
max-lg:my-4 max-lg:h5"
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        " py-4 px-4 z-30 fixed top-0 left-0 w-full transition-all duration-500 max-lg:py-4",
        hascroll &&
          "py-2 bg-black/85 backdrop-blur-[8px] border-b border-blue-500/40"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <LinkScroll to="hero" offset={-100} spy smooth>
              <h3 className="text-blue-500 uppercase leading-4 text-4xl font-bold transition-transform duration-500 cursor-pointer">
                infax
              </h3>
            </LinkScroll>
          </div>
          <div>
            <nav className="lg:block hidden">
              <ul className="flex max-lg:block max-lg:px-12 gap-8">
                <li className="nav-li">
                  <NavLink title="features" />
                </li>
                <li className="nav-li font-sam">
                  <NavLink title="How It Works" />
                </li>
                <li className="nav-li font-sam">
                <NavLink title="pricing" />
                </li>
                <li className="nav-li font-sam">
                <NavLink title="faq" />
                </li>
                <li className="nav-li md:font-sam h6">
                    <NavLink title="Help center" />
                </li>
              </ul>
            </nav>
          </div>
          {isOpen ? (
            <div className="md:block">
              <nav className="w-full sizeBar">
                <ul className="flex max-lg:block max-lg:px-12 gap-8">
                  <li className="nav-li md:font-sam">
                  <NavLink title="features" />
                  </li>
                  <li className="nav-li md:font-sam">
                  <NavLink title="How It Works" />
                  </li>
                  <li className="nav-li md:font-sam">
                  <NavLink title="pricing" />
                  </li>
                  <li className="nav-li md:font-sam">
                    <NavLink title="faq" />
                  </li>
                  <li className="nav-li md:font-sam h6">
                    <NavLink title="service" />
                  </li>
                </ul>
              </nav>
            </div>
          ) : null}
          <div className="w-auto text-right">
            <button
              type="button"
              className="btn-effect relative text-white bg-blue-700 z-10 focus:ring-4 focus:outline-none shadow-lg shadow-black-500/50 font-medium text-[18px] px-4 py-1.5 text-center rounded-full transition-all duration-500 overflow-hidden border-2 border-blue-800 "
            >
              Log In
            </button>
          </div>
          <button
            className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={`./images/${isOpen ? "close" : "magic"}.svg`}
              alt="magic"
              className="size-1/2 object-contain"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
