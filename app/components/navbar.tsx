"use client";

import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../store/MainStore";
import { initialType } from "../store/MainStore";

const Navbar = () => {
  
  const {cartState} = useContext(CartContext);

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-gray-400 px-4 py-6 sticky top-0 bg-white z-30" 
    >
      <Link href={"/"} passHref>
        <div className="flex">
          <p className="text-xl font-bold font-serif">GentleApparels</p>
        </div>
      </Link>
      <nav>
        <section className=" flex xl:hidden">
          <div
            className=" space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className=" absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className=" flex flex-col items-center justify-between min-h-[250px]">
              <li className="font-sans block mt-4 lg:inline-block lg:mt-0 mb-2 lg:ml-6 align-middle text-black hover:text-gray-700">
                <Link href="/cart" role="button" className="relative flex" passHref onClick={()=>{setIsNavOpen(false)}}>
                  <svg
                    className="flex-1 w-8 h-8 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                  </svg>
                  <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                  {cartState?.totalItems}
                  </span>
                </Link>
              </li>
              <li className="border-b border-gray-400 my-4 uppercase">
                <Link href="/kids" onClick={()=>{setIsNavOpen(false)}}>Kids</Link>
              </li>
              <li className="border-b border-gray-400 my-4 uppercase">
                <Link href="/male" onClick={()=>{setIsNavOpen(false)}}>Male</Link>
              </li>
              <li className="border-b border-gray-400 my-4 uppercase">
                <Link href="/female" onClick={()=>{setIsNavOpen(false)}}>Female</Link>
              </li>
              {/* <li className="border-b border-gray-400 my-4 uppercase">
                <a href="/contact">All-Products</a>
              </li> */}

              <div className="flex mx-10 border rounded mt-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-[250px]"
                />
                <button>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </ul>
          </div>
        </section>

        <ul className="hidden space-x-8 xl:flex">
          <div className="flex px-6 mx-4">
            <li>
              <Link href="/female" className="px-6 text-lg font-semibold">
                Female
              </Link>
            </li>
            <li>
              <Link href="/male" className="px-6 text-lg font-semibold">
                Male
              </Link>
            </li>
            <li>
              <Link href="/kids" className="px-6 text-lg font-semibold">
                Kids
              </Link>
            </li>
            <li>
              {/* <Link href="" className="px-6 text-lg font-semibold">
                All Products
              </Link> */}
            </li>
          </div>

          <div className="flex mx-10 border rounded">
            <input type="text" placeholder="Search..." className="w-[250px]" />
            <button>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>

          <div className="px-10" >
            <li className="font-sans block mt-6 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
              <Link href="/cart" role="button" className="relative flex" passHref>
                <svg
                  className="flex-1 w-8 h-8 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                  {cartState?.totalItems}
                </span>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
