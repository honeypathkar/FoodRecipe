import React from "react";
import { Link } from "react-router-dom";
import Chef from "./Images/chef.png";
import Chef2 from "./Images/chef2.png"

export default function About(props) {
  const { mode } = props;
  return (
    <div
      className="relative   flex items-center  n justify-center overflow-hidden z-50 my-28"
      style={{
        backgroundColor: mode === "light" ? "#D3C5E5" : "#161925",
        color: mode === "light" ? "dark" : "white",
      }}
    >
      <div className="relative mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row py-16">
          <div className=" relative ">
            <div className="lg:max-w-xl lg:pr-5 relative z-40">
              <p className="flex text-sm uppercase text-g1  ">About Us</p>
              <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                We make you cook
                <span
                  className="my-1 inline-block border-b-8 border-g4 px-4 font-bold text-g4 animate__animated animate__flash"
                  style={{
                    backgroundColor: mode === "light" ? "#D3C5E5" : "#161925",
                    color: mode === "light" ? "dark" : "white",
                  }}
                >
                  Better
                </span>
              </h2>
              <p className="text-base text-gray-700">
                An amazing recipe finder website where you can find any recipe
                in an instant of search or in a blink of eyes. You can add
                recipe to your favourite list so you can watch it letter if you
                want.
              </p>
              <div className="mt-10 flex flex-col items-center md:flex-row">
                <a
                  href="https://github.com/honeypatkar"
                  className={`mb-3 inline-flex h-12 w-full items-center justify-center rounded  px-6 font-medium shadow-md btn btn-outline-${mode==="light"?"dark":"light"} transition focus:outline-none md:mr-4 md:mb-0 md:w-auto`}
                  target="_blank"
                >
                  View More
                </a>
                <Link
                  to="/recipe"
                  aria-label=""
                  className="group inline-flex items-center font-semibold text-g1"
                >
                  Watch how it works
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              ></path>
            </svg>
            <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
              <img src={`${mode==="light"?Chef:Chef2}`} />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden text-9xl varien absolute top-6 left-1/4 text-g/10 z-40    ">
        About Us
      </div>
    </div>
  );
}
